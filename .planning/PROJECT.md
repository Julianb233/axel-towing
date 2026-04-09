# Axle Towing & Impound — Website & Marketing Platform

## What This Is

A full-service digital presence and outbound marketing system for Axle Towing & Impound, a private property towing and parking enforcement company serving 40+ cities in the Phoenix metro area. The platform includes a Next.js marketing website (axletowing.com), client portal dashboard, automated outreach campaigns, AI-powered phone system, and social media presence — all designed to generate property management leads at zero cost to property owners.

## Core Value

**Generate qualified property manager leads through automated multi-channel outreach** — every feature must drive toward signing new HOA, apartment, and commercial property accounts.

## Current Milestone: v2.0 Outbound Marketing & Automation

**Goal:** Deploy all 14 outreach strategies promised in the March 17, 2026 contract meeting with Elliott. Transform documented strategies into live, automated systems.

**Target features:**
- GoHighLevel CRM configured with referral partner email sequences (6 partner types)
- LinkedIn, Facebook, Instagram, and Nextdoor social media active and posting
- AI phone system replacing UMA with after-hours receptionist
- 21-day automated nurture campaigns (email + SMS)
- Property manager chatbot on website
- Automated hiring pipeline (Calendly + GHL)
- Corporate gifting program via Printify
- Property manager lead scraping automation
- Google Workspace email automation (labels, filters, auto-replies)
- Branded social media design templates (Stitch project 12363110404051190167)

## Requirements

### Validated

<!-- Shipped and confirmed valuable. Milestone v1.0 -->

- [x] Marketing website deployed to axletowing.com on Vercel — v1.0
- [x] 40 localized city SEO pages built and indexed — v1.0
- [x] TowBook portal links wired (app.towbook.com + vehicle lookup) — v1.0
- [x] Contact form → /api/leads → dispatch email + Supabase — v1.0
- [x] Email dispatch via Resend API (dispatch@axletowing.com) — v1.0
- [x] Branded email template library (765 lines, 16KB) — v1.0
- [x] Hosting migrated from GoDaddy to Vercel — v1.0
- [x] Google Workspace email set up for axletowing.com — v1.0
- [x] Google Search Console verified + sitemap submitted — v1.0
- [x] NAP citations submitted to 100+ directories — v1.0
- [x] Job application form exists on website — v1.0
- [x] SEO content calendar (123 pages planned) — v1.0
- [x] All outreach strategy documents written (14 docs in docs/) — v1.0

### Active

<!-- Current scope — v2.0 Outbound Marketing & Automation -->

- [ ] Deploy referral partner email sequences to GHL (6 partner types, 3-email each)
- [ ] Set up LinkedIn outreach for HOA decision makers (20-30 connections/week)
- [ ] Execute Facebook HOA groups strategy (join 8-12 groups)
- [ ] Launch social media content calendar (3x/week LinkedIn, 3x/week FB, 3-4x/week IG)
- [ ] Deploy AI receptionist + phone system replacing UMA
- [ ] Build automated 21-day nurture campaign sequences in GHL (email + SMS)
- [ ] Build property manager chatbot for website
- [ ] Set up automated hiring pipeline (Calendly + GHL 9-stage)
- [ ] Set up corporate gifting program via Printify (tiered merchandise)
- [ ] Automate property manager lead scraping (AZ SOS, Google Maps, LinkedIn)
- [ ] Configure Google Workspace email automation (labels, filters, auto-replies, aliases)
- [ ] Set up Nextdoor business profile for both locations
- [ ] Create Instagram account + first month of branded content
- [ ] Complete social media design templates in Stitch

### Out of Scope

- Spanish SEO / SoCal Hispanic market expansion — completed as separate initiative (AI-5309)
- Website redesign — current site is production-ready and performing
- Custom CRM build — using GoHighLevel as existing CRM platform
- Paid advertising (Google Ads, Facebook Ads) — not discussed in contract, organic-first approach
- Vehicle sales platform (/cars-for-sale) — redirected to /we-buy-cars, not a priority

## Context

**Client:** Elliott (owner), Brian (IT coordination), Mike (DNS admin, East Coast)
**Contract date:** March 17, 2026 (73-min Zoom call with Julian)
**Follow-up:** March 24, 2026 (12-min call — email/portal fixes with Brian)
**Linear issues:** AI-7427 through AI-7440 (14 tasks for this milestone)
**Existing Linear:** AI-6721 (GBP optimization, Todo), AI-6659 (GBP verification, In Progress)

**Key insight:** All 14 outreach strategies have comprehensive documentation in docs/ but ZERO are deployed as live automations. The entire marketing engine is documented but not turned on.

**CRM dependency:** GoHighLevel is referenced throughout all outreach docs but has not been configured. This is the critical dependency — most automation sequences require GHL to be operational.

**Brand assets:** Logo, 14 gallery photos, 50+ optimized WebP images, brand colors (#1e6bb8 blue, #dc3a30 red, #1b2a3f navy), fonts (Mohave display, Open Sans body). Stitch design system created.

**Fireflies transcripts:**
- March 17: https://app.fireflies.ai/view/01KKYGPKF4ZPGYJXYJ3B1GCXR1
- March 24: https://app.fireflies.ai/view/01KMPNYGN2H20SV390JB1J8YQM

## Constraints

- **CRM Platform**: GoHighLevel — all automation must use GHL workflows, not custom code
- **Client Approval**: Elliott must approve all outreach templates before activation (per contract meeting)
- **Budget**: Zero-cost services to property owners is the value prop — marketing must emphasize this
- **Compliance**: Must follow Arizona towing laws (ARS §28-1104) in all educational content
- **DNS**: Mike (Elliott's DNS admin) is difficult to reach — DNS changes may be slow
- **Phone**: Current system is UMA — transition must be seamless with no dropped calls

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Use GHL for all automation | Elliott's existing CRM, documented in all strategy docs | — Pending |
| Resend for transactional email | Already integrated in website code | ✓ Good |
| Stitch for social media design | Consistent brand system, reusable templates | — Pending |
| Organic-first marketing | Contract focused on referral + social, not paid ads | — Pending |
| Vercel for hosting | Migrated from GoDaddy, GitHub auto-deploy working | ✓ Good |
| Google Workspace for email | Centralized email with aliases, recommended in contract meeting | ✓ Good |

---
*Last updated: 2026-04-09 after milestone v2.0 initialization*
