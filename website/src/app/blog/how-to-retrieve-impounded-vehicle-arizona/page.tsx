import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How to Retrieve Your Impounded Vehicle in Arizona: Complete Guide",
  description:
    "Complete guide to retrieving an impounded vehicle in Arizona. Learn what documents you need, expected fees, business hours, and how to get your car back fast.",
};

const RELATED_ARTICLES = [
  {
    slug: "what-to-do-when-car-towed-phoenix",
    title: "What to Do When Your Car Is Towed in Phoenix: Step-by-Step Guide",
    category: "Vehicle Owner Resources",
    readTime: "10 min",
    gradient: "from-blue-600 via-blue-800 to-blue-950",
  },
  {
    slug: "understanding-towing-fees-arizona",
    title: "Understanding Towing and Storage Fees in Arizona: What&rsquo;s Legal?",
    category: "Vehicle Owner Resources",
    readTime: "8 min",
    gradient: "from-blue-400 via-cyan-600 to-blue-800",
  },
  {
    slug: "personal-belongings-towed-vehicle-arizona",
    title: "Retrieving Personal Belongings from a Towed Vehicle in Arizona",
    category: "Vehicle Owner Resources",
    readTime: "6 min",
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
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-blue-200/60 hover:text-white mb-6 transition-colors group"
          >
            <svg className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">
              Vehicle Owner Resources
            </span>
            <span className="text-sm text-blue-200/60">9 min read</span>
            <span className="text-sm text-blue-200/60">March 9, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            How to Retrieve Your Impounded Vehicle in Arizona:{" "}
            <span className="text-gradient">Complete Guide</span>
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
                  Having your vehicle impounded in Arizona can be overwhelming,
                  but the retrieval process is straightforward once you know the
                  steps. Whether your car was towed from private property, a
                  city street, or impounded following a traffic stop, this guide
                  walks you through everything you need to do to get your
                  vehicle back &mdash; from gathering paperwork to
                  understanding your fees and your rights under Arizona law.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Types of Vehicle Impounds in Arizona
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The process for retrieving your vehicle depends on the type
                  of impound. In Arizona, there are three main categories, and
                  each has slightly different procedures and timelines.
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-gray-900">Private property tows:</strong> Authorized by the property owner or manager when a vehicle violates posted parking rules. These are the most common type in the Phoenix metro area.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-gray-900">Law enforcement impounds:</strong> Ordered by police after an accident, DUI arrest, expired registration, or other legal violation. These often have mandatory hold periods.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-gray-900">Abandoned vehicle tows:</strong> Vehicles left on public or private property beyond the timeframes allowed under Arizona law may be removed and stored.</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Documents Required for Vehicle Retrieval
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Gathering the right documents before visiting the impound lot
                  is the single most important step. Arriving without proper
                  documentation means a wasted trip and additional days of
                  storage fees accumulating on your account.
                </p>
                <ol className="text-gray-600 space-y-4 my-4 reveal">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">1</span>
                    <div>
                      <strong className="text-gray-900">Valid Photo ID:</strong>{" "}
                      Arizona driver&apos;s license, state ID, military ID, or passport. The name must match the vehicle registration or title.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">2</span>
                    <div>
                      <strong className="text-gray-900">Vehicle Registration:</strong>{" "}
                      Current Arizona registration card showing your name as the registered owner. Expired registrations may create additional complications.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">3</span>
                    <div>
                      <strong className="text-gray-900">Proof of Insurance:</strong>{" "}
                      Most impound lots require proof of active insurance before releasing a vehicle. If your policy has lapsed, you may need to reinstate coverage first.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0">4</span>
                    <div>
                      <strong className="text-gray-900">Police Release Form (if applicable):</strong>{" "}
                      For law enforcement impounds, you will need a release authorization from the impounding agency before the tow lot can release your vehicle.
                    </div>
                  </li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  When Someone Else Needs to Pick Up Your Vehicle
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  If you cannot retrieve the vehicle yourself, you can authorize
                  someone else to do it on your behalf. This requires a
                  notarized authorization letter that includes your full legal
                  name, the authorized person&apos;s full legal name, the
                  vehicle&apos;s year, make, model, and VIN number, and your
                  signature (notarized). The authorized person must bring the
                  letter along with their own valid photo ID, plus copies of
                  your ID and vehicle registration.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Understanding Hold Periods
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Certain types of impounds have mandatory hold periods during
                  which you cannot retrieve your vehicle, regardless of whether
                  you have the proper documentation and fees. In Arizona, a
                  standard DUI impound carries a 30-day mandatory hold period.
                  Vehicles used in the commission of certain crimes may have
                  longer holds. Private property tows generally have no
                  mandatory hold &mdash; you can retrieve your vehicle as soon
                  as the lot opens and you have your paperwork and payment.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  During a mandatory hold, storage fees continue to accumulate.
                  Arizona law allows vehicle owners to request an
                  &ldquo;imminent domain&rdquo; hearing within the first 10
                  days of a 30-day impound to contest the hold, but this
                  hearing is separate from disputing the tow itself.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Expected Fees and Payment Methods
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The total cost to retrieve an impounded vehicle in Arizona
                  depends on several factors: the type of tow, the towing
                  company&apos;s rates (within state-regulated maximums), and
                  how many days the vehicle has been in storage. A typical
                  private property tow and one-day retrieval might cost between
                  $200 and $400 total. If the vehicle sits for a week, storage
                  fees alone could add $175 to $350 on top of the initial tow
                  charge.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Arizona law requires tow lots to accept credit cards, debit
                  cards, cash, and money orders. They cannot require cash-only
                  payment. If an impound lot refuses to accept your credit card,
                  that is a violation you can report to ADOT. Always request an
                  itemized receipt before paying.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  What Happens If You Cannot Afford to Retrieve Your Vehicle
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  If you cannot pay the fees to retrieve your vehicle, storage
                  charges will continue to accumulate daily. After a certain
                  period &mdash; typically 30 days for private property tows
                  and up to 90 days for other types &mdash; the towing company
                  can begin the process to sell the vehicle at auction to
                  recover their costs. If the auction proceeds exceed what you
                  owe, the towing company is required to hold the surplus for
                  you.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Before it reaches that point, contact the towing company to
                  discuss payment options. Some companies offer payment plans
                  or will negotiate reduced fees if you pick up the vehicle
                  promptly. Acting quickly is always in your financial interest.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Step-by-Step Retrieval Checklist
                </h2>
                <ol className="text-gray-600 space-y-4 my-4 reveal">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-cta text-white flex items-center justify-center text-sm font-bold shrink-0">1</span>
                    <div>Identify which company towed your vehicle by checking posted signs, calling the property manager, or contacting local police.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-cta text-white flex items-center justify-center text-sm font-bold shrink-0">2</span>
                    <div>Call the tow company to confirm their lot address, business hours, accepted payment methods, and total current fees.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-cta text-white flex items-center justify-center text-sm font-bold shrink-0">3</span>
                    <div>Gather all required documents: photo ID, registration, insurance, and any police release form if applicable.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-cta text-white flex items-center justify-center text-sm font-bold shrink-0">4</span>
                    <div>Visit the impound lot during business hours, present your documents, and pay the fees.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-cta text-white flex items-center justify-center text-sm font-bold shrink-0">5</span>
                    <div>Request an itemized receipt and inspect your vehicle for any damage before driving off the lot.</div>
                  </li>
                </ol>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Need to Retrieve Your Vehicle?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {COMPANY.name} operates impound lots in Apache Junction and
                    Phoenix. Contact us to check if your vehicle is at one of
                    our facilities, get current fee information, and learn what
                    documents you need to bring.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`tel:${COMPANY.phone}`} className="btn-primary">
                      Call {COMPANY.phone}
                    </a>
                    <Link href="/contact" className="btn-cta">
                      Contact Us Online
                    </Link>
                  </div>
                </div>

                {/* Author Box */}
                <div className="glass-card-white rounded-2xl p-6 mt-12 reveal">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cta flex items-center justify-center text-white text-xl font-bold shrink-0">
                      AT
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Axle Towing &amp; Impound</h4>
                      <p className="text-gray-700 text-sm">
                        Professional private property towing and parking
                        enforcement serving the Greater Phoenix metro area since
                        2021. Licensed, insured, and committed to transparent,
                        fair towing practices.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 reveal">
                  <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">Share This Article</p>
                  <div className="flex gap-3">
                    {["Facebook", "Twitter", "LinkedIn", "Email"].map((platform) => (
                      <button key={platform} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                        {platform}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
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
                  <p className="text-gray-700 text-sm mb-4">Talk to our team about retrieving your vehicle.</p>
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

      {/* Related Articles Bottom */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center reveal">More Articles You Might Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RELATED_ARTICLES.map((article, index) => (
              <Link key={article.title} href={article.slug === "#" ? "#" : `/blog/${article.slug}`} className="glass-card-white rounded-2xl overflow-hidden group reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className={`h-40 bg-gradient-to-br ${article.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.12),transparent_50%)]" />
                  {article.slug === "#" && (
                    <div className="absolute top-3 right-3 glass rounded-full px-3 py-1 text-xs text-white font-semibold">Coming Soon</div>
                  )}
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
