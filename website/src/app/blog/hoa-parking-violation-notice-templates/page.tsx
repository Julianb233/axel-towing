import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "HOA Parking Violation Notices: Templates and Best Practices",
  description:
    "Download free HOA parking violation notice templates for Arizona communities. Includes courtesy notices, formal warnings, final notices, and towing authorization letters with best practices for each.",
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
    slug: "hoa-board-member-parking-liability",
    title: "HOA Board Member Liability: Parking Enforcement Dos and Don'ts",
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
            <span className="text-sm text-blue-200/60">7 min read</span>
            <span className="text-sm text-blue-200/60">March 9, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            HOA Parking Violation Notices:{" "}
            <span className="text-gradient">Templates and Best Practices</span>
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
                  The parking violation notice is the most important tool in your HOA&apos;s enforcement toolkit. A well-written notice accomplishes three critical things: it documents the violation for your records, it gives the vehicle owner clear notice and an opportunity to correct the issue, and it protects your board from liability if the situation escalates to towing. This guide covers the different types of notices you need and provides templates for each.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  The Four Levels of Parking Violation Notices
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  A graduated notice system is the foundation of fair, legally defensible parking enforcement. Each level serves a different purpose and carries increasing urgency. Using all four levels before towing creates a comprehensive paper trail that demonstrates your board acted reasonably.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">
                  Level 1: Courtesy Notice
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The courtesy notice is a friendly, informational document placed on the vehicle&apos;s windshield during the education phase of your enforcement program or for first-time violations. It should not be threatening or punitive. Its purpose is to inform the vehicle owner that they are in violation and give them an opportunity to correct the issue voluntarily.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  A courtesy notice should include:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>The HOA name and logo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Date and time the notice was placed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Vehicle description (make, model, color, license plate if visible)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Location where the vehicle is parked</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>A brief description of the violation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Reference to the specific parking rule being violated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>A request to correct the violation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Contact information for questions</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">
                  Level 2: Formal Warning Notice
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The formal warning is issued when a vehicle owner has already received a courtesy notice and has not corrected the violation, or for more serious violations that warrant immediate formal documentation. This notice is more direct and clearly states the consequences of continued non-compliance.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  In addition to all the information from the courtesy notice, a formal warning should include a reference to the prior courtesy notice (date issued), a clear statement that this is a formal warning, a deadline for compliance (typically 24&ndash;48 hours for parking violations), a statement that further violations will result in escalated enforcement including possible towing, and the homeowner&apos;s right to a hearing before the board.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">
                  Level 3: Final Notice / Pre-Tow Warning
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The final notice is the last step before towing. It should be placed on the vehicle and, when possible, sent via mail or email to the homeowner of record. This notice explicitly states that the vehicle will be towed if not moved within a specific timeframe. Include all previous violation history (dates of courtesy notice and formal warning), a firm deadline for vehicle removal, the name and phone number of the towing company, and information about the appeals process.
                </p>

                {/* Key highlight box */}
                <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-l-primary reveal">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Important: Immediate-Tow Exceptions
                  </h3>
                  <p className="text-gray-600">
                    Certain violations warrant immediate towing without the graduated notice process. These include vehicles blocking fire lanes, vehicles parked in ADA-accessible spaces without a valid placard, vehicles blocking emergency access or exits, and vehicles creating an immediate safety hazard. Your parking policy should clearly list these immediate-tow situations so homeowners are on notice from the beginning.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">
                  Level 4: Towing Authorization
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  When a vehicle has progressed through the graduated notice system and the deadline in the final notice has passed, the board or management company issues a towing authorization to the towing company. This document should include all prior notice history with dates and photo evidence, the specific parking rule being violated, confirmation that ARS 28-3511 signage is in place, authorization from the board or management company, and the date and time the tow is authorized.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Best Practices for All Violation Notices
                </h2>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Use professional, neutral language.</strong> Avoid sarcasm, frustration, or personal commentary. The notice is a legal document, not a personal message.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Take photos every time.</strong> Photograph the violation, the notice on the vehicle, and the surrounding area. Timestamp every photo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Keep copies of everything.</strong> Maintain a file for each violation with copies of all notices, photos, and correspondence.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Reference specific rules.</strong> Always cite the specific section of your parking rules or CC&amp;Rs that is being violated.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Include contact information.</strong> Give homeowners a way to reach the board or management company with questions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Use weatherproof materials.</strong> In Arizona&apos;s extreme heat, flimsy paper notices can become unreadable within hours. Use card stock and place notices in plastic sleeves or adhesive pouches.</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Let Your Towing Partner Handle Notices
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Many professional towing companies handle the entire notice process as part of their service. At {COMPANY.name}, we place courtesy notices, formal warnings, and final notices during our regular patrol routes. Every notice is photographed, timestamped, and logged in our system. Board members can review all notices and enforcement activity through our online portal at any time.
                </p>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Need Professional Violation Notice Management?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {COMPANY.name} handles the entire violation notice process for Arizona HOA communities &mdash; from courtesy notices to towing authorization. Every notice is documented with photos and timestamps, giving your board complete records. All services are provided at zero cost to your association.
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
