import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Precios — Servicios de Grua y Control de Estacionamiento | Axle Towing & Impound",
  description:
    "Servicios de remolque de propiedad privada y control de estacionamiento GRATIS para propietarios en Phoenix. Sin costo mensual, sin contrato a largo plazo, sin cargo por instalacion de senalizacion.",
  alternates: {
    canonical: `https://${COMPANY.domain}/es/precios`,
    languages: {
      en: `https://${COMPANY.domain}/pricing`,
      es: `https://${COMPANY.domain}/es/precios`,
    },
  },
  openGraph: {
    title: "Precios — Grua Gratis para Propietarios | Axle Towing & Impound",
    description:
      "Control de estacionamiento profesional a costo cero para propietarios en el area metropolitana de Phoenix.",
    locale: "es_US",
    alternateLocale: "en_US",
  },
};

const INCLUDED_FEATURES = [
  { label: "Patrullaje de Estacionamiento 24/7", icon: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" },
  { label: "Instalacion de Senalizacion", icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15" },
  { label: "Remocion de Vehiculos No Autorizados", icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" },
  { label: "Documentacion y Reportes Completos", icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" },
  { label: "Portal de Propiedad en Linea", icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" },
  { label: "Cumplimiento de Carriles de Bomberos", icon: "M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" },
  { label: "Cumplimiento de Espacios para Discapacitados", icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Gestion de Estacionamiento de Visitantes", icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" },
];

const COMPARISON_ROWS = [
  { feature: "Costo Mensual", axle: "$0 / mes", industry: "$200 - $500 / mes" },
  { feature: "Instalacion de Senalizacion", axle: "Incluida", industry: "$500 - $2,000 unico pago" },
  { feature: "Patrullaje 24/7", axle: "Incluido", industry: "$50 - $100 / hora" },
  { feature: "Remocion de Vehiculos", axle: "Incluida", industry: "$75 - $150 por remolque" },
  { feature: "Documentacion", axle: "Incluida", industry: "Cargo extra" },
  { feature: "Portal en Linea", axle: "Incluido", industry: "Raramente ofrecido" },
  { feature: "Duracion del Contrato", axle: "Sin contrato a largo plazo", industry: "Minimo 12 - 24 meses" },
  { feature: "Cargo de Instalacion", axle: "$0", industry: "$500 - $1,500" },
];

export default function PreciosPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="parallax-container min-h-[55vh] flex items-center relative">
        <div className="parallax-bg" style={{ backgroundImage: `url(/images/hero-parking-lot.jpg)` }} />
        <div className="absolute inset-0 gradient-overlay-blue z-[1]" />
        <div className="absolute inset-0 gradient-overlay-dark z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <nav className="flex items-center gap-2 text-sm text-white/80 mb-6 reveal">
            <Link href="/es" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-white">Precios</span>
          </nav>
          <div className="mb-4">
            <Link href="/pricing" className="inline-flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors glass rounded-full px-4 py-2">
              <span>English</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
              </svg>
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight reveal">
            Nuestros <span className="text-gradient">Precios</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed reveal delay-200">
            Servicios de remolque y control de estacionamiento completamente gratis para propietarios. Sin costos ocultos, sin contratos a largo plazo.
          </p>
        </div>
      </section>

      {/* ===== PRECIO PRINCIPAL ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-blue-950 mb-4">Control de Estacionamiento para Propietarios</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Todo incluido, sin cargos ocultos. Nuestro servicio es 100% gratuito para propietarios y administradores de propiedades.
            </p>
          </div>
          <div className="reveal">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-blue-100">
              <div className="bg-gradient-to-r from-primary to-blue-700 px-8 md:px-12 py-10 text-center">
                <span className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 mb-4">
                  <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-white font-semibold text-sm">Servicio Completamente Gratuito</span>
                </span>
                <div className="text-7xl md:text-8xl font-bold text-white font-heading">$0</div>
                <p className="text-white/90 mt-3 text-lg">por mes &mdash; para siempre</p>
              </div>
              <div className="bg-white px-8 md:px-12 py-10">
                <h3 className="text-lg font-bold font-heading text-blue-950 mb-6">Todo Incluido:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {INCLUDED_FEATURES.map((feature) => (
                    <div key={feature.label} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium text-sm">{feature.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Link href="/es/cotizacion" className="btn-primary text-lg">
                    Solicite Su Cotizacion Gratis
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPARACION ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">Comparacion</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-blue-950 mt-3 mb-4">Axle Towing vs. La Industria</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-primary to-cta rounded-full" />
          </div>
          <div className="reveal">
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg bg-white">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-950 text-white">
                    <th className="text-left px-6 py-4 font-heading text-sm uppercase tracking-wider">Caracteristica</th>
                    <th className="text-center px-6 py-4 font-heading text-sm uppercase tracking-wider">Axle Towing</th>
                    <th className="text-center px-6 py-4 font-heading text-sm uppercase tracking-wider">Promedio de la Industria</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-sm font-bold text-green-600">{row.axle}</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500">{row.industry}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REUBICACION DE VEHICULOS (SERVICIO DE PAGO) ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card-white rounded-2xl p-8 md:p-12 border-glow-blue reveal">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-amber-500/20 border border-amber-400/30 text-amber-600 text-sm font-semibold px-3 py-1 rounded-full">
                Servicio de Pago
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-blue-950 mb-4">Reubicacion de Vehiculos</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Nuestro servicio de reubicacion de vehiculos es un servicio de pago para mover vehiculos durante proyectos de construccion, reparaciones de asfalto y mantenimiento de propiedad. Los precios varian segun la ubicacion y el numero de vehiculos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/es/cotizacion" className="btn-primary">
                Solicitar Cotizacion
              </Link>
              <a href={`tel:${COMPANY.phone}`} className="btn-secondary">
                Llame: {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== POR QUE ES GRATIS ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-blue-950 mb-6">Por Que Es Gratis para los Propietarios?</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  En Axle Towing &amp; Impound, creemos que los propietarios no deberian tener que pagar para hacer cumplir sus propias reglas de estacionamiento. Nuestros ingresos provienen de las tarifas de deposito cobradas a los infractores — no de usted.
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

      {/* ===== CTA ===== */}
      <section className="relative py-20 overflow-hidden" style={{ background: "linear-gradient(160deg, rgba(15,31,54,0.95) 0%, rgba(27,42,63,0.92) 50%, rgba(30,107,184,0.85) 100%)" }}>
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-4">Comience Hoy &mdash; Sin Costo para Usted</h2>
          <p className="text-white/95 text-lg mb-10 max-w-2xl mx-auto">
            Nuestros servicios de remolque y control de estacionamiento son completamente gratuitos para propietarios. Dejenos manejar sus problemas de estacionamiento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary text-lg">
              Llame {COMPANY.phone}
            </a>
            <Link href="/es/cotizacion" className="btn-secondary text-lg">
              Cotizacion Gratis
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
