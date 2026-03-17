#!/usr/bin/env bash
# Step 5: Configure "Send As" aliases
# Allows team members to send from shared addresses (info@, dispatch@, etc.)
#
# Usage: ./05-send-as-aliases.sh <user-email>
# Example: ./05-send-as-aliases.sh elliott@axletowing.com

set -euo pipefail
source "$(dirname "$0")/config.sh"

USER_EMAIL="${1:-$ADMIN_EMAIL}"

echo "Configuring Send-As aliases for $USER_EMAIL..."

SHARED_ADDRESSES=("info" "dispatch" "sales")

for alias in "${SHARED_ADDRESSES[@]}"; do
  ALIAS_EMAIL="${alias}@${PRIMARY_DOMAIN}"
  echo "  Adding send-as: $ALIAS_EMAIL"
  gws gmail users settings sendAs create \
    --params "{\"userId\": \"$USER_EMAIL\"}" \
    --json "{
      \"sendAsEmail\": \"$ALIAS_EMAIL\",
      \"displayName\": \"Axle Towing & Impound - ${alias^}\",
      \"replyToAddress\": \"$ALIAS_EMAIL\",
      \"treatAsAlias\": true
    }" 2>/dev/null && echo "    OK" || echo "    Already exists or error"
done

echo ""
echo "Send-As aliases configured for $USER_EMAIL"
echo ""
echo "Team members can now send emails appearing from shared addresses."
echo "In Gmail: Compose -> From dropdown -> Select the alias"
