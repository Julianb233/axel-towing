"use client";

import Link from "next/link";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";

const stats = [
  { label: "Total Pages", value: "299", color: "text-brand-blue", accent: "#1e6bb8" },
  { label: "Blog Articles", value: "60+", color: "text-green-600", accent: "#16a34a" },
  { label: "Location Pages", value: "120+", color: "text-amber-500", accent: "#f59e0b" },
  { label: "Service Pages", value: "25", color: "text-purple-600", accent: "#9333ea" },
  { label: "Keywords Tracked", value: "50+", color: "text-brand-red", accent: "#dc3a30" },
];

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
    title: "Merch Store",
    description: "Branded merchandise catalog and bulk order options.",
    href: "/merch",
    icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-100",
  },
];

const recentUpdates = [
  {
    date: "Mar 29",
    text: "Removed specific pricing from Vehicle Relocation pages, deleted 8 towing law blog articles per Elliott's request, cleaned all cross-references",
    category: "website",
  },
  {
    date: "Mar 26",
    text: "Rate limiting deployed on API endpoints, social media links fixed, newsletter form connected",
    category: "infrastructure",
  },
  {
    date: "Mar 26",
    text: "AZ Towing Laws report, Citation Building Plan, Link Building Strategy produced",
    category: "strategy",
  },
  {
    date: "Mar 25",
    text: "Outreach drip sequences designed for 4 audience segments (PM, locksmith, mechanic, vehicle owner)",
    category: "content",
  },
  {
    date: "Mar 24",
    text: "60+ blog articles published covering parking enforcement, towing laws, and HOA guides",
    category: "seo",
  },
  {
    date: "Mar 22",
    text: "299-page website deployed to Vercel production with full SEO optimization",
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
  { text: "Point axletowing.com DNS to new site", status: "critical" },
  { text: "Google Business Profile access", status: "high" },
  { text: "Google Search Console access", status: "high" },
  { text: "Google Analytics access", status: "medium" },
];

const statusColors: Record<string, string> = {
  critical: "bg-red-100 text-red-700",
  high: "bg-amber-100 text-amber-700",
  medium: "bg-blue-100 text-blue-700",
};

export default function DashboardOverview() {
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
