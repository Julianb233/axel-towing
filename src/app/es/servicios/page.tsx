import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nuestros Servicios de Grua y Remolque",
  description:
    "Axle Towing & Impound ofrece remolque de propiedad privada, control de estacionamiento, reubicacion de vehiculos, remolque HOA, apartamentos y propiedad comercial en Phoenix — todo gratis para propietarios.",
  alternates: {
    canonical: `https://${COMPANY.domain}/es/servicios`,
    languages: {
      "en": `https://${COMPANY.domain}/services`,
      "es": `https://${COMPANY.domain}/es/servicios`,
    },
  },
  openGraph: {
    title: "Servicios de Grua Profesionales | Axle Towing & Impound",
    description: "Soluciones integrales de remolque para todo tipo de propiedad — gratis para propietarios.",
    locale: "es_US",
    alternateLocale: "en_US",
  },
};

const SERVICES_ES = [
  {
    title: "Remolque de Propiedad Privada",
    slug: "private-property-impounds",
    desc: "Removemos vehiculos no autorizados de su propiedad privada a costo cero para usted. Nuestro servicio cumple con todas las leyes de Arizona (ARS) y cada remolque es documentado con fotos y marcas de tiempo. Proporcionamos toda la senalizacion requerida e instalacion sin cargo.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Control de Estacionamiento",
    slug: "parking-enforcement",
    desc: "Patrullaje profesional y cumplimiento para garajes de estacionamiento y lotes privados. Nuestros equipos capacitados identifican violaciones, documentan infracciones y toman accion rapida para mantener su estacionamiento organizado y accesible.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
      </svg>
    ),
  },
  {
    title: "Reubicacion de Vehiculos",
    slug: "vehicle-relocations",
    desc: "Mueva vehiculos rapidamente para reparaciones de asfalto, mantenimiento de propiedad y construccion. Coordinamos con su equipo para reubicar vehiculos de manera eficiente, minimizando interrupciones para sus inquilinos y operaciones.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    title: "Remolque para HOA",
    slug: "hoa-towing",
    desc: "Programas de remolque personalizados para asociaciones de propietarios. Trabajamos con su junta directiva para establecer reglas claras, instalar senalizacion apropiada y hacer cumplir las politicas de estacionamiento de su comunidad de manera profesional y consistente.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: "Remolque para Apartamentos",
    slug: "apartment-towing",
    desc: "Mantenga organizado y en cumplimiento el estacionamiento de su complejo de apartamentos. Nuestro programa incluye senalizacion, patrullaje regular, y un portal digital para que los administradores de propiedades manejen solicitudes de remolque facilmente.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
      </svg>
    ),
  },
  {
    title: "Remolque de Propiedad Comercial",
    slug: "commercial-property-towing",
    desc: "Proteja su propiedad comercial del estacionamiento no autorizado. Ya sea un centro comercial, plaza de oficinas, instalacion medica o estacionamiento privado, nuestro equipo garantiza que sus espacios esten disponibles para sus clientes y empleados.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ),
  },
];

const STATS_ES = [
  { value: "$0", label: "Costo para Propietarios" },
  { value: "30min", label: "Tiempo Promedio de Respuesta" },
  { value: "24/7", label: "Despacho Disponible" },
  { value: "100%", label: "Cumplimiento ARS" },
];

export default function ServiciosPage() {
  return (
    <>
      {/* ===== PARALLAX HERO ===== */}
      <section
        className="parallax-fixed relative min-h-[60vh] flex items-center"
        style={{ backgroundImage: `url(/images/hero-parking-lot.jpg)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/80 to-primary/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <nav className="flex items-center gap-2 text-sm text-white/80 mb-6 reveal">
            <Link href="/es" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-white">Servicios</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 reveal">
            Nuestros Servicios
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed reveal delay-200">
            Desde remolque de propiedad privada hasta control de estacionamiento y reubicacion de vehiculos, {COMPANY.name} ofrece soluciones integrales para todo tipo de propiedad &mdash; todo a costo cero para propietarios.
          </p>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-4 reveal">
            Soluciones Integrales de Remolque
          </h2>
          <p className="text-white/80 text-center text-lg mb-12 max-w-2xl mx-auto reveal delay-100">
            Elija el servicio que se adapte a su tipo de propiedad. Cada programa es personalizado y completamente gratis para propietarios.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_ES.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-2xl p-8 reveal bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/15 transition-all hover:-translate-y-1"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center mb-5 text-blue-200 group-hover:bg-white/25 transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                  {service.title}
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-blue-300 group-hover:text-white transition-colors">
                  Mas Informacion
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== POR QUE LOS PROPIETARIOS NOS ELIGEN ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-blue-950 text-center mb-4 reveal">
            Por Que los Propietarios Nos Eligen
          </h2>
          <p className="text-body-text text-center text-lg mb-12 max-w-2xl mx-auto reveal delay-100">
            Numeros que hablan por si mismos.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS_ES.map((stat, i) => (
              <div
                key={stat.label}
                className="glass-card-white rounded-2xl p-8 text-center reveal"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="font-heading text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <p className="text-body-text text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="relative py-20 md:py-24 overflow-hidden" style={{ background: "linear-gradient(160deg, rgba(15,31,54,0.95) 0%, rgba(27,42,63,0.92) 50%, rgba(30,107,184,0.85) 100%)" }}>
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 reveal">
            Comience Hoy &mdash; Sin Costo para Usted
          </h2>
          <p className="text-white/95 text-lg mb-10 max-w-2xl mx-auto reveal delay-100">
            Nuestros servicios de remolque y control de estacionamiento son completamente gratuitos para propietarios y administradores. Dejenos manejar sus problemas de estacionamiento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-200">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary text-lg">
              Llame {COMPANY.phone}
            </a>
            <Link href="/es/contacto" className="btn-secondary text-lg">
              Cotizacion Gratis
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
