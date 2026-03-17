#!/usr/bin/env bash
# Step 2: Create Gmail filters for auto-tagging and sorting
# Run this AFTER labels are created (01-create-labels.sh)
# Usage: ./02-create-filters.sh <user-email>
# Example: ./02-create-filters.sh elliott@axletowing.com

set -euo pipefail
source "$(dirname "$0")/config.sh"

USER_EMAIL="${1:-$ADMIN_EMAIL}"

echo "Setting up filters for $USER_EMAIL..."

# Helper function to create a filter
create_filter() {
  local criteria="$1"
  local action="$2"
  local desc="$3"

  echo "  Creating filter: $desc"
  gws gmail users settings filters create \
    --params "{\"userId\": \"$USER_EMAIL\"}" \
    --json "{
      \"criteria\": $criteria,
      \"action\": $action
    }" 2>/dev/null && echo "    OK" || echo "    Error creating filter"
}

# --- Dispatch filters ---
create_filter \
  '{"to": "dispatch@axletowing.com"}' \
  '{"addLabelIds": ["Label_Dispatch"], "removeLabelIds": []}' \
  "Tag dispatch@ emails"

create_filter \
  '{"subject": "urgent tow", "to": "dispatch@axletowing.com"}' \
  '{"addLabelIds": ["Label_Dispatch_Urgent"]}' \
  "Tag urgent dispatch emails"

create_filter \
  '{"to": "dispatch@axletowing.com", "query": "after:18:00 OR before:06:00"}' \
  '{"addLabelIds": ["Label_Dispatch_After-Hours"]}' \
  "Tag after-hours dispatch"

# --- Sales filters ---
create_filter \
  '{"to": "sales@axletowing.com"}' \
  '{"addLabelIds": ["Label_Sales"]}' \
  "Tag sales@ emails"

create_filter \
  '{"to": "sales@axletowing.com", "query": "is:unread newer_than:1d"}' \
  '{"addLabelIds": ["Label_Sales_New-Lead"]}' \
  "Tag new sales leads"

# --- Jobs/Careers filters ---
create_filter \
  '{"to": "jobs@axletowing.com"}' \
  '{"addLabelIds": ["Label_Jobs"]}' \
  "Tag jobs@ emails"

create_filter \
  '{"to": "jobs@axletowing.com", "query": "subject:(application OR resume OR apply)"}' \
  '{"addLabelIds": ["Label_Jobs_Applications"]}' \
  "Tag job applications"

# --- Info filters ---
create_filter \
  '{"to": "info@axletowing.com"}' \
  '{"addLabelIds": ["Label_Sales"]}' \
  "Tag info@ as sales"

# --- HOA/Property Management filters ---
create_filter \
  '{"query": "subject:(HOA OR \"homeowners association\" OR \"property management\")"}' \
  '{"addLabelIds": ["Label_HOA"]}' \
  "Tag HOA-related emails"

create_filter \
  '{"query": "subject:(contract OR agreement OR \"enforcement agreement\")"}' \
  '{"addLabelIds": ["Label_HOA_Contracts"]}' \
  "Tag contract emails"

# --- Vehicle Release filters ---
create_filter \
  '{"query": "subject:(release OR \"pick up\" OR \"get my car\" OR \"retrieve vehicle\")"}' \
  '{"addLabelIds": ["Label_Vehicle-Release"]}' \
  "Tag vehicle release inquiries"

create_filter \
  '{"query": "subject:(payment OR receipt OR invoice) (release OR vehicle OR tow)"}' \
  '{"addLabelIds": ["Label_Vehicle-Release_Payment"]}' \
  "Tag vehicle payment emails"

# --- Referral Partner filters ---
create_filter \
  '{"query": "subject:(referral OR partner OR \"towing services\") from:(*locksmith* OR *uber* OR *lyft* OR *bodyshop* OR *collision*)"}' \
  '{"addLabelIds": ["Label_Referral-Partners"]}' \
  "Tag referral partner emails"

# --- Misspelled domain filter ---
create_filter \
  '{"to": "*@axeltowing.com"}' \
  '{"addLabelIds": ["Label_Misspelled-Domain"]}' \
  "Tag emails from misspelled domain"

# --- TowBook filters ---
create_filter \
  '{"from": "*@towbook.com"}' \
  '{"addLabelIds": ["Label_TowBook"]}' \
  "Tag TowBook notifications"

echo ""
echo "Filters created for $USER_EMAIL"
echo ""
echo "NOTE: Label IDs above use placeholder names."
echo "After running 01-create-labels.sh, get actual label IDs with:"
echo "  gws gmail users labels list --params '{\"userId\": \"$USER_EMAIL\"}'"
echo "Then update filter label IDs accordingly."
echo ""
echo "The setup-all.sh script handles this automatically."
