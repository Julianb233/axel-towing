import type { WorkflowConfig } from "../types";

export const propertyManager: WorkflowConfig = {
  id: "property-manager",
  name: "Property Manager Sequence",
  description: "28-day email sequence for property managers. Focuses on portfolio partnership, reliability, tenant disputes, time savings, and a final portfolio offer.",
  trigger: {
    type: "tag_added",
    tag: "seq-property-manager",
    excludeTags: ["do-not-contact"],
  },
  fromEmail: "elliott@axletowing.com",
  fromName: "Elliott — Axle Towing",
  enabled: true,
  steps: [
    {
      id: "pm-email-1",
      action: "send_email",
      delayDays: 0,
      email: {
        subject: "Managing multiple Phoenix-area properties? One towing partner for all of them.",
        body: `Hi {{contact.first_name}},

If you're managing more than one property in the Phoenix metro, you know how painful it is when each one has a different towing vendor — different contacts, different response times, different paperwork.

I'm Elliott with Axle Towing & Impound. We work with property management companies that want one consistent enforcement partner across their portfolio.

Here's what that looks like in practice:

Single point of contact: My direct cell for every property in your book. Not a call center.
Consistent response: Same standards, same documentation, same speed — whether it's your property in Mesa or your property in Chandler.
Portfolio-level reporting: Monthly tow activity summary across all properties, ready for your records or for your clients.
Bulk account pricing: More properties = better rates. We reward portfolio partnerships.

Do you have 15 minutes this week? I'd like to learn about your portfolio and see if we'd be a fit.

Book a Quick Call: https://axletowing.com/contact

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "pm-email-2",
      action: "send_email",
      delayDays: 5,
      email: {
        subject: "The #1 complaint property managers have about towing companies",
        body: `Hi {{contact.first_name}},

After years in this business, I can tell you the #1 complaint we hear from property managers who switch to us:

"My last company never called back."

Not once. Not twice. Consistently. Property manager calls about a tow, company doesn't respond. Tenant dispute, company goes quiet. Invoice question, voicemail purgatory.

We operate differently.

When you call Elliott's direct line, Elliott picks up. When there's a dispute, we send you the documentation within 24 hours. When you need something documented for a tenant file, we're on it.

Is that the kind of reliability missing from your current setup?

Let's Find Out — Book 15 Minutes: https://axletowing.com/contact

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "pm-email-3",
      action: "send_email",
      delayDays: 6,
      email: {
        subject: "How we handle tenant parking disputes so you don't have to",
        body: `Hi {{contact.first_name}},

Here's a scenario I'll bet you've dealt with:

A tenant gets towed. They're furious. They come to your office. You have to track down your towing company, get documentation, and play referee — all while trying to do everything else on your plate.

Here's how it works when you have an Axle Towing account:

1. Tenant calls us directly (we give them our number)
2. We walk them through what happened and why
3. We send them their documentation
4. You get a heads-up if it escalates — usually it doesn't

We take the dispute off your desk. That's part of the service.

Want to see how this would work across your properties?

Book a Free Portfolio Review: https://axletowing.com/contact

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "pm-email-4",
      action: "send_email",
      delayDays: 7,
      email: {
        subject: "{{contact.first_name}} — a question about your current towing setup",
        body: `Hi {{contact.first_name}},

Quick question: how much time per month does your team spend on towing-related issues? Complaints, disputes, documentation requests, coordinating with your current provider?

Most property managers we talk to say it's 2-4 hours per month, per property. For a 10-property portfolio, that's 20-40 hours of staff time.

With a properly structured enforcement setup, that number drops to under 30 minutes per property per month — mostly just reviewing monthly reports.

That's the difference a good enforcement partner makes.

Would it be worth 15 minutes to find out if we could get you there?

Yes — Let's Talk: https://axletowing.com/contact

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "pm-email-5",
      action: "send_email",
      delayDays: 10,
      email: {
        subject: "Portfolio partnership offer — closing this out",
        body: `Hi {{contact.first_name}},

Last note from me.

For property managers with 5+ properties in the Phoenix metro, we offer:

- Dedicated account rep (direct cell, not a hotline)
- Consolidated monthly reporting across all properties
- Priority dispatch — your properties jump the queue
- Annual rate lock — pricing locked for 12 months
- Free signage audit for every property at onboarding

This package isn't listed anywhere — it's for portfolio partners only.

If now isn't the right time, save my number. When your current setup lets you down, I want to be the first call.

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "pm-tag-complete",
      action: "add_tag",
      delayDays: 0,
      tag: "completed-pm-sequence",
    },
  ],
};
