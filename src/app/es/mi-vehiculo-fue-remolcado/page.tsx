"use client";

import { useEffect, useRef } from "react";
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
    desc: "Tarjeta de registro actual o titulo del vehiculo que pruebe la propiedad del vehiculo depositado.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Pago",
    desc: "Efectivo, tarjeta de credito o tarjeta de debito para las tarifas aplicables de deposito y almacenamiento.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    title: "Liberacion de Gravamen (si aplica)",
    desc: "Si el vehiculo tiene un gravamen activo, se puede requerir una liberacion del acreedor prendario.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

export default function MiVehiculoFueRemolcadoPage() {
  const parallaxRef = useParallax();

  return (
    <>
      {/* -- Parallax Hero -- */}
      <section className="parallax-container relative min-h-[50vh] flex items-center text-white overflow-hidden">
        <div
          ref={parallaxRef}
          className="parallax-bg"
          style={{ backgroundImage: `url(/images/hero-tow-truck.jpg)` }}
        />
        <div className="absolute inset-0 gradient-overlay-blue z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[2]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="reveal max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
              Mi Vehiculo Fue <span className="text-gradient">Remolcado</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Si su vehiculo fue remolcado, estamos aqui para ayudarle a recuperarlo lo mas rapido posible.
            </p>
          </div>
        </div>
      </section>

      {/* -- Formulario + Pasos -- */}
      <section className="py-20 bg-gray-50 wave-separator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* LEFT: Formulario */}
            <div className="reveal">
              <div className="glass-form rounded-2xl p-8 md:p-10 shadow-lg">
                <h2 className="text-2xl font-bold text-blue-900 mb-2 font-heading">
                  Buscar Mi Vehiculo
                </h2>
                <p className="text-gray-500 mb-6">
                  Ingrese la informacion de su vehiculo a continuacion. Confirmaremos si su vehiculo se encuentra en uno de nuestros patios de deposito.
                </p>

                <form className="space-y-5" action="#" method="GET">
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
                      VIN (opcional)
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white uppercase"
                      placeholder="1HGBH41JXMN109186"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Ultimos 4 Digitos de Su Telefono
                    </label>
                    <input
                      type="text"
                      maxLength={4}
                      pattern="[0-9]{4}"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                      placeholder="5526"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full text-center justify-center">
                    Buscar Vehiculo
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    Para la respuesta mas rapida, llamenos directamente al{" "}
                    <a href={`tel:${COMPANY.phone}`} className="text-primary font-semibold">
                      {COMPANY.phone}
                    </a>
                  </p>
                </form>
              </div>
            </div>

            {/* RIGHT: Pasos */}
            <div className="reveal-right">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 font-heading">
                Como Recuperar Su Vehiculo
              </h2>
              <div className="space-y-4">
                {PASOS.map((s, i) => (
                  <div key={s.step} className="flex gap-4 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0 font-heading">
                        {s.step}
                      </div>
                      {i < PASOS.length - 1 && (
                        <div className="w-px h-8 bg-blue-200 mt-1" />
                      )}
                    </div>
                    <div className="pb-2">
                      <h3 className="font-bold text-blue-900 font-heading">
                        {s.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Ubicaciones de Patios -- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading">
              Ubicaciones de Patios de Deposito
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Visite cualquiera de nuestros dos patios de deposito seguros para recuperar su vehiculo durante el horario de oficina.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMPANY.addresses.map((addr, i) => (
              <div
                key={addr.label}
                className={`reveal glass-card-white rounded-2xl p-8 shadow-md delay-${(i + 1) * 100}`}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center shrink-0 border-glow-blue">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 font-heading">
                      Oficina {addr.label}
                    </h3>
                    <p className="text-gray-600">
                      {addr.street}<br />
                      {addr.city}, {addr.state} {addr.zip}
                    </p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">
                      Lun-Vie 9am-5pm &bull; Sab con cita &bull; Dom cerrado
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <a href={`tel:${COMPANY.phone}`} className="text-primary font-semibold hover:text-blue-700 transition-colors">
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Requisitos -- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading">
              Requisitos para Recuperar Su Vehiculo
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Para recuperar su vehiculo, por favor traiga los siguientes documentos a nuestro patio de deposito.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REQUISITOS.map((req, i) => (
              <div
                key={req.title}
                className={`reveal glass-card-white rounded-2xl p-6 text-center shadow-md delay-${(i + 1) * 100}`}
              >
                <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4 border-glow-blue">
                  {req.icon}
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2 font-heading">
                  {req.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {req.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Informacion Importante -- */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal glass-card-white rounded-2xl p-8 md:p-10 shadow-md">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 font-heading">
              Informacion Importante
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p>
                  <strong className="text-blue-900">Pertenencias personales:</strong> Puede recuperar articulos personales de su vehiculo durante el horario de oficina con identificacion valida sin cargo, incluso antes de pagar las tarifas de deposito.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p>
                  <strong className="text-blue-900">Recogida por terceros:</strong> Si alguien recoge el vehiculo en su nombre, debe traer una carta de autorizacion notariada junto con su identificacion y una copia de la identificacion del propietario registrado.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p>
                  <strong className="text-blue-900">Tarifas de almacenamiento:</strong> Las tarifas diarias de almacenamiento se acumulan segun las regulaciones del estado de Arizona. Recuperar su vehiculo lo antes posible minimizara los costos totales.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p>
                  <strong className="text-blue-900">Metodos de pago:</strong> Aceptamos efectivo, Visa, Mastercard, American Express y tarjetas de debito. No se aceptan cheques personales.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p>
                  <strong className="text-blue-900">Disputas:</strong> Si cree que su vehiculo fue remolcado por error, contactenos con los detalles. Todos los remolques estan documentados con fotografias y marcas de tiempo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Banner de Emergencia -- */}
      <section className="relative py-16 text-white overflow-hidden" style={{ background: "linear-gradient(160deg, rgba(15,31,54,1) 0%, rgba(27,42,63,0.95) 50%, rgba(30,107,184,0.9) 100%)" }}>
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-8 h-8 animate-float" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Necesita Ayuda Inmediata?
            </h2>
          </div>
          <p className="text-lg text-white/90 mb-6">
            Llamenos ahora para verificar el estado de su vehiculo o para obtener respuestas a sus preguntas.
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
