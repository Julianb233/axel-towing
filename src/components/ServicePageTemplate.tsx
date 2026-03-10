import Link from "next/link";
import Image from "next/image";
import { COMPANY, SERVICE_AREAS } from "@/lib/constants";
import { PROPERTY_TYPES, PHOENIX_NEIGHBORHOODS } from "@/lib/service-data";
import type { ServicePageData } from "@/lib/service-data";

export default function ServicePageTemplate({ data }: { data: ServicePageData }) {
  return (
    <>
      {/* ===== PARALLAX HERO ===== */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={data.heroImage || COMPANY.heroImage} alt={data.heroHeadline} fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(27,42,63,0.88) 0%, rgba(30,107,184,0.7) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6 reveal">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">{data.title}</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 reveal">
            {data.heroHeadline}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed reveal delay-200">
            {data.heroSubtext}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 reveal delay-300">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary">
              Call Now: {COMPANY.phone}
            </a>
            <Link href="/contact" className="btn-secondary">
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SERVICE OVERVIEW ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-8 reveal">
            {data.introTitle}
          </h2>
          <div className="space-y-5 text-body-text leading-relaxed text-lg">
            {data.introText.map((p, i) => (
              <p key={i} className="reveal" style={{ animationDelay: `${(i + 1) * 100}ms` }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES GRID ===== */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 reveal" style={{ color: '#1a202c' }}>
            What&apos;s Included
          </h2>
          <p className="text-gray-500 text-center text-lg mb-12 max-w-2xl mx-auto reveal delay-100">
            Everything you need for professional {data.title.toLowerCase()} — completely free for {data.targetAudience}.
          </p>
          <div className={`grid grid-cols-1 md:grid-cols-2 ${data.features.length > 3 ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-6`}>
            {data.features.map((f, i) => (
              <div
                key={f.title}
                className="glass-card rounded-2xl p-6 reveal"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-bold mb-2" style={{ color: '#1a202c' }}>{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 reveal">
            How It Works
          </h2>
          <p className="text-body-text text-center text-lg mb-16 max-w-2xl mx-auto reveal delay-100">
            Getting started is simple. Here is our proven process from start to finish.
          </p>
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-cta to-primary/20 -translate-x-1/2" />
            <div className="space-y-12 md:space-y-16">
              {data.howItWorks.map((step, i) => (
                <div key={step.step} className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : ""} ${i % 2 === 0 ? "reveal-right" : "reveal-left"}`}>
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-body-text leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="relative z-10 flex-shrink-0 reveal">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-cta flex items-center justify-center text-white font-heading font-bold text-lg shadow-lg glow-blue">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="py-20 md:py-28 bg-blue-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 reveal">
            Why Property Owners Choose Us
          </h2>
          <p className="text-body-text text-center text-lg mb-16 max-w-2xl mx-auto reveal delay-100">
            Real benefits that impact your bottom line and your peace of mind.
          </p>
          <div className="space-y-16">
            {data.benefits.map((b, i) => (
              <div
                key={b.title}
                className={`flex flex-col ${b.align === "left" ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-12`}
              >
                <div className={`flex-1 ${b.align === "left" ? "reveal-left" : "reveal-right"}`}>
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">{b.title}</h3>
                  <p className="text-body-text leading-relaxed text-lg">{b.desc}</p>
                </div>
                <div className="flex-1 reveal">
                  <div className="glass-card-white rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/10 to-cta/10 flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="font-heading text-lg font-semibold text-gray-900">{b.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUST BADGES ===== */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Licensed & Insured", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
              { label: "ARS Compliant", icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" },
              { label: "24/7 Dispatch", icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" },
              { label: "Veteran Owned", icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" },
            ].map((badge) => (
              <div key={badge.label} className="flex flex-col items-center gap-2 reveal">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={badge.icon} />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-gray-700">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      {data.testimonials && data.testimonials.length > 0 && (
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 reveal">
              What Our Clients Say
            </h2>
            <p className="text-body-text text-center text-lg mb-12 reveal delay-100">
              Hear from property managers and owners who trust Axle Towing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className="glass-card-white rounded-2xl p-8 reveal"
                  style={{ animationDelay: `${(i + 1) * 100}ms` }}
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div>
                    <p className="font-heading font-bold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}{t.company ? `, ${t.company}` : ""}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== FAQ ACCORDION ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 reveal">
            Frequently Asked Questions
          </h2>
          <p className="text-body-text text-center text-lg mb-12 reveal delay-100">
            Quick answers to common questions about our {data.title.toLowerCase()} services.
          </p>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <details
                key={faq.q}
                className="group glass-card-white rounded-xl overflow-hidden reveal"
                style={{ animationDelay: `${(i + 1) * 75}ms` }}
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-heading font-semibold text-gray-900 text-lg select-none list-none [&::-webkit-details-marker]:hidden">
                  <span className="pr-4">{faq.q}</span>
                  <svg className="w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-body-text leading-relaxed border-t border-blue-100/50 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROPERTIES WE SERVE ===== */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 reveal">
            Properties We Serve
          </h2>
          <p className="text-body-text text-center text-lg mb-12 max-w-2xl mx-auto reveal delay-100">
            Our {data.title.toLowerCase()} services cover every type of private property in the Phoenix metro area.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {PROPERTY_TYPES.map((type, i) => (
              <div
                key={type}
                className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 border border-gray-100 reveal"
                style={{ animationDelay: `${Math.min(i * 30, 300)}ms` }}
              >
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-sm text-gray-700">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICE AREA ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 reveal">
            Serving the Greater Phoenix Metro Area
          </h2>
          <p className="text-body-text text-center text-lg mb-12 max-w-2xl mx-auto reveal delay-100">
            We provide {data.title.toLowerCase()} services across 8 cities and 30+ neighborhoods in the Phoenix metro.
          </p>
          {/* City cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {SERVICE_AREAS.map((area, i) => (
              <Link
                key={area.slug}
                href={`/locations/${area.slug}`}
                className="group bg-blue-50 hover:bg-blue-100 rounded-xl p-4 text-center transition-colors reveal"
                style={{ animationDelay: `${(i + 1) * 50}ms` }}
              >
                <p className="font-heading font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{area.name}</p>
                <p className="text-xs text-gray-500 mt-1">Arizona</p>
              </Link>
            ))}
          </div>
          {/* Neighborhood list for SEO */}
          <div className="bg-gray-50 rounded-2xl p-6 reveal">
            <h3 className="font-heading font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wider">Neighborhoods We Cover</h3>
            <div className="flex flex-wrap gap-2">
              {PHOENIX_NEIGHBORHOODS.map((n) => (
                <span key={n} className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full border border-gray-100">{n}</span>
              ))}
            </div>
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
            Ready to Protect Your Property?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto reveal delay-100">
            Contact us today for a free consultation. Our {data.title.toLowerCase()} services are completely free for {data.targetAudience}.
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

      {/* ===== RELATED SERVICES ===== */}
      <section className="py-20 md:py-28 bg-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 reveal">
            Related Services
          </h2>
          <p className="text-body-text text-center text-lg mb-12 reveal delay-100">
            Explore our other towing and parking enforcement solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.relatedServices.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group glass-card-white rounded-2xl p-8 reveal"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-body-text text-sm leading-relaxed">{s.desc}</p>
                <span className="inline-flex items-center mt-4 text-sm font-semibold text-primary group-hover:text-cta transition-colors">
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
    </>
  );
}
