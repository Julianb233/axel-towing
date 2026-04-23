import type { WorkflowConfig } from "../types";

export const referralParkingPermit: WorkflowConfig = {
  id: "referral-parking-permit",
  name: "Referral — Parking Permit Companies",
  description: "3-email referral partner outreach for parking permit companies over 10 days. Proposes enforcement partnership — permits + towing = complete parking solution.",
  trigger: {
    type: "tag_added",
    tag: "seq-referral-parking-permit",
    excludeTags: ["do-not-contact"],
  },
  fromEmail: "info@axletowing.com",
  fromName: "Elliott — Axle Towing",
  enabled: true,
  steps: [
    {
      id: "parking-permit-email-1",
      action: "send_email",
      delayDays: 0,
      email: {
        subject: "Enforcement partner for your parking permit clients",
        body: `Hi {{contact.first_name}},

I'm Elliott with Axle Towing. We provide private property towing and parking enforcement across the Phoenix metro area.

I'm reaching out because your clients — the properties using your parking permit system — likely need enforcement to go along with it. Permits only work if unauthorized vehicles actually get towed.

I'd like to propose a partnership:

- When your clients need enforcement to back up their permit system, you refer them to us
- We handle all towing, signage compliance, and enforcement patrols
- Your clients get a complete parking solution: permits from you, enforcement from us
- We can offer your clients preferred pricing as part of the partnership

This makes your permit system more valuable to property managers because they get the full package.

Would you be open to a call this week to discuss how we can work together?

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "parking-permit-email-2",
      action: "send_email",
      delayDays: 4,
      email: {
        subject: "Re: Enforcement partner for your parking permit clients",
        body: `Hi {{contact.first_name}},

Following up on the enforcement partnership idea.

Here's what we bring to the table for your clients:

- 24/7 towing enforcement (not just business hours)
- 30-minute average response time across Phoenix metro
- Full Arizona signage compliance (we handle the legal requirements)
- Monthly enforcement reports for each property
- Zero cost to the property — tow fees cover our service
- Dedicated account manager (not a call center)

For your business, the benefit is simple: properties that have enforcement are more likely to keep their permit system long-term. We make your product stickier.

Some of our partners co-present to property managers — "here's your complete parking solution." Happy to discuss that approach.

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "parking-permit-email-3",
      action: "send_email",
      delayDays: 6,
      email: {
        subject: "Open door for parking enforcement referrals",
        body: `Hi {{contact.first_name}},

Last note on this. If the timing isn't right for a formal partnership, no problem.

But if any of your clients ever ask about towing enforcement to go with their permit system, I'd appreciate the referral:

Elliott — Axle Towing
480-288-5526
axletowing.com

We serve all of Phoenix metro and can usually start enforcement within a week of signing.

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
  ],
};
