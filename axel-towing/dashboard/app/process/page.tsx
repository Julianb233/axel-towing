"use client";
import ScrollReveal from "../../components/ScrollReveal";
import PageHeader from "../../components/PageHeader";

const processSteps = [
  { icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", title: "Research & Analysis", desc: "SEMrush analysis, competitor profiling, keyword research" },
  { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", title: "Strategy", desc: "Content strategy, keyword targeting, CRM workflows" },
  { icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z", title: "Content Creation", desc: "AI-powered content, expert editing, schema markup" },
  { icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37", title: "Technical SEO", desc: "Speed optimization, structured data, internal linking" },
  { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10", title: "Monitoring", desc: "Daily rank tracking, indexing, competitor movements" },
  { icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", title: "Reporting", desc: "Monthly performance reports, ranking changes, ROI" },
];

const tools = [
  { name: "SEMrush", category: "SEO Intelligence" },
  { name: "Google Search Console", category: "Indexing & Search Data" },
  { name: "Google Analytics 4", category: "Traffic & Conversion" },
  { name: "Next.js", category: "Web Framework" },
  { name: "Vercel", category: "Hosting & Deployment" },
  { name: "GoHighLevel", category: "CRM & Automation" },
  { name: "AI Content Engine", category: "Content Creation" },
  { name: "Ahrefs", category: "Backlink Analysis" },
  { name: "PageSpeed Insights", category: "Performance" },
  { name: "Schema.org", category: "Structured Data" },
];

const weeks = [
  { week: "Week 1", title: "Analysis & Reporting", items: ["Pull SEMrush data and rank tracking", "Analyze indexing status in GSC", "Review competitor movements", "Generate monthly performance report"] },
  { week: "Week 2-3", title: "Content & Technical", items: ["Create and publish new content pieces", "Optimize existing pages based on data", "Build and acquire backlinks", "Technical SEO improvements"] },
  { week: "Week 4", title: "Review & Plan", items: ["Review month performance vs KPIs", "Plan next month content calendar", "Client update call", "Adjust strategy based on data"] },
];

export default function ProcessPage() {
  return (
    <>
      <PageHeader badge="Our Process" title="How We Do It" subtitle="A systematic, data-driven approach powered by AI and proven SEO methodology." />
      <ScrollReveal>
        <div className="glass-card p-8 mb-8">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-6">Our 6-Step Process</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-center h-full">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} /></svg>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-xs text-gray-500">{step.desc}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2"><svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <div className="glass-card p-8 mb-8">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-6">Tools & Technology</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {tools.map((tool, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-3 border border-gray-100 text-center">
                <p className="text-sm font-medium text-gray-900">{tool.name}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{tool.category}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <div className="glass-card p-8 mb-8">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-6">Monthly Cadence</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {weeks.map((w, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-1">{w.week}</p>
                <h3 className="text-gray-900 font-semibold mb-3">{w.title}</h3>
                <ul className="space-y-2">
                  {w.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={300}>
        <div className="glass-card p-8">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-4">The AI Advantage</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
              <p className="text-3xl font-bold font-display text-brand-blue mb-2">10x</p>
              <p className="text-sm text-gray-900 font-medium">Faster Content Creation</p>
              <p className="text-xs text-gray-500 mt-1">62 blog articles + 35 location pages in weeks, not months</p>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-xl p-6">
              <p className="text-3xl font-bold font-display text-green-600 mb-2">24/7</p>
              <p className="text-sm text-gray-900 font-medium">Data Monitoring</p>
              <p className="text-xs text-gray-500 mt-1">Automated rank tracking, competitor alerts, indexing checks</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
              <p className="text-3xl font-bold font-display text-amber-600 mb-2">100%</p>
              <p className="text-sm text-gray-900 font-medium">Data-Driven Decisions</p>
              <p className="text-xs text-gray-500 mt-1">Every content piece and optimization backed by SEMrush data</p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
