"use client";

import { useState } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

/* ── Types ── */
type CallRecord = {
  id: string;
  callSid: string;
  direction: "inbound" | "outbound";
  from: string;
  to: string;
  status: "completed" | "no-answer" | "busy" | "failed" | "in-progress";
  duration: number; // seconds
  context?: string; // hoa | property-manager | general | towing | roadside | billing
  timestamp: string;
};

type OutboundForm = {
  to: string;
  contactName: string;
  context: "hoa" | "property-manager" | "general";
};

/* ── Mock data (replace with Supabase query when DB connected) ── */
const MOCK_CALLS: CallRecord[] = [
  {
    id: "1",
    callSid: "CA000001",
    direction: "inbound",
    from: "+16025551001",
    to: COMPANY.phone,
    status: "completed",
    duration: 183,
    context: "towing",
    timestamp: "2026-03-24T10:14:00Z",
  },
  {
    id: "2",
    callSid: "CA000002",
    direction: "outbound",
    from: COMPANY.phone,
    to: "+16025551002",
    status: "completed",
    duration: 97,
    context: "hoa",
    timestamp: "2026-03-24T09:30:00Z",
  },
  {
    id: "3",
    callSid: "CA000003",
    direction: "inbound",
    from: "+16025551003",
    to: COMPANY.phone,
    status: "completed",
    duration: 54,
    context: "roadside",
    timestamp: "2026-03-23T22:45:00Z",
  },
  {
    id: "4",
    callSid: "CA000004",
    direction: "outbound",
    from: COMPANY.phone,
    to: "+16025551004",
    status: "no-answer",
    duration: 0,
    context: "property-manager",
    timestamp: "2026-03-23T14:00:00Z",
  },
  {
    id: "5",
    callSid: "CA000005",
    direction: "inbound",
    from: "+16025551005",
    to: COMPANY.phone,
    status: "completed",
    duration: 312,
    context: "billing",
    timestamp: "2026-03-22T11:20:00Z",
  },
];

/* ── Helpers ── */
function formatDuration(seconds: number): string {
  if (seconds === 0) return "—";
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return m > 0 ? `${m}m ${s}s` : `${s}s`;
}

function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 11 && digits[0] === "1") {
    return `(${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
  }
  return phone;
}

function formatTimestamp(iso: string): string {
  return new Date(iso).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

const STATUS_STYLES: Record<CallRecord["status"], string> = {
  completed: "bg-green-900/40 text-green-400 border border-green-800",
  "no-answer": "bg-yellow-900/40 text-yellow-400 border border-yellow-800",
  busy: "bg-orange-900/40 text-orange-400 border border-orange-800",
  failed: "bg-red-900/40 text-red-400 border border-red-800",
  "in-progress": "bg-blue-900/40 text-blue-400 border border-blue-800",
};

/* ── Component ── */
export default function CallsDashboardPage() {
  const [calls] = useState<CallRecord[]>(MOCK_CALLS);
  const [form, setForm] = useState<OutboundForm>({
    to: "",
    contactName: "",
    context: "general",
  });
  const [calling, setCalling] = useState(false);
  const [callResult, setCallResult] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const stats = {
    total: calls.length,
    inbound: calls.filter((c) => c.direction === "inbound").length,
    outbound: calls.filter((c) => c.direction === "outbound").length,
    completed: calls.filter((c) => c.status === "completed").length,
    avgDuration: Math.round(
      calls.filter((c) => c.duration > 0).reduce((sum, c) => sum + c.duration, 0) /
        (calls.filter((c) => c.duration > 0).length || 1),
    ),
  };

  async function handleOutboundCall(e: React.FormEvent) {
    e.preventDefault();
    if (!form.to) return;

    setCalling(true);
    setCallResult(null);

    // Normalise phone to E.164
    const digits = form.to.replace(/\D/g, "");
    const e164 = digits.length === 10 ? `+1${digits}` : `+${digits}`;

    try {
      const res = await fetch("/api/voice/outbound", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: e164,
          contactName: form.contactName || "there",
          context: form.context,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setCallResult({ success: true, message: `Call initiated — SID: ${data.callSid}` });
        setForm({ to: "", contactName: "", context: "general" });
      } else {
        setCallResult({ success: false, message: data.error ?? "Call failed" });
      }
    } catch {
      setCallResult({ success: false, message: "Network error — check console" });
    } finally {
      setCalling(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#0d1b2a] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0d1b2a]/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/portal" className="text-gray-400 hover:text-white transition-colors text-sm">
              ← Portal
            </Link>
            <h1 className="text-xl font-semibold">Voice Agent Dashboard</h1>
          </div>
          <span className="text-sm text-gray-400">{COMPANY.name}</span>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: "Total Calls", value: stats.total },
            { label: "Inbound", value: stats.inbound },
            { label: "Outbound", value: stats.outbound },
            { label: "Completed", value: stats.completed },
            { label: "Avg Duration", value: formatDuration(stats.avgDuration) },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
            >
              <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
              <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Call Log */}
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <h2 className="font-semibold">Recent Calls</h2>
              <span className="text-xs text-gray-400">Last 30 days</span>
            </div>
            <div className="divide-y divide-white/5">
              {calls.map((call) => (
                <div key={call.id} className="px-6 py-4 flex items-center gap-4">
                  {/* Direction icon */}
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      call.direction === "inbound"
                        ? "bg-green-900/50 text-green-400"
                        : "bg-blue-900/50 text-blue-400"
                    }`}
                  >
                    {call.direction === "inbound" ? "↓" : "↑"}
                  </div>

                  {/* Phone info */}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">
                      {call.direction === "inbound"
                        ? formatPhone(call.from)
                        : formatPhone(call.to)}
                    </div>
                    <div className="text-xs text-gray-400 capitalize">
                      {call.direction} · {call.context ?? "general"}
                    </div>
                  </div>

                  {/* Status badge */}
                  <span
                    className={`flex-shrink-0 text-xs px-2 py-0.5 rounded-full capitalize ${
                      STATUS_STYLES[call.status]
                    }`}
                  >
                    {call.status}
                  </span>

                  {/* Duration */}
                  <div className="flex-shrink-0 text-sm text-gray-400 w-14 text-right">
                    {formatDuration(call.duration)}
                  </div>

                  {/* Timestamp */}
                  <div className="flex-shrink-0 text-xs text-gray-500 w-28 text-right hidden md:block">
                    {formatTimestamp(call.timestamp)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Outbound Call Panel */}
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden h-fit">
            <div className="px-6 py-4 border-b border-white/10">
              <h2 className="font-semibold">Initiate Outbound Call</h2>
              <p className="text-xs text-gray-400 mt-1">
                Launches an AI-driven sales call via Twilio
              </p>
            </div>
            <form onSubmit={handleOutboundCall} className="px-6 py-4 space-y-4">
              <div>
                <label className="block text-xs text-gray-400 mb-1" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="(602) 555-0100"
                  value={form.to}
                  onChange={(e) => setForm((f) => ({ ...f, to: e.target.value }))}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1" htmlFor="name">
                  Contact Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Jane Smith"
                  value={form.contactName}
                  onChange={(e) => setForm((f) => ({ ...f, contactName: e.target.value }))}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1" htmlFor="context">
                  Call Script
                </label>
                <select
                  id="context"
                  value={form.context}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      context: e.target.value as OutboundForm["context"],
                    }))
                  }
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="general">General Outreach</option>
                  <option value="hoa">HOA Script</option>
                  <option value="property-manager">Property Manager Script</option>
                </select>
              </div>

              {callResult && (
                <div
                  className={`text-xs rounded-lg px-3 py-2 ${
                    callResult.success
                      ? "bg-green-900/40 text-green-400 border border-green-800"
                      : "bg-red-900/40 text-red-400 border border-red-800"
                  }`}
                >
                  {callResult.message}
                </div>
              )}

              <button
                type="submit"
                disabled={calling}
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium py-2 rounded-lg transition-colors"
              >
                {calling ? "Initiating Call..." : "Start Call"}
              </button>
            </form>

            {/* IVR Info */}
            <div className="px-6 pb-4 pt-0">
              <div className="border border-white/10 rounded-lg p-4 bg-white/3 space-y-2">
                <p className="text-xs font-medium text-gray-300">Inbound IVR Menu</p>
                <div className="space-y-1 text-xs text-gray-400">
                  <div>1 — Towing services</div>
                  <div>2 — Roadside assistance</div>
                  <div>3 — Billing / account questions</div>
                  <div>0 — Speak with dispatcher</div>
                </div>
                <p className="text-xs text-gray-500 pt-1">
                  Webhook:{" "}
                  <code className="text-blue-400 font-mono">/api/voice/inbound</code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
