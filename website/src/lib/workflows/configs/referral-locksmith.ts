import type { WorkflowConfig } from "../types";

export const referralLocksmith: WorkflowConfig = {
  id: "referral-locksmith",
  name: "Referral — Locksmiths",
  description: "3-email referral partner outreach for locksmiths over 10 days. Proposes mutual referral arrangement — lockouts + tows.",
  trigger: {
    type: "tag_added",
    tag: "seq-referral-locksmith",
    excludeTags: ["do-not-contact"],
  },
  fromEmail: "info@axletowing.com",
  fromName: "Elliott — Axle Towing",
  enabled: true,
  steps: [
    {
      id: "locksmith-email-1",
      action: "send_email",
      delayDays: 0,
      email: {
        subject: "Referral partnership between our companies?",
        body: `Hi {{contact.first_name}},

I'm Elliott with Axle Towing. We handle private property towing and parking enforcement across the Phoenix metro area.

I'm reaching out because locksmiths and towing companies run into each other's customers all the time. You get calls for vehicle lockouts and sometimes the car needs a tow. We get calls for vehicles on properties and sometimes the owner just needs a locksmith.

I'd like to set up a simple referral arrangement:

- When you encounter a vehicle that needs towing, you send them our way
- When we encounter a vehicle that needs a locksmith, we send them yours
- We both win, and the customer gets a faster resolution

No contracts, no fees, just two companies looking out for each other.

Would you be open to a quick call this week to discuss?

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "locksmith-email-2",
      action: "send_email",
      delayDays: 4,
      email: {
        subject: "Re: Referral partnership between our companies?",
        body: `Hi {{contact.first_name}},

Following up on my note about a referral partnership.

Here's what a few of our other referral partners have told us works well:

- We keep each other's business cards in our trucks
- When either of us is on a job and the customer needs the other service, we make the introduction right there
- Property managers love it because they get one call and both problems solved

We serve the entire Phoenix metro — wherever you're getting calls, we can respond. Average response time is 30 minutes.

Happy to grab coffee and talk through the details if you're interested.

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "locksmith-email-3",
      action: "send_email",
      delayDays: 6,
      email: {
        subject: "Quick note — towing referrals",
        body: `Hi {{contact.first_name}},

Last follow-up. If a referral partnership doesn't make sense right now, no problem at all.

But if you ever have a customer who needs a tow, or a property manager asking about parking enforcement, keep us in mind:

Elliott — Axle Towing
480-288-5526
axletowing.com

We'd be happy to return the favor anytime one of our customers needs locksmith services in {{contact.city}}.

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
  ],
};
