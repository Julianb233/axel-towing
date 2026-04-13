/**
 * Axle Towing - 6 Referral Partner Email Templates
 *
 * AI-7460: All 18 emails (6 categories x 3-email sequences)
 * structured for GHL workflow deployment.
 *
 * Sources:
 *   - docs/REFERRAL-INTRO-EMAIL-TEMPLATES.md (6 categories)
 *   - docs/REFERRAL-OUTREACH-CAMPAIGNS.md (HOA PM, Mechanic, Locksmith, Paving)
 */

const EMAIL_TEMPLATES = {
  // ─── Category 1: Locksmiths ───────────────────────────────────────
  locksmith: {
    tag: 'referral-locksmith',
    cadence: [0, 6, 15], // Days between sends
    emails: [
      {
        step: 1,
        day: 0,
        subjectA: 'Towing + locksmith referral partnership in Phoenix',
        subjectB: 'We send each other customers - interested?',
        body: `Hi {{contact.first_name}},

I'm Elliott with Axle Towing & Impound. We handle 24/7 towing, private property impounds, and roadside services across the Phoenix metro.

Here's why I'm reaching out:

Our dispatchers regularly field calls from people who are locked out of their vehicle and also need a tow. We don't do locksmith work - we need someone to refer them to. And I suspect you sometimes have lockout customers whose car is also dead or damaged and needs a tow.

I'd love to set up a referral partnership:
  - You refer lockout-plus-tow situations to us
  - We refer lockout-only situations to you
  - We both pick up the phone for each other's referrals, fast

No contracts, no fees. Just a reliable mutual referral arrangement between two local businesses.

Worth a quick call?

Elliott
Axle Towing & Impound
(480) 288-5526 | axletowing.com`,
      },
      {
        step: 2,
        day: 6,
        subjectA: 'One more idea for our referral partnership',
        subjectB: 'Co-branded emergency cards - free for you',
        body: `Hi {{contact.first_name}},

Following up on the referral partnership idea.

One thing we do with some of our locksmith partners: co-branded emergency cards. It's a small card with both our numbers on it - Axle Towing for impounds and towing, {{contact.company_name}} for lockouts.

We distribute them at our tow sites, at property manager offices, and through our HOA accounts. Some of our locksmith partners have gotten 5-10 referral calls per month just from the cards.

We'd cover the printing cost. All you'd need to do is agree to prioritize calls that come from us, and return the favor when you have a tow situation.

We have accounts at apartment complexes and HOAs across Phoenix where residents need locksmith services periodically. Being the recommended locksmith for those properties has real value.

Is a 10-minute call this week worth it?

Elliott
Axle Towing & Impound
(480) 288-5526`,
      },
      {
        step: 3,
        day: 15,
        subjectA: 'Last note - locksmith referral partnership',
        subjectB: 'Leaving the door open',
        body: `Hi {{contact.first_name}},

Last note from me on the referral partnership.

Simple offer: we refer our lockout customers to you, you refer your tow customers to us. If you're open to it, I can also have co-branded emergency cards printed for your customers at no cost to you.

If the timing ever works, here's my direct line: (480) 288-5526.

I'll check back in a few months. In the meantime - if you ever need a reliable tow company in the Phoenix metro for a customer referral, we're available 24/7.

Elliott
Axle Towing & Impound
axletowing.com`,
      },
    ],
  },

  // ─── Category 2: Uber/Lyft Drivers ────────────────────────────────
  rideshare: {
    tag: 'referral-rideshare',
    cadence: [0, 4, 10],
    emails: [
      {
        step: 1,
        day: 0,
        subjectA: 'Earn extra cash reporting parking violations in Phoenix',
        subjectB: 'Side income for rideshare drivers - parking referrals',
        body: `Hi {{contact.first_name}},

I'm Elliott with Axle Towing. We handle parking enforcement for apartment complexes, HOAs, and commercial properties across Phoenix.

Here's why I'm reaching out to rideshare drivers specifically: you're on the road all day, every day. You see parking problems that property managers don't even know about - abandoned vehicles, cars parked in fire lanes, unauthorized vehicles in resident spots.

I want to set up a simple referral program:

- You spot a property with a parking problem (or a property manager complaining about parking)
- You send us the property name and contact info
- If it turns into a contract, you get a referral bonus

You're already driving past these properties. This is just an easy way to pick up extra income while you do it.

Interested? I can explain the details in a 5-minute call.

Elliott
Axle Towing
(480) 288-5526 | axletowing.com`,
      },
      {
        step: 2,
        day: 4,
        subjectA: 'How the parking referral program works',
        subjectB: 'Re: Earn extra cash reporting parking violations',
        body: `Hi {{contact.first_name}},

Quick follow-up on the referral program.

Here's exactly how it works:

1. You notice a property with parking issues (cars in fire lanes, abandoned vehicles, no enforcement signage, etc.)
2. You text or email us the property name and address
3. We reach out to the property manager
4. If they sign a parking enforcement contract, you earn a referral bonus

What to look for:
- Apartment complexes with cars parked on curbs or grass
- HOA communities with no towing signage
- Commercial lots with unauthorized overnight parking
- Properties where you pick up riders who complain about parking

No commitment, no minimum. Just send leads when you see them.

Want in? Text me at (480) 288-5526.

Elliott`,
      },
      {
        step: 3,
        day: 10,
        subjectA: 'Standing offer - parking referral bonuses',
        subjectB: 'Quick reminder - earn referral bonuses',
        body: `Hi {{contact.first_name}},

No pressure on this. Just want you to know the offer stands whenever you're interested.

If you ever notice a property with a parking problem and want to earn a referral bonus, text the property name and address to (480) 288-5526.

That's it. We handle everything from there.

Elliott
Axle Towing
(480) 288-5526
axletowing.com`,
      },
    ],
  },

  // ─── Category 3: Parking Permit Companies ─────────────────────────
  parking_permit: {
    tag: 'referral-parking-permit',
    cadence: [0, 4, 10],
    emails: [
      {
        step: 1,
        day: 0,
        subjectA: 'Enforcement partner for your parking permit clients',
        subjectB: 'Complete parking solution - permits + enforcement',
        body: `Hi {{contact.first_name}},

I'm Elliott with Axle Towing. We provide private property towing and parking enforcement across the Phoenix metro area.

I'm reaching out because your clients - the properties using your parking permit system - likely need enforcement to go along with it. Permits only work if unauthorized vehicles actually get towed.

I'd like to propose a partnership:

- When your clients need enforcement to back up their permit system, you refer them to us
- We handle all towing, signage compliance, and enforcement patrols
- Your clients get a complete parking solution: permits from you, enforcement from us
- We can offer your clients preferred pricing as part of the partnership

This makes your permit system more valuable to property managers because they get the full package.

Would you be open to a call this week to discuss how we can work together?

Elliott
Axle Towing
(480) 288-5526 | axletowing.com`,
      },
      {
        step: 2,
        day: 4,
        subjectA: 'Partnership details - enforcement for your permit clients',
        subjectB: 'Re: Enforcement partner for your parking permit clients',
        body: `Hi {{contact.first_name}},

Following up on the enforcement partnership idea.

Here's what we bring to the table for your clients:

- 24/7 towing enforcement (not just business hours)
- 30-minute average response time across Phoenix metro
- Full Arizona signage compliance (we handle the legal requirements)
- Monthly enforcement reports for each property
- Zero cost to the property - tow fees cover our service
- Dedicated account manager (not a call center)

For your business, the benefit is simple: properties that have enforcement are more likely to keep their permit system long-term. We make your product stickier.

Some of our partners co-present to property managers - "here's your complete parking solution." Happy to discuss that approach.

Elliott
(480) 288-5526`,
      },
      {
        step: 3,
        day: 10,
        subjectA: 'Open door for parking enforcement referrals',
        subjectB: 'Last note - enforcement partnership',
        body: `Hi {{contact.first_name}},

Last note on this. If the timing isn't right for a formal partnership, no problem.

But if any of your clients ever ask about towing enforcement to go with their permit system, I'd appreciate the referral:

Elliott - Axle Towing
(480) 288-5526 | axletowing.com

We serve all of Phoenix metro and can usually start enforcement within a week of signing.

Elliott`,
      },
    ],
  },

  // ─── Category 4: Auto Mechanics / Repair Shops ────────────────────
  mechanic: {
    tag: 'referral-mechanic',
    cadence: [0, 5, 14],
    emails: [
      {
        step: 1,
        day: 0,
        subjectA: 'Referral partnership idea - towing + auto repair',
        subjectB: 'Quick idea: we send each other customers',
        body: `Hi {{contact.first_name}},

I'm Elliott with Axle Towing & Impound. We're a local, owner-operated towing company serving the Phoenix metro - 24/7, licensed and insured.

I'm reaching out with a simple idea: a mutual referral partnership.

Here's how it works:
- When one of your customers needs a private property tow, impound pickup, or lockout service, you send them to us.
- When we tow a vehicle with mechanical issues (busted engine, flat left on side of road, breakdown on the 101), we recommend your shop to the vehicle owner.

No money changes hands. Just a handshake partnership where we point our customers to each other.

We tow hundreds of vehicles per month across Phoenix. A lot of those drivers need mechanical work done. Right now, we have no repair shop to send them to in your area.

Worth a quick call to see if it makes sense?

Elliott
Axle Towing & Impound
(480) 288-5526 | axletowing.com`,
      },
      {
        step: 2,
        day: 5,
        subjectA: 'The specifics on our referral partnership',
        subjectB: 'What our mechanic partners say',
        body: `Hi {{contact.first_name}},

Following up on my note about a referral partnership between {{contact.company_name}} and Axle Towing.

A few specifics on how this works in practice:

When you refer to us:
  - Your customers get priority dispatch (we always pick up for referred customers)
  - We'll send you a text confirmation when the job is completed
  - Your name goes on their file so we know they came from {{contact.company_name}}

When we refer to you:
  - We'll hand your business card to the vehicle owner at the tow site
  - We can include your shop info in our post-tow text to the customer
  - For customers who are on the side of the road with a mechanical issue, you'd be our first recommendation in your area

We do a lot of breakdown tows from the I-10, US-60, and Loop 101 corridors. Customers in those situations are actively looking for a mechanic they can trust.

If volume warrants it, we're also open to a small referral fee for converted customers either direction.

Would a 10-minute phone call work this week?

Elliott
Axle Towing & Impound
(480) 288-5526`,
      },
      {
        step: 3,
        day: 14,
        subjectA: 'Last note - towing + repair referral partnership',
        subjectB: 'Closing the loop on this',
        body: `Hi {{contact.first_name}},

Last note from me on the referral partnership idea.

The short version: we send breakdown customers to mechanics we trust, and mechanics who send impound/tow customers to us get priority service for their referrals.

If {{contact.company_name}} would be a good fit for your area of Phoenix, I'd love to make it official.

Direct line: (480) 288-5526

No pressure - if the timing isn't right, no worries. I'll reach back out in a few months.

Elliott
Axle Towing & Impound
axletowing.com`,
      },
    ],
  },

  // ─── Category 5: Moving Companies ─────────────────────────────────
  moving: {
    tag: 'referral-moving',
    cadence: [0, 4, 10],
    emails: [
      {
        step: 1,
        day: 0,
        subjectA: 'Clearing parking for your moving crews',
        subjectB: 'Vehicle relocation for moving companies',
        body: `Hi {{contact.first_name}},

I'm Elliott with Axle Towing. We handle vehicle relocation and parking enforcement for properties across the Phoenix metro area.

I know one of the headaches on moving day is getting vehicles out of the way so your truck can access the loading zone. Residents don't move their cars, visitor spots are full, or the property doesn't enforce their own parking rules.

We can help with that:

- Coordinate with the property manager to clear vehicles before your crew arrives
- Handle same-day vehicle relocations when cars are blocking access
- Ensure your truck has the space it needs to load/unload efficiently

I'd also like to set up a mutual referral arrangement. You're at apartment complexes and HOAs every week. If a property manager ever mentions parking problems, send them our way. We'll do the same when our property clients need a moving company recommendation.

Interested in discussing?

Elliott
Axle Towing
(480) 288-5526 | axletowing.com`,
      },
      {
        step: 2,
        day: 4,
        subjectA: 'How we help on moving day',
        subjectB: 'Re: Clearing parking for your moving crews',
        body: `Hi {{contact.first_name}},

Quick follow-up. Here's how this works in practice:

For your moving jobs:
- You give us the address and move date
- We coordinate with the property to clear the parking area
- Vehicles are relocated before your crew arrives
- If any stragglers show up during the move, we handle it

For referrals:
- You mention parking problems to property managers? Send them our way
- We mention moving needs to our property clients? We send them yours
- No formal contract needed - just two companies helping each other

We already work with several apartment complexes and HOAs in the area. Happy to share which properties we serve in case there's overlap.

Elliott
(480) 288-5526`,
      },
      {
        step: 3,
        day: 10,
        subjectA: 'Moving day parking - keep us in mind',
        subjectB: 'Standing offer - vehicle clearing for movers',
        body: `Hi {{contact.first_name}},

Last note. If you ever have a move where parking is going to be a problem, give us a call. We can clear vehicles quickly so your crew isn't sitting around waiting.

Elliott - Axle Towing
(480) 288-5526
axletowing.com

And if a property manager ever asks you about parking enforcement, we'd appreciate the introduction.

Elliott`,
      },
    ],
  },

  // ─── Category 6: Painters & Contractors ───────────────────────────
  contractor: {
    tag: 'referral-contractor',
    cadence: [0, 4, 10],
    emails: [
      {
        step: 1,
        day: 0,
        subjectA: 'Vehicle relocation for your job sites',
        subjectB: 'Clear cars before your crew arrives',
        body: `Hi {{contact.first_name}},

I'm Elliott with Axle Towing. We specialize in vehicle relocations for property maintenance - clearing cars out of the way so contractors can get to work.

I know one of the biggest delays on exterior painting and renovation jobs is vehicles parked too close to the building. Residents don't read notices, visitor cars sit there all day, and your crew loses hours waiting.

We handle that:

- Coordinate with the property manager on vehicle notices
- Show up before your crew to relocate vehicles from the work zone
- Handle any vehicles that show up during the job
- Professional, insured, and licensed in all of Phoenix metro

Would it make sense to set up a referral arrangement? When you have a job that needs vehicles cleared, you call us. We show up, handle it, and your crew works uninterrupted.

Happy to discuss over a quick call.

Elliott
Axle Towing
(480) 288-5526 | axletowing.com`,
      },
      {
        step: 2,
        day: 4,
        subjectA: 'What our contractor partners value most',
        subjectB: 'Re: Vehicle relocation for your job sites',
        body: `Hi {{contact.first_name}},

Following up on the vehicle relocation partnership.

Here's what our contractor partners tell us they value:

1. We show up BEFORE their crew - no one's waiting on us
2. We handle the property manager coordination on notices
3. We deal with angry vehicle owners so the contractor doesn't have to
4. 30-minute response if a straggler shows up mid-job
5. One call to us saves hours of crew downtime

We've handled jobs where 10-15 vehicles needed to be moved in a couple hours so the contractor could start on time.

If you do regular work at apartment complexes or HOAs, this could save you a lot of headaches. And we're always happy to refer our property clients to reliable contractors when they need exterior work done.

Elliott
(480) 288-5526`,
      },
      {
        step: 3,
        day: 10,
        subjectA: 'Need vehicles moved for a job? Call us',
        subjectB: 'Standing offer - vehicle clearing for contractors',
        body: `Hi {{contact.first_name}},

Last follow-up. If vehicle relocation doesn't come up often on your jobs, no worries.

But next time you're on a job and cars are in the way, save my number:

Elliott - Axle Towing
(480) 288-5526
axletowing.com

We can usually have vehicles cleared within an hour of your call. And if any of your property clients need parking enforcement, we'd welcome the referral.

Elliott`,
      },
    ],
  },
};

// ─── Tags required across all workflows ──────────────────────────────
const REQUIRED_TAGS = [
  'referral-locksmith',
  'referral-rideshare',
  'referral-parking-permit',
  'referral-mechanic',
  'referral-moving',
  'referral-contractor',
  'sequence-active',
  'sequence-replied',
  'sequence-completed',
  'partner-active',
  'partner-referred-in',
  'partner-referred-out',
];

// ─── Custom fields for referral partner tracking ─────────────────────
const CUSTOM_FIELDS = [
  { name: 'Partner Type', type: 'SINGLE_OPTIONS', options: ['Locksmith', 'Rideshare', 'Parking Permit', 'Mechanic', 'Moving Company', 'Contractor', 'Other'] },
  { name: 'Referrals Sent to Partner', type: 'NUMERICAL' },
  { name: 'Referrals Received from Partner', type: 'NUMERICAL' },
  { name: 'Last Referral Date', type: 'DATE' },
  { name: 'Partnership Start Date', type: 'DATE' },
  { name: 'Co-Branded Cards Sent', type: 'SINGLE_OPTIONS', options: ['Yes', 'No'] },
  { name: 'Partner Priority', type: 'SINGLE_OPTIONS', options: ['High', 'Medium', 'Low'] },
];

// ─── Pipeline stages ─────────────────────────────────────────────────
const PIPELINE_STAGES = [
  'New Contact',
  'Sequence Active',
  'Replied - Qualifying',
  'Call Booked',
  'Partnership Discussion',
  'Partner Confirmed',
  'Active Partner',
  'Not Interested',
  'Dormant - Re-engage',
];

module.exports = {
  EMAIL_TEMPLATES,
  REQUIRED_TAGS,
  CUSTOM_FIELDS,
  PIPELINE_STAGES,
};
