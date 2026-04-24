import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import {
  SPANISH_LOCATION_PAGES,
  SPANISH_CITY_SLUGS,
} from "@/lib/spanish-location-data";

export const metadata: Metadata = {
  title:
    "Ubicaciones — Servicio de Grua en Arizona | Axle Towing & Impound",
  description:
    "Axle Towing & Impound ofrece servicios de grua profesionales en Phoenix, Mesa, Tempe, Chandler, Glendale, Avondale, Guadalupe, Tolleson, El Mirage y Goodyear. Grua 24 horas. Llame al 480-288-5526.",
  alternates: {
    canonical: `https://${COMPANY.domain}/es/ubicaciones`,
    languages: {
      en: `https://${COMPANY.domain}/locations`,
      es: `https://${COMPANY.domain}/es/ubicaciones`,
    },
  },
  openGraph: {
    title: "Ubicaciones — Servicio de Grua en Arizona",
    description:
      "Servicios de grua profesionales en las principales ciudades del area metropolitana de Phoenix.",
    locale: "es_US",
    alternateLocale: "en_US",
  },
};

export default function SpanishLocationsHubPage() {
  return (
    <>
      {/* Hero */}
      <section className="parallax-container min-h-[45vh] flex items-center relative">
        <div
          className="parallax-bg"
          style={{
            backgroundImage: "url(/images/optimized/axle-towing-arizona-skyline-panoramic-phoenix-az.webp)",
          }}
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(160deg, rgba(27,42,63,0.85) 0%, rgba(30,107,184,0.65) 100%)",
          }}
        />
        <div className="hero-text relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center glass rounded-full px-4 py-1.5 text-white text-sm font-medium">
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
                </svg>
                Area Metropolitana de Phoenix
              </div>
              <Link
                href="/locations"
                className="inline-flex items-center gap-1.5 glass rounded-full px-4 py-1.5 text-blue-200 hover:text-white text-sm font-medium transition-colors"
              >
                <span>English</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                  />
                </svg>
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Nuestras{" "}
              <span className="text-gradient">Ubicaciones</span>
            </h1>
            <p className="text-lg md:text-xl text-white leading-relaxed mb-8">
              Servicio de grua profesional en las principales ciudades del area
              metropolitana de Phoenix. Servicio GRATUITO para propietarios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${COMPANY.phone}`} className="btn-primary">
                Llame Ahora: {COMPANY.phone}
              </a>
              <Link href="/es/contacto" className="btn-secondary">
                Cotizacion Gratis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* City Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">
              10 Ciudades
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Ciudades que Servimos en Espanol
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-primary to-cta rounded-full mb-6" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Seleccione su ciudad para obtener informacion detallada sobre
              nuestros servicios de grua en su area.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPANISH_CITY_SLUGS.map((slug, index) => {
              const city = SPANISH_LOCATION_PAGES[slug];
              return (
                <Link
                  key={slug}
                  href={`/es/ubicaciones/${slug}`}
                  className="glass-card-white rounded-2xl p-8 border-glow-blue group reveal hover:shadow-lg transition-shadow"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <svg
                        className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors"
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
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                      {city.hispanicPercent} Hispano
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {city.city}, AZ
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {city.heroSubtext}
                  </p>
                  <div className="flex items-center gap-2">
                    {city.localStats.slice(0, 2).map((stat) => (
                      <span
                        key={stat.label}
                        className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                      >
                        {stat.label}: {stat.value}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
                      Ver Detalles
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
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="parallax-bg"
          style={{
            backgroundImage: "url(/images/optimized/axle-towing-arizona-skyline-panoramic-phoenix-az.webp)",
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
              Listo para Proteger Su Propiedad?
            </h2>
            <p className="text-white/95 text-lg mb-8 max-w-2xl mx-auto">
              Nuestros servicios de control de estacionamiento son
              completamente gratuitos para propietarios en toda el area
              metropolitana de Phoenix.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${COMPANY.phone}`} className="btn-primary text-lg">
                Llame Ahora: {COMPANY.phone}
              </a>
              <Link href="/es/contacto" className="btn-secondary text-lg">
                Cotizacion Gratis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Links to other Spanish pages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 reveal">
            <Link
              href="/es"
              className="glass-card-white px-6 py-3 rounded-full text-gray-700 font-medium text-sm border-glow-blue hover:bg-blue-50 transition-colors"
            >
              Pagina Principal
            </Link>
            <Link
              href="/es/servicios"
              className="glass-card-white px-6 py-3 rounded-full text-gray-700 font-medium text-sm border-glow-blue hover:bg-blue-50 transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="/es/preguntas-frecuentes"
              className="glass-card-white px-6 py-3 rounded-full text-gray-700 font-medium text-sm border-glow-blue hover:bg-blue-50 transition-colors"
            >
              Preguntas Frecuentes
            </Link>
            <Link
              href="/es/contacto"
              className="glass-card-white px-6 py-3 rounded-full text-gray-700 font-medium text-sm border-glow-blue hover:bg-blue-50 transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
