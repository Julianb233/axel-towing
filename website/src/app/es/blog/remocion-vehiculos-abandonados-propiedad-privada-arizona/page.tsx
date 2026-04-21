import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Como Remover Vehiculos Abandonados de Propiedad Privada en Arizona | Axle Towing",
  description:
    "Guia paso a paso para remover legalmente vehiculos abandonados de propiedad privada en Arizona. Conozca ARS 28-4801, avisos requeridos, plazos y servicios gratuitos de remocion.",
  keywords: "remocion vehiculos abandonados propiedad privada, como remover carro abandonado arizona, ars 28-4801, proceso legal vehiculo abandonado",
  alternates: {
    canonical: `https://${COMPANY.domain}/es/blog/remocion-vehiculos-abandonados-propiedad-privada-arizona`,
    languages: {
      en: `https://${COMPANY.domain}/blog/abandoned-vehicle-removal-private-property-arizona`,
      es: `https://${COMPANY.domain}/es/blog/remocion-vehiculos-abandonados-propiedad-privada-arizona`,
    },
  },
  openGraph: {
    title: "Como Remover Vehiculos Abandonados de Propiedad Privada en Arizona",
    description: "Guia paso a paso para remover legalmente vehiculos abandonados de propiedad privada en Arizona.",
    url: `https://${COMPANY.domain}/es/blog/remocion-vehiculos-abandonados-propiedad-privada-arizona`,
    type: "article",
    locale: "es_US",
    alternateLocale: "en_US",
  },
};

const RELATED_ARTICLES = [
  {
    slug: "derechos-propiedad-privada-vehiculos-abandonados-arizona",
    title: "Vehiculos Abandonados en Propiedad Privada: Sus Derechos",
    category: "Guias Legales",
    readTime: "10 min",
    gradient: "from-blue-600 via-blue-800 to-blue-950",
  },
  {
    slug: "proceso-titulo-vehiculo-abandonado-arizona",
    title: "Proceso de Titulo para Vehiculo Abandonado en Arizona",
    category: "Guias Legales",
    readTime: "9 min",
    gradient: "from-indigo-500 via-purple-600 to-indigo-800",
  },
  {
    slug: "vehiculos-abandonados-propiedad-privada-que-hacer",
    title: "Vehiculos Abandonados en Propiedad Privada: Que Hacer",
    category: "Para Propietarios",
    readTime: "7 min",
    gradient: "from-blue-400 via-cyan-600 to-blue-800",
  },
];

export default function ArticlePage() {
  return (
    <>
      {/* Parallax Hero */}
      <section className="parallax-container min-h-[45vh] flex items-end relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(224,43,32,0.15),transparent_60%)] z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
          <Link href="/es/blog" className="inline-flex items-center text-sm text-blue-200/60 hover:text-white mb-6 transition-colors group">
            <svg className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Blog en Espanol
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="glass rounded-full px-3 py-1 text-blue-200 text-xs font-bold uppercase tracking-wider">
              Administracion de Propiedad
            </span>
            <span className="text-sm text-blue-200/60">8 min lectura</span>
            <span className="text-sm text-blue-200/60">20 de abril, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            Como Remover Vehiculos Abandonados de{" "}
            <span className="text-gradient">Propiedad Privada en Arizona</span>
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <div className="max-w-none prose-lg">
                <p className="text-xl text-gray-600 leading-relaxed mb-8 reveal">
                  Un vehiculo abandonado en su propiedad es mas que una simple molestia visual. Ocupa espacio de estacionamiento valioso, reduce el atractivo de la propiedad, puede tener fugas de fluidos peligrosos y atrae vandalismo. La ley de Arizona ofrece un proceso legal claro para remover vehiculos abandonados de propiedad privada, pero debe seguir los pasos correctos para evitar responsabilidad. Aqui una guia completa para manejar este reto comun de administracion de propiedad.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Que Califica Como &ldquo;Vehiculo Abandonado&rdquo; en Arizona?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Bajo los Estatutos Revisados de Arizona (ARS 28-4801), un vehiculo se considera abandonado en propiedad privada si cumple con cualquiera de los siguientes criterios:
                </p>
                <ul className="text-gray-600 space-y-2 my-4 reveal">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Dejado en la propiedad sin el consentimiento del dueno o del arrendatario</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Inoperable o aparenta estar inoperable (llantas ponchadas, partes faltantes, dano obvio)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>El registro lleva mas de 30 dias vencido</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>No se ha movido por un periodo prolongado (evidencia visible como polvo, basura, llantas desinfladas)</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Proceso de Remocion Paso a Paso
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  La ley de Arizona requiere que se sigan pasos especificos cuando se remueve un vehiculo abandonado de propiedad privada. Saltarse cualquier paso puede exponerlo a responsabilidad del dueno del vehiculo. Este es el proceso correcto:
                </p>
                <ol className="text-gray-600 space-y-4 my-6 reveal">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      1
                    </span>
                    <div>
                      <strong className="text-gray-900">Documente el Vehiculo:</strong>{" "}
                      Tome fotos del vehiculo desde multiples angulos, documentando su condicion, placa (si esta presente), numero VIN (visible a traves del parabrisas) y su ubicacion en su propiedad. Anote la fecha y hora de la documentacion.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      2
                    </span>
                    <div>
                      <strong className="text-gray-900">Ponga un Aviso en el Vehiculo:</strong>{" "}
                      Coloque un aviso escrito en el vehiculo indicando que se considera abandonado y sera remolcado si no se retira dentro de un plazo especifico. Arizona generalmente requiere un minimo de 48 a 72 horas de aviso, dependiendo de las ordenanzas locales.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      3
                    </span>
                    <div>
                      <strong className="text-gray-900">Contacte a las Autoridades Locales:</strong>{" "}
                      Reporte el vehiculo abandonado al departamento de policia local o a la oficina del sheriff. Quiza puedan correr las placas y contactar al dueno. En algunos municipios, se requiere un reporte policial antes de que se pueda proceder con el remolque.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      4
                    </span>
                    <div>
                      <strong className="text-gray-900">Contacte a su Socio de Grua:</strong>{" "}
                      Una vez que el periodo de aviso haya expirado y el vehiculo no haya sido retirado, contacte a su compania de grua para que remueva el vehiculo. La compania de grua maneja la notificacion a ADOT y el proceso de gravamen.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0">
                      5
                    </span>
                    <div>
                      <strong className="text-gray-900">Mantenga Registros:</strong>{" "}
                      Guarde copias de todas las fotos, avisos, reportes policiales y registros de remolque por al menos tres anos. Esta documentacion lo protege si el dueno del vehiculo disputa la remocion mas adelante.
                    </div>
                  </li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  La Diferencia Entre Vehiculos Abandonados y No Autorizados
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Es importante distinguir entre vehiculos abandonados y vehiculos simplemente no autorizados. Un vehiculo no autorizado — como un no-residente estacionado en el lugar de un inquilino — puede ser remolcado inmediatamente si hay senalizacion apropiada segun ARS 28-3511. No se requiere periodo de aviso para las violaciones estandar de estacionamiento no autorizado.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Un vehiculo abandonado, por otro lado, puede pertenecer a un residente actual que simplemente dejo de mantenerlo, o puede pertenecer a alguien sin conexion con la propiedad. Los requisitos adicionales de aviso existen para dar al dueno una oportunidad razonable de reclamar su propiedad.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Retos Comunes y Soluciones
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  <strong className="text-gray-900">Sin placa o VIN visible:</strong>{" "}
                  Si el vehiculo no tiene marcas identificables, documente este hecho a fondo. Contacte a las autoridades, ya que aun asi pueden identificar el vehiculo por otros medios. El periodo de aviso sigue aplicando.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  <strong className="text-gray-900">El vehiculo pertenece a un inquilino actual:</strong>{" "}
                  Si el vehiculo abandonado pertenece a un residente actual, revise primero su contrato de arrendamiento. La mayoria de los contratos requieren que los vehiculos esten operables y debidamente registrados. Siga sus procedimientos de cumplimiento del contrato ademas del proceso de remocion de vehiculo abandonado.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  <strong className="text-gray-900">El dueno del vehiculo aparece durante la remocion:</strong>{" "}
                  Bajo la ley de Arizona (ARS 28-3511), si el dueno del vehiculo llega antes de que el vehiculo haya salido de la propiedad, la compania de grua debe liberar el vehiculo. Se puede cobrar una tarifa razonable de &ldquo;drop fee&rdquo;.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Preocupaciones Ambientales
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  Los vehiculos abandonados pueden tener fugas de aceite, anticongelante, liquido de frenos y otros materiales peligrosos en su estacionamiento. En el calor de Arizona, estos fluidos descomponen el asfalto y crean manchas caras de remediar. Si la contaminacion llega a los drenajes pluviales, podria enfrentar multas ambientales de la ciudad o del Departamento de Calidad Ambiental de Arizona (ADEQ).
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  La remocion pronta de vehiculos abandonados previene estos problemas ambientales y los costos asociados.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 reveal">
                  Prevencion a Traves del Cumplimiento Profesional
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 reveal">
                  La mejor manera de lidiar con vehiculos abandonados es prevenir que se acumulen en primer lugar. Las propiedades con cumplimiento profesional de estacionamiento rara vez tienen problemas de vehiculos abandonados porque las patrullas regulares identifican vehiculos temprano — antes de que se queden parados por semanas o meses. Los problemas se atienden cuando un vehiculo muestra signos iniciales de estar inoperable, en vez de despues de que se haya vuelto una presencia permanente.
                </p>

                {/* CTA Box */}
                <div className="glass-card-white rounded-2xl p-8 my-12 border-glow-blue reveal">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Necesita Ayuda para Remover un Vehiculo Abandonado?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {COMPANY.name} maneja la remocion de vehiculos abandonados como parte de nuestro programa gratuito de cumplimiento de estacionamiento. Manejamos todo el proceso — documentacion, avisos, coordinacion con las autoridades y remocion — sin costo para los duenos de propiedad.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`tel:${COMPANY.phone}`} className="btn-primary">
                      Llamar {COMPANY.phone}
                    </a>
                    <Link href="/es/servicios" className="btn-cta">
                      Servicios de Corralon de Propiedad Privada
                    </Link>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 reveal">
                  <Link href="/blog/abandoned-vehicle-removal-private-property-arizona" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                    Read in English
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>

                {/* Author Box */}
                <div className="glass-card-white rounded-2xl p-6 mt-12 reveal">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cta flex items-center justify-center text-white text-xl font-bold shrink-0">AT</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Axle Towing &amp; Impound</h4>
                      <p className="text-gray-700 text-sm">Remolque profesional de propiedad privada y cumplimiento de estacionamiento sirviendo el area metropolitana de Phoenix desde 2021. Expertos en la remocion de vehiculos abandonados bajo la ley de Arizona.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="glass-card-white rounded-2xl p-6 reveal">
                  <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Articulos Relacionados</h3>
                  <div className="space-y-4">
                    {RELATED_ARTICLES.map((article) => (
                      <Link key={article.title} href={`/es/blog/${article.slug}`} className="block group">
                        <div className={`h-20 rounded-lg bg-gradient-to-br ${article.gradient} mb-2`} />
                        <span className="text-xs text-primary font-semibold uppercase">{article.category}</span>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">{article.title}</p>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="glass-card-white rounded-2xl p-6 text-center border-glow-blue reveal">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Necesita Ayuda?</h3>
                  <p className="text-gray-700 text-sm mb-4">Hable con nuestros especialistas en vehiculos abandonados hoy.</p>
                  <a href={`tel:${COMPANY.phone}`} className="btn-primary text-sm w-full">Llamar {COMPANY.phone}</a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Related Articles Bottom */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center reveal">Mas Articulos Que Podrian Interesarle</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RELATED_ARTICLES.map((article, index) => (
              <Link key={article.title} href={`/es/blog/${article.slug}`} className="glass-card-white rounded-2xl overflow-hidden group reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className={`h-40 bg-gradient-to-br ${article.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.12),transparent_50%)]" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-primary font-bold uppercase tracking-wider">{article.category}</span>
                  <h3 className="text-lg font-bold text-gray-900 mt-1 group-hover:text-primary transition-colors leading-snug">{article.title}</h3>
                  <span className="text-xs text-gray-600 mt-2 inline-block">{article.readTime} lectura</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
