import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How to Communicate Towing Policies Without Alienating Homeowners",
  description:
    "Master the art of communicating towing policies in your HOA community. Learn proven strategies for announcing new rules, handling pushback, framing enforcement positively, and building community support.",
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
    slug: "hoa-annual-meeting-parking-presentation",
    title: "How to Present Parking Enforcement Results at Your HOA Annual Meeting",
    category: "HOA Resources",
    readTime: "7 min",
    gradient: "from-blue-400 via-cyan-600 to-blue-800",
  },
  {
    slug: "hoa-towing-program-setup-guide",
    title: "How to Set Up an HOA Towing Program in 5 Simple Steps",
    category: "HOA Resources",
    readTime: "9 min",
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
            How to Communicate Towing Policies{" "}
            <span className="text-gradient">Without Alienating Homeowners</span>
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
                  Announcing a new towing program &mdash; or even reminding residents about an existing one &mdash; can feel like walking through a minefield. Done wrong, it sparks anger, social media rants, and contentious board meetings. Done right, it builds community support and positions the board as thoughtful leaders protecting everyone&apos;s interests. The difference comes down to communication strategy.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Why Communication Is the Make-or-Break Factor
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The reality is that most homeowners support parking enforcement &mdash; they just do not want to feel like it was imposed on them without warning. Research consistently shows that the number one source of HOA parking complaints is not the enforcement itself, but the perception that rules were applied unfairly or without adequate notice. Effective communication eliminates that perception.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  The communities with the most successful parking enforcement programs share one common trait: they over-communicate. They tell residents what is coming, why it is happening, how it will work, and what to expect. By the time enforcement actually begins, there are no surprises.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  The Five Principles of Effective Towing Communication
                </h2>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">
                  1. Lead with the Problem, Not the Solution
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Before announcing a towing program, spend time communicating the problem it solves. Send a survey asking residents about their parking frustrations. Share data about the number of parking complaints received by the board. Describe specific issues &mdash; fire lanes blocked, guest spaces monopolized, abandoned vehicles sitting for months. When residents understand the problem, they are much more receptive to the solution.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Frame it this way: &ldquo;Over the past 12 months, the board has received 47 parking-related complaints from residents. Fire lanes have been blocked 12 times, creating potential safety hazards. Guest parking spaces are routinely occupied by the same vehicles for weeks at a time. These issues affect property values, safety, and quality of life for the entire community.&rdquo;
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">
                  2. Emphasize What&apos;s in It for Them
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Homeowners care about how policies affect them personally. When communicating about towing enforcement, focus on the benefits they will experience:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>&ldquo;Your guests will always find a parking spot when they visit.&rdquo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>&ldquo;Emergency vehicles will be able to reach your home without obstruction.&rdquo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>&ldquo;Your property values are protected when the community looks well-managed.&rdquo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cta shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>&ldquo;This program costs the HOA nothing &mdash; your dues are not affected.&rdquo;</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">
                  3. Give Abundant Lead Time
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Never spring a towing program on residents. Best practice is a minimum 60-day rollout: announce the program 60 days before enforcement begins, send a detailed rules packet 45 days before, install signage 30 days before, begin the education-only period 30 days before (courtesy notices, no towing), and start graduated enforcement on the announced date.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  This timeline gives every resident ample opportunity to learn the rules, adjust their behavior, and ask questions. It also demonstrates good faith, which is important if any enforcement action is later challenged.
                </p>

                {/* Key highlight box */}
                <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-l-primary reveal">
                  <h3 className="font-bold text-gray-900 mb-2">
                    The Golden Rule of HOA Communication
                  </h3>
                  <p className="text-gray-600">
                    Never assume residents know the rules. Even in communities where parking rules have been in place for years, a significant percentage of homeowners have never read them. New buyers, renters, and long-time residents who simply forgot all need regular reminders. Treat every communication about parking rules as if it is the first time residents are hearing about them.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">
                  4. Use Multiple Communication Channels
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Not every homeowner reads the newsletter. Not every homeowner checks email. Not every homeowner attends meetings. To reach the broadest audience, use every channel available:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Physical mail:</strong> A formal letter to every unit owner is the most reliable method and creates a documentation trail</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Email:</strong> Send a clear, well-formatted email with the rules attached as a PDF</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Community website/portal:</strong> Post the rules prominently on the homepage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Community bulletin boards:</strong> Post in clubhouses, mailroom areas, and common spaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Community meeting:</strong> Dedicate agenda time at a board meeting or hold a special town hall</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Door hangers or flyers:</strong> For communities where physical door-to-door notice is practical</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 reveal">
                  5. Create a Feedback Loop
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Give residents a way to ask questions, express concerns, and provide feedback about the parking program. This can be a dedicated email address, a comment period at board meetings, or even a simple online form. When residents feel heard, they are far more likely to support the program even if they disagree with specific aspects of it.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Respond to every piece of feedback, even if the response is simply &ldquo;Thank you for your input. The board will consider your suggestion at the next meeting.&rdquo; Silence breeds resentment.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Handling Pushback and Angry Homeowners
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Even with perfect communication, some homeowners will push back. Here are proven strategies for handling resistance:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Stay calm and professional.</strong> Never respond to anger with anger. Board members represent the association, not themselves.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Reference the policy, not personal opinions.</strong> Say &ldquo;The policy adopted by the board states...&rdquo; not &ldquo;I think you should...&rdquo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Acknowledge the frustration.</strong> &ldquo;I understand this is frustrating&rdquo; goes a long way toward de-escalation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Point to the appeals process.</strong> Every homeowner has the right to a hearing. Directing them to the formal appeals process moves the conversation from emotional to procedural.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Involve your towing partner.</strong> A professional towing company can often field complaints and questions directly, taking that burden off board members.</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Sample Communication Timeline
                </h2>
                <ol className="text-gray-600 space-y-4 my-4 reveal">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">1</span>
                    <div>
                      <strong className="text-gray-900">Day 1: Survey residents</strong>{" "}
                      about parking frustrations to document the problem and build the case for enforcement.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">2</span>
                    <div>
                      <strong className="text-gray-900">Day 15: Announce the program</strong>{" "}
                      via mail, email, and community portal. Include the rules, the start date, and a Q&amp;A section.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">3</span>
                    <div>
                      <strong className="text-gray-900">Day 30: Hold a community meeting</strong>{" "}
                      to explain the program, answer questions, and address concerns in person.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">4</span>
                    <div>
                      <strong className="text-gray-900">Day 30: Install signage</strong>{" "}
                      throughout the community per ARS 28-3511 requirements.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">5</span>
                    <div>
                      <strong className="text-gray-900">Days 30&ndash;60: Education period</strong>{" "}
                      with courtesy notices only &mdash; no warnings, no towing.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0">6</span>
                    <div>
                      <strong className="text-gray-900">Day 60: Begin graduated enforcement</strong>{" "}
                      with warnings for first violations and towing for repeat offenders.
                    </div>
                  </li>
                </ol>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    We Help You Communicate Effectively
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {COMPANY.name} does not just enforce parking rules &mdash; we help Arizona HOA boards communicate their programs effectively. From template letters and community meeting talking points to signage design and resident FAQ documents, we support your board throughout the entire process. And everything is included at zero cost.
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
                      <p className="text-gray-500 text-sm">Professional private property towing and parking enforcement serving the Greater Phoenix metro area since 2021. Licensed, insured, and committed to helping HOA communities maintain orderly, safe parking environments.</p>
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
                  <p className="text-gray-500 text-sm mb-4">Talk to our HOA enforcement specialists today.</p>
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a>
                </div>
                <div className="rounded-2xl p-6 bg-gradient-to-br from-primary to-blue-800 text-white text-center reveal">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full glass flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Free HOA Assessment</h3>
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
