import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import type { ServicePageData } from "@/lib/service-data";

export default function ServicePageTemplate({ data }: { data: ServicePageData }) {
  return (
    <>
      {/* ===== PARALLAX HERO ===== */}
      <section className="parallax-fixed relative min-h-[60vh] flex items-center" style={{ backgroundImage: `url(${COMPANY.heroImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/80 to-primary/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-blue-200/70 mb-6 reveal">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">{data.title}</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 reveal">
            {data.heroHeadline}
          </h1>
          <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl leading-relaxed reveal delay-200">
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-blue-950 mb-8 reveal">
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
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-4 reveal">
            What&apos;s Included
          </h2>
          <p className="text-blue-200/70 text-center text-lg mb-12 max-w-2xl mx-auto reveal delay-100">
            Everything you need for professional {data.title.toLowerCase()} — completely free for {data.targetAudience}.
          </p>
          <div className={`grid grid-cols-1 md:grid-cols-2 ${data.features.length > 3 ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-6`}>
            {data.features.map((f, i) => (
              <div
                key={f.title}
                className="glass-card rounded-2xl p-6 reveal"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-cta/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-cta" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-blue-200/70 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-blue-950 text-center mb-4 reveal">
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
                    <h3 className="font-heading text-xl font-bold text-blue-950 mb-2">{step.title}</h3>
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-blue-950 text-center mb-4 reveal">
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
                  <h3 className="font-heading text-2xl font-bold text-blue-950 mb-3">{b.title}</h3>
                  <p className="text-body-text leading-relaxed text-lg">{b.desc}</p>
                </div>
                <div className="flex-1 reveal">
                  <div className="glass-card-white rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/10 to-cta/10 flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="font-heading text-lg font-semibold text-blue-950">{b.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ACCORDION ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-blue-950 text-center mb-4 reveal">
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
                <summary className="flex items-center justify-between cursor-pointer p-6 font-heading font-semibold text-blue-950 text-lg select-none list-none [&::-webkit-details-marker]:hidden">
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

      {/* ===== CTA BANNER ===== */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-600 to-red-500" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 reveal">
            Ready to Get Started?
          </h2>
          <p className="text-red-100 text-lg mb-10 max-w-2xl mx-auto reveal delay-100">
            Contact us today for a free consultation. Our {data.title.toLowerCase()} services are completely free for {data.targetAudience}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-200">
            <a href={`tel:${COMPANY.phone}`} className="bg-white text-red-600 font-heading font-bold px-8 py-4 rounded-lg hover:bg-red-50 transition-all hover:-translate-y-1 hover:shadow-xl text-lg uppercase tracking-wide">
              Call {COMPANY.phone}
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-heading font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-all hover:-translate-y-1 text-lg uppercase tracking-wide">
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ===== RELATED SERVICES ===== */}
      <section className="py-20 md:py-28 bg-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-blue-950 text-center mb-4 reveal">
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
                <h3 className="font-heading text-xl font-bold text-blue-950 mb-2 group-hover:text-primary transition-colors">
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
