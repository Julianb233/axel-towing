"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import Link from "next/link";
import { COMPANY, SERVICE_AREAS } from "@/lib/constants";

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

const PROPERTY_TYPES_ES = [
  { id: "apartment", label: "Complejo de Apartamentos" },
  { id: "hoa", label: "Comunidad HOA" },
  { id: "commercial", label: "Propiedad Comercial" },
  { id: "office", label: "Edificio de Oficinas" },
  { id: "medical", label: "Instalacion Medica" },
  { id: "industrial", label: "Industrial / Bodega" },
  { id: "restaurant", label: "Restaurante" },
  { id: "other", label: "Otro" },
];

const SERVICES_ES = [
  { id: "impounds", label: "Remolque de Propiedad Privada" },
  { id: "patrol", label: "Patrullaje Regular de Estacionamiento" },
  { id: "signage", label: "Instalacion de Senalizacion" },
  { id: "firelane", label: "Cumplimiento de Carriles de Bomberos" },
  { id: "handicap", label: "Cumplimiento de Estacionamiento para Discapacitados" },
  { id: "guest", label: "Gestion de Estacionamiento de Visitantes" },
  { id: "relocations", label: "Reubicacion de Vehiculos" },
  { id: "oncall", label: "Servicio de Guardia 24/7" },
];

export default function CotizacionPage() {
  const parallaxRef = useParallax();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* -- Hero -- */}
      <section className="parallax-container relative min-h-[50vh] flex items-center text-white overflow-hidden">
        <div
          ref={parallaxRef}
          className="parallax-bg"
          style={{ backgroundImage: `url(/images/contact-phoenix.jpg)` }}
        />
        <div className="absolute inset-0 gradient-overlay-blue z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[2]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <nav className="flex items-center gap-2 text-sm text-white/80 mb-6 reveal">
            <Link href="/es" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-white">Cotizacion</span>
          </nav>
          <div className="mb-4">
            <Link href="/get-quote" className="inline-flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors glass rounded-full px-4 py-2">
              <span>English</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
              </svg>
            </Link>
          </div>
          <div className="reveal max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Solicite una <span className="text-gradient">Cotizacion Gratis</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed">
              Complete el formulario y le enviaremos una evaluacion gratuita y un programa de remolque personalizado para su propiedad.
            </p>
          </div>
        </div>
      </section>

      {/* -- Form Section -- */}
      <section className="py-20 bg-gray-50 wave-separator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* LEFT: Form */}
            <div className="reveal">
              <div className="glass-form rounded-2xl p-8 md:p-10 shadow-lg">
                <h2 className="text-2xl font-bold text-blue-900 mb-2 font-heading">
                  Evaluacion Gratuita de Propiedad
                </h2>
                <p className="text-gray-700 mb-6">
                  Complete el formulario y le responderemos dentro de 1 hora habil.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2 font-heading">
                      Solicitud Enviada!
                    </h3>
                    <p className="text-gray-600">
                      Gracias por comunicarse. Nuestro equipo le contactara dentro de 1 hora habil con su cotizacion personalizada.
                    </p>
                  </div>
                ) : (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                        placeholder="Juan Garcia"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Correo Electronico *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                          placeholder="juan@ejemplo.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Telefono
                        </label>
                        <input
                          type="tel"
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                          placeholder="(480) 555-1234"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tipo de Propiedad *
                      </label>
                      <select
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                      >
                        <option value="">Seleccione tipo de propiedad</option>
                        {PROPERTY_TYPES_ES.map((pt) => (
                          <option key={pt.id} value={pt.id}>{pt.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Ciudad
                      </label>
                      <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white">
                        <option value="">Seleccione ciudad</option>
                        {SERVICE_AREAS.map((area) => (
                          <option key={area.slug} value={area.slug}>{area.name}, AZ</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Servicios de Interes
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                        {SERVICES_ES.map((svc) => (
                          <label key={svc.id} className="flex items-center gap-2 text-sm text-gray-700">
                            <input type="checkbox" value={svc.id} className="rounded border-gray-300 text-primary focus:ring-primary" />
                            {svc.label}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Mensaje Adicional
                      </label>
                      <textarea
                        rows={4}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition resize-none bg-white"
                        placeholder="Cuentenos sobre su propiedad y sus problemas de estacionamiento..."
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full text-center justify-center">
                      Enviar Solicitud de Cotizacion
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* RIGHT: Benefits */}
            <div className="reveal-right space-y-5">
              <div className="glass-card-white rounded-2xl p-6 shadow-md">
                <h3 className="font-bold text-blue-900 font-heading text-lg mb-4">Lo Que Recibira:</h3>
                <ul className="space-y-3">
                  {[
                    "Evaluacion completa de su propiedad",
                    "Plan personalizado de control de estacionamiento",
                    "Propuesta de instalacion de senalizacion",
                    "Estimacion de tiempos de respuesta",
                    "Sin compromiso — 100% gratis",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Telefono */}
              <div className="glass-card-white rounded-2xl p-6 shadow-md flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center shrink-0 border-glow-blue">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 font-heading">Prefiere Llamar?</h3>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="text-primary hover:text-blue-700 font-semibold text-lg transition-colors"
                  >
                    {COMPANY.phone}
                  </a>
                  <p className="text-sm text-gray-700 mt-1">Despacho disponible 24/7</p>
                </div>
              </div>

              {/* Horario */}
              <div className="glass-card-white rounded-2xl p-6 shadow-md flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center shrink-0 border-glow-blue">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 font-heading">Horario de Atencion</h3>
                  <div className="text-gray-600 space-y-0.5">
                    <p>Lunes a Viernes: 9am-5pm</p>
                    <p>Sabado: con cita previa</p>
                    <p>Domingo: cerrado</p>
                  </div>
                  <p className="text-sm text-primary font-medium mt-1">
                    Despacho disponible 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Area de Servicio -- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading">
              Area de Servicio
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Proporcionamos remolque de propiedad privada y control de estacionamiento en toda el area metropolitana de Phoenix.
            </p>
          </div>
          <div className="reveal">
            <div className="glass-card-white rounded-2xl p-10 shadow-md border border-blue-100">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {SERVICE_AREAS.map((area) => (
                  <div
                    key={area.slug}
                    className="bg-blue-50 rounded-xl px-4 py-3 text-center border border-blue-100 hover:border-primary hover:bg-blue-100 transition-all"
                  >
                    <div className="font-bold text-blue-900 font-heading">{area.name}</div>
                    <div className="text-xs text-gray-700">Arizona</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
