"use client";

import { useState, useEffect, useCallback } from "react";
import ScrollReveal from "../../components/ScrollReveal";
import PageHeader from "../../components/PageHeader";
import { deliverables, suggestions } from "../../data/site-data";

// ─── Types ───────────────────────────────────────────────────────────────────

type FeedbackType = "comment" | "suggestion" | "reaction";
type FeedbackStatus = "new" | "reviewed" | "in-progress" | "completed";
type Priority = "low" | "medium" | "high";

interface FeedbackItem {
  id: string;
  type: FeedbackType;
  text: string;
  priority: Priority;
  status: FeedbackStatus;
  page: string;
  createdAt: string;
  reaction?: "up" | "down";
}

type FilterTab = "all" | "comment" | "suggestion" | "reaction";

// ─── Constants ───────────────────────────────────────────────────────────────

const STORAGE_KEY = "axle-feedback-items";

// The website API handles email + SMS + webhook notifications
const NOTIFY_API_URL =
  process.env.NEXT_PUBLIC_NOTIFY_API_URL ||
  "https://axletowing.com/api/dashboard-notify";

const relatedPages = [
  "General / No specific page",
  ...deliverables.map((d) => d.item),
  ...suggestions.map((s) => s.title),
];

const statusConfig: Record<FeedbackStatus, { bg: string; text: string; label: string }> = {
  new: { bg: "bg-blue-50 border-blue-200", text: "text-blue-700", label: "New" },
  reviewed: { bg: "bg-purple-50 border-purple-200", text: "text-purple-700", label: "Reviewed" },
  "in-progress": { bg: "bg-amber-50 border-amber-200", text: "text-amber-700", label: "In Progress" },
  completed: { bg: "bg-green-50 border-green-200", text: "text-green-700", label: "Completed" },
};

const priorityConfig: Record<Priority, { bg: string; text: string; label: string }> = {
  low: { bg: "bg-gray-50 border-gray-200", text: "text-gray-600", label: "Low" },
  medium: { bg: "bg-blue-50 border-blue-200", text: "text-blue-600", label: "Medium" },
  high: { bg: "bg-red-50 border-red-200", text: "text-red-600", label: "High" },
};

const filterTabs: { key: FilterTab; label: string }[] = [
  { key: "all", label: "All" },
  { key: "comment", label: "Comments" },
  { key: "suggestion", label: "Suggestions" },
  { key: "reaction", label: "Reactions" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function FeedbackPage() {
  const [items, setItems] = useState<FeedbackItem[]>([]);
  const [filter, setFilter] = useState<FilterTab>("all");
  const [toast, setToast] = useState<string | null>(null);

  // Form state
  const [formType, setFormType] = useState<"comment" | "suggestion">("comment");
  const [formText, setFormText] = useState("");
  const [formPriority, setFormPriority] = useState<Priority>("medium");
  const [formPage, setFormPage] = useState(relatedPages[0]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch {
        // ignore corrupt data
      }
    }
  }, []);

  const persist = useCallback((updated: FeedbackItem[]) => {
    setItems(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }, []);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  // ─── Notify Team (email + SMS + webhook via website API) ─────────────────

  const notifyTeam = async (item: FeedbackItem) => {
    try {
      const res = await fetch(NOTIFY_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: item.type,
          text: item.text,
          priority: item.priority,
          relatedPage: item.page,
          reaction: item.reaction || null,
          createdAt: item.createdAt,
        }),
      });
      if (res.ok) {
        // Show a secondary toast confirming team was notified
        setTimeout(() => showToast("Team notified via email & SMS"), 1200);
      }
    } catch {
      // Notification failed silently — feedback is still saved locally
      console.warn("Team notification failed — feedback saved locally only");
    }
  };

  // ─── Actions ─────────────────────────────────────────────────────────────

  const submitFeedback = () => {
    if (!formText.trim()) return;
    const newItem: FeedbackItem = {
      id: Date.now().toString(),
      type: formType,
      text: formText.trim(),
      priority: formType === "suggestion" ? formPriority : "medium",
      status: "new",
      page: formPage,
      createdAt: new Date().toISOString(),
    };
    persist([newItem, ...items]);
    setFormText("");
    showToast(formType === "comment" ? "Comment submitted!" : "Suggestion submitted!");
    // Fire-and-forget notification to the team
    notifyTeam(newItem);
  };

  const addReaction = (page: string, reaction: "up" | "down") => {
    const newItem: FeedbackItem = {
      id: Date.now().toString(),
      type: "reaction",
      text: reaction === "up" ? "Thumbs up" : "Thumbs down",
      priority: "medium",
      status: "new",
      page,
      createdAt: new Date().toISOString(),
      reaction,
    };
    persist([newItem, ...items]);
    showToast(reaction === "up" ? "Thanks for the thumbs up!" : "Noted -- we will improve this.");
    // Fire-and-forget notification to the team
    notifyTeam(newItem);
  };

  const deleteItem = (id: string) => {
    persist(items.filter((i) => i.id !== id));
    showToast("Item removed");
  };

  // ─── Derived ─────────────────────────────────────────────────────────────

  const filtered = filter === "all" ? items : items.filter((i) => i.type === filter);
  const newCount = items.filter((i) => i.status === "new").length;
  const commentCount = items.filter((i) => i.type === "comment").length;
  const suggestionCount = items.filter((i) => i.type === "suggestion").length;
  const reactionCount = items.filter((i) => i.type === "reaction").length;

  const tabCount = (key: FilterTab) => {
    if (key === "all") return items.length;
    if (key === "comment") return commentCount;
    if (key === "suggestion") return suggestionCount;
    return reactionCount;
  };

  // ─── Render ──────────────────────────────────────────────────────────────

  return (
    <>
      <PageHeader
        badge="Feedback"
        title="Comments & Suggestions"
        subtitle="Leave comments on deliverables, submit feature requests, and track your feedback."
      />

      {/* Toast */}
      {toast && (
        <div className="fixed top-6 right-6 z-50 animate-slide-up">
          <div className="bg-green-600 text-white text-sm font-medium px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {toast}
          </div>
        </div>
      )}

      {/* ── Summary Cards ──────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="glass-card p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Total Items</p>
            <p className="text-3xl font-bold font-display text-brand-blue mt-1">{items.length}</p>
          </div>
          <div className="glass-card p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">New / Unread</p>
            <p className="text-3xl font-bold font-display text-blue-600 mt-1">{newCount}</p>
          </div>
          <div className="glass-card p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Comments</p>
            <p className="text-3xl font-bold font-display text-emerald-600 mt-1">{commentCount}</p>
          </div>
          <div className="glass-card p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Suggestions</p>
            <p className="text-3xl font-bold font-display text-amber-600 mt-1">{suggestionCount}</p>
          </div>
        </div>
      </ScrollReveal>

      {/* ── Submit Form ────────────────────────────────────────────────── */}
      <ScrollReveal delay={50}>
        <div className="glass-card p-6 mb-8">
          <h2 className="text-lg font-bold font-display text-gray-900 mb-4">Submit Feedback</h2>

          {/* Type toggle */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setFormType("comment")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                formType === "comment"
                  ? "bg-brand-blue text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Comment
            </button>
            <button
              onClick={() => setFormType("suggestion")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                formType === "suggestion"
                  ? "bg-brand-blue text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Suggestion / Feature Request
            </button>
          </div>

          {/* Related page dropdown */}
          <div className="mb-4">
            <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1.5">
              Related To
            </label>
            <select
              value={formPage}
              onChange={(e) => setFormPage(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-brand-blue transition-colors"
            >
              {relatedPages.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          {/* Priority selector (suggestion only) */}
          {formType === "suggestion" && (
            <div className="mb-4">
              <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1.5">
                Priority
              </label>
              <div className="flex gap-2">
                {(["low", "medium", "high"] as Priority[]).map((p) => (
                  <button
                    key={p}
                    onClick={() => setFormPriority(p)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors capitalize ${
                      formPriority === p
                        ? `${priorityConfig[p].bg} ${priorityConfig[p].text} border-current`
                        : "bg-white border-gray-200 text-gray-500 hover:border-gray-300"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Text input */}
          <div className="mb-4">
            <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1.5">
              {formType === "comment" ? "Your Comment" : "Describe your suggestion"}
            </label>
            <textarea
              value={formText}
              onChange={(e) => setFormText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) submitFeedback();
              }}
              rows={3}
              placeholder={
                formType === "comment"
                  ? "Share your thoughts on a deliverable, article, or page..."
                  : "Describe the feature or change you'd like to see..."
              }
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-blue transition-colors resize-none"
            />
            <p className="text-[10px] text-gray-400 mt-1">Press Cmd+Enter or Ctrl+Enter to submit</p>
          </div>

          <button
            onClick={submitFeedback}
            disabled={!formText.trim()}
            className="bg-brand-blue hover:bg-brand-blue-dark disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors"
          >
            Submit {formType === "comment" ? "Comment" : "Suggestion"}
          </button>
        </div>
      </ScrollReveal>

      {/* ── Quick Reactions on Deliverables ─────────────────────────────── */}
      <ScrollReveal delay={100}>
        <div className="glass-card p-6 mb-8">
          <h2 className="text-lg font-bold font-display text-gray-900 mb-1">Quick Reactions</h2>
          <p className="text-sm text-gray-500 mb-4">
            Thumbs up or down on delivered items -- helps us know what you love and what needs work.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {deliverables.map((d) => {
              const ups = items.filter((i) => i.type === "reaction" && i.page === d.item && i.reaction === "up").length;
              const downs = items.filter((i) => i.type === "reaction" && i.page === d.item && i.reaction === "down").length;
              return (
                <div
                  key={d.item}
                  className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 border border-gray-100"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{d.item}</p>
                    <p className="text-xs text-gray-400">{d.count} delivered</p>
                  </div>
                  <div className="flex items-center gap-2 ml-3">
                    <button
                      onClick={() => addReaction(d.item, "up")}
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-green-50 border border-green-200 text-green-700 hover:bg-green-100 transition-colors text-xs font-medium"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      {ups > 0 && ups}
                    </button>
                    <button
                      onClick={() => addReaction(d.item, "down")}
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-red-50 border border-red-200 text-red-600 hover:bg-red-100 transition-colors text-xs font-medium"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                      </svg>
                      {downs > 0 && downs}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      {/* ── Feedback Feed ──────────────────────────────────────────────── */}
      <ScrollReveal delay={150}>
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold font-display text-gray-900">Your Feedback</h2>
            {newCount > 0 && (
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-200">
                {newCount} new
              </span>
            )}
          </div>

          {/* Filter tabs */}
          <div className="flex gap-1 mb-5 border-b border-gray-100 pb-3">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  filter === tab.key
                    ? "bg-brand-blue text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                {tab.label}
                {tabCount(tab.key) > 0 && (
                  <span className={`ml-1.5 text-[10px] ${filter === tab.key ? "text-white/80" : "text-gray-400"}`}>
                    ({tabCount(tab.key)})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Feed */}
          {filtered.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <p className="text-sm text-gray-400">No feedback yet. Submit a comment or suggestion above!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((item) => {
                const status = statusConfig[item.status];
                const priority = priorityConfig[item.priority];
                return (
                  <div
                    key={item.id}
                    className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-gray-200 transition-colors group"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        {/* Badges row */}
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          {/* Type badge */}
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                            item.type === "comment"
                              ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                              : item.type === "suggestion"
                              ? "bg-amber-50 border-amber-200 text-amber-700"
                              : "bg-pink-50 border-pink-200 text-pink-700"
                          }`}>
                            {item.type === "reaction" && item.reaction === "up" ? "Thumbs Up" : item.type === "reaction" && item.reaction === "down" ? "Thumbs Down" : item.type}
                          </span>
                          {/* Status badge */}
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${status.bg} ${status.text}`}>
                            {status.label}
                          </span>
                          {/* Priority badge (suggestions only) */}
                          {item.type === "suggestion" && (
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${priority.bg} ${priority.text}`}>
                              {priority.label} priority
                            </span>
                          )}
                        </div>
                        {/* Text */}
                        <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
                        {/* Meta */}
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-[10px] text-gray-400">
                            {new Date(item.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" })}
                          </span>
                          <span className="text-[10px] text-gray-300">|</span>
                          <span className="text-[10px] text-gray-400 truncate">{item.page}</span>
                        </div>
                      </div>
                      {/* Delete button */}
                      <button
                        onClick={() => deleteItem(item.id)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-red-500 p-1"
                        title="Remove"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </ScrollReveal>
    </>
  );
}
