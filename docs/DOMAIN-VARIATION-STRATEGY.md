# Domain Variation Strategy — AXEL/AXLE Misspelling Capture

## Axle Towing & Impound — Phoenix Metro Area

**Prepared by:** AI Acrobatics | **Date:** March 24, 2026
**Linear:** AI-2175
**Priority:** High — Low cost, high-value SEO brand protection

---

## Executive Summary

Customers regularly search for "axel towing" (A-X-E-L) instead of "axle towing" (A-X-L-E). This is one of the most common misspellings in the towing industry. Purchasing `axeltowing.com` and related variants captures this misspelled traffic, protects the brand from competitor squatting, and can optionally serve as a second site targeting "axel towing phoenix" keyword variations.

**Estimated cost:** $10–15/year per domain
**Estimated traffic captured:** 15–25% of branded search volume (based on industry misspelling rates)
**Time to implement:** 1–2 hours

---

## Section 1: Domain Recommendations

### Priority 1 — Must Buy

| Domain              | Reason                                    | Est. Price/Year |
| ------------------- | ----------------------------------------- | :-------------: |
| **axeltowing.com**  | Exact misspelling — highest search volume |     $10–13      |
| **axel-towing.com** | Hyphenated variant — secondary searches   |     $10–13      |

### Priority 2 — Worth Buying

| Domain                 | Reason                                   | Est. Price/Year |
| ---------------------- | ---------------------------------------- | :-------------: |
| **axeltowing.net**     | .net fallback — prevents competitor use  |      $8–12      |
| **axeltowing.org**     | .org fallback — prevents brand confusion |      $8–12      |
| **axeltowingazaz.com** | Long-tail geographic variant             |     $10–13      |

### Skip These

| Domain                | Reason to Skip                      |
| --------------------- | ----------------------------------- |
| axeltowing.io         | Too tech-focused; not local service |
| axl-towing.com        | Too different from brand            |
| axeltowingphoenix.com | Too long; low search volume         |

### Recommended Purchase Set (Best Value)

Purchase all three Priority 1 domains + `axeltowing.net`:

- `axeltowing.com` — Primary misspelling capture
- `axel-towing.com` — Hyphenated variant
- `axeltowing.net` — .net fallback

**Total estimated cost: $30–40/year** for full brand protection

---

## Section 2: Cost Analysis by Registrar

### GoDaddy

| Domain          |       Year 1        |  Renewal  |
| --------------- | :-----------------: | :-------: |
| axeltowing.com  | $0.99–$2.99 (promo) | $21.99/yr |
| axel-towing.com | $0.99–$2.99 (promo) | $21.99/yr |
| axeltowing.net  | $0.99–$2.99 (promo) | $17.99/yr |

_Note: GoDaddy promo pricing only applies year 1. Renewal rates are higher._

### Namecheap (Recommended)

| Domain          | Year 1 |  Renewal  |
| --------------- | :----: | :-------: |
| axeltowing.com  | $9.28  | $13.98/yr |
| axel-towing.com | $9.28  | $13.98/yr |
| axeltowing.net  | $6.98  | $12.98/yr |

_Namecheap includes free WhoisGuard (privacy protection) — recommended over GoDaddy for better renewal pricing._

### Google Domains / Squarespace

| Domain          | Year 1 |  Renewal  |
| --------------- | :----: | :-------: |
| axeltowing.com  | $12.00 | $12.00/yr |
| axel-towing.com | $12.00 | $12.00/yr |
| axeltowing.net  | $12.00 | $12.00/yr |

_Flat pricing — no surprises at renewal._

### Total Cost Comparison (3-Year)

| Registrar      |     3-Year Total (3 domains)      |
| -------------- | :-------------------------------: |
| GoDaddy        | ~$160 (low year 1, high renewals) |
| **Namecheap**  |      **~$95 (recommended)**       |
| Google Domains |     ~$108 (flat, predictable)     |

**Recommendation: Namecheap** — best 3-year value with free privacy protection.

---

## Section 3: 301 Redirect Setup Guide

A 301 redirect tells Google that the misspelled domain permanently points to the correct domain. All link equity and traffic flows through to `axletowing.com`.

### Option A: DNS-Level Redirect via GoDaddy (if domains are on GoDaddy)

**Step 1: Log into GoDaddy**

1. Go to [godaddy.com](https://godaddy.com) and sign in
2. Go to **My Products** → find `axeltowing.com`
3. Click **DNS** next to the domain

**Step 2: Set Up Domain Forwarding**

1. On the DNS management page, scroll to **Forwarding**
2. Click **Add** next to "Domain"
3. Set the following:
   - **Forward to:** `https://axletowing.com`
   - **Redirect type:** 301 (Permanent)
   - **Forward settings:** Forward with masking OFF (masking hides the URL change — don't use it)
4. Click **Save**

**Step 3: Verify**

- Wait 15–30 minutes for DNS propagation
- Visit `axeltowing.com` in your browser — it should redirect to `axletowing.com`
- Use [redirect-checker.org](https://redirect-checker.org) to confirm it's a 301 (not 302)

### Option B: DNS-Level Redirect via Namecheap

**Step 1: Log into Namecheap**

1. Go to [namecheap.com](https://namecheap.com) → Dashboard → **Domain List**
2. Click **Manage** next to `axeltowing.com`
3. Click the **Redirect Domain** tab

**Step 2: Configure Redirect**

1. Enter the destination URL: `https://axletowing.com`
2. Select **Permanent (301)**
3. Click **Save All Changes**

**Step 3: Verify (same as GoDaddy above)**

### Option C: Server-Level Redirect via Vercel (Advanced)

If you want path-level forwarding (e.g., `axeltowing.com/contact` → `axletowing.com/contact`), add `axeltowing.com` as a Vercel domain and use `next.config.js` redirects:

```javascript
// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'axeltowing.com' }],
        destination: 'https://axletowing.com/:path*',
        permanent: true,
      },
    ];
  },
};
```

Then add `axeltowing.com` as a custom domain in Vercel Dashboard → Project → Settings → Domains.

**Recommended: Option A or B** — simplest setup, no code changes required.

---

## Section 4: Second Site Strategy — axeltowing.com

Instead of a simple 301 redirect, `axeltowing.com` can host a **separate standalone site** targeting the misspelled keyword "axel towing phoenix" — a phrase that has real search volume and zero competition from the correctly-spelled domain.

### Why a Second Site Could Work

1. **Different keyword targeting:** Google indexes `axeltowing.com` separately and can rank it for "axel towing phoenix" queries
2. **Double the SERP real estate:** Two sites can appear in search results, pushing competitors down
3. **Specialized landing page:** A focused page for misspelled searches converts better than a generic homepage
4. **Low maintenance:** Single-page or 3–5 page site, no ongoing content needed

### Keyword Opportunity

| Keyword                     | Monthly Searches | Competition |
| --------------------------- | :--------------: | :---------: |
| axel towing phoenix         |      50–200      |     Low     |
| axel towing apache junction |      20–50       |  Very Low   |
| axel towing mesa az         |      20–50       |  Very Low   |
| axel towing near me         |     100–500      |     Low     |

_Note: These are estimated volumes for the misspelled term. Actual volumes may vary._

### Second Site Architecture (Minimal Build)

```
axeltowing.com/
├── / (homepage — "Axel Towing Phoenix" landing page)
├── /contact (phone + form)
└── /find-my-car (vehicle lookup)
```

**Content strategy for homepage:**

- H1: "Axel Towing Phoenix — 24/7 Private Property Towing"
- Note at top: "Looking for Axle Towing? You've found us! Axle Towing & Impound serves the Phoenix metro area."
- Full service list, phone number, areas served
- Canonical: point to `axletowing.com` OR let it stand independently

### Google's Stance on This Approach

**This is legitimate** when:

- Both sites have unique, useful content
- The relationship between domains is disclosed (e.g., "sister site of axletowing.com")
- No exact duplicate content is copied between sites

**This is risky** when:

- Identical content on both sites (duplicate content penalty)
- Thin pages with no value

**Julian's recommendation:** Start with a simple 301 redirect. After 90 days, evaluate whether building a second site makes sense based on keyword opportunity data.

---

## Section 5: SEO Impact Analysis

### 301 Redirect SEO Impact

| Factor                  |    Impact    | Details                                         |
| ----------------------- | :----------: | ----------------------------------------------- |
| Link equity transfer    |     99%      | 301 passes nearly all link juice to destination |
| Indexed pages           | 0 additional | Redirect domain is not indexed separately       |
| Branded traffic capture |     High     | All misspelled searches go to correct site      |
| Brand protection        |     High     | Prevents competitors from buying the domain     |
| Google trust            |   Positive   | Signals clean domain strategy                   |

### Domain Forwarding Does NOT:

- Create duplicate content issues (Google follows the 301 and only indexes the destination)
- Dilute the main domain's authority
- Require any changes to the main site

### Second Site SEO Impact (if pursued)

| Factor                      |   Impact   | Details                                     |
| --------------------------- | :--------: | ------------------------------------------- |
| Additional keyword rankings |   Medium   | Can rank independently for misspelled terms |
| Brand confusion risk        |    Low     | Clearly same company, different spelling    |
| Maintenance overhead        |    Low     | 3–5 pages, minimal updates                  |
| Backlink diversification    |   Medium   | Two domains can receive separate links      |
| Time to first ranking       | 60–90 days | New domain needs trust-building             |

---

## Section 6: Implementation Timeline

### Week 1 — Domain Purchase

- [ ] Purchase `axeltowing.com` on Namecheap (~$9.28)
- [ ] Purchase `axel-towing.com` on Namecheap (~$9.28)
- [ ] Purchase `axeltowing.net` on Namecheap (~$6.98)
- [ ] Enable auto-renewal on all three domains
- [ ] Enable WhoisGuard (free on Namecheap) for privacy

### Week 1 — 301 Redirect Setup

- [ ] Log into Namecheap for each domain
- [ ] Configure 301 redirect → `https://axletowing.com`
- [ ] Wait 30 minutes for DNS propagation
- [ ] Test all three domains redirect correctly
- [ ] Verify 301 status code at redirect-checker.org

### Week 2 — Verification

- [ ] Add `axeltowing.com` to Google Search Console (optional — confirms Google sees the redirect)
- [ ] Check in Ahrefs/SEMrush that `axeltowing.com` is not indexed separately (if it is, submit redirect to Search Console)
- [ ] Test from mobile + desktop to confirm redirect works

### Month 2–3 — Decision Point

- [ ] Review if "axel towing phoenix" keywords show opportunity in SEMrush
- [ ] Decide: keep as 301 redirect OR build minimal second site on `axeltowing.com`
- [ ] If building second site: scope 3–5 page build, budget ~4 hours

### Ongoing (Annual)

- [ ] Verify domains are set to auto-renew (critical — losing these domains to squatters is a major risk)
- [ ] Annual cost review — confirm renewal prices haven't increased

---

## Section 7: DNS Records Template

If using Namecheap's basic DNS forwarding (not URL redirect), configure these records to forward the root domain:

### For Simple Domain Forwarding (Recommended)

No DNS records to manually add — use the Redirect Domain feature in Namecheap dashboard (Section 3, Option B above).

### For CNAME-Based Forwarding to Vercel

If hosting a redirect page on Vercel:

```
Type    Host    Value                    TTL
A       @       76.76.21.21              Automatic
CNAME   www     cname.vercel-dns.com     Automatic
```

Then add the domain in Vercel → Project → Settings → Domains.

### For GoDaddy DNS Forwarding

No records needed — use the Domain Forwarding feature in GoDaddy DNS Management (Section 3, Option A above).

### Verify DNS Propagation

```bash
# Check A record
dig axeltowing.com A

# Check CNAME
dig www.axeltowing.com CNAME

# Check redirect
curl -I https://axeltowing.com
# Should return: HTTP/2 301 and Location: https://axletowing.com
```

---

## Section 8: Risk Assessment

| Risk                                               | Likelihood | Impact | Mitigation                                   |
| -------------------------------------------------- | :--------: | :----: | -------------------------------------------- |
| Domain squatter purchases axeltowing.com before us |   Medium   |  High  | Buy immediately — $9/year is cheap insurance |
| Competitor buys and uses to intercept traffic      |    Low     |  High  | Same mitigation — buy now                    |
| GoDaddy/Namecheap loses domain to expiry           |    Low     |  High  | Enable auto-renewal, set calendar reminder   |
| 301 redirect breaks after registrar change         |    Low     | Medium | Test quarterly, document configuration       |
| Second site triggers duplicate content penalty     |    Low     | Medium | Ensure unique content if second site built   |

---

## Quick Action Summary

**Do this week (30 minutes total):**

1. Go to namecheap.com
2. Buy `axeltowing.com`, `axel-towing.com`, `axeltowing.net` (~$26 total)
3. Enable auto-renewal on all three
4. Set up 301 redirect to `axletowing.com` from each domain
5. Test the redirects

**That's it.** For ~$26/year you permanently capture all misspelled searches and protect the brand.

---

_Domain strategy prepared by AI Acrobatics for Axle Towing & Impound. March 2026._
