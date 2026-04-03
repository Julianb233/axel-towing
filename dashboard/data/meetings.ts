// ============================================================
// MEETINGS & KEY DECISIONS — Axle Towing & Impound
// Populated from Fireflies transcripts (March 10 & March 17, 2026)
// ============================================================

export interface MeetingDecision {
  decision: string;
  status: "implemented" | "in-progress" | "pending" | "deferred";
  linkedDeliverable?: string;
}

export interface MeetingActionItem {
  item: string;
  owner: "agency" | "client";
  status: "done" | "in-progress" | "pending";
}

export interface MeetingTakeaway {
  text: string;
  category: "insight" | "requirement" | "concern" | "priority" | "feedback";
}

export interface Meeting {
  id: string;
  title: string;
  date: string;
  duration: string;
  attendees: string[];
  summary: string;
  takeaways: MeetingTakeaway[];
  decisions: MeetingDecision[];
  actionItems: MeetingActionItem[];
  transcriptUrl?: string;
  recordingUrl?: string;
}

export const meetings: Meeting[] = [
  {
    id: "m-1",
    title: "Project Kickoff — Discovery & Competitive Analysis",
    date: "2026-03-10",
    duration: "60 min",
    attendees: ["Julian Bradley", "Elliott (Axle Towing)"],
    summary:
      "Initial discovery session covering business goals, competitive landscape, and the massive SEO opportunity in Arizona towing. Identified QuickTow and All City Towing as main competitors, both declining or shifting focus. Agreed on SEO-first strategy with 123+ pages.",
    takeaways: [
      { text: "QuickTow is declining since original owner retired — poor follow-up under new management", category: "insight" },
      { text: "All City Towing has 2,000+ private property accounts but shifted to police towing — huge opportunity", category: "insight" },
      { text: "Competitors doing zero digital marketing — massive SEO opportunity", category: "priority" },
      { text: "Axle Towing approaching 5-year anniversary, fleet of newer trucks (oldest 2022)", category: "insight" },
      { text: "TowBook integration needed for vehicle lookup on website", category: "requirement" },
      { text: "Conservative 25-30% revenue increase estimate, potentially 50% given lack of competition", category: "priority" },
    ],
    decisions: [
      { decision: "Build 123+ page website with industry-specific and neighborhood-specific content", status: "implemented", linkedDeliverable: "Production Website" },
      { decision: "Target 50+ keywords with 1,500+ monthly searches each", status: "implemented", linkedDeliverable: "SEO Foundation" },
      { decision: "Create 61 blog posts tailored to local Phoenix metro areas", status: "implemented", linkedDeliverable: "Blog Content" },
      { decision: "Integrate TowBook for vehicle lookups", status: "implemented", linkedDeliverable: "TowBook Integration" },
      { decision: "Build affiliate links for parking permits (MyParkingPermit.com)", status: "pending" },
      { decision: "Set up print-on-demand merchandise (mugs, mouse pads, etc.)", status: "implemented", linkedDeliverable: "Merch Store" },
    ],
    actionItems: [
      { item: "Research Arizona towing laws and positioning strategies", owner: "agency", status: "done" },
      { item: "Purchase domain for A-X-E-L spelling variation", owner: "agency", status: "done" },
      { item: "Set up GoDaddy account and transfer domain keys", owner: "client", status: "done" },
      { item: "Get TowBook API access for vehicle lookup", owner: "agency", status: "done" },
      { item: "Review and approve website design before DNS transfer", owner: "client", status: "done" },
    ],
  },
  {
    id: "m-2",
    title: "Website Review & Strategy Session",
    date: "2026-03-17",
    duration: "73 min",
    attendees: ["Julian Bradley", "Elliott (Axle Towing)"],
    summary:
      "Detailed website review with 17 key decisions on content direction, branding, and feature priorities. Critical changes include removing BBB references, updating experience messaging to '30+ years combined', making vehicle relocations a paid service, and adding 24/7/365 dispatch prominence.",
    takeaways: [
      { text: "NO BBB references anywhere on the site — negative customer perception", category: "priority" },
      { text: "NO detailed legal/towing law content that helps vehicle owners dispute tows", category: "priority" },
      { text: "Vehicle Relocations is a PAID service, not free like impounds", category: "requirement" },
      { text: "Experience = '30+ years combined team experience' (not 5 years company age)", category: "requirement" },
      { text: "24/7/365 dispatch availability must be prominent on homepage", category: "priority" },
      { text: "Elliott prefers iMessage for all communications", category: "feedback" },
    ],
    decisions: [
      { decision: "Remove 'Watch how it works' video from homepage", status: "implemented" },
      { decision: "Update experience to '30+ years combined team experience'", status: "implemented", linkedDeliverable: "Production Website" },
      { decision: "Remove BBB accreditation references", status: "implemented" },
      { decision: "Remove detailed towing law content that helps disputes", status: "implemented" },
      { decision: "Remove vehicle relocation from free services — it's charged", status: "implemented" },
      { decision: "Add 24/7/365 dispatch availability prominently", status: "implemented", linkedDeliverable: "Production Website" },
      { decision: "Add office hours (Mon-Fri 9-5) for vehicle retrieval", status: "implemented" },
      { decision: "Expand service area to all Phoenix metro cities", status: "implemented" },
      { decision: "Migrate hosting from GoDaddy to Vercel", status: "implemented", linkedDeliverable: "Vercel Hosting" },
      { decision: "Migrate phone system from UMA to CRM-integrated platform", status: "in-progress" },
      { decision: "Set up Google Workspace email with aliases", status: "in-progress" },
      { decision: "Deploy AI receptionist for after-hours calls", status: "in-progress" },
      { decision: "Integrate TowBook login portals on website", status: "implemented" },
      { decision: "Build 40-50 localized SEO pages", status: "in-progress" },
      { decision: "Build job/careers pages with pre-qualification scoring", status: "pending" },
      { decision: "Create referral partner outreach campaigns", status: "in-progress" },
      { decision: "Create nurture email templates for referral sources", status: "in-progress" },
    ],
    actionItems: [
      { item: "Remove homepage video and related content", owner: "agency", status: "done" },
      { item: "Update service area with all Phoenix metro cities", owner: "agency", status: "done" },
      { item: "Change experience statement to 30+ years combined", owner: "agency", status: "done" },
      { item: "Remove BBB references", owner: "agency", status: "done" },
      { item: "Add 24/7 dispatch + office hours info prominently", owner: "agency", status: "done" },
      { item: "Transfer hosting away from GoDaddy", owner: "agency", status: "done" },
      { item: "Send vector logo and assets", owner: "client", status: "done" },
      { item: "Send full list of cities served", owner: "client", status: "done" },
      { item: "Send current web developer contact info", owner: "client", status: "done" },
      { item: "Set up Google Workspace email with aliases", owner: "agency", status: "in-progress" },
      { item: "Configure AI receptionist for after-hours", owner: "agency", status: "in-progress" },
      { item: "Build job pages with pre-qualification forms", owner: "agency", status: "pending" },
    ],
  },
];

export function getAllDecisions(): (MeetingDecision & { meetingTitle: string; meetingDate: string })[] {
  return meetings.flatMap((m) =>
    m.decisions.map((d) => ({ ...d, meetingTitle: m.title, meetingDate: m.date }))
  );
}

export function getPendingDecisions() {
  return getAllDecisions().filter((d) => d.status === "pending" || d.status === "deferred");
}

export function getImplementedDecisions() {
  return getAllDecisions().filter((d) => d.status === "implemented");
}

export const meetingStats = {
  total: meetings.length,
  totalDecisions: meetings.reduce((n, m) => n + m.decisions.length, 0),
  implementedDecisions: getAllDecisions().filter((d) => d.status === "implemented").length,
  pendingActions: meetings.reduce(
    (n, m) => n + m.actionItems.filter((a) => a.status === "pending").length,
    0
  ),
};
