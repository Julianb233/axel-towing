import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Blog en Espanol — Guias de Grua y Estacionamiento en Phoenix | Axle Towing',
  description:
    'Articulos y guias en espanol sobre remolque de propiedad privada, control de estacionamiento, como recuperar tu vehiculo del corralon, y mas. Servicio en el area de Phoenix, Arizona.',
  alternates: {
    canonical: `https://${COMPANY.domain}/es/blog`,
    languages: {
      en: `https://${COMPANY.domain}/blog`,
      es: `https://${COMPANY.domain}/es/blog`,
    },
  },
  openGraph: {
    title: 'Blog en Espanol — Grua y Estacionamiento en Phoenix',
    description:
      'Guias y articulos en espanol sobre servicios de grua, recuperacion de vehiculos y control de estacionamiento en Phoenix, AZ.',
    locale: 'es_US',
    alternateLocale: 'en_US',
  },
};

interface ArticleES {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  gradient: string;
  date: string;
}

const ARTICLES_ES: ArticleES[] = [
  {
    slug: 'que-hacer-cuando-tu-auto-se-descompone-en-phoenix',
    title: 'Que Hacer Cuando Tu Auto Se Descompone en Phoenix',
    description:
      'Guia paso a paso para conductores en Phoenix: que hacer si su carro se descompone, cuando llamar una grua, y como mantenerse seguro en el calor de Arizona.',
    category: 'Guias para Conductores',
    readTime: '8 min',
    gradient: 'from-blue-600 via-blue-800 to-blue-950',
    date: '24 de marzo, 2026',
  },
  {
    slug: 'servicio-grua-gratis-para-propietarios-como-funciona',
    title: 'Servicio de Grua Gratis para Propietarios — Como Funciona',
    description:
      'Explicacion clara de como los propietarios obtienen servicio de grua sin costo. El modelo de remolque de propiedad privada explicado en espanol.',
    category: 'Para Propietarios',
    readTime: '6 min',
    gradient: 'from-blue-500 via-indigo-600 to-blue-800',
    date: '24 de marzo, 2026',
  },
  {
    slug: 'que-hacer-despues-accidente-auto-arizona',
    title: 'Que Hacer Despues de un Accidente de Auto en Arizona',
    description:
      'Pasos importantes a seguir despues de un accidente: seguridad, documentacion, seguro, y cuando necesita llamar una grua en Arizona.',
    category: 'Guias para Conductores',
    readTime: '8 min',
    gradient: 'from-slate-600 via-gray-700 to-slate-900',
    date: '24 de marzo, 2026',
  },
  {
    slug: 'temporada-de-monsones-protege-tu-auto-phoenix',
    title: 'Temporada de Monsones: Protege Tu Auto en Phoenix',
    description:
      'Consejos de seguridad para conducir durante la temporada de monzones en Phoenix. Que hacer si su carro se inunda o queda atrapado en agua.',
    category: 'Seguridad Vial',
    readTime: '7 min',
    gradient: 'from-cyan-600 via-sky-700 to-cyan-900',
    date: '24 de marzo, 2026',
  },
  {
    slug: 'guia-administradores-propiedad-programa-remolque-espanol',
    title: 'Guia para Administradores de Propiedad: Programa de Remolque en Espanol',
    description:
      'Como los administradores de propiedad pueden configurar un programa de control de estacionamiento profesional sin costo. Todo en espanol.',
    category: 'Para Propietarios',
    readTime: '8 min',
    gradient: 'from-purple-600 via-violet-700 to-purple-900',
    date: '24 de marzo, 2026',
  },
  {
    slug: 'vehiculos-abandonados-propiedad-privada-que-hacer',
    title: 'Vehiculos Abandonados en Propiedad Privada: Que Hacer',
    description:
      'El proceso legal para remover vehiculos abandonados de su propiedad en Arizona. Derechos del propietario y pasos a seguir.',
    category: 'Para Propietarios',
    readTime: '7 min',
    gradient: 'from-rose-600 via-red-700 to-rose-900',
    date: '24 de marzo, 2026',
  },
];

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  'Guias para Conductores': { bg: 'bg-blue-100', text: 'text-blue-700' },
  'Derechos y Leyes': { bg: 'bg-amber-100', text: 'text-amber-700' },
  'Para Inquilinos': { bg: 'bg-emerald-100', text: 'text-emerald-700' },
  'Para Propietarios': { bg: 'bg-purple-100', text: 'text-purple-700' },
  'Seguridad Vial': { bg: 'bg-cyan-100', text: 'text-cyan-700' },
};

export default function SpanishBlogIndex() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[40vh] items-end overflow-hidden pb-12">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1B2A3F] via-[#1E3A5F] to-[#1B2A3F]" />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_top_right,rgba(220,38,38,0.12),transparent_60%)]" />
        <div className="grain-overlay absolute inset-0 z-[1]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Language Switch */}
          <Link
            href="/blog"
            className="group mb-6 inline-flex items-center text-sm text-blue-200/60 transition-colors hover:text-white"
          >
            <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            Ver en ingles
          </Link>
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full border border-red-500/30 bg-red-600/20 px-3 py-1 text-xs font-bold tracking-wider text-red-400 uppercase">
              Hablamos Espanol
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold tracking-wider text-blue-200 uppercase">
              {ARTICLES_ES.length} Articulos
            </span>
          </div>
          <h1 className="mb-4 text-4xl leading-tight font-bold text-white md:text-5xl">
            Blog en <span className="text-gradient">Espanol</span>
          </h1>
          <p className="max-w-2xl text-xl text-blue-100/80">
            Guias y recursos en espanol sobre remolque, control de estacionamiento y leyes de
            transito en Phoenix, Arizona.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ARTICLES_ES.map((article) => {
              const colors = CATEGORY_COLORS[article.category] ?? {
                bg: 'bg-gray-100',
                text: 'text-gray-700',
              };
              return (
                <Link
                  key={article.slug}
                  href={`/es/blog/${article.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Card Hero */}
                  <div
                    className={`h-40 bg-gradient-to-br ${article.gradient} relative overflow-hidden`}
                  >
                    <div className="grain-overlay absolute inset-0 opacity-40" />
                    <div className="absolute bottom-4 left-4">
                      <span
                        className={`${colors.bg} ${colors.text} rounded-full px-2 py-1 text-xs font-bold`}
                      >
                        {article.category}
                      </span>
                    </div>
                  </div>
                  {/* Card Body */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-3 text-xs text-gray-400">
                      <span>{article.readTime} lectura</span>
                      <span>·</span>
                      <span>{article.date}</span>
                    </div>
                    <h2 className="mb-2 text-lg leading-snug font-bold text-gray-900 transition-colors group-hover:text-[#DC2626]">
                      {article.title}
                    </h2>
                    <p className="flex-1 text-sm leading-relaxed text-gray-500">
                      {article.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-[#DC2626] transition-all group-hover:gap-2">
                      Leer articulo
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B2A3F] py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white">Necesita Servicio de Grua Ahora?</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-blue-200/70">
            Disponibles 24/7/365 — Llamenos en cualquier momento. Despacho inmediato en todo el area
            de Phoenix.
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
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-blue-200/60">
            <Link href="/es" className="transition-colors hover:text-white">
              Inicio
            </Link>
            <span>·</span>
            <Link href="/es/servicios" className="transition-colors hover:text-white">
              Servicios
            </Link>
            <span>·</span>
            <Link href="/es/ubicaciones" className="transition-colors hover:text-white">
              Ubicaciones
            </Link>
            <span>·</span>
            <Link href="/es/contacto" className="transition-colors hover:text-white">
              Contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
