import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Que Hacer Cuando Tu Auto Se Descompone en Phoenix | Axle Towing',
  description:
    'Guia paso a paso para conductores en Phoenix: que hacer si su carro se descompone, cuando llamar una grua, y como mantenerse seguro en el intenso calor de Arizona.',
  alternates: {
    canonical: `https://${COMPANY.domain}/es/blog/que-hacer-cuando-tu-auto-se-descompone-en-phoenix`,
    languages: {
      es: `https://${COMPANY.domain}/es/blog/que-hacer-cuando-tu-auto-se-descompone-en-phoenix`,
    },
  },
  openGraph: {
    title: 'Que Hacer Cuando Tu Auto Se Descompone en Phoenix',
    description:
      'Pasos de seguridad y como llamar una grua cuando tu carro no arranca en Phoenix, AZ.',
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
    slug: 'que-hacer-despues-accidente-auto-arizona',
    title: 'Que Hacer Despues de un Accidente de Auto en Arizona',
    category: 'Guias para Conductores',
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
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800" />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_top_left,rgba(224,43,32,0.15),transparent_60%)]" />
        <div className="grain-overlay absolute inset-0 z-[1]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <Link
            href="/es/blog"
            className="group mb-6 inline-flex items-center text-sm text-blue-200/60 transition-colors hover:text-white"
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
            <span className="glass rounded-full px-3 py-1 text-xs font-bold tracking-wider text-blue-200 uppercase">
              Guias para Conductores
            </span>
            <span className="text-sm text-blue-200/60">8 min lectura</span>
            <span className="text-sm text-blue-200/60">24 de marzo, 2026</span>
          </div>
          <h1 className="max-w-4xl text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
            Que Hacer Cuando Tu Auto Se <span className="text-gradient">Descompone en Phoenix</span>
          </h1>
        </div>
      </section>

      {/* Article */}
      <article className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose-lg max-w-none">
                <p className="reveal mb-8 text-xl leading-relaxed text-gray-600">
                  Un carro descompuesto en Phoenix puede ser una situacion estresante, especialmente
                  en pleno verano con temperaturas superiores a 110 grados Fahrenheit. Saber
                  exactamente que pasos tomar puede marcar la diferencia entre una inconveniencia
                  menor y una emergencia peligrosa.
                </p>

                <h2 className="reveal mt-12 mb-4 text-2xl font-bold text-gray-900">
                  Paso 1: Ponga en Peligro Sus Luces de Emergencia y Orillese
                </h2>
                <p className="reveal mb-4 leading-relaxed text-gray-600">
                  Tan pronto como note que algo no esta bien con su vehiculo — ya sea un golpeteo
                  extrano, humo del motor, o un neumatico desinflado — lo primero que debe hacer es
                  activar sus luces de emergencia (intermitentes) y buscar un lugar seguro para
                  detenerse.
                </p>
                <ul className="reveal my-4 space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Orillese lo mas a la derecha posible, lejos del trafico
                  </li>
                  <li className="flex items-start gap-2">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Encienda las luces de emergencia inmediatamente
                  </li>
                  <li className="flex items-start gap-2">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Si tiene triangulos o conos de emergencia, coloquelos detras de su vehiculo
                  </li>
                  <li className="flex items-start gap-2">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    No intente reparar el vehiculo en medio de una carretera transitada
                  </li>
                </ul>

                <h2 className="reveal mt-12 mb-4 text-2xl font-bold text-gray-900">
                  Paso 2: Permanezca en o Cerca de Su Vehiculo
                </h2>
                <p className="reveal mb-4 leading-relaxed text-gray-600">
                  En Phoenix, las temperaturas pueden ser extremadamente peligrosas. Si su carro se
                  descompone en verano, es importante mantener el aire acondicionado si aun
                  funciona. Si no, permanezca dentro del vehiculo con las ventanas ligeramente
                  abiertas y espere ayuda — no camine largas distancias en el calor.
                </p>
                <div className="reveal my-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
                  <h3 className="mb-2 font-bold text-amber-800">Alerta de Calor Extremo</h3>
                  <p className="text-sm text-amber-700">
                    Durante los meses de verano en Phoenix (junio-septiembre), las temperaturas
                    pueden superar los 110°F (43°C). Una descompostura en estas condiciones puede
                    convertirse en una emergencia medica en minutos. Si no tiene agua o aire, llame
                    al 911 ademas del servicio de grua.
                  </p>
                </div>

                <h2 className="reveal mt-12 mb-4 text-2xl font-bold text-gray-900">
                  Paso 3: Llame una Grua de Confianza
                </h2>
                <p className="reveal mb-4 leading-relaxed text-gray-600">
                  Una vez que este en un lugar seguro, llame a un servicio de grua. Axle Towing &
                  Impound opera las 24 horas del dia, los 7 dias de la semana, los 365 dias del ano
                  en toda el area metropolitana de Phoenix.
                </p>
                <div className="reveal my-6 rounded-xl bg-[#1B2A3F] p-6 text-white">
                  <p className="mb-1 text-lg font-bold">Axle Towing & Impound</p>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="text-3xl font-black text-[#DC2626] transition-colors hover:text-red-400"
                  >
                    {COMPANY.phone}
                  </a>
                  <p className="mt-2 text-sm text-blue-200/70">
                    Disponible 24/7/365 — Despacho inmediato
                  </p>
                </div>

                <h2 className="reveal mt-12 mb-4 text-2xl font-bold text-gray-900">
                  Causas Comunes de Descomposturas en Arizona
                </h2>
                <p className="reveal mb-4 leading-relaxed text-gray-600">
                  El clima extremo de Arizona afecta los vehiculos de maneras especificas. Las
                  causas mas frecuentes de descomposturas en Phoenix incluyen:
                </p>
                <div className="reveal my-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {[
                    {
                      title: 'Bateria descargada',
                      desc: 'El calor extremo degrada las baterias mas rapido que el frio. Una bateria debilitada puede fallar sin aviso en verano.',
                    },
                    {
                      title: 'Sobrecalentamiento del motor',
                      desc: 'El refrigerante se evapora mas rapido en el calor. Siempre verifique los niveles de liquido refrigerante antes de viajes largos.',
                    },
                    {
                      title: 'Neumatico desinflado',
                      desc: 'El asfalto caliente y la presion de aire que aumenta con el calor pueden causar explosiones de neumaticos.',
                    },
                    {
                      title: 'Fallo del alternador',
                      desc: 'El calor acelerara el desgaste del alternador, que es el componente que carga la bateria mientras maneja.',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-gray-100 bg-gray-50 p-4"
                    >
                      <h3 className="mb-1 font-bold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <h2 className="reveal mt-12 mb-4 text-2xl font-bold text-gray-900">
                  Cuando Necesita una Grua vs. Asistencia en Carretera
                </h2>
                <p className="reveal mb-4 leading-relaxed text-gray-600">
                  No todos los problemas requieren una grua. Aqui le explicamos la diferencia:
                </p>
                <div className="reveal my-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="rounded-xl border-2 border-emerald-200 p-5">
                    <h3 className="mb-3 font-bold text-emerald-700">
                      Asistencia en Carretera (sin grua)
                    </h3>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>- Llanta desinflada (puede cambiarla)</li>
                      <li>- Bateria muerta (solo necesita carga)</li>
                      <li>- Se quedo sin gasolina</li>
                      <li>- Llaves adentro del carro</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border-2 border-red-200 p-5">
                    <h3 className="mb-3 font-bold text-red-700">Necesita una Grua</h3>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>- Motor no enciende</li>
                      <li>- Daños graves despues de un accidente</li>
                      <li>- Problemas de transmision o eje</li>
                      <li>- Sobrecalentamiento severo del motor</li>
                    </ul>
                  </div>
                </div>

                <h2 className="reveal mt-12 mb-4 text-2xl font-bold text-gray-900">
                  Consejos para Prevenir Descomposturas en Phoenix
                </h2>
                <ul className="reveal my-4 space-y-3 text-gray-600">
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
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Revise la bateria antes del verano — si tiene mas de 3 anos en Phoenix, cambiele
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
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Mantenga el nivel de liquido refrigerante siempre lleno
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
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Revise la presion de los neumaticos semanalmente (el calor los infla mas)
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
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Siempre lleve agua en el carro durante el verano
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
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Guarde el numero de una grua de confianza en su telefono: {COMPANY.phone}
                  </li>
                </ul>

                {/* Final CTA */}
                <div className="reveal mt-12 rounded-2xl bg-[#1B2A3F] p-8 text-center text-white">
                  <h3 className="mb-2 text-2xl font-bold">Necesita Ayuda Ahora?</h3>
                  <p className="mb-6 text-blue-200/70">
                    Axle Towing & Impound esta disponible 24/7/365 en todo el area de Phoenix.
                    Llamenos en cualquier momento.
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

            {/* Sidebar */}
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
