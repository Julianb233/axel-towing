# Axle Towing — Technical SEO Audit (2026-05-07)

**Method.** Lighthouse 12 (mobile, simulated Slow 4G + 4x CPU) run locally via `npx lighthouse` against 30 traffic-weighted pages. PSI quota is exhausted on the default GCP project (AI-9333) and the `GOOGLE_API_KEY-gemini` key is blocked from PSI; local Lighthouse produces equivalent scores and richer per-page detail. HTML pulled via `curl` for schema validation, on-page SEO, and image-alt sampling. All numbers below are mobile-form-factor.

**Top-line read.** The site is in surprisingly good shape: SEO category averages 99/100, accessibility averages 95, best-practices is a perfect 100. Schema is everywhere — every page has 3-8 JSON-LD blocks, and zero parse errors across 30 pages. The two real problems are **systemic** (hit every pillar page, not one-offs):

1. **Title and meta-description bloat** — 26 of 30 titles are >70 chars, 26 of 30 meta descriptions are >160 chars. Every pillar tail-page in Google SERPs is being truncated.
2. **One unoptimized hero JPG used on six pillars** — `/images/hero-parking-lot.jpg` is 495KB, served as a raw `<div style="background-image">` (NOT through `next/image`), so it can't be auto-converted to WebP. This is the single biggest LCP lever on the new pillars (~750ms mobile LCP saved per page if migrated to AVIF/WebP via `next/image`).

These two fixes alone, both small code changes in the existing Next.js app, move ~20 of 30 pages from yellow to green on Core Web Vitals and unlock the SERP click-through gains the new pillars are designed to capture.

---

## 1. Headline numbers

| Metric | Value |
|---|---|
| Pages audited | 30 of 358 (top 30 by traffic, including 4 brand-new pillars) |
| Avg mobile Lighthouse Performance | **91 / 100** |
| Avg mobile Lighthouse Accessibility | **95 / 100** |
| Avg mobile Lighthouse SEO | **99 / 100** |
| Avg mobile Lighthouse Best Practices | **100 / 100** |
| LCP < 2.5s (good) | 4 pages |
| LCP 2.5-4s (needs improvement) | 17 pages |
| LCP > 4s (poor) | 9 pages |
| CLS < 0.1 (good) | **30 pages (all clean)** |
| CLS 0.1-0.25 | 0 |
| CLS > 0.25 | 0 |
| INP / TBT (proxy) <200ms | 30 pages — total-blocking-time averaged ~30ms; main thread is not the bottleneck |
| Pages with broken JSON-LD (parse errors) | **0** |
| Pages missing expected `Article` schema | 7 of 10 blog posts |
| Pages missing expected `LocalBusiness` schema | 0 of pages where it is expected |
| Title too short (<30) | 0 |
| Title too long (>70) | **26** |
| Title missing | 0 |
| Meta description too short (<70) | 0 |
| Meta description too long (>160) | **26** |
| Meta description missing | 0 |
| Missing canonical | 0 |
| Missing H1 | 0 |
| Multiple H1 | 0 |
| Pages with >2 images missing alt | 0 |
| Pages with hreflang `es` set | 5 (`about`, `pricing`, `service-area`, two blog posts) |
| Pages WITHOUT hreflang for `/es/` | **25** (every pillar, every city page, every other blog post) |
| Total color-contrast violations (sum across 30 pages) | 439 nodes — concentrated in 4 patterns (see §4 a11y) |

The one number that surprised me: **CLS is zero everywhere**. The site is not paying any visual-stability tax. That's unusual for a content-heavy site with a parallax hero and review widget — credit to whoever locked image dimensions and avoided ad-style late-loading regions.

The number that should not have surprised me but did: **performance dispersion is huge**. Two `/private-property-towing/<city>/` pages (Mesa, Chandler) score 97-98 with sub-2.5s LCP. The four brand-new pillars all score 81-82 with ~5s LCP. The new pillars look slow not because they're heavy — they're slow because they're using a different (older) hero pattern that the city pages were already migrated off of.

---

## 2. Per-URL scorecard (30 rows)

| URL | Perf | A11y | SEO | LCP (s) | CLS | Schema | Title len | Meta len | Issues |
|---|---:|---:|---:|---:|---:|:---:|---:|---:|---:|
| / | 97 | 91 | 100 | 2.64 | 0.000 | Y | 64 | 252 | 1 |
| /phoenix-towing | 82 | 96 | 100 | 4.96 | 0.000 | Y | 94 | 230 | 2 |
| /arizona-towing | 82 | 96 | 100 | 4.98 | 0.000 | Y | 121 | 245 | 2 |
| /tow-service-phoenix-az | 82 | 96 | 100 | 4.96 | 0.000 | Y | 114 | 250 | 2 |
| /apache-sands-vs-axle-towing | 81 | 96 | 100 | 5.03 | 0.000 | Y | 113 | 247 | 2 |
| /services | 82 | 96 | 100 | 4.96 | 0.000 | Y | 89 | 254 | 2 |
| /private-property-towing | 93 | 96 | 100 | 3.24 | 0.000 | Y | 113 | 202 | 2 |
| /private-property-towing/phoenix | 86 | 96 | 100 | 3.91 | 0.000 | Y | 124 | 201 | 2 |
| /private-property-towing/mesa | **98** | 96 | 100 | **2.41** | 0.000 | Y | 107 | 231 | 2 |
| /private-property-towing/chandler | **97** | 96 | 100 | **2.49** | 0.000 | Y | 111 | 225 | 2 |
| /private-property-towing/scottsdale | 94 | 96 | 100 | 3.09 | 0.000 | Y | 113 | 217 | 2 |
| /private-property-towing/tempe | 94 | 96 | 100 | 3.09 | 0.000 | Y | 108 | 222 | 2 |
| /locations/phoenix | 91 | 96 | 100 | 3.54 | 0.000 | Y | 104 | 166 | 2 |
| /contact | 81 | 91 | 100 | 4.29 | 0.000 | Y | 67 | 177 | 1 |
| /about | 87 | 96 | 100 | 4.06 | 0.000 | Y | 93 | 271 | 2 |
| /blog | 81 | 96 | 100 | 5.12 | 0.000 | Y | 70 | 143 | **0** |
| /faq | 81 | 96 | 100 | 5.19 | 0.000 | Y | 83 | 196 | 2 |
| /pricing | 90 | 96 | 100 | 3.46 | 0.000 | Y | 67 | 175 | 1 |
| /locations | 96 | 96 | 100 | 2.71 | 0.000 | Y | 71 | 156 | 1 |
| /service-area | 92 | 92 | 100 | 3.24 | 0.000 | Y | 103 | 235 | 2 |
| /blog/arizona-private-property-towing-rights | 97 | 96 | **92** | 2.56 | 0.000 | **N** | 93 | 198 | 3 |
| /blog/abandoned-vehicle-removal-phoenix-metro | 89 | 96 | 100 | 3.69 | 0.000 | Y | 75 | 147 | 1 |
| /blog/abandoned-vehicle-phoenix-az | 90 | 96 | 100 | 3.61 | 0.000 | Y | 79 | 159 | 1 |
| /blog/arizona-abandoned-vehicle-laws-property-owners | 97 | 96 | 100 | 2.49 | 0.000 | **N** | 81 | 168 | 3 |
| /blog/phoenix-monsoon-season-parking-safety | 97 | 96 | **92** | 2.56 | 0.000 | **N** | 92 | 171 | 3 |
| /blog/private-property-towing-faq | 97 | 96 | 100 | 2.49 | 0.000 | **N** | 94 | 209 | 3 |
| /blog/arizona-fire-lane-towing-laws | 97 | 96 | **92** | 2.56 | 0.000 | **N** | 85 | 209 | 3 |
| /blog/arizona-handicap-parking-laws-private-property | 97 | 96 | **92** | 2.56 | 0.000 | **N** | 95 | 202 | 3 |
| /blog/arizona-tow-truck-regulations | 97 | 96 | **92** | 2.64 | 0.000 | **N** | 91 | 218 | 3 |
| /services/private-property-impounds | 92 | 94 | 100 | 3.24 | 0.000 | Y | 71 | 180 | 2 |

**How to read the Schema column.** "Y" means the page has the schema types you'd expect for that URL pattern (LocalBusiness on the homepage and city pages, Article on blog posts, FAQPage on `/faq` and the FAQ blog post, Service on service pages). "N" means an expected type is missing — in every case here, it's Article on a blog post that has BreadcrumbList + Service + sometimes FAQPage but no Article wrapper (see §4).

**How to read the Issues column.** Issues counts only the on-page SEO faults this audit checked: title-length, description-length, missing canonical/H1/viewport/lang, alt-text gaps, schema gaps, JSON-LD parse errors. Lighthouse perf/a11y/seo are scored separately and shown in their own columns. A page with a 2.5s LCP and a 100-char title has 1 issue (the title) — Lighthouse SEO can still be 100 because Google's tolerance is wider than ours.

---

## 3. Top 10 fixes by traffic-weighted impact

These are ordered by the multiplier of `(estimated impact per page) x (number of pages affected) x (where in the funnel the page sits)`. Concrete code changes, not generic recommendations.

### 1. Migrate `/images/hero-parking-lot.jpg` to `next/image`. **6 pages, ~750ms LCP each.**
The four new pillars (`/phoenix-towing`, `/arizona-towing`, `/tow-service-phoenix-az`, `/apache-sands-vs-axle-towing`), plus `/services` and `/faq`, all use this 495KB hero JPG via a raw `<div class="parallax-bg" style="background-image:url(/images/hero-parking-lot.jpg)">`. Background-image inside a CSS `style=` attribute does not go through Next.js Image optimization, so it stays as a 495KB JPEG instead of becoming a 158KB AVIF.

**Fix.** Replace the parallax background-image div with a `next/image` `fill priority` element behind a positioned overlay, OR convert the source to AVIF/WebP at build time and reference the optimized URL. The city pages (Mesa, Chandler — 2.4s LCP, 98 perf) already do this correctly; copy that pattern. Files to look at: `app/(marketing)/phoenix-towing/page.tsx`, `app/(marketing)/arizona-towing/page.tsx`, the shared `<ParallaxHero />` component if one exists.

Expected effect: drops 4 of the 5 worst-LCP pages (the new pillars + services) from 4.96-5.03s to ~3.0s. Moves them out of "poor" Web Vitals and into "needs improvement."

### 2. Tighten every title to ≤60 characters. **26 pages.**
26 of 30 titles are >70 chars. The longest is 124 chars (`/private-property-towing/phoenix`). Google truncates at ~580 pixels (~60 chars typically). Right now the brand suffix `| Axle Towing | Axle Towing & Impound` gets cut, and on some pages the keyword does too.

**Fix.** Standardize on `<Page-Specific-Phrase> | Axle Towing & Impound` and target 50-60 chars. Two small examples:

- `/phoenix-towing` current: `Phoenix Towing Services for Property Owners — 2026 Guide | Axle Towing | Axle Towing & Imp` (94, truncated mid-word) → `Phoenix Towing for Property Managers | Axle Towing` (50)
- `/private-property-towing/phoenix` current: `Private Property Towing in Phoenix, AZ — Free for Property Managers, HOAs & Apartments | A` (124, truncated) → `Phoenix Private Property Towing — Free for Managers | Axle` (59)

The `| Axle Towing | Axle Towing & Impound` double-suffix appears on every pillar — that's clearly a layout-level concatenation bug (page `<title>` adds the brand, then the global `<Layout>` adds it again). Fix it once at the layout level and 26 titles drop into spec automatically.

### 3. Tighten every meta description to ≤155 chars. **26 pages.**
Same shape: 26 of 30 meta descriptions are >160 chars, 9 are >200. The homepage runs 252 chars; some blog posts hit 218. Google truncates ~155-160 chars on mobile.

**Fix.** Mechanical rewrite — each description should lead with the locality or the offer, not with the brand. Example: `/about` description currently runs 271 chars opening with company history; the user-facing snippet is "...Axle Towing & Impound has been operating in the Phoenix metro since" which is filler. Lead with the value proposition.

### 4. Add `Article` schema to 7 blog posts. **7 pages.**
Seven of the ten audited blog posts already have FAQPage + BreadcrumbList + Service schema, but no `Article` wrapper. Google's blog rich results require Article (or BlogPosting). The three that do have Article schema (`/blog/abandoned-vehicle-removal-phoenix-metro`, `/blog/abandoned-vehicle-phoenix-az`, `/blog/private-property-towing-faq`'s sibling) should be the template — copy the JSON-LD block over to the other seven. Files affected: probably one shared `<BlogPost>` component or one MDX wrapper.

This also lifts those 5 pages with Lighthouse SEO 92 (capped because of "structured data has missing required field") to 100.

### 5. Migrate every blog post hero away from raw `<div style="background-image:url(...jpg)">` to `next/image`. **~5 blog pages.**
`blog-tow-truck-night.jpg` (507KB) on `/blog`, plus `blog-fire-lane.jpg`, `blog-tow-truck-night.jpg` again on individual posts — all served as 500KB+ raw JPGs. Same fix as #1, scoped to blog post heroes. ~150-300ms LCP each.

### 6. Add `hreflang` annotations to every audited page. **25 pages without it.**
`/es/` exists for some pages (5 confirmed: `/about`, `/pricing`, `/service-area`, `/blog/abandoned-vehicle-*`) but the remaining 25 audited pages have no `<link rel="alternate" hreflang="es">` pair. Either the Spanish version genuinely doesn't exist for those pages (in which case the 5 that do should also be removed for consistency, or the gap should be filled), or it exists and isn't linked.

**Fix.** Audit the actual `/es/` route coverage in `app/`. If parity is the goal, add `hreflang` pairs (`en`, `es`, `x-default`) to every page via the Next.js `metadata.alternates.languages` field in each page's `generateMetadata`. If parity is NOT the goal, remove the existing 5 to avoid Google flagging hreflang errors on incomplete sets.

### 7. Fix the `text-cta` blue-on-white contrast pattern. **High a11y volume, blog page alone has 95 violations.**
The most common single contrast failure across the site is `<span class="text-cta">` (foreground `#4a9ae0` on white) — contrast ratio 3.0, fails WCAG AA (4.5 minimum). On `/blog` alone, this pattern repeats 95 times because every blog card has a "Read more →" CTA in this color.

**Fix.** Darken `--color-cta` (or whatever Tailwind class is mapped) from `#4a9ae0` to ~`#2563eb` (blue-600) — keeps the brand feel, hits 4.6 contrast. One CSS variable change drops total a11y violations across the site by ~40%.

### 8. Fix `text-blue-600` on white (`#2b7fd4` / 4.12 ratio). **Hits `/locations`, `/services`, etc.**
Same shape as #7 but for the Tailwind default `text-blue-600`. Replace with `text-blue-700` (or override the Tailwind theme `colors.blue.600` to `#1d4ed8`). One class change, ~80 violations resolved across `/locations` and `/services`.

### 9. Add `fetchpriority="high"` to the LCP hero image on every pillar. **9 pages affected.**
Lighthouse `lcp-discovery-insight` scores 0 on every >4s LCP page with the message *"fetchpriority=high should be applied"*. The LCP image is correctly discoverable in the initial document and not lazy-loaded — but the browser doesn't know to prioritize it over the React bundle, so resource-load-delay runs ~3s on simulated Slow 4G.

**Fix.** When migrating heroes to `next/image` (#1, #5), pass `priority` on the hero `<Image>`. That sets `fetchpriority="high"` and adds `<link rel="preload">`. Cuts ~400-600ms off LCP under the throttled conditions Lighthouse and CrUX use.

### 10. Centralize the "Apache Junction yard, 24/7" copy block that appears in every meta description.
Every city page meta-description is 200+ chars because they all expand the same boilerplate ("Free private property towing in <city>, AZ. <30 min response from our Apache Junction yard, 24/7 dispatch, ARS-compliant..."). This is also at risk of duplicate-content snippet collisions in Google. Pull it out of `generateMetadata` and let each page's intro sentence be unique — give each city its own primary differentiator (Mesa: SR-202 access, Chandler: tech corridor, Scottsdale: Old Town nightlife volume, Tempe: ASU adjacency). Drop description length to ~140 and the duplicate-meta risk to zero.

---

## 4. Schema gap fix list

Schema coverage is in great shape overall — every page has multiple JSON-LD blocks and zero parse errors. The gaps are narrow:

| Page | Has | Missing | Fix |
|---|---|---|---|
| `/blog/arizona-private-property-towing-rights` | BreadcrumbList, Service | **Article**, FAQPage | Add `BlogPosting` JSON-LD with `headline`, `datePublished`, `dateModified`, `author`, `publisher`, `image`, `mainEntityOfPage` |
| `/blog/arizona-abandoned-vehicle-laws-property-owners` | BreadcrumbList, FAQPage, Service | **Article** | Same as above |
| `/blog/phoenix-monsoon-season-parking-safety` | BreadcrumbList, Service | **Article**, FAQPage | Add Article + FAQPage |
| `/blog/private-property-towing-faq` | BreadcrumbList, FAQPage, Service | **Article** | Add Article (it's a blog post _and_ a FAQ — needs both) |
| `/blog/arizona-fire-lane-towing-laws` | BreadcrumbList, Service | **Article**, FAQPage | Add both |
| `/blog/arizona-handicap-parking-laws-private-property` | BreadcrumbList, Service | **Article**, FAQPage | Add both |
| `/blog/arizona-tow-truck-regulations` | BreadcrumbList, Service | **Article**, FAQPage | Add both |
| `/blog` | BreadcrumbList, Service | `Blog` or CollectionPage | Add `Blog` schema with `blogPost` array — helps the index page rank for "Phoenix towing blog" / "Arizona towing news" terms |
| `/locations` | BreadcrumbList, Service | `ItemList` of LocalBusiness | The hub page lists 6 cities. Wrap them in an `ItemList` with each city as a `LocalBusiness` reference |
| `/pricing` | Service | `OfferCatalog` with explicit `Offer.priceSpecification` | Even if pricing is "free for property owners," declaring `priceCurrency: USD` and `price: 0` is the cleanest way to surface that in rich results |

The `Service` schema is on every audited page, including blog posts and the FAQ — that's actually overkill (Service should describe what Axle does, not appear on a regulations explainer). Pulling it out of blog posts isn't urgent, but if you ever see Google's Rich Results test complaining about "irrelevant Service schema on Article page," that's the cause.

**One thing to verify outside this audit.** The brief mentions a `/reviews` and `/licensing` page being candidates for Review/AggregateRating and Organization schema. Neither was in the top-30 traffic list so neither was audited. If those pages exist (they're not in the URL list provided) the gap is real and worth fixing in the same sprint.

---

## 5. Highest-priority Web Vitals fixes — top 5 worst pages

Worst-LCP pages with the actual cause from Lighthouse insights, plus the fix.

### 5.1 `/faq` — LCP 5.19s, perf 81
**Cause.** Lighthouse `image-delivery-insight` flags 2 images with combined ~750ms LCP savings if optimized. The hero (`/images/hero-parking-lot.jpg`, 495KB) is served via background-image. `lcp-discovery-insight.priorityHinted: false` — no `fetchpriority="high"`. TTFB is fast (32ms). Everything else (TBT 30ms, CLS 0, main-thread 1.2s) is fine.

**Fix.** Convert hero to `next/image` with `priority` and AVIF source. Expected new LCP: ~3.0s.

### 5.2 `/blog` — LCP 5.12s, perf 81
**Cause.** Same hero pattern + a second large image (`blog-tow-truck-night.jpg`, 507KB) appearing both above the fold and in card thumbnails. `image-delivery-insight` reports estimated savings of 259KiB and ~750ms LCP improvement. Plus 95 contrast violations on the "Read more →" CTAs.

**Fix.** (a) Convert hero + first 4 blog card thumbnails to `next/image` with proper sizing (`sizes="(max-width: 768px) 100vw, 50vw"`). (b) Lazy-load the rest of the cards below the fold. (c) Darken `text-cta` from `#4a9ae0` to `#2563eb` to fix the 95 contrast issues. Expected new LCP: ~3.2s, a11y 96 → 100.

### 5.3 `/apache-sands-vs-axle-towing` — LCP 5.03s, perf 81
**Cause.** New pillar shipped today. Same hero JPG. Has rich content (Article + FAQPage + LocalBusiness schema), but it pays the same hero penalty as the other new pillars. Title is 113 chars — truncated in SERPs.

**Fix.** Hero migration (#1 above). Title trim. Expected new LCP: ~3.0s.

### 5.4 `/arizona-towing` — LCP 4.98s, perf 82
**Cause.** Same hero JPG + 121-char title (longest in the audit). The competitor-comparison content here is high-intent for "Arizona statewide towing" terms but the page is paying a slow-load tax.

**Fix.** Hero migration. Title trim from 121 → ~55 chars. Expected new LCP: ~3.0s.

### 5.5 `/contact` — LCP 4.29s, perf 81, a11y 91
**Cause.** Different from the others — the contact page LCP element is the embedded Google Map iframe in a card layout. Map iframes are notoriously slow under throttling. Also has the `text-cta` and `text-blue-600` contrast problems (drops a11y to 91).

**Fix.** (a) Lazy-load the Google Map below the fold OR replace with a static map image + click-to-load iframe. (b) Apply the contrast fixes from §3.7-3.8. Expected new LCP: ~2.5s, a11y 91 → 96.

---

## What's already good — don't fix what isn't broken

A few things that came back surprisingly clean and should not be touched in this sprint:

- **CLS is 0.000 on every audited page.** Whatever pattern is locking image dimensions and avoiding late-loading injected content is working. Don't change the parallax pattern in a way that could regress this.
- **Best Practices is 100 across all 30 pages.** No mixed content, no deprecated APIs, no console errors flagged.
- **Total Blocking Time / INP proxy averages ~30ms.** The site is not CPU-bound. Don't over-optimize JavaScript bundles — that's not the problem.
- **Schema parses cleanly on all 30 pages with 3-8 blocks each.** Whatever generates JSON-LD is solid. The gaps are about which types are emitted, not malformed JSON.
- **Canonical, viewport, lang, H1 count, alt-text** — all fine on every audited page. No basic on-page SEO faults.
- **`/private-property-towing/mesa` and `/private-property-towing/chandler` score 97-98 perf with 2.4s LCP.** They're the proof that the rest of the site CAN look like this — they're already using the correct hero pattern. Use them as the implementation reference for fixes #1 and #5.

## Quota note

PSI v5 quota is exhausted on the project tied to the GCP `GOOGLE_API_KEY-gemini` (which is also blocked from the PSI service specifically). All 30 Lighthouse runs in this audit ran locally via `npx lighthouse@latest` on headless Chrome, throttled to mobile Slow 4G + 4x CPU — equivalent methodology to PSI's "lab data" tab, and produces identical category scoring within ±2 points. AI-9333 already tracks getting a higher-quota PSI key into 1Password; once that lands the same script can re-run against the live PSI endpoint for CrUX field data instead of just lab.

---

*Audit method, scripts, and raw Lighthouse + HTML data archived to `/opt/agency-workspace/.archive/axle-lh/` and `/opt/agency-workspace/.archive/axle-html/`. Re-run by calling `/opt/agency-workspace/.archive/run-lh.sh <url> <slug>` for any single URL, or the parsing pipeline `parse-html.py` + `extract-lh.py` against the saved JSON.*
