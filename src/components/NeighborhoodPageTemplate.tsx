import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import type { NeighborhoodData } from "@/lib/neighborhood-data";

export default function NeighborhoodPageTemplate({
  data,
}: {
  data: NeighborhoodData;
}) {
  return (
    <>
      {/* Parallax Hero */}
      <section className="parallax-container min-h-[45vh] flex items-center relative">
        <div
          className="parallax-bg"
          style={{
            backgroundImage: `url(/images/contact-phoenix.jpg)`,
          }}
        />
        <div className="absolute inset-0 gradient-overlay-blue z-[1]" />
        <div className="absolute inset-0 gradient-overlay-dark z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center glass rounded-full px-4 py-1.5 text-blue-200 text-sm font-medium mb-4">
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
              <Link
                href={`/locations/${data.citySlug}`}
                className="hover:text-white transition-colors"
              >
                {data.city}, Arizona
              </Link>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Towing &amp; Parking Enforcement in{" "}
              <span className="text-gradient">{data.name}</span>
            </h1>
            <p className="text-lg text-blue-100/80 leading-relaxed mb-6">
              Free private property towing and parking enforcement services for{" "}
              {data.name} property owners and managers.
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

      {/* Zip Codes Bar */}
      <section className="bg-white border-b border-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm text-gray-500 font-medium mr-2">
              Zip Codes Served:
            </span>
            {data.zipCodes.map((zip) => (
              <span
                key={zip}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-brand-blue/10 text-brand-blue"
              >
                {zip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 reveal">
                Private Property Towing in {data.name}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                {data.intro.map((p, i) => (
                  <p
                    key={i}
                    className="reveal"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <div className="reveal">
              <div className="glass-card-white rounded-2xl p-6 border-glow-blue">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">
                  Nearby Landmarks
                </h3>
                <ul className="space-y-3">
                  {data.nearbyLandmarks.map((landmark, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-600 text-sm"
                    >
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>{landmark}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center reveal">
            Property Types We Serve in {data.name}
          </h2>
          <p className="text-gray-500 text-lg text-center mb-10 max-w-2xl mx-auto reveal">
            No matter what type of property you manage in {data.name}, our
            towing and parking enforcement services are completely free for
            property owners.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {data.propertyHighlights.map((type, index) => (
              <div
                key={type}
                className="flex items-center gap-3 glass-card-white rounded-xl p-4 border-glow-blue reveal"
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
                <span className="text-gray-700 font-medium">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to City + CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-cta/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Free Towing Service in {data.name}
            </h2>
            <p className="text-blue-200/70 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation. All our private property
              towing services in {data.name}, {data.city} are at zero cost to
              property owners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${COMPANY.phone}`} className="btn-primary">
                Call {COMPANY.phone}
              </a>
              <Link href="/contact" className="btn-secondary">
                Request Free Quote
              </Link>
            </div>
            <div className="mt-8">
              <Link
                href={`/locations/${data.citySlug}`}
                className="text-blue-200/70 hover:text-white transition-colors text-sm inline-flex items-center gap-1"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to all {data.city} towing services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
