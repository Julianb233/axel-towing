"use client";

import { useState } from "react";
import PageHeader from "../../components/PageHeader";
import ScrollReveal from "../../components/ScrollReveal";

// ─── Template Data ──────────────────────────────────────────────────────────

type SequenceType = "pm-nurture" | "locksmith-partner" | "mechanic-partner" | "vehicle-retrieval";

interface TemplateInfo {
  sequenceType: SequenceType;
  sequenceName: string;
  description: string;
  emailCount: number;
  dayOffsets: number[];
  subjects: string[];
  color: string;
  bgColor: string;
  borderColor: string;
  icon: string;
}

const sequences: TemplateInfo[] = [
  {
    sequenceType: "pm-nurture",
    sequenceName: "Property Manager Nurture",
    description: "5-email sequence for property managers — from welcome to follow-up over 30 days.",
    emailCount: 5,
    dayOffsets: [0, 3, 7, 14, 30],
    subjects: [
      "Your parking enforcement partner is here",
      "How [Property Name] can eliminate unauthorized parking in 48 hours",
      "How Copper Creek Apartments reduced parking complaints by 90%",
      "Free property assessment + first month of enforcement",
      "Still dealing with parking violations?",
    ],
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    sequenceType: "locksmith-partner",
    sequenceName: "Locksmith Partner",
    description: "3-email sequence for locksmith businesses — referral commission partnership.",
    emailCount: 3,
    dayOffsets: [0, 5, 14],
    subjects: [
      "A new revenue stream for your locksmith business",
      "Refer a tow, earn a commission — here's the process",
      "Join 200+ Phoenix partners in the Axle referral program",
    ],
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
  },
  {
    sequenceType: "mechanic-partner",
    sequenceName: "Mechanic Partner",
    description: "3-email sequence for mechanic shops — tow-to-shop partnership program.",
    emailCount: 3,
    dayOffsets: [0, 5, 14],
    subjects: [
      "Get customers to your shop faster with Axle Towing",
      "Tow-to-shop service: how it works for your customers",
      "Ready to partner? Here's your next step",
    ],
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
  },
  {
    sequenceType: "vehicle-retrieval",
    sequenceName: "Vehicle Owner Retrieval",
    description: "2-email sequence for towed vehicle owners — retrieval instructions and follow-up.",
    emailCount: 2,
    dayOffsets: [0, 1],
    subjects: [
      "Your vehicle has been towed — here's how to retrieve it",
      "Reminder: Retrieve your vehicle — gate directions & payment info",
    ],
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
  },
];

// Mock active drip data
interface ActiveDrip {
  email: string;
  name: string;
  sequenceType: SequenceType;
  enrolledAt: string;
  totalEmails: number;
  sentEmails: number;
  nextSendAt: string | null;
}

const mockActiveDrips: ActiveDrip[] = [
  {
    email: "manager@coppercreek.com",
    name: "Sarah Johnson",
    sequenceType: "pm-nurture",
    enrolledAt: "2026-03-20T16:00:00Z",
    totalEmails: 5,
    sentEmails: 2,
    nextSendAt: "2026-03-27T16:00:00Z",
  },
  {
    email: "dispatch@quickkeys.com",
    name: "Mike Torres",
    sequenceType: "locksmith-partner",
    enrolledAt: "2026-03-22T16:00:00Z",
    totalEmails: 3,
    sentEmails: 1,
    nextSendAt: "2026-03-27T16:00:00Z",
  },
];

// Mock stats
const stats = {
  totalTemplates: 13,
  activeSequences: 2,
  emailsSent: 47,
  openRate: "34.2%",
  clickRate: "12.8%",
};

export default function CampaignsPage() {
  const [expandedSequence, setExpandedSequence] = useState<SequenceType | null>(null);
  const [previewSubject, setPreviewSubject] = useState<string | null>(null);

  return (
    <>
      <PageHeader
        badge="Email Marketing"
        title="Campaigns"
        subtitle="Nurture sequences, partner outreach, and automated email campaigns for Axle Towing."
      />

      {/* Stats Row */}
      <ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="glass-card p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Templates</p>
            <p className="text-3xl font-bold font-display text-brand-blue mt-1">{stats.totalTemplates}</p>
          </div>
          <div className="glass-card p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Active Sequences</p>
            <p className="text-3xl font-bold font-display text-green-600 mt-1">{stats.activeSequences}</p>
          </div>
          <div className="glass-card p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Emails Sent</p>
            <p className="text-3xl font-bold font-display text-gray-900 mt-1">{stats.emailsSent}</p>
          </div>
          <div className="glass-card p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Open Rate</p>
            <p className="text-3xl font-bold font-display text-amber-500 mt-1">{stats.openRate}</p>
          </div>
          <div className="glass-card p-5 col-span-2 md:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Click Rate</p>
            <p className="text-3xl font-bold font-display text-purple-600 mt-1">{stats.clickRate}</p>
          </div>
        </div>
      </ScrollReveal>

      {/* Email Template Library */}
      <ScrollReveal delay={100}>
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Template Library
          </h2>

          <div className="space-y-4">
            {sequences.map((seq) => {
              const isExpanded = expandedSequence === seq.sequenceType;
              return (
                <div key={seq.sequenceType} className={`rounded-2xl border ${seq.borderColor} ${seq.bgColor} shadow-sm overflow-hidden`}>
                  <button
                    onClick={() => setExpandedSequence(isExpanded ? null : seq.sequenceType)}
                    className="w-full text-left p-5 flex items-start gap-4"
                  >
                    <div className={`w-10 h-10 rounded-xl ${seq.bgColor} border ${seq.borderColor} flex items-center justify-center flex-shrink-0`}>
                      <svg className={`w-5 h-5 ${seq.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={seq.icon} />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-base font-semibold text-gray-900">{seq.sequenceName}</h3>
                        <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${seq.borderColor} ${seq.color}`}>
                          {seq.emailCount} emails
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{seq.description}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                        <span>Days: {seq.dayOffsets.join(" → ")}</span>
                        <span>Duration: {seq.dayOffsets[seq.dayOffsets.length - 1]} days</span>
                      </div>
                    </div>
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 mt-1 ${isExpanded ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 border-t border-white/50">
                      <div className="mt-4 space-y-2">
                        {seq.subjects.map((subject, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-white hover:border-gray-200 transition-colors cursor-pointer"
                            onClick={() => setPreviewSubject(previewSubject === subject ? null : subject)}
                          >
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center">
                              <span className="text-xs font-bold text-gray-500">D{seq.dayOffsets[idx]}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">{subject}</p>
                              <p className="text-xs text-gray-500">Sends on day {seq.dayOffsets[idx]}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Preview</span>
                              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      {/* Active Drip Sequences */}
      <ScrollReveal delay={200}>
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Active Drip Sequences
          </h2>

          {mockActiveDrips.length === 0 ? (
            <div className="glass-card p-8 text-center">
              <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-500 text-sm">No active drip sequences yet. Enroll leads via the API to get started.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {mockActiveDrips.map((drip, idx) => {
                const seq = sequences.find((s) => s.sequenceType === drip.sequenceType);
                const progress = Math.round((drip.sentEmails / drip.totalEmails) * 100);
                return (
                  <div key={idx} className="glass-card p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-sm font-semibold text-gray-900">{drip.name}</h3>
                          <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${seq?.borderColor || "border-gray-200"} ${seq?.color || "text-gray-600"}`}>
                            {seq?.sequenceName || drip.sequenceType}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">{drip.email}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-gray-900">{drip.sentEmails}/{drip.totalEmails} sent</p>
                        <p className="text-xs text-gray-500">
                          {drip.nextSendAt
                            ? `Next: ${new Date(drip.nextSendAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}`
                            : "Complete"}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                          className="bg-brand-blue rounded-full h-2 transition-all duration-500"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </ScrollReveal>

      {/* API Integration Guide */}
      <ScrollReveal delay={300}>
        <div className="glass-card p-6">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            API Integration
          </h2>

          <div className="space-y-4">
            <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Enroll a lead into a drip sequence:</h3>
              <pre className="text-xs text-gray-600 bg-white rounded-lg p-3 border border-gray-100 overflow-x-auto">
{`POST /api/drip
{
  "email": "manager@property.com",
  "name": "Jane Smith",
  "sequenceType": "pm-nurture",
  "metadata": {
    "propertyName": "Sunset Apartments"
  }
}`}
              </pre>
            </div>

            <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Check enrollment status:</h3>
              <pre className="text-xs text-gray-600 bg-white rounded-lg p-3 border border-gray-100 overflow-x-auto">
{`GET /api/drip?email=manager@property.com`}
              </pre>
            </div>

            <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Trigger scheduled sends (cron):</h3>
              <pre className="text-xs text-gray-600 bg-white rounded-lg p-3 border border-gray-100 overflow-x-auto">
{`GET /api/drip/send
Authorization: Bearer {CRON_SECRET}`}
              </pre>
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              <span className="text-xs px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-medium">pm-nurture (5 emails)</span>
              <span className="text-xs px-3 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-600 font-medium">locksmith-partner (3 emails)</span>
              <span className="text-xs px-3 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-600 font-medium">mechanic-partner (3 emails)</span>
              <span className="text-xs px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 font-medium">vehicle-retrieval (2 emails)</span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
