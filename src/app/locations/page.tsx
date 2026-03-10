import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COMPANY, SERVICE_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Areas — Towing Across the Phoenix Metro",
  description:
    "Axle Towing provides private property towing and parking enforcement across 8 cities in the Greater Phoenix area. Find your city for local service details.",
};

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/arizona-skyline-panoramic.jpg"
            alt="Phoenix Arizona skyline"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(160deg, rgba(27,42,63,0.88) 0%, rgba(30,107,184,0.7) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Locations</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Serving the Greater Phoenix Area
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Professional private property towing and parking enforcement across
            8 cities. Find your local service area below.
          </p>
        </div>
      </section>

      {/* City Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/locations/${area.slug}`}
                className="group glass-card-white rounded-2xl p-8 text-center border-glow-blue hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold font-heading mb-2 group-hover:text-blue-600 transition-colors" style={{ color: "#1a202c" }}>
                  {area.name}, AZ
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {area.description}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-blue-600">
                  View Details
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/arizona-skyline-panoramic.jpg"
            alt="Phoenix Arizona skyline"
            fill
            className="object-cover"
          />
        </div>
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(160deg, rgba(15,31,54,0.92) 0%, rgba(27,42,63,0.88) 50%, rgba(30,107,184,0.75) 100%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Don&apos;t See Your City?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            We serve the entire Phoenix metro area. Contact us to discuss towing
            services for your property — it&apos;s completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${COMPANY.phone}`}
              className="btn-primary text-lg"
            >
              Call {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              className="btn-secondary text-lg"
            >
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
