/**
 * Axle Towing - PM Nurture 21-Day Campaign Templates
 *
 * AI-7461: 21-day property manager nurture sequence
 * 9 steps: 7 emails + 2 SMS
 *
 * Sources:
 *   - docs/NURTURE-CAMPAIGN-SEQUENCES.md (PM + HOA sequences)
 *   - Linear AI-7461 task spec
 *
 * IMPORTANT: SMS steps must remain DISABLED until A2P 10DLC registration
 * (AI-7457) is confirmed by Elliott.
 */

const NURTURE_EMAILS = {
  pm_nurture_21day: {
    tag: 'nurture-active',
    cadence: [1, 3, 5, 7, 10, 12, 14, 17, 21], // Days from enrollment
    steps: [
      // ─── Day 1: Email — Intro + Zero-Cost Value Prop ───────────────
      {
        step: 1,
        day: 1,
        type: 'EMAIL',
        subject: 'Free parking enforcement for {{contact.company_name}}?',
        subjectB: 'Unauthorized parking at {{contact.company_name}} — we can help',
        body: `Hi {{contact.first_name}},

I'm Elliott with Axle Towing & Impound. I work with property managers and HOA boards across the Phoenix metro to handle unauthorized parking and vehicle removal — fast, compliant, and at zero cost to the property.

Here's what we offer property accounts:

- Free towing enforcement — no cost to your property or HOA budget
- Response typically within 60 minutes, 24/7/365
- Fully compliant with ARS Chapter 28 — we handle the paperwork and documentation
- One point of contact — my direct cell, not a call center

We service 38+ cities across the Valley and have 30+ years of combined team experience.

Would you be open to a 15-minute call this week to see if it's a fit for {{contact.company_name}}?

Elliott
Axle Towing & Impound
(480) 288-5526
axletowing.com`,
      },

      // ─── Day 3: Email — Case Study (HOA Success Story) ─────────────
      {
        step: 2,
        day: 3,
        type: 'EMAIL',
        subject: 'How a Scottsdale HOA eliminated parking complaints in 30 days',
        subjectB: '47 unauthorized vehicles removed — zero resident complaints',
        body: `Hi {{contact.first_name}},

I wanted to share a quick story.

A 200-unit HOA in Scottsdale was dealing with chronic unauthorized parking — residents calling the board at all hours, tensions running high, and the previous towing company ghosted them after the first month.

We took over the account. Within 30 days:

- 47 unauthorized vehicles removed (no cost to the HOA)
- Zero resident complaints about the process — every tow was documented and posted
- Board chair stopped getting late-night calls

The key difference: we show up. Every time. And we call you back.

That's not marketing copy — it's just what we do.

I'd love to bring that same consistency to {{contact.company_name}}. Are you available for a quick call this week?

Elliott
Axle Towing & Impound
(480) 288-5526`,
      },

      // ─── Day 5: SMS — Gentle Nudge ─────────────────────────────────
      // DISABLED until A2P 10DLC (AI-7457) is confirmed
      {
        step: 3,
        day: 5,
        type: 'SMS',
        enabled: false,
        disabledReason: 'A2P 10DLC registration (AI-7457) not yet confirmed',
        body: `Hi {{contact.first_name}}, just sent you some info about free parking enforcement. Worth a quick look?`,
        charCount: 89,
      },

      // ─── Day 7: Email — Benefits Breakdown + ROI Calculator ────────
      {
        step: 4,
        day: 7,
        type: 'EMAIL',
        subject: 'The real cost of not enforcing parking at {{contact.company_name}}',
        subjectB: 'Property managers save 20-40 hrs/month with proper enforcement',
        body: `Hi {{contact.first_name}},

Quick question: how much time per month does your team spend on parking-related issues? Complaints, disputes, documentation requests, coordinating with your current provider?

Most property managers we talk to say it's 2-4 hours per month, per property. For a 10-property portfolio, that's 20-40 hours of staff time.

Here's what the numbers look like with a proper enforcement setup:

Time saved: 1.5-3.5 hrs/month per property on parking complaints
Liability reduced: Full ARS-compliant documentation on every tow
Resident satisfaction: Parking rules are actually enforced, consistently
Cost to you: $0 — our service is funded by the tow, not your budget

With a properly structured enforcement setup, that number drops to under 30 minutes per property per month — mostly just reviewing monthly reports.

That's the difference a good enforcement partner makes.

Would it be worth 15 minutes to find out if we could get you there?

Elliott
Axle Towing & Impound
(480) 288-5526 | axletowing.com`,
      },

      // ─── Day 10: Email — Social Proof ──────────────────────────────
      {
        step: 5,
        day: 10,
        type: 'EMAIL',
        subject: '4.9 stars across 1,000+ properties — here\'s why',
        subjectB: 'What property managers say after switching to Axle Towing',
        body: `Hi {{contact.first_name}},

When I ask property managers what changed after they switched to us, the most common answer is: "I stopped getting calls."

Not that parking violations disappeared — those still happen. But when they do:

- Residents call us, not you
- We handle it within 60 minutes
- You get a notification, not a crisis

We currently serve 1,000+ properties across the Phoenix metro with a 4.9-star rating. Here's what we consistently hear from clients:

"We went from 5-6 parking complaints per board meeting to zero." — HOA Board Chair, Gilbert

"Elliott picks up the phone every time. Our last company didn't even return voicemails." — Property Manager, Chandler

"The documentation is the best part. When a resident disputes a tow, I just send them the packet and it's done." — Community Manager, Mesa

We've worked with managers handling everything from 50-unit condos to 400-unit master-planned communities. The setup takes less than a week.

If parking enforcement is still eating meeting time or generating resident drama, I'd like to show you a different way.

Elliott
Axle Towing & Impound
(480) 288-5526`,
      },

      // ─── Day 12: SMS — Conversation Starter ────────────────────────
      // DISABLED until A2P 10DLC (AI-7457) is confirmed
      {
        step: 6,
        day: 12,
        type: 'SMS',
        enabled: false,
        disabledReason: 'A2P 10DLC registration (AI-7457) not yet confirmed',
        body: `Any questions about the parking enforcement program? Happy to chat: 480-288-5526`,
        charCount: 82,
      },

      // ─── Day 14: Email — Objection Handler ─────────────────────────
      {
        step: 7,
        day: 14,
        type: 'EMAIL',
        subject: 'The 3 most common concerns about switching towing companies',
        subjectB: '"What if residents complain?" — and other common questions',
        body: `Hi {{contact.first_name}},

I've talked to a lot of property managers who want better parking enforcement but hesitate to make a change. Here are the three concerns I hear most — and how we address them:

1. "What if residents complain about the towing?"

Every tow comes with a full documentation packet: photo of the vehicle in violation, signage visible in frame, timestamp, and the ARS statute that applies. When a resident sees that packet, the conversation is over. They were parked in violation. It's documented.

2. "We already have a towing company — switching is a hassle."

Our onboarding takes less than a week. We review your current signage, ensure ARS compliance, and start enforcement. Most managers tell us the transition was the easiest part.

3. "How do I know you'll actually show up?"

Every Axle Towing account gets my direct cell number. Not a dispatcher, not a call center — Elliott's cell. If I don't pick up within 30 minutes, something is genuinely wrong. In three years, that hasn't happened.

If any of these concerns have been holding you back, I'm happy to address them directly on a quick call.

Elliott
Axle Towing & Impound
(480) 288-5526 | axletowing.com`,
      },

      // ─── Day 17: Email — Urgency (Limited Capacity) ────────────────
      {
        step: 8,
        day: 17,
        type: 'EMAIL',
        subject: 'Limited enforcement capacity in {{contact.city}} — heads up',
        subjectB: 'We have room for 3 more property accounts this month',
        body: `Hi {{contact.first_name}},

Quick heads up — we're currently onboarding new property accounts in {{contact.city}} and we have room for 3 more this month.

We deliberately limit the number of properties per service area so our response times stay under 60 minutes. Once we're at capacity in an area, new accounts go on a waitlist.

For accounts that sign this month, we're including:

- Free parking violation notice templates (Arizona-compliant)
- Free signage consultation — we'll tell you exactly what signs you need per ARS requirements
- Priority response guarantee in writing
- Monthly tow activity report for your records

If the timing isn't right, no worries — save my number for when your current situation changes.

(480) 288-5526 | elliott@axletowing.com

Elliott
Axle Towing & Impound`,
      },

      // ─── Day 21: Email — Final Follow-Up + Direct CTA ─────────────
      {
        step: 9,
        day: 21,
        type: 'EMAIL',
        subject: 'Last note from me — free parking enforcement assessment',
        subjectB: 'Before I move on — one offer for {{contact.company_name}}',
        body: `Hi {{contact.first_name}},

I'm going to wrap up my outreach here, but I wanted to leave you with something concrete.

I'd like to offer a free parking enforcement assessment for {{contact.company_name}} — no strings attached. Here's what it includes:

- Signage audit: Are your current signs ARS-compliant? (You'd be surprised how many aren't)
- Enforcement gap analysis: Where are unauthorized vehicles parking and when?
- Liability review: Are you exposed if a tow goes wrong with your current provider?
- Written recommendation with specific next steps

The assessment takes about 15 minutes and you'll get a written report regardless of whether we work together.

What an Axle Towing property account includes:

- Written service agreement with response time guarantees
- Free ARS-compliant signage consultation
- 24/7 dispatch (real people, real phone)
- Full documentation on every tow
- Monthly tow activity report for your records
- Dedicated contact — Elliott's direct cell

If parking enforcement is ever a board agenda item or a recurring headache, save this email.

(480) 288-5526 | axletowing.com

I'll leave the door open.

Elliott
Axle Towing & Impound`,
      },
    ],
  },
};

// ─── Tags required for nurture workflows ─────────────────────────────
const NURTURE_TAGS = [
  'nurture-active',
  'nurture-sequence-active',
  'nurture-replied',
  'nurture-completed',
  'nurture-pm',
  'nurture-hoa',
];

// ─── Custom fields for nurture tracking ──────────────────────────────
const NURTURE_CUSTOM_FIELDS = [
  { name: 'Nurture Sequence', type: 'SINGLE_OPTIONS', options: ['PM 21-Day', 'HOA 25-Day', 'Cold Outreach', 'Re-Engagement'] },
  { name: 'Nurture Step', type: 'NUMERICAL' },
  { name: 'Nurture Start Date', type: 'DATE' },
  { name: 'Nurture End Date', type: 'DATE' },
  { name: 'Property Type', type: 'SINGLE_OPTIONS', options: ['HOA', 'Apartment', 'Commercial', 'Other'] },
  { name: 'Number of Properties', type: 'NUMERICAL' },
];

module.exports = {
  NURTURE_EMAILS,
  NURTURE_TAGS,
  NURTURE_CUSTOM_FIELDS,
};
