import Link from "next/link";
import { COMPANY, SERVICES } from "@/lib/constants";
import type { LocationPageData } from "@/lib/location-data";
import CTASection from "./CTASection";

export default function LocationPageTemplate({ data }: { data: LocationPageData }) {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-1.5 text-orange-400 text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              {data.city}, Arizona
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Towing &amp; Parking Enforcement in{" "}
              <span className="text-orange-400">{data.city}</span>, AZ
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              {data.heroSubtext}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${COMPANY.phone}`}
                className="bg-orange-500 hover:bg-orange-400 text-navy-950 font-bold px-8 py-3 rounded-lg transition-colors text-center"
              >
                Call {COMPANY.phone}
              </a>
              <Link
                href="/contact"
                className="border-2 border-white/30 hover:border-white text-white font-bold px-8 py-3 rounded-lg transition-colors text-center"
              >
                Request Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-6">
            Private Property Towing in {data.city}
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
            {data.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Services in this location */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
            Our Services in {data.city}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-400 hover:shadow-lg transition-all group"
              >
                <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm">{s.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">
                {data.city} Areas We Serve
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {data.neighborhoods.map((n) => (
                  <div
                    key={n}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <svg className="w-4 h-4 text-orange-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {n}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">
                Property Types We Serve
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {data.propertyTypes.map((pt) => (
                  <div
                    key={pt}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <svg className="w-4 h-4 text-orange-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {pt}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        dark
        headline={`Get Free Towing Service in ${data.city}`}
        subtext={`Contact us today for a free consultation. All our private property towing services in ${data.city} are at zero cost to property owners.`}
      />
    </>
  );
}
