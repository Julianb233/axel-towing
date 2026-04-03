"use client";

import PageHeader from "../../components/PageHeader";
import ScrollReveal from "../../components/ScrollReveal";

interface NeedItem {
  id: number;
  title: string;
  priority: "critical" | "high" | "medium";
  why: string;
  howTo: string;
  impact: string;
  estimatedTime: string;
}

const needs: NeedItem[] = [
  {
    id: 1,
    title: "Point axletowing.com DNS to our new site",
    priority: "critical",
    why: "Your brand-new 299-page website is live and ready — but until the domain points to it, Google can't index any of it. Every day without this costs you ranking momentum.",
    howTo: "We've already emailed your previous web developer (Duo Webz) with the exact DNS changes needed. He just needs to update 2 records in LiquidWeb: A record to 76.76.21.21 and CNAME for www to cname.vercel-dns.com. We're waiting on him to make the change — follow up if you haven't heard back.",
    impact: "Unlocks ALL 299 pages for Google indexing, enabling keyword rankings, organic traffic, and lead generation.",
    estimatedTime: "5 minutes",
  },
  {
    id: 2,
    title: "Google Business Profile access",
    priority: "high",
    why: "The Google Map Pack (the top 3 local results) drives the most calls for towing companies. We need to optimize your listing, post weekly updates, and manage reviews.",
    howTo: "Go to business.google.com, sign in with the account that manages your listing (likely axletowing@gmail.com). Click your business > People and access > Add > enter julian@aiacrobatics.com as Manager. Click Invite.",
    impact: "Map Pack optimization, weekly posts, review management, Q&A seeding — all drive more calls.",
    estimatedTime: "3 minutes",
  },
  {
    id: 3,
    title: "Google Search Console access",
    priority: "high",
    why: "We need to submit your sitemap so Google knows about all 299 pages, and monitor which keywords are bringing traffic.",
    howTo: "Go to search.google.com/search-console. Sign in with the Google account that owns axletowing.com. Go to Settings > Users and permissions > Add user > enter julian@aiacrobatics.com with Full access.",
    impact: "Sitemap submission, indexing monitoring, keyword tracking directly from Google.",
    estimatedTime: "3 minutes",
  },
  {
    id: 4,
    title: "Google Analytics access",
    priority: "medium",
    why: "We need to track how many people visit the site, which pages they land on, and how many fill out your contact form or click to call.",
    howTo: "Already shared with julianb233@gmail.com per Duo Webz — we'll verify full access once DNS is pointed. No action needed from you right now.",
    impact: "Conversion tracking, traffic analytics, ROI measurement for all SEO work.",
    estimatedTime: "3 minutes",
  },
  {
    id: 5,
    title: "Confirm your full service area",
    priority: "high",
    why: "We've built 38 city/neighborhood pages across Phoenix metro. We need to make sure we're not missing any cities you serve — each missing city is a missed opportunity for local search traffic.",
    howTo: "We currently have pages for: Phoenix, Scottsdale, Mesa, Glendale, Gilbert, Chandler, Tempe, Apache Junction, plus 27 neighborhoods. Do you also serve Peoria, Surprise, Avondale, Goodyear, Buckeye, or Fountain Hills? Just reply with any cities to add or remove.",
    impact: "Each new city page targets 5-10 local keywords and can rank within 30-60 days of indexing.",
    estimatedTime: "2 minutes (just text or email us the list)",
  },
  {
    id: 6,
    title: "\"Watch How It Works\" video for homepage",
    priority: "medium",
    why: "The homepage has a 'Watch How It Works' button ready to go — it just needs your video. A 60-90 second video showing your team in action would dramatically increase trust and conversions.",
    howTo: "Film a quick walkthrough of your process — a truck arriving at a property, loading a vehicle, your dispatch center, or even just Elliott on camera explaining what makes Axle different. Phone quality is fine. Text or email it to julian@aiacrobatics.com.",
    impact: "Video on homepage increases conversions by 80% on average for local service businesses.",
    estimatedTime: "30 minutes to film",
  },
  {
    id: 7,
    title: "Photos of your trucks, team, and yard",
    priority: "medium",
    why: "The site currently uses professional images, but real photos of YOUR fleet and team build way more trust with property managers. People want to see who they're hiring.",
    howTo: "Snap photos of: your trucks (flatbeds, wreckers), your team, your impound yard, trucks in action at job sites. Landscape orientation is best. Text them to (619) 509-0699 or email to julian@aiacrobatics.com.",
    impact: "Authentic photos build trust and help convert property manager leads into signed contracts.",
    estimatedTime: "15 minutes",
  },
  {
    id: 8,
    title: "TowBook API credentials",
    priority: "medium",
    why: "We've built a vehicle lookup page that lets customers check their tow status online instead of calling your dispatch. But it needs your TowBook API key to work.",
    howTo: "Log into app.towbook.com > Settings > API Access (or Integrations). If you see an option to generate an API key, copy it and email it to us. If not, call TowBook support at (918) 615-0505 and ask for API access credentials. Forward whatever they give you to julian@aiacrobatics.com.",
    impact: "Reduces dispatch call volume and improves customer experience — a unique feature no competitor has.",
    estimatedTime: "10 minutes",
  },
  {
    id: 9,
    title: "Review & approve email templates",
    priority: "medium",
    why: "We've designed 40+ automated email and SMS templates for lead nurturing, re-engagement, and partner outreach. They're ready to go but we need your sign-off before activating.",
    howTo: "Visit the GHL Approvals page on this dashboard (in the sidebar). Read through the templates and click Approve or Request Changes on each one.",
    impact: "Automated follow-up sequences that nurture leads 24/7 without any manual work from your team.",
    estimatedTime: "20-30 minutes to review all",
  },
];

const priorityConfig = {
  critical: {
    bg: "bg-red-50 border-red-200",
    badge: "bg-red-600 text-white",
    label: "LAUNCH BLOCKER",
    ring: "ring-red-500/20",
  },
  high: {
    bg: "bg-amber-50 border-amber-200",
    badge: "bg-amber-500 text-white",
    label: "HIGH PRIORITY",
    ring: "ring-amber-500/20",
  },
  medium: {
    bg: "bg-blue-50 border-blue-200",
    badge: "bg-blue-500 text-white",
    label: "WHEN YOU CAN",
    ring: "ring-blue-500/20",
  },
};

export default function NeedsPage() {
  const critical = needs.filter((n) => n.priority === "critical");
  const high = needs.filter((n) => n.priority === "high");
  const medium = needs.filter((n) => n.priority === "medium");

  return (
    <>
      <PageHeader
        badge="Action Required"
        title="What We Need From You"
        subtitle="Everything we need to get your site live and fully optimized — most items take less than 5 minutes"
      />

      {/* Summary Banner */}
      <ScrollReveal>
        <div className="mb-8 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold">Your site is 99% ready to launch</h2>
              <p className="text-red-100 text-sm">299 pages built and deployed. We just need a few things from you to go live.</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <div className="text-2xl font-bold">{critical.length}</div>
              <div className="text-xs text-red-200">Launch Blocker</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <div className="text-2xl font-bold">{high.length}</div>
              <div className="text-xs text-red-200">High Priority</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <div className="text-2xl font-bold">{medium.length}</div>
              <div className="text-xs text-red-200">When You Can</div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Quick Contact */}
      <ScrollReveal delay={50}>
        <div className="mb-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Need help with any of these? Reach out anytime:</h3>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="tel:6195090699" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              (619) 509-0699
            </a>
            <a href="mailto:julian@aiacrobatics.com" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              julian@aiacrobatics.com
            </a>
            <span className="flex items-center gap-2 text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              Or text/iMessage anytime
            </span>
          </div>
        </div>
      </ScrollReveal>

      {/* Critical Items */}
      {critical.length > 0 && (
        <ScrollReveal delay={100}>
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
              Launch Blockers — Nothing goes live without these
            </h2>
            <div className="space-y-4">
              {critical.map((item) => (
                <NeedCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* High Priority */}
      {high.length > 0 && (
        <ScrollReveal delay={200}>
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full" />
              High Priority — Needed for full optimization
            </h2>
            <div className="space-y-4">
              {high.map((item) => (
                <NeedCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Medium Priority */}
      {medium.length > 0 && (
        <ScrollReveal delay={300}>
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              When You Get a Chance — Will unlock additional features
            </h2>
            <div className="space-y-4">
              {medium.map((item) => (
                <NeedCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Bottom CTA */}
      <ScrollReveal delay={400}>
        <div className="mt-8 bg-gradient-to-r from-[#1B2A3F] to-[#2a3f5f] rounded-2xl p-6 text-white text-center shadow-lg">
          <h3 className="text-lg font-bold mb-2">Want us to handle any of these for you?</h3>
          <p className="text-gray-300 text-sm mb-4">If any of these feel complicated, just share your login credentials securely and we'll take care of it. No judgment — that's what we're here for.</p>
          <div className="flex justify-center gap-4">
            <a href="tel:6195090699" className="bg-white text-[#1B2A3F] px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-100 transition-colors">
              Call Julian
            </a>
            <a href="mailto:julian@aiacrobatics.com?subject=Axle%20Towing%20-%20Here%20are%20my%20logins" className="bg-red-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-red-700 transition-colors">
              Email Credentials
            </a>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}

function NeedCard({ item }: { item: NeedItem }) {
  const config = priorityConfig[item.priority];

  return (
    <div className={`rounded-2xl border ${config.bg} p-5 shadow-sm`}>
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${config.badge}`}>
              {config.label}
            </span>
            <span className="text-xs text-gray-500">~{item.estimatedTime}</span>
          </div>
          <h3 className="text-base font-semibold text-gray-900 mt-2">{item.title}</h3>
        </div>
      </div>

      <div className="space-y-3 text-sm">
        <div>
          <span className="font-medium text-gray-700">Why this matters: </span>
          <span className="text-gray-600">{item.why}</span>
        </div>

        <div className="bg-white/60 rounded-xl p-3 border border-white">
          <span className="font-medium text-gray-700 block mb-1">How to do it:</span>
          <span className="text-gray-600">{item.howTo}</span>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          <span className="text-green-700 font-medium">Impact: {item.impact}</span>
        </div>
      </div>
    </div>
  );
}
