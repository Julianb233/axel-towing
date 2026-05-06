# Google Business Profile — Improvement Strategy

**Client:** Axle Towing & Impound (Apache Junction + Phoenix)
**Prepared by:** AI Acrobatics
**Date:** 2026-05-06
**Linear:** AI-2030 (parent), follow-ups filed inline below

---

## TL;DR — What we found, what we're doing

We pulled both live Google Business Profile listings on 2026-05-06. Both are claimed and confirmed by the business in the last 2 weeks, but they are barely optimized — and one has a wrong phone number that is bleeding leads to nowhere. Two listings, ~12 critical gaps each, and one outright NAP error.

The single biggest unlock is fixable inside Google Business Profile Manager in under 30 minutes by Elliott (or by us if Elliott adds `julian@aiacrobatics.com` as Manager on both locations). After that, the rest is execution cadence we already have planned in the existing checklist (`docs/GBP-OPTIMIZATION-CHECKLIST.md`) — we just need to actually do it on a 3x/week posting + 5 photos/month rhythm.

---

## 1. Live audit — both locations as of 2026-05-06

### Apache Junction — 1151 W Apache Trail, AJ AZ 85120

| Field | Live State | Target | Severity |
|---|---|---|---|
| Star rating | **2.8** | 4.5+ | P0 |
| Hours | 9 AM–5 PM Mon–Fri | Open 24 hours | P0 |
| Primary phone | (480) 288-5526 | (480) 288-5526 | OK |
| Website | axletowing.com | axletowing.com | OK |
| Primary category | Towing service | Towing Service | OK |
| Secondary categories | (none) | 5 secondaries | P0 |
| Description | empty | 750-char optimized | P0 |
| Photos shown in panel | 0 | 75+ | P0 |
| Services list | empty | 6 services | P0 |
| Q&A | 0 entries | 25 seeded | P1 |
| Posts | none visible | 3/week | P1 |
| Place ID | `0x872bb77ca3c77bbb:0x7758cbdc42454652` (`/g/11nm_z4h6_`) | — | — |

### Phoenix — 320 E Pioneer St, Phoenix AZ 85040

| Field | Live State | Target | Severity |
|---|---|---|---|
| Star rating | **3.0** | 4.5+ | P0 |
| Hours | 9 AM–5 PM Mon–Fri | Open 24 hours | P0 |
| **Primary phone** | **(623) 401-2537 ← WRONG** | (480) 288-5526 | **P0 — fix today** |
| Website | axletowing.com | axletowing.com | OK |
| Primary category | Towing service | Towing Service | OK |
| Secondary categories | (none) | 5 secondaries | P0 |
| Description | empty | 750-char optimized | P0 |
| Photos shown in panel | 0 | 75+ | P0 |
| Services list | empty | 6 services | P0 |
| Q&A | 0 entries | 25 seeded | P1 |
| Posts | none visible | 3/week | P1 |
| Plus code | CW9J+4H Phoenix | — | — |

### Adjacent citations (read while we were in there)

| Source | Reviews | Photos | Hours shown | Phone shown |
|---|---|---|---|---|
| Yelp (Apache Junction) | 56 | 8 | 9 AM–5 PM | (480) 288-5526 |
| Apple Maps (Apache Junction) | — | — | 9–5 weekdays, Sat closed | (480) 288-5526 |
| AMA member directory | — | — | — | (480) 288-5526 |
| MapQuest | — | — | — | listed |

Yelp Phoenix listing: not yet confirmed live, may not exist as a separate location yet. AJ Yelp also shows 9–5 hours, so the same hours fix has to be replayed across every directory.

---

## 2. Why this matters (in dollars)

- **Star rating below 3.5 = ~70% drop in click-through to call** vs a 4.5+ profile in the Map Pack (BrightLocal 2024). At 2.8/3.0, we're invisible to most searches even when we appear.
- **Wrong Phoenix phone (623-401-2537)** routes inbound calls to a number Elliott does not control. Every call to Phoenix from Maps right now is a lead lost — we don't even know how many.
- **9 AM–5 PM hours** tell Google we are closed during the exact hours when the bulk of private-property tow demand happens (overnight fire-lane, 2 AM fraternity-party-blocking, weekend HOA enforcement). Google routes "open now" searches to competitors instead.
- **Empty profile** = the AI Overview / "About this business" snippet that Google is now showing in 60% of local searches has nothing to pull from. We are invisible to AI search.
- **Both locations confirmed by business 2 weeks ago** — Elliott IS in the GBP dashboard. He just hasn't filled it out. This is a 30-minute fix, not a 30-day project.

---

## 3. Strategy — three phases

### Phase 1 — Stop the bleeding (this week, 30-60 min total)

Goal: fix the 5 P0 errors that are actively losing money. Either Elliott does this himself, or he adds `julian@aiacrobatics.com` as Manager on both locations and we do it for him.

| # | Action | Who | Where | Time |
|---|---|---|---|---|
| 1 | Fix Phoenix phone: change `(623) 401-2537` → `(480) 288-5526` | Elliott or us | GBP Phoenix → Edit Profile → Contact | 2 min |
| 2 | Set both locations to "Open 24 hours" | Elliott or us | GBP → Hours | 5 min |
| 3 | Paste optimized description (per-location, in `GBP-OPTIMIZATION-CHECKLIST.md` §1) | us | GBP → Description | 5 min |
| 4 | Add 5 secondary categories: Impound Lot, Parking Lot, Property Maintenance, Vehicle Storage Facility, Tow Truck Operator | us | GBP → Categories | 10 min |
| 5 | Add appointment URL: `axletowing.com/get-quote` | us | GBP → Bookings | 2 min |
| 6 | Mirror hours fix on Yelp + Apple Maps + MapQuest | us | external | 15 min |

Required from Elliott: **add `julian@aiacrobatics.com` as Manager on both GBP locations**. Once that one button is clicked, items 3–6 ship today.

### Phase 2 — Fill the profile (week 2-3)

Goal: get both profiles to 100% completeness. This unlocks Google's "completeness reward" in local rank.

| Action | Owner | Notes |
|---|---|---|
| Upload 25 photos per location (fleet, team, at-work, exterior, interior) | us | We have headshots from website; need 15+ more on-the-job shots. Asks Elliott to share dispatch-cam shots from his phone. |
| Add 6 services with descriptions (per checklist §3) | us | All copy already written |
| Seed first 10 Q&A entries (per checklist §5, Q1–Q10) | us | We use a personal Gmail to ASK, business account to ANSWER |
| Publish first 3 GBP posts (per checklist §6, Week 1 templates) | us | All copy written, just need to match a photo |
| Add social media links (FB, IG, LinkedIn) | us | Need URLs from Elliott if not already on the website |
| Enable GBP messaging | us | Routes to elliott@axletowing.com once Workspace DNS lands |
| Upload high-res logo + cover photo on both locations | us | Already in `website/public/` |

### Phase 3 — Sustained ranking lift (week 4 and ongoing)

Goal: move both ratings from 2.8/3.0 to 4.5+ within 90 days, dominate Map Pack within 6 months.

| Cadence | Action | How |
|---|---|---|
| Weekly | 3 GBP posts per location (Mon service spotlight, Wed education, Fri offer) | Pre-written templates in checklist §6, photo from rotating bank |
| Weekly | Respond to every new review within 24 hours | Templates in checklist §7 |
| Weekly | Answer any new public Q&A within 24 hours | Templates in checklist §5 |
| Monthly | Upload 5+ new photos per location (recency is a ranking signal) | Driver-cam shots, signage installs, before/afters |
| Monthly | Seed 1-2 fresh Q&A entries on emerging search queries | We pull from Search Console + GBP Insights |
| Monthly | Pull GBP Insights report and ship to Elliott | Calls, direction requests, photo views, search-term breakdown |
| Monthly | Request reviews from active property-manager clients at 30-day and 90-day marks | Use direct review link + GHL email + iMessage handoff |
| Quarterly | Refresh cover photos with seasonal content | Holiday, monsoon, Arizona summer |
| Quarterly | Audit for spam edits to the profile (Google allows public edit suggestions — we have to push back) | Manual sweep |

---

## 4. Suspension-risk hardening (parallel to phase 1)

Google has been actively suspending towing GBP listings throughout 2025–2026. From the existing `gbp-pack.html` research:

- Triggers: "Deceptive Content" flag, vehicle-owner complaint velocity, perceived address ambiguity, category ambiguity, name-stuffing
- Cost of a suspension: 70–90% drop in Map Pack calls within a week, recovery takes 30–90 days

What we put in place to harden against this:

| Risk | Mitigation |
|---|---|
| Vehicle-owner complaint velocity | Empathetic-but-firm response template (already in checklist §7). Drive volume of B2B reviews from property managers/HOAs to dilute consumer-only review pool. |
| "Deceptive Content" flag | Never use service-area-only modifiers in business name. Keep it `Axle Towing & Impound` exactly. No "Phoenix" / "24/7" / "Best" appended. |
| Address ambiguity | Both addresses match the website + AMA + Yelp + Apple Maps after Phase 1. Same building, same suite, same ZIP everywhere. |
| Category ambiguity | Lock to `Towing Service` primary, 5 supporting. Do NOT add "Auto Repair" or "Roadside Assistance" — those are Google's known suspension flags for towing-only outfits. |
| Name-stuffing | We have not done this; keep enforcing. |
| Address verification (postcard) lapse | If Google re-mails verification, Elliott or someone at the address must enter the code within the window. We add an SOP entry. |

---

## 5. What we need from Elliott (action items)

These go on the client portal too. Listed in priority order:

1. **Add `julian@aiacrobatics.com` as Manager on both GBP locations.** 60 seconds per location. Without this, we cannot fix the wrong Phoenix phone number or any other field.
2. **Confirm Phoenix phone routing.** Is `(623) 401-2537` a typo Google added, or a real line that's ringing somewhere? If it's a real line, where does it go?
3. **Send 10–20 dispatch-cam photos** of trucks at properties, signage installs, before/after parking lots. iPhone shots are fine, just real (no stock).
4. **Confirm social handles** for Facebook, Instagram, LinkedIn so we can link them on GBP.
5. **List of 5–10 active property-manager clients** comfortable being asked for a Google review. We'll send the direct review link, they post, we respond.

---

## 6. Targets — what success looks like

| Metric | Current | 30 days | 90 days | 12 months |
|---|---|---|---|---|
| Apache Junction rating | 2.8 | 3.5+ | 4.3+ | 4.7+ |
| Phoenix rating | 3.0 | 3.5+ | 4.3+ | 4.7+ |
| Total Google reviews (combined) | unknown — need access | +10 net new | +30 net new | +75 net new |
| Hours correct | NO | YES | YES | YES |
| Phone correct (Phoenix) | NO | YES | YES | YES |
| Description present | NO | YES | YES | YES |
| Secondary categories | 0 | 5 | 5 | 5 |
| Photos per location | ~0 visible | 25+ | 75+ | 200+ |
| Services listed | 0 | 6 | 6 | 6 |
| Q&A entries | 0 | 10 | 25 | 35+ |
| GBP posts/week | 0 | 3 | 3 | 3 |
| Map Pack appearances for `private property towing phoenix` | unknown — need access | tracked | top 5 | top 3 |

---

## 7. Open questions / risks

- We do not yet have GBP Insights access (calls, direction requests, search terms, profile views). We need that to actually grade ranking changes. Solved by Phase 1 item: Elliott adds us as Manager.
- Phoenix `(623) 401-2537` may be tied to an old answering service or a competitor's number Google auto-imported. Worst case: a competitor has been collecting our Phoenix calls for months. Need to confirm with Elliott who owns that line.
- The 2.8 / 3.0 ratings imply meaningful negative review volume. We have not read the reviews yet (limited Google view without sign-in). Once we have Manager access, first task is reading every existing review and queuing responses.
- Google is suspending towing listings aggressively. Phase 1 includes hardening but a suspension is still a tail risk. We should keep both directory citations (Yelp/Apple/Bing/Foursquare) in good shape as a fallback so we are not single-threaded on Google.

---

## 8. Linear sub-issues filed under AI-2030

- AI-2030-1: Phase 1 — fix Phoenix phone, set 24/7 hours, paste descriptions, add categories, add services list, add appointment URL — both locations
- AI-2030-2: Request Manager access from Elliott (`julian@aiacrobatics.com` on both locations)
- AI-2030-3: Photo upload pass — 25 per location from existing assets
- AI-2030-4: Seed 10 Q&A per location (use templates from `GBP-OPTIMIZATION-CHECKLIST.md` §5)
- AI-2030-5: Publish first 3 GBP posts per location (use templates from §6)
- AI-2030-6: Mirror hours/phone fixes on Yelp, Apple Maps, MapQuest, Bing Places
- AI-2030-7: Pull GBP Insights weekly + ship monthly report to Elliott
- AI-2030-8: Review-generation playbook — outreach to 5–10 property-manager clients

---

## Appendix A — Optimized descriptions (paste-ready, from existing checklist)

### Apache Junction
```
Axle Towing & Impound provides professional private property towing,
parking enforcement, and HOA towing services across the East Valley.
We serve apartment complexes, HOA communities, commercial properties,
and retail centers — at zero cost to property owners.

Services include 24/7 private property impounds, scheduled patrol
enforcement, vehicle relocations, and Arizona-compliant signage
installation. 30+ years combined team experience.

What sets us apart: zero cost to owners, 24/7 dispatch with 30-minute
average response, monthly enforcement reports, and full Arizona
compliance (ARS 9-499.05). Call 480-288-5526 for a free property
assessment.
```

### Phoenix
```
Axle Towing & Impound serves Phoenix, Scottsdale, Tempe, Glendale,
and surrounding communities with professional private property towing
and parking enforcement — at zero cost to property owners.

We work with apartment complexes, HOA boards, commercial properties,
and office buildings to eliminate unauthorized parking. 24/7 dispatch,
30-minute average response, monthly enforcement reports, and full
Arizona compliance.

Arizona Multihousing Association member. Fully licensed, insured, and
bonded. Call 480-288-5526 for a free property assessment.
```

## Appendix B — Service list (paste-ready, all 6 from checklist §3)

See `docs/GBP-OPTIMIZATION-CHECKLIST.md` §3 for the 6 service descriptions ready to paste.

## Appendix C — First 12 GBP posts (paste-ready, from checklist §6)

See `docs/GBP-OPTIMIZATION-CHECKLIST.md` §6 for the 4-week pre-written post calendar.

## Appendix D — First 25 Q&A entries (paste-ready, from checklist §5)

See `docs/GBP-OPTIMIZATION-CHECKLIST.md` §5 for the 25 seeded Q&A entries.
