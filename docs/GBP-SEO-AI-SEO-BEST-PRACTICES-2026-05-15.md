# GBP SEO + AI SEO Best Practices

Date: 2026-05-15
Client: Axle Towing & Impound

## Sources

- Google Business Profile Help: Tips to improve your local ranking on Google
  - `https://support.google.com/business/answer/7091`
- Google Business Profile Help: Manage your Business Profile photos & videos
  - `https://support.google.com/business/answer/6103862`
- Google Business Profile Help: Tips for business-specific photos on your Business Profile
  - `https://support.google.com/business/answer/6123536`
- Client source: `Julian <> Elliott (Axle Towing) - 2026/04/20 17:07 PDT - Notes by Gemini`
- Client source: Fireflies meeting `2026-03-17 Elliott Towing - Website Strategy Meeting`

## Google Ranking Levers To Execute

Google says local results are primarily driven by relevance, distance, and prominence. The practical profile work is:

- Keep business information complete and accurate: address, phone, category, hours, website, service details, and attributes.
- Keep hours current, including special hours when needed.
- Respond to reviews because helpful replies make the business stand out.
- Add photos and videos that truthfully show the business, services, team, exterior, and interior.
- Build prominence with reviews, positive ratings, trusted mentions, links, and consistent local citations.

## Axle-Specific Guardrails

- Say `24/7 towing dispatch` only where it cannot be confused with vehicle release or office hours.
- Do not set the main profile hours to `Open 24 hours` unless Google offers a clear separate release-hours distinction.
- Keep office / vehicle-release hours separate from dispatch availability.
- Add `Abandoned vehicle removal` because Elliott identified it as a target search phrase.
- Avoid legal-advice content, competitor-comparison content, and misleading accepted-payment details.

## Media Requirements

Google media standards for GBP:

- Format: JPG or PNG.
- Size: 10 KB to 5 MB.
- Recommended resolution: 720 x 720 or higher.
- Minimum resolution: 250 x 250.
- Quality: in focus, well lit, real, and not heavily altered or AI-filtered.

Google-recommended photo types to cover:

- Logo.
- Cover photo.
- Exterior photos.
- Interior photos.
- Photos at work.
- Team photos.

## Storage Implementation

Created a GBP-ready media library:

- `data/gbp/axletowing.com/2026-05-15/media/gbp-ready/gbp-media-manifest.json`
- 12 upload-ready JPG/PNG assets copied from the repository.
- Each asset has a `.metadata.json` sidecar.
- Each asset has macOS xattrs for:
  - `ai_acrobatics.client`
  - `ai_acrobatics.domain`
  - `ai_acrobatics.capture_date`
  - `ai_acrobatics.source`
  - `ai_acrobatics.gbp_photo_type`
  - `ai_acrobatics.service_intent`
  - `ai_acrobatics.local_seo_keywords`
  - `ai_acrobatics.ai_seo_entities`
  - `ai_acrobatics.alt_text`

Created screenshot evidence metadata:

- `data/gbp/axletowing.com/2026-05-15/screenshots/screenshot-evidence-manifest.json`
- 9 screenshot sidecars generated.
- Each screenshot has recall metadata for client, location, GBP surface, evidence intent, and AI SEO tags.

## Upload Priority

1. Logo: `axle-towing-logo-google-business-profile.png`
2. Cover: `axle-towing-cover-branded-tow-truck-phoenix-apache-junction.jpg`
3. Abandoned vehicle removal: `axle-towing-abandoned-vehicle-removal-apartment-property.jpg`
4. Private property impound: `axle-towing-private-property-impound-service.jpg`
5. Apartment complex towing: `axle-towing-apartment-complex-parking-enforcement.jpg`
6. HOA parking enforcement: `axle-towing-hoa-parking-enforcement.jpg`
7. Commercial property towing: `axle-towing-commercial-property-towing.jpg`
8. Signage installation: `axle-towing-compliant-signage-installation.jpg`
9. Secure impound lot: `axle-towing-secure-impound-lot-arizona.jpg`
10. Team / office photos after confirming they are current and client-approved.

## Next Live GUI Actions

- Upload logo and cover photo to both profiles if Google accepts the media.
- Upload service-specific work photos to both profiles.
- Add or verify `Abandoned vehicle removal` in Services.
- Review and reject off-strategy suggested services such as notary and repair shop.
- Leave main hours unchanged unless a non-misleading dispatch-specific field exists.
- Capture after screenshots and rerun:
  - `scripts/gbp-evidence-inventory.js`
  - `scripts/gbp-media-inventory.js`
