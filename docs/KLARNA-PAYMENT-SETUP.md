# Klarna Payment Integration — Axel Towing

## Setup Guide for Website Dev Fee & Monthly SEO Retainer

**Linear:** AI-2181
**Last Updated:** 2026-03-24
**Client:** Elliott (Axel Towing)
**Key Amounts:** $7,500 website dev fee | $3,000/month SEO retainer

---

## Table of Contents

1. [Overview & Context](#1-overview--context)
2. [Klarna Business Account Setup](#2-klarna-business-account-setup)
3. [Creating Payment Links in Klarna](#3-creating-payment-links-in-klarna)
4. [Pay in 4 Breakdown — Website Fee](#4-pay-in-4-breakdown--website-fee)
5. [Merchant Fee Breakdown](#5-merchant-fee-breakdown)
6. [Invoice Templates](#6-invoice-templates)
7. [iMessage Follow-Up Scripts for Elliott](#7-imessage-follow-up-scripts-for-elliott)
8. [Alternative Payment Options](#8-alternative-payment-options)
9. [Stripe Recurring Billing for SEO Retainer](#9-stripe-recurring-billing-for-seo-retainer)
10. [Stripe Payment Link — Step by Step](#10-stripe-payment-link--step-by-step)
11. [Recommended Payment Stack](#11-recommended-payment-stack)
12. [Troubleshooting & FAQ](#12-troubleshooting--faq)

---

## 1. Overview & Context

### Background

At the 3/10/2026 meeting with Elliott, the Klarna "Pay in 4" option was introduced for the $7,500 website development fee. Elliott accessed it via Apple Pay but did not complete the transaction. The Apple Pay session has almost certainly expired — a fresh link must be generated and sent.

### Payment Goals

| Payment                 | Amount       | Recommended Method | Frequency                 |
| ----------------------- | ------------ | ------------------ | ------------------------- |
| Website development fee | $7,500       | Klarna Pay in 4    | One-time (4 installments) |
| SEO retainer            | $3,000/month | Stripe autopay     | Monthly recurring         |

### Why Klarna for the Website Fee

- Lowers the friction of a $7,500 upfront payment
- Client pays 4 x $1,875 every 2 weeks — feels manageable
- Klarna handles all collections; merchant receives full amount (minus fee) upfront or on schedule
- No interest to the buyer for Pay in 4 (Klarna absorbs that risk)

---

## 2. Klarna Business Account Setup

### Step 1 — Create the Merchant Account

1. Go to **https://www.klarna.com/business/**
2. Click **"Get started"** or **"Apply now"**
3. Select your business type: **Individual / Sole Proprietor** or **LLC/Corporation**
4. Fill in:
   - Business name: `[Your Agency Name]`
   - Business email: (agency email)
   - Phone number
   - Business address
   - EIN or SSN (for sole proprietors)
   - Monthly sales volume estimate

### Step 2 — Business Verification

Klarna will request:

- Government-issued ID (passport or driver's license)
- Business registration documents (if LLC)
- Bank account for payouts (routing + account number)
- Optional: business website URL

**Typical approval time:** 1–3 business days. Expedited review available by calling Klarna merchant support.

### Step 3 — Connect Bank Account for Payouts

1. In the Klarna Merchant Portal, go to **Settings > Payouts**
2. Add your bank account (Plaid-verified or manual routing/account entry)
3. Payout schedule: **daily** or **weekly** (choose daily for cash flow)

### Step 4 — Enable "Pay in 4" Product

1. In the Klarna Merchant Portal, go to **Products**
2. Enable **Pay in 4** (0% interest installment plan)
3. Confirm that your transaction size ($7,500) is within the allowed range
   - Klarna Pay in 4 typically supports up to **$10,000** per transaction
   - If $7,500 is declined by the buyer's Klarna limit, offer Klarna Financing (longer terms) or fall back to Stripe

### Step 5 — Access the Payment Link Generator

1. Go to **Klarna Merchant Portal > Pay Now Links** (or "Payment Links")
2. This is where you'll generate one-time payment links to send to Elliott

---

## 3. Creating Payment Links in Klarna

### Generating a One-Time Payment Link

**For the $7,500 Website Dev Fee:**

1. Log in to **https://portal.klarna.com**
2. Navigate to **Payments > Create Payment Link**
3. Fill in:
   - **Amount:** `$7,500.00`
   - **Currency:** `USD`
   - **Description:** `Axel Towing — Website Development Fee`
   - **Reference/Order ID:** `AXEL-WEB-001`
   - **Payment options to offer:** Check `Pay in 4` and `Pay Now`
4. Set **expiration:** 7 days (or 14 days to give Elliott time)
5. Click **Generate Link**
6. Copy the link — it will look like: `https://pay.klarna.com/xxxxxxxx-xxxx`
7. Send via iMessage (see Section 7)

**For the $3,000/month SEO Retainer (one-time via Klarna):**

1. Same process, amount = `$3,000.00`
2. Description: `Axel Towing — SEO Retainer (Month 1)`
3. Reference: `AXEL-SEO-001`
4. Note: For recurring monthly billing, use Stripe instead (Section 9) — Klarna is best for one-time or installment payments, not recurring subscriptions

### Important Notes on Klarna Links

- Links expire — regenerate if not used within the set window
- Elliott's prior Apple Pay session is expired; you MUST generate a new link
- Klarna links can be opened on any device — not Apple Pay dependent
- Send the link as plain text so Elliott can tap it directly from iMessage

---

## 4. Pay in 4 Breakdown — Website Fee

**Total:** $7,500.00
**Plan:** 4 equal payments every 14 days (0% APR to buyer)

| Payment                 | Due Date               | Amount        |
| ----------------------- | ---------------------- | ------------- |
| Payment 1 (at purchase) | Day 0 (upon agreement) | **$1,875.00** |
| Payment 2               | Day 14                 | **$1,875.00** |
| Payment 3               | Day 28                 | **$1,875.00** |
| Payment 4               | Day 42                 | **$1,875.00** |
| **TOTAL**               |                        | **$7,500.00** |

**What the merchant (agency) receives:**

- Klarna pays out the full $7,500 (minus merchant fees) on a rolling schedule tied to each installment
- The agency does NOT have to wait 42 days — Klarna manages the buyer's installment risk
- Payout 1 arrives after Payment 1 clears, etc.

**What Elliott pays:**

- $0 interest
- $0 fees (Klarna charges the merchant, not the buyer)
- Just 4 automatic card charges every 2 weeks

---

## 5. Merchant Fee Breakdown

### Klarna Merchant Fees (Pay in 4)

| Fee Component       | Rate   | On $7,500             |
| ------------------- | ------ | --------------------- |
| Percentage fee      | ~5.99% | $449.25               |
| Per-transaction fee | $0.30  | $0.30 (one per order) |
| **Total fee**       |        | **~$449.55**          |
| **Net received**    |        | **~$7,050.45**        |

> Note: Klarna fee rates vary by merchant tier and volume. At low volume, expect 5.99% + $0.30. At higher monthly volume ($10K+/month), negotiate down to 3.29%–4.99%. Rates are confirmed in your Klarna merchant agreement.

### Monthly Fee Impact (SEO Retainer via Klarna — if used)

| Fee Component         | Rate   | On $3,000/month |
| --------------------- | ------ | --------------- |
| Percentage fee        | ~5.99% | $179.70         |
| Per-transaction fee   | $0.30  | $0.30           |
| **Total monthly fee** |        | **~$180.00**    |
| **Net received**      |        | **~$2,820.00**  |

**Recommendation:** Use Stripe for recurring SEO retainer billing. Stripe rate is 2.9% + $0.30 = ~$87.30/month fee vs. ~$180/month with Klarna. Save ~$92.70/month.

---

## 6. Invoice Templates

### Invoice Template A — Website Development Fee

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    INVOICE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Invoice #:    AXEL-2026-001
Date:         2026-03-24
Due Date:     2026-04-07

FROM:
[Your Agency Name]
[Your Address]
[Your Email] | [Your Phone]

BILL TO:
Elliott [Last Name]
Axel Towing
[Elliott's Address or Business Address]
[Elliott's Email]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SERVICES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Website Design & Development
- Custom 5-page responsive website
- Local SEO optimization on all pages
- Google Business Profile integration
- Contact form + lead capture
- Mobile-first design
- 30-day post-launch support

Original Price:         $10,000.00
Discount (25%):        -$2,500.00
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOTAL DUE:              $7,500.00
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PAYMENT OPTIONS:
• Pay in Full: $7,500 via Klarna, Stripe, Zelle, or check
• Pay in 4 (Klarna): 4 x $1,875 every 2 weeks — no interest

KLARNA PAYMENT LINK:
[INSERT FRESH KLARNA LINK HERE]

ZELLE: [Your Phone or Email]

Terms: 50% due upon project kickoff. Balance due upon launch.
(Klarna Pay in 4 satisfies the full balance at time of authorization.)

Thank you for your business!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### Invoice Template B — Monthly SEO Retainer

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    INVOICE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Invoice #:    AXEL-SEO-2026-[MM]
Date:         [Invoice Date]
Due Date:     [Invoice Date + 7 days]
Period:       [Month] 2026

FROM:
[Your Agency Name]
[Your Address]
[Your Email] | [Your Phone]

BILL TO:
Elliott [Last Name]
Axel Towing
[Elliott's Address or Business Address]
[Elliott's Email]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SERVICES — [Month] SEO Retainer
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Monthly SEO Management & Marketing
- Keyword research & rank tracking
- Google Business Profile management
- 4 blog/content articles published
- On-page SEO optimization
- Monthly performance report
- Competitor monitoring
- Link building outreach

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MONTHLY RETAINER:       $3,000.00
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PAYMENT OPTIONS:
• Stripe Autopay (recommended): Auto-billed on the 1st of each month
• Manual Stripe Link: [INSERT STRIPE LINK HERE]
• Zelle: [Your Phone or Email]

STRIPE AUTOPAY ENROLLMENT:
[INSERT STRIPE SUBSCRIPTION LINK HERE]
(One-time setup — your card is charged automatically each month)

Terms: Due upon receipt. Recurring billing starts on 1st of each month.

Thank you for your business!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 7. iMessage Follow-Up Scripts for Elliott

> **Context:** Elliott's Apple Pay session from 3/10/2026 is expired. Do not reference the old link. Send a fresh Klarna link. Space messages out strategically over 2 weeks.

---

### Message 1 — Day 1 (Send immediately / 3/24/2026)

```
Hey Elliott! Quick update on the Axel Towing website — we're ready to kick off as soon as we receive the green light on payment.

The Klarna link from our last meeting expired, so I've generated a fresh one. You can pay the $7,500 in 4 easy installments of $1,875 every two weeks — no interest, no hassle:

[INSERT FRESH KLARNA LINK]

Just tap the link, select "Pay in 4," and you're good to go. Or if you'd prefer to pay all at once, Zelle works too: [Your Zelle Phone/Email].

We're excited to get this rolling for you — launch is about 3 weeks out once we kick off. Let me know if you have any questions!
```

---

### Message 2 — Day 5 (Follow-up if no response)

```
Hey Elliott — just wanted to make sure you got my last message. The Klarna link is still active:

[INSERT FRESH KLARNA LINK]

$1,875 today to kick things off, then 3 more payments every 2 weeks. We've already got your site architecture mapped out and content ready to go — just waiting on this to start building.

If Klarna isn't working for you, totally fine — Zelle is the easiest alternative: [Your Zelle Phone/Email]. Happy to hop on a quick call too if easier. Just say the word 👊
```

---

### Message 3 — Day 14 (Final follow-up before pause)

```
Elliott — last follow-up on this before I have to put your project slot on hold for another client.

The $7,500 website package is still locked in for you at the discounted rate. After [Date + 5 days], I'll need to open that slot up.

Pay in 4 link (easiest option):
[INSERT FRESH KLARNA LINK]

Or Zelle directly to: [Your Zelle Phone/Email]

Would love to get this launched before summer — you're leaving money on the table every week without a solid online presence. We can talk payment options if needed. Just respond here or call me at [Your Number]. 🙏
```

---

### Tips for Sending

- Send from Julian's personal number for warmth
- Do NOT use agency automated tools for these — personal iMessage only
- Regenerate the Klarna link before each message if the previous one expired
- Add Elliott's name to contacts if not already there
- Check read receipts — if opened but not responded, follow up quicker

---

## 8. Alternative Payment Options

### Option A — Zelle (Simplest, No Fees)

| Field    | Details                                                              |
| -------- | -------------------------------------------------------------------- |
| Setup    | Already available if you have a U.S. bank account                    |
| Fees     | $0                                                                   |
| Limits   | $2,500–$5,000/day (varies by bank) — may need 2 transfers for $7,500 |
| Speed    | Instant                                                              |
| Best for | Quick one-time payments, clients who prefer bank transfer            |

**How to use:**

1. Client opens Zelle in their bank app or Zelle.com
2. Sends to your registered phone number or email
3. Money arrives instantly — no hold

**Limitation:** No installment splitting. Elliott must pay full $7,500 (possibly in 2 transfers due to daily limits).

---

### Option B — Square

| Field           | Details                                                 |
| --------------- | ------------------------------------------------------- |
| Setup           | Square.com — free account, free card reader             |
| Transaction fee | 2.6% + $0.10 (card present) / 3.5% + $0.15 (manual)     |
| On $7,500       | ~$195 + $0.10 fee                                       |
| Recurring       | Yes — Square Invoices with auto-billing                 |
| Best for        | In-person tap-to-pay, invoices with automatic reminders |

**How to use for Elliott:**

1. Create a Square Invoice for $7,500
2. Send via email/SMS
3. Elliott pays by card — Square handles processing
4. For monthly retainer: Square Recurring Invoices (auto-bill monthly)

---

### Option C — Stripe (Recommended for Retainer)

See full Stripe section below (Section 9 & 10).

---

### Option D — PayPal / Venmo Business

| Field      | Details                                               |
| ---------- | ----------------------------------------------------- |
| Fees       | 3.49% + $0.49 (standard)                              |
| On $7,500  | ~$261.25                                              |
| Recurring  | PayPal Subscriptions available                        |
| Best for   | Clients who already use PayPal                        |
| Limitation | Higher fees than Stripe; less professional appearance |

---

### Option E — Check / ACH Wire

- Zero or minimal fees
- Send invoice with mailing address
- For ACH: share routing + account number
- 3–5 business day clearing time
- Best for clients who are uncomfortable with digital payments

---

## 9. Stripe Recurring Billing for $3,000/Month Retainer

Stripe is the **recommended solution** for the monthly SEO retainer. It supports autopay, automatic invoicing, and a professional payment experience.

### Why Stripe for the Retainer

- 2.9% + $0.30 per charge = ~$87.30/month fee (vs. ~$180 with Klarna)
- Automatic card charging — Elliott never has to manually pay
- Professional-looking invoices emailed automatically
- Built-in retry logic for failed payments
- Full dashboard to track payment history

### Step 1 — Create a Stripe Account

1. Go to **https://stripe.com**
2. Click **Start now**
3. Enter email, name, and country
4. Activate your account:
   - Business details (name, address, EIN)
   - Bank account for payouts
   - Identity verification (ID upload)

### Step 2 — Create a Product for the Retainer

1. In Stripe Dashboard, go to **Products > Add Product**
2. Fill in:
   - **Name:** `Axel Towing — Monthly SEO Retainer`
   - **Description:** `Monthly SEO management, content, GBP optimization, reporting`
   - **Pricing model:** Recurring
   - **Price:** `$3,000.00 USD`
   - **Billing period:** Monthly
   - **Billing date:** 1st of each month (or upon subscription start)
3. Click **Save product**

### Step 3 — Create a Subscription (for Elliott Specifically)

1. Go to **Customers > Add Customer**
2. Fill in Elliott's details:
   - Name: `Elliott [Last Name]`
   - Email: `[Elliott's email]`
   - Phone: `[Elliott's phone]`
3. Click **Create**
4. On the customer page, click **Add subscription**
5. Select the **Axel Towing SEO Retainer** product
6. Set start date: next 1st of month (or today)
7. Choose **Send invoice** or **Charge automatically**
8. For autopay, set to **Charge automatically** — Elliott enters card once and is auto-billed
9. Click **Start subscription**
10. Stripe will email Elliott an invoice with a secure payment link

### Step 4 — Send the Subscription Link

Stripe will send Elliott an email with a hosted invoice page. He clicks it, enters his card, and autopay begins.

**Pro tip:** After Step 3, go to Customer > Subscription > **Billing Portal** — enable the Stripe Customer Portal so Elliott can update his card, view history, and download invoices himself.

---

## 10. Stripe Payment Link — Step by Step

For a quick one-time Stripe payment (e.g., first month's retainer before autopay is set up):

### Create a Stripe Payment Link

1. Log in to **https://dashboard.stripe.com**
2. Go to **Payment Links** in the left sidebar
3. Click **New payment link**
4. Fill in:
   - **Product:** Select or create `Axel Towing SEO Retainer — Month 1`
   - **Quantity:** 1
   - **Price:** $3,000.00
   - **Collect customer details:** Name + Email (recommended)
   - **Custom fields:** Optional — add "Month" field if tracking multiple months
   - **After payment:** Set success message or redirect URL
5. Click **Create link**
6. Copy the link (format: `https://buy.stripe.com/xxxxx`)
7. Send to Elliott via iMessage or email

### For the $7,500 Website Fee via Stripe (if Klarna not used)

1. Same process — create a $7,500 one-time product
2. Or use Stripe Invoices (Dashboard > Invoices > Create Invoice) for a more formal billing experience with line items

### Stripe Invoice (More Formal Option)

1. Go to **Invoices > Create Invoice**
2. Select customer (Elliott)
3. Add line items:
   - Website Design & Development: $10,000.00
   - Early Client Discount (25%): -$2,500.00
   - **Total: $7,500.00**
4. Set payment method: Card, ACH, or both
5. Set due date: Net 7 or Net 14
6. Click **Send invoice** — Stripe emails Elliott a hosted invoice page
7. Elliott pays directly from the email — card is charged, and you receive a payout notification

---

## 11. Recommended Payment Stack

| Payment               | Method                      | Reason                                                     |
| --------------------- | --------------------------- | ---------------------------------------------------------- |
| $7,500 website fee    | **Klarna Pay in 4**         | Reduces upfront friction; Elliott already knows the option |
| $7,500 fee (fallback) | **Stripe one-time invoice** | If Klarna declined or too complex                          |
| $7,500 fee (simplest) | **Zelle**                   | Zero fees; split into 2 transfers if needed                |
| $3,000/month retainer | **Stripe autopay**          | Set-and-forget recurring billing; ~$87/month fee           |
| $3,000 first month    | **Stripe payment link**     | Quick one-time link while autopay is being set up          |

### Decision Tree

```
Elliott ready to pay $7,500?
├── Wants installments → Klarna Pay in 4 (4 x $1,875)
├── Paying in full, wants digital → Stripe one-time invoice
└── Paying in full, wants simple → Zelle (2 transfers if needed)

Elliott ready to pay monthly retainer?
├── Set up autopay → Stripe subscription (charge automatically)
└── Pay first month manually → Stripe payment link
```

---

## 12. Troubleshooting & FAQ

### "The Klarna link I sent isn't working"

- Klarna links expire (typically 7–30 days depending on settings)
- Regenerate a new link in the Klarna Merchant Portal and resend
- Do NOT ask Elliott to use the same link twice

### "Elliott's Apple Pay didn't work with Klarna"

- Apple Pay with Klarna requires specific setup on the merchant side
- The easier path: send a plain Klarna link — Elliott can pay with any card, including Apple Pay via browser
- Apple Pay via browser (Safari) is more reliable than in-app Apple Pay for Klarna links

### "Klarna declined the transaction"

- Klarna runs a soft credit check — some buyers don't qualify
- Fallback options: Stripe full payment, Zelle, Square
- Do not disclose to Elliott that Klarna declined — just say "Let's use another option, here's a link:"

### "Elliott hasn't responded to follow-up messages"

- Wait 5 business days between messages (see Section 7)
- After 3 messages with no response, try a phone call
- If no response after 3 weeks, send a formal hold notice: "We're holding your project slot through [date]. After that, we'll need to reschedule."

### "How do I handle the SEO retainer if Elliott cancels mid-month?"

- Stripe allows you to cancel a subscription at period end (no refund for current month)
- Or issue a prorated credit for remaining days
- Document the cancellation policy in the service agreement

### "Can I offer a discount for paying in full upfront?"

- Yes — consider 5% off ($375 savings) for full payment via Zelle/ACH
- This covers your Klarna merchant fee and rewards the client
- Example: "Pay in full via Zelle by Friday and I'll knock $375 off — $7,125 total"

---

## Quick Reference

| Action                 | URL                                        |
| ---------------------- | ------------------------------------------ |
| Klarna Merchant Portal | https://portal.klarna.com                  |
| Klarna Business Signup | https://www.klarna.com/business/           |
| Stripe Dashboard       | https://dashboard.stripe.com               |
| Stripe Payment Links   | https://dashboard.stripe.com/payment-links |
| Stripe Subscriptions   | https://dashboard.stripe.com/subscriptions |
| Square Invoices        | https://squareup.com/dashboard/invoices    |
| Zelle (personal)       | Via your bank app                          |

---

_Document created for internal use. Client-facing invoices should be sent as PDF exports from your accounting tool or Stripe._
