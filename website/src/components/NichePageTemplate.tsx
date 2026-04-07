import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import type { NicheVertical, NicheCityData } from "@/lib/niche-data";
import { fillCity } from "@/lib/niche-data";

interface NichePageTemplateProps {
  vertical: NicheVertical;
  city: NicheCityData;
}

export default function NichePageTemplate({ vertical, city }: NichePageTemplateProps) {
  const f = (text: string) => fillCity(text, city.name);

  return (
    <>
      {/* ===== PARALLAX HERO ===== */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div
          className="parallax-bg"
          style={{ backgroundImage: `url(${vertical.heroImage})` }}
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(160deg, rgba(27,42,63,0.88) 0%, rgba(30,107,184,0.7) 100%)",
          }}
        />
        <div className="hero-text relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-white/90 mb-6 reveal">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href={`/niche/${vertical.slug}`}
              className="hover:text-white transition-colors"
            >
              {vertical.shortTitle}
            </Link>
            <span>/</span>
            <span className="text-white">{city.name}</span>
          </nav>
          <div className="inline-flex items-center glass rounded-full px-4 py-1.5 text-white text-sm font-medium mb-6">
            <svg
              className="w-4 h-4 mr-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {city.name}, Arizona
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight reveal">
            {f(vertical.heroHeadline)}
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl leading-relaxed mb-8 reveal delay-200">
            {f(vertical.heroSubtext)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 reveal delay-300">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary">
              Call Now: {COMPANY.phone}
            </a>
            <Link href="/contact" className="btn-secondary">
              Request Free Quote
            </Link>
          </div>
          <div className="mt-8 inline-flex items-center gap-3 backdrop-blur-xl bg-amber-500/20 border border-amber-400/40 rounded-full px-6 py-3 shadow-lg shadow-amber-500/10 reveal delay-500">
            <svg
              className="w-6 h-6 text-amber-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4 2"
              />
            </svg>
            <span className="font-heading font-bold text-amber-300 tracking-wide text-sm sm:text-base">
              30-Minute Response Guarantee
            </span>
          </div>
        </div>
      </section>

      {/* ===== LOCAL STATS ===== */}
      <section className="bg-white border-b border-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: city.population, label: `${city.name} Population` },
              { value: "30 min", label: "Avg Response Time" },
              { value: "24/7", label: "Dispatch Available" },
              { value: "4.9/5", label: "Customer Rating" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-brand-blue">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-700 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTRO / OVERVIEW ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 reveal">
                {f(vertical.title)} in {city.name}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                {vertical.intro.map((p, i) => (
                  <p
                    key={i}
                    className="reveal"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    {f(p)}
                  </p>
                ))}
              </div>
            </div>
            <div className="reveal">
              <div className="glass-card-white rounded-2xl p-6 border-glow-blue">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">
                  {city.name} at a Glance
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-600 text-sm">
                    <svg
                      className="w-5 h-5 text-brand-blue shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Population: {city.population}</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600 text-sm">
                    <svg
                      className="w-5 h-5 text-brand-blue shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{city.localDetail}</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600 text-sm">
                    <svg
                      className="w-5 h-5 text-brand-blue shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      ZIP Codes: {city.zipCodes.slice(0, 5).join(", ")}
                      {city.zipCodes.length > 5 && ` + ${city.zipCodes.length - 5} more`}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES GRID ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 reveal"
            style={{ color: "#1a202c" }}
          >
            What&apos;s Included
          </h2>
          <p className="text-gray-700 text-center text-lg mb-12 max-w-2xl mx-auto reveal delay-100">
            Everything you need from a professional {vertical.shortTitle.toLowerCase()} partner in {city.name}.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vertical.features.map((feat, i) => (
              <div
                key={feat.title}
                className="glass-card rounded-2xl p-6 reveal"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <h3
                  className="font-heading text-lg font-bold mb-2"
                  style={{ color: "#1a202c" }}
                >
                  {feat.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {f(feat.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 reveal">
            How It Works
          </h2>
          <p className="text-body-text text-center text-lg mb-16 max-w-2xl mx-auto reveal delay-100">
            Getting started with {vertical.shortTitle.toLowerCase()} in {city.name} is simple.
          </p>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-cta to-primary/20 -translate-x-1/2" />
            <div className="space-y-12 md:space-y-16">
              {vertical.howItWorks.map((step, i) => (
                <div
                  key={step.step}
                  className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`flex-1 ${i % 2 === 0 ? "md:text-right" : ""}`}
                  >
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-body-text leading-relaxed">
                      {f(step.desc)}
                    </p>
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
      <section className="py-20 bg-blue-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 reveal">
            Why {city.name} Businesses Choose Us
          </h2>
          <p className="text-body-text text-center text-lg mb-12 max-w-2xl mx-auto reveal delay-100">
            Real benefits that impact your bottom line and your customer experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vertical.benefits.map((benefit, i) => (
              <div
                key={i}
                className="glass-card-white rounded-2xl p-6 reveal"
                style={{ animationDelay: `${(i + 1) * 75}ms` }}
              >
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mb-3">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed">{f(benefit)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEIGHBORHOODS ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center reveal">
            {city.name} Areas We Cover
          </h2>
          <p className="text-gray-700 text-lg text-center mb-12 max-w-2xl mx-auto reveal">
            Our {vertical.shortTitle.toLowerCase()} services cover all neighborhoods
            and communities throughout {city.name}.
          </p>
          <div className="flex flex-wrap justify-center gap-3 reveal">
            {city.neighborhoods.map((neighborhood) => (
              <span
                key={neighborhood}
                className="glass-card-white px-5 py-2.5 rounded-full text-gray-700 font-medium text-sm border-glow-blue"
              >
                {neighborhood}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUST BADGES ===== */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              {
                label: "Licensed & Insured",
                icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
              },
              {
                label: "ARS Compliant",
                icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
              },
              {
                label: "24/7 Dispatch",
                icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                label: "Veteran Owned",
                icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
              },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center gap-2 reveal"
              >
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={badge.icon}
                    />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ACCORDION ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 reveal">
            Frequently Asked Questions
          </h2>
          <p className="text-body-text text-center text-lg mb-12 reveal delay-100">
            Common questions about {vertical.shortTitle.toLowerCase()} in{" "}
            {city.name}.
          </p>
          <div className="space-y-4">
            {vertical.faqs.map((faq, i) => (
              <details
                key={i}
                className="group glass-card-white rounded-xl overflow-hidden reveal"
                style={{ animationDelay: `${(i + 1) * 75}ms` }}
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-heading font-semibold text-gray-900 text-lg select-none list-none [&::-webkit-details-marker]:hidden">
                  <span className="pr-4">{f(faq.q)}</span>
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-body-text leading-relaxed border-t border-blue-100/50 pt-4">
                  {f(faq.a)}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OTHER CITIES ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 reveal">
            {vertical.shortTitle} Across Phoenix Metro
          </h2>
          <p className="text-body-text text-center text-lg mb-12 max-w-2xl mx-auto reveal delay-100">
            We provide {vertical.shortTitle.toLowerCase()} services across the
            entire Phoenix metropolitan area.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              "Phoenix",
              "Scottsdale",
              "Mesa",
              "Glendale",
              "Gilbert",
              "Chandler",
              "Tempe",
              "Peoria",
              "Surprise",
              "Goodyear",
            ].map((c, i) => {
              const slug = c.toLowerCase().replace(/\s+/g, "-");
              const isCurrent = slug === city.slug;
              return (
                <Link
                  key={c}
                  href={`/niche/${vertical.slug}/${slug}`}
                  className={`group rounded-xl p-4 text-center transition-colors reveal ${
                    isCurrent
                      ? "bg-blue-600 text-white"
                      : "bg-blue-50 hover:bg-blue-100"
                  }`}
                  style={{ animationDelay: `${(i + 1) * 50}ms` }}
                >
                  <p
                    className={`font-heading font-bold transition-colors ${
                      isCurrent
                        ? "text-white"
                        : "text-gray-900 group-hover:text-blue-700"
                    }`}
                  >
                    {c}
                  </p>
                  <p
                    className={`text-xs mt-1 ${
                      isCurrent ? "text-white/80" : "text-gray-700"
                    }`}
                  >
                    Arizona
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="parallax-bg"
          style={{
            backgroundImage: `url(/images/optimized/axle-towing-arizona-skyline-panoramic-phoenix-az.webp)`,
          }}
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(160deg, rgba(15,31,54,0.92) 0%, rgba(27,42,63,0.88) 50%, rgba(30,107,184,0.75) 100%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for Reliable {vertical.shortTitle} in {city.name}?
            </h2>
            <p className="text-white/95 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to set up a partnership or request immediate
              service. Available 24/7 across the {city.name} metro area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${COMPANY.phone}`}
                className="btn-primary text-lg"
              >
                Call {COMPANY.phone}
              </a>
              <Link href="/contact" className="btn-secondary text-lg">
                Request Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RELATED SERVICES ===== */}
      <section className="py-20 bg-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 reveal">
            Related Services in {city.name}
          </h2>
          <p className="text-body-text text-center text-lg mb-12 reveal delay-100">
            Explore our other towing and enforcement solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href={`/locations/${city.slug}`}
              className="group glass-card-white rounded-2xl p-8 reveal"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                All Services in {city.name}
              </h3>
              <p className="text-body-text text-sm leading-relaxed">
                View all towing and parking enforcement services available in{" "}
                {city.name}, AZ.
              </p>
              <span className="inline-flex items-center mt-4 text-sm font-semibold text-primary group-hover:text-cta transition-colors">
                Learn More
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
            <Link
              href="/services"
              className="group glass-card-white rounded-2xl p-8 reveal delay-100"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                All Towing Services
              </h3>
              <p className="text-body-text text-sm leading-relaxed">
                Explore our complete range of private property towing and parking
                enforcement services.
              </p>
              <span className="inline-flex items-center mt-4 text-sm font-semibold text-primary group-hover:text-cta transition-colors">
                View Services
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
