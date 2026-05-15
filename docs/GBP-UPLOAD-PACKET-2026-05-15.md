# GBP Upload Packet

Date: 2026-05-15
Client: Axle Towing & Impound

## Source Guardrails

- Source: `Julian <> Elliott (Axle Towing) - 2026/04/20 17:07 PDT - Notes by Gemini`
- Source: `2026-03-17 Elliott Towing - Website Strategy Meeting`
- Use `24/7` only for towing dispatch.
- Do not imply the office or vehicle-release process is available 24/7.
- Avoid legal-advice captions, competitor-comparison language, storage-fee claims, and unverified payment-method claims.

## Storage

Media folder:

`data/gbp/axletowing.com/2026-05-15/media/gbp-ready/`

Manifest:

`data/gbp/axletowing.com/2026-05-15/media/gbp-ready/gbp-media-manifest.json`

Every file has a `.metadata.json` sidecar and macOS xattrs for client, domain, source, GBP photo type, service intent, SEO keywords, AI SEO entities, and alt text.

## Upload Order

### Both Profiles

1. `axle-towing-logo-google-business-profile.png`
   - GBP type: Logo
   - Purpose: brand consistency and entity recognition
   - Profiles: Apache Junction + Phoenix

2. `axle-towing-cover-branded-tow-truck-phoenix-apache-junction.jpg`
   - GBP type: Cover
   - Purpose: first visual signal for towing service
   - Profiles: Apache Junction + Phoenix

3. `axle-towing-private-property-impound-service.jpg`
   - GBP type: Photos at work
   - Purpose: private property towing relevance
   - Profiles: Apache Junction + Phoenix

4. `axle-towing-abandoned-vehicle-removal-apartment-property.jpg`
   - GBP type: Photos at work
   - Purpose: abandoned vehicle removal search intent
   - Profiles: Apache Junction + Phoenix

5. `axle-towing-apartment-complex-parking-enforcement.jpg`
   - GBP type: Photos at work
   - Purpose: apartment manager search intent
   - Profiles: Apache Junction + Phoenix

6. `axle-towing-hoa-parking-enforcement.jpg`
   - GBP type: Photos at work
   - Purpose: HOA parking enforcement search intent
   - Profiles: Apache Junction + Phoenix

7. `axle-towing-commercial-property-towing.jpg`
   - GBP type: Photos at work
   - Purpose: retail / office / commercial lot relevance
   - Profiles: Apache Junction + Phoenix

8. `axle-towing-compliant-signage-installation.jpg`
   - GBP type: Photos at work
   - Purpose: signage installation proof
   - Profiles: Apache Junction + Phoenix

9. `axle-towing-secure-impound-lot-arizona.jpg`
   - GBP type: Exterior / facility
   - Purpose: impound lot and secure vehicle storage relevance
   - Profiles: Apache Junction + Phoenix

## Hold For Currentness Check

These may be useful, but should be verified as current/client-approved before upload:

- `axle-towing-office-vehicle-release-hours.jpg`
- `axle-towing-team-arizona.jpg`
- `axle-towing-paid-vehicle-relocation-service.jpg`

## Chrome Live Steps

1. Open `https://business.google.com/locations`.
2. Confirm both profiles show verified.
3. Open Apache Junction profile.
4. Upload logo, cover, and work photos from `gbp-ready`.
5. Capture screenshot after upload.
6. Repeat for Phoenix profile.
7. Do not alter main hours unless Google offers a clearly separate dispatch/service-hours field.
8. If upload fails because file access is blocked, enable file access for the Codex Chrome Extension in `chrome://extensions`.

## Verification

After each profile upload:

- Screenshot the uploaded-media view.
- Save under `data/gbp/axletowing.com/2026-05-15/screenshots/`.
- Run:

```bash
scripts/gbp-evidence-inventory.js
```
