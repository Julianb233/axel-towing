import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Que Hacer Despues de un Accidente de Auto en Arizona | Axle Towing',
  description:
    'Guia paso a paso: que hacer despues de un accidente de carro en Arizona. Seguridad, documentacion, seguro, y cuando necesita llamar una grua en Phoenix.',
  alternates: {
    canonical: `https://${COMPANY.domain}/es/blog/que-hacer-despues-accidente-auto-arizona`,
    languages: {
      es: `https://${COMPANY.domain}/es/blog/que-hacer-despues-accidente-auto-arizona`,
    },
  },
  openGraph: {
    title: 'Que Hacer Despues de un Accidente de Auto en Arizona',
    description:
      'Pasos importantes a seguir despues de un accidente en Arizona, incluyendo cuando llamar una grua.',
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
    slug: 'cuanto-cuesta-grua-arizona-guia-precios-2026',
    title: 'Cuanto Cuesta una Grua en Arizona?',
    category: 'Guias para Conductores',
  },
  {
    slug: 'como-recuperar-vehiculo-del-corralon-arizona',
    title: 'Como Recuperar Tu Vehiculo del Corralon en Arizona',
    category: 'Guias para Conductores',
  },
];

export default function Article() {
  return (
    <>
      <section className="relative flex min-h-[42vh] items-end overflow-hidden pb-12">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-700 via-gray-800 to-slate-900" />
        <div className="absolute inset-0 z-[1] bg-black/30" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/es/blog"
            className="group mb-6 inline-flex items-center text-sm text-slate-300/70 transition-colors hover:text-white"
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
          <span className="mb-4 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-700">
            Guias para Conductores
          </span>
          <h1 className="mt-3 text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
            Que Hacer Despues de un Accidente de Auto en Arizona
          </h1>
          <div className="mt-5 flex items-center gap-4 text-sm text-slate-300/70">
            <span>8 min lectura</span>
            <span>·</span>
            <span>Axle Towing &amp; Impound</span>
          </div>
        </div>
      </section>

      <article className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed max-w-none">
            <p className="mb-8 text-xl leading-relaxed font-medium text-gray-700">
              Un accidente de auto es una de las situaciones mas estresantes que puede vivir. Saber
              exactamente que hacer en los minutos y horas despues puede protegerle legalmente,
              medicamente, y economicamente.
            </p>

            <div className="not-prose my-6 rounded-r-lg border-l-4 border-red-600 bg-red-50 p-5">
              <p className="mb-1 font-bold text-red-700">
                Si hay heridos graves: Llame al 911 inmediatamente
              </p>
              <p className="text-sm text-red-600">
                La seguridad es la prioridad numero uno antes de cualquier otra accion.
              </p>
            </div>

            <h2>Paso 1: Asegurese y Evaluc el Peligro</h2>
            <ol>
              <li>Mantenga la calma — respire profundo</li>
              <li>Verifique si usted o sus pasajeros estan heridos</li>
              <li>Si el vehiculo puede moverse y es seguro, movalo al costado de la carretera</li>
              <li>Encienda las luces de emergencia (intermitentes)</li>
              <li>Si no puede mover el vehiculo, salga con cuidado por el lado seguro</li>
            </ol>

            <h2>Paso 2: Llame al 911 si es Necesario</h2>
            <p>
              En Arizona, es obligatorio reportar accidentes con heridos o con danos superiores a
              $2,000. Incluso si el accidente parece menor, llamar a la policia le protege
              legalmente y facilita el proceso con el seguro.
            </p>

            <h2>Paso 3: Intercambie Informacion con el Otro Conductor</h2>
            <ul>
              <li>Nombre completo y numero de telefono</li>
              <li>Numero de licencia de conducir</li>
              <li>Numero de placas del vehiculo</li>
              <li>Compania de seguro y numero de poliza</li>
              <li>Marca, modelo y ano del vehiculo</li>
            </ul>

            <h2>Paso 4: Documente Todo con Su Telefono</h2>
            <ul>
              <li>Fotografias de todos los vehiculos involucrados</li>
              <li>Danos desde multiples angulos</li>
              <li>La escena del accidente en general</li>
              <li>Hora, fecha y ubicacion exacta</li>
              <li>Informacion de testigos si los hay</li>
            </ul>

            <h2>Paso 5: Cuando Necesita una Grua</h2>
            <p>Despues de un accidente, necesitara una grua si:</p>
            <ul>
              <li>El vehiculo no enciende o no puede manejarse con seguridad</li>
              <li>Hay danos al motor, transmision o eje</li>
              <li>Las llantas estan danadas y no tiene refaccion disponible</li>
              <li>Las bolsas de aire se activaron</li>
              <li>La policia ordena que el vehiculo sea removido de la escena</li>
            </ul>

            <div className="not-prose my-8 rounded-2xl bg-[#1B2A3F] p-6 text-center text-white">
              <p className="mb-1 text-lg font-bold">Grua de Emergencia en Phoenix</p>
              <a
                href={`tel:${COMPANY.phone}`}
                className="my-2 block text-3xl font-black text-[#DC2626] hover:text-red-400"
              >
                {COMPANY.phone}
              </a>
              <p className="text-sm text-blue-200/70">Disponible 24/7/365 — Despacho inmediato</p>
            </div>

            <h2>Paso 6: Notifique a Su Compania de Seguro</h2>
            <p>
              Llame a su seguro lo antes posible, aunque crea que no fue su culpa. La mayoria de
              polizas requieren notificacion inmediata. Tenga a mano toda la informacion que
              recopilo en la escena.
            </p>

            <h2>Que NO Hacer Despues de un Accidente</h2>
            <ul>
              <li>No admita culpa ni diga &quot;lo siento&quot; en la escena del accidente</li>
              <li>No firme documentos sin leerlos completamente</li>
              <li>No ignore dolor o molestias — busque atencion medica aunque parezca leve</li>
              <li>No discuta agresivamente con el otro conductor</li>
              <li>No abandone la escena si hay heridos</li>
            </ul>
          </div>

          <div className="mt-12 rounded-2xl bg-[#1B2A3F] p-8 text-center text-white">
            <h3 className="mb-3 text-2xl font-bold">Necesita Grua Despues de un Accidente?</h3>
            <p className="mb-6 text-blue-200/80">
              Axle Towing esta disponible 24/7/365 en todo el area de Phoenix.
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
