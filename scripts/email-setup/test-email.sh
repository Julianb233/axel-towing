#!/usr/bin/env bash
# Send test emails to verify all addresses are working
# Usage: ./test-email.sh [profile]
# Example: ./test-email.sh workspace   # sends from julian@aiacrobatics.com
#
# Sends a test email to every configured address and checks for delivery.
# Uses the fleet gws profile system (.claude/rules/email-send-via-gws.md)

set -euo pipefail
source "$(dirname "$0")/config.sh"

PROFILE="${1:-workspace}"
PROFILE_DIR="/opt/agency-workspace/.fleet-config/google-cloud/gws/profiles/$PROFILE"

if [[ ! -d "$PROFILE_DIR" ]]; then
  echo "ERROR: gws profile dir not found: $PROFILE_DIR" >&2
  echo "Available profiles:" >&2
  ls /opt/agency-workspace/.fleet-config/google-cloud/gws/profiles/ >&2
  exit 1
fi

export GOOGLE_WORKSPACE_CLI_CONFIG_DIR="$PROFILE_DIR"

# Resolve the authed sender so reporting matches reality
FROM=$(gws auth status 2>/dev/null | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('user',''))")
if [[ -z "$FROM" ]]; then
  echo "ERROR: gws profile '$PROFILE' not authenticated. Run: GOOGLE_WORKSPACE_CLI_CONFIG_DIR=$PROFILE_DIR gws auth login" >&2
  exit 1
fi

TIMESTAMP=$(date +%Y%m%d-%H%M%S)

echo "=== Email Delivery Test ==="
echo "Profile: $PROFILE ($PROFILE_DIR)"
echo "From: $FROM"
echo "Timestamp: $TIMESTAMP"
echo ""

# Addresses aligned with Decision 2026-04-24 (email forwarding restore).
# Active = should deliver today. Pending = awaiting client input.
# brian@/chris@/tori@/dispatch@/jobs@/sales@ are intentionally NOT provisioned
# per Elliott's preference — do not re-add them without a new decision.
ADDRESSES_ACTIVE=(
  "elliott@axletowing.com"    # Group -> elliott.axletowing@gmail.com
  "info@axletowing.com"       # Workspace user (dormant)
  "admin@axletowing.com"      # Super Admin mailbox
)
ADDRESSES_PENDING=(
  "victoria@axletowing.com"   # Group pending Victoria's personal Gmail address
)
ADDRESSES=("${ADDRESSES_ACTIVE[@]}" "${ADDRESSES_PENDING[@]}")

PASS=()
FAIL=()

for addr in "${ADDRESSES[@]}"; do
  echo "Sending test to: $addr"

  SUBJECT="[TEST-$TIMESTAMP] Email delivery test for $addr"
  BODY="This is an automated test email sent at $TIMESTAMP to verify delivery to $addr. If you received this email, the address is working correctly."

  # This is a deliberate infrastructure test to known axletowing.com addresses.
  # Bypass the Obsidian contact gate — shared aliases (info@, dispatch@) and
  # secondary team members (brian, tori, chris) don't have Obsidian profiles.
  OUT=$(FLEET_COMMS_GATE_BYPASS=1 gws gmail +send --to "$addr" --subject "$SUBJECT" --body "$BODY" 2>&1)
  RC=$?
  if [[ $RC -eq 0 ]]; then
    echo "  Sent OK"
    PASS+=("$addr")
  else
    echo "  FAILED: $(echo "$OUT" | head -1)"
    FAIL+=("$addr")
  fi
done

echo ""
echo "=== Test emails sent ==="
echo "Sent OK: ${#PASS[@]} / ${#ADDRESSES[@]}"
echo "Failed:  ${#FAIL[@]} / ${#ADDRESSES[@]}"
if (( ${#FAIL[@]} > 0 )); then
  echo ""
  echo "Failed addresses:"
  for a in "${FAIL[@]}"; do echo "  - $a"; done
fi
echo ""
echo "Check each inbox for messages with subject containing: TEST-$TIMESTAMP"
echo ""
echo "Verification checklist:"
for addr in "${ADDRESSES[@]}"; do
  echo "  [ ] $addr"
done
echo ""
echo "Verify via bounce check (after ~30s):"
echo "  GOOGLE_WORKSPACE_CLI_CONFIG_DIR=$PROFILE_DIR \\"
echo "    gws gmail users messages list --params \\"
echo "    '{\"userId\":\"me\",\"q\":\"from:mailer-daemon newer_than:1h\",\"maxResults\":20}'"
echo ""
echo "Expected bounces:"
echo "  - victoria@axletowing.com (PENDING — Group not yet created)"
echo "Expected OK:"
echo "  - elliott@axletowing.com (Group -> Elliott's personal Gmail)"
echo "  - info@axletowing.com (Workspace user)"
echo "  - admin@axletowing.com (Super Admin mailbox)"
