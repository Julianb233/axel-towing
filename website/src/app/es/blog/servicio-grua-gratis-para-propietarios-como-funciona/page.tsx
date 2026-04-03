import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Servicio de Grua Gratis para Propietarios — Como Funciona | Axle Towing',
  description:
    'Descubra como los propietarios de apartamentos, HOAs y propiedades comerciales en Phoenix obtienen servicio de grua y control de estacionamiento completamente gratis.',
  alternates: {
    canonical: `https://${COMPANY.domain}/es/blog/servicio-grua-gratis-para-propietarios-como-funciona`,
    languages: {
      es: `https://${COMPANY.domain}/es/blog/servicio-grua-gratis-para-propietarios-como-funciona`,
    },
  },
  openGraph: {
    title: 'Servicio de Grua Gratis para Propietarios — Como Funciona',
    description:
      'El modelo de remolque de propiedad privada sin costo para propietarios explicado en espanol.',
    locale: 'es_US',
  },
};

const RELATED = [
  {
    slug: 'guia-administradores-propiedad-programa-remolque-espanol',
    title: 'Guia para Administradores de Propiedad: Programa de Remolque',
    category: 'Para Propietarios',
  },
  {
    slug: 'vehiculos-abandonados-propiedad-privada-que-hacer',
    title: 'Vehiculos Abandonados en Propiedad Privada: Que Hacer',
    category: 'Para Propietarios',
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
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-800 via-indigo-900 to-blue-950" />
        <div className="absolute inset-0 z-[1] bg-black/20" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/es/blog"
            className="group mb-6 inline-flex items-center text-sm text-blue-200/70 transition-colors hover:text-white"
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
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
            Para Propietarios
          </span>
          <h1 className="mt-3 text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
            Servicio de Grua Gratis para Propietarios — Como Funciona
          </h1>
          <div className="mt-5 flex items-center gap-4 text-sm text-blue-200/70">
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
              Muchos propietarios se sorprenden al saber que pueden obtener servicio profesional de
              grua completamente gratis. No hay trampa. Asi es como funciona el modelo de remolque
              de propiedad privada en Arizona.
            </p>

            <div className="not-prose my-6 rounded-2xl border-2 border-blue-200 bg-blue-50 p-6 text-center">
              <p className="mb-2 text-5xl font-black text-blue-700">$0</p>
              <p className="text-lg font-semibold text-gray-700">
                Costo para propietarios en Arizona
              </p>
              <p className="mt-1 text-sm text-gray-500">
                El dueno del vehiculo infractor paga los cargos
              </p>
            </div>

            <h2>Como Funciona el Modelo de Negocio</h2>
            <p>
              En Arizona, los cargos por remolque de propiedad privada se cobran al{' '}
              <strong>dueno del vehiculo</strong>, no al propietario de la propiedad. La persona que
              violo las reglas paga las consecuencias.
            </p>

            <h2>El Proceso Paso a Paso</h2>
            <ol>
              <li>
                Usted llama a Axle Towing cuando hay un vehiculo no autorizado en su propiedad
              </li>
              <li>Respondemos rapidamente — disponibles 24/7/365</li>
              <li>Documentamos fotograficamente el vehiculo antes de remolcar</li>
              <li>Remolcamos conforme a las leyes de Arizona</li>
              <li>El dueno del vehiculo paga las tarifas de remolque y almacenamiento</li>
              <li>Usted no recibe ninguna factura</li>
            </ol>

            <h2>Que Esta Incluido Sin Costo</h2>
            <ul>
              <li>Instalacion de senales requeridas por ley de Arizona</li>
              <li>Patrullaje programado de su propiedad</li>
              <li>Respuesta rapida a sus llamadas</li>
              <li>Documentacion fotografica de cada remolque</li>
              <li>Manejo de toda la papeleria legal</li>
              <li>Atencion bilingue espanol e ingles</li>
            </ul>

            <h2>Diferencia: Remolque Gratis vs Reubicacion (Pagado)</h2>
            <div className="not-prose my-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-xl border-2 border-emerald-200 p-5">
                <p className="mb-2 font-bold text-emerald-700">
                  Remolque de Propiedad Privada (GRATIS)
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>- Vehiculos sin permiso</li>
                  <li>- Espacios invadidos</li>
                  <li>- Accesos bloqueados</li>
                </ul>
              </div>
              <div className="rounded-xl border-2 border-blue-200 p-5">
                <p className="mb-2 font-bold text-blue-700">Reubicacion de Vehiculos (PAGADO)</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>- Durante construccion</li>
                  <li>- Mantenimiento del lote</li>
                  <li>- Eventos especiales</li>
                </ul>
              </div>
            </div>

            <h2>Quien Puede Beneficiarse</h2>
            <ul>
              <li>Complejos de apartamentos y condominios</li>
              <li>Comunidades HOA</li>
              <li>Centros comerciales y plazas</li>
              <li>Edificios de oficinas y parques empresariales</li>
              <li>Restaurantes, hoteles y negocios</li>
              <li>Estacionamientos privados</li>
            </ul>
          </div>

          <div className="mt-12 rounded-2xl bg-[#1B2A3F] p-8 text-center text-white">
            <h3 className="mb-3 text-2xl font-bold">Comience Hoy — Es Completamente Gratis</h3>
            <p className="mb-6 text-blue-200/80">
              Llamenos para configurar su programa de control de estacionamiento sin costo.
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
