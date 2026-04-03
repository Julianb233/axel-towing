"use client";

import { useState, useEffect, useCallback } from "react";
import PageHeader from "../../components/PageHeader";
import ScrollReveal from "../../components/ScrollReveal";
import { articles, Article, LOCAL_STORAGE_KEY } from "../../data/articles";

type ArticleStatus = "pending" | "approved" | "changes_requested";

interface ApprovalState {
  status: ArticleStatus;
  feedback: string;
}

export type ApprovalMap = Record<string, ApprovalState>;

const categoryColors: Record<string, string> = {
  "City Guide": "bg-blue-50 text-brand-blue border-blue-100",
  "Legal Guide": "bg-purple-50 text-purple-700 border-purple-100",
  "Cost Guide": "bg-amber-50 text-amber-700 border-amber-100",
  "Comparison": "bg-emerald-50 text-emerald-700 border-emerald-100",
  "Student Guide": "bg-pink-50 text-pink-700 border-pink-100",
  "Resource": "bg-cyan-50 text-cyan-700 border-cyan-100",
};

const statusConfig: Record<ArticleStatus, { label: string; color: string }> = {
  pending: { label: "Pending Review", color: "bg-amber-50 text-amber-700 border-amber-200" },
  approved: { label: "Approved", color: "bg-green-50 text-green-700 border-green-200" },
  changes_requested: { label: "Changes Requested", color: "bg-red-50 text-brand-red border-red-200" },
};

function getDefaultApprovals(): ApprovalMap {
  const initial: ApprovalMap = {};
  articles.forEach((a) => {
    initial[a.slug] = { status: "pending", feedback: "" };
  });
  return initial;
}

function loadApprovals(): ApprovalMap {
  if (typeof window === "undefined") return getDefaultApprovals();
  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as ApprovalMap;
      // Merge with defaults to handle new articles added after last save
      const defaults = getDefaultApprovals();
      return { ...defaults, ...parsed };
    }
  } catch {
    // Corrupted localStorage - reset
  }
  return getDefaultApprovals();
}

function saveApprovals(approvals: ApprovalMap) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(approvals));
    // Dispatch a storage event so Sidebar can pick up the change
    window.dispatchEvent(new Event("approvals-updated"));
  } catch {
    // localStorage full or unavailable
  }
}

export default function ArticlesPage() {
  const [approvals, setApprovals] = useState<ApprovalMap>(getDefaultApprovals);
  const [hydrated, setHydrated] = useState(false);

  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);
  const [feedbackArticle, setFeedbackArticle] = useState<string | null>(null);
  const [feedbackText, setFeedbackText] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | ArticleStatus>("all");
  const [savedMessage, setSavedMessage] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    setApprovals(loadApprovals());
    setHydrated(true);
  }, []);

  // Save to localStorage whenever approvals change (after hydration)
  useEffect(() => {
    if (hydrated) {
      saveApprovals(approvals);
    }
  }, [approvals, hydrated]);

  const counts = {
    total: articles.length,
    pending: Object.values(approvals).filter((a) => a.status === "pending").length,
    approved: Object.values(approvals).filter((a) => a.status === "approved").length,
    changes_requested: Object.values(approvals).filter((a) => a.status === "changes_requested").length,
  };

  const filteredArticles = filterStatus === "all"
    ? articles
    : articles.filter((a) => approvals[a.slug]?.status === filterStatus);

  function handleApprove(slug: string) {
    setApprovals((prev) => ({
      ...prev,
      [slug]: { status: "approved", feedback: "" },
    }));
    showSaved("Article approved!");
  }

  function handleRequestChanges(slug: string) {
    if (!feedbackText.trim()) return;
    setApprovals((prev) => ({
      ...prev,
      [slug]: { status: "changes_requested", feedback: feedbackText },
    }));
    setFeedbackArticle(null);
    setFeedbackText("");
    showSaved("Changes requested - feedback saved.");
  }

  function showSaved(msg: string) {
    setSavedMessage(msg);
    setTimeout(() => setSavedMessage(null), 3000);
  }

  const month1Articles = articles.filter((a) => a.publishMonth === 1);
  const month2Articles = articles.filter((a) => a.publishMonth === 2);

  return (
    <>
      <PageHeader
        badge="Content Review"
        title="Articles for Review"
        subtitle="Review, approve, or request changes on all articles written for Axle Towing."
      />

      {/* Saved notification */}
      {savedMessage && (
        <div className="fixed top-4 right-4 z-50 bg-green-600 text-white px-5 py-3 rounded-xl shadow-lg text-sm font-medium animate-fade-in">
          {savedMessage}
        </div>
      )}

      {/* Summary Stats */}
      <ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="stat-card" style={{ "--accent-color": "#1e6bb8" } as React.CSSProperties}>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Total Articles</p>
            <p className="text-3xl font-bold font-display text-gray-900 mt-1">{counts.total}</p>
          </div>
          <div className="stat-card" style={{ "--accent-color": "#d97706" } as React.CSSProperties}>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Pending Review</p>
            <p className="text-3xl font-bold font-display text-amber-600 mt-1">{counts.pending}</p>
          </div>
          <div className="stat-card" style={{ "--accent-color": "#16a34a" } as React.CSSProperties}>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Approved</p>
            <p className="text-3xl font-bold font-display text-green-600 mt-1">{counts.approved}</p>
          </div>
          <div className="stat-card" style={{ "--accent-color": "#dc3a30" } as React.CSSProperties}>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Changes Requested</p>
            <p className="text-3xl font-bold font-display text-brand-red mt-1">{counts.changes_requested}</p>
          </div>
        </div>
      </ScrollReveal>

      {/* Content Calendar */}
      <ScrollReveal delay={100}>
        <div className="glass-card p-8 mb-8">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-2">Content Calendar</h2>
          <p className="text-sm text-gray-500 mb-6">Publishing schedule for your SEO content campaign.</p>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="rounded-xl p-5 bg-blue-50 border border-blue-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-1">Month 1 - April</p>
              <p className="text-2xl font-bold font-display text-gray-900">{month1Articles.length} Articles</p>
              <p className="text-xs text-gray-500 mt-1">Written - publish after DNS migration</p>
              <div className="mt-3 space-y-1">
                {month1Articles.map((a) => (
                  <p key={a.slug} className="text-xs text-gray-600 truncate">- {a.targetKeyword}</p>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-5 bg-emerald-50 border border-emerald-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-1">Month 2 - May</p>
              <p className="text-2xl font-bold font-display text-gray-900">{month2Articles.length} Articles</p>
              <p className="text-xs text-gray-500 mt-1">Written - ready for review</p>
              <div className="mt-3 space-y-1">
                {month2Articles.slice(0, 5).map((a) => (
                  <p key={a.slug} className="text-xs text-gray-600 truncate">- {a.targetKeyword}</p>
                ))}
                {month2Articles.length > 5 && (
                  <p className="text-xs text-gray-400">+{month2Articles.length - 5} more</p>
                )}
              </div>
            </div>
            <div className="rounded-xl p-5 bg-gray-50 border border-gray-200">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Months 3-12</p>
              <p className="text-2xl font-bold font-display text-gray-900">98 Articles</p>
              <p className="text-xs text-gray-500 mt-1">Planned - Content Production Roadmap</p>
              <div className="mt-3">
                <p className="text-xs text-gray-500">48 city x service pages</p>
                <p className="text-xs text-gray-500">50 topical authority articles</p>
              </div>
            </div>
            <div className="rounded-xl p-5 bg-brand-navy text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-1">Cadence</p>
              <p className="text-2xl font-bold font-display">2/week</p>
              <p className="text-xs text-blue-200 mt-1">8 articles per month</p>
              <div className="mt-3 pt-3 border-t border-white/10">
                <p className="text-xs text-blue-200">Total planned: <span className="text-white font-semibold">113 articles</span></p>
                <p className="text-xs text-blue-200">Written so far: <span className="text-white font-semibold">15 articles</span></p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Filter Tabs */}
      <ScrollReveal delay={150}>
        <div className="flex gap-2 mb-6">
          {([
            { key: "all" as const, label: "All", count: counts.total },
            { key: "pending" as const, label: "Pending", count: counts.pending },
            { key: "approved" as const, label: "Approved", count: counts.approved },
            { key: "changes_requested" as const, label: "Changes Requested", count: counts.changes_requested },
          ]).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilterStatus(tab.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filterStatus === tab.key
                  ? "bg-brand-blue text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-brand-blue hover:text-brand-blue"
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Article Cards */}
      <div className="space-y-4">
        {filteredArticles.map((article, i) => {
          const approval = approvals[article.slug];
          const isExpanded = expandedArticle === article.slug;
          const isFeedbackOpen = feedbackArticle === article.slug;
          const status = statusConfig[approval?.status || "pending"];

          return (
            <ScrollReveal key={article.slug} delay={50 * Math.min(i, 6)}>
              <div className="glass-card overflow-hidden">
                <div className="p-6">
                  {/* Header row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold font-display text-gray-900 leading-tight">
                        {article.title}
                      </h3>
                    </div>
                    <span className={`flex-shrink-0 text-xs font-semibold px-3 py-1 rounded-full border ${status.color}`}>
                      {status.label}
                    </span>
                  </div>

                  {/* Metadata pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${categoryColors[article.category] || "bg-gray-50 text-gray-600 border-gray-200"}`}>
                      {article.category}
                    </span>
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-200">
                      {article.wordCount.toLocaleString()} words
                    </span>
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-brand-blue border border-blue-100">
                      KW: {article.targetKeyword}
                    </span>
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                      Vol: {article.searchVolume}/mo
                    </span>
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
                      KD: {article.keywordDifficulty}
                    </span>
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-200">
                      {article.publishMonth === 1 ? "April" : "May"} publish
                    </span>
                  </div>

                  {/* Preview */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{article.preview}</p>

                  {/* Feedback display */}
                  {approval?.status === "changes_requested" && approval.feedback && (
                    <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-100">
                      <p className="text-xs font-semibold text-red-600 mb-1">Your feedback:</p>
                      <p className="text-sm text-red-700">{approval.feedback}</p>
                    </div>
                  )}

                  {/* Action buttons */}
                  <div className="flex flex-wrap items-center gap-3">
                    {approval?.status === "pending" && (
                      <>
                        <button
                          onClick={() => handleApprove(article.slug)}
                          className="px-5 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition-all shadow-sm hover:shadow-md active:scale-95"
                        >
                          <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Approve
                          </span>
                        </button>
                        <button
                          onClick={() => {
                            setFeedbackArticle(isFeedbackOpen ? null : article.slug);
                            setFeedbackText("");
                          }}
                          className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition-all shadow-sm hover:shadow-md active:scale-95"
                        >
                          <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            Request Changes
                          </span>
                        </button>
                      </>
                    )}
                    {approval?.status === "approved" && (
                      <button
                        onClick={() => setApprovals((prev) => ({ ...prev, [article.slug]: { status: "pending", feedback: "" } }))}
                        className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm font-medium transition-all"
                      >
                        Undo Approval
                      </button>
                    )}
                    {approval?.status === "changes_requested" && (
                      <button
                        onClick={() => setApprovals((prev) => ({ ...prev, [article.slug]: { status: "pending", feedback: "" } }))}
                        className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm font-medium transition-all"
                      >
                        Reset to Pending
                      </button>
                    )}
                    <button
                      onClick={() => setExpandedArticle(isExpanded ? null : article.slug)}
                      className="px-4 py-2 rounded-xl bg-white border border-gray-200 hover:border-brand-blue text-gray-600 hover:text-brand-blue text-sm font-medium transition-all"
                    >
                      {isExpanded ? "Hide Preview" : "Read Full Article"}
                    </button>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-brand-blue hover:bg-blue-700 text-white text-sm font-semibold transition-all shadow-sm hover:shadow-md inline-flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Live Article
                    </a>
                  </div>

                  {/* Feedback input */}
                  {isFeedbackOpen && (
                    <div className="mt-4 p-4 rounded-xl bg-red-50 border border-red-100">
                      <label className="block text-sm font-semibold text-red-700 mb-2">
                        What changes would you like?
                      </label>
                      <textarea
                        value={feedbackText}
                        onChange={(e) => setFeedbackText(e.target.value)}
                        placeholder="Describe the changes you'd like us to make..."
                        className="w-full p-3 rounded-lg border border-red-200 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-300 resize-y min-h-[80px]"
                        rows={3}
                      />
                      <div className="flex gap-2 mt-3">
                        <button
                          onClick={() => handleRequestChanges(article.slug)}
                          disabled={!feedbackText.trim()}
                          className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 disabled:bg-red-300 text-white text-sm font-semibold transition-all"
                        >
                          Submit Feedback
                        </button>
                        <button
                          onClick={() => { setFeedbackArticle(null); setFeedbackText(""); }}
                          className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-600 text-sm font-medium transition-all hover:bg-gray-50"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Expanded article content */}
                  {isExpanded && (
                    <div className="mt-4 p-6 rounded-xl bg-gray-50 border border-gray-100 max-h-[500px] overflow-y-auto">
                      <div className="prose prose-sm max-w-none text-gray-600">
                        <h4 className="text-sm font-bold text-gray-800 mb-3">Article Opening</h4>
                        <p className="text-sm leading-relaxed whitespace-pre-wrap mb-4">{article.preview}</p>

                        <div className="border-t border-gray-200 pt-4 mt-4">
                          <h4 className="text-sm font-bold text-gray-800 mb-2">What This Article Covers</h4>
                          <div className="text-sm text-gray-600 space-y-2">
                            <p>This is a comprehensive, {article.wordCount.toLocaleString()}-word article targeting the keyword <strong>&quot;{article.targetKeyword}&quot;</strong> ({article.searchVolume} monthly searches, difficulty {article.keywordDifficulty}/100).</p>
                            <p>The full article on the website includes:</p>
                            <ul className="list-disc pl-5 space-y-1 text-xs text-gray-500">
                              {article.category === "Legal Guide" && (
                                <>
                                  <li>Complete breakdown of relevant Arizona Revised Statutes</li>
                                  <li>Compliance requirements and checklists for property owners</li>
                                  <li>Common legal pitfalls and how to avoid them</li>
                                  <li>Step-by-step implementation guide</li>
                                  <li>FAQ section answering common questions</li>
                                </>
                              )}
                              {article.category === "City Guide" && (
                                <>
                                  <li>Local market overview and parking enforcement landscape</li>
                                  <li>City-specific regulations and requirements</li>
                                  <li>Property types and common parking challenges</li>
                                  <li>How Axle Towing serves this specific area</li>
                                  <li>Local case studies and success stories</li>
                                  <li>FAQ section for local property managers</li>
                                </>
                              )}
                              {article.category === "Cost Guide" && (
                                <>
                                  <li>Complete fee breakdown with current pricing</li>
                                  <li>Comparison of costs by situation type</li>
                                  <li>Tips for reducing costs and avoiding unexpected fees</li>
                                  <li>Step-by-step vehicle retrieval process</li>
                                  <li>Required documents checklist</li>
                                  <li>FAQ section on fees and payments</li>
                                </>
                              )}
                              {article.category === "Comparison" && (
                                <>
                                  <li>Side-by-side comparison table of top companies</li>
                                  <li>Evaluation criteria and scoring methodology</li>
                                  <li>Pros and cons for each provider</li>
                                  <li>Pricing comparison</li>
                                  <li>Recommendation by property type</li>
                                </>
                              )}
                              {article.category === "Student Guide" && (
                                <>
                                  <li>Campus-specific parking zones and rules</li>
                                  <li>Step-by-step guide to locate and retrieve your vehicle</li>
                                  <li>Fee breakdown with student-specific tips</li>
                                  <li>How to dispute an unfair tow</li>
                                  <li>Prevention tips to avoid getting towed again</li>
                                </>
                              )}
                              {article.category === "Resource" && (
                                <>
                                  <li>Comprehensive directory with addresses and contact info</li>
                                  <li>Downloadable templates and resources</li>
                                  <li>Step-by-step instructions for implementation</li>
                                  <li>Compliance checklists and verification guides</li>
                                  <li>Links to official Arizona state resources</li>
                                </>
                              )}
                            </ul>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 pt-4 mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                          <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-blue hover:bg-blue-700 text-white text-sm font-semibold transition-all shadow-sm hover:shadow-md no-underline"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Read the full {article.wordCount.toLocaleString()}-word article on our website
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </a>
                          <p className="text-xs text-gray-400 italic">Opens in a new tab on the live website</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {filteredArticles.length === 0 && (
        <div className="glass-card p-12 text-center">
          <p className="text-gray-400 text-lg">No articles match the selected filter.</p>
        </div>
      )}
    </>
  );
}
