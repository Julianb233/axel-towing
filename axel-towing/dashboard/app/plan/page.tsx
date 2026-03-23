"use client";

import { useState, useEffect, useCallback } from "react";
import ScrollReveal from "../../components/ScrollReveal";
import PageHeader from "../../components/PageHeader";
import ProgressBar from "../../components/ProgressBar";

interface PhaseItem { text: string; status: "complete" | "pending" | "needs-action"; }

function PhaseCard({ number, title, dateRange, status, progress, items }: {
  number: number; title: string; dateRange: string;
  status: "complete" | "in-progress" | "next" | "planned";
  progress: number; items: PhaseItem[];
}) {
  const storageKey = `axle-plan-phase-${number}`;

  const [completedItems, setCompletedItems] = useState<Record<number, boolean>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) setCompletedItems(JSON.parse(saved));
    } catch {}
  }, [storageKey]);

  const toggleItem = useCallback((index: number) => {
    setCompletedItems((prev) => {
      const next = { ...prev, [index]: !prev[index] };
      try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch {}
      return next;
    });
  }, [storageKey]);

  const statusColors: Record<string, string> = {
    "complete": "text-green-600 bg-green-50 border-green-100",
    "in-progress": "text-brand-blue bg-blue-50 border-blue-100",
    "next": "text-amber-600 bg-amber-50 border-amber-100",
    "planned": "text-gray-500 bg-gray-50 border-gray-200",
  };
  const statusLabels: Record<string, string> = { "complete": "Complete", "in-progress": "In Progress", "next": "Next", "planned": "Planned" };
  const barColor = status === "complete" ? "emerald" as const : status === "in-progress" ? "blue" as const : "amber" as const;

  // Calculate effective progress based on toggled completions
  const totalItems = items.length;
  const completedCount = items.filter((item, i) => item.status === "complete" || completedItems[i]).length;
  const effectiveProgress = Math.round((completedCount / totalItems) * 100);

  return (
    <div className="glass-card p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-xs font-bold text-gray-400">PHASE {number}</span>
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${statusColors[status]}`}>{statusLabels[status]}</span>
          </div>
          <h3 className="text-lg font-bold font-display text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{dateRange}</p>
        </div>
      </div>
      <ProgressBar percentage={effectiveProgress} color={barColor} height="h-2" />
      <div className="mt-4 space-y-2">
        {items.map((item, i) => {
          const isComplete = item.status === "complete" || completedItems[i];
          const isNeedsAction = item.status === "needs-action" && !completedItems[i];
          return (
            <div key={i} className="flex items-start gap-3">
              <button
                onClick={() => toggleItem(i)}
                className="flex-shrink-0 mt-0.5 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-1 rounded"
                aria-label={isComplete ? `Mark "${item.text}" as incomplete` : `Mark "${item.text}" as complete`}
              >
                {isComplete ? (
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                ) : isNeedsAction ? (
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.834-1.964-.834-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                )}
              </button>
              <span className={`text-sm ${isComplete ? "text-gray-700" : isNeedsAction ? "text-amber-700 font-medium" : "text-gray-500"}`}>{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function PlanPage() {
  return (
    <>
      <PageHeader badge="The Plan" title="What's Getting Done" subtitle="A 12-month roadmap to dominate Phoenix metro private property towing search results." />
      <div className="space-y-6">
        <ScrollReveal>
          <PhaseCard number={1} title="Foundation" dateRange="Month 1-2 (Mar-Apr)" status="complete" progress={100} items={[
            { text: "Website rebuild on Next.js with App Router", status: "complete" },
            { text: "63 SEO blog articles published covering towing laws, HOA guides, property management", status: "complete" },
            { text: "35 location pages covering Phoenix metro cities and neighborhoods", status: "complete" },
            { text: "7 service pages with schema markup", status: "complete" },
            { text: "PageSpeed optimization achieved (84 to 97/100)", status: "complete" },
            { text: "SEO score optimized (85 to 100/100)", status: "complete" },
            { text: "Spanish language section (4 pages)", status: "complete" },
            { text: "Interactive tools: ROI Calculator, Vehicle Locator", status: "complete" },
          ]} />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <PhaseCard number={2} title="Migration & Indexing" dateRange="Month 2-3 (Apr-May)" status="in-progress" progress={0} items={[
            { text: "Point axletowing.com DNS to Vercel (NEEDS CLIENT ACTION)", status: "needs-action" },
            { text: "Submit sitemap (120 pages) to Google Search Console", status: "pending" },
            { text: "Set up Google Analytics 4 tracking", status: "pending" },
            { text: "Implement 301 redirects from old WordPress URLs", status: "pending" },
            { text: "Monitor indexing of all 120 pages", status: "pending" },
            { text: "Update Google Business Profile with new URL", status: "pending" },
            { text: "Verify Core Web Vitals in GSC", status: "pending" },
          ]} />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <PhaseCard number={3} title="Content Expansion" dateRange="Month 3-6" status="planned" progress={0} items={[
            { text: "30 new articles targeting specific high-value keywords", status: "pending" },
            { text: "48 City x Service programmatic pages (6 services x 8 cities)", status: "pending" },
            { text: "Tow cost calculator tool (competitor gets 1,300 visits/month from theirs)", status: "pending" },
            { text: "Interactive impound lot finder / map", status: "pending" },
            { text: "Competitor comparison pages", status: "pending" },
            { text: "\"Near me\" optimized landing pages", status: "pending" },
            { text: "Free parking sign template (lead magnet)", status: "pending" },
          ]} />
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <PhaseCard number={4} title="CRM & Communications" dateRange="Month 3-4" status="planned" progress={0} items={[
            { text: "GoHighLevel CRM setup with lead pipeline (7 stages)", status: "pending" },
            { text: "New Lead Nurture sequence (8-touch, 30-day campaign)", status: "pending" },
            { text: "Re-Engagement Campaign for cold leads", status: "pending" },
            { text: "Post-Onboarding Welcome sequence", status: "pending" },
            { text: "Referral Partner Nurture campaign", status: "pending" },
            { text: "AI receptionist for after-hours calls", status: "pending" },
            { text: "Phone system migration (UMA to CRM)", status: "pending" },
            { text: "Google Workspace email setup", status: "pending" },
          ]} />
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <PhaseCard number={5} title="Link Building & Authority" dateRange="Month 4-12" status="planned" progress={0} items={[
            { text: "Target: 10-15 quality backlinks per month", status: "pending" },
            { text: "Local directory submissions (BBB, Yelp, Towing.com, chambers)", status: "pending" },
            { text: "Industry association memberships", status: "pending" },
            { text: "Guest posts on property management blogs", status: "pending" },
            { text: "Content partnerships with HOA law firms", status: "pending" },
            { text: "Local media/news outreach", status: "pending" },
          ]} />
        </ScrollReveal>
        <ScrollReveal delay={500}>
          <PhaseCard number={6} title="Referral Partner Program" dateRange="Month 4-6" status="planned" progress={0} items={[
            { text: "HOA board member outreach campaign", status: "pending" },
            { text: "Property management company partnerships", status: "pending" },
            { text: "Apartment complex direct outreach", status: "pending" },
            { text: "Commercial property owner campaigns", status: "pending" },
            { text: "Asphalt/maintenance company cross-referrals", status: "pending" },
          ]} />
        </ScrollReveal>
      </div>
    </>
  );
}
