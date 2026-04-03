import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { NICHE_VERTICALS, NICHE_CITIES } from "@/lib/niche-data";

export const metadata: Metadata = {
  title: `Specialty Towing Services | ${COMPANY.name}`,
  description:
    "Specialized towing partnerships for locksmiths, Uber/Lyft drivers, moving companies, mechanics, and roadside emergencies across the Phoenix metro area.",
  alternates: { canonical: `https://${COMPANY.domain}/niche` },
  openGraph: {
    title: `Specialty Towing Services | ${COMPANY.name}`,
    description:
      "Specialized towing partnerships for locksmiths, rideshare drivers, moving companies, mechanics, and emergency roadside assistance across Phoenix, AZ.",
    url: `https://${COMPANY.domain}/niche`,
    type: "website",
  },
};

export default function NicheIndexPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
        <div
          className="parallax-bg"
          style={{ backgroundImage: "url(/images/arizona-skyline-panoramic.jpg)" }}
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(160deg, rgba(27,42,63,0.9) 0%, rgba(30,107,184,0.7) 100%)",
          }}
        />
        <div className="hero-text relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28 w-full">
          <nav className="flex items-center gap-2 text-sm text-white/90 mb-6 reveal">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Specialty Services</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 reveal">
            Specialty Towing Services
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl leading-relaxed reveal delay-200">
            Beyond property management towing, we partner with locksmiths,
            rideshare drivers, moving companies, mechanics, and anyone who needs
            reliable vehicle transport across the Phoenix metro area.
          </p>
        </div>
      </section>

      {/* Verticals Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 reveal"
            style={{ color: "#1a202c" }}
          >
            Our Specialty Services
          </h2>
          <p className="text-gray-700 text-center text-lg mb-12 max-w-2xl mx-auto reveal delay-100">
            Industry-specific towing partnerships designed for your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NICHE_VERTICALS.map((v, i) => (
              <Link
                key={v.slug}
                href={`/niche/${v.slug}`}
                className="group glass-card rounded-2xl p-8 reveal"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors">
                  <svg
                    className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={v.icon}
                    />
                  </svg>
                </div>
                <h3
                  className="font-heading text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors"
                  style={{ color: "#1a202c" }}
                >
                  {v.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {v.heroSubtext.replace(/\{city\}/g, "Phoenix")}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-cta transition-colors">
                  View {NICHE_CITIES.length} City Pages
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

      {/* Cities List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 reveal">
            Serving the Greater Phoenix Metro
          </h2>
          <p className="text-body-text text-center text-lg mb-12 max-w-2xl mx-auto reveal delay-100">
            Specialty towing services available in {NICHE_CITIES.length} cities
            across the Phoenix valley.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {NICHE_CITIES.map((c, i) => (
              <Link
                key={c.slug}
                href={`/locations/${c.slug}`}
                className="group bg-white hover:bg-blue-50 rounded-xl p-4 text-center transition-colors border border-gray-100 reveal"
                style={{ animationDelay: `${(i + 1) * 50}ms` }}
              >
                <p className="font-heading font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {c.name}
                </p>
                <p className="text-xs text-gray-700 mt-1">Arizona</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="parallax-bg"
          style={{ backgroundImage: "url(/images/arizona-skyline-panoramic.jpg)" }}
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
              Need a Towing Partner for Your Business?
            </h2>
            <p className="text-white/95 text-lg mb-8 max-w-2xl mx-auto">
              Whether you are a locksmith, rideshare driver, moving company, or
              mechanic, we have a towing solution built for your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${COMPANY.phone}`} className="btn-primary text-lg">
                Call {COMPANY.phone}
              </a>
              <Link href="/contact" className="btn-secondary text-lg">
                Request Partnership Info
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
