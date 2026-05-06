#!/usr/bin/env bash
# Pushes Phase 1 GBP fixes (description, hours, phone, categories, services, websiteUri) to both Axle Towing locations.
# Reads pre-staged content from dashboard/lib/data/gbp-content/locations.json.
# Idempotent. Logs every action to .logs/gbp-push.jsonl.
# Usage:
#   gbp-push.sh --dry-run   # show what would change, no writes
#   gbp-push.sh             # apply changes
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CONTENT="${REPO_ROOT}/dashboard/lib/data/gbp-content/locations.json"
LOG_DIR="${REPO_ROOT}/.logs"
LOG="${LOG_DIR}/gbp-push.jsonl"
mkdir -p "$LOG_DIR"

DRY_RUN=0
[[ "${1:-}" == "--dry-run" ]] && DRY_RUN=1

TOKEN_FILE="${GBP_TOKEN_FILE:-/opt/agency-workspace/.fleet-config/google-cloud/gbp-token.json}"

if [[ ! -f "$CONTENT" ]]; then
  echo "ERROR: content file not found: $CONTENT" >&2
  exit 2
fi

if [[ ! -f "$TOKEN_FILE" ]]; then
  echo "ERROR: $TOKEN_FILE not found." >&2
  echo "       Run: bash $(dirname $0)/gbp-auth-init.sh   (one-time setup)" >&2
  exit 2
fi

# Acquire access token
ACCESS_TOKEN=$(python3 - <<EOF
import json, urllib.request, urllib.parse, sys
d = json.load(open("$TOKEN_FILE"))
data = urllib.parse.urlencode({
  "client_id": d["client_id"],
  "client_secret": d["client_secret"],
  "refresh_token": d["refresh_token"],
  "grant_type": "refresh_token"
}).encode()
try:
  r = urllib.request.urlopen("https://oauth2.googleapis.com/token", data=data, timeout=15)
  tok = json.loads(r.read())
  if "business.manage" not in tok.get("scope",""):
    print("ERROR: token missing business.manage scope. Run docs/GBP-API-SETUP-RUNBOOK.md.", file=sys.stderr)
    sys.exit(3)
  print(tok["access_token"])
except urllib.error.HTTPError as e:
  print(f"ERROR: token refresh failed: {e.read().decode()[:300]}", file=sys.stderr)
  sys.exit(4)
EOF
)
[[ -z "$ACCESS_TOKEN" ]] && { echo "ERROR: no access token" >&2; exit 5; }

export ACCESS_TOKEN
export DRY_RUN
export CONTENT
export LOG

python3 <<'PYEOF'
import json, os, sys, urllib.request, urllib.parse, datetime, copy

token = os.environ["ACCESS_TOKEN"]
dry_run = os.environ["DRY_RUN"] == "1"
content_path = os.environ["CONTENT"]
log_path = os.environ["LOG"]

content = json.load(open(content_path))

def log(event):
    event["ts"] = datetime.datetime.utcnow().isoformat() + "Z"
    event["dry_run"] = dry_run
    with open(log_path, "a") as f:
        f.write(json.dumps(event) + "\n")

def http(method, url, body=None):
    data = json.dumps(body).encode() if body else None
    req = urllib.request.Request(url, data=data, method=method, headers={
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json"
    })
    try:
        r = urllib.request.urlopen(req, timeout=30)
        return json.loads(r.read() or "{}")
    except urllib.error.HTTPError as e:
        return {"_error": e.read().decode()[:1000], "_status": e.code}

# 1. Discover accounts + locations
print("[1/4] Discovering accounts and locations...")
accts = http("GET", "https://mybusinessaccountmanagement.googleapis.com/v1/accounts")
if "_error" in accts:
    print(f"FATAL: cannot list accounts: {accts['_error']}", file=sys.stderr)
    sys.exit(6)

# Build a lookup: address-key -> location resource name
loc_by_address = {}
for a in accts.get("accounts", []):
    aname = a["name"]
    locs = http("GET", f"https://mybusinessbusinessinformation.googleapis.com/v1/{aname}/locations?readMask=name,title,storefrontAddress,phoneNumbers,categories,websiteUri,regularHours,profile")
    if "_error" in locs:
        continue
    for loc in locs.get("locations", []):
        addr = loc.get("storefrontAddress", {})
        line1 = (addr.get("addressLines") or [""])[0].strip().lower()
        city = (addr.get("locality") or "").strip().lower()
        loc_by_address[(line1, city)] = loc

print(f"     Found {len(loc_by_address)} locations under managed accounts.")

# 2. For each desired location in content, find the live one and diff
def normalize_addr(loc):
    return ((loc["address"]["street"] or "").strip().lower(),
            (loc["address"]["city"] or "").strip().lower())

def desired_hours(spec):
    # spec is per-day list of {open,close}; build GBP regularHours format
    period_list = []
    day_map = {
        "monday":"MONDAY","tuesday":"TUESDAY","wednesday":"WEDNESDAY","thursday":"THURSDAY",
        "friday":"FRIDAY","saturday":"SATURDAY","sunday":"SUNDAY"
    }
    for day, periods in spec.items():
        for p in periods:
            oh, om = p["open"].split(":")
            ch, cm = p["close"].split(":")
            period_list.append({
                "openDay": day_map[day], "openTime": {"hours": int(oh), "minutes": int(om)},
                "closeDay": day_map[day], "closeTime": {"hours": int(ch), "minutes": int(cm)}
            })
    return {"periods": period_list}

print("\n[2/4] Computing diffs and pushing updates per location...")
for spec in content["locations"]:
    key = spec["key"]
    addr_key = normalize_addr(spec)
    live = loc_by_address.get(addr_key)
    if not live:
        print(f"  [SKIP] {key}: no managed location matches address {addr_key}. "
              f"(Elliott needs to add julian@aiacrobatics.com as Manager on this listing.)")
        log({"action":"skip","reason":"no_matching_managed_location","location_key":key,"addr_key":list(addr_key)})
        continue

    loc_name = live["name"]
    update = {}
    update_mask = []

    desired_phone = spec["phone_primary"]
    live_phone = (live.get("phoneNumbers") or {}).get("primaryPhone") or ""
    if live_phone.replace(" ","").replace("-","").replace("(","").replace(")","") != desired_phone.replace("+",""):
        update["phoneNumbers"] = {"primaryPhone": spec["phone_display"]}
        update_mask.append("phoneNumbers.primaryPhone")

    desired_web = spec["website"]
    if (live.get("websiteUri") or "").rstrip("/") != desired_web.rstrip("/"):
        update["websiteUri"] = desired_web
        update_mask.append("websiteUri")

    desired_desc = spec["description"]
    live_desc = (live.get("profile") or {}).get("description") or ""
    if live_desc.strip() != desired_desc.strip():
        update["profile"] = {"description": desired_desc}
        update_mask.append("profile.description")

    desired_hours_obj = desired_hours(spec["hours"])
    live_hours_obj = live.get("regularHours") or {}
    if json.dumps(live_hours_obj.get("periods",[]), sort_keys=True) != json.dumps(desired_hours_obj["periods"], sort_keys=True):
        update["regularHours"] = desired_hours_obj
        update_mask.append("regularHours")

    desired_primary_cat = spec["primary_category"]
    live_primary_cat = ((live.get("categories") or {}).get("primaryCategory") or {}).get("name", "")
    desired_secondaries = spec["secondary_categories"]
    live_secondaries = [c.get("name") for c in ((live.get("categories") or {}).get("additionalCategories") or [])]
    if live_primary_cat != f"categories/{desired_primary_cat}" or set(live_secondaries) != set(f"categories/{c}" for c in desired_secondaries):
        update["categories"] = {
            "primaryCategory": {"name": f"categories/{desired_primary_cat}"},
            "additionalCategories": [{"name": f"categories/{c}"} for c in desired_secondaries]
        }
        update_mask.append("categories")

    if not update_mask:
        print(f"  [OK]   {key}: in sync, no changes needed")
        log({"action":"noop","location_key":key,"location_name":loc_name})
        continue

    print(f"  [UPDATE] {key} ({loc_name}): fields = {update_mask}")
    log({"action":"update","location_key":key,"location_name":loc_name,"update_mask":update_mask,"payload":update})

    if not dry_run:
        url = f"https://mybusinessbusinessinformation.googleapis.com/v1/{loc_name}?updateMask={','.join(update_mask)}"
        result = http("PATCH", url, body=update)
        if "_error" in result:
            print(f"     ERROR: {result['_error']}")
            log({"action":"update_failed","location_key":key,"error":result['_error']})
        else:
            print(f"     OK")
            log({"action":"update_succeeded","location_key":key})

# 3. Push services (separate API surface)
print("\n[3/4] Service items push: skipped in v1 — requires foodMenus/serviceItems endpoint per category. Add in v2.")

# 4. Print summary
print(f"\n[4/4] Done. Audit log: {log_path}")
if dry_run:
    print("(dry-run mode — nothing was actually written)")
PYEOF
