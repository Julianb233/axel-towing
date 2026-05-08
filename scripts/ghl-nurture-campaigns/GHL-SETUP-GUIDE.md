# GHL Nurture Campaign Setup Guide

**Task:** AI-7461
**Workflows:** 7 nurture campaign automations
**Source:** docs/NURTURE-CAMPAIGN-SEQUENCES.md

## Pre-Setup Checklist

Before creating workflows, configure these in GHL:

### 1. Pipeline: "Property Accounts"
Create with stages: New Lead > Contacted > Engaged > Call Booked > Proposal Sent > Active Account > On Hold > Closed Lost > Referred

### 2. Tags (19 required)
Create all tags listed in `nurture-workflow-configs.json` under `tags_required`.

### 3. Custom Fields (7 required)
Create all fields listed in `nurture-workflow-configs.json` under `custom_fields_required`.

### 4. Email Settings
- From Name: Elliott -- Axle Towing
- From Email: elliott@axletowing.com
- Verify domain in GHL email settings

## Workflow Setup Order

Build in this order (dependencies flow downward):

| # | Workflow | File | Trigger |
|---|----------|------|---------|
| 1 | Cold Outreach | workflow-1-cold-outreach.json | Pipeline: New Lead |
| 2 | HOA Board Member | workflow-2-hoa-board-member.json | Tag: hoa-board-member |
| 3 | Property Manager | workflow-3-property-manager.json | Tag: property-manager |
| 4 | Re-Engagement | workflow-4-re-engagement.json | Tag: on-hold (30+ days) |
| 5 | Retention Quarterly | workflow-5-retention-quarterly.json | Tag: active-account (90-day recurrence) |
| 6 | Renewal Reminder | workflow-6-renewal-reminder.json | Custom field date: 60 days before |
| 7 | Referral Thank-You | workflow-7-referral-thank-you.json | Tag: referred-us |

## For Each Workflow

1. Go to GHL > Automation > Workflows > Create Workflow
2. Set the trigger from the JSON file
3. Add steps in order (email, wait, SMS, voicemail, tag actions)
4. Paste email body from the corresponding `templates/*.html` file
5. Set subject lines from the JSON
6. Configure send windows (email: 8-5 M-F, SMS: 9-4 M-F, voicemail: 10-12 T-Th)
7. Add stop conditions (reply detection, tag-based stops)
8. Save as Draft, test with a test contact, then Activate

## Send Windows (America/Phoenix timezone)

| Channel | Window | Days |
|---------|--------|------|
| Email | 8:00 AM - 5:00 PM | Monday - Friday |
| SMS | 9:00 AM - 4:00 PM | Monday - Friday |
| Voicemail | 10:00 AM - 12:00 PM | Tuesday - Thursday |

## Testing

For each workflow:
1. Create a test contact with tag "test-nurture"
2. Apply the trigger (add tag or move to pipeline stage)
3. Verify first email sends immediately
4. Manually advance the workflow to check each step
5. Verify stop conditions work (reply detection, tag-based)
6. Remove test contact from workflow after testing

## File Inventory

```
scripts/ghl-nurture-campaigns/
  nurture-workflow-configs.json    -- Master config with all workflows, tags, fields
  GHL-SETUP-GUIDE.md              -- This file
  workflow-1-cold-outreach.json    -- Cold prospect 21-day sequence
  workflow-2-hoa-board-member.json -- HOA board 25-day sequence
  workflow-3-property-manager.json -- PM 28-day sequence
  workflow-4-re-engagement.json    -- Dormant account 14-day win-back
  workflow-5-retention-quarterly.json -- Active account quarterly check-in
  workflow-6-renewal-reminder.json -- Contract renewal 53-day reminder
  workflow-7-referral-thank-you.json  -- Instant referral thank-you
  templates/
    cold-email-1.html through cold-email-3.html
    hoa-email-1.html through hoa-email-5.html
    pm-email-1.html through pm-email-5.html
    reengage-email-1.html, reengage-email-2.html
    retention-quarterly.html
    renewal-email-1.html through renewal-email-3.html
    referral-thank-you.html
```
