"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

/* -- Parallax Hook -- */
function useParallax() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      ref.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return ref;
}

const PASOS = [
  {
    step: "1",
    title: "Comuniquese Con Nosotros",
    desc: `Llame al ${COMPANY.phone} o use el formulario a continuacion con la informacion de su vehiculo. Confirmaremos si su vehiculo esta en nuestro sistema.`,
  },
  {
    step: "2",
    title: "Reuna Sus Documentos",
    desc: "Traiga su identificacion con foto valida, registro o titulo del vehiculo, y metodo de pago a nuestro patio de deposito.",
  },
  {
    step: "3",
    title: "Visite Nuestro Patio",
    desc: "Venga a nuestra ubicacion de Apache Junction o Phoenix durante el horario de oficina para completar el proceso de recuperacion.",
  },
  {
    step: "4",
    title: "Recupere Su Vehiculo",
    desc: "Una vez que la documentacion es verificada y las tarifas son pagadas, se reunira con su vehiculo y podra irse.",
  },
];

const REQUISITOS = [
  {
    title: "Identificacion con Foto",
    desc: "Identificacion con foto emitida por el gobierno (licencia de conducir, ID estatal o pasaporte).",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
      </svg>
    ),
  },
  {
    title: "Registro o Titulo del Vehiculo",
    desc: "Tarjeta de registro actual o titulo del vehiculo que demuestre la propiedad del vehiculo depositado.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Metodo de Pago",
    desc: "Efectivo, tarjeta de credito o tarjeta de debito para las tarifas aplicables de deposito y almacenamiento.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    title: "Liberacion de Gravamen (si aplica)",
    desc: "Si su vehiculo tiene un gravamen, necesitara una carta de autorizacion del titular del gravamen.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

export default function UbicarVehiculoPage() {
  const parallaxRef = useParallax();
  const [searched, setSearched] = useState(false);

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    setSearched(true);
  }

  return (
    <>
      {/* -- Hero -- */}
      <section className="parallax-container relative min-h-[50vh] flex items-center text-white overflow-hidden">
        <div
          ref={parallaxRef}
          className="parallax-bg"
          style={{ backgroundImage: `url(/images/optimized/axle-towing-contact-phoenix-arizona.webp)` }}
        />
        <div className="absolute inset-0 gradient-overlay-blue z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[2]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <nav className="flex items-center gap-2 text-sm text-white/80 mb-6 reveal">
            <Link href="/es" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-white">Ubicar Vehiculo</span>
          </nav>
          <div className="mb-4">
            <Link href="/locate-vehicle" className="inline-flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors glass rounded-full px-4 py-2">
              <span>English</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
              </svg>
            </Link>
          </div>
          <div className="reveal max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Ubicar Su <span className="text-gradient">Vehiculo</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed">
              Encuentre y recupere su vehiculo remolcado del deposito de Axle Towing &amp; Impound. Busque por numero de placa y sepa que documentos traer.
            </p>
          </div>
        </div>
      </section>

      {/* -- Search Section -- */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-form rounded-2xl p-8 md:p-10 shadow-lg reveal">
            <h2 className="text-2xl font-bold text-blue-900 mb-2 font-heading">Buscar Su Vehiculo</h2>
            <p className="text-gray-700 mb-6">
              Ingrese su numero de placa o numero VIN para verificar si su vehiculo esta en nuestro deposito.
            </p>

            {searched ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2 font-heading">Busqueda en Proceso</h3>
                <p className="text-gray-600 mb-4">
                  Para verificar el estado de su vehiculo, por favor llame a nuestro equipo directamente.
                </p>
                <a href={`tel:${COMPANY.phone}`} className="btn-primary inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Llame {COMPANY.phone}
                </a>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSearch}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Numero de Placa *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white uppercase"
                    placeholder="ABC1234"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Estado de la Placa
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white">
                    <option value="AZ">Arizona</option>
                    <option value="">Otro Estado</option>
                  </select>
                </div>
                <button type="submit" className="btn-primary w-full text-center justify-center">
                  Buscar Vehiculo
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* -- Pasos para Recuperar -- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">Proceso de Recuperacion</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-blue-950 mt-3 mb-4">Como Recuperar Su Vehiculo</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-primary to-cta rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PASOS.map((item, i) => (
              <div key={item.step} className="text-center reveal" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary text-white flex items-center justify-center font-bold font-heading text-2xl mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold font-heading text-blue-950 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Requisitos -- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">Que Traer</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-blue-950 mt-3 mb-4">Documentos Requeridos</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-primary to-cta rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REQUISITOS.map((req, i) => (
              <div key={req.title} className="glass-card-white rounded-2xl p-6 border-glow-blue flex items-start gap-4 reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center shrink-0">
                  {req.icon}
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 font-heading">{req.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{req.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Ubicaciones -- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-blue-950 mb-4">Ubicaciones del Deposito</h2>
            <p className="text-gray-600 text-lg">Visite cualquiera de nuestras ubicaciones durante el horario de atencion.</p>
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
                    <h3 className="font-bold text-blue-900 font-heading text-lg">Deposito {addr.label}</h3>
                    <p className="text-gray-600 mt-1">
                      {addr.street}<br />
                      {addr.city}, {addr.state} {addr.zip}
                    </p>
                    <div className="text-sm text-gray-600 mt-2 space-y-0.5">
                      <p>Lunes a Viernes: 9am-5pm</p>
                      <p>Sabado: con cita previa</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Emergency Banner -- */}
      <section className="relative py-16 text-white overflow-hidden" style={{ background: "linear-gradient(160deg, rgba(15,31,54,1) 0%, rgba(27,42,63,0.95) 50%, rgba(30,107,184,0.9) 100%)" }}>
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-4">
            Necesita Ayuda Inmediata?
          </h2>
          <p className="text-lg text-white/90 mb-6">
            Nuestro equipo de despacho esta disponible las 24 horas para ayudarle con preguntas sobre su vehiculo.
          </p>
          <a
            href={`tel:${COMPANY.phone}`}
            className="btn-primary text-xl inline-flex items-center gap-3"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Llame {COMPANY.phone} Ahora
          </a>
        </div>
      </section>
    </>
  );
}
