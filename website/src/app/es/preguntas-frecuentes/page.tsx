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

const PREGUNTAS_PROPIETARIOS = [
  {
    q: "Cuanto cuesta el servicio de remolque?",
    a: "Absolutamente nada. Nuestros servicios de remolque de propiedad privada y control de estacionamiento son 100% gratuitos para propietarios y administradores. Todos los costos se cubren a traves de las tarifas de deposito y almacenamiento legalmente establecidas que paga el dueno del vehiculo al recuperarlo. No hay cargos ocultos, no hay pagos mensuales y no hay costos de instalacion.",
  },
  {
    q: "Como empiezo con el control de estacionamiento?",
    a: "Comenzar es simple. Llamenos o complete nuestro formulario de contacto para una evaluacion gratuita de su propiedad. Visitaremos su propiedad, evaluaremos su situacion de estacionamiento, recomendaremos la ubicacion de senalizacion conforme a la ley, y configuraremos su programa de cumplimiento personalizado — generalmente dentro de 48 horas.",
  },
  {
    q: "Que senalizacion proporcionan?",
    a: "Proporcionamos toda la senalizacion de autorizacion de remolque requerida sin costo para usted. Nuestros letreros cumplen con todos los requisitos de los Estatutos Revisados de Arizona (ARS) en cuanto a tamano, contenido, ubicacion y visibilidad. Nos encargamos del diseno, produccion e instalacion profesional.",
  },
  {
    q: "Que tan rapido pueden responder a una llamada?",
    a: "Nuestro tiempo promedio de respuesta es de menos de 30 minutos en toda el area metropolitana de Phoenix. Con dos patios estrategicamente ubicados — en Apache Junction y Phoenix — podemos llegar a la mayoria de las propiedades rapidamente.",
  },
  {
    q: "Ofrecen servicio 24/7?",
    a: "Si! Nuestras operaciones de despacho y remolque estan disponibles las 24 horas del dia, los 7 dias de la semana, los 365 dias del ano. Nuestro horario de oficina para recuperacion de vehiculos es de lunes a viernes de 9am a 5pm y sabados con cita previa, pero nuestros equipos de grua siempre estan de guardia.",
  },
  {
    q: "Que areas cubren?",
    a: "Servimos toda el area metropolitana de Phoenix incluyendo Phoenix, Scottsdale, Mesa, Glendale, Gilbert, Chandler, Tempe y Apache Junction. Si su propiedad esta en el area metropolitana de Phoenix, es probable que podamos ayudarle.",
  },
  {
    q: "Como funciona el portal para administradores de propiedades?",
    a: "Nuestro portal digital le da acceso en tiempo real a solicitudes de remolque, registros de actividad, reportes y actualizaciones de estado de vehiculos. Puede enviar solicitudes de remolque en linea, rastrear remolques activos y descargar reportes para sus archivos.",
  },
  {
    q: "Que tipos de propiedades atienden?",
    a: "Atendemos complejos de apartamentos, comunidades HOA, condominios, propiedades comerciales, centros comerciales, parques de oficinas, plazas, instalaciones medicas, iglesias y estacionamientos privados. Si tiene un problema de estacionamiento, tenemos una solucion.",
  },
  {
    q: "Necesito firmar un contrato a largo plazo?",
    a: "No. Ofrecemos acuerdos flexibles sin compromisos a largo plazo. Creemos en ganarnos su negocio a traves de un servicio excelente, no en atarle a contratos. Puede ajustar o cancelar su programa en cualquier momento.",
  },
  {
    q: "Que sucede cuando remolcan un vehiculo de mi propiedad?",
    a: "Cuando remolcamos un vehiculo, documentamos la violacion con fotos con marca de tiempo, registramos la condicion del vehiculo y lo transportamos a nuestro patio de deposito seguro. El dueno del vehiculo es notificado segun la ley de Arizona, y usted recibe un registro digital del remolque.",
  },
  {
    q: "Pueden manejar violaciones de carril de bomberos y estacionamiento para discapacitados?",
    a: "Si. Hacemos cumplir las violaciones de carril de bomberos, zona de discapacitados y otras violaciones criticas de seguridad. Estos remolques se priorizan debido a su impacto en la seguridad y el cumplimiento de ADA.",
  },
  {
    q: "Proporcionan documentacion y reportes?",
    a: "Absolutamente. Cada remolque se documenta con fotos, marcas de tiempo, datos de ubicacion y detalles de la violacion. Los administradores de propiedades reciben reportes digitales y pueden acceder a datos historicos a traves de nuestro portal.",
  },
  {
    q: "Que pasa si un inquilino disputa un remolque?",
    a: "Todos nuestros remolques estan documentados exhaustivamente con evidencia fotografica y registros de cumplimiento. Si surge una disputa, proporcionamos documentacion completa para respaldar la legalidad del remolque.",
  },
  {
    q: "Como manejan el estacionamiento de visitantes?",
    a: "Trabajamos con usted para establecer politicas claras de estacionamiento para visitantes. Esto puede incluir zonas designadas para visitantes, permisos temporales de estacionamiento o protocolos de periodo de gracia.",
  },
  {
    q: "Que tipo de senalizacion es requerida por la ley de Arizona?",
    a: "La ley de Arizona requiere senalizacion especifica que incluya el nombre y telefono de la empresa de remolque, aviso de que los vehiculos no autorizados seran remolcados a costa del propietario del vehiculo, y debe estar ubicada en entradas visibles. Nosotros nos encargamos de todo esto sin costo.",
  },
];

const PREGUNTAS_VEHICULOS = [
  {
    q: "Mi carro fue remolcado — como lo recupero?",
    a: `Contactenos al ${COMPANY.phone} o visite uno de nuestros patios de deposito durante el horario de oficina. Necesitara traer identificacion con foto valida, registro del vehiculo o titulo, y pago para las tarifas aplicables. Le guiaremos a traves del proceso.`,
  },
  {
    q: "Que necesito llevar para recuperar mi vehiculo?",
    a: "Necesitara: (1) identificacion con foto emitida por el gobierno, (2) registro actual del vehiculo o titulo que pruebe la propiedad, y (3) pago de tarifas de deposito y almacenamiento. Si esta recogiendo en nombre del propietario registrado, necesitara una carta de autorizacion notariada.",
  },
  {
    q: "Cuales son las tarifas de almacenamiento?",
    a: "Las tarifas de almacenamiento se establecen de acuerdo con las regulaciones del estado de Arizona y se acumulan diariamente. El monto exacto depende del tipo de vehiculo y la duracion del almacenamiento. Contactenos para tarifas actuales. Se puede pagar con efectivo, tarjeta de credito o debito.",
  },
  {
    q: "Puedo obtener mis pertenencias personales del vehiculo?",
    a: "Si. La ley de Arizona le permite recuperar pertenencias personales de un vehiculo en deposito durante el horario de oficina. Necesitara mostrar identificacion con foto valida. No hay cargo por recuperar articulos personales.",
  },
  {
    q: "Cual es el horario para recoger vehiculos?",
    a: `Nuestro horario de oficina es de lunes a viernes de 9am a 5pm, sabados con cita previa, y domingos cerrado. La recuperacion de vehiculos esta disponible durante estas horas en ambas ubicaciones. Para emergencias, llame al ${COMPANY.phone}.`,
  },
  {
    q: "Que pasa si no puedo pagar las tarifas?",
    a: "Entendemos las dificultades financieras. Contactenos directamente para discutir su situacion. Aunque las tarifas son establecidas por regulacion estatal, podemos trabajar con usted en arreglos de pago cuando sea posible.",
  },
  {
    q: "Cuanto tiempo antes de que mi carro sea subastado?",
    a: "Bajo la ley de Arizona, los vehiculos retenidos en deposito por un periodo prolongado pueden estar sujetos a venta por derecho de retencion o subasta. Recomendamos recuperar su vehiculo lo antes posible para minimizar las tarifas de almacenamiento.",
  },
  {
    q: "Puedo disputar el remolque?",
    a: "Si. Si cree que su vehiculo fue remolcado por error, contactenos con los detalles y revisaremos la documentacion. Cada remolque esta documentado fotograficamente con marcas de tiempo y detalles de la violacion.",
  },
  {
    q: "Quien establece las tarifas de deposito?",
    a: "Las tarifas de deposito y almacenamiento estan reguladas por el Estado de Arizona y se establecen de acuerdo con los Estatutos Revisados de Arizona. Estas tarifas no las establece Axle Towing — seguimos el programa de tarifas ordenado por el estado.",
  },
  {
    q: "Que metodos de pago aceptan?",
    a: "Aceptamos efectivo, Visa, Mastercard, American Express y tarjetas de debito. No aceptamos cheques personales. El pago se requiere al momento de la recuperacion del vehiculo.",
  },
];

export default function PreguntasFrecuentesPage() {
  const parallaxRef = useParallax();

  return (
    <>
      {/* -- Parallax Hero -- */}
      <section className="parallax-container relative min-h-[50vh] flex items-center text-white overflow-hidden">
        <div
          ref={parallaxRef}
          className="parallax-bg"
          style={{ backgroundImage: `url(/images/optimized/axle-towing-hero-parking-lot-phoenix-az.webp)` }}
        />
        <div className="absolute inset-0 gradient-overlay-blue z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[2]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="reveal max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Preguntas <span className="text-gradient">Frecuentes</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed">
              Todo lo que necesita saber sobre nuestros servicios de remolque y control de estacionamiento &mdash; ya sea propietario o dueno de vehiculo.
            </p>
          </div>
        </div>
      </section>

      {/* -- Preguntas para Propietarios -- */}
      <section className="py-20 bg-gray-50 wave-separator">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-blue-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
              </svg>
              Para Propietarios y Administradores
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading">
              Preguntas de Propietarios
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Conozca como funciona nuestro programa gratuito de control de estacionamiento para su propiedad.
            </p>
          </div>
          <div className="space-y-3">
            {PREGUNTAS_PROPIETARIOS.map((faq, i) => (
              <details
                key={i}
                className="reveal glass-card-white rounded-2xl shadow-sm group"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 md:px-8 md:py-6 list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-bold text-blue-900 font-heading text-lg pr-4">
                    {faq.q}
                  </span>
                  <span className="shrink-0 w-8 h-8 bg-blue-50 text-primary rounded-lg flex items-center justify-center border border-blue-200 transition-transform group-open:rotate-45">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 md:px-8 md:pb-8 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* -- Preguntas para Duenos de Vehiculos -- */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-50 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-red-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25m-2.25 0h-2.25m4.5 0V6.375c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125" />
              </svg>
              Para Duenos de Vehiculos
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading">
              Preguntas de Duenos de Vehiculos
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Informacion sobre la recuperacion de su vehiculo y el proceso de deposito.
            </p>
          </div>
          <div className="space-y-3">
            {PREGUNTAS_VEHICULOS.map((faq, i) => (
              <details
                key={i}
                className="reveal glass-card-white rounded-2xl shadow-sm group"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 md:px-8 md:py-6 list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-bold text-blue-900 font-heading text-lg pr-4">
                    {faq.q}
                  </span>
                  <span className="shrink-0 w-8 h-8 bg-red-50 text-accent rounded-lg flex items-center justify-center border border-red-200 transition-transform group-open:rotate-45">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 md:px-8 md:pb-8 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* -- CTA -- */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-primary to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Aun Tiene Preguntas?
          </h2>
          <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
            Nuestro equipo esta listo para ayudarle. Comuniquese para una consulta gratuita y responderemos todas sus preguntas sobre su situacion especifica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary">
              Llame {COMPANY.phone}
            </a>
            <Link href="/es/contacto" className="btn-secondary">
              Envienos un Mensaje
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
