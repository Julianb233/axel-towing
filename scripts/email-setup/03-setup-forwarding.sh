#!/usr/bin/env bash
# Step 3: Set up email forwarding for misspelled domain (axeltowing.com -> axletowing.com)
# This configures forwarding addresses on each account so emails to @axeltowing.com
# arrive at the correct @axletowing.com inbox.
#
# PREREQUISITE: axeltowing.com must be added as a domain alias in Google Workspace Admin Console
# Usage: ./03-setup-forwarding.sh

set -euo pipefail
source "$(dirname "$0")/config.sh"

echo "=== Misspelled Domain Forwarding Setup ==="
echo ""
echo "This script sets up forwarding so emails to @axeltowing.com"
echo "reach the correct @axletowing.com inboxes."
echo ""

# For each team member, set up forwarding from misspelled to correct
for member in "${!TEAM_ACCOUNTS[@]}"; do
  correct="${member}@${PRIMARY_DOMAIN}"
  misspelled="${member}@${MISSPELLED_DOMAIN}"

  echo "Setting up forwarding: $misspelled -> $correct"

  # Add the correct address as a forwarding target
  gws gmail users settings forwardingAddresses create \
    --params "{\"userId\": \"$misspelled\"}" \
    --json "{\"forwardingEmail\": \"$correct\"}" \
    2>/dev/null && echo "  Forwarding address added" || echo "  Already exists or needs verification"

  # Enable auto-forwarding
  gws gmail users settings updateAutoForwarding \
    --params "{\"userId\": \"$misspelled\"}" \
    --json "{
      \"enabled\": true,
      \"emailAddress\": \"$correct\",
      \"disposition\": \"leaveInInbox\"
    }" 2>/dev/null && echo "  Auto-forwarding enabled" || echo "  Error enabling forwarding"

  echo ""
done

# Also set up forwarding for shared aliases
for alias in "${!ALIAS_FORWARDS[@]}"; do
  misspelled="${alias}@${MISSPELLED_DOMAIN}"
  correct="${alias}@${PRIMARY_DOMAIN}"

  echo "Shared alias forwarding: $misspelled -> $correct"
  echo "  (Handled by domain alias in Admin Console)"
done

echo ""
echo "=== Domain Alias Method (Recommended) ==="
echo ""
echo "Instead of per-user forwarding, the simpler approach is:"
echo "1. Add axeltowing.com as a domain alias in Google Workspace Admin Console"
echo "2. This automatically routes ALL @axeltowing.com emails to @axletowing.com"
echo "3. No per-user configuration needed"
echo ""
echo "Steps:"
echo "  Admin Console -> Account -> Domains -> Manage Domains -> Add a domain alias"
echo "  Enter: axeltowing.com"
echo "  Verify domain ownership (add DNS TXT record)"
echo ""
echo "This is the approach configured in SETUP-GUIDE.md"
