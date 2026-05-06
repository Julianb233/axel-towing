#!/usr/bin/env bash
# Lists Google Business Profile accounts + locations the workspace OAuth token can manage.
# Pre-flight check before running gbp-push.sh.
# Requires: business.manage scope on /opt/agency-workspace/.fleet-config/google-cloud/gws/profiles/workspace
set -euo pipefail

TOKEN_FILE="${GBP_TOKEN_FILE:-/opt/agency-workspace/.fleet-config/google-cloud/gbp-token.json}"

if [[ ! -f "$TOKEN_FILE" ]]; then
  echo "ERROR: $TOKEN_FILE not found." >&2
  echo "       Run: bash $(dirname $0)/gbp-auth-init.sh   (one-time setup)" >&2
  echo "       See:  docs/GBP-API-SETUP-RUNBOOK.md" >&2
  exit 2
fi

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
  scope = tok.get("scope", "")
  if "business.manage" not in scope:
    print("ERROR: token missing business.manage scope. Run docs/GBP-API-SETUP-RUNBOOK.md Step 3.", file=sys.stderr)
    sys.exit(3)
  print(tok["access_token"])
except urllib.error.HTTPError as e:
  print(f"ERROR: token refresh failed: {e.read().decode()[:300]}", file=sys.stderr)
  sys.exit(4)
EOF
)

if [[ -z "$ACCESS_TOKEN" ]]; then
  echo "ERROR: failed to acquire access token" >&2
  exit 5
fi

echo "=== ACCOUNTS ==="
ACCOUNTS_JSON=$(curl -s -H "Authorization: Bearer $ACCESS_TOKEN" \
  "https://mybusinessaccountmanagement.googleapis.com/v1/accounts")
echo "$ACCOUNTS_JSON" | python3 -m json.tool
echo
echo "=== LOCATIONS PER ACCOUNT ==="
echo "$ACCOUNTS_JSON" | python3 -c "
import json, sys, urllib.request
import os
data = json.load(sys.stdin)
token = os.environ['ACCESS_TOKEN']
for a in data.get('accounts', []):
  name = a['name']  # accounts/{id}
  print(f'\\nAccount: {name}  type={a.get(\"type\")}  state={a.get(\"verificationState\",\"?\")}')
  url = f'https://mybusinessbusinessinformation.googleapis.com/v1/{name}/locations?readMask=name,title,phoneNumbers,storefrontAddress,categories,websiteUri'
  req = urllib.request.Request(url, headers={'Authorization': f'Bearer {token}'})
  try:
    locs = json.loads(urllib.request.urlopen(req, timeout=15).read())
    for loc in locs.get('locations', []):
      print(f'  - {loc.get(\"title\",\"?\")}  ({loc[\"name\"]})')
      a = loc.get('storefrontAddress', {})
      print(f'      addr: {a.get(\"addressLines\",[\"\"])[0]}, {a.get(\"locality\",\"\")}, {a.get(\"administrativeArea\",\"\")}')
      print(f'      phone: {loc.get(\"phoneNumbers\",{}).get(\"primaryPhone\",\"\")}')
      cats = loc.get('categories',{})
      print(f'      primary cat: {cats.get(\"primaryCategory\",{}).get(\"displayName\",\"\")}')
  except Exception as e:
    print(f'  ERROR listing locations: {e}')
" || true
