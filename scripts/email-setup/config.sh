#!/usr/bin/env bash
# Axle Towing - Google Workspace Email Configuration
# Domain: axletowing.com
# Misspelling domain: axeltowing.com (forward to axletowing.com)

# Primary domain
PRIMARY_DOMAIN="axletowing.com"
MISSPELLED_DOMAIN="axeltowing.com"

# Primary admin account (Elliott's account - created first in Google Workspace)
ADMIN_EMAIL="elliott@axletowing.com"

# Team members (individual accounts)
declare -A TEAM_ACCOUNTS=(
  ["elliott"]="Elliott - Owner"
  ["brian"]="Brian - Operations (25+ yrs experience)"
  ["tori"]="Tori - Team Member"
  ["chris"]="Chris - Team Member"
)

# Shared aliases (group addresses forwarding to relevant team members)
declare -A SHARED_ALIASES=(
  ["info"]="General inquiries -> elliott, brian"
  ["dispatch"]="Dispatch requests -> elliott, brian"
  ["jobs"]="Job applications -> elliott"
  ["sales"]="Sales inquiries -> elliott, brian"
)

# Forwarding rules: shared aliases -> team members
declare -A ALIAS_FORWARDS=(
  ["info"]="elliott brian"
  ["dispatch"]="elliott brian"
  ["jobs"]="elliott"
  ["sales"]="elliott brian"
)

# Current email (for migration reference)
CURRENT_EMAIL="axletowing@gmail.com"

# Labels for email organization
LABELS=(
  "Dispatch"
  "Dispatch/Urgent"
  "Dispatch/After-Hours"
  "Sales"
  "Sales/New-Lead"
  "Sales/Follow-Up"
  "Jobs"
  "Jobs/Applications"
  "Jobs/Screening"
  "HOA"
  "HOA/Contracts"
  "HOA/Violations"
  "Property-Management"
  "Referral-Partners"
  "Referral-Partners/Locksmiths"
  "Referral-Partners/Uber-Lyft"
  "Referral-Partners/Body-Shops"
  "Vehicle-Release"
  "Vehicle-Release/Payment"
  "Vehicle-Release/Inquiry"
  "TowBook"
  "Misspelled-Domain"
)
