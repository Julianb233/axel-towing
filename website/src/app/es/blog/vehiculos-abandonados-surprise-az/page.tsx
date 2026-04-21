import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Remocion de Vehiculos Abandonados en Surprise, AZ | Servicio Gratis | Axle Towing",
  description: "Remocion gratis de vehiculos abandonados en Surprise, Arizona. Servicio de grua el mismo dia para duenos de propiedad, HOAs y complejos de apartamentos. Llame 480-288-5526.",
  keywords: "vehiculos abandonados surprise, carros abandonados surprise az, remocion vehiculos surprise, grua surprise arizona, auto abandonado surprise",
  alternates: {
    canonical: `https://${COMPANY.domain}/es/blog/vehiculos-abandonados-surprise-az`,
    languages: {
      en: `https://${COMPANY.domain}/blog/abandoned-vehicle-surprise-az`,
      es: `https://${COMPANY.domain}/es/blog/vehiculos-abandonados-surprise-az`,
    },
  },
  openGraph: {
    title: "Remocion de Vehiculos Abandonados en Surprise, AZ",
    description: "Remocion gratis de vehiculos abandonados para duenos de propiedad en Surprise. Servicio el mismo dia.",
    url: `https://${COMPANY.domain}/es/blog/vehiculos-abandonados-surprise-az`,
    type: "article",
    locale: "es_US",
    alternateLocale: "en_US",
  },
};

const FAQS = [
  { question: "Como reporto un vehiculo abandonado en Surprise, AZ?", answer: "Para vehiculos en calles publicas, contacte a Policia Surprise (No-Emergencia) al 623-222-4000. Para vehiculos en propiedad privada (apartamentos, HOAs, locales comerciales), llame a Axle Towing al 480-288-5526 para remocion gratis el mismo dia." },
  { question: "Cuanto cuesta remover un vehiculo abandonado en Surprise?", answer: "Para los duenos de propiedad, no cuesta nada. Bajo el modelo de corralon de propiedad privada (PPI) de Arizona, todas las tarifas de grua y almacenamiento las paga el dueno del vehiculo cuando recoge su carro. Los duenos de propiedad, HOAs y complejos de apartamentos pagan cero." },
  { question: "Cuanto tiempo tiene que estar un vehiculo parado para considerarse abandonado en Surprise?", answer: "La ley de Arizona no especifica un plazo fijo unico. En propiedad privada con la senalizacion de remolque apropiada, los vehiculos no autorizados pueden ser removidos inmediatamente. La determinacion de abandono depende de factores como la condicion del vehiculo, el estado del registro, y si el dueno parece haberlo dejado." },
  { question: "Axle Towing da servicio en Surprise, Arizona?", answer: "Si. Axle Towing ofrece remocion gratuita de vehiculos abandonados en todo Surprise y el area circundante. Damos servicio en Original Town Site, Marley Park, Sun City Grand, Sun Village, Surprise Farms, Sarah Ann Ranch, y en todas las colonias de Surprise. Llame al 480-288-5526 para servicio el mismo dia." },
];

const AREAS = [
  "Original Town Site",
  "Marley Park",
  "Sun City Grand",
  "Sun Village",
  "Surprise Farms",
  "Sarah Ann Ranch"
];

const RELATED = [
  { slug: "vehiculos-abandonados-phoenix-az", title: "Remocion de Vehiculos Abandonados en Phoenix, AZ", category: "Guias de Ciudad" },
  { slug: "remocion-vehiculos-abandonados-phoenix-metro", title: "Remocion de Vehiculos Abandonados en el Area Metro de Phoenix", category: "Vehiculos Abandonados" },
  { slug: "derechos-propiedad-privada-vehiculos-abandonados-arizona", title: "Vehiculos Abandonados en Propiedad Privada: Sus Derechos", category: "Guias Legales" },
];

export default function Page() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", inLanguage: "es", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };
  const localBiz = { "@context": "https://schema.org", "@type": ["LocalBusiness", "TowingService"], name: COMPANY.name, telephone: COMPANY.phone, url: `https://${COMPANY.domain}`, areaServed: { "@type": "City", name: "Surprise", containedInPlace: { "@type": "State", name: "Arizona" } }, priceRange: "Gratis para duenos de propiedad" };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, localBiz]) }} />
      <section className="parallax-container min-h-[45vh] flex items-end relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(224,43,32,0.15),transparent_60%)] z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
          <Link href="/es/blog" className="inline-flex items-center text-sm text-blue-200/60 hover:text-white mb-6 transition-colors group"><svg className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>Blog en Espanol</Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">Guias de Ciudad</span>
            <span className="text-sm text-blue-200/60">10 min lectura</span>
            <span className="text-sm text-blue-200/60">20 de abril, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">Remocion de Vehiculos Abandonados <span className="text-gradient">en Surprise, AZ</span></h1>
        </div>
      </section>
      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3 max-w-none prose-lg">
              <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">Surprise es una de las ciudades de mas rapido crecimiento en el area metropolitana de Phoenix, con nuevas comunidades planificadas surgiendo a lo largo del corredor de la Loop 303. Al llegar y salir nuevos residentes de los complejos de apartamentos y al evolucionar las comunidades HOA, los problemas de vehiculos abandonados son frecuentes — especialmente en Marley Park, Prasada y el area de Sun City Grand.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Como Funciona la Remocion de Vehiculos Abandonados en Surprise</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">Si usted es dueno o administra propiedad en Surprise, la ley de Arizona le da el derecho de mandar remover vehiculos no autorizados y abandonados sin costo. Asi funciona el proceso:</p>
              <ol className="text-gray-600 space-y-4 my-4 reveal">
                {[
                  { t: "Llame a Axle Towing", d: "Contactenos al 480-288-5526. Describa el vehiculo y la situacion. Damos servicio en todo Surprise, incluyendo Original Town Site, Marley Park, Sun City Grand, Sun Village, Surprise Farms, Sarah Ann Ranch." },
                  { t: "Evaluamos y Removemos", d: "Nuestro equipo llega, documenta el vehiculo y lo remolca a nuestro corralon seguro. Ofrecemos servicio el mismo dia en la mayoria de las ubicaciones de Surprise." },
                  { t: "Nosotros Manejamos el Papeleo", d: "Notificamos a las autoridades, enviamos correo certificado al dueno registrado y manejamos todo el proceso de gravamen si el vehiculo no es reclamado." },
                  { t: "Usted No Paga Nada", d: "Todos los costos se recuperan del dueno del vehiculo bajo el modelo PPI de Arizona. Los duenos de propiedad, HOAs y complejos de apartamentos pagan cero." },
                ].map((item, i) => (
                  <li key={item.t} className="flex items-start gap-3"><span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span><div><strong className="text-gray-900">{item.t}:</strong> {item.d}</div></li>
                ))}
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">La Ley de Arizona Protege a los Duenos de Propiedad en Surprise</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">Bajo los Estatutos Revisados de Arizona, los duenos de propiedad en Surprise tienen derechos legales claros para la remocion de vehiculos:</p>
              <ul className="text-gray-600 space-y-2 my-4 reveal">
                {["ARS 28-3511 permite la remocion inmediata de vehiculos no autorizados de propiedad privada con senalizacion apropiada", "ARS 9-499.05 establece los requisitos de senalizacion de remolque y las protecciones para el dueno de propiedad", "ARS 28-4141 al 28-4145 define el proceso para vehiculos abandonados, incluyendo notificacion y procedimientos de gravamen", "El modelo PPI (Private Property Impound) significa que todos los costos los cubre el dueno del vehiculo, no el dueno de la propiedad"].map((item) => (
                  <li key={item} className="flex items-start gap-2"><svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>{item}</span></li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Areas de Surprise Donde Damos Servicio</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">Axle Towing ofrece remocion de vehiculos abandonados en todo Surprise, incluyendo:</p>
              <div className="grid grid-cols-2 gap-2 my-4 reveal">
                {AREAS.map((area) => (
                  <div key={area} className="flex items-center gap-2 text-gray-600"><svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg><span className="text-sm">{area}</span></div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Numeros de Contacto en Surprise</h2>
              <div className="glass-card-white rounded-2xl p-6 my-8 reveal">
                <ul className="text-gray-600 space-y-3">
                  <li className="flex justify-between"><span className="font-medium text-gray-900">Policia Surprise (No-Emergencia)</span><span>623-222-4000</span></li>
                  <li className="flex justify-between border-t border-gray-200 pt-3"><span className="font-bold text-primary">Axle Towing (Propiedad Privada)</span><a href="tel:4802885526" className="font-bold text-primary">480-288-5526</a></li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 reveal">Preguntas Frecuentes</h2>
              <div className="space-y-6 reveal">{FAQS.map((faq) => (<div key={faq.question} className="glass-card-white rounded-2xl p-6"><h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3><p className="text-gray-600">{faq.answer}</p></div>))}</div>

              <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Vehiculo Abandonado en Surprise?</h3>
                <p className="text-gray-600 mb-6">{COMPANY.name} ofrece remocion gratuita de vehiculos abandonados para duenos de propiedad en todo Surprise. Nosotros manejamos todo, desde la documentacion hasta el proceso de gravamen, sin costo para usted.</p>
                <div className="flex flex-col sm:flex-row gap-3"><a href={`tel:${COMPANY.phone}`} className="btn-primary">Llamar {COMPANY.phone}</a><Link href="/es/contacto" className="btn-cta">Evaluacion Gratis</Link></div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 reveal">
                <Link href="/blog/abandoned-vehicle-surprise-az" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                  Read in English
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
            <aside className="lg:col-span-1"><div className="sticky top-24 space-y-6">
              <div className="glass-card-white rounded-2xl p-6 reveal"><h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Articulos Relacionados</h3><div className="space-y-4">{RELATED.map((a) => (<Link key={a.slug} href={`/es/blog/${a.slug}`} className="block group"><span className="text-xs text-primary font-semibold uppercase">{a.category}</span><p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">{a.title}</p></Link>))}</div></div>
              <div className="glass-card-white rounded-2xl p-6 text-center border-glow-blue reveal"><h3 className="font-bold text-gray-900 mb-2">Necesita Ayuda en Surprise?</h3><p className="text-gray-700 text-sm mb-4">Remocion gratis de vehiculos abandonados para duenos de propiedad en Surprise.</p><a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Llamar {COMPANY.phone}</a></div>
            </div></aside>
          </div>
        </div>
      </article>
    </>
  );
}
