# Axle Towing — Agent Instructions

## Project Overview

**Client:** Axle Towing & Impound (private property towing, Phoenix metro)
**Owner:** Elliott — +18057602314 (iMessage, primary channel)
**Domain:** axletowing.com (correct spelling) / axeltowing.com (misspelled, GoDaddy redirect)
**Status:** Active, paid client (`paid-active`)
**Linear Label:** `axle-towing`
**GitHub:** Julianb233/axel-towing

## Client Contacts

- **Elliott** (Owner/Operator): +18057602314, elliott.axletowing@gmail.com
- **Brian** (Operations, 25+ yrs): coordinates with DNS admin Mike
- **Tori** (Team Member)
- **Chris** (Team Member)
- **Mike** (DNS admin, East Coast): controls axletowing.com DNS on eNom/LiquidWeb
- **Business Address:** 320 E. Pioneer St, Phoenix AZ 85040

## Communication

- **Elliott's style:** Brief, direct, low-tech, trusts Julian
- **Requests come via:** iMessage with annotated screenshots to Julian
- **Telegram HQ topic:** `client_axel` (thread_id 40) — internal fleet discussion
- **Telegram client group:** NOT YET CREATED — needs Julian to set up
- **PPP Portal:** Check Supabase `portal_clients` for axle-towing entry

## Stack

| Component | Platform | URL |
|-----------|----------|-----|
| Website | Vercel (ai-acrobatics team, project `axel-towing`) | axletowing.com |
| Dashboard (standalone) | Vercel (ai-acrobatics team, project `ppp-portal`) | axle-towing-portal.vercel.app |
| PPP (multi-tenant client portal) | portal.aiacrobatics.com/axel-towing | Deliverables, feed, action items — always-live |
| CRM | GoHighLevel | Sub-account wired — see Integrations below |
| Email | Google Workspace | elliott@, brian@, tori@, chris@ (DNS not configured) |
| Domain Registrar | eNom/LiquidWeb (NOT GoDaddy) | Mike controls DNS |

### Website Tech
- Next.js 16 (App Router, Turbopack), Tailwind CSS, Supabase, Resend, Twilio
- Deployed on **Vercel** via GitHub auto-deploy from `main`. `website/railway.toml` is a legacy artifact — ignore it.

### Dashboard Tech
- Next.js, Tailwind, Framer Motion, Anthropic SDK, Supabase, jsPDF
- Deployed on Vercel (ai-acrobatics team)

## Deployment

**Website (Vercel):** Pushes to `main` auto-deploy. Manual:
```bash
cd website && npx vercel build --prod && npx vercel deploy --prebuilt --prod --yes --scope ai-acrobatics
```

**Dashboard (Vercel):**
```bash
# Auto-deploys from main branch, or manually:
npx vercel build --prod && npx vercel deploy --prebuilt --prod --yes --scope ai-acrobatics
```

## CRITICAL RULES

1. **NEVER show specific $ pricing** on the website (Elliott directive)
2. **NEVER publish content that helps vehicle owners fight tows** — Axle's customers are property managers, not car owners
3. **Always push to main after committing** — feature branches must be merged, not left hanging
4. **Monitor +18057602314** for iMessage client requests
5. **All blog content must target property managers, HOAs, and commercial properties** — not vehicle owners

## Key Directories

```
website/                    # Public website (axletowing.com)
website/src/app/            # Next.js App Router pages
website/src/app/blog/       # English blog (property manager focused)
website/src/app/es/         # Spanish pages and blog
website/src/lib/            # Constants, utilities, blog slugs
website/src/content/        # MDX blog articles
dashboard/                  # Client portal/dashboard
dashboard/app/changelog/    # Changelog page (UPDATE AFTER EVERY SESSION)
docs/                       # DNS templates, strategy docs
scripts/                    # Automation scripts
data/                       # SEMrush snapshots, research data
.planning/                  # GSD planning files
```

## After Every Work Session

### 1. Update the Dashboard Changelog

Edit `dashboard/app/changelog/page.tsx` and add a new entry at the TOP of the `changelog` array:

```typescript
{
  date: "Month DD, YYYY (Short title — Linear IDs)",
  type: "completed",
  entries: [
    { text: "What was done", category: "website" | "dashboard" | "seo" | "strategy" | "content" | "infrastructure" },
  ],
},
```

### 2. Push to Main

**Always push committed work to `main`.** Do not leave commits on feature branches without merging. If a PR exists, merge it. Vercel and Railway auto-deploy from `main`.

### 3. Notify Julian

Send session report via iMessage to +16195090699 (Julian) with specific deliverables, URLs, and Linear IDs. Never send session reports to any client number.

## SEO Strategy

- **Target audience:** Property managers, HOAs, apartment complexes, commercial properties
- **Content focus:** Parking enforcement, towing contracts, Arizona towing laws (ARS 28-3511), HOA compliance
- **Spanish content:** 6 articles for bilingual Phoenix audience (property manager and driver safety topics only)
- **Blog categories:** Property Management, Arizona Towing Laws, HOA Resources, Commercial & Apartment Towing, Safety & Community
- **Removed:** Vehicle Owner Resources (removed April 2026 — diluted brand positioning)

## Integrations

### GoHighLevel (CRM — wired, paid-active)

- **Sub-account:** Axle Towing & Impound (location ID in `website/.env.local` as `GHL_LOCATION_ID`; mirrored in Vercel prod env)
- **API:** `https://services.leadconnectorhq.com` — Bearer token in `GHL_API_KEY`, `Version: 2021-07-28`
- **Provisioning state (2026-04-20, Worker G):**
  - 23 custom fields (stable set) incl. Property Name, Property Type, HOA Name, Event Name, Referral Source, Lead Source, Rideshare Platform, Last Tow Count 90d, Partnership Start Date, etc.
  - 65 tags covering cold/inbound/referral/source/stage categories plus 14 sequence-completion tags
  - 3 pipelines: Hiring, **Property Account** (9 stages — the primary lead pipeline), Referral Partner
  - 0 workflows in `Automation > Workflows` — clean slate; 14 planned per `docs/ghl-workflows/MANIFEST.md`
- **Inbound webhook:** `GHL_WEBHOOK_URL` env var points at a GHL inbound workflow trigger. The website's `/api/leads` route calls both `syncLeadToGHL` (REST) and `sendLeadToGHLWebhook` (webhook). Worker G verified the sub-account API directly (contact create + delete successful) but observed that prod `/api/leads` accepts without syncing — tracked as **AI-8372** (Vercel prod env var gap; Hitesh assigned).
- **Workflow-wiring drop-in:** `docs/ghl-workflows/WIRING-CHECKLIST.md` — merge-field translation, node-by-node click-path for all 14 workflows. Paired with the existing `GHL-WORKFLOW-DEPLOYMENT-RUNBOOK.md`.
- **Workflow status (AI-8344 + sub-issues AI-8363..AI-8371):**
  - 0/14 wired in UI (blocked on Stagehand quota + Elliott copy approval for 9 of them)
  - 5 BUILT (HTML ready in `website/src/lib/email-templates.ts`): nurture-pm-inbound, referral-locksmith, referral-mechanic, transactional-vehicle-retrieval, cold-pm-introduction (shell only)
  - 9 NEEDS-COPY-EDIT (tracked in AI-8363 through AI-8371)
- **Activation policy:** cold outbound workflows DRAFT ONLY until Elliott signs off on copy per-iteration. Transactional vehicle-retrieval requires DNS (Mike) + a separate sender identity.

### Other integrations
- **Email:** Google Workspace (elliott@, brian@, tori@, chris@). DNS not configured — blocked on Mike (eNom records).
- **Website CMS:** Supabase (jrirksdiklqwsaatbhvg - Dashboard Daddy)
- **SMS / Dispatch:** Twilio
- **Transactional email:** Resend
- **SEO data:** SEMrush (daily snapshots in `data/semrush/`)

## Current Blockers

- **Email/DNS:** Google Workspace DNS not configured — blocked on Mike (Elliott's DNS admin) updating eNom records
- **GHL:** Vercel prod env vars missing (AI-8372, Hitesh). Cold email copy approval from Elliott (AI-8363..AI-8371). A2P 10DLC, chat widget, voice AI — all in Linear backlog
- **Telegram:** Client group not yet created

## Brand

- **Colors:** Navy (#1B2A3F), Red (#DC2626), White
- **Phone:** 480-288-5526
- **Tagline:** Professional private property towing at no cost to property owners
- **Service area:** Phoenix metro (40+ cities)
