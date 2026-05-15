# GBP Live Execution Log

Date: 2026-05-15
Client: Axle Towing & Impound

## Completed Tonight

- Discarded the unsaved 24/7 main-hours edit prompt in Google Business Profile Manager.
- Captured clean GBP locations state:
  - `data/gbp/axletowing.com/2026-05-15/screenshots/gbp-businesses-list-clean-state-2026-05-15.png`
- Generated screenshot evidence sidecars and metadata:
  - `data/gbp/axletowing.com/2026-05-15/screenshots/screenshot-evidence-manifest.json`
- Generated GBP-ready media storage:
  - `data/gbp/axletowing.com/2026-05-15/media/gbp-ready/gbp-media-manifest.json`
- Copied 12 JPG/PNG profile media candidates into storage.
- Added `.metadata.json` sidecars for every media candidate.
- Added macOS xattrs to screenshots and media files for client, domain, capture date, source, service intent, local SEO keywords, AI SEO entities, and recall tags.
- Updated the main GUI capture manifest with the media storage paths and Google best-practice layer.
- Created the full non-live execution pack for tonight:
  - `docs/GBP-UPLOAD-PACKET-2026-05-15.md`
  - `docs/GBP-QA-SEED-SET-2026-05-15.md`
  - `docs/GBP-POST-CALENDAR-2026-05-15.md`
  - `docs/GBP-REVIEW-RESPONSE-QUEUE-2026-05-15.md`
  - `docs/WEBSITE-CONTENT-CLEANUP-2026-05-15.md`
  - `docs/PPP-CLIENT-UPDATE-2026-05-15.md`
- Updated Obsidian and Linear with the artifact pack and acceptance criteria.
- Implemented the website-side SEO push for tonight:
  - added `/services/abandoned-vehicle-removal`
  - added abandoned vehicle removal to service grid, sitemap, and structured service data
  - cleaned global SEO / AI SEO metadata
  - changed header/footer 24/7 copy to dispatch-specific language
  - set comparison-style pages to `noindex, follow` until rewritten or retired
  - verified with `npm run build`

## Google Best Practices Applied

- Complete and accurate profile data improves relevance.
- Current hours and special hours reduce mismatch risk.
- Reviews and helpful owner replies support prominence and conversion.
- Real photos and videos help customers understand the business.
- Local ranking is driven by relevance, distance, and prominence.
- GBP media should be JPG/PNG, 10 KB-5 MB, at least 250x250, preferably 720x720 or higher, in focus, well lit, and truthful.

## Meeting-Backed Guardrails

- `24/7` means towing dispatch, not vehicle release or office visits.
- Do not save `Open 24 hours` as main hours unless Google provides a clear separate release-hours distinction.
- Prioritize abandoned vehicle removal, private property impounds, HOA enforcement, apartment enforcement, commercial property towing, vehicle relocation, signage, and impound/storage.
- Avoid legal-advice content, competitor comparisons, and unverified payment/storage-fee details.

## Website SEO State

- Abandoned vehicle removal now has a dedicated service path and appears in the generated sitemap.
- Global AI citation metadata now says towing dispatch is available 24/7, while vehicle release and office visits follow posted hours or arrangement.
- Risky global keywords were removed from the root metadata:
  - `best towing company Phoenix`
  - `Arizona towing laws`
  - `tow away zone Phoenix`
- Public pages that were primarily comparison-style were kept crawlable for links but removed from search indexing while cleanup continues:
  - `/compare`
  - `/tow-service-phoenix-az`

## Live GBP State

- Both profiles are verified and visible in Google Business Profile Manager.
- Phoenix phone edit to `480-288-5526` was previously submitted and is pending Google review.
- There are still `1 Google update` indicators visible for each profile.
- Main hours were not saved as 24/7.

## Current Blocker

Chrome/Computer Use became unreliable for profile row clicks after the clean-state capture:

- Element IDs were visible but click calls returned `invalid element ID`.
- Coordinate clicks returned macOS `noWindowsAvailable`.
- Keyboard navigation and URL entry still worked, but the profile detail page intermittently rendered blank after direct navigation.

Because GBP edits are externally visible, I did not force live service/photo changes through an unreliable click path. The next live pass should either use a refreshed Chrome control session, the Google Business Profile API after schema/auth verification, or a manual assisted screen session.

Chrome plugin health checks passed after this blocker:

- Chrome is running.
- Codex Chrome Extension is installed and enabled.
- Native host manifest exists and allows the extension origin.
- Direct browser-client tab tools were not exposed in this active tool set, so live upload/save actions remain queued.

## Prepared Upload Set

Upload priority:

1. `axle-towing-logo-google-business-profile.png`
2. `axle-towing-cover-branded-tow-truck-phoenix-apache-junction.jpg`
3. `axle-towing-abandoned-vehicle-removal-apartment-property.jpg`
4. `axle-towing-private-property-impound-service.jpg`
5. `axle-towing-apartment-complex-parking-enforcement.jpg`
6. `axle-towing-hoa-parking-enforcement.jpg`
7. `axle-towing-commercial-property-towing.jpg`
8. `axle-towing-compliant-signage-installation.jpg`
9. `axle-towing-secure-impound-lot-arizona.jpg`

Hold for client/currentness check:

- `axle-towing-office-vehicle-release-hours.jpg`
- `axle-towing-team-arizona.jpg`
- `axle-towing-paid-vehicle-relocation-service.jpg`

## Commands Run

```bash
scripts/gbp-media-inventory.js
scripts/gbp-evidence-inventory.js
```
