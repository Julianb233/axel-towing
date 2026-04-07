import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Partner With Axle Towing - Referral Partnerships in Phoenix, AZ",
  description: `Partner with ${COMPANY.name} for mutual referrals. We work with locksmiths, property managers, HOA boards, and other businesses across the Phoenix metro area. Free parking enforcement for your clients.`,
  keywords: [
    "towing partnership phoenix",
    "locksmith towing partnership",
    "property manager towing partner",
    "HOA towing program arizona",
    "towing referral partner phoenix",
    "parking enforcement partnership",
  ],
  alternates: {
    canonical: `https://${COMPANY.domain}/partners`,
  },
  openGraph: {
    title: "Partner With Axle Towing - Referral Partnerships in Phoenix, AZ",
    description: `Partner with ${COMPANY.name} for mutual referrals. We work with locksmiths, property managers, HOA boards, and other businesses across the Phoenix metro area.`,
    url: `https://${COMPANY.domain}/partners`,
  },
};

const PARTNER_TYPES = [
  {
    title: "Locksmiths",
    slug: "locksmiths",
    description:
      "Lock-out calls often reveal parking violations. Partner with us and give your clients a complete solution while earning referral income.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
    benefits: ["Refer parking violators to us", "Earn referral commissions", "Offer clients a complete property solution"],
  },
  {
    title: "Property Managers",
    slug: "property-managers",
    description:
      "Eliminate unauthorized parking from your managed properties at zero cost. We handle signage, patrols, and impounds so you can focus on managing.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
      </svg>
    ),
    benefits: ["$0 cost for enforcement", "Digital portal for your properties", "24/7 dispatch availability"],
  },
  {
    title: "HOA Boards",
    slug: "hoa-boards",
    description:
      "Customized towing programs designed for homeowner associations. We handle the compliance, signage, and enforcement so your board does not have to.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    benefits: ["ARS-compliant programs", "Board-approved signage packages", "Transparent reporting dashboard"],
  },
  {
    title: "Mechanics & Auto Shops",
    slug: "mechanics",
    description:
      "We tow vehicles to your shop for repairs. You refer property managers to us for enforcement. Cross-referral partnership that grows both businesses.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L3.07 12.9a1.5 1.5 0 002.12 2.12l2.72-2.72m0 0l5.1 5.1m0 0l2.72-2.72a1.5 1.5 0 00-2.12-2.12l-2.72 2.72m0 0L8.6 8.45m8.49 8.49L19.82 14a1.5 1.5 0 00-2.12-2.12l-2.72 2.72" />
      </svg>
    ),
    benefits: ["Tow-to-shop vehicle delivery", "Cross-referral commissions", "24/7 emergency transport"],
  },
];

const WHY_PARTNER = [
  {
    title: "Zero Cost to Partners",
    description: "Our services are free for property owners. We earn from towing fees, not from you or your clients.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "30-Minute Response",
    description: "When your clients need a tow, we respond in 30 minutes or less across the entire Phoenix metro area.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "100% ARS Compliant",
    description: "Every program we run is fully compliant with Arizona Revised Statutes. We protect your reputation.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Digital Partner Portal",
    description: "Track referrals, view reports, and manage your partnership from our online portal. Full transparency.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
];

export default function PartnersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: `https://${COMPANY.domain}` },
              { name: "Partners", url: `https://${COMPANY.domain}/partners` },
            ])
          ),
        }}
      />

      {/* ===== HERO ===== */}
      <section
        className="parallax-fixed relative min-h-[60vh] flex items-center"
        style={{ backgroundImage: `url(/images/optimized/axle-towing-hero-parking-lot-phoenix-az.webp)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/80 to-primary/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <nav className="flex items-center gap-2 text-sm text-white/80 mb-6 reveal">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Partners</span>
          </nav>
          <span className="inline-block bg-primary/20 border border-primary/40 text-blue-200 text-sm font-bold font-heading uppercase tracking-wider px-4 py-1.5 rounded-full mb-6 reveal">
            Partnership Programs
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 reveal">
            Grow Your Business With <span className="text-blue-300">Axle Towing</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed reveal delay-200">
            We partner with locksmiths, property managers, HOA boards, and service businesses
            across the Phoenix metro area. Refer clients, earn rewards, and deliver more value
            &mdash; all at zero cost.
          </p>
        </div>
      </section>

      {/* ===== PARTNER TYPES GRID ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">
              Partnership Opportunities
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-3 mb-4" style={{ color: "#1a202c" }}>
              Who We Partner With
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Whether you are a locksmith on a call, a property manager with dozens of lots,
              or an HOA board looking for parking solutions &mdash; we have a program for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PARTNER_TYPES.map((partner, i) => (
              <Link
                key={partner.slug}
                href={`/partners/${partner.slug}`}
                className="group glass-card-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 transition-all hover:-translate-y-1 hover:shadow-xl reveal"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-5 text-blue-600 group-hover:bg-blue-100 transition-colors">
                  {partner.icon}
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors" style={{ color: "#1a202c" }}>
                  {partner.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {partner.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {partner.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                  Learn More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY PARTNER WITH US ===== */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider font-heading">
              The Axle Advantage
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mt-3 mb-4">
              Why Partner With Us
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full mb-6" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_PARTNER.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 bg-white/10 backdrop-blur-sm border border-white/15 reveal"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-4 text-blue-200">
                  {item.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CORPORATE GIFTING CALLOUT ===== */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#1B2A3F] via-[#1a3055] to-[#0f1e30] p-10 md:p-14 flex flex-col md:flex-row items-center gap-10 reveal">
            <div className="flex-1 min-w-0">
              <span className="inline-block text-red-400 text-sm font-bold uppercase tracking-widest font-heading mb-4">
                Partner Appreciation
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Branded Merchandise &amp; Corporate Gifting
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Strengthen your relationships with HOA board members and property management
                partners through co-branded merchandise. From apparel to car accessories &mdash;
                print-on-demand with no inventory required. Bulk discounts available for 25+ units.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Co-branded apparel, hats &amp; keychains",
                  "HOA Partner Pack: 20% off on 50–99 units",
                  "Corporate Bulk: 30% off on 100+ units",
                  "Ships direct to recipients across Phoenix metro",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/85 text-sm">
                    <svg className="h-4 w-4 flex-shrink-0 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              <Link
                href="/merchandise"
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-red-700"
              >
                View Merchandise Catalog
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="flex-shrink-0 grid grid-cols-2 gap-4 w-full md:w-64">
              {[
                { label: "Apparel", icon: "👕" },
                { label: "Car Accessories", icon: "🚗" },
                { label: "Keychains", icon: "🔑" },
                { label: "Office Items", icon: "🖊️" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-white/10 border border-white/15 p-4 text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-white text-xs font-semibold">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-3 mb-4" style={{ color: "#1a202c" }}>
              How Partnerships Work
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                { step: "1", title: "Reach Out", desc: "Fill out our partnership inquiry form or call us. We will discuss how our services align with your business." },
                { step: "2", title: "We Customize a Program", desc: "We tailor a towing and enforcement plan that fits your clients, properties, or service area. Signage, patrols, and digital access included." },
                { step: "3", title: "Start Referring & Earning", desc: "Begin referring clients or properties. Track everything through our digital portal. You earn, your clients benefit, everyone wins." },
              ].map((item, i) => (
                <div key={item.step} className="text-center reveal" style={{ transitionDelay: `${i * 200}ms` }}>
                  <div className="relative mx-auto mb-6">
                    <div className="w-32 h-32 mx-auto rounded-2xl glass-card-white border-glow-blue flex flex-col items-center justify-center gap-2 p-4">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold font-heading text-lg">
                        {item.step}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3" style={{ color: "#1a202c" }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800" />
        <div className="absolute inset-0 grain-overlay z-[1]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 reveal">
            Ready to Partner With Us?
          </h2>
          <p className="text-white/95 text-lg mb-10 max-w-2xl mx-auto reveal delay-100">
            Join the growing network of Phoenix businesses that trust {COMPANY.name} for towing
            and parking enforcement. Get started with a quick call or contact form.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-200">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary text-lg inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call {COMPANY.phone}
            </a>
            <Link href="/contact" className="btn-secondary text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
