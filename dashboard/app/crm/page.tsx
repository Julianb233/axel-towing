"use client";

import PageHeader from "../../components/PageHeader";
import ScrollReveal from "../../components/ScrollReveal";

const PIPELINE_STAGES = [
  { stage: "New Lead", desc: "Contact form submitted, phone inquiry, or manual entry", autoAction: "Auto-assign to Elliott + send confirmation email + start nurture sequence", color: "bg-blue-500" },
  { stage: "Contacted", desc: "Initial outreach made to the lead", autoAction: "Start 21-day follow-up sequence (email + SMS)", color: "bg-indigo-500" },
  { stage: "Consultation Scheduled", desc: "Site visit or discovery call booked", autoAction: "Send calendar invite + reminder at 24h and 1h before", color: "bg-violet-500" },
  { stage: "Proposal Sent", desc: "Contract or quote delivered to prospect", autoAction: "Follow-up at day 2, 5, and 10 if no response", color: "bg-purple-500" },
  { stage: "Negotiation", desc: "Discussing terms, pricing, or special conditions", autoAction: "Manual follow-up reminders to Elliott every 3 days", color: "bg-fuchsia-500" },
  { stage: "Won — Onboarding", desc: "Contract signed — getting service started", autoAction: "Trigger onboarding checklist + welcome email sequence", color: "bg-emerald-500" },
  { stage: "Active Account", desc: "Property is live and being serviced", autoAction: "Monthly activity report + review request at 30 days", color: "bg-green-500" },
  { stage: "Lost", desc: "Did not close — not interested or went with competitor", autoAction: "Enter 30/60/90-day re-engagement campaign", color: "bg-slate-400" },
];

const AUTOMATION_CAMPAIGNS = [
  {
    name: "New Lead Nurture",
    trigger: "Any website form submission",
    days: [
      { day: "Day 0", action: "Thank you email + property assessment confirmation", channel: "Email" },
      { day: "Day 1", action: "SMS: 'Got your inquiry — when is a good time to chat?'", channel: "SMS" },
      { day: "Day 3", action: "Value email: How Parking Enforcement Protects Property Values", channel: "Email" },
      { day: "Day 5", action: "Internal reminder to Elliott to call the lead", channel: "Internal" },
      { day: "Day 7", action: "Case study email relevant to their property type", channel: "Email" },
      { day: "Day 10", action: "SMS follow-up: 'Still interested in parking enforcement?'", channel: "SMS" },
      { day: "Day 14", action: "Email: What Other Phoenix Properties Are Doing", channel: "Email" },
      { day: "Day 21", action: "Final outreach email + move to re-engagement", channel: "Email" },
    ],
  },
  {
    name: "Post-Onboarding (New Clients)",
    trigger: "Contact moved to 'Active Account' stage",
    days: [
      { day: "Day 1", action: "Welcome email with key contacts and dispatch process", channel: "Email" },
      { day: "Day 7", action: "Check-in call: 'How is the first week going?'", channel: "Phone" },
      { day: "Day 14", action: "Tips for communicating towing policy to residents", channel: "Email" },
      { day: "Day 30", action: "First month review call + request Google review", channel: "Phone + Email" },
      { day: "Day 60", action: "Referral request email", channel: "Email" },
      { day: "Day 90", action: "Quarterly business review", channel: "Phone" },
    ],
  },
];

const SETUP_STEPS = [
  {
    step: 1,
    title: "GHL Account Setup",
    status: "pending",
    items: [
      "Create GHL account at app.gohighlevel.com",
      "Set up Location: 'Axle Towing & Impound'",
      "Add business details: address, phone, logo",
      "Set timezone to America/Phoenix",
      "Upload Axle Towing branding (logo, colors #1B2A3F and #DC2626)",
    ],
  },
  {
    step: 2,
    title: "Pipeline Configuration",
    status: "pending",
    items: [
      "Create pipeline: 'Property Manager Acquisition'",
      "Add all 8 stages (New Lead → Active Account + Lost)",
      "Set stage-based automation triggers",
      "Configure deal value tracking (estimated monthly revenue)",
    ],
  },
  {
    step: 3,
    title: "Custom Fields",
    status: "pending",
    items: [
      "Property Name (text)",
      "Property Type (dropdown: apartment/HOA/commercial/retail/industrial)",
      "Number of Units (number)",
      "Current Towing Provider (text)",
      "Monthly Revenue Potential (currency)",
      "Lead Score (number — auto-calculated)",
      "Contract Start/End/Renewal Date (date)",
      "Signage Status (dropdown: not started/ordered/installed/compliant)",
      "TowBook Portal Setup (checkbox)",
      "Authorized Contacts (long text)",
    ],
  },
  {
    step: 4,
    title: "Tag System (58 Tags)",
    status: "pending",
    items: [
      "Source tags: src-website-form, src-phone-call, src-referral, src-outreach-*",
      "Property type: type-apartment, type-hoa, type-commercial, type-retail",
      "Pipeline stage: stage-new-lead, stage-contacted, stage-won, stage-active",
      "Sequence tags: seq-new-lead-nurture, seq-re-engagement, seq-onboarding",
      "Priority tags: priority-hot, priority-warm, priority-cold",
      "Flag tags: flag-vip, flag-do-not-call, flag-referral-partner, flag-high-value",
    ],
  },
  {
    step: 5,
    title: "Email & SMS Templates",
    status: "pending",
    items: [
      "New lead confirmation email (from Elliott — warm and local tone)",
      "Day 1 SMS follow-up template",
      "Value nurture emails (Days 3, 7, 14)",
      "Final outreach email (Day 21)",
      "Welcome email for new accounts",
      "Monthly check-in email",
      "Google review request email + SMS",
      "Referral request email",
    ],
  },
  {
    step: 6,
    title: "Website Form Integration",
    status: "in-progress",
    items: [
      "✓ Homepage lead capture form → /api/leads endpoint",
      "✓ /api/leads endpoint built with email + SMS + Supabase storage",
      "✓ GHL sync library created (src/lib/ghl.ts)",
      "✓ /api/leads updated to sync leads to GHL via API",
      "Pending: Add GHL_API_KEY + GHL_LOCATION_ID to Railway environment variables",
      "Pending: Test form-to-GHL flow end-to-end",
      "Pending: Add UTM parameter tracking to form submissions",
    ],
  },
  {
    step: 7,
    title: "Phone & Call Tracking",
    status: "pending",
    items: [
      "Set up GHL phone number for call tracking (Phoenix area code)",
      "Configure call recording (for training + compliance)",
      "Set up missed call text-back automation",
      "Route calls: office → Elliott's cell if unanswered",
      "Add tracking number to website header + footer",
    ],
  },
  {
    step: 8,
    title: "Elliott Training & Go-Live",
    status: "pending",
    items: [
      "60-minute training session with Elliott (recorded)",
      "Quick-reference card for daily CRM tasks",
      "Mobile app setup on Elliott's phone (GHL app)",
      "Test all automations with a real lead",
      "Go-live and monitor first 30 days",
    ],
  },
];

const API_ENV_VARS = [
  { name: "GHL_API_KEY", where: "GHL > Settings > API Keys > Create New Key", required: true },
  { name: "GHL_LOCATION_ID", where: "GHL > Settings > Business Profile > Location ID", required: true },
  { name: "GHL_PIPELINE_ID", where: "GHL > CRM > Pipelines > (click pipeline) > URL contains pipeline ID", required: false },
  { name: "GHL_STAGE_NEW_LEAD_ID", where: "GHL API: GET /v1/pipelines/{pipelineId}/stages", required: false },
];

const LEAD_SCORING = [
  { signal: "Website form submission", points: "+20", how: "Form trigger on /api/leads" },
  { signal: "Phone call inquiry", points: "+25", how: "GHL call tracking" },
  { signal: "Visited pricing page", points: "+10", how: "Website pixel / GHL tracking" },
  { signal: "Downloaded guide/resource", points: "+15", how: "Gated content form" },
  { signal: "Opened 3+ emails", points: "+10", how: "GHL email engagement tracking" },
  { signal: "Property 200+ units", points: "+15", how: "Custom field: Number of Units" },
  { signal: "Property 500+ units", points: "+25", how: "Custom field: Number of Units" },
  { signal: "No current towing provider", points: "+20", how: "Custom field: Current Provider" },
  { signal: "Referral from existing client", points: "+30", how: "Tag: src-referral" },
  { signal: "HOA board member", points: "+15", how: "Tag: role-board-member" },
  { signal: "Replied to email or SMS", points: "+20", how: "GHL reply detection" },
  { signal: "Booked consultation", points: "+30", how: "Calendar booking trigger" },
];

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    "pending": "bg-slate-100 text-slate-600 border border-slate-200",
    "in-progress": "bg-amber-50 text-amber-700 border border-amber-200",
    "complete": "bg-emerald-50 text-emerald-700 border border-emerald-200",
  };
  const labels: Record<string, string> = {
    "pending": "Pending",
    "in-progress": "In Progress",
    "complete": "Complete",
  };
  return (
    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${styles[status] || styles.pending}`}>
      {labels[status] || status}
    </span>
  );
}

export default function CRMPage() {
  return (
    <div className="space-y-8">
      <ScrollReveal>
        <PageHeader
          title="GoHighLevel CRM"
          subtitle="CRM setup guide, pipeline configuration, and automation workflows for Axle Towing lead management."
          badge="AI-2024"
        />
      </ScrollReveal>

      {/* Status Overview */}
      <ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Setup Phase", value: "Step 6 / 8", color: "text-amber-600" },
            { label: "Website Integration", value: "Connected", color: "text-emerald-600" },
            { label: "GHL Account", value: "Pending Setup", color: "text-slate-500" },
            { label: "Go-Live Target", value: "April 2026", color: "text-blue-600" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
              <div className={`text-lg font-bold font-mono ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Setup Checklist */}
      <ScrollReveal>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100">
            <h2 className="text-lg font-bold text-slate-800">GHL Setup Checklist</h2>
            <p className="text-sm text-slate-500 mt-1">8-step implementation plan — complete in order</p>
          </div>
          <div className="divide-y divide-slate-100">
            {SETUP_STEPS.map((step) => (
              <div key={step.step} className="px-6 py-5">
                <div className="flex items-start gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5 ${
                    step.status === "complete" ? "bg-emerald-100 text-emerald-700" :
                    step.status === "in-progress" ? "bg-amber-100 text-amber-700" :
                    "bg-slate-100 text-slate-500"
                  }`}>
                    {step.status === "complete" ? "✓" : step.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-slate-800">{step.title}</h3>
                      <StatusBadge status={step.status} />
                    </div>
                    <ul className="space-y-1">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${
                            item.startsWith("✓") ? "bg-emerald-500" :
                            item.startsWith("Pending") ? "bg-amber-400" :
                            "bg-slate-300"
                          }`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Environment Variables Needed */}
      <ScrollReveal>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100">
            <h2 className="text-lg font-bold text-slate-800">Environment Variables Required</h2>
            <p className="text-sm text-slate-500 mt-1">Add these to Railway (website) to activate GHL sync</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="text-left px-6 py-3 font-semibold text-slate-600">Variable</th>
                  <th className="text-left px-6 py-3 font-semibold text-slate-600">Where to Find</th>
                  <th className="text-left px-6 py-3 font-semibold text-slate-600">Required</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {API_ENV_VARS.map((v) => (
                  <tr key={v.name} className="hover:bg-slate-50/50">
                    <td className="px-6 py-3">
                      <code className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded text-xs font-mono">{v.name}</code>
                    </td>
                    <td className="px-6 py-3 text-slate-600">{v.where}</td>
                    <td className="px-6 py-3">
                      {v.required ? (
                        <span className="text-xs font-medium text-red-600 bg-red-50 border border-red-100 px-2 py-0.5 rounded-full">Required</span>
                      ) : (
                        <span className="text-xs font-medium text-slate-500 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-full">Optional</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ScrollReveal>

      {/* Pipeline Stages */}
      <ScrollReveal>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100">
            <h2 className="text-lg font-bold text-slate-800">Sales Pipeline Stages</h2>
            <p className="text-sm text-slate-500 mt-1">8 stages from new lead to active account — each with automated actions</p>
          </div>
          <div className="divide-y divide-slate-100">
            {PIPELINE_STAGES.map((s, i) => (
              <div key={s.stage} className="px-6 py-4 flex items-start gap-4">
                <div className={`w-2 h-full min-h-[2rem] rounded-full mt-1 shrink-0 ${s.color}`} style={{ width: 4 }} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-slate-400">{i + 1}</span>
                    <span className="font-semibold text-slate-800">{s.stage}</span>
                  </div>
                  <p className="text-sm text-slate-500 mb-1">{s.desc}</p>
                  <div className="flex items-start gap-1.5">
                    <svg className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <p className="text-xs text-blue-600 font-medium">{s.autoAction}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Lead Scoring */}
      <ScrollReveal>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100">
            <h2 className="text-lg font-bold text-slate-800">Lead Scoring Rules</h2>
            <p className="text-sm text-slate-500 mt-1">
              Score thresholds: 0–24 = Cold | 25–49 = Warm | 50+ = Hot (triggers immediate Elliott notification)
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="text-left px-6 py-3 font-semibold text-slate-600">Signal</th>
                  <th className="text-left px-6 py-3 font-semibold text-slate-600">Points</th>
                  <th className="text-left px-6 py-3 font-semibold text-slate-600">How Detected</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {LEAD_SCORING.map((row) => (
                  <tr key={row.signal} className="hover:bg-slate-50/50">
                    <td className="px-6 py-3 text-slate-700">{row.signal}</td>
                    <td className="px-6 py-3">
                      <span className="font-bold text-emerald-600">{row.points}</span>
                    </td>
                    <td className="px-6 py-3 text-slate-500">{row.how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ScrollReveal>

      {/* Automation Campaigns */}
      <ScrollReveal>
        <div className="space-y-6">
          {AUTOMATION_CAMPAIGNS.map((campaign) => (
            <div key={campaign.name} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-100">
                <h2 className="text-lg font-bold text-slate-800">{campaign.name}</h2>
                <p className="text-sm text-slate-500 mt-1">Trigger: {campaign.trigger}</p>
              </div>
              <div className="divide-y divide-slate-100">
                {campaign.days.map((d) => (
                  <div key={d.day} className="px-6 py-3 flex items-start gap-4">
                    <div className="w-16 shrink-0">
                      <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">{d.day}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-slate-700">{d.action}</p>
                    </div>
                    <div className="shrink-0">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        d.channel === "Email" ? "bg-blue-50 text-blue-600" :
                        d.channel === "SMS" ? "bg-purple-50 text-purple-600" :
                        d.channel === "Phone" ? "bg-green-50 text-green-600" :
                        d.channel.includes("+") ? "bg-amber-50 text-amber-600" :
                        "bg-slate-100 text-slate-600"
                      }`}>
                        {d.channel}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* How Website Integration Works */}
      <ScrollReveal>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100">
            <h2 className="text-lg font-bold text-slate-800">Website to GHL Integration Flow</h2>
            <p className="text-sm text-slate-500 mt-1">How leads from axletowing.com flow into GoHighLevel</p>
          </div>
          <div className="px-6 py-6">
            <div className="flex flex-col md:flex-row gap-0 md:gap-4">
              {[
                { step: "1", title: "Visitor fills form", detail: "Any of: homepage lead capture, get-quote form, service page CTA, exit-intent popup", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
                { step: "2", title: "API route fires", detail: "POST /api/leads — validates and processes the submission with a reference ID", icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
                { step: "3", title: "4 parallel actions", detail: "Email to Elliott via Resend | SMS to Elliott via Twilio | Store in Supabase | Sync to GHL", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                { step: "4", title: "GHL CRM receives lead", detail: "Contact created with tags + custom fields. Opportunity added to pipeline. Nurture sequence starts.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
              ].map((item, i) => (
                <div key={item.step} className="flex md:flex-col items-start md:items-center gap-4 md:gap-0 flex-1">
                  <div className="flex md:flex-col items-center gap-2 md:gap-3 w-full">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                      {item.step}
                    </div>
                    {i < 3 && (
                      <div className="flex-1 md:flex-none h-px md:h-8 w-px md:w-px bg-slate-200 md:mx-auto hidden md:block" />
                    )}
                  </div>
                  <div className="md:text-center md:px-2 mt-0 md:mt-3">
                    <div className="font-semibold text-slate-800 text-sm">{item.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="px-6 pb-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <div>
                  <div className="font-semibold text-amber-800 text-sm">Action Required to Activate</div>
                  <div className="text-sm text-amber-700 mt-1">
                    The GHL sync code is live on the website. To activate it, add <code className="bg-amber-100 px-1 rounded text-xs font-mono">GHL_API_KEY</code> and <code className="bg-amber-100 px-1 rounded text-xs font-mono">GHL_LOCATION_ID</code> to Railway environment variables. Until then, leads are still captured via email + SMS + Supabase.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
