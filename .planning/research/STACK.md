# Technology Stack — Axle Towing v2.0 Outbound Marketing Automation

**Project:** Axle Towing & Impound — v2.0 Multi-Channel Outbound Marketing
**Researched:** 2026-04-09
**Existing stack:** Next.js on Vercel, Resend email, Supabase, Google Workspace, Twilio (configured but unused)

---

## Architecture Premise

The 14-task v2.0 milestone is not a software build — it is a **configuration and activation sprint**. GoHighLevel is the core platform. Every tool decision below should be evaluated against "does GHL do this natively?" before reaching for a third-party service. In most cases it does, with real limitations noted.

The rule: **GHL-first, then Zapier/Make as the bridge, then specialized tools only where GHL provably cannot go.**

---

## Recommended Stack — Organized by Function

### 1. CRM & Automation Hub — GoHighLevel

**Plan:** Unlimited ($297/mo) — required for Voice AI and social planner
**Why not Starter ($97/mo):** Starter limits to 3 sub-accounts and lacks Voice AI. For a single client at this feature set, Unlimited is the minimum viable plan. The AI Employee add-on ($97/mo per sub-account) is needed for Conversation AI and Voice AI.

**What GHL covers natively for this project:**

| Capability | GHL Feature | Notes |
|------------|-------------|-------|
| Contact CRM + pipelines | Native CRM | Unlimited contacts on all plans |
| Email nurture sequences | Workflow + LC Email | Mailgun-powered, SPF/DKIM required |
| SMS nurture sequences | Workflow + LC Phone / Twilio | $0.01–0.03/msg via Twilio passthrough |
| Inbound AI phone receptionist | Voice AI (Agent Studio) | $0.06/min base; $97/mo AI Employee add-on |
| Outbound AI calling campaigns | Voice AI outbound mode | Requires Twilio number; 100 calls/day soft limit |
| Website chat widget | Chat Widget (Conversation AI) | JavaScript embed, works on Next.js site |
| Appointment booking | GHL Calendars | Can replace Calendly for hiring pipeline |
| Social media scheduling | Social Planner | Facebook, Instagram, LinkedIn, GMB, Twitter/X supported; **Nextdoor NOT supported** |
| Hiring pipeline CRM | Opportunity Pipelines | 9-stage pipeline maps directly to documented strategy |
| Reputation management | Reviews module | GMB review requests, monitoring |
| Lead capture forms | GHL Forms | Embeddable, webhooks to workflows |

**GHL hard limits to know:**

- Cold email outreach is against GHL Terms of Service — do NOT use GHL to cold-email lists scraped from Apollo. GHL is for warm leads and existing contacts only.
- Voice AI: US-only, 100 calls/day soft cap for outbound, no concurrent call guarantees at scale.
- Social Planner: No Nextdoor integration (feature-requested, not implemented as of April 2026).
- No native email warmup tooling — GHL email is for transactional/nurture to opted-in contacts only.

**Sources:**
- [GHL Pricing — Official](https://www.gohighlevel.com/pricing)
- [AI Product Pricing Update](https://help.gohighlevel.com/support/solutions/articles/155000006652-ai-product-pricing-update)
- [GHL Voice AI Features 2026](https://ghlmarketing.org/gohighlevel-ai-voice-agents/)
- [GHL Social Planner Guide](https://supplygem.com/gohighlevel-social-planner/)
- [Nextdoor NOT in Social Planner](https://ideas.gohighlevel.com/invoice/p/integration-with-nextdoorcom-in-social-planner)

**Confidence:** HIGH — multiple verified sources, official GHL support docs confirm features and pricing.

---

### 2. AI Phone Receptionist — GoHighLevel Voice AI (Native)

**Recommendation:** Use GHL's native Voice AI. Do NOT deploy Bland.ai, Vapi, or Retell separately.

**Rationale:**

The existing system is a Twilio IVR (TwiML-based, static press-1/press-2 menus). The goal is AI conversation — not DTMF trees. GHL's Voice AI runs on the same Twilio infrastructure already in place, adds natural language conversation, and stays inside one ecosystem. The alternatives add complexity without commensurate benefit for this use case.

**Cost comparison at 200 inbound minutes/month:**

| Platform | Cost Structure | Est. Monthly |
|----------|---------------|-------------|
| GHL Voice AI | $97/mo AI Employee + $0.06/min | ~$109/mo |
| Retell AI | $0.07/min all-in (transparent) | ~$14/mo + GHL workflow integration cost |
| Vapi | $0.05/min + STT + LLM + TTS + telephony | $0.13–0.31/min actual → ~$26–62/mo + dev time |
| Bland.ai | $0.11/min (raised from $0.09) | ~$22/mo + integration |

**Why GHL wins here despite higher base cost:**
- Zero integration work — appointments book directly into GHL calendar, contacts auto-create in CRM, post-call SMS fires from the same workflow that handles the lead.
- No webhook bridges to maintain.
- The $97/mo AI Employee add-on also covers Conversation AI (chatbot) — so it's one purchase covering two needs.

**When to reconsider:** If call volume exceeds 500 minutes/month, run the math. At 1,000 min/mo GHL costs ~$157/mo vs Retell at ~$70/mo. At that scale, Retell + Make.com integration pays for itself.

**Current IVR vs AI transition:** The existing `/api/voice/inbound` Twilio webhook can be pointed to GHL's Twilio integration. No code changes needed — it's a Twilio number re-configuration.

**Sources:**
- [GHL Voice AI 2026 Receptionist Guide](https://getautomized.com/gohighlevel-ai-voice-agents-guide/)
- [Voice AI Cost Per Minute 2026](https://klariqo.com/blog/voice-ai-cost-per-minute/)
- [Bland vs Vapi vs Retell 2026](https://www.whitespacesolutions.ai/content/bland-ai-vs-vapi-vs-retell-comparison)
- [GHL Voice AI Pricing Breakdown](https://www.sympana.com/blog/gohighlevel-voice-ai-pricing-real-total-cost-breakdown-2026)

**Confidence:** HIGH

---

### 3. Cold Email Outreach — Instantly.ai (NOT GoHighLevel)

**Recommendation:** Instantly.ai Growth plan ($47/mo, billed annually) for cold B2B email to scraped HOA/property manager lists.

**Critical rule:** GHL must NOT be used for cold email. This is a terms of service violation and a deliverability catastrophe. Cold email (to lists Elliott's team has built from Apollo, AZ SOS, LinkedIn scraping) requires:
1. Email warming (GHL has none)
2. Sending from separate cold-outreach domains (not @axletowing.com — that ruins transactional deliverability)
3. TCPA/CAN-SPAM compliant opt-out mechanics

**Instantly.ai vs Smartlead (2026):**

| Factor | Instantly.ai | Smartlead |
|--------|-------------|-----------|
| Warmup network | 4.2M+ real accounts | AI-driven warmup, SmartServers |
| Pricing (Growth) | $47/mo (annual) | $59/mo (annual) |
| Ease of use | Better for non-developers | More configuration needed |
| Deliverability | Strong, proven | Strong, slightly more technical |
| Recommendation | **Use this** | Alternative if Instantly capacity is a concern |

**Domain strategy for Axle Towing cold email:**
- Purchase `axle-towing.com`, `axletowing.net`, or similar variations (GoDaddy, ~$12/yr)
- Never use `axletowing.com` for cold outreach — it's the main domain with transactional email
- Set up SPF/DKIM/DMARC on cold domains
- Warm each domain for 3–4 weeks before sending

**CAN-SPAM compliance for B2B email:**
- Include physical address (8155 W Buckeye Rd, Phoenix)
- One-click unsubscribe required
- No deceptive subject lines
- B2B email to business addresses (not personal cell numbers) carries lower TCPA risk than SMS

**Sources:**
- [Instantly vs Smartlead 2026](https://sparkle.io/blog/smartlead-vs-instantly/)
- [GHL Cold Email Limitations](https://help.gohighlevel.com/support/solutions/articles/48001063753-cold-outreach)
- [GHL Email Warmup Reality](https://www.mailreach.co/blog/gohighlevel-email-warmup)
- [TCPA/CAN-SPAM 2026 Guide](https://blog.clickpointsoftware.com/tcpa-one-to-one-consent-can-spam-state-regulations)

**Confidence:** HIGH — GHL's cold email prohibition is documented in official support articles.

---

### 4. Lead Scraping & Contact Intelligence — Apollo.io

**Recommendation:** Apollo.io Basic ($49/mo, annual billing) for initial list building, then potentially free tier for ongoing.

**What Apollo.io provides for this use case:**
- 210M+ contacts, 30M+ companies
- Filter by: job title (Property Manager, CAM, HOA Board President), location (Phoenix metro, Maricopa County), company size
- Email addresses + phone numbers (90% accuracy reported by users)
- Built-in DNC scrubbing
- CSV export → upload to Instantly.ai or GHL

**Apollo.io credit system (2026):**
- Basic: $49/mo = 1,200 email export credits/mo + 60 phone credits/mo
- For 500 leads (the stated goal in DECISION-MAKER-SCRAPING-STRATEGY.md), Basic tier is sufficient for the initial sprint
- Additional credits at $0.20 each if needed

**For HOA board leads specifically:** Apollo.io is strong for property management companies and CAM firms. For volunteer HOA board presidents (unpaid, not on LinkedIn), complement with:
- Arizona SOS Business Entity Search (free, no scraping needed — public records)
- Google Maps search + manual collection for smaller HOAs
- Facebook HOA group membership (manual identification)

**TCPA compliance note:** Calling B2B business lines (property management companies, community association managers at their office numbers) is lower risk under TCPA than calling personal cell phones. The FTC exempts B2B calls from many TCPA restrictions. However: calling a personal cell number of an HOA board volunteer is NOT a B2B call — treat those as consumer numbers and scrub against the National DNC Registry.

**Do NOT use LinkedIn automation bots for scraping:** LinkedIn aggressively bans automated scraping. Use Apollo.io's LinkedIn plugin manually or Apollo's own database (which aggregates LinkedIn data legally) instead.

**Sources:**
- [Apollo.io Pricing 2026](https://www.apollo.io/pricing)
- [Apollo + GHL Integration Guide](https://nzouat.com/automate-lead-gen-apollo-gohighlevel/)
- [TCPA Cold Calling Compliance](https://leadsatscale.com/insights/cold-calling-compliance-guide-tcpa-dnc-and-state-regulations/)

**Confidence:** HIGH for Apollo pricing and features. MEDIUM for TCPA B2B exemption — consult an attorney before high-volume automated outbound calls.

---

### 5. LinkedIn Outreach — Manual + LinkedIn Sales Navigator

**Recommendation:** Use LinkedIn Sales Navigator Core ($99/mo) for search and relationship intelligence. Do NOT use automation bots (Dux-Soup, Expandi, etc.).

**Rationale:** LinkedIn bans automation bot accounts at an accelerating rate in 2025-2026. The 20–30 connections/week target in the documented strategy is achievable manually. Bot-powered outreach risks permanent account ban — losing Elliott's LinkedIn presence entirely.

**What Sales Navigator adds over free LinkedIn:**
- Advanced search: filter by seniority, function, geography, company size
- "Lead recommendations" based on ICP matching
- InMail credits (50/mo) for reaching non-connections
- CRM export capability

**Workflow:**
1. Find targets in Sales Navigator (property managers, CAMs, HOA directors in Phoenix metro)
2. Send connection requests manually (20-30/week — LinkedIn's soft limit)
3. After connection acceptance, send first message from templates in `docs/LINKEDIN-OUTREACH-TEMPLATES.md`
4. Add hot leads to Apollo.io for email + phone follow-up
5. Sync accepted leads to GHL via Zapier (Sales Navigator → Zapier → GHL contact create)

**Alternative:** LinkedIn free account + Apollo.io's built-in LinkedIn enrichment covers 80% of the functionality for less cost. If budget is tight, skip Sales Navigator and use Apollo's Chrome extension.

**Sources:**
- [Sales Navigator vs Apollo 2026](https://gtm.quest/articles/linkedin-sales-navigator-vs-apollo)
- [GHL + LinkedIn Integration](https://www.salesrobot.co/blogs/gohighlevel-linkedin-integration)

**Confidence:** MEDIUM — LinkedIn pricing verified; ban risk from automation is well-documented but exact current enforcement thresholds are qualitative.

---

### 6. Social Media Scheduling — GoHighLevel Social Planner (+ Manual Nextdoor)

**Recommendation:** Use GHL Social Planner for Facebook, Instagram, LinkedIn, and Google Business Profile. Manage Nextdoor manually.

**GHL Social Planner supports (confirmed 2026):**
- Facebook Pages
- Instagram Business accounts
- LinkedIn (personal and company pages)
- Google My Business
- Twitter/X
- TikTok

**Nextdoor situation:** No GHL integration exists. Feature has been requested by users since 2023 and is not on the published roadmap. Nextdoor's API is highly restricted — it doesn't support third-party scheduling tools at all (Buffer, Later, Hootsuite also cannot post to Nextdoor). Nextdoor must be managed manually through the Nextdoor Business dashboard.

**Content calendar execution:**
- 3x/week LinkedIn: Schedule in GHL Social Planner, use Stitch templates for graphics
- 3x/week Facebook: Schedule in GHL Social Planner
- 3-4x/week Instagram: Schedule in GHL Social Planner (Reels require manual posting on some plans)
- Nextdoor: Manual post from business.nextdoor.com — target 2x/week community posts

**Why not Buffer or Later:** GHL Social Planner is included in the plan Elliott is already paying for. Adding Buffer ($18-36/mo) or Later ($25-45/mo) adds cost with no workflow benefit — GHL already syncs posts to contacts and CRM context.

**Sources:**
- [GHL Social Planner Guide 2026](https://supplygem.com/gohighlevel-social-planner/)
- [Nextdoor Not in GHL Planner](https://ideas.gohighlevel.com/invoice/p/integration-with-nextdoorcom-in-social-planner)
- [Nextdoor Business Advertising](https://business.nextdoor.com/en-us/small-business)
- [Buffer vs Later 2026](https://buffer.com/resources/buffer-vs-later/)

**Confidence:** HIGH for GHL limitations. HIGH that Nextdoor requires manual management.

---

### 7. Website Chatbot — GoHighLevel Conversation AI Chat Widget

**Recommendation:** Embed GHL's native Chat Widget on axletowing.com. Do NOT build a custom chatbot or use Intercom/Drift.

**Setup:** A JavaScript snippet from GHL Sites → Chat Widget drops onto the Next.js site. Conversation AI (included in the $97/mo AI Employee add-on already paying for Voice AI) handles property manager inquiries, qualifies leads, and books assessment calls.

**What it does out of the box:**
- Responds to website visitor messages 24/7
- Qualifies leads (property type, number of units, current towing situation)
- Books calls directly into GHL calendar
- Creates contact in GHL CRM automatically
- Can escalate to SMS follow-up sequence

**Implementation note:** Add the chat widget script to `website/src/app/layout.tsx` in the `<body>` tag. No backend changes needed.

**Sources:**
- [GHL Chat Widget Setup](https://help.gohighlevel.com/support/solutions/articles/48000984860-how-to-install-highlevel-s-chat-widget)
- [GHL Conversation AI Setup Guide](https://getautomized.com/gohighlevel-conversation-ai-setup/)

**Confidence:** HIGH

---

### 8. Appointment & Hiring Pipeline — GoHighLevel Calendars (Replace Calendly)

**Recommendation:** Use GHL's native calendar system. Remove Calendly from the hiring pipeline design.

**GHL Calendars handle:**
- Round-robin scheduling across multiple team members
- Conditional availability (service type, location, etc.)
- Automated confirmation + reminder emails/SMS
- Pipeline stage triggers (book a call → move opportunity to "Appointment Set")

**The documented 9-stage hiring pipeline** maps perfectly to GHL Opportunities:
1. Applied → 2. Phone Screen Scheduled → 3. Phone Screen Complete → 4. In-Person Interview → 5. Background Check → 6. Offer Extended → 7. Hired → 8. Training → 9. Active Driver

For the hiring funnel: GHL form on a dedicated "Join Our Team" GHL funnel page (or webhook from existing website job form) creates a contact, triggers a "Hiring Pipeline" workflow, and auto-sends confirmation + scheduling link.

**Calendly is not needed.** GHL's calendar is functionally equivalent for this use case, and adding Calendly creates two systems for one job.

**Sources:**
- [GHL Calendars Complete Guide 2026](https://netpartners.marketing/gohighlevel-calendars/)
- [GHL vs Calendly 2026](https://ghl-services-playbooks-automation-crm-marketing.ghost.io/gohighlevel-vs-calendly/)

**Confidence:** HIGH

---

### 9. Corporate Gifting & Merchandise — Printify

**Recommendation:** Printify Free plan + Printify Pop-Up Store (no Shopify needed).

**Why not Shopify:** Shopify costs $39/mo for a basic storefront. Printify's Pop-Up Store feature allows direct order fulfillment without a Shopify subscription. For a B2B gifting program (not a retail consumer store), this is the right choice — gifts are ordered internally by Elliott's team and sent to HOA board members and property managers.

**Printify setup for corporate gifting:**
- Free account at printify.com
- Design branded merchandise: Axle Towing logo on hats, coffee mugs, water bottles, tote bags, pens (reference docs/PRINTIFY-MERCHANDISE-PLAN.md for full catalog)
- Use Printify Pop-Up Store URL for direct ordering — no storefront tech needed
- Order on-demand for each gift (no inventory held)
- Production costs: ~$5–15/item depending on product + $4–8 shipping

**Premium plan ($24.99/mo annual):** Only needed if volume exceeds 50+ orders/month. Skip for initial launch.

**Gifting program integration with GHL:** When a prospect becomes a signed client in GHL pipeline, trigger a GHL workflow task: "Send welcome gift" → team member manually places Printify order. No automation between GHL and Printify (no native integration exists).

**Sources:**
- [Printify Pricing 2026](https://printify.com/pricing/)
- [Printify Pricing Changes 2026](https://mydesigns.io/blog/printify-pricing-changes-2026/)
- [Printify Corporate Merchandise](https://printify.com/branded-merchandise/)

**Confidence:** HIGH

---

### 10. Automation Bridge — Make.com (for Apollo → GHL sync)

**Recommendation:** Make.com Free plan (up to 1,000 operations/mo) or Core ($9/mo for 10,000 ops).

**Use cases for Make.com:**
- Apollo.io lead export → GHL contact creation (CSV import is an alternative but Make is cleaner)
- LinkedIn Sales Navigator prospect → GHL contact (via CSV or webhook)
- AZ SOS scrape results → GHL contact batch import
- Future: Trigger Instantly.ai sequence when GHL contact reaches certain pipeline stage

**Why Make.com over Zapier:** Make.com provides roughly 10x more operations per dollar at lower tiers. For the volume at Axle Towing (hundreds of leads/month, not thousands), even the free tier is sufficient for months.

**GHL webhook changes:** Note that GHL is changing webhook signatures in July 2026 — any Make.com → GHL integrations built before then may need updating. Build with the v2 API endpoint format.

**Sources:**
- [GHL + Make/Zapier Integration Guide](https://help.gohighlevel.com/support/solutions/articles/155000001183-how-to-use-webhooks-in-highlevel-zapier-)
- [Apollo + GHL Integration](https://nzouat.com/automate-lead-gen-apollo-gohighlevel/)
- [Make vs Zapier for GHL 2026](https://www.highlevel.ai/highlevel-vs-zapier-make)

**Confidence:** MEDIUM — GHL webhook signature change is confirmed on their roadmap; exact July 2026 date and impact on existing integrations needs monitoring.

---

## GoHighLevel API — Programmatic Setup Capabilities

This section addresses the requirement to **configure GHL via API rather than UI**, enabling scripted, repeatable deployment for the Axle Towing sub-account and future clients.

### Authentication Models

GHL API v2 supports two authentication patterns:

**1. Private Integration Tokens (recommended for this use case)**
- Static OAuth2 access tokens scoped to specific permissions
- Created inside GHL dashboard: Settings → Integrations → Private Integrations
- No OAuth flow needed — best for internal scripts and single-account automation
- Rotate every 90 days as a security best practice
- Two scopes: Agency-level token (manages sub-accounts) or Sub-Account-level token (manages data within one account)

**2. OAuth 2.0 (for multi-tenant marketplace apps)**
- Required if building a publicly distributed GHL integration
- Access tokens expire after 24 hours; refresh tokens keep sessions alive
- More complex — overkill for Axle Towing's single-client setup

**For Axle Towing:** Use Private Integration Tokens. Create an Agency-level token with the needed scopes, then generate a sub-account token for Axle Towing's location specifically.

**Rate limits (v2 API):**
- Burst: 100 requests per 10 seconds per Marketplace app per resource
- Daily: 200,000 requests per day per Marketplace app per resource
- For setup scripts (hundreds of operations, not millions), these limits are non-binding.

### What CAN Be Done via API (Confirmed)

| Operation | API Endpoint | Notes |
|-----------|-------------|-------|
| Create sub-account | `POST /locations/` | **Agency Pro ($497/mo) required** |
| Get/update sub-account | `GET/PUT /locations/{locationId}` | Available on Unlimited+ |
| Create contacts | `POST /contacts/` | Full CRUD available |
| Bulk contact import | CSV upload via UI (no bulk API endpoint) | Bulk imports do NOT trigger contact-created workflows |
| Create/update opportunities | `POST /opportunities/` | Pipeline management via API |
| Create pipelines | `POST /opportunities/pipelines/` | Full pipeline CRUD |
| Create pipeline stages | Nested under pipeline endpoint | Set stage names + order |
| Create calendars | `POST /calendars/` | Appointment type configuration |
| Create custom fields | `POST /custom-fields/` (v2 endpoint) | Field type, label, placeholder |
| Create tags | `POST /contacts/tags/` | Tag management |
| Create workflows (trigger) | Webhook → GHL workflow | Can TRIGGER workflows via API; cannot CREATE workflow definitions |
| Get snapshot list | `GET /snapshots/` | Lists all snapshots on agency account |
| Get snapshot push status | `GET /snapshots/push-status/{locationId}` | Check deployment state |
| Create snapshot share link | `POST /snapshots/{snapshotId}/share-link` | Generate shareable URL |
| Create sub-account from snapshot | `POST /locations/` with snapshotId param | Unconfirmed — see below |

### What CANNOT Be Done via API (Must Use UI)

| Operation | Why UI Only | Workaround |
|-----------|------------|-----------|
| Create workflow definitions | No workflow CREATE endpoint exists in API v2; workflows can only be built in the visual builder | Use Snapshots — build workflows in UI once, snapshot them, deploy snapshot via API |
| Export workflow as JSON | Feature-requested, not implemented | Snapshots are the export mechanism |
| Deploy snapshot to existing sub-account | `Load Snapshot` is UI-only; API only shows push status | For new sub-accounts, create-with-snapshot may work (unconfirmed) |
| Configure Voice AI agent | Voice AI agent builder is UI-only | Must configure conversational flows in GHL UI |
| Configure Conversation AI bot | Bot training + intent setup is UI-only | Template prompts must be entered in UI |
| Social Planner connections | OAuth connections to Facebook/LinkedIn require browser-based OAuth consent flow | Must authenticate in GHL UI; cannot be scripted |
| Email domain verification | SPF/DKIM records + GHL email domain UI flow | DNS changes + GHL UI verification both required |
| Twilio phone number connection | Twilio number assignment requires GHL UI + Twilio console | Manual step; cannot be scripted |

### Snapshots — The Correct Automation Strategy

Snapshots are the recommended mechanism for deploying a pre-configured GHL setup programmatically. The approach:

**Step 1 (one-time, manual):** Build the ideal Axle Towing sub-account in GHL UI:
- All 6 referral email sequences
- 21-day nurture workflow
- HOA/property manager pipeline stages
- Hiring pipeline
- Chat widget configuration
- Voice AI agent (if UI-configurable before API deployment)
- Custom fields, tags, calendars

**Step 2:** Save as a Snapshot at agency level (Settings → Account Snapshots → Create Snapshot)

**Step 3 (scriptable):** Deploy the snapshot to new sub-accounts via:
```bash
# Create new sub-account with snapshot applied
POST /locations/
{
  "name": "Axle Towing & Impound",
  "companyId": "{agencyId}",
  "snapshotId": "{snapshotId}",  # applies snapshot on creation
  ...
}
```

**Step 4:** Use API to populate contact data, custom field values, and business-specific configurations.

**Snapshot push updates (for existing accounts):** When you update the snapshot and push updates to child accounts, GHL tracks which snapshot version each sub-account has. API endpoints exist to check push status but the push action itself appears to be UI-triggered.

### Plan Requirement: Unlimited ($297) vs Pro ($497) for API

**The `POST /locations/` (create sub-account) endpoint requires Agency Pro ($497/mo).** This is the only significant API feature gated behind Pro.

| Feature | Unlimited ($297) | Pro ($497) |
|---------|-----------------|-----------|
| API access | Yes (v2) | Yes (v2) |
| Private Integration Tokens | Yes | Yes |
| Create sub-accounts via API | No | **Yes** |
| Snapshot sharing | Yes | Yes |
| SaaS mode (resell GHL) | No | Yes |
| Rebilling with markup | No | Yes |

**For Axle Towing v2.0 (single client):** The Unlimited plan ($297) is sufficient. Sub-account creation via API is only needed for agencies deploying GHL to many clients programmatically — that's a future concern, not a v2.0 requirement. The sub-account can be created manually once.

**For future agency-scale automation:** Upgrade to Pro ($497) when the pattern of "create client sub-account from snapshot via API" is needed for more than 2-3 clients/month.

### Official SDK

GHL publishes an official TypeScript/Node.js SDK:

```bash
npm install @gohighlevel/api-client
# Requires Node.js >= 18.0.0
```

Repository: [GoHighLevel/highlevel-api-sdk on GitHub](https://github.com/GoHighLevel/highlevel-api-sdk)

The SDK provides typed interfaces for all v2 API resources, handles token refresh, and includes examples for private integration and OAuth flows.

**For the setup automation scripts** (creating pipelines, contacts, custom fields programmatically), use the official SDK rather than raw fetch calls. The SDK handles rate limiting and authentication edge cases.

**Community alternatives:**
- [ghlSDK (informal)](https://github.com/CallBackCode/ghlSDK) — Node.js compatible, organized by resource
- [M2KDevelopments/gohighlevel](https://github.com/M2KDevelopments/gohighlevel) — broader coverage but less maintained

### Recommended Setup Automation Approach

Given the mix of what is/isn't API-scriptable, the pragmatic sequence for GHL deployment is:

**Phase A — Manual UI setup (cannot be avoided):**
1. Create agency account + Axle Towing sub-account manually
2. Connect Twilio number in GHL UI
3. Verify LC Email / Mailgun domain
4. Connect social accounts (Facebook, LinkedIn, Instagram, GMB) via OAuth in Social Planner
5. Configure Voice AI agent in Agent Studio
6. Configure Conversation AI bot knowledge base

**Phase B — Script-driven setup (use official SDK):**
```typescript
import { GoHighLevelClient } from '@gohighlevel/api-client';

const client = new GoHighLevelClient({ 
  accessToken: process.env.GHL_PRIVATE_TOKEN 
});

// Create pipelines
await client.opportunities.createPipeline({ name: 'HOA Outreach', stages: [...] });
await client.opportunities.createPipeline({ name: 'Hiring Pipeline', stages: [...] });

// Create custom fields
await client.customFields.create({ name: 'Property Type', dataType: 'TEXT' });

// Import initial contacts from Apollo CSV
await client.contacts.create({ firstName, lastName, email, phone, tags });

// Create appointment calendars
await client.calendars.create({ name: 'Assessment Call', ... });
```

**Phase C — Snapshot capture:**
After Phase A and B are complete, capture a Snapshot. Future clients with similar profiles can be onboarded by: (1) create sub-account via API [Pro plan], (2) apply snapshot, (3) run contact import script.

**Sources:**
- [GHL API Documentation](https://help.gohighlevel.com/support/solutions/articles/48001060529-highlevel-api-documentation)
- [GHL OAuth 2.0 Docs](https://marketplace.gohighlevel.com/docs/Authorization/OAuth2.0/index.html)
- [Private Integrations Token Guide](https://marketplace.gohighlevel.com/docs/Authorization/PrivateIntegrationsToken/)
- [Create Sub-Account API — requires Pro](https://marketplace.gohighlevel.com/docs/ghl/locations/create-location/index.html)
- [Sub-Account API Reference](https://marketplace.gohighlevel.com/docs/ghl/locations/sub-account-formerly-location-api/index.html)
- [Snapshots API](https://marketplace.gohighlevel.com/docs/ghl/snapshots/snapshots/index.html)
- [Official Node.js SDK](https://github.com/GoHighLevel/highlevel-api-sdk)
- [Snapshots Deployment Guide](https://oneexpand.com/gohighlevel-snapshots-guide/)
- [GHL API Webhooks Guide](https://www.highlevel.ai/blog/gohighlevel-api-webhooks-guide)

**Confidence:** HIGH for what is and isn't API-scriptable (sourced from official API docs). MEDIUM for snapshot deployment via API during sub-account creation (the `snapshotId` parameter on `POST /locations/` is referenced in GHL support docs for Zapier-based creation but the direct API behavior wasn't fully confirmed in documentation reviewed).

---

## Full Stack Summary Table

| Function | Tool | Monthly Cost | Why |
|----------|------|-------------|-----|
| CRM + all nurture automation | GoHighLevel Unlimited | $297 | Single platform for everything |
| Voice AI + chatbot add-on | GHL AI Employee add-on | $97 | Covers both Voice AI + Conversation AI |
| Twilio (SMS/phone passthrough) | Twilio via GHL | ~$20–50 usage | SMS $0.01-0.03/msg; already in project |
| Cold email outreach | Instantly.ai Growth | $47 | Warmup network, separate domain safety |
| Lead database + scraping | Apollo.io Basic | $49 | 1,200 email credits/mo for 500-lead goal |
| LinkedIn relationship intel | LinkedIn Sales Navigator Core | $99 | OR skip and use Apollo only ($0) |
| Social media scheduling | GHL Social Planner (included) | $0 | Already in GHL plan |
| Nextdoor | Manual (business.nextdoor.com) | $0 | No API for third-party scheduling |
| Website chatbot | GHL Chat Widget (included) | $0 | In AI Employee add-on |
| Hiring pipeline scheduling | GHL Calendars (included) | $0 | Replaces Calendly |
| Merchandise + gifting | Printify Free | $0 | Pay-per-order only |
| Automation bridge | Make.com Free/Core | $0–9 | Apollo → GHL contact sync |

**Estimated total new monthly spend:** $509–608/mo (GHL $394 + Instantly $47 + Apollo $49 + Sales Navigator $99 optional + Make $9 optional)

**Without Sales Navigator:** $460/mo

---

## What NOT to Use

| Tool | Why Not |
|------|---------|
| Bland.ai / Vapi / Retell | Adds integration complexity; GHL Voice AI is sufficient for this call volume and stays in one ecosystem |
| Shopify | Overkill for B2B gifting program; Printify Pop-Up Store handles it |
| Calendly | Duplicates GHL Calendars at added cost |
| Buffer / Later / Hootsuite | Duplicates GHL Social Planner; adds cost and platform fragmentation |
| LinkedIn automation bots (Expandi, Dux-Soup, etc.) | High account ban risk; 20-30 connections/week is achievable manually |
| Custom chatbot (Intercom, Drift, custom code) | GHL Conversation AI is sufficient; custom build adds months of dev time |
| Zapier | Make.com is 10x more cost-effective at this operation volume |
| GHL for cold email | Against GHL ToS; ruins transactional email deliverability |
| GHL Agency Pro ($497) for this project | Sub-account creation via API is not needed for a single client; upgrade only when deploying 3+ clients/month from snapshots |

---

## Compliance Flags

**TCPA (SMS/Phone):**
- GHL SMS to opted-in contacts: compliant
- Outbound AI calls to cold lists: require prior express written consent OR must be manual-dial to business lines only
- B2B calls to business phone numbers (property management company main lines): lower TCPA exposure
- Personal cell numbers of HOA board volunteers: must scrub against National DNC Registry

**CAN-SPAM (Email):**
- Cold email via Instantly.ai: compliant if physical address included, one-click unsubscribe present, no deceptive headers
- GHL nurture email to existing contacts: compliant standard transactional/marketing treatment

**Arizona-specific:** Arizona follows federal TCPA — no additional state restrictions beyond federal law. ARS §28-1104 governs towing operations, not marketing.

---

## Implementation Order Rationale

GHL must be configured first — it is the dependency for 11 of the 14 tasks. The sequence should be:

**Phase A — GHL account setup (manual, cannot be scripted):**
1. GHL account setup → sub-account for Axle Towing → Twilio connect → LC Email connect
2. Connect social accounts via OAuth (Facebook, LinkedIn, Instagram, GMB)
3. Voice AI agent configuration in Agent Studio
4. Conversation AI bot knowledge base setup

**Phase B — GHL data setup (scriptable via official SDK):**
5. Create pipelines (HOA Outreach, Hiring) via API
6. Create custom fields via API
7. Import existing contacts (any leads Elliott has)
8. Create appointment calendars via API

**Phase C — Content/workflow activation (GHL UI):**
9. Build referral email sequences (6 partner types × 3 emails) in Workflow builder
10. Build 21-day nurture campaign workflows in Workflow builder
11. Chat widget embed on axletowing.com (add GHL script tag to Next.js layout)

**Phase D — External tools:**
12. Apollo.io account → first 500-lead export → import to GHL
13. Instantly.ai setup → purchase cold domain → begin 3-4 week warmup
14. Social Planner → content calendar connected + first posts scheduled
15. Facebook groups strategy (manual) + Instagram launch
16. Nextdoor business profile setup (manual)
17. Hiring pipeline in GHL Opportunities
18. Printify store setup + first gift designs

**Phase E — Cold outreach launch (after domain warmup completes):**
19. Instantly.ai cold email campaigns begin
20. LinkedIn Sales Navigator manual outreach begins

**Critical path:** GHL Voice AI blocks UMA replacement (highest urgency per contract). Instantly.ai domain warming is a 3-4 week lead time that must start immediately to not delay cold email sends.

**Snapshot capture:** After all workflows are configured and tested, capture a GHL Snapshot. This becomes the agency template for future towing company clients.
