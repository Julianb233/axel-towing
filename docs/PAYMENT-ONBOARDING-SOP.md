# Payment & Client Onboarding SOP — Axel Towing

**Version:** 1.0
**Effective Date:** March 24, 2026
**Prepared by:** Julian Bradley / AI Acrobatics
**Linear:** AI-2181

---

## Overview

This SOP governs the internal process for sending payment links to Axel Towing, confirming payment receipt, and triggering the project onboarding sequence. It covers the one-time website fee, the ongoing SEO retainer, and any future maintenance plan transitions.

---

## Table of Contents

1. [Pre-Payment Checklist](#1-pre-payment-checklist)
2. [Sending the Klarna Payment Link](#2-sending-the-klarna-payment-link)
3. [Payment Confirmation Workflow](#3-payment-confirmation-workflow)
4. [Onboarding Trigger — After First Payment](#4-onboarding-trigger--after-first-payment)
5. [Monthly Invoice Workflow (SEO Retainer)](#5-monthly-invoice-workflow-seo-retainer)
6. [Failed Payment Protocol](#6-failed-payment-protocol)
7. [Maintenance Plan Transition](#7-maintenance-plan-transition)
8. [Quick Reference](#8-quick-reference)

---

## 1. Pre-Payment Checklist

Before sending any payment link, confirm the following:

- [ ] Scope of work agreed to verbally or in writing (meeting transcript on file)
- [ ] Website fee amount confirmed: $7,500
- [ ] SEO retainer amount confirmed: $3,000/month
- [ ] Client understands debit card is required for first Klarna installment
- [ ] Client knows they can switch to business credit card after first payment
- [ ] Klarna merchant account is active and verified
- [ ] Payment link generated in Klarna portal (see `docs/KLARNA-PAYMENT-GUIDE.md`)
- [ ] Payment link tested and confirmed active (not expired)

---

## 2. Sending the Klarna Payment Link

### Timing

Send the payment link **immediately after the proposal is accepted** — do not wait. Every day of delay is a day the build timeline shifts.

### Channel

Send via **both** text and email simultaneously for maximum visibility.

### Text Message (Primary)

Send to Elliot at **+18057602314** via iMessage:

```
Hey Elliot! Here's the Klarna payment link for the website build — it splits
the $7,500 into 4 payments of $1,875. No interest or extra fees on your end.

[PASTE KLARNA LINK]

First payment needs a debit card — you can switch to your business card
after that first one goes through. Should take about 2 minutes.

Any questions, just text me back!
```

### Email (Secondary)

Send to **axletowing@gmail.com**:

- Subject: `Axel Towing Website — Payment Link Enclosed`
- Attach: `docs/CLIENT-PAYMENT-INSTRUCTIONS.md` (as PDF or paste content inline)
- Body: Same core message as text, more formal

### Follow-Up If No Response

| Time                            | Action                                                            |
| ------------------------------- | ----------------------------------------------------------------- |
| Same day (4+ hours no response) | Follow up via iMessage: "Hey — did you get the Klarna link okay?" |
| 24 hours                        | Call Elliot directly at +18057602314                              |
| 48 hours                        | Resend link (check if original link expired)                      |
| 72+ hours                       | Schedule a brief Zoom call to walk through payment together       |

---

## 3. Payment Confirmation Workflow

### When Klarna Notifies You of Payment

1. Log into [https://portal.klarna.com](https://portal.klarna.com)
2. Navigate to **Orders** and confirm first installment shows as **Paid**
3. Note the order ID for your records
4. Send confirmation text to Elliot:

```
Got it, Elliot — first payment came through! We're kicking off the build.
You'll hear from me within 48 hours with an update.
```

### Record Keeping

Create or update a client payment record:

```
Client: Axel Towing & Impound (Elliot)
Klarna Order ID: [ORDER ID]
Total Amount: $7,500
Payment Schedule:
  - Installment 1: $1,875 — [DATE PAID]
  - Installment 2: $1,875 — [SCHEDULED DATE]
  - Installment 3: $1,875 — [SCHEDULED DATE]
  - Installment 4: $1,875 — [SCHEDULED DATE]
Card Type: [Debit / Business Credit — updated per client]
Status: Active
```

Store this in the client profile or CRM (GoHighLevel).

---

## 4. Onboarding Trigger — After First Payment

First payment = green light. Execute the following within 48 hours of payment confirmation.

### Immediate Actions (Day 1–2)

- [ ] Send welcome message + next steps to Elliot
- [ ] Schedule kick-off call or Zoom if needed (30 min max)
- [ ] Begin DNS research (current registrar, TTL, nameservers)
- [ ] Request any assets from client: logo files, photos, copy preferences
- [ ] Set up project folder / Linear tickets for build tasks
- [ ] Add Elliot to CRM (GoHighLevel) as active client

### Welcome Message Template

```
Hey Elliot! Welcome aboard officially — stoked to be building this with you.

Here's what happens next:
• I'll have a staging site preview for you within 7-10 days
• I'll need: any photos you want on the site, logo files (if any), and
  confirmation of services we discussed (towing, impound, vehicle relocation)
• Once you approve the staging version, we'll do the DNS transfer
• Site goes live, and SEO kicks off from there

Reply anytime — I check messages daily.
```

### During the Build (Weeks 1–3)

| Milestone               | Trigger               | Action                                 |
| ----------------------- | --------------------- | -------------------------------------- |
| Staging site ready      | Day 7–10              | Send staging link to Elliot for review |
| Client approves staging | After review          | Schedule DNS transfer                  |
| DNS transfer complete   | After transfer        | Confirm site is live, submit to Google |
| Site verified live      | After DNS propagation | Send SEO retainer invoice #1           |

### DNS Transfer Protocol

1. Ask Elliot for GoDaddy login credentials (or request access transfer)
2. Update nameservers to Railway hosting (or Vercel, per deployment target)
3. Allow 24–48 hours for DNS propagation
4. Test with `dig axletowing.com` to confirm resolution
5. Submit new sitemap to Google Search Console

---

## 5. Monthly Invoice Workflow (SEO Retainer)

### Invoice Timing

- **Send date:** 1st of each service month
- **Due date:** 8th of each service month (Net 7)
- **First invoice:** Send on the day the site goes live (or the 1st of the following month — whichever is sooner)

### Creating the Invoice

1. Log into Klarna portal
2. Go to **Invoices > Create Invoice**
3. Use the following template:

```
Invoice #: AXL-SEO-[MONTH]-[YEAR]  (e.g., AXL-SEO-APR-2026)
From: Julian Bradley / AI Acrobatics
To: Axel Towing & Impound (axletowing@gmail.com)
Issue date: [1st of month]
Due date: [8th of month]

LINE ITEMS:
- SEO Management — [Month] [Year]              $3,000.00
  Keyword tracking & reporting
  4 content pieces
  Google Business Profile optimization
  Citation & directory management
  Backlink outreach
  Monthly performance report

TOTAL: $3,000.00
```

4. Send invoice via Klarna + email copy to axletowing@gmail.com

### Tracking

Maintain a simple log:

| Month      | Invoice #        | Amount | Sent | Paid | Notes       |
| ---------- | ---------------- | ------ | ---- | ---- | ----------- |
| April 2026 | AXL-SEO-APR-2026 | $3,000 |      |      | First month |
| May 2026   | AXL-SEO-MAY-2026 | $3,000 |      |      |             |

### Monthly Deliverables Sent With (or Before) Each Invoice

Before or alongside each invoice, send Elliot the monthly report:

- Keyword ranking changes (top 10 tracked keywords)
- Organic traffic comparison (month-over-month)
- New content published that month (link to articles)
- GBP activity (views, calls, direction requests)
- Top wins + next month priorities

Sending the report and the invoice together reinforces the value.

---

## 6. Failed Payment Protocol

### For Installment Payments (Website Fee)

Klarna handles retries automatically. Your role:

1. Klarna notifies you via email/portal when an installment fails
2. **Do NOT pause work** on the first failure — Klarna retries for 5 days
3. If Klarna marks the installment as unresolved after 5 days:
   - Text Elliot: `Hey Elliot, looks like one of the Klarna installments didn't go through. No worries — you can update your payment method in the Klarna app. Let me know if you need help!`
4. If unresolved after 10 days: Call Elliot directly at +18057602314
5. If unresolved after 14 days: Pause non-critical work, escalate to written notice

### For Monthly Invoices (SEO Retainer)

1. Invoice not paid by due date (Day 8): Send reminder text + email
2. Day 14 (1 week late): Follow-up call
3. Day 21 (2 weeks late): Formal notice — work may be paused pending payment
4. Day 30 (1 month late): Pause all deliverables, send written notice

**Pause Notice Template:**

```
Hi Elliot, I wanted to reach out about the outstanding invoice for [Month].
We've reached [X] days past the due date. To keep the SEO momentum going,
I'll need to receive payment before the next deliverables are sent.

Invoice: [INVOICE #] — $3,000
Due: [ORIGINAL DUE DATE]

Klarna link: [LINK]

Please let me know if there's anything on your end we need to work through.
```

---

## 7. Maintenance Plan Transition

### When to Offer the Transition

Recommend transitioning to the $1,500/month maintenance plan when ALL of the following are true:

- Client is ranking on Page 1 for core target keywords (towing + city terms)
- Organic traffic is stable or growing month-over-month without major new content
- Lead volume from SEO is consistent (10+ organic leads/month)
- At least 6 months of active SEO completed

### How to Propose the Transition

Text or call first, then follow up in writing:

```
Hey Elliot, quick update — we've hit some strong milestones with the SEO.
You're on page 1 for [X keywords], traffic is up [Y]% over 6 months, and
lead flow is consistent.

At this point, you've got two options:
1. Stay at $3,000/month and keep pushing aggressively for more keywords
2. Move to the $1,500/month maintenance plan — less output, but keeps what
   we've built healthy and ranking

Both are solid options. Happy to talk through which makes sense for you.
```

### Transition Process

1. Give 30 days notice before changing invoice amount
2. Final $3,000 invoice at end of growth phase
3. First $1,500 invoice at start of maintenance phase
4. Update Klarna invoice template with new amount and new scope description
5. Document transition in client CRM notes

---

## 8. Quick Reference

| Item                    | Detail                                  |
| ----------------------- | --------------------------------------- |
| Client name             | Elliot (Axel Towing & Impound)          |
| Client phone            | +18057602314                            |
| Client email            | axletowing@gmail.com                    |
| Website fee             | $7,500 (4 × $1,875 via Klarna Pay in 4) |
| SEO retainer            | $3,000/month (Net 7 invoice via Klarna) |
| Maintenance plan        | $1,500/month (available after month 6+) |
| Klarna portal           | https://portal.klarna.com               |
| Klarna customer support | 1-844-KLARNA-1                          |
| Build timeline          | 2–3 weeks from first payment            |
| SEO start               | Day website goes live                   |

---

## Related Documents

- `docs/KLARNA-PAYMENT-GUIDE.md` — full merchant setup and link creation instructions
- `docs/CLIENT-PAYMENT-INSTRUCTIONS.md` — client-facing payment guide
- `docs/COMMUNICATION-SOP.md` — full client communication procedures
- `docs/GHL-IMPLEMENTATION-GUIDE.md` — CRM setup and contact management
