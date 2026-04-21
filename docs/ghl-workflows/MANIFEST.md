# GHL Email Workflow Manifest — Axle Towing

**Linear:** AI-8344
**Purpose:** Single source of truth for all 14 email workflows Axle needs wired into the GoHighLevel Automation Builder UI.
**Consumer:** Browserbase-enabled agent doing the GHL UI wiring (multi-hour task).
**Client:** Elliott (+18057602314). Must approve all outbound-facing copy before activation.
**Reviewed:** 2026-04-20 (Bussit Worker #2)

---

## How To Use This Document

Each workflow below is one entry that maps directly to a single **GHL > Automation > Workflow** to build:

- **Workflow ID (slug):** use this as the GHL workflow name (short, hyphenated).
- **Trigger:** the GHL workflow trigger category (tag applied, form submitted, webhook, manual, etc.).
- **Template file paths:** exact paths (absolute from repo root) where the email copy currently lives. If `BUILT`, the HTML is in `website/src/lib/email-templates.ts`; if `DOC-ONLY`, copy lives in markdown under `docs/` and has NOT been converted to branded HTML yet.
- **Status:**
  - `BUILT` — HTML + merge fields in `email-templates.ts`, pasteable into GHL email editor with minor tweaks.
  - `NEEDS-COPY-EDIT` — copy exists (markdown) but not yet in branded HTML form.
  - `MISSING` — referenced in strategy but no copy exists yet.
- **Estimated GHL nodes:** rough count of Automation Builder steps (trigger + wait + email + branch + tag + end) the agent will drop in.

**Workflow engine note:** The in-repo file `website/src/app/api/cron/workflows/route.ts` imports `@/lib/workflows/engine` — that module does NOT exist in the repo. There is no in-code workflow engine; GHL will handle all sequencing. Leave the cron route alone for now.

---

## Core Sequence Count: 14 Workflows

| # | Slug | Trigger | Emails | Status | GHL Nodes (est.) |
|---|------|---------|--------|--------|------------------|
| 1 | `cold-pm-introduction` | Tag `outbound-pm-cold` applied OR CSV import | 3 | DOC-ONLY | 8 |
| 2 | `cold-hoa-board-member` | Tag `outbound-hoa-cold` applied | 3 | DOC-ONLY | 8 |
| 3 | `cold-apartment-complex` | Tag `outbound-apartment-cold` applied | 3 | DOC-ONLY | 8 |
| 4 | `cold-commercial-owner` | Tag `outbound-commercial-cold` applied | 3 | DOC-ONLY | 8 |
| 5 | `cold-post-event-followup` | Tag `event-followup` applied | 3 | DOC-ONLY | 8 |
| 6 | `nurture-pm-inbound` | Form submit (`/contact`, `/quote`, exit-intent) with `propertyType=apartment\|commercial\|hoa` | 5 | BUILT | 12 |
| 7 | `nurture-reengagement` | Tag `stage-on-hold` applied after 60d inactivity | 3 (2 email + 1 SMS) | DOC-ONLY | 9 |
| 8 | `nurture-retention-quarterly` | Active client: 90d since last check-in | 1 recurring | DOC-ONLY | 4 |
| 9 | `nurture-retention-annual-renewal` | Active client: 60d before renewal date | 5 | DOC-ONLY | 12 |
| 10 | `referral-locksmith` | Tag `referral-locksmith` applied | 3 | BUILT | 8 |
| 11 | `referral-mechanic` | Tag `referral-mechanic` applied | 3 | BUILT | 8 |
| 12 | `referral-uber-lyft` | Tag `referral-rideshare` applied | 3 | DOC-ONLY | 8 |
| 13 | `referral-parking-permit` | Tag `referral-permit-co` applied | 3 | DOC-ONLY | 8 |
| 14 | `transactional-vehicle-retrieval` | Vehicle impounded (API webhook from TowBook) | 3+ | BUILT | 10 |

**Totals:** 14 workflows, ~128 GHL Automation Builder nodes to wire. Estimate 12-20 minutes of click-wiring per workflow (3-6 hours total for a Browserbase agent once Elliott approves copy).

---

## Per-Workflow Detail

### 1. cold-pm-introduction (3 emails, DOC-ONLY)

- **Trigger:** Tag `outbound-pm-cold` applied to contact, OR CSV import with that tag.
- **Sequence:** Day 1 initial outreach → Day 3 value-add → Day 7 breakup.
- **Template source:** `docs/COLD-EMAIL-SEQUENCES.md` lines 34-112 (all 3 emails in markdown).
- **Status:** `NEEDS-COPY-EDIT` — convert the 3 markdown emails to branded HTML matching `emailWrapper()` style from `email-templates.ts`. Add to `email-templates.ts` as a new `cold-pm` SequenceType, OR paste directly into GHL email editor.
- **Merge fields:** `{{first_name}}`, `{{property_name}}`, `{{city}}`, `{{company}}`.
- **GHL nodes:** Trigger → Email 1 → Wait 3d → Email 2 → Wait 4d → Email 3 → Tag `cold-sequence-complete` → End (8 nodes).
- **Exit condition:** Reply received OR form submission from same email → move to `nurture-pm-inbound`.

### 2. cold-hoa-board-member (3 emails, DOC-ONLY)

- **Trigger:** Tag `outbound-hoa-cold` applied.
- **Sequence:** Day 1 initial → Day 5 social proof → Day 10 breakup.
- **Template source:** `docs/COLD-EMAIL-SEQUENCES.md` lines 121-199.
- **Status:** `NEEDS-COPY-EDIT` — markdown only.
- **Merge fields:** `{{first_name}}`, `{{hoa_name}}`, `{{city}}`, `{{unit_count}}`.
- **GHL nodes:** 8. Same pattern as #1 with longer waits.

### 3. cold-apartment-complex (3 emails, DOC-ONLY)

- **Trigger:** Tag `outbound-apartment-cold` applied.
- **Sequence:** Day 1 → Day 4 pain-point → Day 7 breakup.
- **Template source:** `docs/COLD-EMAIL-SEQUENCES.md` lines 209-285.
- **Status:** `NEEDS-COPY-EDIT`.
- **Merge fields:** `{{first_name}}`, `{{property_name}}`, `{{city}}`, `{{unit_count}}`.
- **GHL nodes:** 8.

### 4. cold-commercial-owner (3 emails, DOC-ONLY)

- **Trigger:** Tag `outbound-commercial-cold` applied.
- **Sequence:** Day 1 → Day 4 ROI → Day 7 breakup.
- **Template source:** `docs/COLD-EMAIL-SEQUENCES.md` lines 295-378.
- **Status:** `NEEDS-COPY-EDIT`.
- **Merge fields:** `{{first_name}}`, `{{company}}`, `{{property_type}}`, `{{city}}`.
- **GHL nodes:** 8.

### 5. cold-post-event-followup (3 emails, DOC-ONLY)

- **Trigger:** Tag `event-followup` applied (manually after trade show / networking event).
- **Sequence:** Day 1 same/next-day → Day 3 value recap → Day 5 gentle close.
- **Template source:** `docs/COLD-EMAIL-SEQUENCES.md` lines 387-468.
- **Status:** `NEEDS-COPY-EDIT`.
- **Merge fields:** `{{first_name}}`, `{{event_name}}`, `{{met_at}}`, `{{company}}`.
- **GHL nodes:** 8.

### 6. nurture-pm-inbound (5 emails, BUILT)

- **Trigger:** Form submission on website (contact form, quote form, exit-intent, floating CTA). Leads tagged `seq-new-lead-nurture` by `website/src/lib/ghl.ts`.
- **Sequence:** Day 0 welcome → Day 3 48-hr timeline → Day 7 case study → Day 14 free assessment offer → Day 30 final check-in.
- **Template source:** `website/src/lib/email-templates.ts` — `pmNurture` array (lines 110-~405). Each email is a full branded HTML string with inline CSS.
- **Status:** `BUILT` — copy-paste the rendered HTML straight into GHL email editor. Merge fields use JS-style `${vars.name}` that need translating to GHL's `{{contact.first_name}}` format before paste.
- **Merge fields in code:** `vars.name`, `vars.propertyName` → translate to `{{contact.first_name}}`, `{{contact.company_name}}` or GHL custom field `{{Property Name}}`.
- **GHL nodes:** Trigger (form submit filter) → Tag `seq-new-lead-nurture` → Email 1 → Wait 3d → Email 2 → Wait 4d → Email 3 → Wait 7d → Email 4 → Wait 16d → Email 5 → Tag `nurture-complete` → End (12 nodes).
- **Exit conditions:** Reply received, SMS sent, or contact calls → pause sequence.

### 7. nurture-reengagement (3 touches, DOC-ONLY)

- **Trigger:** Tag `stage-on-hold` applied AND 60 days since last activity.
- **Sequence:** Day 0 email "we miss you" → Day 7 email "what changed?" → Day 14 SMS breakup.
- **Template source:** `docs/NURTURE-CAMPAIGN-SEQUENCES.md` lines 458-513.
- **Status:** `NEEDS-COPY-EDIT` — markdown; 3rd step is SMS (GHL native).
- **Merge fields:** `{{first_name}}`, `{{property_name}}`, `{{last_contact_date}}`.
- **GHL nodes:** Trigger → Condition (tag+inactivity) → Email 1 → Wait 7d → Email 2 → Wait 7d → SMS → Tag `reengage-done` → End (9 nodes).

### 8. nurture-retention-quarterly (1 recurring, DOC-ONLY)

- **Trigger:** Active client tagged `customer-active`, recurring every 90 days since last `quarterly-checkin-sent` timestamp.
- **Sequence:** 1 check-in email.
- **Template source:** `docs/NURTURE-CAMPAIGN-SEQUENCES.md` lines 521-548.
- **Status:** `NEEDS-COPY-EDIT`.
- **Merge fields:** `{{first_name}}`, `{{property_name}}`, `{{tow_count_90d}}`, `{{since_date}}`.
- **GHL nodes:** Recurring trigger → Email → Tag `quarterly-sent` with timestamp → End (4 nodes).

### 9. nurture-retention-annual-renewal (5 emails, DOC-ONLY)

- **Trigger:** 60 days before `contract_renewal_date` custom field.
- **Sequence:** Day -60, -45, -30, -14, -3 before renewal.
- **Template source:** `docs/NURTURE-CAMPAIGN-SEQUENCES.md` lines 549-613.
- **Status:** `NEEDS-COPY-EDIT`.
- **Merge fields:** `{{first_name}}`, `{{property_name}}`, `{{renewal_date}}`, `{{current_contract_terms}}`.
- **GHL nodes:** Date trigger → Email 1 → Wait 15d → Email 2 → Wait 15d → Email 3 → Wait 16d → Email 4 → Wait 11d → Email 5 → Tag `renewal-sent` → End (12 nodes).

### 10. referral-locksmith (3 emails, BUILT)

- **Trigger:** Tag `referral-locksmith` applied to contact.
- **Sequence:** Day 0 intro → Day 4 value-add → Day 10 last touch.
- **Template source:** `website/src/lib/email-templates.ts` — `locksmithPartner` array.
- **Status:** `BUILT`. Branded HTML ready.
- **Merge fields:** `vars.name` (owner), `vars.companyName` → GHL `{{contact.first_name}}`, `{{contact.company_name}}`.
- **GHL nodes:** 8 (trigger → 3 emails with waits → tag → end).

### 11. referral-mechanic (3 emails, BUILT)

- **Trigger:** Tag `referral-mechanic` applied.
- **Sequence:** Day 0 → Day 4 → Day 10.
- **Template source:** `website/src/lib/email-templates.ts` — `mechanicPartner` array.
- **Status:** `BUILT`.
- **Merge fields:** `vars.name`, `vars.shopName`.
- **GHL nodes:** 8.

### 12. referral-uber-lyft (3 emails, DOC-ONLY)

- **Trigger:** Tag `referral-rideshare` applied.
- **Sequence:** Day 0 intro → Day 4 how-it-works → Day 10 last touch.
- **Template source:** `docs/REFERRAL-INTRO-EMAIL-TEMPLATES.md` lines 128-213 (Category 2).
- **Status:** `NEEDS-COPY-EDIT`.
- **Merge fields:** `{{first_name}}`, `{{rideshare_platform}}` (Uber|Lyft).
- **GHL nodes:** 8.

### 13. referral-parking-permit (3 emails, DOC-ONLY)

- **Trigger:** Tag `referral-permit-co` applied.
- **Sequence:** Day 0 intro → Day 4 partnership details → Day 10 last touch.
- **Template source:** `docs/REFERRAL-INTRO-EMAIL-TEMPLATES.md` lines 224-311 (Category 3).
- **Status:** `NEEDS-COPY-EDIT`.
- **Merge fields:** `{{first_name}}`, `{{company_name}}`.
- **GHL nodes:** 8.

### 14. transactional-vehicle-retrieval (3+ emails, BUILT)

- **Trigger:** Webhook from TowBook on `vehicle_impounded` event, OR tag `vehicle-impounded` applied.
- **Sequence:** Email 1 impound notice → Email 2 retrieval instructions → Email 3 storage fee reminder (Day 7 if not retrieved).
- **Template source:** `website/src/lib/email-templates.ts` — `vehicleRetrieval` array (last ~80 lines).
- **Status:** `BUILT`. Includes Arizona ARS 28-4843 disclosure.
- **Merge fields:** `vars.vehicleDescription`, `vars.impoundLocation`, `vars.paymentLink`.
- **GHL nodes:** Webhook trigger → Email 1 (immediate) → Wait 1d → Email 2 → Wait 6d (if no tag `vehicle-retrieved`) → Email 3 → End (10 nodes).
- **CRITICAL:** This is transactional, not marketing. Ensure GHL does NOT throttle or mix with bulk sends. Route through a separate GHL sender identity if possible.

---

## Referenced (Not In Scope for AI-8344)

The following sequences were mentioned in strategy docs but are SMS/voice only, or not email workflows. They get their own Linear tasks:

- Ringless voicemail scripts (`docs/NURTURE-CAMPAIGN-SEQUENCES.md` lines 636-688) — handled by AI-7431 (AI Receptionist).
- Referral partners `moving-companies` and `painters-contractors` (`docs/REFERRAL-INTRO-EMAIL-TEMPLATES.md` categories 5 & 6) — parking-lot for now; Elliott has not prioritized.
- LinkedIn outreach (`docs/LINKEDIN-OUTREACH-TEMPLATES.md`) — not email-based, separate channel (AI-7428).
- Facebook HOA groups (`docs/FACEBOOK-HOA-GROUPS-STRATEGY.md`) — AI-7429.
- Social media DMs (`docs/SOCIAL-MEDIA-HOA-OUTREACH.md`) — separate channel.
- Job application templates (`docs/JOB-APPLICATION-EMAIL-TEMPLATES.md`) — hiring pipeline (AI-7434), not prospect nurture.

---

## Compliance Review Needed

Per CLAUDE.md Rule #1: **"NEVER show specific $ pricing on the website (Elliott directive)."**

### Findings

Scanned all 4 source files (`email-templates.ts`, `COLD-EMAIL-SEQUENCES.md`, `NURTURE-CAMPAIGN-SEQUENCES.md`, `REFERRAL-INTRO-EMAIL-TEMPLATES.md`) for `$X`, `$[0-9]+`, and specific dollar-amount patterns.

| File | Matches | Context | Flag |
|------|---------|---------|------|
| `website/src/lib/email-templates.ts` | 1 hit (line 231) | `$0` (stat box — "$0 Cost to Property") | SAFE — this is the zero-cost message Elliott endorses. |
| `docs/COLD-EMAIL-SEQUENCES.md` | 0 hits | — | SAFE |
| `docs/NURTURE-CAMPAIGN-SEQUENCES.md` | 0 hits | — | SAFE |
| `docs/REFERRAL-INTRO-EMAIL-TEMPLATES.md` | 0 hits | — | SAFE |
| `docs/REFERRAL-OUTREACH-CAMPAIGNS.md` | 3 hits | Lines 271 (`$25-50 per converted customer`), 589 (`~$1,000 per lot for moving 10+ vehicles`), 986 (`$3,000-8,000/month` revenue projection) | **FLAG FOR ELLIOTT** |

### Details of flagged items in REFERRAL-OUTREACH-CAMPAIGNS.md

Per the rules intake: referral-partner private emails may be OK since they're not public-facing, but flag for Elliott.

1. **Line 271** — "Optional: small referral fee ($25-50 per converted new customer) for high-volume partners." This is in strategy copy (not an email template body), appears in a section advising Axle on how to structure partnerships. Never emailed to a prospect. Status: **internal strategy only, no action needed.**

2. **Line 589** — "$1,000 per lot for moving 10+ vehicles" appears as strategy rationale explaining why paving contractors are useful partners. Also internal strategy, not in a customer-facing email. Status: **internal strategy only, no action needed.**

3. **Line 986** — Revenue projection table "$3,000-8,000/month." Internal ROI math for Axle's internal team, not emailed. Status: **internal strategy only, no action needed.**

### Recommendation

**No active emails in the 14 workflows contain specific dollar amounts that break Elliott's pricing rule.** The only `$` in any BUILT template is `$0` which reinforces the "zero cost to property" value prop and is explicitly aligned with Elliott's positioning.

The 3 hits in `REFERRAL-OUTREACH-CAMPAIGNS.md` are **strategy copy**, not email bodies. They don't get sent to anyone. Safe to proceed with GHL wiring.

**Elliott approval still required on all copy** per CLAUDE.md, but no `$X` / pricing redlines needed before we ship.

### What Worker Doing GHL Wiring Should Do

1. Before wiring any `NEEDS-COPY-EDIT` workflow to GHL, run the completed HTML through Elliott for approval (iMessage screenshot per Elliott's style).
2. For `BUILT` workflows, Elliott can review the rendered output directly (we have all 4 sequences live in `email-templates.ts`).
3. Never paste copy containing dollar amounts into a customer-facing email unless it's `$0` or a discount offer Elliott has pre-approved.

---

## GHL Pre-Wiring Checklist

Before the Browserbase agent can wire these workflows, the following must exist in GHL:

### Tags to Pre-Create

```
outbound-pm-cold
outbound-hoa-cold
outbound-apartment-cold
outbound-commercial-cold
event-followup
seq-new-lead-nurture
stage-on-hold
customer-active
referral-locksmith
referral-mechanic
referral-rideshare
referral-permit-co
vehicle-impounded
vehicle-retrieved
cold-sequence-complete
nurture-complete
reengage-done
quarterly-sent
renewal-sent
```

### Custom Fields to Pre-Create

- `Property Name` (text)
- `Property Type` (dropdown: apartment, hoa, commercial, retail, industrial, office, mixed-use)
- `Number of Units` (number)
- `Contract Renewal Date` (date)
- `Last Tow Count 90d` (number)
- `HOA Name` (text)
- `Event Name` (text)
- `Rideshare Platform` (dropdown: Uber, Lyft, Both)

### Pipeline to Verify

Axle's GHL already references `GHL_PIPELINE_ID` and `GHL_STAGE_NEW_LEAD_ID` env vars in `website/src/lib/ghl.ts`. Confirm they exist before wiring nurture workflows that expect the "New Lead" stage.

### Sender Identity

- Cold outreach: use a dedicated sender (e.g. `elliott@axletowing.com`) for deliverability separation.
- Transactional (vehicle retrieval): use `dispatch@axletowing.com` or `impound@axletowing.com`.
- Nurture/referral: `elliott@axletowing.com` is fine.

**Blocker:** Elliott's Google Workspace DNS is not yet configured. Until `elliott@axletowing.com` resolves, all workflows above should queue against a placeholder sender and get swapped in once Hitesh finishes DNS.

---

## Files Audited

- `/opt/agency-workspace/axel-towing/website/src/lib/email-templates.ts` (765 lines, 4 sequences built)
- `/opt/agency-workspace/axel-towing/website/src/lib/ghl.ts` (482 lines — GHL API wrapper, no workflow defs)
- `/opt/agency-workspace/axel-towing/website/src/app/api/cron/workflows/route.ts` (90 lines — cron route, imports missing `@/lib/workflows/engine`)
- `/opt/agency-workspace/axel-towing/website/src/app/api/drip/route.ts` (references SequenceType enum)
- `/opt/agency-workspace/axel-towing/website/src/app/api/drip/send/route.ts` (send-path reference)
- `/opt/agency-workspace/axel-towing/docs/COLD-EMAIL-SEQUENCES.md` (5 cold sequences, markdown)
- `/opt/agency-workspace/axel-towing/docs/NURTURE-CAMPAIGN-SEQUENCES.md` (5 nurture/retention sequences + GHL setup notes, markdown)
- `/opt/agency-workspace/axel-towing/docs/REFERRAL-INTRO-EMAIL-TEMPLATES.md` (6 referral partner categories, markdown)
- `/opt/agency-workspace/axel-towing/docs/REFERRAL-OUTREACH-CAMPAIGNS.md` (meta-strategy, flagged for $ amounts)
- `/opt/agency-workspace/axel-towing/.planning/STATE.md` (Milestone v2.0 context, 14 Linear tasks)
- `/opt/agency-workspace/axel-towing/.planning/PROJECT.md` (GHL dependency context)

## Directories That Do NOT Exist (Confirmed)

- `docs/ghl-workflows/` — did not exist prior to this manifest (now created with this file).
- `website/src/lib/workflows/` — does not exist.
- `website/src/lib/workflows/configs/` — does not exist.
- `@/lib/workflows/engine` — imported by `api/cron/workflows/route.ts` but module is missing (dead code).

## Recommended Linear Sub-Tasks (for the GHL-wiring agent)

1. **AI-8344a** — Convert 9 `NEEDS-COPY-EDIT` sequences to branded HTML and get Elliott approval. Blocker until this is done.
2. **AI-8344b** — Wire 5 `BUILT` workflows (pm-inbound, locksmith, mechanic, vehicle-retrieval, and one cold sequence once approved) in GHL UI as a pilot. Validate with a test send.
3. **AI-8344c** — Wire remaining 9 workflows in GHL UI after Elliott signs off on HTML.
4. **AI-8344d** — Remove or implement the `@/lib/workflows/engine` module that `api/cron/workflows/route.ts` imports — currently a dead import that will break on first cron run.

---

*Manifest generated by Bussit Worker #2 — 2026-04-20. Any agent continuing AI-8344 should start here.*
