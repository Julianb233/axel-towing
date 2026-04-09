# Architecture Patterns — Axle Towing Outbound Marketing Automation

**Domain:** Multi-channel outbound marketing + CRM automation for towing/property enforcement
**Researched:** 2026-04-09
**Confidence:** HIGH (existing code reviewed + GHL official docs verified)

---

## Recommended Architecture

GoHighLevel is the central nervous system. Everything else either feeds into it or is executed by it. The website (Next.js on Vercel) serves as a secondary integration layer, passing leads into GHL and embedding GHL-hosted widgets.

The architecture is deliberately hub-and-spoke, not distributed. This keeps automation logic in one place (GHL workflows), reduces integration complexity, and avoids maintaining custom orchestration code.

```
                          ┌─────────────────────────────────┐
                          │       LEAD SOURCES               │
                          │  Website · Phone · LinkedIn ·    │
                          │  Facebook · Scraping · Referral  │
                          └───────────────┬─────────────────┘
                                          │
                          ┌───────────────▼─────────────────┐
                          │     GoHighLevel (Central Hub)    │
                          │  • Contact records (unified DB)  │
                          │  • Pipeline / opportunity mgmt   │
                          │  • Workflow automation engine    │
                          │  • Email + SMS sending           │
                          │  • AI voice receptionist         │
                          │  • Social media planner          │
                          │  • Reporting + attribution       │
                          └───────┬──────────┬──────────────┘
                                  │          │
              ┌───────────────────┤          ├──────────────────┐
              │                   │          │                   │
   ┌──────────▼──────┐   ┌────────▼────┐  ┌─▼──────────────┐  ┌▼────────────────┐
   │ Twilio          │   │  Resend     │  │  Supabase      │  │  TowBook        │
   │ (phone/SMS      │   │ (transact.  │  │ (lead archive, │  │ (dispatch,      │
   │  carrier layer) │   │  receipts)  │  │  audit log)    │  │  work orders)   │
   └─────────────────┘   └─────────────┘  └────────────────┘  └─────────────────┘
```

---

## Component Boundaries

### What Lives in GHL (Do Not Duplicate)

| Capability | GHL Feature | Notes |
|---|---|---|
| Contact/lead database | Contacts module | Single source of truth for all prospects |
| Pipeline + opportunity tracking | Pipelines | Stages: New Lead → Contacted → Demo Scheduled → Proposal → Won/Lost |
| Email nurture sequences | Workflows → Send Email | 21-day cadences, 6 partner types |
| SMS follow-ups | Workflows → Send SMS | Two-way SMS conversations |
| AI phone receptionist | Voice AI (HighLevel AI Employee) | Requires LC Phone or Twilio number integration |
| Inbound call routing + IVR | Call Flows | Routes to dispatcher, AI, or voicemail |
| Social media scheduling | Social Planner | Facebook, Instagram, LinkedIn, GMB, TikTok |
| Website chatbot embed | Chat Widget | Embed script on axletowing.com |
| Appointment booking | Calendars | Calendly alternative, native in GHL |
| Reporting + attribution | Reporting module | Campaign source, conversion rates |

### What Lives on the Website (Next.js / Vercel)

| Capability | Location | Notes |
|---|---|---|
| Lead form submissions | `POST /api/leads` | Already built; syncs to GHL via API |
| Transactional confirmations | Resend via `lib/dispatch-email.ts` | "We received your request" emails |
| Internal dispatch notifications | Resend + SMS via `lib/dispatch-sms.ts` | Alerts Elliott/dispatch team |
| GHL sync on lead capture | `lib/ghl.ts` (syncLeadToGHL) | Contact + opportunity creation in GHL |
| Supabase lead archive | `lib/supabase.ts` | Durable audit log independent of GHL |
| TowBook portal links | `/dashboard`, `/tow-request` | Deep-links to TowBook app |
| Outreach activity log | `POST /api/outreach` | Currently in-memory — needs Supabase backing |
| Chatbot knowledge base | `lib/chatbot-knowledge.ts` | Powers GHL Chat Widget AI responses |

### What Lives in External Tools (Scraping / LinkedIn)

| Capability | Tool | How it Feeds GHL |
|---|---|---|
| HOA lead scraping (AZ SOS, Maricopa Assessor) | Python scripts / Apify | CSV export → GHL bulk CSV import |
| Google Maps property scraping | Apify Google Maps Scraper | CSV export → GHL bulk CSV import |
| LinkedIn outreach | LinkedIn Sales Navigator + manual | Connection accepted → manually add to GHL as "LinkedIn Cold" tag |
| LinkedIn automation (optional) | Closely.io | Native GHL integration; syncs messages directly into GHL contacts |
| Facebook HOA group engagement | Manual (Elliott/Ryan) | Interested parties → manually added to GHL or submit website form |
| Stitch design assets | Stitch (project 12363110404051190167) | Exported images → uploaded to GHL Social Planner |

---

## Lead Flow: Entry to Conversion

### Flow 1: Website Form Lead (Highest Signal)

```
Visitor on axletowing.com
  → Submits homepage form / exit-intent / chatbot
  → POST /api/leads (Next.js)
      → Resend: dispatch email to Elliott  [immediate notification]
      → Twilio SMS: dispatch alert         [immediate notification]
      → Supabase: lead archived            [durable record]
      → GHL API: contact created with tags [CRM entry]
          → GHL tags assigned:
              src-website-form, type-[hoa/apartment/commercial],
              stage-new-lead, priority-[hot/warm/cold], seq-new-lead-nurture
          → GHL Workflow triggers on "Contact Created" + tag "seq-new-lead-nurture"
              → Day 0:  Email 1 (Introduction + value prop)
              → Day 2:  SMS 1 (Short follow-up)
              → Day 5:  Email 2 (Social proof / case study)
              → Day 10: SMS 2 (Check-in)
              → Day 14: Email 3 (Objection handling)
              → Day 21: Email 4 (Final breakup)
          → GHL Opportunity created in "New Lead" pipeline stage
```

**Critical note:** GHL's "Contact Created" workflow trigger fires on API-created contacts (which is how website leads arrive). This is confirmed behavior — the website's `syncLeadToGHL()` function creates contacts via GHL REST API v1, which does trigger Contact Created workflows.

### Flow 2: Scraped Lead (Cold Outbound)

```
Lead source: AZ SOS / Maricopa Assessor / Google Maps / Apartments.com
  → Scraped to CSV (Python / Apify)
  → Cleaned and enriched (Hunter.io for email if needed)
  → CSV import to GHL (Contacts → Import → assign to "Cold Prospect" pipeline)
  
  IMPORTANT: GHL bulk CSV import does NOT trigger "Contact Created" workflow.
  After import, manually trigger workflow by:
    Option A: Add tag "seq-cold-outbound" via tag bulk action
    Option B: Use GHL's "Add to Workflow" during CSV import step
  
  → GHL Workflow (triggered by tag or import action):
      → Day 1:  Email 1 (Cold intro: "Unauthorized parking at [Property Name]?")
      → Day 2:  SMS 1 (Short follow-up — 155 chars)
      → Day 5:  Email 2 (Social proof / HOA case study)
      → Day 10: SMS 2 + Email 3 (Objection handling)
      → Day 21: Email 4 (Final breakup / leave door open)
  
  → If response received:
      → GHL tags updated: "replied", pipeline stage → "Contacted"
      → Workflow branches to "Interested" sequence or "Not Now" nurture
```

### Flow 3: Phone Lead (Inbound Call)

```
Caller dials 480-288-5526
  → Twilio receives call
  → Twilio webhook → axletowing.com/api/voice/inbound (existing route)
  
  === CURRENT STATE (TwiML IVR) ===
  → IVR menu served via TwiML
  → Caller presses option → routes to dispatcher or voicemail
  
  === TARGET STATE (GHL Voice AI) ===
  → GHL Voice AI agent answers (requires GHL AI Employee, LC Phone/Twilio)
  → AI collects: caller intent, name, property name, contact info
  → AI actions based on intent:
      Emergency/tow: warm transfer to dispatcher immediately
      HOA partner inquiry: gather info → book assessment call via GHL Calendar
      Billing/impound: answer from knowledge base → transfer if needed
  → Post-call: GHL auto-creates contact, logs transcript, fires follow-up workflow
      → SMS confirmation sent to caller
      → If HOA partner: enters "Phone Lead" pipeline stage + starts nurture
  
  INTEGRATION PATH: Twilio number ported/connected to GHL LC Phone system,
  or GHL Voice AI configured on same Twilio account via GHL's Twilio integration.
```

### Flow 4: LinkedIn Lead (Social Outbound)

```
Elliott/Ryan manual LinkedIn activity:
  → Connection request sent (using templates from LINKEDIN-OUTREACH-TEMPLATES.md)
  → Connection accepted (3-5 day wait)
  → First DM sent (relationship building, not pitch)
  → 3rd-4th interaction: soft pitch / discovery question
  
  If interested signal:
    → Option A (manual): Add to GHL as contact tagged "linkedin-lead", "interested"
    → Option B (Closely.io): Closely integration syncs LinkedIn messages to GHL
                             automatically as contacts with conversation history
  
  → GHL picks up with email + SMS nurture sequence
  → Elliott books assessment call via GHL Calendar link
```

### Flow 5: Facebook HOA Group Lead

```
Elliott/Ryan participates in Phoenix HOA Facebook groups
  → Answers parking enforcement questions (establishes authority)
  → Receives DM from HOA board member
  
  → Elliott sends Facebook Messenger reply
  → If warm: asks for email/phone to "send resources"
  → Contact enters GHL via:
      Option A: Manual GHL contact creation
      Option B: GHL Facebook Messenger integration (native — routes FB messages to GHL inbox)
  
  → Tagged "facebook-hoa-group", "hoa-board-member"
  → Enters HOA Property Manager nurture sequence (Day 1–21)
```

### Flow 6: Referral Partner Lead

```
Referral partners: Auto mechanics, locksmiths, paving companies
  → Elliott cold emails using sequences from REFERRAL-OUTREACH-CAMPAIGNS.md
  → GHL sends 3-4 touch email sequence from partner-type pipeline
  
  If referral partner confirms partnership:
    → Tagged "referral-partner", "active-partner", "partner-[type]"
    → Assigned to "Referral Partners" GHL pipeline
    → Corporate gifting sequence triggers (Printify gift at partnership milestone)
    → Monthly check-in sequence configured
  
  Referral partner sends a lead to Axle:
    → GHL "Source" field tracks referring partner contact
    → Attribution report shows which partners generate best ROI
```

---

## GHL as Hub: Native vs External

### GHL Handles Natively (No External Tools Needed)

| Function | GHL Native Feature | Confidence |
|---|---|---|
| Email marketing (bulk + sequences) | Campaigns + Workflows | HIGH |
| SMS marketing + two-way conversations | SMS module (via Twilio/LC Phone) | HIGH |
| AI voice receptionist | Voice AI (AI Employee) | HIGH |
| Inbound call routing + IVR | Call Flows | HIGH |
| Social media scheduling | Social Planner (Facebook, Instagram, LinkedIn, GMB) | HIGH |
| Website chat widget (property manager chatbot) | Chat Widget + Conversation AI | HIGH |
| Appointment booking / calendar | Calendars | HIGH |
| Pipeline / CRM management | Opportunities + Contacts | HIGH |
| Attribution + campaign reporting | Reporting module | HIGH |
| Facebook Messenger inbox routing | Native Facebook integration | HIGH |

### External Tools Required (GHL Cannot Replace)

| Function | External Tool | Integration Method |
|---|---|---|
| Lead scraping (AZ SOS, Assessor, Maps) | Python/Apify scripts | CSV export → GHL bulk import |
| LinkedIn automation (optional) | Closely.io or manual | Closely GHL integration OR manual |
| Email deliverability for transactional website emails | Resend | Direct API (keep separate from GHL) |
| Towing dispatch/work orders | TowBook | Separate system — website links only |
| Lead archive / audit log | Supabase | Website API writes; GHL webhooks can sync back |
| Stitch design system | Stitch (12363110404051190167) | Export images → upload to GHL Social Planner |
| Corporate gifting fulfillment | Printify | Manual order trigger or Zapier |

### Zapier: When and Only When

Use Zapier only for these specific bridges:
1. Printify order creation when GHL opportunity moves to "Won" (no native integration)
2. Google Sheets/Airtable reporting exports if needed for Elliott's review process
3. Any custom webhook not supported natively by GHL

Do not use Zapier for email, SMS, or contact workflows — GHL handles these natively and Zapier adds latency and failure points.

---

## Data Flow: Contact Data Through the System

```
SOURCE DATA                    GHL CONTACT RECORD              DOWNSTREAM
─────────                      ──────────────────              ──────────
Website form
  → name, email, phone,        firstName, lastName,            → Email sequence
    propertyName, type,   →    email, phone,             →    → SMS sequence
    timeline, referenceId      companyName, tags,              → Opportunity record
                               customFields:                   → GHL calendar booking
                                 Property Type                 → Voice AI call log
                                 Property Name                 → Attribution report
                                 Number of Units
                                 Reference ID
LinkedIn (manual)              Source = "LinkedIn"             → Manual DM tracking
                               Tag = "linkedin-lead"           → Email sequence starts

Phone (Voice AI)               Source = "Phone"                → Post-call SMS
                               Tag = "src-phone-call"          → Email follow-up
                               Call transcript logged          → Pipeline entry

Scraped CSV                    Source = "Scraping"             → Cold outreach sequence
                               Tag = "cold-prospect"           (workflow triggered by tag)
                               Tag = "seq-cold-outbound"

Facebook group                 Source = "Facebook"             → HOA nurture sequence
                               Tag = "facebook-hoa-group"

Referral inquiry               Source = "Referral"             → Partner sequence
                               Tag = "referral-partner"
```

---

## Social Media Pipeline

```
CONTENT CREATION          SCHEDULING            POSTING           ENGAGEMENT → LEAD
────────────────          ──────────            ───────           ──────────────────
Stitch design system  →  GHL Social        →  Facebook      →  Comment/DM received
(project 12363110404)    Planner              Instagram          → GHL inbox (if
                         (3x/wk LinkedIn,     LinkedIn             Facebook native)
                         3x/wk FB,            GMB                → Manual capture
                         3-4x/wk IG)                              (LinkedIn, IG)

Content types:                               Posting schedule:    → Add to GHL as
  Educational (ARS law)                      Tue/Thu/Sat: LI        contact + tag
  Case studies                               Mon/Wed/Fri: FB        → Enter nurture
  Before/after photos                        Daily: IG Stories      sequence
  Team/company culture                       Weekly: GMB update

GHL Social Planner                           GHL analytics:
NOTE: Tracks basic post                      Likes, comments,
metrics. Does NOT track                      reach per post.
DMs or profile visits                        No competitor
natively.                                    analysis.
```

**Limitation:** GHL Social Planner does not handle Instagram DMs (Meta API restriction) or LinkedIn DMs. These require manual checking until native integrations improve.

---

## Phone System Architecture

```
CURRENT STATE:                        TARGET STATE (v2.0):
──────────────                        ────────────────────
Caller → UMA phone system             Caller → 480-288-5526 (Twilio number)
       → Human dispatcher                       │
                                                ▼
                                      GHL Voice AI (AI Employee)
                                                │
                              ┌─────────────────┼──────────────────────┐
                              │                 │                       │
                      Emergency/Tow      HOA/Partner            Billing/Impound
                              │          Inquiry                       │
                              ▼                 │                       ▼
                      Warm transfer to          ▼              Answer from KB
                      dispatcher        Gather info            Transfer if needed
                      immediately       Book calendar
                                       (GHL Calendar)
                                                │
                              ┌─────────────────┘
                              ▼ (all paths)
                      Post-call automation:
                        → Contact created/updated in GHL
                        → Call transcript logged
                        → Follow-up SMS fired (within 2 min)
                        → If HOA inquiry: enter "Phone Lead" pipeline
                        → If emergency: Supabase dispatch record created

TRANSITION PLAN:
  Step 1: Connect Twilio number to GHL (GHL Settings → Twilio integration)
  Step 2: Configure GHL Voice AI with Axle Towing knowledge base
  Step 3: Set call flows: business hours → AI, after-hours → AI (24/7)
  Step 4: Test with internal calls before UMA cutover
  Step 5: Port or forward 480-288-5526 → GHL-managed number
  
NOTE: Existing /api/voice/* routes in Next.js can be kept as fallback
but GHL Voice AI should become the primary handler.
```

---

## Website Chatbot Integration

```
axletowing.com page load
  → GHL Chat Widget embed script (added to layout.tsx)
  → Widget appears bottom-right corner
  → Visitor types property management question
  
  GHL Conversation AI (powered by chatbot-knowledge.ts data):
    → Answers FAQs about services, pricing, coverage, ARS compliance
    → Collects: name, email, phone, property name, units
    → Books assessment calls directly (GHL Calendar)
    → Escalates complex issues to Elliott via GHL inbox
  
  On lead capture:
    → GHL creates contact automatically (Chat Widget native behavior)
    → Tagged: "src-website-chatbot", "stage-new-lead"
    → Enters standard nurture sequence
    → Supabase: chat lead archived via GHL webhook → /api/leads (optional)
  
  NOTE: Do NOT use a custom-coded chatbot widget. GHL Chat Widget is the
  correct choice here — it handles CRM integration natively with zero
  custom code required. The existing chatbot-knowledge.ts file feeds the
  AI knowledge base configured inside GHL.
```

---

## Build Order: What Must Exist Before What

The dependency graph determines phase sequencing. GoHighLevel configuration is the critical path — nothing else can run until GHL is operational.

```
PHASE 1: GHL Foundation (blocks everything else)
  ├── GHL account configured (location, API key, phone number)
  ├── Pipeline stages defined (New Lead → Contacted → Demo → Proposal → Won/Lost)
  ├── Custom fields created (Property Type, Units, Property Name, Source)
  ├── GHL_API_KEY + GHL_LOCATION_ID + GHL_PIPELINE_ID set in Vercel env
  └── Website → GHL sync verified (test lead through /api/leads)

PHASE 2: Core Automation (requires Phase 1)
  ├── 6 email nurture sequences built in GHL Workflows
  ├── SMS sequences added to same workflows
  ├── Tag-based workflow triggers configured
  └── Approval from Elliott on all templates before activation

PHASE 3: Phone System (requires Phase 1, parallel to Phase 2)
  ├── Twilio number connected to GHL
  ├── GHL Voice AI configured with Axle knowledge base
  ├── Call flows set (emergency → dispatcher, HOA → calendar, billing → AI)
  └── Test calls validated before UMA cutover

PHASE 4: Social Media (requires Phase 1, parallel to Phases 2+3)
  ├── Social accounts created (LinkedIn company, Facebook page, Instagram, GMB)
  ├── GHL Social Planner connected to all accounts
  ├── Stitch designs exported and uploaded as templates
  ├── First month content scheduled (posts pre-scheduled in bulk)
  └── LinkedIn personal profile outreach begins (20-30/week)

PHASE 5: Lead Scraping + Import (requires Phase 1, Phase 2 complete)
  ├── Scraping scripts run (AZ SOS, Maricopa Assessor, Google Maps)
  ├── Data cleaned and enriched
  ├── Bulk CSV import to GHL with "seq-cold-outbound" tag
  └── Cold outreach sequences verified firing correctly

PHASE 6: Website Chatbot (requires Phase 1, Phase 2)
  ├── GHL Chat Widget embed script added to Next.js layout
  ├── GHL Conversation AI trained with chatbot-knowledge.ts content
  └── Booking flow tested end-to-end

PHASE 7: Hiring Pipeline (requires Phase 1)
  ├── GHL Calendar created for hiring assessment calls
  ├── 9-stage hiring pipeline configured in GHL
  ├── Job application form on website → GHL sync verified
  └── Email confirmation workflows active

PHASE 8: Corporate Gifting (requires Phase 3-5 active, leads flowing)
  ├── Printify store configured with branded merch
  ├── GHL opportunity "Won" trigger → Zapier → Printify order
  └── Gift-with-purpose email sequence added to partner workflow
```

---

## Integration Points: Webhooks, APIs, Zapier

### GHL Inbound (from website to GHL)
| Trigger | Method | Notes |
|---|---|---|
| Website form submit | GHL REST API v1 (POST /contacts) | `lib/ghl.ts` — already built |
| Job application | GHL REST API (extend existing ghl.ts) | Tag: "job-applicant" |
| Chat widget lead | GHL native — no code needed | Widget handles this |
| Phone call lead | GHL Voice AI native | Post-call auto-creates contact |

### GHL Outbound (from GHL to website/external)
| Event | Method | Destination |
|---|---|---|
| Contact created | GHL Outbound Webhook | Optional: POST to /api/leads (Supabase archive) |
| Opportunity won | GHL Outbound Webhook | Zapier → Printify (gifting) |
| Pipeline stage changed | GHL Outbound Webhook | Future: Supabase for analytics |
| Appointment booked | GHL native | GHL Calendar handles confirmations |

### External to GHL
| Source | Method | Notes |
|---|---|---|
| LinkedIn connections | Closely.io integration OR manual | Closely syncs natively to GHL contacts |
| Scraped leads CSV | GHL bulk import + tag trigger | Manual process, batch monthly |
| Facebook Messenger | GHL native Facebook integration | Routes FB messages to GHL inbox |
| Stitch content | Manual image upload | Export PNG/JPG → GHL Social Planner |

---

## Feedback Loops: Analytics Back to Campaign Optimization

### GHL Native Reporting (Medium confidence — sufficient for v2.0)
- Email open rates, click rates per sequence and per email
- SMS reply rates
- Call outcome logging (answered, voicemail, transferred)
- Appointment booking rates by source
- Pipeline conversion rates (stage-to-stage)
- Contact source attribution (website, phone, social, scraping)

### What to Track Weekly (Elliott's operational dashboard)
```
Metric                    GHL Report Location
──────                    ───────────────────
New leads this week       Contacts → filtered by date
Email open rate           Email → Campaigns/Workflows → stats
SMS reply rate            Conversations → filter by SMS
Calls answered by AI      Reporting → Call Reporting
Appointments booked       Calendars → booking count
Pipeline progression      Opportunities → funnel view
LinkedIn connections      Manual (no GHL integration for LI metrics)
Social post reach         Social Planner → post-level analytics
```

### Feedback-to-Campaign Loop (Monthly)
```
1. Pull GHL email stats → identify sequences with <20% open rate
2. Pull call logs → identify most common caller intents (informs script updates)
3. Pull pipeline conversion rates → identify where leads stall (tighten messaging)
4. Pull attribution report → identify highest-converting lead sources (allocate effort)
5. Review LinkedIn outreach acceptance rates (tracked in template tracker spreadsheet)
6. Update GHL sequences based on findings → Elliott approves before re-activating
```

---

## Architecture Tradeoffs: Hub-and-Spoke vs Distributed

**This architecture recommends hub-and-spoke (everything through GHL).**

### Why GHL as Hub is Correct for This Project

| Factor | Hub-and-Spoke (GHL) | Distributed (custom code) |
|---|---|---|
| Maintenance | Elliott can manage GHL without developers | Requires ongoing developer support |
| Cost | Included in GHL subscription | Additional development cost |
| Speed to deploy | Weeks | Months |
| Reliability | GHL SLA-backed | Depends on custom hosting |
| Flexibility | Limited to GHL capabilities | Unlimited |
| Required capability gaps | Social → scraping bridge only | Everything |

### The One Legitimate Concern
GHL Social Planner does not match Hootsuite/Buffer for advanced social analytics. It is sufficient for post scheduling but lacks competitor monitoring, hashtag analytics, and engagement rate trending. For v2.0, GHL Social Planner is acceptable. If social media becomes a primary growth channel in v3.0, evaluate adding a dedicated social tool (Later, Sprout Social) alongside GHL.

### What to Watch
- GHL's v1 API (used in `lib/ghl.ts`) is being superseded by v2. Plan migration to v2 before GHL deprecates v1.
- The `/api/outreach` route currently uses in-memory storage — this will lose data on Vercel cold starts. Replace with Supabase backing before any real data flows through it.
- GHL bulk CSV import does NOT trigger "Contact Created" workflows. This is a known GHL behavior. Always assign the workflow trigger tag during import.

---

## Sources

- GHL official docs: Webhook integration architecture — https://marketplace.gohighlevel.com/docs/webhook/WebhookIntegrationGuide/index.html
- GHL Voice AI overview — https://help.gohighlevel.com/support/solutions/articles/155000003911-ai-voice-agents-overview
- GHL Social Planner setup — https://help.gohighlevel.com/support/solutions/articles/155000005063-getting-started-setup-social-planner
- GHL Chat Widget — https://help.gohighlevel.com/support/solutions/articles/48000984860-how-to-install-highlevel-s-chat-widget
- GHL Inbound Webhook Trigger — https://help.gohighlevel.com/support/solutions/articles/48001237383-how-to-use-the-inbound-webhook-workflow-premium-trigger
- GHL Contact Created trigger (bulk import limitation) — https://help.gohighlevel.com/support/solutions/articles/155000002486-workflow-trigger-contact-created
- GHL CSV Import — https://help.gohighlevel.com/support/solutions/articles/155000003905-importing-contacts-and-opportunities-via-csv
- Closely GHL LinkedIn integration — https://closelyhq.com/integrations/gohighlevel-linkedin-integration
- Existing codebase: `website/src/lib/ghl.ts`, `website/src/app/api/leads/route.ts`, `website/src/app/api/voice/inbound/route.ts`
- Strategy docs: `docs/NURTURE-CAMPAIGN-SEQUENCES.md`, `docs/DECISION-MAKER-SCRAPING-STRATEGY.md`, `docs/AI-VOICE-AGENT-IMPLEMENTATION.md`, `docs/SOCIAL-MEDIA-OUTREACH-STRATEGY.md`
