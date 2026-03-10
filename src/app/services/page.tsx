import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COMPANY, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services",
  description: `${COMPANY.name} offers private property impounds, parking enforcement, vehicle relocations, HOA towing, apartment towing, and commercial property towing across Phoenix, AZ — all free for property owners.`,
};

const STATS = [
  { value: "$0", label: "Cost to Property Owners" },
  { value: "30min", label: "Average Response Time" },
  { value: "24/7", label: "Dispatch Available" },
  { value: "100%", label: "ARS Compliant" },
];

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  shield: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  clipboard: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
    </svg>
  ),
  truck: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  ),
  home: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  ),
  building: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
    </svg>
  ),
  store: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
    </svg>
  ),
};

export default function ServicesPage() {
  return (
    <>
      {/* ===== PARALLAX HERO ===== */}
      <section
        className="parallax-fixed relative min-h-[60vh] flex items-center"
        style={{ backgroundImage: `url(/images/hero-parking-lot.jpg)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/80 to-primary/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <nav className="flex items-center gap-2 text-sm text-blue-200/70 mb-6 reveal">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Services</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 reveal">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl leading-relaxed reveal delay-200">
            From private property impounds to parking enforcement and vehicle
            relocations, {COMPANY.name} provides comprehensive towing solutions
            for every type of property &mdash; all at no cost to property owners.
          </p>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-4 reveal">
            Comprehensive Towing Solutions
          </h2>
          <p className="text-blue-200/70 text-center text-lg mb-12 max-w-2xl mx-auto reveal delay-100">
            Choose the service that fits your property type. Every program is customized and completely free for property owners.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group glass-card rounded-2xl p-8 reveal"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-cta/20 flex items-center justify-center mb-5 text-cta group-hover:bg-cta/30 transition-colors">
                  {SERVICE_ICONS[service.icon] || SERVICE_ICONS.truck}
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-cta transition-colors">
                  {service.title}
                </h3>
                <p className="text-blue-200/70 text-sm leading-relaxed mb-4">
                  {service.shortDesc}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-cta group-hover:text-white transition-colors">
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

      {/* ===== WHY PROPERTY OWNERS CHOOSE US ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-blue-950 text-center mb-4 reveal">
            Why Property Owners Choose Us
          </h2>
          <p className="text-body-text text-center text-lg mb-12 max-w-2xl mx-auto reveal delay-100">
            Numbers that speak for themselves.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="glass-card-white rounded-2xl p-8 text-center reveal"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="font-heading text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <p className="text-body-text text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/arizona-skyline-panoramic.jpg" alt="Phoenix Arizona skyline" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(160deg, rgba(15,31,54,0.92) 0%, rgba(27,42,63,0.88) 50%, rgba(30,107,184,0.75) 100%)" }} />
        <div className="absolute inset-0 grain-overlay z-[2]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 reveal">
            Get Started Today &mdash; At No Cost to You
          </h2>
          <p className="text-white/95 text-lg mb-10 max-w-2xl mx-auto reveal delay-100">
            Our towing and parking enforcement services are completely free for property owners and managers. Let us handle your parking problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-200">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary text-lg">
              Call {COMPANY.phone}
            </a>
            <Link href="/contact" className="btn-secondary text-lg">
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
