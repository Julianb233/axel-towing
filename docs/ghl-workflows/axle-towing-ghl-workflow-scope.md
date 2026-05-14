---
client: Axle Towing
client_contact: Elliott
domain: axletowing.com
crm: GoHighLevel
status: approved-scope
updated: 2026-05-14
source_notes:
  - AI Acrobatics Vault/Projects/Axle Towing/2026-03-17 Elliott Towing - Website Strategy Meeting.md
  - AI Acrobatics Vault/Projects/Axle Towing/2026-03-24-elliot-axle-towing-website-email.md
  - AI Acrobatics Vault/Projects/Axle Towing/Axle Towing.md
---

# Axle Towing GHL Workflow Scope

This is the approved implementation scope for the Axle Towing GoHighLevel setup: workflow names, triggers, tags, custom fields, data hygiene rules, and website endpoint contracts. Client approval was confirmed in-session on 2026-05-14.

## Operating Goals

- Capture every website, call, chat, referral, review, contract, retention, and hiring lead into GHL.
- Normalize contact data before nurturing starts.
- Route urgent towing/impound work to dispatch quickly while keeping non-urgent business development leads in follow-up sequences.
- Keep TowBook as the operational system for manager/vehicle lookup flows while GHL owns lead tracking, nurturing, reviews, referrals, and relationship automation.
- Preserve source attribution for city/service SEO pages, ads, chat, forms, phone, referrals, and partner outreach.

## Pipelines

| Pipeline | Stages |
| --- | --- |
| Towing Leads | New Lead, Contact Attempted, Needs Dispatch, TowBook Routed, Won, Lost, No Response |
| Property / Contract Leads | New Property Lead, Discovery Needed, Proposal Sent, Contract Pending, Active Account, Renewal Due, Lost |
| Referral Partners | New Partner, Intro Sent, Follow-Up, Agreement Pending, Active Referral Partner, Dormant |
| Reviews / Reputation | Service Complete, Review Requested, Reminder Sent, Review Left, Issue Escalated |
| Hiring | New Applicant, Pre-Qualified, Needs Review, Interview Requested, Hired, Rejected |

## Tags

### Source Tags

- `source:website`
- `source:city-page`
- `source:service-page`
- `source:gbp`
- `source:ghl-chat`
- `source:phone`
- `source:towbook`
- `source:referral`
- `source:partner-outreach`
- `source:cold-outreach`
- `source:job-page`

### Lifecycle Tags

- `lead:new`
- `lead:nurture-active`
- `lead:dispatch-needed`
- `lead:towbook-routed`
- `lead:won`
- `lead:lost`
- `lead:no-response`
- `review-requested`
- `review-left`
- `contract-followup`
- `contract-renewal`
- `retention-active`
- `referral-requested`
- `referral-sent`
- `data:needs-cleanup`
- `data:duplicate-check`
- `consent:sms`
- `consent:email`
- `dnc:sms`
- `dnc:email`

### Lead Type Tags

- `type:consumer-tow`
- `type:impound`
- `type:vehicle-lookup`
- `type:property-manager`
- `type:apartment-community`
- `type:parking-lot`
- `type:locksmith-partner`
- `type:moving-company-partner`
- `type:rideshare-partner`
- `type:job-applicant`

## Custom Fields

| Field | Type | Required When | Notes |
| --- | --- | --- | --- |
| `lead_type` | single select | all contacts | Consumer Tow, Impound, Vehicle Lookup, Property Manager, Referral Partner, Job Applicant |
| `source_channel` | single select | all contacts | Website, City Page, GBP, GHL Chat, Phone, TowBook, Referral, Cold Outreach |
| `source_url` | URL | website/chat/form leads | Full landing page URL, including city/service page |
| `utm_source` | text | when available | Preserve ad/campaign attribution |
| `utm_medium` | text | when available | Preserve ad/campaign attribution |
| `utm_campaign` | text | when available | Preserve ad/campaign attribution |
| `service_city` | text | towing/property leads | Normalize to city name, not freeform address |
| `service_zip` | text | towing/property leads | 5-digit ZIP when known |
| `service_needed` | single select | towing leads | Tow, Impound, Vehicle Lookup, Private Property Tow, Relocation, Roadside |
| `urgency` | single select | towing leads | Now, Today, This Week, Not Urgent |
| `vehicle_year_make_model` | text | towing/impound leads | Raw vehicle detail |
| `license_plate` | text | vehicle lookup | Uppercase; strip spaces/dashes |
| `property_name` | text | property leads | Apartment, lot, commercial property, HOA, etc. |
| `property_address` | text | property leads | Full property address |
| `partner_category` | single select | referral partners | Locksmith, Moving Company, Parking, Rideshare, Property Manager, Other |
| `proposal_sent_date` | date | contract workflows | Used for proposal follow-up timers |
| `contract_start_date` | date | active contracts | Used for retention/renewal workflows |
| `contract_renewal_date` | date | active contracts | Used for renewal reminder workflow |
| `last_service_date` | date | review/retention | Triggers review request and retention check-in |
| `review_request_date` | date | review workflow | Prevents repeat asks too close together |
| `referral_requested_date` | date | retention/referral | Prevents over-asking |
| `data_hygiene_status` | single select | all contacts | Clean, Needs Review, Duplicate Suspected, Missing Consent, Missing Source |

## Data Hygiene Rules

1. Normalize phone numbers to E.164 before any SMS step.
2. Lowercase and trim email addresses.
3. De-duplicate by phone first, email second. If both differ but the same property/vehicle context is present, tag `data:duplicate-check` and hold nurture until reviewed.
4. Preserve the original `source_url`, UTM fields, and first-touch source. Do not overwrite first-touch data on later form submissions.
5. Use `lead_type`, `source_channel`, `service_city`, and `service_needed` before placing an opportunity in a pipeline.
6. Require SMS/email consent before sending nurture messages. If consent is missing, tag `data:needs-cleanup` and route to manual follow-up.
7. Stop all marketing nurture on `dnc:sms`, `dnc:email`, `lead:lost`, or manual DND.
8. Suppress review requests when a contact is tagged `issue:unresolved` or when the opportunity is marked Lost.
9. Keep customer-facing copy short, direct, and non-technical.
10. Every workflow must set a clear terminal tag or stage so contacts do not loop indefinitely.

## Website Endpoint Contract

The website should send structured payloads to GHL through server-side endpoints, not browser-only scripts.

| Website Surface | Expected Endpoint | GHL Action |
| --- | --- | --- |
| General contact form | `POST /api/ghl/contact` | Create/update contact, tag `source:website`, create Towing Leads opportunity |
| City/service SEO page form | `POST /api/ghl/contact` | Include `source_url`, `service_city`, `service_needed`, tag `source:city-page` or `source:service-page` |
| Tow request form | `POST /api/ghl/tow-request` | Tag `lead:dispatch-needed`, create Towing Leads opportunity at Needs Dispatch |
| Vehicle lookup | External TowBook link: `https://axletowing7900.towbook.net` | Keep in TowBook; optionally log lookup intent to GHL when website form captures contact |
| Property manager / contract form | `POST /api/ghl/property-lead` | Create Property / Contract Leads opportunity |
| Referral partner form | `POST /api/ghl/referral-partner` | Create Referral Partners opportunity |
| Job application form | `POST /api/ghl/job-application` | Create Hiring opportunity with pre-qualification fields |
| GHL chat widget | GHL native chat widget | Ensure `source:ghl-chat`; route by requested service |
| Review capture / post-service event | `POST /api/ghl/service-complete` | Set `last_service_date`, enter review workflow |

## Workflow Inventory

### 1. Axle Website Lead Intake + Dispatch Routing

Trigger: Website form submission, GHL chat lead, manual contact created with `source:website`, `source:city-page`, or `source:service-page`.

Actions: normalize contact fields, add source/lifecycle tags, create/update Towing Leads opportunity, route urgent tow/impound requests to Needs Dispatch, and notify dispatch/internal owner.

Exit: stop on `lead:won`, `lead:lost`, DND, or TowBook routed.

### 2. Axle Consumer Lead Nurture

Trigger: Towing Leads opportunity enters New Lead or Contact Attempted and is not urgent dispatch.

Actions: immediate acknowledgement, 30-minute follow-up, 1-day follow-up, 3-day final follow-up, then move to No Response.

Exit: stop on reply, booked tow, `lead:dispatch-needed`, `lead:won`, `lead:lost`, or DND.

### 3. Axle Property Lead Nurture

Trigger: property manager form, partner contact tagged `type:property-manager`, or Property / Contract Leads > New Property Lead.

Actions: intro message, 1-day case/example follow-up, 3-day meeting/check-in ask, 7-day final value follow-up, notify owner on high-intent complete records.

Exit: stop on reply, proposal sent, contract pending, lost, or DND.

### 4. Axle Referral Partner Outreach

Trigger: contact tagged `type:locksmith-partner`, `type:moving-company-partner`, `type:rideshare-partner`, or `source:partner-outreach`.

Actions: partner-category intro, add to Referral Partners pipeline, 2-day follow-up, 5-day best-contact ask, 14-day dormant mark.

Exit: stop on reply, agreement pending, active partner, dormant, or DND.

### 5. Axle Cold Lead Re-Engagement Nurture

Trigger: cold lead import, stale lead tagged `source:cold-outreach`, or no-response lead older than 30 days.

Actions: hygiene/consent check, low-pressure reconnect, 3-day second touch, 10-day final touch, mark No Response.

Exit: stop on reply, booked call/service, lost, or DND.

### 6. Axle Review Request Follow-Up

Trigger: `last_service_date` set or Service Complete stage, excluding contacts tagged `issue:unresolved`.

Actions: add `review-requested`, set `review_request_date`, send GBP review request, 2-day reminder, stop after 5-day window, escalate negative/unresolved replies.

Exit: stop on `review-left`, `issue:unresolved`, DND, or reminder window complete.

### 7. Axle Contract Proposal Follow-Up

Trigger: `proposal_sent_date` set or Property / Contract Leads stage = Proposal Sent.

Actions: add `contract-followup`, 1-day check-in, 3-day value/operations follow-up, 7-day close-the-loop ask, owner notification after unanswered touches.

Exit: stop on reply, Contract Pending, Active Account, Lost, or DND.

### 8. Axle Contract Renewal Reminder

Trigger: `contract_renewal_date` is 60 days away.

Actions: add `contract-renewal`, 60-day internal review, 45-day client check-in, 30-day renewal follow-up, 14-day final renewal reminder.

Exit: stop on renewed contract, lost account, or updated renewal date.

### 9. Axle Customer Retention + Referral Check-In

Trigger: Active Account has `contract_start_date` or last completed service is 30/60/90 days old.

Actions: add `retention-active`, send satisfaction check-in, request referral on positive response, tag `referral-requested`, tag `referral-sent` and create Referral Partners opportunity when submitted, escalate issues.

Exit: stop on issue escalation, referral sent, DND, or next scheduled retention window.

### 10. Axle Job Applicant Pre-Qualification Follow-Up

Trigger: job application form submission.

Actions: create Hiring opportunity, score pre-qualification answers, move qualified applicants to Pre-Qualified, notify owner, request missing info when incomplete, send rejection/hold only after internal approval.

Exit: stop on Hired, Rejected, DND, or manual owner review.

## Verification Checklist

- Workflow names match this document exactly.
- Workflow status is Published, not Draft.
- Each workflow persists after refresh.
- Each workflow has an exit condition.
- Test contact from each website endpoint lands in the correct GHL contact, tags, custom fields, and pipeline stage.
- Urgent tow test creates Needs Dispatch opportunity and internal notification.
- Review request suppression works for `issue:unresolved`.
- DND/contact consent suppression works for SMS and email.
- Session replay or screenshots are captured for the GHL UI setup.
