# Axle Towing - Google Workspace Email Setup Guide

## Overview

Set up professional email for axletowing.com with:
- 4 individual accounts: elliott@, brian@, tori@, chris@
- 4 shared aliases: info@, dispatch@, jobs@, sales@
- Misspelled domain forwarding: axeltowing.com -> axletowing.com
- Auto-tagging, sorting, and reply templates

## Cost

- Google Workspace Business Starter: $7.20/user/month
- 4 users = $28.80/month
- axeltowing.com domain (if not owned): ~$12/year

## Prerequisites (Waiting on Elliott)

- [ ] Password preferences for email accounts
- [ ] Confirmation of which team members need accounts

## Phase 1: Google Workspace Account Setup (Admin Console)

### 1.1 Purchase Google Workspace

1. Go to https://workspace.google.com
2. Select "Business Starter" plan ($7.20/user/month)
3. Enter business info: Axle Towing & Impound, Phoenix AZ
4. Use axletowing.com as the primary domain

### 1.2 Verify Domain Ownership

Google will provide a TXT record to add to DNS.

**If domain is on GoDaddy:**
1. GoDaddy -> DNS Management -> axletowing.com
2. Add TXT record:
   - Type: TXT
   - Host: @
   - Value: (provided by Google)
   - TTL: 1 hour

**DNS Records for Email (add all of these):**

| Type | Host | Value | Priority |
|------|------|-------|----------|
| MX | @ | ASPMX.L.GOOGLE.COM | 1 |
| MX | @ | ALT1.ASPMX.L.GOOGLE.COM | 5 |
| MX | @ | ALT2.ASPMX.L.GOOGLE.COM | 5 |
| MX | @ | ALT3.ASPMX.L.GOOGLE.COM | 10 |
| MX | @ | ALT4.ASPMX.L.GOOGLE.COM | 10 |
| TXT | @ | v=spf1 include:_spf.google.com ~all | - |
| CNAME | mail | ghs.googlehosted.com | - |

**DKIM Setup:**
1. Admin Console -> Apps -> Google Workspace -> Gmail -> Authenticate Email
2. Generate DKIM key for axletowing.com
3. Add the provided CNAME record to DNS

**DMARC Record:**

| Type | Host | Value |
|------|------|-------|
| TXT | _dmarc | v=DMARC1; p=quarantine; rua=mailto:dmarc@axletowing.com |

### 1.3 Create User Accounts

In Admin Console -> Directory -> Users -> Add new user:

| First Name | Last Name | Email | Org Unit |
|------------|-----------|-------|----------|
| Elliott | (Owner) | elliott@axletowing.com | / |
| Brian | (Operations) | brian@axletowing.com | / |
| Tori | - | tori@axletowing.com | / |
| Chris | - | chris@axletowing.com | / |

- Set passwords per Elliott's preferences
- Make Elliott a Super Admin

### 1.4 Create Groups (Shared Aliases)

Admin Console -> Directory -> Groups -> Create group:

**info@axletowing.com**
- Name: General Info
- Members: elliott@, brian@
- Who can email: Anyone on the internet
- Who can view: Group members

**dispatch@axletowing.com**
- Name: Dispatch
- Members: elliott@, brian@
- Who can email: Anyone on the internet
- Who can view: Group members

**jobs@axletowing.com**
- Name: Jobs & Careers
- Members: elliott@
- Who can email: Anyone on the internet
- Who can view: Group members

**sales@axletowing.com**
- Name: Sales
- Members: elliott@, brian@
- Who can email: Anyone on the internet
- Who can view: Group members

## Phase 2: Misspelled Domain Setup

### 2.1 Purchase axeltowing.com

If not already owned, purchase from GoDaddy, Namecheap, or Google Domains.

### 2.2 Add as Domain Alias

Admin Console -> Account -> Domains -> Manage Domains -> Add a domain or domain alias:
- Select "Domain alias"
- Enter: axeltowing.com
- Verify ownership (add DNS TXT record to axeltowing.com)

### 2.3 DNS for axeltowing.com

Add the same MX records to axeltowing.com:

| Type | Host | Value | Priority |
|------|------|-------|----------|
| MX | @ | ASPMX.L.GOOGLE.COM | 1 |
| MX | @ | ALT1.ASPMX.L.GOOGLE.COM | 5 |
| MX | @ | ALT2.ASPMX.L.GOOGLE.COM | 5 |
| MX | @ | ALT3.ASPMX.L.GOOGLE.COM | 10 |
| MX | @ | ALT4.ASPMX.L.GOOGLE.COM | 10 |
| TXT | @ | v=spf1 include:_spf.google.com ~all | - |

**Result:** Any email to `*@axeltowing.com` automatically arrives at `*@axletowing.com`.
elliott@axeltowing.com -> elliott@axletowing.com, info@axeltowing.com -> info@axletowing.com, etc.

This solves the ~50 missed emails/year from misspellings.

## Phase 3: Automation Scripts

After accounts are created and domains verified, run the automation:

```bash
cd scripts/email-setup/
chmod +x *.sh

# Authenticate gws CLI
gws auth login --scopes gmail

# Run full setup
./setup-all.sh elliott@axletowing.com
```

This creates:
- Gmail labels for categorization (Dispatch, Sales, HOA, Jobs, Vehicle-Release, etc.)
- Gmail filters for auto-tagging incoming mail
- Draft email templates for common responses
- Send-As aliases so team can send from shared addresses

## Phase 4: Gmail Filter Rules for Auto-Sorting

These are created by the scripts, but here is the logic:

| Incoming To | Label Applied | Additional Action |
|-------------|---------------|-------------------|
| dispatch@ | Dispatch | Star, mark important |
| sales@ | Sales/New-Lead | None |
| info@ | Sales | None |
| jobs@ | Jobs/Applications | None |
| *@axeltowing.com | Misspelled-Domain | None (tracking) |
| (from TowBook) | TowBook | None |
| (subject: HOA) | HOA | None |
| (subject: release) | Vehicle-Release | None |

## Phase 5: Auto-Reply Templates

Templates are created as drafts. To activate:

1. **Enable Templates**: Gmail -> Settings (gear) -> See all settings -> Advanced -> Templates -> Enable -> Save
2. **Save as templates**: Open each draft -> More (three dots) -> Templates -> Save draft as template
3. **Create auto-reply filters**: Settings -> Filters -> Create filter -> (match criteria) -> Send template

### Template List

| Template | Trigger | Use Case |
|----------|---------|----------|
| General Inquiry | Emails to info@ | Auto-acknowledge general questions |
| Vehicle Release | Subject contains "release", "pick up", "get my car" | Auto-send retrieval instructions |
| Job Application | Emails to jobs@ | Acknowledge receipt of applications |
| HOA/Property Inquiry | Subject contains "HOA", "property management" | Auto-send service overview |
| After-Hours Dispatch | Emails to dispatch@ outside 9-5 | Direct to phone for urgent needs |

## Phase 6: Migration from Gmail (axletowing@gmail.com)

### 6.1 Import Existing Emails

Admin Console -> Data Migration:
1. Source: Gmail (axletowing@gmail.com)
2. Destination: elliott@axletowing.com
3. Migrate: Email, Contacts, Calendar
4. This preserves all existing correspondence

### 6.2 Set Up Forwarding on Old Account

On axletowing@gmail.com:
1. Settings -> Forwarding -> Add forwarding address: info@axletowing.com
2. Verify the forwarding
3. Select "Forward a copy and keep in inbox" (temporarily)
4. After 30 days of no issues, switch to "Forward and archive"

### 6.3 Update Everywhere

After migration, update the email address on:
- [ ] Business cards
- [ ] Google Business Profile (Google Maps listing)
- [ ] TowBook account
- [ ] Insurance documents
- [ ] Arizona DOT registration
- [ ] Vehicle window decals (currently shows axletowing.com URL)
- [ ] Voicemail recordings
- [ ] Social media profiles
- [ ] Any partner/HOA contracts

## DNS Verification Checklist

After all DNS changes, verify with:

```bash
# Check MX records
dig MX axletowing.com +short
dig MX axeltowing.com +short

# Check SPF
dig TXT axletowing.com +short | grep spf

# Check DKIM (after setup)
dig TXT google._domainkey.axletowing.com +short

# Check DMARC
dig TXT _dmarc.axletowing.com +short
```

Expected MX output:
```
1 aspmx.l.google.com.
5 alt1.aspmx.l.google.com.
5 alt2.aspmx.l.google.com.
10 alt3.aspmx.l.google.com.
10 alt4.aspmx.l.google.com.
```

## Testing Checklist

After setup, verify each address:

- [ ] Send test to elliott@axletowing.com - arrives in Elliott's inbox
- [ ] Send test to brian@axletowing.com - arrives in Brian's inbox
- [ ] Send test to tori@axletowing.com - arrives in Tori's inbox
- [ ] Send test to chris@axletowing.com - arrives in Chris's inbox
- [ ] Send test to info@axletowing.com - arrives for Elliott AND Brian
- [ ] Send test to dispatch@axletowing.com - arrives for Elliott AND Brian
- [ ] Send test to jobs@axletowing.com - arrives for Elliott
- [ ] Send test to sales@axletowing.com - arrives for Elliott AND Brian
- [ ] Send test to elliott@axeltowing.com - arrives in Elliott's inbox (misspelling)
- [ ] Send test to info@axeltowing.com - arrives for Elliott AND Brian (misspelling)
- [ ] Verify Misspelled-Domain label is applied to forwarded emails
- [ ] Verify auto-reply templates are saved and working
- [ ] Verify labels are applied by filters
- [ ] Elliott can send as info@axletowing.com
- [ ] Brian can send as dispatch@axletowing.com

## Troubleshooting

**Emails not arriving:**
1. Check MX records: `dig MX axletowing.com +short`
2. Wait 24-48 hours for DNS propagation
3. Check spam folder
4. Verify domain is verified in Admin Console

**Misspelled domain not forwarding:**
1. Confirm axeltowing.com is added as domain alias (not separate domain)
2. Check MX records on axeltowing.com
3. Verify domain ownership in Admin Console

**Filters not working:**
1. Check filter criteria matches exactly
2. Labels must exist before filters reference them
3. Run `01-create-labels.sh` before `02-create-filters.sh`

**Cannot send as alias:**
1. Verify the group exists in Admin Console
2. User must be a member of the group
3. Run `05-send-as-aliases.sh` for the user
