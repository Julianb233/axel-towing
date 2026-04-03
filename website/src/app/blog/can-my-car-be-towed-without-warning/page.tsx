import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Can My Car Be Towed Without Warning? Arizona Private Property Rules",
  description:
    "Learn when your car can be towed without warning in Arizona. Understand private property towing rules, signage requirements, and your rights as a vehicle owner.",
};

const RELATED_ARTICLES = [
  {
    slug: "vehicle-towed-from-apartment-rights",
    title: "My Vehicle Was Towed from My Apartment: Know Your Rights in Arizona",
    category: "Vehicle Owner Resources",
    readTime: "8 min",
    gradient: "from-blue-600 via-blue-800 to-blue-950",
  },
  {
    slug: "arizona-towing-laws-ars-28-3511-explained",
    title: "Understanding Arizona Towing Laws: ARS 28-3511 Explained",
    category: "Legal",
    readTime: "6 min",
    gradient: "from-blue-400 via-cyan-600 to-blue-800",
  },
  {
    slug: "avoiding-private-property-towing-tips",
    title: "10 Tips to Avoid Getting Towed from Private Property in Arizona",
    category: "Vehicle Owner Resources",
    readTime: "7 min",
    gradient: "from-indigo-500 via-purple-600 to-indigo-800",
  },
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
            <svg className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">Vehicle Owner Resources</span>
            <span className="text-sm text-blue-200/60">9 min read</span>
            <span className="text-sm text-blue-200/60">March 9, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            Can My Car Be Towed Without Warning?{" "}
            <span className="text-gradient">Arizona Private Property Rules</span>
          </h1>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <div className="max-w-none prose-lg">
                <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">
                  One of the most common questions vehicle owners ask after
                  being towed is: &ldquo;Can they really do that without
                  warning me first?&rdquo; The answer depends on the
                  circumstances, the type of property, and whether Arizona
                  signage requirements were met. In many cases, yes &mdash;
                  your car can be towed from private property without a
                  personal warning placed on the vehicle, as long as proper
                  signage is posted at the property. This guide explains
                  exactly when a warning is required and when it is not.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  The Role of Signage in Arizona Towing Law
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Under Arizona Revised Statutes 28-3511, the posted tow-away
                  sign is the legal warning. When a property has proper signage
                  at its entrances stating that unauthorized vehicles will be
                  towed at the owner&apos;s expense, that signage serves as
                  notice to every driver who enters the property. No additional
                  personal warning &mdash; no note on your windshield, no phone
                  call, no verbal heads-up &mdash; is legally required.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  For signs to constitute valid legal notice, they must meet
                  specific requirements. Signs must be posted at each entrance
                  to the property. They must include the name and phone number
                  of the authorized towing company. The signs must clearly
                  state &ldquo;Tow-Away Zone&rdquo; or similar language that
                  indicates unauthorized vehicles will be removed. Signs must
                  be visible, maintained in readable condition, and
                  reflective or illuminated for nighttime visibility.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  When Immediate Towing Is Allowed (No Warning Needed)
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Several situations allow for immediate towing without any
                  additional notice beyond posted signage:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span><strong className="text-gray-900">Fire lane violations:</strong> Vehicles blocking fire lanes can be towed immediately regardless of any other factors, as they pose an immediate safety hazard.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span><strong className="text-gray-900">Handicap parking without a valid permit:</strong> Illegally occupying an accessible parking space is subject to immediate tow.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span><strong className="text-gray-900">Blocking entrances or exits:</strong> Vehicles obstructing access points to a property can be removed without delay.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span><strong className="text-gray-900">Properly signed private parking lots:</strong> If the property has compliant tow-away signage, unauthorized vehicles can be towed as soon as the property owner or manager authorizes the tow.</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  When a Warning IS Required
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Some property managers and HOAs voluntarily implement
                  warning systems as part of their enforcement policies, even
                  though Arizona law does not require it. Many apartment
                  complexes, for example, place a warning sticker or notice on
                  a first-time offending vehicle before authorizing a tow. This
                  is a courtesy, not a legal requirement, and it reflects the
                  property&apos;s individual enforcement policy rather than
                  state law.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  However, there are limited situations where warnings may be
                  legally necessary. Some HOA governing documents (CC&amp;Rs)
                  require a warning notice before towing a resident&apos;s
                  vehicle. If the HOA&apos;s own rules mandate a warning
                  period, failure to follow that policy could expose the HOA
                  to liability, even though state law would not have required
                  the warning. Always check your lease or HOA documents for
                  specific enforcement procedures that may apply.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  What If There Were No Signs Posted?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  If your vehicle was towed from private property that did not
                  have proper tow-away signage, the tow may be unlawful. Under
                  ARS 28-3511, the signage requirement is a prerequisite for
                  legal private property towing. Without proper signs, the
                  property owner and towing company may be liable for your
                  costs, including the towing fees, storage charges, and
                  potentially other damages.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  If you believe you were towed from a property without proper
                  signage, document the scene immediately. Take photographs
                  showing all entrances to the property and the absence of
                  tow-away signs. Note the date, time, and exact location.
                  This evidence will be critical if you decide to file a
                  complaint with ADOT or pursue a claim in small claims court.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  The &ldquo;Catch Me Before I Leave&rdquo; Rule
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Arizona law provides one important protection for vehicle
                  owners: if you arrive before the tow truck physically leaves
                  the property with your vehicle, the driver must release it.
                  You may still owe a partial &ldquo;drop fee&rdquo; for the
                  time and labor already invested, but you can prevent the
                  full tow. This rule applies even when the vehicle is already
                  loaded onto the flatbed &mdash; as long as the truck has not
                  left the property boundaries.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Protecting Yourself Going Forward
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The best way to avoid an unexpected tow is simple awareness.
                  Read all posted signs before parking on any private property.
                  If you are visiting an apartment complex, ask your host about
                  guest parking procedures. If you live in an HOA community,
                  read your CC&amp;Rs so you know the parking rules. When in
                  doubt, park in a public area and walk a little further.
                </p>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Have Questions About a Recent Tow?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    If your vehicle was towed from a property managed by {COMPANY.name},
                    contact us for a clear explanation of the tow authorization,
                    fees, and retrieval process. We are committed to
                    transparency in every interaction.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`tel:${COMPANY.phone}`} className="btn-primary">Call {COMPANY.phone}</a>
                    <Link href="/contact" className="btn-cta">Contact Us Online</Link>
                  </div>
                </div>

                <div className="glass-card-white rounded-2xl p-6 mt-12 reveal">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cta flex items-center justify-center text-white text-xl font-bold shrink-0">AT</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Axle Towing &amp; Impound</h4>
                      <p className="text-gray-700 text-sm">Professional private property towing and parking enforcement serving the Greater Phoenix metro area since 2021. Licensed, insured, and committed to transparent, fair towing practices.</p>
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
                  <p className="text-gray-700 text-sm mb-4">Our team can explain your situation and options.</p>
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a>
                </div>
                <div className="rounded-2xl p-6 bg-gradient-to-br from-primary to-blue-800 text-white text-center reveal">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full glass flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-white mb-2">Free Property Assessment</h3>
                  <p className="text-blue-100/70 text-sm mb-4">Property owners: get a free parking enforcement evaluation.</p>
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
