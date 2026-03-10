export interface LocationPageData {
  city: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtext: string;
  intro: string[];
  neighborhoods: string[];
  propertyTypes: string[];
}

export const LOCATION_PAGES: Record<string, LocationPageData> = {
  phoenix: {
    city: "Phoenix",
    slug: "phoenix",
    metaTitle: "Towing Services in Phoenix, AZ — Private Property Impounds & Parking Enforcement",
    metaDescription:
      "Axel Towing provides professional private property impound, parking enforcement, and vehicle relocation services throughout Phoenix, AZ. Free for property owners. Call today.",
    heroSubtext:
      "Professional private property towing, parking enforcement, and vehicle relocation services throughout the Phoenix metro area.",
    intro: [
      "As Phoenix continues to grow, parking challenges for property owners and managers become more complex. Unauthorized parking, fire lane violations, and parking space disputes are everyday issues for apartment complexes, HOAs, and commercial properties across the Valley.",
      "Axel Towing is headquartered in Phoenix and has been serving the local community since 2021. We understand the unique challenges of Arizona's largest city — from the heat that makes abandoned vehicles a hazard to the seasonal population swings that change parking demand throughout the year.",
      "Our Phoenix towing services are completely free for property owners. We install compliant signage, patrol your property on your schedule, and remove unauthorized vehicles quickly and professionally.",
    ],
    neighborhoods: [
      "Downtown Phoenix",
      "North Phoenix",
      "South Phoenix",
      "Ahwatukee",
      "Arcadia",
      "Camelback East",
      "Desert Ridge",
      "Encanto",
      "Laveen",
      "Maryvale",
      "Paradise Valley Village",
      "South Mountain",
    ],
    propertyTypes: [
      "Apartment Complexes",
      "HOA Communities",
      "Retail Centers",
      "Office Parks",
      "Medical Facilities",
      "Restaurants",
      "Parking Garages",
      "Industrial Properties",
    ],
  },
  scottsdale: {
    city: "Scottsdale",
    slug: "scottsdale",
    metaTitle: "Towing Services in Scottsdale, AZ — Private Property Impounds & Parking Enforcement",
    metaDescription:
      "Professional private property towing and parking enforcement in Scottsdale, AZ. Axel Towing serves HOAs, apartment complexes, and commercial properties at no cost. Call now.",
    heroSubtext:
      "Premium private property towing and parking enforcement services for Scottsdale's residential and commercial communities.",
    intro: [
      "Scottsdale's upscale residential communities and thriving commercial districts demand a higher standard of parking enforcement. Property managers and HOA boards need a towing partner that reflects the quality and professionalism their communities expect.",
      "Axel Towing provides premium parking enforcement services throughout Scottsdale. We work with luxury apartment communities, master-planned HOAs, boutique retail centers, and resort properties to maintain orderly, professional parking environments.",
      "Our Scottsdale services are completely free for property owners. We handle everything from signage to enforcement with the level of professionalism your property deserves.",
    ],
    neighborhoods: [
      "Old Town Scottsdale",
      "North Scottsdale",
      "South Scottsdale",
      "McCormick Ranch",
      "Gainey Ranch",
      "DC Ranch",
      "Grayhawk",
      "Kierland",
      "Pinnacle Peak",
      "Troon",
    ],
    propertyTypes: [
      "Luxury Apartments",
      "Master-Planned HOAs",
      "Boutique Retail",
      "Resort Properties",
      "Medical Plazas",
      "Office Complexes",
      "Restaurant Districts",
      "Mixed-Use Developments",
    ],
  },
  mesa: {
    city: "Mesa",
    slug: "mesa",
    metaTitle: "Towing Services in Mesa, AZ — Private Property Impounds & Parking Enforcement",
    metaDescription:
      "Reliable private property towing and parking enforcement in Mesa, AZ. Axel Towing provides professional service for apartments, HOAs, and commercial properties. Free for owners.",
    heroSubtext:
      "Reliable private property towing and parking enforcement for Mesa's growing residential and commercial communities.",
    intro: [
      "Mesa is one of the fastest-growing cities in the Phoenix metro area, and with that growth comes increased parking challenges. New apartment complexes, expanding commercial corridors, and growing HOA communities all need professional parking enforcement.",
      "Axel Towing provides reliable, professional towing and parking enforcement services throughout Mesa. From the historic downtown to the rapidly developing east side, we help property owners maintain orderly parking and protect their investments.",
      "Our Mesa services are free for property owners. We provide full-service parking enforcement including signage, patrol, and towing at no cost to you.",
    ],
    neighborhoods: [
      "Downtown Mesa",
      "East Mesa",
      "West Mesa",
      "Mesa Riverview",
      "Superstition Springs",
      "Las Sendas",
      "Red Mountain",
      "Alta Mesa",
      "Dobson Ranch",
      "Leisure World",
    ],
    propertyTypes: [
      "Apartment Communities",
      "HOA Neighborhoods",
      "Shopping Centers",
      "Office Buildings",
      "Industrial Parks",
      "Medical Centers",
      "Educational Facilities",
      "Mixed-Use Properties",
    ],
  },
};
