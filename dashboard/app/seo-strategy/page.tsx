"use client";

import PageHeader from "../../components/PageHeader";
import ScrollReveal from "../../components/ScrollReveal";

const keywordTiers = [
  {
    tier: 1,
    label: "Money Keywords",
    color: "from-red-500 to-red-600",
    bg: "bg-red-50 border-red-200",
    textColor: "text-red-700",
    keywords: [
      { kw: "private property towing phoenix", vol: 150, kd: 12, current: "Not ranked", target3: "Page 2", target6: "Top 5", target12: "Top 3" },
      { kw: "hoa towing phoenix", vol: 90, kd: 10, current: "Not ranked", target3: "Page 2", target6: "Top 10", target12: "Top 5" },
      { kw: "impound fees phoenix", vol: 300, kd: 12, current: "Not ranked", target3: "Top 20", target6: "Top 10", target12: "Top 5" },
      { kw: "phoenix towing", vol: 1900, kd: 23, current: "Not ranked", target3: "Page 3", target6: "Page 1", target12: "Top 5" },
    ],
  },
  {
    tier: 2,
    label: "Traffic Drivers",
    color: "from-amber-500 to-amber-600",
    bg: "bg-amber-50 border-amber-200",
    textColor: "text-amber-700",
    keywords: [
      { kw: "car towed phoenix what to do", vol: 150, kd: 10, current: "Not ranked", target3: "Top 10", target6: "Top 5", target12: "Top 3" },
      { kw: "phoenix impound lots", vol: 150, kd: 15, current: "Not ranked", target3: "Top 15", target6: "Top 10", target12: "Top 5" },
      { kw: "best towing company phoenix", vol: 100, kd: 15, current: "Not ranked", target3: "Page 2", target6: "Top 10", target12: "Top 3" },
      { kw: "car towed asu tempe", vol: 75, kd: 5, current: "Not ranked", target3: "Top 5", target6: "Top 3", target12: "#1" },
    ],
  },
  {
    tier: 3,
    label: "Quick Wins",
    color: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50 border-emerald-200",
    textColor: "text-emerald-700",
    keywords: [
      { kw: "towing chandler az", vol: 480, kd: 7, current: "Not ranked", target3: "Top 10", target6: "Top 5", target12: "Top 3" },
      { kw: "apartment towing mesa az", vol: 20, kd: 5, current: "Not ranked", target3: "Top 5", target6: "Top 3", target12: "#1" },
      { kw: "hoa towing chandler az", vol: 30, kd: 5, current: "Not ranked", target3: "Top 5", target6: "Top 3", target12: "#1" },
      { kw: "parking enforcement gilbert az", vol: 20, kd: 5, current: "Not ranked", target3: "Top 5", target6: "Top 3", target12: "#1" },
    ],
  },
  {
    tier: 4,
    label: "Long-Tail Domination",
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50 border-blue-200",
    textColor: "text-brand-blue",
    keywords: [
      { kw: "48 city x service combos", vol: 0, kd: 0, current: "-", target3: "Indexed", target6: "Top 10", target12: "Top 5" },
    ],
  },
];

const trafficProjection = [
  { month: "Now", traffic: 529 },
  { month: "M3", traffic: 1200 },
  { month: "M6", traffic: 3500 },
  { month: "M9", traffic: 8000 },
  { month: "M12", traffic: 15000 },
];

const aiQueries = [
  "best towing company in phoenix",
  "private property towing phoenix arizona",
  "how much does impound cost in phoenix",
  "arizona towing laws for property owners",
  "hoa parking enforcement phoenix az",
  "car towed from apartment what to do",
  "best private property towing companies phoenix 2026",
  "arizona signage requirements towing",
];

const cityServiceGrid = [
  "Phoenix", "Scottsdale", "Tempe", "Mesa", "Chandler", "Gilbert",
  "Glendale", "Peoria", "Surprise", "Avondale", "Goodyear", "Apache Junction",
];

const services = [
  "Private Property", "HOA", "Apartment", "Commercial",
];

export default function SeoStrategyPage() {
  const maxTraffic = 15000;

  return (
    <>
      <PageHeader
        badge="SEO Strategy"
        title="SEO & AI Search Ranking Strategy"
        subtitle="How we're going to dominate Google and AI search engines for Phoenix private property towing."
      />

      {/* Content Moat */}
      <ScrollReveal>
        <div className="glass-card p-8 mb-8">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-2">Content Moat</h2>
          <p className="text-sm text-gray-500 mb-6">Your massive content advantage over every competitor.</p>

          <div className="grid grid-cols-3 gap-6">
            {[
              { name: "Axle Towing", pages: 125, color: "bg-brand-blue", pct: 100 },
              { name: "All City Towing", pages: 8, color: "bg-gray-300", pct: 6.4 },
              { name: "KwikTow", pages: 5, color: "bg-gray-300", pct: 4 },
            ].map((comp) => (
              <div key={comp.name} className="text-center">
                <div className="h-40 flex items-end justify-center mb-3">
                  <div
                    className={`w-20 ${comp.color} rounded-t-lg transition-all duration-1000 relative`}
                    style={{ height: `${Math.max(comp.pct, 3)}%` }}
                  >
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-lg font-bold font-display text-gray-900 whitespace-nowrap">
                      {comp.pages}+
                    </span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-gray-900">{comp.name}</p>
                <p className="text-xs text-gray-500">{comp.pages} pages</p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-100">
            <p className="text-sm text-gray-600">
              <strong className="text-gray-900">15x more content than the nearest competitor.</strong> This content moat means
              Google has vastly more signals from your site to understand that Axle Towing is the authority for private property towing in Phoenix.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Keyword Tier Pyramid */}
      <ScrollReveal delay={100}>
        <div className="glass-card p-8 mb-8">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-2">Keyword Strategy Pyramid</h2>
          <p className="text-sm text-gray-500 mb-6">Four tiers of keywords from high-value money terms to long-tail dominance.</p>

          {/* Visual Pyramid */}
          <div className="flex flex-col items-center gap-2 mb-8">
            {[
              { tier: 1, width: "w-48", label: "Tier 1: Money KWs", color: "bg-gradient-to-r from-red-500 to-red-600", count: "4 keywords" },
              { tier: 2, width: "w-64", label: "Tier 2: Traffic Drivers", color: "bg-gradient-to-r from-amber-500 to-amber-600", count: "4 keywords" },
              { tier: 3, width: "w-80", label: "Tier 3: Quick Wins", color: "bg-gradient-to-r from-emerald-500 to-emerald-600", count: "15+ keywords" },
              { tier: 4, width: "w-full max-w-lg", label: "Tier 4: Long-Tail", color: "bg-gradient-to-r from-blue-500 to-blue-600", count: "48 combos" },
            ].map((t) => (
              <div key={t.tier} className={`${t.width} ${t.color} text-white text-center py-3 rounded-lg text-sm font-semibold`}>
                {t.label}
                <span className="block text-xs font-normal opacity-80">{t.count}</span>
              </div>
            ))}
          </div>

          {/* Keyword Ranking Targets Table */}
          {keywordTiers.map((tier) => (
            <div key={tier.tier} className="mb-6 last:mb-0">
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${tier.color}`} />
                <h3 className={`font-semibold font-display ${tier.textColor}`}>
                  Tier {tier.tier}: {tier.label}
                </h3>
              </div>
              <div className={`rounded-xl overflow-hidden border ${tier.bg.split(" ")[1]}`}>
                <table className="w-full">
                  <thead>
                    <tr className={tier.bg.split(" ")[0]}>
                      <th className="text-left">Keyword</th>
                      <th className="text-center">Volume</th>
                      <th className="text-center">KD</th>
                      <th className="text-center">Current</th>
                      <th className="text-center">Month 3</th>
                      <th className="text-center">Month 6</th>
                      <th className="text-center">Month 12</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {tier.keywords.map((kw) => (
                      <tr key={kw.kw}>
                        <td className="font-medium text-gray-900">{kw.kw}</td>
                        <td className="text-center">{kw.vol > 0 ? kw.vol.toLocaleString() : "-"}</td>
                        <td className="text-center">{kw.kd > 0 ? kw.kd : "-"}</td>
                        <td className="text-center">
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-100">
                            {kw.current}
                          </span>
                        </td>
                        <td className="text-center">
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
                            {kw.target3}
                          </span>
                        </td>
                        <td className="text-center">
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-brand-blue border border-blue-100">
                            {kw.target6}
                          </span>
                        </td>
                        <td className="text-center">
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-100">
                            {kw.target12}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* 12-Month Traffic Projection */}
      <ScrollReveal delay={150}>
        <div className="glass-card p-8 mb-8">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-2">12-Month Traffic Projection</h2>
          <p className="text-sm text-gray-500 mb-6">Projected organic traffic growth from 529 to 15,000 monthly visitors.</p>

          <div className="flex items-end justify-between gap-4 h-64 px-4">
            {trafficProjection.map((point, i) => {
              const heightPct = (point.traffic / maxTraffic) * 100;
              return (
                <div key={point.month} className="flex-1 flex flex-col items-center">
                  <span className="text-sm font-bold font-display text-gray-900 mb-2">
                    {point.traffic.toLocaleString()}
                  </span>
                  <div className="w-full relative flex-1 flex items-end">
                    <div
                      className={`w-full rounded-t-lg transition-all duration-1000 ${
                        i === 0 ? "bg-gray-300" : "bg-gradient-to-t from-brand-blue to-brand-blue-light"
                      }`}
                      style={{ height: `${Math.max(heightPct, 3)}%` }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-gray-500 mt-2">{point.month}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="rounded-xl p-4 bg-blue-50 border border-blue-100 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Growth</p>
              <p className="text-2xl font-bold font-display text-brand-blue">28x</p>
              <p className="text-xs text-gray-500">traffic increase</p>
            </div>
            <div className="rounded-xl p-4 bg-emerald-50 border border-emerald-100 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Keywords</p>
              <p className="text-2xl font-bold font-display text-emerald-600">500+</p>
              <p className="text-xs text-gray-500">ranking keywords</p>
            </div>
            <div className="rounded-xl p-4 bg-amber-50 border border-amber-100 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Authority</p>
              <p className="text-2xl font-bold font-display text-amber-600">40+</p>
              <p className="text-xs text-gray-500">domain authority</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* AI Search Optimization */}
      <ScrollReveal delay={200}>
        <div className="glass-card p-8 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-xl font-bold font-display text-gray-900">AI Search Optimization</h2>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
              New Frontier
            </span>
          </div>
          <p className="text-sm text-gray-500 mb-6">How we optimize for ChatGPT, Perplexity, Claude, and Google AI Overviews.</p>

          {/* What makes AI cite a source */}
          <div className="mb-8">
            <h3 className="text-lg font-bold font-display text-gray-900 mb-4">What Makes AI Cite a Source</h3>
            <div className="grid md:grid-cols-5 gap-3">
              {[
                { num: "1", title: "Authoritative Content", desc: "Definitive content with real statistics and data points" },
                { num: "2", title: "Structured Data", desc: "Tables, lists, FAQ schema that AI can parse" },
                { num: "3", title: "Legal Citations", desc: "ARS statute references signal authority" },
                { num: "4", title: "Comparison Format", desc: '"Best X in Y" format AI models prefer' },
                { num: "5", title: "Fresh Content", desc: '"2026" in titles signals current data' },
              ].map((item) => (
                <div key={item.num} className="rounded-xl p-4 bg-purple-50 border border-purple-100">
                  <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-bold mb-3">
                    {item.num}
                  </div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What we're doing for each article */}
          <div className="mb-8">
            <h3 className="text-lg font-bold font-display text-gray-900 mb-4">What We Build Into Every Article</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", title: "Quotable facts with real numbers", desc: "Every article includes specific statistics, dollar amounts, and data points that AI models love to cite." },
                { icon: "M3 10h18M3 14h18M3 18h18M3 6h18", title: "Comparison tables AI models can parse", desc: "Structured comparison tables with clear headers that AI can extract and present in responses." },
                { icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01", title: "FAQ sections with clear Q&A format", desc: "Every article has a FAQ section with direct questions and answers \u2014 the exact format AI uses for responses." },
                { icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z", title: "Arizona-specific legal references", desc: "ARS 9-499.05, ARS 28-3511, HB 2269, Phoenix Code 36-144 \u2014 real legal citations that establish authority." },
                { icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", title: '"Best in Phoenix" positioning language', desc: "Strategic use of superlative positioning that matches how users query AI assistants." },
                { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", title: "Fresh, dated content (2026 in titles)", desc: "Every article includes the current year to signal freshness \u2014 a major ranking signal for AI search." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-blue flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Target AI queries */}
          <div>
            <h3 className="text-lg font-bold font-display text-gray-900 mb-4">Target AI Queries We Want to Rank For</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {aiQueries.map((q) => (
                <div key={q} className="p-3 rounded-xl bg-purple-50 border border-purple-100">
                  <p className="text-xs text-purple-700 font-medium leading-relaxed">&quot;{q}&quot;</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Content Pipeline Visualization */}
      <ScrollReveal delay={250}>
        <div className="glass-card p-8 mb-8">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-2">Content Pipeline</h2>
          <p className="text-sm text-gray-500 mb-6">48 city x service pages + 15 priority articles + 98 queued articles.</p>

          {/* City x Service Grid */}
          <div className="mb-8">
            <h3 className="text-lg font-bold font-display text-gray-900 mb-4">City x Service Page Grid</h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr>
                    <th className="text-left">City</th>
                    {services.map((s) => (
                      <th key={s} className="text-center">{s}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {cityServiceGrid.map((city) => {
                    const hasArticle = (svc: string) => {
                      const slug = `${svc.toLowerCase().replace(/ /g, "-")}-${city.toLowerCase().replace(/ /g, "-")}`;
                      const found = city === "Mesa" && svc === "Apartment"
                        || city === "Chandler" && svc === "HOA"
                        || city === "Chandler" && svc === "Private Property"
                        || city === "Gilbert" && svc === "Private Property"
                        || city === "Scottsdale" && svc === "Private Property"
                        || city === "Phoenix" && svc === "Commercial"
                        || city === "Apache Junction" && svc === "Private Property";
                      return found;
                    };
                    return (
                      <tr key={city}>
                        <td className="font-medium text-gray-900">{city}</td>
                        {services.map((svc) => (
                          <td key={svc} className="text-center">
                            {hasArticle(svc) ? (
                              <span className="inline-block w-6 h-6 rounded-full bg-green-100 text-green-600 text-xs font-bold leading-6">
                                &#10003;
                              </span>
                            ) : (
                              <span className="inline-block w-6 h-6 rounded-full bg-gray-100 text-gray-400 text-xs font-bold leading-6">
                                -
                              </span>
                            )}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-green-100 border border-green-200" />
                <span className="text-xs text-gray-500">Written</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-gray-100 border border-gray-200" />
                <span className="text-xs text-gray-500">Planned</span>
              </div>
              <span className="text-xs text-gray-400">7 of 48 city x service pages written</span>
            </div>
          </div>

          {/* Priority Articles Status */}
          <div className="mb-8">
            <h3 className="text-lg font-bold font-display text-gray-900 mb-4">15 Priority Articles</h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="p-2 rounded-lg bg-green-50 border border-green-100 text-center">
                  <span className="text-[10px] font-semibold text-green-600">Written</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-2">All 15 priority articles are complete and ready for review.</p>
          </div>

          {/* Queued Articles Timeline */}
          <div className="mb-6">
            <h3 className="text-lg font-bold font-display text-gray-900 mb-4">98 Queued Articles - Timeline</h3>
            <div className="space-y-2">
              {[
                { months: "Apr-May", count: 15, status: "Written", color: "bg-green-500", pct: 100 },
                { months: "Jun-Jul", count: 16, status: "Scheduled", color: "bg-blue-500", pct: 0 },
                { months: "Aug-Sep", count: 16, status: "Planned", color: "bg-blue-300", pct: 0 },
                { months: "Oct-Nov", count: 16, status: "Planned", color: "bg-blue-200", pct: 0 },
                { months: "Dec-Jan", count: 16, status: "Planned", color: "bg-gray-300", pct: 0 },
                { months: "Feb-Mar", count: 18, status: "Planned", color: "bg-gray-200", pct: 0 },
              ].map((block) => (
                <div key={block.months} className="flex items-center gap-4">
                  <span className="text-xs font-semibold text-gray-500 w-16">{block.months}</span>
                  <div className="flex-1 h-8 bg-gray-100 rounded-lg overflow-hidden relative">
                    <div
                      className={`h-full ${block.color} rounded-lg transition-all duration-1000`}
                      style={{ width: `${block.pct}%` }}
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-700">
                      {block.count} articles - {block.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Output Target */}
          <div className="rounded-xl p-6 bg-brand-navy text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-1">Monthly Output Target</p>
                <p className="text-2xl font-bold font-display">8 Articles/Month + Ongoing Technical SEO</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-blue-200">2 articles per week</p>
                <p className="text-xs text-blue-200">48 city pages + 65 topical articles</p>
                <p className="text-xs text-blue-200">= 113 total content pieces by Month 12</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Google SEO Technical */}
      <ScrollReveal delay={300}>
        <div className="glass-card p-8">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-2">Key Insight</h2>
          <div className="rounded-xl p-6 bg-blue-50 border border-blue-100">
            <p className="text-gray-600 leading-relaxed">
              <strong className="text-gray-900">AI search is the next SEO.</strong> By 2026, an estimated 40% of search
              queries involve an AI-generated answer (Google AI Overviews, ChatGPT Search, Perplexity). Our content strategy
              is built to win in <em>both</em> traditional Google rankings and AI citations. The combination of{" "}
              <strong className="text-brand-blue">125+ authoritative pages</strong>,{" "}
              <strong className="text-brand-blue">real Arizona legal citations</strong>, and{" "}
              <strong className="text-brand-blue">structured comparison data</strong> means AI models will naturally
              reference Axle Towing when users ask about towing in Phoenix.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
