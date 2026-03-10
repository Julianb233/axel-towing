import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "What Happens When a Rental Car Gets Towed from Private Property?",
  description:
    "What to do when a rental car is towed from private property in Arizona. Learn about liability, rental company policies, and how to handle fees and disputes.",
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
            <span className="text-sm text-blue-200/60">7 min read</span>
            <span className="text-sm text-blue-200/60">March 9, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            What Happens When a Rental Car Gets Towed{" "}
            <span className="text-gradient">from Private Property?</span>
          </h1>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <div className="max-w-none prose-lg">
                <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">
                  Having a rental car towed creates a uniquely complicated
                  situation. You are driving someone else&apos;s vehicle, the
                  registration is not in your name, and the rental company has
                  its own policies about towing incidents. Understanding who is
                  responsible, what you should do immediately, and how to
                  minimize the financial damage can save you from a billing
                  nightmare. This guide walks you through the entire scenario
                  step by step.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Who Is Responsible: You or the Rental Company?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  In nearly all cases, you &mdash; the renter &mdash; are
                  responsible for towing and storage fees incurred while the
                  vehicle is in your possession. Your rental agreement almost
                  certainly includes language making you liable for all parking
                  violations, towing charges, and related fees during your
                  rental period. Even if the rental company pays the fees
                  upfront to retrieve the vehicle, they will charge those costs
                  back to your credit card.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The rental company owns the vehicle and is the registered
                  owner, which means they will receive any notifications from
                  the towing company. This creates a time-sensitive situation:
                  if you do not act quickly, the rental company may not learn
                  about the tow for days, allowing storage fees to accumulate
                  &mdash; all of which will eventually be billed to you.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Immediate Steps When Your Rental Is Towed
                </h2>
                <ol className="text-gray-600 space-y-4 my-4 reveal">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-cta text-white flex items-center justify-center text-sm font-bold shrink-0">1</span>
                    <div><strong className="text-gray-900">Call the rental company immediately:</strong> Notify them that the vehicle has been towed. They can provide their registration and insurance documents, which you may need at the impound lot.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-cta text-white flex items-center justify-center text-sm font-bold shrink-0">2</span>
                    <div><strong className="text-gray-900">Identify the towing company:</strong> Check signs at the property, ask property management, or call local police to find out where the vehicle was taken.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-cta text-white flex items-center justify-center text-sm font-bold shrink-0">3</span>
                    <div><strong className="text-gray-900">Contact the tow lot:</strong> Ask about fees, accepted payment methods, business hours, and what documentation is needed. Explain that the vehicle is a rental.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-cta text-white flex items-center justify-center text-sm font-bold shrink-0">4</span>
                    <div><strong className="text-gray-900">Coordinate retrieval:</strong> Some rental companies will send a representative to pick up the vehicle. Others will instruct you to retrieve it yourself and submit receipts for reimbursement review.</div>
                  </li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  The Documentation Challenge
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The biggest hurdle with a towed rental car is documentation.
                  Impound lots require proof of ownership to release a vehicle,
                  and you are not the owner. You will need to present your
                  rental agreement (keep a copy on your phone or in your
                  wallet), your driver&apos;s license, and potentially a letter
                  or phone call from the rental company authorizing you to
                  retrieve the vehicle.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Major rental companies like Enterprise, Hertz, and Avis have
                  procedures for this exact situation. Their roadside assistance
                  or customer service teams can usually fax or email an
                  authorization letter to the impound lot directly. This is
                  another reason to call the rental company as your very first
                  step.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Financial Impact: What to Expect
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Beyond the towing and storage fees themselves, a towed rental
                  car can trigger several additional charges from the rental
                  company. These may include an administrative fee for handling
                  the tow situation (often $25 to $75), charges for &ldquo;loss
                  of use&rdquo; if the vehicle was at the impound lot during
                  time another customer could have rented it, and potential
                  damage charges if the tow caused any damage to the vehicle.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Some rental companies will add these charges to your final
                  bill immediately, while others may send a separate invoice
                  weeks later. Review your rental agreement to understand what
                  charges are permissible and dispute any that seem excessive
                  or not covered by the agreement terms.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Does Rental Car Insurance Cover Towing Fees?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  In most cases, no. The supplemental insurance or damage
                  waiver (CDW/LDW) that rental companies offer covers damage
                  to the vehicle, not parking violations or towing fees. Your
                  personal auto insurance or credit card rental coverage may
                  provide some protection against vehicle damage during a tow,
                  but they typically do not cover the towing and storage fees
                  themselves. Check your specific coverage terms to confirm.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Can You Dispute Rental Car Towing Charges?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  If you believe the tow was unlawful (such as missing signage
                  at the property), you can still dispute the charges through
                  the same channels available to any vehicle owner. File a
                  complaint with ADOT, document the scene, and pursue a claim
                  in small claims court if warranted. If the rental company
                  has already charged your credit card, you may also file a
                  dispute with your credit card issuer.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Prevention Tips for Rental Car Drivers
                </h2>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Be extra cautious about parking signs since you are unfamiliar with the area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>When visiting hotels, always confirm where rental cars should be parked</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Keep the rental company&apos;s emergency number saved in your phone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Take photos of your parking spot and surrounding signs every time you park</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Keep a digital copy of your rental agreement accessible on your phone</span>
                  </li>
                </ul>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Rental Car Towed to Our Lot?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {COMPANY.name} works with rental car companies regularly
                    to facilitate smooth vehicle retrieval. Call us and we can
                    coordinate directly with your rental company to minimize
                    delays and fees.
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
                      <p className="text-gray-500 text-sm">Professional private property towing and parking enforcement serving the Greater Phoenix metro area since 2021. Licensed, insured, and committed to transparent, fair towing practices.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 reveal">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Share This Article</p>
                  <div className="flex gap-3">
                    {["Facebook", "Twitter", "LinkedIn", "Email"].map((platform) => (
                      <button key={platform} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-500 text-sm font-medium hover:bg-primary hover:text-white transition-colors">{platform}</button>
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
                  <p className="text-gray-500 text-sm mb-4">Our team can coordinate with your rental company.</p>
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a>
                </div>
                <div className="rounded-2xl p-6 bg-gradient-to-br from-primary to-blue-800 text-white text-center reveal">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full glass flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Free Property Assessment</h3>
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
                  <span className="text-xs text-gray-400 mt-2 inline-block">{article.readTime} read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
