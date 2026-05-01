# Path to #1 — Closing the Phoenix Towing Gap

**Created:** 2026-04-30
**Linear:** AI-8993 (parent epic) + sub-issues
**Status:** Active
**Owner:** Julian (strategic) + assigned per-task

---

## The gap (real talk)

| Metric | Axle | Freeway Towing | Gap |
|---|---|---|---|
| Organic traffic | 429/mo | 22,788/mo | **53×** |
| Ranking keywords | 58 | 2,205 | **38×** |
| AI Overview citations | 0/13 competitive | 9/13 | **closable in 60-90d** |
| Yelp rating | 2.0/5 (57 reviews) | 4.7/5 (1,011 reviews) | **single biggest blocker** |
| BBB complaints | 16 | unknown | brand-trust ceiling |
| Backlinks | ~8 | hundreds | 6-12 month moat |
| Indexed pages | 85 | hundreds | compounds monthly |

**Realistic timeline:**
- 30 days: AI Overview cited on 5+ queries, map pack appearance
- 60 days: Top 10 organic for 3+ head terms, Yelp 3.5+
- 90 days: AI Overview cited 15+ queries, traffic 2-3×
- 6 months: Top 3 for "phoenix towing"
- **12 months: #1 for "phoenix towing", traffic 25-50×**

---

## Strategic principle

Don't try to beat Freeway at their game (older content + more backlinks). Beat them at the **AI Overview window** — fresh, well-structured, schema-rich content gets cited by AI engines faster than old content with backlinks. Then compound with content velocity + reviews + map pack.

**The single highest-leverage move is the review recovery campaign.** Everything else compounds onto a 2-star foundation that caps the ceiling. Review recovery happens in PARALLEL with content + AI SEO — but if forced to pick one thing, fix reviews.

---

## Tier 1 — Foundation (Weeks 1-4) — DO THESE FIRST

### 1. Review recovery campaign
**Goal:** Yelp 2.0 → 3.5+ in 60 days, BBB complaints all responded to, Google reviews ramp.

- 1.1 GHL automation: SMS + email review request triggered on every successful B2B touch (closed dispatch, completed onboarding, satisfied PM contact)
- 1.2 Direct outreach to top 50 happy customers (HOA boards, PM companies) for Google reviews
- 1.3 Respond to every BBB complaint with public resolution path
- 1.4 Set up monthly review-rate monitoring (Yelp + Google + BBB)
- 1.5 Add review widget embeds to all city/service pages (when 3.5+ achieved)

### 2. GBP optimization (both listings)
**Goal:** Both Phoenix + Apache Junction listings fully populated; map pack appearance for "phoenix towing" + "Apache Junction towing".

- 2.1 Phoenix listing: 50+ photos, services with descriptions, Q&A populated, Posts weekly
- 2.2 Apache Junction listing: same scope
- 2.3 Service area expansion for both listings (40+ Phoenix metro cities)
- 2.4 GBP Posts cadence: 2/week per listing for 90 days

### 3. AI SEO mechanics retrofit (existing 85 pages)
**Goal:** Every page is AI-Overview-friendly. ZERO new content; pure structure work.

- 3.1 Add FAQ schema (JSON-LD) to every article with a Q&A section (~30 pages)
- 3.2 Add HowTo schema to procedural articles (~15 pages)
- 3.3 Add comparison tables (HTML `<table>` with proper headers) to listicle/comparison content (~10 pages)
- 3.4 Add "Quick Answer" callout in first 100 words of every blog page
- 3.5 Year-stamp page titles where appropriate ("2026 Guide")
- 3.6 Verify LocalBusiness + Organization schema present site-wide

---

## Tier 2 — Content + Authority (Weeks 4-12)

### 4. Pillar pages for head terms (highest-volume gaps)
**Goal:** Out-rank the homepage for "phoenix towing", "phoenix towing service", "az towing".

- 4.1 Pillar: "Phoenix Towing Services for Property Owners — Complete 2026 Guide" (target kw: phoenix towing 720 vol, phoenix towing service 480)
- 4.2 Pillar: "Tow Service in Phoenix, AZ — How Property Managers Choose" (kw: tow service phoenix az 320, towing companies phoenix az 70 — comparison/listicle format)
- 4.3 Pillar: "Arizona Towing — Statewide Private Property Services" (kw: az towing 480 — hub page linking every city sub-page)

### 5. Content velocity — next batch of 9 articles
**Goal:** Match the content depth competitors have. Will be refined by the SEO/AI audit running 2026-04-30.

- 5.1 "What Is Private Property Towing? A Property Manager's Definition" (FAQ schema, definitional)
- 5.2 "Apartment Towing vs. Public Towing — What's the Difference?" (comparison table)
- 5.3 "Free Towing for Property Owners — How It Actually Works" (HowTo schema)
- 5.4 "Best Apartment Towing Companies in Phoenix Compared (2026)" (listicle, year-stamped)
- 5.5 "Tow Service Near Me — Phoenix Metro Coverage Map" (local-intent, embedded map)
- 5.6 "Private Property Tow Company Near Me — How to Find One" (Elliott's exact phrasing from AI-8982)
- 5.7 "Tow Service Near Me — Sun City" (city expansion)
- 5.8 "Tow Service Near Me — Cave Creek" (city expansion)
- 5.9 "Tow Service Near Me — Litchfield Park" (city expansion)

(Note: the SEO audit may swap some of these for higher-value gap keywords. List finalizes when audit lands.)

### 6. Backlink campaign
**Goal:** 30+ quality backlinks in 90 days.

- 6.1 Submit to 30 directories (AMA, IREM, BOMA, Phoenix Chamber, towing.com, ifindtowtruck.com, HomeAdvisor, Angi, Thumbtack, etc.)
- 6.2 PR outreach: East Valley Tribune, Phoenix New Times, Arizona Multihousing News
- 6.3 Guest posts on AMA newsletter + 3 property manager blogs
- 6.4 Local citations: Apache Junction Chamber, neighborhood HOA newsletters

---

## Tier 3 — Moat (Months 3-12)

### 7. Original data + PR plays
**Goal:** Become the source other sites cite.

- 7.1 "2026 Phoenix Property Manager Parking Enforcement Survey" (survey 50-100 PMs, publish findings)
- 7.2 Quarterly "Arizona Towing Market Report" with original stats
- 7.3 Partnership content with AMA / IREM Phoenix chapter
- 7.4 Shareable infographics (parking lot enforcement playbook, signage requirements visual)

### 8. UGC + reviews integration
**Goal:** Trust signals everywhere on the site.

- 8.1 Embed Google reviews widget on every city/service page
- 8.2 Video testimonials from 5 property managers (used everywhere)
- 8.3 Case studies: "How we cleared 47 abandoned vehicles from \<HOA\> in Q1 2026"

---

## Metrics + check-ins

| Cadence | Metric | Source |
|---|---|---|
| Daily | SEMrush snapshot (cron 6am) | `dashboard/data/semrush-snapshots/` |
| Weekly | AI Overview citations re-test | manual/scripted |
| Weekly | Yelp rating + Google review count | GHL automation report |
| Monthly | Organic traffic, ranking keywords, top-10 keywords | SEMrush + GSC |
| Monthly | Backlinks added | Ahrefs / GSC backlinks report |

---

## Dependencies on the audit

The 3-hour SEO + AI audit (running 2026-04-30, completion ~02:00 UTC) will refine:
- Tier 2.5 article list (specific keyword-gap targets)
- Tier 2.6 backlink targets (competitor backlink overlap)
- Tier 1.3 schema priorities (which pages benefit most)

Plan above is locked for Tier 1; Tier 2 + 3 finalize after audit.

---

## Linear tracking

Parent epic: **AI-8993** (auto-created by linear-auto-create hook)

Sub-issues to be created in this commit, organized:
- AI-8994..AI-8998 — Tier 1 review + GBP + AI SEO retrofit (5 issues)
- AI-8999..AI-9007 — Tier 2 pillar + content + backlinks (9 issues)
- AI-9008..AI-9010 — Tier 3 moat (3 issues)

Total: ~17 sub-issues.
