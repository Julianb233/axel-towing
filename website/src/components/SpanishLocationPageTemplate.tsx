import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import type { SpanishLocationPageData } from "@/lib/spanish-location-data";

const SERVICIOS_ES = [
  { title: "Remolque de Propiedad Privada", desc: "Remocion de vehiculos no autorizados sin costo para propietarios.", slug: "private-property-impounds" },
  { title: "Control de Estacionamiento", desc: "Patrullaje profesional para complejos y propiedades comerciales.", slug: "parking-enforcement" },
  { title: "Reubicacion de Vehiculos", desc: "Servicio de pago para mover vehiculos durante construccion y mantenimiento.", slug: "vehicle-relocations" },
  { title: "Remolque para HOA", desc: "Programas personalizados de control de estacionamiento para HOAs.", slug: "hoa-towing" },
  { title: "Remolque para Apartamentos", desc: "Mantenga organizado el estacionamiento de su complejo.", slug: "apartment-towing" },
  { title: "Propiedad Comercial", desc: "Proteja su propiedad comercial del estacionamiento no autorizado.", slug: "commercial-property-towing" },
];

export default function SpanishLocationPageTemplate({
  data,
}: {
  data: SpanishLocationPageData;
}) {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Axle Towing & Impound",
            description: data.metaDescription,
            telephone: COMPANY.phone,
            url: `https://${COMPANY.domain}/es/ubicaciones/${data.slug}`,
            areaServed: {
              "@type": "City",
              name: data.city,
              containedInPlace: {
                "@type": "State",
                name: "Arizona",
              },
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Phoenix",
              addressRegion: "AZ",
              postalCode: "85040",
              streetAddress: "320 E. Pioneer St.",
            },
            inLanguage: "es",
          }),
        }}
      />

      {/* Parallax Hero */}
      <section className="parallax-container min-h-[55vh] flex items-center relative">
        <div
          className="parallax-bg"
          style={{
            backgroundImage: `url(${data.heroImage || "/images/contact-phoenix.jpg"})`,
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
            {/* Language toggle + location badge */}
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {data.city}, Arizona
              </div>
              <Link
                href={`/locations/${data.englishSlug}`}
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
              Servicio de Grua en{" "}
              <span className="text-gradient">{data.city}</span>, AZ
            </h1>
            <p className="text-lg md:text-xl text-white leading-relaxed mb-8">
              {data.heroSubtext}
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
                Servicio de Grua en {data.city}
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
                  Datos de {data.city}
                </h3>
                <ul className="space-y-3">
                  {data.cityFacts.map((fact, i) => (
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
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-center reveal"
            style={{ color: "#1a202c" }}
          >
            Nuestros Servicios en {data.city}
          </h2>
          <p className="text-gray-700 text-lg text-center mb-12 max-w-2xl mx-auto reveal">
            Soluciones integrales de remolque de propiedad privada para
            comunidades residenciales y comerciales en {data.city}.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICIOS_ES.map((service, index) => (
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3
                  className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors"
                  style={{ color: "#1a202c" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods / Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center reveal">
            Areas de {data.city} que Servimos
          </h2>
          <p className="text-gray-700 text-lg text-center mb-12 max-w-2xl mx-auto reveal">
            Nuestros servicios de grua y control de estacionamiento cubren
            todos los vecindarios y comunidades en {data.city}.
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
                Tipos de Propiedad que Servimos en {data.city}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Sin importar el tipo de propiedad que administre en {data.city},
                tenemos la experiencia para disenar un programa de control de
                estacionamiento personalizado para sus necesidades.
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
            Por Que los Propietarios en {data.city} Nos Eligen
          </h2>
          <p className="text-gray-700 text-lg text-center mb-12 max-w-2xl mx-auto reveal">
            Descubra por que propietarios y administradores en {data.city}{" "}
            confian en Axle Towing &amp; Impound para sus necesidades de control
            de estacionamiento.
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
              Obtenga Servicio de Grua Gratuito en {data.city}
            </h2>
            <p className="text-white/95 text-lg mb-8 max-w-2xl mx-auto">
              Contactenos hoy para una consulta gratuita. Todos nuestros
              servicios de remolque de propiedad privada en {data.city} son sin
              costo para propietarios.
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

      {/* Other Spanish Cities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center reveal">
            Otras Ubicaciones en Espanol
          </h2>
          <div className="flex flex-wrap justify-center gap-3 reveal">
            <Link
              href="/es/ubicaciones"
              className="glass-card-white px-5 py-2.5 rounded-full text-brand-blue font-semibold text-sm border-glow-blue hover:bg-blue-50 transition-colors"
            >
              Ver Todas las Ubicaciones
            </Link>
            <Link
              href="/es"
              className="glass-card-white px-5 py-2.5 rounded-full text-gray-700 font-medium text-sm border-glow-blue hover:bg-blue-50 transition-colors"
            >
              Pagina Principal en Espanol
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
