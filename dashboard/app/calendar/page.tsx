"use client";

import { useState } from "react";
import {
  contentCalendar,
  type ContentItem,
  type ContentStatus,
  type ContentType,
  type ContentPlatform,
} from "@/data/content-calendar";

const statusConfig: Record<ContentStatus, { label: string; color: string; dot: string }> = {
  draft: { label: "Draft", color: "bg-gray-100 text-gray-600 border-gray-200", dot: "bg-gray-400" },
  "pending-approval": { label: "Needs Approval", color: "bg-amber-50 text-amber-700 border-amber-200", dot: "bg-amber-400" },
  approved: { label: "Approved", color: "bg-emerald-50 text-emerald-700 border-emerald-200", dot: "bg-emerald-400" },
  scheduled: { label: "Scheduled", color: "bg-blue-50 text-blue-700 border-blue-200", dot: "bg-blue-400" },
  published: { label: "Published", color: "bg-emerald-50 text-emerald-700 border-emerald-200", dot: "bg-emerald-500" },
  rejected: { label: "Rejected", color: "bg-rose-50 text-rose-700 border-rose-200", dot: "bg-rose-400" },
};

const typeIcons: Record<ContentType, string> = {
  "blog-article": "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z",
  "social-post": "M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z",
  "email-campaign": "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
  video: "M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z",
  infographic: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
  "case-study": "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
  ebook: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
  "press-release": "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z",
};

const platformLabels: Record<ContentPlatform, string> = {
  website: "Website",
  instagram: "Instagram",
  facebook: "Facebook",
  linkedin: "LinkedIn",
  twitter: "X/Twitter",
  email: "Email",
  youtube: "YouTube",
  tiktok: "TikTok",
  "google-business": "Google Business",
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function ContentCard({ item, onApprove }: { item: ContentItem; onApprove?: (id: string, action: "approve" | "reject", note?: string) => void }) {
  const config = statusConfig[item.status];
  const [loading, setLoading] = useState(false);
  const [showNoteInput, setShowNoteInput] = useState(false);
  const [noteText, setNoteText] = useState("");
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  async function handleAction(action: "approve" | "reject", clientNote?: string) {
    setLoading(true);
    setToast(null);
    try {
      const res = await fetch("/api/content-approve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: item.id, action, clientNote }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to update");
      onApprove?.(item.id, action, clientNote);
      setToast({ message: action === "approve" ? "Approved!" : "Changes requested", type: "success" });
      setShowNoteInput(false);
      setNoteText("");
    } catch (err) {
      setToast({ message: err instanceof Error ? err.message : "Something went wrong", type: "error" });
    } finally {
      setLoading(false);
      setTimeout(() => setToast(null), 3000);
    }
  }

  return (
    <div className="p-3 rounded-xl bg-gray-50">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center flex-shrink-0 mt-0.5 border border-gray-100">
          <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d={typeIcons[item.type]} />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            {item.previewUrl || item.liveUrl ? (
              <a
                href={item.liveUrl || item.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-brand-blue hover:text-brand-blue-dark underline"
              >
                {item.title}
              </a>
            ) : (
              <p className="text-sm font-medium text-gray-900">{item.title}</p>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-1">{item.description}</p>
          <div className="flex items-center gap-2 flex-wrap mt-2">
            <span className="text-[10px] text-gray-400">{formatDate(item.scheduledDate)}</span>
            <span className="text-[10px] text-gray-300">|</span>
            <span className="text-[10px] text-gray-400">{platformLabels[item.platform]}</span>
            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium border ${config.color}`}>
              {config.label}
            </span>
          </div>

          {item.targetKeywords && item.targetKeywords.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {item.targetKeywords.map((kw) => (
                <span key={kw} className="px-1.5 py-0.5 rounded text-[9px] bg-blue-50 text-blue-600 border border-blue-100">
                  {kw}
                </span>
              ))}
            </div>
          )}

          {toast && (
            <div className={`mt-2 px-3 py-1.5 rounded-lg text-xs font-medium ${toast.type === "success" ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`}>
              {toast.message}
            </div>
          )}

          {item.status === "pending-approval" && (
            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-2">
                <button
                  disabled={loading}
                  onClick={() => handleAction("approve")}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-500 text-white text-xs font-medium hover:bg-emerald-600 transition-colors min-h-[36px] disabled:opacity-50"
                >
                  Approve
                </button>
                <button
                  disabled={loading}
                  onClick={() => setShowNoteInput(!showNoteInput)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-rose-500 text-white text-xs font-medium hover:bg-rose-600 transition-colors min-h-[36px] disabled:opacity-50"
                >
                  Request Changes
                </button>
              </div>
              {showNoteInput && (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    placeholder="What changes are needed?"
                    className="flex-1 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-brand-blue"
                  />
                  <button
                    disabled={loading || !noteText.trim()}
                    onClick={() => handleAction("reject", noteText.trim())}
                    className="px-3 py-1.5 rounded-lg bg-rose-500 text-white text-xs font-medium hover:bg-rose-600 transition-colors disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CalendarPage() {
  const [view, setView] = useState<"timeline" | "needs-approval">("timeline");
  const [localOverrides, setLocalOverrides] = useState<Record<string, { status: ContentStatus; clientNote?: string }>>({});

  function getEffectiveItem(item: ContentItem): ContentItem {
    const override = localOverrides[item.id];
    if (override) {
      return { ...item, status: override.status, clientNote: override.clientNote || item.clientNote };
    }
    return item;
  }

  function handleApprove(id: string, action: "approve" | "reject", note?: string) {
    const newStatus: ContentStatus = action === "approve" ? "approved" : "rejected";
    setLocalOverrides((prev) => ({ ...prev, [id]: { status: newStatus, clientNote: note } }));
  }

  const effectiveCalendar = contentCalendar.map(getEffectiveItem);
  const needsApproval = effectiveCalendar.filter((c) => c.status === "pending-approval");
  const now = new Date();
  const cutoff = new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000);
  const upcoming = effectiveCalendar
    .filter((c) => {
      const d = new Date(c.scheduledDate);
      return d >= now && d <= cutoff && c.status !== "published";
    })
    .sort((a, b) => new Date(a.scheduledDate).getTime() - new Date(b.scheduledDate).getTime());

  const grouped = upcoming.reduce<Record<string, ContentItem[]>>((acc, item) => {
    const month = new Date(item.scheduledDate).toLocaleDateString("en-US", { year: "numeric", month: "long" });
    if (!acc[month]) acc[month] = [];
    acc[month].push(item);
    return acc;
  }, {});

  const published = effectiveCalendar
    .filter((c) => c.status === "published")
    .sort((a, b) => new Date(b.scheduledDate).getTime() - new Date(a.scheduledDate).getTime());

  const stats = {
    total: effectiveCalendar.length,
    published: effectiveCalendar.filter((c) => c.status === "published").length,
    scheduled: effectiveCalendar.filter((c) => c.status === "scheduled" || c.status === "approved").length,
    pendingApproval: needsApproval.length,
    drafts: effectiveCalendar.filter((c) => c.status === "draft").length,
  };

  return (
    <div className="space-y-6">
      <div>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-blue text-white mb-3">
          {stats.total} items
        </span>
        <h1 className="text-2xl font-bold text-gray-900 font-display">Content Calendar</h1>
        <p className="text-sm text-gray-500 mt-1">Upcoming content, approval queue, and publishing schedule.</p>
      </div>

      {/* Stats */}
      <div className="glass-card p-5">
        <div className="flex items-center gap-4 sm:gap-6 text-sm flex-wrap">
          <div>
            <span className="text-2xl font-bold text-emerald-600">{stats.published}</span>
            <span className="text-gray-500 ml-1.5">published</span>
          </div>
          <div className="h-6 w-px bg-gray-200 hidden sm:block" />
          <div>
            <span className="text-2xl font-bold text-blue-600">{stats.scheduled}</span>
            <span className="text-gray-500 ml-1.5">scheduled</span>
          </div>
          {stats.pendingApproval > 0 && (
            <>
              <div className="h-6 w-px bg-gray-200 hidden sm:block" />
              <div>
                <span className="text-2xl font-bold text-amber-600">{stats.pendingApproval}</span>
                <span className="text-gray-500 ml-1.5">needs approval</span>
              </div>
            </>
          )}
          <div className="h-6 w-px bg-gray-200 hidden sm:block" />
          <div>
            <span className="text-2xl font-bold text-gray-400">{stats.drafts}</span>
            <span className="text-gray-500 ml-1.5">drafts</span>
          </div>
        </div>
      </div>

      {/* Needs Approval Banner */}
      {needsApproval.length > 0 && (
        <div className="glass-card border-amber-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              <h3 className="text-sm font-semibold text-amber-700">
                {needsApproval.length} item{needsApproval.length !== 1 ? "s" : ""} waiting for your approval
              </h3>
            </div>
            <button onClick={() => setView("needs-approval")} className="text-xs text-amber-600 hover:text-amber-700 underline">
              Review all
            </button>
          </div>
        </div>
      )}

      {/* View Toggle */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setView("timeline")}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors min-h-[36px] ${view === "timeline" ? "bg-brand-navy text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
        >
          Timeline
        </button>
        <button
          onClick={() => setView("needs-approval")}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors min-h-[36px] ${view === "needs-approval" ? "bg-brand-navy text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
        >
          Needs Approval {needsApproval.length > 0 && `(${needsApproval.length})`}
        </button>
      </div>

      {view === "timeline" && (
        <>
          {Object.entries(grouped).map(([month, items]) => (
            <div key={month} className="glass-card overflow-hidden">
              <div className="p-5 border-b border-gray-100">
                <h2 className="text-base font-semibold text-gray-900">{month}</h2>
                <p className="text-xs text-gray-400 mt-0.5">{items.length} item{items.length !== 1 ? "s" : ""}</p>
              </div>
              <div className="p-5 grid grid-cols-1 lg:grid-cols-2 gap-2">
                {items.map((item) => (
                  <ContentCard key={item.id} item={item} onApprove={handleApprove} />
                ))}
              </div>
            </div>
          ))}

          {published.length > 0 && (
            <div className="glass-card overflow-hidden border-emerald-200">
              <div className="p-5 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <h2 className="text-base font-semibold text-gray-900">Published</h2>
                  <span className="text-xs text-gray-400">({published.length})</span>
                </div>
              </div>
              <div className="p-5 grid grid-cols-1 lg:grid-cols-2 gap-2">
                {published.map((item) => (
                  <ContentCard key={item.id} item={item} onApprove={handleApprove} />
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {view === "needs-approval" && (
        <div className="glass-card overflow-hidden border-amber-200">
          <div className="p-5 border-b border-gray-100">
            <h2 className="text-base font-semibold text-gray-900">Approval Queue</h2>
            <p className="text-xs text-gray-400 mt-0.5">Review each item and approve or request changes.</p>
          </div>
          <div className="p-5 space-y-3">
            {needsApproval.length > 0 ? (
              needsApproval.map((item) => (
                <ContentCard key={item.id} item={item} onApprove={handleApprove} />
              ))
            ) : (
              <p className="text-sm text-gray-400 text-center py-8">Nothing needs approval right now.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
