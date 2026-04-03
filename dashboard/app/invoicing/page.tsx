"use client";

import { useState } from "react";
import PageHeader from "../../components/PageHeader";
import ScrollReveal from "../../components/ScrollReveal";

// ─── Types ────────────────────────────────────────────────────────────────────

type InvoiceStatus = "paid" | "pending" | "scheduled" | "overdue";
type InvoiceType = "website" | "seo" | "maintenance";

interface Invoice {
  id: string;
  type: InvoiceType;
  description: string;
  amount: number;
  issueDate: string;
  dueDate: string;
  paidDate?: string;
  status: InvoiceStatus;
  klarnaOrderId?: string;
  installmentOf?: number;
  installmentTotal?: number;
}

// ─── Mock Data ────────────────────────────────────────────────────────────────

const invoices: Invoice[] = [
  {
    id: "AXL-WEB-2026-1",
    type: "website",
    description: "Website Development — Installment 1 of 4",
    amount: 1875,
    issueDate: "2026-03-24",
    dueDate: "2026-03-24",
    status: "pending",
    installmentOf: 1,
    installmentTotal: 4,
  },
  {
    id: "AXL-WEB-2026-2",
    type: "website",
    description: "Website Development — Installment 2 of 4",
    amount: 1875,
    issueDate: "2026-03-24",
    dueDate: "2026-04-07",
    status: "scheduled",
    installmentOf: 2,
    installmentTotal: 4,
  },
  {
    id: "AXL-WEB-2026-3",
    type: "website",
    description: "Website Development — Installment 3 of 4",
    amount: 1875,
    issueDate: "2026-03-24",
    dueDate: "2026-04-21",
    status: "scheduled",
    installmentOf: 3,
    installmentTotal: 4,
  },
  {
    id: "AXL-WEB-2026-4",
    type: "website",
    description: "Website Development — Installment 4 of 4",
    amount: 1875,
    issueDate: "2026-03-24",
    dueDate: "2026-05-05",
    status: "scheduled",
    installmentOf: 4,
    installmentTotal: 4,
  },
  {
    id: "AXL-SEO-APR-2026",
    type: "seo",
    description: "SEO Management — April 2026",
    amount: 3000,
    issueDate: "2026-04-01",
    dueDate: "2026-04-08",
    status: "scheduled",
  },
  {
    id: "AXL-SEO-MAY-2026",
    type: "seo",
    description: "SEO Management — May 2026",
    amount: 3000,
    issueDate: "2026-05-01",
    dueDate: "2026-05-08",
    status: "scheduled",
  },
];

// ─── Config ───────────────────────────────────────────────────────────────────

const statusConfig: Record<InvoiceStatus, { label: string; bg: string; text: string; dot: string }> = {
  paid: { label: "Paid", bg: "bg-emerald-50 border-emerald-200", text: "text-emerald-700", dot: "bg-emerald-500" },
  pending: { label: "Due Now", bg: "bg-amber-50 border-amber-200", text: "text-amber-700", dot: "bg-amber-500 animate-pulse" },
  scheduled: { label: "Scheduled", bg: "bg-blue-50 border-blue-200", text: "text-blue-600", dot: "bg-blue-400" },
  overdue: { label: "Overdue", bg: "bg-red-50 border-red-200", text: "text-red-700", dot: "bg-red-600 animate-pulse" },
};

const typeConfig: Record<InvoiceType, { label: string; color: string }> = {
  website: { label: "Website Build", color: "text-purple-600" },
  seo: { label: "SEO Retainer", color: "text-blue-600" },
  maintenance: { label: "Maintenance", color: "text-green-600" },
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function InvoicingPage() {
  const [activeTab, setActiveTab] = useState<"all" | "website" | "seo">("all");
  const [showKlarnaGuide, setShowKlarnaGuide] = useState(false);

  const filtered = invoices.filter((inv) => activeTab === "all" || inv.type === activeTab);

  const totalWebsite = invoices.filter((i) => i.type === "website").reduce((s, i) => s + i.amount, 0);
  const totalSEO = invoices.filter((i) => i.type === "seo").reduce((s, i) => s + i.amount, 0);
  const totalPaid = invoices.filter((i) => i.status === "paid").reduce((s, i) => s + i.amount, 0);
  const totalPending = invoices.filter((i) => i.status === "pending" || i.status === "overdue").reduce((s, i) => s + i.amount, 0);

  return (
    <>
      <PageHeader
        badge="Billing & Payments"
        title="Invoicing"
        subtitle="Payment schedule, Klarna installments, and monthly SEO retainer invoices."
      />

      {/* Summary Stats */}
      <ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="glass-card p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Website Total</p>
            <p className="text-2xl font-bold font-display text-purple-600 mt-1">{formatCurrency(totalWebsite)}</p>
            <p className="text-xs text-gray-500 mt-1">Pay in 4 via Klarna</p>
          </div>
          <div className="glass-card p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">SEO (2 mo)</p>
            <p className="text-2xl font-bold font-display text-blue-600 mt-1">{formatCurrency(totalSEO)}</p>
            <p className="text-xs text-gray-500 mt-1">$3,000/month retainer</p>
          </div>
          <div className="glass-card p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Collected</p>
            <p className="text-2xl font-bold font-display text-emerald-600 mt-1">{formatCurrency(totalPaid)}</p>
            <p className="text-xs text-gray-500 mt-1">Paid to date</p>
          </div>
          <div className="glass-card p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Due Now</p>
            <p className="text-2xl font-bold font-display text-amber-500 mt-1">{formatCurrency(totalPending)}</p>
            <p className="text-xs text-gray-500 mt-1">Awaiting payment</p>
          </div>
        </div>
      </ScrollReveal>

      {/* Klarna Banner */}
      <ScrollReveal delay={50}>
        <div className="mb-8 bg-gradient-to-r from-[#17120E] to-[#2b1f17] rounded-2xl p-5 border border-[#FFB3C7]/20 shadow-lg">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#FFB3C7]/10 rounded-xl flex items-center justify-center border border-[#FFB3C7]/20 flex-shrink-0">
                <span className="text-[#FFB3C7] font-bold text-lg">K</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">Powered by Klarna</h3>
                <p className="text-white/50 text-xs mt-0.5">
                  Website fee split into 4 × $1,875 — no interest, no fees to you. Monthly invoices via Klarna Pay Later.
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowKlarnaGuide(!showKlarnaGuide)}
              className="flex-shrink-0 text-xs bg-white/10 hover:bg-white/20 text-white/70 hover:text-white px-4 py-2 rounded-lg transition-colors border border-white/10"
            >
              {showKlarnaGuide ? "Hide Guide" : "How It Works"}
            </button>
          </div>

          {showKlarnaGuide && (
            <div className="mt-5 border-t border-white/10 pt-5 grid md:grid-cols-3 gap-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-[#FFB3C7] text-xs font-semibold uppercase tracking-wider mb-2">Step 1 — Accept Link</p>
                <p className="text-white/60 text-xs">Click the Klarna payment link Julian sends via text. It opens a Klarna checkout page directly on your phone.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-[#FFB3C7] text-xs font-semibold uppercase tracking-wider mb-2">Step 2 — Pay First $1,875</p>
                <p className="text-white/60 text-xs">Klarna requires a debit card for the first installment. After checkout, you can switch to your business credit card in the Klarna app.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-[#FFB3C7] text-xs font-semibold uppercase tracking-wider mb-2">Step 3 — Auto Payments</p>
                <p className="text-white/60 text-xs">Remaining 3 installments charge automatically every 2 weeks. You receive email and SMS reminders before each charge.</p>
              </div>
            </div>
          )}
        </div>
      </ScrollReveal>

      {/* Tabs */}
      <ScrollReveal delay={100}>
        <div className="flex gap-2 mb-6">
          {(["all", "website", "seo"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                activeTab === tab
                  ? "bg-[#1B2A3F] text-white shadow-sm"
                  : "bg-white text-gray-500 hover:text-gray-700 border border-gray-200"
              }`}
            >
              {tab === "all" ? "All Invoices" : tab === "website" ? "Website Build" : "SEO Retainer"}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Invoice List */}
      <ScrollReveal delay={150}>
        <div className="space-y-3 mb-8">
          {filtered.map((inv) => {
            const sc = statusConfig[inv.status];
            const tc = typeConfig[inv.type];
            return (
              <div key={inv.id} className={`rounded-2xl border ${sc.bg} p-5 shadow-sm`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className={`text-xs font-semibold ${tc.color}`}>{tc.label}</span>
                      {inv.installmentOf && (
                        <span className="text-[10px] font-bold text-gray-400 bg-white/60 px-2 py-0.5 rounded-full border border-white">
                          Installment {inv.installmentOf}/{inv.installmentTotal}
                        </span>
                      )}
                      <span className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider ${sc.text}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
                        {sc.label}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900">{inv.description}</h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Invoice #{inv.id} &middot; Due {formatDate(inv.dueDate)}
                      {inv.paidDate && ` · Paid ${formatDate(inv.paidDate)}`}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-xl font-bold text-gray-900 font-display">{formatCurrency(inv.amount)}</p>
                    {inv.klarnaOrderId && (
                      <p className="text-[10px] text-gray-400 mt-0.5">Klarna: {inv.klarnaOrderId}</p>
                    )}
                  </div>
                </div>

                {inv.status === "pending" && (
                  <div className="mt-4 pt-4 border-t border-white/50 flex items-center gap-3">
                    <a
                      href="https://portal.klarna.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-[#1B2A3F] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#2a3f5f] transition-colors"
                    >
                      Pay with Klarna
                    </a>
                    <span className="text-xs text-gray-500">Need the link? Text Julian at (619) 509-0699</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </ScrollReveal>

      {/* Payment Schedule Breakdown */}
      <ScrollReveal delay={200}>
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            2026 Payment Schedule
          </h2>

          <div className="glass-card p-6">
            <div className="space-y-3">
              {[
                { date: "Mar 24, 2026", label: "Website Installment 1", amount: "$1,875", note: "Klarna Pay in 4 — first payment", status: "pending" as InvoiceStatus },
                { date: "Apr 7, 2026", label: "Website Installment 2", amount: "$1,875", note: "Auto-charged via Klarna", status: "scheduled" as InvoiceStatus },
                { date: "Apr 21, 2026", label: "Website Installment 3", amount: "$1,875", note: "Auto-charged via Klarna", status: "scheduled" as InvoiceStatus },
                { date: "Apr 1, 2026", label: "SEO Invoice — April", amount: "$3,000", note: "Net 7 invoice — due Apr 8", status: "scheduled" as InvoiceStatus },
                { date: "May 5, 2026", label: "Website Installment 4", amount: "$1,875", note: "Auto-charged via Klarna — final installment", status: "scheduled" as InvoiceStatus },
                { date: "May 1, 2026", label: "SEO Invoice — May", amount: "$3,000", note: "Net 7 invoice — due May 8", status: "scheduled" as InvoiceStatus },
              ].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).map((row, i) => {
                const sc = statusConfig[row.status];
                return (
                  <div key={i} className="flex items-center gap-4 py-2 border-b border-gray-100 last:border-0">
                    <div className="w-24 flex-shrink-0">
                      <p className="text-xs font-semibold text-gray-900">{row.date}</p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{row.label}</p>
                      <p className="text-xs text-gray-500">{row.note}</p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className={`text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 ${sc.text}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
                        {sc.label}
                      </span>
                      <p className="text-sm font-bold text-gray-900 w-16 text-right">{row.amount}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-600">2026 Total (Website + 2 months SEO)</p>
              <p className="text-lg font-bold text-gray-900 font-display">{formatCurrency(totalWebsite + totalSEO)}</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* What Each SEO Invoice Covers */}
      <ScrollReveal delay={250}>
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            What Each $3,000 SEO Invoice Covers
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: "4 SEO Articles Published", desc: "Keyword-targeted blog content and service pages that rank in Google and drive organic traffic." },
              { label: "Keyword Rank Tracking", desc: "Monthly report of 26+ tracked keywords — positions, movement, competitor comparison." },
              { label: "Google Business Profile", desc: "Weekly GBP posts, photo uploads, Q&A seeding, review response management." },
              { label: "Citation & Directory Management", desc: "Consistent NAP (name, address, phone) across 50+ directories — Yelp, Apple Maps, BBB, etc." },
              { label: "Backlink Outreach", desc: "10+ outreach targets per month — guest posts, local business directories, partner sites." },
              { label: "Monthly Performance Report", desc: "Full dashboard update: traffic, rankings, leads, top pages, next month priorities." },
            ].map((item, i) => (
              <div key={i} className="glass-card p-4 flex gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Contact for Payment Help */}
      <ScrollReveal delay={300}>
        <div className="glass-card p-6">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Billing Questions
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Klarna Support</p>
              <p className="text-sm text-gray-900 font-medium">1-844-552-7621</p>
              <p className="text-xs text-gray-500 mt-1">For missed payments, card changes, or Klarna app questions</p>
            </div>
            <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Julian — AI Acrobatics</p>
              <a href="tel:6195090699" className="text-sm text-blue-600 font-medium hover:underline">(619) 509-0699</a>
              <p className="text-xs text-gray-500 mt-1">Invoice questions, payment link requests, or billing disputes</p>
            </div>
            <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Manage Your Klarna Plan</p>
              <a href="https://app.klarna.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 font-medium hover:underline">app.klarna.com</a>
              <p className="text-xs text-gray-500 mt-1">View installment schedule, update payment method, download receipts</p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
