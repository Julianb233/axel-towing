# Cold Outreach Domain Setup Guide

## Axle Towing & Impound — Dedicated Cold Email Infrastructure

**Linear:** AI-7458
**Created:** 2026-04-13
**Owner:** Elliott / Axle Towing
**Purpose:** Protect axletowing.com domain reputation by using a separate domain for cold outbound campaigns

---

## Why a Separate Domain?

Cold email outreach carries inherent reputation risk. Even well-crafted campaigns generate spam complaints, bounces, and unsubscribes. If these hit your primary domain (axletowing.com), you risk:

- Google/Microsoft throttling or blocking your domain
- Existing business email (elliott@, brian@, tori@, chris@) landing in spam
- Damaged sender reputation that takes months to rebuild
- Inbound leads from the website going to spam folders

A dedicated outreach domain absorbs all cold email reputation risk while keeping axletowing.com pristine for inbound communication.

---

## 1. Recommended Domain Options

Purchase one or more of the following. All should clearly relate to the Axle Towing brand so recipients recognize the sender as legitimate.

| Domain | Availability | Notes |
|--------|-------------|-------|
| **axletowingaz.com** | Check GoDaddy/Namecheap | Best option — brand name + state identifier. Professional, recognizable. |
| **axleservices.com** | Check GoDaddy/Namecheap | Broader positioning. Works if expanding beyond towing. |
| **getaxletowing.com** | Check GoDaddy/Namecheap | Action-oriented. Good for CTAs in emails. |

### Purchase Recommendations

- **Registrar:** Namecheap or Cloudflare Registrar (cheaper than GoDaddy, better DNS management)
- **Cost:** ~$10-15/year per domain
- **Buy 2 domains** if budget allows — rotate between them to further protect reputation
- **Domain age matters:** Register domains ASAP, even before you start sending. Older domains have better deliverability.

### Sender Addresses to Create

For each cold domain, create these mailboxes:

| Address | Purpose | Used For |
|---------|---------|----------|
| `elliott@axletowingaz.com` | Primary cold outreach | Property manager sequences |
| `brian@axletowingaz.com` | Secondary sender | HOA board member sequences |
| `partnerships@axletowingaz.com` | General outreach | Commercial property sequences |

**Rule:** Never use more than 3 sending addresses per domain for cold email.

---

## 2. DNS Setup for the Cold Domain

These records must be configured at the domain registrar's DNS management panel.

### 2A. MX Records (Email Receiving)

If using Google Workspace:

```
Type    Name    Value                       Priority    TTL
-------------------------------------------------------------------
MX      @       aspmx.l.google.com          1           3600
MX      @       alt1.aspmx.l.google.com     5           3600
MX      @       alt2.aspmx.l.google.com     5           3600
MX      @       alt3.aspmx.l.google.com     10          3600
MX      @       alt4.aspmx.l.google.com     10          3600
```

If using Instantly.ai's built-in SMTP (recommended for simplicity):

```
# No MX records needed — Instantly handles sending infrastructure
# Only add MX if you need to RECEIVE email on this domain
```

### 2B. SPF Record (Sender Policy Framework)

SPF tells receiving mail servers which IPs are authorized to send email on behalf of your domain.

**If using Google Workspace only:**

```
Type    Name    Value                                   TTL
----------------------------------------------------------------------
TXT     @       v=spf1 include:_spf.google.com ~all     3600
```

**If using Google Workspace + Instantly.ai:**

```
Type    Name    Value                                                           TTL
---------------------------------------------------------------------------------------------
TXT     @       v=spf1 include:_spf.google.com include:_spf.instantly.ai ~all   3600
```

**If using Instantly.ai only:**

```
Type    Name    Value                                       TTL
----------------------------------------------------------------------
TXT     @       v=spf1 include:_spf.instantly.ai ~all       3600
```

### 2C. DKIM Record (DomainKeys Identified Mail)

DKIM cryptographically signs each email so receivers can verify it was not tampered with.

**Google Workspace DKIM:**

1. Go to Google Workspace Admin > Apps > Gmail > Authenticate email
2. Select your cold domain
3. Click "Generate new record"
4. Copy the DKIM value Google provides

```
Type    Name                    Value                           TTL
------------------------------------------------------------------------
TXT     google._domainkey       v=DKIM1; k=rsa; p=[DKIM_KEY]    3600
```

**Instantly.ai DKIM:**

Instantly provides DKIM records during account setup. Add the records they provide:

```
Type    Name                        Value                           TTL
----------------------------------------------------------------------------
TXT     instantly._domainkey        [VALUE FROM INSTANTLY SETUP]     3600
```

### 2D. DMARC Record (Domain-based Message Authentication)

DMARC tells receiving servers what to do when SPF/DKIM checks fail.

**Start with monitoring mode (p=none) during warmup, then escalate:**

**Week 1-3 (Warmup period):**

```
Type    Name    Value                                                               TTL
----------------------------------------------------------------------------------------------
TXT     _dmarc  v=DMARC1; p=none; rua=mailto:dmarc@axletowingaz.com; pct=100       3600
```

**Week 4+ (After warmup, tighten policy):**

```
Type    Name    Value                                                                   TTL
--------------------------------------------------------------------------------------------------
TXT     _dmarc  v=DMARC1; p=quarantine; rua=mailto:dmarc@axletowingaz.com; pct=100     3600
```

### 2E. Custom Tracking Domain (for Instantly.ai or cold email platform)

Most cold email tools require a custom tracking domain for open/click tracking:

```
Type    Name    Value                               TTL
--------------------------------------------------------------
CNAME   track   custom.instantly.ai                  3600
```

### DNS Verification Checklist

After adding all records, verify with these tools:

- **MX Toolbox:** https://mxtoolbox.com/SuperTool.aspx — enter `axletowingaz.com` and test SPF, DKIM, DMARC
- **Mail Tester:** https://mail-tester.com — send a test email and get a deliverability score (aim for 9+/10)
- **DNS Checker:** https://dnschecker.org — verify global propagation (allow 24-48 hours)

---

## 3. Email Infrastructure Options

### Option A: Google Workspace (Recommended for Credibility)

**Cost:** $7.20/user/month (Business Starter)
**Setup time:** 1 hour

**Advantages:**
- Highest sender credibility — Google IPs are trusted
- Full Gmail interface for managing replies
- Calendar integration for booking meetings
- Google Meet for property assessments

**Setup steps:**

1. Go to https://workspace.google.com → Start free trial
2. Add your cold domain (axletowingaz.com)
3. Verify domain ownership via DNS TXT record
4. Add MX records (see Section 2A)
5. Create user accounts (elliott@, brian@, partnerships@)
6. Enable DKIM in Admin > Apps > Gmail > Authenticate email
7. Add SPF and DMARC records
8. **Important:** Do NOT connect Google Workspace directly to Instantly. Use app passwords or SMTP relay.

**Monthly cost for 3 mailboxes:** ~$21.60

### Option B: Instantly.ai Built-in SMTP (Simplest Setup)

**Cost:** Included with Instantly subscription
**Setup time:** 30 minutes

**Advantages:**
- No separate email provider needed
- Built-in warmup, sending, and tracking
- Automatic rotation between mailboxes

**Disadvantages:**
- Lower sender reputation than Google
- No Gmail interface for managing replies (use Instantly dashboard)
- Some prospects may not recognize the sending infrastructure

### Option C: Google Workspace + Instantly.ai (Best of Both Worlds — Recommended)

**Cost:** Google Workspace ($21.60/mo) + Instantly ($30/mo) = ~$52/month
**Setup time:** 2 hours

**How it works:**
1. Google Workspace provides the mailboxes and sender reputation
2. Instantly.ai connects via IMAP/SMTP to manage sending, warmup, and sequences
3. Replies land in Gmail for easy management
4. Instantly handles warmup, scheduling, and deliverability optimization

**This is the recommended setup for Axle Towing.**

---

## 4. Email Warmup Plan (14-21 Days)

Email warmup is mandatory before sending any cold emails. New domains have zero reputation — sending cold emails immediately will land in spam and potentially blacklist the domain.

### What is Email Warmup?

Warmup tools send and receive emails between a network of real mailboxes, automatically opening them, replying, and marking them as "not spam." This builds positive engagement signals with email providers (Gmail, Outlook, Yahoo) so they learn to trust your domain.

### Warmup Tool: Instantly.ai (Recommended)

**Cost:** $30/month (Growth plan — includes warmup + sending for 1,000 contacts)
**Alternative tools:** Lemwarm ($29/mo), Warmbox ($15/mo), Mailreach ($25/mo)

### 21-Day Warmup Schedule

**Phase 1: Foundation (Days 1-7)**

| Day | Warmup Emails/Day | Cold Emails/Day | Total Daily | Notes |
|-----|-------------------|-----------------|-------------|-------|
| 1 | 5 | 0 | 5 | Warmup only — no cold sending |
| 2 | 8 | 0 | 8 | Warmup only |
| 3 | 12 | 0 | 12 | Warmup only |
| 4 | 15 | 0 | 15 | Warmup only |
| 5 | 20 | 0 | 20 | Warmup only |
| 6 | 25 | 0 | 25 | Warmup only |
| 7 | 30 | 0 | 30 | Warmup only — check deliverability score |

**Phase 2: Soft Launch (Days 8-14)**

| Day | Warmup Emails/Day | Cold Emails/Day | Total Daily | Notes |
|-----|-------------------|-----------------|-------------|-------|
| 8 | 30 | 5 | 35 | First cold emails — send to warmest leads only |
| 9 | 30 | 8 | 38 | Monitor bounce rate (must stay under 3%) |
| 10 | 30 | 10 | 40 | Monitor spam complaint rate (must stay under 0.1%) |
| 11 | 30 | 12 | 42 | |
| 12 | 30 | 15 | 45 | |
| 13 | 30 | 18 | 48 | |
| 14 | 30 | 20 | 50 | End of week 2 — review all metrics |

**Phase 3: Ramp-Up (Days 15-21)**

| Day | Warmup Emails/Day | Cold Emails/Day | Total Daily | Notes |
|-----|-------------------|-----------------|-------------|-------|
| 15 | 25 | 25 | 50 | Begin reducing warmup as cold volume increases |
| 16 | 25 | 30 | 55 | |
| 17 | 20 | 35 | 55 | |
| 18 | 20 | 40 | 60 | |
| 19 | 15 | 40 | 55 | |
| 20 | 15 | 45 | 60 | |
| 21 | 15 | 50 | 65 | Warmup complete — full sending capacity |

### Post-Warmup Steady State

After the 21-day warmup, maintain these limits per mailbox:

| Metric | Limit | Why |
|--------|-------|-----|
| Cold emails per mailbox per day | 40-50 | Higher volumes trigger spam filters |
| Total emails per mailbox per day (cold + warmup) | 60-70 | Google Workspace soft limit |
| Warmup emails per day (ongoing) | 10-15 | Never stop warmup entirely |
| Time between sends | 3-5 minutes | Avoid burst sending patterns |
| Sending window | 8am-5pm recipient timezone | Business hours only |

### With 3 Mailboxes at Steady State

| Metric | Per Mailbox | Total (3 Mailboxes) |
|--------|-------------|---------------------|
| Cold emails/day | 45 | 135 |
| Cold emails/week | 225 | 675 |
| Cold emails/month | ~900 | ~2,700 |
| New prospects contacted/month | ~900 | ~2,700 |

This is sufficient for the 500-lead database described in `DECISION-MAKER-SCRAPING-STRATEGY.md`. The full database can be contacted within 1-2 months with follow-up sequences.

---

## 5. Sending Limits and Ramp-Up Rules

### Hard Limits (Never Exceed)

| Rule | Limit | Consequence of Violation |
|------|-------|--------------------------|
| Daily send per mailbox | 50 cold emails | Domain blacklisting |
| Bounce rate | < 3% | ESP flags your domain |
| Spam complaint rate | < 0.1% | Google blocks your domain |
| Unsubscribe rate | < 1% per campaign | Indicates poor targeting |
| Daily new domain connections | 50 per mailbox | Throttling by email providers |

### Ramp-Up Rules

1. **Never jump sending volume.** Increase by no more than 5-10 emails/day.
2. **Monitor after every increase.** If bounce rate spikes, pause and clean your list.
3. **Split sends across the day.** Do not send 50 emails in 30 minutes.
4. **Rotate mailboxes.** Each prospect should receive emails from only one mailbox throughout a sequence.
5. **Weekend sending:** Avoid sending on Saturday/Sunday. B2B emails perform best Tuesday-Thursday.
6. **Holiday sending:** Pause campaigns during major holidays (Thanksgiving week, Christmas-New Year, July 4th week).

### Deliverability Monitoring

Check these metrics weekly:

| Tool | What to Check | Target |
|------|---------------|--------|
| Instantly.ai dashboard | Open rate | > 40% |
| Instantly.ai dashboard | Reply rate | > 3% |
| Instantly.ai dashboard | Bounce rate | < 3% |
| Instantly.ai dashboard | Spam complaint rate | < 0.1% |
| Google Postmaster Tools | Domain reputation | High or Medium |
| MX Toolbox | Blacklist check | No listings |
| Mail Tester | Spam score | 9+/10 |

**If any metric goes red:**

1. **Pause all cold sending immediately**
2. Increase warmup volume back to 30/day per mailbox
3. Clean your email list — remove bounced addresses
4. Review email content for spam trigger words
5. Wait 3-5 days before resuming at 50% previous volume

---

## 6. Cold Email Compliance (CAN-SPAM)

All cold emails from the outreach domain must comply with the CAN-SPAM Act (15 U.S.C. 7701). Violations carry penalties of up to $51,744 per email.

### Required Elements in Every Cold Email

1. **Accurate "From" information**
   - From name: `Elliott at Axle Towing` or `Elliott | Axle Towing`
   - From address: `elliott@axletowingaz.com`
   - Never impersonate another person or company

2. **Honest subject lines**
   - Must accurately reflect email content
   - OK: "Parking enforcement for {{company_name}}"
   - NOT OK: "Re: Our conversation" (implies prior relationship)
   - NOT OK: "Urgent: Your property" (false urgency)

3. **Physical mailing address**
   - Required in every email footer
   - Use: `Axle Towing & Impound | 320 E. Pioneer St, Phoenix AZ 85040`

4. **One-click unsubscribe**
   - Must be present and functional in every email
   - Instantly.ai adds this automatically — never disable it
   - Must honor unsubscribe requests within 10 business days

5. **Commercial email identification**
   - While B2B cold email has broader latitude, include this disclaimer:
   - _"You're receiving this because we believe your property may benefit from professional parking enforcement. Unsubscribe below to opt out."_

### Opt-Out Management

- **Instantly.ai auto-suppresses** contacts who unsubscribe — verify this is working monthly
- **Maintain a master suppression list** in Google Sheets — anyone who says "not interested," "remove me," or "stop emailing" goes on this list permanently
- **Cross-reference suppression list** before importing new contacts to any campaign
- **Never email someone who has opted out,** even from a different sequence or mailbox

### Arizona-Specific Compliance

- Arizona does not have a separate state spam law — federal CAN-SPAM governs
- Arizona Consumer Fraud Act (ARS 44-1521) requires all marketing to be truthful
- Do not promise specific response times, coverage areas, or service levels you cannot guarantee

### What NOT to Do

| Action | Risk |
|--------|------|
| Buy pre-scraped email lists from brokers | High bounce rates, spam traps, instant blacklisting |
| Send from axletowing.com (primary domain) | Ruins your main email deliverability |
| Use deceptive subject lines | CAN-SPAM violation, $51,744 per email |
| Skip unsubscribe links | CAN-SPAM violation |
| Ignore bounce-backs | Domain reputation damage |
| Send more than 50 cold emails/day per mailbox | ESP throttling and blocking |
| Send during nights/weekends | Low engagement tanks your sender score |

---

## 7. Implementation Checklist

### Week 1: Domain and Infrastructure

- [ ] Purchase cold domain (axletowingaz.com recommended)
- [ ] Set up DNS records (SPF, DKIM, DMARC) per Section 2
- [ ] Create Google Workspace account with 3 mailboxes
- [ ] Sign up for Instantly.ai Growth plan ($30/month)
- [ ] Connect Google Workspace mailboxes to Instantly via IMAP/SMTP
- [ ] Set up custom tracking domain (track.axletowingaz.com)
- [ ] Verify all DNS records with MX Toolbox
- [ ] Send test email to mail-tester.com — target 9+/10 score
- [ ] Enable Google Postmaster Tools for the cold domain

### Week 2: Warmup Begins

- [ ] Start Instantly.ai warmup at 5 emails/day per mailbox
- [ ] Follow the 21-day warmup schedule (Section 4)
- [ ] Monitor deliverability daily during warmup
- [ ] Prepare email sequences (see `COLD-EMAIL-SEQUENCES.md`)
- [ ] Import and clean lead database from Apollo.io/Hunter.io

### Week 3: Soft Launch

- [ ] Begin sending 5-10 cold emails/day per mailbox (Day 8 of warmup)
- [ ] Target highest-scored leads first (score 8-10 from scraping strategy)
- [ ] Monitor bounce rate, open rate, reply rate daily
- [ ] Respond to all replies within 4 hours during business hours

### Week 4: Full Launch

- [ ] Complete warmup schedule (Day 21)
- [ ] Ramp to 40-50 cold emails/day per mailbox
- [ ] Launch all 5 sequences from `COLD-EMAIL-SEQUENCES.md`
- [ ] Set up weekly reporting dashboard in Instantly
- [ ] Forward hot replies to GoHighLevel for pipeline tracking

### Ongoing Monthly

- [ ] Review deliverability metrics weekly
- [ ] Clean email list monthly (remove bounces, update contacts)
- [ ] Check blacklist status monthly (MX Toolbox)
- [ ] Update suppression list with all opt-outs
- [ ] Refresh email copy quarterly (subject lines, body content)
- [ ] Rotate mailbox senders if one shows declining metrics

---

## 8. Cost Summary

| Item | Monthly Cost | Notes |
|------|-------------|-------|
| Cold domain (axletowingaz.com) | ~$1/month | ~$12/year via Namecheap |
| Google Workspace (3 mailboxes) | $21.60 | Business Starter @ $7.20/user |
| Instantly.ai (Growth plan) | $30 | Warmup + sending + analytics |
| **Total** | **~$53/month** | |

### Expected ROI

- **Monthly cold email volume:** ~2,700 emails (3 mailboxes x ~900 each)
- **Expected reply rate:** 3-5% = 81-135 replies/month
- **Expected meeting rate:** 20-30% of replies = 16-40 meetings/month
- **Expected close rate:** 15-25% of meetings = 3-10 new contracts/month
- **Lifetime value per contract:** Property managers typically stay 2+ years

One signed property management contract likely covers 6+ months of cold email infrastructure costs.

---

## 9. Forwarding Replies to Primary Domain

Set up email forwarding so replies to cold outreach mailboxes are visible in your main workflow:

1. In Google Workspace Admin for axletowingaz.com:
   - Go to Gmail > Routing
   - Add rule: Forward a copy of all incoming mail to `elliott.axletowing@gmail.com`
2. In GoHighLevel:
   - Add `elliott@axletowingaz.com` as an additional connected email
   - Tag inbound from cold domain as `source-cold-outreach`

This ensures no reply gets lost while keeping the sending infrastructure separate.

---

_Guide created: 2026-04-13 | Linear: AI-7458 | Next step: Purchase domain and begin DNS setup_
