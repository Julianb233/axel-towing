import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Summer Parking Lot Safety in Phoenix: Heat, Abandoned Vehicles, and Fire Risks",
  description: "Stay safe in Phoenix parking lots during summer. Learn about heat dangers, abandoned vehicle risks, fire prevention, and how property managers can protect visitors.",
};

const RELATED_ARTICLES = [
  { slug: "fire-lane-safety-why-it-matters", title: "Why Fire Lane Enforcement Saves Lives: Real Stories from Arizona", category: "Safety &amp; Community", readTime: "8 min", gradient: "from-red-600 via-red-800 to-red-950" },
  { slug: "phoenix-monsoon-season-parking-safety", title: "Phoenix Monsoon Season: Parking Lot Safety and Vehicle Recovery Tips", category: "Safety &amp; Community", readTime: "7 min", gradient: "from-amber-500 via-orange-600 to-red-800" },
  { slug: "parking-lot-lighting-safety-arizona", title: "Parking Lot Lighting and Safety: Best Practices for Arizona Properties", category: "Safety &amp; Community", readTime: "7 min", gradient: "from-indigo-500 via-purple-600 to-indigo-800" },
];

export default function ArticlePage() {
  return (
    <>
      <section className="parallax-container min-h-[45vh] flex items-end relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(224,43,32,0.15),transparent_60%)] z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
          <Link href="/blog" className="inline-flex items-center text-sm text-blue-200/60 hover:text-white mb-6 transition-colors group">
            <svg className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">Safety &amp; Community</span>
            <span className="text-sm text-blue-200/60">8 min read</span>
            <span className="text-sm text-blue-200/60">March 9, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            Summer Parking Lot Safety in Phoenix:{" "}<span className="text-gradient">Heat, Abandoned Vehicles, and Fire Risks</span>
          </h1>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <div className="max-w-none prose-lg">
                <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">Phoenix summers are among the most extreme in the nation, with temperatures regularly exceeding 110 degrees Fahrenheit. These conditions create unique safety challenges in parking lots that property managers, tenants, and visitors need to understand. From the risk of heat-related illness to the danger of abandoned vehicles and increased fire hazards, summer parking lot safety in Phoenix requires proactive attention and professional management.</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">The Extreme Heat Factor</h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">A parked car in direct Phoenix sunlight can reach interior temperatures of 170 degrees Fahrenheit within minutes. The asphalt itself can reach surface temperatures exceeding 160 degrees. For property managers, this means parking lot surfaces can cause burns on bare feet, pets can suffer paw injuries, and the heat radiating from pavement makes the surrounding air even hotter. Ensuring shade structures, tree coverage, and adequate walking paths between parking areas and building entrances becomes a safety imperative during summer months.</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Abandoned Vehicle Risks in Summer</h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">Summer heat accelerates the deterioration of abandoned vehicles. Fluids leak more readily, tires are more likely to fail, and the risk of spontaneous vehicle fires increases. A vehicle left sitting on hot pavement for days can develop fluid leaks that stain and damage asphalt surfaces, create slip hazards, and even pose fire risks. Professional parking enforcement identifies and removes abandoned vehicles before they become safety hazards.</p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">Arizona law allows property owners to have abandoned vehicles towed after proper notice. During summer months, many property managers increase their enforcement patrols specifically to identify vehicles that appear inoperable or abandoned, protecting both the property and other visitors from the escalating risks that come with extreme heat.</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Fire Prevention in Parking Areas</h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">The combination of extreme heat, dry conditions, and vehicle fluids creates elevated fire risk in Phoenix parking lots during summer. Keeping fire lanes clear is more critical than ever during these months. A vehicle fire in a crowded parking lot can spread to adjacent vehicles within minutes if fire department access is delayed. Property managers should ensure fire extinguishers are available in parking structures, landscaping near parking areas is maintained to reduce dry brush, and no vehicles are blocking fire lanes or hydrant access.</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Protecting Visitors and Tenants</h2>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2"><svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>Maintain shade structures and covered walkways where possible to reduce heat exposure</span></li>
                  <li className="flex items-start gap-2"><svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>Increase patrols during peak heat hours to identify abandoned vehicles and safety hazards</span></li>
                  <li className="flex items-start gap-2"><svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>Ensure fire lanes remain clear with proactive enforcement throughout the summer season</span></li>
                  <li className="flex items-start gap-2"><svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>Post heat safety reminders including warnings about leaving children and pets in vehicles</span></li>
                  <li className="flex items-start gap-2"><svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>Keep parking lot surfaces in good repair to prevent tripping hazards that are harder to see in the glare</span></li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Children and Pets in Hot Cars</h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">Arizona leads the nation in hot car deaths. In 2025, multiple children and dozens of pets died after being left in parked vehicles in Maricopa County alone. Property managers and parking enforcement patrols play a role in this crisis by being alert to signs of children or animals left in vehicles. Arizona&apos;s Good Samaritan law (ARS 12-558.02) allows bystanders to break a vehicle window to rescue a child or pet in imminent danger of death, and parking patrol teams are often the first to notice a vehicle with a child or animal inside.</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Summer Enforcement Strategies</h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">Professional towing companies adjust their approach during Phoenix summers. Patrol schedules may shift to cover early morning and evening hours when parking lots are busiest. Enforcement teams are trained to watch for heat-related safety hazards alongside standard parking violations. Some properties implement enhanced summer parking rules, such as restricting overnight parking to reduce abandoned vehicle accumulation during the hottest months.</p>

                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Keep Your Property Safe</h3>
                  <p className="text-gray-600 mb-6">{COMPANY.name} provides professional parking enforcement at no cost to property owners across the Phoenix metro area. Our patrol teams keep your parking areas safe, organized, and compliant.</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`tel:${COMPANY.phone}`} className="btn-primary">Call {COMPANY.phone}</a>
                    <Link href="/contact" className="btn-cta">Get Free Assessment</Link>
                  </div>
                </div>

                <div className="glass-card-white rounded-2xl p-6 mt-12 reveal">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cta flex items-center justify-center text-white text-xl font-bold shrink-0">AT</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Axle Towing &amp; Impound</h4>
                      <p className="text-gray-700 text-sm">Professional private property towing and parking enforcement serving the Greater Phoenix metro area since 2021. Licensed, insured, and dedicated to community safety.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 reveal"><p className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">Share This Article</p><div className="flex gap-3">{["Facebook", "Twitter", "LinkedIn", "Email"].map((p) => (<button key={p} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-primary hover:text-white transition-colors">{p}</button>))}</div></div>
              </div>
            </div>
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="glass-card-white rounded-2xl p-6 reveal"><h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Related Articles</h3><div className="space-y-4">{RELATED_ARTICLES.map((a) => (<Link key={a.title} href={a.slug === "#" ? "#" : `/blog/${a.slug}`} className="block group"><div className={`h-20 rounded-lg bg-gradient-to-br ${a.gradient} mb-2`} /><span className="text-xs text-primary font-semibold uppercase">{a.category}</span><p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">{a.title}</p></Link>))}</div></div>
                <div className="glass-card-white rounded-2xl p-6 text-center border-glow-blue reveal"><div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center"><svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div><h3 className="font-bold text-gray-900 mb-2">Need Help?</h3><p className="text-gray-700 text-sm mb-4">Talk to our safety enforcement team today.</p><a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a></div>
                <div className="rounded-2xl p-6 bg-gradient-to-br from-primary to-blue-800 text-white text-center reveal"><div className="w-14 h-14 mx-auto mb-4 rounded-full glass flex items-center justify-center"><svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div><h3 className="font-bold mb-2">Free Property Assessment</h3><p className="text-blue-100/70 text-sm mb-4">Property owners: get a free parking enforcement evaluation.</p><Link href="/contact" className="inline-block w-full py-2.5 rounded-lg bg-white text-primary font-bold text-sm hover:bg-blue-50 transition-colors">Get Free Assessment</Link></div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <section className="py-20 bg-gray-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 className="text-3xl font-bold text-gray-900 mb-10 text-center reveal">More Articles You Might Like</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-6">{RELATED_ARTICLES.map((a, i) => (<Link key={a.title} href={a.slug === "#" ? "#" : `/blog/${a.slug}`} className="glass-card-white rounded-2xl overflow-hidden group reveal" style={{ transitionDelay: `${i * 100}ms` }}><div className={`h-40 bg-gradient-to-br ${a.gradient} relative overflow-hidden`}><div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.12),transparent_50%)]" /></div><div className="p-6"><span className="text-xs text-primary font-bold uppercase tracking-wider">{a.category}</span><h3 className="text-lg font-bold text-gray-900 mt-1 group-hover:text-primary transition-colors leading-snug">{a.title}</h3><span className="text-xs text-gray-600 mt-2 inline-block">{a.readTime} read</span></div></Link>))}</div></div></section>
    </>
  );
}
