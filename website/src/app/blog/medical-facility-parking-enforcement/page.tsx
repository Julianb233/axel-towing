import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Medical Facility Parking Enforcement: Ensuring Patient Access Comes First",
  description:
    "How Phoenix medical facilities can protect patient parking from unauthorized use. Covers ADA compliance, emergency access, enforcement strategies, and free towing programs for healthcare providers.",
};

const RELATED_ARTICLES = [
  {
    slug: "office-building-parking-management",
    title: "Office Building Parking Management: Keeping Tenants Happy and Lots Organized",
    category: "Commercial Towing",
    readTime: "8 min",
    gradient: "from-blue-600 via-blue-800 to-blue-950",
  },
  {
    slug: "retail-shopping-center-parking-enforcement",
    title: "Retail Shopping Center Parking Enforcement: Protecting Revenue and Customers",
    category: "Commercial Towing",
    readTime: "10 min",
    gradient: "from-blue-400 via-cyan-600 to-blue-800",
  },
  {
    slug: "church-parking-lot-enforcement",
    title: "Church and Religious Facility Parking Enforcement: Balancing Grace and Order",
    category: "Commercial Towing",
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
          <Link href="/blog" className="inline-flex items-center text-sm text-blue-200/60 hover:text-white mb-6 transition-colors group">
            <svg className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">Commercial Towing</span>
            <span className="text-sm text-blue-200/60">9 min read</span>
            <span className="text-sm text-blue-200/60">March 9, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            Medical Facility Parking Enforcement:{" "}
            <span className="text-gradient">Ensuring Patient Access Comes First</span>
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
                  When a patient arrives at a medical facility in pain, stressed
                  about a diagnosis, or rushing to an appointment, the last
                  thing they should worry about is finding parking. Yet across
                  the Phoenix metro area, medical offices, urgent care centers,
                  dental practices, and specialty clinics lose patient parking
                  to unauthorized vehicles every single day. Non-patients park
                  in your lot to visit nearby businesses, commuters use your
                  spaces as free parking during work hours, and employees from
                  neighboring offices treat your lot as overflow. Here is how
                  to ensure your patients always come first.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Why Medical Facility Parking Matters More
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Medical facilities have parking needs that go beyond
                  convenience. Patients may be physically impaired, elderly, or
                  in acute distress. They need accessible, close-in parking
                  that minimizes walking distance. They may arrive by
                  wheelchair or with mobility aids. And in urgent care settings,
                  every minute matters &mdash; patients who cannot find
                  parking may delay seeking care or go to a competitor.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  In Phoenix&apos;s medical corridors &mdash; along the I-17
                  medical district, near Banner and HonorHealth campuses, and
                  in the Scottsdale healthcare hub &mdash; competition for
                  parking is intense. Medical office buildings often share
                  parking with retail, restaurants, and other businesses,
                  creating constant conflict over limited spaces.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  ADA Compliance Is Non-Negotiable
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Medical facilities face heightened ADA requirements for
                  accessible parking. The Americans with Disabilities Act
                  mandates a minimum number of accessible spaces based on
                  total lot capacity, and medical facilities may need
                  additional accessible spaces beyond the standard ratio
                  due to their patient population.
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Accessible spaces must be on the shortest accessible route to the building entrance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Van-accessible spaces with wider access aisles are required at a minimum ratio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Unauthorized vehicles in ADA spaces should be towed immediately &mdash; this is a safety and legal priority</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Arizona law (ARS 28-884) imposes fines of $250 or more for illegal parking in accessible spaces</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Emergency Vehicle Access
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Fire lanes, ambulance access points, and emergency vehicle
                  routes must remain clear at all times. Vehicles blocking
                  emergency access at a medical facility are not just a
                  nuisance &mdash; they are a life-safety hazard. Your parking
                  enforcement program should prioritize immediate towing of
                  any vehicle blocking emergency access, with zero tolerance
                  and no warnings.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Setting Up a Medical Facility Towing Program
                </h2>
                <ol className="text-gray-600 space-y-4 my-4 reveal">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">1</span>
                    <div>
                      <strong className="text-gray-900">Assess your parking layout:</strong>{" "}
                      Identify patient parking, staff parking, visitor parking, ADA spaces, and emergency access zones. Map out problem areas where unauthorized parking occurs most frequently.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">2</span>
                    <div>
                      <strong className="text-gray-900">Partner with a professional towing company:</strong>{" "}
                      Choose a licensed, insured towing partner experienced with medical facility enforcement. {COMPANY.name} understands the sensitivity required in healthcare environments.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">3</span>
                    <div>
                      <strong className="text-gray-900">Install compliant signage:</strong>{" "}
                      ARS 28-3511 compliant signs at every entrance, plus clear markings for patient-only, staff-only, and ADA spaces. Your towing partner handles installation at no cost.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">4</span>
                    <div>
                      <strong className="text-gray-900">Designate staff parking areas:</strong>{" "}
                      Move staff vehicles to designated areas (typically the far end of the lot or a separate area) to maximize patient access to close-in spaces.
                    </div>
                  </li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Patient Experience and Parking
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Patient satisfaction surveys consistently show that parking
                  ease is one of the top factors influencing the overall
                  patient experience. When patients struggle to find parking,
                  they arrive stressed and frustrated, which colors their
                  entire visit. For practices that depend on online reviews
                  and patient referrals, poor parking can directly impact
                  revenue.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  A well-managed parking program with professional enforcement
                  sends a message that you care about every aspect of the
                  patient experience &mdash; from the moment they arrive in
                  your parking lot to the moment they leave.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Multi-Tenant Medical Building Considerations
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Many medical facilities in Phoenix are located in multi-tenant
                  medical office buildings. In these environments, parking
                  management requires coordination between the building
                  owner, property manager, and all tenants. Each practice
                  may have different patient volumes, appointment schedules,
                  and parking needs. A well-structured parking plan allocates
                  spaces fairly and ensures that high-volume practices do not
                  overwhelm the lot at the expense of smaller tenants.
                </p>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Protect Your Patients&apos; Parking</h3>
                  <p className="text-gray-600 mb-6">
                    {COMPANY.name} provides free parking enforcement for medical
                    facilities across the Phoenix metro area. We understand the
                    unique needs of healthcare environments and work
                    discreetly to ensure patient access comes first.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`tel:${COMPANY.phone}`} className="btn-primary">Call {COMPANY.phone}</a>
                    <Link href="/services/commercial-property-towing" className="btn-cta">Commercial Towing Services</Link>
                  </div>
                </div>

                {/* Author Box */}
                <div className="glass-card-white rounded-2xl p-6 mt-12 reveal">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cta flex items-center justify-center text-white text-xl font-bold shrink-0">AT</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Axle Towing &amp; Impound</h4>
                      <p className="text-gray-700 text-sm">Professional private property towing and parking enforcement serving the Greater Phoenix metro area since 2021. Trusted by medical facilities, clinics, and healthcare providers across Arizona.</p>
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
                  <p className="text-gray-700 text-sm mb-4">Talk to our medical facility parking specialists today.</p>
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Call {COMPANY.phone}</a>
                </div>

                <div className="rounded-2xl p-6 bg-gradient-to-br from-primary to-blue-800 text-white text-center reveal">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full glass flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-white mb-2">Free Parking Assessment</h3>
                  <p className="text-blue-100/70 text-sm mb-4">We&apos;ll evaluate your facility&apos;s parking needs and recommend a custom enforcement program.</p>
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
