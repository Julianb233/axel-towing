#!/usr/bin/env bash
# Step 1: Create Gmail labels for email organization
# Run this AFTER Google Workspace accounts are created
# Usage: ./01-create-labels.sh <user-email>
# Example: ./01-create-labels.sh elliott@axletowing.com

set -euo pipefail
source "$(dirname "$0")/config.sh"

USER_EMAIL="${1:-$ADMIN_EMAIL}"

echo "Creating labels for $USER_EMAIL..."

for label in "${LABELS[@]}"; do
  echo "  Creating label: $label"
  gws gmail users labels create \
    --params "{\"userId\": \"$USER_EMAIL\"}" \
    --json "{
      \"name\": \"$label\",
      \"labelListVisibility\": \"labelShow\",
      \"messageListVisibility\": \"show\"
    }" 2>/dev/null && echo "    OK" || echo "    Already exists or error"
done

echo ""
echo "Labels created for $USER_EMAIL"
echo "To create for all team members, run:"
for member in "${!TEAM_ACCOUNTS[@]}"; do
  echo "  ./01-create-labels.sh ${member}@${PRIMARY_DOMAIN}"
done
