import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Arizona Towed Vehicle Auction Process: Timelines and Your Options",
  description:
    "Learn about the Arizona towed vehicle auction process. Understand timelines, notification requirements, how to prevent your vehicle from being auctioned, and your rights.",
};

const RELATED_ARTICLES = [
  {
    slug: "how-to-retrieve-impounded-vehicle-arizona",
    title: "How to Retrieve Your Impounded Vehicle in Arizona: Complete Guide",
    category: "Vehicle Owner Resources",
    readTime: "9 min",
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
            Arizona Towed Vehicle Auction Process:{" "}
            <span className="text-gradient">Timelines and Your Options</span>
          </h1>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <div className="max-w-none prose-lg">
                <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">
                  If your towed vehicle remains unclaimed at an impound lot,
                  Arizona law eventually allows the towing company to sell it
                  at auction to recover their costs. Understanding the timeline
                  and notification requirements gives you the best chance of
                  preventing this outcome. This guide explains the entire
                  process &mdash; from the day your vehicle is towed to the
                  day it could be sold &mdash; and what options you have at
                  each stage.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  The Arizona Vehicle Lien Process
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  When a towing company tows and stores your vehicle, they
                  accumulate charges for the tow and daily storage. After a
                  certain period of non-payment, Arizona law allows the towing
                  company to apply for a &ldquo;mechanic&apos;s lien&rdquo; or
                  storage lien against the vehicle. This lien gives them the
                  legal right to sell the vehicle at public auction if the
                  owner does not come forward and pay the outstanding fees.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The process is governed by ARS 28-4801 through 28-4805 and
                  requires the towing company to follow strict procedures,
                  including providing written notice to the registered owner
                  and any lienholders (such as a bank that holds the car
                  loan). Failure to follow these procedures can invalidate
                  the auction and any subsequent sale.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Timeline: When Can Your Vehicle Be Auctioned?
                </h2>
                <ol className="text-gray-600 space-y-4 my-4 reveal">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">1</span>
                    <div><strong className="text-gray-900">Days 1-10:</strong> The towing company must send a written notice to the registered owner and any lienholders by certified mail within 10 days of the tow. This notice must include the vehicle description, location, and the amount owed.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">2</span>
                    <div><strong className="text-gray-900">Days 10-30:</strong> The registered owner has at least 20 days after the notice is mailed to claim the vehicle and pay all fees. Storage fees continue to accumulate during this period.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0">3</span>
                    <div><strong className="text-gray-900">After 30+ days:</strong> If the vehicle remains unclaimed, the towing company can apply for a title from ADOT. Once they receive the title, they can sell the vehicle at public auction.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0">4</span>
                    <div><strong className="text-gray-900">Auction notice:</strong> Before the auction, the towing company must publish a notice in a newspaper of general circulation in the county. The auction cannot occur less than 10 days after publication.</div>
                  </li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Notification Requirements
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Arizona law requires the towing company to make a genuine
                  effort to notify you before auctioning your vehicle. This
                  includes sending certified mail to the registered owner&apos;s
                  address on file with ADOT, notifying any lienholders
                  (banks, credit unions) listed on the title, and running a
                  VIN check to verify ownership information. If you have moved
                  and not updated your address with the Arizona MVD, you may
                  not receive the notice &mdash; but the towing company has
                  still fulfilled their legal obligation by mailing it to the
                  address on file.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  What Happens at the Auction
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Vehicle auctions conducted by towing companies are typically
                  public events where anyone can bid. The vehicle is sold as-is,
                  with no warranties. The minimum bid usually covers the
                  outstanding towing and storage fees plus auction costs. If
                  the winning bid exceeds the total amount owed, the towing
                  company must hold the surplus for the former owner. You have
                  the right to claim any surplus funds within a specified
                  period after the auction.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  How to Prevent Your Vehicle from Being Auctioned
                </h2>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-gray-900">Act quickly:</strong> Retrieve your vehicle as soon as possible after the tow. Every day adds storage fees and brings you closer to the auction timeline.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-gray-900">Negotiate a payment plan:</strong> Many towing companies will work with you on payments rather than going through the auction process, which is costly and time-consuming for them too.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-gray-900">Contact your lienholder:</strong> If you have a car loan, contact your bank or credit union. They have a financial interest in the vehicle and may help resolve the situation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-gray-900">Keep your address current:</strong> Update your address with Arizona MVD if you move, so you receive any lien or auction notices.</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Can You Get Your Vehicle Back After the Lien Is Filed?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Yes &mdash; up until the auction actually takes place, you
                  can retrieve your vehicle by paying all outstanding fees.
                  Once the lien has been filed, the total amount owed may
                  include additional processing and filing fees on top of the
                  original tow and storage charges. But the vehicle is still
                  yours until the gavel falls at auction. After the auction,
                  the title transfers to the winning bidder and you lose all
                  rights to the vehicle.
                </p>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Concerned About a Vehicle at Our Lot?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {COMPANY.name} follows all Arizona notification requirements
                    and always prefers returning vehicles to their owners over
                    the auction process. If you have a vehicle at one of our
                    lots, contact us to discuss your options before fees
                    continue to accumulate.
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
                  <p className="text-gray-700 text-sm mb-4">Talk to our team about your vehicle&apos;s status.</p>
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
