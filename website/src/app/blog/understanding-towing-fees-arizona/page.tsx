import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Understanding Towing and Storage Fees in Arizona: What's Legal?",
  description:
    "Learn what towing and storage fees are legally allowed in Arizona. Understand fee caps, your rights, and how to spot overcharges on your impound bill.",
};

const RELATED_ARTICLES = [
  {
    slug: "how-to-dispute-towing-charges-arizona",
    title: "How to Dispute Towing Charges in Arizona: Legal Options Explained",
    category: "Vehicle Owner Resources",
    readTime: "7 min",
    gradient: "from-blue-600 via-blue-800 to-blue-950",
  },
  {
    slug: "how-to-retrieve-impounded-vehicle-arizona",
    title: "How to Retrieve Your Impounded Vehicle in Arizona: Complete Guide",
    category: "Vehicle Owner Resources",
    readTime: "9 min",
    gradient: "from-blue-400 via-cyan-600 to-blue-800",
  },
  {
    slug: "what-to-do-when-car-towed-phoenix",
    title: "What to Do When Your Car Is Towed in Phoenix: Step-by-Step Guide",
    category: "Vehicle Owner Resources",
    readTime: "10 min",
    gradient: "from-indigo-500 via-purple-600 to-indigo-800",
  },
];

export default function ArticlePage() {
  return (
    <>
      {/* Parallax Hero */}
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
            <span className="text-sm text-blue-200/60">8 min read</span>
            <span className="text-sm text-blue-200/60">March 9, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            Understanding Towing and Storage Fees in Arizona:{" "}
            <span className="text-gradient">What&apos;s Legal?</span>
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <div className="max-w-none prose-lg">
                <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">
                  When your vehicle is towed in Arizona, the bill can feel like
                  a shock. Between the initial tow charge, daily storage fees,
                  administrative costs, and potential after-hours retrieval
                  surcharges, the total can climb quickly. But Arizona law does
                  regulate what towing companies can charge, and knowing these
                  limits can protect you from paying more than what is legally
                  allowed. This guide breaks down every fee category so you
                  know exactly what to expect.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  How Arizona Regulates Towing Fees
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The Arizona Department of Transportation (ADOT) and state
                  statutes govern towing practices and fee structures. Under
                  ARS 28-3511 and related regulations, towing companies must
                  file their fee schedules with the state and are prohibited
                  from charging amounts that exceed published maximums. These
                  regulations apply to both private property tows and
                  police-ordered tows, though the specific fee structures may
                  differ between the two categories.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The key principle behind Arizona&apos;s towing fee regulation
                  is transparency. Towing companies must disclose their rates,
                  provide itemized receipts upon request, and post their fee
                  schedules at their place of business. If a company cannot
                  show you their published rates, that is a red flag and a
                  potential violation of state law.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Breakdown of Common Towing Fees
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Understanding each component of your towing bill helps you
                  identify whether you are being charged fairly. Here are the
                  standard fee categories you may encounter:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-gray-900">Base tow charge:</strong> The initial cost to tow your vehicle from the location to the impound lot. This typically ranges from $175 to $350 for a standard passenger vehicle, depending on the distance and time of day.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-gray-900">Daily storage fee:</strong> Charged for each day your vehicle remains at the impound lot. Storage fees in Arizona typically range from $25 to $50 per day. These are charged per calendar day, not per 24-hour period.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-gray-900">Administrative fee:</strong> Some lots charge a processing or paperwork fee, usually between $25 and $75. This should be included in the published fee schedule.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-gray-900">After-hours gate fee:</strong> If you need to retrieve your vehicle outside normal business hours, some facilities charge a gate fee, typically $50 to $100.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong className="text-gray-900">Drop fee:</strong> If you arrive before the tow truck leaves the property with your vehicle, you may be charged a reduced &ldquo;drop fee&rdquo; instead of the full tow rate. This is typically 50% of the base tow charge.</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Fees for Different Vehicle Types
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Towing fees vary based on vehicle size and weight. A standard
                  sedan or SUV will cost less to tow than a large truck, RV,
                  or commercial vehicle. Arizona towing companies are permitted
                  to charge higher rates for vehicles that require specialized
                  equipment, such as flatbed trailers for all-wheel-drive
                  vehicles or heavy-duty wreckers for large trucks. These
                  rates should still be part of the company&apos;s published
                  fee schedule.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Motorcycles are often charged a lower base tow rate than
                  passenger vehicles, but storage fees are typically the same.
                  If your vehicle has aftermarket modifications that make it
                  harder to tow (such as a lowered suspension), you should not
                  be charged extra unless the company has a published rate
                  for &ldquo;specialty tows.&rdquo;
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Red Flags: Signs You Are Being Overcharged
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  While most towing companies in Arizona operate within the
                  law, there are warning signs that you may be facing
                  illegitimate charges:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>The company refuses to provide an itemized breakdown of charges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Fees on your bill do not match the company&apos;s posted rate schedule</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>You are told &ldquo;cash only&rdquo; when Arizona law requires acceptance of credit and debit cards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>The bill includes vague charges like &ldquo;environmental fee&rdquo; or &ldquo;processing surcharge&rdquo; not listed in their published rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Storage fees were charged for more days than your vehicle was actually on the lot</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  How to Protect Yourself From Excessive Charges
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The best defense against overcharges is acting quickly and
                  staying informed. Retrieve your vehicle as soon as possible
                  to minimize storage fees. Call ahead and ask for total
                  charges before visiting the lot. Request the company&apos;s
                  published fee schedule and compare it to your bill. Always
                  ask for and keep an itemized receipt.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  If you believe you have been overcharged, file a complaint
                  with ADOT&apos;s Motor Vehicle Division. You can also pursue
                  the matter in small claims court if you have documentation
                  showing that the charges exceeded the company&apos;s
                  published rates or state maximums. Keep all receipts, take
                  photos of posted fee schedules, and document your
                  interactions with the towing company.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Why Private Property Towing Costs Nothing for Property Owners
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  One common question from property owners is who pays for
                  private property towing. The answer in Arizona is that the
                  vehicle owner bears the cost, not the property owner.
                  Professional towing companies like {COMPANY.name} provide
                  signage, patrols, and towing services at absolutely no cost
                  to the property owner or manager. This business model works
                  because the towing company recovers costs through the
                  impound fees paid by the vehicle owner upon retrieval.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  This arrangement means that property owners, HOAs, and
                  apartment complexes can maintain professional parking
                  enforcement without any budget impact. It is a win for
                  property owners who need order in their lots, and it keeps
                  fees transparent and regulated for vehicle owners who
                  violate posted parking rules.
                </p>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Questions About Towing Fees?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {COMPANY.name} believes in transparent, fair pricing. If
                    your vehicle is at one of our facilities, call us to get a
                    clear breakdown of your fees before you visit. Property
                    owners: our enforcement services are always free.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`tel:${COMPANY.phone}`} className="btn-primary">Call {COMPANY.phone}</a>
                    <Link href="/contact" className="btn-cta">Contact Us Online</Link>
                  </div>
                </div>

                {/* Author Box */}
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
                  <p className="text-gray-700 text-sm mb-4">Get a clear breakdown of your towing fees.</p>
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
