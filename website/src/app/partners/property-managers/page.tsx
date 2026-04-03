"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const BENEFITS = [
  {
    title: "Zero Cost Enforcement",
    description:
      "Our parking enforcement and private property impound services are completely free for property managers. We fund operations through impound fees -- you never pay a dime.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Digital Management Portal",
    description:
      "Access your properties, view patrol reports, manage authorized vehicles, and track enforcement activity through our online portal. Real-time transparency for every lot you manage.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    title: "Scalable Across Properties",
    description:
      "Whether you manage 5 properties or 500, our program scales with you. Add new locations instantly through the portal -- no new contracts, no new fees.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
  },
  {
    title: "ARS-Compliant Signage",
    description:
      "We provide and install all required Arizona Revised Statutes-compliant signage at no cost. Stay compliant without lifting a finger or spending a dollar.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "30-Minute Response Guarantee",
    description:
      "When you call for an impound, our trucks are on-site within 30 minutes. Fast response means fewer parking problems and happier tenants.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Dedicated Account Manager",
    description:
      "Large portfolios get a dedicated account manager who understands your properties, your tenants, and your specific enforcement needs.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
];

const PROPERTY_TYPES = [
  { name: "Apartment Complexes", count: "50+" },
  { name: "Office Buildings", count: "30+" },
  { name: "Retail Centers", count: "25+" },
  { name: "Mixed-Use Developments", count: "15+" },
  { name: "Industrial Parks", count: "10+" },
  { name: "Medical Offices", count: "20+" },
];

const FAQS = [
  {
    q: "How does the property manager partnership differ from a standard towing contract?",
    a: "Unlike traditional towing contracts, our partnership is completely free for property managers. We do not charge setup fees, monthly fees, or per-tow fees to property owners. We also provide a digital portal, compliant signage, and dedicated support that most towing companies do not offer.",
  },
  {
    q: "Can I add new properties to my account over time?",
    a: "Absolutely. You can add new properties through our digital portal at any time. Each property gets its own signage, patrol schedule, and reporting -- all managed from one dashboard.",
  },
  {
    q: "What happens when a tenant complains about a tow?",
    a: "We handle all complaints and disputes directly. Our impound process is fully documented and ARS-compliant, so every tow is defensible. We take the liability off your plate.",
  },
  {
    q: "Do you offer scheduled patrols or on-demand only?",
    a: "Both. We can set up regular patrol schedules for your properties, and you can also call for on-demand impounds anytime. Our 24/7 dispatch is always available.",
  },
  {
    q: "What kind of reporting do property managers receive?",
    a: "You get real-time access to patrol logs, impound records, vehicle photos, and compliance documentation through our portal. Monthly summary reports are also available for property owners.",
  },
];

export default function PropertyManagersPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Property Management Towing Solutions - Axle Towing Phoenix",
            description: "Free parking enforcement and towing solutions for property managers in Phoenix, AZ. Digital portal, ARS-compliant signage, and 30-minute response guarantee.",
            url: `https://${COMPANY.domain}/partners/property-managers`,
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `https://${COMPANY.domain}` },
                { "@type": "ListItem", position: 2, name: "Partners", item: `https://${COMPANY.domain}/partners` },
                { "@type": "ListItem", position: 3, name: "Property Managers", item: `https://${COMPANY.domain}/partners/property-managers` },
              ],
            },
            mainEntity: {
              "@type": "Service",
              name: "Property Management Towing Solutions",
              provider: {
                "@type": "LocalBusiness",
                name: COMPANY.name,
                telephone: COMPANY.phone,
                url: `https://${COMPANY.domain}`,
              },
              areaServed: { "@type": "State", name: "Arizona" },
              description: "Comprehensive towing and parking enforcement solutions designed for property management companies across the Phoenix metro area.",
            },
          }),
        }}
      />

      {/* ===== HERO ===== */}
      <section
        className="parallax-fixed relative min-h-[60vh] flex items-center"
        style={{ backgroundImage: `url(/images/hero-parking-lot.jpg)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/80 to-primary/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <nav className="flex items-center gap-2 text-sm text-white/80 mb-6 reveal">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/partners" className="hover:text-white transition-colors">Partners</Link>
            <span>/</span>
            <span className="text-white">Property Managers</span>
          </nav>
          <span className="inline-block bg-primary/20 border border-primary/40 text-blue-200 text-sm font-bold font-heading uppercase tracking-wider px-4 py-1.5 rounded-full mb-6 reveal">
            Property Management Solutions
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 reveal">
            Property Management <span className="text-blue-300">Towing Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed reveal delay-200">
            Eliminate unauthorized parking across your entire portfolio &mdash; at zero cost.
            {" "}{COMPANY.name} handles signage, patrols, and impounds so you can focus on what matters: managing properties.
          </p>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "$0", label: "Cost to You" },
              { value: "30min", label: "Response Time" },
              { value: "24/7", label: "Dispatch Available" },
              { value: "100%", label: "ARS Compliant" },
            ].map((stat, i) => (
              <div key={stat.label} className="text-center reveal" style={{ animationDelay: `${(i + 1) * 100}ms` }}>
                <div className="font-heading text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                <p className="text-body-text text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">
              Built for Property Managers
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-3 mb-4" style={{ color: "#1a202c" }}>
              Why Property Managers Choose Us
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, i) => (
              <div
                key={benefit.title}
                className="glass-card-white rounded-2xl p-8 border border-gray-100 reveal"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-5 text-blue-600">
                  {benefit.icon}
                </div>
                <h3 className="font-heading text-xl font-bold mb-3" style={{ color: "#1a202c" }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROPERTY TYPES ===== */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider font-heading">
              Properties We Serve
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mt-3 mb-4">
              We Handle Every Property Type
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full mb-6" />
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              From apartment complexes to industrial parks, our enforcement programs are tailored to each property type.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {PROPERTY_TYPES.map((type, i) => (
              <div
                key={type.name}
                className="rounded-2xl p-6 bg-white/10 backdrop-blur-sm border border-white/15 text-center reveal"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="font-heading text-2xl font-bold text-white mb-1">{type.count}</div>
                <p className="text-blue-200 text-sm">{type.name} Served</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTNERSHIP INQUIRY FORM ===== */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-3 mb-4" style={{ color: "#1a202c" }}>
              Request a Free Property Assessment
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
            <p className="text-gray-700 text-lg max-w-xl mx-auto">
              Tell us about your properties and we will create a customized enforcement plan -- at absolutely no cost.
            </p>
          </div>

          <div className="reveal glass-form rounded-2xl p-8 md:p-10 shadow-lg">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2 font-heading">Assessment Requested!</h3>
                <p className="text-gray-600">
                  Thank you for your interest. Our team will contact you within 24 hours to schedule your free property assessment.
                </p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                    <input type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="Jane Smith" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                    <input type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="ABC Property Management" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input type="email" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="jane@abcproperties.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input type="tel" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="(480) 555-1234" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Number of Properties</label>
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white">
                      <option value="">Select range...</option>
                      <option value="1-5">1 - 5 properties</option>
                      <option value="6-20">6 - 20 properties</option>
                      <option value="21-50">21 - 50 properties</option>
                      <option value="50+">50+ properties</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Primary Property Type</label>
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white">
                      <option value="">Select type...</option>
                      <option value="apartment">Apartment Complex</option>
                      <option value="commercial">Commercial / Office</option>
                      <option value="retail">Retail Center</option>
                      <option value="mixed">Mixed-Use</option>
                      <option value="industrial">Industrial</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Parking Challenges</label>
                    <textarea rows={3} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition resize-none bg-white" placeholder="Describe the parking issues you're facing across your properties..." />
                  </div>
                </div>
                <button type="submit" className="btn-primary w-full text-center justify-center">
                  Request Free Assessment
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">Questions</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-3 mb-4" style={{ color: "#1a202c" }}>
              Frequently Asked Questions
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
          </div>
          <div className="space-y-4 reveal">
            {FAQS.map((faq, i) => (
              <details key={i} className="group glass-card-white rounded-2xl overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-bold text-blue-900 font-heading text-lg select-none list-none [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span>
                  <svg className="w-5 h-5 text-primary shrink-0 ml-4 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-20 text-white overflow-hidden" style={{ background: "linear-gradient(160deg, rgba(15,31,54,1) 0%, rgba(27,42,63,0.95) 50%, rgba(30,107,184,0.9) 100%)" }}>
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Stop Losing Money to Parking Problems
          </h2>
          <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
            Your tenants deserve organized parking. Your property owners deserve compliant enforcement. And it should not cost you anything. Let us prove it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary text-lg inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call {COMPANY.phone}
            </a>
            <Link href="/services" className="btn-secondary text-lg">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
