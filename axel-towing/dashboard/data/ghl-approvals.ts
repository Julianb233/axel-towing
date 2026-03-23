export interface ApprovalItem {
  id: string;
  workflow: string;
  touch: string;
  channel: "Email" | "SMS" | "Internal";
  subject: string;
  body: string;
  status: "pending" | "approved";
}

export interface ApprovalCategory {
  name: string;
  description: string;
  items: ApprovalItem[];
}

export const ghlApprovals: ApprovalCategory[] = [
  {
    name: "New Lead Nurture",
    description: "Automated sequence for new leads entering the pipeline. Builds trust and drives first conversion.",
    items: [
      {
        id: "nln-1",
        workflow: "New Lead Nurture",
        touch: "Touch 1 - Day 0",
        channel: "Email",
        subject: "Welcome to Axle Towing — Here's What Sets Us Apart",
        body: `Hi [First Name],

Thanks for reaching out to Axle Towing & Impound. I'm Elliott, the owner, and I wanted to personally welcome you and give you a quick overview of what we do.

We specialize in private property towing and parking enforcement for apartment complexes, HOAs, and commercial properties throughout the Phoenix metro area. Here's what makes us different:

- 24/7/365 Dispatch: Our team is available around the clock — nights, weekends, holidays. When you call, we answer.
- Fast Response Times: Average response time of 30 minutes across the Valley.
- Full Arizona Compliance: Every tow we perform meets ARS 9-499.05 signage requirements and all state regulations. You're fully protected.
- Free Posted Signage: We provide and install compliant parking signs at no extra cost to you.
- Dedicated Account Manager: You'll have a single point of contact who knows your property inside and out.

I'd love to schedule a quick 15-minute call to learn about your property and see if we're a good fit. No pressure — just a conversation.

You can reply to this email, call us at 480-288-5526, or text anytime.

Looking forward to connecting,

Elliott
Owner, Axle Towing & Impound
480-288-5526
axletowing.com`,
        status: "pending",
      },
      {
        id: "nln-2",
        workflow: "New Lead Nurture",
        touch: "Touch 2 - Day 1",
        channel: "SMS",
        subject: "Quick intro + offer to schedule a call",
        body: `Hi [First Name], this is Elliott from Axle Towing. Thanks for your interest in our towing and parking enforcement services. I'd love to chat for 10 minutes about your property — would tomorrow or Thursday work? You can also call or text me anytime at 480-288-5526. - Elliott`,
        status: "pending",
      },
      {
        id: "nln-3",
        workflow: "New Lead Nurture",
        touch: "Touch 3 - Day 3",
        channel: "Email",
        subject: "How We Handle Private Property Towing (Case Study)",
        body: `Hi [First Name],

I wanted to share a quick example of how we've helped a property similar to yours.

THE SITUATION:
A 200-unit apartment complex in Mesa was dealing with constant unauthorized parking. Residents were frustrated, management was fielding daily complaints, and their previous towing company had inconsistent response times and sloppy documentation.

WHAT WE DID:
1. Conducted a free property assessment and identified problem areas
2. Installed compliant signage at every entrance and in key violation zones
3. Set up a dedicated dispatch line for property management
4. Established clear towing authorization protocols with on-site staff
5. Began 24/7 patrol coverage within 48 hours of contract signing

THE RESULT:
Within 60 days, unauthorized parking complaints dropped by 73%. Resident satisfaction scores on parking went from 2.1/5 to 4.4/5. The property manager told us, "We should have switched to Axle a year ago."

Every property is different, but the approach is the same: we listen, we plan, and we execute.

Want to see what a plan would look like for your property? I'll put one together for free — no obligation.

Just reply to this email or call 480-288-5526.

Best,

Elliott
Axle Towing & Impound`,
        status: "pending",
      },
      {
        id: "nln-4",
        workflow: "New Lead Nurture",
        touch: "Touch 4 - Day 5",
        channel: "Internal",
        subject: "Internal task: Follow up with lead if no response",
        body: `INTERNAL TASK — NOT SENT TO LEAD

Action: If this lead has not responded to Touch 1 (email), Touch 2 (SMS), or Touch 3 (email), assign a manual follow-up task to Elliott or Brian.

Steps:
1. Check CRM for any responses, calls, or texts from the lead
2. If no activity, call the lead directly from the office line (480-288-5526)
3. If no answer, leave a voicemail: "Hi [First Name], this is Elliott from Axle Towing. Just following up on your inquiry about towing services. We'd love to help — give us a call back at 480-288-5526 whenever you have a minute."
4. Log the call attempt in the CRM
5. If still no response after this touch, the sequence continues automatically`,
        status: "pending",
      },
      {
        id: "nln-5",
        workflow: "New Lead Nurture",
        touch: "Touch 5 - Day 7",
        channel: "Email",
        subject: "3 Reasons Phoenix Property Managers Choose Axle",
        body: `Hi [First Name],

I talk to property managers every week, and I keep hearing the same three frustrations with their current towing providers. Here's why many of them end up switching to Axle:

1. "I CAN'T GET ANYONE ON THE PHONE AT 2 AM"
Most towing companies say they're 24/7 — until you actually call at midnight on a Saturday. Our dispatch team answers every call, every time, 24/7/365. No voicemail loops, no callbacks in the morning.

2. "I'M WORRIED ABOUT LIABILITY"
Arizona towing laws are strict, and one bad tow can mean a lawsuit. We handle full documentation for every tow — timestamped photos, signage verification, authorization records. If there's ever a dispute, you have a complete paper trail.

3. "MY CURRENT COMPANY IS UNRELIABLE"
Slow response times and no-shows are the #1 complaint we hear. Our average response time is 30 minutes. If we say we'll be there, we'll be there.

If any of these sound familiar, let's talk. A 15-minute call is all it takes to see if we're the right fit.

Reply here or call 480-288-5526.

Best,

Elliott
Axle Towing & Impound`,
        status: "pending",
      },
      {
        id: "nln-6",
        workflow: "New Lead Nurture",
        touch: "Touch 6 - Day 10",
        channel: "SMS",
        subject: "Checking in — any questions about our services?",
        body: `Hey [First Name], Elliott from Axle Towing here. Just checking in — wanted to make sure you got the info you needed about our towing and parking enforcement services. Happy to answer any questions. Text me back or call 480-288-5526 anytime.`,
        status: "pending",
      },
      {
        id: "nln-7",
        workflow: "New Lead Nurture",
        touch: "Touch 7 - Day 14",
        channel: "Email",
        subject: "Your Parking Enforcement Checklist (Free Download)",
        body: `Hi [First Name],

Whether you end up working with us or not, I wanted to share something useful.

We put together a Parking Enforcement Checklist that covers everything you need to know about setting up a compliant towing program on your property:

YOUR PARKING ENFORCEMENT CHECKLIST:

[ ] Signage Compliance — Are your signs ARS 9-499.05 compliant? (Minimum size, required language, placement at every entrance)
[ ] Authorization Protocols — Who on your staff is authorized to request a tow? Is it documented?
[ ] Towing Company Contract — Do you have a written agreement with your towing provider? Does it include response time guarantees?
[ ] Documentation Process — Is every tow photographed and timestamped? Can you produce records if challenged?
[ ] Resident Communication — Have residents been notified of parking rules and enforcement policies?
[ ] Guest Parking Policy — Is there a clear system for guest permits or visitor parking?
[ ] Fire Lane Enforcement — Are fire lanes clearly marked and actively enforced?
[ ] ADA Compliance — Are accessible spaces properly marked and protected from violations?
[ ] After-Hours Coverage — Can unauthorized vehicles be removed at 2 AM on a Sunday?
[ ] Dispute Resolution — What happens when a towed vehicle owner disputes the tow?

If you'd like help checking any of these boxes, we offer a free property assessment where we walk your lot, review your signage, and give you a no-obligation recommendation.

Just reply "assessment" and I'll set it up.

Best,

Elliott
Axle Towing & Impound
480-288-5526`,
        status: "pending",
      },
      {
        id: "nln-8",
        workflow: "New Lead Nurture",
        touch: "Touch 8 - Day 21",
        channel: "Email",
        subject: "Last chance: Complimentary property assessment",
        body: `Hi [First Name],

This is my last scheduled message, so I'll keep it brief.

If parking enforcement is something you're still thinking about, we'd love to come out and do a free property assessment. No sales pitch — we'll walk your lot, review your signage, and give you an honest recommendation.

Here's what the assessment includes:
- Full lot walk-through to identify problem areas
- Signage compliance review (ARS 9-499.05)
- Recommended tow zones and enforcement strategy
- Response time estimate based on your location
- No-obligation quote

It takes about 30 minutes and there's zero pressure. If we're a good fit, great. If not, you'll still walk away with useful information.

Interested? Just reply to this email or call/text 480-288-5526.

Either way, I wish you the best with your property.

Elliott
Owner, Axle Towing & Impound
480-288-5526
axletowing.com`,
        status: "pending",
      },
    ],
  },
  {
    name: "Re-Engagement",
    description: "Reaches out to cold leads who went silent. Win-back messaging to reignite interest.",
    items: [
      {
        id: "re-1",
        workflow: "Re-Engagement",
        touch: "Touch 1 - Day 30",
        channel: "Email",
        subject: "Still looking for a towing partner? We're here.",
        body: `Hi [First Name],

It's been about a month since we last connected, and I just wanted to check in.

If parking enforcement has been on the back burner, I totally understand — property management keeps you busy with a hundred other things.

But if unauthorized parking is still a headache at your property, we're here whenever you're ready. Nothing has changed on our end:

- Still 24/7/365 dispatch
- Still averaging 30-minute response times
- Still providing free compliant signage
- Still offering free property assessments

No pressure at all. Just reply if you'd like to pick the conversation back up.

Best,

Elliott
Axle Towing & Impound
480-288-5526`,
        status: "pending",
      },
      {
        id: "re-2",
        workflow: "Re-Engagement",
        touch: "Touch 2 - Day 60",
        channel: "Email",
        subject: "New: 24/7 Dispatch + AI Receptionist Now Live",
        body: `Hi [First Name],

Quick update from Axle Towing — we've made some improvements since we last talked that I think you'll find interesting.

WHAT'S NEW:

1. AI Receptionist: Our new system ensures no call goes unanswered, even at 3 AM. If our team is on another call, the AI receptionist takes your information and dispatches immediately.

2. Faster Onboarding: We've streamlined our process. From signed contract to active enforcement in 48 hours or less — including signage installation.

3. Online Portal: Property managers now get access to a dedicated portal where you can request tows, view tow history, and download compliance reports.

4. Expanded Coverage: We've added more drivers and expanded our service area across the entire Phoenix metro.

If the timing wasn't right before, it might be now. I'd love to reconnect for a quick call.

Reply to this email or call/text 480-288-5526.

Best,

Elliott
Axle Towing & Impound`,
        status: "pending",
      },
      {
        id: "re-3",
        workflow: "Re-Engagement",
        touch: "Touch 3 - Day 90",
        channel: "Email",
        subject: "Quick question about your towing situation",
        body: `Hi [First Name],

I have a quick question — no pitch, just genuine curiosity:

Did you end up finding a towing partner for your property?

If so, great — I hope they're treating you well. If you ever need a second option or backup provider, we're always here.

If not, and unauthorized parking is still an issue, I'd love to help. Even a 10-minute call could save you hours of headaches down the road.

Either way, just reply and let me know. I appreciate your time.

Best,

Elliott
Axle Towing & Impound
480-288-5526`,
        status: "pending",
      },
      {
        id: "re-4",
        workflow: "Re-Engagement",
        touch: "Touch 4 - Day 180",
        channel: "Email",
        subject: "A lot has changed at Axle — here's what's new",
        body: `Hi [First Name],

It's been a while since we last connected, and a lot has changed at Axle Towing. I wanted to give you a quick update in case your towing needs have evolved:

SINCE WE LAST TALKED:
- We've onboarded 25+ new properties across the Phoenix metro
- Our average response time is now under 25 minutes
- We launched a 24/7 AI receptionist so no call ever goes to voicemail
- We now offer free compliance audits for existing parking enforcement programs
- We've expanded our fleet with 3 new trucks

If you're happy with your current provider, no worries at all. But if you're curious about what we could do for your property, the offer for a free assessment still stands.

Just reply or call 480-288-5526.

Wishing you a great rest of the year,

Elliott
Owner, Axle Towing & Impound
axletowing.com`,
        status: "pending",
      },
    ],
  },
  {
    name: "Post-Onboarding",
    description: "Sent after a new customer signs their contract. Reinforces the relationship and drives reviews.",
    items: [
      {
        id: "po-1",
        workflow: "Post-Onboarding",
        touch: "Touch 1 - Day 1",
        channel: "Email",
        subject: "Welcome aboard! Here's your onboarding checklist",
        body: `Hi [First Name],

Welcome to Axle Towing & Impound! We're excited to have [Property Name] as a new partner.

Here's what happens next. We've broken onboarding into a simple checklist so nothing falls through the cracks:

YOUR ONBOARDING CHECKLIST:

1. Signage Installation (within 48 hours)
Our team will visit your property to install compliant parking enforcement signs at every entrance and in key violation areas. Signs meet all ARS 9-499.05 requirements.

2. Dispatch Setup (within 24 hours)
Your property is being added to our dispatch system right now. You'll receive a dedicated dispatch number and your account will be active for 24/7 tow requests.

3. Authorization Protocol
We'll confirm who on your team is authorized to request tows. This can be property managers, on-site staff, security, or a combination. We'll set up authorization codes for each person.

4. Tow Zone Mapping
Based on our property assessment, we've identified the primary violation areas and will configure our dispatch zones accordingly for fastest response.

5. Welcome Packet
You'll receive a welcome packet with:
- Your dedicated account manager's direct contact info
- Emergency dispatch instructions
- Signage compliance documentation
- Copy of your service agreement
- Resident notification template you can distribute

If you have any questions at all, don't hesitate to reach out. We're here for you 24/7.

Best,

Elliott
Axle Towing & Impound
480-288-5526`,
        status: "pending",
      },
      {
        id: "po-2",
        workflow: "Post-Onboarding",
        touch: "Touch 2 - Day 7",
        channel: "Email",
        subject: "How's your first week? Quick check-in from Axle",
        body: `Hi [First Name],

Just checking in after your first week with Axle Towing. I wanted to make sure everything is running smoothly.

A few quick questions:
- Has signage been installed at all the right locations?
- Have you or your team had a chance to test the dispatch line?
- Are there any areas of your property where you're seeing parking issues that we should address?

If everything looks good, great — we'll keep doing our thing. If anything needs adjustment, now is the perfect time to fine-tune.

Also, a quick reminder: our dispatch line is available 24/7/365. Don't hesitate to call even for minor issues — that's what we're here for.

Your dedicated account manager, [Account Manager Name], is also available at [direct line] during business hours for any non-urgent questions.

Talk soon,

Elliott
Axle Towing & Impound
480-288-5526`,
        status: "pending",
      },
      {
        id: "po-3",
        workflow: "Post-Onboarding",
        touch: "Touch 3 - Day 14",
        channel: "Email",
        subject: "Pro tip: How to post towing signage for compliance",
        body: `Hi [First Name],

Two weeks in — here's a pro tip that can save you headaches down the road.

SIGNAGE BEST PRACTICES FOR YOUR PROPERTY:

While we've installed your primary signs, here are some additional best practices that keep you compliant and protected:

1. Entrance Signs: Every vehicular entrance to your property should have a sign. If there's a way to drive in, there needs to be a sign.

2. Sign Visibility: Signs should be visible from the driver's seat — not blocked by bushes, parked cars, or faded from sun exposure. We check these during our regular visits.

3. Required Language (per ARS 9-499.05):
   - "Unauthorized vehicles will be towed at owner's expense"
   - Name and phone number of the towing company (Axle Towing, 480-288-5526)
   - Must be at least 18"x24" in size

4. Supplemental Signs: For specific zones (fire lanes, reserved spots, handicap), consider additional signs beyond the entrance signs.

5. Photo Documentation: Every sign we install is photographed and timestamped. We keep these records on file so if a tow is ever disputed, you have proof the signage was compliant.

If you'd like us to add signs to any new areas, just let us know — additional signage is always included in your service agreement at no extra cost.

Best,

Elliott
Axle Towing & Impound`,
        status: "pending",
      },
      {
        id: "po-4",
        workflow: "Post-Onboarding",
        touch: "Touch 4 - Day 30",
        channel: "Email",
        subject: "Your first month recap + next steps",
        body: `Hi [First Name],

Congratulations on your first month with Axle Towing! Here's a quick recap of what we've accomplished together:

YOUR FIRST MONTH SUMMARY:
- Signage installed: [X] signs across your property
- Tow requests processed: [X]
- Average response time: [X] minutes
- Compliance incidents: 0

WHAT'S WORKING:
Based on our data, [brief observation about the property — e.g., "the main parking lot violation rate has dropped significantly since signage installation"].

NEXT STEPS:
1. We'll continue 24/7 coverage as normal
2. If you have any upcoming events, seasonal changes, or construction that might affect parking, give us a heads up so we can adjust coverage
3. Consider distributing the resident notification template to remind tenants about parking rules

QUICK ASK:
If you're happy with our service so far, we'd really appreciate a Google review. It takes about 30 seconds and helps other property managers find us:
[Google Review Link]

No pressure at all — but it means the world to a small business like ours.

Thanks for trusting us with your property,

Elliott
Axle Towing & Impound
480-288-5526`,
        status: "pending",
      },
      {
        id: "po-5",
        workflow: "Post-Onboarding",
        touch: "Touch 5 - Day 60",
        channel: "Email",
        subject: "Are we meeting your expectations? Quick survey",
        body: `Hi [First Name],

We're two months into our partnership and I wanted to take a moment to ask: how are we doing?

Your feedback helps us improve, and I read every response personally. It takes about 60 seconds:

1. Response Time: How would you rate our response time? (1-5)
2. Communication: Are we keeping you informed after each tow? (Yes/No)
3. Signage: Is the signage still in good condition and properly placed? (Yes/No)
4. Staff Interaction: How have your interactions been with our team? (1-5)
5. Overall Satisfaction: Would you recommend Axle to a colleague? (Yes/No)

Anything else you'd like us to improve?
_______________________________________

Just reply to this email with your answers — no formal survey link needed. I'll personally review your feedback and follow up if there are any issues to address.

We're committed to being the best towing partner you've ever had.

Best,

Elliott
Axle Towing & Impound
480-288-5526`,
        status: "pending",
      },
      {
        id: "po-6",
        workflow: "Post-Onboarding",
        touch: "Touch 6 - Day 90",
        channel: "Email",
        subject: "90-day partnership review + referral opportunity",
        body: `Hi [First Name],

We've hit the 90-day mark in our partnership, and I hope you're as pleased as we are with how things are going.

YOUR 90-DAY SNAPSHOT:
- Total tows completed: [X]
- Average response time: [X] minutes
- Compliance record: 100% clean
- Signage status: All signs inspected and current

REFERRAL PROGRAM:
Many of our best partnerships come from property manager referrals. If you know another property manager, HOA board member, or commercial property owner who could use reliable towing services, we'd love an introduction.

For every referred property that signs a contract:
- You receive a $250 referral bonus
- The referred property gets their first month of service free

No forms to fill out — just send me their name and email, and I'll take it from there.

LOOKING AHEAD:
As your property's needs evolve, so do we. Whether it's seasonal events, construction projects, or changes in parking layout, we're here to adapt with you.

Thank you for your trust and partnership,

Elliott
Owner, Axle Towing & Impound
480-288-5526
axletowing.com`,
        status: "pending",
      },
    ],
  },
  {
    name: "Referral Outreach - HOA",
    description: "Cold outreach to HOA board members and community managers to generate new towing contracts.",
    items: [
      {
        id: "rh-1",
        workflow: "Referral - HOA",
        touch: "Touch 1",
        channel: "Email",
        subject: "Parking enforcement solution for [Community Name]",
        body: `Dear [Board Member / Community Manager Name],

My name is Elliott, and I'm the owner of Axle Towing & Impound. I'm reaching out because I understand that parking enforcement is one of the top concerns for HOA communities in [City/Area].

We specialize in private property towing for HOA communities across the Phoenix metro area, and I'd like to share how we might be able to help [Community Name].

WHAT WE PROVIDE:
- 24/7/365 Dispatch: Unauthorized vehicles removed day or night, including weekends and holidays
- ARS 9-499.05 Compliant Signage: We provide and install all required signage at no cost to your community
- Full Documentation: Every tow is photographed, timestamped, and documented for your records and liability protection
- Dedicated Account Manager: One point of contact who knows your community's layout and rules
- Fast Response: Average response time of 30 minutes anywhere in the Phoenix metro

WHAT MAKES US DIFFERENT:
Unlike larger towing companies that treat HOAs as an afterthought, private property enforcement is our core business. We understand the politics of HOA towing — resident sensitivities, guest parking nuances, and the importance of clear communication.

I'd welcome the opportunity to present our services at your next board meeting, or simply schedule a 15-minute call to discuss your community's needs.

Respectfully,

Elliott
Owner, Axle Towing & Impound
480-288-5526
axletowing.com`,
        status: "pending",
      },
      {
        id: "rh-2",
        workflow: "Referral - HOA",
        touch: "Touch 2",
        channel: "Email",
        subject: "How [Similar HOA] reduced parking complaints by 60%",
        body: `Dear [Name],

I wanted to share a quick story about a community similar to yours.

[Similar Community] is a [200-unit / 300-home] community in [Scottsdale/Chandler/Mesa] that was struggling with persistent parking violations — residents parking in fire lanes, guests using reserved spots, abandoned vehicles sitting for weeks.

Their previous towing company had slow response times and poor communication. The board was fielding angry emails from both residents whose spots were taken AND residents whose vehicles were towed without proper notice.

HERE'S WHAT CHANGED:
Within the first 30 days of working with Axle Towing:
- We installed compliant signage at every entrance and violation zone
- Set up a clear authorization protocol so only designated board members or management could request tows
- Established a resident notification system so everyone understood the rules
- Began 24/7 enforcement coverage

THE RESULT:
Within 60 days, parking complaints to the board dropped by 60%. Residents reported feeling safer (fire lanes were clear), and the board stopped spending meeting time on parking disputes.

Every community is unique, but the fundamentals are the same: clear signage, consistent enforcement, professional documentation, and responsive service.

I'd be happy to discuss what a plan might look like for [Community Name]. Free assessment, no obligation.

Best regards,

Elliott
Axle Towing & Impound
480-288-5526`,
        status: "pending",
      },
      {
        id: "rh-3",
        workflow: "Referral - HOA",
        touch: "Touch 3",
        channel: "Email",
        subject: "Free parking audit for your community",
        body: `Dear [Name],

I'd like to offer [Community Name] a complimentary parking audit — completely free, no strings attached.

WHAT THE AUDIT INCLUDES:
1. Property Walk-Through: We'll walk your entire property and identify every parking violation hotspot
2. Signage Review: We'll check every existing sign for ARS 9-499.05 compliance (size, language, placement)
3. Fire Lane Assessment: We'll verify fire lanes are properly marked and accessible
4. Guest Parking Review: We'll evaluate your guest parking system and suggest improvements
5. Written Report: You'll receive a detailed report with photos, findings, and recommendations

WHY WE OFFER THIS FOR FREE:
Most communities don't realize they have signage compliance gaps until there's a legal dispute. This audit protects you whether or not you choose to work with us.

The audit takes about 45 minutes and can be scheduled at your convenience — including evenings and weekends to minimize disruption.

Interested? Just reply with a good time, and I'll set it up.

Respectfully,

Elliott
Axle Towing & Impound
480-288-5526`,
        status: "pending",
      },
      {
        id: "rh-4",
        workflow: "Referral - HOA",
        touch: "Touch 4",
        channel: "Email",
        subject: "Final follow-up: Parking enforcement partnership",
        body: `Dear [Name],

This is my final follow-up, and I want to respect your time.

If parking enforcement isn't a priority for [Community Name] right now, I completely understand. Boards have a lot on their plate.

But if you ever need:
- Emergency towing for a fire lane violation or abandoned vehicle
- A second opinion on your current towing provider
- A free signage compliance check
- A quote for ongoing enforcement services

We're just a call or text away: 480-288-5526.

I'll leave the door open and won't reach out again unless you do. Thank you for your time, and I wish your community the best.

Respectfully,

Elliott
Owner, Axle Towing & Impound
axletowing.com`,
        status: "pending",
      },
    ],
  },
  {
    name: "Referral Outreach - Property Mgmt",
    description: "Targeted outreach to property management companies handling multi-family and commercial properties.",
    items: [
      {
        id: "rpm-1",
        workflow: "Referral - Property Mgmt",
        touch: "Touch 1",
        channel: "Email",
        subject: "Towing partner for your managed properties",
        body: `Hi [Name],

I'm Elliott from Axle Towing & Impound. We provide private property towing and parking enforcement for property management companies throughout the Phoenix metro area.

I'm reaching out because I know managing parking across multiple properties is a constant challenge. Different properties, different rules, different headaches — and most towing companies treat you like just another account.

HERE'S HOW WE WORK WITH PROPERTY MANAGEMENT COMPANIES:

Centralized Account Management: One dedicated point of contact for ALL your properties. No calling different people for different locations.

Portfolio-Wide Coverage: Whether you manage 5 properties or 50, we handle them all under one agreement with consistent service standards.

Property-Specific Protocols: Each property gets its own customized towing authorization protocol, signage plan, and dispatch priority based on its unique needs.

Consolidated Reporting: Monthly reports covering all your properties — tows completed, response times, compliance status — in one easy-to-review document.

24/7/365 Dispatch: One phone number that works around the clock for every property in your portfolio.

Can I schedule a 15-minute call to learn about your portfolio and see if there's a fit?

Best regards,

Elliott
Axle Towing & Impound
480-288-5526`,
        status: "pending",
      },
      {
        id: "rpm-2",
        workflow: "Referral - Property Mgmt",
        touch: "Touch 2",
        channel: "Email",
        subject: "How we handle towing so you don't have to",
        body: `Hi [Name],

I know property managers wear a dozen hats — and "towing coordinator" shouldn't have to be one of them.

Here's what happens when you partner with Axle Towing:

WHEN A VIOLATION OCCURS:
1. Your on-site team calls our dispatch line (24/7/365)
2. We verify authorization using your property's specific protocol
3. A driver is dispatched immediately (average 30-minute response)
4. The vehicle is photographed, documented, and towed
5. You receive a notification with tow details and documentation
6. The vehicle owner contacts US, not you — we handle all retrieval inquiries

WHAT YOU DON'T HAVE TO DO:
- Answer angry phone calls from towed vehicle owners (we handle that)
- Worry about legal compliance (we ensure every tow is ARS-compliant)
- Install or maintain signage (we provide and maintain all signs)
- Keep towing records (we maintain full documentation for 3+ years)
- Coordinate with drivers (our dispatch handles everything)

Your only job is to tell us when a vehicle needs to go. We handle everything else.

Worth a 15-minute conversation?

Best,

Elliott
Axle Towing & Impound
480-288-5526`,
        status: "pending",
      },
      {
        id: "rpm-3",
        workflow: "Referral - Property Mgmt",
        touch: "Touch 3",
        channel: "Email",
        subject: "Case study: 200-unit complex towing program",
        body: `Hi [Name],

I wanted to share a case study from a property management company similar to yours.

THE CLIENT:
A Phoenix-based property management company overseeing 12 multi-family properties (1,800+ units total) across Mesa, Chandler, and Gilbert.

THE PROBLEM:
They were using three different towing companies across their portfolio. Inconsistent response times (ranging from 45 minutes to 3+ hours). No standardized documentation. Two pending legal disputes from improperly documented tows. Property managers spending 5+ hours per month coordinating towing across properties.

OUR SOLUTION:
1. Consolidated all 12 properties under one Axle Towing agreement
2. Created property-specific authorization protocols for each location
3. Installed compliant signage at all 12 properties within the first week
4. Set up one dedicated account manager as their single point of contact
5. Implemented monthly portfolio reporting with tow data, response times, and compliance metrics

THE RESULTS (FIRST 90 DAYS):
- Average response time: 27 minutes (down from 90+)
- Towing coordination time: Reduced from 5 hours/month to under 30 minutes
- Legal disputes: Zero — full documentation for every tow
- Savings: Approximately $400/month in reduced admin time and eliminated duplicate service agreements

I'd love to show you what a similar program would look like for your portfolio.

Best regards,

Elliott
Axle Towing & Impound
480-288-5526`,
        status: "pending",
      },
      {
        id: "rpm-4",
        workflow: "Referral - Property Mgmt",
        touch: "Touch 4",
        channel: "Email",
        subject: "Last chance: Complimentary property towing assessment",
        body: `Hi [Name],

This is my last follow-up, and I want to keep it simple.

If parking enforcement is something your properties need help with — now or in the future — we're here. Our offer for a free property assessment stands with no expiration date.

THE FREE ASSESSMENT INCLUDES:
- Walk-through of any property in your portfolio
- Signage compliance review
- Violation hotspot identification
- Custom enforcement recommendation
- No-obligation quote

Just reply with "assessment" and the property address, and I'll get it scheduled.

If the timing isn't right, no worries. Keep our number handy: 480-288-5526. We're available 24/7 whenever you need us.

Thank you for your time,

Elliott
Owner, Axle Towing & Impound
axletowing.com`,
        status: "pending",
      },
    ],
  },
  {
    name: "Referral Outreach - Apartments",
    description: "Outreach to apartment complex owners and managers for ongoing towing enforcement contracts.",
    items: [
      {
        id: "ra-1",
        workflow: "Referral - Apartments",
        touch: "Touch 1",
        channel: "Email",
        subject: "Solve your apartment parking problems overnight",
        body: `Hi [Name],

If you manage an apartment complex in Phoenix, you already know the parking struggle: tenants with too many cars, guests taking resident spots, abandoned vehicles collecting dust, and fire lanes being used as extra parking.

I'm Elliott from Axle Towing & Impound, and we specialize in solving exactly these problems for apartment communities across the Valley.

HERE'S WHAT WE DO FOR APARTMENT COMPLEXES:

24/7 Unauthorized Vehicle Removal: Day or night, weekdays or holidays — one call and we're on our way. Average response: 30 minutes.

Tenant-Friendly Approach: We're firm but fair. Clear signage, proper notice periods, and professional interactions with your residents. We protect your property without creating unnecessary conflict.

Complete Signage Package: We provide and install all required signs at no extra cost. Every sign meets Arizona's ARS 9-499.05 requirements.

Documented Every Time: Every tow includes timestamped photos, authorization records, and compliance verification. If there's ever a dispute, you're covered.

No Cost to You: Our standard enforcement agreements are at no cost to the property. Tow fees are paid by the vehicle owner.

I'd love to learn about your property and put together a free assessment. Can we schedule a quick call this week?

Best,

Elliott
Axle Towing & Impound
480-288-5526`,
        status: "pending",
      },
      {
        id: "ra-2",
        workflow: "Referral - Apartments",
        touch: "Touch 2",
        channel: "Email",
        subject: "Why 50+ Phoenix apartments trust Axle Towing",
        body: `Hi [Name],

You might be wondering: why do so many apartment communities in Phoenix choose Axle Towing?

Here's what we hear most often:

"YOU ACTUALLY ANSWER THE PHONE."
Our dispatch line is staffed 24/7/365. No voicemail, no call-back requests, no automated systems. A real person answers every time.

"YOUR DRIVERS ARE PROFESSIONAL."
Our team members are trained in tenant relations, not just towing. They're uniformed, courteous, and discreet. No loud chains at 2 AM, no confrontations with residents.

"YOU HANDLE THE ANGRY CALLS SO WE DON'T HAVE TO."
When a vehicle is towed, the owner calls US to arrange retrieval. Your leasing office doesn't have to deal with upset vehicle owners.

"WE'VE NEVER HAD A LEGAL ISSUE."
Full documentation, compliant signage, proper authorization protocols. We've maintained a zero-dispute record because we do things right every time.

"IT DOESN'T COST US ANYTHING."
Standard enforcement agreements are at no cost to the property. The tow fee is paid by the vehicle owner upon retrieval.

Interested in learning more? I'm happy to come out for a free lot assessment — takes about 30 minutes and there's no obligation.

Reply here or call/text 480-288-5526.

Best,

Elliott
Axle Towing & Impound`,
        status: "pending",
      },
      {
        id: "ra-3",
        workflow: "Referral - Apartments",
        touch: "Touch 3",
        channel: "Email",
        subject: "Free parking enforcement consultation for your complex",
        body: `Hi [Name],

I'd like to offer your apartment community a free parking enforcement consultation. No commitment required — just valuable information for your property.

WHAT THE CONSULTATION COVERS:

1. Lot Walk-Through (15 minutes)
   We'll walk your parking areas and identify violation hotspots, blind spots, and areas where unauthorized vehicles tend to accumulate.

2. Signage Audit (10 minutes)
   We'll review every existing parking sign for Arizona compliance. Non-compliant signs are the #1 reason tows get legally challenged — we'll make sure yours are bulletproof.

3. Policy Review (10 minutes)
   We'll review your current parking rules and lease language. If there are gaps that could create liability, we'll flag them.

4. Enforcement Plan (delivered within 48 hours)
   You'll receive a written plan with our recommendations: where to place signs, how to structure authorization, and what enforcement coverage makes sense for your property size.

Total time on-site: about 30-35 minutes.

We can schedule during business hours or after hours — whatever works for your team.

Interested? Reply with a good day/time and we'll get it on the calendar.

Best,

Elliott
Axle Towing & Impound
480-288-5526`,
        status: "pending",
      },
      {
        id: "ra-4",
        workflow: "Referral - Apartments",
        touch: "Touch 4",
        channel: "Email",
        subject: "Final follow-up: Apartment towing partnership",
        body: `Hi [Name],

This is my final reach-out, and I want to keep it brief.

If parking enforcement is a need at your property — now or anytime in the future — we're here. Our direct line is 480-288-5526 and we're available 24/7/365.

Just a few things to keep in mind:
- We offer free property assessments anytime, no expiration
- Our standard agreements have no upfront cost to the property
- We can start enforcement within 48 hours of signing
- We handle all vehicle owner interactions so your staff doesn't have to

Thank you for your time. I hope we get the chance to work together.

Best,

Elliott
Owner, Axle Towing & Impound
480-288-5526
axletowing.com`,
        status: "pending",
      },
    ],
  },
  {
    name: "Review Generation",
    description: "Automated review request after successful service. Builds social proof on Google.",
    items: [
      {
        id: "rg-1",
        workflow: "Review Generation",
        touch: "Touch 1 - Request",
        channel: "SMS",
        subject: "Thanks for choosing Axle! Would you leave us a quick review?",
        body: `Hi [First Name], thanks for choosing Axle Towing! We hope everything went smoothly. If you have 30 seconds, we'd really appreciate a quick Google review — it helps other property managers find us. Here's the link: [Google Review Link]. Thank you! - Elliott & the Axle team`,
        status: "pending",
      },
      {
        id: "rg-2",
        workflow: "Review Generation",
        touch: "Touch 2 - Follow-up",
        channel: "Email",
        subject: "Your feedback matters — 30 seconds to leave a review",
        body: `Hi [First Name],

Thank you for being an Axle Towing customer. Your experience matters to us, and I hope we've been living up to your expectations.

If you have 30 seconds, we'd be incredibly grateful if you could leave us a Google review. As a small, local business, every review makes a real difference in helping other property managers find us.

LEAVE A REVIEW HERE:
[Google Review Link]

Not sure what to write? Here are a few prompts:
- How has our response time been?
- Has our signage and compliance process been smooth?
- How has communication been with our team?
- Would you recommend us to another property manager?

If there's anything we could be doing better, I'd rather hear it from you directly — just reply to this email. Your honest feedback helps us improve.

Thank you for your partnership,

Elliott
Owner, Axle Towing & Impound
480-288-5526`,
        status: "pending",
      },
    ],
  },
  {
    name: "Contract Renewal",
    description: "Automated reminders before contract expiration to prevent churn and lock in renewals.",
    items: [
      {
        id: "cr-1",
        workflow: "Contract Renewal",
        touch: "Touch 1 - 60 Days",
        channel: "Email",
        subject: "Your contract renews in 60 days — here's what's new",
        body: `Hi [First Name],

I wanted to give you a heads-up that your Axle Towing service agreement for [Property Name] is coming up for renewal in about 60 days (renewal date: [Date]).

Before we get there, I wanted to share what's new and make sure everything is working well for you.

WHAT'S IMPROVED SINCE YOU SIGNED:
- We've reduced our average response time to under 25 minutes
- Our AI receptionist now handles after-hours calls so nothing is ever missed
- We've added [X] more drivers to our fleet for faster coverage
- All signage has been updated to reflect the latest Arizona compliance requirements

YOUR ACCOUNT SNAPSHOT:
- Total tows completed: [X]
- Average response time: [X] minutes
- Compliance record: 100% clean
- Account manager: [Name]

WHAT HAPPENS AT RENEWAL:
Your current terms and rate will carry forward automatically unless you'd like to make changes. If your property's needs have evolved — more coverage areas, different authorization protocols, additional properties — now is a great time to update your agreement.

Questions? Just reply or call me directly at 480-288-5526.

Best,

Elliott
Axle Towing & Impound`,
        status: "pending",
      },
      {
        id: "cr-2",
        workflow: "Contract Renewal",
        touch: "Touch 2 - 30 Days",
        channel: "Email",
        subject: "30 days until renewal — let's review your account",
        body: `Hi [First Name],

Your Axle Towing agreement renews in 30 days (renewal date: [Date]), and I wanted to personally check in.

I'd like to schedule a quick 15-minute account review call. Here's what we'll cover:

1. Performance Review: How have response times, communication, and service quality been? Any areas for improvement?

2. Coverage Review: Are there any new areas of your property that need signage or enforcement? Any changes in your parking layout?

3. Rate Review: Your current rate will carry forward, but if there are any changes to your service scope, we'll adjust accordingly.

4. Referral Opportunity: If you're happy with our service, we offer a $250 referral bonus for every new property you refer that signs a contract.

Can you reply with a day/time that works for a quick call? I'll make sure we're fully prepared with your account data.

Thank you for continuing to trust Axle,

Elliott
Axle Towing & Impound
480-288-5526`,
        status: "pending",
      },
      {
        id: "cr-3",
        workflow: "Contract Renewal",
        touch: "Touch 3 - 14 Days",
        channel: "Email",
        subject: "Renewal reminder: Lock in your current rate",
        body: `Hi [First Name],

Quick reminder: your Axle Towing agreement for [Property Name] renews on [Date] — that's just 14 days away.

If you're happy with our service (and I hope you are!), no action is needed. Your agreement will renew automatically at your current rate.

However, if you'd like to:
- Update your service terms
- Add coverage for additional properties
- Change authorization protocols
- Modify your agreement in any way

Please reply to this email or call 480-288-5526 before your renewal date so we can make the adjustments.

LOYAL CUSTOMER PERK:
As a thank-you for renewing, we're offering returning customers a free signage refresh — we'll replace any signs that have faded or been damaged at no charge.

Thank you for being an Axle customer,

Elliott
Axle Towing & Impound`,
        status: "pending",
      },
      {
        id: "cr-4",
        workflow: "Contract Renewal",
        touch: "Touch 4 - 7 Days",
        channel: "SMS",
        subject: "Contract expires in 7 days — reply to renew",
        body: `Hi [First Name], friendly reminder from Axle Towing: your service agreement for [Property Name] renews on [Date] — just 7 days away. If everything looks good, no action needed. If you want to make any changes, reply here or call 480-288-5526. Thank you for your continued partnership! - Elliott`,
        status: "pending",
      },
    ],
  },
  {
    name: "After-Hours AI Receptionist",
    description: "SMS templates used by the AI receptionist when the office is closed. Handles inbound calls and texts 24/7.",
    items: [
      {
        id: "ai-1",
        workflow: "AI Receptionist",
        touch: "Auto-reply - Missed Call",
        channel: "SMS",
        subject: "Thanks for calling Axle Towing! We're dispatching 24/7...",
        body: `Hi, you've reached Axle Towing & Impound! Sorry we missed your call. Our dispatch team is available 24/7 — if you need a tow right now, reply to this text with the property address and we'll dispatch a driver immediately. For non-urgent inquiries, we'll call you back within the hour. - Axle Towing, 480-288-5526`,
        status: "pending",
      },
      {
        id: "ai-2",
        workflow: "AI Receptionist",
        touch: "Auto-reply - After Hours",
        channel: "SMS",
        subject: "Our office is closed but dispatch is available. How can we help?",
        body: `Thanks for reaching out to Axle Towing! Our office is currently closed, but our dispatch team is available 24/7/365. If you need emergency towing or have an unauthorized vehicle on your property, reply with the address and situation and we'll have a driver headed your way. For billing, accounts, or general questions, our office reopens at 8 AM. - Axle Towing, 480-288-5526`,
        status: "pending",
      },
      {
        id: "ai-3",
        workflow: "AI Receptionist",
        touch: "Auto-reply - Voicemail",
        channel: "SMS",
        subject: "Got your voicemail! A team member will follow up by [time].",
        body: `Hi, we received your voicemail at Axle Towing & Impound. A team member will listen to it and follow up with you by [next business hour]. If this is urgent and you need a tow dispatched right now, reply "URGENT" with the property address and we'll send a driver immediately. - Axle Towing, 480-288-5526`,
        status: "pending",
      },
      {
        id: "ai-4",
        workflow: "AI Receptionist",
        touch: "Auto-reply - New Inquiry",
        channel: "SMS",
        subject: "Thanks for reaching out! What property do you need towing for?",
        body: `Thanks for contacting Axle Towing & Impound! We'd love to help. To get you the right information, could you tell us a bit about what you need?

1. Property towing/enforcement for your apartment, HOA, or commercial lot
2. Roadside assistance or emergency tow
3. Vehicle retrieval from our impound lot
4. Something else

Reply with a number or just describe what you need and we'll take it from there. - Axle Towing, 480-288-5526`,
        status: "pending",
      },
    ],
  },
];

export const totalMessages = ghlApprovals.reduce((sum, cat) => sum + cat.items.length, 0);
export const approvedCount = ghlApprovals.reduce((sum, cat) => sum + cat.items.filter(i => i.status === "approved").length, 0);
