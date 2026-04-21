import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Vehiculo Abandonado en Propiedad Privada Arizona: Sus Derechos | Axle Towing",
  description: "Conozca sus derechos cuando hay un vehiculo abandonado en su propiedad privada en Arizona. Proceso legal de remocion, ARS 28-3511, senalizacion requerida y remolque gratis.",
  keywords: "vehiculo abandonado propiedad privada arizona, derechos remolque propiedad privada, carro abandonado mi propiedad, ars 28-3511",
  alternates: {
    canonical: `https://${COMPANY.domain}/es/blog/derechos-propiedad-privada-vehiculos-abandonados-arizona`,
    languages: {
      en: `https://${COMPANY.domain}/blog/abandoned-vehicle-private-property-rights-arizona`,
      es: `https://${COMPANY.domain}/es/blog/derechos-propiedad-privada-vehiculos-abandonados-arizona`,
    },
  },
  openGraph: {
    title: "Vehiculo Abandonado en Propiedad Privada Arizona: Sus Derechos",
    description: "Conozca sus derechos cuando hay un vehiculo abandonado en su propiedad privada en Arizona.",
    url: `https://${COMPANY.domain}/es/blog/derechos-propiedad-privada-vehiculos-abandonados-arizona`,
    type: "article",
    locale: "es_US",
    alternateLocale: "en_US",
  },
};

const FAQS = [
  { question: "Puedo remolcar un vehiculo de mi propiedad privada sin llamar a la policia?", answer: "Si. En propiedad privada, no necesita autorizacion policial para mandar remolcar un vehiculo. Su compania de grua maneja la notificacion requerida a las autoridades despues del remolque. La excepcion es si sospecha que el vehiculo es robado — en ese caso llame primero a la policia." },
  { question: "Que pasa si el dueno del vehiculo amenaza con demandarme?", answer: "La ley de Arizona protege a los duenos de propiedad que siguen los procedimientos apropiados. Si tiene senalizacion que cumple con la ley, usa una compania de grua licenciada y hace cumplir las reglas de manera consistente, su exposicion a demandas es minima. Guarde documentacion de la senalizacion, la condicion del vehiculo y la autorizacion de remolque." },
  { question: "Necesito un acuerdo escrito de remolque?", answer: "Si, debe tener un acuerdo escrito de autorizacion de remolque con su compania de grua. Este documento establece la relacion legal y protege a ambas partes. Axle Towing proporciona esto como parte de nuestra configuracion estandar." },
];

const RELATED = [
  { slug: "vehiculos-abandonados-phoenix-az", title: "Remocion de Vehiculos Abandonados en Phoenix, AZ", category: "Guias de Ciudad" },
  { slug: "remocion-vehiculos-abandonados-phoenix-metro", title: "Remocion de Vehiculos Abandonados en el Area Metro de Phoenix", category: "Servicios" },
  { slug: "proceso-titulo-vehiculo-abandonado-arizona", title: "Proceso de Titulo para Vehiculo Abandonado en Arizona", category: "Guias Legales" },
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
            <span className="text-sm text-blue-200/60">10 min lectura</span>
            <span className="text-sm text-blue-200/60">20 de abril, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">Vehiculo Abandonado en Propiedad Privada Arizona: <span className="text-gradient">Sus Derechos</span></h1>
        </div>
      </section>
      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3 max-w-none prose-lg">
              <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">Encontrar un vehiculo abandonado en su propiedad privada es frustrante. Ya sea que sea dueno de un complejo de apartamentos, administre una propiedad comercial o tenga una comunidad HOA, usted no pidio este problema y no deberia tener que pagar para arreglarlo. La buena noticia: la ley de Arizona esta firmemente del lado de los duenos de propiedad cuando se trata de remover vehiculos abandonados.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Sus Derechos Bajo la Ley de Arizona</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">Los Estatutos Revisados de Arizona dan a los duenos de propiedad privada autoridad clara para remover vehiculos de su propiedad. Bajo ARS 28-3511, usted puede autorizar a una compania de grua licenciada a remover cualquier vehiculo no autorizado de su propiedad, siempre que haya senalizacion apropiada. Bajo ARS 28-4141 al 28-4145, el proceso de vehiculo abandonado cubre situaciones donde los vehiculos parecen haber sido abandonados intencionalmente en su propiedad.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Que Cuenta Como Propiedad Privada?</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">Para los propositos de la ley de remolque de Arizona, la propiedad privada incluye complejos de apartamentos y sus areas de estacionamiento, areas comunes y calles de comunidades HOA, estacionamientos y garages comerciales, areas de estacionamiento de centros comerciales, estacionamiento de edificios de oficinas, propiedad industrial, estacionamiento de iglesias e instalaciones religiosas, estacionamiento de instalaciones medicas, y cualquier otra propiedad que no sea de una entidad de gobierno.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Senalizacion: Lo Unico Que Debe Tener</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">Antes de poder mandar remolcar legalmente vehiculos de su propiedad privada, debe colocar senalizacion que cumpla con la ley en cada entrada de vehiculos. Bajo ARS 9-499.05, los letreros deben mostrar el nombre de la compania de grua, numero de telefono y direccion del corralon. Los letreros deben ser claramente visibles y legibles. Sin la senalizacion apropiada, su autorizacion de remolque puede no sostenerse si es impugnada.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Su Derecho a Remocion Sin Costo</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">Bajo el modelo de corralon de propiedad privada (PPI) de Arizona, el dueno del vehiculo paga todas las tarifas de grua y almacenamiento cuando recoge su vehiculo. Los duenos de propiedad nunca son responsables de estos costos. Esto significa que remover un vehiculo abandonado de su propiedad no le cuesta absolutamente nada.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">Cuando No Puede Simplemente Remolcarlo</h2>
              <p className="text-gray-600 leading-relaxed mb-4 reveal">Aunque la ley de Arizona da a los duenos de propiedad amplia autoridad para remolcar, hay algunas situaciones en las que necesita tener mas cuidado. Los vehiculos que pertenecen a inquilinos actuales con contratos de arrendamiento validos pueden requerir aviso escrito antes del remolque, dependiendo de los terminos de su contrato. Los vehiculos que parecen tener a alguien viviendo en ellos requieren coordinacion con las autoridades. Los vehiculos en calles propiedad de la ciudad adyacentes a su propiedad no estan en su propiedad privada y deben ser reportados a la ciudad.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 reveal">Preguntas Frecuentes</h2>
              <div className="space-y-6 reveal">{FAQS.map((faq) => (<div key={faq.question} className="glass-card-white rounded-2xl p-6"><h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3><p className="text-gray-600">{faq.answer}</p></div>))}</div>
              <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Necesita Ayuda?</h3>
                <p className="text-gray-600 mb-6">{COMPANY.name} ofrece remocion gratuita de vehiculos abandonados para duenos de propiedad en toda el area metro de Phoenix. Llamenos hoy.</p>
                <div className="flex flex-col sm:flex-row gap-3"><a href={`tel:${COMPANY.phone}`} className="btn-primary">Llamar {COMPANY.phone}</a><Link href="/es/contacto" className="btn-cta">Evaluacion Gratis</Link></div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 reveal">
                <Link href="/blog/abandoned-vehicle-private-property-rights-arizona" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
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
