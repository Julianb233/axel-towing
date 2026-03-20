#!/usr/bin/env bash
# Master setup script - runs all email configuration steps
# Usage: ./setup-all.sh <admin-email>
# Example: ./setup-all.sh elliott@axletowing.com
#
# PREREQUISITES:
# 1. Google Workspace account is active for axletowing.com
# 2. User accounts have been created in Admin Console
# 3. axeltowing.com has been added as a domain alias
# 4. gws CLI is authenticated with admin credentials
#
# See SETUP-GUIDE.md for the full setup procedure.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
source "$SCRIPT_DIR/config.sh"

ADMIN="${1:-$ADMIN_EMAIL}"

echo "============================================"
echo " Axle Towing - Google Workspace Email Setup"
echo "============================================"
echo ""
echo "Admin account: $ADMIN"
echo "Primary domain: $PRIMARY_DOMAIN"
echo "Alias domain: $MISSPELLED_DOMAIN"
echo ""

# Pre-flight check
echo "=== Pre-flight Checks ==="
if ! command -v gws &>/dev/null; then
  echo "ERROR: gws CLI not found. Install it first."
  exit 1
fi

# Test authentication
echo "Testing gws authentication..."
if ! gws gmail users getProfile --params "{\"userId\": \"$ADMIN\"}" &>/dev/null; then
  echo "ERROR: Cannot authenticate as $ADMIN"
  echo "Run: gws auth login --scopes gmail,admin"
  exit 1
fi
echo "Authentication OK"
echo ""

# Step 1: Labels
echo "=== Step 1: Creating Labels ==="
for member in "${!TEAM_ACCOUNTS[@]}"; do
  email="${member}@${PRIMARY_DOMAIN}"
  echo "--- $email (${TEAM_ACCOUNTS[$member]}) ---"
  bash "$SCRIPT_DIR/01-create-labels.sh" "$email"
  echo ""
done

# Step 2: Filters (on admin account - handles shared mailbox routing)
echo "=== Step 2: Creating Filters ==="
bash "$SCRIPT_DIR/02-create-filters.sh" "$ADMIN"
echo ""

# Step 3: Forwarding info
echo "=== Step 3: Domain Forwarding ==="
echo "Misspelled domain forwarding is handled by domain alias."
echo "Verify: axeltowing.com is configured as domain alias in Admin Console"
echo ""

# Step 4: Auto-reply templates
echo "=== Step 4: Auto-Reply Templates ==="
bash "$SCRIPT_DIR/04-auto-reply-templates.sh" "$ADMIN"
echo ""

# Step 5: Send-As aliases for admin
echo "=== Step 5: Send-As Aliases ==="
bash "$SCRIPT_DIR/05-send-as-aliases.sh" "$ADMIN"
echo ""

# Also set up send-as for Brian (operations)
echo "--- Brian's send-as aliases ---"
bash "$SCRIPT_DIR/05-send-as-aliases.sh" "brian@${PRIMARY_DOMAIN}"
echo ""

echo "============================================"
echo " Setup Complete!"
echo "============================================"
echo ""
echo "Remaining manual steps:"
echo "1. Enable Templates in Gmail settings for each user"
echo "2. Save the draft templates as named templates"
echo "3. Create filter rules using templates for auto-replies"
echo "4. Test by sending emails to each alias and misspelled variants"
echo "5. Verify the Misspelled-Domain label catches forwarded emails"
echo ""
echo "See SETUP-GUIDE.md for detailed instructions."
