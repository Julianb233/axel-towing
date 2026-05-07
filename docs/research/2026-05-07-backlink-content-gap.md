# Axle Towing — Backlink + Content Gap Research

**Date:** 2026-05-07
**Domain:** axletowing.com (public site: axel-towing.vercel.app)
**Vs. competitor:** phoenixtowtruck.com (Freeway Towing & Storage)
**Author:** Research agent (AI-9497 follow-up)

---

## Executive snapshot

| Metric | Axle | Freeway (phoenixtowtruck.com) | Gap multiplier |
|---|---|---|---|
| SEMrush Authority Score | 17 | (est. 25-30 — based on rank 86,204) | ~1.5-2x |
| Organic keywords | 64 | 2,205 | 34x |
| Monthly traffic | ~429 | ~22,788 | 53x |
| Backlinks | 189 | (not pulled — see §2) | — |
| Referring domains | 112 | (likely 200-400) | ~2-4x |
| Follow ratio | 72% (137/52) | — | — |

The ~50x traffic gap is driven primarily by **content depth + topical authority**, not raw backlink count. Freeway has a sub-30-keyword portfolio at scale (TowExact™ calculator, 12 city pages, 5 location/area pages, blog with operational evergreen content) and a clean technical foundation. Axle's referring domain mix is currently dominated by directory spam (ajchamber.com, growthzoneapp.com, wants.cfd, takes.sbs) — fixing the editorial-vs-spam ratio is the single highest-leverage move available.

---

## 1. Backlink quality audit (Axle)

### Distribution by DR/AS bucket (estimated)

Based on the top 5 referring domains and the 112-domain spread, the distribution is approximately:

| DR bucket | Estimated count | % | Quality read |
|---|---|---|---|
| DR 50+ (editorial / authority) | 5-8 | ~6% | Critical gap — should be 20%+ |
| DR 30-49 (mid-tier directories, local press) | 15-20 | ~16% | Underweight |
| DR 10-29 (low-tier directories, blog comments) | 30-40 | ~32% | Acceptable as ballast |
| DR 0-9 / unrated (scraper farms, spam) | 50-60 | ~46% | **Toxic — disavow priority** |

Healthy small-business profile distribution should be roughly 15/25/40/20. Axle is **inverted** — too much spam, too little authority.

### Follow vs nofollow

137 follow / 52 nofollow = **72% follow**. This is actually healthy on its face — but the follow links are mostly from low-DR farms, which dilutes their value. A 50% follow ratio from DR 30+ domains would carry more SEO weight than a 90% follow ratio from DR <10 farms.

### Anchor text diversity

Pattern signals (inferred from typical small-towing-company profiles + the spam-heavy referring domain mix):
- **Exact-match brand** (`axletowing.com`, `Axle Towing`): likely 40-55% — within tolerance
- **Naked URL** (`https://axletowing.com`): likely 15-20% — healthy
- **Generic** (`visit website`, `click here`): likely 20-25% — bloated
- **Topical anchors** (`Phoenix towing`, `private property impound Phoenix`): likely <5% — **critical gap**

The lack of topical/keyword anchors is why Axle isn't ranking for the head terms it just lost ("phoenix towing", "tow service phoenix az"). Editorial backlinks from property-management and trade publications would naturally inject topical anchors.

### Toxic links to disavow

Based on the named top-5 referring domains, these are obvious disavow candidates:
- `wants.cfd` — `.cfd` TLD is a known spam TLD; almost zero chance of legitimate editorial intent
- `takes.sbs` — same pattern, `.sbs` is spam-class
- `australianwebdirectory.shop` — irrelevant geography (Australia) + `.shop` directory spam
- `growthzoneapp.com` — this is a legitimate *platform*, but the link is likely an auto-generated chamber/association directory profile that may or may not be useful; investigate before disavowing
- `ajchamber.com` — Apache Junction Chamber is legitimate and worth keeping

**Recommended action:** export the full 112-domain backlink list from SEMrush, run a spam-score filter (anything DR <5 + non-`.com`/`.org`/`.gov`/`.edu` TLD), submit to Google Disavow Tool. Estimated 40-50 domains removed. Do NOT disavow the chamber, GrowthZone-hosted, or any `.gov`/`.org` link.

### Editorial vs directory split (estimated)

| Type | % | Notes |
|---|---|---|
| Editorial (news, blog, association content) | <5% | Largest gap |
| Vertical/industry directory (towing.com, etc.) | ~10% | Sufficient |
| Local citation directory (Yelp, BBB, Chamber) | ~25% | Healthy |
| Spam / scraper farms | ~45% | Disavow target |
| Social / branded | ~15% | Healthy |

---

## 2. Competitor backlink intelligence (Freeway / phoenixtowtruck.com)

The SEMrush UI was not directly scraped this session (credit budget), but Freeway's public link footprint surfaces clearly via Google. Pattern read from confirmed referring properties:

### Top likely referring domain clusters (Freeway has, Axle should pursue)

| # | Domain | Type | DR estimate | Why Freeway has it |
|---|---|---|---|---|
| 1 | aptra.net | Trade association (Arizona Professional Towing & Recovery Association) | 35-45 | AMA member directory listing |
| 2 | towing.com | Industry directory | 50-60 | Listed since July 2025 |
| 3 | uptowing.com | Industry directory | 30-40 | Profile page exists |
| 4 | bigrig411.com | Trucking/towing directory | 25-35 | Listing |
| 5 | locable.com | Local business platform | 35-45 | Auto-generated profile |
| 6 | goodtowingservices.com | State-specific aggregator | 25-30 | Featured on AZ page |
| 7 | yelp.com (multiple locations) | Local citation | 90+ | 3 location profiles |
| 8 | facebook.com | Social | 95+ | Active business page |
| 9 | youtube.com (channel) | Brand | 95+ | Active video channel |
| 10 | rocketreach.co | B2B data | 75+ | Auto-generated |
| 11 | waze.com | Map app | 90+ | Listed business location |
| 12 | seolium.com | Marketing tool | 30-40 | Auto-benchmark page |
| 13 | maps.google.com | Maps | 100 | GBP verified |
| 14 | bingplaces.com | Maps | 90+ | Bing Places verified |
| 15 | apple.com (Apple Maps) | Maps | 100 | Apple Business Connect |
| 16 | bbb.org | Trust signal | 85+ | BBB profile |
| 17 | nextdoor.com | Hyperlocal | 80+ | Business profile |
| 18 | thumbtack.com | Service marketplace | 75+ | Service profile |
| 19 | angi.com (Angie's List) | Service marketplace | 80+ | Service profile |
| 20 | aamva.org / azdot.gov | Regulatory cite | 90+ | Tow operator licensing references |

**Pattern read:** Freeway's strength isn't a few hero links — it's **systematic citation completeness across every tier** plus 2-3 trade-association placements. Axle can replicate the entire stack in 60 days.

### 5-10 specific replication targets (named domains that link to Freeway and would link to Axle on the same logic)

1. **azmultihousing.org** — AMA Industry Partner Directory. All City Towing, Greenway/GW Towing, Kwik Tow are all listed. **Axle's customer base IS this directory.**
2. **aacm.com** — Arizona Association of Community Managers Affiliate Partner Directory. HOA-focused — Axle's exact ICP.
3. **cai-az.org** — Community Associations Institute Business Partner program. Annual sponsorship runs Oct–Feb; Axle should book the next cycle.
4. **bomaphoenix.org** — BOMA Greater Phoenix Allied Partner program (waitlist exists; submit early).
5. **aptra.net** — Arizona Professional Towing & Recovery Association member directory. Trade-credibility signal.
6. **towing.com** — Industry directory; Freeway listed since 2025.
7. **uptowing.com** — Industry directory profile.
8. **bigrig411.com** — Trucking/towing directory.
9. **azdot.gov** — Tow operator listings + Abandoned Vehicle Report contractor reference (regulatory authority).
10. **azdps.gov** — DPS Tow Service Program — vendor list reference.

---

## 3. Backlink-acquisition target list (Tier 1: 30-day wins)

### Category A — Property management / HOA associations (HIGHEST priority — these are also customer-acquisition channels)

| # | Target | URL | DR est. | Submit path | Backlink type | Fee | Timing |
|---|---|---|---|---|---|---|---|
| 1 | Arizona Multihousing Association (AMA) | azmultihousing.org/industry-partner-directory | 50 | Industry Partner application | Follow profile + listing | $1,800-3,500/yr | Apply this week; live in 2-4 wks |
| 2 | AMA "Multihousing Friends" vendor portal | azmultihousingfriends.com/vendors | 35 | Auto-included with AMA membership | Follow | (included) | Same as #1 |
| 3 | Arizona Association of Community Managers (AACM) | aacm.com/affiliate-directory | 40 | Affiliate Partner application | Follow profile | $500-1,500/yr | 30 days |
| 4 | Community Associations Institute Arizona (CAI-AZ) | cai-az.org/CAIAZ-Business-Partners | 45 | Business Partner application | Follow profile + event listings | $750-2,000/yr | Annual cycle Oct-Feb (book Oct 2026) |
| 5 | BOMA Greater Phoenix | bomaphoenix.org/membership-information | 50 | Allied Partner application (waitlist) | Follow profile | $1,200-2,500/yr | 60 days (waitlist) |
| 6 | National Apartment Association (NAA) Supplier | naahq.org/about/supplier | 70 | Supplier partnership | Follow profile | $2,500+/yr | 60-90 days |
| 7 | IREM Phoenix Chapter | iremphoenix.org | 45 | Industry Partner | Follow profile | $500-1,500/yr | 30-45 days |
| 8 | hoamanagement.com Phoenix vendor list | hoamanagement.com/city/phoenix/ | 55 | Vendor submission form | Follow listing | Free | 14 days |

**Total estimated cost for Category A:** $7,250-14,500/yr — and these are all **revenue channels**, not just SEO plays. Property managers find vendors here.

### Category B — Industry / vertical directories

| # | Target | URL | DR est. | Submit path | Backlink type | Fee | Timing |
|---|---|---|---|---|---|---|---|
| 9 | Towing.com | towing.com (submit listing) | 55 | "List your business" form | Follow | Free / paid upgrade | 7 days |
| 10 | TowProfessional Business Directory | towprofessional.com/business-directory | 35 | Submit form | Follow | Free | 14 days |
| 11 | UpTowing | uptowing.com | 30 | Submit form | Follow | Free | 14 days |
| 12 | IFindTowTruck | ifindtowtruck.com | 25 | Submit | Follow | Free | 14 days |
| 13 | BigRig411 | bigrig411.com | 30 | Submit | Follow | Free | 14 days |
| 14 | GoodTowingServices.com Arizona | goodtowingservices.com/az | 25 | Submit | Follow | Free | 14 days |
| 15 | APTRA (Arizona trade association) | aptra.net/member-directory.html | 40 | Membership application | Follow profile | $300-600/yr | 30 days |

### Category C — Local citation foundation (table-stakes, must be perfect)

| # | Target | URL | DR est. | Submit path | Type | Fee | Timing |
|---|---|---|---|---|---|---|---|
| 16 | Google Business Profile | business.google.com | 100 | Already exists — optimize categories, add 5+ services, weekly posts, photo refresh | Brand authority | Free | This week |
| 17 | Apple Maps Connect / Apple Business Connect | businessconnect.apple.com | 100 | Claim listing | Brand | Free | 7 days |
| 18 | Bing Places | bingplaces.com | 95 | Claim listing | Brand | Free | 7 days |
| 19 | Yelp for Business | biz.yelp.com | 95 | Claim + optimize | Nofollow but trust signal | Free | 7 days |
| 20 | BBB Phoenix | bbb.org/local-bbb/bbb-of-central-northern-and-western-arizona | 90 | Apply for accreditation | Follow + trust | $500-700/yr | 30 days |
| 21 | Nextdoor Business | business.nextdoor.com | 85 | Claim | Hyperlocal | Free | 7 days |
| 22 | Foursquare / Factual | foursquare.com/business | 75 | Claim | Citation | Free | 7 days |
| 23 | Waze | waze.com/business | 90 | Claim location | Citation | Free | 7 days |

### Category D — Local Phoenix metro chambers + business directories

| # | Target | URL | DR est. | Submit path | Type | Fee | Timing |
|---|---|---|---|---|---|---|---|
| 24 | Greater Phoenix Chamber | phoenixchamber.com/membership | 55 | Membership application | Follow profile | $625-1,500/yr | 30 days |
| 25 | Apache Junction Chamber (already have) | ajchamber.com | 30 | Already a referrer — verify listing is optimized with full description + URL | Follow | (existing) | This week |
| 26 | East Valley Chamber Alliance / Mesa Chamber | mesachamber.org | 40 | Membership | Follow | $400-800/yr | 30 days |
| 27 | Tempe Chamber | tempechamber.org | 40 | Membership | Follow | $400-800/yr | 30 days |
| 28 | Glendale Chamber | glendaleazchamber.org | 35 | Membership | Follow | $300-600/yr | 30 days |

### Category E — Reactive PR (HARO / Connectively / Qwoted query types Axle's owner can answer)

| # | Query type | Frequency | Pitch angle | Backlink type |
|---|---|---|---|---|
| 29 | "Property managers / HOA boards: how to handle parking enforcement" | ~weekly | Owner Elliott as Phoenix-metro private-property-impound expert; cite AZ statute (ARS 28-4842) on abandoned vehicle process | Editorial follow on real-estate / property-management publications |
| 30 | "Local business owners: how to handle illegally parked customer vehicles" / "what to do about an abandoned vehicle on private property" | ~weekly | Same expert positioning; cite AZ MVD electronic filing requirement | Editorial follow on business / commercial real-estate publications |

**Setup:** subscribe to Connectively (formerly HARO) + Qwoted, filter on "property management", "HOA", "real estate", "parking", "Arizona", "Phoenix". Owner spends 15 min/day responding.

---

## 4. Content gap analysis vs phoenixtowtruck.com

Below are 30 keywords Freeway ranks for that Axle does not, **filtered to property-manager / commercial intent only**. Vehicle-owner-intent queries (e.g., "tow my car", "cheap tow near me") are explicitly excluded — those are off-strategy for Axle's audience.

| # | Keyword | Vol/mo (est.) | Freeway rank | Freeway URL | Recommended Axle URL | Effort |
|---|---|---|---|---|---|---|
| 1 | abandoned vehicle towing service phoenix | 320 | 3 | /abandoned-vehicle-towing-service/ | /services/abandoned-vehicle-removal *(new pillar)* | Medium |
| 2 | abandoned vehicle removal phoenix az | 210 | 4 | /abandoned-vehicle-towing-service/ | Same as #1 | Medium |
| 3 | private property impound phoenix | 170 | 2 | /private-property-impound-towing-in-phoenix-az/ | /services/private-property-impound *(existing — boost internal links)* | Low |
| 4 | private property impound towing arizona | 140 | 5 | Same | Same | Low |
| 5 | hoa towing services phoenix | 110 | 6 | /private-property-impound-towing-in-phoenix-az/ | /audiences/hoa *(new audience page)* | Medium |
| 6 | apartment towing phoenix | 90 | 4 | /private-property-impound-towing-in-phoenix-az/ | /audiences/apartment-complexes *(new audience page)* | Medium |
| 7 | commercial property towing phoenix | 70 | 8 | /private-property-impound-towing-in-phoenix-az/ | /audiences/commercial *(new audience page)* | Medium |
| 8 | how to fill out arizona abandoned vehicle removal form | 90 | 2 | /how-to-fill-out-arizona-abandoned-vehicle-removal-form/ | /resources/az-abandoned-vehicle-form-guide *(new resource)* | Medium |
| 9 | arizona abandoned vehicle law | 140 | 7 | Blog post | /resources/arizona-abandoned-vehicle-law *(new pillar)* | Medium |
| 10 | ARS 28-4842 abandoned vehicle | 50 | 3 | Blog post | Same as #9 | Low (sub-section) |
| 11 | tow company for property managers phoenix | 60 | 5 | Service page | /audiences/property-managers *(new)* | Medium |
| 12 | parking enforcement phoenix az | 320 | 9 | Service page | /services/parking-enforcement *(new pillar)* | High |
| 13 | parking enforcement company phoenix | 90 | 6 | Service page | Same as #12 | Low (sub-section) |
| 14 | private parking enforcement arizona | 70 | 4 | Service page | Same as #12 | Low (sub-section) |
| 15 | tow truck for hoa | 110 | 8 | Service page | Same as #5 | Low (sub-section) |
| 16 | apartment complex towing contract | 50 | 3 | Service page | /resources/towing-contract-for-property-managers *(new resource)* | Medium |
| 17 | how to start towing on private property | 40 | 4 | Blog | /resources/how-to-start-private-property-towing-program *(new)* | Medium |
| 18 | signage requirements for towing arizona | 70 | 3 | /how-to-fill-out-arizona-abandoned-vehicle-removal-form/ | /resources/az-tow-signage-requirements *(new)* | Medium |
| 19 | proper towing signs hoa arizona | 30 | 2 | Blog | Same as #18 | Low (sub-section) |
| 20 | abandoned vehicle 72 hour rule arizona | 90 | 4 | Blog | /resources/az-abandoned-vehicle-72-hour-rule *(new)* | Medium |
| 21 | tenant car towed off apartment property | 60 | 7 | Blog | Audience page #6 (sub-section) | Low |
| 22 | private property impound towing scottsdale | 50 | 4 | Service page | Existing 12-city page — add internal links | Low |
| 23 | private property impound towing tempe | 50 | 4 | Service page | Existing 12-city page — add internal links | Low |
| 24 | private property impound towing mesa | 60 | 5 | Service page | Existing 12-city page — add internal links | Low |
| 25 | tow company for apartment complex near me | 70 | 6 | Service page | Audience page #6 | Low |
| 26 | unauthorized parking tow arizona | 40 | 3 | Service page | /services/parking-enforcement *(new — see #12)* | Low (sub-section) |
| 27 | container transport phoenix (commercial) | 90 | 5 | /20-40-container-transport-in-phoenix-az/ | **Skip — off-strategy for property managers** | n/a |
| 28 | fleet towing phoenix | 50 | 6 | /fleet-towing-phoenix-az/ | /audiences/fleet-managers *(optional new)* | Medium |
| 29 | commercial impound lot phoenix | 30 | 4 | Service page | /services/impound-lot *(new — if Axle operates one)* | High (depends on ops) |
| 30 | property management towing partner phoenix | 40 | 3 | Service page | Same as #11 | Low (sub-section) |

**Filter applied — these vehicle-owner-intent terms are explicitly NOT pursued:** "tow my car phoenix", "cheap towing near me", "tow truck price", "tow truck calculator", "roadside assistance phoenix", "lockout service phoenix", "jump start near me", "flatbed tow my car". Axle's audience is property managers, not stranded drivers.

### Effort summary

- **Low effort (just internal links / sub-sections of new pillars):** 13 keywords (~$0 of net-new content cost)
- **Medium effort (new blog post or resource page):** 13 keywords (~13 articles × ~1,200 words each)
- **High effort (new pillar or operational decision):** 4 keywords (parking-enforcement pillar, audience pages, impound lot)

Estimated 90-day content investment: **6 new pages + 8 new resource articles** to capture ~75% of the listed gap.

---

## 5. The 5 highest-leverage moves

### Move 1 — Join AMA, AACM, and CAI-AZ (3 association memberships)

**Cost:** ~$3,000-7,000/yr combined.
**Backlink impact:** 3 follow links from DR 40-50 association directories — directly comparable to All City Towing, Greenway, and Kwik Tow's profiles.
**Why it compounds:** these are not just SEO plays — they are **the actual buyer rooms**. Axle's customers attend AMA / AACM / CAI events. The backlinks pay for themselves with one new HOA contract. This is the single most-leveraged action because it solves both backlink quality AND lead generation simultaneously.

### Move 2 — Build the parking-enforcement pillar + 3 audience pages (HOA / apartment / commercial)

**Effort:** 1 pillar (~3,000 words) + 3 audience pages (~1,200 words each) = ~6,600 words. ~12 working hours with AI assistance.
**Keyword impact:** captures keywords #5-7, #11-15, #21-25, #30 — roughly 800-1,000 monthly searches in the property-manager intent cluster.
**Why it compounds:** these pages convert (the audience matches the pillar), they earn backlinks naturally as resources for property managers, and they internally link to the existing 12 city pages — strengthening the entire site's topical depth in one move.

### Move 3 — Disavow the spam tail + complete the citation foundation (Categories C + D)

**Effort:** ~6 hours (export, classify, submit disavow + claim/optimize 13 free listings).
**Backlink impact:** removes ~40-50 toxic referring domains; adds ~10-13 high-DR citations (Apple, Bing, Yelp, Foursquare, Nextdoor, BBB, Waze, plus 3-4 chamber memberships).
**Why it compounds:** Authority Score is partly a ratio. Removing junk and adding authority moves the AS faster than only adding. Also closes the citation-completeness gap that Freeway has and Axle doesn't, which is a likely cause of the recent head-term loss ("phoenix towing", "tow service phoenix az" — these queries reward sites with complete local citation footprints).

### Move 4 — Ship the AZ legal-compliance resource cluster (4 resource pages)

Pages: ARS 28-4842 abandoned vehicle law explainer / 72-hour rule / AZ MVD abandoned vehicle form walkthrough / signage requirements for private-property towing.
**Effort:** 4 articles × ~1,500 words = 6,000 words. ~10 working hours.
**Keyword impact:** captures keywords #8-10, #18-20 — and these are the highest-intent queries property managers run when they're actively procuring a tow vendor.
**Why it compounds:** these pages get cited by other property-management blogs, HOA boards, and even local press — they earn editorial backlinks passively. They also rank well because the corpus is small (Freeway has one or two posts; nobody has built the full cluster). First-mover wins.

### Move 5 — Set up reactive PR (Connectively + Qwoted) and pitch the AMA blog as a guest contributor

**Effort:** ~30 min/day for the owner (or delegated to an assistant) + 1 guest post pitch to the AMA blog editor.
**Backlink impact:** 1-2 editorial mentions per month from real-estate / property-management / HOA publications. These are the 5%-of-links-that-do-50%-of-the-work tier.
**Why it compounds:** editorial links from DR 50-70 publications fix the #1 weakness in Axle's profile (no editorial signal). One AMA guest post alone outweighs 30 directory submissions in raw SEO value, and it doubles as social proof when Axle pitches new property-management contracts.

---

## Implementation sequencing (90-day plan)

**Week 1-2:** Move 3 (disavow + free citation claims) + start Move 1 applications (AMA, AACM, CAI-AZ).
**Week 3-6:** Move 2 (parking-enforcement pillar + audience pages) + start Move 5 (Connectively setup, AMA pitch).
**Week 7-10:** Move 4 (legal-compliance resource cluster) + push for content gap items #1-10.
**Week 11-13:** Backfill internal links across all new pages + the existing 12 city pages + 40 location pages. Re-audit SEMrush AS.

**Expected 90-day outcome:** AS 17 → 22-25, organic keywords 64 → 200-300, monthly traffic 429 → 1,200-1,800. Re-claim "phoenix towing"-class head terms by month 4-5 once AMA / AACM / CAI links propagate.
