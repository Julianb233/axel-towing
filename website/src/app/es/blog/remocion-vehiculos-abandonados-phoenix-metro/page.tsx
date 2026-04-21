import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Remocion de Vehiculos Abandonados en el Area Metro de Phoenix | Axle Towing",
  description: "Remocion profesional de vehiculos abandonados en mas de 30 ciudades del area metro de Phoenix. Gratis para duenos de propiedad. Servicio el mismo dia. Llame 480-288-5526.",
  keywords: "remocion vehiculos abandonados phoenix, carros abandonados phoenix metro, grua area metro phoenix, servicio remocion vehiculos arizona",
  alternates: {
    canonical: `https://${COMPANY.domain}/es/blog/remocion-vehiculos-abandonados-phoenix-metro`,
    languages: {
      en: `https://${COMPANY.domain}/blog/abandoned-vehicle-removal-phoenix-metro`,
      es: `https://${COMPANY.domain}/es/blog/remocion-vehiculos-abandonados-phoenix-metro`,
    },
  },
  openGraph: {
    title: "Remocion de Vehiculos Abandonados en el Area Metro de Phoenix",
    description: "Remocion gratis de vehiculos abandonados en mas de 30 ciudades del area metro de Phoenix.",
    url: `https://${COMPANY.domain}/es/blog/remocion-vehiculos-abandonados-phoenix-metro`,
    type: "article",
    locale: "es_US",
    alternateLocale: "en_US",
  },
};

const CITIES = [
  "Phoenix", "Scottsdale", "Tempe", "Mesa", "Chandler", "Gilbert", "Glendale", "Peoria",
  "Surprise", "Goodyear", "Avondale", "Buckeye", "Queen Creek", "Maricopa", "Casa Grande",
  "Apache Junction", "Anthem", "Ahwatukee", "Sun City", "Fountain Hills", "Paradise Valley",
  "Laveen", "Tolleson", "El Mirage", "Litchfield Park", "Sun Lakes", "Gold Canyon",
  "San Tan Valley", "Cave Creek", "Carefree",
];

const FAQS = [
  { question: "Que tan rapido puede Axle Towing remover un vehiculo abandonado?", answer: "Ofrecemos servicio el mismo dia en la mayoria de las ubicaciones del area metro de Phoenix. Despues de llamarnos al 480-288-5526, tipicamente podemos tener un camion en el sitio en 30-60 minutos durante horas de oficina." },
  { question: "Remueven vehiculos abandonados gratis?", answer: "Si. Bajo el modelo de corralon de propiedad privada de Arizona, la remocion de vehiculos abandonados es completamente gratis para los duenos de propiedad. Todos los costos de grua y almacenamiento se recuperan del dueno del vehiculo. Los duenos de propiedad, HOAs y complejos de apartamentos no pagan nada." },
  { question: "Que areas cubre Axle Towing para la remocion de vehiculos abandonados?", answer: "Damos servicio en mas de 30 ciudades del area metro de Phoenix, desde Buckeye y Goodyear en el oeste hasta Apache Junction y Gold Canyon en el este, y desde Anthem y New River en el norte hasta Casa Grande y Maricopa en el sur." },
  { question: "Que tipos de propiedades atienden?", answer: "Removemos vehiculos abandonados de complejos de apartamentos, comunidades HOA, propiedades comerciales, centros comerciales, parques de oficinas, propiedades industriales, iglesias, instalaciones medicas y cualquier otra propiedad privada en el area metro de Phoenix." },
];

const RELATED = [
  { slug: "vehiculos-abandonados-phoenix-az", title: "Remocion de Vehiculos Abandonados en Phoenix, AZ", category: "Guias de Ciudad" },
  { slug: "derechos-propiedad-privada-vehiculos-abandonados-arizona", title: "Vehiculos Abandonados en Propiedad Privada: Sus Derechos", category: "Guias Legales" },
  { slug: "remocion-rv-abandonado-arizona", title: "Remocion de RV Abandonado en Arizona", category: "Servicios" },
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
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">Servicios</span>
            <span className="text-sm text-blue-200/60">8 min lectura</span>
            <span className="text-sm text-blue-200/60">20 de abril, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">Remocion de Vehiculos Abandonados <span className="text-gradient">en el Area Metro de Phoenix</span></h1>
        </div>
      </section>
      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3 max-w-none prose-lg">
              <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">Axle Towing &amp; Impound ofrece remocion profesional de vehiculos abandonados en toda el area metropolitana de Phoenix. Con dos corralones seguros en Phoenix y Apache Junction, cubrimos mas de 30 ciudades y respondemos a la mayoria de las llamadas en 30 minutos. Y lo mejor: nuestro servicio es completamente gratis para los duenos de propiedad.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Como Funciona Nuestra Remocion de Vehiculos Abandonados</h2>
              <ol className="text-gray-600 space-y-4 my-4 reveal">
                {[
                  { t: "Usted nos Llama", d: "Llame al 480-288-5526 y describa la situacion. Le preguntaremos sobre la condicion del vehiculo, su ubicacion y cuanto tiempo ha estado ahi." },
                  { t: "Respondemos Rapido", d: "Se despacha un camion grua a su propiedad. Nuestra meta es responder en 30 minutos en toda el area metro de Phoenix." },
                  { t: "Documentamos y Removemos", d: "Nuestro conductor toma fotos del vehiculo, documenta su condicion y lo remolca de manera segura a nuestro corralon." },
                  { t: "Manejamos Todo el Papeleo", d: "Notificamos a las autoridades, enviamos correo certificado al dueno registrado via los registros de ADOT, y manejamos el proceso de gravamen si el vehiculo no es reclamado." },
                  { t: "Usted No Paga Nada", d: "Todos los costos se recuperan del dueno del vehiculo bajo el modelo PPI de Arizona. Su factura siempre es $0." },
                ].map((item, i) => (
                  <li key={item.t} className="flex items-start gap-3"><span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span><div><strong className="text-gray-900">{item.t}:</strong> {item.d}</div></li>
                ))}
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Tipos de Propiedades que Atendemos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 reveal">
                {[
                  { t: "Complejos de Apartamentos", d: "Vehiculos de ex-inquilinos, estacionamiento no autorizado, carros inoperables" },
                  { t: "Comunidades HOA", d: "Violaciones de CC&Rs, estacionamiento en la calle, almacenamiento de RV/bote" },
                  { t: "Propiedades Comerciales", d: "Centros comerciales, parques de oficinas, lotes industriales" },
                  { t: "Instalaciones Medicas", d: "Hospitales, clinicas, estacionamiento de urgencias" },
                  { t: "Propiedades Religiosas", d: "Iglesias, templos, mezquitas, estacionamiento para eventos" },
                  { t: "Sitios de Construccion", d: "Vehiculos abandonados que bloquean la construccion activa" },
                ].map((item) => (
                  <div key={item.t} className="glass-card-white rounded-xl p-4"><h3 className="font-bold text-gray-900 text-sm">{item.t}</h3><p className="text-gray-600 text-sm mt-1">{item.d}</p></div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Ciudades Donde Damos Servicio</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">Axle Towing ofrece remocion de vehiculos abandonados en toda el area metro de Phoenix, incluyendo:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 my-6 reveal">
                {CITIES.map((city) => (
                  <div key={city} className="flex items-center gap-2 text-gray-600 text-sm">
                    <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{city}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Por Que los Duenos de Propiedad Eligen a Axle Towing</h2>
              <ul className="text-gray-600 space-y-2 my-4 reveal">
                {["100% gratis para duenos de propiedad — cero costo, siempre", "Servicio el mismo dia con tiempos de respuesta de 30 minutos", "Dos corralones seguros (Phoenix y Apache Junction)", "Servicio completo: documentacion, notificacion a las autoridades, notificacion al dueno, procesamiento de gravamen", "Licenciados, asegurados y en cumplimiento con todas las regulaciones de grua de Arizona", "Despacho disponible 24/7 para emergencias", "Servicio bilingue (ingles y espanol)"].map((item) => (
                  <li key={item} className="flex items-start gap-2"><svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>{item}</span></li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 reveal">Preguntas Frecuentes</h2>
              <div className="space-y-6 reveal">{FAQS.map((faq) => (<div key={faq.question} className="glass-card-white rounded-2xl p-6"><h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3><p className="text-gray-600">{faq.answer}</p></div>))}</div>

              <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Listo para Remover un Vehiculo Abandonado?</h3>
                <p className="text-gray-600 mb-6">Llame a {COMPANY.name} para remocion gratuita de vehiculos abandonados el mismo dia en cualquier parte del area metro de Phoenix.</p>
                <div className="flex flex-col sm:flex-row gap-3"><a href={`tel:${COMPANY.phone}`} className="btn-primary">Llamar {COMPANY.phone}</a><Link href="/es/contacto" className="btn-cta">Evaluacion Gratis</Link></div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 reveal">
                <Link href="/blog/abandoned-vehicle-removal-phoenix-metro" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                  Read in English
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
            <aside className="lg:col-span-1"><div className="sticky top-24 space-y-6">
              <div className="glass-card-white rounded-2xl p-6 reveal"><h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Articulos Relacionados</h3><div className="space-y-4">{RELATED.map((a) => (<Link key={a.slug} href={`/es/blog/${a.slug}`} className="block group"><span className="text-xs text-primary font-semibold uppercase">{a.category}</span><p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">{a.title}</p></Link>))}</div></div>
              <div className="glass-card-white rounded-2xl p-6 text-center border-glow-blue reveal"><h3 className="font-bold text-gray-900 mb-2">Necesita Ayuda?</h3><p className="text-gray-700 text-sm mb-4">Remocion gratis de vehiculos abandonados en mas de 30 ciudades.</p><a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Llamar {COMPANY.phone}</a></div>
            </div></aside>
          </div>
        </div>
      </article>
    </>
  );
}
