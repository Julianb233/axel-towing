"use client";

import { useState } from "react";
import PageHeader from "../../components/PageHeader";
import ScrollReveal from "../../components/ScrollReveal";

/* ──────────────────────────────────────────────
   TYPES
   ────────────────────────────────────────────── */

type Urgency = "standard" | "time-sensitive" | "urgent";
type Person = "Elliott" | "Brian" | "Tori" | "Chris" | "AI System" | "Julian (AI Acrobatics)";

interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  owner: Person;
  sla: string;
  template?: string;
}

interface Workflow {
  id: number;
  title: string;
  icon: string;
  urgency: Urgency;
  summary: string;
  steps: WorkflowStep[];
}

interface EmailTemplate {
  id: string;
  title: string;
  type: "email" | "sms";
  urgency: Urgency;
  subject?: string;
  body: string;
}

/* ──────────────────────────────────────────────
   URGENCY CONFIG
   ────────────────────────────────────────────── */

const urgencyConfig: Record<Urgency, { bg: string; border: string; badge: string; badgeBg: string; dot: string; label: string }> = {
  standard: {
    bg: "bg-emerald-50/60",
    border: "border-emerald-200",
    badge: "text-emerald-800",
    badgeBg: "bg-emerald-100",
    dot: "bg-emerald-500",
    label: "Standard",
  },
  "time-sensitive": {
    bg: "bg-amber-50/60",
    border: "border-amber-200",
    badge: "text-amber-800",
    badgeBg: "bg-amber-100",
    dot: "bg-amber-500",
    label: "Time-Sensitive",
  },
  urgent: {
    bg: "bg-red-50/60",
    border: "border-red-200",
    badge: "text-red-800",
    badgeBg: "bg-red-100",
    dot: "bg-red-500 animate-pulse",
    label: "Urgent",
  },
};

const ownerColors: Record<Person, string> = {
  "Elliott": "bg-blue-100 text-blue-800",
  "Brian": "bg-indigo-100 text-indigo-800",
  "Tori": "bg-pink-100 text-pink-800",
  "Chris": "bg-teal-100 text-teal-800",
  "AI System": "bg-purple-100 text-purple-800",
  "Julian (AI Acrobatics)": "bg-cyan-100 text-cyan-800",
};

/* ──────────────────────────────────────────────
   9 WORKFLOWS
   ────────────────────────────────────────────── */

const workflows: Workflow[] = [
  {
    id: 1,
    title: "New Property Onboarding",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    urgency: "standard",
    summary: "End-to-end process from initial contact with a property manager through contract signing, signage installation, system configuration, and first patrol.",
    steps: [
      { step: 1, title: "Initial Contact Received", description: "Property manager inquiry comes in via phone, website form, referral, or email. Log the lead in GoHighLevel CRM with property name, address, unit count, and contact info.", owner: "AI System", sla: "Immediate (auto-logged)" },
      { step: 2, title: "Qualification Call", description: "Call the property manager to understand their parking issues, current enforcement provider (if any), property size, and decision-making timeline. Identify pain points and gather lot details.", owner: "Elliott", sla: "Within 2 hours of inquiry" },
      { step: 3, title: "Property Assessment", description: "Visit the property to evaluate lot layout, parking structure, signage locations, access points, and towing logistics. Take photos and note any special considerations (gated access, narrow driveways, etc.).", owner: "Brian", sla: "Within 48 hours of qualification" },
      { step: 4, title: "Proposal & Contract", description: "Prepare a customized proposal based on the site assessment. Include service scope, patrol schedule, signage plan, response time SLA, and pricing. Send contract for e-signature.", owner: "Elliott", sla: "Within 24 hours of assessment" },
      { step: 5, title: "Contract Signed & Welcome Email", description: "Once the contract is executed, send the new property welcome email with key contacts, emergency numbers, tow request process, and online portal access instructions.", owner: "AI System", sla: "Immediate upon signature", template: "new-property-welcome" },
      { step: 6, title: "Signage Installation", description: "Order and install compliant towing authorization signs at all designated locations per ARS 9-499.05. Take photos of all installed signs for documentation.", owner: "Chris", sla: "Within 5 business days of contract" },
      { step: 7, title: "System Configuration", description: "Add property to TowBook system, configure patrol routes, set up property manager portal access, program emergency dispatch contacts, and create GHL automation workflows.", owner: "AI System", sla: "Within 24 hours of contract" },
      { step: 8, title: "First Patrol & Check-In", description: "Conduct the first official patrol. Report findings to the property manager. Schedule follow-up call for one week later to confirm satisfaction and address any concerns.", owner: "Brian", sla: "Per contract start date" },
    ],
  },
  {
    id: 2,
    title: "Tow Request Processing",
    icon: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
    urgency: "time-sensitive",
    summary: "From tow request submission through dispatch, vehicle removal, notification, and documentation filing.",
    steps: [
      { step: 1, title: "Request Received", description: "Property manager submits a tow request via phone call, SMS, email, or online portal. AI receptionist screens after-hours calls and logs details automatically.", owner: "AI System", sla: "Logged within 1 minute" },
      { step: 2, title: "Request Validated", description: "Verify the property has a valid towing authorization agreement on file. Confirm vehicle violates posted signage rules (unauthorized, expired permit, fire lane, etc.).", owner: "Tori", sla: "Within 5 minutes" },
      { step: 3, title: "Driver Dispatched", description: "Assign the nearest available driver. Send GPS coordinates, property access instructions, and vehicle description. Confirm ETA with the property manager.", owner: "Elliott", sla: "Driver dispatched within 15 minutes" },
      { step: 4, title: "Vehicle Documentation", description: "Driver photographs the vehicle from 4 angles, captures VIN, license plate, and location relative to signage. Record in TowBook with timestamp.", owner: "Brian", sla: "Before vehicle is moved" },
      { step: 5, title: "Vehicle Towed", description: "Safely load and transport the vehicle to the Axle Towing impound yard. Follow all ARS requirements for proper towing procedures.", owner: "Brian", sla: "Within 30 minutes of arrival" },
      { step: 6, title: "Notifications Sent", description: "Send tow notification to the property manager confirming removal. File required notifications with local PD within 2 hours per ARS 28-4832.", owner: "AI System", sla: "Within 30 minutes of tow", template: "tow-notification-pm" },
      { step: 7, title: "Documentation Filed", description: "Complete TowBook entry with all photos, timestamps, authorization reference, and notification confirmations. Generate invoice if applicable.", owner: "Tori", sla: "Within 1 hour of tow" },
    ],
  },
  {
    id: 3,
    title: "Vehicle Retrieval Process",
    icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
    urgency: "time-sensitive",
    summary: "Vehicle owner contacts Axle Towing to retrieve their vehicle. Identity is verified, fees calculated, payment collected, and vehicle released with gate instructions.",
    steps: [
      { step: 1, title: "Owner Contacts Axle", description: "Vehicle owner calls or visits to retrieve their vehicle. AI receptionist handles initial screening after hours and provides basic info (hours, location, accepted payment methods).", owner: "AI System", sla: "Immediate response" },
      { step: 2, title: "Identity Verification", description: "Verify ownership with valid government-issued photo ID and vehicle registration or title. If the caller is not the registered owner, require a notarized authorization letter.", owner: "Tori", sla: "Within 5 minutes" },
      { step: 3, title: "Fee Calculation", description: "Calculate total charges: towing fee, daily storage fee (starting 24 hours after tow), and any applicable gate fee. Provide itemized breakdown to the owner.", owner: "Tori", sla: "Within 5 minutes" },
      { step: 4, title: "Payment Collection", description: "Accept payment via credit/debit card, cash, or certified check. Issue receipt with itemized charges, tow date/time, and release authorization.", owner: "Tori", sla: "Immediate upon presentation" },
      { step: 5, title: "Vehicle Release & Gate Instructions", description: "Release the vehicle and provide gate access instructions via SMS. Include yard address, gate code, and lot number where the vehicle is stored.", owner: "AI System", sla: "Within 10 minutes of payment", template: "vehicle-retrieval-sms" },
      { step: 6, title: "Post-Release Documentation", description: "Update TowBook record with release date, payment amount, and method. Close the tow record. File receipt copy.", owner: "Tori", sla: "Within 30 minutes of release" },
    ],
  },
  {
    id: 4,
    title: "Emergency / After-Hours Dispatch",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    urgency: "urgent",
    summary: "Handling incoming calls outside business hours through AI receptionist screening, priority assessment, driver dispatch, and next-business-day follow-up.",
    steps: [
      { step: 1, title: "Call Received by AI Receptionist", description: "After-hours call is answered by the AI voice agent. The system greets the caller, identifies the nature of the request, and collects property name, caller name, phone number, and vehicle details.", owner: "AI System", sla: "Answered within 3 rings" },
      { step: 2, title: "Priority Assessment", description: "AI system categorizes the request: URGENT (active blocking, safety hazard, fire lane), HIGH (unauthorized vehicle, property manager request), or STANDARD (general inquiry, non-emergency). Urgent requests trigger immediate driver notification.", owner: "AI System", sla: "Within 60 seconds of call end" },
      { step: 3, title: "Driver Notification", description: "For urgent/high-priority requests, the on-call driver receives an SMS alert with property address, vehicle description, and callback number. Driver confirms receipt and provides ETA.", owner: "Elliott", sla: "Driver notified within 5 minutes" },
      { step: 4, title: "Driver Dispatched", description: "On-call driver proceeds to the property. Follows standard vehicle documentation and towing procedures. Updates TowBook from the field.", owner: "Brian", sla: "On-site within 30-45 minutes" },
      { step: 5, title: "Caller Confirmation", description: "Send SMS to the original caller confirming that a driver has been dispatched with an estimated arrival time.", owner: "AI System", sla: "Within 5 minutes of dispatch" },
      { step: 6, title: "Next Business Day Follow-Up", description: "Review all after-hours dispatch records. Send follow-up report to the property manager. Address any issues or documentation gaps.", owner: "Tori", sla: "By 10:00 AM next business day" },
    ],
  },
  {
    id: 5,
    title: "Property Manager Communication",
    icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
    urgency: "standard",
    summary: "Ongoing communication cadence with property managers including monthly reports, quarterly reviews, incident notifications, signage updates, and contract renewals.",
    steps: [
      { step: 1, title: "Monthly Activity Report", description: "Generate and send a monthly report covering: number of tows performed, patrol activity logs, incident summaries, and any signage or compliance observations. Include trending data vs. prior months.", owner: "AI System", sla: "Sent by 5th of each month", template: "monthly-report-email" },
      { step: 2, title: "Quarterly Business Review", description: "Schedule a 30-minute call or in-person meeting to review performance, discuss any concerns, present recommendations for improving enforcement effectiveness, and plan for upcoming seasons.", owner: "Elliott", sla: "Scheduled within first 2 weeks of quarter" },
      { step: 3, title: "Incident Notification", description: "Immediately notify the property manager of any unusual incidents: vehicle damage claims, confrontations, law enforcement involvement, or compliance issues. Provide full documentation.", owner: "Elliott", sla: "Within 1 hour of incident" },
      { step: 4, title: "Signage Audit & Updates", description: "Conduct quarterly signage inspections. Report any signs that are damaged, faded, obscured, or non-compliant. Coordinate replacements with the property manager.", owner: "Chris", sla: "Quarterly, with report within 48 hours" },
      { step: 5, title: "Contract Renewal Process", description: "Begin renewal discussions 90 days before contract expiration. Review pricing, service scope, and any requested changes. Send renewal proposal 60 days out.", owner: "Elliott", sla: "90 days before expiration" },
    ],
  },
  {
    id: 6,
    title: "Referral Partner Outreach",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    urgency: "standard",
    summary: "Systematic outreach process for building referral partnerships with locksmiths, property management companies, real estate firms, and HOA boards.",
    steps: [
      { step: 1, title: "Prospect Identification", description: "Research and identify potential referral partners in the Phoenix metro area. Target segments: locksmith companies, property management firms, real estate brokerages, HOA management companies, and auto repair shops.", owner: "Julian (AI Acrobatics)", sla: "Ongoing, batch of 20 prospects weekly" },
      { step: 2, title: "Prospect Research", description: "For each prospect, gather: company name, key contact person, email, phone, website, Google review count, areas served, and any existing towing partnerships. Log in CRM.", owner: "AI System", sla: "Within 24 hours of identification" },
      { step: 3, title: "Initial Outreach", description: "Send personalized introduction email explaining Axle Towing's services, referral program benefits, and proposed partnership structure. Follow up with a phone call 2 days later.", owner: "Elliott", sla: "Within 48 hours of research completion", template: "referral-partner-intro" },
      { step: 4, title: "Follow-Up Sequence", description: "If no response after initial outreach: Day 4 - follow-up email; Day 7 - phone call; Day 14 - final email with case study or testimonial. Mark as cold if no response after 3 touches.", owner: "AI System", sla: "Automated 14-day sequence" },
      { step: 5, title: "Partnership Agreement", description: "Once a prospect is interested, present the partnership agreement outlining referral fees, mutual obligations, branding guidelines, and termination terms. Get signed agreement.", owner: "Elliott", sla: "Within 1 week of verbal agreement" },
      { step: 6, title: "Partner Onboarding", description: "Add partner to the referral tracking system. Provide branded marketing materials (brochures, business cards, digital assets). Schedule quarterly check-in calls.", owner: "Tori", sla: "Within 3 business days of signed agreement" },
    ],
  },
  {
    id: 7,
    title: "Complaint Resolution",
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    urgency: "urgent",
    summary: "Structured process for receiving, investigating, and resolving complaints from vehicle owners, property managers, or third parties within 24 hours.",
    steps: [
      { step: 1, title: "Complaint Received", description: "Complaint comes in via phone, email, online form, or in person. Log immediately in the complaint tracking system with: complainant name, contact info, date/time, nature of complaint, and associated tow record (if any).", owner: "Tori", sla: "Logged within 15 minutes" },
      { step: 2, title: "Acknowledgment Sent", description: "Send acknowledgment to the complainant confirming receipt, providing a reference number, and setting expectations for resolution timeline.", owner: "AI System", sla: "Within 1 hour of receipt", template: "complaint-acknowledgment" },
      { step: 3, title: "Complaint Assigned", description: "Route to the appropriate team member based on complaint type. Vehicle damage claims go to Elliott. Service quality issues go to the responsible driver's supervisor. Billing disputes go to Tori.", owner: "Elliott", sla: "Within 2 hours of receipt" },
      { step: 4, title: "Investigation", description: "Review all documentation: TowBook records, photos, timestamps, signage compliance, authorization records. Interview involved staff. Gather any additional evidence.", owner: "Elliott", sla: "Within 12 hours" },
      { step: 5, title: "Resolution Response", description: "Contact the complainant with findings and proposed resolution. Options may include: explanation of proper procedure, fee adjustment, damage claim process, or apology with corrective action plan.", owner: "Elliott", sla: "Within 24 hours of initial complaint" },
      { step: 6, title: "Follow-Up & Close", description: "If resolution is accepted, close the complaint record. If disputed, escalate to management review. Follow up 7 days later to confirm satisfaction. Document lessons learned.", owner: "Tori", sla: "7 days after resolution" },
    ],
  },
  {
    id: 8,
    title: "Invoice & Payment Workflow",
    icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
    urgency: "time-sensitive",
    summary: "Complete billing cycle from service completion through invoice generation, delivery, payment tracking, overdue follow-up, and receipt confirmation.",
    steps: [
      { step: 1, title: "Service Completed", description: "Driver marks the tow or service as complete in TowBook. All required documentation (photos, timestamps, authorization) is verified as attached.", owner: "Brian", sla: "At time of service completion" },
      { step: 2, title: "Invoice Generated", description: "System automatically generates an invoice based on the service type, applicable fees, and contract rates for the property. Invoice includes tow date, vehicle info, charges breakdown, and payment terms.", owner: "AI System", sla: "Within 1 hour of service completion" },
      { step: 3, title: "Invoice Delivered", description: "Send invoice to the property manager via email with PDF attachment. For vehicle retrieval fees, invoice is presented at time of pickup.", owner: "AI System", sla: "Same day as service" },
      { step: 4, title: "Payment Tracking", description: "Monitor payment status in the accounting system. Mark invoices as: sent, viewed, paid, or overdue. Net-30 terms apply for property manager contracts.", owner: "Tori", sla: "Tracked daily" },
      { step: 5, title: "Overdue Follow-Up", description: "Day 31: Send friendly payment reminder email. Day 45: Follow-up phone call from Tori. Day 60: Formal past-due notice. Day 90: Escalate to Elliott for contract review.", owner: "Tori", sla: "Per aging schedule" },
      { step: 6, title: "Payment Received & Receipt", description: "Record payment in accounting system. Send receipt confirmation to the payer. Update TowBook record. Reconcile with monthly bank statements.", owner: "Tori", sla: "Within 24 hours of payment" },
    ],
  },
  {
    id: 9,
    title: "Marketing Content Pipeline",
    icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
    urgency: "standard",
    summary: "Full content creation lifecycle from topic identification through drafting, review, publication, promotion, and performance tracking.",
    steps: [
      { step: 1, title: "Topic Identified", description: "Source content topics from: SEMrush keyword gaps, competitor content analysis, seasonal trends, property manager FAQs, and industry news. Prioritize by search volume and business relevance.", owner: "Julian (AI Acrobatics)", sla: "Weekly content planning (Mondays)" },
      { step: 2, title: "Brief Created", description: "Create a content brief with: target keyword(s), search intent, competitor analysis, outline with H2/H3 structure, word count target, CTA, and internal linking strategy.", owner: "Julian (AI Acrobatics)", sla: "Within 24 hours of topic approval" },
      { step: 3, title: "Content Written", description: "AI-assisted draft generation with human editing. Content must be original, SEO-optimized, and aligned with Axle Towing's brand voice. Include meta title, meta description, and schema markup.", owner: "AI System", sla: "Within 48 hours of brief" },
      { step: 4, title: "Review & Approval", description: "Elliott reviews content for accuracy, brand alignment, and messaging. Tori checks for compliance with Arizona towing regulations. Approve or request revisions.", owner: "Elliott", sla: "Within 48 hours of draft" },
      { step: 5, title: "Publish & Index", description: "Publish to the website. Submit URL to Google Search Console for indexing. Add to the site's internal linking structure. Update the XML sitemap.", owner: "Julian (AI Acrobatics)", sla: "Within 24 hours of approval" },
      { step: 6, title: "Promote", description: "Share on Google Business Profile, social media channels, and email newsletter. Create GHL social post automation. Cross-link from relevant existing content.", owner: "AI System", sla: "Within 48 hours of publication" },
      { step: 7, title: "Track Performance", description: "Monitor rankings, traffic, and engagement in SEMrush and GA4. Report performance in the monthly dashboard update. Optimize underperforming content after 60 days.", owner: "Julian (AI Acrobatics)", sla: "Ongoing, reported monthly" },
    ],
  },
];

/* ──────────────────────────────────────────────
   EMAIL / SMS TEMPLATES
   ────────────────────────────────────────────── */

const templates: EmailTemplate[] = [
  {
    id: "new-property-welcome",
    title: "New Property Welcome Email",
    type: "email",
    urgency: "standard",
    subject: "Welcome to Axle Towing -- Your Parking Enforcement Partner",
    body: `Hi [Property Manager Name],

Welcome to Axle Towing & Impound! We're excited to partner with you on parking enforcement for [Property Name].

Here's everything you need to get started:

YOUR KEY CONTACTS:
- Emergency Dispatch (24/7): (805) 760-2314
- Operations Manager: Elliott -- elliott@axletowing.com
- Office Manager: Tori -- tori@axletowing.com

HOW TO REQUEST A TOW:
1. Call our dispatch line at (805) 760-2314
2. Text "TOW" followed by the property name and vehicle details to (805) 760-2314
3. Use your online portal at axletowing.com/portal (login credentials attached)

WHAT TO EXPECT:
- Signage will be installed within 5 business days
- First patrol begins on [Start Date]
- Monthly activity reports delivered by the 5th of each month
- 24/7/365 emergency dispatch availability

IMPORTANT DOCUMENTS ATTACHED:
- Signed towing authorization agreement (copy for your records)
- Signage placement map
- Tenant/resident FAQ flyer (feel free to distribute)

If you have any questions or need anything at all, don't hesitate to reach out. We're here to make parking enforcement effortless for you.

Best regards,
Elliott
Axle Towing & Impound
(805) 760-2314 | axletowing.com`,
  },
  {
    id: "tow-notification-pm",
    title: "Tow Notification to Property Manager",
    type: "email",
    urgency: "time-sensitive",
    subject: "Vehicle Towed from [Property Name] -- [Date] at [Time]",
    body: `Hi [Property Manager Name],

This is a notification that a vehicle has been towed from [Property Name].

VEHICLE DETAILS:
- Make/Model: [Vehicle Make] [Vehicle Model]
- Color: [Color]
- License Plate: [Plate Number] ([State])
- Location: [Specific location within property]
- Violation: [Violation type -- e.g., No valid permit, Fire lane, Unauthorized]

TOW DETAILS:
- Date & Time: [Date] at [Time]
- Driver: [Driver Name]
- TowBook Reference: #[Reference Number]
- Storage Location: Axle Towing Impound Yard

Photos of the vehicle and signage are attached for your records. The vehicle owner will be directed to contact us at (805) 760-2314 for retrieval.

If you have any questions about this tow, please reply to this email or call us anytime.

-- Axle Towing Dispatch`,
  },
  {
    id: "vehicle-retrieval-sms",
    title: "Vehicle Owner Retrieval Instructions SMS",
    type: "sms",
    urgency: "time-sensitive",
    body: `Axle Towing: Your vehicle is ready for pickup.

LOCATION: [Yard Address]
GATE CODE: [Code]
LOT #: [Number]

HOURS: Mon-Fri 8am-6pm, Sat 9am-1pm
REQUIRED: Valid photo ID + registration
PAYMENT: Cash, credit/debit accepted

Total due: $[Amount]

Questions? Call (805) 760-2314`,
  },
  {
    id: "monthly-report-email",
    title: "Monthly Report Cover Email",
    type: "email",
    urgency: "standard",
    subject: "[Month] Parking Enforcement Report -- [Property Name]",
    body: `Hi [Property Manager Name],

Please find attached your monthly parking enforcement report for [Property Name] covering [Month Year].

HIGHLIGHTS:
- Total tows this month: [Number]
- Patrol visits completed: [Number]
- Change vs. last month: [+/- Number] ([Percentage]%)
- Compliance observations: [Brief note]

KEY TAKEAWAYS:
[1-2 sentence summary of trends, e.g., "Unauthorized parking decreased 15% compared to last month, suggesting the new signage at the north entrance is having an impact."]

UPCOMING:
- Next scheduled signage inspection: [Date]
- Quarterly review meeting: [Date/TBD]

The full report with detailed breakdowns, photos, and recommendations is attached as a PDF.

As always, we're available 24/7 at (805) 760-2314 if you need anything.

Best,
Elliott
Axle Towing & Impound`,
  },
  {
    id: "referral-partner-intro",
    title: "Referral Partner Introduction Email",
    type: "email",
    urgency: "standard",
    subject: "Partnership Opportunity -- Axle Towing & [Their Company Name]",
    body: `Hi [Contact Name],

I'm Elliott with Axle Towing & Impound. We provide private property towing and parking enforcement for apartment complexes, HOAs, and commercial properties across the Phoenix metro area.

I'm reaching out because I think there's a natural synergy between what we do and [Their Company Name]. Many of your clients likely deal with parking issues, and we'd love to be the go-to resource you can recommend.

HERE'S WHAT WE OFFER REFERRAL PARTNERS:
- Priority response times for your referred clients
- Referral fee for every signed contract from your introduction
- Co-branded marketing materials (we handle the design)
- Dedicated point of contact for all your referrals

A BIT ABOUT US:
- 30+ years combined team experience in Phoenix towing
- 24/7/365 dispatch with AI-powered after-hours coverage
- Full compliance with Arizona towing statutes (ARS 28-4831 et seq.)
- Digital-first: real-time reporting, online portals, and automated notifications

I'd love to hop on a quick 15-minute call to explore how we might work together. Would [Day] at [Time] work for you?

Either way, feel free to check out our site at axletowing.com.

Best regards,
Elliott
Axle Towing & Impound
(805) 760-2314 | elliott@axletowing.com`,
  },
  {
    id: "complaint-acknowledgment",
    title: "Complaint Acknowledgment Email",
    type: "email",
    urgency: "urgent",
    subject: "Your Complaint Has Been Received -- Reference #[Number]",
    body: `Dear [Complainant Name],

Thank you for contacting Axle Towing & Impound. We take all concerns seriously and want to resolve this as quickly as possible.

YOUR COMPLAINT DETAILS:
- Reference Number: #[Number]
- Date Received: [Date]
- Regarding: [Brief description]
- Associated Tow Record: [#Number if applicable]

WHAT HAPPENS NEXT:
1. Your complaint has been assigned to a team member for review
2. We will investigate all relevant records and documentation
3. You will receive a response within 24 hours

If you have additional information to share, please reply to this email or call us at (805) 760-2314 and reference your complaint number.

We appreciate your patience and are committed to a fair resolution.

Sincerely,
Axle Towing & Impound
Customer Resolution Team`,
  },
];

/* ──────────────────────────────────────────────
   COMPONENTS
   ────────────────────────────────────────────── */

function WorkflowCard({ workflow }: { workflow: Workflow }) {
  const [isOpen, setIsOpen] = useState(false);
  const urg = urgencyConfig[workflow.urgency];

  return (
    <div className={`glass-card overflow-hidden border ${urg.border}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 flex items-start gap-4 hover:bg-gray-50/50 transition-colors"
      >
        <div className={`w-11 h-11 rounded-xl ${urg.bg} border ${urg.border} flex items-center justify-center flex-shrink-0`}>
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={workflow.icon} />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1 flex-wrap">
            <h3 className="text-base font-bold font-display text-gray-900">{workflow.id}. {workflow.title}</h3>
            <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${urg.badgeBg} ${urg.badge}`}>
              {urg.label}
            </span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">{workflow.summary}</p>
          <p className="text-xs text-brand-blue mt-2 font-medium">{workflow.steps.length} steps &middot; Click to {isOpen ? "collapse" : "expand"}</p>
        </div>
        <svg
          className={`w-5 h-5 text-gray-400 flex-shrink-0 mt-1 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 border-t border-gray-100">
          <div className="mt-5 space-y-0">
            {workflow.steps.map((step, idx) => (
              <div key={step.step} className="relative pl-8">
                {/* Connecting line */}
                {idx < workflow.steps.length - 1 && (
                  <div className="absolute left-[15px] top-8 w-0.5 h-full bg-gray-200" />
                )}
                {/* Step circle */}
                <div className={`absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 ${urg.border} ${urg.bg} text-gray-700`}>
                  {step.step}
                </div>
                <div className="pb-6 ml-4">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h4 className="text-sm font-semibold text-gray-900">{step.title}</h4>
                    <span className={`text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${ownerColors[step.owner]}`}>
                      {step.owner}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{step.description}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">SLA: {step.sla}</span>
                  </div>
                  {step.template && (
                    <a
                      href={`#template-${step.template}`}
                      className="inline-flex items-center gap-1.5 mt-2 text-xs text-brand-blue hover:text-brand-blue-dark font-medium"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      View template
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function TemplateCard({ template }: { template: EmailTemplate }) {
  const [isOpen, setIsOpen] = useState(false);
  const urg = urgencyConfig[template.urgency];

  return (
    <div id={`template-${template.id}`} className={`glass-card overflow-hidden border ${urg.border}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-5 flex items-center gap-4 hover:bg-gray-50/50 transition-colors"
      >
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${template.type === "email" ? "bg-blue-50 border border-blue-100" : "bg-green-50 border border-green-100"}`}>
          {template.type === "email" ? (
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="text-sm font-semibold text-gray-900">{template.title}</h4>
            <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${template.type === "email" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}`}>
              {template.type}
            </span>
            <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${urg.badgeBg} ${urg.badge}`}>
              {urg.label}
            </span>
          </div>
          {template.subject && (
            <p className="text-xs text-gray-400 mt-0.5 truncate">Subject: {template.subject}</p>
          )}
        </div>
        <svg
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="px-5 pb-5 border-t border-gray-100">
          <pre className="mt-4 bg-gray-50 rounded-xl p-4 text-sm text-gray-700 whitespace-pre-wrap font-sans leading-relaxed border border-gray-100 overflow-x-auto">
            {template.body}
          </pre>
        </div>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────
   TEAM LEGEND
   ────────────────────────────────────────────── */

const teamMembers: { name: Person; role: string }[] = [
  { name: "Elliott", role: "Owner / Operations Manager" },
  { name: "Brian", role: "Lead Driver / Field Operations" },
  { name: "Tori", role: "Office Manager / Billing" },
  { name: "Chris", role: "Signage & Maintenance" },
  { name: "AI System", role: "Automated Workflows & CRM" },
  { name: "Julian (AI Acrobatics)", role: "Marketing & SEO" },
];

/* ──────────────────────────────────────────────
   PAGE
   ────────────────────────────────────────────── */

export default function ProcessSOPPage() {
  const urgentWorkflows = workflows.filter((w) => w.urgency === "urgent");
  const timeSensitiveWorkflows = workflows.filter((w) => w.urgency === "time-sensitive");
  const standardWorkflows = workflows.filter((w) => w.urgency === "standard");

  const totalSteps = workflows.reduce((sum, w) => sum + w.steps.length, 0);

  return (
    <>
      <PageHeader
        badge="Process & SOPs"
        title="Communication Workflows"
        subtitle="9 documented workflows covering every client and internal communication process with templates, SLAs, and ownership."
      />

      {/* Summary Stats */}
      <ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="glass-card p-5 text-center">
            <p className="text-3xl font-bold font-display text-brand-blue">9</p>
            <p className="text-xs text-gray-500 mt-1">Workflows</p>
          </div>
          <div className="glass-card p-5 text-center">
            <p className="text-3xl font-bold font-display text-gray-900">{totalSteps}</p>
            <p className="text-xs text-gray-500 mt-1">Total Steps</p>
          </div>
          <div className="glass-card p-5 text-center">
            <p className="text-3xl font-bold font-display text-emerald-600">6</p>
            <p className="text-xs text-gray-500 mt-1">Templates</p>
          </div>
          <div className="glass-card p-5 text-center">
            <p className="text-3xl font-bold font-display text-amber-600">6</p>
            <p className="text-xs text-gray-500 mt-1">Team Members</p>
          </div>
        </div>
      </ScrollReveal>

      {/* Team Legend */}
      <ScrollReveal delay={50}>
        <div className="glass-card p-6 mb-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Team Responsibility Key</h2>
          <div className="flex flex-wrap gap-2">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 border border-gray-100">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${ownerColors[member.name]}`}>
                  {member.name}
                </span>
                <span className="text-xs text-gray-500">{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Urgency Legend */}
      <ScrollReveal delay={75}>
        <div className="glass-card p-6 mb-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Urgency Color Code</h2>
          <div className="flex flex-wrap gap-4">
            {(["urgent", "time-sensitive", "standard"] as Urgency[]).map((level) => {
              const cfg = urgencyConfig[level];
              return (
                <div key={level} className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${cfg.dot}`} />
                  <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${cfg.badgeBg} ${cfg.badge}`}>
                    {cfg.label}
                  </span>
                  <span className="text-xs text-gray-400">
                    {level === "urgent" && "Response within minutes"}
                    {level === "time-sensitive" && "Response within hours"}
                    {level === "standard" && "Scheduled cadence"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      {/* Urgent Workflows */}
      {urgentWorkflows.length > 0 && (
        <ScrollReveal delay={100}>
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              Urgent Workflows
            </h2>
            <div className="space-y-4">
              {urgentWorkflows.map((w) => (
                <WorkflowCard key={w.id} workflow={w} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Time-Sensitive Workflows */}
      {timeSensitiveWorkflows.length > 0 && (
        <ScrollReveal delay={150}>
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full" />
              Time-Sensitive Workflows
            </h2>
            <div className="space-y-4">
              {timeSensitiveWorkflows.map((w) => (
                <WorkflowCard key={w.id} workflow={w} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Standard Workflows */}
      {standardWorkflows.length > 0 && (
        <ScrollReveal delay={200}>
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full" />
              Standard Workflows
            </h2>
            <div className="space-y-4">
              {standardWorkflows.map((w) => (
                <WorkflowCard key={w.id} workflow={w} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Communication Templates */}
      <ScrollReveal delay={250}>
        <div className="mb-8">
          <h2 className="text-lg font-bold font-display text-gray-900 mb-2">Communication Templates</h2>
          <p className="text-sm text-gray-500 mb-4">Ready-to-use email and SMS templates for key client touchpoints. Click any template to view the full content.</p>
          <div className="space-y-3">
            {templates.map((t) => (
              <TemplateCard key={t.id} template={t} />
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Process Diagram Overview */}
      <ScrollReveal delay={300}>
        <div className="glass-card p-8 mb-8">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-6">Workflow Overview Diagram</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Column 1: Inbound */}
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-4">Inbound Triggers</h3>
              <div className="space-y-3">
                {[
                  { label: "Phone Call", target: "AI Receptionist / Dispatch" },
                  { label: "Web Form", target: "CRM Auto-Capture" },
                  { label: "Email", target: "Tori / AI System" },
                  { label: "SMS / Text", target: "Dispatch Queue" },
                  { label: "Referral Partner", target: "Elliott" },
                  { label: "Walk-In", target: "Front Office" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand-blue flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">{item.label}</span>
                    <svg className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <span className="text-xs text-gray-500">{item.target}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Processing */}
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-4">Processing & Action</h3>
              <div className="space-y-3">
                {[
                  "Validate request & authorization",
                  "Assign to responsible team member",
                  "Execute service (tow, patrol, etc.)",
                  "Document with photos & timestamps",
                  "Update TowBook & CRM records",
                  "Generate invoice if applicable",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Outbound */}
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-4">Outbound & Follow-Up</h3>
              <div className="space-y-3">
                {[
                  "Send notifications (email/SMS)",
                  "File required legal notices",
                  "Update property manager",
                  "Generate reports & receipts",
                  "Schedule follow-ups",
                  "Track satisfaction & feedback",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* SLA Summary Table */}
      <ScrollReveal delay={350}>
        <div className="glass-card p-8">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-6">SLA Summary</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Process</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Critical SLA</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Owner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50/50">
                  <td className="py-3 px-4 font-medium text-gray-900">Tow request to dispatch</td>
                  <td className="py-3 px-4 text-gray-600">15 minutes</td>
                  <td className="py-3 px-4"><span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${ownerColors["Elliott"]}`}>Elliott</span></td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="py-3 px-4 font-medium text-gray-900">After-hours emergency response</td>
                  <td className="py-3 px-4 text-gray-600">30-45 minutes on-site</td>
                  <td className="py-3 px-4"><span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${ownerColors["Brian"]}`}>Brian</span></td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="py-3 px-4 font-medium text-gray-900">Complaint acknowledgment</td>
                  <td className="py-3 px-4 text-gray-600">1 hour</td>
                  <td className="py-3 px-4"><span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${ownerColors["AI System"]}`}>AI System</span></td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="py-3 px-4 font-medium text-gray-900">Complaint resolution</td>
                  <td className="py-3 px-4 text-gray-600">24 hours</td>
                  <td className="py-3 px-4"><span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${ownerColors["Elliott"]}`}>Elliott</span></td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="py-3 px-4 font-medium text-gray-900">New property signage</td>
                  <td className="py-3 px-4 text-gray-600">5 business days</td>
                  <td className="py-3 px-4"><span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${ownerColors["Chris"]}`}>Chris</span></td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="py-3 px-4 font-medium text-gray-900">Monthly report delivery</td>
                  <td className="py-3 px-4 text-gray-600">By 5th of month</td>
                  <td className="py-3 px-4"><span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${ownerColors["AI System"]}`}>AI System</span></td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="py-3 px-4 font-medium text-gray-900">Invoice generation</td>
                  <td className="py-3 px-4 text-gray-600">Within 1 hour of service</td>
                  <td className="py-3 px-4"><span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${ownerColors["AI System"]}`}>AI System</span></td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="py-3 px-4 font-medium text-gray-900">Contract renewal initiation</td>
                  <td className="py-3 px-4 text-gray-600">90 days before expiry</td>
                  <td className="py-3 px-4"><span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${ownerColors["Elliott"]}`}>Elliott</span></td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="py-3 px-4 font-medium text-gray-900">Content publication</td>
                  <td className="py-3 px-4 text-gray-600">Within 24 hours of approval</td>
                  <td className="py-3 px-4"><span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${ownerColors["Julian (AI Acrobatics)"]}`}>Julian</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
