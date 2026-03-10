# Axel Towing Website — Improvement Roadmap

## Milestone: v2.0 — World-Class Conversion Optimization

**Goal:** Implement all P0 + P1 improvements from competitor research to make this the best towing company website in the US.

**Current State:** 120 pages built, 63 blog articles, 8 location pages, 15 neighborhoods, glassmorphism design. Build passing.

---

### Phase 01: P0 Quick Wins — Response Time Badge + Trust Badges + Newsletter
**Goal:** Add response time guarantee badge, trust badge bar, newsletter signup to footer, and enhanced mobile CTAs.
**Files:** src/app/page.tsx, src/components/Header.tsx, src/components/Footer.tsx, src/components/FloatingCTA.tsx, src/components/ServicePageTemplate.tsx
**Status:** pending

### Phase 02: P0 Video + Process Visualization
**Goal:** Add video modal component, "Watch How It Works" button on hero, and enhanced animated timeline in How It Works section.
**Files:** src/app/page.tsx, src/components/VideoModal.tsx (new)
**Status:** pending

### Phase 03: P1 Pricing Page + Enhanced Forms
**Goal:** Create transparent pricing page highlighting $0 cost for property owners, add urgency/property-type fields to contact and quote forms.
**Files:** src/app/pricing/page.tsx (new), src/app/contact/page.tsx, src/app/get-quote/page.tsx
**Status:** pending

### Phase 04: P1 Photo Documentation + Gallery Enhancement
**Goal:** Add "Every Vehicle Documented" badge to service pages, enhance gallery with timestamped/geotagged documentation examples.
**Files:** src/app/gallery/page.tsx, src/components/ServicePageTemplate.tsx
**Status:** pending

### Phase 05: P1 Dashboard Preview + Portal Enhancement
**Goal:** Add animated property manager dashboard mockup to homepage, enhance portal page with feature previews.
**Files:** src/app/page.tsx, src/app/portal/page.tsx
**Status:** pending

### Phase 06: P1 Referral Program + Before/After Case Studies
**Goal:** Create referral program page, add before/after slider to case studies.
**Files:** src/app/referral/page.tsx (new), src/app/case-studies/page.tsx, src/components/BeforeAfterSlider.tsx (new)
**Status:** pending

### Phase 07: Schema + SEO Enhancements
**Goal:** Add AggregateRating schema, response time in schema markup, enhanced meta tags, Google Reviews integration markup.
**Files:** src/lib/schema.ts, src/app/layout.tsx, src/app/reviews/page.tsx
**Status:** pending

### Phase 08: Commit Uncommitted + Build Verify + Deploy
**Goal:** Stage all changes, verify build, commit, push, deploy to Vercel.
**Status:** pending (blocked by phases 01-07)
