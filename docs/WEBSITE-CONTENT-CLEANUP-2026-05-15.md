# Website Content Cleanup

Date: 2026-05-15
Client: Axle Towing & Impound

## Source

- Gemini meeting note from 2026-04-20.
- Fireflies meeting note from 2026-03-17.

## Cleanup Principle

Keep the website focused on property managers, HOA boards, apartments, and commercial/private-property towing. Remove public content that helps vehicle owners dispute tows, sends users toward competitors, or makes unverified fee/payment claims.

## Found In Repo

Search found legal/statute-heavy and competitor-heavy content in:

- `website/src/lib/city-seo-data.ts`
- `website/src/lib/location-data.ts`
- `website/src/lib/service-data.ts`
- `website/src/lib/email-templates.ts`
- `website/src/lib/workflows/configs/*.ts`
- `docs/GBP-OPTIMIZATION-CHECKLIST.md`
- `dashboard/data/meetings.ts`
- `dashboard/data/services.ts`

## Priority Cleanup Queue

### P0: Remove Customer-Facing Legal Advice

Replace detailed statute explanations with softer operational wording.

Examples to remove or rewrite:

- detailed ARS explanations
- exact signage statutory requirements
- "what Arizona law says" style content
- legal dispute guidance
- language that tells vehicle owners how to argue about a tow

Preferred replacement:

`Axle Towing helps property managers set up clear, documented parking enforcement programs and signage workflows. Call 480-288-5526 to review your property.`

### P0: Remove Competitor-Comparison Content

Remove customer-facing comparison tables, competitor lists, and "best towing companies" style content.

Reason: Elliott did not want the site teaching customers about competing tow companies.

### P0: Fix 24/7 Language

Allowed:

`24/7 towing dispatch`

Not allowed:

`Open 24/7` when it can imply vehicle release or office visits.

Preferred:

`Towing dispatch is available 24/7. Vehicle release and office visits are handled during posted office hours or by arrangement.`

### P1: Remove Unverified Payment / Storage Fee Details

Remove or soften:

- exact storage-fee amounts
- money order / cashier's check claims
- "accepted payment" details not confirmed by Elliott

### P1: Add Abandoned Vehicle Removal

Create or strengthen a dedicated abandoned vehicle removal service path.

Target page:

`/services/abandoned-vehicle-removal`

Target intent:

- abandoned vehicle removal
- abandoned car towing
- apartment abandoned vehicle removal
- HOA abandoned vehicle towing
- private property abandoned vehicle removal

### P1: Remove Branded Merchandise

Remove client-facing branded merchandise references from dashboards/proposals unless explicitly used internally.

## Acceptance Criteria

- No public pages explain detailed towing-law dispute strategy.
- No public page links users to competitor comparisons.
- 24/7 is consistently tied to dispatch, not release hours.
- Abandoned vehicle removal has a dedicated, indexable service page or link.
- PPP dashboard reflects the cleanup as completed or queued with evidence.

## Implemented Tonight

- Added a dedicated, indexable service page:
  - `website/src/app/services/abandoned-vehicle-removal/page.tsx`
  - Canonical: `https://axletowing.com/services/abandoned-vehicle-removal`
- Added abandoned vehicle removal to the service grid and structured service data:
  - `website/src/lib/constants.ts`
  - `website/src/lib/service-data.ts`
  - `website/src/lib/schema.ts`
  - `website/src/components/ServicePageTemplate.tsx`
- Cleaned global SEO / AI SEO metadata so snippets target property-manager towing, parking enforcement, abandoned vehicle removal, paid relocation, and 24/7 towing dispatch.
- Removed risky global keyword signals:
  - `best towing company Phoenix`
  - `Arizona towing laws`
  - `tow away zone Phoenix`
- Rewrote the global AI citation reference so it states:
  - towing dispatch is 24/7
  - vehicle release and office visits follow posted hours or arrangement
- Changed high-visibility header/footer language from broad 24/7 availability to dispatch-specific wording.
- Set the competitor/comparison-style routes to `noindex, follow` while they are rewritten or retired:
  - `/compare`
  - `/tow-service-phoenix-az`
- Softened private-property and abandoned-vehicle service copy away from legal-advice/statute-heavy phrasing and toward documented operational setup.

## Verification

- `npm run build` passed on 2026-05-15.
- Local dev verification confirmed `/services/abandoned-vehicle-removal` renders with the new title, meta description, global AI citation reference, structured data, and 24/7 dispatch/release-hours distinction.
- Local sitemap verification confirmed:
  - `https://axletowing.com/services/abandoned-vehicle-removal`
