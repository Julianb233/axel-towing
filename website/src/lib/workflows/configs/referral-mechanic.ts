import type { WorkflowConfig } from "../types";

export const referralMechanic: WorkflowConfig = {
  id: "referral-mechanic",
  name: "Referral — Mechanics",
  description: "3-email referral partner outreach for auto mechanics over 10 days. Proposes mutual referral — breakdowns need tows, impounds need mechanics.",
  trigger: {
    type: "tag_added",
    tag: "seq-referral-mechanic",
    excludeTags: ["do-not-contact"],
  },
  fromEmail: "elliott@axletowing.com",
  fromName: "Elliott — Axle Towing",
  enabled: true,
  steps: [
    {
      id: "mechanic-email-1",
      action: "send_email",
      delayDays: 0,
      email: {
        subject: "Towing partner for your shop?",
        body: `Hi {{contact.first_name}},

I'm Elliott with Axle Towing. We handle private property towing and roadside assistance across the Phoenix metro area.

I'm reaching out because mechanics and towing companies are natural partners. Your customers break down and need a tow to your shop. Our customers get their car impounded and sometimes need a mechanic before they can drive it home.

I'd like to set up a referral partnership:

- When your customers need a tow to your shop, you call us directly and we prioritize the pickup
- When our impound customers need mechanical work, we refer them to you
- We can leave your business cards at our impound lot, you keep ours at your front desk

Simple, no cost to either of us, and both our customers get better service.

Worth a quick conversation?

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "mechanic-email-2",
      action: "send_email",
      delayDays: 4,
      email: {
        subject: "Re: Towing partner for your shop?",
        body: `Hi {{contact.first_name}},

Following up on the towing partnership idea.

Here's what makes this work for your shop:

- We respond in 30 minutes or less across Phoenix metro
- Your customers get priority dispatch when they call through you
- We do flatbed and wheel-lift, so we can handle any vehicle
- 24/7 availability — breakdowns don't wait for business hours
- We text your customer an ETA so they're not calling you for updates

On our end, we get impound customers regularly who need mechanical work before they can pick up their vehicle. Right now we don't have a go-to shop to send them to. I'd rather send them somewhere I trust.

Let me know if you'd like to set this up.

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "mechanic-email-3",
      action: "send_email",
      delayDays: 6,
      email: {
        subject: "Towing referral — standing offer",
        body: `Hi {{contact.first_name}},

Last follow-up. If a formal partnership isn't your thing, totally fine.

But if you ever need a tow truck for a customer breakdown or want to clear an abandoned vehicle from your lot, save my number:

Elliott — Axle Towing
480-288-5526
axletowing.com

30-minute response, fair pricing, and we'll always send your customers back to you if they need a mechanic.

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
  ],
};
