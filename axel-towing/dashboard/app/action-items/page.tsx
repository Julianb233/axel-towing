"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ScrollReveal from "../../components/ScrollReveal";
import PageHeader from "../../components/PageHeader";
import { actionItems } from "../../data/site-data";

const ACTION_ITEMS_KEY = "axle-portal-action-items-completed";
const GHL_REQ_KEY = "axle-portal-ghl-requirements-completed";

const ghlRequirements = [
  {
    item: "GHL sub-account credentials or admin access",
    description: "We need login access to your GoHighLevel sub-account, or admin-level access so we can build workflows, pipelines, and automations.",
  },
  {
    item: "Approved messaging for all workflows",
    description: "Review and approve the subject lines and messaging for every automated workflow before we build them.",
    link: "/approvals",
    linkText: "Review GHL Approvals",
  },
  {
    item: "Google Business Profile access (for review links)",
    description: "We need Manager access to your GBP so we can pull your review link and configure the review generation workflow.",
  },
  {
    item: "Google review link URL",
    description: "The direct URL customers click to leave a Google review. Usually looks like: g.page/axletowing/review or a maps.google.com link.",
  },
  {
    item: "Office phone number to port/forward",
    description: "The main office number you want routed through the CRM for call tracking, AI receptionist, and missed-call text-back.",
  },
  {
    item: "Staff names and roles for user setup",
    description: "We need to create CRM user accounts: Elliott (admin), Brian (manager), Tori, and Chris. Confirm roles and email addresses for each.",
  },
  {
    item: "Current customer list for import (CSV or manual)",
    description: "A list of your current customers with name, company, email, phone, and property address. CSV export from TowBook or a manual list works.",
  },
  {
    item: "Logo and branding assets for GHL email templates",
    description: "High-resolution logo, brand colors, and any brand guidelines so email templates match your identity.",
  },
  {
    item: "A2P 10DLC brand registration info",
    description: "Required for SMS compliance. We need: legal business name, EIN (tax ID), business address, and business type for carrier registration.",
  },
  {
    item: "Preferred appointment booking calendar settings",
    description: "Business hours, appointment durations, buffer times, and which team members should receive booking notifications.",
  },
];

export default function ActionItemsPage() {
  const [completedItems, setCompletedItems] = useState<Record<number, boolean>>({});
  const [completedGhlReqs, setCompletedGhlReqs] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const storedItems = localStorage.getItem(ACTION_ITEMS_KEY);
    if (storedItems) setCompletedItems(JSON.parse(storedItems));
    const storedGhl = localStorage.getItem(GHL_REQ_KEY);
    if (storedGhl) setCompletedGhlReqs(JSON.parse(storedGhl));
  }, []);

  const toggleItem = (id: number) => {
    const updated = { ...completedItems, [id]: !completedItems[id] };
    if (!updated[id]) delete updated[id];
    setCompletedItems(updated);
    localStorage.setItem(ACTION_ITEMS_KEY, JSON.stringify(updated));
  };

  const toggleGhlReq = (index: number) => {
    const updated = { ...completedGhlReqs, [index]: !completedGhlReqs[index] };
    if (!updated[index]) delete updated[index];
    setCompletedGhlReqs(updated);
    localStorage.setItem(GHL_REQ_KEY, JSON.stringify(updated));
  };

  const priorityOrder = { urgent: 0, high: 1, medium: 2, low: 3 };
  const sorted = [...actionItems].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  const completedCount = Object.values(completedItems).filter(Boolean).length;
  const totalCount = actionItems.length;

  const completedGhlCount = Object.values(completedGhlReqs).filter(Boolean).length;
  const totalGhlCount = ghlRequirements.length;

  return (
    <>
      <PageHeader badge="Action Required" title="What We Need From You" subtitle="These items are blocking progress. The sooner they're completed, the faster we can drive results." />

      <ScrollReveal>
        <div className="glass-card p-5 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              completedCount === totalCount ? "bg-green-100" : "bg-amber-100"
            }`}>
              {completedCount === totalCount ? (
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <span className="text-sm font-bold text-amber-600">{completedCount}</span>
              )}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{completedCount} of {totalCount} action items completed</p>
              <div className="w-48 h-2 bg-gray-200 rounded-full mt-1.5">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${completedCount === totalCount ? "bg-green-500" : "bg-brand-blue"}`}
                  style={{ width: `${totalCount > 0 ? (completedCount / totalCount) * 100 : 0}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="glass-card p-6 mb-8 bg-red-50 border-red-200">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-brand-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.834-1.964-.834-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
            <div>
              <p className="text-brand-red font-semibold">Critical Blocker: DNS Migration</p>
              <p className="text-sm text-red-700/70 mt-1">The #1 action item is pointing axletowing.com DNS to Vercel. Until this happens, Google cannot index any of the 113 pages we&apos;ve built. Every day of delay equals lost ranking opportunity.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="space-y-4">
        {sorted.map((item, i) => {
          const isComplete = completedItems[item.id];

          return (
            <ScrollReveal key={item.id} delay={i * 80}>
              <div className={`glass-card p-6 transition-all duration-300 ${
                isComplete
                  ? "border-green-200 bg-green-50/30 opacity-75"
                  : item.priority === "urgent"
                  ? "border-red-200 bg-red-50/50"
                  : ""
              }`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className={`w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                        isComplete
                          ? "bg-green-500 border-green-500"
                          : "border-gray-300 hover:border-brand-blue"
                      }`}
                    >
                      {isComplete && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                    <span className="text-lg font-bold text-gray-300">#{item.id}</span>
                    <span className={`badge-${item.priority} text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full`}>{item.priority}</span>
                    {isComplete ? (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-green-50 text-green-600 border border-green-100">complete</span>
                    ) : (
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        item.status === "complete" ? "bg-green-50 text-green-600 border border-green-100" :
                        item.status === "in-progress" ? "bg-blue-50 text-brand-blue border border-blue-100" :
                        "bg-gray-50 text-gray-500 border border-gray-200"
                      }`}>{item.status}</span>
                    )}
                  </div>
                </div>
                <h3 className={`text-lg font-semibold text-gray-900 mb-2 ${isComplete ? "line-through text-gray-400" : ""}`}>{item.title}</h3>
                <p className={`text-sm mb-4 ${isComplete ? "text-gray-400 line-through" : "text-gray-500"}`}>{item.description}</p>
                {!isComplete && (
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">How to do this</p>
                    <p className="text-sm text-gray-600">{item.instructions}</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* GHL Requirements Section */}
      <ScrollReveal delay={200}>
        <div className="mt-16 mb-4">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3 text-purple-600 bg-purple-50 border border-purple-100">
            CRM Setup
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold font-display text-gray-900">What We Need From You for GHL</h2>
          <p className="mt-2 text-gray-500 max-w-2xl">These items are required to build out your GoHighLevel CRM, automated workflows, AI receptionist, and SMS/email campaigns.</p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={220}>
        <div className="glass-card p-5 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              completedGhlCount === totalGhlCount ? "bg-green-100" : "bg-purple-100"
            }`}>
              {completedGhlCount === totalGhlCount ? (
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <span className="text-sm font-bold text-purple-600">{completedGhlCount}</span>
              )}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{completedGhlCount} of {totalGhlCount} GHL requirements completed</p>
              <div className="w-48 h-2 bg-gray-200 rounded-full mt-1.5">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${completedGhlCount === totalGhlCount ? "bg-green-500" : "bg-purple-500"}`}
                  style={{ width: `${totalGhlCount > 0 ? (completedGhlCount / totalGhlCount) * 100 : 0}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="space-y-3">
        {ghlRequirements.map((req, i) => {
          const isComplete = completedGhlReqs[i];

          return (
            <ScrollReveal key={i} delay={i * 60}>
              <div className={`glass-card p-5 transition-all duration-300 ${isComplete ? "border-green-200 bg-green-50/30 opacity-75" : ""}`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-0.5">
                    <button
                      onClick={() => toggleGhlReq(i)}
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                        isComplete
                          ? "bg-green-500"
                          : "border-2 border-gray-300 hover:border-purple-400"
                      }`}
                    >
                      {isComplete && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-sm font-semibold ${isComplete ? "text-gray-400 line-through" : "text-gray-900"}`}>{req.item}</h3>
                    <p className={`text-sm mt-1 ${isComplete ? "text-gray-400 line-through" : "text-gray-500"}`}>{req.description}</p>
                    {req.link && !isComplete && (
                      <Link href={req.link} className="inline-flex items-center gap-1.5 mt-2 text-sm font-medium text-brand-blue hover:text-blue-700 transition-colors">
                        {req.linkText}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}
                  </div>
                  <span className={`flex-shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    isComplete ? "bg-green-50 text-green-600 border border-green-100" : "bg-amber-50 text-amber-600 border border-amber-100"
                  }`}>
                    {isComplete ? "done" : "pending"}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </>
  );
}
