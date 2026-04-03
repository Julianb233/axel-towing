"use client";

import { useState } from "react";
import {
  SAMPLE_CONTACTS,
  PIPELINE_STAGES,
  getPipelineMetrics,
  type PipelineContact,
  type PipelineStage,
  type PropertyType,
} from "@/lib/data/pipeline-data";

/* ── Tag color map ── */
const PROPERTY_TYPE_COLORS: Record<PropertyType, string> = {
  HOA: "bg-purple-900/60 text-purple-300 border border-purple-700",
  "Property Manager": "bg-blue-900/60 text-blue-300 border border-blue-700",
  "Apartment Complex": "bg-emerald-900/60 text-emerald-300 border border-emerald-700",
  Commercial: "bg-amber-900/60 text-amber-300 border border-amber-700",
};

const STAGE_COLORS: Record<PipelineStage, string> = {
  "new-lead": "bg-blue-600",
  contacted: "bg-yellow-600",
  "demo-scheduled": "bg-purple-600",
  "proposal-sent": "bg-orange-600",
  won: "bg-green-600",
  lost: "bg-red-600",
};

/* ── New Lead Form ── */
interface NewLeadFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  propertyType: PropertyType;
  notes: string;
}

function NewLeadForm({ onSubmit }: { onSubmit: (data: NewLeadFormData) => void }) {
  const [form, setForm] = useState<NewLeadFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    propertyType: "HOA",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "crm-dashboard",
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        onSubmit(form);
        setForm({ name: "", email: "", phone: "", company: "", propertyType: "HOA", notes: "" });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Name *</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="w-full bg-navy-900 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            placeholder="Contact name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Company</label>
          <input
            type="text"
            value={form.company}
            onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
            className="w-full bg-navy-900 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            placeholder="HOA or property name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="w-full bg-navy-900 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            placeholder="contact@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className="w-full bg-navy-900 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            placeholder="480-555-0000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Property Type</label>
          <select
            value={form.propertyType}
            onChange={(e) => setForm((f) => ({ ...f, propertyType: e.target.value as PropertyType }))}
            className="w-full bg-[#1B2A3F] border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
          >
            <option value="HOA">HOA</option>
            <option value="Property Manager">Property Manager</option>
            <option value="Apartment Complex">Apartment Complex</option>
            <option value="Commercial">Commercial</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Notes</label>
        <textarea
          value={form.notes}
          onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
          rows={3}
          className="w-full bg-navy-900 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 resize-none"
          placeholder="Property details, urgency, context..."
        />
      </div>
      <button
        type="submit"
        disabled={submitting || !form.name}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-2.5 rounded-lg transition-colors"
      >
        {submitting ? "Adding to GHL..." : submitted ? "Lead Added!" : "Add Lead to Pipeline"}
      </button>
    </form>
  );
}

/* ── Contact Card ── */
function ContactCard({
  contact,
  onStageChange,
}: {
  contact: PipelineContact;
  onStageChange: (id: string, stage: PipelineStage) => void;
}) {
  const [moving, setMoving] = useState(false);

  const handleMove = async (newStage: PipelineStage) => {
    if (newStage === contact.stage) return;
    setMoving(true);
    try {
      const res = await fetch("/api/crm/pipeline", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contactId: contact.id, stage: newStage }),
      });
      if (res.ok) {
        onStageChange(contact.id, newStage);
      }
    } finally {
      setMoving(false);
    }
  };

  return (
    <div className="bg-[#1B2A3F] border border-gray-700/50 rounded-lg p-3 space-y-2 hover:border-gray-600 transition-colors">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-white leading-tight">{contact.name}</p>
          <p className="text-xs text-gray-400">{contact.company}</p>
        </div>
        <span className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${PROPERTY_TYPE_COLORS[contact.propertyType]}`}>
          {contact.propertyType}
        </span>
      </div>
      {contact.phone && (
        <a href={`tel:${contact.phone}`} className="block text-xs text-blue-400 hover:text-blue-300">
          {contact.phone}
        </a>
      )}
      {contact.notes && (
        <p className="text-xs text-gray-500 line-clamp-2">{contact.notes}</p>
      )}
      {contact.units && (
        <p className="text-xs text-gray-400">{contact.units.toLocaleString()} units</p>
      )}
      <div className="pt-1">
        <select
          value={contact.stage}
          onChange={(e) => handleMove(e.target.value as PipelineStage)}
          disabled={moving}
          className="w-full bg-[#0d1a2d] border border-gray-700 rounded px-2 py-1 text-xs text-gray-300 focus:outline-none focus:border-blue-500 disabled:opacity-50"
        >
          {PIPELINE_STAGES.map((s) => (
            <option key={s.id} value={s.id}>
              {s.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

/* ── Main CRM Content ── */
export default function CRMContent() {
  const [contacts, setContacts] = useState<PipelineContact[]>(SAMPLE_CONTACTS);
  const [showForm, setShowForm] = useState(false);

  const metrics = getPipelineMetrics();

  const handleStageChange = (id: string, newStage: PipelineStage) => {
    setContacts((prev) =>
      prev.map((c) => (c.id === id ? { ...c, stage: newStage, updatedAt: new Date().toISOString() } : c))
    );
  };

  const handleNewLead = (data: { name: string; company: string; propertyType: PropertyType; email: string; phone: string; notes: string }) => {
    const newContact: PipelineContact = {
      id: `c-${Date.now()}`,
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      propertyType: data.propertyType,
      stage: "new-lead",
      notes: data.notes,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      source: "crm-dashboard",
    };
    setContacts((prev) => [newContact, ...prev]);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-[#0d1a2d] text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#1B2A3F]/50 backdrop-blur">
        <div className="max-w-[1600px] mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-white">CRM Pipeline</h1>
            <p className="text-sm text-gray-400">Axle Towing — GoHighLevel Integration</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Add Lead
          </button>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 py-6 space-y-6">
        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total Leads", value: metrics.totalLeads, color: "text-white" },
            { label: "This Week", value: metrics.thisWeek, color: "text-blue-400" },
            { label: "Deals Won", value: metrics.won, color: "text-green-400" },
            { label: "Conversion Rate", value: `${metrics.conversionRate}%`, color: "text-purple-400" },
          ].map((m) => (
            <div key={m.label} className="bg-[#1B2A3F] border border-gray-700/50 rounded-xl p-4">
              <p className="text-xs text-gray-400 uppercase tracking-wider">{m.label}</p>
              <p className={`text-3xl font-bold mt-1 ${m.color}`}>{m.value}</p>
            </div>
          ))}
        </div>

        {/* New Lead Form */}
        {showForm && (
          <div className="bg-[#1B2A3F] border border-gray-700/50 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Add New Lead</h2>
            <NewLeadForm onSubmit={handleNewLead} />
          </div>
        )}

        {/* Pipeline Board */}
        <div>
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Pipeline Board
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {PIPELINE_STAGES.filter((s) => s.id !== "lost").map((stage) => {
              const stageContacts = contacts.filter((c) => c.stage === stage.id);
              return (
                <div key={stage.id} className="space-y-2">
                  {/* Stage Header */}
                  <div className="flex items-center gap-2 px-1">
                    <span className={`w-2.5 h-2.5 rounded-full ${STAGE_COLORS[stage.id]}`} />
                    <span className="text-sm font-medium text-gray-300">{stage.label}</span>
                    <span className="ml-auto text-xs bg-gray-800 text-gray-400 rounded-full px-2 py-0.5">
                      {stageContacts.length}
                    </span>
                  </div>
                  {/* Cards */}
                  <div className="space-y-2 min-h-[100px]">
                    {stageContacts.map((contact) => (
                      <ContactCard
                        key={contact.id}
                        contact={contact}
                        onStageChange={handleStageChange}
                      />
                    ))}
                    {stageContacts.length === 0 && (
                      <div className="border border-dashed border-gray-700 rounded-lg p-4 text-center text-xs text-gray-600">
                        Empty
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Contacts Table */}
        <div className="bg-[#1B2A3F] border border-gray-700/50 rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-700/50">
            <h2 className="text-base font-semibold text-white">Recent Contacts</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700/50 bg-[#0d1a2d]/50">
                  <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-4 py-3">Contact</th>
                  <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-4 py-3">Type</th>
                  <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-4 py-3">Stage</th>
                  <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-4 py-3">Source</th>
                  <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-4 py-3">Added</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700/30">
                {contacts
                  .slice()
                  .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                  .slice(0, 10)
                  .map((contact) => {
                    const stage = PIPELINE_STAGES.find((s) => s.id === contact.stage);
                    return (
                      <tr key={contact.id} className="hover:bg-[#0d1a2d]/40 transition-colors">
                        <td className="px-4 py-3">
                          <p className="text-sm font-medium text-white">{contact.name}</p>
                          <p className="text-xs text-gray-400">{contact.company}</p>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${PROPERTY_TYPE_COLORS[contact.propertyType]}`}>
                            {contact.propertyType}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${STAGE_COLORS[contact.stage]}`} />
                            <span className="text-sm text-gray-300">{stage?.label}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-xs text-gray-400 capitalize">{contact.source}</span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-xs text-gray-400">
                            {new Date(contact.createdAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>

        {/* GHL Integration Status */}
        <div className="bg-[#1B2A3F] border border-gray-700/50 rounded-xl p-6">
          <h2 className="text-base font-semibold text-white mb-3">GoHighLevel Integration</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-gray-300">Contact sync active</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-gray-300">Pipeline automation enabled</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="text-gray-300">GHL credentials: check env vars</span>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            All leads submitted via website forms are automatically synced to GoHighLevel with tags,
            pipeline stage, and a note with submission details. Set{" "}
            <code className="bg-gray-800 px-1 py-0.5 rounded text-gray-300">GHL_API_KEY</code>,{" "}
            <code className="bg-gray-800 px-1 py-0.5 rounded text-gray-300">GHL_LOCATION_ID</code>,{" "}
            and optionally{" "}
            <code className="bg-gray-800 px-1 py-0.5 rounded text-gray-300">GHL_PIPELINE_ID</code> in{" "}
            <code className="bg-gray-800 px-1 py-0.5 rounded text-gray-300">.env.local</code>.
          </p>
        </div>
      </div>
    </div>
  );
}
