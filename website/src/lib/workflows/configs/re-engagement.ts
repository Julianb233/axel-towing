import type { WorkflowConfig } from "../types";

export const reEngagement: WorkflowConfig = {
  id: "re-engagement",
  name: "Re-Engagement Sequence",
  description: "14-day re-engagement sequence for contacts who have been on-hold for 30+ days. 2 emails + 1 SMS to win back dormant prospects.",
  trigger: {
    type: "tag_added",
    tag: "seq-re-engagement",
    excludeTags: ["do-not-contact"],
  },
  fromEmail: "elliott@axletowing.com",
  fromName: "Elliott — Axle Towing",
  enabled: true,
  steps: [
    {
      id: "reeng-email-1",
      action: "send_email",
      delayDays: 0,
      email: {
        subject: "Checking in — it's been a while, {{contact.first_name}}",
        body: `Hi {{contact.first_name}},

It's Elliott from Axle Towing. I know we haven't connected in a while, and I wanted to reach out personally.

I've been thinking about {{contact.company_name}} and wondering how parking enforcement has been going since we last spoke. If we dropped the ball on follow-up — that's on me, and I'm sorry. We've made changes internally to make sure that doesn't happen anymore.

If you found a solution that's working great, I'm genuinely glad. But if things have been inconsistent, slow, or just a hassle — I'd like to earn another shot.

No pitch. Just a quick conversation to catch up.

Would you be open to 10 minutes this week?

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "reeng-email-2",
      action: "send_email",
      delayDays: 7,
      email: {
        subject: "What's changed at Axle Towing since we last connected",
        body: `Hi {{contact.first_name}},

I wanted to share a few things that have changed since we last worked together (or since we spoke):

What's new:

- 24/7 dispatch with real staff — no more voicemail during off-hours
- Online documentation portal for every tow — you can pull reports anytime
- Dedicated account rep assigned to each property — same person, every time
- Formal service agreements with written response time guarantees

The version of Axle Towing you may have experienced before is different from what we are today.

If you're open to it, I'd love to show you what that looks like for {{contact.company_name}} specifically.

Book 15 Minutes: https://axletowing.com/contact

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "reeng-sms-1",
      action: "send_sms",
      delayDays: 7,
      sms: {
        body: "Hi {{contact.first_name}}, Elliott from Axle Towing. I sent a couple of emails — didn't want to let this slip. If you ever want to reconnect about {{contact.company_name}}, I'm here. 480-288-5526.",
      },
    },
    {
      id: "reeng-tag-complete",
      action: "add_tag",
      delayDays: 0,
      tag: "completed-re-engagement",
    },
  ],
};
