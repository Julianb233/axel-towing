"use client";

import PageHeader from "../../components/PageHeader";
import ScrollReveal from "../../components/ScrollReveal";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Data — hard-coded snapshot as of 2026-05-15.
// Future: pull from Convex / Supabase so Julian can update without a deploy.
// ---------------------------------------------------------------------------

type SprintStatus = "done" | "in_progress" | "pending";

interface SprintItem {
  title: string;
  description: string;
  status: SprintStatus;
  tag: string;
}

interface RoadmapWeek {
  week: string;
  focus: string;
  items: string[];
}

interface StrategicInitiative {
  icon: string;
  title: string;
  description: string;
  horizon: string;
}

interface ShippedItem {
  date: string;
  title: string;
  description: string;
  changelogAnchor?: string;
}

const LAST_UPDATED = "2026-05-15";

const SPRINT_ITEMS: SprintItem[] = [
  {
    title: "40 New Pages — Audiences, Pillar & City-Service Content",
    description:
      "Launched /audiences hub (HOA boards, apartment managers, commercial properties), /services/abandoned-vehicle-removal, /resources/property-manager-towing-hub, 8 resource articles, 6 pillar SEO articles, and 26 city-service AI-SEO articles across Phoenix metro. ~71,000 words of new content now indexed.",
    status: "done",
    tag: "Content & SEO",
  },
  {
    title: "Hero Image Refresh — 46 Branded Photos (Nano Banana Pro)",
    description:
      "Replacing all 46 site hero images with photorealistic Arizona scenes (Camelback Mountain, Superstition Mountains, Old Town Scottsdale) using Google Gemini Imagen 4 Ultra. New images are optimized WebP and geographically specific to each service area.",
    status: "in_progress",
    tag: "Design",
  },
  {
    title: "GBP Phone + Hours Fix — Phoenix & Apache Junction Listings",
    description:
      "Google Business Profile API call is staged and ready. Waiting on Julian to enable the GCP Business Profile API scope (AI-9986 P1). Once unlocked, the fix deploys in minutes — corrects the listing phone number and sets accurate dispatch hours on both locations.",
    status: "pending",
    tag: "Local SEO",
  },
];

const ROADMAP_WEEKS: RoadmapWeek[] = [
  {
    week: "Week 1 — GBP Optimization",
    focus: "Lock in both Google Business Profile listings",
    items: [
      "Enable GCP Business Profile API scope (Julian action item)",
      "Push corrected phone number and hours to Phoenix + Apache Junction listings",
      "Upload fresh photos from the new image batch to GBP",
      "Publish first two GBP posts (service highlight + ARS law update)",
    ],
  },
  {
    week: "Week 2 — SEO Performance Tracking",
    focus: "Measure the May 15 content sprint and set the monthly cadence",
    items: [
      "Pull Search Console impressions and clicks for all 40 new pages",
      "Track AI citation rate across ChatGPT, Perplexity, Google AI Overviews",
      "Identify the top 5 city-service pages gaining traction — prioritize internal links",
      "Begin monthly keyword rank report",
    ],
  },
  {
    week: "Week 3 — GHL Hiring Pipeline + Chat Widget",
    focus: "Stand up the GoHighLevel workflow stack (Hitesh)",
    items: [
      "Activate 15 GHL automation workflows (nurture, referral, re-engagement, hiring)",
      "Enable GHL chat widget on the website — leads routed directly to Elliott",
      "Connect A2P 10DLC brand once EIN is on file (pending Elliott)",
      "Wire hiring form submissions to 9-stage GHL pipeline",
    ],
  },
  {
    week: "Week 4 — HOA Outreach Launch",
    focus: "Start the 22,000-contact HOA and property manager outreach",
    items: [
      "Import Phoenix-metro HOA board and PM contact list to GHL",
      "Activate cold-outreach sequence: email Day 1, LinkedIn Day 2, follow-up Day 4",
      "Launch LinkedIn connection campaign targeting Greystar, AAM, FirstService, CCMC",
      "Set up Facebook HOA group strategy (observe phase — no hard pitching)",
    ],
  },
];

const STRATEGIC_INITIATIVES: StrategicInitiative[] = [
  {
    icon: "🎙️",
    title: "Voice AI Agent — Inbound Call Handler",
    description:
      'AI receptionist "Jordan" handles inbound calls 24/7: screens urgency, provides ETAs by Phoenix zone, routes HOA partnership inquiries to a dedicated branch, and sends automated SMS confirmations post-dispatch. Platform evaluation complete (Vapi recommended). Awaiting GHL activation before wiring the webhook.',
    horizon: "60 days",
  },
  {
    icon: "📣",
    title: "Social Media Outreach — HOA Decision Makers",
    description:
      "Three-platform strategy targeting the 22,000+ HOA boards and property management companies in Phoenix metro. LinkedIn is the primary channel (Sales Navigator outreach to AAM, Greystar, CCMC, FirstService, Associa). Facebook HOA groups for organic visibility. Instagram for brand awareness.",
    horizon: "60 days",
  },
  {
    icon: "🔗",
    title: "Authority Expansion — Backlinks, Citations, GBP Post Cadence",
    description:
      "Target 30+ local citations (Axle currently has ~8 vs competitors at 30+). Weekly GBP posts to signal freshness. Backlink outreach to Phoenix HOA industry publications and local news outlets covering ARS towing law updates.",
    horizon: "60-90 days",
  },
  {
    icon: "🤝",
    title: "Referral Partner Program Activation",
    description:
      "Turn locksmiths, auto mechanics, movers, and paving companies into an active referral network. Co-branded emergency cards for HOA starter packs. GHL tracks every referral sent and received per partner with a 9-stage pipeline and smart lists.",
    horizon: "90 days",
  },
];

const SHIPPED_ITEMS: ShippedItem[] = [
  {
    date: "May 15, 2026",
    title: "40 New Pages + AI SEO Layer",
    description:
      "Audiences hub, abandoned vehicle service page, property manager resource hub, 8 guide articles, 6 pillar SEO posts, 26 city-service articles. ~71,000 words. AI-enhanced with TL;DR blocks, HowTo schema, E-E-A-T markup, and llms.txt for ChatGPT/Perplexity/Gemini crawlers.",
  },
  {
    date: "May 7, 2026",
    title: "Lighthouse Performance Fixes",
    description:
      "Core Web Vitals improvements resolving render-blocking resources and image optimization issues flagged in the PageSpeed audit (AI-9333).",
  },
  {
    date: "May 4, 2026",
    title: "Schema Audit — Article Schema on 36 Blog Pages",
    description:
      "Added Article / HowTo / FAQPage schema to 36 existing blog posts. Improves eligibility for Google rich results and AI citation inclusion.",
  },
  {
    date: "April 14, 2026",
    title: "Branded Social Media Templates",
    description:
      "6 ready-to-use social templates across Instagram, Facebook, and LinkedIn. Navy + Red brand identity. Stitch design system saved for future iteration.",
  },
  {
    date: "April 13, 2026",
    title: "Job Application Pages Enhanced",
    description:
      "Pre-qualification questions updated for Driver and Sales Rep roles. Applications sync to GHL CRM with hiring tags. Pricing references removed per Elliott's directive.",
  },
];

// ---------------------------------------------------------------------------
// Status pill config
// ---------------------------------------------------------------------------

const STATUS_CONFIG: Record<
  SprintStatus,
  { label: string; bg: string; text: string; dot: string; icon: string }
> = {
  done: {
    label: "Done",
    bg: "bg-emerald-50 border-emerald-200",
    text: "text-emerald-700",
    dot: "bg-emerald-500",
    icon: "✅",
  },
  in_progress: {
    label: "In Progress",
    bg: "bg-blue-50 border-blue-200",
    text: "text-blue-700",
    dot: "bg-blue-500",
    icon: "🔄",
  },
  pending: {
    label: "Pending",
    bg: "bg-gray-50 border-gray-200",
    text: "text-gray-600",
    dot: "bg-gray-400",
    icon: "⏳",
  },
};

const TAG_COLORS: Record<string, string> = {
  "Content & SEO": "bg-green-50 text-green-700 border-green-100",
  Design: "bg-purple-50 text-purple-700 border-purple-100",
  "Local SEO": "bg-amber-50 text-amber-700 border-amber-100",
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function PlanPage() {
  const doneCount = SPRINT_ITEMS.filter((i) => i.status === "done").length;
  const inProgressCount = SPRINT_ITEMS.filter((i) => i.status === "in_progress").length;
  const pendingCount = SPRINT_ITEMS.filter((i) => i.status === "pending").length;

  return (
    <>
      {/* ── Hero ── */}
      <PageHeader
        badge="Roadmap"
        title="The Plan"
        subtitle="What we're building for Axle Towing right now — and what's next."
      />

      {/* ── Sprint summary stats ── */}
      <ScrollReveal>
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="glass-card p-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Done</p>
            <p className="text-3xl font-bold font-display text-emerald-600">{doneCount}</p>
          </div>
          <div className="glass-card p-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">In Progress</p>
            <p className="text-3xl font-bold font-display text-blue-600">{inProgressCount}</p>
          </div>
          <div className="glass-card p-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Pending</p>
            <p className="text-3xl font-bold font-display text-gray-500">{pendingCount}</p>
          </div>
        </div>
      </ScrollReveal>

      {/* ── Section 1: Current Sprint ── */}
      <ScrollReveal delay={100}>
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <h2 className="text-2xl font-bold font-display text-gray-900">Current Sprint</h2>
            <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
              Week of May 15, 2026
            </span>
          </div>

          <div className="space-y-4">
            {SPRINT_ITEMS.map((item, idx) => {
              const cfg = STATUS_CONFIG[item.status];
              const tagColor = TAG_COLORS[item.tag] ?? "bg-gray-50 text-gray-600 border-gray-100";
              return (
                <ScrollReveal key={idx} delay={idx * 80}>
                  <div className="glass-card p-6">
                    <div className="flex flex-wrap items-start gap-3 mb-3">
                      <h3 className="font-bold text-gray-900 flex-1 leading-snug">{item.title}</h3>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span
                          className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${cfg.bg} ${cfg.text}`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                          {cfg.label}
                        </span>
                        <span
                          className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${tagColor}`}
                        >
                          {item.tag}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>
      </ScrollReveal>

      {/* ── Section 2: Next 30 Days ── */}
      <ScrollReveal delay={150}>
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <h2 className="text-2xl font-bold font-display text-gray-900">Next 30 Days</h2>
            <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
              Phased Roadmap
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ROADMAP_WEEKS.map((week, idx) => (
              <ScrollReveal key={idx} delay={idx * 80}>
                <div className="glass-card p-6 h-full">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-7 h-7 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {idx + 1}
                    </span>
                    <h3 className="font-bold text-gray-900 leading-snug">{week.week}</h3>
                  </div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-4 ml-9">
                    {week.focus}
                  </p>
                  <ul className="space-y-2">
                    {week.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1 w-4 h-4 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ── Section 3: Strategic Initiatives ── */}
      <ScrollReveal delay={200}>
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <h2 className="text-2xl font-bold font-display text-gray-900">Strategic Initiatives</h2>
            <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
              60–90 Day Horizon
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {STRATEGIC_INITIATIVES.map((init, idx) => (
              <ScrollReveal key={idx} delay={idx * 80}>
                <div className="glass-card p-6 h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl leading-none mt-0.5">{init.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 leading-snug">{init.title}</h3>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-purple-600 bg-purple-50 border border-purple-100 px-2 py-0.5 rounded-full inline-block mt-1">
                        {init.horizon}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{init.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ── Section 4: Recently Shipped ── */}
      <ScrollReveal delay={250}>
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <h2 className="text-2xl font-bold font-display text-gray-900">Recently Shipped</h2>
            <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
              Last 60 Days
            </span>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400 via-emerald-300 to-emerald-100 hidden md:block" />
            <div className="space-y-4">
              {SHIPPED_ITEMS.map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 70}>
                  <div className="relative md:ml-14">
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute -left-14 top-5 w-9 h-9 rounded-full bg-emerald-50 border-2 border-emerald-300 items-center justify-center">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="glass-card p-5">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-full">
                          {item.date}
                        </span>
                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="mt-5 ml-0 md:ml-14">
            <Link
              href="/changelog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors"
            >
              View full changelog
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </ScrollReveal>

      {/* ── Section 5: What We Need From You ── */}
      <ScrollReveal delay={300}>
        <section className="mb-12">
          <div className="glass-card p-7 bg-gradient-to-br from-white to-blue-50/40 border-blue-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold font-display text-gray-900 mb-1">What We Need From You</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  A few open items where Elliott&apos;s input keeps the project moving — things only he can provide. Check the action items page for the full list with details on each.
                </p>
                <Link
                  href="/needs"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:bg-brand-blue-dark transition-colors shadow-sm"
                >
                  View Action Items
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── Footer ── */}
      <ScrollReveal delay={350}>
        <footer className="border-t border-gray-100 pt-6 pb-2 text-center">
          <p className="text-xs text-gray-400">
            Last updated: {LAST_UPDATED} &nbsp;·&nbsp; Powered by{" "}
            <a href="mailto:julian@aiacrobatics.com" className="text-brand-blue hover:underline">
              AI Acrobatics
            </a>
            {" "}·{" "}
            <a href="tel:+16195090699" className="text-gray-400 hover:text-brand-blue transition-colors">
              +1 619 509-0699
            </a>
          </p>
        </footer>
      </ScrollReveal>
    </>
  );
}
