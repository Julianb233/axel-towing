#!/usr/bin/env bash
# SEMrush daily snapshot for axletowing.com
#
# Pulls domain_rank + domain_organic from SEMrush and competitor overviews,
# writes a JSON snapshot matching the schema dashboard/data/semrush-snapshots/<DATE>.json
# already uses (consumers: dashboard SEO pages + auditing scripts).
#
# Cron (agent2): 0 6 * * * /opt/agency-workspace/axel-towing/scripts/semrush-snapshot.sh
#
# History: missing for ~5 weeks (broken cron, see AI-8982). Restored 2026-04-30.

set -uo pipefail

cd "$(dirname "$0")/.."
umask 002

DOMAIN="axletowing.com"
DATABASE="us"
DATE=$(date +%Y-%m-%d)
SNAPSHOT_DIR="dashboard/data/semrush-snapshots"
LOG_FILE="scripts/semrush-cron.log"
OUT_JSON="${SNAPSHOT_DIR}/${DATE}.json"

# Competitors named in website/src/lib/city-seo-data.ts + AI Citation Baseline 2026-03-23
COMPETITORS=(
  "phoenixtowtruck.com"
  "allcitytowing.net"
  "allvalleyimpound.com"
  "azimpound.com"
)

mkdir -p "$SNAPSHOT_DIR"

log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# Resolve API key — try 1Password, fall back to fleet-shared key
SEMRUSH_API_KEY="${SEMRUSH_API_KEY:-}"
if [[ -z "$SEMRUSH_API_KEY" ]] && command -v op >/dev/null 2>&1; then
  SEMRUSH_API_KEY=$(op item get "SEMRUSH_API_KEY" --vault "API-Keys" --fields label=credential --reveal 2>/dev/null || true)
fi
SEMRUSH_API_KEY="${SEMRUSH_API_KEY:-b38f828757c093b9471f8695b743498e}"

if [[ -z "$SEMRUSH_API_KEY" ]]; then
  log "ERROR: SEMRUSH_API_KEY not set and 1Password lookup failed"
  exit 1
fi

log "=== SEMrush snapshot started for ${DOMAIN} (${DATE}) ==="

# ── Pull domain_rank (overview) ──
TMP_OV=$(mktemp)
curl -fsS "https://api.semrush.com/?key=${SEMRUSH_API_KEY}&type=domain_rank&domain=${DOMAIN}&database=${DATABASE}&export_columns=Dn,Rk,Or,Ot,Oc,Ad,At,Ac" -o "$TMP_OV" 2>>"$LOG_FILE"
OV_RC=$?
if [[ $OV_RC -ne 0 ]] || [[ ! -s "$TMP_OV" ]] || head -1 "$TMP_OV" | grep -qiE "ERROR|Validation"; then
  log "ERROR: domain_rank fetch failed (rc=$OV_RC): $(head -1 "$TMP_OV" 2>/dev/null)"
  rm -f "$TMP_OV"
  exit 1
fi
log "domain_rank fetched ($(wc -l < "$TMP_OV") lines)"

# ── Pull domain_organic (top 500 keywords) ──
TMP_OR=$(mktemp)
curl -fsS "https://api.semrush.com/?key=${SEMRUSH_API_KEY}&type=domain_organic&domain=${DOMAIN}&database=${DATABASE}&display_limit=500&export_columns=Ph,Po,Nq,Cp,Co,Ur,Tr" -o "$TMP_OR" 2>>"$LOG_FILE"
if [[ ! -s "$TMP_OR" ]] || head -1 "$TMP_OR" | grep -qiE "ERROR|Validation"; then
  log "WARN: domain_organic fetch failed (non-fatal): $(head -1 "$TMP_OR" 2>/dev/null)"
  : > "$TMP_OR"
fi
log "domain_organic fetched ($(wc -l < "$TMP_OR") lines)"

# ── Pull competitor overviews ──
TMP_COMPS_DIR=$(mktemp -d)
for comp in "${COMPETITORS[@]}"; do
  out="${TMP_COMPS_DIR}/${comp}.csv"
  curl -fsS "https://api.semrush.com/?key=${SEMRUSH_API_KEY}&type=domain_rank&domain=${comp}&database=${DATABASE}&export_columns=Dn,Rk,Or,Ot,Oc,Ad,At,Ac" -o "$out" 2>>"$LOG_FILE"
  if [[ ! -s "$out" ]] || head -1 "$out" | grep -qiE "ERROR|Validation"; then
    log "  ${comp}: SKIP ($(head -1 "$out" 2>/dev/null))"
    rm -f "$out"
  else
    log "  ${comp}: OK"
  fi
  sleep 0.3
done

# ── Build JSON snapshot ──
python3 - "$DATE" "$DOMAIN" "$TMP_OV" "$TMP_OR" "$TMP_COMPS_DIR" "$OUT_JSON" <<'PYEOF'
import csv, io, json, os, sys

date_, domain, ov_path, or_path, comps_dir, out_path = sys.argv[1:7]

def parse_csv(path):
    try:
        with open(path) as fh:
            text = fh.read().strip()
        if not text:
            return []
        return list(csv.DictReader(io.StringIO(text), delimiter=";"))
    except Exception:
        return []

def cast(v, t=float, default=0):
    try: return t(v)
    except: return default

ov_rows = parse_csv(ov_path)
overview = {}
if ov_rows:
    r = ov_rows[0]
    overview = {
        "rank": cast(r.get("Rank", 0), int),
        "organicKeywords": cast(r.get("Organic Keywords", 0), int),
        "organicTraffic": cast(r.get("Organic Traffic", 0), int),
        "organicCost": cast(r.get("Organic Cost", 0), int),
        "adwordsKeywords": cast(r.get("Adwords Keywords", 0), int),
        "adwordsTraffic": cast(r.get("Adwords Traffic", 0), int),
        "adwordsCost": cast(r.get("Adwords Cost", 0), int),
    }

kws = []
for row in parse_csv(or_path):
    kws.append({
        "keyword": row.get("Keyword", ""),
        "position": cast(row.get("Position", 0), int),
        "volume": cast(row.get("Search Volume", 0), int),
        "cpc": cast(row.get("CPC", 0), float),
        "url": row.get("URL", ""),
        "traffic": cast(row.get("Traffic (%)", 0), float),
        "trafficCost": 0,
        "competition": cast(row.get("Competition", 0), float),
        "results": 0,
    })

competitors = {}
if os.path.isdir(comps_dir):
    for fn in os.listdir(comps_dir):
        if not fn.endswith(".csv"): continue
        comp = fn[:-4]
        rows = parse_csv(os.path.join(comps_dir, fn))
        if rows:
            r = rows[0]
            competitors[comp] = {
                "rank": cast(r.get("Rank", 0), int),
                "organicKeywords": cast(r.get("Organic Keywords", 0), int),
                "organicTraffic": cast(r.get("Organic Traffic", 0), int),
                "organicCost": cast(r.get("Organic Cost", 0), int),
            }

snapshot = {
    "date": date_,
    "domain": domain,
    "overview": overview,
    "keywords": kws,
    "competitors": competitors,
    "raw": {
        "overview_lines": len(ov_rows),
        "keyword_lines": len(kws),
        "competitors_pulled": len(competitors),
    },
}
with open(out_path, "w") as fh:
    json.dump(snapshot, fh, indent=2)
print(f"OK: wrote {out_path} — {len(kws)} keywords, {len(competitors)} competitors")
PYEOF
PY_RC=$?

rm -rf "$TMP_OV" "$TMP_OR" "$TMP_COMPS_DIR"

if [[ $PY_RC -ne 0 ]]; then
  log "ERROR: JSON build failed (rc=$PY_RC)"
  exit 1
fi

ln -sf "${DATE}.json" "${SNAPSHOT_DIR}/latest.json"
log "=== Snapshot complete: ${OUT_JSON} ==="
exit 0
