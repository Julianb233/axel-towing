export type EventStatus = "completed" | "in-progress" | "planned" | "critical";

export interface CalendarEvent {
  id: string;
  title: string;
  startDate: string; // YYYY-MM-DD
  endDate?: string;  // YYYY-MM-DD for multi-day events
  status: EventStatus;
  description?: string;
}

export const calendarEvents: CalendarEvent[] = [
  // March 2026
  {
    id: "mar-website-foundation",
    title: "Website foundation phase",
    startDate: "2026-03-01",
    endDate: "2026-03-15",
    status: "in-progress",
    description: "120 pages published on Railway, PageSpeed optimization, content structure built",
  },
  {
    id: "mar-strategy-session",
    title: "Client strategy session with Elliott",
    startDate: "2026-03-17",
    status: "completed",
    description: "Reviewed website progress, gathered feedback on BBB badge, video, and service areas",
  },
  {
    id: "mar-dispatch-banner",
    title: "24/7 dispatch banner added",
    startDate: "2026-03-17",
    status: "completed",
    description: "Prominent green 'Available Now' indicator with truck count in header",
  },
  {
    id: "mar-hero-updates",
    title: "Hero video added, BBB removed, photos integrated, portal fixed",
    startDate: "2026-03-19",
    status: "completed",
    description: "Multiple updates from strategy session feedback implemented same day",
  },
  {
    id: "mar-linear-issues",
    title: "15 Linear issues created",
    startDate: "2026-03-19",
    status: "completed",
    description: "Backlog of development tasks organized and prioritized in Linear",
  },

  // April 2026
  {
    id: "apr-dns-migration",
    title: "Target DNS migration to Railway",
    startDate: "2026-04-01",
    status: "critical",
    description: "Critical milestone: connect axletowing.com domain to new Railway site",
  },
  {
    id: "apr-google-workspace",
    title: "Google Workspace email setup",
    startDate: "2026-04-01",
    endDate: "2026-04-07",
    status: "planned",
    description: "Professional email with aliases, tagging, and auto-responses",
  },
  {
    id: "apr-search-console",
    title: "Google Search Console + Analytics setup",
    startDate: "2026-04-07",
    endDate: "2026-04-14",
    status: "planned",
    description: "Connect GSC and GA4 for traffic tracking and search performance monitoring",
  },
  {
    id: "apr-towbook",
    title: "TowBook portal integration",
    startDate: "2026-04-14",
    endDate: "2026-04-21",
    status: "planned",
    description: "Embed manager login portals into the website for property manager access",
  },
  {
    id: "apr-seo-articles",
    title: "First batch of 5 new SEO articles",
    startDate: "2026-04-15",
    status: "planned",
    description: "Priority 1 articles targeting high-value private property towing keywords",
  },
  {
    id: "apr-ai-receptionist",
    title: "AI receptionist configuration",
    startDate: "2026-04-21",
    endDate: "2026-04-30",
    status: "planned",
    description: "Automated phone answering with FAQ responses and form delivery for after-hours",
  },
  {
    id: "apr-seo-report",
    title: "Monthly SEO report",
    startDate: "2026-04-30",
    status: "planned",
    description: "First monthly performance report covering rankings, traffic, and content metrics",
  },

  // May 2026
  {
    id: "may-phone-migration",
    title: "Phone system migration from UMA",
    startDate: "2026-05-01",
    endDate: "2026-05-15",
    status: "planned",
    description: "Migrate phone system from UMA to CRM-integrated solution",
  },
  {
    id: "may-city-pages",
    title: "Localized city pages expansion",
    startDate: "2026-05-01",
    endDate: "2026-05-31",
    status: "planned",
    description: "48 city x service landing pages for Phoenix metro area coverage",
  },
  {
    id: "may-seo-articles-2",
    title: "Second batch of 10 SEO articles",
    startDate: "2026-05-15",
    status: "planned",
    description: "Priority 2-3 articles including cost guides, legal updates, and setup guides",
  },
  {
    id: "may-seo-report",
    title: "Monthly SEO report",
    startDate: "2026-05-30",
    status: "planned",
    description: "Second monthly report with post-DNS-migration ranking changes",
  },

  // June 2026
  {
    id: "jun-link-building",
    title: "Link building campaign launch",
    startDate: "2026-06-01",
    endDate: "2026-06-30",
    status: "planned",
    description: "10-15 backlinks/month through directory submissions and industry partnerships",
  },
  {
    id: "jun-referral-outreach",
    title: "Referral partner outreach begins",
    startDate: "2026-06-15",
    status: "planned",
    description: "HOA board outreach, property management partnerships, apartment complex campaigns",
  },
  {
    id: "jun-quarterly-review",
    title: "Quarterly business review",
    startDate: "2026-06-30",
    status: "planned",
    description: "Full quarterly review covering SEO performance, content ROI, and strategic adjustments",
  },
];
