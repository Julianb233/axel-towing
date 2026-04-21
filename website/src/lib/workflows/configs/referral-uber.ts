import type { WorkflowConfig } from "../types";

export const referralUber: WorkflowConfig = {
  id: "referral-uber",
  name: "Referral — Uber/Lyft Drivers",
  description: "3-email referral outreach for rideshare drivers over 10 days. Offers referral bonuses for reporting properties with parking problems.",
  trigger: {
    type: "tag_added",
    tag: "seq-referral-uber",
    excludeTags: ["do-not-contact"],
  },
  fromEmail: "elliott@axletowing.com",
  fromName: "Elliott — Axle Towing",
  enabled: true,
  steps: [
    {
      id: "uber-email-1",
      action: "send_email",
      delayDays: 0,
      email: {
        subject: "Earn extra cash reporting parking violations in Phoenix",
        body: `Hi {{contact.first_name}},

I'm Elliott with Axle Towing. We handle parking enforcement for apartment complexes, HOAs, and commercial properties across Phoenix.

Here's why I'm reaching out to rideshare drivers specifically: you're on the road all day, every day. You see parking problems that property managers don't even know about — abandoned vehicles, cars parked in fire lanes, unauthorized vehicles in resident spots.

I want to set up a simple referral program:

- You spot a property with a parking problem (or a property manager complaining about parking)
- You send us the property name and contact info
- If it turns into a contract, you get a referral bonus

You're already driving past these properties. This is just an easy way to pick up extra income while you do it.

Interested? I can explain the details in a 5-minute call.

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "uber-email-2",
      action: "send_email",
      delayDays: 4,
      email: {
        subject: "Re: Earn extra cash reporting parking violations",
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

Want in? Text me at 480-288-5526.

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "uber-email-3",
      action: "send_email",
      delayDays: 6,
      email: {
        subject: "Standing offer — parking referral bonuses",
        body: `Hi {{contact.first_name}},

No pressure on this. Just want you to know the offer stands whenever you're interested.

If you ever notice a property with a parking problem and want to earn a referral bonus, text the property name and address to 480-288-5526.

That's it. We handle everything from there.

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
  ],
};
