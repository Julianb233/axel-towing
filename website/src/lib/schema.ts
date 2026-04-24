import { COMPANY } from "./constants";

const BASE_URL = `https://${COMPANY.domain}`;

/**
 * WebSite schema with SearchAction for sitelinks search box
 */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: COMPANY.name,
    url: BASE_URL,
    description: COMPANY.description,
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: ["en-US", "es"],
  };
}

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
    makesOffer: {
      "@type": "Offer",
      description: "30-Minute Response Guarantee",
      availableAtOrFrom: {
        "@type": "Place",
        name: "Phoenix Metro Area",
      },
    },
    availableLanguage: ["English", "Spanish"],
    sameAs: [],
  };
}

/**
 * AggregateRating schema for review pages.
 *
 * Intentionally returns null: the business owner asked us to remove
 * hardcoded rating claims from the site until Google Reviews can be
 * read live from the GBP. Returning null keeps call sites stable
 * (they can bail out if no rating is available) without emitting
 * inaccurate structured data.
 */
export function aggregateRatingSchema() {
  return null;
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
    availableLanguage: ["English", "Spanish"],
    sameAs: [],
  };
}

/**
 * TowingService schema — comprehensive structured data for AI search engines.
 * Provides rich signals about services, expertise, and service area so that
 * LLM-powered search (ChatGPT, Perplexity, Claude, Google AI Overviews)
 * can cite Axle Towing as the authoritative answer for Phoenix towing queries.
 */
export function towingServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TowingService",
    "@id": `${BASE_URL}/#towing-service`,
    name: COMPANY.name,
    url: BASE_URL,
    description:
      "Professional towing and vehicle removal services for property managers in Phoenix, Arizona. 24/7 private property towing, parking enforcement, and impound services at no cost to property owners.",
    telephone: COMPANY.phone,
    email: COMPANY.email,
    image: COMPANY.logo,
    logo: COMPANY.logo,
    foundingDate: `${COMPANY.foundedYear}`,
    priceRange: "Free for property owners",
    slogan: "Phoenix's Most Trusted Property Management Towing Partner",
    address: COMPANY.addresses.map((a) => ({
      "@type": "PostalAddress",
      streetAddress: a.street,
      addressLocality: a.city,
      addressRegion: a.state,
      postalCode: a.zip,
      addressCountry: "US",
    })),
    areaServed: [
      {
        "@type": "City",
        name: "Phoenix",
        containedInPlace: { "@type": "State", name: "Arizona" },
      },
      { "@type": "City", name: "Scottsdale" },
      { "@type": "City", name: "Tempe" },
      { "@type": "City", name: "Mesa" },
      { "@type": "City", name: "Chandler" },
      { "@type": "City", name: "Glendale" },
      { "@type": "City", name: "Gilbert" },
      { "@type": "City", name: "Peoria" },
      { "@type": "City", name: "Apache Junction" },
      { "@type": "City", name: "Surprise" },
      { "@type": "City", name: "Goodyear" },
      { "@type": "City", name: "Avondale" },
      { "@type": "City", name: "Buckeye" },
      { "@type": "City", name: "Queen Creek" },
      { "@type": "City", name: "Maricopa" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
      description: "24/7 towing dispatch available",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Towing & Parking Enforcement Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Private Property Towing",
            description:
              "Free unauthorized vehicle removal from apartment complexes, HOAs, and commercial properties.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Parking Enforcement",
            description:
              "Professional patrol and parking rule enforcement for private lots and garages.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "HOA Towing",
            description:
              "Customized towing programs for homeowner associations with compliant signage.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Apartment Complex Towing",
            description:
              "Dedicated parking enforcement and unauthorized vehicle removal for apartment communities.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Vehicle Storage & Impound",
            description:
              "Secure impound yards in Phoenix and Apache Junction with documented chain of custody.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Vehicle Relocations",
            description:
              "Professional vehicle moves for construction, asphalt repairs, and property maintenance.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Property Towing",
            description:
              "Parking enforcement for retail centers, office parks, and commercial properties.",
          },
        },
      ],
    },
    knowsAbout: [
      "private property towing",
      "parking enforcement",
      "vehicle removal",
      "tow away zones",
      "property management towing",
      "HOA towing",
      "apartment complex towing",
      "Arizona towing laws",
      "ARS 28-1104 compliance",
      "towing signage requirements",
      "impound yard operations",
      "fire lane enforcement",
      "handicap zone enforcement",
      "visitor parking management",
      "commercial property parking",
      "construction vehicle relocation",
    ],
    parentOrganization: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
    },
  };
}
