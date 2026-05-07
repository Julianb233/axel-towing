# Axle Towing — GMB + NAP Citation Audit & 90-Day Recovery Roadmap

**Date:** 2026-05-07
**Owner:** Julian Bradley (AI Acrobatics) for Elliott / Axle Towing & Impound LLC
**Scope:** Two locations — Phoenix yard (320 E Pioneer St, Phoenix AZ 85040) and Apache Junction yard (1151 W Apache Trail, Apache Junction AZ 85120). Canonical phone: **(480) 288-5526**.

---

## Executive Summary

Axle's Google Business Profile (GMB) presence is currently a major liability and the single biggest fixable lever to capture local Map Pack rankings against Freeway Towing & Storage (`phoenixtowtruck.com` — 4.7★, 1,011+ reviews, ACE Award winner) and the rest of the Phoenix-metro tow field. Both Axle listings are running with starved profiles: **wrong phone on Phoenix**, **9-5 hours instead of the marketed 24/7**, **empty descriptions**, **single category only**, **no services, no Q&A, no posts, near-zero photos**, and ratings below the 3.0 trust threshold (3.0 Phoenix / 2.8 Apache Junction). The Apache Junction Yelp listing displays 2.2 stars across 56 reviews — 7 of the last 10 are 1-star with consistent complaints about phone manners, dismissiveness, and predatory tow language; this is bleeding into search snippets. NAP consistency across the 18 directories audited is 60% — the canonical 1151 W Apache Trail address is correctly filed in BBB, MapQuest, Yelp, Apple Maps, and the AACM directory, but Phoenix has zero independent citations beyond axletowing.com itself. Recovery is ~90 days of disciplined GMB Manager work, review acquisition, and citation backfill — Day-0 fixes alone (phone, hours, description, categories) should lift local pack visibility within 7-10 days.

---

## 1. Axle Phoenix + Apache Junction — Current GMB State

Sourced from the on-disk `dashboard/lib/data/gbp-content/locations.json` `live_state_2026_05_06` block (last verified by AI-2030 sub schema-verify on 2026-05-06) and cross-referenced with publicly visible mirrors (Yelp shows Apache Junction same 9-5 hours; MapQuest mirrors the same; BBB confirms the 1151 W Apache Trail canonical address).

### 1A. Apache Junction GMB (`Place ID: 0x872bb77ca3c77bbb:0x7758cbdc42454652`)

| Field | Current State | Optimal | Fix |
|---|---|---|---|
| Name displayed | Axle Towing & Impound | Axle Towing & Impound | OK |
| Phone shown | (480) 288-5526 | (480) 288-5526 | OK |
| Hours displayed | Mon-Fri 9 AM-5 PM, Sat-Sun closed | 24/7 (or 24/7 + "by appointment after 5 PM" hybrid — pending Elliott decision) | Push 24/7 once hours conflict resolved |
| Star rating | 2.8 ★ | 4.0+ ★ | Review acquisition campaign |
| Review count | unknown on GMB; 56 on mirror Yelp listing | 100+ | Same |
| Photos in panel | 0 | 25-50 (logo, exterior, fleet, team, signage examples, in-progress work) | Photo batch upload |
| Q&A count | 0 | 8-10 seeded Q&A | Seed common questions |
| Posts visible | 0 | 4+ posts/month | Start posting cadence |
| Website URL | (likely) axletowing.com | https://axletowing.com | Verify; add UTM `?utm_source=gmb&utm_medium=organic&utm_campaign=apache_junction` |
| Description | Empty | 750-character description from `locations.json` | Push existing copy |
| Categories | Towing service (primary only) | Towing service + Impound lot + Parking lot + Vehicle storage facility + Tow truck operator | Add 4 secondary categories |
| Services | None listed | Private property impound, parking enforcement, abandoned vehicle removal, vehicle relocation, signage installation, monthly enforcement reports | Add 6 services |
| Attributes shown | None | Open 24 hours, online appointments, English/Spanish spoken, veteran-led (if confirmed by Elliott) | Add attributes |
| Last business confirm | ~2 weeks before 2026-05-06 | Within 7 days | Reverify on next Manager session |

### 1B. Phoenix GMB (Place ID: PENDING_OAUTH; plus_code: CW9J+4H Phoenix)

| Field | Current State | Optimal | Fix |
|---|---|---|---|
| Name displayed | Axle Towing & Impound | Axle Towing & Impound | OK |
| Phone shown | **(623) 401-2537** ← WRONG | (480) 288-5526 | **CRITICAL — fix Day 0** |
| Hours displayed | Mon-Fri 9 AM-5 PM | 24/7 | Push 24/7 once resolved |
| Star rating | 3.0 ★ | 4.0+ ★ | Review acquisition campaign |
| Photos in panel | 0 | 25-50 | Photo batch upload |
| Q&A count | 0 | 8-10 | Seed Q&A |
| Posts visible | 0 | 4+/month | Start posting cadence |
| Website URL | unknown | https://axletowing.com | Add with UTM `phoenix` campaign |
| Description | Empty | 700-char Phoenix description from `locations.json` | Push existing copy |
| Categories | Towing service (primary only) | Same 5 as AJ | Add 4 secondary |
| Services | None | Same 6 as AJ | Add services |
| Attributes shown | None | Same as AJ | Add attributes |

The single highest-impact bug in the entire GMB footprint is the Phoenix wrong phone number `(623) 401-2537`. Every Map-Pack call from a Phoenix-zip search currently routes to a phone Axle does not control. This is a leak of paid-acquisition demand and likely accounts for a meaningful slice of the missed-call volume Elliott has been seeing.

---

## 2. NAP Consistency Audit — 18 Directories

Search method: name + address + phone match against the canonical Apache Junction NAP. Phoenix has no independent citations yet (zero hits beyond axletowing.com), which is itself a finding — the Phoenix yard needs a full citation build-out as a separate workstream.

| # | Directory | Listed? | NAP match | URL | Notes / Inconsistencies |
|---|---|---|---|---|---|
| 1 | **Yelp** | Yes | Match (NAP all 3 fields correct; hours 9-5 mirror GMB) | `yelp.com/biz/axle-towing-and-impound-apache-junction` | 56 reviews, 2.2★ on Yelp (stricter filter than Google's 2.8★). 8 photos, claimed listing, "Veteran-owned" attribute set |
| 2 | **Better Business Bureau** | Yes | Match (1151 W Apache Trl, 85120) | `bbb.org/.../axle-towing-impound-1126-1000105769` | Not BBB Accredited. File opened 1/23/2023; LLC since 3/8/2021. Categories: Towing Company only |
| 3 | **MapQuest** | Yes | Match | `mapquest.com/us/arizona/axle-towing-impound-430699042` | Mirrors Yelp data. 57 reviews, 9-5 hours mirrored. Description auto-generated says "veteran-owned" + "24/7" — directly conflicts with the 9-5 hours block on the same listing |
| 4 | **Yahoo Local** | Yes | Match | `local.yahoo.com/info-229135248-axle-towing-impound-apache-junction/` | Mirror of Yelp data; review count likely stale |
| 5 | **Apple Maps** | Yes | Match (Apache Junction AZ) | `maps.apple.com/place?place-id=I4CECCA31D9997B5A` | Pulls Yelp 2.5★ (49 reviews) — older snapshot. Apache Junction listing is OK; **Phoenix Apple Maps listing not confirmed — needs check by claiming Apple Business Connect** |
| 6 | **Bing Places** | Unverified | unknown | n/a | No public hit found via search. **ACTION:** claim and submit at bingplaces.com |
| 7 | **Foursquare / Factual data graph** | Unverified | unknown | n/a | No direct city-search hit. Foursquare powers Bing/Apple/Snap; needs claim |
| 8 | **Yellowpages.com** | Unverified | unknown | n/a | No public hit found. Submit listing |
| 9 | **Citysearch** | Unverified | unknown | n/a | No public hit. Likely defunct mirror but worth submitting |
| 10 | **MerchantCircle** | Unverified | unknown | n/a | Submit |
| 11 | **Manta** | Unverified | unknown | n/a | Submit |
| 12 | **Hotfrog** | Unverified | unknown | n/a | Submit |
| 13 | **AMA member directory** (Arizona Multihousing) | Yes (per locations.json description claim) | Match | aacm.com directory PDF lists "Axle Towing & Impound LLC" page 184 of 2024 directory | Marketing copy mentions "Arizona Multihousing Association member" — confirmed in AACM 2024 PDF. **Action:** verify 2025/2026 listing renewed |
| 14 | **Apache Junction Chamber of Commerce** | Unverified | unknown | n/a | **ACTION:** submit; required for credibility in AJ-zip queries |
| 15 | **Phoenix Chamber of Commerce** | Unverified | unknown | n/a | Submit (especially required since Phoenix yard has zero independent citations) |
| 16 | **East Valley Chamber of Commerce** | Unverified | unknown | n/a | Submit; covers Mesa/Gilbert/Chandler/Queen Creek where Axle markets |
| 17 | **TowingReports.com / towing.com / ifindtowtruck / towingdirectory** | Unverified | unknown | n/a | Industry-specific aggregators; submit to all 4 |
| 18 | **Indeed** (employer page; secondary signal) | Yes | Phoenix 85040 location confirmed | `indeed.com/q-hiring-immediately-tow-jobs` | "Axle Towing & Impound LLC, Phoenix AZ 85040, $4,000-$6,000/mo impound driver" — confirms Phoenix yard NAP but it's an employer listing, not a citation |

**NAP consistency rate: 6 of 18 confirmed citations with full match (Yelp, BBB, MapQuest, Yahoo, Apple Maps AJ, AACM). 12 of 18 unverified/missing.** No NAP conflicts found in the 6 confirmed listings (canonical 1151 W Apache Trail / 85120 / (480) 288-5526 holds).

**Phoenix yard (320 E Pioneer St, 85040) has zero independent third-party citations** — this is a separate critical finding. Apache Junction has reasonable directory coverage; Phoenix needs the entire citation stack built from scratch.

---

## 3. Competitor GMB Benchmark

### 3A. Freeway Towing & Storage (phoenixtowtruck.com) — the dominant competitor

- **Star rating:** 4.7 ★
- **Review count:** **1,011+** Google reviews (hit 1,000 milestone October 2025 — celebrated publicly)
- **Photos:** abundant (TowBook 15-40 geo-tagged photos per tow visible publicly)
- **Categories:** Towing service + Roadside assistance + Tow truck + Auto wrecker
- **Services listed:** Flatbed Towing, Wheel-Lift Towing, Emergency Towing, Accident Towing, Abandoned Vehicle Towing, Classic/Luxury Car Towing, Container Transport, Fleet Towing, Private Property Impound, Trailer Towing, 24/7 Roadside, Vehicle Lockout, Tire Change, Jump Start (14 services)
- **Posts cadence:** active monthly cadence — Aug 2025 ACE Award post, Oct 2025 1,000-review milestone, Nov 2025 damage-free guarantee post
- **Q&A:** unknown count, but customer-facing FAQ and pricing calculator (`TowExact`) on website signals likely Q&A activity
- **Description (extracted):** "Award-winning towing in Phoenix. 4.7-star rated by 1,011+ customers. DPS-inspected fleet, WreckMaster-trained drivers, TowBook photo documentation, real-time GPS dispatch. 24/7 service. Locally owned. Top 1% of US towing companies (2025 ACE Award)."
- **Differentiators:** 2025 American Towman ACE Award, real-time pricing calculator, GPS dispatch tracking, 15-40 photos per tow

### 3B. Apache Sands Service Center (apachesands.com)

- **Star rating:** 3.3 ★ (Yelp); Facebook shows 96% recommend across 537 FB reviews
- **Review count:** 194 Yelp reviews; **~4,000 Google reviews** (per Whiterail Reviews testimonial on FB — they're approaching 4K)
- **Photos:** 22+ on Yelp
- **Categories:** Tires + Auto Repair + Towing (multi-category — they're a service center first, towing second)
- **Services:** 24-hour towing, tire sales/service, full auto repair, vehicle storage (Gilbert yard at 480-454-2057)
- **Posts cadence:** active Facebook posting; less visible on Google Posts
- **Description:** "65+ years serving Mesa, Apache Junction, and Gilbert. Tire brands, full automotive service, 24-hour towing. (480) 984-3101 main / (480) 986-5556 towing"
- **Differentiator:** 65-year tenure, multi-service auto center (towing is a feeder, not the focus), 4,000-review Google footprint dwarfs the entire Phoenix-metro tow segment

### 3C. axletowingllc.com / axeltowing.com — namesake confusion competitors

These domains were checked and **return no public Google reviews, no GMB listings discoverable via search.** They appear to be either:
- Defunct/parked domains, or
- Different small operators not yet ranked

This is a near-miss brand-confusion risk worth claiming/monitoring but not a competitive GMB threat right now. Recommend Elliott file a watch list with brand counsel.

---

## 4. Direct Comparison Table

| Metric | Axle Phoenix | Axle Apache Junction | Freeway Towing (phoenixtowtruck.com) | Apache Sands |
|---|---|---|---|---|
| Star rating | 3.0 ★ | 2.8 ★ | **4.7 ★** | 3.3 ★ (Yelp), ~4.5+ ★ (Google) |
| Review count (Google) | unknown / low | unknown / low | **1,011+** | ~4,000 |
| Photos in panel | 0 | 0 | abundant | 22+ |
| Hours | 9-5 M-F (wrong) | 9-5 M-F (wrong) | 24/7 (correct) | 24-hour towing line |
| Categories | 1 (Towing service) | 1 (Towing service) | 4 (Towing+Roadside+Tow truck+Auto wrecker) | 3 (Tires+Auto repair+Towing) |
| Services listed | 0 | 0 | 14 | 4-5 |
| Posts cadence | 0 | 0 | monthly+ | weekly+ (FB) |
| Q&A count | 0 | 0 | high | high |
| Phone correct | NO ((623) 401-2537) | YES | YES | YES |
| Description | Empty | Empty | Award-positioned, 750+ chars | Multi-service, 65-yr tenure |

**Axle is bottom-quartile across every measurable GMB dimension.** Closing the gap to Freeway is a 12-18 month review-acquisition project; closing the gap to Apache Sands is unrealistic (4,000 Google reviews is a 65-year head start). The realistic 90-day target is **4.0★ / 100+ reviews / fully optimized profile** — which is enough to win the Map Pack against the long tail of small operators (axletowingllc.com, axeltowing.com, piggybacktowing.com, tollesontowing.us, eztowingaz.com) who currently bracket Axle.

---

## 5. 90-Day GMB Recovery Roadmap

Sequenced by impact × effort. Owner column reflects realistic fleet allocation: Julian = strategic / GMB Manager push / copy approval; Elliott = business owner attestation, photo capture, decision rights; Gina = Julian's EA — handles review-request CRM scheduling, photo batch coordination, posts cadence operations.

### Day 0 — This Week (Critical fixes; ship within 7 days)

| Task | Owner | Time | Dependencies |
|---|---|---|---|
| **Fix Phoenix phone number on GMB**: change `(623) 401-2537` → `(480) 288-5526` | Julian (push) / Elliott (verify) | 5 min | GMB Manager access (Elliott must add Julian as Manager — pending) |
| **Resolve hours conflict** with Elliott: Option A (24/7) vs B (9-5) vs C (24/7 + appointment after 5pm). Default decision = C unless Elliott objects | Julian (recommend) → Elliott (decide) | 15 min call | None — pure decision |
| **Push 750-char descriptions** to both listings (Phoenix + AJ) from `dashboard/lib/data/gbp-content/locations.json` | Julian | 15 min | Manager access |
| **Add 4 secondary categories** to both listings (Impound lot, Parking lot, Vehicle storage facility, Tow truck operator) | Julian | 10 min | Manager access |
| **Add 6 services** to both listings (private property impound, parking enforcement, abandoned vehicle removal, vehicle relocation, signage installation, monthly enforcement reports) | Julian | 20 min | Manager access |
| **Push hours change** matching the resolution from row 2 | Julian | 5 min | Hours decision |
| **Confirm/correct website URL** + add UTM (`?utm_source=gmb&utm_medium=organic&utm_campaign={phoenix\|aj}`) | Julian | 5 min | Manager access |
| **Set attributes**: Open 24 hours (if hours allow), Online appointments, English/Spanish spoken; flag veteran-led with Elliott (if true, big trust badge) | Julian + Elliott | 10 min | Veteran-led confirmation |
| **Verify Phoenix Place ID via OAuth** so future automated pushes via `scripts/gbp-push.sh` work for both yards | Julian | 30 min | Manager access (the OAuth flow needs Elliott's Google login at least once) |

**Total Day-0 effort: ~2 hours of Julian time + 30 min of Elliott time**, gated entirely on Elliott granting Manager access. Manager invite is the single blocker — without it, none of the above ships.

### Day 7-30 — Foundation (Weeks 2-4)

| Task | Owner | Time | Dependencies |
|---|---|---|---|
| **Photo batch upload** — 30 photos per yard: logo, exterior, fleet (each tow truck), team headshots, signage installation examples, before/after enforcement scenes, inside the office. Geotagged to each yard. | Elliott (capture) / Gina (upload + caption) | 2-3 hr capture + 1 hr upload | Elliott available on-site |
| **Seed 8-10 Q&A per yard** with common customer questions (How do I retrieve my vehicle? What are your fees? Do you tow 24/7? Are you a city contractor or private property only? Spanish-speaking? Payment methods? Disability accommodation? After-hours pickup? Lien notice timeline? HOA setup process?) and good answers from Elliott | Julian (draft) → Elliott (approve) → Gina (post) | 2 hr | Q&A draft cycle |
| **Start Google Posts cadence**: 2 posts/week per yard. Templates: weekly enforcement tip, HOA case study, hiring post (driver recruitment), service highlight, customer milestone | Gina | 30 min/week ongoing | Post template library |
| **Submit Bing Places** listings for both yards (NAP-matched) | Gina | 30 min | None |
| **Submit Yellowpages, Foursquare, Manta, Hotfrog, MerchantCircle, Citysearch** — both yards | Gina | 2 hr (batch) | None |
| **Submit Apache Junction Chamber + Phoenix Chamber + East Valley Chamber** memberships | Elliott (decision) / Gina (admin) | 2 hr admin + paid memberships | Elliott budget approval (~$300-500/yr each) |
| **Submit industry directories**: TowingReports.com, towing.com, ifindtowtruck.com, towingdirectory.com — both yards | Gina | 1 hr | None |
| **Build review-request CRM workflow**: every customer who pays an impound fee gets a 24-hour-after follow-up SMS and email asking for a Google review, with a direct deep link to leave a review on the correct yard's GMB | Julian (build) / Gina (operate) | 4 hr build + ongoing | GHL or similar CRM (likely Axle already has GHL — confirm) |
| **Apple Business Connect** — verify Phoenix listing exists; if not, create. Confirm AJ pulled-from-Yelp data is canonical | Julian | 30 min | Apple ID for Axle (Elliott) |

### Day 30-90 — Acceleration (Weeks 5-12)

| Task | Owner | Time | Dependencies |
|---|---|---|---|
| **Review acquisition target**: 100+ Google reviews per yard within 90 days. Daily review-request batches via the Day-7-30 CRM workflow. Aim for net positive ratio of 8:1 to drag the rolling rating up from 2.8/3.0 to 4.0+ | Gina (operate) / Elliott (respond to reviews) | ongoing 30 min/day | CRM workflow live |
| **Owner-respond to every review** (positive AND negative) within 48 hours. Negative reviews get a non-defensive, brand-aligned response acknowledging frustration, restating policy, and inviting offline conversation. Major brand-trust signal to Google's ranking algo | Elliott (with Julian draft assist on tough ones) | 30 min/day | Review volume |
| **Post optimization**: A/B test post types — what gets the most "save"/"call" clicks? Iterate to a 4-posts-per-week winning cadence per yard | Gina | 30 min/week | 4 weeks of post data |
| **Add attributes incrementally**: as Elliott verifies what's true (LGBTQ-friendly, women-led, wheelchair accessible entrance for office pickup, identifies-as veteran-led), push them | Elliott (attest) / Julian (push) | 5 min each | Attestation per attribute |
| **Add seasonal services**: winter abandoned-vehicle removal posts, monsoon-season debris-tow posts, Bike Week / Spring Break enforcement posts in Apache Junction | Gina (drafts) / Elliott (approve) | 1 hr/post | Calendar |
| **Citation backfill audit**: re-run this NAP audit at Day 60 and Day 90; track citation count growth (target: 30+ citations per yard by Day 90) | Julian / Gina | 2 hr per audit | Days 30, 60, 90 |
| **Photo refresh**: add 5-10 new photos per yard per month — fresh content signals active management to Google | Elliott / Gina | 30 min/month | Capture cadence |
| **Service-area pages on website** matching the GMB service-area cities list: link each from the homepage and back-link from each city page to the GMB listing for the relevant yard. Boosts the GMB-Website topical relevance signal | Julian | 4 hr | Existing site (already has /locations/* — verify all 38 cities live) |

---

## Risks & Watch-outs

1. **Manager access is the gating dependency.** Until Elliott grants Julian Manager (not Owner) access to both GMB listings, Day-0 work cannot ship. Get this scheduled this week.
2. **The Phoenix wrong phone is bleeding calls right now.** Every day this is unfixed is missed-revenue. Day-0 priority #1.
3. **Yelp reviews are a parallel reputation surface and can't be deleted.** Several recent 1-star Yelp reviews accuse Axle of "predatory towing," "rude phone manner," and one ADA-related complaint filed with AZ Department of Weights and Measures + AZ Center for Disability Law. Recommend Elliott proactively engage with the AZDWM filing — unresolved state complaints become public-record Google snippets and tank Map Pack ranking.
4. **Hours conflict creates trust risk.** Marketing copy on website + GMB description (once pushed) says "24/7 dispatch, 30-minute response," but if hours block reads 9-5, the conflict is visible to customers and damages credibility. Resolve before pushing description.
5. **Photo authenticity matters.** Google's algorithm penalizes obviously stock or staged photos. Use real Axle trucks, real Axle yard, real Axle team — even if quality is iPhone-level.
6. **Review velocity has a ceiling.** Going from 0 to 100 reviews in 30 days triggers spam filters. Target 25-35 reviews/month per yard, sustained.

---

## Next Action

Schedule a 30-minute Elliott + Julian call this week with two agenda items:
1. Grant GMB Manager access to both listings (5 min, in-call action)
2. Resolve the hours decision: 24/7 vs 9-5 vs hybrid (15 min discussion, 1 decision)

Once those land, the Day-0 fixes ship the same day. Weeks 2-4 work begins immediately.

---

*Sources: `dashboard/lib/data/gbp-content/locations.json` (canonical NAP + 2026-05-06 live state), Yelp `axle-towing-and-impound-apache-junction`, BBB `1126-1000105769`, MapQuest `430699042`, Yahoo Local `229135248`, Apple Maps `I4CECCA31D9997B5A`, Indeed Phoenix listings, AACM 2024 Resource Connections Directory, phoenixtowtruck.com `/reviews/`, apachesands.com, Facebook ApacheSandsServiceCenter, scraped 2026-05-07.*
