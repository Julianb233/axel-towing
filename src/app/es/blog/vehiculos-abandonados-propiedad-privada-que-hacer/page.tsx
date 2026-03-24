import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Vehiculos Abandonados en Propiedad Privada: Que Hacer | Axle Towing',
  description:
    'Como identificar y remover legalmente vehiculos abandonados en tu propiedad en Arizona: proceso legal, documentacion requerida y plazos para la remocion.',
  alternates: {
    canonical: `https://${COMPANY.domain}/es/blog/vehiculos-abandonados-propiedad-privada-que-hacer`,
    languages: {
      es: `https://${COMPANY.domain}/es/blog/vehiculos-abandonados-propiedad-privada-que-hacer`,
    },
  },
  openGraph: {
    title: 'Vehiculos Abandonados en Propiedad Privada: Que Hacer',
    description:
      'El proceso legal para remover vehiculos abandonados de propiedad privada en Arizona.',
    locale: 'es_US',
  },
};

const RELATED = [
  {
    slug: 'servicio-grua-gratis-para-propietarios-como-funciona',
    title: 'Servicio de Grua Gratis para Propietarios — Como Funciona',
    category: 'Para Propietarios',
  },
  {
    slug: 'guia-administradores-propiedad-programa-remolque-espanol',
    title: 'Guia para Administradores de Propiedad: Programa de Remolque',
    category: 'Para Propietarios',
  },
  {
    slug: 'derechos-conductores-cuando-remolcan-auto-arizona',
    title: 'Derechos de los Conductores Cuando Remolcan Tu Auto',
    category: 'Derechos y Leyes',
  },
];

export default function Article() {
  return (
    <>
      <section className="relative flex min-h-[42vh] items-end overflow-hidden pb-12">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-rose-600 via-red-700 to-rose-900" />
        <div className="absolute inset-0 z-[1] bg-black/30" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/es/blog"
            className="group mb-6 inline-flex items-center text-sm text-rose-200/70 transition-colors hover:text-white"
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
          <span className="mb-4 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-700">
            Para Propietarios
          </span>
          <h1 className="mt-3 text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
            Vehiculos Abandonados en Propiedad Privada: Que Hacer
          </h1>
          <div className="mt-5 flex items-center gap-4 text-sm text-rose-200/70">
            <span>7 min lectura</span>
            <span>·</span>
            <span>Axle Towing & Impound</span>
          </div>
        </div>
      </section>

      <article className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed max-w-none">
            <p className="mb-8 text-xl leading-relaxed font-medium text-gray-700">
              Un vehiculo abandonado en su propiedad es mas que una molestia visual — puede
              representar una responsabilidad legal y un problema de seguridad. En Arizona, hay un
              proceso legal especifico para remover vehiculos abandonados de propiedad privada que
              debe seguirse correctamente.
            </p>

            <h2>Como Identificar un Vehiculo Abandonado</h2>
            <p>
              Un vehiculo puede considerarse abandonado si tiene una o mas de las siguientes
              caracteristicas:
            </p>
            <ul>
              <li>Sin placas o con placas vencidas por mas de 60 dias</li>
              <li>Llantas completamente desinfladas</li>
              <li>Cubierto por una capa gruesa de polvo o suciedad (tipico en Arizona)</li>
              <li>Vidrios rotos o danos extensivos</li>
              <li>Vegetacion creciendo alrededor o debajo del vehiculo</li>
              <li>Sin movimiento por 30 dias o mas</li>
              <li>Acumulacion de avisos de incumplimiento de reglas del estacionamiento</li>
            </ul>

            <h2>El Proceso Legal en Arizona</h2>
            <p>
              Arizona requiere seguir un proceso especifico antes de remover un vehiculo que podria
              ser abandonado:
            </p>

            <div className="my-6 space-y-4">
              {[
                {
                  step: 'Paso 1',
                  title: 'Documentar el vehiculo',
                  detail:
                    'Tome fotos del vehiculo con fecha y hora. Anote la ubicacion exacta, placa (si la tiene), marca, modelo y color.',
                },
                {
                  step: 'Paso 2',
                  title: 'Colocar aviso en el vehiculo',
                  detail:
                    'Coloque un aviso fisico en el vehiculo indicando que sera removido si no se reclama en 48 horas. Documente con fotos la colocacion del aviso.',
                },
                {
                  step: 'Paso 3',
                  title: 'Intentar identificar al propietario',
                  detail:
                    'Si tiene informacion del registro del vehiculo en sus registros de arrendamiento, contacte al propietario directamente.',
                },
                {
                  step: 'Paso 4',
                  title: 'Contactar a Axle Towing',
                  detail:
                    'Llame al ' +
                    COMPANY.phone +
                    ' para reportar el vehiculo abandonado. Gestionaremos el proceso legal de remocion por usted.',
                },
                {
                  step: 'Paso 5',
                  title: 'Notificacion al DMV de Arizona',
                  detail:
                    'Para vehiculos verdaderamente abandonados, la empresa de remolque notifica al Departamento de Vehiculos Motorizados de Arizona.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 rounded-xl bg-gray-50 p-5">
                  <span className="h-fit rounded-lg bg-[#1E6BB8] px-3 py-1 text-sm font-bold whitespace-nowrap text-white">
                    {item.step}
                  </span>
                  <div>
                    <p className="mb-1 font-bold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2>Riesgos de No Actuar</h2>
            <p>Dejar un vehiculo abandonado en su propiedad puede crear problemas adicionales:</p>
            <ul>
              <li>
                Atrae otros vehiculos abandonados — crea un efecto de &ldquo;ventana rota&rdquo;
              </li>
              <li>Puede convertirse en refugio para actividad no deseada</li>
              <li>Los fluidos del motor pueden contaminar el suelo</li>
              <li>Puede generar quejas de otros residentes y afectar la calidad de vida</li>
              <li>
                En algunos casos, puede crear responsabilidad legal para el propietario de la
                propiedad
              </li>
            </ul>

            <h2>¿Que Pasa Despues del Remolque?</h2>
            <p>Una vez que el vehiculo es remolcado a nuestro deposito:</p>
            <ul>
              <li>El vehiculo es registrado en el sistema y el propietario puede localizarlo</li>
              <li>Se notifica al propietario del vehiculo (si puede ser identificado)</li>
              <li>
                El propietario tiene un plazo determinado para reclamar el vehiculo y pagar los
                costos
              </li>
              <li>
                Si el vehiculo no es reclamado, puede ser subastado o enviado al reciclaje segun la
                ley de Arizona
              </li>
            </ul>

            <h2>Casos Especiales: Vehiculos sin Placas o VIN</h2>
            <p>
              Los vehiculos sin placas o sin numero de identificacion visible requieren un proceso
              adicional. En estos casos, es especialmente importante trabajar con una empresa de
              remolque autorizada como Axle Towing para asegurarse de que todos los requisitos
              legales sean cumplidos.
            </p>
          </div>

          <div className="mt-12 rounded-2xl bg-[#1B2A3F] p-8 text-center text-white">
            <h3 className="mb-3 text-2xl font-bold">Vehiculo Abandonado en Su Propiedad?</h3>
            <p className="mb-6 text-blue-200/80">
              Llamenos para gestionar el proceso de remocion de manera legal y profesional — sin
              costo para usted.
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
