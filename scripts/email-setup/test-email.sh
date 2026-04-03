#!/usr/bin/env bash
# Send test emails to verify all addresses are working
# Usage: ./test-email.sh <from-email>
# Example: ./test-email.sh julian@aiacrobatics.com
#
# Sends a test email to every configured address and checks for delivery

set -euo pipefail
source "$(dirname "$0")/config.sh"

FROM="${1:-julian@aiacrobatics.com}"
TIMESTAMP=$(date +%Y%m%d-%H%M%S)

echo "=== Email Delivery Test ==="
echo "From: $FROM"
echo "Timestamp: $TIMESTAMP"
echo ""

# All addresses to test
ADDRESSES=(
  "elliott@axletowing.com"
  "brian@axletowing.com"
  "tori@axletowing.com"
  "chris@axletowing.com"
  "info@axletowing.com"
  "dispatch@axletowing.com"
  "jobs@axletowing.com"
  "sales@axletowing.com"
  "elliott@axeltowing.com"
  "info@axeltowing.com"
  "dispatch@axeltowing.com"
)

for addr in "${ADDRESSES[@]}"; do
  echo "Sending test to: $addr"

  SUBJECT="[TEST-$TIMESTAMP] Email delivery test for $addr"
  BODY="This is an automated test email sent at $TIMESTAMP to verify delivery to $addr. If you received this email, the address is working correctly."

  RAW=$(echo -n "From: $FROM
To: $addr
Subject: $SUBJECT
Content-Type: text/plain; charset=utf-8

$BODY" | base64 -w 0)

  gws gmail users messages send \
    --params "{\"userId\": \"$FROM\"}" \
    --json "{\"raw\": \"$RAW\"}" \
    2>/dev/null && echo "  Sent OK" || echo "  FAILED to send"
done

echo ""
echo "=== Test emails sent ==="
echo "Check each inbox for messages with subject containing: TEST-$TIMESTAMP"
echo ""
echo "Verification checklist:"
for addr in "${ADDRESSES[@]}"; do
  echo "  [ ] $addr"
done
echo ""
echo "Also verify:"
echo "  [ ] Misspelled-Domain label applied to @axeltowing.com emails"
echo "  [ ] Labels applied correctly by filters"
echo "  [ ] Group emails (info@, dispatch@, etc.) delivered to all members"
