import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Parking Lot Lighting and Safety: Best Practices for Arizona Properties",
  description: "Best practices for parking lot lighting and safety in Arizona. Learn about security lighting standards, crime deterrence, and maintaining safe parking environments.",
};

const RELATED_ARTICLES = [
  { slug: "reducing-crime-through-parking-enforcement", title: "How Professional Parking Enforcement Reduces Property Crime", category: "Safety &amp; Community", readTime: "7 min", gradient: "from-blue-600 via-blue-800 to-blue-950" },
  { slug: "summer-parking-lot-safety-phoenix", title: "Summer Parking Lot Safety in Phoenix: Heat, Abandoned Vehicles, and Fire Risks", category: "Safety &amp; Community", readTime: "8 min", gradient: "from-amber-500 via-orange-600 to-red-800" },
  { slug: "community-benefits-professional-towing", title: "5 Ways Professional Towing Services Benefit Your Community", category: "Safety &amp; Community", readTime: "6 min", gradient: "from-indigo-500 via-purple-600 to-indigo-800" },
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
            Parking Lot Lighting and Safety:{" "}<span className="text-gradient">Best Practices for Arizona Properties</span>
          </h1>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <div className="max-w-none prose-lg">
                <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">Parking lot lighting is one of the most important yet often overlooked safety features of any Arizona property. Well-lit parking areas deter crime, prevent accidents, and help visitors feel safe. Poorly lit lots invite criminal activity, increase the risk of trips and falls, and create liability exposure for property owners. This guide covers lighting best practices, the connection between lighting and enforcement, and practical steps property managers can take to improve parking lot safety.</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Why Lighting Matters for Safety</h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">Studies consistently show that well-lit parking areas experience significantly less crime than poorly lit ones. The International Dark-Sky Association and the Illuminating Engineering Society both recommend minimum lighting levels for parking lots based on the type of property and expected foot traffic. For most commercial and residential properties in Arizona, the recommended minimum is one foot-candle of illumination across the parking surface, with higher levels near building entrances, walkways, and ATMs.</p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">Beyond crime deterrence, proper lighting prevents accidents. In Arizona, where monsoon storms can leave debris in parking lots and hot summers cause asphalt degradation, good visibility helps pedestrians avoid hazards. Property owners who fail to maintain adequate lighting can be held liable for injuries that occur in poorly lit areas.</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">The Connection Between Lighting and Parking Enforcement</h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">Effective parking enforcement and good lighting work together. Enforcement patrol teams need adequate lighting to identify vehicle violations, check license plates, and read parking permits. In poorly lit lots, violations go unnoticed, abandoned vehicles accumulate, and the overall sense of order deteriorates. Well-lit lots make enforcement more effective and efficient, creating a positive cycle of improved safety.</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Arizona-Specific Considerations</h2>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2"><svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span><strong className="text-gray-900">Heat resistance:</strong> Arizona temperatures can damage lighting fixtures. Choose commercial-grade LED fixtures rated for extreme heat environments.</span></li>
                  <li className="flex items-start gap-2"><svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span><strong className="text-gray-900">Dust and monsoon damage:</strong> Regular cleaning and inspection of fixtures is necessary after dust storms and monsoon events.</span></li>
                  <li className="flex items-start gap-2"><svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span><strong className="text-gray-900">Dark sky compliance:</strong> Many Arizona municipalities have dark sky ordinances that require shielded, downward-facing fixtures to reduce light pollution.</span></li>
                  <li className="flex items-start gap-2"><svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span><strong className="text-gray-900">Energy efficiency:</strong> LED conversions reduce operating costs by up to 70 percent while providing better, more uniform illumination.</span></li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Practical Steps for Property Managers</h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">Start by conducting a nighttime walkthrough of your parking areas. Note any dark spots, burned-out fixtures, or areas where light pollution from adjacent properties creates misleading shadows. Replace burned-out bulbs immediately, as even a single dark area can create a safety gap. Consider upgrading to LED fixtures that provide brighter, more uniform light at lower operating costs. Work with your parking enforcement provider to identify areas where improved lighting would enhance enforcement effectiveness.</p>

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
                      <p className="text-gray-500 text-sm">Professional private property towing and parking enforcement serving the Greater Phoenix metro area since 2021. Licensed, insured, and dedicated to community safety.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 reveal"><p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Share This Article</p><div className="flex gap-3">{["Facebook", "Twitter", "LinkedIn", "Email"].map((p) => (<button key={p} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-500 text-sm font-medium hover:bg-primary hover:text-white transition-colors">{p}</button>))}</div></div>
              </div>
            </div>
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="glass-card-white rounded-2xl p-6 reveal"><h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Related Articles</h3><div className="space-y-4">{RELATED_ARTICLES.map((a) => (<Link key={a.title} href={a.slug === "#" ? "#" : `/blog/${a.slug}`} className="block group"><div className={`h-20 rounded-lg bg-gradient-to-br ${a.gradient} mb-2`} /><span className="text-xs text-primary font-semibold uppercase">{a.category}</span><p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">{a.title}</p></Link>))}</div></div>
                <div className="glass-card-white rounded-2xl p-6 text-center border-glow-blue reveal"><div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center"><svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div><h3 className="font-bold text-gray-900 mb-2">Need Help?</h3><p className="text-gray-500 text-sm mb-4">Talk to our safety enforcement team today.</p><a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a></div>
                <div className="rounded-2xl p-6 bg-gradient-to-br from-primary to-blue-800 text-white text-center reveal"><div className="w-14 h-14 mx-auto mb-4 rounded-full glass flex items-center justify-center"><svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div><h3 className="font-bold mb-2">Free Property Assessment</h3><p className="text-blue-100/70 text-sm mb-4">Property owners: get a free parking enforcement evaluation.</p><Link href="/contact" className="inline-block w-full py-2.5 rounded-lg bg-white text-primary font-bold text-sm hover:bg-blue-50 transition-colors">Get Free Assessment</Link></div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <section className="py-20 bg-gray-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 className="text-3xl font-bold text-gray-900 mb-10 text-center reveal">More Articles You Might Like</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-6">{RELATED_ARTICLES.map((a, i) => (<Link key={a.title} href={a.slug === "#" ? "#" : `/blog/${a.slug}`} className="glass-card-white rounded-2xl overflow-hidden group reveal" style={{ transitionDelay: `${i * 100}ms` }}><div className={`h-40 bg-gradient-to-br ${a.gradient} relative overflow-hidden`}><div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.12),transparent_50%)]" /></div><div className="p-6"><span className="text-xs text-primary font-bold uppercase tracking-wider">{a.category}</span><h3 className="text-lg font-bold text-gray-900 mt-1 group-hover:text-primary transition-colors leading-snug">{a.title}</h3><span className="text-xs text-gray-400 mt-2 inline-block">{a.readTime} read</span></div></Link>))}</div></div></section>
    </>
  );
}
