# Klarna Payment Setup Guide — Axel Towing

**Version:** 1.0
**Prepared by:** Julian Bradley / AI Acrobatics
**Date:** March 24, 2026
**Linear:** AI-2181

---

## Overview

This guide covers the complete Klarna merchant setup for collecting the Axel Towing website development fee in installments, configuring recurring invoices for the monthly SEO retainer, and handling the client's debit/business card transition.

**Payment Structure Summary:**

| Service                   | Amount            | Cadence                  | Klarna Method           |
| ------------------------- | ----------------- | ------------------------ | ----------------------- |
| Website Development       | $7,500 (one-time) | 4 installments of $1,875 | Payment Link (Pay in 4) |
| SEO Retainer              | $3,000/month      | Monthly recurring        | Recurring Invoice       |
| Maintenance Plan (future) | $1,500/month      | Monthly recurring        | Recurring Invoice       |

---

## Part 1: Klarna Merchant Account Setup

### Step 1: Create a Klarna Merchant Account

1. Go to [https://www.klarna.com/us/business/](https://www.klarna.com/us/business/)
2. Click **"Get started"**
3. Select **"Online store"** as your business type
4. Fill in business details:
   - Business name: AI Acrobatics (or your registered DBA)
   - Business type: LLC / Sole Proprietor (match your legal entity)
   - EIN or SSN (for tax reporting)
   - Business bank account for payouts
5. Verify your email address
6. Complete identity verification (government ID + business docs)

### Step 2: Navigate to the Merchant Portal

Once approved:

- Log in at [https://portal.klarna.com](https://portal.klarna.com)
- You will land on the **Overview dashboard**
- Key sections you will use:
  - **Payment Links** — for the $7,500 website fee
  - **Invoices** — for monthly SEO retainer
  - **Orders** — to track all payments received

### Step 3: Configure Payout Settings

1. Go to **Settings > Payouts**
2. Connect your business bank account
3. Set payout frequency (recommend: weekly or bi-weekly)
4. Review Klarna's merchant fees (typically 1.79% + $0.30 per transaction for Pay in 4)

---

## Part 2: Creating the $7,500 Website Fee Payment Link

Klarna's **Pay in 4** splits the purchase into 4 equal installments. For $7,500:

| Installment       | Amount | Timing                      |
| ----------------- | ------ | --------------------------- |
| 1 (First payment) | $1,875 | Due immediately at checkout |
| 2                 | $1,875 | 2 weeks after first payment |
| 3                 | $1,875 | 4 weeks after first payment |
| 4                 | $1,875 | 6 weeks after first payment |

**Total collected: $7,500. No interest charged to the buyer.**

### Creating the Payment Link

1. Log into [https://portal.klarna.com](https://portal.klarna.com)
2. Navigate to **Payment Links** (left sidebar)
3. Click **"Create payment link"**
4. Fill in:
   - **Title:** Axel Towing Website Development Fee
   - **Description:** Professional website design and development including mobile-optimized site, SEO foundation, service pages, and 30-day post-launch support.
   - **Amount:** $7,500.00
   - **Currency:** USD
5. Under **Payment Options**, ensure "Pay in 4" is enabled
6. Set an **expiration date** (recommend: 30 days from send date)
7. Click **"Generate link"**
8. Copy the unique payment link (e.g., `https://buy.klarna.com/...`)

### Sending the Link to Elliot

**Text message to Elliott (+18057602314):**

```
Hey Elliot, here's the Klarna payment link for the website development fee.
It'll break the $7,500 into 4 payments of $1,875 each.

[PASTE LINK HERE]

Klarna will ask for a debit card for the first payment.
You can switch to your business credit card after that first one goes through.
Let me know if you run into any issues!
```

**Email version (to axletowing@gmail.com):**
Subject: Axel Towing Website Fee — Payment Link

```
Hi Elliot,

Here's the payment link for the website development project.

Klarna breaks it into 4 equal installments of $1,875 each — no interest, no fees on your end.

Payment Link: [PASTE LINK HERE]

Quick notes:
- First payment requires a debit card
- After completing the first payment, you can add your business credit card in the Klarna app
- You will receive email confirmation after each installment
- I will begin website build as soon as first payment clears

Timeline:
- Week 1–2: Build and design
- Week 3: Review, edits, and DNS transfer
- SEO retainer ($3,000/month) starts once the site goes live

Call me if anything doesn't work: [Your phone number]

Julian Bradley
AI Acrobatics
```

---

## Part 3: Setting Up the $3,000/Month SEO Retainer Invoice

Klarna supports recurring invoices for service agreements. Use this for the monthly SEO retainer.

### Creating the Recurring Invoice

1. In Klarna Portal, go to **Invoices > Create Invoice**
2. Fill in the **Customer** section:
   - Name: Elliot (Axel Towing)
   - Email: axletowing@gmail.com
   - Phone: +18057602314
3. Fill in **Invoice Details:**
   - Invoice #: AXL-SEO-001 (increment monthly: AXL-SEO-002, etc.)
   - Issue date: First day of each service month
   - Due date: Net 7 (7 days from issue date)
   - **Line Item 1:** SEO Management Services — $3,000.00
     - Description: Monthly SEO retainer including keyword tracking, content creation (4 articles), Google Business Profile optimization, citation building, backlink outreach, and monthly performance report
4. Set **Payment Terms:**
   - Allow: Pay in Full or Pay in 30 days (Klarna's "Pay Later" option)
5. Click **"Send Invoice"**

### Recurring Invoice Automation (Recommended)

To avoid manually creating each month:

1. After creating the first invoice, look for **"Set as recurring"** or **"Clone invoice"**
2. Set recurrence: Monthly, on the 1st of each month
3. Klarna will auto-generate and email the invoice each month
4. You receive a notification when paid

**Alternative:** If Klarna does not support native recurring, use a reminder workflow:

- Add a recurring calendar event: "Send AXL SEO Invoice" on the 1st of each month
- Clone the previous invoice, update the date and invoice number
- Send to axletowing@gmail.com

---

## Part 4: Maintenance Plan Invoice Template ($1,500/month)

For use after the initial growth phase (typically after month 6+) when the client scales down to maintenance-level SEO.

### Invoice Template

```
Invoice #: AXL-MAINT-001
Date: [Issue Date]
Due: [Issue Date + 7 days]
From: Julian Bradley / AI Acrobatics
To: Axel Towing & Impound (axletowing@gmail.com)

LINE ITEMS:
- SEO Maintenance Plan .............. $1,500.00
  Includes: Monthly performance report, keyword monitoring,
  Google Business Profile updates, 1-2 content pieces,
  technical SEO health checks, citation monitoring

TOTAL DUE: $1,500.00
```

### When to Transition to Maintenance Plan

- Client has achieved target keyword rankings (Page 1 for core terms)
- Month-over-month traffic is stable or growing organically
- Lead volume from SEO is consistent without heavy new content
- Both parties agree the growth phase goals are met (typically month 6–12)

---

## Part 5: Client Card Transition Instructions

### The Klarna Debit Card Requirement

Klarna's "Pay in 4" requires a **debit card** for the first installment. This is because Klarna runs a soft credit check and verifies fund availability before approving the installment plan. This is standard for all Klarna Pay in 4 transactions.

### How Elliot Can Switch to Business Credit Card

1. Complete the first $1,875 payment using personal debit card
2. Open the **Klarna app** (iOS or Android) — or go to [https://app.klarna.com](https://app.klarna.com)
3. Find the **Axel Towing Website Development** order
4. Tap **"Manage payment"**
5. Select **"Change payment method"**
6. Add business credit card (Visa/Mastercard/Amex accepted)
7. Set new card as preferred for remaining installments 2, 3, and 4

**Note:** Klarna verifies each payment method. The business card will need to match the account name or billing address on file. If Elliot has trouble, he can contact Klarna customer support directly: 1-844-KLARNA-1 (1-844-552-7621).

---

## Part 6: Mobile Payment Experience Notes

Klarna is optimized for mobile. When Elliot receives the link:

- Tapping the link on iPhone opens a Klarna-branded checkout page in Safari
- Apple Pay option will appear if enabled on device
- Face ID or Touch ID can complete the purchase without entering card details
- Klarna app will be downloaded or prompted after checkout for managing installments
- All payment notifications come via SMS and email

**If the link doesn't open correctly:**

1. Make sure Safari is the default browser (or open in Chrome)
2. Disable any content blockers temporarily
3. Try opening on a desktop browser at [https://buy.klarna.com](https://buy.klarna.com)

---

## Part 7: Tracking and Confirmation

### After Each Payment

Klarna sends automatic notifications to both parties:

- Merchant (you): Email + portal notification when each installment is collected
- Customer (Elliot): Email receipt + app notification

### In the Klarna Portal

1. Go to **Orders** to see all active payment plans
2. Click on "Axel Towing" order to see installment status:
   - Green = paid
   - Yellow = upcoming
   - Red = failed/late
3. If a payment fails, Klarna retries automatically and notifies the customer

### Failed Payment Protocol

1. Klarna retries the failed installment 1-3 times over 5 days
2. Customer receives SMS/email notifications to update payment method
3. If unresolved, Klarna pauses the plan and notifies merchant
4. Contact Elliot directly if a payment fails: +18057602314

---

## Part 8: Klarna Merchant Fees (Reference)

| Plan Type           | Merchant Fee                   |
| ------------------- | ------------------------------ |
| Pay in 4            | ~1.79% + $0.30 per transaction |
| Pay in 30 (Invoice) | ~2.49% + $0.30                 |
| Klarna Financing    | ~3.29%+ (varies)               |

**Fee example for $7,500 Pay in 4:**

- Total fees: ~$134.55 (1.79% of $7,500 + $0.30 × 4 transactions)
- Net received: ~$7,365.45

**Recommendation:** Factor Klarna fees into pricing or adjust invoice amounts to cover if desired.

---

## Related Documents

- `docs/CLIENT-PAYMENT-INSTRUCTIONS.md` — simplified client-facing guide
- `docs/PAYMENT-ONBOARDING-SOP.md` — internal workflow after payment received
- `docs/COMMUNICATION-SOP.md` — full client communication procedures
