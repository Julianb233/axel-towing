"use client";
import { useState, useEffect } from "react";
import ScrollReveal from "../../components/ScrollReveal";
import PageHeader from "../../components/PageHeader";
import { suggestions } from "../../data/site-data";

interface Comment { id: string; suggestionId: number; text: string; author: string; timestamp: string; }

export default function FeedbackPage() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [openThread, setOpenThread] = useState<number | null>(null);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [savedToast, setSavedToast] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");

  useEffect(() => { const stored = localStorage.getItem("axle-portal-comments"); if (stored) setComments(JSON.parse(stored)); }, []);

  const showToast = (message: string) => {
    setSavedToast(message);
    setTimeout(() => setSavedToast(null), 2500);
  };

  const persistComments = (updated: Comment[]) => {
    setComments(updated);
    localStorage.setItem("axle-portal-comments", JSON.stringify(updated));
  };

  const saveComment = (suggestionId: number) => {
    if (!newComment.trim()) return;
    const comment: Comment = { id: Date.now().toString(), suggestionId, text: newComment, author: authorName || "Elliott", timestamp: new Date().toISOString() };
    const updated = [...comments, comment];
    persistComments(updated);
    setNewComment("");
    showToast("Comment saved!");
  };

  const startEdit = (comment: Comment) => {
    setEditingId(comment.id);
    setEditText(comment.text);
  };

  const saveEdit = (commentId: string) => {
    if (!editText.trim()) return;
    const updated = comments.map((c) =>
      c.id === commentId ? { ...c, text: editText, timestamp: new Date().toISOString() } : c
    );
    persistComments(updated);
    setEditingId(null);
    setEditText("");
    showToast("Comment updated!");
  };

  const deleteComment = (commentId: string) => {
    const updated = comments.filter((c) => c.id !== commentId);
    persistComments(updated);
    showToast("Comment deleted");
  };

  const priorityColors: Record<string, string> = {
    critical: "border-red-200 bg-red-50/50",
    high: "border-amber-200 bg-amber-50/50",
    medium: "border-blue-100 bg-blue-50/50",
  };

  return (
    <>
      <PageHeader badge="Feedback" title="Suggestions & Recommendations" subtitle="Our strategic recommendations for accelerating growth. Click any card to leave a comment." />

      {/* Toast notification */}
      {savedToast && (
        <div className="fixed top-6 right-6 z-50 animate-in fade-in slide-in-from-top-2">
          <div className="bg-green-600 text-white text-sm font-medium px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {savedToast}
          </div>
        </div>
      )}

      <div className="space-y-4">
        {suggestions.map((s, i) => {
          const threadComments = comments.filter(c => c.suggestionId === s.id);
          const isOpen = openThread === s.id;
          return (
            <ScrollReveal key={s.id} delay={i * 80}>
              <div className={`glass-card overflow-hidden ${priorityColors[s.priority] || ""}`}>
                <button onClick={() => setOpenThread(isOpen ? null : s.id)} className="w-full p-6 text-left">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-lg font-bold text-gray-300">#{s.id}</span>
                        <span className={`badge-${s.priority} text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full`}>{s.priority}</span>
                        {threadComments.length > 0 && <span className="text-[10px] bg-blue-50 text-brand-blue px-2 py-0.5 rounded-full border border-blue-100">{threadComments.length} comment{threadComments.length !== 1 ? "s" : ""}</span>}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{s.title}</h3>
                      <p className="text-sm text-gray-500">{s.description}</p>
                    </div>
                    <svg className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                    {threadComments.length > 0 && <div className="space-y-3 mb-4">
                      {threadComments.map((c) => (
                        <div key={c.id} className="bg-gray-50 rounded-lg p-3 group">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-semibold text-gray-900">{c.author}</span>
                              <span className="text-[10px] text-gray-400">{new Date(c.timestamp).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              {editingId !== c.id && (
                                <>
                                  <button
                                    onClick={() => startEdit(c)}
                                    className="text-[10px] text-gray-400 hover:text-brand-blue px-1.5 py-0.5 rounded transition-colors"
                                    title="Edit comment"
                                  >
                                    Edit
                                  </button>
                                  <button
                                    onClick={() => deleteComment(c.id)}
                                    className="text-[10px] text-gray-400 hover:text-red-500 px-1.5 py-0.5 rounded transition-colors"
                                    title="Delete comment"
                                  >
                                    Delete
                                  </button>
                                </>
                              )}
                            </div>
                          </div>
                          {editingId === c.id ? (
                            <div className="flex gap-2 mt-1">
                              <input
                                type="text"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && saveEdit(c.id)}
                                className="flex-1 bg-white border border-blue-200 rounded-lg px-3 py-1.5 text-sm text-gray-900 focus:outline-none focus:border-brand-blue"
                                autoFocus
                              />
                              <button
                                onClick={() => saveEdit(c.id)}
                                className="bg-brand-blue hover:bg-brand-blue-dark text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
                              >
                                Save
                              </button>
                              <button
                                onClick={() => { setEditingId(null); setEditText(""); }}
                                className="text-xs text-gray-400 hover:text-gray-600 px-2 transition-colors"
                              >
                                Cancel
                              </button>
                            </div>
                          ) : (
                            <p className="text-sm text-gray-600">{c.text}</p>
                          )}
                        </div>
                      ))}
                    </div>}
                    <div className="flex gap-2">
                      <input type="text" placeholder="Your name" value={authorName} onChange={(e) => setAuthorName(e.target.value)}
                        className="w-32 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-blue" />
                      <input type="text" placeholder="Add a comment..." value={newComment} onChange={(e) => setNewComment(e.target.value)} onKeyDown={(e) => e.key === "Enter" && saveComment(s.id)}
                        className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-blue" />
                      <button onClick={() => saveComment(s.id)} className="bg-brand-blue hover:bg-brand-blue-dark text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">Send</button>
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </>
  );
}
