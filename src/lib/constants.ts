export const COMPANY = {
  name: "Axle Towing & Impound",
  phone: "480-288-5526",
  email: "info@axletowing.com",
  address: "Phoenix, AZ",
  addresses: [
    {
      label: "Apache Junction",
      street: "1151 W. Apache Trail",
      city: "Apache Junction",
      state: "AZ",
      zip: "85120",
    },
    {
      label: "Phoenix",
      street: "320 E. Pioneer St.",
      city: "Phoenix",
      state: "AZ",
      zip: "85040",
    },
  ],
  hours: {
    weekday: "Mon-Fri 9am-5pm",
    saturday: "Sat by appointment",
    sunday: "Sun closed",
  },
  foundedYear: 2021,
  domain: "axletowing.com",
  tagline: "Professional Towing & Parking Management",
  description:
    "Axle Towing & Impound provides professional private property impound and parking enforcement services across the Phoenix metro area at no cost to property owners. We also offer paid vehicle relocation services for construction and maintenance projects.",
  logo: "https://e5cdia7uckj.exactdn.com/wp-content/uploads/2021/05/Axle-Towing-and-Impound-in-Arizona-Logo.png",
  heroImage:
    "https://e5cdia7uckj.exactdn.com/wp-content/uploads/2023/09/242A4356-Multiple-Trucks-new.jpg?strip=all",
};

export const SERVICE_AREAS = [
  { name: "Phoenix", slug: "phoenix", description: "Full-service towing and parking enforcement throughout the Phoenix metro area." },
  { name: "Scottsdale", slug: "scottsdale", description: "Premium parking enforcement and towing for Scottsdale properties." },
  { name: "Mesa", slug: "mesa", description: "Reliable private property towing services across Mesa." },
  { name: "Glendale", slug: "glendale", description: "Professional towing and impound services in Glendale." },
  { name: "Gilbert", slug: "gilbert", description: "Fast-response parking enforcement for Gilbert properties." },
  { name: "Chandler", slug: "chandler", description: "Dependable vehicle relocation services in Chandler." },
  { name: "Tempe", slug: "tempe", description: "Expert towing services near ASU and throughout Tempe." },
  { name: "Apache Junction", slug: "apache-junction", description: "Reliable towing and impound services in Apache Junction." },
  { name: "Peoria", slug: "peoria", description: "Professional towing and parking enforcement for Peoria communities." },
  { name: "Surprise", slug: "surprise", description: "Reliable parking enforcement for Surprise's growing neighborhoods." },
  { name: "Avondale", slug: "avondale", description: "Dependable towing services for Avondale properties and businesses." },
  { name: "Goodyear", slug: "goodyear", description: "Professional parking management for Goodyear's expanding communities." },
  { name: "Buckeye", slug: "buckeye", description: "Fast-growing Buckeye properties served with reliable towing." },
  { name: "Litchfield Park", slug: "litchfield-park", description: "Premium enforcement for Litchfield Park's planned communities." },
  { name: "Tolleson", slug: "tolleson", description: "Professional towing and impound services in Tolleson." },
  { name: "Queen Creek", slug: "queen-creek", description: "Parking enforcement for Queen Creek's master-planned neighborhoods." },
  { name: "Fountain Hills", slug: "fountain-hills", description: "Professional towing services for Fountain Hills properties." },
  { name: "Paradise Valley", slug: "paradise-valley", description: "Discreet, premium enforcement for Paradise Valley estates." },
  { name: "Cave Creek", slug: "cave-creek", description: "Reliable towing and enforcement for Cave Creek properties." },
  { name: "Carefree", slug: "carefree", description: "Professional parking management for Carefree communities." },
  { name: "Sun City", slug: "sun-city", description: "Tailored towing services for Sun City retirement communities." },
  { name: "Sun City West", slug: "sun-city-west", description: "Dedicated enforcement for Sun City West neighborhoods." },
  { name: "Anthem", slug: "anthem", description: "Professional towing for Anthem's master-planned community." },
  { name: "Youngtown", slug: "youngtown", description: "Local towing and enforcement services in Youngtown." },
  { name: "El Mirage", slug: "el-mirage", description: "Reliable parking enforcement for El Mirage properties." },
  { name: "Guadalupe", slug: "guadalupe", description: "Professional towing services for Guadalupe businesses and residences." },
  { name: "Maricopa", slug: "maricopa", description: "Parking enforcement for Maricopa's rapidly growing communities." },
  { name: "San Tan Valley", slug: "san-tan-valley", description: "Dependable towing services for San Tan Valley neighborhoods." },
];

export const FREE_SERVICES = [
  {
    title: "Private Property Impounds",
    slug: "private-property-impounds",
    shortDesc: "Remove unauthorized vehicles from your property at zero cost to you.",
    icon: "shield",
  },
  {
    title: "Parking Enforcement",
    slug: "parking-enforcement",
    shortDesc: "Professional patrol and enforcement for parking garages and private lots.",
    icon: "clipboard",
  },
  {
    title: "HOA Towing",
    slug: "hoa-towing",
    shortDesc: "Customized towing programs for homeowner associations.",
    icon: "home",
  },
  {
    title: "Apartment Towing",
    slug: "apartment-towing",
    shortDesc: "Keep your apartment complex parking organized and compliant.",
    icon: "building",
  },
  {
    title: "Commercial Property Towing",
    slug: "commercial-property-towing",
    shortDesc: "Protect your commercial property from unauthorized parking.",
    icon: "store",
  },
];

export const PAID_SERVICES = [
  {
    title: "Vehicle Relocations",
    slug: "vehicle-relocations",
    shortDesc: "Professional vehicle moves for asphalt repairs, construction, and property maintenance. Pricing starts at ~$1,000 for 10 vehicles.",
    icon: "truck",
  },
];

/** All services combined for sitemap/navigation */
export const SERVICES = [...FREE_SERVICES, ...PAID_SERVICES];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Locations", href: "/#locations" },
  { label: "FAQ", href: "/faq" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Locate Vehicle", href: "/locate-vehicle" },
  { label: "Portal", href: "/portal" },
];
