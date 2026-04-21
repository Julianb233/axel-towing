import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Proceso de Titulo para Vehiculo Abandonado en Arizona | Guia ADOT | Axle Towing",
  description: "Como obtener titulo para un vehiculo abandonado en Arizona a traves de ADOT. Proceso de gravamen de mecanico, documentos requeridos, tarifas y plazos, explicado paso a paso.",
  keywords: "titulo vehiculo abandonado arizona, ADOT vehiculo abandonado, gravamen mecanico arizona, proceso titulo carro abandonado, mechanic lien arizona",
  alternates: {
    canonical: `https://${COMPANY.domain}/es/blog/proceso-titulo-vehiculo-abandonado-arizona`,
    languages: {
      en: `https://${COMPANY.domain}/blog/abandoned-vehicle-title-process-arizona`,
      es: `https://${COMPANY.domain}/es/blog/proceso-titulo-vehiculo-abandonado-arizona`,
    },
  },
  openGraph: {
    title: "Proceso de Titulo para Vehiculo Abandonado en Arizona | Guia ADOT",
    description: "Como obtener titulo para un vehiculo abandonado en Arizona a traves de ADOT.",
    url: `https://${COMPANY.domain}/es/blog/proceso-titulo-vehiculo-abandonado-arizona`,
    type: "article",
    locale: "es_US",
    alternateLocale: "en_US",
  },
};

const FAQS = [
  { question: "Puedo obtener el titulo de un carro abandonado en mi propiedad?", answer: "No directamente. La ley de Arizona requiere que los vehiculos abandonados pasen por el proceso de gravamen de mecanico via ADOT, el cual es manejado por la compania de grua licenciada. No puede reclamar el titulo de un vehiculo simplemente porque fue abandonado en su propiedad." },
  { question: "Cuanto tarda en obtenerse el titulo de un vehiculo abandonado en Arizona?", answer: "El proceso de gravamen de mecanico tipicamente tarda de 30-60 dias desde el momento del remolque hasta la emision del titulo por ADOT. Esto incluye el periodo requerido de notificacion al dueno y el tiempo de procesamiento de ADOT." },
  { question: "Cuanto cobra ADOT por un titulo de vehiculo abandonado?", answer: "ADOT cobra tarifas por procesar la solicitud de gravamen de mecanico. Estas tarifas las paga la compania de grua y se recuperan a traves de la eventual venta o disposicion del vehiculo. Los duenos de propiedad no pagan tarifas de ADOT." },
];

const RELATED = [
  { slug: "vehiculos-abandonados-phoenix-az", title: "Remocion de Vehiculos Abandonados en Phoenix, AZ", category: "Guias de Ciudad" },
  { slug: "derechos-propiedad-privada-vehiculos-abandonados-arizona", title: "Vehiculos Abandonados en Propiedad Privada: Sus Derechos", category: "Guias Legales" },
  { slug: "remocion-vehiculos-abandonados-phoenix-metro", title: "Remocion de Vehiculos Abandonados en el Area Metro de Phoenix", category: "Servicios" },
];

export default function Page() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", inLanguage: "es", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="parallax-container min-h-[45vh] flex items-end relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(224,43,32,0.15),transparent_60%)] z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
          <Link href="/es/blog" className="inline-flex items-center text-sm text-blue-200/60 hover:text-white mb-6 transition-colors group"><svg className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>Blog en Espanol</Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">Guias Legales</span>
            <span className="text-sm text-blue-200/60">9 min lectura</span>
            <span className="text-sm text-blue-200/60">20 de abril, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl"><span className="text-gradient">Proceso de Titulo para Vehiculo Abandonado en Arizona | Guia ADOT</span></h1>
        </div>
      </section>
      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3 max-w-none prose-lg">
              <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">Cuando un vehiculo es abandonado en su propiedad y el dueno nunca lo reclama, que pasa con el? En Arizona, el vehiculo eventualmente pasa por un proceso de transferencia de titulo manejado por el Departamento de Transporte de Arizona (ADOT). Esta guia explica como funciona el proceso de titulo de vehiculo abandonado, quien puede reclamar el vehiculo y que pasos estan involucrados.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Quien Puede Obtener el Titulo de un Vehiculo Abandonado?</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">En Arizona, el titulo de un vehiculo abandonado no se transfiere directamente al dueno de la propiedad. En cambio, la compania de grua licenciada que removio y almaceno el vehiculo tiene el derecho de presentar un gravamen de mecanico a traves de ADOT. Una vez otorgado el gravamen, la compania de grua se convierte en el dueno legal del vehiculo y puede disponer de el mediante venta, subasta o desguace.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">El Proceso de Gravamen de Mecanico</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">El proceso de gravamen de mecanico en Arizona sigue estos pasos: La compania de grua remolca y almacena el vehiculo. Se notifica a las autoridades sobre el remolque. La compania de grua intenta identificar y notificar al dueno registrado via correo certificado. Si el dueno no reclama el vehiculo dentro del periodo de espera requerido por ley, la compania de grua presenta una solicitud de gravamen de mecanico con ADOT. ADOT procesa la solicitud y, si es aprobada, emite un nuevo titulo a la compania de grua.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Documentacion Requerida</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">Para presentar un gravamen de mecanico con ADOT, la compania de grua debe proporcionar comprobante del remolque (boleta de remolque, notificacion a las autoridades), comprobante de los intentos de notificacion al dueno (recibos de correo certificado), informacion de identificacion del vehiculo (VIN, marca, modelo, ano), documentacion de las tarifas acumuladas y el formulario completo de solicitud de gravamen.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Que Pasa Si Usted Quiere Quedarse con el Vehiculo?</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">Si encuentra un vehiculo abandonado en su propiedad y quiere quedarse con el, no puede simplemente reclamarlo. La ley de Arizona requiere que el vehiculo pase por el proceso legal apropiado. Sin embargo, una vez que la compania de grua obtiene el titulo a traves del proceso de gravamen, usted puede tener la opcion de comprar el vehiculo en subasta o a traves de una venta privada.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Plazos y Tarifas</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">El proceso de gravamen de mecanico tipicamente tarda de 30-60 dias desde el momento del remolque hasta la emision de un nuevo titulo. ADOT cobra una tarifa por procesar la solicitud de gravamen. La compania de grua maneja todos estos costos y los recupera a traves de la eventual disposicion del vehiculo. Los duenos de propiedad nunca estan involucrados ni son responsables de ningun costo en este proceso.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 reveal">Preguntas Frecuentes</h2>
              <div className="space-y-6 reveal">{FAQS.map((faq) => (<div key={faq.question} className="glass-card-white rounded-2xl p-6"><h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3><p className="text-gray-600">{faq.answer}</p></div>))}</div>
              <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Necesita Ayuda?</h3>
                <p className="text-gray-600 mb-6">{COMPANY.name} ofrece remocion gratuita de vehiculos abandonados para duenos de propiedad en toda el area metro de Phoenix. Llamenos hoy.</p>
                <div className="flex flex-col sm:flex-row gap-3"><a href={`tel:${COMPANY.phone}`} className="btn-primary">Llamar {COMPANY.phone}</a><Link href="/es/contacto" className="btn-cta">Evaluacion Gratis</Link></div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 reveal">
                <Link href="/blog/abandoned-vehicle-title-process-arizona" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                  Read in English
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
            <aside className="lg:col-span-1"><div className="sticky top-24 space-y-6">
              <div className="glass-card-white rounded-2xl p-6 reveal"><h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Articulos Relacionados</h3><div className="space-y-4">{RELATED.map((a) => (<Link key={a.slug} href={`/es/blog/${a.slug}`} className="block group"><span className="text-xs text-primary font-semibold uppercase">{a.category}</span><p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">{a.title}</p></Link>))}</div></div>
              <div className="glass-card-white rounded-2xl p-6 text-center border-glow-blue reveal"><h3 className="font-bold text-gray-900 mb-2">Necesita Ayuda?</h3><p className="text-gray-700 text-sm mb-4">Remocion gratis de vehiculos abandonados.</p><a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Llamar {COMPANY.phone}</a></div>
            </div></aside>
          </div>
        </div>
      </article>
    </>
  );
}
