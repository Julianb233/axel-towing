# Google Business Profile Live Audit

Date: 2026-05-15
Client: Axle Towing & Impound
Auditor: AI Acrobatics / Codex Computer Control
Source: Google Business Profile Manager in Julian's local Chrome profile, signed in as `julian@aiacrobatics.com`

## Summary

We have manager access to both Axle Towing Google Business Profiles. Both profiles are verified and can be managed from Google Search / Business Profile Manager.

The highest-priority issue is still live: the Phoenix profile phone number is wrong. Both locations also show regular business hours as Monday-Friday 9 AM-5 PM and closed weekends. The client-approved direction is to avoid showing the office as simply open 24/7. GBP should distinguish 24/7 towing dispatch from limited office/vehicle-release availability so vehicle owners do not assume they can retrieve a car at any time.

Client source: Google Drive / Gemini note `Julian <> Elliott (Axle Towing) - 2026/04/20 17:07 PDT - Notes by Gemini`. Elliott specifically said Axle is towing 24/7, but the office is not open 24/7 for releases, and suggested release-only availability such as Monday-Friday 9 AM-5 PM.

## Evidence Captured

Screenshots are stored under:

`data/gbp/axletowing.com/2026-05-15/screenshots/`

- `gbp-businesses-list-2026-05-15.png`
- `gbp-apache-junction-profile-2026-05-15.png`
- `gbp-apache-junction-business-info-2026-05-15.png`
- `gbp-apache-junction-services-2026-05-15.png`
- `gbp-phoenix-profile-2026-05-15.png`
- `gbp-phoenix-business-info-2026-05-15.png`
- `gbp-phoenix-services-2026-05-15.png`

Each screenshot has macOS xattr metadata:

- `ai_acrobatics.client=Axle Towing`
- `ai_acrobatics.domain=axletowing.com`
- `ai_acrobatics.capture_date=2026-05-15`
- `ai_acrobatics.source=Google Business Profile Manager via local Chrome`

## Business Manager State

- Business count: 2
- Verified count: 2
- Google updates: 1 pending update per location
- Missing store codes: 1
- Profiles:
  - Axle Towing & Impound, 1151 W Apache Trail, Apache Junction, AZ 85120
  - Axle Towing & Impound, 320 East Pioneer St, Phoenix, AZ 85040

## Apache Junction Profile

Live visible profile:

- Rating: 2.8
- Reviews: 258 Google reviews
- Category shown publicly: Towing service in Apache Junction, Arizona
- Website: `https://axletowing.com/`
- Phone: `(480) 288-5526`
- Hours shown publicly: Closed, opens 9 AM Friday; confirmed by this business 3 weeks ago
- Short public summary: Towing and storage service company serving the Apache Junction area
- Profile strength: Looks good
- Customer interactions shown in manager panel: 2,403

Business information:

- Name: Axle Towing & Impound
- Primary category: Towing service
- Additional categories: Parking lot, Auto wrecker, Property maintenance, Automobile storage facility
- Opening date: April 1, 2021
- Website: `https://axletowing.com/`
- Chat: not enabled
- Social profiles: not added
- Service area shown:
  - Mesa
  - Tempe
  - Gilbert
  - Phoenix
  - Avondale
  - Chandler
  - Florence
  - Glendale
  - Maricopa
  - Guadalupe
  - Cave Creek
  - Scottsdale
  - Gold Canyon
  - Queen Creek
  - San Tan Valley
  - Apache Junction
  - Sun Lakes
  - Queen Valley
  - Fountain Hills
  - Laveen Village
- Hours:
  - Sunday closed
  - Monday-Friday 9 AM-5 PM
  - Saturday closed
- More hours: not configured for dispatch, office, pickup, access, or online service hours
- From the business: not configured
- Accessibility: add/verify
- Amenities: add/verify
- Crowd: add/verify
- Service options: add/verify

Service update risk:

Google shows services changed based on feedback from Google users or other sources. Current list includes useful entries like Private Property Impound, Parking Enforcement, Vehicle Recovery, Roadside Assistance, and 24/7 Emergency Towing Services, but also questionable/off-strategy entries like Repair Shop, Notary Public, and Notary Service. These should be reviewed before accepting, rejecting, or cleaning up.

## Phoenix Profile

Live visible profile:

- Rating: 3.0
- Reviews: 4 Google reviews
- Category shown publicly: Towing service in Phoenix, Arizona
- Website: `https://axletowing.com/`
- Phone: `(623) 401-2537`
- Hours shown publicly: Closed, opens 9 AM Friday; confirmed by this business 3 weeks ago
- Profile strength: Complete Info
- Customer interactions shown in manager panel: 664

Business information:

- Name: Axle Towing & Impound
- Primary category: Towing service
- Additional categories: Parking lot, Auto wrecker, Property maintenance, Automobile storage facility
- Opening date: January 10, 2025
- Phone: `(623) 401-2537`
- Website: `https://axletowing.com/`
- Chat: not enabled
- Social profiles: not added
- Business location: 320 East Pioneer St, Phoenix, AZ 85040
- Service area shown:
  - Tempe
  - Phoenix
  - Chandler
  - Glendale
  - Tolleson
- Hours:
  - Sunday closed
  - Monday-Friday 9 AM-5 PM
  - Saturday closed
- More hours: not configured for dispatch, office, pickup, access, or online service hours
- Accessibility: Google-updated wheelchair accessible parking lot and entrance
- Parking: free parking lot, on-site parking, no paid street/lot/garage, no free street/garage
- Payments: accepts debit cards, MasterCard, not cash-only
- From the business, amenities, crowd, place page attributes, and service options: not configured

Services:

- Categories are present, but services visible under the primary category are thin:
  - Car towing
  - Car lockouts
  - Local hauling
  - Private Impounds
  - Parking Enforcement
- Missing or not visible from the inspected services panel:
  - Apartment complex towing
  - HOA parking enforcement
  - Commercial property towing
  - Abandoned vehicle removal
  - Vehicle relocation as paid service
  - Compliant towing signage installation
  - Monthly enforcement reports
  - 24/7 private property dispatch

## Priority Fixes

### P0: Fix Phoenix phone number

Change Phoenix from `(623) 401-2537` to `(480) 288-5526`, unless Elliott confirms that the 623 number is a controlled forwarding/answering line. Until confirmed, treat it as a lead leak.

### P0: Fix hours posture on both profiles

The profiles currently tell Google and searchers the business is closed after 5 PM and on weekends. Do not solve this by setting main GBP hours to open 24 hours without a release-hours split. The meeting-backed setup is:

- Main hours: keep office / vehicle-release availability visible, currently Monday-Friday 9 AM-5 PM and closed weekends, unless Elliott approves a different release schedule.
- Public description/services/posts: state that towing dispatch is available 24/7.
- More hours: add the closest supported GBP label for towing dispatch/service availability if Google supports it. Do not use a misleading "pickup" or "access" label for dispatch.
- Q&A: add an approved answer that says towing dispatch is available 24/7, while vehicle releases are handled during office/release hours or by arrangement.

Do not save public hours changes unless the screen clearly preserves this dispatch vs release-hours distinction.

### P1: Clean service lists

Keep towing, private property, parking enforcement, impound, abandoned vehicle, vehicle relocation, signage, and property-manager services. Remove or reject off-strategy services like Notary Public, Notary Service, Repair Shop, Fuel Delivery, and unrelated roadside items unless Elliott explicitly wants those offered.

### P1: Add missing conversion fields

- Chat/messaging, if it can route to a monitored channel.
- Social profiles.
- Booking/appointment URL, preferably `https://axletowing.com/get-quote` or a dedicated property-manager quote URL.
- Directions/map embed to website if useful.
- Store code for the missing location.

### P1: Review and reputation recovery

- Apache Junction has 258 reviews at 2.8.
- Phoenix has 4 reviews at 3.0.
- Read and respond to all recent negative reviews from manager view.
- Build a review request cadence for property-manager/HOA/commercial contacts, not vehicle-owner disputes.

### P2: Content cadence

- Add 25-50 real photos per location.
- Start 2-3 GBP posts per week per location.
- Seed owner-controlled Q&A around private property towing, HOA parking enforcement, abandoned vehicles, vehicle release, office hours, and dispatch availability.
- Pull monthly performance reports and include calls, website clicks, directions, interactions, review count, and profile views in PPP.

## Computer-Control Execution Notes

Use local Chrome because both profiles are already accessible in Julian's signed-in session. For live saves, pause before saving any externally visible change that could affect business information, phone routing, public hours, or customer messaging.

Recommended execution sequence:

1. Open `https://business.google.com/locations`.
2. Verify both profiles show `Verified`.
3. Capture before screenshots.
4. For Phoenix, open Edit profile -> Contact and stage phone update to `(480) 288-5526`.
5. For both locations, open Hours and preserve office/release hours; only add 24/7 dispatch if GBP offers a non-misleading secondary hours label.
6. Open Services and reject/remove off-strategy services, then add approved B2B/private-property services.
7. Add social/profile/booking fields.
8. Capture after screenshots.
9. Verify public Search/Maps panels reflect the changes.
