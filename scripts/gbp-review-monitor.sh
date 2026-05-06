#!/usr/bin/env bash
# Public review monitor for both Axle Towing GBP listings.
# Runs as cron (suggested: hourly). On new review detected (rating delta or count delta),
# writes a snapshot to .logs/reviews-new/ and pings Julian via iMessage.
#
# Doesn't require GBP API access — uses public Maps page scraping.
# Once GBP API is wired up, swap to mybusiness.googleapis.com/v4/accounts/.../locations/.../reviews.
set -euo pipefail

REPO="$(cd "$(dirname "$0")/.." && pwd)"
LOG_DIR="${REPO}/.logs/reviews"
NEW_DIR="${REPO}/.logs/reviews-new"
mkdir -p "$LOG_DIR" "$NEW_DIR"
TS="$(date +%Y%m%d-%H%M)"

# Locations to watch
declare -A LOCATIONS=(
  ["apache-junction"]="https://www.google.com/maps/search/Axle+Towing+%26+Impound+Apache+Junction+AZ"
  ["phoenix"]="https://www.google.com/maps/search/Axle+Towing+%26+Impound+320+E+Pioneer+St+Phoenix+AZ"
  ["yelp-aj"]="https://www.yelp.com/biz/axle-towing-and-impound-apache-junction"
)

ALERT_LINES=()

for key in "${!LOCATIONS[@]}"; do
  url="${LOCATIONS[$key]}"
  out="${LOG_DIR}/${key}-${TS}.json"

  # Use Firecrawl scrape via httpie/curl. Firecrawl handles anti-bot for us.
  # Fall back to raw curl if Firecrawl key missing.
  if [[ -n "${FIRECRAWL_API_KEY:-}" ]]; then
    payload=$(jq -n --arg u "$url" '{url: $u, formats: ["markdown"], onlyMainContent: false}')
    body=$(curl -s -X POST "https://api.firecrawl.dev/v1/scrape" \
      -H "Authorization: Bearer ${FIRECRAWL_API_KEY}" \
      -H "Content-Type: application/json" \
      -d "$payload" 2>/dev/null || echo '{}')
    md=$(echo "$body" | python3 -c "import json,sys; d=json.load(sys.stdin); print((d.get('data') or {}).get('markdown','') or d.get('markdown',''))" 2>/dev/null || echo "")
  else
    md=$(curl -s -A "Mozilla/5.0" "$url" 2>/dev/null | python3 -c "
import sys, re
html = sys.stdin.read()
# crude markdown-ish extraction from raw HTML
text = re.sub(r'<[^>]+>', ' ', html)
text = re.sub(r'\s+', ' ', text)
print(text[:5000])
" 2>/dev/null || echo "")
  fi

  if [[ -z "$md" ]]; then
    echo "WARN: empty scrape for $key" >&2
    continue
  fi

  # Extract rating + review count
  rating=$(echo "$md" | grep -oE '[0-9]\.[0-9](?= stars)' | head -1 || echo "")
  if [[ -z "$rating" ]]; then
    rating=$(echo "$md" | grep -oE '\b[1-5]\.[0-9]\b' | head -1 || echo "")
  fi
  review_count=$(echo "$md" | grep -oE '[0-9]+\s*reviews?' | head -1 | grep -oE '[0-9]+' || echo "")

  python3 - <<EOF
import json, datetime
data = {
  "ts": "${TS}",
  "ts_iso": datetime.datetime.utcnow().isoformat() + "Z",
  "location_key": "$key",
  "url": "$url",
  "rating": "$rating",
  "review_count": "$review_count"
}
open("$out", "w").write(json.dumps(data, indent=2))
EOF

  # Compare to previous snapshot
  prev=$(ls -1t "${LOG_DIR}"/${key}-*.json 2>/dev/null | sed -n '2p' || echo "")
  if [[ -n "$prev" ]]; then
    prev_rating=$(python3 -c "import json; print(json.load(open('$prev')).get('rating',''))" 2>/dev/null)
    prev_count=$(python3 -c "import json; print(json.load(open('$prev')).get('review_count',''))" 2>/dev/null)
    if [[ -n "$rating" && -n "$prev_rating" && "$rating" != "$prev_rating" ]]; then
      ALERT_LINES+=("$key: rating moved $prev_rating -> $rating")
      cp "$out" "${NEW_DIR}/${key}-${TS}-rating-change.json"
    fi
    if [[ -n "$review_count" && -n "$prev_count" && "$review_count" != "$prev_count" ]]; then
      delta=$((review_count - prev_count))
      ALERT_LINES+=("$key: review count moved $prev_count -> $review_count (delta $delta)")
      cp "$out" "${NEW_DIR}/${key}-${TS}-count-change.json"
    fi
  fi
done

# Alert if any changes
if [[ ${#ALERT_LINES[@]} -gt 0 ]]; then
  msg="GBP REVIEW MONITOR ALERT — Axle Towing (${TS}):
$(printf '%s\n' "${ALERT_LINES[@]}")

Snapshots: ${NEW_DIR}/"
  if command -v god >/dev/null 2>&1; then
    god mac send "+16195090699" "$msg" 2>/dev/null || echo "$msg" >&2
  else
    echo "$msg" >&2
  fi
fi

# Trim old snapshots (keep last 200 per location)
for key in "${!LOCATIONS[@]}"; do
  ls -1t "${LOG_DIR}"/${key}-*.json 2>/dev/null | tail -n +201 | xargs -r rm -f
done

echo "Snapshot complete: $TS (${#ALERT_LINES[@]} alerts)"
