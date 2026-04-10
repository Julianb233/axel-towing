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
| Website | Railway | axletowing.com |
| Dashboard/Portal | Vercel (ai-acrobatics team) | axel-towing-portal.vercel.app |
| CRM | GoHighLevel | Sub-account (setup in progress) |
| Email | Google Workspace | elliott@, brian@, tori@, chris@ (DNS not configured) |
| Domain Registrar | eNom/LiquidWeb (NOT GoDaddy) | Mike controls DNS |

### Website Tech
- Next.js 14 (App Router), Tailwind CSS, Supabase, Resend, Twilio
- Deployed on Railway via GitHub auto-deploy from `main`

### Dashboard Tech
- Next.js, Tailwind, Framer Motion, Anthropic SDK, Supabase, jsPDF
- Deployed on Vercel (ai-acrobatics team)

## Deployment

**Website (Railway):** Pushes to `main` auto-deploy.

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

Send session report via iMessage to +16195095099 with specific deliverables, URLs, and Linear IDs.

## SEO Strategy

- **Target audience:** Property managers, HOAs, apartment complexes, commercial properties
- **Content focus:** Parking enforcement, towing contracts, Arizona towing laws (ARS 28-3511), HOA compliance
- **Spanish content:** 6 articles for bilingual Phoenix audience (property manager and driver safety topics only)
- **Blog categories:** Property Management, Arizona Towing Laws, HOA Resources, Commercial & Apartment Towing, Safety & Community
- **Removed:** Vehicle Owner Resources (removed April 2026 — diluted brand positioning)

## Current Blockers

- **Email/DNS:** Google Workspace DNS not configured — blocked on Mike (Elliott's DNS admin) updating eNom records
- **GHL:** Sub-account, A2P 10DLC, workflows, chat widget, voice AI — all in Linear backlog
- **Telegram:** Client group not yet created

## Brand

- **Colors:** Navy (#1B2A3F), Red (#DC2626), White
- **Phone:** 480-288-5526
- **Tagline:** Professional private property towing at no cost to property owners
- **Service area:** Phoenix metro (40+ cities)
