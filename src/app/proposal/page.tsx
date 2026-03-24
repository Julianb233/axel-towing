"use client";

import { useEffect, useRef, useState } from "react";
import KlarnaButton from "@/components/KlarnaButton";

/* ── Real keyword data from Axle Towing Keyword Research (March 2026) ── */
const keywordData = [
  { keyword: "private property towing Phoenix", volume: "150-250", difficulty: "Medium", intent: "Buying", cpc: "$12-18", opportunity: "Core money keyword" },
  { keyword: "HOA towing company Phoenix", volume: "30-60", difficulty: "Low", intent: "Buying", cpc: "$8-14", opportunity: "No competitor targeting" },
  { keyword: "apartment towing company Phoenix", volume: "30-50", difficulty: "Low", intent: "Buying", cpc: "$10-15", opportunity: "No competitor targeting" },
  { keyword: "parking enforcement company Phoenix", volume: "40-80", difficulty: "Low-Med", intent: "Buying", cpc: "$8-12", opportunity: "Wide open" },
  { keyword: "how to get car towed from private property AZ", volume: "100-200", difficulty: "Low", intent: "Research", cpc: "$4-8", opportunity: "Content pillar" },
  { keyword: "Arizona private property towing laws", volume: "80-150", difficulty: "Low-Med", intent: "Research", cpc: "$3-6", opportunity: "Authority builder" },
  { keyword: "HOA parking enforcement rules Arizona", volume: "50-100", difficulty: "Low", intent: "Research", cpc: "$3-5", opportunity: "High-value content" },
  { keyword: "can HOA tow my car Arizona", volume: "40-80", difficulty: "Low", intent: "Research", cpc: "$2-4", opportunity: "FAQ snippet" },
  { keyword: "apartment parking rules Arizona", volume: "40-80", difficulty: "Low", intent: "Research", cpc: "$2-4", opportunity: "Tenant + PM traffic" },
  { keyword: "vehicle relocation service Phoenix", volume: "15-30", difficulty: "Very Low", intent: "Buying", cpc: "$6-10", opportunity: "Zero competition" },
  { keyword: "towing Scottsdale AZ", volume: "200-400", difficulty: "Medium", intent: "Buying", cpc: "$15-22", opportunity: "No competitor page" },
  { keyword: "towing Gilbert AZ", volume: "100-200", difficulty: "Low", intent: "Buying", cpc: "$12-18", opportunity: "Almost no competition" },
  { keyword: "towing Mesa AZ", volume: "200-400", difficulty: "Medium", intent: "Buying", cpc: "$14-20", opportunity: "Few competitor pages" },
  { keyword: "commercial property towing Phoenix", volume: "20-40", difficulty: "Low", intent: "Buying", cpc: "$8-14", opportunity: "Wide open" },
  { keyword: "private property impound fees Arizona", volume: "30-50", difficulty: "Low", intent: "Research", cpc: "$3-6", opportunity: "Price transparency" },
  { keyword: "towing signage requirements Arizona", volume: "15-30", difficulty: "Very Low", intent: "Research", cpc: "$2-4", opportunity: "Compliance guide" },
  { keyword: "parking enforcement Tempe AZ", volume: "15-25", difficulty: "Very Low", intent: "Buying", cpc: "$8-14", opportunity: "College town demand" },
  { keyword: "how to set up HOA towing program", volume: "20-40", difficulty: "Very Low", intent: "Research", cpc: "$4-8", opportunity: "Setup guide for boards" },
  { keyword: "abandoned vehicle apartment complex AZ", volume: "20-40", difficulty: "Low", intent: "Research", cpc: "$3-5", opportunity: "Abandonment guide" },
  { keyword: "impound towing service Phoenix", volume: "40-70", difficulty: "Low-Med", intent: "Buying", cpc: "$10-16", opportunity: "Service-focused" },
];

const sources = [
  { id: 1, text: "Axle Towing Keyword Research, March 2026 -- search volume estimates based on industry benchmarks, SEMrush, and Ahrefs aggregates" },
  { id: 2, text: "Competitor Analysis: Phoenix Private Property Towing Market, March 2026 -- 7 competitor website audits" },
  { id: 3, text: "Kwik Tow: 20+ years in market, 4 yards, 263 Yelp reviews (1.2 stars), zero blog posts, zero city pages (kwiktow.com)" },
  { id: 4, text: "Freeway Towing (phoenixtowtruck.com): 1,011 Google reviews, 4.7 stars, 2025 ACE Award, best digital presence in market" },
  { id: 5, text: "Digital Presence Scorecard: Among PPI specialists, average digital maturity = 2.2/10. Kwik Tow = 2.8/10, Arizona Impound = 2.2/10" },
  { id: 6, text: "Phoenix multifamily market: 22,100 units under construction, 23,000 delivered in past year (Matthews Q3 2025)" },
  { id: 7, text: "All City Towing: 2,000+ private property accounts, shifted focus to police towing, not actively servicing PPI accounts" },
  { id: 8, text: "Arizona Multihousing Association (AMA) -- Axle Towing and Kwik Tow both listed as industry partners" },
  { id: 9, text: "Google AI Overviews now appear for ~40% of local service queries (Search Engine Journal 2025)" },
  { id: 10, text: "Axle Towing site currently ranks page 4+ for target keywords -- zero organic search visibility" },
  { id: 11, text: "Content Gap Analysis: Zero PPI competitors have active blogs, city pages, HOA guides, or property manager resources" },
];

function Src({ ids }: { ids: number[] }) {
  return (
    <span className="proposal-source" title={ids.map(id => sources.find(s => s.id === id)?.text).join("; ")}>
      [{ids.join(",")}]
    </span>
  );
}

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    ref.current?.querySelectorAll(".proposal-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

function DeliverableCard({ title, icon, brief, details, benefits, timeline, tools }: {
  title: string; icon: string; brief: string; details: string; benefits: string[]; timeline: string; tools: string[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`proposal-glass rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${open ? "ring-2 ring-[#1e6bb8]/30 shadow-lg" : "hover:shadow-md hover:-translate-y-1"}`} onClick={() => setOpen(!open)}>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="text-3xl">{icon}</div>
          <div className={`text-xs font-bold px-3 py-1 rounded-full transition-all duration-300 ${open ? "bg-[#1e6bb8] text-white" : "bg-[#1e6bb8]/10 text-[#1e6bb8]"}`}>
            {open ? "Close" : "View Details"}
          </div>
        </div>
        <h3 className="font-bold text-[#1b2a3f] text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>{title}</h3>
        <p className="text-sm text-[#4a5568] leading-relaxed">{brief}</p>
      </div>
      <div className={`proposal-card-expand ${open ? "open" : ""}`}>
        <div className="px-6 pb-6 border-t border-[#1e6bb8]/10 pt-4">
          <p className="text-sm text-[#1b2a3f] leading-relaxed mb-4">{details}</p>
          <div className="mb-4">
            <h4 className="text-xs font-bold text-[#1e6bb8] uppercase tracking-wider mb-2">Business Impact</h4>
            <div className="space-y-1.5">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-2 text-sm text-[#4a5568]">
                  <span className="text-[#1e6bb8] mt-0.5 shrink-0">&#10003;</span>{b}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="bg-[#1b2a3f]/5 rounded-lg px-3 py-1.5">
              <span className="text-xs text-[#4a5568]">Timeline:</span>
              <span className="text-xs font-bold text-[#1b2a3f] ml-1">{timeline}</span>
            </div>
            {tools.map((t) => (
              <div key={t} className="bg-[#1e6bb8]/5 rounded-lg px-3 py-1.5">
                <span className="text-xs font-medium text-[#1e6bb8]">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const deliverables = [
  {
    title: "88+ Page SEO-Optimized Website",
    icon: "\u{1F310}",
    brief: "Complete site rebuild with 42 blog articles, 23 location pages, 7 service pages, and full schema markup.",
    details: "Your current site ranks on page 4+ for target keywords. We have already built 88 pages of optimized content covering every service, city, and topic your prospects search for. This includes dedicated pages for each Phoenix metro city, service-specific landing pages, and a comprehensive blog covering Arizona towing laws, HOA regulations, and property manager guides.",
    benefits: [
      "10-17x more content than any competitor in the market",
      "City pages for Phoenix, Scottsdale, Mesa, Gilbert, Chandler, Tempe, Glendale, Apache Junction",
      "Service pages targeting every high-intent keyword category",
      "FAQPage, LocalBusiness, and Service schema on every page",
      "Mobile-first, sub-2s load times (Next.js 16 + Railway cloud hosting)",
    ],
    timeline: "Built (ready for DNS transfer)",
    tools: ["Next.js 16", "Tailwind CSS", "Railway", "Schema.org"],
  },
  {
    title: "Content Marketing Engine",
    icon: "\u{1F4DD}",
    brief: "42 blog articles targeting high-intent keywords with zero competition. New articles monthly.",
    details: "We produce 2-4 new articles per month targeting the exact questions property managers, HOA boards, and tenants are searching. Each article is structured for Google AI Overviews with FAQ schema, direct-answer formatting, and internal linking to service pages. Topics include Arizona towing law guides, HOA enforcement best practices, property manager setup guides, and city-specific content.",
    benefits: [
      "Capture research-intent traffic that converts to leads over time",
      "Build topical authority that boosts all pages in search",
      "Get cited by AI assistants (ChatGPT, Perplexity, Google AI Overviews)",
      "Content is permanent virtual real estate -- works 24/7 unlike paid ads",
      "Each article targets 3-5 long-tail keywords simultaneously",
    ],
    timeline: "Ongoing (2-4/month)",
    tools: ["SEO Research", "Schema Markup", "AI Optimization", "Analytics"],
  },
  {
    title: "Local SEO Domination",
    icon: "\u{1F4CD}",
    brief: "Google Business Profile optimization for both yards, 50+ citation builds, and review strategy.",
    details: "We optimize both your Apache Junction and Phoenix Google Business Profiles with proper categories, service descriptions, Q&A seeding, and weekly GBP posts. We build consistent citations across 50+ directories including Arizona Multihousing Association, Yelp, Towing.com, and local chambers of commerce. Plus a review strategy focused on collecting property manager reviews to build a 4.5+ star profile.",
    benefits: [
      "Appear in Google Map Pack for local towing searches",
      "Consistent NAP across 50+ directories",
      "Weekly GBP posts keep profiles active and boost visibility",
      "Property manager review strategy separates you from competitor 1-2 star ratings",
      "AMA and industry association listings boost authority signals",
    ],
    timeline: "Month 1-3 foundation, ongoing",
    tools: ["Google Business", "BrightLocal", "AMA", "Yelp"],
  },
  {
    title: "AI Search Optimization",
    icon: "\u{1F916}",
    brief: "Structured content that gets cited by Google AI Overviews, ChatGPT, and Perplexity.",
    details: "Google AI Overviews now appear for ~40% of local service queries. Zero competitors in your market are optimized for this. We structure every page with direct-answer formatting, FAQ schema, numbered step-by-step processes, and authoritative citations to Arizona statutes (ARS 9-499.05). This makes Axle Towing the answer when property managers ask AI assistants for towing recommendations.",
    benefits: [
      "First-mover advantage -- no competitor is doing this",
      "Get cited in Google AI Overviews for towing law questions",
      "Appear in ChatGPT and Perplexity answers about Phoenix towing",
      "Structured data helps Google understand your services precisely",
      "Future-proof against the shift from traditional search to AI search",
    ],
    timeline: "Built into all content",
    tools: ["Schema.org", "FAQ Markup", "Structured Data", "ARS Citations"],
  },
  {
    title: "Competitive Intelligence & Reporting",
    icon: "\u{1F4CA}",
    brief: "Monthly reporting on rankings, traffic, leads, and competitor movements.",
    details: "We track keyword rankings, organic traffic, lead form submissions, phone calls, and competitor content changes. Monthly reports show exactly where you stand vs. Kwik Tow, All City, Zip Tow, and others. We identify new keyword opportunities, content gaps to exploit, and ranking improvements.",
    benefits: [
      "Track ranking progress for all 50+ target keywords",
      "Monitor competitor content and SEO changes",
      "Measure organic traffic growth month-over-month",
      "Track leads and calls from organic search",
      "Identify new opportunities as the market evolves",
    ],
    timeline: "Monthly reports",
    tools: ["Google Analytics", "Search Console", "Ahrefs", "Dashboard"],
  },
  {
    title: "CRM & Lead Nurturing System",
    icon: "\u{1F4DE}",
    brief: "Custom CRM to track property manager leads, automated follow-ups, and pipeline management.",
    details: "We implement a CRM to track every property manager lead from first contact to signed contract. Automated follow-up sequences for new inquiries, quarterly check-in reminders for accounts on hold, and monthly service reports sent automatically. Multi-channel integration with LinkedIn, Instagram, and Facebook for HOA board outreach. AI voice agent for inbound/outbound calls.",
    benefits: [
      "Never lose a lead -- every inquiry tracked and followed up",
      "Automated nurture sequences for long-cycle property manager deals",
      "Quarterly calendar system to re-engage accounts on hold",
      "AI voice agent handles after-hours calls as answering service",
      "Pipeline tracking for new property acquisitions",
    ],
    timeline: "Month 1-2 setup",
    tools: ["Custom CRM", "AI Voice Agent", "Email Automation", "Calendar"],
  },
];

const articleExamples = [
  {
    title: "The Complete Guide to Arizona Private Property Towing Laws (2026)",
    keywords: ["Arizona private property towing laws", "ARS towing laws private property", "is private property towing legal in Arizona"],
    volume: "200-400/mo combined",
    intent: "Research \u2192 Authority Builder",
    description: "Comprehensive guide covering ARS 9-499.05, signage requirements, notification rules, and common gray areas. Structured with FAQ schema for AI Overview citations.",
  },
  {
    title: "HOA Parking Enforcement in Arizona: Rules, Signs, and Towing Procedures",
    keywords: ["HOA parking enforcement rules Arizona", "can HOA tow my car Arizona", "HOA towing laws Arizona"],
    volume: "150-300/mo combined",
    intent: "Research \u2192 Decision Stage",
    description: "Targets both HOA board members looking to set up enforcement and residents wanting to understand their rights. Covers the 2023 legislation changes restricting HOA enforcement on public streets.",
  },
  {
    title: "How to Set Up Parking Enforcement at Your Apartment Complex",
    keywords: ["how to set up parking enforcement", "apartment parking enforcement best practices", "apartment complex towing laws Arizona"],
    volume: "80-150/mo combined",
    intent: "Decision Stage \u2192 Lead Gen",
    description: "Step-by-step guide for property managers. Covers signage, notification procedures, resident communication, and choosing a towing partner. Positions Axle as the expert.",
  },
  {
    title: "Private Property Towing Costs in Phoenix: What Property Managers Need to Know",
    keywords: ["private property towing cost", "impound fees Arizona", "is towing free for property owners"],
    volume: "100-200/mo combined",
    intent: "Research \u2192 Conversion",
    description: "Addresses the #1 question property managers have. Explains the no-cost-to-owner model, what vehicle owners pay, and how it compares to other enforcement options.",
  },
  {
    title: "My Car Got Towed from My Apartment: What Are My Rights in Arizona?",
    keywords: ["apartment towed my car", "tenant parking rights Arizona", "apartment towing without notice Arizona"],
    volume: "100-200/mo combined",
    intent: "Research \u2192 Brand Awareness",
    description: "Targets the massive volume of resident/tenant searches. Builds brand awareness, drives backlinks, and positions Axle as a transparent, law-abiding company.",
  },
  {
    title: "Parking Enforcement for Gilbert HOA Communities: A Complete Guide",
    keywords: ["HOA towing Gilbert AZ", "parking enforcement Gilbert", "Gilbert HOA parking rules"],
    volume: "30-60/mo combined",
    intent: "City-Specific \u2192 Local Ranking",
    description: "City-specific content targeting Gilbert's fast-growing HOA market. Virtually zero competition. Replicable template for Scottsdale, Mesa, Chandler, and Tempe.",
  },
];

export default function ProposalPage() {
  const containerRef = useScrollReveal();

  // Hide main site chrome on proposal page
  useEffect(() => {
    const selectors = ["header", "footer", "[class*='emergency']", "[class*='floating-cta']", "[class*='contact-widget']", "[class*='scroll-to-top']"];
    const hidden: HTMLElement[] = [];
    selectors.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => {
        if (el instanceof HTMLElement) { el.style.display = "none"; hidden.push(el); }
      });
    });
    const main = document.querySelector("main");
    if (main) main.style.paddingBottom = "0";
    return () => { hidden.forEach((el) => { el.style.display = ""; }); };
  }, []);

  return (
    <div ref={containerRef} data-proposal className="min-h-screen bg-white text-[#374151]" style={{ fontFamily: "var(--font-sans)" }}>
      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1f36] via-[#1b2a3f] to-[#1e4a7a]" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#1e6bb8]/20 rounded-full blur-3xl proposal-float-orb" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#dc3a30]/10 rounded-full blur-3xl proposal-float-orb-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4a9ae0]/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <span className="text-[#4a9ae0] text-sm font-semibold tracking-wider uppercase">Custom SEO Proposal</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            Dominate Phoenix Search<br />
            <span className="bg-gradient-to-r from-[#4a9ae0] to-[#6db5f0] bg-clip-text text-transparent">Before Competitors Wake Up</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-4 leading-relaxed">
            Your competitors have a combined digital maturity score of <strong className="text-white">2.2 out of 10</strong>.<Src ids={[5]} /> The private property towing market in Phoenix is an open field. This proposal shows how Axle Towing claims it.
          </p>
          <p className="text-sm text-white/50 mb-8">Prepared for Axle Towing &amp; Impound | March 2026 | By AI Acrobatics</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#opportunity" className="inline-flex items-center gap-2 bg-[#dc3a30] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wide text-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#dc3a30]/30" style={{ fontFamily: "var(--font-display)" }}>
              See the Opportunity
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </a>
            <a href="#deliverables" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/30 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wide text-sm transition-all hover:-translate-y-1 hover:bg-white/20" style={{ fontFamily: "var(--font-display)" }}>
              View Deliverables
            </a>
          </div>
        </div>
      </section>

      {/* ── Trust Metrics ── */}
      <section className="py-12 bg-[#f8f9fb] border-b border-[#e2e6ee]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "88+", label: "Pages Built", sub: "Ready to deploy" },
              { value: "42", label: "Blog Articles", sub: "Targeting 50+ keywords" },
              { value: "23", label: "City Pages", sub: "Phoenix metro coverage" },
              { value: "0", label: "Competitors Doing SEO", sub: "Among PPI specialists" },
            ].map((m) => (
              <div key={m.label} className="proposal-reveal">
                <div className="text-3xl md:text-4xl font-bold text-[#1e6bb8]" style={{ fontFamily: "var(--font-display)" }}>{m.value}</div>
                <div className="text-sm font-semibold text-[#1b2a3f] mt-1">{m.label}</div>
                <div className="text-xs text-[#6b7685]">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Opportunity ── */}
      <section id="opportunity" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 proposal-reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1b2a3f] mb-4" style={{ fontFamily: "var(--font-display)" }}>
              5 Revenue Leaks Costing Axle Towing New Accounts
            </h2>
            <p className="text-[#4a5568] max-w-2xl mx-auto">Every month, property managers search for towing partners online. Right now, they find your competitors instead.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Invisible in Search", desc: "Axle Towing ranks on page 4+ for every target keyword. Property managers searching \u2018private property towing Phoenix\u2019 never see you.", cite: [10] },
              { num: "02", title: "Zero Content Authority", desc: "No blog, no educational resources, no guides for property managers. Kwik Tow has zero too -- but whoever publishes first wins.", cite: [11] },
              { num: "03", title: "No City-Specific Pages", desc: "Searches for \u2018towing Gilbert AZ\u2019 or \u2018HOA towing Scottsdale\u2019 return nothing from Axle. You serve these cities but Google doesn\u2019t know it.", cite: [1] },
              { num: "04", title: "Missing AI Search Entirely", desc: "40% of local queries now trigger AI Overviews. Zero towing companies in Phoenix are optimized for this. First mover takes it all.", cite: [9] },
              { num: "05", title: "No Lead Capture System", desc: "No CRM, no follow-up automation, no nurture sequences. Property managers who don\u2019t sign immediately are lost forever.", cite: [2] },
            ].map((leak, i) => (
              <div key={leak.num} className={`proposal-reveal proposal-glass rounded-2xl p-6 ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="text-xs font-bold text-[#dc3a30] mb-3 tracking-wider">LEAK {leak.num}</div>
                <h3 className="text-lg font-bold text-[#1b2a3f] mb-2" style={{ fontFamily: "var(--font-display)" }}>{leak.title}</h3>
                <p className="text-sm text-[#4a5568] leading-relaxed">{leak.desc}<Src ids={leak.cite} /></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Competitive Gap ── */}
      <section className="py-20 px-6 bg-[#0f1f36] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 proposal-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Competitive Digital Scorecard
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">Your competitors built empires on handshakes. None of them have invested in digital. This is your window.<Src ids={[2, 5]} /></p>
          </div>
          <div className="proposal-reveal overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-3 px-4 text-white/60 font-medium">Company</th>
                  <th className="text-center py-3 px-2 text-white/60 font-medium">Website</th>
                  <th className="text-center py-3 px-2 text-white/60 font-medium">SEO</th>
                  <th className="text-center py-3 px-2 text-white/60 font-medium">Content</th>
                  <th className="text-center py-3 px-2 text-white/60 font-medium">Reviews</th>
                  <th className="text-center py-3 px-2 text-white/60 font-medium">Overall</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Freeway Towing", note: "(general, not PPI)", website: 9, seo: 8, content: 6, reviews: 9, overall: "7.4" },
                  { name: "All City Towing", note: "(police focus)", website: 7, seo: 6, content: 3, reviews: 3, overall: "4.8" },
                  { name: "Zip Tow", note: "", website: 7, seo: 5, content: 4, reviews: 3, overall: "4.4" },
                  { name: "Kwik Tow", note: "(main rival)", website: 5, seo: 3, content: 1, reviews: 2, overall: "2.8" },
                  { name: "Arizona Impound", note: "", website: 3, seo: 2, content: 1, reviews: 4, overall: "2.2" },
                  { name: "Axle Towing", note: "(current)", website: 3, seo: 1, content: 1, reviews: 3, overall: "1.8" },
                  { name: "Axle Towing", note: "(with AI Acrobatics)", website: 9, seo: 9, content: 9, reviews: 5, overall: "8.2", highlight: true },
                ].map((row) => (
                  <tr key={row.name + row.note} className={`border-b border-white/10 ${row.highlight ? "bg-[#1e6bb8]/20" : ""}`}>
                    <td className="py-3 px-4">
                      <span className={`font-semibold ${row.highlight ? "text-[#4a9ae0]" : "text-white"}`}>{row.name}</span>
                      {row.note && <span className="text-white/40 text-xs ml-1">{row.note}</span>}
                    </td>
                    {[row.website, row.seo, row.content, row.reviews].map((score, i) => (
                      <td key={i} className="text-center py-3 px-2">
                        <span className={`inline-block w-8 h-8 rounded-lg text-xs font-bold leading-8 ${
                          score >= 8 ? "bg-green-500/20 text-green-400" :
                          score >= 5 ? "bg-yellow-500/20 text-yellow-400" :
                          score >= 3 ? "bg-orange-500/20 text-orange-400" :
                          "bg-red-500/20 text-red-400"
                        }`}>{score}</span>
                      </td>
                    ))}
                    <td className="text-center py-3 px-2">
                      <span className={`font-bold text-lg ${row.highlight ? "text-[#4a9ae0]" : "text-white"}`}>{row.overall}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-white/40 mt-4 text-center">Scores out of 10. Based on website audits of 7 Phoenix-area towing companies, March 2026.<Src ids={[2]} /></p>
        </div>
      </section>

      {/* ── Search Intent & Buying Intent Map ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 proposal-reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1b2a3f] mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Search Intent &amp; Buying Intent Map
            </h2>
            <p className="text-[#4a5568] max-w-2xl mx-auto">Property managers go through 4 stages before choosing a towing partner. We capture them at every stage.<Src ids={[1]} /></p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                stage: "Awareness", color: "#4a9ae0", icon: "\u{1F50D}",
                searches: ["Arizona towing laws", "HOA parking rules", "can apartment tow my car"],
                volume: "500-1,000/mo", content: "Legal guides, FAQ articles, rights explainers", conversion: "Brand awareness + backlinks",
              },
              {
                stage: "Research", color: "#1e6bb8", icon: "\u{1F4DA}",
                searches: ["how to set up parking enforcement", "towing signage requirements AZ", "parking enforcement best practices"],
                volume: "200-400/mo", content: "Property manager guides, checklists, compliance resources", conversion: "Email capture + authority",
              },
              {
                stage: "Comparison", color: "#145a9c", icon: "\u2696\uFE0F",
                searches: ["towing company for HOA", "parking enforcement company Phoenix", "how to choose towing partner"],
                volume: "100-250/mo", content: "Comparison guides, evaluation checklists, case studies", conversion: "Lead generation",
              },
              {
                stage: "Decision", color: "#dc3a30", icon: "\u{1F4B0}",
                searches: ["private property towing Phoenix", "HOA towing Scottsdale", "apartment towing near me"],
                volume: "300-600/mo", content: "Service pages, city pages, contact forms", conversion: "Direct leads + calls",
              },
            ].map((s, i) => (
              <div key={s.stage} className="proposal-reveal rounded-2xl border border-[#e2e6ee] overflow-hidden" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="p-1" style={{ background: s.color }}>
                  <div className="text-center text-white text-xs font-bold uppercase tracking-wider py-1">{s.stage}</div>
                </div>
                <div className="p-5 bg-white">
                  <div className="text-2xl mb-3">{s.icon}</div>
                  <div className="space-y-1.5 mb-4">
                    {s.searches.map((q) => (
                      <div key={q} className="text-xs bg-[#f8f9fb] rounded-lg px-3 py-1.5 text-[#4a5568] italic">&ldquo;{q}&rdquo;</div>
                    ))}
                  </div>
                  <div className="text-xs text-[#6b7685] mb-1"><strong className="text-[#1b2a3f]">Volume:</strong> {s.volume}</div>
                  <div className="text-xs text-[#6b7685] mb-1"><strong className="text-[#1b2a3f]">Content:</strong> {s.content}</div>
                  <div className="text-xs text-[#6b7685]"><strong className="text-[#1b2a3f]">Goal:</strong> {s.conversion}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Article Examples ── */}
      <section className="py-20 px-6 bg-[#f8f9fb]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 proposal-reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1b2a3f] mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Sample Articles We Will Publish
            </h2>
            <p className="text-[#4a5568] max-w-2xl mx-auto">Each article targets specific keywords your competitors are ignoring. Here are 6 examples from the 42 already written.<Src ids={[1, 11]} /></p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articleExamples.map((a, i) => (
              <div key={a.title} className="proposal-reveal bg-white rounded-2xl border border-[#e2e6ee] p-6 hover:shadow-md hover:-translate-y-1 transition-all" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="text-xs font-bold text-[#dc3a30] uppercase tracking-wider mb-2">{a.intent}</div>
                <h3 className="font-bold text-[#1b2a3f] text-base mb-3 leading-snug" style={{ fontFamily: "var(--font-display)" }}>{a.title}</h3>
                <p className="text-sm text-[#4a5568] mb-4 leading-relaxed">{a.description}</p>
                <div className="space-y-1.5 mb-3">
                  {a.keywords.map((k) => (
                    <span key={k} className="inline-block text-xs bg-[#1e6bb8]/8 text-[#1e6bb8] rounded-full px-2.5 py-0.5 mr-1.5 mb-1">{k}</span>
                  ))}
                </div>
                <div className="text-xs text-[#6b7685] font-medium">{a.volume} estimated search volume</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Google Ads Strategy ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 proposal-reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1b2a3f] mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Google Ads Strategy
            </h2>
            <p className="text-[#4a5568] max-w-2xl mx-auto">SEO builds long-term traffic. Google Ads captures immediate demand while rankings grow.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="proposal-reveal rounded-2xl border-2 border-[#dc3a30]/20 bg-[#fde8e6]/30 p-6">
              <div className="text-xs font-bold text-[#dc3a30] uppercase tracking-wider mb-3">Current State</div>
              <ul className="space-y-3 text-sm text-[#4a5568]">
                <li className="flex gap-2"><span className="text-[#dc3a30] shrink-0">&times;</span> No Google Ads presence</li>
                <li className="flex gap-2"><span className="text-[#dc3a30] shrink-0">&times;</span> Page 4+ organic rankings</li>
                <li className="flex gap-2"><span className="text-[#dc3a30] shrink-0">&times;</span> Zero branded search volume</li>
                <li className="flex gap-2"><span className="text-[#dc3a30] shrink-0">&times;</span> No landing pages for paid traffic</li>
                <li className="flex gap-2"><span className="text-[#dc3a30] shrink-0">&times;</span> Competitors not running ads either</li>
              </ul>
            </div>
            <div className="proposal-reveal rounded-2xl border-2 border-[#1e6bb8]/20 bg-[#deeefb]/30 p-6">
              <div className="text-xs font-bold text-[#1e6bb8] uppercase tracking-wider mb-3">Target State (6 Months)</div>
              <ul className="space-y-3 text-sm text-[#4a5568]">
                <li className="flex gap-2"><span className="text-[#1e6bb8] shrink-0">&#10003;</span> Top 3 for core PPI keywords</li>
                <li className="flex gap-2"><span className="text-[#1e6bb8] shrink-0">&#10003;</span> City pages ranking for 8 metros</li>
                <li className="flex gap-2"><span className="text-[#1e6bb8] shrink-0">&#10003;</span> 10-20 AI Overview citations</li>
                <li className="flex gap-2"><span className="text-[#1e6bb8] shrink-0">&#10003;</span> Google Ads capturing high-intent searches</li>
                <li className="flex gap-2"><span className="text-[#1e6bb8] shrink-0">&#10003;</span> 25-50% increase in inbound inquiries</li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { phase: "Phase 1: Foundation", period: "Month 1-2", items: ["Launch branded search campaigns", "Target high-intent PPI keywords", "Build dedicated landing pages with clear CTAs", "Set up conversion tracking (calls, forms)"] },
              { phase: "Phase 2: Expansion", period: "Month 3-4", items: ["Add city-specific campaigns (Scottsdale, Mesa, Gilbert)", "Launch service-specific ad groups (HOA, apartment, commercial)", "A/B test ad copy and landing pages", "Implement retargeting for site visitors"] },
              { phase: "Phase 3: Optimization", period: "Month 5-6", items: ["Shift budget toward highest-converting keywords", "Reduce CPA through Quality Score improvements", "As organic grows, reduce paid on ranking keywords", "Scale budget toward new opportunities"] },
            ].map((p, i) => (
              <div key={p.phase} className="proposal-reveal rounded-2xl border border-[#e2e6ee] p-6" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="text-xs font-bold text-[#1e6bb8] uppercase tracking-wider mb-1">{p.phase}</div>
                <div className="text-xs text-[#6b7685] mb-4">{p.period}</div>
                <ul className="space-y-2.5">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#4a5568]">
                      <span className="text-[#1e6bb8] mt-0.5 shrink-0 text-xs">&#9654;</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Keyword Gap Table ── */}
      <section className="py-20 px-6 bg-[#0f1f36] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 proposal-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>Keyword Opportunity Map</h2>
            <p className="text-white/70 max-w-2xl mx-auto">20 high-value keywords we will target. Most have low to zero competition among PPI specialists.<Src ids={[1]} /></p>
          </div>
          <div className="proposal-reveal overflow-x-auto">
            <table className="w-full text-xs md:text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-2 px-3 text-white/60">Keyword</th>
                  <th className="text-center py-2 px-2 text-white/60">Volume/mo</th>
                  <th className="text-center py-2 px-2 text-white/60">Difficulty</th>
                  <th className="text-center py-2 px-2 text-white/60 hidden md:table-cell">Intent</th>
                  <th className="text-center py-2 px-2 text-white/60 hidden lg:table-cell">CPC</th>
                  <th className="text-left py-2 px-3 text-white/60 hidden md:table-cell">Opportunity</th>
                </tr>
              </thead>
              <tbody>
                {keywordData.map((kw) => (
                  <tr key={kw.keyword} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-2 px-3 font-medium text-white">{kw.keyword}</td>
                    <td className="text-center py-2 px-2 text-[#4a9ae0]">{kw.volume}</td>
                    <td className="text-center py-2 px-2">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        kw.difficulty === "Very Low" ? "bg-green-500/20 text-green-400" :
                        kw.difficulty === "Low" ? "bg-green-500/15 text-green-300" :
                        kw.difficulty === "Low-Med" ? "bg-yellow-500/15 text-yellow-300" :
                        "bg-orange-500/15 text-orange-300"
                      }`}>{kw.difficulty}</span>
                    </td>
                    <td className="text-center py-2 px-2 text-white/70 hidden md:table-cell">{kw.intent}</td>
                    <td className="text-center py-2 px-2 text-white/50 hidden lg:table-cell">{kw.cpc}</td>
                    <td className="py-2 px-3 text-white/60 hidden md:table-cell">{kw.opportunity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-white/30 mt-4 text-center">Phoenix metro estimates. Volumes from SEMrush, Ahrefs, and industry benchmarks.<Src ids={[1]} /></p>
        </div>
      </section>

      {/* ── Sample Site Preview ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 proposal-reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1b2a3f] mb-4" style={{ fontFamily: "var(--font-display)" }}>Your New Website Is Already Built</h2>
            <p className="text-[#4a5568] max-w-2xl mx-auto">88 pages. 42 blog articles. 23 city/neighborhood pages. Mobile-first. Schema markup on every page. Ready for DNS transfer.</p>
          </div>
          <div className="proposal-reveal rounded-2xl overflow-hidden border-2 border-[#e2e6ee] shadow-xl">
            <div className="bg-[#1b2a3f] px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#dc3a30]" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-white/50 bg-white/10 rounded-full px-4 py-1">axletowing.com</span>
              </div>
            </div>
            <div className="relative bg-white" style={{ height: "600px" }}>
              <iframe src="https://axletowing.com" className="w-full h-full border-0" title="Axle Towing Website Preview" loading="lazy" />
            </div>
          </div>
          <div className="text-center mt-6">
            <a href="https://axletowing.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#1e6bb8] font-semibold text-sm hover:underline">
              Open full site in new tab
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── ROI Projections ── */}
      <section className="py-20 px-6 bg-[#f8f9fb]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 proposal-reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1b2a3f] mb-4" style={{ fontFamily: "var(--font-display)" }}>Conservative Revenue Projections</h2>
            <p className="text-[#4a5568] max-w-2xl mx-auto">Based on keyword volumes, industry conversion rates, and the competitive vacuum in this market.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { period: "Month 3-6", leads: "5-10 new inquiries/mo", accounts: "2-4 new accounts/mo", revenue: "+$3,000-6,000/mo", note: "Early rankings + Google Ads kick in. City pages and service pages start ranking." },
              { period: "Month 6-9", leads: "15-25 new inquiries/mo", accounts: "5-8 new accounts/mo", revenue: "+$8,000-15,000/mo", note: "Content authority builds. Blog articles rank for informational queries. Map Pack visibility improves." },
              { period: "Month 9-12", leads: "25-40 new inquiries/mo", accounts: "8-15 new accounts/mo", revenue: "+$15,000-30,000/mo", note: "Top 3 for core keywords. AI Overview citations. Brand recognition grows. Compounding effect." },
            ].map((p, i) => (
              <div key={p.period} className="proposal-reveal bg-white rounded-2xl border border-[#e2e6ee] p-6" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="text-xs font-bold text-[#1e6bb8] uppercase tracking-wider mb-4">{p.period}</div>
                <div className="space-y-3 mb-4">
                  <div><div className="text-xs text-[#6b7685]">New Inquiries</div><div className="text-lg font-bold text-[#1b2a3f]" style={{ fontFamily: "var(--font-display)" }}>{p.leads}</div></div>
                  <div><div className="text-xs text-[#6b7685]">New Accounts Won</div><div className="text-lg font-bold text-[#1b2a3f]" style={{ fontFamily: "var(--font-display)" }}>{p.accounts}</div></div>
                  <div><div className="text-xs text-[#6b7685]">Revenue Impact</div><div className="text-lg font-bold text-[#1e6bb8]" style={{ fontFamily: "var(--font-display)" }}>{p.revenue}</div></div>
                </div>
                <p className="text-xs text-[#6b7685] leading-relaxed">{p.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#6b7685] text-center mt-6">Conservative estimates based on current keyword volumes, 2-3% visitor-to-lead conversion rate, and average account values.<Src ids={[1, 6]} /></p>
        </div>
      </section>

      {/* ── Deliverables ── */}
      <section id="deliverables" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 proposal-reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1b2a3f] mb-4" style={{ fontFamily: "var(--font-display)" }}>What You Get</h2>
            <p className="text-[#4a5568] max-w-2xl mx-auto">Click any card to see the full breakdown of what is included, how it works, and the business impact.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((d, i) => (
              <div key={d.title} className="proposal-reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <DeliverableCard {...d} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12-Month Timeline ── */}
      <section className="py-20 px-6 bg-[#0f1f36] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 proposal-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>12-Month Execution Timeline</h2>
            <p className="text-white/70">Phased rollout. Each month builds on the last.</p>
          </div>
          <div className="space-y-0">
            {[
              { month: "Month 1", title: "Launch & Foundation", items: ["DNS transfer + site goes live", "GBP optimization (both yards)", "Technical SEO audit + fixes", "CRM setup + lead tracking", "50+ citation submissions"] },
              { month: "Month 2", title: "Content Velocity", items: ["4 new blog articles published", "Google Ads campaigns launched", "Service page optimization", "Review request system activated", "Weekly GBP posts begin"] },
              { month: "Month 3-4", title: "Local Domination", items: ["8 city landing pages live and indexed", "8 more blog articles", "Google Ads expansion to city campaigns", "Local link building (AMA, chambers, paving partners)", "First ranking improvements visible"] },
              { month: "Month 5-6", title: "Authority Building", items: ["20+ blog articles live", "AI Overview citations appearing", "Google Ads CPA optimization", "Case study content from early clients", "Map Pack visibility improving"] },
              { month: "Month 7-9", title: "Compounding Growth", items: ["30+ blog articles live", "Top 10 for core keywords", "Retargeting campaigns active", "Content calendar continues (2-4/mo)", "Monthly reporting shows clear ROI"] },
              { month: "Month 10-12", title: "Market Leadership", items: ["42+ articles, 88+ pages indexed", "Top 3 for primary keywords", "AI search citations across platforms", "Organic leads replacing paid dependence", "Clear digital market leader among PPI companies"] },
            ].map((phase, i) => (
              <div key={phase.month} className="proposal-reveal flex gap-4 md:gap-8" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-[#4a9ae0] shrink-0 mt-1" />
                  {i < 5 && <div className="w-px flex-1 bg-white/20 my-1" />}
                </div>
                <div className="pb-8">
                  <div className="text-xs font-bold text-[#4a9ae0] uppercase tracking-wider">{phase.month}</div>
                  <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>{phase.title}</h3>
                  <ul className="space-y-1">
                    {phase.items.map((item) => (
                      <li key={item} className="text-sm text-white/70 flex items-start gap-2">
                        <span className="text-[#4a9ae0] shrink-0 mt-0.5">&#8250;</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Now ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="proposal-reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1b2a3f] mb-6" style={{ fontFamily: "var(--font-display)" }}>Why This Window Won&apos;t Stay Open</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left mb-12">
              {[
                { icon: "\u{1F3D7}\uFE0F", title: "22,100 New Units", desc: "Phoenix has 22,100 multifamily units under construction. Every new complex needs parking enforcement.", cite: [6] },
                { icon: "\u{1F634}", title: "Competitors Are Asleep", desc: "Kwik Tow has zero blog posts. All City shifted to police towing. Arizona Impound's site was built in Dreamweaver.", cite: [3, 5, 7] },
                { icon: "\u23F3", title: "First Mover Advantage", desc: "AI search is reshaping how people find services. The first towing company to optimize owns the market.", cite: [9] },
              ].map((item) => (
                <div key={item.title} className="proposal-glass rounded-2xl p-6">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-[#1b2a3f] mb-2" style={{ fontFamily: "var(--font-display)" }}>{item.title}</h3>
                  <p className="text-sm text-[#4a5568]">{item.desc}<Src ids={item.cite} /></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 90-Day Guarantee ── */}
      <section className="py-16 px-6 bg-[#f8f9fb]">
        <div className="max-w-3xl mx-auto text-center proposal-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b2a3f] mb-6" style={{ fontFamily: "var(--font-display)" }}>First 90 Days</h2>
          <p className="text-[#4a5568] mb-6 leading-relaxed">
            Within 90 days, Axle Towing will have: a fully optimized 88+ page website live and indexed, Google Business Profiles optimized for both locations, 50+ local citations submitted, 8+ new blog articles published, Google Ads campaigns running, CRM capturing and nurturing every lead, and measurable improvements in search visibility.
          </p>
          <p className="text-[#4a5568] leading-relaxed">
            This isn&apos;t speculation. The website is already built. The content is already written. The keyword research is done. We just need the green light.
          </p>
        </div>
      </section>

      {/* ── Why Axle Wins ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 proposal-reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1b2a3f] mb-4" style={{ fontFamily: "var(--font-display)" }}>Why Axle Towing Wins This</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "5-Year Trajectory", desc: "You accomplished in 5 years what competitors took 10-20. Now add digital marketing to that operational excellence." },
              { title: "Kwik Tow Is Declining", desc: "Ron Steele retired. New leadership lacks operational expertise. Properties are becoming available. Digital presence accelerates the shift." },
              { title: "All City Abandoned PPI", desc: "2,000+ private property accounts they are not actively servicing. You are already picking up 5/month. SEO visibility multiplies that rate." },
              { title: "Modern Fleet, Modern Brand", desc: "Newest trucks (2022+), AMA member, two yards. The brand foundation is strong. The only missing piece is digital visibility." },
            ].map((adv, i) => (
              <div key={adv.title} className="proposal-reveal flex gap-4" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="w-1 bg-gradient-to-b from-[#1e6bb8] to-[#dc3a30] rounded-full shrink-0" />
                <div>
                  <h3 className="font-bold text-[#1b2a3f] mb-1" style={{ fontFamily: "var(--font-display)" }}>{adv.title}</h3>
                  <p className="text-sm text-[#4a5568] leading-relaxed">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0f1f36] via-[#1b2a3f] to-[#1e4a7a] text-white">
        <div className="max-w-3xl mx-auto text-center proposal-reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>Ready to Own Phoenix Search?</h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            88 pages built. 42 articles written. The research is done. Your competitors are still using Dreamweaver. Let&apos;s go.
          </p>
          <a href="tel:+16195090699" className="inline-flex items-center gap-3 bg-[#dc3a30] text-white px-10 py-5 rounded-xl font-bold uppercase tracking-wide text-base transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#dc3a30]/30 animate-pulse-glow" style={{ fontFamily: "var(--font-display)" }}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            Let&apos;s Talk
          </a>
          <p className="text-sm text-white/40 mt-6">Prepared by AI Acrobatics | March 2026</p>
        </div>
      </section>

      {/* ── Payment Options ── */}
      <section id="payment" className="py-20 px-6 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 proposal-reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1b2a3f] mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Get Started Today
            </h2>
            <p className="text-[#4a5568] max-w-2xl mx-auto">
              Pay for the website build now and lock in your spot. SEO invoicing starts 30 days after your site goes live.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* One-time website build */}
            <div className="proposal-reveal bg-white rounded-2xl border-2 border-[#1e6bb8]/20 p-8 shadow-sm">
              <div className="text-xs font-bold text-[#1e6bb8] uppercase tracking-wider mb-2">One-Time Payment</div>
              <h3 className="text-2xl font-bold text-[#1b2a3f] mb-1" style={{ fontFamily: "var(--font-display)" }}>
                Website Build
              </h3>
              <div className="text-4xl font-black text-[#1b2a3f] mb-1" style={{ fontFamily: "var(--font-display)" }}>$7,500</div>
              <p className="text-sm text-[#6b7685] mb-6">123+ page Next.js site, 61 articles, 24 location pages, Schema markup</p>
              <ul className="space-y-2 text-sm text-[#4a5568] mb-8">
                {[
                  "Custom-built 123+ page website",
                  "61 SEO-optimized blog articles",
                  "24 city & neighborhood pages",
                  "7 service pages with Schema markup",
                  "Vehicle locator & property manager portal",
                  "Mobile-first, PageSpeed 90+",
                  "DNS transfer & launch included",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#1e6bb8] mt-0.5 shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://www.fanbasis.com/agency-checkout/Aiacrobatics/7pAz8"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#1e6bb8] text-white font-bold px-6 py-4 rounded-xl text-base hover:bg-[#145a9c] transition-colors shadow-md mb-3"
              >
                Pay $7,500 — Card / ACH
              </a>
              <p className="text-xs text-[#6b7685] text-center">Secure checkout via Fanbasis. All major cards accepted.</p>
            </div>

            {/* Monthly SEO plan */}
            <div className="proposal-reveal bg-white rounded-2xl border-2 border-[#dc3a30]/20 p-8 shadow-sm" style={{ transitionDelay: "0.1s" }}>
              <div className="text-xs font-bold text-[#dc3a30] uppercase tracking-wider mb-2">Recurring Monthly</div>
              <h3 className="text-2xl font-bold text-[#1b2a3f] mb-1" style={{ fontFamily: "var(--font-display)" }}>
                SEO &amp; Content Plan
              </h3>
              <div className="text-4xl font-black text-[#1b2a3f] mb-1" style={{ fontFamily: "var(--font-display)" }}>$3,000<span className="text-lg font-semibold text-[#6b7685]">/mo</span></div>
              <p className="text-sm text-[#6b7685] mb-6">30 articles/month, 150+ keyword tracking, Google Business Profile management</p>
              <ul className="space-y-2 text-sm text-[#4a5568] mb-8">
                {[
                  "30 optimized articles published monthly",
                  "150+ keyword rank tracking",
                  "Google Business Profile management",
                  "50+ local citation submissions",
                  "Link building outreach",
                  "Competitor analysis & reporting",
                  "GoHighLevel CRM — included free",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#dc3a30] mt-0.5 shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://www.fanbasis.com/agency-checkout/Aiacrobatics/5RlGY"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#dc3a30] text-white font-bold px-6 py-4 rounded-xl text-base hover:bg-[#b83028] transition-colors shadow-md mb-3"
              >
                Start SEO Plan — $3,000/mo
              </a>
              <p className="text-xs text-[#6b7685] text-center">6-month minimum. Cancel with 30 days notice after term.</p>
            </div>
          </div>

          {/* Klarna BNPL Option */}
          <div className="proposal-reveal rounded-2xl border-2 border-[#FFB3C7] bg-[#FFF0F5] p-8 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#FFB3C7] text-[#1A0A0E] font-black text-lg px-3 py-1 rounded-lg leading-none select-none">K</div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Split Your Website Build with Klarna</h3>
                <p className="text-[#6b7685] text-sm">Buy now, pay later — 4 interest-free payments of $1,875</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-center">
              {[
                { label: "Today", amount: "$1,875" },
                { label: "30 days", amount: "$1,875" },
                { label: "60 days", amount: "$1,875" },
                { label: "90 days", amount: "$1,875" },
              ].map((payment) => (
                <div key={payment.label} className="bg-white rounded-xl px-3 py-3 border border-[#FFB3C7]/50">
                  <p className="text-xs text-[#6b7685] mb-0.5">{payment.label}</p>
                  <p className="text-base font-bold text-[#1A0A0E]">{payment.amount}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-[#6b7685] bg-white rounded-xl px-4 py-3 border border-[#FFB3C7]/30 mb-6">
              <svg className="w-4 h-4 text-[#1e6bb8] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              No interest. No hidden fees. Approved instantly. Klarna handles billing — you keep your cashflow intact while the site gets built.
            </div>

            <div className="flex justify-center">
              <KlarnaButton
                amount={7500}
                description="Website Build — Axle Towing & Impound"
                orderId="PROP-2026-AXLE"
                label="Pay with Klarna — 4 × $1,875"
              />
            </div>
          </div>

          {/* Bundle note */}
          <div className="mt-8 text-center proposal-reveal">
            <p className="text-sm text-[#6b7685]">
              Questions about payment? Call or text <a href="tel:+16195090699" className="text-[#1e6bb8] font-semibold hover:underline">(619) 509-0699</a> or email <a href="mailto:julian@aiacrobatics.com" className="text-[#1e6bb8] font-semibold hover:underline">julian@aiacrobatics.com</a>
            </p>
            <p className="text-xs text-[#9aa3af] mt-2">
              Full invoice with terms available at <a href="/invoice" className="underline hover:text-[#6b7685]">axletowing.com/invoice</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── Sources ── */}
      <section className="py-12 px-6 bg-[#f8f9fb] border-t border-[#e2e6ee]">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm font-bold text-[#1b2a3f] mb-4 uppercase tracking-wider">Sources</h3>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
            {sources.map((s) => (
              <div key={s.id} className="text-xs text-[#6b7685] leading-relaxed">
                <span className="text-[#1e6bb8] font-bold">[{s.id}]</span> {s.text}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
