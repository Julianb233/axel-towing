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
  bodies: string[];
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
    bodies: [
      `Hi [First Name],\n\nWelcome aboard. I'm Elliott with Axle Towing & Impound — your dedicated point of contact for parking enforcement at [Property Name].\n\nA few things you can expect from us:\n\n• Free standing-service agreement — vehicle owners pay statutory fees, never the property\n• ARS-compliant signage installed at no cost\n• 24/7 dispatch from our Phoenix and Apache Junction yards\n• Sub-30-minute average response time across the Phoenix metro\n• Per-impound documentation packet auto-delivered (photo, signage proof, time, driver ID)\n\nIf you'd like to schedule a free property assessment to walk through enforcement priorities, just reply or grab a slot here:\n\n[Book Property Assessment — Calendar Link]\n\nTalk soon,\nElliott\nAxle Towing & Impound\n480-288-5526 | axletowing.com`,
      `Hi [First Name],\n\nUnauthorized parking at [Property Name] doesn't have to be a recurring conversation at every board or tenant meeting.\n\nHere's what we typically eliminate within the first 48 hours of taking over a property:\n\n• Fire-lane violators (immediate tow authority under Arizona fire-lane law)\n• Reserved-spot offenders (we coordinate with your tenant list)\n• Abandoned vehicles (full MVD chain of custody, recovered via lien sale — not billed to you)\n• After-hours commercial parking (with custom posting strategy)\n\nWe install ARS 9-499.05-compliant signage at every entrance the same week we sign. From that point on, enforcement runs in the background — you only hear from us when there's something to action.\n\nWant to see how it'd work at your property? Reply with your address and we'll do a free walk-through.\n\nElliott | Axle Towing & Impound`,
      `Hi [First Name],\n\nQuick story.\n\nCopper Creek Apartments (148 units, Tempe) was getting 12-15 parking complaints/week before they switched to us. Tenants were parking in fire lanes, residents were taking visitor spots, two abandoned vehicles had been on the property for 3 months, and the previous tow company had a 90-minute response time and a yard 45 miles out.\n\nWithin 30 days of switching:\n\n• Parking complaints dropped from 12-15/week to 1-2/week\n• Both abandoned vehicles cleared via lien sale (zero cost to property)\n• Average response time on the property: 22 minutes\n• Tenant retrieval rate: 94% (tenants find their cars and pay statutory fees, not us)\n\nThe property manager said the unexpected win was the documentation packet — every tow comes with photo evidence + signage proof, which made HOA-board challenges drop to zero.\n\nWant to see if we can do the same at [Property Name]? Reply or call 480-288-5526.\n\nElliott`,
      `Hi [First Name],\n\nQuick offer for new property accounts:\n\n**Free property assessment** — we walk your property, photograph current parking patterns, identify your top 3 enforcement gaps, and propose a posting + dispatch plan. No obligation.\n\n**First month of standing service free** — already free, but for the first 30 days we waive any sign-fabrication delay (we use stock-on-hand) so you can start enforcement same-week instead of 5-7 business days.\n\nIf this fits, the next step is a 15-minute call:\n\n[Book a Call — Calendar Link]\n\nOr reply with the best 3 time slots for a property walk-through this week.\n\nElliott | Axle Towing & Impound\n480-288-5526`,
      `Hi [First Name],\n\nLast note from me.\n\nIf parking violations at [Property Name] are still costing you tenant complaints, board challenges, or insurance-rating risk on fire-lane infractions — let's solve that this month.\n\nIf you're already happy with your current operator or this isn't the right fit, no problem — I'll stop here.\n\nIf you want to talk: 480-288-5526 or reply.\n\nElliott\nAxle Towing & Impound\naxletowing.com`,
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
    bodies: [
      `Hi [First Name],\n\nLocksmiths and tow operators in Phoenix have a natural overlap — a stranded vehicle owner often calls one of us first, then needs the other.\n\nWe're opening up a referral program for Phoenix-metro locksmith businesses:\n\n• You refer a private-property tow that we accept → you earn a referral commission per completed dispatch\n• You handle the lockout side → we handle the impound side → both businesses get paid + the customer gets one coordinated experience\n• No exclusivity, no contracts, no minimum volume\n\nIf this is interesting, I can send the one-page referral agreement and our dispatcher number for direct routing.\n\nReply or call 480-288-5526.\n\nElliott | Axle Towing & Impound`,
      `Hi [First Name],\n\nHow the Axle locksmith referral works:\n\n1. Locksmith arrives on-site, identifies a vehicle that needs to be towed (lockout that becomes total-loss situation, recovered stolen vehicle, etc.)\n2. Locksmith calls Axle dispatch on a dedicated partner line\n3. Axle dispatcher captures vehicle info + locksmith referral code\n4. Axle truck arrives within 30 minutes, locksmith leaves\n5. After successful tow + impound, partner commission is paid out monthly via direct deposit\n\nCommission rate, payment schedule, and the partner agreement are all on a one-page doc — happy to send it over for review.\n\nReply with your business name + the locksmith's name handling referrals on your team.\n\nElliott`,
      `Hi [First Name],\n\nQuick stat: 200+ Phoenix-metro partners (locksmiths, mechanics, parking-permit providers, moving companies) refer business to Axle every month. The average partner earns $400-1,200/month in pure referral commission, no work beyond the call.\n\nIf you'd like to be on the list, last step is a 10-minute setup call so we can:\n\n• Get your business added to our partner CRM\n• Issue your dedicated referral code\n• Walk through the tracking dashboard (you can see every referral in real-time)\n• Set up direct-deposit payment\n\n[Book 10-min Setup — Calendar Link]\n\nOr reply with a good time this week.\n\nElliott | Axle Towing & Impound`,
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
    bodies: [
      `Hi [First Name],\n\nMechanic shops in Phoenix lose customers to faster competitors when there's a delay between a vehicle breakdown and the tow to your shop.\n\nWe can fix that.\n\nAxle Towing's tow-to-shop partnership lets your customers call Axle directly when they need a tow to your facility. We respond in under 30 minutes, tow directly to your shop (not to a competitor's lot), and route the customer to your service writer.\n\nNo cost to your shop. No contracts. Just faster customers.\n\nReply or call 480-288-5526 to set this up.\n\nElliott | Axle Towing & Impound`,
      `Hi [First Name],\n\nHere's exactly how the tow-to-shop service works for your customers:\n\n1. Customer's vehicle breaks down → they call Axle Towing\n2. Axle dispatcher asks "where's it going?" → customer says "[Your Shop Name]"\n3. Axle truck arrives within 30 minutes\n4. Customer's vehicle is towed directly to your shop\n5. Your service writer gets a heads-up call from our dispatcher with vehicle make/model + customer name\n6. Customer arrives at your shop already informed — no scrambling, no lost time\n\nNo middleman, no third-party platform fees, no markup. Customer pays the standard tow fee (statutory) directly to us.\n\nWant to be on the dispatcher's preferred-shop list? Reply with your shop name + address.\n\nElliott`,
      `Hi [First Name],\n\nLast note: ready to be on Axle's preferred-shop list?\n\nIt takes about 5 minutes to set up:\n\n1. We add your shop to dispatcher's preferred-routing system\n2. You get a dedicated partner phone number for direct service-writer hand-offs\n3. We send you a window decal that says "Towing partner: Axle Towing & Impound" (some shops display it; optional)\n4. We start routing tow-to-shop customers your direction starting same-week\n\nReply or call 480-288-5526 with:\n• Shop name + address\n• Service writer name + direct line\n• Hours of operation\n\nThat's it.\n\nElliott | Axle Towing & Impound`,
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
    bodies: [
      `Your vehicle has been towed and impounded by Axle Towing & Impound.\n\n**Vehicle:** [Year] [Make] [Model], plate [Plate]\n**Tow location:** [Property Name], [Address]\n**Time of tow:** [Date/Time]\n**Reason:** [Reason — fire lane, expired permit, abandoned, etc.]\n**Impound yard:** [Phoenix yard, 320 E. Pioneer St., 85040 OR Apache Junction yard, 1151 W. Apache Trail, 85120]\n\n**To retrieve your vehicle, you will need:**\n\n• Government-issued photo ID\n• Vehicle registration (if available)\n• Proof of insurance\n• Payment for impound + storage fees (statutory rates set by Arizona)\n\nOur impound yard is open Mon-Fri 9am-5pm for vehicle pickup. After-hours retrieval is available — call 480-288-5526 to coordinate.\n\nIf you believe your vehicle was towed in error, reply to this email with your vehicle details and we'll review the impound documentation.\n\nAxle Towing & Impound\n480-288-5526 | axletowing.com`,
      `Reminder: your vehicle is still at our impound yard.\n\n**Vehicle:** [Year] [Make] [Model], plate [Plate]\n**Days held:** [N] day(s)\n**Total fees as of today:** [Tow fee + N days × storage rate]\n**Each additional day adds:** [statutory daily storage rate]\n\n**Yard directions:**\n[Phoenix Yard]\n320 E. Pioneer St., Phoenix, AZ 85040\nMon-Fri 9am-5pm | Saturday by appointment\n\n[Apache Junction Yard]\n1151 W. Apache Trail, Apache Junction, AZ 85120\nMon-Fri 9am-5pm | Saturday by appointment\n\n**Payment accepted:** Credit/debit card, cash. Vehicles unclaimed for 30+ days enter Arizona's abandoned-vehicle process and become subject to lien sale per state statute.\n\nIf you cannot retrieve in person, you may authorize a third party with a notarized release. Reply for details.\n\nAxle Towing & Impound\n480-288-5526 | axletowing.com`,
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
                        {seq.subjects.map((subject, idx) => {
                          const isPreviewOpen = previewSubject === subject;
                          const body = seq.bodies?.[idx];
                          return (
                            <div key={idx} className="rounded-xl bg-white/70 border border-white hover:border-gray-200 transition-colors overflow-hidden">
                              <div
                                className="flex items-center gap-3 p-3 cursor-pointer"
                                onClick={() => setPreviewSubject(isPreviewOpen ? null : subject)}
                              >
                                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center">
                                  <span className="text-xs font-bold text-gray-500">D{seq.dayOffsets[idx]}</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-900 truncate">{subject}</p>
                                  <p className="text-xs text-gray-500">Sends on day {seq.dayOffsets[idx]}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                                    {isPreviewOpen ? "Hide" : "Preview"}
                                  </span>
                                  <svg
                                    className={`w-4 h-4 text-gray-400 transition-transform ${isPreviewOpen ? "rotate-180" : ""}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                  </svg>
                                </div>
                              </div>
                              {isPreviewOpen && body && (
                                <div className="px-4 pb-4 pt-1 border-t border-gray-100 bg-white/40">
                                  <div className="bg-white rounded-lg border border-gray-100 p-4 mt-3">
                                    <div className="mb-3 pb-3 border-b border-gray-100">
                                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Subject</p>
                                      <p className="text-sm font-semibold text-gray-900 mt-1">{subject}</p>
                                    </div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Body Preview</p>
                                    <pre className="text-sm text-gray-800 whitespace-pre-wrap font-sans leading-relaxed">{body}</pre>
                                  </div>
                                </div>
                              )}
                              {isPreviewOpen && !body && (
                                <div className="px-4 pb-4 pt-3 border-t border-gray-100 text-xs italic text-gray-500">
                                  Body content not yet available for this email — please check back later or contact your AI Acrobatics rep.
                                </div>
                              )}
                            </div>
                          );
                        })}
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
