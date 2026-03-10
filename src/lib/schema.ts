import { COMPANY } from "./constants";

const BASE_URL = `https://${COMPANY.domain}`;

/**
 * LocalBusiness schema for a specific location
 */
export function localBusinessSchema(location: "phoenix" | "apache-junction") {
  const locationData =
    location === "phoenix"
      ? {
          name: `${COMPANY.name} — Phoenix`,
          address: COMPANY.addresses.find((a) => a.label === "Phoenix")!,
          geo: { latitude: 33.4137, longitude: -112.0258 },
          areaServed: "Phoenix, AZ",
        }
      : {
          name: `${COMPANY.name} — Apache Junction`,
          address: COMPANY.addresses.find((a) => a.label === "Apache Junction")!,
          geo: { latitude: 33.415, longitude: -111.5496 },
          areaServed: "Apache Junction, AZ",
        };

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TowingService"],
    "@id": `${BASE_URL}/#${location}`,
    name: locationData.name,
    description: COMPANY.description,
    url: BASE_URL,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    image: COMPANY.logo,
    logo: COMPANY.logo,
    foundingDate: `${COMPANY.foundedYear}`,
    priceRange: "Free for property owners",
    address: {
      "@type": "PostalAddress",
      streetAddress: locationData.address.street,
      addressLocality: locationData.address.city,
      addressRegion: locationData.address.state,
      postalCode: locationData.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: locationData.geo.latitude,
      longitude: locationData.geo.longitude,
    },
    areaServed: [
      "Phoenix, AZ",
      "Scottsdale, AZ",
      "Mesa, AZ",
      "Glendale, AZ",
      "Gilbert, AZ",
      "Chandler, AZ",
      "Tempe, AZ",
      "Apache Junction, AZ",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "17:00",
        description: "By appointment only",
      },
    ],
    sameAs: [],
  };
}

/**
 * Service schema for individual service pages
 */
export function serviceSchema(service: {
  title: string;
  slug: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/services/${service.slug}`,
    name: service.title,
    description: service.description,
    url: `${BASE_URL}/services/${service.slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: COMPANY.name,
      url: BASE_URL,
      telephone: COMPANY.phone,
      image: COMPANY.logo,
    },
    areaServed: {
      "@type": "State",
      name: "Arizona",
    },
    serviceType: "Towing Service",
  };
}

/**
 * Article / BlogPosting schema for blog posts
 */
export function articleSchema(article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    url: `${BASE_URL}/blog/${article.slug}`,
    datePublished: article.datePublished,
    dateModified: article.datePublished,
    author: {
      "@type": "Organization",
      name: COMPANY.name,
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: COMPANY.logo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${article.slug}`,
    },
  };
}

/**
 * FAQPage schema for FAQ sections
 */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * BreadcrumbList schema for navigation context
 */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Organization schema for the company
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: COMPANY.name,
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: COMPANY.logo,
    },
    description: COMPANY.description,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    foundingDate: `${COMPANY.foundedYear}`,
    address: COMPANY.addresses.map((a) => ({
      "@type": "PostalAddress",
      streetAddress: a.street,
      addressLocality: a.city,
      addressRegion: a.state,
      postalCode: a.zip,
      addressCountry: "US",
    })),
    areaServed: [
      "Phoenix, AZ",
      "Scottsdale, AZ",
      "Mesa, AZ",
      "Glendale, AZ",
      "Gilbert, AZ",
      "Chandler, AZ",
      "Tempe, AZ",
      "Apache Junction, AZ",
    ],
    sameAs: [],
  };
}
