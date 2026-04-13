/**
 * Axle Towing - 21-Day Nurture Campaign Email Templates
 * AI-7461: Build 21-Day Nurture Campaign Workflow in GHL
 *
 * All email/SMS content sourced from docs/NURTURE-CAMPAIGN-SEQUENCES.md
 * These templates map 1:1 to GHL workflow steps.
 */

// ─── Pipeline Stages (Nurture Pipeline) ─────────────────────────────
const PIPELINE_STAGES = [
  'New Lead',
  'Contacted',
  'Engaged',
  'Call Booked',
  'Proposal Sent',
  'Active Account',
  'On Hold',
  'Closed Lost',
  'Referred',
];

// ─── Tags ────────────────────────────────────────────────────────────
const REQUIRED_TAGS = [
  'hoa-board-member',
  'property-manager',
  'apartment-manager',
  'commercial-owner',
  'active-account',
  'on-hold',
  'cold-prospect',
  'engaged',
  'call-booked',
  'referred-us',
  'do-not-contact',
  'nurture-active',
  'nurture-completed',
  'nurture-replied',
  'retention-enrolled',
  'renewal-enrolled',
];

// ─── Custom Fields ───────────────────────────────────────────────────
const CUSTOM_FIELDS = [
  { name: 'Property Name', type: 'TEXT' },
  { name: 'Property Type', type: 'SINGLE_OPTIONS', options: ['HOA', 'Apartment', 'Commercial', 'Other'] },
  { name: 'Number of Properties', type: 'NUMERICAL' },
  { name: 'Contract Renewal Date', type: 'DATE' },
  { name: 'Last Tow Date', type: 'DATE' },
  { name: 'Referred By', type: 'TEXT' },
  { name: 'Notes - Elliott', type: 'LARGE_TEXT' },
];

// ─── Sequence 1: Cold Outreach (Multi-Channel, 21 Days) ─────────────
const COLD_OUTREACH = {
  tag: 'cold-prospect',
  pipeline_stage: 'New Lead',
  cadence: [0, 2, 5, 8, 14, 21, 22],
  steps: [
    {
      step: 1,
      day: 0,
      type: 'EMAIL',
      subject: 'Unauthorized parking at {{contact.company_name}}?',
      body: `Hi {{contact.first_name}},

I'm reaching out because we work with property managers and HOA boards across {{custom.city_area}} to handle unauthorized parking and vehicle removal - fast, clean, and fully compliant with Arizona law.

I'm Elliott with Axle Towing & Impound. We service 38+ cities across the Phoenix metro, and we're one of the few operators with 30+ years of combined team experience and 24/7/365 dispatch.

What we offer property accounts:

- Free towing enforcement - no cost to the property
- Response typically within 60 minutes
- Compliant with ARS Chapter 28 - we handle the paperwork
- One point of contact - not a call center, a dedicated rep

Would you be open to a 15-minute call this week to see if it's a fit?

Best,
Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
    },
    {
      step: 2,
      day: 2,
      type: 'SMS',
      body: `Hi {{contact.first_name}}, this is Elliott from Axle Towing. Did you get my email about unauthorized parking enforcement for {{contact.company_name}}? Happy to answer any questions - just reply here.`,
    },
    {
      step: 3,
      day: 5,
      type: 'EMAIL',
      subject: 'How Pinnacle Ridge HOA eliminated parking complaints in 30 days',
      body: `Hi {{contact.first_name}},

I wanted to share a quick story.

A 200-unit HOA in Scottsdale was dealing with chronic unauthorized parking - residents were calling the board at all hours, tensions were high, and the previous towing company ghosted them after the first month.

We took over the account. Within 30 days:

- 47 unauthorized vehicles removed (no cost to the HOA)
- Zero resident complaints about the process - every tow was documented and posted
- Board chair stopped getting late-night calls

The key difference: we show up. Every time. And we call you back.

That's not marketing copy - it's just what we do.

I'd love to bring that same consistency to {{contact.company_name}}. Are you available for a quick call this week?

Elliott
Axle Towing & Impound
480-288-5526`,
    },
    {
      step: 4,
      day: 8,
      type: 'VOICEMAIL',
      script: 'A',
      body: `Hi {{contact.first_name}}, this is Elliott calling from Axle Towing and Impound here in the Phoenix metro. I sent you an email earlier this week about unauthorized parking enforcement for your property - I just wanted to put a voice to the name. We work with HOA boards and property managers across 38 cities in the Phoenix area. No cost to the property, full ARS compliance, 24/7 dispatch. If this is something worth a quick conversation, just call or text me back at 480-288-5526. That's my direct cell. Hope to connect soon - have a great day.`,
    },
    {
      step: 5,
      day: 14,
      type: 'EMAIL',
      subject: 'Last note from me - special offer for new accounts',
      body: `Hi {{contact.first_name}},

I've reached out a couple of times and haven't heard back - totally understand, you're busy.

I wanted to leave you with one thing: we're currently onboarding new property accounts in {{custom.city_area}} and we have room for 3 more this month.

For accounts that sign this month, we're including:

- Free parking violation notice templates (Arizona-compliant)
- Free signage consultation (we'll tell you exactly what signs you need per ARS requirements)
- Priority response guarantee in writing

If the timing isn't right, no worries - save my number for when your current situation changes.

480-288-5526 | elliott@axletowing.com

Elliott
Axle Towing & Impound`,
    },
    {
      step: 6,
      day: 21,
      type: 'SMS',
      body: `Hey {{contact.first_name}} - Elliott from Axle Towing. I'll stop reaching out after this. If unauthorized parking ever becomes a headache at {{contact.company_name}}, we're here. 480-288-5526.`,
    },
    {
      step: 7,
      day: 22,
      type: 'PIPELINE_MOVE',
      stage: 'On Hold',
      condition: 'no_response',
    },
  ],
};

// ─── Sequence 2: HOA Board Member (5 Emails, 25 Days) ────────────────
const HOA_BOARD_MEMBER = {
  tag: 'hoa-board-member',
  cadence: [0, 4, 9, 16, 25],
  steps: [
    {
      step: 1,
      day: 0,
      type: 'EMAIL',
      subject: 'HOA board members in {{custom.city_area}} - are parking violations becoming a liability?',
      body: `Hi {{contact.first_name}},

Managing an HOA means dealing with the stuff nobody else wants to handle - and unauthorized parking is near the top of that list.

Residents file complaints. Boards get blamed. And if the towing company doesn't document everything properly, you could be looking at a wrongful tow dispute.

My name is Elliott. Axle Towing & Impound has worked with HOA boards across Chandler, Gilbert, Scottsdale, Mesa, and Tempe for years. Here's what we bring to every HOA account:

Compliance protection:
Every vehicle removal is documented with photos, timestamps, and ARS-compliant notification. You get a copy. You're covered.

Resident communication:
We post notices at the vehicle before towing whenever required by your CC&Rs. No surprises. No "I didn't know" calls to the board.

No cost to the HOA:
Our service is funded by the vehicle owner - not your budget.

24/7 availability:
Board members shouldn't be fielding parking complaints at midnight. When residents call, we're available.

Would it make sense to have a 15-minute conversation about your current situation?

Elliott
Axle Towing & Impound
480-288-5526`,
    },
    {
      step: 2,
      day: 4,
      type: 'EMAIL',
      subject: 'The 3 most common HOA towing mistakes (and how to avoid them)',
      body: `Hi {{contact.first_name}},

Quick follow-up - I wanted to share something useful whether or not we ever work together.

The 3 most common HOA towing mistakes:

1. Using a company that isn't licensed and insured in Arizona.
If an unlicensed operator tows from your property and something goes wrong, the HOA can be named in the claim. Always verify AZ Motor Vehicle Division licensing.

2. Inadequate signage.
Under ARS 28-4843, parking enforcement signage must meet specific requirements - font size, placement, content. We've seen HOAs lose disputes because their signs were 2 inches too small.

3. No paper trail.
Every tow should be documented. Photos of the vehicle in violation, the sign visible in frame, timestamp. Without this, you're exposed.

At Axle Towing, we handle all three. We're fully licensed, we'll do a free signage audit, and every tow comes with a complete documentation package.

Want a free audit of your current parking enforcement setup? 15 minutes, no strings attached.

Elliott`,
    },
    {
      step: 3,
      day: 9,
      type: 'EMAIL',
      subject: '{{contact.company_name}} - what happens when residents complain?',
      body: `Hi {{contact.first_name}},

One scenario we hear constantly from HOA boards:

A resident gets towed. They're upset. They call the board. The board has no documentation to show them. The resident threatens to sue. The board scrambles.

This doesn't have to happen.

When Axle Towing handles enforcement for your property, every tow comes with a full documentation packet you can share with any complaining resident instantly:

- Photo of the vehicle in the violation zone
- Sign visible in the same photo
- Date, time, and location of the tow
- ARS statute that applies
- Tow company license number

When a resident sees that packet, the conversation is over. They were parked in violation. It's documented. The board did its job.

Is this the kind of backup you'd want behind your parking enforcement?

Elliott`,
    },
    {
      step: 4,
      day: 16,
      type: 'EMAIL',
      subject: 'HOA boards who switched to Axle Towing say this most',
      body: `Hi {{contact.first_name}},

When I ask HOA board chairs what changed after they switched to us, the most common answer is: "I stopped getting calls."

Not that parking violations disappeared - those still happen. But when they do:

- Residents call us, not the board
- We handle it
- You get a notification, not a crisis

We've worked with boards managing everything from 50-unit condos to 400-unit master-planned communities. The setup takes less than a week.

If you're still with your current provider and things are fine - great. But if parking enforcement is still eating board meeting time or generating resident drama, I'd like to show you a different way.

Elliott
Axle Towing & Impound`,
    },
    {
      step: 5,
      day: 25,
      type: 'EMAIL',
      subject: 'Before I move on - one last thought for {{contact.company_name}}',
      body: `Hi {{contact.first_name}},

I'm going to wrap up my outreach here, but I wanted to leave you with something concrete.

What an Axle Towing HOA account includes:

- Written service agreement with response time guarantees
- Free ARS-compliant signage consultation
- 24/7 dispatch (real people, real phone)
- Full documentation on every tow
- Monthly tow activity report for your records
- Dedicated contact - Elliott's direct cell

If parking enforcement is ever a board agenda item, save this email.

480-288-5526 | axletowing.com

I'll leave the door open.

Elliott`,
    },
  ],
};

// ─── Sequence 3: Property Manager (5 Emails, 28 Days) ────────────────
const PROPERTY_MANAGER = {
  tag: 'property-manager',
  cadence: [0, 5, 11, 18, 28],
  steps: [
    {
      step: 1,
      day: 0,
      type: 'EMAIL',
      subject: 'Managing multiple Phoenix-area properties? One towing partner for all of them.',
      body: `Hi {{contact.first_name}},

If you're managing more than one property in the Phoenix metro, you know how painful it is when each one has a different towing vendor - different contacts, different response times, different paperwork.

I'm Elliott with Axle Towing & Impound. We work with property management companies that want one consistent enforcement partner across their portfolio.

Here's what that looks like in practice:

Single point of contact: My direct cell for every property in your book. Not a call center.
Consistent response: Same standards, same documentation, same speed - whether it's your property in Mesa or your property in Chandler.
Portfolio-level reporting: Monthly tow activity summary across all properties, ready for your records or for your clients.
Bulk account pricing: More properties = better rates. We reward portfolio partnerships.

Do you have 15 minutes this week? I'd like to learn about your portfolio and see if we'd be a fit.

Elliott
480-288-5526`,
    },
    {
      step: 2,
      day: 5,
      type: 'EMAIL',
      subject: 'The #1 complaint property managers have about towing companies',
      body: `Hi {{contact.first_name}},

After years in this business, I can tell you the #1 complaint we hear from property managers who switch to us:

"My last company never called back."

Not once. Not twice. Consistently. Property manager calls about a tow, company doesn't respond. Tenant dispute, company goes quiet. Invoice question, voicemail purgatory.

We operate differently.

When you call Elliott's direct line, Elliott picks up. When there's a dispute, we send you the documentation within 24 hours. When you need something documented for a tenant file, we're on it.

Is that the kind of reliability missing from your current setup?

Elliott`,
    },
    {
      step: 3,
      day: 11,
      type: 'EMAIL',
      subject: 'How we handle tenant parking disputes so you don\'t have to',
      body: `Hi {{contact.first_name}},

Here's a scenario I'll bet you've dealt with:

A tenant gets towed. They're furious. They come to your office. You have to track down your towing company, get documentation, and play referee - all while trying to do everything else on your plate.

Here's how it works when you have an Axle Towing account:

1. Tenant calls us directly (we give them our number)
2. We walk them through what happened and why
3. We send them their documentation
4. You get a heads-up if it escalates - usually it doesn't

We take the dispute off your desk. That's part of the service.

Want to see how this would work across your properties?

Elliott`,
    },
    {
      step: 4,
      day: 18,
      type: 'EMAIL',
      subject: '{{contact.first_name}} - a question about your current towing setup',
      body: `Hi {{contact.first_name}},

Quick question: how much time per month does your team spend on towing-related issues? Complaints, disputes, documentation requests, coordinating with your current provider?

Most property managers we talk to say it's 2-4 hours per month, per property. For a 10-property portfolio, that's 20-40 hours of staff time.

With a properly structured enforcement setup, that number drops to under 30 minutes per property per month - mostly just reviewing monthly reports.

That's the difference a good enforcement partner makes.

Would it be worth 15 minutes to find out if we could get you there?

Elliott
Axle Towing & Impound
480-288-5526`,
    },
    {
      step: 5,
      day: 28,
      type: 'EMAIL',
      subject: 'Portfolio partnership offer - closing this out',
      body: `Hi {{contact.first_name}},

Last note from me.

For property managers with 5+ properties in the Phoenix metro, we offer:

- Dedicated account rep (direct cell, not a hotline)
- Consolidated monthly reporting across all properties
- Priority dispatch - your properties jump the queue
- Annual rate lock - pricing locked for 12 months
- Free signage audit for every property at onboarding

This package isn't listed anywhere - it's for portfolio partners only.

If now isn't the right time, save my number. When your current setup lets you down, I want to be the first call.

Elliott
480-288-5526 | axletowing.com`,
    },
  ],
};

// ─── Sequence 4: Re-Engagement (On Hold Accounts, 14 Days) ──────────
const RE_ENGAGEMENT = {
  tag: 'on-hold',
  pipeline_stage: 'On Hold',
  cadence: [0, 7, 14],
  steps: [
    {
      step: 1,
      day: 0,
      type: 'EMAIL',
      subject: 'Checking in - it\'s been a while, {{contact.first_name}}',
      body: `Hi {{contact.first_name}},

It's Elliott from Axle Towing. I know we haven't connected in a while, and I wanted to reach out personally.

I've been thinking about {{contact.company_name}} and wondering how parking enforcement has been going since we last spoke. If we dropped the ball on follow-up - that's on me, and I'm sorry. We've made changes internally to make sure that doesn't happen anymore.

If you found a solution that's working great, I'm genuinely glad. But if things have been inconsistent, slow, or just a hassle - I'd like to earn another shot.

No pitch. Just a quick conversation to catch up.

Would you be open to 10 minutes this week?

Elliott
480-288-5526`,
    },
    {
      step: 2,
      day: 7,
      type: 'EMAIL',
      subject: 'What\'s changed at Axle Towing since we last connected',
      body: `Hi {{contact.first_name}},

I wanted to share a few things that have changed since we last worked together (or since we spoke):

What's new:

- 24/7 dispatch with real staff - no more voicemail during off-hours
- Online documentation portal for every tow - you can pull reports anytime
- Dedicated account rep assigned to each property - same person, every time
- Formal service agreements with written response time guarantees

The version of Axle Towing you may have experienced before is different from what we are today.

If you're open to it, I'd love to show you what that looks like for {{contact.company_name}} specifically.

Elliott`,
    },
    {
      step: 3,
      day: 14,
      type: 'SMS',
      body: `Hi {{contact.first_name}}, Elliott from Axle Towing. I sent a couple of emails - didn't want to let this slip. If you ever want to reconnect about {{contact.company_name}}, I'm here. 480-288-5526.`,
    },
  ],
};

// ─── Sequence 5: Retention - Quarterly Check-In ──────────────────────
const RETENTION_QUARTERLY = {
  tag: 'active-account',
  recurring: true,
  interval_days: 90,
  steps: [
    {
      step: 1,
      day: 0,
      type: 'EMAIL',
      subject: 'Quarterly check-in - {{contact.company_name}} account update',
      body: `Hi {{contact.first_name}},

Just wanted to touch base on your {{contact.company_name}} account as we wrap up the quarter.

Your quarterly snapshot:

- Tows processed: [auto-populated from GHL or TowBook]
- Average response time: [X] minutes
- Documentation packets sent: [X]
- Disputes received: [X]

Everything running smoothly on your end? Any changes to your property - new parking rules, construction zones, changes to authorized vehicles - that we should know about?

I'm also here if you ever need backup documentation for a tenant dispute or a board meeting.

Thanks for the continued trust.

Elliott
480-288-5526`,
    },
    {
      step: 2,
      day: 0,
      type: 'SMS',
      body: `Hi {{contact.first_name}}, just checking in on your account. Everything running smoothly? Any changes I should know about? - Elliott, 480-288-5526.`,
    },
  ],
};

// ─── Sequence 6: Renewal Reminder (60, 30, 7 Days Before) ───────────
const RENEWAL_REMINDER = {
  trigger_field: 'Contract Renewal Date',
  steps: [
    {
      step: 1,
      day: -60,
      type: 'EMAIL',
      subject: 'Your Axle Towing agreement renews in 60 days - a note from Elliott',
      body: `Hi {{contact.first_name}},

Your service agreement for {{contact.company_name}} renews on {{custom.contract_renewal_date}}. I wanted to give you plenty of heads-up and the chance to discuss any changes before then.

A few things I'd like to cover when we reconnect:

- Review of this year's tow activity
- Any changes to your property or enforcement needs
- Updated rate schedule for the coming year
- Adding any new properties to your account

Can we find 20 minutes in the next few weeks?

Elliott`,
    },
    {
      step: 2,
      day: -30,
      type: 'EMAIL',
      subject: '30 days out - {{contact.company_name}} renewal',
      body: `Hi {{contact.first_name}},

Quick reminder that your service agreement renews in 30 days.

I want to make this renewal easy. If nothing has changed and you're happy with service, we can handle the paperwork in under 10 minutes.

If you have questions, concerns, or want to discuss adding properties - I'm a call or text away.

480-288-5526

Elliott`,
    },
    {
      step: 3,
      day: -7,
      type: 'EMAIL',
      subject: 'Final reminder - agreement renewal next week',
      body: `Hi {{contact.first_name}},

One week out on your service agreement renewal for {{contact.company_name}}.

If I don't hear back, I'll assume we're continuing as-is and will send over the renewal docs for signature. But if anything needs to change, now's the time.

Call or text me directly: 480-288-5526

Elliott`,
    },
    {
      step: 4,
      day: -30,
      type: 'SMS',
      body: `{{contact.first_name}}, your Axle Towing service agreement renews in 30 days. Let's connect to review - reply or call 480-288-5526.`,
    },
  ],
};

// ─── Sequence 7: Referral Thank-You ──────────────────────────────────
const REFERRAL_THANK_YOU = {
  tag: 'referred-us',
  steps: [
    {
      step: 1,
      day: 0,
      type: 'EMAIL',
      subject: 'Thank you, {{contact.first_name}} - a small token of appreciation',
      body: `Hi {{contact.first_name}},

I wanted to reach out personally to say thank you for referring business our way. Clients like you are the reason this business works. No complicated service structure, no runaround - just mutual trust and people who show up.

I'd like to send you something as a small thank-you. Would a gift card work? Just reply with your mailing address and I'll get it out this week.

Thanks again.

Elliott
Axle Towing & Impound`,
    },
    {
      step: 2,
      day: 0,
      type: 'SMS',
      body: `{{contact.first_name}} - thanks for the referral! I really appreciate it. I'm going to take great care of them. Anything I can do for you? - Elliott`,
    },
  ],
};

// ─── SMS Templates (Universal) ───────────────────────────────────────
const SMS_TEMPLATES = [
  {
    id: 'cold-followup-day2',
    body: 'Hi {{contact.first_name}}, this is Elliott from Axle Towing. Did you get my email about parking enforcement for {{contact.company_name}}? Happy to chat - just reply here.',
    chars: 156,
    use_case: 'Cold follow-up Day 2',
  },
  {
    id: 'breakup-day21',
    body: 'Hey {{contact.first_name}} - Elliott, Axle Towing. I\'ll stop reaching out after this. If unauthorized parking is ever a problem, we\'re here. 480-288-5526.',
    chars: 148,
    use_case: 'Break-up SMS Day 21',
  },
  {
    id: 'post-voicemail',
    body: 'Hi {{contact.first_name}}, Elliott from Axle Towing. I left you a voicemail - just wanted to make sure it didn\'t get buried. My direct cell: 480-288-5526.',
    chars: 149,
    use_case: 'Post-voicemail follow-up',
  },
  {
    id: 'pre-call-warmup',
    body: '{{contact.first_name}} - quick question: how many unauthorized vehicles do you typically deal with per month? Just trying to understand your situation before our call.',
    chars: 158,
    use_case: 'Pre-call warm-up',
  },
  {
    id: 'meeting-confirmation',
    body: 'Hi {{contact.first_name}}, confirming our call tomorrow at [TIME]. Elliott from Axle Towing. Call me directly at 480-288-5526 if anything changes.',
    chars: 143,
    use_case: 'Meeting confirmation',
  },
  {
    id: 'post-call-followup',
    body: '{{contact.first_name}}, great talking to you today. I\'ll send over the service agreement details by end of day. Let me know if you have questions - 480-288-5526.',
    chars: 158,
    use_case: 'Post-call follow-up',
  },
  {
    id: 're-engagement-day0',
    body: 'Hi {{contact.first_name}} - Elliott from Axle Towing. It\'s been a while. How\'s parking enforcement going at {{contact.company_name}}? Open to reconnecting.',
    chars: 152,
    use_case: 'Re-engagement Day 0',
  },
  {
    id: 'renewal-reminder',
    body: '{{contact.first_name}}, your Axle Towing service agreement renews in 30 days. Let\'s connect to review - reply or call 480-288-5526.',
    chars: 130,
    use_case: 'Renewal reminder',
  },
  {
    id: 'quarterly-checkin',
    body: 'Hi {{contact.first_name}}, just checking in on your account. Everything running smoothly? Any changes I should know about? - Elliott, 480-288-5526.',
    chars: 144,
    use_case: 'Quarterly check-in',
  },
  {
    id: 'referral-thankyou',
    body: '{{contact.first_name}} - thanks for the referral! I really appreciate it. I\'m going to take great care of them. Anything I can do for you? - Elliott',
    chars: 147,
    use_case: 'Referral thank-you',
  },
];

// ─── Ringless Voicemail Scripts ──────────────────────────────────────
const VOICEMAIL_SCRIPTS = {
  A: {
    name: 'General Prospect',
    script: 'Hi {{contact.first_name}}, this is Elliott calling from Axle Towing and Impound here in the Phoenix metro. I sent you an email earlier this week about unauthorized parking enforcement for your property - I just wanted to put a voice to the name. We work with HOA boards and property managers across 38 cities in the Phoenix area. No cost to the property, full ARS compliance, 24/7 dispatch. If this is something worth a quick conversation, just call or text me back at 480-288-5526. That\'s my direct cell. Hope to connect soon - have a great day.',
    duration_seconds: 55,
  },
  B: {
    name: 'HOA Board Member',
    script: 'Hi {{contact.first_name}}, this is Elliott from Axle Towing. I know your time as a board member is valuable, so I\'ll be quick. We specialize in parking enforcement for HOA communities across Phoenix, Scottsdale, Chandler, and Gilbert. We\'re fully Arizona licensed, we document every tow so your board is protected, and we handle resident calls so you don\'t have to. I sent you an email this week with more detail - but if you\'d rather just talk, my direct cell is 480-288-5526. No pressure, just want to make sure you have options. Have a good one.',
    duration_seconds: 52,
  },
  C: {
    name: 'Re-Engagement (Former Account)',
    script: 'Hi {{contact.first_name}}, this is Elliott from Axle Towing. I know it\'s been a while since we\'ve connected, and I just wanted to reach out personally. I\'ll be honest - I think we dropped the ball on staying in touch, and that\'s on me. We\'ve made some real changes to how we manage accounts, and I\'d like the chance to show you what that looks like. If you\'re happy with your current setup, completely understand. But if parking enforcement has been a headache, I\'d love 10 minutes to reconnect. Call or text me at 480-288-5526. That\'s my direct cell, available any time. Thanks, {{contact.first_name}}. Talk soon.',
    duration_seconds: 58,
  },
};

module.exports = {
  COLD_OUTREACH,
  HOA_BOARD_MEMBER,
  PROPERTY_MANAGER,
  RE_ENGAGEMENT,
  RETENTION_QUARTERLY,
  RENEWAL_REMINDER,
  REFERRAL_THANK_YOU,
  SMS_TEMPLATES,
  VOICEMAIL_SCRIPTS,
  PIPELINE_STAGES,
  REQUIRED_TAGS,
  CUSTOM_FIELDS,
};
