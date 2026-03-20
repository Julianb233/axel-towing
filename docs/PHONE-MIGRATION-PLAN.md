# Axel Towing -- Phone System Migration Plan

**Linear Issue:** AI-3326
**Client:** Axel Towing (Elliott, owner)
**Current System:** UMA phone system
**Target System:** GoHighLevel LC Phone (CRM-integrated)
**Status:** Planning
**Source:** Client meeting 2026-03-17 (Decision #10)

---

## Executive Summary

Migrate Axel Towing's phone system from UMA to GoHighLevel's built-in LC Phone platform. This integrates the phone system directly into the CRM (already selected in the CRM plan), giving Elliott call recording, multi-ring, call routing, call tracking, and full customer interaction history -- all in one platform. Same phone numbers retained via number porting.

---

## Requirements (from client meeting)

| Requirement | UMA (Current) | GHL LC Phone (Target) |
|-------------|---------------|----------------------|
| Call recording | Unknown | Built-in, automatic per-call recording |
| Multi-ring (office then cell) | Unknown | Ring groups with sequential/simultaneous ring |
| Call routing | Basic | IVR menus, time-based routing, round-robin |
| Call tracking | None | Full attribution: source, campaign, keyword |
| Customer interaction history | None | Auto-logged to CRM contact record |
| Maintain phone numbers | N/A | Number porting from UMA via LOA |
| After-hours AI receptionist | No | Integration with AI agent (Phase 5.2) |
| SMS/text capability | Unknown | Built-in SMS/MMS from same numbers |
| Voicemail | Basic | Voicemail with transcription |
| Mobile access | Limited | GHL mobile app with full call/SMS |

---

## Why GoHighLevel LC Phone

GoHighLevel is already the recommended CRM platform (see CRM-PLAN.md). Its phone system (LC Phone, powered by Twilio infrastructure) is built-in, meaning:

1. **Zero integration work** -- calls and texts auto-attach to CRM contacts
2. **One platform** -- Elliott manages leads, calls, texts, emails, and pipelines in one place
3. **Cost-effective** -- included in GHL subscription + per-minute usage (~$0.014/min inbound, ~$0.014/min outbound)
4. **Number porting** -- supports porting from any carrier including UMA
5. **AI receptionist ready** -- native integration point for Phase 5.2 after-hours AI agent

---

## Pre-Migration Checklist (Information Needed from Elliott)

- [ ] **Phone numbers to port:** Get full list of all numbers currently on UMA
  - Main office number(s)
  - Any tracking/secondary numbers
  - Fax numbers (if applicable)
- [ ] **Current UMA account details:**
  - Account number
  - Account holder name (must match exactly for port)
  - Account PIN/password
  - Billing address on account
- [ ] **Current call flow:** How calls route today
  - Which phones ring? (office desk phones, cell phones, both?)
  - What happens after hours? (voicemail, forwarding, nothing?)
  - Any IVR/auto-attendant menus?
- [ ] **Desired call flow:** How Elliott wants calls to work
  - Business hours ring pattern (simultaneous? sequential?)
  - After-hours behavior (AI receptionist per Phase 5.2)
  - Specific routing for different number types
- [ ] **Hardware inventory:**
  - Desk phones in office (brand, model, quantity)
  - Do they want to keep desk phones or go softphone/mobile-only?
- [ ] **UMA contract status:**
  - Contract end date (early termination fees?)
  - Monthly cost (for ROI comparison)
  - Cancellation process

---

## Migration Steps

### Phase A: GHL Account Setup (Week 1)

**Prerequisites:** GHL sub-account for Axel Towing must be created (per CRM plan).

| Step | Task | Owner | Notes |
|------|------|-------|-------|
| A1 | Create GHL sub-account for Axel Towing | Julian | If not already done for CRM |
| A2 | Enable LC Phone in sub-account | Julian | Settings > Phone Numbers > LC Phone |
| A3 | Purchase temporary number for testing | Julian | Use a 602/480 area code number |
| A4 | Configure caller ID and business name | Julian | "Axel Towing" display name |
| A5 | Set up call recording (enabled by default) | Julian | Verify recording storage settings |
| A6 | Test inbound/outbound calls on temp number | Julian + Elliott | Verify audio quality, recording works |

### Phase B: Call Flow Configuration (Week 1-2)

| Step | Task | Owner | Notes |
|------|------|-------|-------|
| B1 | Build ring group: "Office Phones" | Julian | All office desk phones/softphones |
| B2 | Build ring group: "Cell Escalation" | Julian | Elliott's cell + any manager cells |
| B3 | Configure sequential ring flow | Julian | Office (15s) -> Cell (20s) -> Voicemail |
| B4 | Set up business hours schedule | Julian | Mon-Fri 9am-5pm MST |
| B5 | Configure after-hours routing | Julian | Voicemail initially; AI receptionist in Phase 5.2 |
| B6 | Set up voicemail greeting | Elliott | Record professional greeting |
| B7 | Enable voicemail transcription | Julian | Auto-transcribe and email/notify |
| B8 | Configure IVR menu (if needed) | Julian | "Press 1 for dispatch, 2 for vehicle pickup..." |
| B9 | Set up missed call text-back | Julian | Auto-text: "Sorry we missed your call..." |

### Phase C: Number Porting (Week 2-3)

**Timeline note:** Number porting typically takes 7-14 business days.

| Step | Task | Owner | Notes |
|------|------|-------|-------|
| C1 | Collect UMA account info from Elliott | Elliott | Account #, PIN, authorized name, billing address |
| C2 | Generate Letter of Authorization (LOA) | Julian | GHL provides LOA template |
| C3 | Elliott signs LOA | Elliott | Must match account holder name exactly |
| C4 | Submit port request via GHL | Julian | Upload LOA + recent UMA bill |
| C5 | Monitor port status | Julian | Check GHL dashboard daily |
| C6 | Set up temporary call forwarding | Julian | Forward UMA -> GHL temp number during port |
| C7 | Port completion confirmation | Julian | Verify numbers are active in GHL |
| C8 | Test all ported numbers | Julian + Elliott | Inbound, outbound, recording, routing |

### Phase D: CRM Integration & Call Tracking (Week 3)

| Step | Task | Owner | Notes |
|------|------|-------|-------|
| D1 | Configure call tracking sources | Julian | Assign tracking numbers to: website, Google Ads, GMB |
| D2 | Set up call-to-contact matching | Julian | Auto-create contact on new caller |
| D3 | Configure call outcome tagging | Julian | Tags: new lead, existing customer, spam, vendor |
| D4 | Set up call-triggered automations | Julian | New lead call -> enter nurture pipeline |
| D5 | Build call analytics dashboard | Julian | Calls by source, time, duration, outcome |
| D6 | Configure call notifications | Julian | Missed call alerts to Elliott via SMS + app |
| D7 | Set up call whisper (optional) | Julian | "This call is from [source]" before connecting |

### Phase E: Testing & Go-Live (Week 3-4)

| Step | Task | Owner | Notes |
|------|------|-------|-------|
| E1 | Full test: call office number, verify ring pattern | Julian + Elliott | Test from multiple external numbers |
| E2 | Test multi-ring: office -> cell escalation | Julian | Verify sequential ring timing |
| E3 | Test call recording playback | Julian + Elliott | Play back recordings in GHL |
| E4 | Test after-hours routing | Julian | Call after 5pm, verify voicemail |
| E5 | Test missed call text-back | Julian | Miss a call, verify auto-text sends |
| E6 | Test CRM integration | Julian | Verify calls appear on contact records |
| E7 | Test call tracking attribution | Julian | Call from different sources, verify tracking |
| E8 | Train Elliott on GHL phone features | Julian | 30-min walkthrough: app, voicemail, recordings |
| E9 | Go live: confirm ported numbers active | Julian | Final verification |
| E10 | Cancel UMA service | Elliott | Only after full verification of GHL system |

---

## Call Flow Diagram

```
Incoming Call (ported number)
    |
    v
[Business Hours Check]
    |
    +-- During Hours (Mon-Fri 9am-5pm) -------> [Ring Group: Office]
    |                                                |
    |                                           (15 seconds, no answer)
    |                                                |
    |                                                v
    |                                           [Ring Group: Cell]
    |                                                |
    |                                           (20 seconds, no answer)
    |                                                |
    |                                                v
    |                                           [Voicemail]
    |                                                |
    |                                                v
    |                                           [Missed Call Text-Back]
    |                                           [Voicemail Transcription -> Email]
    |
    +-- After Hours / Weekends ----------------> [AI Receptionist] (Phase 5.2)
                                                     |
                                                (fallback if AI not yet deployed)
                                                     |
                                                     v
                                                [Voicemail]
                                                     |
                                                     v
                                                [Missed Call Text-Back]
                                                [Voicemail Transcription -> Email]
```

---

## GHL Phone Configuration Specs

### Ring Group: Office Phones
- **Type:** Simultaneous ring
- **Members:** All office desk phones/softphones
- **Ring timeout:** 15 seconds
- **If no answer:** Escalate to Cell ring group

### Ring Group: Cell Escalation
- **Type:** Sequential ring
- **Members:** Elliott cell, then backup manager cell (if applicable)
- **Ring timeout:** 20 seconds per member
- **If no answer:** Send to voicemail

### Business Hours
- **Monday-Friday:** 9:00 AM - 5:00 PM (America/Phoenix, no DST)
- **Saturday-Sunday:** Closed (after-hours routing)
- **Holidays:** Configure as after-hours (manual toggle or pre-set dates)

### Call Recording
- **Mode:** Automatic (all calls)
- **Storage:** GHL cloud storage (included)
- **Retention:** Indefinite (default)
- **Access:** Elliott + Julian admin access
- **Compliance:** Inform callers via greeting ("This call may be recorded...")

### Missed Call Text-Back
- **Trigger:** Any missed call during business hours
- **Delay:** 1 minute after missed call
- **Message:** "Hi, this is Axel Towing. Sorry we missed your call! We'll get back to you shortly. If this is urgent, please call back or reply to this text. For vehicle retrieval info, visit axletowing.com/vehicle-locate"
- **After-hours variant:** "Thanks for calling Axel Towing. We're currently closed (Mon-Fri 9am-5pm). We'll return your call first thing next business day. For urgent dispatch, reply URGENT to this text."

### Voicemail Greeting
- **Business hours (no answer):** "You've reached Axel Towing. We're currently helping another customer. Please leave a message and we'll call you back within the hour. For 24/7 dispatch, press 0."
- **After hours:** "Thank you for calling Axel Towing. Our office is closed. Office hours are Monday through Friday, 9am to 5pm. For 24/7 tow dispatch, press 0 or stay on the line. Otherwise, leave a message and we'll return your call next business day."

---

## Call Tracking Numbers

Set up dedicated tracking numbers to attribute calls to their source:

| Source | Number Type | Purpose |
|--------|------------|---------|
| Website (main) | Tracking number on site | Track website-generated calls |
| Google Business Profile | Dedicated tracking # | Track GMB calls |
| Google Ads (future) | Dynamic number insertion | Track paid search calls |
| Service area pages | Pool or dedicated | Track which city pages generate calls |
| Referral partners | Dedicated per partner | Track referral source ROI |

All tracking numbers route through the same call flow (ring group -> cell -> voicemail).

---

## Cost Estimate

### GoHighLevel Phone Costs (in addition to GHL subscription)

| Item | Cost | Notes |
|------|------|-------|
| GHL subscription | $97-297/mo | Already planned for CRM |
| LC Phone number (ported) | $1.15/mo per number | Per ported number |
| Additional tracking numbers | $1.15/mo each | ~5-10 recommended |
| Inbound calls | ~$0.014/min | Twilio rates |
| Outbound calls | ~$0.014/min | Twilio rates |
| SMS outbound | ~$0.0079/segment | For text-back and campaigns |
| Call recording storage | Included | No extra cost |
| Number porting fee | $0 | Free via GHL/Twilio |

### Estimated Monthly Phone Cost
- Assuming ~500 minutes inbound + 200 minutes outbound + 5 numbers + 100 SMS
- **~$25-35/month** for phone usage on top of GHL subscription

### UMA Savings
- Get Elliott's current UMA monthly cost for direct comparison
- Likely net savings since phone is bundled into the CRM platform

---

## Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Port delay (>14 days) | Temporary dual systems | Set up call forwarding from UMA to GHL during port |
| Port rejection (info mismatch) | Delayed migration | Pre-verify all account details with Elliott before submitting |
| Call quality issues | Customer experience | Test extensively on temp number before porting; GHL uses Twilio (enterprise-grade) |
| Elliott unfamiliar with new system | Missed calls, confusion | 30-min training session + quick-reference guide |
| Desk phone incompatibility | Can't use existing hardware | GHL supports SIP phones; if incompatible, use softphone/mobile app |
| After-hours gap (before AI receptionist) | Missed after-hours calls | Voicemail + text-back as interim until Phase 5.2 |
| Number porting during business hours | Brief call interruption | Schedule port completion for early morning; have cell forwarding as backup |

---

## Dependencies

| Dependency | Status | Blocked By |
|------------|--------|------------|
| GHL sub-account created | Pending | CRM setup (Phase 5 prerequisite) |
| Elliott's UMA account info | Not started | Need from Elliott |
| LOA signature | Not started | Need from Elliott |
| Desk phone inventory | Not started | Need from Elliott |
| AI receptionist (Phase 5.2) | Future | Separate Linear issue |

---

## Success Criteria

- [ ] All existing phone numbers ported to GHL with zero downtime
- [ ] Inbound calls ring office phones first, then escalate to cell
- [ ] All calls are recorded and accessible in GHL
- [ ] Missed calls trigger automatic text-back
- [ ] Call history appears on CRM contact records
- [ ] Call tracking numbers are live for website, GMB, and key sources
- [ ] Elliott trained and comfortable with GHL phone features
- [ ] UMA service cancelled
- [ ] Monthly phone cost documented and within estimate

---

## Timeline

| Week | Milestone |
|------|-----------|
| Week 1 | GHL account setup, temp number testing, call flow config |
| Week 1-2 | Collect UMA info from Elliott, submit port request |
| Week 2-3 | Port in progress, configure CRM integrations and tracking |
| Week 3-4 | Port complete, full testing, Elliott training, go-live |
| Week 4+ | Monitor, optimize, cancel UMA |

**Total estimated duration: 3-4 weeks** (largely dependent on porting timeline)

---

## Next Steps

1. **Immediate:** Send Elliott the pre-migration checklist (UMA account info, phone numbers, current call flow)
2. **This week:** Set up GHL sub-account and enable LC Phone (if CRM setup is ready)
3. **This week:** Purchase temp number and test call flow configuration
4. **When Elliott responds:** Submit port request, begin migration
