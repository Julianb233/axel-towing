import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "The Hidden Dangers of Double Parking and How to Stop It",
  description: "Learn about the safety hazards of double parking and effective solutions for Arizona properties. Understand liability, emergency access issues, and enforcement strategies.",
};

const RELATED_ARTICLES = [
  { slug: "emergency-vehicle-access-parking-lots", title: "Emergency Vehicle Access: How Proper Parking Enforcement Saves Response Time", category: "Safety &amp; Community", readTime: "7 min", gradient: "from-red-600 via-red-800 to-red-950" },
  { slug: "reducing-crime-through-parking-enforcement", title: "How Professional Parking Enforcement Reduces Property Crime", category: "Safety &amp; Community", readTime: "7 min", gradient: "from-blue-400 via-cyan-600 to-blue-800" },
  { slug: "dumpster-access-blocked-vehicles", title: "Blocked Dumpster Access: When Parking Violations Affect Waste Management", category: "Safety &amp; Community", readTime: "6 min", gradient: "from-indigo-500 via-purple-600 to-indigo-800" },
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
            <span className="text-sm text-blue-200/60">7 min read</span>
            <span className="text-sm text-blue-200/60">March 9, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            The Hidden Dangers of Double Parking:{" "}<span className="text-gradient">and How to Stop It</span>
          </h1>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <div className="max-w-none prose-lg">
                <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">Double parking &mdash; stopping or parking a vehicle alongside another vehicle that is already parked at the curb or in a designated space &mdash; is one of the most disruptive and dangerous parking violations. It blocks traffic flow, traps other vehicles, obstructs emergency access, and creates visibility hazards for pedestrians. In crowded Phoenix parking lots and apartment complexes, double parking is a persistent problem that professional enforcement can solve.</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Why Double Parking Is More Dangerous Than It Seems</h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">Most drivers who double park believe they will only be a moment. But even brief double parking creates immediate hazards. Vehicles navigating around a double-parked car are forced into oncoming traffic or pedestrian areas. Children and pedestrians walking between parked cars become invisible to drivers trying to navigate the obstruction. Emergency vehicles may be unable to pass, delaying response to critical situations elsewhere on the property.</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">The Apartment Complex Problem</h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">Double parking is epidemic in apartment complexes where parking supply does not meet demand. Residents with more vehicles than assigned spaces, visitors without clear guest parking options, and delivery drivers all contribute to the problem. In complexes with narrow internal roads, a single double-parked vehicle can block the entire roadway, making it impossible for other residents to enter or exit and preventing emergency vehicles from accessing the property.</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Effective Solutions for Property Managers</h2>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2"><svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span><strong className="text-gray-900">Professional enforcement:</strong> Regular patrol presence deters double parking before it starts. When violators know they will be towed, compliance improves dramatically.</span></li>
                  <li className="flex items-start gap-2"><svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span><strong className="text-gray-900">Clear signage:</strong> Post &ldquo;No Double Parking&rdquo; signs in problem areas, along with tow-away warnings.</span></li>
                  <li className="flex items-start gap-2"><svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span><strong className="text-gray-900">Designated loading zones:</strong> Create short-term loading zones for deliveries and move-ins to reduce the temptation to double park.</span></li>
                  <li className="flex items-start gap-2"><svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span><strong className="text-gray-900">Resident communication:</strong> Include double parking rules in lease agreements and send periodic reminders about the safety consequences.</span></li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Liability for Property Owners</h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">If an accident or injury occurs because of double parking on your property and you have not taken reasonable steps to prevent it, you could face legal liability. This is especially true if the property has a history of double parking complaints and no enforcement program in place. Professional parking enforcement creates a documented record of your efforts to maintain safe parking conditions.</p>

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
