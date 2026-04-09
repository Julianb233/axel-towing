# Axel Towing — Automated Job Application Email Templates

**Version:** 1.0
**Date:** March 24, 2026
**Prepared by:** Julian Bradley / AI Acrobatics
**For:** Elliott — Axel Towing & Impound
**Linear:** AI-3332

---

## Overview

This document contains the full hiring pipeline email automation for Axel Towing. All templates are designed for use in GoHighLevel (GHL) and cover every stage from initial application receipt through 30-day new-hire check-in. Role-specific customizations are provided for three positions: **Driver**, **Dispatcher**, and **Office Staff**.

---

## Table of Contents

1. [GHL Workflow Setup Instructions](#ghl-workflow-setup-instructions)
2. [Personalization Tokens Reference](#personalization-tokens-reference)
3. [Stage 1: Application Received (Immediate Auto-Response)](#stage-1-application-received-immediate-auto-response)
4. [Stage 2: Phone Screen Invitation (Within 24 Hours)](#stage-2-phone-screen-invitation-within-24-hours)
5. [Stage 3: Phone Screen Confirmation](#stage-3-phone-screen-confirmation)
6. [Stage 4: Move Forward to In-Person Interview](#stage-4-move-forward-to-in-person-interview)
7. [Stage 5: Interview Reminder (24 Hours Before)](#stage-5-interview-reminder-24-hours-before)
8. [Stage 6: Post-Interview Follow-Up / Thank You](#stage-6-post-interview-follow-up--thank-you)
9. [Stage 7: Job Offer Email](#stage-7-job-offer-email)
10. [Stage 8: Respectful Rejection](#stage-8-respectful-rejection)
11. [Stage 9: 30-Day New Hire Check-In](#stage-9-30-day-new-hire-check-in)
12. [Role-Specific Customizations](#role-specific-customizations)
13. [A/B Subject Line Variations](#ab-subject-line-variations)
14. [Pipeline Tag Reference](#pipeline-tag-reference)

---

## GHL Workflow Setup Instructions

### Initial Setup

**Create a new pipeline in GHL called "Hiring Pipeline"** with the following stages:

| Stage                         | Tag                        | Description                            |
| ----------------------------- | -------------------------- | -------------------------------------- |
| Application Received          | `hiring-applied`           | Form submitted or application received |
| Phone Screen Scheduled        | `hiring-phone-screen`      | Interview scheduled, awaiting call     |
| Phone Screen Complete         | `hiring-phone-screen-done` | Call happened, evaluating              |
| In-Person Interview Scheduled | `hiring-interview`         | Moving forward, interview booked       |
| Interview Complete            | `hiring-interview-done`    | Evaluating after interview             |
| Offer Extended                | `hiring-offer-sent`        | Job offer email sent                   |
| Offer Accepted                | `hiring-hired`             | Candidate accepted, onboarding         |
| Not Moving Forward            | `hiring-rejected`          | Respectful rejection sent              |
| On Hold                       | `hiring-hold`              | Strong candidate, no current opening   |

---

### Workflow 1: Application Received → Auto-Response

**Trigger:** Contact fills out application form (or is manually added to pipeline with tag `hiring-applied`)
**Action:** Send Stage 1 email immediately
**Delay:** None — fires instantly
**Next action:** Add to "Phone Screen Queue" task for hiring manager (24h reminder)

```
Trigger: Tag Added = "hiring-applied"
Action 1: Send Email (Stage 1 template)
Action 2: Create Task → "Review application: {{contact.first_name}} {{contact.last_name}}" → Assigned to Elliott → Due in 4 hours
Action 3: Send internal Slack/notification → "New job application: {{contact.first_name}} — {{custom.applied_position}}"
```

---

### Workflow 2: Phone Screen Invitation

**Trigger:** Hiring manager manually moves contact to "Phone Screen Scheduled" stage OR adds tag `hiring-phone-screen`
**Action:** Send Stage 2 email
**Delay:** None — fires when stage changes
**Wait:** Send Stage 3 confirmation after applicant books via Calendly link

```
Trigger: Pipeline Stage Changed = "Phone Screen Scheduled"
Action 1: Send Email (Stage 2 template)
Action 2: Wait 48 hours
Action 3: If {{contact.calendly_booked}} = false → Send SMS follow-up: "Hi {{contact.first_name}}, did you get a chance to see our email about scheduling your phone call? Tap here: [link]"
```

---

### Workflow 3: Phone Screen Confirmation

**Trigger:** Calendly booking webhook fires (applicant books phone screen slot)
**Action:** Send Stage 3 confirmation immediately
**Delay:** None

```
Trigger: Calendly Booking Created (job applicant type)
Action 1: Send Email (Stage 3 template)
Action 2: Create reminder task for hiring manager 15 minutes before interview time
```

---

### Workflow 4: In-Person Interview

**Trigger:** Tag added = `hiring-interview`
**Action:** Send Stage 4 email
**Delay for reminder:** Set to fire 24 hours before interview date/time

```
Trigger: Tag Added = "hiring-interview"
Action 1: Send Email (Stage 4 template)
Action 2: Wait until 24 hours before {{custom.interview_datetime}}
Action 3: Send Email (Stage 5 reminder template)
Action 4: Send SMS → "Reminder: Your interview at Axel Towing is tomorrow at {{custom.interview_time}}. Address: [yard address]. Reply CONFIRM or call us at 858-555-0100."
```

---

### Workflow 5: Post-Interview

**Trigger:** Tag added = `hiring-interview-done`
**Action:** Send Stage 6 thank-you within 2 hours
**Internal action:** Notify Elliott to make decision within 48 hours

```
Trigger: Tag Added = "hiring-interview-done"
Action 1: Send Email (Stage 6 template)
Action 2: Create Task → "Make hiring decision: {{contact.first_name}}" → Due in 48 hours → Assigned to Elliott
Action 3: Wait 48 hours → If no decision tag added → Send alert to Elliott: "Reminder: Decision needed for {{contact.first_name}} {{contact.last_name}}"
```

---

### Workflow 6: Job Offer

**Trigger:** Tag added = `hiring-offer-sent`
**Action:** Send Stage 7 offer email
**Follow-up:** If no response in 48 hours, send SMS nudge

```
Trigger: Tag Added = "hiring-offer-sent"
Action 1: Send Email (Stage 7 template)
Action 2: Wait 48 hours
Action 3: If contact not tagged "hiring-hired" → Send SMS: "Hi {{contact.first_name}}, just checking in on the offer we sent! We're excited about the possibility of you joining the team. Any questions? Reply here or call us."
Action 4: Wait 24 more hours → If still no response → Create task for Elliott to call directly
```

---

### Workflow 7: Rejection

**Trigger:** Tag added = `hiring-rejected`
**Action:** Send Stage 8 rejection email
**Delay:** Send 24-48 hours after decision (never immediate — always shows deliberation)

```
Trigger: Tag Added = "hiring-rejected"
Action 1: Wait 24 hours (humanizes the process)
Action 2: Send Email (Stage 8 template)
Action 3: Remove all active hiring sequence tags
Action 4: Add tag "hiring-keep-on-file" if strong candidate
```

---

### Workflow 8: 30-Day New Hire Check-In

**Trigger:** Tag added = `hiring-hired` + 30 days elapsed
**Action:** Send Stage 9 check-in email

```
Trigger: Tag Added = "hiring-hired"
Action 1: Wait 30 days
Action 2: Send Email (Stage 9 template)
Action 3: Create Task → "30-day check-in done — ask for referrals if positive" → Assigned to Elliott
```

---

## Personalization Tokens Reference

Use these GHL merge fields in all templates:

| Token                          | Value                         | Example                             |
| ------------------------------ | ----------------------------- | ----------------------------------- |
| `{{contact.first_name}}`       | Applicant's first name        | "Marcus"                            |
| `{{contact.last_name}}`        | Applicant's last name         | "Torres"                            |
| `{{contact.email}}`            | Applicant's email             | marcus@email.com                    |
| `{{custom.applied_position}}`  | Role they applied for         | "Driver"                            |
| `{{custom.interview_date}}`    | Scheduled interview date      | "Tuesday, March 25"                 |
| `{{custom.interview_time}}`    | Scheduled interview time      | "10:00 AM"                          |
| `{{custom.interviewer_name}}`  | Who is conducting the call    | "Elliott"                           |
| `{{custom.phone_screen_date}}` | Phone screen date             | "Monday, March 24"                  |
| `{{custom.phone_screen_time}}` | Phone screen time             | "2:00 PM"                           |
| `{{custom.calendly_link}}`     | Booking link for phone screen | https://calendly.com/axeltowing/... |
| `{{custom.start_date}}`        | Proposed start date (offers)  | "April 7, 2026"                     |
| `{{custom.pay_rate}}`          | Offered pay rate              | "$22/hour"                          |
| `{{custom.hire_date}}`         | Actual hire start date        | "March 3, 2026"                     |
| `{{user.first_name}}`          | Sender's name (GHL user)      | "Elliott"                           |

---

## Stage 1: Application Received (Immediate Auto-Response)

**Trigger:** Application form submitted
**Send time:** Immediately
**GHL tag:** `hiring-applied`

---

### Subject Lines (A/B Test — pick one per batch)

- A: `We got your application, {{contact.first_name}} — here's what happens next`
- B: `Thanks for applying to Axel Towing, {{contact.first_name}}`
- C: `Application received ✓ — {{contact.first_name}}, we'll be in touch soon`

---

### Email Body

```
Hi {{contact.first_name}},

Thank you for applying to join the Axel Towing team! We received your application for the {{custom.applied_position}} position and our team is reviewing it now.

Here's what to expect:

• Our hiring manager will review your application within 1–2 business days
• If you're a strong fit, we'll reach out to schedule a quick phone call (about 15–20 minutes)
• From there, we'll invite top candidates for an in-person interview at our facility

In the meantime, if you have any questions, feel free to reply to this email or call us at [office phone number].

We appreciate your interest in Axel Towing. We take hiring seriously — our team is the backbone of everything we do, and we're looking for people who take pride in the work.

Talk soon,

{{user.first_name}}
Axel Towing & Impound
[Office Phone] | axletowing.com
```

---

## Stage 2: Phone Screen Invitation (Within 24 Hours)

**Trigger:** Hiring manager reviews application and wants to move forward
**Send time:** Within 24 hours of application
**GHL tag:** `hiring-phone-screen`

---

### Subject Lines (A/B Test)

- A: `{{contact.first_name}}, we'd love to connect — can we schedule a quick call?`
- B: `Next step: 15-minute phone call — Axel Towing`
- C: `Good news, {{contact.first_name}} — we reviewed your application`

---

### Email Body

```
Hi {{contact.first_name}},

Great news — after reviewing your application for our {{custom.applied_position}} position, we'd like to move forward with a quick phone call.

This will be a casual 15–20 minute conversation so we can learn a little more about you and answer any questions you have about the role.

**Schedule your call here:**
{{custom.calendly_link}}

Available times: Monday–Friday, 9 AM – 4 PM (Arizona time)

If none of those times work for you, just reply to this email and we'll find something that does.

Looking forward to connecting,

{{user.first_name}}
Axel Towing & Impound
[Office Phone] | axletowing.com
```

---

## Stage 3: Phone Screen Confirmation

**Trigger:** Applicant books phone screen via Calendly
**Send time:** Immediately upon booking
**GHL tag:** `hiring-phone-screen` (already set)

---

### Subject Lines (A/B Test)

- A: `Confirmed: Your phone call with Axel Towing — {{custom.phone_screen_date}} at {{custom.phone_screen_time}}`
- B: `You're all set, {{contact.first_name}} — here are your call details`
- C: `Phone screen booked ✓ — {{custom.phone_screen_date}} at {{custom.phone_screen_time}}`

---

### Email Body

```
Hi {{contact.first_name}},

You're all set! Here are the details for your phone call:

📞 Phone Screen Details
• Date: {{custom.phone_screen_date}}
• Time: {{custom.phone_screen_time}} (Arizona time)
• Who you'll talk to: {{custom.interviewer_name}}
• How it works: We'll call you at the phone number on your application

A few things to expect on the call:
• Quick intro and background questions (5 min)
• Overview of the {{custom.applied_position}} role and what a typical day looks like (5 min)
• Your questions for us (5 min)

No need to prepare anything formal — just be yourself. This is a conversation, not a test.

If something comes up and you need to reschedule, use this link: {{custom.calendly_link}}

See you on {{custom.phone_screen_date}},

{{user.first_name}}
Axel Towing & Impound
[Office Phone] | axletowing.com
```

---

## Stage 4: Move Forward to In-Person Interview

**Trigger:** Phone screen went well — hiring manager moves candidate forward
**Send time:** Same day as phone screen completion
**GHL tag:** `hiring-interview`

---

### Subject Lines (A/B Test)

- A: `{{contact.first_name}}, we'd like to invite you in — next step at Axel Towing`
- B: `You're moving forward — in-person interview invitation`
- C: `Great call, {{contact.first_name}} — can we meet in person?`

---

### Email Body

```
Hi {{contact.first_name}},

It was great speaking with you today. We were impressed by what we heard, and we'd like to invite you in for an in-person interview at our facility.

**Interview Details:**
• Date: {{custom.interview_date}}
• Time: {{custom.interview_time}} (Arizona time)
• Location: [Axel Towing yard address]
• Who you'll meet: {{custom.interviewer_name}}
• Estimated time: 30–45 minutes

**What to bring:**
• A valid driver's license
• Any certifications relevant to the {{custom.applied_position}} role
• Questions you have for us (we love when candidates come prepared)

**Parking:** Enter through [gate/entrance instructions]. Let the dispatcher know you're here for an interview and they'll direct you.

If you need to reschedule, please let us know at least 24 hours in advance by replying to this email or calling [office phone].

We're looking forward to meeting you in person.

{{user.first_name}}
Axel Towing & Impound
[Office Phone] | axletowing.com
```

---

## Stage 5: Interview Reminder (24 Hours Before)

**Trigger:** Automated — fires 24 hours before scheduled interview time
**Send time:** Exactly 24 hours before interview
**GHL tag:** `hiring-interview` (already set — use timed delay from booking)

---

### Subject Lines (A/B Test)

- A: `Reminder: Your Axel Towing interview is tomorrow at {{custom.interview_time}}`
- B: `See you tomorrow, {{contact.first_name}} — interview details inside`
- C: `Tomorrow at {{custom.interview_time}} — quick reminder from Axel Towing`

---

### Email Body

```
Hi {{contact.first_name}},

Just a quick reminder — your interview with Axel Towing is tomorrow!

**Tomorrow's Details:**
• Date: {{custom.interview_date}}
• Time: {{custom.interview_time}} (Arizona time)
• Location: [Axel Towing yard address]
• Who you'll meet: {{custom.interviewer_name}}

**Getting here:** [Brief directions or landmark notes]

If anything has changed and you need to reschedule or cancel, please let us know today so we can adjust. You can reply to this email or call us at [office phone].

Otherwise — we'll see you tomorrow. Looking forward to it.

{{user.first_name}}
Axel Towing & Impound
[Office Phone] | axletowing.com
```

---

## Stage 6: Post-Interview Follow-Up / Thank You

**Trigger:** Interview is marked complete in GHL (tag `hiring-interview-done` added)
**Send time:** Within 2 hours of interview completing
**GHL tag:** `hiring-interview-done`

---

### Subject Lines (A/B Test)

- A: `Thank you for coming in today, {{contact.first_name}}`
- B: `Great meeting you, {{contact.first_name}} — here's what's next`
- C: `We appreciate your time, {{contact.first_name}} — Axel Towing update`

---

### Email Body

```
Hi {{contact.first_name}},

Thank you for taking the time to come in and meet with us today. We really enjoyed the conversation and appreciated your honesty and energy.

Our team will be reviewing all candidates over the next 1–2 business days. We know waiting is never fun, so we commit to getting back to you with a decision by [specific date — customize manually or with custom field].

In the meantime, if you think of any questions that came up after the interview, feel free to reply to this email.

We appreciate your interest in joining Axel Towing — this is a team built on reliability and trust, and we take every hiring decision seriously.

More soon,

{{user.first_name}}
Axel Towing & Impound
[Office Phone] | axletowing.com
```

---

## Stage 7: Job Offer Email

**Trigger:** Elliott decides to hire — tag `hiring-offer-sent` added
**Send time:** Immediately when tag is applied
**GHL tag:** `hiring-offer-sent`

> **Note:** Always review and customize the pay rate, start date, and any role-specific details before this email fires. Use a GHL manual review step or review inside the contact record before triggering.

---

### Subject Lines (A/B Test)

- A: `{{contact.first_name}}, we'd love to have you on the team — offer inside`
- B: `Job Offer — {{custom.applied_position}} at Axel Towing`
- C: `You got the job, {{contact.first_name}} 🎉`

---

### Email Body

```
Hi {{contact.first_name}},

We're thrilled to offer you the {{custom.applied_position}} position at Axel Towing & Impound!

After meeting with you, the team agreed — you'd be a great fit for what we're building here.

**Offer Details:**
• Position: {{custom.applied_position}}
• Pay: {{custom.pay_rate}}
• Schedule: [Shift details — customize per role]
• Proposed Start Date: {{custom.start_date}}
• Location: [Axel Towing address]

**Next Steps:**
1. Reply to this email to confirm you'd like to accept the offer
2. We'll send you new hire paperwork to complete before your start date
3. On your first day, report to [specific location/person] at [time]

**To accept:** Simply reply "I accept" or call us at [office phone].

We ask that you let us know by [decision deadline — 48–72 hours out] so we can finalize scheduling and onboarding.

We're excited to have you join us. Axel Towing runs on good people, and we think you're going to fit right in.

Welcome to the team (almost officially),

{{user.first_name}}
Axel Towing & Impound
[Office Phone] | axletowing.com
```

---

## Stage 8: Rejection Email (Respectful, Door Open)

**Trigger:** Elliott decides not to move forward — tag `hiring-rejected` added
**Send time:** 24–48 hours after decision (workflow adds a delay — never immediate)
**GHL tag:** `hiring-rejected`

> **Tone guidance:** Warm, brief, and specific enough to feel personal. Never generic. Always leave the door open — towing is a small world and good candidates may be right for a future role.

---

### Subject Lines (A/B Test)

- A: `An update on your application — Axel Towing`
- B: `Thank you for interviewing with us, {{contact.first_name}}`
- C: `We appreciate your time, {{contact.first_name}} — Axel Towing update`

---

### Email Body (Post-Interview Rejection)

```
Hi {{contact.first_name}},

Thank you again for taking the time to interview with us — we genuinely appreciated getting to know you.

After careful consideration, we've decided to move forward with another candidate for the {{custom.applied_position}} position at this time. This was not an easy decision, and it in no way reflects a lack of capability or character on your part.

We were impressed by [something genuine — customize manually or leave as is]:
→ "...your enthusiasm and work ethic."

If a role opens up in the future that feels like the right fit, we'd be glad to reach out — and you're welcome to apply again at any time.

Thank you for your time and interest in Axel Towing. We wish you the best in your search.

Sincerely,

{{user.first_name}}
Axel Towing & Impound
[Office Phone] | axletowing.com
```

---

### Email Body (Pre-Interview / Phone Screen Rejection)

```
Hi {{contact.first_name}},

Thank you for applying to Axel Towing and for taking the time to connect with us.

After reviewing all applications, we've decided to move forward with other candidates for the {{custom.applied_position}} role at this time. We appreciate your interest and your willingness to be part of the process.

We do keep applications on file for 90 days, and if a suitable opening comes up, we may reach out. You're always welcome to apply again in the future.

Best of luck in your search,

{{user.first_name}}
Axel Towing & Impound
[Office Phone] | axletowing.com
```

---

## Stage 9: 30-Day New Hire Check-In

**Trigger:** 30 days after tag `hiring-hired` is applied
**Send time:** Automated — exactly 30 days post-hire date
**GHL tag:** `hiring-hired` → 30-day wait → fires

---

### Subject Lines (A/B Test)

- A: `30 days in — how's it going, {{contact.first_name}}?`
- B: `One month on the team, {{contact.first_name}} — quick check-in`
- C: `How are you settling in? — {{contact.first_name}}`

---

### Email Body

```
Hi {{contact.first_name}},

Can you believe it's already been a month since you joined the Axel Towing team? Time flies.

We wanted to check in and see how things are going from your perspective.

A few quick questions:
• How are you feeling about the role and day-to-day responsibilities?
• Is there anything we could do to make your experience better?
• Are there any tools, training, or support you feel you're missing?
• Is there anything you're still unsure about that we can help clarify?

You can reply directly to this email, or if you'd prefer to chat in person, just let {{custom.interviewer_name}} know — we're always available.

Also — if you have friends or family who might be looking for work, we're always happy to consider referrals. People like you tend to know good people.

We're glad you're here. Keep up the great work.

{{user.first_name}}
Axel Towing & Impound
[Office Phone] | axletowing.com
```

---

## Role-Specific Customizations

Use these additions in the core templates above based on `{{custom.applied_position}}`.

---

### Driver

**Stage 1 — Application Received (add to body):**

> "As you may know, driver positions at Axel Towing require a valid Arizona driver's license, a clean MVR, and the ability to operate a variety of tow truck configurations. We'll verify those details during the phone screen."

**Stage 4 — In-Person Interview (replace "What to bring"):**

> **What to bring:**
>
> - Valid Arizona driver's license
> - Current MVR printout (if available — we'll run one ourselves as well)
> - Any tow truck endorsements or heavy vehicle certifications
> - DOT medical card if applicable

**Stage 7 — Job Offer (add to Schedule section):**

> - Shift: [Day shift / Night shift / Rotating] — [specific hours]
> - Dispatch coverage: 24/7/365 operations — some weekend and holiday shifts required
> - Equipment: You will be assigned a [truck type] and responsible for daily pre-trip inspections

**Stage 9 — 30-Day Check-In (add custom question):**

> - How are you feeling about your assigned equipment and routes?
> - Is there any additional training on specific truck types or situations you'd find helpful?

---

### Dispatcher

**Stage 1 — Application Received (add to body):**

> "Dispatchers are the heartbeat of our operation — coordinating drivers, managing TowBook, handling property management calls, and keeping everything running smoothly under pressure. We're looking for someone organized, calm, and a great communicator."

**Stage 4 — In-Person Interview (replace "What to bring"):**

> **What to bring:**
>
> - Valid ID
> - Any notes on software or dispatch systems you've used before (we use TowBook)
> - Questions about how our dispatch center operates day-to-day

**Stage 7 — Job Offer (add to Schedule section):**

> - Shift: [Specific shift — Days / Nights / Weekends]
> - This role involves managing multi-line phones, TowBook dispatch software, and coordinating with property managers across our service area
> - Training period: [X days] of shadowing before solo dispatch

**Stage 9 — 30-Day Check-In (add custom question):**

> - How are you feeling about TowBook and our dispatch process?
> - Are there any call types or situations you'd like more guidance on handling?

---

### Office Staff

**Stage 1 — Application Received (add to body):**

> "Our office team handles customer intake, billing coordination, TowBook record management, and support for both clients and our field team. If you're organized and people-oriented, you'll fit right in."

**Stage 4 — In-Person Interview (replace "What to bring"):**

> **What to bring:**
>
> - Valid ID
> - Resume (printed copy if you have it)
> - Any examples of office software or systems you're comfortable with (Excel, QuickBooks, Google Workspace, etc.)

**Stage 7 — Job Offer (add to Schedule section):**

> - Shift: Monday–Friday, [hours] | Some Saturdays may be required during peak periods
> - Responsibilities include: [Customer intake / Billing / Records management — select applicable]
> - Training period: [X days] of full onboarding with current team

**Stage 9 — 30-Day Check-In (add custom question):**

> - How are you feeling about the office processes and systems we use?
> - Is there anything about billing, customer calls, or record-keeping you'd like more training on?

---

## A/B Subject Line Variations

Use these across all stages to test open rates. In GHL, split contacts 50/50 using the A/B test feature in email workflows.

| Stage                         | Version A                                                                                   | Version B                                                             | Version C                                                                              |
| ----------------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| 1 — Application Received      | `We got your application, {{contact.first_name}} — here's what happens next`                | `Thanks for applying to Axel Towing, {{contact.first_name}}`          | `Application received ✓ — {{contact.first_name}}, we'll be in touch soon`              |
| 2 — Phone Screen Invite       | `{{contact.first_name}}, we'd love to connect — can we schedule a quick call?`              | `Next step: 15-minute phone call — Axel Towing`                       | `Good news, {{contact.first_name}} — we reviewed your application`                     |
| 3 — Phone Screen Confirmation | `Confirmed: Your phone call — {{custom.phone_screen_date}} at {{custom.phone_screen_time}}` | `You're all set, {{contact.first_name}} — here are your call details` | `Phone screen booked ✓ — {{custom.phone_screen_date}} at {{custom.phone_screen_time}}` |
| 4 — Interview Invite          | `{{contact.first_name}}, we'd like to invite you in — next step at Axel Towing`             | `You're moving forward — in-person interview invitation`              | `Great call, {{contact.first_name}} — can we meet in person?`                          |
| 5 — Interview Reminder        | `Reminder: Your Axel Towing interview is tomorrow at {{custom.interview_time}}`             | `See you tomorrow, {{contact.first_name}} — interview details inside` | `Tomorrow at {{custom.interview_time}} — quick reminder from Axel Towing`              |
| 6 — Post-Interview            | `Thank you for coming in today, {{contact.first_name}}`                                     | `Great meeting you, {{contact.first_name}} — here's what's next`      | `We appreciate your time, {{contact.first_name}} — Axel Towing update`                 |
| 7 — Job Offer                 | `{{contact.first_name}}, we'd love to have you on the team — offer inside`                  | `Job Offer — {{custom.applied_position}} at Axel Towing`              | `You got the job, {{contact.first_name}}`                                              |
| 8 — Rejection                 | `An update on your application — Axel Towing`                                               | `Thank you for interviewing with us, {{contact.first_name}}`          | `We appreciate your time, {{contact.first_name}} — Axel Towing update`                 |
| 9 — 30-Day Check-In           | `30 days in — how's it going, {{contact.first_name}}?`                                      | `One month on the team, {{contact.first_name}} — quick check-in`      | `How are you settling in? — {{contact.first_name}}`                                    |

### A/B Testing Best Practices in GHL

1. **Split size:** 50/50 for statistically meaningful results. If contact volume is low, test one subject line variation per week rather than simultaneously.
2. **Track open rate** as primary KPI. Click-through rate as secondary.
3. **Declare a winner** after 50+ sends per variation. Retire the loser and promote the winner.
4. **Change one variable at a time.** Only test subject line OR send time OR body copy — never multiple variables in the same test.
5. **Record results** in GHL Reports or a shared Google Sheet so the team can see trends over time.

---

## Pipeline Tag Reference

Add these to the existing Axel Towing tag system in GHL under the `hiring-` prefix:

| Tag                        | Trigger                                   | Meaning                            |
| -------------------------- | ----------------------------------------- | ---------------------------------- |
| `hiring-applied`           | Form submission or manual entry           | Application received               |
| `hiring-phone-screen`      | Hiring manager moves forward              | Phone screen scheduled             |
| `hiring-phone-screen-done` | Call completed                            | Evaluating candidate               |
| `hiring-interview`         | Strong phone screen — invite in-person    | In-person interview scheduled      |
| `hiring-interview-done`    | Interview completed                       | Decision pending                   |
| `hiring-offer-sent`        | Decision: hire — offer emailed            | Awaiting acceptance                |
| `hiring-hired`             | Offer accepted                            | Active employee — start onboarding |
| `hiring-rejected`          | Decision: not moving forward              | Rejection email queued             |
| `hiring-hold`              | Strong candidate, no current opening      | Keep on file 90 days               |
| `hiring-keep-on-file`      | Added by hiring manager manually          | Follow up if new opening arises    |
| `hiring-no-show`           | Candidate missed scheduled call/interview | No-show flag for tracking          |

---

## Implementation Checklist

- [ ] Create "Hiring Pipeline" in GHL with all 9 stages
- [ ] Add all `hiring-` tags to GHL tag library
- [ ] Create custom fields: `applied_position`, `interview_date`, `interview_time`, `phone_screen_date`, `phone_screen_time`, `calendly_link`, `pay_rate`, `start_date`, `hire_date`
- [ ] Set up Calendly account for job applicant booking (separate from sales Calendly if applicable)
- [ ] Connect Calendly webhook to GHL workflow trigger
- [ ] Build Workflow 1 (Application Received) and test with a dummy contact
- [ ] Build Workflows 2–8 sequentially, testing each before moving to the next
- [ ] Set up Workflow 8 (30-Day Check-In) and verify 30-day delay fires correctly
- [ ] Configure A/B subject line testing in GHL email builder for at least Stage 1 and Stage 2
- [ ] Set up internal notification for Elliott when new applications come in
- [ ] Set up internal task reminders for hiring decision deadlines
- [ ] Test full pipeline with a real application before going live

---

_Document prepared by Julian Bradley / AI Acrobatics — March 24, 2026_
_Part of Linear issue AI-3332 — Axel Towing Hiring Automation_
