# TowBook Vehicle Lookup — Integration Spec

**Linear:** AI-2171
**Date:** 2026-04-08
**Status:** Research complete — ready for AI-2176 implementation

---

## Summary

TowBook (sometimes called "TOBO" or "ToeBook") is the towing management platform Axel Towing uses for dispatching, impounds, and vehicle tracking. This document covers the integration approach for the vehicle lookup feature on the new axletowing.com website.

## TowBook Account Details

| Field | Value |
|-------|-------|
| Company portal URL | `https://axletowing7900.towbook.net/` |
| Management login | `https://app.towbook.com` |
| Company ID (in URL) | `axletowing7900` |
| TowBook support | (810) 320-5063 / support@towbook.com |

## API Availability

**TowBook does NOT offer a public REST API.** This was confirmed through:

1. TowBook's own website and documentation — no API docs, no developer portal
2. Third-party software review sites (GetApp, SoftwareAdvice, Software Finder)
3. Industry articles confirming TowBook's integration model is partner-based (Square, Samsara, QuickBooks) rather than open API

TowBook does have internal integrations with:
- **Square** — payment processing (Web Payments SDK, Reader SDK, Terminal API, Orders API, Customers API)
- **Samsara** — GPS fleet tracking (real-time truck location)
- **QuickBooks Online** — accounting sync
- **Motor clubs** — digital dispatch (Allstate, NSD, DAA, Tesla)
- **NextPhone** — AI phone answering

None of these expose a vehicle-lookup endpoint for external websites.

## Vehicle Locator Feature

TowBook provides each customer with a **hosted Vehicle Locator portal** at `{company-id}.towbook.net`. This is a JavaScript-rendered single-page application that:

1. Allows visitors to search by **license plate number**
2. Returns whether the vehicle is in the towing company's impound system
3. Shows lot address and release procedure information if found
4. Is branded with the company name and phone number

### Examples of other companies using this portal:
- `https://32589.towbook.net/` (Always Towing & Recovery)
- `https://coloradoautorecovery.towbook.net/` (Colorado Auto Recovery)
- `https://srtowing.towbook.net/` (S & R Towing)
- `https://dtr31664.towbook.net/` (Dedicated Towing and Recovery)

## Current Implementation (New Website)

The new Axel Towing website at `/vehicle-lookup` already has:

1. **External link** to `https://axletowing7900.towbook.net` with button text "Search by License Plate Online" (line 127-146 of `website/src/app/vehicle-lookup/VehicleLookupContent.tsx`)
2. **Phone call CTA** for dispatch to confirm vehicle status
3. **Process steps** explaining how retrieval works
4. **Impound yard locations** and requirements

There is also a `/locate-vehicle` page with a **dummy form** (license plate, VIN, last 4 phone digits) that does NOT connect to any backend — it just submits to `#`.

## Integration Approaches for AI-2176

### Option A: External Link (Current — Recommended)

**How it works:** Button opens `https://axletowing7900.towbook.net` in a new tab.

**Pros:**
- Already implemented and working
- Zero maintenance — TowBook handles all updates
- Full TowBook functionality available
- No CORS, CSP, or rendering issues

**Cons:**
- User leaves the Axel Towing site temporarily
- No brand consistency on the TowBook page

**Verdict:** This is the standard industry approach and what the previous developer used. Recommended as primary.

### Option B: Iframe Embed

**How it works:** Embed the TowBook portal in an `<iframe>` on the Axel Towing site.

```tsx
<iframe
  src="https://axletowing7900.towbook.net/"
  width="100%"
  height="600"
  style={{ border: 'none', borderRadius: '12px' }}
  title="Vehicle Lookup — TowBook"
  loading="lazy"
/>
```

**Pros:**
- User stays on axletowing.com
- Seamless experience

**Cons:**
- TowBook may set `X-Frame-Options: DENY` or CSP `frame-ancestors` headers that block iframing (must test)
- Mobile responsiveness may be poor
- Scroll behavior can be jarring (iframe within page scroll)
- No control over styling

**Verdict:** Test first — if TowBook allows framing, this is a good upgrade. If blocked, fall back to Option A.

### Option C: Hybrid (Recommended for AI-2176)

**How it works:** Keep the current external link as the primary CTA. Add an iframe attempt that gracefully falls back to the external link if framing is blocked.

```tsx
// Try iframe first, fall back to link
const [iframeBlocked, setIframeBlocked] = useState(false);

{!iframeBlocked ? (
  <iframe
    src="https://axletowing7900.towbook.net/"
    onError={() => setIframeBlocked(true)}
    // ...
  />
) : (
  <a href="https://axletowing7900.towbook.net/" target="_blank">
    Search by License Plate Online →
  </a>
)}
```

## Action Items for Client

To complete this integration, the following are needed from the Axel Towing owner:

- [ ] **Confirm TowBook account is active** and the vehicle locator portal at `axletowing7900.towbook.net` is up-to-date
- [ ] **Verify lot addresses** displayed on the TowBook portal match current locations
- [ ] **Share TowBook login credentials** (for `app.towbook.com`) if we need to configure portal settings, branding, or release instructions shown to customers
- [ ] **Test the portal** — confirm that searching a known impounded vehicle's plate returns correct results

## Consolidation Recommendation

The new website has two overlapping pages:
- `/vehicle-lookup` — links to TowBook portal (functional)
- `/locate-vehicle` — has a dummy form that does nothing

**Recommendation for AI-2176:** Consolidate into a single `/vehicle-lookup` page. Remove or redirect `/locate-vehicle` to avoid confusing customers with a non-functional form.

## Contact for TowBook Support

If additional integration capabilities are needed (e.g., webhook notifications when a vehicle is impounded, or API access for a future custom lookup):

- **TowBook Support:** (810) 320-5063
- **Email:** support@towbook.com
- **Website:** https://towbook.com

## References

- TowBook homepage: https://towbook.com
- Axel Towing portal: https://axletowing7900.towbook.net/
- Square case study: https://developer.squareup.com/us/en/case-studies/towbook
- Samsara integration: https://kb.samsara.com/hc/en-us/articles/4408466529037-Integrate-with-Towbook
