# Axle Towing — Image Optimization & Meta Tag Audit

**Linear:** AI-2032
**Date:** March 24, 2026
**Domain:** axletowing.com
**Auditor:** AI Acrobatics

---

## Table of Contents

1. [Image Optimization Checklist](#section-1-image-optimization-checklist)
2. [Meta Tag Audit](#section-2-meta-tag-audit)
3. [Implementation Checklist](#section-3-implementation-checklist)

---

## Section 1: Image Optimization Checklist

### Current State Summary

The website already has a strong image SEO foundation:

- **38 optimized WebP images** in `/public/images/optimized/` (plus 38 thumbnails)
- **Naming convention in use:** `axle-towing-{context}-{city}-{state}.webp` — fully keyword-rich
- **Thumbnails:** 400px-wide versions in `/optimized/` with `-thumb` suffix
- **Legacy JPG images** in `/public/images/` that still reference un-optimized paths in `lib/images.ts`

### File Naming Convention

**Established pattern (stick to this):**

```
axle-towing-{service}-{descriptor}-{city}-az.webp
axle-towing-{service}-{descriptor}-arizona-towing-service.webp
```

**Examples (already in use — good):**

- `axle-towing-hero-private-property-towing-phoenix.webp`
- `axle-towing-hoa-towing-phoenix-az.webp`
- `axle-towing-apartment-parking-arizona-towing-service.webp`
- `axle-towing-commercial-property-towing-phoenix-az.webp`

**For city-specific images, use:**

```
axle-towing-{service}-{city}-arizona.webp
```

Example: `axle-towing-hoa-parking-enforcement-scottsdale-arizona.webp`

---

### Top 10 Priority Images to Add or Replace

These are images that either don't exist yet, exist as legacy JPGs only, or are missing entirely from high-traffic pages:

| Priority | Recommended Filename                                                    | Alt Text                                                                                      | Use Case                                           | Action          |
| -------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------- | --------------- |
| 1        | `axle-towing-private-property-impound-sign-phoenix-az.webp`             | "ARS-compliant private property impound sign installed by Axle Towing in Phoenix, AZ"         | Private property impounds service page hero        | Create / source |
| 2        | `axle-towing-hoa-community-parking-enforcement-scottsdale-arizona.webp` | "HOA parking enforcement truck patrolling a Scottsdale, AZ community by Axle Towing"          | HOA towing service page + Scottsdale location page | Create / source |
| 3        | `axle-towing-apartment-complex-towing-tempe-arizona.webp`               | "Axle Towing flatbed removing unauthorized vehicle from Tempe apartment complex"              | Apartment towing page + Tempe location page        | Create / source |
| 4        | `axle-towing-vehicle-relocation-asphalt-repair-phoenix-az.webp`         | "Axle Towing crew relocating vehicles from parking lot during asphalt resurfacing in Phoenix" | Vehicle relocations service page                   | Create / source |
| 5        | `axle-towing-commercial-parking-lot-enforcement-chandler-arizona.webp`  | "Commercial parking lot towing enforcement by Axle Towing in Chandler, AZ"                    | Commercial property page + Chandler location       | Create / source |
| 6        | `axle-towing-fire-lane-violation-tow-phoenix-az.webp`                   | "Fire lane violation vehicle being towed from Phoenix commercial property by Axle Towing"     | Blog posts + fire lane enforcement content         | Create / source |
| 7        | `axle-towing-impound-yard-apache-junction-arizona.webp`                 | "Axle Towing secure impound storage yard at 1151 W. Apache Trail, Apache Junction, AZ"        | About page + contact/locations page                | Create / source |
| 8        | `axle-towing-property-manager-consultation-phoenix-arizona.webp`        | "Property manager reviewing parking enforcement agreement with Axle Towing team in Phoenix"   | Homepage + get-quote page                          | Create / source |
| 9        | `axle-towing-gilbert-hoa-parking-enforcement-arizona.webp`              | "Axle Towing HOA parking enforcement services for Gilbert, AZ communities"                    | Gilbert location landing page                      | Create / source |
| 10       | `axle-towing-parking-permit-system-apartment-phoenix-az.webp`           | "Resident parking permit system managed by Axle Towing for Phoenix apartment complex"         | Apartment towing page + parking enforcement page   | Create / source |

---

### Per-Page Image Audit

#### Homepage (`/`)

| Image Slot         | Current File           | Recommended Optimized File                                 | Recommended Alt Text                                                                   | Dimensions | Format |
| ------------------ | ---------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------- | ---------- | ------ |
| Hero (tow truck)   | `hero-tow-truck.jpg`   | `axle-towing-hero-private-property-towing-phoenix.webp` ✅ | "Axle Towing flatbed truck providing private property impound services in Phoenix, AZ" | 1920×1080  | WebP   |
| Hero (parking lot) | `hero-parking-lot.jpg` | `axle-towing-hero-parking-enforcement-phoenix-az.webp` ✅  | "Empty commercial parking lot protected by Axle Towing enforcement in Phoenix, AZ"     | 1920×1080  | WebP   |
| Testimonials BG    | `testimonial-bg.jpg`   | `axle-towing-testimonials-phoenix-az.webp` ✅              | "Phoenix property managers satisfied with Axle Towing services"                        | 1920×600   | WebP   |
| About preview      | `about-team.jpg`       | `axle-towing-team-phoenix-arizona.webp` ✅                 | "Axle Towing & Impound professional team serving Phoenix metro"                        | 800×600    | WebP   |

**Status:** Good. Legacy JPGs still in `lib/images.ts` — update references to point to `/images/optimized/` WebP files.

---

#### Services — Private Property Impounds (`/services/private-property-impounds`)

| Image Slot      | Current File                  | Recommended Optimized File                                  | Recommended Alt Text                                                                         |
| --------------- | ----------------------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Hero            | `service-private-impound.jpg` | `axle-towing-private-property-impound-phoenix-az.webp` ✅   | "Axle Towing private property impound service — unauthorized vehicle removal in Phoenix, AZ" |
| Feature image   | _(none)_                      | `axle-towing-private-property-impound-sign-phoenix-az.webp` | "ARS-compliant no towing signage installed by Axle Towing on Phoenix private property"       |
| Arizona context | `arizona-impound-lot.jpg`     | `axle-towing-impound-lot-phoenix-arizona.webp` ✅           | "Axle Towing secure impound lot holding unauthorized vehicles in Phoenix, Arizona"           |

---

#### Services — Parking Enforcement (`/services/parking-enforcement`)

| Image Slot         | Current File                      | Recommended Optimized File                                         | Recommended Alt Text                                                                      |
| ------------------ | --------------------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| Hero               | `service-parking-enforcement.jpg` | `axle-towing-parking-enforcement-phoenix-az.webp` ✅               | "Axle Towing parking enforcement patrol at commercial property in Phoenix, AZ"            |
| Feature: signage   | `blog-parking-sign.jpg`           | `axle-towing-blog-parking-sign-compliance-phoenix-az.webp` ✅      | "ARS-compliant tow-away zone signage for private property parking enforcement in Phoenix" |
| Feature: fire lane | `arizona-fire-lane.jpg`           | `axle-towing-fire-lane-enforcement-arizona-towing-service.webp` ✅ | "Fire lane enforcement by Axle Towing at Phoenix commercial property"                     |

---

#### Services — HOA Towing (`/services/hoa-towing`)

| Image Slot | Current File               | Recommended Optimized File                                              | Recommended Alt Text                                                           |
| ---------- | -------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Hero       | `service-hoa-towing.jpg`   | `axle-towing-hoa-towing-phoenix-az.webp` ✅                             | "Axle Towing HOA parking enforcement for Phoenix metro homeowner associations" |
| Context    | `arizona-hoa-entrance.jpg` | `axle-towing-hoa-entrance-arizona-towing-service.webp` ✅               | "Gated HOA community entrance in Arizona with Axle Towing parking enforcement" |
| Missing    | _(none)_                   | `axle-towing-hoa-community-parking-enforcement-scottsdale-arizona.webp` | "Axle Towing patrolling HOA community parking in Scottsdale, AZ"               |

---

#### Services — Apartment Towing (`/services/apartment-towing`)

| Image Slot | Current File                    | Recommended Optimized File                                     | Recommended Alt Text                                                                     |
| ---------- | ------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Hero       | `service-apartment-towing.jpg`  | `axle-towing-apartment-towing-phoenix-az.webp` ✅              | "Axle Towing apartment complex parking enforcement in Phoenix, AZ"                       |
| Context    | `arizona-apartment-parking.jpg` | `axle-towing-apartment-parking-arizona-towing-service.webp` ✅ | "Apartment parking lot in Arizona managed by Axle Towing enforcement program"            |
| Action     | `gallery/apartment-flatbed.jpg` | `axle-towing-apartment-flatbed-tow-phoenix-az.webp` ✅         | "Axle Towing flatbed truck removing unauthorized vehicle from Phoenix apartment complex" |

---

#### Services — Commercial Property (`/services/commercial-property-towing`)

| Image Slot | Current File                     | Recommended Optimized File                                      | Recommended Alt Text                                                                        |
| ---------- | -------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Hero       | `service-commercial-towing.jpg`  | `axle-towing-commercial-property-towing-phoenix-az.webp` ✅     | "Commercial property towing by Axle Towing — retail and office park enforcement in Phoenix" |
| Context    | `arizona-commercial-parking.jpg` | `axle-towing-commercial-parking-arizona-towing-service.webp` ✅ | "Commercial strip mall parking lot with Axle Towing enforcement in Arizona"                 |

---

#### Services — Vehicle Relocations (`/services/vehicle-relocations`)

| Image Slot | Current File                     | Recommended Optimized File                                      | Recommended Alt Text                                                                         |
| ---------- | -------------------------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Hero       | `service-vehicle-relocation.jpg` | `axle-towing-vehicle-relocation-phoenix-az.webp` ✅             | "Axle Towing vehicle relocation crew moving cars for parking lot asphalt repair in Phoenix"  |
| Missing    | _(none)_                         | `axle-towing-vehicle-relocation-asphalt-repair-phoenix-az.webp` | "Vehicles being relocated by Axle Towing for parking lot resurfacing project in Phoenix, AZ" |

---

#### About Page (`/about`)

| Image Slot    | Current File        | Recommended Optimized File                          | Recommended Alt Text                                                                            |
| ------------- | ------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Team          | `about-team.jpg`    | `axle-towing-team-phoenix-arizona.webp` ✅          | "Axle Towing & Impound professional team — 30+ years combined towing experience in Phoenix, AZ" |
| Office        | `about-office.jpg`  | `axle-towing-office-phoenix-arizona.webp` ✅        | "Axle Towing & Impound office and dispatch center in Phoenix, Arizona"                          |
| Veteran-owned | `veteran-owned.jpg` | `axle-towing-veteran-owned-phoenix-arizona.webp` ✅ | "Axle Towing & Impound — veteran-owned towing company serving Phoenix metro area"               |

---

#### Contact Page (`/contact`)

| Image Slot | Current File          | Recommended Optimized File                              | Recommended Alt Text                                                               |
| ---------- | --------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Phoenix    | `contact-phoenix.jpg` | `axle-towing-contact-phoenix-arizona.webp` ✅           | "Axle Towing & Impound contact and service area — Phoenix metropolitan region, AZ" |
| Missing    | _(none)_              | `axle-towing-impound-yard-apache-junction-arizona.webp` | "Axle Towing impound yard at 1151 W. Apache Trail, Apache Junction, AZ 85120"      |

---

#### Gallery Images (Elliott's Real Photos)

All gallery JPGs should be converted to WebP and renamed with SEO filenames:

| Current Filename                  | Recommended Optimized Name                             | Alt Text                                                                         |
| --------------------------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------- |
| `gallery/boat-tow.jpg`            | `axle-towing-boat-tow-phoenix-az.webp` ✅              | "Axle Towing boat transport service in the Phoenix, AZ metro area"               |
| `gallery/classic-car-dusk.jpg`    | `axle-towing-classic-car-dusk-tow-phoenix-az.webp` ✅  | "Classic car flatbed tow at dusk by Axle Towing in Phoenix, Arizona"             |
| `gallery/classic-car-flatbed.jpg` | `axle-towing-classic-car-flatbed-phoenix-az.webp` ✅   | "Classic car secured on flatbed tow truck by Axle Towing, Phoenix AZ"            |
| `gallery/corvette-tow.jpg`        | `axle-towing-corvette-c8-tow-phoenix-az.webp` ✅       | "C8 Corvette towed safely by Axle Towing's low-clearance flatbed in Phoenix, AZ" |
| `gallery/cybertruck-tow.jpg`      | `axle-towing-tesla-cybertruck-tow-phoenix-az.webp` ✅  | "Tesla Cybertruck flatbed tow by Axle Towing in Phoenix, Arizona"                |
| `gallery/desert-recovery.jpg`     | `axle-towing-desert-recovery-phoenix-az.webp` ✅       | "Vehicle recovery in Arizona desert by Axle Towing team"                         |
| `gallery/garage-impound.jpg`      | `axle-towing-garage-impound-phoenix-az.webp` ✅        | "Axle Towing removing vehicle from private garage impound in Phoenix, AZ"        |
| `gallery/gmc-tow.jpg`             | `axle-towing-gmc-truck-tow-phoenix-az.webp` ✅         | "GMC truck being towed by Axle Towing flatbed in Phoenix, Arizona"               |
| `gallery/maserati-night.jpg`      | `axle-towing-maserati-luxury-tow-phoenix-az.webp` ✅   | "Luxury Maserati vehicle impounded at night by Axle Towing in Phoenix, AZ"       |
| `gallery/rv-daytime.jpg`          | `axle-towing-rv-daytime-tow-phoenix-az.webp` ✅        | "RV being towed in daytime by Axle Towing in Phoenix metro area"                 |
| `gallery/rv-palmtrees.jpg`        | `axle-towing-rv-tow-palm-trees-phoenix-az.webp` ✅     | "RV impound tow with Phoenix palm trees — Axle Towing & Impound"                 |
| `gallery/rv-tow-night.jpg`        | `axle-towing-rv-tow-night-phoenix-az.webp` ✅          | "Axle Towing RV impound at night in Phoenix, AZ"                                 |
| `gallery/truck-with-sign.jpg`     | `axle-towing-truck-branded-signage-phoenix-az.webp` ✅ | "Axle Towing branded truck with private property signage in Phoenix, AZ"         |

**Status:** All gallery images already have optimized WebP versions in `/public/images/optimized/`. Update `lib/images.ts` references to use optimized paths.

---

### Google Image Search Optimization Tips

1. **Submit image sitemap.** The site has `app/image-sitemap.xml/` — ensure all optimized images are included with `<image:title>`, `<image:caption>`, and `<image:loc>` tags.

2. **Use structured data for images.** Add `ImageObject` schema to key pages, especially the gallery and about page. Example:

   ```json
   {
     "@type": "ImageObject",
     "url": "https://axletowing.com/images/optimized/axle-towing-hero-private-property-towing-phoenix.webp",
     "name": "Private property towing in Phoenix AZ — Axle Towing",
     "description": "Axle Towing flatbed truck removing unauthorized vehicle from private property in Phoenix, Arizona",
     "width": 1920,
     "height": 1080
   }
   ```

3. **Geo-tag images.** When uploading new photos to GBP, ensure EXIF location data is preserved (or added) for Phoenix/Apache Junction yard coordinates.

4. **Use descriptive file paths.** Current path structure `/images/optimized/axle-towing-*.webp` is excellent — Google indexes filenames as ranking signals.

5. **Captions matter.** Add visible `<figcaption>` text under key images on service pages — Google AI Overviews increasingly pull caption content.

6. **Lazy-load below-the-fold images.** Next.js `<Image>` component handles this by default with `loading="lazy"` — ensure all non-hero images use it.

7. **Preload hero images.** Add `priority={true}` to `<Image>` for above-the-fold hero images to improve LCP (Largest Contentful Paint).

---

### Page Speed Impact Analysis

| Issue                                         | Impact                                  | Fix                                                                       |
| --------------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------- |
| Legacy JPG references in `lib/images.ts`      | Medium — JPGs avg 2-4x larger than WebP | Update all image paths to `/images/optimized/*.webp`                      |
| Hero images without `priority={true}`         | High — LCP degradation up to 800ms      | Add `priority` prop to all hero `<Image>` components                      |
| Missing `width`/`height` props on some images | Medium — cumulative layout shift (CLS)  | Always declare explicit dimensions                                        |
| Gallery page loads all images eagerly         | Medium — initial page load spike        | Confirm `loading="lazy"` on gallery grid                                  |
| No next-gen format fallback for OG images     | Low — OG crawler compatibility          | Keep OG images as JPEG/PNG (social crawlers don't support WebP uniformly) |

**Target PageSpeed Scores:** Mobile ≥ 85, Desktop ≥ 95

---

## Section 2: Meta Tag Audit

### Homepage (`/`)

**Current:**

- Title: `Axle Towing & Impound — Professional Towing & Parking Management` (65 chars — too long)
- Description: From `COMPANY.description` — 251 chars (too long)

**Issues:**

- Title exceeds 60-char limit — will be truncated in SERPs
- Description is nearly double the 160-char limit
- Missing city modifier in title

**Recommended:**

```
Title (52 chars):    Axle Towing & Impound — Phoenix, AZ | Free Impound
Description (156):   Free private property towing & parking enforcement for Phoenix metro property managers. 24/7 dispatch, 30-min response. 480-288-5526.
```

**Open Graph:**

- Currently uses dynamic `/og?title=...&subtitle=...` generator — good approach
- Ensure OG image is 1200×630px and under 8MB
- Add `og:locale` = `en_US` (already present in layout.tsx ✅)

---

### Services Overview Page (`/services`)

**Current:**

- Title: `Our Services — Free Private Property Towing & Parking Enforcement` (65 chars — too long)
- Description: 215 chars — too long

**Recommended:**

```
Title (57 chars):    Services | Axle Towing — Phoenix Private Property Towing
Description (155):   Private property impounds, parking enforcement, HOA towing, apartment towing & vehicle relocation across Phoenix, AZ. All free for property owners.
```

---

### Services — Private Property Impounds (`/services/private-property-impounds`)

**Current:**

- Title: `Private Property Impound Services — Phoenix, AZ` (47 chars ✅)
- Description: `Free private property impound services for apartment complexes, HOAs, and commercial properties in Phoenix. Axle Towing removes unauthorized vehicles at no cost to property owners.` (178 chars — too long)

**Recommended:**

```
Title (47 chars):    Private Property Impound Services — Phoenix, AZ
Description (157):   Free private property impound for Phoenix apartment complexes, HOAs & commercial properties. Axle Towing removes unauthorized vehicles at zero cost to owners.
```

---

### Services — Parking Enforcement (`/services/parking-enforcement`)

**Current:**

- Title: `Parking Enforcement Services — Phoenix, AZ` (42 chars ✅)
- Description: `Professional parking enforcement for private lots, parking garages, and commercial properties in Phoenix. Patrol services, permit systems, and sticker enforcement at no cost.` (173 chars — too long)

**Recommended:**

```
Title (42 chars):    Parking Enforcement Services — Phoenix, AZ
Description (159):   Professional parking patrol, permit systems & sticker enforcement for Phoenix private lots and garages. No cost to property owners. 24/7 coverage.
```

---

### Services — HOA Towing (`/services/hoa-towing`)

**Current:**

- Title: `HOA Towing Services — Phoenix, AZ` (33 chars — too short, wastes space)
- Description: `Free towing programs for HOA communities in Phoenix. Board member education, sign posting, patrol services, and CC&R enforcement — at no cost to the HOA.` (153 chars ✅)

**Recommended:**

```
Title (55 chars):    HOA Towing & Parking Enforcement Services — Phoenix, AZ
Description (153):   Free towing programs for Phoenix HOA communities. Board education, ARS-compliant sign posting, patrol services & CC&R enforcement at zero cost to the HOA.
```

---

### Services — Apartment Towing (`/services/apartment-towing`)

**Current:**

- Title: `Apartment Towing Services — Phoenix, AZ` (39 chars — room to expand)
- Description: `Professional towing and parking enforcement for apartment complexes in Phoenix. Assigned space enforcement, visitor management, and property manager portal access — all free.` (173 chars — too long)

**Recommended:**

```
Title (59 chars):    Apartment Complex Towing & Parking Enforcement — Phoenix AZ
Description (157):   Free towing & parking enforcement for Phoenix apartment complexes. Assigned space patrol, visitor management & property manager portal. 24/7 dispatch.
```

---

### Services — Commercial Property Towing (`/services/commercial-property-towing`)

**Current:**

- Title: `Commercial Property Towing Services — Phoenix, AZ` (48 chars ✅)
- Description: `Protect your commercial property parking from unauthorized vehicles. Professional enforcement for retail centers, office parks, and strip malls in Phoenix — free for property owners.` (181 chars — too long)

**Recommended:**

```
Title (48 chars):    Commercial Property Towing Services — Phoenix, AZ
Description (155):   Protect commercial parking from unauthorized vehicles. Professional enforcement for Phoenix retail centers, office parks & strip malls — free for property owners.
```

---

### Services — Vehicle Relocations (`/services/vehicle-relocations`)

**Current:**

- Title: `Vehicle Relocation Services — Phoenix, AZ` (41 chars — room to expand)
- Description: `Professional vehicle relocation for asphalt repairs, property maintenance, and construction projects in Phoenix. Move 10 vehicles in 2 hours for $1,000. No impound needed.` (171 chars — too long)

**Recommended:**

```
Title (58 chars):    Vehicle Relocation Services for Property Maintenance — Phoenix
Description (158):   Move vehicles for parking lot repaving, asphalt repairs & construction in Phoenix. 10 vehicles relocated in 2 hours from $1,000. Call 480-288-5526.
```

---

### About Page (`/about`)

**Current:**

- Title: `About Axle Towing & Impound - Phoenix Private Property Towing Experts` (70 chars — too long)
- Description: 245 chars — far too long

**Recommended:**

```
Title (56 chars):    About Axle Towing & Impound | Phoenix Towing Experts
Description (156):   Axle Towing & Impound — Phoenix-based private property towing specialists since 2021. Two impound yards, 30+ years combined experience, 24/7 dispatch.
```

---

### Contact Page (`/contact`)

**Current:**

- Title: `Contact Us - Get a Free Property Assessment` (44 chars — room to expand)
- Description: `Contact Axle Towing & Impound for free private property towing and parking enforcement in the Phoenix metro area. Call 480-288-5526 or request a free property assessment online.` (177 chars — too long)

**Recommended:**

```
Title (58 chars):    Contact Axle Towing & Impound | Phoenix, AZ | 480-288-5526
Description (157):   Request a free property assessment for private property towing & parking enforcement in Phoenix. Call 480-288-5526 or fill out our online form — 24/7.
```

---

### FAQ Page (`/faq`)

**Current:**

- Title: `FAQ - Frequently Asked Questions About Towing in Phoenix AZ` (59 chars ✅)
- Description: `Frequently asked questions about private property towing, parking enforcement, Arizona towing laws, and Axle Towing & Impound services for property managers and vehicle owners in Phoenix, Arizona.` (196 chars — too long)

**Recommended:**

```
Title (59 chars):    FAQ - Frequently Asked Questions About Towing in Phoenix AZ
Description (156):   Answers to common questions about private property towing, parking enforcement, Arizona towing laws & Axle Towing services for Phoenix metro property managers.
```

---

### Open Graph Tags — Site-Wide Assessment

| Tag                 | Status                     | Notes                                                                |
| ------------------- | -------------------------- | -------------------------------------------------------------------- |
| `og:type`           | ✅ Present                 | `website` on homepage, should be `article` on blog posts             |
| `og:title`          | ✅ Present                 | Follow same 60-char guideline as meta title                          |
| `og:description`    | ✅ Present                 | Same 160-char limit applies                                          |
| `og:image`          | ✅ Present                 | Dynamic OG generator at `/og?title=...&subtitle=...` — good approach |
| `og:image:width`    | ✅ 1200                    | Correct                                                              |
| `og:image:height`   | ✅ 630                     | Correct                                                              |
| `og:locale`         | ✅ `en_US`                 | Correct                                                              |
| `og:site_name`      | ✅ `Axle Towing & Impound` | Correct                                                              |
| `og:url`            | ✅ Present per page        | All service pages include canonical URL ✅                           |
| `twitter:card`      | ✅ `summary_large_image`   | Correct                                                              |
| `twitter:site`      | ❌ Missing                 | Add `@axletowing` handle if Twitter account exists                   |
| `twitter:image:alt` | ❌ Missing                 | Add descriptive alt text to Twitter card images                      |

---

### Schema Markup Recommendations

#### Currently Implemented ✅

| Schema Type      | Location                         | Status                                     |
| ---------------- | -------------------------------- | ------------------------------------------ |
| `Organization`   | `layout.tsx` (global)            | ✅ Implemented via `organizationSchema()`  |
| `LocalBusiness`  | Homepage, contact, service pages | ✅ Implemented via `localBusinessSchema()` |
| `TowingService`  | `layout.tsx` (global)            | ✅ Implemented via `towingServiceSchema()` |
| `FAQPage`        | FAQ page, service pages          | ✅ Implemented via `faqSchema()`           |
| `Service`        | Individual service pages         | ✅ Implemented via `serviceSchema()`       |
| `BreadcrumbList` | Service pages, blog posts        | ✅ Implemented via `breadcrumbSchema()`    |
| `WebSite`        | `layout.tsx` (global)            | ✅ Implemented via `websiteSchema()`       |

#### Missing — Implement These

**1. `ImageObject` Schema (Priority: HIGH)**

Add to about page, gallery page, and service pages to boost Google Image Search:

```json
{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "url": "https://axletowing.com/images/optimized/axle-towing-team-phoenix-arizona.webp",
  "name": "Axle Towing & Impound Team — Phoenix, AZ",
  "description": "The professional towing crew at Axle Towing & Impound in Phoenix, Arizona",
  "width": 1200,
  "height": 800,
  "representativeOfPage": true,
  "creator": {
    "@type": "Organization",
    "name": "Axle Towing & Impound"
  }
}
```

**2. `AggregateRating` Schema (Priority: HIGH)**

Unlocks gold star ratings in SERPs — requires collecting real review data:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Axle Towing & Impound",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

_Note: Only add when real Google review data is available. Do not fabricate._

**3. `GeoCoordinates` on `LocalBusiness` (Priority: MEDIUM)**

Add precise coordinates for both yard locations to strengthen local map pack signals:

```json
{
  "@type": "LocalBusiness",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "33.4253",
    "longitude": "-111.5428"
  }
}
```

_(Apache Junction yard — 1151 W. Apache Trail: lat/lng needs verification)_

**4. `Service` Schema with `areaServed` (Priority: MEDIUM)**

Add explicit service area schema to each city landing page:

```json
{
  "@type": "Service",
  "name": "Private Property Towing in Scottsdale, AZ",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Axle Towing & Impound"
  },
  "areaServed": {
    "@type": "City",
    "name": "Scottsdale",
    "addressRegion": "AZ"
  }
}
```

**5. `HowTo` Schema for Process Pages (Priority: LOW)**

For content like vehicle relocation setup guides, add `HowTo` schema to win featured snippet real estate:

```json
{
  "@type": "HowTo",
  "name": "How to Set Up Vehicle Relocation for Parking Lot Repaving",
  "step": [
    {
      "@type": "HowToStep",
      "text": "Call Axle Towing at 480-288-5526 at least 48 hours before paving begins."
    },
    {
      "@type": "HowToStep",
      "text": "Provide the property address and number of vehicles to be relocated."
    },
    { "@type": "HowToStep", "text": "Our team coordinates notices to tenants or property owners." },
    {
      "@type": "HowToStep",
      "text": "Vehicles are safely relocated to a designated staging area on relocation day."
    }
  ]
}
```

---

### Priority Fixes — Ranked 1–10

| Rank | Fix                                                                                   | Impact | Effort | Page(s) Affected         |
| ---- | ------------------------------------------------------------------------------------- | ------ | ------ | ------------------------ |
| 1    | Shorten homepage meta title to under 60 chars with city modifier                      | High   | Low    | Homepage                 |
| 2    | Shorten all meta descriptions over 160 chars (6 service pages, about, contact)        | High   | Low    | 8+ pages                 |
| 3    | Update `lib/images.ts` to reference `/images/optimized/*.webp` instead of legacy JPGs | High   | Low    | Site-wide                |
| 4    | Add `priority={true}` to all hero `<Image>` components to improve LCP                 | High   | Low    | All pages with heroes    |
| 5    | Add `AggregateRating` schema once Google review data is collected                     | High   | Medium | Homepage + service pages |
| 6    | Add `ImageObject` schema to About and Gallery pages                                   | Medium | Medium | About, Gallery           |
| 7    | Add `twitter:image:alt` to all Twitter card meta tags                                 | Medium | Low    | Site-wide (`layout.tsx`) |
| 8    | Expand HOA Towing page title from 33 to 55 chars to include more keywords             | Medium | Low    | `/services/hoa-towing`   |
| 9    | Add `GeoCoordinates` to `LocalBusiness` schema for both yard addresses                | Medium | Low    | Schema files             |
| 10   | Add `Service` + `areaServed` schema to each of the 8 priority city landing pages      | Medium | Medium | Location pages           |

---

## Section 3: Implementation Checklist

### Phase 1: Quick Wins (1–2 hours)

#### Meta Tag Fixes

- [ ] Edit `lib/constants.ts` — shorten `COMPANY.description` to under 160 chars
- [ ] Edit `src/app/layout.tsx` — update default title template to include city: `Axle Towing & Impound — Phoenix, AZ`
- [ ] Edit `src/lib/service-data.ts` — trim all `metaDescription` fields over 160 chars (see recommended text above)
- [ ] Edit `src/app/about/page.tsx` — update `metadata.title` to under 60 chars
- [ ] Edit `src/app/contact/page.tsx` — update `metadata.title` and trim `metadata.description`
- [ ] Edit `src/app/faq/page.tsx` — trim `metadata.description`
- [ ] Edit `src/app/services/page.tsx` — trim title and description

#### Image Path Updates

- [ ] Edit `src/lib/images.ts` — update all image paths to reference `/images/optimized/axle-towing-*.webp`
- [ ] Verify all 38 optimized WebP images load correctly at their new paths
- [ ] Add `priority={true}` to hero `<Image>` components on homepage, service pages, and about page

---

### Phase 2: Schema Additions (2–4 hours)

- [ ] Add `ImageObject` schema to `src/app/about/page.tsx` for team and office photos
- [ ] Add `ImageObject` schema to `src/app/gallery/page.tsx` for all 13 gallery images
- [ ] Add `GeoCoordinates` to `localBusinessSchema()` in `src/lib/schema.ts` for both yard addresses
- [ ] Add `areaServed` with city `Service` schema to top 8 city landing pages (Phoenix, Scottsdale, Gilbert, Mesa, Chandler, Tempe, Glendale, Apache Junction)
- [ ] Add `twitter:image:alt` metadata to `src/app/layout.tsx` Twitter card configuration

---

### Phase 3: New Image Creation (Ongoing)

For the 10 priority missing images:

**Tools to use:**

- **Image editing:** Canva Pro, Adobe Photoshop, or GIMP (free)
- **JPG → WebP conversion:** [Squoosh.app](https://squoosh.app) (free, browser-based) or `cwebp` CLI tool
- **Batch conversion (command line):**
  ```bash
  # Convert all JPGs in a directory to WebP at quality 80
  for f in *.jpg; do cwebp -q 80 "$f" -o "${f%.jpg}.webp"; done
  ```
- **Compression check:** [TinyPNG](https://tinypng.com) for PNG/JPG pre-processing before WebP conversion
- **Size check:** [PageSpeed Insights](https://pagespeed.web.dev) — target < 200KB per image, < 80KB for thumbnails
- **EXIF stripping:** `exiftool -all= filename.webp` (strip metadata to reduce file size)

**Naming checklist before upload:**

- [ ] Filename uses `axle-towing-` prefix
- [ ] Service/context keyword included (e.g., `hoa-towing`, `vehicle-relocation`)
- [ ] City name included (e.g., `phoenix`, `scottsdale`, `chandler`)
- [ ] State included (`arizona` or `az`)
- [ ] Extension is `.webp` (not `.jpg` or `.png`)
- [ ] No spaces — use hyphens only
- [ ] All lowercase

---

### Phase 4: Verification Steps

After implementing all changes:

**Meta Tag Verification:**

- [ ] Run [Google Rich Results Test](https://search.google.com/test/rich-results) on homepage, all service pages, and FAQ page
- [ ] Run [Schema.org Validator](https://validator.schema.org) on all pages with new schema additions
- [ ] Check title/description lengths with [SERP Snippet Preview Tool](https://www.seoptimer.com/serp-snippet-optimization-tool)
- [ ] Verify OG tags with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Verify Twitter cards with [Twitter Card Validator](https://cards-dev.twitter.com/validator)

**Image Verification:**

- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev) on homepage and top 3 service pages — target LCP < 2.5s
- [ ] Verify image sitemap at `https://axletowing.com/image-sitemap.xml` includes all optimized images
- [ ] Submit image sitemap to Google Search Console
- [ ] Check for broken image references using browser dev tools Network tab (filter by "Img")

**Post-Deploy Checklist:**

- [ ] Deploy changes to Railway: `cd /opt/agency-workspace/axel-towing/website && railway up --detach`
- [ ] Verify live site at [axletowing.com](https://axletowing.com)
- [ ] Request Google re-crawl via Search Console for updated pages
- [ ] Monitor Core Web Vitals in Google Search Console over next 7 days

---

## Summary: Highest ROI Actions (Executive Summary)

The site already has an excellent image SEO foundation — 38 optimized WebP images with proper naming conventions, and comprehensive schema markup including LocalBusiness, TowingService, FAQPage, and BreadcrumbList.

**The biggest opportunities are:**

1. **Fix meta descriptions** — 6 service pages, the About page, and the Contact page all have descriptions over 160 chars that are being truncated in SERPs.
2. **Shorten the homepage title** — Currently 65 chars; Google truncates at ~60. A shorter title with a city modifier converts better.
3. **Migrate `lib/images.ts` to WebP paths** — All optimized images exist; the constants file still points to legacy JPGs.
4. **Add hero image `priority`** — Quick performance win for LCP across all page heroes.
5. **Add 3 missing images** (impound yard exterior, property manager consultation, Scottsdale HOA patrol) — These fill content gaps on high-converting pages.

---

_Audit completed March 24, 2026. SEO recommendations based on KEYWORD-RESEARCH.md, AI-SEO-STRATEGY.md, and direct codebase analysis._
