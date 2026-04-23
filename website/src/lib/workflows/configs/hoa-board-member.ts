import type { WorkflowConfig } from "../types";

export const hoaBoardMember: WorkflowConfig = {
  id: "hoa-board-member",
  name: "HOA Board Member Sequence",
  description: "25-day email sequence targeting HOA board members. Focuses on liability, compliance, dispute documentation, testimonials, and a final leave-door-open offer.",
  trigger: {
    type: "tag_added",
    tag: "seq-hoa-board-member",
    excludeTags: ["do-not-contact"],
  },
  fromEmail: "info@axletowing.com",
  fromName: "Elliott — Axle Towing",
  enabled: true,
  steps: [
    {
      id: "hoa-email-1",
      action: "send_email",
      delayDays: 0,
      email: {
        subject: "HOA board members in {{contact.city}} — are parking violations becoming a liability?",
        body: `Hi {{contact.first_name}},

Managing an HOA means dealing with the stuff nobody else wants to handle — and unauthorized parking is near the top of that list.

Residents file complaints. Boards get blamed. And if the towing company doesn't document everything properly, you could be looking at a wrongful tow dispute.

My name is Elliott. Axle Towing & Impound has worked with HOA boards across Chandler, Gilbert, Scottsdale, Mesa, and Tempe for years. Here's what we bring to every HOA account:

Compliance protection:
Every vehicle removal is documented with photos, timestamps, and ARS-compliant notification. You get a copy. You're covered.

Resident communication:
We post notices at the vehicle before towing whenever required by your CC&Rs. No surprises. No "I didn't know" calls to the board.

No cost to the HOA:
Our service is funded by the vehicle owner — not your budget.

24/7 availability:
Board members shouldn't be fielding parking complaints at midnight. When residents call, we're available.

Would it make sense to have a 15-minute conversation about your current situation?

Schedule a Call: https://axletowing.com/contact

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "hoa-email-2",
      action: "send_email",
      delayDays: 4,
      email: {
        subject: "The 3 most common HOA towing mistakes (and how to avoid them)",
        body: `Hi {{contact.first_name}},

Quick follow-up — I wanted to share something useful whether or not we ever work together.

The 3 most common HOA towing mistakes:

1. Using a company that isn't licensed and insured in Arizona.
If an unlicensed operator tows from your property and something goes wrong, the HOA can be named in the claim. Always verify AZ Motor Vehicle Division licensing.

2. Inadequate signage.
Under ARS § 28-4843, parking enforcement signage must meet specific requirements — font size, placement, content. We've seen HOAs lose disputes because their signs were 2 inches too small.

3. No paper trail.
Every tow should be documented. Photos of the vehicle in violation, the sign visible in frame, timestamp. Without this, you're exposed.

At Axle Towing, we handle all three. We're fully licensed, we'll do a free signage audit, and every tow comes with a complete documentation package.

Want a free audit of your current parking enforcement setup? 15 minutes, no strings attached.

Book Free Audit: https://axletowing.com/contact

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "hoa-email-3",
      action: "send_email",
      delayDays: 5,
      email: {
        subject: "{{contact.company_name}} — what happens when residents complain?",
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

Let's Talk — 15 Minutes: https://axletowing.com/contact

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "hoa-email-4",
      action: "send_email",
      delayDays: 7,
      email: {
        subject: "HOA boards who switched to Axle Towing say this most",
        body: `Hi {{contact.first_name}},

When I ask HOA board chairs what changed after they switched to us, the most common answer is: "I stopped getting calls."

Not that parking violations disappeared — those still happen. But when they do:

- Residents call us, not the board
- We handle it
- You get a notification, not a crisis

We've worked with boards managing everything from 50-unit condos to 400-unit master-planned communities. The setup takes less than a week.

If you're still with your current provider and things are fine — great. But if parking enforcement is still eating board meeting time or generating resident drama, I'd like to show you a different way.

Compare Your Current Setup — Free Consult: https://axletowing.com/contact

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "hoa-email-5",
      action: "send_email",
      delayDays: 9,
      email: {
        subject: "Before I move on — one last thought for {{contact.company_name}}",
        body: `Hi {{contact.first_name}},

I'm going to wrap up my outreach here, but I wanted to leave you with something concrete.

What an Axle Towing HOA account includes:

- Written service agreement with response time guarantees
- Free ARS-compliant signage consultation
- 24/7 dispatch (real people, real phone)
- Full documentation on every tow
- Monthly tow activity report for your records
- Dedicated contact — Elliott's direct cell

If parking enforcement is ever a board agenda item, save this email.

480-288-5526 | axletowing.com

I'll leave the door open.

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "hoa-tag-complete",
      action: "add_tag",
      delayDays: 0,
      tag: "completed-hoa-sequence",
    },
  ],
};
