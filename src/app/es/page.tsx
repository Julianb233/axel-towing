import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COMPANY, SERVICES, SERVICE_AREAS } from "@/lib/constants";
import AnimatedCounter from "@/components/AnimatedCounter";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Servicios de Grua Profesionales en Phoenix | Axle Towing & Impound",
  description:
    "Axle Towing & Impound ofrece servicios de grua profesionales, control de estacionamiento y remolque de propiedad privada en el area metropolitana de Phoenix — GRATIS para propietarios.",
  alternates: {
    canonical: `https://${COMPANY.domain}/es`,
    languages: {
      "en": `https://${COMPANY.domain}`,
      "es": `https://${COMPANY.domain}/es`,
    },
  },
  openGraph: {
    title: "Servicios de Grua Profesionales en Phoenix",
    description:
      "Remolque y control de estacionamiento profesional a costo cero para propietarios en Phoenix.",
    locale: "es_US",
    alternateLocale: "en_US",
  },
};

const SERVICE_CARDS_ES = [
  { title: "Remolque de Propiedad Privada", desc: "Retire vehiculos no autorizados sin costo para usted", slug: "private-property-impounds" },
  { title: "Control de Estacionamiento", desc: "Patrullaje profesional para garajes y lotes privados", slug: "parking-enforcement" },
  { title: "Reubicacion de Vehiculos", desc: "Movimiento rapido de vehiculos para reparaciones y mantenimiento", slug: "vehicle-relocations" },
  { title: "Remolque para HOA", desc: "Programas de grua personalizados para asociaciones de propietarios", slug: "hoa-towing" },
  { title: "Remolque para Apartamentos", desc: "Mantenga organizado el estacionamiento de su complejo", slug: "apartment-towing" },
  { title: "Propiedad Comercial", desc: "Proteja su propiedad comercial del estacionamiento no autorizado", slug: "commercial-property-towing" },
];

const TESTIMONIALS_ES = [
  {
    quote: "Axle Towing transformo la situacion de estacionamiento de nuestro complejo de apartamentos de la noche a la manana. Pasamos de quejas diarias a cero vehiculos no autorizados en menos de un mes.",
    name: "Sarah Mitchell",
    role: "Administradora de Propiedades, Phoenix",
  },
  {
    quote: "Como presidente de la junta de HOA, estaba esceptico sobre servicios de grua gratuitos. Axle me demostro lo contrario — su programa de senalizacion y tiempos de respuesta son excepcionales.",
    name: "James Richardson",
    role: "Presidente de HOA, Scottsdale",
  },
  {
    quote: "Administramos tres plazas comerciales y Axle se encarga de todas. Su portal hace que el seguimiento sea facil, y el hecho de que no nos cueste nada es increible.",
    name: "Linda Kerrigan",
    role: "Propietaria Comercial, Mesa",
  },
];

export default function SpanishHomePage() {
  return (
    <>
      {/* ========== 1. HERO SECTION ========== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={IMAGES.hero.truck} alt="Flota de gruas de Axle Towing" fill className="object-cover" priority />
        </div>
        <div
          className="absolute inset-0 z-[1]"
          style={{ background: "linear-gradient(135deg, rgba(12,113,195,0.85) 0%, rgba(26,26,46,0.9) 100%)" }}
        />
        <div className="absolute inset-0 z-[2] grain-overlay" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-32">
          <div className="mb-4">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors glass rounded-full px-4 py-2">
              <span>English</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
              </svg>
            </Link>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6 animate-fade-in-up">
            Servicios de Grua
            <br />
            <span style={{ WebkitTextFillColor: "transparent", background: "linear-gradient(135deg, #2ea3f2, #6bbbf5)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>
              Profesionales en Phoenix
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-6 animate-fade-in-up delay-200 leading-relaxed">
            Control de estacionamiento profesional y gestion de vehiculos a costo cero para propietarios.
          </p>
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/40 text-green-200 px-6 py-3 rounded-full text-lg font-bold mb-10 animate-fade-in-up delay-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Servicio GRATUITO para propietarios
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <Link href="/es/contacto" className="btn-primary text-lg px-10 py-4">
              Cotizacion Gratis
            </Link>
            <a href={`tel:${COMPANY.phone}`} className="btn-secondary text-lg px-10 py-4">
              Llame Ahora: {COMPANY.phone}
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-16 animate-fade-in-up delay-500">
            {[
              { label: "Desde 2021", icon: "\u{1F4C5}" },
              { label: "6+ Gruas", icon: "\u{1F69B}" },
              { label: "8 Ciudades", icon: "\u{1F4CD}" },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-2xl px-6 py-3 flex items-center gap-3 animate-float">
                <span className="text-2xl">{stat.icon}</span>
                <span className="font-heading font-semibold text-white tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 2. SERVICIOS ========== */}
      <section id="servicios" className="py-24 bg-blue-950 relative">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-cta font-semibold text-sm uppercase tracking-wider font-heading">Lo Que Hacemos</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mt-3 mb-4">Nuestros Servicios</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-primary to-cta rounded-full mb-6" />
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Soluciones integrales de remolque para HOAs, complejos de apartamentos y propiedades comerciales.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_CARDS_ES.map((service, i) => (
              <Link key={service.title} href={`/services/${service.slug}`} className="glass-card rounded-2xl p-8 group cursor-pointer reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-cta transition-colors">{service.title}</h3>
                <p className="text-blue-200 leading-relaxed mb-4">{service.desc}</p>
                <span className="inline-flex items-center text-cta font-semibold text-sm group-hover:gap-2 transition-all">
                  Mas Informacion
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/es/servicios" className="btn-secondary">
              Ver Todos los Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* ========== 3. POR QUE ELEGIRNOS ========== */}
      <section className="relative py-32 overflow-hidden clip-diagonal-top">
        <div className="absolute inset-0 z-0">
          <Image src={IMAGES.hero.parkingLot} alt="Estacionamiento en Phoenix" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(135deg, rgba(224,43,32,0.6) 0%, rgba(6,26,51,0.9) 60%)" }} />
        <div className="absolute inset-0 z-[2] grain-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-red-300 font-semibold text-sm uppercase tracking-wider font-heading">Por Que Nosotros</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mt-3 mb-4">Por Que Elegir Axle Towing?</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-accent to-cta rounded-full mb-6" />
            <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
              No somos solo otra empresa de gruas. Somos su socio dedicado en control de estacionamiento, comprometidos a proteger su propiedad — todo a costo absolutamente cero para usted.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { end: 5, suffix: "+", label: "Anos de Experiencia" },
              { end: 6, suffix: "+", label: "Gruas" },
              { end: 8, suffix: "", label: "Ciudades" },
              { end: 0, prefix: "$", suffix: "", label: "Costo para Propietarios" },
            ].map((counter, i) => (
              <div key={counter.label} className="glass-card rounded-2xl p-8 reveal" style={{ transitionDelay: `${i * 150}ms` }}>
                <AnimatedCounter end={counter.end} prefix={counter.prefix || ""} suffix={counter.suffix} label={counter.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 4. COMO FUNCIONA ========== */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">Proceso Simple</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-blue-950 mt-3 mb-4">Como Funciona</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-primary to-cta rounded-full mb-6" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comenzar es simple. Tres pasos faciles y sus problemas de estacionamiento quedan resueltos — permanentemente.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-primary via-cta to-primary" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  step: "1", title: "Contactenos",
                  desc: "Comuniquese para una consulta gratuita. Evaluamos su propiedad y disenamos un programa de remolque personalizado.",
                  icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>),
                },
                {
                  step: "2", title: "Evaluamos Su Propiedad",
                  desc: "Nuestro equipo visita su propiedad, evalua las necesidades de estacionamiento e instala senalizacion — todo sin costo.",
                  icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>),
                },
                {
                  step: "3", title: "Nos Encargamos de Todo",
                  desc: "Patrullamos, hacemos cumplir y removemos vehiculos no autorizados profesionalmente. Protegemos su propiedad 24/7.",
                  icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>),
                },
              ].map((item, i) => (
                <div key={item.step} className="text-center reveal" style={{ transitionDelay: `${i * 200}ms` }}>
                  <div className="relative mx-auto mb-6">
                    <div className="w-32 h-32 mx-auto rounded-2xl glass-card-white border-glow-blue flex flex-col items-center justify-center gap-2 p-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold font-heading text-lg">{item.step}</div>
                      <div className="text-primary">{item.icon}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-blue-950 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== 5. TESTIMONIOS ========== */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-cta/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-cta font-semibold text-sm uppercase tracking-wider font-heading">Testimonios</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mt-3 mb-4">La Confianza de Nuestros Clientes</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-primary to-cta rounded-full mb-6" />
            <p className="text-blue-200/60 text-lg">Vea lo que dicen nuestros clientes en el area metropolitana de Phoenix.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_ES.map((t, i) => (
              <div key={t.name} className="glass-card rounded-2xl p-8 reveal" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="flex gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-blue-100/80 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-semibold text-white font-heading">{t.name}</div>
                  <div className="text-sm text-blue-300">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 6. AREAS DE SERVICIO ========== */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">Area de Cobertura</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-blue-950 mt-3 mb-4">Sirviendo el Area Metropolitana de Phoenix</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-primary to-cta rounded-full mb-6" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Proporcionamos servicios de remolque y control de estacionamiento en toda el area metropolitana de Phoenix.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {SERVICE_AREAS.map((area, i) => (
              <div key={area.slug} className="glass-card-white rounded-2xl p-6 text-center border-glow-blue reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-10 h-10 bg-blue-50 text-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div className="text-lg font-bold font-heading text-blue-950 mb-2">{area.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 7. CTA BANNER ========== */}
      <section className="relative py-24 clip-diagonal-top overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(135deg, #e02b20 0%, #c42219 50%, #a81d14 100%)" }} />
        <div className="absolute inset-0 z-[1] grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white reveal">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">Listo para Proteger Su Propiedad?</h2>
          <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">Comience con una consulta gratuita. Nuestros servicios de control de estacionamiento no le cuestan absolutamente nada.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY.phone}`} className="bg-white text-red-600 font-bold font-heading px-10 py-4 rounded-lg text-lg uppercase tracking-wider hover:bg-blue-50 transition-colors hover:-translate-y-0.5 transform inline-flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Llame Ahora: {COMPANY.phone}
            </a>
            <Link href="/es/contacto" className="border-2 border-white text-white font-bold font-heading px-10 py-4 rounded-lg text-lg uppercase tracking-wider hover:bg-white/10 transition-colors hover:-translate-y-0.5 transform inline-flex items-center justify-center">
              Cotizacion Gratis
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
