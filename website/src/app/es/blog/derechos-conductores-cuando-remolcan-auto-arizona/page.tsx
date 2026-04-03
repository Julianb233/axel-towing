import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Derechos de los Conductores Cuando Remolcan Tu Auto en Arizona | Axle Towing',
  description:
    'Conozca sus derechos legales cuando su vehiculo es remolcado en Arizona. Informacion sobre requisitos de senalizacion, documentacion fotograca y como presentar quejas.',
  alternates: {
    canonical: `https://${COMPANY.domain}/es/blog/derechos-conductores-cuando-remolcan-auto-arizona`,
    languages: {
      es: `https://${COMPANY.domain}/es/blog/derechos-conductores-cuando-remolcan-auto-arizona`,
    },
  },
  openGraph: {
    title: 'Derechos de los Conductores Cuando Remolcan Tu Auto en Arizona',
    description: 'Sus derechos legales cuando su vehiculo es remolcado en Arizona — en espanol.',
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
    slug: 'guia-estacionamiento-inquilinos-apartamentos-phoenix',
    title: 'Guia de Estacionamiento para Inquilinos de Apartamentos',
    category: 'Para Inquilinos',
  },
  {
    slug: 'cuanto-cuesta-grua-arizona-guia-precios-2026',
    title: 'Cuanto Cuesta una Grua en Arizona?',
    category: 'Guias para Conductores',
  },
];

export default function ArticlePage() {
  return (
    <>
      <section className="parallax-container relative flex min-h-[45vh] items-end">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-amber-950 via-orange-900 to-amber-800" />
        <div className="grain-overlay absolute inset-0 z-[1]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <Link
            href="/es/blog"
            className="group mb-6 inline-flex items-center text-sm text-amber-200/60 transition-colors hover:text-white"
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
            Volver al Blog
          </Link>
          <div className="mb-4 flex items-center gap-3">
            <span className="glass rounded-full px-3 py-1 text-xs font-bold tracking-wider text-amber-200 uppercase">
              Derechos y Leyes
            </span>
            <span className="text-sm text-amber-200/60">7 min lectura</span>
            <span className="text-sm text-amber-200/60">24 de marzo, 2026</span>
          </div>
          <h1 className="max-w-4xl text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
            Derechos de los Conductores Cuando{' '}
            <span className="text-gradient">Remolcan Tu Auto en Arizona</span>
          </h1>
        </div>
      </section>

      <article className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            <div className="lg:col-span-3">
              <div className="prose-lg max-w-none">
                <p className="reveal mb-8 text-xl leading-relaxed text-gray-600">
                  Si su vehiculo fue remolcado en Arizona, es importante que conozca sus derechos
                  como propietario. La ley de Arizona (ARS 28-3511) establece requisitos especificos
                  que las empresas de remolque deben cumplir. Esta informacion es educativa y le
                  ayudara a entender el proceso.
                </p>

                <div className="reveal my-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
                  <p className="mb-1 font-bold text-amber-800">Nota Importante</p>
                  <p className="text-sm text-amber-700">
                    Esta informacion es educativa solamente y no constituye asesoramiento legal. Si
                    tiene dudas sobre un remolque especifico, consulte con un abogado o comuniquese
                    con la empresa de remolque directamente.
                  </p>
                </div>

                <h2 className="reveal mt-12 mb-4 text-2xl font-bold text-gray-900">
                  Requisitos de Senalizacion en Propiedad Privada
                </h2>
                <p className="reveal mb-4 leading-relaxed text-gray-600">
                  Para que un remolque de propiedad privada sea legal en Arizona, la propiedad debe
                  tener senales visibles que indiquen:
                </p>
                <ul className="reveal my-4 space-y-3 text-gray-600">
                  {[
                    'Que el estacionamiento no autorizado resulta en remolque',
                    'El nombre y numero de telefono de la empresa de remolque',
                    'El costo aproximado del remolque y almacenamiento',
                    'Las senales deben estar en la entrada de la propiedad',
                    'Deben ser visibles de dia y de noche',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 text-amber-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <h2 className="reveal mt-12 mb-4 text-2xl font-bold text-gray-900">
                  Su Derecho a Recuperar Objetos Personales
                </h2>
                <p className="reveal mb-4 leading-relaxed text-gray-600">
                  Aunque su vehiculo haya sido remolcado, usted tiene derecho a recuperar sus
                  objetos personales del interior. Esto incluye documentos importantes, ropa,
                  medicamentos, y otros artículos personales. Comuniquese con la empresa de remolque
                  para coordinar el acceso a sus pertenencias.
                </p>

                <h2 className="reveal mt-12 mb-4 text-2xl font-bold text-gray-900">
                  Documentacion Fotografica
                </h2>
                <p className="reveal mb-4 leading-relaxed text-gray-600">
                  Las empresas de remolque responsables documentan fotograficamente el estado del
                  vehiculo antes y durante el remolque. Esto protege tanto al propietario del
                  vehiculo como a la empresa. Si tiene preguntas sobre el estado de su vehiculo,
                  puede solicitar ver esta documentacion.
                </p>

                <h2 className="reveal mt-12 mb-4 text-2xl font-bold text-gray-900">
                  Como Presentar una Queja
                </h2>
                <p className="reveal mb-4 leading-relaxed text-gray-600">
                  Si cree que su vehiculo fue remolcado ilegalmente, tiene varias opciones:
                </p>
                <div className="reveal my-6 space-y-4">
                  {[
                    {
                      step: '1',
                      title: 'Contacte la empresa de remolque primero',
                      desc: 'Muchos malentendidos se resuelven directamente. Llame a la empresa y explique su situacion.',
                    },
                    {
                      step: '2',
                      title: 'Presente una queja ante la policia',
                      desc: 'Si cree que el remolque fue ilegal, puede presentar un reporte con la policia local.',
                    },
                    {
                      step: '3',
                      title: 'Contacte la MVD de Arizona',
                      desc: 'El Departamento de Vehiculos Motorizados de Arizona (AZ MVD) regula las empresas de remolque.',
                    },
                    {
                      step: '4',
                      title: 'Consulte con un abogado',
                      desc: 'Para situaciones complejas, un abogado especializado en vehiculos puede asesorarle.',
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 rounded-xl bg-gray-50 p-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#DC2626] text-sm font-bold text-white">
                        {item.step}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        <p className="mt-0.5 text-sm text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="reveal mt-12 mb-4 text-2xl font-bold text-gray-900">
                  Axle Towing: Remolque Legal y Transparente
                </h2>
                <p className="reveal mb-4 leading-relaxed text-gray-600">
                  En Axle Towing & Impound, cumplimos con todas las regulaciones de Arizona.
                  Documentamos cada remolque fotograficamente, colocamos senalizacion adecuada en
                  todas las propiedades que servimos, y operamos de manera transparente y
                  profesional.
                </p>

                <div className="reveal mt-12 rounded-2xl bg-[#1B2A3F] p-8 text-center text-white">
                  <h3 className="mb-2 text-2xl font-bold">Preguntas Sobre un Remolque?</h3>
                  <p className="mb-6 text-blue-200/70">
                    Llamenos y con gusto le explicamos el proceso y respondemos sus preguntas.
                  </p>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#DC2626] px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-red-700"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Llamar: {COMPANY.phone}
                  </a>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <h3 className="mb-4 font-bold text-gray-900">Articulos Relacionados</h3>
                  <div className="space-y-4">
                    {RELATED.map((item) => (
                      <Link key={item.slug} href={`/es/blog/${item.slug}`} className="group block">
                        <span className="text-xs font-semibold tracking-wide text-[#DC2626] uppercase">
                          {item.category}
                        </span>
                        <p className="mt-0.5 text-sm leading-snug font-medium text-gray-700 transition-colors group-hover:text-[#DC2626]">
                          {item.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl bg-[#1B2A3F] p-6 text-white">
                  <p className="mb-3 text-xs font-bold tracking-wider text-blue-200/60 uppercase">
                    Servicio 24/7/365
                  </p>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="mb-2 block text-2xl font-black text-[#DC2626] hover:text-red-400"
                  >
                    {COMPANY.phone}
                  </a>
                  <p className="text-sm text-blue-200/70">Despacho inmediato en todo Phoenix</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
