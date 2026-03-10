export interface LocationPageData {
  city: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtext: string;
  intro: string[];
  neighborhoods: string[];
  propertyTypes: string[];
  localStats: { label: string; value: string }[];
  testimonial: { quote: string; name: string; role: string };
  whyChooseUs: { title: string; description: string }[];
  cityFacts: string[];
  address?: string;
}

export const LOCATION_PAGES: Record<string, LocationPageData> = {
  phoenix: {
    city: "Phoenix",
    slug: "phoenix",
    metaTitle:
      "Towing Services in Phoenix, AZ — Private Property Impounds & Parking Enforcement",
    metaDescription:
      "Axle Towing provides professional private property impound, parking enforcement, and vehicle relocation services throughout Phoenix, AZ. Free for property owners. Call 480-288-5526.",
    heroSubtext:
      "Professional private property towing, parking enforcement, and vehicle relocation services throughout Arizona's capital city.",
    intro: [
      "As the fifth-largest city in the United States, Phoenix presents unique parking enforcement challenges for property owners and managers. With over 1.6 million residents and a booming rental market, unauthorized parking, fire lane violations, and space disputes are daily realities for apartment complexes, HOAs, and commercial properties across the Valley.",
      "Axle Towing & Impound is headquartered right here in Phoenix at 320 E. Pioneer St., AZ 85040. We have been serving the local community since 2021 and understand the unique challenges that come with Arizona's largest city — from the intense heat that makes abandoned vehicles a hazard to the seasonal population swings that change parking demand throughout the year.",
      "Our Phoenix towing services are completely free for property owners. We install compliant signage, patrol your property on your schedule, and remove unauthorized vehicles quickly and professionally. Whether you manage a 200-unit apartment complex in Midtown or an HOA community in Ahwatukee, we have you covered.",
    ],
    neighborhoods: [
      "Downtown Phoenix",
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
      "Apartment Complexes",
      "HOA Communities",
      "Retail Centers",
      "Office Parks",
      "Medical Facilities",
      "Restaurants",
      "Parking Garages",
      "Industrial Properties",
    ],
    localStats: [
      { label: "Population", value: "1.6M+" },
      { label: "Apartment Units", value: "250K+" },
      { label: "HOA Communities", value: "3,500+" },
      { label: "Response Time", value: "< 30 min" },
    ],
    testimonial: {
      quote:
        "Axle Towing has been a game-changer for our apartment community. Unauthorized parking dropped by 90% within the first month. Their team is professional, responsive, and the online portal makes everything easy to manage.",
      name: "Sarah M.",
      role: "Property Manager, Downtown Phoenix",
    },
    whyChooseUs: [
      {
        title: "Local Headquarters",
        description:
          "Based right here in Phoenix at 320 E. Pioneer St., we know the city inside and out and can respond faster than any competitor.",
      },
      {
        title: "Dense Urban Expertise",
        description:
          "Phoenix's dense apartment and condo market demands specialized enforcement. We handle high-volume properties with ease.",
      },
      {
        title: "Zero Cost to You",
        description:
          "All our services — signage, patrol, towing, and portal access — are completely free for property owners.",
      },
      {
        title: "24/7 Availability",
        description:
          "Parking violations do not stop at 5 PM. Our team is available around the clock for emergency tows and enforcement.",
      },
    ],
    cityFacts: [
      "Phoenix is the state capital and the largest city in Arizona",
      "Over 250,000 apartment units across the metro area",
      "One of the fastest-growing cities in the US for the past decade",
      "Extreme summer heat makes abandoned vehicles a fire and safety hazard",
      "Seasonal snowbird population increases parking demand by 20% each winter",
    ],
    address: "320 E. Pioneer St., Phoenix, AZ 85040",
  },
  scottsdale: {
    city: "Scottsdale",
    slug: "scottsdale",
    metaTitle:
      "Towing Services in Scottsdale, AZ — Premium Private Property Impounds & Parking Enforcement",
    metaDescription:
      "Premium private property towing and parking enforcement in Scottsdale, AZ. Axle Towing serves luxury HOAs, apartment complexes, and commercial properties at no cost. Call 480-288-5526.",
    heroSubtext:
      "Premium private property towing and parking enforcement services for Scottsdale's upscale residential and commercial communities.",
    intro: [
      "Scottsdale is known for its upscale communities, luxury residences, and thriving commercial districts. Property managers and HOA boards in Scottsdale demand a towing partner that reflects the quality, discretion, and professionalism their communities expect — and that is exactly what Axle Towing delivers.",
      "From the boutique shops of Old Town to the master-planned communities of North Scottsdale, we provide premium parking enforcement services that protect property values and maintain the elegant environments residents and businesses expect. Our team understands that enforcement in Scottsdale requires a white-glove approach.",
      "Our Scottsdale services are completely free for property owners. We handle everything from compliant signage installation to regular patrols and vehicle removal, all while maintaining the highest standards of professionalism your high-end property deserves.",
    ],
    neighborhoods: [
      "Old Town Scottsdale",
      "North Scottsdale",
      "McCormick Ranch",
      "Gainey Ranch",
      "DC Ranch",
      "Grayhawk",
      "Kierland",
      "Pinnacle Peak",
      "Troon",
      "South Scottsdale",
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
    localStats: [
      { label: "Luxury HOAs", value: "800+" },
      { label: "Commercial Props", value: "2,000+" },
      { label: "Avg. Response", value: "< 25 min" },
      { label: "Client Satisfaction", value: "99%" },
    ],
    testimonial: {
      quote:
        "Professional, responsive, and their portal makes it so easy to manage everything. They understand the expectations of our upscale community and deliver consistently. Best towing company we have worked with.",
      name: "James R.",
      role: "HOA Board President, DC Ranch",
    },
    whyChooseUs: [
      {
        title: "Premium Service Standards",
        description:
          "Our drivers are trained to operate with discretion and professionalism that matches Scottsdale's upscale community standards.",
      },
      {
        title: "Luxury HOA Expertise",
        description:
          "We work with dozens of Scottsdale's premier HOAs and understand the nuances of CC&R enforcement in high-end communities.",
      },
      {
        title: "White-Glove Approach",
        description:
          "From the first consultation to ongoing enforcement, we provide a level of service that reflects the quality of your property.",
      },
      {
        title: "Comprehensive Reporting",
        description:
          "Monthly reports for board meetings, real-time portal access, and detailed documentation of every enforcement action.",
      },
    ],
    cityFacts: [
      "Home to some of Arizona's most exclusive residential communities",
      "Over 800 HOA communities with strict parking and vehicle guidelines",
      "Major tourism destination with seasonal parking demand spikes",
      "High-end commercial corridors require professional enforcement",
      "Luxury property values depend on well-maintained community standards",
    ],
  },
  mesa: {
    city: "Mesa",
    slug: "mesa",
    metaTitle:
      "Towing Services in Mesa, AZ — Private Property Impounds & Parking Enforcement",
    metaDescription:
      "Reliable private property towing and parking enforcement in Mesa, AZ. Axle Towing provides professional service for apartments, HOAs, and commercial properties. Free for owners. Call 480-288-5526.",
    heroSubtext:
      "Reliable private property towing and parking enforcement for Mesa's rapidly growing residential and commercial communities.",
    intro: [
      "Mesa is the third-largest city in Arizona and one of the fastest-growing communities in the Phoenix metro area. With that explosive growth comes a surge in new apartment complexes, expanding commercial corridors, and growing HOA communities — all of which need professional parking enforcement to keep pace.",
      "From the established neighborhoods of Dobson Ranch and Red Mountain to the rapidly developing areas of East Mesa and Las Sendas, Axle Towing provides reliable, professional towing and parking enforcement services that help property owners maintain orderly parking and protect their investments.",
      "Our Mesa services are free for property owners. We provide full-service parking enforcement including compliant signage installation, regular patrols, and prompt vehicle removal at no cost to you. As Mesa continues to grow, so does the need for professional parking management — and we are here to deliver it.",
    ],
    neighborhoods: [
      "East Mesa",
      "West Mesa",
      "Superstition Springs",
      "Red Mountain",
      "Dobson Ranch",
      "Las Sendas",
      "Downtown Mesa",
      "Mesa Riverview",
      "Alta Mesa",
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
    localStats: [
      { label: "Population", value: "540K+" },
      { label: "New Units/Year", value: "3,000+" },
      { label: "HOA Communities", value: "1,200+" },
      { label: "Response Time", value: "< 30 min" },
    ],
    testimonial: {
      quote:
        "The fact that their service is free for property owners made the decision easy. Their team is always courteous and efficient, and our parking problems were solved within the first week of partnering with them.",
      name: "Linda K.",
      role: "Commercial Property Owner, Superstition Springs",
    },
    whyChooseUs: [
      {
        title: "Growth-Ready Service",
        description:
          "As Mesa grows, we scale with you. Whether you are adding units or opening new commercial space, our services expand to match your needs.",
      },
      {
        title: "Suburban Community Focus",
        description:
          "We understand the family-oriented character of Mesa's neighborhoods and enforce with fairness and community respect in mind.",
      },
      {
        title: "Fast Response Times",
        description:
          "Despite Mesa's large geographic area, our strategic positioning ensures sub-30-minute response times across the city.",
      },
      {
        title: "Complete Service Package",
        description:
          "Signage, patrol, towing, portal access, and monthly reports — everything you need, completely free for property owners.",
      },
    ],
    cityFacts: [
      "Third-largest city in Arizona with over 540,000 residents",
      "One of the fastest-growing cities in the Phoenix metro area",
      "Over 3,000 new residential units added annually",
      "Major spring training destination increases seasonal parking demand",
      "Expanding commercial corridors create new enforcement opportunities",
    ],
  },
};
