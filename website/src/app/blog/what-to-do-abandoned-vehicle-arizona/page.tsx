import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "What to Do When You Find an Abandoned Vehicle in Arizona",
  description:
    "Step-by-step guide for handling abandoned vehicles in Arizona. Learn reporting procedures, legal rights, and free towing options for property owners in Phoenix.",
  keywords: "abandoned vehicle arizona, what to do abandoned car, report abandoned vehicle arizona, abandoned vehicle removal",
  alternates: { canonical: "https://axletowing.com/blog/what-to-do-abandoned-vehicle-arizona" },
  openGraph: {
    title: "What to Do When You Find an Abandoned Vehicle in Arizona",
    description: "Step-by-step guide for handling abandoned vehicles in Arizona. Reporting procedures, legal rights, and free towing.",
    url: "https://axletowing.com/blog/what-to-do-abandoned-vehicle-arizona",
    type: "article",
  },
};

const FAQS = [
  {
    question: "How long does a vehicle have to sit before it is considered abandoned in Arizona?",
    answer: "There is no single fixed number of days that automatically makes a vehicle abandoned in Arizona. The determination depends on factors including whether the vehicle is on private or public property, its condition (inoperable, expired registration), and whether the owner has indicated they intend to return. On private property with proper towing signage, unauthorized vehicles can be removed immediately.",
  },
  {
    question: "Can I have an abandoned vehicle towed for free?",
    answer: "Yes. Under Arizona's private property impound (PPI) model, the towing and storage costs are paid by the vehicle owner, not the property owner. When you partner with a licensed towing company like Axle Towing, the removal is completely free for property owners.",
  },
  {
    question: "What if the abandoned vehicle has no license plate?",
    answer: "A vehicle without a license plate can still be removed and processed. The towing company will use the VIN (Vehicle Identification Number) to identify the vehicle and attempt to locate the owner through ADOT records. If no owner can be found, the lien process proceeds after the required waiting period.",
  },
  {
    question: "Do I need to call the police before having an abandoned vehicle towed?",
    answer: "On private property, you generally do not need to call the police before having a vehicle towed. Your towing company handles the required law enforcement notification after the tow. However, if you suspect the vehicle is stolen (broken windows, ignition damage, missing plates), calling the police first is recommended.",
  },
  {
    question: "What if the vehicle owner comes back and is angry about the tow?",
    answer: "Your towing company handles all interactions with vehicle owners. When the owner calls to retrieve their vehicle, the towing company explains the fees and retrieval process. If you have proper signage posted and followed the correct procedures, you are fully protected under Arizona law.",
  },
];

const RELATED_ARTICLES = [
  { slug: "arizona-abandoned-vehicle-laws", title: "Arizona Abandoned Vehicle Laws: Timelines, Procedures, and Your Rights", category: "Arizona Towing Laws", readTime: "9 min", gradient: "from-blue-600 via-blue-800 to-blue-950" },
  { slug: "abandoned-vehicle-removal-private-property-arizona", title: "Abandoned Vehicle Removal from Private Property in Arizona", category: "Property Management", readTime: "8 min", gradient: "from-emerald-500 via-green-700 to-emerald-900" },
  { slug: "hoa-abandoned-vehicle-removal-arizona", title: "HOA Abandoned Vehicle Removal: Arizona Rules and Solutions", category: "HOA Resources", readTime: "10 min", gradient: "from-indigo-500 via-purple-600 to-indigo-800" },
];

export default function ArticlePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const articleSchemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "What to Do When You Find an Abandoned Vehicle in Arizona",
    description: "Step-by-step guide for handling abandoned vehicles in Arizona.",
    url: "https://axletowing.com/blog/what-to-do-abandoned-vehicle-arizona",
    datePublished: "2026-04-08",
    dateModified: "2026-04-08",
    author: { "@type": "Organization", name: COMPANY.name, url: `https://${COMPANY.domain}` },
    publisher: { "@type": "Organization", name: COMPANY.name, logo: { "@type": "ImageObject", url: COMPANY.logo } },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, articleSchemaData]) }} />

      {/* Hero */}
      <section className="parallax-container min-h-[45vh] flex items-end relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(224,43,32,0.15),transparent_60%)] z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
          <Link href="/blog" className="inline-flex items-center text-sm text-blue-200/60 hover:text-white mb-6 transition-colors group">
            <svg className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">Arizona Towing Laws</span>
            <span className="text-sm text-blue-200/60">12 min read</span>
            <span className="text-sm text-blue-200/60">April 8, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            What to Do When You Find an{" "}
            <span className="text-gradient">Abandoned Vehicle in Arizona</span>
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
                  You walk into your parking lot and there it is &mdash; a car you have never seen before, sitting in one of your spots. No note. No owner in sight. Maybe it has been there for days. Maybe the tires are flat and the registration is expired. What do you do?
                </p>
                <p className="text-gray-600 leading-relaxed mb-6 reveal">
                  If you are a property owner or manager in the Phoenix metro area, abandoned vehicles are not just an eyesore. They take up valuable parking spaces, create liability issues, and can attract other problems like vandalism or illegal dumping. The good news is that Arizona law gives you clear options for dealing with this situation.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Step 1: Confirm the Vehicle Is Actually Abandoned</h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Before you take any action, determine whether the vehicle is truly abandoned or simply parked without authorization. According to Arizona Revised Statutes (ARS 28-4141 through 28-4145), a vehicle may be considered abandoned if:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  {["It has been left unattended on your property without your permission",
                    "It is inoperable — flat tires, missing parts, mechanical failure",
                    "It has no valid registration or the tags are expired",
                    "It appears the owner has no intention of returning for it"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-l-primary reveal">
                  <h3 className="font-bold text-gray-900 mb-2">Important Distinction</h3>
                  <p className="text-gray-600">A working vehicle parked in violation of your rules (wrong spot, no permit) is an <strong>unauthorized vehicle</strong>, not an abandoned one. Unauthorized vehicles can usually be towed immediately under ARS 28-3511 if you have proper signage posted. Abandoned vehicles follow a different legal process.</p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Step 2: Document Everything</h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">Before touching anything or calling anyone, document the vehicle thoroughly:</p>
                <ol className="text-gray-600 space-y-4 my-4 reveal">
                  {[
                    { title: "Take photos", desc: "from multiple angles — all four sides, the license plate, VIN (visible through the windshield), and any damage" },
                    { title: "Record the date and time", desc: "you first noticed the vehicle" },
                    { title: "Note the exact location", desc: "— which parking space, lot, or area of your property" },
                    { title: "Check for identifying info", desc: "— license plate number, registration sticker, any notes on the dashboard" },
                    { title: "Note the vehicle's condition", desc: "— flat tires, broken windows, dust accumulation, expired tags" },
                  ].map((item, i) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                      <div><strong className="text-gray-900">{item.title}</strong> {item.desc}</div>
                    </li>
                  ))}
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Step 3: Contact a Licensed Towing Company</h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  This is where most property owners get the best results fastest. A licensed private property towing company like <Link href="/services/private-property-impounds" className="text-primary hover:underline font-medium">Axle Towing &amp; Impound</Link> can assess the situation and advise you on the best course of action.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">Depending on the circumstances, the towing company may be able to:</p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  {[
                    "Remove the vehicle immediately if it qualifies as unauthorized under ARS 28-3511",
                    "Begin the abandoned vehicle process under ARS 28-4141 if the longer legal timeline applies",
                    "Coordinate with law enforcement to file the required notifications",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="glass-card-white rounded-2xl p-6 my-8 border-l-4 border-l-green-500 reveal">
                  <h3 className="font-bold text-gray-900 mb-2">Free for Property Owners</h3>
                  <p className="text-gray-600">Under Arizona&apos;s private property impound (PPI) model, the cost of towing and storage is paid by the vehicle owner when they retrieve their car. Property owners pay nothing.</p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Step 4: Law Enforcement Notification</h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  After the vehicle is towed, the towing company is required to notify local law enforcement within a specific timeframe. This notification includes the vehicle description, VIN, license plate information, and the location where the vehicle was picked up. Law enforcement then runs the vehicle through their database to identify the registered owner and check for theft reports.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Step 5: Owner Notification and Waiting Period</h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Arizona law requires that the registered owner be notified by certified mail after the vehicle is towed. The notification includes where the vehicle is being stored, the fees that have accumulated, the deadline to claim the vehicle, and what happens if they do not claim it. If the owner cannot be identified, the towing company works with ADOT to conduct a title search.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Step 6: Lien Process If Owner Does Not Claim</h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  If the vehicle owner does not claim the vehicle within the legally required waiting period, the towing company can file for a mechanic&apos;s lien through ADOT. This process ultimately allows the towing company to take ownership of the vehicle and dispose of it &mdash; typically through auction or salvage &mdash; to recover the unpaid towing and storage fees. As the property owner, you are not involved in this process.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">What NOT to Do</h2>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  {[
                    "Do not move the vehicle yourself — you could be liable for any damage and may violate state law",
                    "Do not remove parts from the vehicle — even if it appears to be junk, removing parts is illegal",
                    "Do not ignore it — abandoned vehicles attract more abandoned vehicles and create fire hazards",
                    "Do not put a warning sticker on it and wait — this is not legally required and delays resolution",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">How to Prevent Abandoned Vehicles</h2>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  {[
                    "Post proper towing signage at every vehicle entrance (required under ARS 28-3511 and ARS 9-499.05)",
                    "Partner with a professional towing company for regular patrols",
                    "Include vehicle requirements in lease agreements — current registration, insurance, operable condition",
                    "Conduct regular property inspections and flag vehicles sitting unused",
                    "Act quickly when you spot a potential abandoned vehicle",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* FAQ Section */}
                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 reveal">Frequently Asked Questions</h2>
                <div className="space-y-6 reveal">
                  {FAQS.map((faq) => (
                    <div key={faq.question} className="glass-card-white rounded-2xl p-6">
                      <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Need Help With an Abandoned Vehicle?</h3>
                  <p className="text-gray-600 mb-6">
                    {COMPANY.name} handles the entire abandoned vehicle process for property owners across the Phoenix metro area &mdash; from documentation and towing to law enforcement notification and lien processing. Our service is completely free for property owners.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`tel:${COMPANY.phone}`} className="btn-primary">Call {COMPANY.phone}</a>
                    <Link href="/contact" className="btn-cta">Get Free Assessment</Link>
                  </div>
                </div>

                {/* Author */}
                <div className="glass-card-white rounded-2xl p-6 mt-12 reveal">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cta flex items-center justify-center text-white text-xl font-bold shrink-0">AT</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Axle Towing &amp; Impound</h4>
                      <p className="text-gray-700 text-sm">Professional private property towing and parking enforcement serving the Greater Phoenix metro area since 2021. Licensed, insured, and experienced in handling abandoned vehicle cases from start to finish.</p>
                    </div>
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
                      <Link key={article.title} href={`/blog/${article.slug}`} className="block group">
                        <div className={`h-20 rounded-lg bg-gradient-to-br ${article.gradient} mb-2`} />
                        <span className="text-xs text-primary font-semibold uppercase">{article.category}</span>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">{article.title}</p>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="glass-card-white rounded-2xl p-6 text-center border-glow-blue reveal">
                  <h3 className="font-bold text-gray-900 mb-2">Need Help?</h3>
                  <p className="text-gray-700 text-sm mb-4">Abandoned vehicle on your property? We can help.</p>
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Bottom CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 reveal">Serving 30+ Phoenix Metro Cities</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto reveal">
            From Phoenix and Scottsdale to Mesa, Chandler, Gilbert, and beyond &mdash; Axle Towing provides free abandoned vehicle removal for property owners across the entire Valley.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary px-8 py-3">Get a Free Quote</Link>
            <a href={`tel:${COMPANY.phone}`} className="btn-cta px-8 py-3">Call {COMPANY.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
