// ============================================================
// CLIENT DATA — Axle Towing & Impound
// ============================================================

export const clientInfo = {
  name: "Axle Towing & Impound",
  slug: "axel-towing",
  contact: {
    name: "Elliott",
    phone: "+18057602314",
  },
  domain: "axletowing.com",
  portalDomain: "axle-towing-portal.vercel.app",
  agency: "AI Acrobatics",
  agencyContact: "julian@aiacrobatics.com",
};

export const stats = [
  { label: "Pages Built", value: "123+", trend: "up" as const },
  { label: "Blog Articles", value: "61", trend: "up" as const },
  { label: "Keywords Tracked", value: "50+", trend: "up" as const },
  { label: "Uptime", value: "99.9%", trend: "up" as const },
];

export const hubLinks = [
  { label: "Live Website", url: "https://axletowing.com", icon: "globe", description: "Production website" },
  { label: "Stats & Rankings", url: "/stats", icon: "chart", description: "SEO performance data" },
  { label: "Campaigns", url: "/campaigns", icon: "mail", description: "Marketing campaigns" },
  { label: "Changelog", url: "/changelog", icon: "list", description: "Detailed update history" },
  { label: "What We Need", url: "/needs", icon: "clipboard", description: "Action items from you" },
  { label: "Book a Call", url: "https://calendly.com/julian-aiacrobatics", icon: "phone", description: "Schedule with Julian" },
];

export const snapshot = {
  month: "March 2026",
  health: "great" as const,
  summary: "Website live on Vercel, SEO foundation in place, 123+ pages built, content pipeline active.",
  highlights: [
    { label: "Pages", value: "123+ built", icon: "document" },
    { label: "SEO", value: "50+ keywords tracked", icon: "chart" },
    { label: "Content", value: "61 blog articles", icon: "check" },
    { label: "Performance", value: "95+ PageSpeed", icon: "lightning" },
  ],
  nextMonthFocus: [
    "Continue localized SEO page rollout",
    "Launch referral partner outreach campaigns",
    "Deploy AI receptionist for after-hours calls",
  ],
};

export type ActivityType = "milestone" | "feature" | "infrastructure" | "planning" | "deploy" | "design" | "content";

export interface ActivityEntry {
  date: string;
  title: string;
  type: ActivityType;
  description: string;
}

export const recentActivity: ActivityEntry[] = [
  {
    date: "Mar 30",
    title: "TowBook integration & email fix",
    type: "feature",
    description: "TowBook vehicle lookup integration updated, email routing fix deployed for contact forms.",
  },
  {
    date: "Mar 29",
    title: "Dashboard portal expanded",
    type: "deploy",
    description: "Added services, meetings, and content calendar pages to client portal.",
  },
  {
    date: "Mar 27",
    title: "SEMrush tracking automated",
    type: "infrastructure",
    description: "Daily automated SEMrush snapshots for keyword tracking and ranking history.",
  },
  {
    date: "Mar 24",
    title: "CRM dashboard launched",
    type: "feature",
    description: "GoHighLevel CRM dashboard added to portal.",
  },
  {
    date: "Mar 17",
    title: "Client strategy meeting",
    type: "planning",
    description: "73-minute strategy session with Elliott. 17 key decisions made on website direction.",
  },
  {
    date: "Mar 15",
    title: "Website deployed to Vercel",
    type: "deploy",
    description: "Full website live on axletowing.com with SSL, analytics, and performance optimization.",
  },
  {
    date: "Mar 10",
    title: "Project kickoff meeting",
    type: "planning",
    description: "Discovery session covering competitive landscape, SEO strategy, and 6-month roadmap.",
  },
];
