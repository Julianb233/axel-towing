import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Guia de Estacionamiento para Inquilinos de Apartamentos en Phoenix | Axle Towing',
  description:
    'Entienda las reglas de estacionamiento en complejos de apartamentos de Phoenix: espacios asignados, visitas, permisos y como evitar que remolquen su vehiculo.',
  alternates: {
    canonical: `https://${COMPANY.domain}/es/blog/guia-estacionamiento-inquilinos-apartamentos-phoenix`,
    languages: {
      es: `https://${COMPANY.domain}/es/blog/guia-estacionamiento-inquilinos-apartamentos-phoenix`,
    },
  },
  openGraph: {
    title: 'Guia de Estacionamiento para Inquilinos de Apartamentos en Phoenix',
    description:
      'Todo lo que los inquilinos de apartamentos en Phoenix necesitan saber sobre estacionamiento.',
    locale: 'es_US',
  },
};

const RELATED = [
  {
    slug: 'derechos-conductores-cuando-remolcan-auto-arizona',
    title: 'Derechos de los Conductores Cuando Remolcan Tu Auto en Arizona',
    category: 'Derechos y Leyes',
  },
  {
    slug: 'como-recuperar-vehiculo-del-corralon-arizona',
    title: 'Como Recuperar Tu Vehiculo del Corralon en Arizona',
    category: 'Guias para Conductores',
  },
  {
    slug: 'servicio-grua-gratis-para-propietarios-como-funciona',
    title: 'Servicio de Grua Gratis para Propietarios — Como Funciona',
    category: 'Para Propietarios',
  },
];

export default function Article() {
  return (
    <>
      <section className="relative flex min-h-[42vh] items-end overflow-hidden pb-12">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-emerald-600 via-green-700 to-emerald-900" />
        <div className="absolute inset-0 z-[1] bg-black/30" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/es/blog"
            className="group mb-6 inline-flex items-center text-sm text-emerald-200/70 transition-colors hover:text-white"
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
          <span className="mb-4 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
            Para Inquilinos
          </span>
          <h1 className="mt-3 text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
            Guia de Estacionamiento para Inquilinos de Apartamentos en Phoenix
          </h1>
          <div className="mt-5 flex items-center gap-4 text-sm text-emerald-200/70">
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
              Vivir en un complejo de apartamentos en Phoenix tiene sus ventajas, pero las reglas de
              estacionamiento pueden ser complicadas. Esta guia le explica todo lo que necesita
              saber para evitar que remolquen su vehiculo y entender sus derechos como inquilino.
            </p>

            <h2>Tipos de Estacionamiento en Apartamentos</h2>
            <p>
              La mayoria de los complejos de apartamentos en Phoenix ofrecen diferentes tipos de
              estacionamiento:
            </p>
            <ul>
              <li>
                <strong>Espacio asignado:</strong> Un espacio especifico reservado solo para su
                unidad, identificado con su numero de apartamento o una pegatina.
              </li>
              <li>
                <strong>Estacionamiento abierto:</strong> Cualquier residente puede usar cualquier
                espacio disponible sin marcar.
              </li>
              <li>
                <strong>Garaje cubierto:</strong> Un espacio techado que puede tener costo adicional
                mensual.
              </li>
              <li>
                <strong>Estacionamiento para visitas:</strong> Espacios limitados solo para
                visitantes, generalmente con limite de tiempo.
              </li>
            </ul>

            <h2>Reglas Comunes que Causan Remolques</h2>
            <p>
              Las siguientes son las razones mas comunes por las que los vehiculos son remolcados en
              complejos de apartamentos:
            </p>

            <div className="my-6 rounded-r-lg border-l-4 border-red-600 bg-red-50 p-5">
              <p className="mb-3 font-bold text-red-700">
                Causas mas comunes de remolque en apartamentos
              </p>
              <ul className="space-y-2 text-sm text-red-700">
                <li>Estacionarse en el espacio asignado de otro residente</li>
                <li>Usar el estacionamiento para visitas por mas de 24-48 horas</li>
                <li>No tener permiso de estacionamiento visible</li>
                <li>Estacionarse en zona de bomberos o area de acceso de emergencia</li>
                <li>Vehiculo sin registro o con placas vencidas</li>
                <li>Estacionarse en el estacionamiento de otro negocio</li>
                <li>Bloquear garajes o entradas</li>
              </ul>
            </div>

            <h2>El Sistema de Permisos de Estacionamiento</h2>
            <p>
              Muchos complejos de apartamentos en Phoenix usan un sistema de permisos. Si su
              complejo usa este sistema:
            </p>
            <ul>
              <li>Solicite su permiso a la administracion al momento de mudarse</li>
              <li>
                Ponga el permiso visible en su vehiculo (generalmente en el espejo retrovisor o
                parabrisas)
              </li>
              <li>
                Si cambia de vehiculo, actualice su permiso con la administracion inmediatamente
              </li>
              <li>Si su permiso se pierde, solicite un reemplazo — no espere</li>
              <li>
                Los permisos para visitas generalmente son temporales — solicite uno a la
                administracion
              </li>
            </ul>

            <h2>Estacionamiento para Sus Visitas</h2>
            <p>
              Las visitas son una causa comun de remolques porque los residentes no conocen bien las
              reglas para sus invitados. Siga estos consejos:
            </p>
            <ul>
              <li>Siempre lleve a sus visitas al area de estacionamiento para visitantes</li>
              <li>Si su complejo requiere permisos para visitas, solicite uno en la oficina</li>
              <li>Informe a sus visitas sobre el limite de tiempo del estacionamiento</li>
              <li>
                No permita que sus visitas usen su espacio asignado si usted no esta en casa —
                pueden remolcar al que se estacione sin permiso
              </li>
              <li>Para visitas de mas de 1-2 dias, consulte con la administracion</li>
            </ul>

            <h2>¿Que Hacer Si Su Auto Fue Remolcado de Su Apartamento?</h2>
            <p>Si llega a casa y su vehiculo no esta, siga estos pasos:</p>
            <ol>
              <li>
                Verifique que su vehiculo realmente fue remolcado — revisar el area completa del
                estacionamiento primero
              </li>
              <li>Llame a la empresa de remolque indicada en la senalizacion del complejo</li>
              <li>Si no hay senalizacion, contacte a la administracion de su complejo</li>
              <li>Reuna sus documentos: ID, registro del vehiculo, prueba de residencia</li>
              <li>
                Recupere su vehiculo lo antes posible para evitar acumulacion de tarifas de
                almacenamiento
              </li>
            </ol>

            <h2>Sus Derechos Como Inquilino</h2>
            <p>
              Aunque los propietarios tienen derecho a hacer cumplir las reglas de estacionamiento
              en su propiedad privada, usted tambien tiene derechos:
            </p>
            <ul>
              <li>
                Derecho a recibir informacion clara sobre las reglas de estacionamiento al momento
                de firmar su contrato
              </li>
              <li>
                Derecho a que la senalizacion de advertencia sea visible y clara antes de cualquier
                remolque
              </li>
              <li>
                Derecho a recuperar sus pertenencias personales del vehiculo sin pagar el remolque
                completo
              </li>
              <li>Derecho a recibir documentacion del remolque (empresa, hora, razon)</li>
            </ul>
          </div>

          <div className="mt-12 rounded-2xl bg-[#1B2A3F] p-8 text-center text-white">
            <h3 className="mb-3 text-2xl font-bold">¿Su Vehiculo Fue Remolcado en Phoenix?</h3>
            <p className="mb-6 text-blue-200/80">
              Llame a Axle Towing para localizar su vehiculo y conocer el proceso de recuperacion.
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
