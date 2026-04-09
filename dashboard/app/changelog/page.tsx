"use client";

import PageHeader from "../../components/PageHeader";
import ScrollReveal from "../../components/ScrollReveal";

interface ChangelogEntry {
  text: string;
  category: "website" | "dashboard" | "seo" | "strategy" | "content" | "infrastructure";
}

interface ChangelogGroup {
  date: string;
  type: "completed" | "upcoming";
  entries: ChangelogEntry[];
}

const changelog: ChangelogGroup[] = [
  {
    date: "April 8, 2026 (TowBook Vehicle Lookup Integration Spec — AI-2171)",
    type: "completed",
    entries: [
      {
        text: "Researched TowBook (TOBO) API availability — confirmed no public REST API exists; vehicle lookup is a hosted portal at axletowing7900.towbook.net",
        category: "strategy",
      },
      {
        text: "Documented current integration: /vehicle-lookup page already links to TowBook portal; /locate-vehicle has a non-functional dummy form that should be consolidated",
        category: "website",
      },
      {
        text: "Created TOWBOOK-INTEGRATION-SPEC.md with three integration options (external link, iframe embed, hybrid), action items for client, and implementation plan for AI-2176",
        category: "infrastructure",
      },
    ],
  },
  {
    date: "March 25, 2026 (Git Sync + Vercel Deployment Verified)",
    type: "completed",
    entries: [
      {
        text: "Committed and pushed all pending AI-2180/AI-2181 changes to GitHub (axel-towing main branch) — Printify pricing updates, quote API endpoint, parking permits page, SEO retainer invoice, maintenance plan invoice",
        category: "infrastructure",
      },
      {
        text: "Verified Vercel auto-deploy triggered successfully — /invoice/seo-retainer and /invoice/maintenance-plan confirmed live at Vercel preview URL",
        category: "website",
      },
      {
        text: "New pages live: /invoice/seo-retainer ($3,000/mo recurring), /invoice/maintenance-plan ($1,500/mo draft), /shop/parking-permits, /api/printify/quote endpoint",
        category: "website",
      },
    ],
  },
  {
    date: "March 25, 2026 (Klarna Payment Integration — Invoicing System — AI-2181)",
    type: "completed",
    entries: [
      {
        text: "Created SEO retainer invoice page at /invoice/seo-retainer — recurring $3,000/month plan with 6-month payment schedule, monthly deliverables breakdown, Fanbasis payment link, and performance guarantee",
        category: "website",
      },
      {
        text: "Created maintenance plan invoice page at /invoice/maintenance-plan — $1,500/month plan (draft status) for post-growth phase, includes savings comparison vs $3,000 growth plan, activates after Month 6",
        category: "website",
      },
      {
        text: "Klarna payment infrastructure fully wired: /api/klarna (hosted checkout), /api/klarna/session (widget), /api/klarna/authorize (order creation), /api/klarna/confirm (webhook) — all routes handle graceful degradation when credentials not configured",
        category: "infrastructure",
      },
      {
        text: "Invoice system covers all three payment scenarios: $7,500 website build (Klarna BNPL + Fanbasis), $3,000/mo SEO retainer, and $1,500/mo maintenance plan — all accessible from /invoice, /pay, and dedicated sub-pages",
        category: "strategy",
      },
    ],
  },
  {
    date: "March 24, 2026 (Spanish Blog — 10 New Articles + Sitemap Update — AI-2183)",
    type: "completed",
    entries: [
      {
        text: "Created 10 Spanish-language blog posts under /es/blog/ targeting high-value keywords for Phoenix's 42% Hispanic population — first towing company in Phoenix with comprehensive Spanish blog content",
        category: "seo",
      },
      {
        text: "Spanish blog topics: car breakdown guide, impound retrieval guide, driver rights when towed, apartment parking guide, free towing for owners, post-accident guide, monsoon safety, property manager towing guide, towing costs 2026, abandoned vehicles guide",
        category: "content",
      },
      {
        text: "Updated sitemap.ts to include /es/blog index page and all 10 Spanish blog post URLs for Google indexing",
        category: "seo",
      },
      {
        text: "Spanish blog targets keywords: 'que hacer cuando tu auto se descompone', 'como recuperar vehiculo del corralon', 'derechos conductores remolcados arizona', 'cuanto cuesta grua arizona' and 8 others",
        category: "seo",
      },
      {
        text: "Each Spanish blog post includes proper metadata, hreflang tags, Spanish-language CTA, related articles, and internal linking back to service pages and location pages in Spanish",
        category: "website",
      },
    ],
  },
  {
    date: "March 24, 2026 (Blog Expansion — Dynamic MDX Route + 23 New Articles — AI-2175)",
    type: "completed",
    entries: [
      {
        text: "Created dynamic blog route src/app/blog/[slug]/page.tsx to render MDX content articles with full metadata, structured data, sidebar CTA, and related articles",
        category: "website",
      },
      {
        text: "Built src/lib/mdx-utils.ts: MDX frontmatter parser + Markdown-to-HTML converter supporting headings, tables, lists, code blocks, bold, italic, and links",
        category: "website",
      },
      {
        text: "Added 23 new high-value blog articles to the blog listing page covering city guides (Scottsdale, Mesa, Chandler, Gilbert, Tempe, Apache Junction), legal guides (HB 2269, complete towing laws), vehicle owner resources (impound costs, what to do when towed), and property manager guides",
        category: "content",
      },
      {
        text: "Updated BLOG_SLUGS list to include all 23 new MDX article slugs for sitemap generation — blog now has 85 total articles indexed",
        category: "seo",
      },
      {
        text: "New SEO-targeted pages: best-private-property-towing-companies-phoenix (150 vol), impound-fees-phoenix-cost-guide (300 vol), arizona-private-property-towing-laws-complete-guide (50 vol), car-towed-phoenix-what-to-do (150 vol), towing-services-chandler-az-guide (480 vol)",
        category: "seo",
      },
    ],
  },
  {
    date: "March 24, 2026 (CRM Implementation — GoHighLevel Setup — AI-2024)",
    type: "completed",
    entries: [
      {
        text: "Created src/lib/ghl.ts: full GoHighLevel CRM integration library with createGHLContact, addGHLNote, createGHLOpportunity, and syncLeadToGHL functions",
        category: "infrastructure",
      },
      {
        text: "Updated /api/leads route to sync every website lead to GHL in parallel with existing email/SMS/Supabase notifications",
        category: "infrastructure",
      },
      {
        text: "GHL integration includes auto-tagging (58-tag taxonomy: source, property type, pipeline stage, priority, sequence), custom field mapping, and opportunity creation in the pipeline",
        category: "infrastructure",
      },
      {
        text: "Added /crm dashboard page: full GHL setup guide with 8-step implementation checklist, pipeline stage definitions, lead scoring rules, automation campaign timelines, and environment variable reference",
        category: "dashboard",
      },
      {
        text: "Added CRM (GHL) to sidebar navigation for quick access",
        category: "dashboard",
      },
      {
        text: "Two environment variables needed to activate GHL sync: GHL_API_KEY and GHL_LOCATION_ID (add to Railway) — leads still captured via email/SMS/Supabase until then",
        category: "infrastructure",
      },
    ],
  },
  {
    date: "March 24, 2026 (AI Voice Agent IVR Enhancement — AI-2178)",
    type: "completed",
    entries: [
      {
        text: "Added HOA/property manager partnership branch (Press 4) to inbound IVR — callers can now self-select into the partnership pipeline instead of reaching generic dispatch",
        category: "infrastructure",
      },
      {
        text: "Inbound billing branch now announces storage lot address (8155 W Buckeye Rd, Phoenix) and retrieval hours (Mon–Fri 9am–5pm) before transferring",
        category: "website",
      },
      {
        text: "Added /api/voice/inbound/partner-callback: if dispatcher is unavailable for a partnership caller, auto-sends them an SMS with axletowing.com/partners link and hours",
        category: "infrastructure",
      },
      {
        text: "Created /api/voice/sms: inbound SMS keyword router (vehicle/location/hours/partner keywords → tailored replies with vehicle lookup link and storage directions) + programmatic send endpoint for tow confirmations, directions, and missed-call texts",
        category: "infrastructure",
      },
      {
        text: "Added locksmith outbound call script: referral partnership pitch explaining cross-referral program (they refer PMs to us, we refer lock jobs to them)",
        category: "strategy",
      },
      {
        text: "Added mechanic outbound call script: shop partnership pitch for vehicle tow-to-shop referrals in both directions",
        category: "strategy",
      },
      {
        text: "Enhanced status callback: missed inbound calls (no-answer/busy) now automatically send SMS text-back with vehicle lookup link, storage address, and 24/7 dispatch number",
        category: "infrastructure",
      },
    ],
  },
  {
    date: "March 24, 2026 (Sitemap & SEO — Merchandise Page Indexing)",
    type: "completed",
    entries: [
      {
        text: "Added /merchandise to sitemap.ts so Google can discover and index the new branded merchandise & corporate gifting page",
        category: "seo",
      },
    ],
  },
  {
    date: "March 24, 2026 (Print-on-Demand Merchandise Store — Corporate Gifting — AI-2180)",
    type: "completed",
    entries: [
      {
        text: "Created MERCH-STORE-STRATEGY.md: comprehensive print-on-demand strategy covering Printify + Printful platforms, 13 products across 4 categories, 5 gift tiers, pricing/margins, and phased setup guide",
        category: "strategy",
      },
      {
        text: "Added /merch dashboard page: interactive product catalog with category filter, gift tier breakdown, seasonal campaign calendar, setup checklist, and ROI analysis table",
        category: "dashboard",
      },
      {
        text: "Added Merch Store to sidebar navigation for quick access",
        category: "dashboard",
      },
      {
        text: "Defined 5 corporate gifting tiers: Premium ($25–50 for Score 9–10 leads), Standard ($23–25), Basic ($11–13), Functional door hanger packs ($40–50), and Referral Partner gifts ($12–18)",
        category: "strategy",
      },
      {
        text: "Gift ROI analysis: single HOA contract ($1,000/mo) at 10% conversion rate = 100:1 ROI on a $12 mouse pad. Year 1 budget $4,000–$5,950 projects $9,000–$24,000 new ARR",
        category: "strategy",
      },
      {
        text: "Seasonal campaign calendar: 6 annual gift campaigns tied to HOA decision-making cycles (new board elections, spring move-in season, annual meetings, holiday gifting)",
        category: "strategy",
      },
      {
        text: "Phase 3 automation plan: GHL → Zapier → Printify integration triggers auto-gift order when lead reaches 'Meeting Scheduled' stage in CRM",
        category: "infrastructure",
      },
    ],
  },
  {
    date: "March 24, 2026 (Klarna Payment Integration — Proposal & Invoicing — AI-2181)",
    type: "completed",
    entries: [
      {
        text: "Created /invoicing dashboard page: full payment schedule with Klarna Pay in 4 installments ($1,875 × 4) and monthly SEO retainer invoices ($3,000/month) with status tracking",
        category: "dashboard",
      },
      {
        text: "Added Invoicing to sidebar navigation for quick access to payment status and schedule",
        category: "dashboard",
      },
      {
        text: "Klarna integration guide: How It Works expandable panel explaining the 3-step checkout process, debit card requirement, and business card switch instructions",
        category: "infrastructure",
      },
      {
        text: "2026 payment schedule: all website installments (Mar 24 – May 5) and SEO retainer invoices (Apr 1, May 1) sorted chronologically with due dates and status",
        category: "infrastructure",
      },
      {
        text: "SEO retainer deliverables breakdown: 6 itemized line items showing what every $3,000 invoice covers (articles, keyword tracking, GBP, citations, backlinks, reporting)",
        category: "content",
      },
      {
        text: "Billing contacts widget: Klarna support (1-844-552-7621), Julian's number, and link to app.klarna.com for installment management",
        category: "dashboard",
      },
      {
        text: "Reviewed and confirmed KLARNA-PAYMENT-GUIDE.md (8-part merchant guide): account setup, payment link generation, recurring invoices, payout schedule, dispute protocol, and proposal template",
        category: "infrastructure",
      },
    ],
  },
  {
    date: "March 24, 2026 (AI Voice Agent — Inbound/Outbound Call Handler)",
    type: "completed",
    entries: [
      {
        text: "Created AI-VOICE-AGENT-IMPLEMENTATION.md: complete inbound/outbound AI voice agent strategy (AI-2178)",
        category: "infrastructure",
      },
      {
        text: "IVR menu structure: 4-branch inbound handler (emergency towing, roadside assistance, billing/impound release, HOA partner inquiry) with AI conversation scripts for each branch",
        category: "infrastructure",
      },
      {
        text: "After-hours handling: emergency-only mode 10pm–6am, AI screens urgency, warm transfer to on-call dispatcher or voicemail capture with 6am GHL callback task",
        category: "infrastructure",
      },
      {
        text: "Call routing logic: AI handles Tier 1 (info, ETAs, dispatch confirmation), escalates to human dispatcher on emergency detection, frustration signals, or explicit request",
        category: "infrastructure",
      },
      {
        text: "ETA response matrix by Phoenix zone: Central/East Valley/West Valley/Outlying — standard and after-midnight windows; SMS confirmation template auto-sent post-dispatch",
        category: "infrastructure",
      },
      {
        text: "Outbound HOA cold call script (word-for-word, AI-ready): AI agent 'Jordan' handles cold outreach to HOA boards and property management companies",
        category: "strategy",
      },
      {
        text: "Discovery questions playbook: 4 prospect situation types with tailored AI responses; objection handling for 'We have a contract', 'Not interested', 'Send info', 'How much does it cost?'",
        category: "strategy",
      },
      {
        text: "14-day follow-up sequence: voicemail drop → Day 3 SMS → Day 5 email trigger → Day 14 final AI call; GHL disposition tags and smart lists for each outcome",
        category: "strategy",
      },
      {
        text: "Platform comparison: Bland.ai vs Vapi vs Retell AI — cost/call analysis ($0.07–0.12/min), latency, Twilio compatibility, GHL webhook support; Vapi recommended",
        category: "infrastructure",
      },
      {
        text: "ROI model: ~$141/month AI voice agent cost, break-even at 0.14 HOA contracts/month, realistic 2–4 contracts/month from 500+ outbound calls = 14x–28x ROI",
        category: "strategy",
      },
      {
        text: "Webhook endpoints documented: /api/voice/recording, /api/voice/transcript, /api/voice/disposition, /api/voice/sms-followup — all with GHL integration specs",
        category: "infrastructure",
      },
      {
        text: "7-day launch checklist: Day 1 accounts → Day 2 inbound config → Day 3 outbound config → Day 4 webhooks → Day 5 GHL automation → Day 6 testing → Day 7 go live",
        category: "infrastructure",
      },
    ],
  },
  {
    date: "March 24, 2026 (Referral Partner Outreach Campaigns — AI-3336)",
    type: "completed",
    entries: [
      {
        text: "Created REFERRAL-OUTREACH-CAMPAIGNS.md: comprehensive multi-touch outreach campaigns for 4 referral partner segments (AI-3336)",
        category: "strategy",
      },
      {
        text: "HOA Property Manager Campaign: 4-touch email sequence (Days 1, 4, 10, 21) targeting AAM, City Property, FirstService, RealManage, CCMC — pitch is preferred vendor list placement across all managed communities",
        category: "content",
      },
      {
        text: "Auto Mechanic & Repair Shop Campaign: 3-touch email sequence (Days 1, 5, 14) with mutual referral partnership pitch — breakdown tow customers to mechanic, impound/tow customers to Axle",
        category: "content",
      },
      {
        text: "Locksmith Campaign: 3-touch email sequence (Days 1, 6, 15) with co-branded emergency card offer — lockout+tow referral loop, cards distributed at HOA accounts",
        category: "content",
      },
      {
        text: "Paving / Asphalt Company Campaign: 2-email + call sequence for vehicle relocation sub-contracts — Rose Paving, Morgan Pavement, Sunland Asphalt, Copper State Pavement as priority targets",
        category: "content",
      },
      {
        text: "Cold call scripts for all 4 segments with opening, engagement, voicemail, and graceful exit language",
        category: "content",
      },
      {
        text: "LinkedIn connection messages and DM follow-ups for each segment — optimized for under 300 characters",
        category: "content",
      },
      {
        text: "Universal 21-day cadence: email Day 1 → LinkedIn Day 2 → follow-up Day 4–6 → call Day 7 → social proof Day 10 → call Day 14 → SMS Day 17 → breakup email Day 21",
        category: "strategy",
      },
      {
        text: "Objection handling scripts: 'We already have a towing company', 'I don't refer customers', 'Not interested in referral programs', 'Too expensive' — with specific rebuttals per segment",
        category: "content",
      },
      {
        text: "GHL automation setup: 10 tags, 6 smart lists, 7 automation workflows, 9-stage Referral Partner Pipeline, 9 custom tracking fields (referrals sent/received, partnership start date, partner priority)",
        category: "strategy",
      },
      {
        text: "Success metrics: 30-day and 90-day targets by segment, weekly GHL review checklist, 7 monthly KPIs to report",
        category: "strategy",
      },
    ],
  },
  {
    date: "March 24, 2026 (Image Optimization & Meta Tag Audit — AI-2032)",
    type: "completed",
    entries: [
      {
        text: "Created IMAGE-OPTIMIZATION-META-AUDIT.md: complete SEO audit covering image optimization and meta tags across all main pages (AI-2032)",
        category: "seo",
      },
      {
        text: "Image audit: confirmed 38 optimized WebP images in /images/optimized/ with correct axle-towing-{service}-{city}-arizona.webp naming — 10 priority missing images identified with recommended filenames and alt text",
        category: "seo",
      },
      {
        text: "Meta title/description audit: homepage title is 65 chars (truncated), 6 service pages + About + Contact have descriptions over 160 chars — all fixed with recommended copy at correct character limits",
        category: "seo",
      },
      {
        text: "Open Graph audit: og:type, og:image 1200×630, og:locale all correct; twitter:image:alt and twitter:site handle missing — flagged for fix",
        category: "seo",
      },
      {
        text: "Schema audit: Organization, LocalBusiness, TowingService, FAQPage, Service, BreadcrumbList, WebSite all implemented; 5 missing schemas identified (ImageObject, AggregateRating, GeoCoordinates, areaServed per city, HowTo) with JSON-LD templates",
        category: "seo",
      },
      {
        text: "Page speed analysis: lib/images.ts still references legacy JPGs instead of WebP optimized versions — migrate all paths to /images/optimized/*.webp for 2-4x size reduction",
        category: "seo",
      },
      {
        text: "Google Image Search tips: ImageObject schema templates, EXIF geo-tagging guidance, figcaption recommendations, image sitemap verification checklist",
        category: "seo",
      },
      {
        text: "10 priority new images scoped with exact SEO filenames and alt text (impound yard exterior, property manager consultation, Scottsdale HOA patrol, Chandler commercial lot, vehicle relocation repaving, etc.)",
        category: "seo",
      },
      {
        text: "Phase implementation checklist: 4 phases from quick meta fixes (1-2 hrs) → schema additions (2-4 hrs) → new image creation → verification with Google Rich Results Test, PageSpeed Insights, Search Console",
        category: "seo",
      },
    ],
  },
  {
    date: "March 24, 2026 (Automated Job Application Email Templates — AI-3332)",
    type: "completed",
    entries: [
      {
        text: "Created JOB-APPLICATION-EMAIL-TEMPLATES.md: full hiring pipeline automation from application receipt through 30-day new hire check-in (AI-3332)",
        category: "strategy",
      },
      {
        text: "9 email stages: Application Received → Phone Screen Invite → Confirmation → In-Person Invite → Interview Reminder → Post-Interview Follow-Up → Job Offer → Rejection → 30-Day Check-In",
        category: "strategy",
      },
      {
        text: "Role-specific customizations for 3 positions: Driver (MVR, DOT card, shift details), Dispatcher (TowBook focus, shift rotation), Office Staff (software skills, M–F schedule)",
        category: "strategy",
      },
      {
        text: "A/B subject line variations for all 9 stages — 3 variants per stage, 27 total subject line options ready for GHL split testing",
        category: "strategy",
      },
      {
        text: "GHL workflow setup guide: 8 numbered workflows with triggers, delays, internal task creation, and Calendly webhook integration",
        category: "infrastructure",
      },
      {
        text: "Full personalization token reference (12 merge fields), hiring pipeline tag system (11 hiring-prefix tags), and implementation checklist for GHL build-out",
        category: "infrastructure",
      },
    ],
  },
  {
    date: "March 24, 2026 (Multi-Channel Social Media Outreach — HOA Decision Makers)",
    type: "completed",
    entries: [
      {
        text: "Created SOCIAL-MEDIA-OUTREACH-STRATEGY.md: full 3-platform strategy (LinkedIn primary, Facebook HOA groups, Instagram brand awareness) with 90-day launch plan and KPI targets (AI-2183)",
        category: "strategy",
      },
      {
        text: "Three persona profiles: HOA Board President, Professional Property Manager/CAM, Regional Corporate Rep (Greystar-type) — each with platform behavior, pain points, and best channel",
        category: "strategy",
      },
      {
        text: "Five content pillars: HOA Law & Compliance Education, Case Studies & Social Proof, Behind-the-Scenes Reliability, Industry News, Personality & Culture — with posting cadence per platform",
        category: "strategy",
      },
      {
        text: "Created LINKEDIN-OUTREACH-TEMPLATES.md: 5 connection request variants (A/B test ready), initial DM templates for 3 personas, 7/14/30-day follow-up sequences",
        category: "strategy",
      },
      {
        text: "LinkedIn templates for named companies: Greystar, FirstService Residential, CCMC, Associa, AAM — each with company-specific connection request and initial DM",
        category: "strategy",
      },
      {
        text: "Event-triggered LinkedIn messages: new HOA board member, new job announcement, company property opening — highest-conversion outreach timing",
        category: "strategy",
      },
      {
        text: "Created FACEBOOK-HOA-GROUPS-STRATEGY.md: 3-phase infiltration plan (observe → value → soft intro), 30+ Phoenix metro HOA Facebook groups to join, group moderation rules",
        category: "strategy",
      },
      {
        text: "Profile optimization guide for Ryan: LinkedIn headline/about/featured section, Facebook personal profile setup, business page checklist",
        category: "strategy",
      },
      {
        text: "Created data/social-media-targets.json: 20+ target companies with LinkedIn pages and priority tiers, Sales Navigator search strings for 6 segments, Facebook group lists, industry associations",
        category: "strategy",
      },
      {
        text: "4-tier outreach priority order: AAM/Greystar/CCMC/FirstService (Critical) → Associa/Mark-Taylor/MEB/City Property (High) → Lincoln/Weidner/Trestle (Medium) → boutiques/commercial (Lower)",
        category: "strategy",
      },
    ],
  },
  {
    date: "March 24, 2026 (Print-on-Demand Merchandise & Corporate Gifting)",
    type: "completed",
    entries: [
      {
        text: "Created Printify merchandise plan — full product catalog for corporate HOA gifting: branded mugs ($6.25 cost), mouse pads, wireless charging pads, soy wax candles, custom parking permits (AI-2180)",
        category: "strategy",
      },
      {
        text: "Gift tier system: Premium (wireless charger, ~$26 all-in) for Score 9–10 leads, Standard (mug + mouse pad, ~$23) for Score 7–8, Basic (mug only, ~$12) for Score 5–6",
        category: "strategy",
      },
      {
        text: "Printify setup guide: account creation, design upload specs, manual ordering workflow for corporate gifts (no website store required for Phase 1)",
        category: "strategy",
      },
      {
        text: "Parking supplies catalog: door hanger permits (4.25x11\"), mirror hanger tags (3.5x7\"), numbered permit stickers — all with Axle Towing branding on back, gifted as HOA starter packs",
        category: "strategy",
      },
      {
        text: "Corporate Gifting Playbook: 3-touch sequence (gift Day 0, follow-up Day 5–7, value-add Day 10–12), gift note templates for HOA boards and property management companies",
        category: "strategy",
      },
      {
        text: "Target HOA contacts: top self-managed HOAs (Scottsdale Ranch, DC Ranch, Eastmark), top PM companies (AAM 400+ communities, Trestle, City Property, FirstService, Associa)",
        category: "strategy",
      },
      {
        text: "GHL tracking setup: custom fields (Gift Sent, Gift Item, Delivery Status, Gift Response, Printify Order ID), smart lists (Gifts In Transit, Awaiting Response, Gift Converted)",
        category: "strategy",
      },
      {
        text: "ROI model: 1 contract at $1,000/mo = $12,000/yr; break-even on mug gift at 1 in 42 conversions; target 10% conversion = 2 new contracts per 20 gifts = $20,000+ annual contract value",
        category: "strategy",
      },
      {
        text: "Seasonal gift calendar: January (mugs for new board presidents), June (annual meeting season), November (Thanksgiving candles), December (year-end client retention gifts)",
        category: "strategy",
      },
      {
        text: "merchandise-catalog.json created: 10 products across 3 categories (Corporate Gifting, Parking Supplies, Customer Merch) with Printify product IDs, cost breakdowns, and gift note templates",
        category: "strategy",
      },
    ],
  },
  {
    date: "March 24, 2026 (Decision Maker Scraping Strategy)",
    type: "completed",
    entries: [
      {
        text: "Created 500+ lead database strategy for HOA boards and property managers — Decision Maker Scraping Strategy (AI-2026)",
        category: "strategy",
      },
      {
        text: "5 target audience profiles: HOA board presidents, property management companies (Greystar, CBRE, JLL, AAM), apartment complex managers (100+ units), commercial property owners, mobile home park managers",
        category: "strategy",
      },
      {
        text: "7 data sources documented: AZ Secretary of State HOA registrations, Maricopa County Assessor bulk data, Google Maps, LinkedIn Sales Navigator, Apartments.com, HOA management company websites, LoopNet",
        category: "strategy",
      },
      {
        text: "Recommended tool stack: Apollo.io ($99/mo) + Hunter.io ($49/mo) + Apify ($49/mo) — estimated 500–800 leads in 4 weeks for ~$197 total",
        category: "strategy",
      },
      {
        text: "Lead scoring model 1–10: decision-maker authority (25%), # properties managed (20%), HOA/complex size (20%), proximity (15%), towing need evidence (10%), new to role (10%)",
        category: "strategy",
      },
      {
        text: "4-week build plan: Week 1 Apollo HOA search (100 leads), Week 2 property management company research (150 leads), Week 3 Google Maps apartment scraping (150 leads), Week 4 commercial properties via Assessor data (100 leads)",
        category: "strategy",
      },
      {
        text: "GoHighLevel CSV import template, tag structure (lead type, priority, source, pipeline stage, size), and step-by-step import process documented",
        category: "strategy",
      },
      {
        text: "Compliance section: CAN-SPAM email rules, TCPA restrictions for SMS and ringless voicemail (consent required for cell phones), Arizona ARS § 28-4843 towing contract requirements, ARS § 33-1818 HOA towing authority",
        category: "strategy",
      },
    ],
  },
  {
    date: "March 24, 2026 (Nurture Campaign Sequences)",
    type: "completed",
    entries: [
      {
        text: "Created complete email/SMS/voicemail nurture sequences for HOA and property manager outreach (AI-2027)",
        category: "strategy",
      },
      {
        text: "Cold outreach sequence: 5-touch multi-channel sequence (2 emails, 2 SMS, 1 ringless voicemail) over 21 days",
        category: "content",
      },
      {
        text: "HOA board member sequence: 5 personalized emails targeting liability, resident complaints, and documentation — 25-day cadence",
        category: "content",
      },
      {
        text: "Property manager sequence: 5 personalized emails targeting portfolio management, response time, and dispute handling — 28-day cadence",
        category: "content",
      },
      {
        text: "Re-engagement sequence: 3-touch campaign for accounts that went 'on hold' — addresses Elliott's #1 pain point (lost 22+ property portfolios from lack of follow-up)",
        category: "strategy",
      },
      {
        text: "Retention sequences: quarterly check-in emails, annual contract renewal 3-email series, and referral thank-you trigger",
        category: "content",
      },
      {
        text: "3 complete ringless voicemail scripts (60 seconds): general prospect, HOA board member, re-engagement",
        category: "content",
      },
      {
        text: "10 SMS templates with character counts under 160 — cold follow-up, break-up, meeting confirmation, renewal, referral thank-you",
        category: "content",
      },
      {
        text: "GoHighLevel setup guide: 7 automation workflows, 9 pipeline stages, 11 contact tags, 5 smart lists, 7 custom fields",
        category: "strategy",
      },
    ],
  },
  {
    date: "March 24, 2026 (Domain Variation Strategy)",
    type: "completed",
    entries: [
      {
        text: "Created domain purchasing guide for AXEL/AXLE misspelling capture (AI-2175)",
        category: "seo",
      },
      {
        text: "Documented 301 redirect setup via GoDaddy and Namecheap for axeltowing.com → axletowing.com",
        category: "infrastructure",
      },
      {
        text: "Cost analysis: Namecheap recommended at ~$26/year for 3 domains (axeltowing.com, axel-towing.com, axeltowing.net)",
        category: "strategy",
      },
      {
        text: "Second site strategy documented — option to build standalone site on axeltowing.com targeting 'axel towing phoenix' keywords",
        category: "seo",
      },
      {
        text: "DNS records template and implementation timeline added — Week 1 action items defined",
        category: "infrastructure",
      },
    ],
  },
  {
    date: "March 23, 2026 (Service Area Expansion — 38 Cities)",
    type: "completed",
    entries: [
      {
        text: "Updated service area page city count from 29 → 38 to match actual SERVICE_AREAS list (hero text + stats counter)",
        category: "website",
      },
      {
        text: "Added city stats (population, properties served, response time) for 10 previously missing cities: Gold Canyon, Laveen, Sun Lakes, Waddell, Ahwatukee, Casa Grande, Coolidge, New River, Rio Verde, San Tan Heights",
        category: "website",
      },
      {
        text: "Action item PERS-283: 'Update website service area with all Phoenix metro cities' — resolved",
        category: "website",
      },
    ],
  },
  {
    date: "March 23, 2026 (AI Citation Baseline Research)",
    type: "completed",
    entries: [
      {
        text: "Completed AI citation baseline test — 20 queries tested across Google, ChatGPT-style searches, and AI overview patterns (AI-4696)",
        category: "seo",
      },
      {
        text: "Finding: 100% citation rate on brand searches, 0% on competitive searches — zero presence for 'best towing Phoenix', 'private property towing Phoenix', 'HOA towing east valley' etc.",
        category: "seo",
      },
      {
        text: "Identified top competitors dominating AI citations: Freeway Towing (phoenixtowtruck.com), All City Towing, Arizona Impound — all have blog content, 4.5+ star ratings, 30+ citations",
        category: "strategy",
      },
      {
        text: "Root causes documented: no blog/FAQ content, 2.0/5 Yelp rating (AI avoids 2-star companies), new website not yet indexed, thin citation profile (~8 vs competitors' 30+)",
        category: "seo",
      },
      {
        text: "Baseline report saved to /axel-towing/docs/AI-CITATION-BASELINE-2026-03-23.md — monthly re-test plan established, target 20%+ competitive citation rate by July 2026",
        category: "strategy",
      },
    ],
  },
  {
    date: "March 23, 2026 (Video Modal + Hero Enhancement)",
    type: "completed",
    entries: [
      {
        text: "Added VideoModal component — accessible YouTube embed modal with keyboard support (Escape to close) and body scroll lock",
        category: "website",
      },
      {
        text: "Added 'Watch How It Works' button to hero section — play button with glass styling, wires up to VideoModal (video ID swappable when Elliott provides footage)",
        category: "website",
      },
      {
        text: "Extracted HeroButtons to client component — keeps homepage as a server component while enabling interactive modal state",
        category: "infrastructure",
      },
      {
        text: "Confirmed all v2.0 roadmap phases (01–07) already implemented: response time badge, trust bar, newsletter, pricing page, gallery docs badge, dashboard preview, referral program, case studies with BeforeAfter slider, AggregateRating schema",
        category: "website",
      },
    ],
  },
  {
    date: "March 23, 2026 (Dispatch API + Voice Agent)",
    type: "completed",
    entries: [
      {
        text: "Built dispatch API (POST /api/dispatch) — chatbot tow requests trigger multi-channel notifications in real time",
        category: "infrastructure",
      },
      {
        text: "Email notifications via Resend to axletowing@gmail.com for every dispatch request — includes all request details and reference ID",
        category: "infrastructure",
      },
      {
        text: "SMS notifications via Twilio to dispatch phone (480-288-5526) for immediate mobile alerting",
        category: "infrastructure",
      },
      {
        text: "All dispatch requests persisted to Supabase database — enables full request history, tracking, and analytics",
        category: "infrastructure",
      },
      {
        text: "Twilio warm transfer integrated into voice agent — callers can be transferred to live dispatcher mid-call without dropping",
        category: "infrastructure",
      },
      {
        text: "Google Search Console verification metadata added to site layout — enables property ownership and SEO data access",
        category: "seo",
      },
      {
        text: "TowBook API integration deferred to Phase 3 (pending client API credentials from Elliott)",
        category: "infrastructure",
      },
    ],
  },
  {
    date: "March 22, 2026 (Driver & Staff SOP Handbook)",
    type: "completed",
    entries: [
      {
        text: "Built comprehensive Driver & Staff SOP Digital Handbook at /sop — mobile-first, searchable, covers all 8 parts (AI-2184)",
        category: "website",
      },
      {
        text: "SOP covers: Company Overview, ARS Compliance, Daily Operations, Violation Types (9 violation categories), Customer Interaction Scripts, Account Management, Safety, New Driver Onboarding",
        category: "content",
      },
      {
        text: "Features: client-side keyword search with tag filtering, chapter navigation, expand/collapse sections, print-to-PDF support, chapter-to-chapter navigation",
        category: "website",
      },
      {
        text: "Includes after-hours answering service scripts, registration display positioning guide, flatbed vs wheel-lift decision matrix, ARS city rate reference table, MVD notification timelines",
        category: "content",
      },
      {
        text: "Marked robots noindex — internal document only, not publicly indexed",
        category: "infrastructure",
      },
      {
        text: "Total website pages now 129",
        category: "dashboard",
      },
    ],
  },
  {
    date: "March 22, 2026 (Content Accuracy)",
    type: "completed",
    entries: [
      {
        text: "Updated experience claim on Resources page from '25+ years' to '30+ years combined experience' — consistent with all other site pages and client-confirmed figure",
        category: "website",
      },
    ],
  },
  {
    date: "March 22, 2026 (City SEO Expansion)",
    type: "completed",
    entries: [
      {
        text: "Added 8 new localized city SEO pages: Guadalupe, Youngtown, Casa Grande, Ahwatukee, Rio Verde, New River, Coolidge, San Tan Heights",
        category: "seo",
      },
      {
        text: "Total location pages now 38 cities (up from 30), expanding coverage to Pinal County and all unincorporated Phoenix metro communities",
        category: "seo",
      },
      {
        text: "Each new page includes unique intro content, neighborhoods, property types, local stats, testimonial, why-choose-us, and city facts",
        category: "content",
      },
      {
        text: "Updated all site-wide city count references from 30 to 38",
        category: "website",
      },
      {
        text: "Sitemap auto-updated via SERVICE_AREAS constant — all new pages indexed",
        category: "seo",
      },
      {
        text: "Dashboard deliverables updated: 128 total pages, 43 location pages",
        category: "dashboard",
      },
    ],
  },
  {
    date: "March 19, 2026 (Image SEO Pipeline)",
    type: "completed",
    entries: [
      {
        text: "Built and ran Image SEO optimization pipeline: 38 images converted to WebP with SEO-friendly filenames (77.7% file size reduction)",
        category: "seo",
      },
      {
        text: "Created SeoImage component with auto alt text, structured captions, and WebP fallback support",
        category: "website",
      },
      {
        text: "Generated image-seo-manifest.ts with structured data for all 38 images (alt text, captions, dimensions)",
        category: "seo",
      },
      {
        text: "Created /image-sitemap.xml route for Google image indexing",
        category: "seo",
      },
      {
        text: "All SEO filenames follow pattern: axle-towing-{service/context}-phoenix-az.webp",
        category: "seo",
      },
      {
        text: "Original images preserved as fallbacks; optimized WebP versions in /images/optimized/",
        category: "infrastructure",
      },
    ],
  },
  {
    date: "March 19, 2026",
    type: "completed",
    entries: [
      { text: "Added hero background video from original axletowing.com", category: "website" },
      { text: "Added 14 real fleet photos from Elliott across all pages (homepage gallery, service pages, about page)", category: "website" },
      { text: "Created partnership pages (locksmiths, HOA boards, property managers)", category: "website" },
      { text: "Enhanced referral program page with partner benefits and role-based form", category: "website" },
      { text: "Built career pages with live pre-qualification scoring and CDL validation", category: "website" },
      { text: "Added Careers to main navigation", category: "website" },
      { text: "Removed BBB Accredited badge from all pages and blog articles", category: "website" },
      { text: 'Removed "Watch How It Works" video button and dead code', category: "website" },
      { text: "Removed 12 adversarial legal blog posts (dispute guides, fee breakdowns, tenant rights arguments)", category: "content" },
      { text: 'Simplified pricing page (removed detailed fee table, replaced with "call for rates")', category: "website" },
      { text: "Fixed Vehicle Relocations as paid service (not free)", category: "website" },
      { text: "Updated all page counts to 120+ pages", category: "website" },
      { text: 'Dashboard: Articles now link to live blog posts with "View Live Article" button', category: "dashboard" },
      { text: "Dashboard: Article approvals persist in localStorage across page refreshes", category: "dashboard" },
      { text: "Dashboard: GHL Approvals now have Approve/Request Changes buttons with persistence", category: "dashboard" },
      { text: "Dashboard: Action Items have completion checkboxes with progress bar", category: "dashboard" },
      { text: "Dashboard: Feedback page has edit/delete with toast notifications", category: "dashboard" },
      { text: "Dashboard: Data consistency fixed across all pages (120 pages, 63 articles, 7 services)", category: "dashboard" },
      { text: "Dashboard: Plan page has interactive completion toggles", category: "dashboard" },
      { text: 'Dashboard: Added "Latest Updates — March 2026" section to overview', category: "dashboard" },
      { text: "Created 15 Linear issues (AI-3966 through AI-3980) for outstanding work", category: "infrastructure" },
    ],
  },
  {
    date: "March 17, 2026",
    type: "completed",
    entries: [
      { text: "Client strategy session with Elliott (73 minutes)", category: "strategy" },
      { text: "Key decisions: remove BBB, update experience to 30+ years combined, add 24/7 dispatch prominently", category: "strategy" },
      { text: "Added 24/7 dispatch availability banner with truck count", category: "website" },
      { text: "Updated experience statement to 30+ years combined", category: "website" },
    ],
  },
  {
    date: "March 2026 (earlier)",
    type: "completed",
    entries: [
      { text: "Built 120-page Next.js website with SEO optimization", category: "website" },
      { text: "63 blog articles published", category: "content" },
      { text: "35 location pages (8 cities + 27 neighborhoods)", category: "seo" },
      { text: "7 service pages with schema markup", category: "seo" },
      { text: "Glassmorphism design system", category: "website" },
      { text: "Property manager dashboard mockup", category: "website" },
      { text: "Spanish language pages (3)", category: "website" },
      { text: "Client dashboard portal built and deployed", category: "dashboard" },
    ],
  },
  {
    date: "Upcoming / To Do",
    type: "upcoming",
    entries: [
      { text: "Purchase axeltowing.com, axel-towing.com, axeltowing.net — configure 301 redirects (AI-2175)", category: "seo" },
      { text: "DNS migration from GoDaddy to Vercel (CRITICAL — blocks Google indexing)", category: "infrastructure" },
      { text: "Google Workspace email setup with aliases", category: "infrastructure" },
      { text: "TowBook portal integration", category: "website" },
      { text: "AI receptionist for after-hours calls", category: "infrastructure" },
      { text: "Phone system migration from UMA to CRM", category: "infrastructure" },
      { text: "Expand service area to all Phoenix metro cities (waiting on Elliott)", category: "seo" },
      { text: "Google Search Console + Analytics access", category: "seo" },
      { text: "Google Business Profile optimization", category: "seo" },
      { text: "Nurture/referral email templates", category: "content" },
      { text: "40-50 additional localized SEO pages", category: "seo" },
    ],
  },
];

const categoryConfig: Record<string, { bg: string; text: string; label: string }> = {
  website: { bg: "bg-blue-50 border-blue-100", text: "text-blue-600", label: "Website" },
  dashboard: { bg: "bg-purple-50 border-purple-100", text: "text-purple-600", label: "Dashboard" },
  seo: { bg: "bg-green-50 border-green-100", text: "text-green-600", label: "SEO" },
  strategy: { bg: "bg-amber-50 border-amber-100", text: "text-amber-600", label: "Strategy" },
  content: { bg: "bg-teal-50 border-teal-100", text: "text-teal-600", label: "Content" },
  infrastructure: { bg: "bg-red-50 border-red-100", text: "text-red-600", label: "Infrastructure" },
};

export default function ChangelogPage() {
  const completedItems = changelog
    .filter((g) => g.type === "completed")
    .reduce((acc, g) => acc + g.entries.length, 0);

  const upcomingItems = changelog
    .filter((g) => g.type === "upcoming")
    .reduce((acc, g) => acc + g.entries.length, 0);

  return (
    <>
      <PageHeader
        badge="Project History"
        title="Changelog"
        subtitle="A complete record of every change, decision, and deliverable for the Axle Towing digital transformation."
      />

      <ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          <div className="glass-card p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Completed Items</p>
            <p className="text-3xl font-bold font-display text-green-600 mt-1">{completedItems}</p>
          </div>
          <div className="glass-card p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Upcoming Items</p>
            <p className="text-3xl font-bold font-display text-amber-500 mt-1">{upcomingItems}</p>
          </div>
          <div className="glass-card p-5 col-span-2 md:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Completion Rate</p>
            <p className="text-3xl font-bold font-display text-brand-blue mt-1">
              {Math.round((completedItems / (completedItems + upcomingItems)) * 100)}%
            </p>
          </div>
        </div>
      </ScrollReveal>

      <div className="relative">
        <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue via-brand-blue/40 to-amber-400/40 hidden md:block" />

        {changelog.map((group, idx) => (
          <ScrollReveal key={idx} delay={idx * 100}>
            <div className="relative mb-10">
              <div className="hidden md:flex absolute left-0 top-0 items-center">
                <div
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                    group.type === "completed"
                      ? "bg-green-50 border-green-400"
                      : "bg-amber-50 border-amber-400"
                  }`}
                >
                  {group.type === "completed" ? (
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
              </div>

              <div className="md:ml-16">
                <div className="glass-card p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <h2 className="text-xl font-bold font-display text-gray-900">{group.date}</h2>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                        group.type === "completed"
                          ? "text-green-600 bg-green-50 border-green-200"
                          : "text-amber-600 bg-amber-50 border-amber-200"
                      }`}
                    >
                      {group.type === "completed"
                        ? `${group.entries.length} changes`
                        : `${group.entries.length} planned`}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {group.entries.map((entry, entryIdx) => {
                      const cat = entry.category ? categoryConfig[entry.category] : null;
                      return (
                        <div
                          key={entryIdx}
                          className="flex items-start gap-3 rounded-xl p-3 bg-gray-50/70 border border-gray-100 hover:border-gray-200 transition-colors"
                        >
                          <div className="flex-shrink-0 mt-0.5">
                            {group.type === "completed" ? (
                              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            ) : (
                              <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-amber-500" />
                              </div>
                            )}
                          </div>
                          <p className="text-sm text-gray-700 flex-1 leading-relaxed">{entry.text}</p>
                          {cat && (
                            <span
                              className={`flex-shrink-0 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${cat.bg} ${cat.text}`}
                            >
                              {cat.label}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </>
  );
}
