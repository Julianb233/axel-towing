import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, SERVICE_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Area de Servicio — Grua y Control de Estacionamiento en Phoenix | Axle Towing & Impound",
  description:
    "Axle Towing & Impound sirve a 38 ciudades en el area metropolitana de Phoenix con servicios gratuitos de remolque de propiedad privada y control de estacionamiento. Cobertura en Phoenix, Scottsdale, Mesa, Tempe, Chandler, Gilbert, Glendale, Peoria, Surprise y mas.",
  alternates: {
    canonical: `https://${COMPANY.domain}/es/area-de-servicio`,
    languages: {
      en: `https://${COMPANY.domain}/service-area`,
      es: `https://${COMPANY.domain}/es/area-de-servicio`,
    },
  },
  openGraph: {
    title: "Area de Servicio — Cobertura Completa en Phoenix Metro | Axle Towing & Impound",
    description:
      "Servicios gratuitos de grua y control de estacionamiento en 38 ciudades del area metropolitana de Phoenix.",
    locale: "es_US",
    alternateLocale: "en_US",
  },
};

const MAP_PINS: { name: string; slug: string; top: string; left: string }[] = [
  { name: "Phoenix", slug: "phoenix", top: "42%", left: "38%" },
  { name: "Scottsdale", slug: "scottsdale", top: "32%", left: "55%" },
  { name: "Mesa", slug: "mesa", top: "48%", left: "62%" },
  { name: "Tempe", slug: "tempe", top: "52%", left: "48%" },
  { name: "Chandler", slug: "chandler", top: "62%", left: "52%" },
  { name: "Gilbert", slug: "gilbert", top: "65%", left: "65%" },
  { name: "Glendale", slug: "glendale", top: "30%", left: "28%" },
  { name: "Apache Junction", slug: "apache-junction", top: "45%", left: "82%" },
  { name: "Peoria", slug: "peoria", top: "25%", left: "30%" },
  { name: "Surprise", slug: "surprise", top: "22%", left: "18%" },
  { name: "Avondale", slug: "avondale", top: "48%", left: "20%" },
  { name: "Goodyear", slug: "goodyear", top: "52%", left: "12%" },
  { name: "Buckeye", slug: "buckeye", top: "55%", left: "5%" },
  { name: "Queen Creek", slug: "queen-creek", top: "72%", left: "72%" },
  { name: "Fountain Hills", slug: "fountain-hills", top: "28%", left: "68%" },
  { name: "Paradise Valley", slug: "paradise-valley", top: "35%", left: "48%" },
  { name: "Cave Creek", slug: "cave-creek", top: "18%", left: "45%" },
  { name: "Sun City", slug: "sun-city", top: "28%", left: "20%" },
  { name: "Anthem", slug: "anthem", top: "10%", left: "38%" },
  { name: "El Mirage", slug: "el-mirage", top: "32%", left: "18%" },
  { name: "Maricopa", slug: "maricopa", top: "85%", left: "40%" },
];

export default function AreaDeServicioPage() {
  return (
    <>
      {/* Hero */}
      <section className="parallax-container min-h-[55vh] flex items-center relative">
        <div className="parallax-bg" style={{ backgroundImage: `url(/images/optimized/axle-towing-contact-phoenix-arizona.webp)` }} />
        <div className="absolute inset-0 gradient-overlay-blue z-[1]" />
        <div className="absolute inset-0 gradient-overlay-dark z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-white/80 mb-6 reveal">
              <Link href="/es" className="hover:text-white transition-colors">Inicio</Link>
              <span>/</span>
              <span className="text-white">Area de Servicio</span>
            </nav>
            <div className="mb-4">
              <Link href="/service-area" className="inline-flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors glass rounded-full px-4 py-2">
                <span>English</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                </svg>
              </Link>
            </div>
            <div className="inline-flex items-center glass rounded-full px-4 py-1.5 text-blue-200 text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Area Metropolitana de Phoenix
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Nuestra Area de Servicio &mdash;{" "}
              <span className="text-gradient">Phoenix Metro</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8">
              Remolque gratuito de propiedad privada y control de estacionamiento en 38 ciudades y mas de 3,000 millas cuadradas del Valle del Sol.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${COMPANY.phone}`} className="btn-primary">
                Llame {COMPANY.phone}
              </a>
              <Link href="/es/cotizacion" className="btn-secondary">
                Cotizacion Gratis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Stats */}
      <section className="bg-white border-b border-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "38", label: "Ciudades Cubiertas" },
              { value: "15,000+", label: "Propiedades Atendidas" },
              { value: "5M+", label: "Residentes en Cobertura" },
              { value: "< 30 min", label: "Respuesta Promedio" },
            ].map((stat, index) => (
              <div key={stat.label} className="reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="text-3xl md:text-4xl font-bold text-brand-blue">{stat.value}</div>
                <div className="text-sm text-gray-700 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center reveal">
            Mapa de Cobertura
          </h2>
          <p className="text-gray-700 text-lg text-center mb-12 max-w-2xl mx-auto reveal">
            Proporcionamos servicios gratuitos de remolque de propiedad privada en toda el area metropolitana de Phoenix.
          </p>
          <div className="reveal">
            <div className="relative mx-auto max-w-4xl aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 bg-gradient-to-br from-amber-50 via-orange-50/50 to-yellow-50 shadow-lg">
              {/* Desert texture overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(217,119,6,0.15)_0%,_transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,_rgba(234,88,12,0.1)_0%,_transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,_rgba(180,83,9,0.1)_0%,_transparent_40%)]" />
              </div>

              {/* Grid lines */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-[25%] left-0 right-0 border-t border-gray-400 border-dashed" />
                <div className="absolute top-[50%] left-0 right-0 border-t border-gray-400 border-dashed" />
                <div className="absolute top-[75%] left-0 right-0 border-t border-gray-400 border-dashed" />
                <div className="absolute left-[25%] top-0 bottom-0 border-l border-gray-400 border-dashed" />
                <div className="absolute left-[50%] top-0 bottom-0 border-l border-gray-400 border-dashed" />
                <div className="absolute left-[75%] top-0 bottom-0 border-l border-gray-400 border-dashed" />
              </div>

              {/* Freeway lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none" preserveAspectRatio="xMidYMid meet">
                <path d="M 155 20 L 155 140 L 155 250" stroke="rgba(100,100,100,0.25)" strokeWidth="2" strokeDasharray="8 4" />
                <path d="M 20 130 L 155 130 L 260 200" stroke="rgba(100,100,100,0.25)" strokeWidth="2" strokeDasharray="8 4" />
                <path d="M 120 40 Q 80 120 120 200 Q 180 260 260 200 Q 300 140 260 60 Q 220 20 160 30" stroke="rgba(59,130,246,0.2)" strokeWidth="1.5" strokeDasharray="6 3" />
                <path d="M 180 100 Q 220 140 280 160 Q 310 170 330 150" stroke="rgba(59,130,246,0.2)" strokeWidth="1.5" strokeDasharray="6 3" />
                <path d="M 190 155 L 340 155" stroke="rgba(100,100,100,0.2)" strokeWidth="1.5" strokeDasharray="6 3" />
              </svg>

              {/* Coverage area blob */}
              <div className="absolute top-[15%] left-[15%] w-[70%] h-[70%] rounded-[40%] bg-brand-blue/8 border border-brand-blue/20 blur-sm" />

              {/* City pins */}
              {MAP_PINS.map((pin) => (
                <Link
                  key={pin.slug}
                  href={`/locations/${pin.slug}`}
                  className="absolute group z-10 -translate-x-1/2 -translate-y-full"
                  style={{ top: pin.top, left: pin.left }}
                >
                  <div className="flex flex-col items-center">
                    <span className="hidden sm:block text-[11px] font-bold text-gray-800 bg-white/90 backdrop-blur-sm rounded-md px-2 py-0.5 shadow-sm mb-1 whitespace-nowrap group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      {pin.name}
                    </span>
                    <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-brand-blue border-2 border-white shadow-lg group-hover:scale-150 transition-transform relative">
                      <div className="absolute inset-0 rounded-full bg-brand-blue/50 animate-ping" />
                    </div>
                  </div>
                </Link>
              ))}

              {/* Map legend */}
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-[10px] text-gray-700 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-brand-blue" />
                  <span>Ubicacion de servicio</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-0 border-t border-dashed border-gray-400" />
                  <span>Autopista principal</span>
                </div>
              </div>

              {/* Compass */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm text-[10px] font-bold text-gray-600">
                N
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center reveal">
            Ciudades Que Atendemos
          </h2>
          <p className="text-gray-700 text-lg text-center mb-12 max-w-2xl mx-auto reveal">
            Haga clic en cualquier ciudad para conocer mas sobre nuestros servicios gratuitos de remolque de propiedad privada y control de estacionamiento en esa area.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {SERVICE_AREAS.map((area, i) => (
              <Link
                key={area.slug}
                href={`/locations/${area.slug}`}
                className="glass-card-white rounded-2xl p-6 text-center border-glow-blue group reveal hover:shadow-xl transition-all duration-300"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="w-10 h-10 bg-blue-50 text-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div className="text-lg font-bold font-heading text-blue-950 mb-1 group-hover:text-primary transition-colors">{area.name}</div>
                <div className="text-xs text-gray-500">Arizona</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Por Que Es Gratis */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Por Que Es Gratis para los Propietarios?
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  En Axle Towing &amp; Impound, creemos que los propietarios no deberian pagar para hacer cumplir sus propias reglas de estacionamiento. Nuestros ingresos provienen de las tarifas de deposito cobradas a los infractores — no de usted.
                </p>
                <p>
                  Proporcionamos senalizacion que cumple con la ley, patrullaje regular, un portal de administracion de propiedades y respuesta 24/7 — todo a costo absolutamente cero para propietarios y administradores en toda el area metropolitana de Phoenix.
                </p>
              </div>
            </div>
            <div className="reveal">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { text: "Senalizacion Instalada Gratis" },
                  { text: "Respuesta de Emergencia 24/7" },
                  { text: "Portal de Propiedad en Linea" },
                  { text: "$0 Costo para Propietarios" },
                ].map((item, i) => (
                  <div key={item.text} className="glass-card-white rounded-xl p-5 border-glow-blue text-center reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Proteja Su Propiedad Hoy</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Unase a miles de propietarios en el area metropolitana de Phoenix que confian en Axle Towing &amp; Impound para remolque gratuito de propiedad privada y control de estacionamiento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary">
              Llame {COMPANY.phone}
            </a>
            <Link href="/es/cotizacion" className="btn-secondary">
              Cotizacion Gratis
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
