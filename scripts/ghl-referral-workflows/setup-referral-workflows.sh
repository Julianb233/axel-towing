#!/usr/bin/env bash
# ============================================================================
# Axle Towing - GHL Referral Partner Workflow Setup
# Linear: AI-7460 | AI-3336
#
# Creates all tags, email templates, pipeline, and custom fields needed
# for the 6 referral partner outreach workflows in GoHighLevel.
#
# Prerequisites:
#   export GHL_API_TOKEN="..."        # Location API Key from GHL Settings
#   export GHL_LOCATION_ID="..."      # Sub-account Location ID
#
# Usage:
#   ./setup-referral-workflows.sh              # Run full setup
#   ./setup-referral-workflows.sh tags         # Only create tags
#   ./setup-referral-workflows.sh templates    # Only create email templates
#   ./setup-referral-workflows.sh pipeline     # Only create pipeline
#   ./setup-referral-workflows.sh verify       # Verify what exists
# ============================================================================

set -euo pipefail

BASE_URL="https://services.leadconnectorhq.com"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
TEMPLATES_DIR="$SCRIPT_DIR/templates"

# --- Validation ---
if [[ -z "${GHL_API_TOKEN:-}" ]]; then
  echo "ERROR: GHL_API_TOKEN not set. Generate from GHL > Settings > API Keys."
  echo "Then: export GHL_API_TOKEN=\"your-token-here\""
  exit 1
fi

if [[ -z "${GHL_LOCATION_ID:-}" ]]; then
  echo "ERROR: GHL_LOCATION_ID not set."
  echo "Then: export GHL_LOCATION_ID=\"YvHlg113pd1293cdY75R\""
  exit 1
fi

# --- API helper ---
ghl_api() {
  local method="$1"
  local endpoint="$2"
  local body="${3:-}"

  local args=(
    -s -w "\n%{http_code}"
    -X "$method"
    -H "Authorization: Bearer $GHL_API_TOKEN"
    -H "Version: 2021-07-28"
    -H "Content-Type: application/json"
  )

  if [[ -n "$body" ]]; then
    args+=(-d "$body")
  fi

  local response
  response=$(curl "${args[@]}" "${BASE_URL}${endpoint}")

  local http_code
  http_code=$(echo "$response" | tail -1)
  local body_text
  body_text=$(echo "$response" | sed '$d')

  if [[ "$http_code" -ge 400 ]]; then
    echo "API ERROR ($http_code): $body_text" >&2
    return 1
  fi

  echo "$body_text"
}

# Rate limit: 500ms between calls
rate_limit() {
  sleep 0.5
}

# ============================================================================
# TAGS
# ============================================================================
create_tags() {
  echo "=== Creating Tags ==="

  local tags=(
    "referral-hoa-pm"
    "referral-mechanic"
    "referral-locksmith"
    "referral-paving"
    "sequence-active"
    "sequence-replied"
    "sequence-completed"
    "partner-active"
    "partner-referred-in"
    "partner-referred-out"
  )

  for tag in "${tags[@]}"; do
    echo -n "  Creating tag: $tag ... "
    local result
    if result=$(ghl_api POST "/locations/${GHL_LOCATION_ID}/tags" \
      "{\"name\":\"$tag\"}" 2>&1); then
      echo "OK"
    else
      # Tag may already exist -- that's fine
      if echo "$result" | grep -qi "already exists\|duplicate\|conflict"; then
        echo "EXISTS (skipped)"
      else
        echo "WARN: $result"
      fi
    fi
    rate_limit
  done

  echo "Tags done."
  echo ""
}

# ============================================================================
# EMAIL TEMPLATES
# ============================================================================
create_email_templates() {
  echo "=== Creating Email Templates ==="

  local -A templates=(
    # HOA PM Campaign (4 emails)
    ["Referral - HOA PM - Email 1 - Partnership Introduction"]="hoa-pm-email-1.html|Towing & parking enforcement partner for your managed communities"
    ["Referral - HOA PM - Email 2 - Differentiation"]="hoa-pm-email-2.html|What property managers tell us they value most"
    ["Referral - HOA PM - Email 3 - Case Study"]="hoa-pm-email-3.html|How we helped a 300-unit complex reduce parking complaints by 90%"
    ["Referral - HOA PM - Email 4 - Final Touch"]="hoa-pm-email-4.html|Last note - parking enforcement for {{contact.company_name}}"

    # Mechanic Campaign (3 emails)
    ["Referral - Mechanic - Email 1 - Partnership Introduction"]="mechanic-email-1.html|Referral partnership idea - towing + auto repair"
    ["Referral - Mechanic - Email 2 - Value & Specifics"]="mechanic-email-2.html|The specifics on our referral partnership"
    ["Referral - Mechanic - Email 3 - Final Touch"]="mechanic-email-3.html|Last note - towing + repair referral partnership"

    # Locksmith Campaign (3 emails)
    ["Referral - Locksmith - Email 1 - Partnership Introduction"]="locksmith-email-1.html|Towing + locksmith referral partnership in Phoenix"
    ["Referral - Locksmith - Email 2 - Co-Brand Offer"]="locksmith-email-2.html|One more idea for our referral partnership"
    ["Referral - Locksmith - Email 3 - Final Touch"]="locksmith-email-3.html|Last note - locksmith referral partnership"

    # Paving Campaign (2 emails)
    ["Referral - Paving - Email 1 - Partnership Introduction"]="paving-email-1.html|Vehicle relocation partner for your Phoenix paving jobs"
    ["Referral - Paving - Email 2 - Follow Up"]="paving-email-2.html|Following up - vehicle relocation for {{contact.company_name}}"

    # Shared templates
    ["Referral - Partner Welcome"]="partner-welcome.html|Welcome to the Axle Towing partner network"
    ["Referral - 30-Day Re-engagement"]="reengage-30day.html|Checking back in - referral partnership"
  )

  for name in "${!templates[@]}"; do
    IFS='|' read -r filename subject <<< "${templates[$name]}"
    local filepath="$TEMPLATES_DIR/$filename"

    if [[ ! -f "$filepath" ]]; then
      echo "  SKIP: $filename not found"
      continue
    fi

    echo -n "  Creating template: $name ... "

    # Read HTML and escape for JSON
    local html_content
    html_content=$(python3 -c "
import json, sys
with open('$filepath') as f:
    print(json.dumps(f.read()))
")

    local payload
    payload=$(python3 -c "
import json
print(json.dumps({
    'locationId': '$GHL_LOCATION_ID',
    'name': $(python3 -c "import json; print(json.dumps('$name'))"),
    'type': 'html',
    'subject': $(python3 -c "import json; print(json.dumps('$subject'))"),
    'content': $html_content
}))
")

    if ghl_api POST "/emails/builder" "$payload" > /dev/null 2>&1; then
      echo "OK"
    else
      echo "WARN (may already exist)"
    fi
    rate_limit
  done

  echo "Email templates done."
  echo ""
}

# ============================================================================
# PIPELINE
# ============================================================================
create_pipeline() {
  echo "=== Creating Referral Partner Pipeline ==="

  local stages='[
    {"name": "New Contact", "position": 0},
    {"name": "Sequence Active", "position": 1},
    {"name": "Replied - Qualifying", "position": 2},
    {"name": "Call Booked", "position": 3},
    {"name": "Partnership Discussion", "position": 4},
    {"name": "Partner Confirmed", "position": 5},
    {"name": "Active Partner", "position": 6},
    {"name": "Not Interested", "position": 7},
    {"name": "Dormant - Re-engage", "position": 8}
  ]'

  local payload
  payload=$(python3 -c "
import json
print(json.dumps({
    'locationId': '$GHL_LOCATION_ID',
    'name': 'Referral Partner Pipeline',
    'stages': json.loads('''$stages'''),
    'showInFunnel': True
}))
")

  echo -n "  Creating pipeline... "
  if result=$(ghl_api POST "/opportunities/pipelines" "$payload" 2>&1); then
    local pipeline_id
    pipeline_id=$(echo "$result" | python3 -c "import json,sys; print(json.load(sys.stdin).get('id','unknown'))" 2>/dev/null || echo "created")
    echo "OK (ID: $pipeline_id)"
  else
    echo "WARN: $result"
  fi

  echo "Pipeline done."
  echo ""
}

# ============================================================================
# CUSTOM FIELDS
# ============================================================================
create_custom_fields() {
  echo "=== Creating Custom Fields ==="

  # Custom fields for referral partner tracking
  local fields=(
    '{"name":"Partner Type","dataType":"TEXT","fieldKey":"partner_type","position":0,"model":"contact","placeholder":"HOA PM, Mechanic, Locksmith, Paving, Other"}'
    '{"name":"Portfolio Size","dataType":"NUMERICAL","fieldKey":"portfolio_size","position":1,"model":"contact","placeholder":"Number of communities/units"}'
    '{"name":"Referrals Sent to Partner","dataType":"NUMERICAL","fieldKey":"referrals_sent","position":2,"model":"contact","placeholder":"0"}'
    '{"name":"Referrals Received from Partner","dataType":"NUMERICAL","fieldKey":"referrals_received","position":3,"model":"contact","placeholder":"0"}'
    '{"name":"Last Referral Date","dataType":"DATE","fieldKey":"last_referral_date","position":4,"model":"contact"}'
    '{"name":"Partnership Start Date","dataType":"DATE","fieldKey":"partnership_start_date","position":5,"model":"contact"}'
    '{"name":"Co-Branded Cards Sent","dataType":"CHECKBOX","fieldKey":"cards_sent","position":6,"model":"contact"}'
    '{"name":"Partner Priority","dataType":"TEXT","fieldKey":"partner_priority","position":7,"model":"contact","placeholder":"High, Medium, Low"}'
  )

  for field_json in "${fields[@]}"; do
    local field_name
    field_name=$(echo "$field_json" | python3 -c "import json,sys; print(json.load(sys.stdin)['name'])")

    echo -n "  Creating field: $field_name ... "

    # Add locationId to the payload
    local payload
    payload=$(echo "$field_json" | python3 -c "
import json, sys
d = json.load(sys.stdin)
d['locationId'] = '$GHL_LOCATION_ID'
print(json.dumps(d))
")

    if ghl_api POST "/locations/${GHL_LOCATION_ID}/customFields" "$payload" > /dev/null 2>&1; then
      echo "OK"
    else
      echo "WARN (may already exist)"
    fi
    rate_limit
  done

  echo "Custom fields done."
  echo ""
}

# ============================================================================
# VERIFY
# ============================================================================
verify_setup() {
  echo "=== Verifying GHL Setup ==="

  echo ""
  echo "--- Tags ---"
  ghl_api GET "/locations/${GHL_LOCATION_ID}/tags" 2>/dev/null | \
    python3 -c "
import json, sys
try:
    data = json.load(sys.stdin)
    tags = data.get('tags', [])
    referral_tags = [t for t in tags if 'referral' in t.get('name','').lower() or 'sequence' in t.get('name','').lower() or 'partner' in t.get('name','').lower()]
    print(f'  Found {len(referral_tags)} referral-related tags:')
    for t in referral_tags:
        print(f'    - {t[\"name\"]}')
    if not referral_tags:
        print('  No referral tags found. Run: ./setup-referral-workflows.sh tags')
except:
    print('  Could not fetch tags')
" 2>/dev/null || echo "  Could not fetch tags"

  echo ""
  echo "--- Pipelines ---"
  ghl_api GET "/opportunities/pipelines?locationId=${GHL_LOCATION_ID}" 2>/dev/null | \
    python3 -c "
import json, sys
try:
    data = json.load(sys.stdin)
    pipelines = data.get('pipelines', [])
    for p in pipelines:
        stages = p.get('stages', [])
        print(f'  Pipeline: {p[\"name\"]} ({len(stages)} stages)')
        for s in stages:
            print(f'    - {s[\"name\"]}')
except:
    print('  Could not fetch pipelines')
" 2>/dev/null || echo "  Could not fetch pipelines"

  echo ""
  echo "--- Custom Fields ---"
  ghl_api GET "/locations/${GHL_LOCATION_ID}/customFields" 2>/dev/null | \
    python3 -c "
import json, sys
try:
    data = json.load(sys.stdin)
    fields = data.get('customFields', [])
    partner_fields = [f for f in fields if any(k in f.get('name','').lower() for k in ['partner','referral','portfolio','cards'])]
    print(f'  Found {len(partner_fields)} partner-related custom fields:')
    for f in partner_fields:
        print(f'    - {f[\"name\"]} ({f.get(\"dataType\",\"?\")})')
except:
    print('  Could not fetch custom fields')
" 2>/dev/null || echo "  Could not fetch custom fields"

  echo ""
  echo "--- Email Templates ---"
  local template_count
  template_count=$(ls "$TEMPLATES_DIR"/*.html 2>/dev/null | wc -l)
  echo "  $template_count HTML templates in $TEMPLATES_DIR"
  ls "$TEMPLATES_DIR"/*.html 2>/dev/null | while read -r f; do
    echo "    - $(basename "$f")"
  done

  echo ""
  echo "--- Workflow Configs ---"
  local workflow_count
  workflow_count=$(ls "$SCRIPT_DIR"/workflow-*.json 2>/dev/null | wc -l)
  echo "  $workflow_count workflow configs in $SCRIPT_DIR"
  ls "$SCRIPT_DIR"/workflow-*.json 2>/dev/null | while read -r f; do
    echo "    - $(basename "$f")"
  done

  echo ""
  echo "=== Verification Complete ==="
}

# ============================================================================
# MAIN
# ============================================================================
main() {
  local cmd="${1:-all}"

  echo "============================================"
  echo "Axle Towing - GHL Referral Workflow Setup"
  echo "Location: $GHL_LOCATION_ID"
  echo "============================================"
  echo ""

  # Quick auth check
  echo -n "Testing API connection... "
  if ghl_api GET "/locations/${GHL_LOCATION_ID}" > /dev/null 2>&1; then
    echo "OK"
  else
    echo "FAILED"
    echo ""
    echo "API token is invalid or expired."
    echo "Generate a new one: GHL > Settings > Business Profile > API Key"
    echo "Then: export GHL_API_TOKEN=\"new-token\""
    exit 1
  fi
  echo ""

  case "$cmd" in
    tags)
      create_tags
      ;;
    templates)
      create_email_templates
      ;;
    pipeline)
      create_pipeline
      ;;
    fields)
      create_custom_fields
      ;;
    verify)
      verify_setup
      ;;
    all)
      create_tags
      create_email_templates
      create_pipeline
      create_custom_fields
      echo ""
      echo "============================================"
      echo "SETUP COMPLETE"
      echo "============================================"
      echo ""
      echo "Next steps:"
      echo "  1. Build 6 workflows manually in GHL Automation tab"
      echo "     (see workflow-*.json configs for exact steps)"
      echo "  2. Import contacts with segment tags"
      echo "  3. Run: ./setup-referral-workflows.sh verify"
      echo ""
      ;;
    *)
      echo "Usage: $0 [tags|templates|pipeline|fields|verify|all]"
      exit 1
      ;;
  esac
}

main "$@"
