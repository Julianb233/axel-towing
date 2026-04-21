import type { WorkflowConfig } from "../types";

export const referralPaving: WorkflowConfig = {
  id: "referral-paving",
  name: "Referral — Paving/Asphalt Companies",
  description: "2-email outreach sequence for paving and asphalt companies over 7 days. Offers vehicle relocation sub-contract for parking lot jobs.",
  trigger: {
    type: "tag_added",
    tag: "seq-referral-paving",
    excludeTags: ["do-not-contact"],
  },
  fromEmail: "elliott@axletowing.com",
  fromName: "Elliott — Axle Towing",
  enabled: true,
  steps: [
    {
      id: "paving-email-1",
      action: "send_email",
      delayDays: 1,
      email: {
        subject: "Vehicle relocation partner for your Phoenix paving jobs",
        body: `Hi {{contact.first_name}},

I'm Elliott with Axle Towing & Impound. We provide vehicle relocation services for property maintenance work in the Phoenix metro — specifically moving cars out of parking lots before contractors arrive to pave, seal coat, restripe, or resurface.

I know one of the biggest delays on parking lot jobs is getting vehicles moved. We handle that end-to-end:

- Coordinate with the property manager on 48-hour notices
- Show up before your crew to clear the lot
- Handle stragglers who ignore the notice (tow if necessary)
- Professional, licensed, insured — full Arizona compliance
- We can typically clear a 50-space lot in under 2 hours

We've moved 10-15 vehicles in a couple of hours so jobs can start on schedule.

When you're bidding a parking lot job, vehicle relocation could be an add-on line item you include in the quote — or you can simply subcontract us and we handle it. Either way, your crew shows up to an empty lot.

Worth a quick call to talk through how this would work for {{contact.company_name}}'s upcoming jobs?

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "paving-email-2",
      action: "send_email",
      delayDays: 6,
      email: {
        subject: "Following up — vehicle relocation for {{contact.company_name}}",
        body: `Hi {{contact.first_name}},

Wanted to follow up on my note about vehicle relocation for your parking lot jobs.

Specific question: do you have any seal coat, paving, or restripe jobs coming up in the Phoenix metro where you need vehicles moved?

If so, I'd love to talk through how we can clear the lot before your crew arrives. We work fast, we're licensed and insured, and we handle the notice coordination with the property manager.

Pricing is based on number of vehicles and lot size — usually straightforward for both sides to budget.

My direct number: 480-288-5526

If the timing isn't right, no problem. I'll check back in a month or two. We're available 24/7 when you need us.

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
  ],
};
