"use client";
import ScrollReveal from "../../components/ScrollReveal";
import PageHeader from "../../components/PageHeader";
import { contentRoadmap, contentGaps } from "../../data/content-roadmap";

const statusColors: Record<string, string> = {
  published: "bg-green-50 text-green-600 border-green-100",
  writing: "bg-blue-50 text-brand-blue border-blue-100",
  planned: "bg-gray-50 text-gray-500 border-gray-200",
  ranking: "bg-amber-50 text-amber-600 border-amber-100",
};

export default function ContentPage() {
  const priorities = [1, 2, 3, 4, 5, 6];
  const priorityLabels: Record<number, string> = {
    1: "Money Pages (Immediate Revenue Impact)", 2: "High-Volume Informational Content (Traffic Drivers)",
    3: "Property Manager Decision Content (Conversion Focused)", 4: "City x Service Programmatic Pages",
    5: "Link-Worthy & Shareable Content (Backlink Magnets)", 6: "Seasonal & Trending Content",
  };

  return (
    <>
      <PageHeader badge="Content Strategy" title="Content Roadmap" subtitle="30 planned articles and pages targeting specific keyword opportunities, organized by priority." />
      <ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="glass-card p-4 text-center"><p className="text-2xl font-bold font-display text-green-600">63</p><p className="text-xs text-gray-500">Published</p></div>
          <div className="glass-card p-4 text-center"><p className="text-2xl font-bold font-display text-brand-blue">15</p><p className="text-xs text-gray-500">Pending Review</p></div>
          <div className="glass-card p-4 text-center"><p className="text-2xl font-bold font-display text-gray-900">30</p><p className="text-xs text-gray-500">Planned Articles</p></div>
          <div className="glass-card p-4 text-center"><p className="text-2xl font-bold font-display text-amber-600">8</p><p className="text-xs text-gray-500">Content Gaps Found</p></div>
        </div>
      </ScrollReveal>
      {priorities.map((priority, pi) => (
        <ScrollReveal key={priority} delay={pi * 80}>
          <div className="glass-card p-6 mb-6">
            <h2 className="text-lg font-bold font-display text-gray-900 mb-1">Priority {priority}: {priorityLabels[priority]}</h2>
            <p className="text-xs text-gray-400 mb-4">{contentRoadmap.filter(c => c.priority === priority).length} pieces</p>
            <div className="overflow-x-auto">
              <table className="w-full"><thead><tr><th className="w-8">#</th><th>Title</th><th>Target Keyword</th><th>Volume</th><th>Difficulty</th><th>Status</th></tr></thead><tbody>
                {contentRoadmap.filter(c => c.priority === priority).map((item) => (
                  <tr key={item.id}><td className="text-gray-400 font-medium">{item.id}</td><td className="text-gray-900 font-medium max-w-xs">{item.title}</td><td className="text-brand-blue text-xs">{item.targetKeyword}</td><td className="text-gray-600">{item.estimatedVolume}</td>
                  <td><span className={`text-xs ${item.difficulty === "Very Low" ? "text-green-600" : item.difficulty === "Low" ? "text-brand-blue" : "text-amber-600"}`}>{item.difficulty}</span></td>
                  <td><span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${statusColors[item.status]}`}>{item.status}</span></td></tr>
                ))}
              </tbody></table>
            </div>
          </div>
        </ScrollReveal>
      ))}
      <ScrollReveal delay={500}>
        <div className="glass-card p-8 mb-8">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-6">8 Content Gaps Identified</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {contentGaps.map((gap, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="flex items-start justify-between mb-2"><h3 className="text-sm font-semibold text-gray-900">{gap.gap}</h3><span className="text-xs text-amber-600 font-medium whitespace-nowrap ml-2">{gap.estimatedVolume}</span></div>
                <p className="text-xs text-gray-500">{gap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={600}>
        <div className="glass-card p-8">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-6">90-Day Content Action Plan</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { month: "Month 1", title: "Migration & Foundation", items: ["Point DNS to Railway", "Submit sitemap (120 pages)", "Publish 2 Priority 1 articles", "Submit to 10 directories"], active: true },
              { month: "Month 2", title: "Content Velocity", items: ["Create 6 City x Service pages", "Publish 3 high-value blog posts", "Create parking sign template", "5 guest post outreach"], active: false },
              { month: "Month 3", title: "Authority Building", items: ["Update all service pages", "Publish impound lot map", "Pull updated SEMrush data", "Data-driven strategy review"], active: false },
            ].map((m, i) => (
              <div key={i} className={`rounded-xl p-6 border ${m.active ? "bg-blue-50 border-blue-100" : "bg-gray-50 border-gray-100"}`}>
                <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${m.active ? "text-brand-blue" : "text-gray-400"}`}>{m.month}</p>
                <h3 className="text-gray-900 font-semibold mb-3">{m.title}</h3>
                <ul className="space-y-2 text-sm text-gray-500">
                  {m.items.map((item, j) => (<li key={j} className="flex items-start gap-2"><div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${m.active ? "bg-brand-blue" : "bg-gray-400"}`} />{item}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
