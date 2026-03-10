import Link from "next/link";
import { COMPANY, SERVICES } from "@/lib/constants";
import type { LocationPageData } from "@/lib/location-data";

export default function LocationPageTemplate({
  data,
}: {
  data: LocationPageData;
}) {
  return (
    <>
      {/* Parallax Hero */}
      <section className="parallax-container min-h-[55vh] flex items-center relative">
        <div
          className="parallax-bg"
          style={{
            backgroundImage: `url(${data.heroImage || "/images/contact-phoenix.jpg"})`,
          }}
        />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(160deg, rgba(27,42,63,0.85) 0%, rgba(30,107,184,0.65) 100%)" }} />
        <div className="hero-text relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="max-w-3xl">
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
              {data.city}, Arizona
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Towing &amp; Parking Enforcement in{" "}
              <span className="text-gradient">{data.city}</span>, AZ
            </h1>
            <p className="text-lg md:text-xl text-white leading-relaxed mb-8">
              {data.heroSubtext}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${COMPANY.phone}`} className="btn-primary">
                Call {COMPANY.phone}
              </a>
              <Link href="/contact" className="btn-secondary">
                Request Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local Stats */}
      <section className="bg-white border-b border-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {data.localStats.map((stat, index) => (
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

      {/* City Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 reveal">
                Private Property Towing in {data.city}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                {data.intro.map((p, i) => (
                  <p key={i} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <div className="reveal">
              <div className="glass-card-white rounded-2xl p-6 border-glow-blue">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">
                  Quick Facts: {data.city}
                </h3>
                <ul className="space-y-3">
                  {data.cityFacts.map((fact, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
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
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
                {data.address && (
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-600 uppercase tracking-wider font-semibold mb-1">
                      Local Office
                    </p>
                    <p className="text-sm text-gray-700 font-medium">
                      {data.address}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center reveal" style={{ color: '#1a202c' }}>
            Our Services in {data.city}
          </h2>
          <p className="text-gray-700 text-lg text-center mb-12 max-w-2xl mx-auto reveal">
            Comprehensive private property towing solutions tailored for{" "}
            {data.city}&apos;s residential and commercial communities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="glass-card rounded-2xl p-6 group reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <svg
                    className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {service.icon === "shield" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    )}
                    {service.icon === "clipboard" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    )}
                    {service.icon === "truck" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17h8M8 17l-2 0a2 2 0 01-2-2V7a2 2 0 012-2h8l4 4v6a2 2 0 01-2 2h-2M8 17a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4z" />
                    )}
                    {service.icon === "home" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    )}
                    {service.icon === "building" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    )}
                    {service.icon === "store" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18l-2 13H5L3 3zm0 0l-1-1m3 14v5m12-5v5M9 21h6" />
                    )}
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors" style={{ color: '#1a202c' }}>
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {service.shortDesc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods & Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center reveal">
            {data.city} Areas We Serve
          </h2>
          <p className="text-gray-700 text-lg text-center mb-12 max-w-2xl mx-auto reveal">
            Our towing and parking enforcement services cover all neighborhoods
            and communities throughout {data.city}.
          </p>
          <div className="flex flex-wrap justify-center gap-3 reveal">
            {data.neighborhoods.map((neighborhood) => (
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

      {/* Property Types + Testimonial */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Property Types We Serve in {data.city}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                No matter what type of property you manage in {data.city}, we
                have the experience and expertise to design a custom parking
                enforcement program that fits your needs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {data.propertyTypes.map((type, index) => (
                  <div
                    key={type}
                    className="flex items-center gap-2 text-gray-600 reveal"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <svg
                      className="w-5 h-5 text-brand-blue shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{type}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Testimonial */}
            <div className="reveal">
              <div className="glass-card-white rounded-2xl p-8 border-glow-blue">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg
                      key={s}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 text-lg leading-relaxed italic mb-6">
                  &ldquo;{data.testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-cta flex items-center justify-center text-white font-bold">
                    {data.testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">
                      {data.testimonial.name}
                    </div>
                    <div className="text-sm text-gray-700">
                      {data.testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center reveal">
            Why {data.city} Property Owners Choose Us
          </h2>
          <p className="text-gray-700 text-lg text-center mb-12 max-w-2xl mx-auto reveal">
            Here is why property owners and managers throughout {data.city} trust
            Axle Towing &amp; Impound for their parking enforcement needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className="glass-card-white rounded-2xl p-8 border-glow-blue reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-brand-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="parallax-bg"
          style={{ backgroundImage: `url(/images/arizona-skyline-panoramic.jpg)` }}
        />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(160deg, rgba(15,31,54,0.92) 0%, rgba(27,42,63,0.88) 50%, rgba(30,107,184,0.75) 100%)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Free Towing Service in {data.city}
            </h2>
            <p className="text-white/95 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation. All our private property
              towing services in {data.city} are at zero cost to property
              owners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${COMPANY.phone}`} className="btn-primary text-lg">
                Call {COMPANY.phone}
              </a>
              <Link href="/contact" className="btn-secondary text-lg">
                Request Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
