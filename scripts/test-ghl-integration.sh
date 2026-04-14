#!/usr/bin/env bash
#
# test-ghl-integration.sh — End-to-end test of the lead form → GHL pipeline
#
# Tests the full GHL integration flow:
#   1. Validate API key (GET /pipelines)
#   2. Create a test contact (POST /contacts)
#   3. Add a note to the contact (POST /contacts/:id/notes)
#   4. Create a pipeline opportunity (POST /pipelines/:id/opportunities)
#   5. Verify contact fetch (GET /contacts/:id)
#   6. Clean up test data (DELETE /contacts/:id)
#
# Usage:
#   ./scripts/test-ghl-integration.sh              # uses website/.env.local
#   GHL_API_KEY=xxx ./scripts/test-ghl-integration.sh  # override via env
#
# Exit code 0 = all tests pass, non-zero = failure count

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

# Load env from website/.env.local if not already set
if [[ -z "${GHL_API_KEY:-}" ]]; then
  ENV_FILE="$PROJECT_ROOT/website/.env.local"
  if [[ -f "$ENV_FILE" ]]; then
    # shellcheck disable=SC1090
    set -a
    source <(grep '^GHL_' "$ENV_FILE" | sed 's/^/export /')
    set +a
  else
    echo "ERROR: No GHL_API_KEY set and $ENV_FILE not found"
    exit 1
  fi
fi

GHL_BASE="https://rest.gohighlevel.com/v1"
PASS=0
FAIL=0
CONTACT_ID=""
TEST_EMAIL="e2e-test-$(date +%s)@axle-test.example.com"

pass() { echo "  ✓ $1"; PASS=$((PASS + 1)); }
fail() { echo "  ✗ $1"; FAIL=$((FAIL + 1)); }

cleanup() {
  if [[ -n "$CONTACT_ID" ]]; then
    echo ""
    echo "Cleaning up test contact $CONTACT_ID..."
    curl -s -X DELETE "$GHL_BASE/contacts/$CONTACT_ID" \
      -H "Authorization: Bearer $GHL_API_KEY" > /dev/null 2>&1 || true
    echo "  Done."
  fi
}
trap cleanup EXIT

echo "======================================="
echo "  GHL Integration E2E Test"
echo "  $(date)"
echo "======================================="
echo ""
echo "Config:"
echo "  Location ID:  ${GHL_LOCATION_ID:-not set}"
echo "  Pipeline ID:  ${GHL_PIPELINE_ID:-not set}"
echo "  Stage ID:     ${GHL_STAGE_NEW_LEAD_ID:-not set}"
echo "  API Key:      ${GHL_API_KEY:0:20}..."
echo ""

# ── Test 1: Validate API key ──────────────────────────────────────────
echo "Test 1: Validate API key (GET /pipelines)"
RESPONSE=$(curl -s -w "\n%{http_code}" "$GHL_BASE/pipelines" \
  -H "Authorization: Bearer $GHL_API_KEY")
HTTP_CODE=$(echo "$RESPONSE" | tail -1)
BODY=$(echo "$RESPONSE" | sed '$d')

if [[ "$HTTP_CODE" == "200" ]]; then
  # Verify our pipeline ID exists in the response
  if echo "$BODY" | grep -q "$GHL_PIPELINE_ID"; then
    pass "API key valid, pipeline $GHL_PIPELINE_ID found"
  else
    fail "API key valid but pipeline $GHL_PIPELINE_ID not found in response"
  fi
else
  fail "API returned HTTP $HTTP_CODE — key may be expired or invalid"
  echo "  Response: $BODY"
fi
echo ""

# ── Test 2: Create test contact ───────────────────────────────────────
echo "Test 2: Create test contact (POST /contacts)"
RESPONSE=$(curl -s -w "\n%{http_code}" "$GHL_BASE/contacts" \
  -H "Authorization: Bearer $GHL_API_KEY" \
  -H "Content-Type: application/json" \
  -d "{
    \"firstName\": \"E2E\",
    \"lastName\": \"Test Lead\",
    \"email\": \"$TEST_EMAIL\",
    \"phone\": \"+15559999999\",
    \"companyName\": \"Test Apartments LLC\",
    \"tags\": [\"src-website-form\", \"stage-new-lead\", \"priority-hot\", \"e2e-test\"],
    \"source\": \"Website\"
  }")
HTTP_CODE=$(echo "$RESPONSE" | tail -1)
BODY=$(echo "$RESPONSE" | sed '$d')

if [[ "$HTTP_CODE" == "200" ]] || [[ "$HTTP_CODE" == "201" ]]; then
  CONTACT_ID=$(echo "$BODY" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)
  if [[ -n "$CONTACT_ID" ]]; then
    pass "Contact created: $CONTACT_ID"
  else
    fail "Response 200 but could not extract contact ID"
    echo "  Response: $BODY"
  fi
else
  fail "Create contact returned HTTP $HTTP_CODE"
  echo "  Response: $BODY"
fi
echo ""

# ── Test 3: Add note to contact ───────────────────────────────────────
echo "Test 3: Add note to contact (POST /contacts/:id/notes)"
if [[ -z "$CONTACT_ID" ]]; then
  fail "Skipped — no contact ID from test 2"
else
  RESPONSE=$(curl -s -w "\n%{http_code}" "$GHL_BASE/contacts/$CONTACT_ID/notes" \
    -H "Authorization: Bearer $GHL_API_KEY" \
    -H "Content-Type: application/json" \
    -d "{\"body\": \"E2E Test Note\\nSource: test-script\\nProperty: Test Apartments LLC\\nUnits: 200\\nTimeline: immediately\"}")
  HTTP_CODE=$(echo "$RESPONSE" | tail -1)
  BODY=$(echo "$RESPONSE" | sed '$d')

  if [[ "$HTTP_CODE" == "200" ]] || [[ "$HTTP_CODE" == "201" ]]; then
    NOTE_ID=$(echo "$BODY" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)
    pass "Note added: $NOTE_ID"
  else
    fail "Add note returned HTTP $HTTP_CODE"
    echo "  Response: $BODY"
  fi
fi
echo ""

# ── Test 4: Create pipeline opportunity ───────────────────────────────
echo "Test 4: Create pipeline opportunity (POST /pipelines/:id/opportunities)"
if [[ -z "$CONTACT_ID" ]]; then
  fail "Skipped — no contact ID from test 2"
else
  RESPONSE=$(curl -s -w "\n%{http_code}" \
    "$GHL_BASE/pipelines/$GHL_PIPELINE_ID/opportunities" \
    -H "Authorization: Bearer $GHL_API_KEY" \
    -H "Content-Type: application/json" \
    -d "{
      \"pipelineId\": \"$GHL_PIPELINE_ID\",
      \"stageId\": \"$GHL_STAGE_NEW_LEAD_ID\",
      \"title\": \"E2E Test — Parking Enforcement\",
      \"contactId\": \"$CONTACT_ID\",
      \"status\": \"open\",
      \"source\": \"Website\"
    }")
  HTTP_CODE=$(echo "$RESPONSE" | tail -1)
  BODY=$(echo "$RESPONSE" | sed '$d')

  if [[ "$HTTP_CODE" == "200" ]] || [[ "$HTTP_CODE" == "201" ]]; then
    OPP_ID=$(echo "$BODY" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)
    pass "Opportunity created: $OPP_ID"
  else
    fail "Create opportunity returned HTTP $HTTP_CODE"
    echo "  Response: $BODY"
  fi
fi
echo ""

# ── Test 5: Verify contact fetch ─────────────────────────────────────
echo "Test 5: Verify contact fetch (GET /contacts/:id)"
if [[ -z "$CONTACT_ID" ]]; then
  fail "Skipped — no contact ID from test 2"
else
  RESPONSE=$(curl -s -w "\n%{http_code}" "$GHL_BASE/contacts/$CONTACT_ID" \
    -H "Authorization: Bearer $GHL_API_KEY")
  HTTP_CODE=$(echo "$RESPONSE" | tail -1)
  BODY=$(echo "$RESPONSE" | sed '$d')

  if [[ "$HTTP_CODE" == "200" ]]; then
    if echo "$BODY" | grep -q "$TEST_EMAIL"; then
      pass "Contact verified — email matches"
    else
      fail "Contact fetched but email mismatch"
    fi
  else
    fail "Fetch contact returned HTTP $HTTP_CODE"
    echo "  Response: $BODY"
  fi
fi
echo ""

# ── Summary ───────────────────────────────────────────────────────────
echo "======================================="
echo "  Results: $PASS passed, $FAIL failed"
echo "======================================="

if [[ $FAIL -gt 0 ]]; then
  echo ""
  echo "INTEGRATION STATUS: BROKEN — $FAIL test(s) failed"
  exit $FAIL
else
  echo ""
  echo "INTEGRATION STATUS: ALL SYSTEMS GO"
  echo "Lead form → GHL contact + note + pipeline opportunity is working."
  exit 0
fi
