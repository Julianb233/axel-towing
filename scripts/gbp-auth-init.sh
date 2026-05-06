#!/usr/bin/env bash
# One-time interactive OAuth seed for the GBP push script.
# Reuses the bubba-personal OAuth client (julian@aiacrobatics.com) but
# stores the GBP-scoped refresh token in a script-owned file so push
# scripts don't depend on gws's encrypted store (which doesn't expose
# the raw token).
#
# Run once after:
#   1. APIs enabled on bubba-personal (runbook Step 1)
#   2. business.manage scope added to OAuth consent screen (runbook Step 2)
#
# Output: /opt/agency-workspace/.fleet-config/google-cloud/gbp-token.json
set -euo pipefail

CLIENT_SECRET="/opt/agency-workspace/.fleet-config/google-cloud/gws/profiles/workspace/client_secret.json"
TOKEN_OUT="/opt/agency-workspace/.fleet-config/google-cloud/gbp-token.json"

if [[ ! -f "$CLIENT_SECRET" ]]; then
  echo "ERROR: client_secret.json missing at $CLIENT_SECRET" >&2
  exit 2
fi

CLIENT_ID=$(python3 -c "import json; d=json.load(open('$CLIENT_SECRET')); inst=d.get('installed') or d.get('web') or d; print(inst['client_id'])")
CLIENT_SECRET_VAL=$(python3 -c "import json; d=json.load(open('$CLIENT_SECRET')); inst=d.get('installed') or d.get('web') or d; print(inst['client_secret'])")
SCOPE="https://www.googleapis.com/auth/business.manage"
REDIRECT="urn:ietf:wg:oauth:2.0:oob"  # OOB flow — paste code back

AUTH_URL="https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT}&response_type=code&scope=${SCOPE}&access_type=offline&prompt=consent"

cat <<EOF
====================================================================
GBP OAuth Seed — One-time setup for julian@aiacrobatics.com
====================================================================

1. Open this URL in any browser logged into julian@aiacrobatics.com:

   $AUTH_URL

2. Click through the consent screen (only the GBP scope is requested).
3. Copy the authorization code Google shows you.
4. Paste it below and press Enter.

EOF

read -p "Authorization code: " AUTH_CODE
[[ -z "$AUTH_CODE" ]] && { echo "ERROR: empty code" >&2; exit 3; }

python3 <<EOF
import json, urllib.request, urllib.parse, sys
data = urllib.parse.urlencode({
  "code": "$AUTH_CODE",
  "client_id": "$CLIENT_ID",
  "client_secret": "$CLIENT_SECRET_VAL",
  "redirect_uri": "$REDIRECT",
  "grant_type": "authorization_code"
}).encode()
try:
  r = urllib.request.urlopen("https://oauth2.googleapis.com/token", data=data, timeout=20)
  tok = json.loads(r.read())
  out = {
    "client_id": "$CLIENT_ID",
    "client_secret": "$CLIENT_SECRET_VAL",
    "refresh_token": tok["refresh_token"],
    "scope": tok["scope"]
  }
  open("$TOKEN_OUT", "w").write(json.dumps(out, indent=2))
  import os
  os.chmod("$TOKEN_OUT", 0o600)
  print(f"\\nOK — wrote $TOKEN_OUT (mode 0600)")
  print(f"     scopes: {tok['scope']}")
except urllib.error.HTTPError as e:
  print(f"ERROR: token exchange failed: {e.read().decode()[:500]}", file=sys.stderr)
  sys.exit(4)
EOF
