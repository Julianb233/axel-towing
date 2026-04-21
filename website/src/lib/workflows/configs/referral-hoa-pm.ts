import type { WorkflowConfig } from "../types";

export const referralHoaPm: WorkflowConfig = {
  id: "referral-hoa-pm",
  name: "Referral — HOA Property Managers (Outreach)",
  description: "4-email outreach sequence for HOA property management companies over 21 days. Targets operations managers and regional directors at large PM firms to get on their preferred vendor list.",
  trigger: {
    type: "tag_added",
    tag: "seq-referral-hoa-pm",
    excludeTags: ["do-not-contact"],
  },
  fromEmail: "elliott@axletowing.com",
  fromName: "Elliott — Axle Towing",
  enabled: true,
  steps: [
    {
      id: "hoa-pm-email-1",
      action: "send_email",
      delayDays: 1,
      email: {
        subject: "Towing & parking enforcement partner for your managed communities",
        body: `Hi {{contact.first_name}},

I'm Elliott with Axle Towing & Impound. We provide 24/7 private property towing and parking enforcement for apartments, HOAs, and commercial properties across the Phoenix metro area.

I'm reaching out specifically because {{contact.company_name}} manages a large portfolio of communities — and parking enforcement tends to be one of the top resident complaints at every property we visit.

Here's what we offer your managed communities at no cost to you or the HOA:

- 24/7/365 dispatch — we answer on the first ring
- Arizona-compliant signage installation (ARS 9-499.05 / ARS 28-4843)
- 30-minute average response time in the Phoenix metro
- Monthly enforcement reports for each property (shareable with owners)
- Zero cost to the property — tow fees cover our service entirely
- Dedicated account manager (not a call center)

Our clients tell us the biggest benefit isn't the towing itself — it's that parking complaints stop reaching them. Residents see consistent enforcement and stop calling.

Would you be open to a 15-minute call this week? I'd love to understand your current enforcement setup and see if there's a fit.

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "hoa-pm-email-2",
      action: "send_email",
      delayDays: 3,
      email: {
        subject: "What property managers tell us they value most",
        body: `Hi {{contact.first_name}},

Following up on my note about parking enforcement for {{contact.company_name}}'s portfolio.

I wanted to share what our current property management partners consistently tell us they value most:

1. One point of contact — not a dispatch center that routes differently every call
2. Monthly written reports they can share with property owners or boards
3. Consistent 30-minute response time — we don't let violations sit
4. We handle all signage compliance — you don't have to manage it
5. Zero cost to the property — the vehicle owner pays, not your client

A few things we're NOT:
- A large impound yard that treats private property calls as an afterthought
- A company that disappears after signing the contract
- Slow to respond on nights and weekends

We're a local, owner-operated company with 30+ years of combined team experience. When you call us at 2am, Elliott or a senior dispatcher picks up.

If this sounds like a fit for any communities in your portfolio, I'd love 15 minutes on a call.

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "hoa-pm-email-3",
      action: "send_email",
      delayDays: 6,
      email: {
        subject: "How we helped a 300-unit complex reduce parking complaints by 90%",
        body: `Hi {{contact.first_name}},

One more note before I close my file on this.

Here's an example of what we typically see in the first 60-90 days after signing a community:

Community type: 250-unit apartment complex, Phoenix metro
Situation: 15-20 unauthorized vehicles per week, residents complaining at every leasing office visit
What we did: Installed compliant signage, set up Monday/Wednesday/Friday enforcement patrols, issued warnings week one, began towing week two
Result: Violations down 85% in 30 days. Property manager stopped getting parking calls within 45 days.

We see this pattern repeatedly across HOAs, apartments, and commercial properties. Consistent, visible enforcement changes behavior fast.

If you have a property in your portfolio that's been a recurring pain point — parking, unauthorized vehicles, fire lane abuse — I'd love to do a no-cost property assessment and give you an honest recommendation.

No obligation. Just a 20-minute walkthrough and we tell you what we'd do and what results to expect.

Would that be worth 15 minutes on a call to set up?

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "hoa-pm-email-4",
      action: "send_email",
      delayDays: 11,
      email: {
        subject: "Last note — parking enforcement for {{contact.company_name}}",
        body: `Hi {{contact.first_name}},

I've sent a few notes over the past few weeks about parking enforcement for your managed properties. I don't want to clog your inbox — so this is my last one for a while.

If parking enforcement ever becomes a pain point for one of your communities, I'd love to be your first call. We're responsive, local, Arizona-compliant, and we make property managers' lives easier.

Here's my direct line: 480-288-5526
And our website: axletowing.com

I'll check in again in a few months. Until then — hope your properties are running smoothly.

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
  ],
};
