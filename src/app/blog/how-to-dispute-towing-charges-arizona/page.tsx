import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How to Dispute Towing Charges in Arizona: Legal Options Explained",
  description:
    "Learn how to dispute towing charges in Arizona. Understand your legal options, the complaint process, small claims court, and what evidence you need to win.",
};

const RELATED_ARTICLES = [
  {
    slug: "understanding-towing-fees-arizona",
    title: "Understanding Towing and Storage Fees in Arizona: What&rsquo;s Legal?",
    category: "Vehicle Owner Resources",
    readTime: "8 min",
    gradient: "from-blue-600 via-blue-800 to-blue-950",
  },
  {
    slug: "can-my-car-be-towed-without-warning",
    title: "Can My Car Be Towed Without Warning? Arizona Private Property Rules",
    category: "Vehicle Owner Resources",
    readTime: "9 min",
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
            How to Dispute Towing Charges in Arizona:{" "}
            <span className="text-gradient">Legal Options Explained</span>
          </h1>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <div className="max-w-none prose-lg">
                <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">
                  If you believe your vehicle was towed illegally or that you
                  were overcharged, Arizona law gives you several avenues for
                  disputing the charges. From filing administrative complaints
                  to taking your case to small claims court, knowing the right
                  path &mdash; and having the right evidence &mdash; can mean
                  the difference between paying hundreds of dollars in
                  unjustified fees and getting your money back.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Grounds for Disputing a Tow in Arizona
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Not every tow you disagree with is legally disputable. To
                  have a valid case, you generally need to show that the tow
                  violated Arizona law or the towing company&apos;s own
                  published policies. Common grounds for dispute include:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span><strong className="text-gray-900">Missing or inadequate signage:</strong> The property did not have proper tow-away signs meeting ARS 28-3511 requirements at every entrance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span><strong className="text-gray-900">No property owner authorization:</strong> The tow was performed without the written consent of the property owner or authorized agent.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span><strong className="text-gray-900">Excessive fees:</strong> The charges exceed the towing company&apos;s published rates or state-regulated maximums.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span><strong className="text-gray-900">Refusal to accept proper payment:</strong> The tow lot demanded cash only or refused your credit or debit card.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span><strong className="text-gray-900">Vehicle damage:</strong> Your vehicle was damaged during the towing process.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span><strong className="text-gray-900">Refusal to release on scene:</strong> The driver refused to release your vehicle even though the tow truck had not left the property.</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Step 1: Gather Your Evidence
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Strong documentation is the foundation of any successful
                  dispute. Begin collecting evidence as soon as you learn your
                  vehicle has been towed. Photograph the property where you
                  were parked, including all entrances and any signs (or the
                  absence of signs). Save your itemized receipt from the
                  impound lot. Take photos of your vehicle&apos;s condition
                  when you retrieve it. Record the names, dates, and details
                  of every conversation with the towing company, property
                  manager, or anyone else involved.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Step 2: File an Administrative Complaint
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Your first formal step should be filing a complaint with the
                  Arizona Department of Transportation (ADOT), which licenses
                  and regulates tow truck operators in the state. You can file
                  a complaint online through ADOT&apos;s website or by calling
                  their Motor Vehicle Division. ADOT investigates complaints
                  involving unlicensed operators, fee violations, failure to
                  follow proper procedures, and misconduct by tow operators.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  You can also file a complaint with the Arizona Attorney
                  General&apos;s Consumer Protection Division, especially if
                  you believe the towing company engaged in deceptive or
                  unfair business practices. The Better Business Bureau is
                  another option for documenting your complaint publicly.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Step 3: Demand a Refund in Writing
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Send a written demand letter to the towing company by
                  certified mail. In the letter, state the specific reasons
                  you believe the tow or charges were unlawful, reference the
                  applicable Arizona statutes (such as ARS 28-3511), include
                  copies of your evidence, and state the specific amount you
                  are requesting as a refund. Give the company a reasonable
                  deadline to respond &mdash; typically 30 days.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Step 4: Small Claims Court
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  If the towing company does not respond to your demand letter
                  or refuses to refund your money, you can file a claim in
                  Arizona Justice Court (small claims division). In Maricopa
                  County, the filing fee for small claims is typically under
                  $100, and you can seek up to $3,500 in damages. You do not
                  need an attorney for small claims court.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  When presenting your case, bring all of your evidence:
                  photographs of signage (or lack thereof), your itemized
                  receipt, your demand letter and any response, the
                  company&apos;s published fee schedule, and any witness
                  statements. Judges in these cases typically look for clear
                  violations of Arizona&apos;s towing statutes.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  What You Can Recover
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  If your dispute is successful, you may be able to recover
                  the full amount of towing and storage fees you paid, any
                  costs related to vehicle damage caused during towing,
                  court filing fees and service costs, and in some cases,
                  consequential damages such as rental car costs or lost
                  wages if you can demonstrate them.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Tips for a Stronger Case
                </h2>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Document everything with timestamps &mdash; photos on your phone automatically include date and time metadata</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Stay calm and professional in all communications &mdash; emotional complaints carry less weight</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Research the specific Arizona statutes that apply to your situation and cite them in your complaint</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Check the towing company&apos;s ADOT license status &mdash; unlicensed operations strengthen your case significantly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Pay the fees to retrieve your vehicle first, then dispute &mdash; leaving it at the lot only adds costs</span>
                  </li>
                </ul>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Questions About Your Towing Charges?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {COMPANY.name} is committed to transparent, fair pricing
                    and lawful towing practices. If you have questions about
                    charges related to a vehicle at one of our facilities,
                    contact us for a clear explanation.
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
                  <p className="text-gray-700 text-sm mb-4">Talk to our team about your towing charges.</p>
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
