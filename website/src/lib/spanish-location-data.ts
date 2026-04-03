export interface SpanishLocationPageData {
  city: string;
  slug: string;
  englishSlug: string;
  hispanicPercent: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtext: string;
  heroImage?: string;
  intro: string[];
  neighborhoods: string[];
  propertyTypes: string[];
  localStats: { label: string; value: string }[];
  testimonial: { quote: string; name: string; role: string };
  whyChooseUs: { title: string; description: string }[];
  cityFacts: string[];
}

export const SPANISH_LOCATION_PAGES: Record<string, SpanishLocationPageData> = {
  phoenix: {
    city: "Phoenix",
    slug: "phoenix",
    englishSlug: "phoenix",
    hispanicPercent: "42%",
    metaTitle: "Servicio de Grua en Phoenix, AZ | Axle Towing & Impound",
    metaDescription:
      "Servicio de grua profesional en Phoenix, Arizona. Remolque de propiedad privada y control de estacionamiento GRATIS para propietarios. Grua 24 horas. Llame al 480-288-5526.",
    heroImage: "/images/arizona-skyline-panoramic.jpg",
    heroSubtext:
      "Servicios profesionales de grua, control de estacionamiento y reubicacion de vehiculos en toda la capital de Arizona.",
    intro: [
      "Como la quinta ciudad mas grande de Estados Unidos, Phoenix presenta desafios unicos de estacionamiento para propietarios y administradores de propiedades. Con mas de 1.6 millones de residentes y un mercado de alquileres en auge, el estacionamiento no autorizado, las violaciones de carriles de bomberos y las disputas de espacios son realidades diarias para complejos de apartamentos, HOAs y propiedades comerciales en todo el Valle.",
      "Axle Towing & Impound tiene su sede aqui en Phoenix en 320 E. Pioneer St., AZ 85040. Hemos servido a la comunidad local desde 2021 y entendemos los desafios unicos de la ciudad mas grande de Arizona — desde el calor intenso que hace que los vehiculos abandonados sean un peligro hasta las fluctuaciones de poblacion estacional que cambian la demanda de estacionamiento durante todo el ano.",
      "Nuestros servicios de grua en Phoenix son completamente gratuitos para propietarios. Instalamos senalizacion conforme a la ley, patrullamos su propiedad segun su horario y removemos vehiculos no autorizados de manera rapida y profesional. Ya sea que administre un complejo de 200 apartamentos en Midtown o una comunidad de HOA en Ahwatukee, estamos para servirle.",
    ],
    neighborhoods: [
      "Centro de Phoenix",
      "Midtown",
      "Arcadia",
      "Ahwatukee",
      "South Mountain",
      "Maryvale",
      "North Phoenix",
      "Deer Valley",
      "Paradise Valley",
      "Encanto",
      "Camelback East",
      "Desert Ridge",
      "Laveen",
      "South Phoenix",
    ],
    propertyTypes: [
      "Complejos de Apartamentos",
      "Comunidades de HOA",
      "Centros Comerciales",
      "Parques de Oficinas",
      "Instalaciones Medicas",
      "Restaurantes",
      "Estacionamientos",
      "Propiedades Industriales",
    ],
    localStats: [
      { label: "Poblacion", value: "1.6M+" },
      { label: "Unidades de Apartamentos", value: "250K+" },
      { label: "Comunidades HOA", value: "3,500+" },
      { label: "Tiempo de Respuesta", value: "< 30 min" },
    ],
    testimonial: {
      quote:
        "Axle Towing ha sido un cambio total para nuestra comunidad de apartamentos. El estacionamiento no autorizado se redujo un 90% en el primer mes. Su equipo es profesional, responsivo y el portal en linea facilita todo.",
      name: "Sarah M.",
      role: "Administradora de Propiedades, Phoenix",
    },
    whyChooseUs: [
      {
        title: "Sede Local en Phoenix",
        description:
          "Con sede aqui en Phoenix en 320 E. Pioneer St., conocemos la ciudad a fondo y podemos responder mas rapido que cualquier competidor.",
      },
      {
        title: "Experiencia en Zonas Urbanas",
        description:
          "El denso mercado de apartamentos y condominios de Phoenix requiere aplicacion de leyes especializada. Manejamos propiedades de alto volumen con facilidad.",
      },
      {
        title: "Costo Cero para Usted",
        description:
          "Todos nuestros servicios — senalizacion, patrullaje, remolque y acceso al portal — son completamente gratuitos para propietarios.",
      },
      {
        title: "Disponibilidad 24/7",
        description:
          "Las violaciones de estacionamiento no paran a las 5 PM. Nuestro equipo esta disponible las 24 horas para remolques de emergencia y aplicacion de reglas.",
      },
    ],
    cityFacts: [
      "Phoenix es la capital del estado y la ciudad mas grande de Arizona",
      "Mas de 250,000 unidades de apartamentos en el area metropolitana",
      "Una de las ciudades de mas rapido crecimiento en EEUU en la ultima decada",
      "El calor extremo del verano hace que los vehiculos abandonados sean un peligro de seguridad",
      "La poblacion hispana de Phoenix es aproximadamente 42%",
    ],
  },
  mesa: {
    city: "Mesa",
    slug: "mesa",
    englishSlug: "mesa",
    hispanicPercent: "30%",
    metaTitle: "Servicio de Grua en Mesa, AZ | Axle Towing & Impound",
    metaDescription:
      "Servicio de grua profesional en Mesa, Arizona. Remolque de propiedad privada GRATIS para propietarios. Grua 24 horas en Mesa. Llame al 480-288-5526.",
    heroImage: "/images/contact-phoenix.jpg",
    heroSubtext:
      "Servicios profesionales de remolque y control de estacionamiento en Mesa — la tercera ciudad mas grande de Arizona.",
    intro: [
      "Mesa es la tercera ciudad mas grande de Arizona con mas de 500,000 residentes y un crecimiento continuo en el sector residencial y comercial. Con una poblacion hispana del 30%, Axle Towing se enorgullece de servir a toda la comunidad con servicios bilingues de grua y control de estacionamiento.",
      "Desde las areas residenciales de Red Mountain hasta los centros comerciales de Superstition Springs, Mesa presenta una diversidad de propiedades que necesitan control de estacionamiento profesional. Nuestro equipo conoce cada rincon de Mesa y responde rapidamente a cualquier llamada.",
      "Todos nuestros servicios de remolque de propiedad privada en Mesa son gratuitos para propietarios. Instalamos senalizacion, patrullamos su propiedad y removemos vehiculos no autorizados — todo sin costo para usted.",
    ],
    neighborhoods: [
      "Red Mountain",
      "Superstition Springs",
      "Downtown Mesa",
      "East Mesa",
      "West Mesa",
      "Las Sendas",
      "Eastmark",
      "Mesa Grande",
      "Dobson Ranch",
      "Alta Mesa",
    ],
    propertyTypes: [
      "Complejos de Apartamentos",
      "Comunidades de HOA",
      "Centros Comerciales",
      "Restaurantes",
      "Parques de Oficinas",
      "Iglesias y Lugares de Culto",
      "Propiedades Industriales",
      "Condominios",
    ],
    localStats: [
      { label: "Poblacion", value: "500K+" },
      { label: "Comunidades HOA", value: "1,200+" },
      { label: "Poblacion Hispana", value: "30%" },
      { label: "Tiempo de Respuesta", value: "< 30 min" },
    ],
    testimonial: {
      quote:
        "Administramos varias propiedades en Mesa y Axle Towing se encarga de todas. Su respuesta rapida y profesionalismo han eliminado nuestros problemas de estacionamiento por completo.",
      name: "Carlos R.",
      role: "Administrador de Propiedades, Mesa",
    },
    whyChooseUs: [
      {
        title: "Cobertura Completa en Mesa",
        description:
          "Desde Red Mountain hasta Downtown Mesa, cubrimos toda la ciudad con tiempos de respuesta rapidos.",
      },
      {
        title: "Servicio Bilingue",
        description:
          "Nuestro equipo habla espanol e ingles para servir mejor a toda la comunidad de Mesa.",
      },
      {
        title: "Sin Costo para Propietarios",
        description:
          "El remolque de propiedad privada, la senalizacion y el patrullaje son completamente gratuitos para usted.",
      },
      {
        title: "Respuesta Rapida 24/7",
        description:
          "Disponibles las 24 horas del dia, los 7 dias de la semana para remolques de emergencia en Mesa.",
      },
    ],
    cityFacts: [
      "Mesa es la tercera ciudad mas grande de Arizona con mas de 500,000 residentes",
      "Hogar del Sloan Park — sede de entrenamiento de primavera de los Chicago Cubs",
      "El 30% de la poblacion de Mesa es hispana",
      "Una de las ciudades de mas rapido crecimiento en el area metropolitana de Phoenix",
      "Importante centro de empleo con empresas tecnologicas y aeroespaciales",
    ],
  },
  tempe: {
    city: "Tempe",
    slug: "tempe",
    englishSlug: "tempe",
    hispanicPercent: "25%",
    metaTitle: "Servicio de Grua en Tempe, AZ | Axle Towing & Impound",
    metaDescription:
      "Servicio de grua profesional en Tempe, Arizona. Remolque GRATIS para propietarios cerca de ASU y todo Tempe. Grua 24 horas. Llame al 480-288-5526.",
    heroImage: "/images/contact-phoenix.jpg",
    heroSubtext:
      "Servicios profesionales de remolque y control de estacionamiento en Tempe — hogar de Arizona State University.",
    intro: [
      "Tempe es una ciudad vibrante con mas de 180,000 residentes, incluyendo la gran comunidad estudiantil de Arizona State University (ASU). Con una poblacion hispana del 25%, Axle Towing ofrece servicios bilingues de grua para toda la comunidad.",
      "El area cerca de ASU presenta desafios unicos de estacionamiento, especialmente durante el ano escolar cuando miles de estudiantes buscan estacionamiento. Los complejos de apartamentos, condominios y propiedades comerciales en Tempe necesitan control de estacionamiento profesional y confiable.",
      "Nuestros servicios de remolque de propiedad privada en Tempe son completamente gratuitos para propietarios. Protegemos su propiedad del estacionamiento no autorizado las 24 horas del dia, los 7 dias de la semana.",
    ],
    neighborhoods: [
      "Area de ASU",
      "South Tempe",
      "Downtown Tempe",
      "Tempe Marketplace",
      "Papago Park",
      "Mitchell Park",
      "Maple-Ash",
      "Alameda",
      "Warner Ranch",
      "Kyrene Corridor",
    ],
    propertyTypes: [
      "Complejos de Apartamentos Estudiantiles",
      "Comunidades de HOA",
      "Centros Comerciales",
      "Restaurantes y Bares",
      "Parques de Oficinas",
      "Condominios",
      "Estacionamientos Privados",
      "Propiedades Comerciales",
    ],
    localStats: [
      { label: "Poblacion", value: "180K+" },
      { label: "Estudiantes ASU", value: "75K+" },
      { label: "Poblacion Hispana", value: "25%" },
      { label: "Tiempo de Respuesta", value: "< 25 min" },
    ],
    testimonial: {
      quote:
        "Nuestro complejo de apartamentos cerca de ASU tenia problemas constantes con vehiculos no autorizados. Desde que contratamos a Axle Towing, el problema desaparecio. Servicio excelente.",
      name: "Maria L.",
      role: "Administradora de Apartamentos, Tempe",
    },
    whyChooseUs: [
      {
        title: "Experiencia Cerca de ASU",
        description:
          "Entendemos los desafios unicos de estacionamiento en el area universitaria y ofrecemos soluciones efectivas.",
      },
      {
        title: "Respuesta Ultra-Rapida",
        description:
          "Con nuestra cercania, llegamos a cualquier punto de Tempe en menos de 25 minutos.",
      },
      {
        title: "Servicio Gratuito",
        description:
          "Todo el remolque de propiedad privada, senalizacion y patrullaje es sin costo para propietarios.",
      },
      {
        title: "Portal en Linea",
        description:
          "Acceda a reportes, fotos y documentacion de cada remolque desde nuestro portal digital.",
      },
    ],
    cityFacts: [
      "Tempe es hogar de Arizona State University con mas de 75,000 estudiantes",
      "Poblacion de mas de 180,000 residentes",
      "El 25% de la poblacion es hispana",
      "Tempe Town Lake es un punto de referencia popular en la ciudad",
      "Alta densidad de complejos de apartamentos y condominios",
    ],
  },
  chandler: {
    city: "Chandler",
    slug: "chandler",
    englishSlug: "chandler",
    hispanicPercent: "23%",
    metaTitle: "Servicio de Grua en Chandler, AZ | Axle Towing & Impound",
    metaDescription:
      "Servicio de grua profesional en Chandler, Arizona. Remolque de propiedad privada GRATIS para propietarios. Grua 24 horas Chandler AZ. Llame al 480-288-5526.",
    heroImage: "/images/contact-phoenix.jpg",
    heroSubtext:
      "Servicios profesionales de remolque y control de estacionamiento en Chandler — centro tecnologico del Valle.",
    intro: [
      "Chandler es una de las ciudades mas prosperas del area metropolitana de Phoenix con mas de 275,000 residentes y un sector tecnologico en auge. Con una poblacion hispana del 23%, Axle Towing ofrece servicios bilingues de calidad para toda la comunidad.",
      "Desde el elegante barrio de Ocotillo hasta los parques tecnologicos del Price Corridor, Chandler tiene una mezcla diversa de propiedades residenciales y comerciales que necesitan control de estacionamiento profesional.",
      "Nuestros servicios de grua en Chandler son completamente gratuitos para propietarios. Instalamos senalizacion, patrullamos su propiedad y removemos vehiculos no autorizados rapida y profesionalmente.",
    ],
    neighborhoods: [
      "Ocotillo",
      "Downtown Chandler",
      "Sun Groves",
      "Andersen Springs",
      "Cooper Commons",
      "Chandler Heights",
      "Price Corridor",
      "Wild Horse Ranch",
      "Clemente Ranch",
      "Lagos Vistoso",
    ],
    propertyTypes: [
      "Complejos de Apartamentos",
      "Comunidades de HOA",
      "Parques Tecnologicos",
      "Centros Comerciales",
      "Restaurantes",
      "Oficinas Corporativas",
      "Condominios",
      "Propiedades Industriales",
    ],
    localStats: [
      { label: "Poblacion", value: "275K+" },
      { label: "Comunidades HOA", value: "800+" },
      { label: "Poblacion Hispana", value: "23%" },
      { label: "Tiempo de Respuesta", value: "< 30 min" },
    ],
    testimonial: {
      quote:
        "Axle Towing maneja el control de estacionamiento de nuestro parque de oficinas en el Price Corridor. Profesionales, puntuales y sin costo. No podriamos estar mas satisfechos.",
      name: "Roberto G.",
      role: "Gerente de Instalaciones, Chandler",
    },
    whyChooseUs: [
      {
        title: "Conocimiento Local de Chandler",
        description:
          "Conocemos cada zona de Chandler y respondemos rapidamente a cualquier necesidad de remolque.",
      },
      {
        title: "Propiedades Tecnologicas",
        description:
          "Experiencia en el manejo de estacionamiento para parques tecnologicos y campus corporativos en Chandler.",
      },
      {
        title: "Cero Costo",
        description:
          "Senalizacion, patrullaje, remolque y portal — todo gratuito para propietarios de Chandler.",
      },
      {
        title: "Servicio Profesional 24/7",
        description:
          "Nuestro equipo esta disponible a toda hora para atender emergencias de estacionamiento en Chandler.",
      },
    ],
    cityFacts: [
      "Chandler es hogar de grandes empresas tecnologicas como Intel y PayPal",
      "Poblacion de mas de 275,000 residentes",
      "El 23% de la poblacion es hispana",
      "Nombrada una de las mejores ciudades para vivir en Arizona",
      "Downtown Chandler es un centro cultural y gastronomico vibrante",
    ],
  },
  glendale: {
    city: "Glendale",
    slug: "glendale",
    englishSlug: "glendale",
    hispanicPercent: "38%",
    metaTitle: "Servicio de Grua en Glendale, AZ | Axle Towing & Impound",
    metaDescription:
      "Servicio de grua profesional en Glendale, Arizona. Remolque GRATIS para propietarios. Grua 24 horas en Glendale AZ. Llame al 480-288-5526.",
    heroImage: "/images/contact-phoenix.jpg",
    heroSubtext:
      "Servicios profesionales de remolque y control de estacionamiento en Glendale — hogar del State Farm Stadium.",
    intro: [
      "Glendale es una ciudad diversa con mas de 250,000 residentes y una fuerte comunidad hispana que representa el 38% de la poblacion. Axle Towing se enorgullece de servir a Glendale con servicios bilingues de grua y control de estacionamiento.",
      "Desde el distrito de entretenimiento de Westgate hasta las comunidades residenciales del norte, Glendale tiene una variedad de propiedades que requieren control de estacionamiento profesional — especialmente durante eventos en el State Farm Stadium y el Desert Diamond Arena.",
      "Nuestros servicios de remolque en Glendale son completamente gratuitos para propietarios. Manejamos la senalizacion, el patrullaje y la remocion de vehiculos no autorizados sin ningun costo para usted.",
    ],
    neighborhoods: [
      "Westgate",
      "Historic Downtown Glendale",
      "Arrowhead Ranch",
      "Thunderbird",
      "Glendale Heights",
      "Sahuaro Ranch",
      "Bellair",
      "Manistee Ranch",
      "Catlin Court",
      "North Glendale",
    ],
    propertyTypes: [
      "Complejos de Apartamentos",
      "Comunidades de HOA",
      "Centros Comerciales",
      "Restaurantes",
      "Propiedades de Entretenimiento",
      "Estacionamientos de Eventos",
      "Condominios",
      "Propiedades Industriales",
    ],
    localStats: [
      { label: "Poblacion", value: "250K+" },
      { label: "Poblacion Hispana", value: "38%" },
      { label: "Comunidades HOA", value: "700+" },
      { label: "Tiempo de Respuesta", value: "< 30 min" },
    ],
    testimonial: {
      quote:
        "Durante los eventos en Westgate, el estacionamiento se volvia caotico. Axle Towing organizo todo con senalizacion profesional y patrullaje constante. Problema resuelto.",
      name: "Patricia H.",
      role: "Administradora Comercial, Glendale",
    },
    whyChooseUs: [
      {
        title: "Experiencia en Eventos",
        description:
          "Manejamos el control de estacionamiento durante grandes eventos en Westgate, State Farm Stadium y mas.",
      },
      {
        title: "Servicio Bilingue",
        description:
          "Con el 38% de poblacion hispana en Glendale, nuestro equipo bilingue sirve a toda la comunidad.",
      },
      {
        title: "Sin Costo para Propietarios",
        description:
          "Todo el servicio de remolque de propiedad privada es gratuito — senalizacion, patrullaje y remocion incluidos.",
      },
      {
        title: "Disponibilidad Total",
        description:
          "Servicio 24/7/365 para propiedades en todo Glendale, incluyendo fines de semana y dias festivos.",
      },
    ],
    cityFacts: [
      "Glendale es hogar del State Farm Stadium (Arizona Cardinals) y Desert Diamond Arena (Arizona Coyotes)",
      "El 38% de la poblacion de Glendale es hispana",
      "Poblacion de mas de 250,000 residentes",
      "El distrito de entretenimiento de Westgate atrae millones de visitantes al ano",
      "Historic Downtown Glendale es conocido como la 'Capital de Antiguedades de Arizona'",
    ],
  },
  avondale: {
    city: "Avondale",
    slug: "avondale",
    englishSlug: "avondale",
    hispanicPercent: "55%",
    metaTitle: "Servicio de Grua en Avondale, AZ | Axle Towing & Impound",
    metaDescription:
      "Servicio de grua profesional en Avondale, Arizona. Remolque GRATIS para propietarios. Grua 24 horas Avondale AZ. Llame al 480-288-5526.",
    heroImage: "/images/contact-phoenix.jpg",
    heroSubtext:
      "Servicios profesionales de remolque y control de estacionamiento en Avondale — una comunidad en rapido crecimiento al oeste de Phoenix.",
    intro: [
      "Avondale es una de las comunidades de mas rapido crecimiento en el oeste del area metropolitana de Phoenix, con mas de 90,000 residentes y una vibrante poblacion hispana que representa el 55% de la ciudad. Axle Towing se enorgullece de servir a esta comunidad con servicios completamente bilingues.",
      "Con nuevos desarrollos residenciales y comerciales surgiendo constantemente, Avondale necesita control de estacionamiento profesional que crezca con la comunidad. Desde los complejos de apartamentos cerca de la I-10 hasta las comunidades HOA en Coldwater Springs, estamos aqui para proteger su propiedad.",
      "Nuestros servicios de grua en Avondale son completamente gratuitos para propietarios. Instalamos senalizacion conforme a la ley, patrullamos su propiedad y removemos vehiculos no autorizados sin ningun cargo.",
    ],
    neighborhoods: [
      "Coldwater Springs",
      "Garden Lakes",
      "Westwind",
      "Crystal Gardens",
      "Avondale Civic Center",
      "Tres Rios",
      "Cashion",
      "Festival Ranch",
      "Corte Sierra",
      "Rio Crossing",
    ],
    propertyTypes: [
      "Complejos de Apartamentos",
      "Comunidades de HOA",
      "Centros Comerciales",
      "Restaurantes",
      "Parques Industriales",
      "Propiedades Comerciales",
      "Condominios",
      "Comunidades Nuevas",
    ],
    localStats: [
      { label: "Poblacion", value: "90K+" },
      { label: "Poblacion Hispana", value: "55%" },
      { label: "Crecimiento Anual", value: "5%+" },
      { label: "Tiempo de Respuesta", value: "< 35 min" },
    ],
    testimonial: {
      quote:
        "Nuestra comunidad de HOA en Avondale tenia problemas serios con vehiculos abandonados. Axle Towing lo resolvio todo en la primera semana. Un servicio increible y completamente gratis.",
      name: "Miguel A.",
      role: "Presidente de HOA, Avondale",
    },
    whyChooseUs: [
      {
        title: "Comunidad Bilingue",
        description:
          "Con el 55% de poblacion hispana, nuestro equipo bilingue se comunica efectivamente con toda la comunidad de Avondale.",
      },
      {
        title: "Creciendo con Avondale",
        description:
          "A medida que Avondale crece, expandimos nuestros servicios para cubrir cada nueva comunidad y desarrollo.",
      },
      {
        title: "Servicio Completamente Gratuito",
        description:
          "Remolque, senalizacion, patrullaje y portal — todo sin costo para propietarios en Avondale.",
      },
      {
        title: "Respuesta Confiable",
        description:
          "Respondemos rapidamente a llamadas desde cualquier punto de Avondale, las 24 horas del dia.",
      },
    ],
    cityFacts: [
      "Avondale es una de las ciudades de mas rapido crecimiento en Arizona",
      "El 55% de la poblacion de Avondale es hispana",
      "Hogar del Phoenix Raceway (antes Phoenix International Raceway)",
      "Poblacion de mas de 90,000 residentes",
      "Ubicada estrategicamente en el corredor oeste de la I-10",
    ],
  },
  guadalupe: {
    city: "Guadalupe",
    slug: "guadalupe",
    englishSlug: "guadalupe",
    hispanicPercent: "75%",
    metaTitle: "Servicio de Grua en Guadalupe, AZ | Axle Towing & Impound",
    metaDescription:
      "Servicio de grua profesional en Guadalupe, Arizona. Remolque GRATIS para propietarios. Grua 24 horas Guadalupe AZ. Llame al 480-288-5526.",
    heroImage: "/images/contact-phoenix.jpg",
    heroSubtext:
      "Servicios profesionales de remolque y control de estacionamiento en Guadalupe — una comunidad con profundas raices hispanas.",
    intro: [
      "Guadalupe es una comunidad unica con profundas raices hispanas y yaqui, donde el 75% de la poblacion es hispana. Axle Towing se enorgullece especialmente de servir a esta comunidad con servicios completamente en espanol e ingles.",
      "Aunque Guadalupe es una comunidad pequena, sus propiedades residenciales y comerciales merecen la misma proteccion profesional que las grandes ciudades. Nuestro equipo bilingue entiende la cultura y las necesidades especificas de Guadalupe.",
      "Ofrecemos servicios de grua completamente gratuitos para propietarios en Guadalupe. Desde la instalacion de senalizacion hasta el patrullaje regular y la remocion de vehiculos no autorizados, nos encargamos de todo.",
    ],
    neighborhoods: [
      "Centro de Guadalupe",
      "Zona Residencial Norte",
      "Zona Residencial Sur",
      "Avenida del Yaqui",
      "Area Comercial",
    ],
    propertyTypes: [
      "Complejos de Apartamentos",
      "Propiedades Comerciales",
      "Restaurantes",
      "Tiendas Locales",
      "Comunidades Residenciales",
      "Estacionamientos Publicos",
    ],
    localStats: [
      { label: "Poblacion", value: "6,500+" },
      { label: "Poblacion Hispana", value: "75%" },
      { label: "Ubicacion", value: "Central" },
      { label: "Tiempo de Respuesta", value: "< 20 min" },
    ],
    testimonial: {
      quote:
        "Es dificil encontrar servicios bilingues de calidad. Axle Towing no solo habla nuestro idioma, sino que realmente entiende las necesidades de nuestra comunidad en Guadalupe.",
      name: "Esperanza D.",
      role: "Propietaria de Negocio, Guadalupe",
    },
    whyChooseUs: [
      {
        title: "Servicio 100% Bilingue",
        description:
          "Nuestro equipo se comunica perfectamente en espanol e ingles, sirviendo a toda la comunidad de Guadalupe.",
      },
      {
        title: "Respeto Cultural",
        description:
          "Entendemos y respetamos las tradiciones culturales de la comunidad hispana y yaqui de Guadalupe.",
      },
      {
        title: "Sin Ningun Costo",
        description:
          "El remolque de propiedad privada, senalizacion y patrullaje son gratuitos para propietarios en Guadalupe.",
      },
      {
        title: "Ubicacion Central",
        description:
          "Guadalupe esta cerca de nuestra sede, lo que permite tiempos de respuesta extremadamente rapidos.",
      },
    ],
    cityFacts: [
      "Guadalupe tiene una de las mayores concentraciones de poblacion hispana en Arizona con un 75%",
      "Comunidad con ricas tradiciones hispanas y yaqui",
      "Ubicada entre Phoenix y Tempe con acceso rapido a la I-10",
      "Conocida por sus autenticos restaurantes mexicanos y mercados",
      "Una de las comunidades mas culturalmente ricas del Valle",
    ],
  },
  tolleson: {
    city: "Tolleson",
    slug: "tolleson",
    englishSlug: "tolleson",
    hispanicPercent: "72%",
    metaTitle: "Servicio de Grua en Tolleson, AZ | Axle Towing & Impound",
    metaDescription:
      "Servicio de grua profesional en Tolleson, Arizona. Remolque GRATIS para propietarios. Grua 24 horas Tolleson AZ. Llame al 480-288-5526.",
    heroImage: "/images/contact-phoenix.jpg",
    heroSubtext:
      "Servicios profesionales de remolque y control de estacionamiento en Tolleson — una comunidad orgullosamente hispana.",
    intro: [
      "Tolleson es una comunidad vibrante con una orgullosa herencia hispana — el 72% de su poblacion es hispana. Axle Towing se compromete a servir a Tolleson con servicios de grua completamente bilingues y profesionales.",
      "Con su ubicacion estrategica en el corredor de la I-10 y un creciente sector industrial y comercial, Tolleson tiene necesidades especificas de control de estacionamiento. Nuestro equipo entiende estas necesidades y ofrece soluciones personalizadas.",
      "Todos nuestros servicios de remolque de propiedad privada en Tolleson son gratuitos para propietarios. Nos encargamos de la senalizacion, el patrullaje y la remocion de vehiculos no autorizados sin costo alguno.",
    ],
    neighborhoods: [
      "Centro de Tolleson",
      "Zona Industrial",
      "Area Residencial Norte",
      "Area Residencial Sur",
      "Corredor de la I-10",
      "91st Avenue Corridor",
      "Zona Comercial",
    ],
    propertyTypes: [
      "Complejos de Apartamentos",
      "Propiedades Industriales",
      "Centros de Distribucion",
      "Restaurantes",
      "Propiedades Comerciales",
      "Comunidades Residenciales",
      "Estacionamientos Industriales",
      "Tiendas y Mercados",
    ],
    localStats: [
      { label: "Poblacion", value: "7,500+" },
      { label: "Poblacion Hispana", value: "72%" },
      { label: "Zona Industrial", value: "Grande" },
      { label: "Tiempo de Respuesta", value: "< 25 min" },
    ],
    testimonial: {
      quote:
        "Nuestro centro de distribucion en Tolleson tenia problemas con vehiculos estacionados sin autorizacion. Axle Towing instalo senalizacion y ahora patrullan regularmente. Cero problemas desde entonces.",
      name: "Fernando V.",
      role: "Gerente de Operaciones, Tolleson",
    },
    whyChooseUs: [
      {
        title: "Experiencia Industrial",
        description:
          "Entendemos las necesidades unicas de las propiedades industriales y centros de distribucion en Tolleson.",
      },
      {
        title: "Equipo Bilingue",
        description:
          "Con el 72% de poblacion hispana, nuestro equipo bilingue se integra perfectamente con la comunidad.",
      },
      {
        title: "Servicio Gratuito",
        description:
          "Todo el control de estacionamiento y remolque de propiedad privada es sin costo para propietarios.",
      },
      {
        title: "Cercania a la I-10",
        description:
          "Nuestra ubicacion nos permite llegar rapidamente a cualquier propiedad en Tolleson por el corredor de la I-10.",
      },
    ],
    cityFacts: [
      "Tolleson tiene una poblacion hispana del 72%, una de las mas altas del area metropolitana",
      "Importante centro industrial y de distribucion en el Valle",
      "Ubicada estrategicamente en el corredor de la I-10",
      "Poblacion de mas de 7,500 residentes",
      "Conocida como una comunidad unida con fuertes raices hispanas",
    ],
  },
  "el-mirage": {
    city: "El Mirage",
    slug: "el-mirage",
    englishSlug: "el-mirage",
    hispanicPercent: "42%",
    metaTitle: "Servicio de Grua en El Mirage, AZ | Axle Towing & Impound",
    metaDescription:
      "Servicio de grua profesional en El Mirage, Arizona. Remolque GRATIS para propietarios. Grua 24 horas El Mirage AZ. Llame al 480-288-5526.",
    heroImage: "/images/contact-phoenix.jpg",
    heroSubtext:
      "Servicios profesionales de remolque y control de estacionamiento en El Mirage — una comunidad en crecimiento al noroeste de Phoenix.",
    intro: [
      "El Mirage es una comunidad en crecimiento al noroeste del area metropolitana de Phoenix con mas de 35,000 residentes y una significativa poblacion hispana del 42%. Axle Towing ofrece servicios bilingues de grua y control de estacionamiento para toda la comunidad.",
      "Con nuevos desarrollos residenciales y un sector comercial en expansion, El Mirage necesita control de estacionamiento profesional y confiable. Nuestro equipo sirve a propiedades en toda la ciudad, desde comunidades HOA hasta centros comerciales.",
      "Los servicios de remolque de propiedad privada en El Mirage son completamente gratuitos para propietarios. Nos encargamos de todo — senalizacion, patrullaje y remocion de vehiculos no autorizados.",
    ],
    neighborhoods: [
      "Centro de El Mirage",
      "Dysart Road Corridor",
      "El Mirage Road",
      "Area Residencial Oeste",
      "Area Residencial Este",
      "Zona Comercial Thompson Ranch",
      "Sundance",
      "Festival Foothills",
    ],
    propertyTypes: [
      "Complejos de Apartamentos",
      "Comunidades de HOA",
      "Centros Comerciales",
      "Restaurantes",
      "Propiedades Comerciales",
      "Comunidades Nuevas",
      "Estacionamientos Privados",
      "Iglesias",
    ],
    localStats: [
      { label: "Poblacion", value: "35K+" },
      { label: "Poblacion Hispana", value: "42%" },
      { label: "Crecimiento", value: "Rapido" },
      { label: "Tiempo de Respuesta", value: "< 35 min" },
    ],
    testimonial: {
      quote:
        "Administro un complejo de apartamentos en El Mirage y los residentes se quejaban constantemente del estacionamiento. Axle Towing soluciono el problema completamente y sin ningun costo para nosotros.",
      name: "Ana P.",
      role: "Administradora de Propiedades, El Mirage",
    },
    whyChooseUs: [
      {
        title: "Cobertura del Noroeste",
        description:
          "Cubrimos toda la zona noroeste del Valle, incluyendo cada rincon de El Mirage.",
      },
      {
        title: "Equipo Bilingue",
        description:
          "Servimos a la diversa comunidad de El Mirage con personal que habla espanol e ingles.",
      },
      {
        title: "Sin Costo Alguno",
        description:
          "Senalizacion, patrullaje, remolque y portal digital — todo gratuito para propietarios de El Mirage.",
      },
      {
        title: "Creciendo Juntos",
        description:
          "A medida que El Mirage crece con nuevos desarrollos, expandimos nuestros servicios para cubrir cada nueva propiedad.",
      },
    ],
    cityFacts: [
      "El Mirage tiene una poblacion de mas de 35,000 residentes en rapido crecimiento",
      "El 42% de la poblacion de El Mirage es hispana",
      "Ubicada al noroeste del area metropolitana de Phoenix",
      "Comunidad accesible con costos de vivienda competitivos",
      "Nuevos desarrollos residenciales y comerciales en expansion constante",
    ],
  },
  goodyear: {
    city: "Goodyear",
    slug: "goodyear",
    englishSlug: "goodyear",
    hispanicPercent: "30%",
    metaTitle: "Servicio de Grua en Goodyear, AZ | Axle Towing & Impound",
    metaDescription:
      "Servicio de grua profesional en Goodyear, Arizona. Remolque GRATIS para propietarios. Grua 24 horas Goodyear AZ. Llame al 480-288-5526.",
    heroImage: "/images/contact-phoenix.jpg",
    heroSubtext:
      "Servicios profesionales de remolque y control de estacionamiento en Goodyear — una de las ciudades de mas rapido crecimiento en Arizona.",
    intro: [
      "Goodyear es una de las ciudades de mas rapido crecimiento en Arizona con mas de 95,000 residentes y una poblacion hispana del 30%. Axle Towing ofrece servicios bilingues de grua profesional para esta comunidad en expansion.",
      "Con desarrollos masivos como Estrella Mountain Ranch, Palm Valley y Canyon Trails, Goodyear tiene una gran cantidad de comunidades HOA y complejos de apartamentos que necesitan control de estacionamiento profesional y confiable.",
      "Nuestros servicios de remolque de propiedad privada en Goodyear son completamente gratuitos para propietarios. Instalamos senalizacion, patrullamos regularmente y removemos vehiculos no autorizados sin costo.",
    ],
    neighborhoods: [
      "Estrella Mountain Ranch",
      "Palm Valley",
      "Canyon Trails",
      "Pebble Creek",
      "CantaMia",
      "Centerra",
      "Goodyear Ballpark Village",
      "Sarival",
      "Litchfield Road Corridor",
      "Downtown Goodyear",
    ],
    propertyTypes: [
      "Complejos de Apartamentos",
      "Comunidades de HOA",
      "Centros Comerciales",
      "Restaurantes",
      "Parques de Oficinas",
      "Comunidades de Retiro Activo",
      "Propiedades Comerciales",
      "Comunidades Nuevas",
    ],
    localStats: [
      { label: "Poblacion", value: "95K+" },
      { label: "Poblacion Hispana", value: "30%" },
      { label: "Comunidades HOA", value: "500+" },
      { label: "Tiempo de Respuesta", value: "< 35 min" },
    ],
    testimonial: {
      quote:
        "Nuestra HOA en Estrella Mountain Ranch necesitaba una solucion de estacionamiento urgente. Axle Towing respondio el mismo dia, instalo senalizacion y ahora patrullan regularmente. Todo gratis.",
      name: "David S.",
      role: "Director de HOA, Goodyear",
    },
    whyChooseUs: [
      {
        title: "Especialistas en HOA",
        description:
          "Con mas de 500 comunidades HOA en Goodyear, tenemos experiencia especifica en programas de cumplimiento para HOAs.",
      },
      {
        title: "Cobertura del Oeste del Valle",
        description:
          "Cubrimos toda la zona oeste, incluyendo cada comunidad y desarrollo en Goodyear.",
      },
      {
        title: "Servicio Gratuito Total",
        description:
          "Remolque, senalizacion, patrullaje y acceso al portal — todo sin costo para propietarios en Goodyear.",
      },
      {
        title: "Adaptados al Crecimiento",
        description:
          "Expandimos nuestros servicios continuamente para cubrir los nuevos desarrollos que surgen en Goodyear.",
      },
    ],
    cityFacts: [
      "Goodyear es una de las 10 ciudades de mas rapido crecimiento en Estados Unidos",
      "El 30% de la poblacion de Goodyear es hispana",
      "Hogar de Estrella Mountain Ranch, una de las comunidades planificadas mas grandes de Arizona",
      "Poblacion de mas de 95,000 residentes y creciendo",
      "Importante centro de entrenamiento de primavera de la MLB",
    ],
  },
};

/** Ordered list of Spanish city slugs for sitemap and hub page */
export const SPANISH_CITY_SLUGS = [
  "phoenix",
  "mesa",
  "tempe",
  "chandler",
  "glendale",
  "avondale",
  "guadalupe",
  "tolleson",
  "el-mirage",
  "goodyear",
] as const;
