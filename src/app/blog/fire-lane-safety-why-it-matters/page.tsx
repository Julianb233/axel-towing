import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Why Fire Lane Enforcement Saves Lives: Real Stories from Arizona",
  description:
    "Learn why fire lane enforcement is critical for public safety. Real examples from Arizona showing how blocked fire lanes delay emergency response and endanger lives.",
};

const RELATED_ARTICLES = [
  {
    slug: "emergency-vehicle-access-parking-lots",
    title: "Emergency Vehicle Access: How Proper Parking Enforcement Saves Response Time",
    category: "Safety &amp; Community",
    readTime: "7 min",
    gradient: "from-red-600 via-red-800 to-red-950",
  },
  {
    slug: "accessible-parking-protecting-disability-rights",
    title: "Protecting Disability Rights: Why Accessible Parking Enforcement Matters",
    category: "Safety &amp; Community",
    readTime: "8 min",
    gradient: "from-orange-400 via-red-600 to-red-800",
  },
  {
    slug: "community-benefits-professional-towing",
    title: "5 Ways Professional Towing Services Benefit Your Community",
    category: "Safety &amp; Community",
    readTime: "6 min",
    gradient: "from-amber-500 via-orange-600 to-red-800",
  },
];

export default function ArticlePage() {
  return (
    <>
      <section className="parallax-container min-h-[45vh] flex items-end relative">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-red-900 to-red-800 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(224,43,32,0.15),transparent_60%)] z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
          <Link href="/blog" className="inline-flex items-center text-sm text-red-200/60 hover:text-white mb-6 transition-colors group">
            <svg className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="glass rounded-full px-3 py-1 text-red-200 text-xs font-bold uppercase tracking-wider">Safety &amp; Community</span>
            <span className="text-sm text-red-200/60">8 min read</span>
            <span className="text-sm text-red-200/60">March 9, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            Why Fire Lane Enforcement Saves Lives:{" "}
            <span className="text-gradient">Real Stories from Arizona</span>
          </h1>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <div className="max-w-none prose-lg">
                <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">
                  A blocked fire lane is not just a parking inconvenience
                  &mdash; it is a matter of life and death. When a fire engine
                  or ambulance cannot reach a building because a vehicle is
                  blocking the fire lane, every second of delay can be the
                  difference between a contained incident and a tragedy. In
                  Arizona&apos;s dense apartment complexes, shopping centers,
                  and HOA communities, fire lane enforcement is one of the
                  most critical safety measures a property can implement.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  The Life-or-Death Math of Fire Lane Access
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The National Fire Protection Association (NFPA) reports that
                  fire doubles in size every 60 seconds in a typical
                  residential structure. When a fire engine arrives at a
                  property and the fire lane is blocked, the crew must either
                  wait for a tow truck, manually navigate around the
                  obstruction, or find an alternative access point. Each of
                  these delays adds minutes to the response &mdash; and those
                  minutes matter enormously.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  In medical emergencies, the American Heart Association notes
                  that brain damage begins within four to six minutes without
                  oxygen. A blocked fire lane that delays a paramedic crew by
                  even two minutes can be the difference between full recovery
                  and permanent disability or death. This is not a theoretical
                  concern &mdash; it happens in communities across Arizona
                  every year.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Real Scenarios from Arizona Properties
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Property managers across the Phoenix metro area have shared
                  countless stories of fire lane violations creating dangerous
                  situations. At one Mesa apartment complex, a vehicle parked
                  in the fire lane forced paramedics to carry a stretcher an
                  additional 200 feet to reach a resident having a heart
                  attack. At a Scottsdale shopping center, a delivery truck
                  blocking the fire lane caused a fire engine to approach from
                  an alternate entrance, adding nearly three minutes to their
                  response to a kitchen fire.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  These are not isolated incidents. Fire departments across
                  Maricopa County report that blocked fire lanes are one of
                  their most frequent access challenges, particularly in
                  apartment complexes and commercial properties with busy
                  delivery schedules.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Arizona Fire Lane Laws
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Arizona law takes fire lane violations seriously. Under local
                  fire codes and ARS 28-874, parking in a fire lane is
                  prohibited and vehicles can be towed immediately. Unlike
                  other parking violations that may require warning notices or
                  specific signage procedures, fire lane violations are subject
                  to immediate enforcement because they create an imminent
                  safety hazard.
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Fire lanes must be clearly marked with red curb paint and posted signs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Vehicles blocking fire lanes can be towed immediately without additional warning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Property owners can be cited if they fail to maintain clear fire lane markings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Fines for fire lane violations can exceed $250 on top of towing and storage fees</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Why Property Managers Must Prioritize Fire Lane Enforcement
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Beyond the moral imperative, property managers face
                  significant legal liability if a fire lane obstruction
                  contributes to an injury or death on their property. If a
                  property owner knows that fire lanes are routinely blocked
                  and fails to take enforcement action, they could be held
                  liable in a lawsuit. Professional parking enforcement
                  eliminates this risk by ensuring fire lanes remain clear
                  at all times.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Insurance companies are also increasingly aware of fire lane
                  compliance. Some insurers offer reduced premiums to
                  properties that can demonstrate active fire lane enforcement
                  programs, recognizing that clear fire lanes reduce the
                  severity of fire damage and the resulting insurance claims.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  How Professional Enforcement Works
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Professional towing companies like {COMPANY.name} patrol
                  client properties specifically to monitor fire lane
                  compliance. When a vehicle is found blocking a fire lane,
                  the towing company can remove it immediately under Arizona
                  law. This proactive approach means fire lanes stay clear
                  around the clock, not just when a fire marshal happens to
                  visit.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The best part for property owners: this service costs
                  nothing. Professional towing companies recover their costs
                  from the vehicle owner, meaning your property gets 24/7
                  fire lane monitoring without a line item in your budget.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  What You Can Do
                </h2>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Never park in fire lanes, even for &ldquo;just a minute&rdquo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Report fire lane violations to property management when you see them</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>If you manage a property, ensure fire lane markings are maintained and clearly visible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Talk to your HOA board or apartment management about professional enforcement services</span>
                  </li>
                </ul>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Keep Your Property&apos;s Fire Lanes Clear
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {COMPANY.name} provides free fire lane enforcement for
                    properties across the Phoenix metro area. Our patrol teams
                    ensure fire lanes stay clear 24/7, protecting residents,
                    tenants, and visitors.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`tel:${COMPANY.phone}`} className="btn-primary">Call {COMPANY.phone}</a>
                    <Link href="/services/parking-enforcement" className="btn-cta">Parking Enforcement</Link>
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

                <div className="mt-8 pt-8 border-t border-gray-200 reveal">
                  <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">Share This Article</p>
                  <div className="flex gap-3">
                    {["Facebook", "Twitter", "LinkedIn", "Email"].map((platform) => (
                      <button key={platform} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-primary hover:text-white transition-colors">{platform}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="glass-card-white rounded-2xl p-6 reveal">
                  <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Related Articles</h3>
                  <div className="space-y-4">
                    {RELATED_ARTICLES.map((article) => (
                      <Link key={article.title} href={article.slug === "#" ? "#" : `/blog/${article.slug}`} className="block group">
                        <div className={`h-20 rounded-lg bg-gradient-to-br ${article.gradient} mb-2`} />
                        <span className="text-xs text-primary font-semibold uppercase">{article.category}</span>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">{article.title}</p>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="glass-card-white rounded-2xl p-6 text-center border-glow-blue reveal">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Need Help?</h3>
                  <p className="text-gray-700 text-sm mb-4">Talk to our safety enforcement specialists.</p>
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a>
                </div>
                <div className="rounded-2xl p-6 bg-gradient-to-br from-primary to-blue-800 text-white text-center reveal">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full glass flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Free Property Assessment</h3>
                  <p className="text-blue-100/70 text-sm mb-4">Get a free fire lane compliance evaluation for your property.</p>
                  <Link href="/contact" className="inline-block w-full py-2.5 rounded-lg bg-white text-primary font-bold text-sm hover:bg-blue-50 transition-colors">Get Free Assessment</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center reveal">More Articles You Might Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RELATED_ARTICLES.map((article, index) => (
              <Link key={article.title} href={article.slug === "#" ? "#" : `/blog/${article.slug}`} className="glass-card-white rounded-2xl overflow-hidden group reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className={`h-40 bg-gradient-to-br ${article.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.12),transparent_50%)]" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-primary font-bold uppercase tracking-wider">{article.category}</span>
                  <h3 className="text-lg font-bold text-gray-900 mt-1 group-hover:text-primary transition-colors leading-snug">{article.title}</h3>
                  <span className="text-xs text-gray-600 mt-2 inline-block">{article.readTime} read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
