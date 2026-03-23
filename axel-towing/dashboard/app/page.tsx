"use client";

import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import PageHeader from "../components/PageHeader";

const sections = [
  {
    title: "Current Stats & Rankings",
    description: "Real SEMrush performance data, keyword rankings, and traffic trends.",
    href: "/stats",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    color: "text-blue-600 bg-blue-50",
  },
  {
    title: "SEO Strategy",
    description: "Keyword targeting, content strategy, and competitive analysis.",
    href: "/seo-strategy",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    color: "text-indigo-600 bg-indigo-50",
  },
  {
    title: "Content Library",
    description: "Blog articles, content calendar, and publishing schedule.",
    href: "/content",
    icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    title: "Articles",
    description: "Published blog articles with full content and SEO optimization.",
    href: "/articles",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    color: "text-violet-600 bg-violet-50",
  },
  {
    title: "Marketing Hub",
    description: "Email templates, SMS campaigns, and GHL workflow automation.",
    href: "/marketing",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    color: "text-orange-600 bg-orange-50",
  },
  {
    title: "Brochures",
    description: "Print-ready marketing collateral for property managers and partners.",
    href: "/brochures",
    icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z",
    color: "text-pink-600 bg-pink-50",
  },
  {
    title: "Referral Program",
    description: "Referral partner tracking, outreach materials, and pipeline.",
    href: "/referrals",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    color: "text-cyan-600 bg-cyan-50",
  },
  {
    title: "Action Items",
    description: "Pending tasks, client requests, and project milestones.",
    href: "/action-items",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    color: "text-amber-600 bg-amber-50",
  },
  {
    title: "Calendar",
    description: "Project timeline, milestones, and upcoming deliverables.",
    href: "/calendar",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    color: "text-teal-600 bg-teal-50",
  },
  {
    title: "Project Plan",
    description: "Full SEO roadmap with phases, timelines, and milestones.",
    href: "/plan",
    icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7",
    color: "text-rose-600 bg-rose-50",
  },
  {
    title: "Changelog",
    description: "Complete history of every update, feature, and improvement.",
    href: "/changelog",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "text-gray-600 bg-gray-100",
  },
  {
    title: "Client Feedback",
    description: "Submit feedback, track requests, and view responses.",
    href: "/feedback",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    color: "text-sky-600 bg-sky-50",
  },
  {
    title: "Our Process",
    description: "How we work: methodology, communication, and deliverables.",
    href: "/process",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    color: "text-yellow-600 bg-yellow-50",
  },
];

const tools = [
  {
    title: "AI Image Generator",
    description: "Generate professional towing & fleet images with Nano Banana AI.",
    href: "/images",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    badge: "Nano Banana",
    color: "text-[#1E6BB8] bg-blue-50",
  },
];

export default function DashboardHome() {
  return (
    <>
      <PageHeader
        badge="Client Portal"
        title="Axle Towing Dashboard"
        subtitle="Your central hub for SEO performance, marketing materials, and project management"
      />

      {/* Tools Section */}
      <ScrollReveal>
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 group hover:shadow-md hover:border-blue-200 transition-all block"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0 transition-colors`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#1E6BB8] transition-colors">
                        {item.title}
                      </h3>
                      {item.badge && (
                        <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-blue-100 text-[#1E6BB8]">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Dashboard Sections */}
      <ScrollReveal delay={100}>
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Dashboard Sections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sections.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 group hover:shadow-md hover:border-blue-200 transition-all block"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0 transition-colors`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#1E6BB8] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
