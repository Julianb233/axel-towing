# A2P 10DLC Brand Registration -- Axle Towing & Impound

**Linear:** AI-7457
**Status:** Ready for submission
**Priority:** CRITICAL -- SMS campaigns cannot launch until registration is confirmed (3-7 business days)
**TCPA one-to-one consent rule:** Effective April 11, 2026

---

## Why This Is Required

All US 10DLC (standard phone number) SMS traffic requires A2P (Application-to-Person) brand and campaign registration with carriers before messages are delivered reliably. Without registration:

- Carriers (T-Mobile, AT&T, Verizon) silently block or throttle SMS
- Messages appear "sent" in GHL but never arrive
- TCPA violations carry $500-$1,500 per message fines
- GHL allows building SMS workflows without warning about this requirement

---

## Registration Information (Pre-Filled for Axle Towing)

### Brand Registration Fields

| Field | Value |
|-------|-------|
| **Legal Business Name** | Axle Towing & Impound LLC |
| **DBA (if different)** | Axle Towing & Impound |
| **EIN** | *Must match IRS records exactly -- get from Elliott* |
| **Business Type** | Private Company / LLC |
| **Industry** | Transportation / Towing Services |
| **Company Address** | 320 E. Pioneer St, Phoenix, AZ 85040 |
| **Company Phone** | 480-288-5526 |
| **Company Website** | https://axletowing.com |
| **Company Email** | elliott@axletowing.com |
| **Contact First Name** | Elliott |
| **Contact Last Name** | *Get from Elliott* |
| **Contact Phone** | +18057602314 |
| **Contact Email** | elliott.axletowing@gmail.com |
| **Country** | United States |
| **State** | Arizona |

### Campaign Registration Fields

| Field | Value |
|-------|-------|
| **Campaign Use Case** | Mixed (Marketing + Notifications) |
| **Campaign Description** | Automated follow-up and nurture SMS sequences for property management leads, appointment reminders, and service notifications for a private property towing company serving Phoenix metro area. |
| **Sample Message 1** | "Hi [Name], Elliott from Axle Towing. We provide free towing enforcement for properties in [City]. Would you have 15 minutes this week to discuss how we can help with unauthorized parking? Reply STOP to opt out." |
| **Sample Message 2** | "Hi [Name], just following up on our conversation about parking enforcement for [Property]. I'd love to set up a quick call to walk through our process. Reply STOP to opt out." |
| **Sample Message 3** | "Reminder: Your call with Elliott from Axle Towing is scheduled for [Date] at [Time]. Looking forward to connecting! Reply STOP to opt out." |
| **Opt-in Method** | Website form submission (axletowing.com/contact), verbal consent during phone calls, business card exchange at industry events |
| **Opt-in Keywords** | START, YES, SUBSCRIBE |
| **Opt-out Keywords** | STOP, UNSUBSCRIBE, CANCEL, END, QUIT |
| **Help Keywords** | HELP, INFO |
| **Help Message** | "Axle Towing & Impound -- 480-288-5526. For help, visit axletowing.com or reply STOP to opt out." |
| **Opt-out Message** | "You've been unsubscribed from Axle Towing messages. You will not receive any more texts. Reply START to resubscribe." |
| **Message Volume** | 500-1,000/month (estimated) |
| **Subscribers** | Under 5,000 |

---

## Step-by-Step Registration in GHL

### Step 1: Access A2P Registration

1. Log into GoHighLevel (app.gohighlevel.com)
2. Navigate to **Settings** > **Phone Numbers**
3. Click on the Twilio phone number assigned to Axle Towing
4. Click **"A2P Registration"** or **"Register Brand"**

### Step 2: Submit Brand Registration

1. Select **"Standard Brand"** (not Sole Proprietor -- Axle is an LLC)
2. Fill in all fields from the **Brand Registration Fields** table above
3. **EIN must match IRS records exactly** -- a mismatch causes multi-week delays
4. Submit and wait for brand approval (typically 1-3 business days)

### Step 3: Submit Campaign Registration

1. After brand is approved, click **"Register Campaign"**
2. Select use case: **Mixed** (covers both marketing and transactional)
3. Fill in all fields from the **Campaign Registration Fields** table above
4. Include all three sample messages
5. Submit campaign (typically 2-5 business days for approval)

### Step 4: Verify Registration

1. Check registration status in GHL under **Settings** > **Phone Numbers** > **A2P Status**
2. Status should show **"Approved"** for both brand and campaign
3. Test by sending a single SMS to Elliott's number (+18057602314)
4. Verify delivery receipt in GHL

---

## Cost Breakdown

| Item | Cost | Frequency |
|------|------|-----------|
| Brand registration | $4.00 | One-time |
| Campaign registration | $15.00 | One-time |
| Monthly campaign fee | $10.00/month | Recurring (carrier pass-through) |
| SMS messages | ~$0.0079/segment | Per message |
| **Total to register** | **$19.00** | **One-time** |
| **Monthly ongoing** | **~$10 + usage** | **Recurring** |

---

## SMS Compliance Checklist

### Before Any SMS Campaign Launches

- [ ] A2P brand registration submitted and approved
- [ ] A2P campaign registration submitted and approved
- [ ] Opt-out handling configured in GHL (STOP keyword auto-unsubscribe)
- [ ] Every SMS template includes "Reply STOP to opt out" or equivalent
- [ ] Consent documentation method established (see below)
- [ ] GHL "Maximum SMS per Contact per Day" set to 1-2
- [ ] Test SMS sent and delivery confirmed

### TCPA Consent Requirements (Effective April 11, 2026)

The TCPA one-to-one consent rule requires documented consent for each sender. For B2B SMS to property managers:

1. **Website form consent**: Add SMS consent checkbox to axletowing.com contact form
   - Checkbox text: "I agree to receive text messages from Axle Towing & Impound. Message and data rates may apply. Reply STOP to opt out."
   - Store consent timestamp, IP address, and form URL in Supabase

2. **Verbal consent**: During phone calls, explicitly ask:
   - "May we send you text message follow-ups about our towing services?"
   - Log consent in GHL contact notes with date and agent name

3. **Business card consent**: At networking events:
   - "Can I text you some info about our services?"
   - Note consent source when adding contact to GHL

### Contact Consent Tagging in GHL

When adding contacts to SMS-eligible workflows, tag them with their consent source:

| Tag | Meaning |
|-----|---------|
| `sms-consent-web` | Opted in via website form |
| `sms-consent-verbal` | Verbal consent during call |
| `sms-consent-event` | Consent at in-person event |
| `sms-consent-reply` | Contact initiated SMS conversation |
| `no-sms` | Explicitly opted out or no consent documented |

**Rule: Never add a contact to an SMS workflow without one of the consent tags.**

---

## GHL Workflow SMS Guards

Every GHL workflow that sends SMS must include these guards:

1. **Entry condition**: Contact must have tag `sms-consent-*` (any consent type)
2. **Exit condition**: Contact has tag `no-sms` or has replied STOP
3. **Frequency cap**: Maximum 1 SMS per contact per day
4. **Time window**: Only send between 8 AM - 8 PM MST (Arizona does not observe DST)
5. **Opt-out footer**: Every message ends with opt-out language

---

## Website Contact Form Update

SMS consent checkbox has been added to all lead forms:
- `HomepageLeadCapture.tsx` -- compact checkbox
- `ServiceInlineForm.tsx` -- compact checkbox
- `ContactContent.tsx` -- full checkbox with marketing opt-in
- `SMSConsentCheckbox.tsx` -- reusable component

The consent flag is:
1. Sent to `/api/leads` as `smsConsent: true/false`
2. Stored in Supabase `request_data` JSON field
3. Logged in SMS consent audit table (migration 003)
4. Synced to GHL as consent tags via `ghl.ts`

---

## Timeline

| Day | Action |
|-----|--------|
| Day 0 | Get EIN from Elliott, submit brand registration in GHL |
| Day 1-3 | Brand approval (monitor GHL status) |
| Day 3 | Submit campaign registration |
| Day 3-8 | Campaign approval (monitor GHL status) |
| Day 8 | Test SMS delivery, verify opt-out handling |
| Day 9+ | SMS workflows can go live |

**Total lead time: 7-10 business days from EIN submission**

---

## Blockers

| Blocker | Owner | Status |
|---------|-------|--------|
| EIN (must match IRS records exactly) | Elliott | NEEDED -- request via iMessage |
| Elliott's last name (for contact registration) | Elliott | NEEDED |
| GHL sub-account configured | Agent team | In progress |
| Twilio phone number assigned in GHL | Agent team | Verify |

---

## References

- [GHL A2P Standard Brand Registration Guide](https://help.gohighlevel.com/support/solutions/articles/48001225526-a2p-standard-brand-registration-for-10dlc)
- [TCPA Text Message Compliance (2026)](https://activeprospect.com/blog/tcpa-text-messages/)
- [TCR (The Campaign Registry) Brand Guidelines](https://www.campaignregistry.com/)
