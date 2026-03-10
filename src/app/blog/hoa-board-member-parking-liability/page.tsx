import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "HOA Board Member Liability: Parking Enforcement Dos and Don'ts",
  description:
    "Protect yourself as an HOA board member. Learn about personal liability risks in parking enforcement, Arizona's business judgment rule, and how to implement towing programs that shield the board from lawsuits.",
};

const RELATED_ARTICLES = [
  {
    slug: "hoa-parking-enforcement-guide",
    title: "HOA Parking Enforcement: What Board Members Need to Know",
    category: "HOA Resources",
    readTime: "10 min",
    gradient: "from-blue-600 via-blue-800 to-blue-950",
  },
  {
    slug: "hoa-parking-rules-template-arizona",
    title: "HOA Parking Rules Template: A Free Downloadable Guide for Arizona Communities",
    category: "HOA Resources",
    readTime: "9 min",
    gradient: "from-blue-400 via-cyan-600 to-blue-800",
  },
  {
    slug: "hoa-parking-violation-notice-templates",
    title: "HOA Parking Violation Notices: Templates and Best Practices",
    category: "HOA Resources",
    readTime: "7 min",
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
            <svg
              className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">
              HOA Resources
            </span>
            <span className="text-sm text-blue-200/60">8 min read</span>
            <span className="text-sm text-blue-200/60">
              March 9, 2026
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            HOA Board Member Liability:{" "}
            <span className="text-gradient">
              Parking Enforcement Dos and Don&apos;ts
            </span>
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content - 75% */}
            <div className="lg:col-span-3">
              <div className="max-w-none prose-lg">
                <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">
                  Serving on an HOA board is a volunteer position, but that does not mean it comes without risk. When it comes to parking enforcement and vehicle towing, board members can face personal liability if programs are implemented incorrectly. This guide explains how Arizona law protects board members who follow best practices &mdash; and where the most common liability pitfalls lie.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Understanding Board Member Liability in Arizona
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Arizona law provides significant protections for HOA board members who act in good faith and within the scope of their authority. The business judgment rule, codified in Arizona&apos;s Nonprofit Corporation Act (ARS 10-3830), shields board members from personal liability when they make informed decisions in the best interest of the association, even if those decisions later prove to be imperfect.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  However, these protections have limits. Board members can lose this shield if they act outside their authority, fail to follow governing documents, engage in selective or discriminatory enforcement, or make decisions without adequate information. Parking enforcement is one of the areas where these boundaries are most frequently tested.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  The Dos: Protecting Yourself and Your Board
                </h2>
                <ul className="text-gray-600 space-y-4 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Do adopt a written parking policy before any enforcement begins.</strong>{" "}
                      A formal, board-adopted policy establishes the rules and demonstrates that the board acted deliberately. Distribute the policy to all homeowners and keep proof of distribution on file.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Do enforce rules uniformly across all homeowners.</strong>{" "}
                      The single biggest liability risk for board members is selective enforcement. If you tow one homeowner&apos;s illegally parked RV but ignore another&apos;s, you expose the board to discrimination claims. Apply rules equally, including to board members and their families.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Do provide proper notice before enforcement actions.</strong>{" "}
                      Arizona&apos;s Planned Communities Act requires that homeowners receive notice and an opportunity to be heard before enforcement actions are taken. Document all notices sent, including dates and methods of delivery.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Do maintain comprehensive documentation.</strong>{" "}
                      Every enforcement action should be documented with photos, timestamps, violation descriptions, and records of prior warnings. This documentation is your defense if a homeowner challenges the action.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Do work with a professional towing company experienced with HOAs.</strong>{" "}
                      A professional partner handles the operational and legal complexities of towing, reducing the board&apos;s direct exposure. They handle ARS 28-3511 compliance, signage, documentation, and proper towing procedures.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Do carry adequate Directors &amp; Officers (D&amp;O) insurance.</strong>{" "}
                      D&amp;O insurance provides an additional layer of protection for board members. Ensure your policy covers enforcement-related claims and review coverage limits annually.
                    </div>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  The Don&apos;ts: Common Liability Traps
                </h2>
                <ul className="text-gray-600 space-y-4 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Don&apos;t enforce parking rules selectively or based on personal relationships.</strong>{" "}
                      This is the number one source of HOA parking lawsuits. If you give your neighbor a pass on an RV in the driveway while citing someone else, you are creating a discrimination claim.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Don&apos;t authorize towing without proper signage in place.</strong>{" "}
                      Under ARS 28-3511, towing from private property requires compliant signage at every entrance. Towing without proper signs can result in the HOA being liable for the tow costs and potentially additional damages.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Don&apos;t skip the graduated enforcement process.</strong>{" "}
                      Jumping straight to towing without warnings creates hostility and legal exposure. A graduated approach (courtesy notice, formal warning, final notice, then towing) demonstrates reasonableness and good faith.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Don&apos;t make individual board members the enforcement decision-makers.</strong>{" "}
                      Enforcement decisions should be made according to written policy, not by individual board members. This protects individual members from personal liability claims.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Don&apos;t ignore the appeals process.</strong>{" "}
                      Arizona law (ARS 33-1803) gives homeowners the right to a hearing before the board for any enforcement action. Denying this right or failing to hold timely hearings can expose the board to legal liability.
                    </div>
                  </li>
                </ul>

                {/* Key highlight box */}
                <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-l-primary reveal">
                  <h3 className="font-bold text-gray-900 mb-2">
                    The Business Judgment Rule: Your Best Protection
                  </h3>
                  <p className="text-gray-600">
                    Arizona&apos;s business judgment rule protects board members who (1) act in good faith, (2) make decisions based on adequate information, (3) follow the governing documents, and (4) act in what they reasonably believe is the best interest of the association. If you follow these four principles in every parking enforcement decision, you have strong legal protection against personal liability.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  ADA Compliance: A Special Liability Concern
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  One area where HOA boards face heightened liability risk is ADA (Americans with Disabilities Act) compliance. Your parking enforcement policy must never interfere with ADA-accessible parking. Never tow a vehicle with a valid disability placard from an ADA space. Ensure the correct number of ADA spaces are maintained and properly marked. Make reasonable accommodations for residents with disabilities who may need modified parking arrangements. Consult with your HOA attorney if you receive a disability-related parking accommodation request.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  How a Professional Towing Partner Reduces Liability
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Working with a professional towing company that specializes in HOA enforcement significantly reduces board liability. The towing company handles operational decisions, maintains proper insurance, ensures ARS 28-3511 compliance, and provides the documentation that protects both the association and the board. They also serve as a buffer between the board and angry homeowners, reducing the emotional conflicts that can escalate into legal disputes.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  At {COMPANY.name}, we carry comprehensive liability insurance and handle all compliance requirements. Our drivers are trained specifically for residential community enforcement, and we provide detailed documentation of every enforcement action &mdash; giving your board the records they need if any action is ever challenged.
                </p>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Protect Your Board with Professional Enforcement
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {COMPANY.name} helps Arizona HOA boards implement legally compliant parking enforcement programs that protect board members from liability. All services &mdash; signage, patrols, warnings, towing, and reporting &mdash; are provided at zero cost to your association.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="btn-primary"
                    >
                      Call {COMPANY.phone}
                    </a>
                    <Link
                      href="/services/hoa-towing"
                      className="btn-cta"
                    >
                      HOA Towing Services
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
                      <h4 className="font-bold text-gray-900">
                        Axle Towing &amp; Impound
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Professional private property towing and parking
                        enforcement serving the Greater Phoenix metro area since
                        2021. Licensed, insured, and committed to helping HOA
                        communities maintain orderly, safe parking environments.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="mt-8 pt-8 border-t border-gray-200 reveal">
                  <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">
                    Share This Article
                  </p>
                  <div className="flex gap-3">
                    {["Facebook", "Twitter", "LinkedIn", "Email"].map(
                      (platform) => (
                        <button
                          key={platform}
                          className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-primary hover:text-white transition-colors"
                        >
                          {platform}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - 25% */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="glass-card-white rounded-2xl p-6 reveal">
                  <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {RELATED_ARTICLES.map((article) => (
                      <Link
                        key={article.title}
                        href={
                          article.slug === "#"
                            ? "#"
                            : `/blog/${article.slug}`
                        }
                        className="block group"
                      >
                        <div
                          className={`h-20 rounded-lg bg-gradient-to-br ${article.gradient} mb-2`}
                        />
                        <span className="text-xs text-primary font-semibold uppercase">
                          {article.category}
                        </span>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">
                          {article.title}
                        </p>
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
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">
                    Call {COMPANY.phone}
                  </a>
                </div>

                <div className="rounded-2xl p-6 bg-gradient-to-br from-primary to-blue-800 text-white text-center reveal">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full glass flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Free HOA Assessment</h3>
                  <p className="text-blue-100/70 text-sm mb-4">
                    We will evaluate your community&apos;s parking needs and recommend a custom enforcement program.
                  </p>
                  <Link href="/contact" className="inline-block w-full py-2.5 rounded-lg bg-white text-primary font-bold text-sm hover:bg-blue-50 transition-colors">
                    Get Free Assessment
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Related Articles Bottom */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center reveal">
            More Articles You Might Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RELATED_ARTICLES.map((article, index) => (
              <Link
                key={article.title}
                href={article.slug === "#" ? "#" : `/blog/${article.slug}`}
                className="glass-card-white rounded-2xl overflow-hidden group reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`h-40 bg-gradient-to-br ${article.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.12),transparent_50%)]" />
                  {article.slug === "#" && (
                    <div className="absolute top-3 right-3 glass rounded-full px-3 py-1 text-xs text-white font-semibold">
                      Coming Soon
                    </div>
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
