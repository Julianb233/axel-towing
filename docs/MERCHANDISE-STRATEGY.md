# Axle Towing — Merchandise & Corporate Gifting Strategy

**Linear:** AI-2180
**Date:** 2026-03-24
**Purpose:** Print-on-demand branded merchandise store for corporate gifting to HOA clients and partners.

---

## Overview

Axle Towing serves HOA boards, property managers, and commercial property owners throughout the Phoenix metro. Branded merchandise is a cost-effective, high-impact way to:

1. Stay top-of-mind with decision-makers who control towing contracts
2. Reward loyalty among long-term HOA and apartment clients
3. Differentiate from competitors at industry events and trade shows
4. Create referral incentives for property managers who send new business

---

## Recommended Print-on-Demand Platform: Printful + Printify

Use **both platforms** to access the widest product catalog and best pricing:

| Platform     | Best For                                      | Notes                                                      |
| ------------ | --------------------------------------------- | ---------------------------------------------------------- |
| **Printful** | Premium apparel, embroidery, all-over print   | Higher quality, higher price. Best for gifting.            |
| **Printify** | High-volume orders, accessories, cost control | Larger supplier network, better per-unit pricing at scale. |

### Integration Path

- Both platforms offer REST APIs and hosted storefronts
- Either can be embedded in the Axle Towing website via iframe or a direct integration page
- For custom bulk orders, the manual order request form (live at `/merchandise`) is sufficient to start
- Future: Connect Printful API → Next.js catalog page with live inventory and Stripe checkout

---

## Recommended Product Catalog

### Apparel (via Printful)

| Product                         | Printful SKU Category | Est. Cost | Sell / Gift At        |
| ------------------------------- | --------------------- | --------- | --------------------- |
| Bella+Canvas Unisex Tee         | T-Shirts              | $12–$15   | $20–$25 gift or staff |
| Gildan Heavy Blend Hoodie       | Sweatshirts           | $18–$22   | $35–$40               |
| Yupoong Trucker Hat             | Headwear              | $10–$13   | $18–$22               |
| Richardson 112 Snapback         | Headwear              | $14–$18   | $22–$28               |
| Port Authority Performance Polo | Polos                 | $18–$24   | $30–$38 staff uniform |

**Design notes:**

- Front left chest: Axle Towing logo (embroidery for hats/polos, DTG for tees)
- Back: "480-288-5526 | axletowing.com" in smaller text
- Color options: Navy, charcoal gray, black, white

### Car Accessories (via Printify)

| Product                           | Category | Est. Cost | Best Use                       |
| --------------------------------- | -------- | --------- | ------------------------------ |
| Die-cut air freshener             | Auto     | $3–$5     | Trade show giveaway            |
| Vinyl bumper stickers (3"x5")     | Auto     | $1–$2     | High-volume giveaway           |
| Magnetic phone mount              | Auto     | $8–$12    | Premium gift                   |
| Aluminum valve stem caps (4-pack) | Auto     | $4–$6     | Budget gift / stocking stuffer |

### Office Items (via Printful or Printify)

| Product                   | Category   | Est. Cost | Best Use                    |
| ------------------------- | ---------- | --------- | --------------------------- |
| Custom notepad (50-sheet) | Stationery | $4–$6     | HOA board meetings          |
| Branded pens (3-pack)     | Stationery | $2–$4     | High-volume giveaway        |
| 15oz ceramic mug          | Drinkware  | $8–$12    | Client appreciation         |
| Canvas tote bag           | Bags       | $6–$9     | Trade shows, onboarding kit |

### Keychains & Accessories (via Printify)

| Product                          | Category    | Est. Cost | Best Use                 |
| -------------------------------- | ----------- | --------- | ------------------------ |
| Zinc alloy keychain w/ carabiner | Accessories | $3–$5     | Mass gifting             |
| Genuine leather key fob          | Accessories | $6–$9     | Premium gift             |
| 6-in-1 multi-tool keychain       | Accessories | $5–$8     | Memorable gift           |
| Retractable badge reel           | Accessories | $2–$4     | Staff and partner badges |

---

## Corporate Gifting Strategy for HOA Clients

### Tier 1: Board Member Appreciation (Annual)

- **Timing:** November–December (year-end) or contract renewal month
- **Package contents:**
  - 1x polo shirt (their size)
  - 1x leather key fob
  - 1x branded mug
  - 1x notepad
  - Handwritten thank-you card from Elliott
- **Estimated cost per package:** $35–$50
- **Target recipients:** 200–400 HOA board contacts across Phoenix metro

### Tier 2: Property Manager Welcome Kit (Onboarding)

- **Timing:** When a new property management account signs
- **Package contents:**
  - 1x t-shirt
  - 1x trucker hat
  - 2x air fresheners
  - 1x pen 3-pack
  - 1x bumper sticker
  - Service info card with 24/7 dispatch number
- **Estimated cost per package:** $25–$35
- **Goal:** First impression + top-of-mind for dispatching tow calls

### Tier 3: Referral Rewards

- **Trigger:** Property manager sends a new signed account referral
- **Reward:**
  - $50 Amazon gift card OR premium merch package (hoodie + hat + key fob)
  - Personal call/text from Elliott
- **Estimated cost:** $40–$55

### Tier 4: Trade Show & Events

- **Events:** Arizona HOA Management Conference, ACMA events, local property management trade shows
- **Items:** Air fresheners, keychains, bumper stickers, pens (high-volume, low cost)
- **Budget:** $500–$1,500 per event depending on attendance

---

## Pricing Strategy

### Retail / Gift Pricing (if ever sold directly)

| Item          | Production Cost | Gift Value     |
| ------------- | --------------- | -------------- |
| T-Shirt       | $12–$15         | $25            |
| Polo          | $18–$24         | $40            |
| Hat           | $10–$14         | $22            |
| Mug           | $8–$12          | $20            |
| Keychain      | $3–$5           | $8             |
| Air Freshener | $3–$5           | N/A (giveaway) |

### Bulk Order Discounts (website pricing tiers)

| Quantity | Discount   | Notes                                      |
| -------- | ---------- | ------------------------------------------ |
| 1–24     | List price | Individual orders, single items            |
| 25–49    | 10% off    | Starter Pack                               |
| 50–99    | 20% off    | HOA Partner Pack (most popular)            |
| 100+     | 30% off    | Corporate Bulk, net-30 invoicing available |

---

## Fulfillment Workflow

```
1. Client submits order via /merchandise form (or calls Elliott)
   ↓
2. Elliott (or ops) reviews order request (same-day)
   ↓
3. Submit order to Printful / Printify dashboard with logo files
   ↓
4. Digital proof generated (1–2 business days)
   ↓
5. Proof sent to client for approval via email
   ↓
6. Client approves → order moves to production
   ↓
7. Production: 5–10 business days (Printful standard)
   ↓
8. Shipping: 3–5 days ground to Phoenix metro
   ↓
9. Delivered to client or directly to recipients
```

### Logo Files Needed

Keep print-ready files on file for fast turnaround:

- SVG vector logo (white on transparent, dark on transparent)
- PNG at 300 DPI minimum (front logo, stacked/horizontal variants)
- Pantone color codes for embroidery thread matching

---

## Budget Estimates

### Year 1 Gifting Program

| Program                                     | Units     | Est. Cost         |
| ------------------------------------------- | --------- | ----------------- |
| Annual board member appreciation (50 packs) | 200 items | $2,000–$3,000     |
| New client welcome kits (20 new accounts)   | 100 items | $700–$1,000       |
| Trade show giveaways (2 events)             | 400 items | $600–$900         |
| Referral rewards (10 referrals)             | 50 items  | $400–$550         |
| Staff uniforms (6 staff)                    | 18 items  | $300–$450         |
| **TOTAL**                                   |           | **$4,000–$5,900** |

### ROI Estimate

- Average new HOA contract value: $3,000–$8,000/yr
- If gifting program secures 3 new accounts: $9,000–$24,000 new ARR
- ROI on gifting spend: 150%–400%+

---

## Next Steps

1. **Immediate:** Get print-ready logo files from Elliott
2. **Week 1:** Create Printful + Printify accounts, upload logo, build product catalog
3. **Week 2:** Order sample packs of top 5 items to verify quality
4. **Month 1:** Launch annual board member appreciation campaign (Q4 timing)
5. **Month 2:** Add Printful API integration for self-serve storefront
6. **Ongoing:** Track which gifted contacts convert to new or expanded contracts

---

_Strategy prepared by Axle Towing Agency Operations — AI-2180_
