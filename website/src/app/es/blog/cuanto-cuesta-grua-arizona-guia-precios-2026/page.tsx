import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Cuanto Cuesta una Grua en Arizona? Guia de Precios 2026 | Axle Towing',
  description:
    'Desglose completo de las tarifas de grua en Arizona 2026: remolque basico, almacenamiento, cargos adicionales. Que factores afectan el precio y servicios gratuitos para propietarios.',
  alternates: {
    canonical: `https://${COMPANY.domain}/es/blog/cuanto-cuesta-grua-arizona-guia-precios-2026`,
    languages: {
      es: `https://${COMPANY.domain}/es/blog/cuanto-cuesta-grua-arizona-guia-precios-2026`,
    },
  },
  openGraph: {
    title: 'Cuanto Cuesta una Grua en Arizona? Guia de Precios 2026',
    description:
      'Tarifas de grua en Arizona explicadas en espanol: remolque, almacenamiento, cargos adicionales.',
    locale: 'es_US',
  },
};

const RELATED = [
  {
    slug: 'como-recuperar-vehiculo-del-corralon-arizona',
    title: 'Como Recuperar Tu Vehiculo del Corralon en Arizona',
    category: 'Guias para Conductores',
  },
  {
    slug: 'servicio-grua-gratis-para-propietarios-como-funciona',
    title: 'Servicio de Grua Gratis para Propietarios',
    category: 'Para Propietarios',
  },
  {
    slug: 'que-hacer-cuando-tu-auto-se-descompone-en-phoenix',
    title: 'Que Hacer Cuando Tu Auto Se Descompone en Phoenix',
    category: 'Guias para Conductores',
  },
];

export default function Article() {
  return (
    <>
      <section className="relative flex min-h-[42vh] items-end overflow-hidden pb-12">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-teal-700 via-emerald-800 to-teal-950" />
        <div className="absolute inset-0 z-[1] bg-black/30" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/es/blog"
            className="group mb-6 inline-flex items-center text-sm text-teal-200/70 transition-colors hover:text-white"
          >
            <svg
              className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Blog en Espanol
          </Link>
          <span className="mb-4 inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-700">
            Guias para Conductores
          </span>
          <h1 className="mt-3 text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
            Cuanto Cuesta una Grua en Arizona? Guia de Precios 2026
          </h1>
          <div className="mt-5 flex items-center gap-4 text-sm text-teal-200/70">
            <span>6 min lectura</span>
            <span>·</span>
            <span>Axle Towing &amp; Impound</span>
          </div>
        </div>
      </section>

      <article className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed max-w-none">
            <p className="mb-8 text-xl leading-relaxed font-medium text-gray-700">
              Si alguna vez ha necesitado una grua o su vehiculo fue remolcado, probablemente se
              pregunto: ¿cuanto va a costar esto? Las tarifas de grua en Arizona dependen de varios
              factores. Esta guia le explica todo.
            </p>

            <h2>Desglose de Tarifas Tipicas en Arizona 2026</h2>
            <div className="not-prose my-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#1B2A3F] text-white">
                    <th className="rounded-tl-lg p-3 text-left">Servicio</th>
                    <th className="p-3 text-left">Descripcion</th>
                    <th className="rounded-tr-lg p-3 text-right">Rango de Precio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    {
                      service: 'Remolque basico (local)',
                      desc: 'Hasta 10 millas',
                      price: '$75–$125',
                    },
                    {
                      service: 'Remolque de propiedad privada',
                      desc: 'Impound de estacionamiento',
                      price: '$150–$250',
                    },
                    {
                      service: 'Almacenamiento diario',
                      desc: 'Por dia en el corralon',
                      price: '$35–$65/dia',
                    },
                    {
                      service: 'Cargo administrativo',
                      desc: 'Papeleos y notificacion',
                      price: '$25–$75',
                    },
                    {
                      service: 'Remolque nocturno/festivo',
                      desc: 'Despues de las 6pm o fines de semana',
                      price: '+15–25% adicional',
                    },
                    {
                      service: 'Vehiculo de gran tamano',
                      desc: 'SUVs, camionetas, vans',
                      price: '+$25–$75 adicional',
                    },
                    {
                      service: 'Wincheo adicional',
                      desc: 'Si el vehiculo esta en zanja o posicion dificil',
                      price: '$50–$150 adicional',
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-3 font-medium text-gray-900">{row.service}</td>
                      <td className="p-3 text-gray-600">{row.desc}</td>
                      <td className="p-3 text-right font-semibold text-gray-900">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 italic">
              Nota: Las tarifas son estimadas y pueden variar segun la empresa, la distancia, y las
              circunstancias especificas. Siempre pregunte el precio antes de autorizar el servicio.
            </p>

            <h2>Factores que Afectan el Precio de una Grua</h2>
            <ul>
              <li>
                <strong>Distancia:</strong> La mayoria de empresas cobran una tarifa base mas un
                cargo por milla
              </li>
              <li>
                <strong>Hora y dia:</strong> Los remolques nocturnos, en fines de semana y dias
                festivos suelen costar mas
              </li>
              <li>
                <strong>Tipo de vehiculo:</strong> Vehiculos mas grandes requieren gruas mas
                potentes
              </li>
              <li>
                <strong>Dificultad del acceso:</strong> Si el vehiculo esta en posicion dificil o en
                zona de dificil acceso
              </li>
              <li>
                <strong>Distancia del almacenamiento:</strong> Entre mas tiempo pase en el corralon,
                mas pagara
              </li>
            </ul>

            <h2>Cuando el Servicio es GRATIS para Usted</h2>
            <div className="not-prose my-6 rounded-r-lg border-l-4 border-emerald-500 bg-emerald-50 p-5">
              <p className="mb-2 font-bold text-emerald-700">
                Si usted es propietario de la propiedad
              </p>
              <p className="text-sm text-emerald-600">
                Si su vehiculo fue remolcado de su propiedad sin su consentimiento y hay
                irregularidades en el proceso, puede haber recursos legales disponibles. Sin
                embargo, si usted es <strong>propietario de la propiedad</strong> que solicita el
                remolque, el servicio es 100% gratis para usted — el conductor infractor paga.
              </p>
            </div>

            <h2>Consejos para Minimizar los Cargos del Corralon</h2>
            <ul>
              <li>
                Recupere su vehiculo lo antes posible — cada dia adicional incrementa la cuenta
              </li>
              <li>
                Llame primero antes de ir para confirmar que tienen su vehiculo y los cargos exactos
              </li>
              <li>Verifique que tenga todos los documentos necesarios para evitar viajes extra</li>
              <li>Pregunte sobre formas de pago aceptadas antes de ir</li>
            </ul>

            <h2>Preguntas que Debe Hacer Antes de Autorizar un Remolque</h2>
            <ol>
              <li>¿Cual es la tarifa total de remolque?</li>
              <li>¿Cobran por milla? ¿A donde llevaran el vehiculo?</li>
              <li>¿Cuanto es el almacenamiento diario?</li>
              <li>¿Que formas de pago aceptan?</li>
              <li>¿Tienen licencia de operacion en Arizona?</li>
            </ol>
          </div>

          <div className="mt-12 rounded-2xl bg-[#1B2A3F] p-8 text-center text-white">
            <h3 className="mb-3 text-2xl font-bold">Necesita una Grua de Confianza en Phoenix?</h3>
            <p className="mb-6 text-blue-200/80">
              Precios transparentes y servicio 24/7/365 en todo el area metropolitana.
            </p>
            <a
              href={`tel:${COMPANY.phone}`}
              className="inline-flex items-center gap-2 rounded-xl bg-[#DC2626] px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-red-700"
            >
              Llamar: {COMPANY.phone}
            </a>
          </div>

          <div className="mt-12">
            <h3 className="mb-6 text-xl font-bold text-gray-900">Articulos Relacionados</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {RELATED.map((r) => (
                <Link
                  key={r.slug}
                  href={`/es/blog/${r.slug}`}
                  className="group rounded-xl bg-gray-50 p-5 transition-colors hover:bg-blue-50"
                >
                  <span className="mb-2 block text-xs text-gray-400">{r.category}</span>
                  <p className="text-sm font-bold text-gray-900 transition-colors group-hover:text-blue-700">
                    {r.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
