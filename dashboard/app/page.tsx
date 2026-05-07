import Link from "next/link";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";
import { getLatestSnapshot } from "../lib/convex";

// Re-fetch stats every 5 minutes — Convex semrushSnapshots are cron-fed daily
export const revalidate = 300;

// Static page counts (updated 2026-05-06 — refresh quarterly or after major build push)
const STATIC_STATS = {
  totalPages: 358,        // from latest `next build` output for the website
  blogArticles: 77,       // public blog count
  locationPages: 40,      // /locations/<city> pages
  servicePages: 22,       // 6 /services + 12 /private-property-towing/<city> + 4 head-term pillars
};

const quickLinks = [
  {
    title: "Campaigns",
    description: "Email sequences, drip automations, and partner outreach templates.",
    href: "/campaigns",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    title: "What We Need",
    description: "Action items that require your input to keep the project moving.",
    href: "/needs",
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    title: "Changelog",
    description: "Full history of every update, fix, and feature shipped.",
    href: "/changelog",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
  },
  {
    title: "CRM (GHL)",
    description: "GoHighLevel integration status, lead pipeline, and automations.",
    href: "/crm",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    title: "Invoicing",
    description: "Monthly invoice history and payment status.",
    href: "/invoicing",
    icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z",
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-100",
  },
  {
    title: "SEO Performance",
    description: "Daily SEMrush snapshot — Authority Score, keywords, traffic, backlinks, AI visibility, and competitor benchmarks.",
    href: "/seo",
    icon: "M3 3v18h18M7 14l3-3 4 4 5-5",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
];

const recentUpdates = [
  {
    date: "May 6",
    text: "SEO Performance page launched on the portal — daily SEMrush snapshot pulls Authority Score, organic keywords, traffic, backlinks, AI visibility, and competitor benchmarks. Refreshes every morning at 06:30 PT.",
    category: "infrastructure",
  },
  {
    date: "May 6",
    text: "/phoenix-towing pillar shipped — 3,100-word 2026 guide for property managers targeting the 'phoenix towing' head term (vol 720). 8 sections, 12-city directory, 21 abandoned-vehicle article links, full FAQ + Article + LocalBusiness schema.",
    category: "seo",
  },
  {
    date: "May 6",
    text: "/arizona-towing statewide hub shipped — 2,500-word pillar covering 36 Arizona cities organized by region (Maricopa Metro / East Valley / West Valley / North Valley / Pinal County), with 6 deep-link statute references.",
    category: "seo",
  },
  {
    date: "May 6",
    text: "/tow-service-phoenix-az decision pillar shipped — 2,500-word buyer's guide with 12-criteria comparison table, property-scenario weighting (HOA / Apartment / Commercial), and switching playbook.",
    category: "seo",
  },
  {
    date: "May 6",
    text: "Schema.org NAP markup verification clean — Phoenix and Apache Junction LocalBusiness blocks both match canonical address/phone. AMA partner directory citation also matches.",
    category: "seo",
  },
  {
    date: "May 6",
    text: "GBP API tooling complete — push script ready, 25 Q&A entries pre-staged, 12 starter posts drafted, 60+ photos categorized in manifest. Awaiting Manager access on both locations to apply Phase 1 fixes.",
    category: "infrastructure",
  },
  {
    date: "May 4",
    text: "GBP NAP audit + photo manifest + review monitor (wave 3): cron-friendly NAP audit script across 5 sources, 3-tier photo ranking from existing assets, hourly review-monitor on both locations with iMessage alerts on changes.",
    category: "infrastructure",
  },
  {
    date: "May 1",
    text: "Path-to-#1 strategic plan published — quantified 53× organic-traffic gap vs Freeway, 38× keyword gap, sequenced 3-tier roadmap (review recovery → pillar pages → backlinks/moat) with 17 Linear sub-issues.",
    category: "strategy",
  },
  {
    date: "Apr 20",
    text: "Post-meeting cleanup: branded merchandise section removed, storage-fee card removed from pricing, 20 abandoned-vehicle articles sent to Elliott for approval.",
    category: "website",
  },
];

const categoryColors: Record<string, string> = {
  infrastructure: "bg-purple-50 text-purple-700 border-purple-200",
  strategy: "bg-blue-50 text-blue-700 border-blue-200",
  content: "bg-green-50 text-green-700 border-green-200",
  seo: "bg-amber-50 text-amber-700 border-amber-200",
  website: "bg-red-50 text-red-700 border-red-200",
};

const actionItems = [
  { text: "Add julian@aiacrobatics.com as Manager on both Google Business Profile listings", status: "critical" },
  { text: "Confirm what (623) 401-2537 actually rings to (Phoenix listing)", status: "high" },
  { text: "Send 10-20 dispatch-cam photos of trucks, team, yard, and jobs in progress", status: "high" },
  { text: "Confirm Facebook / Instagram / LinkedIn handles", status: "medium" },
  { text: "Resolve hours conflict — site shows 9-5, strategy says 24/7 dispatch", status: "medium" },
];

const statusColors: Record<string, string> = {
  critical: "bg-red-100 text-red-700",
  high: "bg-amber-100 text-amber-700",
  medium: "bg-blue-100 text-blue-700",
};

export default async function DashboardOverview() {
  // Live SEO data from Convex (semrushSnapshots:getLatest). Falls back to a
  // friendly placeholder if the cron hasn't landed the first snapshot yet.
  let liveKeywordsTracked = "—";
  let liveAuthorityScore: string | null = null;
  let liveDataDate: string | null = null;
  try {
    const snap = await getLatestSnapshot("axle-towing");
    if (snap) {
      liveKeywordsTracked = snap.overview.organicKeywords.toString();
      liveAuthorityScore = snap.overview.authorityScore.toString();
      liveDataDate = snap.date;
    }
  } catch (err) {
    // Network or Convex outage — keep the dashboard rendering, log to server console
    console.error("[homepage] Convex semrushSnapshots query failed:", err);
  }

  const stats = [
    { label: "Total Pages", value: STATIC_STATS.totalPages.toString(), color: "text-brand-blue", accent: "#1e6bb8" },
    { label: "Blog Articles", value: STATIC_STATS.blogArticles.toString(), color: "text-green-600", accent: "#16a34a" },
    { label: "Location Pages", value: STATIC_STATS.locationPages.toString(), color: "text-amber-500", accent: "#f59e0b" },
    { label: "Service Pages", value: STATIC_STATS.servicePages.toString(), color: "text-purple-600", accent: "#9333ea" },
    {
      label: liveAuthorityScore ? `Keywords (AS ${liveAuthorityScore})` : "Keywords Tracked",
      value: liveKeywordsTracked,
      color: "text-brand-red",
      accent: "#dc3a30",
    },
  ];

  return (
    <>
      <PageHeader
        badge="Client Portal"
        title="Dashboard Overview"
        subtitle="Your Axle Towing digital growth project at a glance. Powered by AI Acrobatics."
      />

      {/* Stats Row */}
      <ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-card"
              style={{ "--accent-color": stat.accent } as React.CSSProperties}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">{stat.label}</p>
              <p className={`text-3xl font-bold font-display mt-1 ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>
        {liveDataDate && (
          <p className="text-xs text-gray-400 -mt-6 mb-8 text-right">
            Live SEO data: <span className="font-mono">{liveDataDate}</span> via Convex
          </p>
        )}
      </ScrollReveal>

      {/* Action Items Summary */}
      <ScrollReveal delay={100}>
        <div className="glass-card p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              Action Items Needing Your Input
            </h2>
            <Link href="/needs" className="text-xs font-medium text-brand-blue hover:underline">
              View all &rarr;
            </Link>
          </div>
          <div className="space-y-2">
            {actionItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${statusColors[item.status]}`}>
                  {item.status}
                </span>
                <span className="text-sm text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Quick Links Grid */}
      <ScrollReveal delay={200}>
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          Quick Links
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href} className="glass-card p-5 group block">
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl ${link.bg} border ${link.border} flex items-center justify-center flex-shrink-0`}>
                  <svg className={`w-5 h-5 ${link.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={link.icon} />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-gray-900 group-hover:text-brand-blue transition-colors">{link.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{link.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </ScrollReveal>

      {/* Recent Updates */}
      <ScrollReveal delay={300}>
        <div className="glass-card p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Recent Updates
            </h2>
            <Link href="/changelog" className="text-xs font-medium text-brand-blue hover:underline">
              Full changelog &rarr;
            </Link>
          </div>
          <div className="space-y-3">
            {recentUpdates.map((update, idx) => (
              <div key={idx} className="flex items-start gap-4 p-3 rounded-xl bg-gray-50 border border-gray-100">
                <span className="text-xs font-semibold text-gray-400 whitespace-nowrap mt-0.5">{update.date}</span>
                <span className="text-sm text-gray-700 flex-1">{update.text}</span>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border whitespace-nowrap ${categoryColors[update.category]}`}>
                  {update.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Project Status */}
      <ScrollReveal delay={400}>
        <div className="glass-card p-6">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Project Status
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-green-50 border border-green-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-green-600 mb-1">Website</p>
              <p className="text-sm font-medium text-gray-900">299 pages live on Vercel</p>
              <p className="text-xs text-gray-500 mt-1">Awaiting DNS cutover from Duo Webz</p>
            </div>
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-1">SEO</p>
              <p className="text-sm font-medium text-gray-900">50+ keywords targeted</p>
              <p className="text-xs text-gray-500 mt-1">Local citations + link building in progress</p>
            </div>
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-1">Marketing</p>
              <p className="text-sm font-medium text-gray-900">4 drip sequences ready</p>
              <p className="text-xs text-gray-500 mt-1">120+ prospect pipeline built</p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
