import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Guia para Administradores de Propiedad: Programa de Remolque | Axle Towing',
  description:
    'Como los administradores de propiedad en Phoenix pueden configurar un programa de control de estacionamiento profesional completamente gratis. Guia completa en espanol.',
  alternates: {
    canonical: `https://${COMPANY.domain}/es/blog/guia-administradores-propiedad-programa-remolque-espanol`,
    languages: {
      es: `https://${COMPANY.domain}/es/blog/guia-administradores-propiedad-programa-remolque-espanol`,
    },
  },
  openGraph: {
    title: 'Guia para Administradores de Propiedad: Programa de Remolque en Espanol',
    description:
      'Configure su programa de control de estacionamiento sin costo en Phoenix — guia en espanol.',
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
    slug: 'vehiculos-abandonados-propiedad-privada-que-hacer',
    title: 'Vehiculos Abandonados en Propiedad Privada: Que Hacer',
    category: 'Para Propietarios',
  },
  {
    slug: 'guia-estacionamiento-inquilinos-apartamentos-phoenix',
    title: 'Guia de Estacionamiento para Inquilinos de Apartamentos',
    category: 'Para Inquilinos',
  },
];

export default function Article() {
  return (
    <>
      <section className="relative flex min-h-[42vh] items-end overflow-hidden pb-12">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-700 via-violet-800 to-purple-950" />
        <div className="absolute inset-0 z-[1] bg-black/30" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/es/blog"
            className="group mb-6 inline-flex items-center text-sm text-purple-200/70 transition-colors hover:text-white"
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
            Guia para Administradores de Propiedad: Programa de Remolque en Espanol
          </h1>
          <div className="mt-5 flex items-center gap-4 text-sm text-purple-200/70">
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
              Si administra apartamentos, una comunidad HOA, o una propiedad comercial en Phoenix,
              un programa de control de estacionamiento puede transformar la calidad de vida de sus
              residentes — y no le cuesta nada a usted.
            </p>

            <h2>Por Que los Administradores Necesitan un Programa de Remolque</h2>
            <p>
              El estacionamiento desordenado genera quejas constantes de residentes, reduce la
              satisfaccion en la propiedad, puede afectar las renovaciones de contratos, y crea
              tension entre vecinos. Un programa profesional resuelve estos problemas
              sistematicamente.
            </p>

            <h2>Paso 1: Evaluc Su Situacion Actual</h2>
            <p>Antes de llamarnos, tome nota de:</p>
            <ul>
              <li>Numero de espacios disponibles y su distribucion</li>
              <li>
                Problemas actuales: vehiculos sin permiso, visitantes abusivos, espacios bloqueados
              </li>
              <li>Si tiene senalizacion existente y si cumple con la ley de Arizona</li>
              <li>Numero de unidades y vehiculos registrados</li>
            </ul>

            <h2>Paso 2: Contenos y Configuramos Todo Gratis</h2>
            <p>Cuando contacta a Axle Towing, nosotros:</p>
            <ul>
              <li>Evaluamos su propiedad sin costo</li>
              <li>Instalamos senales que cumplen con ARS (ley de Arizona)</li>
              <li>Le explicamos como reportar vehiculos</li>
              <li>Configuramos patrullaje segun sus necesidades</li>
              <li>Le proporcionamos materiales para comunicar las reglas a sus residentes</li>
            </ul>

            <h2>Como Comunicar el Nuevo Programa a Sus Residentes</h2>
            <p>
              La comunicacion clara es clave para que el programa funcione sin conflictos.
              Recomendamos:
            </p>
            <ol>
              <li>Enviar aviso escrito a todos los residentes con 30 dias de anticipacion</li>
              <li>Explicar claramente las reglas en espanol e ingles</li>
              <li>Registrar todos los vehiculos de residentes antes de activar el patrullaje</li>
              <li>Dar un periodo de gracia de 1-2 semanas con advertencias antes de remolcar</li>
              <li>Mantener comunicacion abierta para preguntas y registros de nuevos vehiculos</li>
            </ol>

            <h2>Tipos de Propiedades que Servimos</h2>
            <div className="not-prose my-6 grid grid-cols-2 gap-3 md:grid-cols-3">
              {[
                'Complejos de apartamentos',
                'Comunidades HOA',
                'Centros comerciales',
                'Edificios de oficinas',
                'Plazas comerciales',
                'Condominios',
                'Parques industriales',
                'Hoteles y moteles',
                'Restaurantes',
              ].map((type) => (
                <div
                  key={type}
                  className="rounded-lg border border-purple-100 bg-purple-50 p-3 text-center text-sm font-medium text-purple-800"
                >
                  {type}
                </div>
              ))}
            </div>

            <h2>Preguntas Frecuentes de Administradores</h2>
            <p>
              <strong>¿Cuanto tiempo tarda en configurarse el programa?</strong>
            </p>
            <p>
              Tipicamente 1-2 dias laborales desde la llamada inicial hasta que las senales estan
              instaladas.
            </p>

            <p>
              <strong>¿Que pasa si un residente reporta error en el remolque?</strong>
            </p>
            <p>
              Tenemos un proceso claro para manejar disputas. Documentamos todos los remolques
              fotograficamente para proteger tanto a usted como a nosotros.
            </p>

            <p>
              <strong>¿Pueden remolcar vehiculos de residentes sin mi autorizacion?</strong>
            </p>
            <p>
              No. Para residentes, siempre verificamos con usted o seguimos los protocolos que
              acordemos juntos.
            </p>
          </div>

          <div className="mt-12 rounded-2xl bg-[#1B2A3F] p-8 text-center text-white">
            <h3 className="mb-3 text-2xl font-bold">Configure Su Programa Hoy — Sin Costo</h3>
            <p className="mb-6 text-blue-200/80">
              Llamenos y en 24 horas podemos tener su programa activo.
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
