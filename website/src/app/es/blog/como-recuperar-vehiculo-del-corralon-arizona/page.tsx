import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Como Recuperar Tu Vehiculo del Corralon en Arizona | Axle Towing',
  description:
    'Guia completa para recuperar su carro del corralon en Arizona: documentos requeridos, tarifas, horarios del corralon de Axle Towing en Apache Junction y Phoenix.',
  alternates: {
    canonical: `https://${COMPANY.domain}/es/blog/como-recuperar-vehiculo-del-corralon-arizona`,
    languages: {
      es: `https://${COMPANY.domain}/es/blog/como-recuperar-vehiculo-del-corralon-arizona`,
    },
  },
  openGraph: {
    title: 'Como Recuperar Tu Vehiculo del Corralon en Arizona',
    description: 'Documentos, tarifas y pasos para sacar tu carro del corralon en Arizona.',
    locale: 'es_US',
  },
};

const RELATED = [
  {
    slug: 'que-hacer-cuando-tu-auto-se-descompone-en-phoenix',
    title: 'Que Hacer Cuando Tu Auto Se Descompone en Phoenix',
    category: 'Guias para Conductores',
  },
  {
    slug: 'derechos-conductores-cuando-remolcan-auto-arizona',
    title: 'Derechos de los Conductores Cuando Remolcan Tu Auto en Arizona',
    category: 'Derechos y Leyes',
  },
  {
    slug: 'cuanto-cuesta-grua-arizona-guia-precios-2026',
    title: 'Cuanto Cuesta una Grua en Arizona? Guia de Precios 2026',
    category: 'Guias para Conductores',
  },
];

export default function ArticlePage() {
  return (
    <>
      {/* Hero */}
      <section className="parallax-container relative flex min-h-[45vh] items-end">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-red-950 via-red-900 to-red-800" />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_top_left,rgba(30,107,184,0.15),transparent_60%)]" />
        <div className="grain-overlay absolute inset-0 z-[1]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <Link
            href="/es/blog"
            className="group mb-6 inline-flex items-center text-sm text-red-200/60 transition-colors hover:text-white"
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
            <span className="glass rounded-full px-3 py-1 text-xs font-bold tracking-wider text-red-200 uppercase">
              Guias para Conductores
            </span>
            <span className="text-sm text-red-200/60">9 min lectura</span>
            <span className="text-sm text-red-200/60">24 de marzo, 2026</span>
          </div>
          <h1 className="max-w-4xl text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
            Como Recuperar Tu Vehiculo{' '}
            <span className="text-gradient">del Corralon en Arizona</span>
          </h1>
        </div>
      </section>

      <article className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            <div className="lg:col-span-3">
              <div className="prose-lg max-w-none">
                <p className="reveal mb-8 text-xl leading-relaxed text-gray-600">
                  Si su vehiculo fue remolcado en Arizona, no entre en panico. El proceso para
                  recuperarlo es mas sencillo de lo que parece. Esta guia le explica exactamente que
                  documentos necesita, cuanto le costara, y como recuperar su carro lo mas rapido
                  posible.
                </p>

                <h2 className="reveal mt-12 mb-4 text-2xl font-bold text-gray-900">
                  Paso 1: Encuentre Donde Esta Su Vehiculo
                </h2>
                <p className="reveal mb-4 leading-relaxed text-gray-600">
                  Lo primero es confirmar donde esta su carro. Si fue remolcado por Axle Towing &
                  Impound, puede llamarnos directamente al{' '}
                  <a href={`tel:${COMPANY.phone}`} className="font-semibold text-[#DC2626]">
                    {COMPANY.phone}
                  </a>
                  . Tenemos dos corralone ubicados en:
                </p>
                <div className="reveal my-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {COMPANY.addresses.map((addr) => (
                    <div key={addr.label} className="rounded-xl bg-[#1B2A3F] p-5 text-white">
                      <p className="mb-1 text-lg font-bold">{addr.label}</p>
                      <p className="text-sm text-blue-200/80">{addr.street}</p>
                      <p className="text-sm text-blue-200/80">
                        {addr.city}, {addr.state} {addr.zip}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="reveal mb-4 leading-relaxed text-gray-600">
                  Si no sabe quien remolco su vehiculo, puede comunicarse con la policia local o el
                  Departamento de Transporte de Arizona para verificar si hay un registro del
                  remolque.
                </p>

                <h2 className="reveal mt-12 mb-4 text-2xl font-bold text-gray-900">
                  Paso 2: Prepare los Documentos Necesarios
                </h2>
                <p className="reveal mb-4 leading-relaxed text-gray-600">
                  Para recoger su vehiculo, necesitara presentar los siguientes documentos:
                </p>
                <ul className="reveal my-4 space-y-3 text-gray-600">
                  {[
                    {
                      doc: 'Identificacion oficial con foto',
                      desc: 'Licencia de conducir valida, pasaporte, o ID estatal',
                    },
                    {
                      doc: 'Titulo del vehiculo o registro actual',
                      desc: 'Prueba de que usted es el propietario legal del vehiculo',
                    },
                    {
                      doc: 'Comprobante de seguro vigente',
                      desc: 'Tarjeta de seguro actualizada o poliza digital',
                    },
                    {
                      doc: 'Pago de las tarifas',
                      desc: 'Efectivo, tarjeta de debito o credito — verifique formas de pago aceptadas antes de ir',
                    },
                  ].map((item) => (
                    <li key={item.doc} className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#DC2626]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900">{item.doc}</p>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <h2 className="reveal mt-12 mb-4 text-2xl font-bold text-gray-900">
                  Paso 3: Entienda las Tarifas del Corralon
                </h2>
                <p className="reveal mb-4 leading-relaxed text-gray-600">
                  Las tarifas del corralon en Arizona generalmente incluyen:
                </p>
                <div className="reveal my-6 overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#1B2A3F] text-white">
                        <th className="rounded-tl-lg p-3 text-left">Cargo</th>
                        <th className="p-3 text-left">Descripcion</th>
                        <th className="rounded-tr-lg p-3 text-right">Rango Tipico</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="bg-white hover:bg-gray-50">
                        <td className="p-3 font-medium text-gray-900">Cargo de remolque</td>
                        <td className="p-3 text-gray-600">Costo por mover el vehiculo</td>
                        <td className="p-3 text-right text-gray-900">$150–$250</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100">
                        <td className="p-3 font-medium text-gray-900">Almacenamiento diario</td>
                        <td className="p-3 text-gray-600">
                          Por cada dia que el vehiculo permanece en el corralon
                        </td>
                        <td className="p-3 text-right text-gray-900">$35–$65/dia</td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-50">
                        <td className="p-3 font-medium text-gray-900">Cargo administrativo</td>
                        <td className="p-3 text-gray-600">Papeleos y notificacion</td>
                        <td className="p-3 text-right text-gray-900">$25–$75</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="reveal my-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
                  <p className="mb-1 font-bold text-amber-800">Consejo Importante</p>
                  <p className="text-sm text-amber-700">
                    Entre mas rapido vaya al corralon, menos pagara en cargos de almacenamiento.
                    Cada dia que pasa aumenta su cuenta. Vaya lo mas pronto posible despues de
                    enterarse del remolque.
                  </p>
                </div>

                <h2 className="reveal mt-12 mb-4 text-2xl font-bold text-gray-900">
                  Paso 4: Horarios del Corralon
                </h2>
                <p className="reveal mb-4 leading-relaxed text-gray-600">
                  Los corralone de Axle Towing & Impound atienden para recuperacion de vehiculos de
                  lunes a viernes de 9am a 5pm. El servicio de despacho esta disponible 24/7/365,
                  pero la entrega de vehiculos es en horario de oficina.
                </p>

                <h2 className="reveal mt-12 mb-4 text-2xl font-bold text-gray-900">
                  Paso 5: Inspeccione Su Vehiculo al Recogerlo
                </h2>
                <p className="reveal mb-4 leading-relaxed text-gray-600">
                  Antes de firmar cualquier documento y llevarse su vehiculo, inspeccione
                  cuidadosamente:
                </p>
                <ul className="reveal my-4 space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#1E6BB8]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                    Danos visibles en la carroceria o vidrios
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#1E6BB8]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                    Que todos sus objetos personales esten intactos
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#1E6BB8]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                    Que el kilometraje sea el mismo que cuando fue remolcado
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#1E6BB8]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                    Guarde todos los recibos y documentos del corralon
                  </li>
                </ul>

                <div className="reveal mt-12 rounded-2xl bg-[#1B2A3F] p-8 text-center text-white">
                  <h3 className="mb-2 text-2xl font-bold">Busca Su Vehiculo?</h3>
                  <p className="mb-6 text-blue-200/70">
                    Llamenos para verificar si su vehiculo esta en nuestro corralon.
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
