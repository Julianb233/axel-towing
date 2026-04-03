"use client";

import { useState } from "react";
import {
  CAMPAIGNS,
  LINKEDIN_TEMPLATES,
  INSTAGRAM_TEMPLATES,
  FACEBOOK_TEMPLATES,
  WEEKLY_SCHEDULE,
  TARGET_PERSONAS,
} from "@/lib/data/social-outreach";

// ---------- Helpers ----------

const PLATFORM_COLORS: Record<string, string> = {
  linkedin: "bg-blue-600",
  instagram: "bg-pink-600",
  facebook: "bg-indigo-600",
};

const PLATFORM_LABELS: Record<string, string> = {
  linkedin: "LinkedIn",
  instagram: "Instagram",
  facebook: "Facebook",
};

const STATUS_COLORS: Record<string, string> = {
  active: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
  paused: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
  draft: "bg-gray-500/20 text-gray-400 border border-gray-500/30",
};

// ---------- CopyButton ----------

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback for older browsers
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="text-xs px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

// ---------- TemplateCard ----------

function TemplateCard({
  label,
  platform,
  body,
  variables,
}: {
  label: string;
  platform: string;
  body: string;
  variables: string[];
}) {
  return (
    <div className="bg-white/5 rounded-xl border border-white/10 p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className={`text-xs font-semibold px-2 py-0.5 rounded-full text-white ${PLATFORM_COLORS[platform] ?? "bg-gray-600"}`}
          >
            {PLATFORM_LABELS[platform] ?? platform}
          </span>
          <span className="text-sm font-medium text-white">{label}</span>
        </div>
        <CopyButton text={body} />
      </div>
      <p className="text-sm text-white/70 leading-relaxed whitespace-pre-wrap">{body}</p>
      {variables.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {variables.map((v) => (
            <span
              key={v}
              className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30"
            >
              [{v}]
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// ---------- CampaignCard ----------

function CampaignCard({ campaign }: { campaign: (typeof CAMPAIGNS)[number] }) {
  const conversionRate =
    campaign.metrics.sent > 0
      ? ((campaign.metrics.converted / campaign.metrics.sent) * 100).toFixed(1)
      : "0.0";
  const replyRate =
    campaign.metrics.sent > 0
      ? ((campaign.metrics.replied / campaign.metrics.sent) * 100).toFixed(1)
      : "0.0";

  return (
    <div className="bg-white/5 rounded-xl border border-white/10 p-5 space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span
              className={`w-2.5 h-2.5 rounded-full ${PLATFORM_COLORS[campaign.platform] ?? "bg-gray-500"}`}
            />
            <h3 className="font-semibold text-white text-sm">{campaign.name}</h3>
          </div>
          <span className={`text-xs px-2 py-0.5 rounded-full ${STATUS_COLORS[campaign.status]}`}>
            {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
          </span>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-white">{campaign.weeklyTarget}</p>
          <p className="text-xs text-white/50">per week</p>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-3 pt-2 border-t border-white/10">
        <div className="text-center">
          <p className="text-lg font-semibold text-white">{campaign.metrics.sent}</p>
          <p className="text-xs text-white/50">Sent</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold text-emerald-400">{replyRate}%</p>
          <p className="text-xs text-white/50">Reply Rate</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold text-amber-400">{conversionRate}%</p>
          <p className="text-xs text-white/50">Converted</p>
        </div>
      </div>

      {/* Templates count */}
      <p className="text-xs text-white/40">
        {campaign.templates.length} message template{campaign.templates.length !== 1 ? "s" : ""} in
        sequence
      </p>
    </div>
  );
}

// ---------- Main Component ----------

export default function OutreachContent() {
  const [activeTab, setActiveTab] = useState<"campaigns" | "templates" | "schedule" | "personas">(
    "campaigns"
  );

  const allTemplates = [
    ...Object.values(LINKEDIN_TEMPLATES),
    ...Object.values(INSTAGRAM_TEMPLATES),
    ...Object.values(FACEBOOK_TEMPLATES),
  ];

  const tabs = [
    { id: "campaigns" as const, label: "Campaigns" },
    { id: "templates" as const, label: "Templates" },
    { id: "schedule" as const, label: "Schedule" },
    { id: "personas" as const, label: "Personas" },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-white/5">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-red-400">
                  Internal Tool
                </span>
              </div>
              <h1 className="text-2xl font-bold text-white">Social Media Outreach</h1>
              <p className="text-sm text-white/60 mt-1">
                Multi-channel campaign dashboard for HOA board members and property managers
              </p>
            </div>
            <a
              href="/outreach-templates.md"
              download
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Templates
            </a>
          </div>

          {/* Summary stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <p className="text-2xl font-bold text-white">
                {CAMPAIGNS.reduce((sum, c) => sum + c.weeklyTarget, 0)}
              </p>
              <p className="text-xs text-white/50 mt-0.5">Total messages/week</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <p className="text-2xl font-bold text-white">{CAMPAIGNS.length}</p>
              <p className="text-xs text-white/50 mt-0.5">Active campaigns</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <p className="text-2xl font-bold text-white">{allTemplates.length}</p>
              <p className="text-xs text-white/50 mt-0.5">Message templates</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex gap-1 border-b border-white/10 mt-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-sm font-medium transition-colors border-b-2 -mb-px ${
                activeTab === tab.id
                  ? "border-red-500 text-white"
                  : "border-transparent text-white/50 hover:text-white/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="py-6">
          {/* Campaigns Tab */}
          {activeTab === "campaigns" && (
            <div className="space-y-4">
              <p className="text-sm text-white/50">
                3 active campaigns across LinkedIn, Facebook, and Instagram. Weekly targets shown
                per campaign.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {CAMPAIGNS.map((campaign) => (
                  <CampaignCard key={campaign.id} campaign={campaign} />
                ))}
              </div>
            </div>
          )}

          {/* Templates Tab */}
          {activeTab === "templates" && (
            <div className="space-y-4">
              <p className="text-sm text-white/50">
                Click &ldquo;Copy&rdquo; on any template to copy it to your clipboard. Replace all{" "}
                <span className="text-amber-300 font-mono">[VARIABLES]</span> before sending.
              </p>
              <div className="space-y-3">
                {allTemplates.map((t) => (
                  <TemplateCard
                    key={t.id}
                    label={t.label}
                    platform={t.platform}
                    body={t.body}
                    variables={t.variables}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Schedule Tab */}
          {activeTab === "schedule" && (
            <div className="space-y-4">
              <p className="text-sm text-white/50">
                Recommended daily outreach cadence to hit weekly targets without triggering spam
                filters.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 pr-4 text-white/60 font-medium">Day</th>
                      <th className="text-left py-3 pr-4 text-white/60 font-medium">
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-blue-600" />
                          LinkedIn
                        </span>
                      </th>
                      <th className="text-left py-3 pr-4 text-white/60 font-medium">
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-pink-600" />
                          Instagram
                        </span>
                      </th>
                      <th className="text-left py-3 text-white/60 font-medium">
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-indigo-600" />
                          Facebook
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {WEEKLY_SCHEDULE.map((day) => {
                      const li = day.tasks.find((t) => t.platform === "linkedin");
                      const ig = day.tasks.find((t) => t.platform === "instagram");
                      const fb = day.tasks.find((t) => t.platform === "facebook");
                      return (
                        <tr key={day.day} className="border-b border-white/5">
                          <td className="py-3 pr-4 font-semibold text-white">{day.day}</td>
                          <td className="py-3 pr-4 text-white/70">
                            {li ? (
                              <span>
                                <span className="font-semibold text-white">{li.count}</span> —{" "}
                                {li.action}
                              </span>
                            ) : (
                              "—"
                            )}
                          </td>
                          <td className="py-3 pr-4 text-white/70">
                            {ig ? (
                              <span>
                                <span className="font-semibold text-white">{ig.count}</span> —{" "}
                                {ig.action}
                              </span>
                            ) : (
                              "—"
                            )}
                          </td>
                          <td className="py-3 text-white/70">
                            {fb ? (
                              <span>
                                <span className="font-semibold text-white">{fb.count}</span> —{" "}
                                {fb.action}
                              </span>
                            ) : (
                              "—"
                            )}
                          </td>
                        </tr>
                      );
                    })}
                    {/* Totals row */}
                    <tr className="border-t border-white/20 bg-white/5">
                      <td className="py-3 pr-4 font-bold text-white">Weekly Total</td>
                      <td className="py-3 pr-4 font-bold text-blue-400">50</td>
                      <td className="py-3 pr-4 font-bold text-pink-400">30</td>
                      <td className="py-3 font-bold text-indigo-400">20</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Personas Tab */}
          {activeTab === "personas" && (
            <div className="space-y-4">
              <p className="text-sm text-white/50">
                Target audience profiles to help personalize outreach and find the right prospects.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {TARGET_PERSONAS.map((persona) => (
                  <div
                    key={persona.id}
                    className="bg-white/5 rounded-xl border border-white/10 p-5 space-y-4"
                  >
                    <div>
                      <h3 className="font-semibold text-white">{persona.label}</h3>
                      <p className="text-xs text-white/60 mt-1 leading-relaxed">
                        {persona.description}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                        Pain Points
                      </p>
                      <ul className="space-y-1">
                        {persona.painPoints.map((p) => (
                          <li key={p} className="text-xs text-white/70 flex items-start gap-2">
                            <span className="text-red-400 mt-0.5">•</span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                        Platforms
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {persona.platforms.map((p) => (
                          <span
                            key={p}
                            className={`text-xs px-2 py-0.5 rounded-full text-white ${PLATFORM_COLORS[p]}`}
                          >
                            {PLATFORM_LABELS[p]}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1 pt-2 border-t border-white/10">
                      <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                        Key Message
                      </p>
                      <p className="text-xs text-amber-300 italic">&ldquo;{persona.messagingAngle}&rdquo;</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
