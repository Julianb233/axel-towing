import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import AnimatedCounter from "@/components/AnimatedCounter";

export const metadata: Metadata = {
  title: "Sobre Nosotros — Expertos en Grua de Propiedad Privada en Phoenix | Axle Towing & Impound",
  description:
    "Axle Towing & Impound es una empresa de grua en Phoenix fundada en 2021, especializada en remolque gratuito de propiedad privada, control de estacionamiento y servicios de deposito para administradores de propiedades en el area metropolitana de Phoenix.",
  alternates: {
    canonical: `https://${COMPANY.domain}/es/nosotros`,
    languages: {
      en: `https://${COMPANY.domain}/about`,
      es: `https://${COMPANY.domain}/es/nosotros`,
    },
  },
  openGraph: {
    title: "Sobre Nosotros — Axle Towing & Impound",
    description:
      "Conozca a Axle Towing & Impound — empresa de grua profesional en Phoenix especializada en remolque gratuito de propiedad privada.",
    locale: "es_US",
    alternateLocale: "en_US",
  },
};

const STATS = [
  { end: 30, suffix: "+", label: "Anos de Experiencia Combinada" },
  { end: 6, suffix: "+", label: "Gruas en Nuestra Flota" },
  { end: 8, suffix: "", label: "Ciudades Atendidas" },
  { end: 1000, suffix: "s+", label: "Propiedades Atendidas" },
];

const VALUES = [
  {
    title: "Integridad",
    desc: "Cada remolque esta documentado, cada proceso cumple con la ley, y cada interaccion se maneja con total transparencia.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Profesionalismo",
    desc: "Nuestros conductores estan capacitados, certificados y son corteses. Representamos su propiedad con el mismo cuidado que usted espera de su propio equipo.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "Comunidad",
    desc: "Somos una empresa de Phoenix que sirve a comunidades de Phoenix. Invertimos en los vecindarios que atendemos y tratamos cada propiedad como la nuestra.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

const DIFFERENTIATORS = [
  {
    title: "Tecnologia Moderna, Seguimiento en Tiempo Real",
    desc: "Mientras otras empresas de grua dependen de registros en papel y llamadas telefonicas, nosotros ofrecemos un portal digital con seguimiento de remolques en tiempo real, reportes automatizados y notificaciones instantaneas.",
  },
  {
    title: "Costo Cero para Propietarios",
    desc: "Nuestros servicios son completamente gratuitos para propietarios y administradores de propiedades. Nuestros ingresos provienen de las tarifas de deposito cobradas a los infractores, no de usted.",
  },
  {
    title: "Cumplimiento Completo con las Leyes de Arizona",
    desc: "Cada remolque cumple con ARS 28-1104 y todas las regulaciones estatales y locales. Instalamos senalizacion que cumple con los requisitos legales y documentamos cada proceso meticulosamente.",
  },
  {
    title: "Mas de 30 Anos de Experiencia Combinada",
    desc: "Nuestro equipo trae mas de tres decadas de experiencia combinada en la industria del remolque. Conocemos el area metropolitana de Phoenix mejor que nadie.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={IMAGES.hero.truck} alt="Flota de gruas de Axle Towing" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(135deg, rgba(12,113,195,0.85) 0%, rgba(26,26,46,0.9) 100%)" }} />
        <div className="absolute inset-0 z-[2] grain-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <nav className="flex items-center gap-2 text-sm text-white/80 mb-6 reveal">
            <Link href="/es" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-white">Sobre Nosotros</span>
          </nav>
          <div className="mb-4">
            <Link href="/about" className="inline-flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors glass rounded-full px-4 py-2">
              <span>English</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
              </svg>
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight reveal">
            Sobre <span style={{ WebkitTextFillColor: "transparent", background: "linear-gradient(135deg, #2ea3f2, #6bbbf5)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>Nosotros</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed reveal delay-200">
            Axle Towing &amp; Impound es la empresa de grua de confianza en Phoenix, especializada en remolque gratuito de propiedad privada y control de estacionamiento para administradores de propiedades.
          </p>
        </div>
      </section>

      {/* ===== NUESTRA HISTORIA ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">Nuestra Historia</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-blue-950 mt-3 mb-6">Fundada en 2021 en Phoenix, Arizona</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Axle Towing &amp; Impound fue fundada con una mision simple: proporcionar servicios de remolque profesionales y confiables para propietarios y administradores de propiedades en el area metropolitana de Phoenix — completamente gratis.
                </p>
                <p>
                  Nuestro equipo trae mas de 30 anos de experiencia combinada en la industria del remolque. Operamos desde dos ubicaciones estrategicas — Apache Junction y Phoenix — para garantizar tiempos de respuesta rapidos en toda la zona metropolitana.
                </p>
                <p>
                  A diferencia de otras empresas de grua, nuestros ingresos provienen de las tarifas de deposito cobradas a los infractores de estacionamiento, no de los propietarios. Esto significa que usted obtiene proteccion completa para su propiedad sin ningun costo.
                </p>
              </div>
            </div>
            <div className="reveal-right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image src={IMAGES.hero.truck} alt="Grua de Axle Towing" width={600} height={400} className="object-cover w-full h-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ESTADISTICAS ===== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={IMAGES.hero.parkingLot} alt="Estacionamiento en Phoenix" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(135deg, rgba(224,43,32,0.6) 0%, rgba(6,26,51,0.9) 60%)" }} />
        <div className="absolute inset-0 z-[2] grain-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-red-300 font-semibold text-sm uppercase tracking-wider font-heading">En Numeros</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mt-3 mb-4">Axle Towing en Numeros</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-accent to-cta rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((counter, i) => (
              <div key={counter.label} className="glass-card rounded-2xl p-8 reveal" style={{ transitionDelay: `${i * 150}ms` }}>
                <AnimatedCounter end={counter.end} suffix={counter.suffix} label={counter.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NUESTROS VALORES ===== */}
      <section className="py-24 bg-blue-950 relative">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-cta font-semibold text-sm uppercase tracking-wider font-heading">Lo Que Nos Define</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mt-3 mb-4">Nuestros Valores</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-primary to-cta rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((value, i) => (
              <div key={value.title} className="glass-card rounded-2xl p-8 reveal" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center mb-5 text-blue-200">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold font-heading text-white mb-3">{value.title}</h3>
                <p className="text-blue-200 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUE NOS DIFERENCIA ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">Nuestra Ventaja</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-blue-950 mt-3 mb-4">Que Nos Diferencia</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-primary to-cta rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DIFFERENTIATORS.map((item, i) => (
              <div key={item.title} className="glass-card-white rounded-2xl p-8 border-glow-blue reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <h3 className="text-xl font-bold font-heading text-blue-950 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== UBICACIONES ===== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">Donde Estamos</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-blue-950 mt-3 mb-4">Nuestras Ubicaciones</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-primary to-cta rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMPANY.addresses.map((addr) => (
              <div key={addr.label} className="glass-card-white rounded-2xl p-8 border-glow-blue reveal">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 font-heading text-lg">Oficina {addr.label}</h3>
                    <p className="text-gray-600 mt-1">
                      {addr.street}<br />
                      {addr.city}, {addr.state} {addr.zip}
                    </p>
                    <p className="text-sm text-primary font-medium mt-2">Lunes a Viernes: 9am-5pm</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(160deg, rgba(15,31,54,0.95) 0%, rgba(27,42,63,0.92) 50%, rgba(30,107,184,0.85) 100%)" }}>
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white reveal">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading mb-4">Listo para Proteger Su Propiedad?</h2>
          <p className="text-xl text-white/95 mb-10 max-w-2xl mx-auto">Comience con una consulta gratuita. Nuestros servicios de control de estacionamiento no le cuestan absolutamente nada.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary text-lg inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Llame Ahora: {COMPANY.phone}
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
