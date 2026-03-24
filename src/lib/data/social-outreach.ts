/**
 * Social Media Outreach Data
 * Templates, personas, and campaign configuration for multi-channel
 * HOA board member and property manager outreach campaigns.
 */

// ---------- Message Templates ----------

export const LINKEDIN_TEMPLATES = {
  connectionRequest: {
    id: "li-connection-1",
    label: "LinkedIn Connection Request",
    platform: "linkedin" as const,
    subject: "Connection Request",
    body: "Hi [NAME], I work with HOA boards and property managers in the Phoenix area to solve parking enforcement headaches. Mind if I connect? — Axle Towing",
    variables: ["NAME"],
    charLimit: 300,
  },
  followUp1: {
    id: "li-followup-1",
    label: "LinkedIn Follow-Up #1",
    platform: "linkedin" as const,
    subject: "Follow-Up After Connecting",
    body: "Thanks for connecting [NAME]! Quick question — does [HOA_NAME] currently have a towing partner you're happy with? We offer 24/7 response and no cost to the HOA. Happy to share how it works if useful.",
    variables: ["NAME", "HOA_NAME"],
    charLimit: 300,
  },
  followUp2: {
    id: "li-followup-2",
    label: "LinkedIn Follow-Up #2 (Value Add)",
    platform: "linkedin" as const,
    subject: "Follow-Up #2 — Free Resource",
    body: "Hey [NAME], wanted to share a quick guide we put together for HOA boards on Arizona towing laws and how to handle unauthorized vehicles without any liability on your end. Free to download at axletowing.com. Let me know if you have questions!",
    variables: ["NAME"],
    charLimit: 300,
  },
  followUp3: {
    id: "li-followup-3",
    label: "LinkedIn Follow-Up #3 (Last Touch)",
    platform: "linkedin" as const,
    subject: "Final Follow-Up",
    body: "Hi [NAME], last message from me — if parking enforcement ever becomes an issue at [HOA_NAME], we'd love to help. No cost to the HOA, we handle everything. Feel free to reach out anytime. 🚗",
    variables: ["NAME", "HOA_NAME"],
    charLimit: 300,
  },
};

export const INSTAGRAM_TEMPLATES = {
  initialDm: {
    id: "ig-dm-1",
    label: "Instagram Initial DM",
    platform: "instagram" as const,
    subject: "Initial DM",
    body: "Hey [NAME]! We help property managers and HOA boards in Phoenix handle parking violations without the hassle. Free service, no liability on your end. Would love to show you how it works for [COMPANY]. 🚗",
    variables: ["NAME", "COMPANY"],
    charLimit: 1000,
  },
  followUp1: {
    id: "ig-followup-1",
    label: "Instagram Follow-Up",
    platform: "instagram" as const,
    subject: "Follow-Up DM",
    body: "Hey [NAME], just circling back — parking enforcement is one of those things that can get messy fast without the right partner. We handle it all for [COMPANY] at zero cost. Happy to chat whenever works for you!",
    variables: ["NAME", "COMPANY"],
    charLimit: 1000,
  },
};

export const FACEBOOK_TEMPLATES = {
  initialMessage: {
    id: "fb-msg-1",
    label: "Facebook Initial Message",
    platform: "facebook" as const,
    subject: "Initial Message",
    body: "Hey [NAME]! We help property managers and HOA boards in Phoenix handle parking violations without the hassle. Free service, no liability on your end. Would love to show you how it works for [COMPANY]. 🚗",
    variables: ["NAME", "COMPANY"],
    charLimit: 2000,
  },
  groupPost: {
    id: "fb-group-1",
    label: "Facebook Group Post",
    platform: "facebook" as const,
    subject: "Group Post",
    body: "Any HOA board members or property managers dealing with unauthorized parking issues? Axle Towing offers free private property towing enforcement in the Phoenix/Scottsdale area — no cost to your HOA, 24/7 response, and full ARS compliance. Happy to answer questions!",
    variables: [],
    charLimit: 2000,
  },
  followUp1: {
    id: "fb-followup-1",
    label: "Facebook Follow-Up",
    platform: "facebook" as const,
    subject: "Follow-Up Message",
    body: "Hi [NAME], wanted to follow up — if [COMPANY] ever needs help with parking enforcement, we'd be glad to set up a free consultation. No contracts, no cost to the HOA. Just reach out anytime!",
    variables: ["NAME", "COMPANY"],
    charLimit: 2000,
  },
};

// ---------- Target Personas ----------

export const TARGET_PERSONAS = [
  {
    id: "hoa-board-president",
    label: "HOA Board President",
    description:
      "Elected volunteer leaders who oversee community rules and vendor contracts. Decision-makers for parking enforcement programs.",
    painPoints: [
      "Resident complaints about unauthorized vehicles",
      "Liability concerns around DIY enforcement",
      "Difficulty finding reliable towing partners",
      "Board member burnout from handling disputes manually",
    ],
    platforms: ["linkedin", "facebook"] as const,
    searchTerms: [
      "HOA board president Phoenix",
      "HOA community manager Arizona",
      "homeowners association board member",
    ],
    messagingAngle:
      "Reduce board liability and resident complaints with professional enforcement.",
  },
  {
    id: "property-manager",
    label: "Property Manager",
    description:
      "Professional managers overseeing apartment complexes, commercial properties, and mixed-use developments.",
    painPoints: [
      "Tenant complaints about parking availability",
      "Unauthorized vehicles blocking fire lanes",
      "Liability from improper towing procedures",
      "Time spent coordinating towing on-call",
    ],
    platforms: ["linkedin", "facebook", "instagram"] as const,
    searchTerms: [
      "property manager Phoenix",
      "apartment complex manager Arizona",
      "commercial property manager Scottsdale",
    ],
    messagingAngle:
      "Save time and eliminate liability with a 24/7 towing partner that costs nothing.",
  },
  {
    id: "apartment-complex-manager",
    label: "Apartment Complex Manager",
    description:
      "On-site managers responsible for day-to-day operations including parking enforcement and tenant relations.",
    painPoints: [
      "Unauthorized vehicles from non-residents",
      "Fire lane and handicap space violations",
      "Resident disputes over towing",
      "No budget for parking enforcement staff",
    ],
    platforms: ["instagram", "facebook"] as const,
    searchTerms: [
      "apartment manager Phoenix AZ",
      "residential complex manager",
      "leasing office manager Arizona",
    ],
    messagingAngle:
      "Handle parking violations fast — free service, we do the work, you take the credit.",
  },
];

// ---------- Campaigns ----------

export const CAMPAIGNS = [
  {
    id: "linkedin-hoa-board",
    name: "LinkedIn HOA Board Members",
    platform: "linkedin" as const,
    targetPersona: "hoa-board-president",
    status: "active" as const,
    weeklyTarget: 50,
    metrics: {
      sent: 0,
      replied: 0,
      converted: 0,
    },
    templates: [
      LINKEDIN_TEMPLATES.connectionRequest,
      LINKEDIN_TEMPLATES.followUp1,
      LINKEDIN_TEMPLATES.followUp2,
      LINKEDIN_TEMPLATES.followUp3,
    ],
    schedule: {
      monday: 10,
      tuesday: 10,
      wednesday: 10,
      thursday: 10,
      friday: 10,
    },
  },
  {
    id: "facebook-property-managers",
    name: "Facebook Property Managers",
    platform: "facebook" as const,
    targetPersona: "property-manager",
    status: "active" as const,
    weeklyTarget: 20,
    metrics: {
      sent: 0,
      replied: 0,
      converted: 0,
    },
    templates: [
      FACEBOOK_TEMPLATES.initialMessage,
      FACEBOOK_TEMPLATES.followUp1,
      FACEBOOK_TEMPLATES.groupPost,
    ],
    schedule: {
      monday: 4,
      tuesday: 4,
      wednesday: 4,
      thursday: 4,
      friday: 4,
    },
  },
  {
    id: "instagram-apartment-managers",
    name: "Instagram Apartment Managers",
    platform: "instagram" as const,
    targetPersona: "apartment-complex-manager",
    status: "active" as const,
    weeklyTarget: 30,
    metrics: {
      sent: 0,
      replied: 0,
      converted: 0,
    },
    templates: [INSTAGRAM_TEMPLATES.initialDm, INSTAGRAM_TEMPLATES.followUp1],
    schedule: {
      monday: 6,
      tuesday: 6,
      wednesday: 6,
      thursday: 6,
      friday: 6,
    },
  },
];

// ---------- Outreach Log Entry Type ----------

export type OutreachStatus =
  | "sent"
  | "replied"
  | "interested"
  | "not_interested"
  | "converted"
  | "no_response";

export type OutreachPlatform = "linkedin" | "instagram" | "facebook";

export interface OutreachEntry {
  id: string;
  name: string;
  company: string;
  platform: OutreachPlatform;
  templateId: string;
  status: OutreachStatus;
  notes?: string;
  sentAt: string;
  updatedAt: string;
}

// ---------- Weekly Schedule ----------

export const WEEKLY_SCHEDULE = [
  {
    day: "Monday",
    tasks: [
      { platform: "linkedin", action: "Send 10 connection requests to HOA board members", count: 10 },
      { platform: "instagram", action: "Send 6 DMs to apartment managers", count: 6 },
      { platform: "facebook", action: "Send 4 messages to property managers", count: 4 },
    ],
  },
  {
    day: "Tuesday",
    tasks: [
      { platform: "linkedin", action: "Follow up on Monday connections", count: 10 },
      { platform: "instagram", action: "Send 6 DMs to apartment managers", count: 6 },
      { platform: "facebook", action: "Post in 2 local HOA/PM Facebook groups", count: 2 },
    ],
  },
  {
    day: "Wednesday",
    tasks: [
      { platform: "linkedin", action: "Send 10 new connection requests", count: 10 },
      { platform: "instagram", action: "Follow up on Monday DMs", count: 6 },
      { platform: "facebook", action: "Send 4 direct messages", count: 4 },
    ],
  },
  {
    day: "Thursday",
    tasks: [
      { platform: "linkedin", action: "Follow up on week's connections", count: 10 },
      { platform: "instagram", action: "Send 6 new DMs", count: 6 },
      { platform: "facebook", action: "Follow up on earlier messages", count: 4 },
    ],
  },
  {
    day: "Friday",
    tasks: [
      { platform: "linkedin", action: "Send 10 connection requests, review replies", count: 10 },
      { platform: "instagram", action: "Send 6 DMs, respond to engaged leads", count: 6 },
      { platform: "facebook", action: "Send 4 messages, wrap up week", count: 4 },
    ],
  },
];
