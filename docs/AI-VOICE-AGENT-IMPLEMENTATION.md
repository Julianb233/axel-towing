# AI Voice Agent Implementation Plan

## Axle Towing & Impound — Inbound/Outbound Call Handler

**Prepared for:** Elliott / Axle Towing & Impound
**Linear Issue:** AI-2178
**Date:** March 2026
**Phone:** 480-288-5526
**Website:** axletowing.com

---

## Overview

This document covers the complete implementation plan for deploying AI voice agents to handle:

1. **Inbound calls** — towing emergencies, roadside assistance, billing, and HOA partner inquiries
2. **Outbound calls** — cold outreach to HOA boards and property management companies

The existing Twilio infrastructure at `/api/voice/inbound` and `/api/voice/outbound` serves as the technical backbone. This plan layers AI-driven conversation handling on top of that foundation.

---

## Section 1: Inbound Call Handler

### 1.1 IVR Menu Structure

When a caller dials the Axle Towing number (480-288-5526), the AI agent answers immediately — no hold music, no "your call is important to us." The goal is resolution in under 90 seconds for the majority of callers.

```
[CALLER DIALS 480-288-5526]
         │
         ▼
AI Agent: "Thank you for calling Axle Towing & Impound. I'm here to help.
           Are you calling about a tow or emergency right now — or is this
           about billing, a referral partnership, or something else?"
         │
         ├─ "Tow" / "emergency" / "stuck" / "need a tow" / Press 1
         │         ▼
         │    [EMERGENCY TOWING BRANCH]
         │    AI gathers: location, vehicle type, situation
         │    AI quotes ETA, sends SMS confirmation
         │    AI offers warm transfer to dispatcher
         │
         ├─ "Roadside" / "flat tire" / "jump start" / "keys locked" / Press 2
         │         ▼
         │    [ROADSIDE ASSISTANCE BRANCH]
         │    AI gathers: location, vehicle, specific issue
         │    AI quotes ETA, explains service cost
         │    AI offers warm transfer to dispatcher
         │
         ├─ "Billing" / "invoice" / "my car was towed" / "impound" / Press 3
         │         ▼
         │    [BILLING / IMPOUND BRANCH]
         │    AI gathers: name, vehicle description, date towed
         │    AI provides storage lot address (8155 W Buckeye Rd, Phoenix)
         │    AI provides hours (Mon–Fri 8am–5pm, Sat 9am–noon)
         │    AI explains release process and payment options
         │    AI offers warm transfer to billing
         │
         ├─ "Partner" / "HOA" / "property manager" / "referral" / Press 4
         │         ▼
         │    [HOA / PARTNER INQUIRY BRANCH]
         │    AI gathers: company name, number of properties, contact info
         │    AI books assessment call or routes to Elliott
         │    AI sends follow-up email/SMS with resources
         │
         └─ "Dispatcher" / "operator" / "person" / Press 0
                   ▼
              [IMMEDIATE TRANSFER]
              Warm transfer to dispatcher
              AI announces caller details before connecting
```

### 1.2 Branch Scripts

#### Branch 1: Emergency Towing

**AI Prompt Flow:**

```
AI: "Got it — let's get you taken care of right now.
     What's the cross street or address where you're located?"

[Caller gives location]

AI: "And what kind of vehicle is it — make, model, year if you know it?"

[Caller gives vehicle info]

AI: "Perfect. And quickly — is the vehicle in a safe spot, or are you
     in a lane of traffic or somewhere dangerous right now?"

[If dangerous]
AI: "Okay, stay in your vehicle with hazard lights on if it's safe to do so.
     I'm connecting you to our dispatcher right now — they're dispatching a
     truck to [location] and will call you back at this number within 5 minutes
     with your driver's name and ETA. Standby."

[If safe]
AI: "Great. We have a driver available in your area. Estimated arrival is
     [20–45] minutes. You'll get a text confirmation at the number you're
     calling from with the driver's name and ETA. Is there anything else
     you need before I connect you to confirm the dispatch?"
```

**After-hours handling (10pm–6am):**

```
AI: "Our dispatch is operating in emergency-only mode right now.
     If you're in a dangerous situation — in a traffic lane, after an accident,
     or need immediate help — press 1 and I'll connect you to emergency dispatch now.

     For non-emergency towing requests, press 2 to leave a message and we'll
     call you back at 7am."

[Press 1 → Transfer to after-hours emergency line]
[Press 2 → Voicemail with callback scheduled in GHL]
```

---

#### Branch 2: Roadside Assistance

```
AI: "Of course. What's the issue — flat tire, dead battery, keys locked
     in the car, or something else?"

[Caller describes issue]

AI: "And where are you located right now?"

[Caller gives location]

AI: "Got it. Roadside assistance in your area typically runs
     [cost range] depending on the service. Do you want me to
     confirm the exact rate and dispatch a tech, or would you
     like to speak with someone first?"

[Confirm dispatch]
AI: "Perfect. A tech is on the way. ETA is approximately [X] minutes.
     You'll get a text at this number with the driver's contact info.
     Is there anything else?"

[Wants to speak to someone]
AI: "No problem — connecting you to our dispatcher now."
```

---

#### Branch 3: Billing / Impound Release

```
AI: "I can help with that. Can I get your name and the date your
     vehicle was towed?"

[Caller provides info]

AI: "And a quick description of the vehicle — make, model, color?"

[Caller provides vehicle info]

AI: "Thank you. Here's what you need to know to retrieve your vehicle:

     Our impound lot is at 8155 West Buckeye Road in Phoenix.
     Hours are Monday through Friday, 8am to 5pm, and Saturday 9am to noon.
     We're closed Sundays.

     To release your vehicle you'll need:
     1. A valid government-issued photo ID
     2. Proof of ownership — registration or title
     3. Payment for the tow and storage fees

     We accept cash, Visa, Mastercard, and Discover.
     Storage fees accrue daily, so picking up sooner reduces your total.

     Do you have any questions about the release process, or would you
     like to speak with our billing team directly?"

[Questions]
AI: [Handles common follow-ups from a knowledge base]

[Speak to billing]
AI: "Connecting you now. Have your vehicle info ready."
```

**Common billing AI responses:**

- "How much will it cost?" → AI gives range, explains daily storage rate, offers to connect to billing for exact amount
- "Why was my car towed?" → AI explains Axle Towing operates under contract with property owners and HOAs, enforcement is at property owner request, directs to lot for documentation
- "Was my car towed legally?" → AI acknowledges concern, offers to connect to billing team for full documentation, does NOT argue or validate complaint

---

#### Branch 4: HOA / Partner Inquiry

```
AI: "Great — we love hearing from potential partners. We work with HOA
     boards and property management companies across Phoenix Metro.

     Can I get your name and the organization you're with?"

[Caller provides info]

AI: "Thanks, [Name]. And roughly how many communities or properties
     are you responsible for?"

[Caller provides info]

AI: "Perfect. Our parking enforcement service is zero cost to the HOA —
     tow fees from violators fund everything, including signage installation.

     The best next step is a free 20-minute property assessment —
     Elliott will walk your property, check signage compliance, and
     give you an honest evaluation.

     Can I get a good email address for you so we can send you some
     resources and confirm the assessment?"

[Caller provides email]

AI: "Got it. You'll receive our HOA partnership guide and Elliott's
     contact info within a few minutes. He'll follow up to schedule
     the assessment at your convenience.

     Is there anything else I can help you with today?"
```

---

### 1.3 After-Hours Handling

| Time Window              | Behavior                                                  |
| ------------------------ | --------------------------------------------------------- |
| 6am–10pm                 | Full AI agent — all branches active                       |
| 10pm–6am                 | Emergency-only mode                                       |
| Emergency (10pm–6am)     | AI screens urgency → transfers to emergency dispatch      |
| Non-emergency (10pm–6am) | AI captures voicemail → creates GHL task for 7am callback |
| Holidays                 | Same as after-hours — emergency only                      |

**After-Hours Emergency Screening Script:**

```
AI: "You've reached Axle Towing after hours. We're available 24/7
     for emergencies. Are you in a dangerous situation right now —
     stranded in traffic, after an accident, or need immediate help?"

[Yes / emergency]
→ Immediate warm transfer to on-call dispatcher

[No / general inquiry]
AI: "Got it. Our full team is available starting at 6am. Would you
     like to leave a message and have someone call you back first
     thing? Or you can reach us at this number during business hours."

[Leave message]
→ AI records voicemail, creates GHL task tagged "after-hours callback"
→ Dispatcher receives SMS notification at 6am
```

---

### 1.4 Call Routing Logic

```
CALL COMES IN
     │
     ▼
AI AGENT HANDLES (Tier 1)
- Collects: name, location, vehicle info, situation
- Provides: ETAs, addresses, hours, pricing ranges, partner info
- Books: assessments, callbacks
- Sends: SMS confirmation, email with resources
     │
     ├── ESCALATE TO DISPATCHER (Tier 2) if:
     │   • Caller explicitly asks for a person
     │   • Emergency situation confirmed
     │   • Billing dispute requires human judgment
     │   • AI cannot resolve after 2 attempts
     │   • Caller becomes frustrated
     │
     └── LOG AND CLOSE if:
         • Information provided, no further action
         • Voicemail captured (after hours)
         • Callback scheduled in GHL
```

**Escalation trigger phrases (AI detects and transfers):**

- "I want to speak to a person"
- "Let me talk to a human"
- "This isn't helping"
- "I need to talk to someone"
- Any expression of urgency: "hurry", "emergency", "accident", "dangerous"

---

### 1.5 ETA Response and SMS Follow-Up

**ETA logic by zone:**

| Zone                                      | Standard ETA | After Midnight ETA |
| ----------------------------------------- | ------------ | ------------------ |
| Central Phoenix                           | 20–30 min    | 30–45 min          |
| East Valley (Mesa, Tempe, Scottsdale)     | 25–35 min    | 35–50 min          |
| West Valley (Glendale, Peoria)            | 30–45 min    | 45–60 min          |
| Outlying (Chandler, Gilbert, Queen Creek) | 35–50 min    | 50–70 min          |

**SMS confirmation template (sent immediately after dispatch):**

```
Axle Towing: Your tow is confirmed!
Driver: [Name] | ETA: [X] min
Truck: [Vehicle description]
Driver cell: [#]
Questions? Reply to this text or call 480-288-5526.
```

**HOA partner inquiry SMS:**

```
Hi [Name], Elliott at Axle Towing here. Thanks for calling!
I'm sending our HOA partner guide to [email] now.
Let's schedule your free property assessment.
My direct line: 480-288-5526
```

---

## Section 2: Outbound Sales Agent

### 2.1 HOA/Property Manager Cold Call Script (AI-Driven)

**Target:** HOA board presidents, property managers, and operations leaders at management companies

**AI behavior rules:**

- Be direct, warm, and brief — assume they're busy
- Do NOT deliver a full pitch on voicemail — trigger SMS instead
- If they engage, ask questions and listen — do not monologue
- Transfer to Elliott for any prospect who asks to speak to the owner/decision-maker
- Log every call outcome to GHL with disposition tag

---

**Cold Call Opening:**

```
AI: "Hi, this is Jordan calling from Axle Towing & Impound in Phoenix.
     I'm reaching out because we provide parking enforcement for HOA
     communities at zero cost to the HOA — and I wanted to see if
     [Community Name / Company Name] would be open to a quick conversation.

     This'll take under two minutes — is now okay?"
```

_(Note: Use a natural human name like "Jordan" for the AI agent — avoids the "AI or human?" awkward question. Disclose if directly asked.)_

---

### 2.2 Discovery Questions and Response Playbook

**After they say yes:**

```
AI: "Quick question — do you currently have a towing company handling
     parking enforcement, or is that something you're managing more
     informally right now?"
```

| Their Answer                     | AI Response                                                                                                                                                                           |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "We have a company"              | "That's pretty common. A lot of boards we work with had a company but switched because of response time or reporting issues. Can I ask — how's your current enforcement working out?" |
| "We manage it ourselves"         | "Got it. That works for a while, but it gets complicated fast — especially with ARS compliance for signage. Have you run into any situations where a tow got challenged?"             |
| "We don't really do enforcement" | "That's actually where we start with most communities. No enforcement usually means residents just park wherever. Are parking complaints something the board hears about?"            |
| "We're happy with what we have"  | "Fair enough. I'll leave you with one thing — if you ever want a free second opinion on your signage compliance, we'll do that no cost, no strings. Can I send you our contact info?" |

---

**If they're engaged — go deeper:**

```
AI: "Just so I understand your situation better:

     → About how many parking spaces or units does the community have?

     → Do you get a lot of visitor parking abuse, or is it more
       resident violations?

     → Who's the point of contact when there's a parking issue —
       the board president, a property manager, or someone else?"
```

_(Log all responses directly to GHL contact record via webhook)_

---

### 2.3 Objection Handling

| Objection                                | AI Response                                                                                                                                                                                                   |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "We already have a contract"             | "Totally understand — contracts are there for a reason. When does yours come up for renewal? I'd love to get on your radar for when you're evaluating again. Can I send you some info in the meantime?"       |
| "Not interested"                         | "No problem at all — I appreciate you saying so directly. Would it be okay if I sent one quick email with our HOA resource guide? If parking ever comes up at a board meeting, you'll know where to find us." |
| "Send me information"                    | "Absolutely. Best email for that? [Gets email] Perfect — you'll have it within a few minutes. And is there a best time for a follow-up call next week, or would you prefer just the email for now?"           |
| "We're not making any changes right now" | "That's fair. I'll put a note to follow up in a few months when things might be in a different place. Is [First Name] still the right contact for enforcement decisions?"                                     |
| "How much does it cost?"                 | "That's the best part — it's zero cost to the HOA. Our service is funded entirely through tow fees collected from violators. The association budget isn't touched. Want me to explain how that works?"        |
| "Who else do you work with?"             | "We work with communities across the Phoenix metro — I can have Elliott send you a reference from a similar community if that would help. What city is your community in?"                                    |
| "Are you recording this call?"           | "Yes, for training and quality purposes — I can mention that at the start if you'd prefer. Is it okay to continue?"                                                                                           |

---

### 2.4 Follow-Up Sequence: Voicemail → SMS → Email Trigger

**Voicemail detected (AI leaves message):**

```
"Hi [Name], this is Jordan calling from Axle Towing & Impound in Phoenix.
We work with HOA communities across the metro to provide parking enforcement
at zero cost to the HOA.

If that's something worth a two-minute conversation, you can reach us at
480-288-5526, or I'll follow up by text.

Have a great day."
```

**Immediately after voicemail drop → SMS sent:**

```
Hi [Name], Jordan from Axle Towing. Just left you a voicemail.
We handle HOA parking enforcement at zero cost to the association.
Worth a quick chat? Reply here or call 480-288-5526.
axletowing.com
```

**Day 3 — SMS follow-up (if no reply):**

```
Hi [Name], following up from Axle Towing. Free parking enforcement for HOAs —
no HOA budget required. Open to a 10-minute call this week?
Call/text: 480-288-5526
```

**Day 5 — Email trigger (GHL automation fires):**

Subject: `Free parking enforcement for [Community/Company Name]`

```
Hi [First Name],

I've tried reaching you a couple of times — didn't want to just disappear.

Quick version of what I was calling about: Axle Towing provides private
property towing and parking enforcement for HOA communities across Phoenix
at zero cost to the HOA. Tow fees from violators fund the entire program —
including signage installation and monthly compliance reports.

If this is worth 10 minutes, here's a direct link to schedule a call:
[Calendly link]

Or reply here and I'll make it easy.

Best,
Elliott
Axle Towing & Impound
480-288-5526 | axletowing.com
```

**Day 14 — Final touch (AI outbound call):**

```
AI: "Hi [Name], this is Jordan from Axle Towing — this is our last
     scheduled reach-out so I don't want to be a pest.

     If parking enforcement ever comes up for [Community/Company],
     just remember us at 480-288-5526.

     Have a great day — take care."
```

_(After day 14 with no response → tag in GHL as "cold, revisit in 90 days")_

---

### 2.5 Call Recording and Transcript Workflow

**Recording setup:**

- All outbound calls recorded via Twilio (`TWILIO_RECORD_CALLS=true`)
- Recordings stored in Twilio Console → auto-forwarded to GHL via webhook
- GHL stores recording URL in contact record under "Call Recordings" custom field

**Transcript workflow:**

- Deepgram (or Whisper via OpenAI) transcribes each call post-completion
- Transcript appended to GHL contact note
- AI generates a 3-line summary: disposition, key objection, recommended next step
- Summary emailed to Elliott daily at 8am as call digest

**GHL pipeline disposition tags after each call:**

| Outcome                 | Tag                 |
| ----------------------- | ------------------- |
| Voicemail left          | `vm-left`           |
| Hung up immediately     | `no-contact`        |
| Engaged, not interested | `not-interested`    |
| Engaged, send info      | `info-requested`    |
| Engaged, follow up      | `warm-follow-up`    |
| Booked assessment       | `assessment-booked` |
| Transferred to Elliott  | `transferred-owner` |

---

## Section 3: Technical Setup

### 3.1 Platform Comparison: Bland.ai vs Vapi vs Retell AI

| Feature                  | Bland.ai                       | Vapi                             | Retell AI                    |
| ------------------------ | ------------------------------ | -------------------------------- | ---------------------------- |
| **Best for**             | High-volume outbound campaigns | Developer-friendly custom builds | Natural conversation quality |
| **Voice quality**        | Good (ElevenLabs integration)  | Excellent (BYO voice provider)   | Excellent (native voices)    |
| **Latency**              | ~800ms avg                     | ~500–700ms avg                   | ~400–600ms avg               |
| **Twilio compatibility** | Native                         | Native                           | Native                       |
| **Outbound campaigns**   | Built-in campaign manager      | Requires custom build            | Campaign tools available     |
| **Inbound IVR**          | Yes                            | Yes                              | Yes                          |
| **Custom LLM**           | GPT-4, Claude, custom          | GPT-4, Claude, Llama, custom     | GPT-4, Claude, custom        |
| **GHL webhook**          | Via HTTP webhook               | Via HTTP webhook                 | Via HTTP webhook             |
| **Call recording**       | Yes                            | Yes (via Twilio)                 | Yes                          |
| **Transcription**        | Built-in                       | Built-in                         | Built-in                     |
| **Voicemail detection**  | Yes (AMD)                      | Yes (AMD)                        | Yes (AMD)                    |
| **Pricing model**        | Per-minute (~$0.09/min)        | Per-minute (~$0.05–0.07/min)     | Per-minute (~$0.07–0.10/min) |
| **Free trial**           | Yes                            | Yes                              | Yes                          |
| **Dashboard**            | Yes                            | Yes                              | Yes                          |
| **Ease of setup**        | Easiest (no-code config)       | Moderate (SDK required)          | Moderate (config + SDK)      |

**Cost per call analysis (average 2-minute outbound call):**

| Platform            | Cost/Call | 500 calls/month | 2,000 calls/month |
| ------------------- | --------- | --------------- | ----------------- |
| Bland.ai            | ~$0.18    | ~$90/mo         | ~$360/mo          |
| Vapi                | ~$0.12    | ~$60/mo         | ~$240/mo          |
| Retell AI           | ~$0.16    | ~$80/mo         | ~$320/mo          |
| Twilio (TwiML only) | ~$0.04    | ~$20/mo         | ~$80/mo           |

_(Twilio TwiML = no AI conversation, just recorded scripts with DTMF. Included for baseline comparison.)_

**Recommendation: Vapi**

Vapi offers the best balance of voice quality, latency, developer control, and cost for Axle Towing's use case:

- Native Twilio integration (works with existing `/api/voice` routes)
- Sub-700ms latency = conversations feel natural
- Claude or GPT-4 as the underlying LLM
- BYO voice provider (ElevenLabs for custom voice)
- Competitive pricing at scale
- Strong webhook support for GHL integration

**Runner-up: Bland.ai** — if Elliott wants a no-code setup with a campaign manager UI and doesn't need deep custom development. Easiest to configure and launch.

---

### 3.2 Twilio Phone Number Configuration

**Current setup (from VOICE-AGENT-SETUP.md):**

- Phone number: `+14802885526`
- Inbound webhook: `https://axletowing.com/api/voice/inbound`
- Status callback: `https://axletowing.com/api/voice/status`

**Updated configuration for AI agent:**

```
Twilio Console → Phone Numbers → 480-288-5526

Voice Configuration:
  A Call Comes In:
    → Webhook: https://axletowing.com/api/voice/inbound
    → OR (if using Vapi): Point directly to Vapi's webhook URL
      (Vapi provides a phone number forwarding URL in dashboard)

Status Callback URL: https://axletowing.com/api/voice/status
  → Fires on: initiated, ringing, answered, completed

Recording callback: https://axletowing.com/api/voice/recording
  → Stores recording URL in GHL via webhook
```

**Vapi-specific Twilio setup:**

1. In Vapi dashboard → Phone Numbers → Import Twilio Number
2. Paste Twilio Account SID + Auth Token
3. Select `+14802885526` → Import
4. Vapi takes over inbound handling — all calls route through Vapi AI first
5. Vapi webhooks fire to GHL for logging

---

### 3.3 Webhook Endpoints Needed

**New endpoints to build in the Next.js app:**

| Endpoint                  | Method | Purpose                                                    |
| ------------------------- | ------ | ---------------------------------------------------------- |
| `/api/voice/inbound`      | POST   | Already exists — update to forward to Vapi or handle TwiML |
| `/api/voice/outbound`     | POST   | Already exists — trigger outbound campaign call            |
| `/api/voice/recording`    | POST   | NEW — receive recording URL from Twilio, push to GHL       |
| `/api/voice/transcript`   | POST   | NEW — receive transcript from Deepgram/Vapi, push to GHL   |
| `/api/voice/disposition`  | POST   | NEW — receive call outcome from Vapi webhook, tag in GHL   |
| `/api/voice/sms-followup` | POST   | NEW — trigger SMS sequence after voicemail drop            |

**Vapi webhook payload (example call completed):**

```json
{
  "event": "call.ended",
  "call": {
    "id": "call_abc123",
    "direction": "outbound",
    "to": "+16025550100",
    "from": "+14802885526",
    "duration": 127,
    "status": "completed",
    "transcript": "AI: Hi, this is Jordan...\nPROSPECT: ...",
    "summary": "Left voicemail. No live connection.",
    "disposition": "voicemail",
    "recordingUrl": "https://..."
  }
}
```

---

### 3.4 GHL Integration

**GHL workflow triggers:**

| Trigger                | Action                                                         |
| ---------------------- | -------------------------------------------------------------- |
| Inbound call completed | Create/update contact, add call note, assign to pipeline stage |
| HOA inquiry captured   | Add to "HOA Prospects" pipeline → Stage: "AI Contacted"        |
| Assessment booked      | Create appointment in GHL calendar, send confirmation SMS      |
| Voicemail left         | Tag `vm-left`, start SMS follow-up sequence (Day 3, Day 5)     |
| Not interested         | Tag `not-interested`, add to suppression list, pause sequence  |
| Info requested         | Tag `info-requested`, fire email automation with HOA guide     |
| Recording available    | Attach recording URL to contact note                           |
| Transcript available   | Append transcript to contact note                              |

**GHL Custom Fields to add:**

```
Contact Custom Fields:
- AI Call Date (Date)
- AI Call Disposition (Dropdown: voicemail, not-interested, warm, booked, transferred)
- Call Recording URL (Text)
- Properties Managed (Number)
- Community Name (Text)
- Assessment Scheduled Date (Date)
- AI Call Count (Number)
- Suppressed from AI Calls (Checkbox)
```

**GHL Smart Lists:**

- `AI Outbound — Pending` — Contacts queued for next call batch
- `VM Left — Awaiting SMS Day 3` — Voicemail left, SMS follow-up pending
- `Info Requested — Email Sent` — Email sent, monitoring for reply
- `Warm — Elliott to Call` — Engaged prospect ready for human follow-up
- `Assessment Booked` — Appointment confirmed
- `Not Interested — Suppressed` — Do not call again

---

### 3.5 Cost Analysis Per Call

**Monthly cost estimate — steady state (Year 1):**

| Item                   | Unit Cost          | Volume    | Monthly Cost    |
| ---------------------- | ------------------ | --------- | --------------- |
| Vapi (AI calls)        | $0.12/min          | 1,000 min | $120            |
| Twilio (phone minutes) | $0.013/min         | 1,000 min | $13             |
| Twilio SMS             | $0.0079/msg        | 500 SMS   | $4              |
| Deepgram transcription | $0.0043/min        | 1,000 min | $4.30           |
| ElevenLabs (voice)     | Included in Vapi   | —         | $0              |
| GHL (existing)         | Already subscribed | —         | $0 incremental  |
| **Total**              |                    |           | **~$141/month** |

**ROI scenario:**

- 1 new HOA contract = ~$1,000/month recurring
- Break-even on voice agent: 0.14 contracts per month
- Realistic conversion: 2–4 new contracts per month from 500+ outbound calls
- **ROI: 14x–28x on the voice agent spend alone**

---

## Section 4: Call Scripts (Ready to Use)

### 4.1 Inbound Emergency Towing Script (Word-for-Word)

_Configure this as the AI agent's system prompt for the emergency branch._

---

**System prompt for AI:**

> You are a friendly, efficient dispatcher assistant for Axle Towing & Impound in Phoenix, Arizona. Your job is to collect the caller's location and vehicle information, provide an ETA, and confirm dispatch. Be calm and reassuring — callers in a towing situation are often stressed. Keep responses short. Never argue about the situation. If you can't help, transfer to a human dispatcher immediately by saying "Let me get a dispatcher on the line for you right now."

**Conversation:**

```
AI: "Thank you for calling Axle Towing. Are you calling because you
     need a tow right now?"

CALLER: [Confirms]

AI: "Got it. First — are you in a safe spot, or are you in a lane
     of traffic or somewhere dangerous?"

CALLER: [Answers]

[If dangerous]
AI: "Okay, stay in your vehicle with hazard lights on. I'm getting
     a dispatcher on the line for you right now — don't hang up."
[TRANSFER TO DISPATCHER]

[If safe]
AI: "Good. What's the cross street or address where your vehicle is?"

CALLER: [Gives location]

AI: "And what's the year, make, and model of the vehicle?"

CALLER: [Gives vehicle info]

AI: "Perfect. And what happened — is the vehicle not starting,
     did you have an accident, flat tire, or something else?"

CALLER: [Describes situation]

AI: "Got it. We have a driver who can be there in approximately
     [ETA] minutes. What's the best phone number to reach you
     at while the driver is en route — is this number okay?"

CALLER: [Confirms or gives different number]

AI: "You'll get a text confirmation in just a moment with your
     driver's name and estimated arrival. Is there anything else
     I can help you with, or shall I confirm the dispatch?"

CALLER: [Confirms]

AI: "Perfect — dispatch confirmed. Your driver is on the way to
     [location]. If anything changes, call us back at 480-288-5526.
     Stay safe out there."
```

---

### 4.2 Inbound HOA Partner Inquiry Script (Word-for-Word)

```
AI: "Thanks for calling Axle Towing. It sounds like you might be
     interested in a partnership or referral program — is that right?"

CALLER: [Confirms]

AI: "Great. Can I get your name and the organization you're with?"

CALLER: [Gives name and org]

AI: "Thanks, [Name]. And are you managing HOA communities directly,
     or are you with a property management company?"

CALLER: [Answers]

AI: "Got it. How many communities or properties are you responsible for?"

CALLER: [Gives number]

AI: "Perfect. Our parking enforcement service is zero cost to the HOA —
     we install the signs, handle enforcement, and provide monthly reports.
     The HOA budget isn't touched.

     The best next step is a free 20-minute property walkthrough. Elliott,
     our owner, will come out, check your signage compliance, and give you
     an honest assessment — no obligation.

     What's a good email address to send you our partner guide and
     Elliott's contact info?"

CALLER: [Gives email]

AI: "Perfect. You'll have that in your inbox in the next few minutes.
     Elliott will follow up to schedule the walkthrough at your
     convenience. Is there anything else I can help you with today?"

CALLER: [Responds]

AI: "Wonderful. We're looking forward to connecting. Have a great day, [Name]."
```

---

### 4.3 Outbound HOA Cold Call Script — Complete, Word-for-Word

_AI system prompt:_

> You are Jordan, an outreach representative for Axle Towing & Impound in Phoenix, Arizona. Your goal is to have a natural, brief conversation about HOA parking enforcement and either book a free property assessment or get permission to send information. Be warm but direct. Never oversell. Listen more than you talk. If the prospect is clearly not interested, thank them and end the call gracefully. Do not reveal you are an AI unless directly asked — if asked, say "I'm an AI assistant for Axle Towing. Is it okay if I continue?"

---

**Full script:**

```
AI: "Hi, is this [First Name]?"

PROSPECT: [Confirms]

AI: "Hi [First Name], this is Jordan calling from Axle Towing & Impound
     in Phoenix. Quick question — do you handle parking enforcement for
     [Community / Company Name]?"

[If yes]
AI: "Perfect. I'll be quick — we provide parking enforcement for HOA
     communities across Phoenix at zero cost to the HOA. Tow fees from
     violators cover everything, including signage.

     Is parking enforcement something your community is actively
     managing, or is it more of a background issue right now?"

[If they're open to talking]
AI: "Got it. Can I ask — are you currently working with a towing
     company, or is enforcement kind of informal?"

[Has a company]
AI: "Totally. How's that working out — are you getting consistent
     response times and regular reporting from them?"

[Pause — listen]

AI: "The main thing we hear from boards that switch to us is response
     time and accountability. We give every community a direct cell
     number and monthly enforcement reports — not a call center.

     Would it be worth a free 20-minute walkthrough of your property?
     Even if you stay with your current provider, you'll know if your
     signage is fully compliant under Arizona law. No cost, no obligation."

[Interested]
AI: "Great. Can I get the best email to send you a confirmation and
     Elliott's direct contact?"

[Gets email]

AI: "Perfect. Elliott will reach out to schedule at a time that works
     for you. What days generally work best?"

[Gets availability]

AI: "Got it. I'll pass that along. Thanks for taking the time, [First Name].
     You'll hear from Elliott shortly."

---

[If they have questions]

Q: "What does it actually cost the HOA?"
AI: "Zero. Our entire service — signage, enforcement, monthly reports —
     is funded through tow impound fees collected from the violators
     themselves. The HOA budget isn't involved."

Q: "How fast do you respond?"
AI: "30 minutes or less, 24/7/365 including holidays. Every community
     gets a direct cell number for the account manager — not a call center."

Q: "How long have you been doing this?"
AI: "Axle Towing has 30-plus years of combined team experience in
     Phoenix metro. We've been operating in private property enforcement
     since 2021."

Q: "What areas do you cover?"
AI: "All of Phoenix metro — we cover 38 cities including Scottsdale,
     Tempe, Mesa, Chandler, Gilbert, Glendale, Peoria, and the East Valley."

---

[VOICEMAIL VERSION — plays if voicemail detected]

AI: "Hi [First Name], this is Jordan calling from Axle Towing & Impound
     in Phoenix. We provide parking enforcement for HOA communities at
     zero cost to the HOA — tow fees cover everything, including signage.

     If that's worth a two-minute conversation, call us back at
     480-288-5526. I'll also send you a quick text.

     Have a great day."
```

---

### 4.4 Outbound Follow-Up Call Script

_Used on Day 7 or Day 14 of the follow-up sequence — for prospects who received an email or info but haven't responded._

```
AI: "Hi [First Name], this is Jordan calling back from Axle Towing.
     I sent over some information about our HOA parking enforcement
     program last week — wanted to see if you had a chance to look
     at it and if you had any questions."

[If they remember]
AI: "Great. Did anything stand out, or is there a specific question
     I can answer to make it easier to decide if a walkthrough
     makes sense?"

[Common follow-up]

Q: "I shared it with the board and we want to think about it."
AI: "That's completely fair. When is the next board meeting?
     Elliott can put together a one-page summary specifically for
     the board — sometimes it's easier when it's designed for that
     format rather than general marketing."

Q: "We decided to stick with our current provider."
AI: "Totally understandable. Can I ask — is there anything specific
     that made you stick with them? Just so we know what to improve.
     No hard feelings either way."

Q: "We're not ready right now."
AI: "Got it. When would be a better time to check back in —
     is this more of a 90-day thing, or next budget cycle?"

[Closing — either outcome]
AI: "I appreciate you taking the time. Our info stays on file —
     whenever the timing is right, just call 480-288-5526 or
     reach out to Elliott directly. Have a great day, [First Name]."
```

---

## Section 5: Launch Checklist — 7-Day Setup

### Day 1: Account Setup

- [ ] Create Vapi account at vapi.ai (or Bland.ai if going no-code)
- [ ] Import Twilio number `+14802885526` into Vapi dashboard
- [ ] Set up ElevenLabs account → create "Jordan" voice (or use Vapi's built-in)
- [ ] Configure AI model: Claude 3 Sonnet (or GPT-4o) as underlying LLM
- [ ] Set up Deepgram account for transcription (or use Vapi's built-in transcription)

### Day 2: Inbound Agent Configuration

- [ ] Create Vapi inbound agent with system prompt from Section 4.1
- [ ] Configure IVR branch detection (keyword matching for emergency, billing, partner)
- [ ] Set warm transfer number to `480-288-5526` (dispatcher cell)
- [ ] Configure after-hours routing (10pm–6am → emergency screening script)
- [ ] Set voicemail detection for after-hours non-emergency → GHL task creation

### Day 3: Outbound Agent Configuration

- [ ] Create Vapi outbound agent with system prompt from Section 4.3
- [ ] Configure voicemail detection (AMD — Answering Machine Detection)
- [ ] Set voicemail script (short version from Section 4.3)
- [ ] Configure disposition webhook → `/api/voice/disposition`
- [ ] Test outbound call to a test number — verify voice quality and script flow

### Day 4: Webhook Integration

- [ ] Build `/api/voice/recording` endpoint — receives Twilio recording URL
- [ ] Build `/api/voice/transcript` endpoint — receives Vapi transcript
- [ ] Build `/api/voice/disposition` endpoint — receives call outcome, pushes to GHL
- [ ] Build `/api/voice/sms-followup` endpoint — triggers Twilio SMS after voicemail
- [ ] Test each webhook with Vapi's test event simulator

### Day 5: GHL Integration

- [ ] Add custom fields to GHL contacts (AI Call Date, Disposition, Recording URL, etc.)
- [ ] Build GHL workflow: "AI Call Completed" → route by disposition tag
- [ ] Build GHL workflow: "Assessment Booked" → confirmation SMS + email
- [ ] Build GHL workflow: "VM Left" → Day 3 SMS, Day 5 email sequence
- [ ] Add call recording URL field to contact notes automatically
- [ ] Set up daily 8am call digest email to Elliott

### Day 6: Testing

- [ ] Full inbound test: call `480-288-5526` → test all 4 branches
- [ ] Test warm transfer to dispatcher (branch 1, 2, and 0)
- [ ] Test after-hours screening (set system clock or use test mode)
- [ ] Full outbound test: trigger call from portal → verify disposition logged in GHL
- [ ] Test SMS follow-up triggers after voicemail
- [ ] Review transcripts for quality — adjust system prompts if needed
- [ ] Test GHL automations fire correctly for each disposition

### Day 7: Go Live

- [ ] Update Twilio inbound webhook to point to Vapi (or keep existing route with Vapi handoff)
- [ ] Upload initial outbound contact list to Vapi campaign (HOA prospect list from Apollo)
- [ ] Set campaign schedule: Mon–Thu, 9am–5pm Arizona time only (TCPA compliance)
- [ ] Set daily call cap: start at 50 calls/day, ramp to 200 after first week
- [ ] Enable call recording on all calls
- [ ] Monitor first 20 calls manually — review transcripts and dispositions
- [ ] Send Elliott a daily summary for the first 7 days post-launch

---

## Compliance Notes

- **TCPA:** Outbound AI calls require prior express consent or an established business relationship for cell phones. For cold HOA outreach, limit AI calls to business/office phone numbers (not personal cell phones identified in scraping)
- **Arizona ARS:** No additional state-level restrictions beyond TCPA for voice calls
- **Disclosure:** If directly asked "are you a real person?" — the AI must disclose it is an AI
- **Do Not Call:** Honor all opt-outs immediately. Any DTMF 9 or "not interested" response → suppress contact from all future AI calls within 24 hours
- **Call Hours:** Outbound AI calls only between 8am–9pm local Arizona time (TCPA requirement)
- **Recording consent:** Arizona is a one-party consent state — Axle Towing can record calls without informing the other party, but disclosing it is best practice

---

## Future Enhancements (Phase 2)

- [ ] Bilingual inbound agent (English + Spanish) for resident callers
- [ ] Real-time sentiment analysis — flag frustrated callers for immediate human escalation
- [ ] TowBook integration — AI pulls live ETA from dispatch software
- [ ] HOA board meeting scheduler — AI books directly into Elliott's Google Calendar
- [ ] Post-call survey via SMS — 1-question satisfaction rating after inbound tow
- [ ] AI call coaching — transcript analysis flags calls where prospects were close to booking
- [ ] Bulk CSV upload for outbound campaign batches from Apollo exports

---

_Prepared by AI Acrobatics for Axle Towing & Impound. March 2026. Linear: AI-2178._
