import type { WorkflowConfig } from "../types";

export const referralPainter: WorkflowConfig = {
  id: "referral-painter",
  name: "Referral — Painters/Contractors",
  description: "3-email referral partner outreach for painters and contractors over 10 days. Offers vehicle relocation for job sites + mutual referral.",
  trigger: {
    type: "tag_added",
    tag: "seq-referral-painter",
    excludeTags: ["do-not-contact"],
  },
  fromEmail: "info@axletowing.com",
  fromName: "Elliott — Axle Towing",
  enabled: true,
  steps: [
    {
      id: "painter-email-1",
      action: "send_email",
      delayDays: 0,
      email: {
        subject: "Vehicle relocation for your job sites",
        body: `Hi {{contact.first_name}},

I'm Elliott with Axle Towing. We specialize in vehicle relocations for property maintenance — clearing cars out of the way so contractors can get to work.

I know one of the biggest delays on exterior painting and renovation jobs is vehicles parked too close to the building. Residents don't read notices, visitor cars sit there all day, and your crew loses hours waiting.

We handle that:

- Coordinate with the property manager on vehicle notices
- Show up before your crew to relocate vehicles from the work zone
- Handle any vehicles that show up during the job
- Professional, insured, and licensed in all of Phoenix metro

Would it make sense to set up a referral arrangement? When you have a job that needs vehicles cleared, you call us. We show up, handle it, and your crew works uninterrupted.

Happy to discuss over a quick call.

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "painter-email-2",
      action: "send_email",
      delayDays: 4,
      email: {
        subject: "Re: Vehicle relocation for your job sites",
        body: `Hi {{contact.first_name}},

Following up on the vehicle relocation partnership.

Here's what our contractor partners tell us they value:

1. We show up BEFORE their crew — no one's waiting on us
2. We handle the property manager coordination on notices
3. We deal with angry vehicle owners so the contractor doesn't have to
4. 30-minute response if a straggler shows up mid-job
5. One call to us saves hours of crew downtime

We've handled jobs where 10-15 vehicles needed to be moved in a couple hours so the contractor could start on time.

If you do regular work at apartment complexes or HOAs, this could save you a lot of headaches. And we're always happy to refer our property clients to reliable contractors when they need exterior work done.

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
    {
      id: "painter-email-3",
      action: "send_email",
      delayDays: 6,
      email: {
        subject: "Need vehicles moved for a job? Call us",
        body: `Hi {{contact.first_name}},

Last follow-up. If vehicle relocation doesn't come up often on your jobs, no worries.

But next time you're on a job and cars are in the way, save my number:

Elliott — Axle Towing
480-288-5526
axletowing.com

We can usually have vehicles cleared within an hour of your call. And if any of your property clients need parking enforcement, we'd welcome the referral.

Elliott
Axle Towing & Impound
480-288-5526
axletowing.com`,
      },
    },
  ],
};
