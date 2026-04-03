import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Guest Parking Management for HOAs: Policies That Actually Work",
  description:
    "Solve guest parking headaches in your HOA community. Learn proven policies for visitor permits, time limits, overnight rules, and enforcement strategies that keep residents and guests happy.",
};

const RELATED_ARTICLES = [
  {
    slug: "hoa-parking-rules-template-arizona",
    title: "HOA Parking Rules Template: A Free Downloadable Guide for Arizona Communities",
    category: "HOA Resources",
    readTime: "9 min",
    gradient: "from-blue-600 via-blue-800 to-blue-950",
  },
  {
    slug: "seasonal-parking-enforcement-arizona-hoa",
    title: "Seasonal Parking Challenges for Arizona HOAs: Snowbird Season Solutions",
    category: "HOA Resources",
    readTime: "8 min",
    gradient: "from-blue-400 via-cyan-600 to-blue-800",
  },
  {
    slug: "hoa-towing-communication-strategies",
    title: "How to Communicate Towing Policies Without Alienating Homeowners",
    category: "HOA Resources",
    readTime: "8 min",
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
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">HOA Resources</span>
            <span className="text-sm text-blue-200/60">8 min read</span>
            <span className="text-sm text-blue-200/60">March 9, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            Guest Parking Management for HOAs:{" "}
            <span className="text-gradient">Policies That Actually Work</span>
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
                  Guest parking is the single most complained-about parking issue in Arizona HOA communities. Residents want their guests to park conveniently, but they also do not want outsiders monopolizing limited spaces. Finding the right balance requires a thoughtful policy that is clear, enforceable, and fair. Here are the strategies that actually work.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  The Guest Parking Problem
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  In most Arizona HOA communities, guest parking operates on an honor system &mdash; and that system frequently breaks down. Without clear rules and consistent enforcement, guest spaces become extensions of residents&apos; personal parking. Third and fourth household vehicles get parked in &ldquo;guest&rdquo; spots indefinitely. Residents without garages treat guest spaces as their overflow. In some communities, the same vehicles sit in guest spots for weeks or months, and actual guests have nowhere to park.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  This creates a cycle of frustration. Residents complain to the board, the board sends out a generic reminder, nothing changes, and complaints increase. Breaking this cycle requires a structured guest parking policy with teeth.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Building an Effective Guest Parking Policy
                </h2>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">
                  Define Guest Parking Areas Clearly
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Start by clearly designating which spaces are for guests and which are for residents. Use distinct signage, paint markings, and numbering systems. Guest spaces should be labeled with &ldquo;Guest Parking &mdash; 48-Hour Maximum&rdquo; signs (or whatever time limit your policy sets). This removes ambiguity and puts visitors on notice from the moment they park.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">
                  Set Reasonable Time Limits
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Time limits are the backbone of effective guest parking management. Common time limits in Arizona HOA communities range from 24 to 72 hours. A 48-hour limit is the most popular choice because it accommodates overnight guests and weekend visitors while preventing long-term occupancy.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Your policy should clearly state:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>The maximum number of consecutive hours or days a guest vehicle may park</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Whether the clock resets if the vehicle leaves and returns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Maximum number of guest parking days per month per household</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Process for requesting extended guest parking (for family visits, medical situations, etc.)</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">
                  Implement a Guest Parking Permit System
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  A guest parking permit system is the most effective way to manage guest parking in larger communities. Permits can be as simple as a dashboard placard or hanging mirror tag. Each household receives a set number of guest permits per month (typically two to four), and guests must display a valid permit while parked in guest spaces.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The permit system offers several advantages. It creates accountability &mdash; every vehicle in a guest space can be traced to a specific household. It limits abuse because households have a finite number of permits. And it makes enforcement simple: any vehicle in a guest space without a valid permit is in violation.
                </p>

                {/* Key highlight box */}
                <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-l-primary reveal">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Pro Tip: Temporary Permits for Extended Stays
                  </h3>
                  <p className="text-gray-600">
                    Create a process for residents to request temporary extended guest permits for situations like family holiday visits, home healthcare workers, or out-of-town guests staying for a week or more. Require the request in writing (email is fine), specify the dates, and issue a temporary permit with a visible expiration date. This accommodates legitimate needs while maintaining control.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">
                  Overnight Guest Parking Rules
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Overnight parking is where many guest policies fall short. Without clear overnight rules, residents complain about unfamiliar vehicles in the community after dark. Establish whether overnight guest parking is allowed (it should be, with reasonable limits), whether overnight guests need to register with the management company or security gate, and whether there are specific areas designated for overnight guest parking versus areas where it is prohibited.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Enforcing Guest Parking Rules
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  A guest parking policy without enforcement is just words on paper. Effective enforcement requires regular patrols to identify vehicles in guest spaces without valid permits or exceeding time limits. Your towing partner should be able to identify repeat offenders and track which vehicles are parked in guest spaces during each patrol.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Use a graduated enforcement approach:
                </p>
                <ol className="text-gray-600 space-y-4 my-4 reveal">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">1</span>
                    <div>
                      <strong className="text-gray-900">First violation:</strong>{" "}
                      Courtesy notice placed on the vehicle with a copy of the guest parking rules.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">2</span>
                    <div>
                      <strong className="text-gray-900">Second violation:</strong>{" "}
                      Formal warning notice on the vehicle and a written notice mailed to the unit owner.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0">3</span>
                    <div>
                      <strong className="text-gray-900">Third violation:</strong>{" "}
                      Vehicle towed per posted community signage and parking rules.
                    </div>
                  </li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Handling Resident Pushback
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Expect pushback from residents who have been parking extra vehicles in guest spaces. The most common objections include &ldquo;I pay HOA dues, I should be able to use guest parking&rdquo; and &ldquo;My family visits frequently.&rdquo; Address these proactively by explaining that guest spaces are a shared community resource, not an extension of individual parking. Emphasize that the policy ensures actual guests always have a place to park, which benefits every household in the community.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Special Considerations for Arizona Communities
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Arizona communities face unique guest parking challenges, especially during snowbird season (October through April). Many communities see a significant increase in visitors during winter months as family and friends from colder climates visit. Your policy should account for seasonal demand spikes, perhaps by offering additional temporary guest permits during peak season or designating overflow parking areas during high-demand months.
                </p>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Need Help Managing Guest Parking?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {COMPANY.name} helps Arizona HOAs implement guest parking enforcement that is fair, consistent, and effective. Our patrol teams monitor guest parking areas and enforce your community&apos;s specific policies &mdash; all at zero cost to your association.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`tel:${COMPANY.phone}`} className="btn-primary">Call {COMPANY.phone}</a>
                    <Link href="/services/hoa-towing" className="btn-cta">HOA Towing Services</Link>
                  </div>
                </div>

                {/* Author Box */}
                <div className="glass-card-white rounded-2xl p-6 mt-12 reveal">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cta flex items-center justify-center text-white text-xl font-bold shrink-0">AT</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Axle Towing &amp; Impound</h4>
                      <p className="text-gray-700 text-sm">Professional private property towing and parking enforcement serving the Greater Phoenix metro area since 2021. Licensed, insured, and committed to helping HOA communities maintain orderly, safe parking environments.</p>
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
                  <p className="text-gray-700 text-sm mb-4">Talk to our HOA enforcement specialists today.</p>
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a>
                </div>

                <div className="rounded-2xl p-6 bg-gradient-to-br from-primary to-blue-800 text-white text-center reveal">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full glass flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-white mb-2">Free HOA Assessment</h3>
                  <p className="text-blue-100/70 text-sm mb-4">We will evaluate your community&apos;s parking needs and recommend a custom enforcement program.</p>
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
                  {article.slug === "#" && (<div className="absolute top-3 right-3 glass rounded-full px-3 py-1 text-xs text-white font-semibold">Coming Soon</div>)}
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
