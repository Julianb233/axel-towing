#!/usr/bin/env bash
# Verify DNS configuration for email setup
# Run this after DNS changes to confirm everything is correct
# Usage: ./verify-dns.sh

set -euo pipefail
source "$(dirname "$0")/config.sh"

PASS=0
FAIL=0

check() {
  local desc="$1"
  local cmd="$2"
  local expect="$3"

  result=$(eval "$cmd" 2>/dev/null || true)
  if echo "$result" | grep -qi "$expect"; then
    echo "  PASS: $desc"
    ((PASS++))
  else
    echo "  FAIL: $desc"
    echo "    Expected to find: $expect"
    echo "    Got: $result"
    ((FAIL++))
  fi
}

echo "=== DNS Verification for $PRIMARY_DOMAIN ==="
echo ""

echo "MX Records ($PRIMARY_DOMAIN):"
check "Primary MX" "dig MX $PRIMARY_DOMAIN +short" "aspmx.l.google.com"
check "Alt MX 1" "dig MX $PRIMARY_DOMAIN +short" "alt1.aspmx.l.google.com"
check "Alt MX 2" "dig MX $PRIMARY_DOMAIN +short" "alt2.aspmx.l.google.com"

echo ""
echo "SPF Record ($PRIMARY_DOMAIN):"
check "SPF includes Google" "dig TXT $PRIMARY_DOMAIN +short" "_spf.google.com"

echo ""
echo "DKIM Record ($PRIMARY_DOMAIN):"
check "DKIM key exists" "dig TXT google._domainkey.$PRIMARY_DOMAIN +short" "v=DKIM1"

echo ""
echo "DMARC Record ($PRIMARY_DOMAIN):"
check "DMARC policy" "dig TXT _dmarc.$PRIMARY_DOMAIN +short" "v=DMARC1"

echo ""
echo "=== DNS Verification for $MISSPELLED_DOMAIN ==="
echo ""

echo "MX Records ($MISSPELLED_DOMAIN):"
check "Primary MX (misspelled)" "dig MX $MISSPELLED_DOMAIN +short" "aspmx.l.google.com"

echo ""
echo "SPF Record ($MISSPELLED_DOMAIN):"
check "SPF (misspelled)" "dig TXT $MISSPELLED_DOMAIN +short" "_spf.google.com"

echo ""
echo "=== Results ==="
echo "Passed: $PASS"
echo "Failed: $FAIL"
echo ""

if [ "$FAIL" -eq 0 ]; then
  echo "All checks passed. DNS is correctly configured."
else
  echo "Some checks failed. DNS changes may need 24-48 hours to propagate."
  echo "If issues persist after propagation, check SETUP-GUIDE.md for correct values."
fi
