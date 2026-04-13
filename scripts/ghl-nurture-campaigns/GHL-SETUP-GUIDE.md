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

| # | Workflow | File | Trigger | Duration |
|---|----------|------|---------|----------|
| 1 | Cold Outreach | workflow-1-cold-outreach.json | Pipeline: New Lead | 21 days |
| 2 | HOA Board Member | workflow-2-hoa-board-member.json | Tag: hoa-board-member | 25 days |
| 3 | Property Manager | workflow-3-property-manager.json | Tag: property-manager | 28 days |
| 4 | Re-Engagement | workflow-4-re-engagement.json | Tag: on-hold (30+ days) | 14 days |
| 5 | Retention | workflow-5-retention-quarterly.json | Tag: active-account (90-day) | Recurring |
| 6 | Renewal | workflow-6-renewal-reminder.json | Custom field date: 60 days before | 53 days |
| 7 | Referral Thank-You | workflow-7-referral-thank-you.json | Tag: referred-us | Instant |

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

## File Inventory

```
scripts/ghl-nurture-campaigns/
  nurture-workflow-configs.json       -- Master config
  GHL-SETUP-GUIDE.md                  -- This file
  workflow-1-cold-outreach.json       -- 21-day multi-channel
  workflow-2-hoa-board-member.json    -- 25-day email
  workflow-3-property-manager.json    -- 28-day email
  workflow-4-re-engagement.json       -- 14-day win-back
  workflow-5-retention-quarterly.json -- Recurring quarterly
  workflow-6-renewal-reminder.json    -- 53-day renewal
  workflow-7-referral-thank-you.json  -- Instant trigger
  templates/
    cold-email-{1,2,3}.html          -- Cold outreach emails
    hoa-email-{1,2,3,4,5}.html       -- HOA board member emails
    pm-email-{1,2,3,4,5}.html        -- Property manager emails
    reengage-email-{1,2}.html        -- Re-engagement emails
    retention-quarterly.html          -- Quarterly check-in
    renewal-email-{1,2,3}.html       -- Contract renewal emails
    referral-thank-you.html           -- Referral thank-you
```
