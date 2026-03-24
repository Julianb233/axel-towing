import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Temporada de Monsones: Protege Tu Auto en Phoenix | Axle Towing',
  description:
    'Consejos de seguridad para conducir durante los monsones en Phoenix. Que hacer si su carro se inunda o queda atrapado en agua durante las lluvias de Arizona.',
  alternates: {
    canonical: `https://${COMPANY.domain}/es/blog/temporada-de-monsones-protege-tu-auto-phoenix`,
    languages: {
      es: `https://${COMPANY.domain}/es/blog/temporada-de-monsones-protege-tu-auto-phoenix`,
    },
  },
  openGraph: {
    title: 'Temporada de Monsones: Protege Tu Auto en Phoenix',
    description: 'Guia de seguridad vial durante la temporada de monzones en Phoenix, AZ.',
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
    slug: 'que-hacer-despues-accidente-auto-arizona',
    title: 'Que Hacer Despues de un Accidente de Auto en Arizona',
    category: 'Guias para Conductores',
  },
  {
    slug: 'cuanto-cuesta-grua-arizona-guia-precios-2026',
    title: 'Cuanto Cuesta una Grua en Arizona?',
    category: 'Guias para Conductores',
  },
];

export default function Article() {
  return (
    <>
      <section className="relative flex min-h-[42vh] items-end overflow-hidden pb-12">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-cyan-700 via-sky-800 to-cyan-950" />
        <div className="absolute inset-0 z-[1] bg-black/30" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/es/blog"
            className="group mb-6 inline-flex items-center text-sm text-cyan-200/70 transition-colors hover:text-white"
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
          <span className="mb-4 inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold text-cyan-700">
            Seguridad Vial
          </span>
          <h1 className="mt-3 text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
            Temporada de Monsones: Protege Tu Auto en Phoenix
          </h1>
          <div className="mt-5 flex items-center gap-4 text-sm text-cyan-200/70">
            <span>7 min lectura</span>
            <span>·</span>
            <span>Axle Towing &amp; Impound</span>
          </div>
        </div>
      </section>

      <article className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed max-w-none">
            <p className="mb-8 text-xl leading-relaxed font-medium text-gray-700">
              La temporada de monsones en Phoenix (junio a septiembre) transforma el desierto con
              lluvias intensas, vientos fuertes y relamapagos. Estos fenomenos climaticos
              representan peligros serios para los conductores.
            </p>

            <h2>El Peligro Mas Grave: Inundaciones Repentinas</h2>
            <div className="not-prose my-6 rounded-r-lg border-l-4 border-red-600 bg-red-50 p-5">
              <p className="mb-2 font-bold text-red-700">
                &quot;Turn Around, Don&apos;t Drown&quot; — Da la Vuelta, No Te Ahogues
              </p>
              <p className="text-sm text-red-600">
                NUNCA intente cruzar una calle inundada. Solo 6 pulgadas de agua en movimiento
                pueden tirar a una persona adulta, y 2 pies de agua pueden arrastrar un vehiculo
                completo.
              </p>
            </div>

            <h2>Que es la Temporada de Monsones en Arizona?</h2>
            <p>
              Los monsones de Arizona son tormentas intensas tipicas de junio a septiembre. Se
              caracterizan por lluvias torrenciales en minutos, vientos de hasta 60 mph, visibilidad
              reducida por polvo (haboobs) y relamapagos frecuentes. El suelo del desierto no
              absorbe el agua rapido, provocando inundaciones repentinas.
            </p>

            <h2>Consejos de Seguridad para Conducir en los Monsones</h2>
            <ol>
              <li>
                <strong>Monitoree el clima:</strong> Use apps meteorologicas y escuche alertas antes
                de salir
              </li>
              <li>
                <strong>Reduzca la velocidad:</strong> Los caminos mojados requieren mayor distancia
                de frenado
              </li>
              <li>
                <strong>Encienda las luces bajas:</strong> En lluvia o polvo, mejoran la visibilidad
              </li>
              <li>
                <strong>Aumente la distancia:</strong> Mantenga 3-4 segundos entre vehiculos
              </li>
              <li>
                <strong>Detengase si no ve:</strong> Orillese en zona segura y espere
              </li>
              <li>
                <strong>Nunca cruce agua:</strong> No sabe la profundidad ni la fuerza de la
                corriente
              </li>
            </ol>

            <h2>Que Hacer Si Su Vehiculo Queda Atrapado en el Agua</h2>
            <ol>
              <li>Si el agua esta subiendo, salga del vehiculo INMEDIATAMENTE</li>
              <li>Muevase hacia terreno elevado, lejos del agua</li>
              <li>No intente recuperar el vehiculo mientras el agua esta activa</li>
              <li>Llame al 911 si esta en peligro</li>
              <li>Una vez que baje el agua, llame a una grua para evaluar danos</li>
            </ol>

            <h2>Danos Comunes por Monsones</h2>
            <ul>
              <li>
                <strong>Motor hidrolocked:</strong> Si aspira agua puede danarse irreparablemente —
                nunca intente encenderlo si estuvo inundado
              </li>
              <li>
                <strong>Corrosion electrica:</strong> El agua en sistemas electricos causa problemas
                semanas despues
              </li>
              <li>
                <strong>Moho en el interior:</strong> Alfombras y tapiceria mojada generan moho
                rapidamente
              </li>
              <li>
                <strong>Danos al tren de rodaje:</strong> El agua con arena y barro afecta frenos y
                suspension
              </li>
            </ul>

            <h2>Preparacion Pre-Temporada para Su Vehiculo</h2>
            <ul>
              <li>Verifique que los limpiaparabrisas funcionen bien</li>
              <li>Revise la profundidad de los surcos de sus neumaticos</li>
              <li>Asegurese que los frenos esten en buen estado</li>
              <li>Revise que todas las luces funcionen correctamente</li>
              <li>Tenga linterna de emergencia y agua embotellada en el vehiculo</li>
            </ul>
          </div>

          <div className="mt-12 rounded-2xl bg-[#1B2A3F] p-8 text-center text-white">
            <h3 className="mb-3 text-2xl font-bold">
              Necesita Grua Durante o Despues de un Monson?
            </h3>
            <p className="mb-6 text-blue-200/80">
              Operamos durante la temporada de monsones. Llamenos en cualquier momento.
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
