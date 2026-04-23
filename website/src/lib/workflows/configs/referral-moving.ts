import type { WorkflowConfig } from "../types";

export const referralMoving: WorkflowConfig = {
  id: "referral-moving",
  name: "Referral — Moving Companies",
  description: "3-email referral partner outreach for moving companies over 10 days. Offers vehicle clearing for moving day + mutual referral arrangement.",
  trigger: {
    type: "tag_added",
    tag: "seq-referral-moving",
    excludeTags: ["do-not-contact"],
  },
  fromEmail: "info@axletowing.com",
  fromName: "Elliott — Axle Towing",
  enabled: true,
  steps: [
    {
      id: "moving-email-1",
      action: "send_email",
      delayDays: 0,
      email: {
        subject: "Clearing parking for your moving crews",
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
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "moving-email-2",
      action: "send_email",
      delayDays: 4,
      email: {
        subject: "Re: Clearing parking for your moving crews",
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
- No formal contract needed — just two companies helping each other

We already work with several apartment complexes and HOAs in the area. Happy to share which properties we serve in case there's overlap.

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "moving-email-3",
      action: "send_email",
      delayDays: 6,
      email: {
        subject: "Moving day parking — keep us in mind",
        body: `Hi {{contact.first_name}},

Last note. If you ever have a move where parking is going to be a problem, give us a call. We can clear vehicles quickly so your crew isn't sitting around waiting.

Elliott — Axle Towing
480-288-5526
axletowing.com

And if a property manager ever asks you about parking enforcement, we'd appreciate the introduction.

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
  ],
};
