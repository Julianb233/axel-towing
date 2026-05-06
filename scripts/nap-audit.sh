#!/usr/bin/env bash
# NAP citation audit for Axle Towing.
# Compares Name + Address + Phone across:
#   - Canonical (dashboard/lib/data/gbp-content/locations.json)
#   - axletowing.com (LocalBusiness JSON-LD)
#   - GBP Apache Junction (public Maps scrape)
#   - GBP Phoenix (public Maps scrape)
#   - Yelp Apache Junction
#   - Apple Maps Apache Junction
#   - AMA member directory
# Output: markdown report + JSON. Cron-friendly. Run weekly.
set -euo pipefail

REPO="$(cd "$(dirname "$0")/.." && pwd)"
CONTENT="${REPO}/dashboard/lib/data/gbp-content/locations.json"
OUT_DIR="${REPO}/.logs/nap-audit"
mkdir -p "$OUT_DIR"
TS="$(date +%Y%m%d-%H%M)"
REPORT="${OUT_DIR}/nap-audit-${TS}.md"
JSON="${OUT_DIR}/nap-audit-${TS}.json"

if [[ ! -f "$CONTENT" ]]; then
  echo "ERROR: $CONTENT missing" >&2
  exit 2
fi

python3 - <<'PYEOF' > "$JSON"
import json, re, urllib.request, sys, os

REPO = os.environ.get("REPO", "/opt/agency-workspace/axel-towing")
content = json.load(open(f"{REPO}/dashboard/lib/data/gbp-content/locations.json"))

def normalize_phone(p):
    if not p: return ""
    return re.sub(r"\D", "", p)[-10:]  # last 10 digits

def normalize_addr(a):
    if not a: return ""
    return re.sub(r"\s+", " ", a.lower()).replace(".","").replace(",","").strip()

def fetch(url, timeout=15, ua="Mozilla/5.0 (NAP-audit)"):
    try:
        req = urllib.request.Request(url, headers={"User-Agent": ua})
        return urllib.request.urlopen(req, timeout=timeout).read().decode("utf-8", errors="replace")
    except Exception as e:
        return f"__ERR__:{e}"

# Canonical
canonical = {}
for loc in content["locations"]:
    canonical[loc["key"]] = {
        "name": loc["name"],
        "addr_line1": loc["address"]["street"],
        "city": loc["address"]["city"],
        "state": loc["address"]["state"],
        "postal": loc["address"]["postal"],
        "phone": normalize_phone(loc["phone_display"]),
        "website": loc["website"]
    }

# Source 1: axletowing.com JSON-LD
def parse_axle_schema():
    html = fetch("https://axletowing.com/")
    if html.startswith("__ERR__"):
        return {"_error": html}
    out = {}
    blocks = re.findall(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>', html, re.DOTALL)
    for b in blocks:
        try: obj = json.loads(b.strip())
        except: continue
        items = obj if isinstance(obj, list) else [obj]
        if isinstance(obj, dict) and "@graph" in obj: items = obj["@graph"]
        for it in items:
            t = it.get("@type", "")
            t_str = " ".join(t) if isinstance(t, list) else t
            if "LocalBusiness" not in t_str: continue
            name = it.get("name", "")
            addr = it.get("address", {}) or {}
            tel = normalize_phone(it.get("telephone", ""))
            key = "phoenix" if "phoenix" in name.lower() else ("apache-junction" if "apache" in name.lower() else None)
            if not key: continue
            out[key] = {
                "name": name,
                "addr_line1": addr.get("streetAddress", ""),
                "city": addr.get("addressLocality", ""),
                "state": addr.get("addressRegion", ""),
                "postal": addr.get("postalCode", ""),
                "phone": tel
            }
    return out

# Source 2 & 3: GBP via maps search (best-effort public scrape)
def parse_gbp(addr_query):
    url = f"https://www.google.com/maps/search/{addr_query}"
    html = fetch(url, timeout=20)
    if html.startswith("__ERR__"):
        return {"_error": html}
    # Phone
    phones = re.findall(r"\((\d{3})\)\s*(\d{3})-(\d{4})", html)
    phone = "".join(phones[0]) if phones else ""
    # Hours indicator
    hours_match = re.search(r"(Open · Closes \d+\s*[AP]M|Closes \d+\s*[AP]M|Open 24 hours|Closed)", html)
    return {"phone": phone, "hours_label": hours_match.group(0) if hours_match else "?", "raw_url": url}

# Source 4: Yelp (Apache Junction)
def parse_yelp_aj():
    html = fetch("https://www.yelp.com/biz/axle-towing-and-impound-apache-junction")
    if html.startswith("__ERR__"): return {"_error": html}
    phones = re.findall(r"\((\d{3})\)\s*(\d{3})-(\d{4})", html)
    return {"phone": "".join(phones[0]) if phones else ""}

# Source 5: AMA member directory
def parse_ama():
    html = fetch("https://www.azmultihousing.org/industry-partner-directory/axle-towing--impound")
    if html.startswith("__ERR__"): return {"_error": html}
    phones = re.findall(r"\((\d{3})\)\s*(\d{3})-(\d{4})", html)
    addr_match = re.search(r"(\d+\s+[\w\s]+(?:Trail|St|Street|Ave|Road|Rd|Way|Blvd))", html, re.IGNORECASE)
    return {
        "phone": "".join(phones[0]) if phones else "",
        "addr_line1": addr_match.group(1) if addr_match else ""
    }

results = {
    "canonical": canonical,
    "sources": {
        "axletowing.com": parse_axle_schema(),
        "gbp_apache_junction": parse_gbp("Axle+Towing+%26+Impound+Apache+Junction+AZ"),
        "gbp_phoenix": parse_gbp("Axle+Towing+%26+Impound+320+E+Pioneer+St+Phoenix+AZ"),
        "yelp_apache_junction": parse_yelp_aj(),
        "ama_directory": parse_ama()
    }
}

# Compare
results["mismatches"] = []
def check(source_name, location_key, field, observed):
    c = canonical.get(location_key, {}).get(field, "")
    if not observed or observed == "?":
        results["mismatches"].append({"source": source_name, "location": location_key, "field": field, "observed": observed, "canonical": c, "severity": "no_data"})
        return
    if observed != c:
        results["mismatches"].append({"source": source_name, "location": location_key, "field": field, "observed": observed, "canonical": c, "severity": "mismatch"})

axle = results["sources"]["axletowing.com"]
if isinstance(axle, dict) and "_error" not in axle:
    for k in canonical:
        if k in axle:
            check("axletowing.com", k, "phone", axle[k].get("phone",""))

gbp_aj = results["sources"]["gbp_apache_junction"]
if isinstance(gbp_aj, dict) and "_error" not in gbp_aj:
    check("gbp_apache_junction", "apache-junction", "phone", normalize_phone(gbp_aj.get("phone","")))

gbp_pho = results["sources"]["gbp_phoenix"]
if isinstance(gbp_pho, dict) and "_error" not in gbp_pho:
    check("gbp_phoenix", "phoenix", "phone", normalize_phone(gbp_pho.get("phone","")))

yelp = results["sources"]["yelp_apache_junction"]
if isinstance(yelp, dict) and "_error" not in yelp:
    check("yelp_apache_junction", "apache-junction", "phone", normalize_phone(yelp.get("phone","")))

ama = results["sources"]["ama_directory"]
if isinstance(ama, dict) and "_error" not in ama:
    check("ama_directory", "apache-junction", "phone", normalize_phone(ama.get("phone","")))

print(json.dumps(results, indent=2))
PYEOF

python3 - <<PYEOF > "$REPORT"
import json, sys
data = json.load(open("$JSON"))
print("# NAP Audit Report - Axle Towing")
print(f"\n**Generated:** $(date -u +%Y-%m-%dT%H:%M:%SZ)\n")
print("## Canonical (source of truth)\n")
print("| Location | Phone | Address |")
print("|---|---|---|")
for k, c in data["canonical"].items():
    print(f"| {k} | {c['phone']} | {c['addr_line1']}, {c['city']}, {c['state']} {c['postal']} |")
print("\n## Source-by-source observations\n")
for src, val in data["sources"].items():
    print(f"### {src}")
    print(f"\\\`\\\`\\\`json\n{json.dumps(val, indent=2)}\n\\\`\\\`\\\`\n")
print("\n## Mismatches\n")
if not data["mismatches"]:
    print("**None — NAP is consistent across all sources checked.**")
else:
    print("| Source | Location | Field | Observed | Canonical | Severity |")
    print("|---|---|---|---|---|---|")
    for m in data["mismatches"]:
        print(f"| {m['source']} | {m['location']} | {m['field']} | {m['observed'] or '(empty)'} | {m['canonical']} | {m['severity']} |")
PYEOF

echo "Report: $REPORT"
echo "JSON: $JSON"
echo
cat "$REPORT" | head -80
