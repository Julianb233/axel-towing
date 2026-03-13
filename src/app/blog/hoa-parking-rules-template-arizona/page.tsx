import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "HOA Parking Rules Template: A Free Downloadable Guide for Arizona Communities",
  description:
    "Download a free HOA parking rules template customized for Arizona communities. Covers CC&R alignment, ARS 28-3511 compliance, guest parking, vehicle restrictions, and enforcement procedures.",
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
    slug: "hoa-towing-program-setup-guide",
    title: "How to Set Up an HOA Towing Program in 5 Simple Steps",
    category: "HOA Resources",
    readTime: "9 min",
    gradient: "from-blue-400 via-cyan-600 to-blue-800",
  },
  {
    slug: "hoa-board-member-parking-liability",
    title: "HOA Board Member Liability: Parking Enforcement Dos and Don'ts",
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
            <span className="text-sm text-blue-200/60">9 min read</span>
            <span className="text-sm text-blue-200/60">
              March 9, 2026
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            HOA Parking Rules Template:{" "}
            <span className="text-gradient">
              A Free Downloadable Guide for Arizona Communities
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
                  Creating effective parking rules for your HOA doesn&apos;t have to mean starting from scratch. Many Arizona HOA boards struggle with drafting parking policies that are both legally sound and practical for their communities. This guide provides a comprehensive, ready-to-customize parking rules template designed specifically for Arizona HOA communities, with built-in compliance for state towing laws and CC&amp;R alignment.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Why Your HOA Needs a Written Parking Policy
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  A written parking policy is not just a nice-to-have &mdash; it is a legal necessity for any Arizona HOA that intends to enforce parking rules or authorize vehicle towing. Without a clear, documented policy that has been formally adopted by the board and distributed to homeowners, your association faces significant legal exposure if a towing dispute ends up in court.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Arizona courts have consistently sided with vehicle owners in disputes where the HOA could not demonstrate that clear parking rules were in place and properly communicated before enforcement actions were taken. A well-drafted policy protects your board, your management company, and your community.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Essential Components of an HOA Parking Policy
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Every Arizona HOA parking policy should include these core sections. The template below covers each one in detail, but here is an overview of what to include and why each element matters.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">
                  1. Purpose and Authority Statement
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Begin your policy with a clear statement of purpose and the legal authority under which the board is adopting these rules. Reference the specific sections of your CC&amp;Rs that grant the board rulemaking authority over common areas and parking. This establishes the legal foundation for everything that follows.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">
                  2. Definitions Section
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Define key terms to avoid ambiguity. What constitutes an &ldquo;authorized vehicle&rdquo;? What is the boundary of &ldquo;common area parking&rdquo;? When does a vehicle become &ldquo;abandoned&rdquo;? In Arizona, an abandoned vehicle on private property is typically one that has not been moved for 96 hours or more, but your CC&amp;Rs may set a different standard.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">
                  3. Parking Zone Designations
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Map out every parking area in your community and assign clear designations: resident assigned spaces, resident unassigned spaces, guest/visitor parking, fire lanes, no-parking zones, and ADA-accessible spaces. Include a physical map or diagram as an attachment to the policy document.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">
                  4. Vehicle Restrictions
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Specify which types of vehicles are permitted and which are restricted. Common restrictions in Arizona HOA communities include:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Recreational vehicles (RVs), boats, and trailers exceeding a specified length</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Commercial vehicles with visible business signage or equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Inoperable vehicles with flat tires, expired registration, or visible damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Vehicles parked on landscaping, sidewalks, or unpaved surfaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Vehicles leaking fluids onto common area pavement</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">
                  5. Guest Parking Rules
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Guest parking is one of the most contentious issues in HOA communities. Your policy should clearly state how many guest spaces exist, the maximum duration a guest vehicle may occupy a space (typically 24&ndash;72 hours), whether a guest parking permit system will be used, and what happens when guest spaces are abused by residents storing extra vehicles.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">
                  6. Enforcement Procedures and Escalation
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Document your graduated enforcement process step by step. A typical Arizona HOA enforcement ladder includes:
                </p>
                <ol className="text-gray-600 space-y-4 my-4 reveal">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      1
                    </span>
                    <div>
                      <strong className="text-gray-900">Courtesy Notice:</strong>{" "}
                      A friendly written notice placed on the vehicle identifying the violation and requesting voluntary compliance within 24&ndash;48 hours.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      2
                    </span>
                    <div>
                      <strong className="text-gray-900">Formal Warning:</strong>{" "}
                      A written warning mailed to the homeowner of record, documenting the violation with photos and timestamps.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      3
                    </span>
                    <div>
                      <strong className="text-gray-900">Final Notice:</strong>{" "}
                      A final notice advising that the vehicle will be towed if the violation is not corrected within a specified timeframe.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0">
                      4
                    </span>
                    <div>
                      <strong className="text-gray-900">Towing Authorization:</strong>{" "}
                      The vehicle is towed per the posted signage and community policy. All prior documentation supports the action.
                    </div>
                  </li>
                </ol>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">
                  7. Appeals Process
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Arizona HOA law requires that homeowners have the right to a hearing before the board on any enforcement action, including fines and towing. Your policy must include a clear appeals process: how to request a hearing, the timeline for the board to respond, and how decisions will be communicated.
                </p>

                {/* Key highlight box */}
                <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-l-primary reveal">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Arizona-Specific Requirement: ARS 28-3511 Signage
                  </h3>
                  <p className="text-gray-600">
                    Arizona law requires specific signage before any vehicle can be towed from private property. Signs must display the towing company&apos;s name and phone number, include &ldquo;Tow-Away Zone&rdquo; language, and be posted at every entrance to the property. Your towing partner should handle signage installation and ensure full compliance &mdash; at no cost to your HOA.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Customizing the Template for Your Community
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Every HOA is different, and a one-size-fits-all parking policy will not work. When customizing this template, consider your community&apos;s specific layout and parking infrastructure. A gated community with assigned garages will have very different needs than a townhome community with shared surface lots.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Review your CC&amp;Rs carefully to ensure your parking rules do not conflict with existing covenants. If your CC&amp;Rs are silent on parking, the board generally has rulemaking authority under Arizona&apos;s Planned Communities Act (ARS 33-1803), but it is wise to have your HOA attorney review the final policy before adoption.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Consider seasonal factors unique to Arizona. Many communities in the Phoenix metro area experience a surge in visitors and temporary residents during the winter months. Your policy should address seasonal guest parking, snowbird vehicle storage, and temporary parking permits for extended visitors.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  How to Adopt and Distribute Your Parking Policy
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Once your parking rules template is customized, the board must formally adopt it through a proper vote at a board meeting. Check your bylaws for quorum requirements and notice provisions. After adoption, distribute the policy to every homeowner via mail or email, post it on your community website or portal, and ensure copies are included in new homeowner welcome packets.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Allow a grace period of at least 30 days between distribution and the start of enforcement. This gives residents time to read the policy, move non-compliant vehicles, and ask questions. Use this period to install proper signage throughout the community in compliance with ARS 28-3511.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Common Mistakes to Avoid
                </h2>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span><strong>Vague language:</strong> Avoid terms like &ldquo;reasonable&rdquo; or &ldquo;appropriate&rdquo; without clear definitions. Specificity protects both the HOA and homeowners.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span><strong>Selective enforcement:</strong> Apply rules uniformly to all homeowners, including board members. Selective enforcement is the fastest path to legal challenges.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span><strong>Missing ADA compliance:</strong> Ensure your policy explicitly addresses ADA-accessible parking requirements and never authorizes towing from ADA spaces.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span><strong>No appeals process:</strong> Arizona law gives homeowners the right to be heard. Omitting an appeals process exposes your board to legal liability.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span><strong>Outdated signage:</strong> If you change towing companies, update all signage immediately. Outdated signs can invalidate enforcement actions.</span>
                  </li>
                </ul>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Need Help Creating Your HOA Parking Policy?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Axle Towing &amp; Impound works with dozens of Arizona HOA communities to develop and implement effective parking enforcement programs. We can help you customize a parking policy that fits your community&apos;s specific needs &mdash; and all of our services, including signage, patrols, and enforcement, are completely free for HOAs.
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
                {/* Related Articles */}
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

                {/* Call CTA */}
                <div className="glass-card-white rounded-2xl p-6 text-center border-glow-blue reveal">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Need Help?
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Talk to our HOA enforcement specialists today.
                  </p>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="btn-primary text-sm w-full"
                  >
                    Call {COMPANY.phone}
                  </a>
                </div>

                {/* Free Assessment CTA */}
                <div className="rounded-2xl p-6 bg-gradient-to-br from-primary to-blue-800 text-white text-center reveal">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full glass flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-white mb-2">
                    Free HOA Assessment
                  </h3>
                  <p className="text-blue-100/70 text-sm mb-4">
                    We will evaluate your community&apos;s parking needs and
                    recommend a custom enforcement program.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block w-full py-2.5 rounded-lg bg-white text-primary font-bold text-sm hover:bg-blue-50 transition-colors"
                  >
                    Get Free Assessment
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

    </>
  );
}
