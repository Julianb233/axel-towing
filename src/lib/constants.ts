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
  { name: "Anthem", slug: "anthem", description: "Private property towing and parking enforcement for Anthem communities." },
  { name: "Avondale", slug: "avondale", description: "Professional towing and parking enforcement services in Avondale." },
  { name: "Buckeye", slug: "buckeye", description: "Reliable private property towing for Buckeye's growing communities." },
  { name: "Carefree", slug: "carefree", description: "Discreet parking enforcement and towing services in Carefree." },
  { name: "Cave Creek", slug: "cave-creek", description: "Professional towing and impound services for Cave Creek properties." },
  { name: "El Mirage", slug: "el-mirage", description: "Fast-response towing and parking enforcement in El Mirage." },
  { name: "Fountain Hills", slug: "fountain-hills", description: "Trusted parking enforcement for Fountain Hills communities." },
  { name: "Gold Canyon", slug: "gold-canyon", description: "Reliable towing and parking management in Gold Canyon." },
  { name: "Goodyear", slug: "goodyear", description: "Professional private property towing services across Goodyear." },
  { name: "Guadalupe", slug: "guadalupe", description: "Professional towing services for Guadalupe businesses and residences." },
  { name: "Laveen", slug: "laveen", description: "Dependable parking enforcement and towing in Laveen." },
  { name: "Litchfield Park", slug: "litchfield-park", description: "Premium parking enforcement for Litchfield Park properties." },
  { name: "Maricopa", slug: "maricopa", description: "Full-service towing and impound services in Maricopa." },
  { name: "Paradise Valley", slug: "paradise-valley", description: "Discreet, professional towing for Paradise Valley's luxury properties." },
  { name: "Peoria", slug: "peoria", description: "Comprehensive parking enforcement and towing services in Peoria." },
  { name: "Queen Creek", slug: "queen-creek", description: "Professional towing and parking management for Queen Creek." },
  { name: "San Tan Valley", slug: "san-tan-valley", description: "Reliable private property towing in San Tan Valley." },
  { name: "Sun City", slug: "sun-city", description: "Specialized towing and parking enforcement for Sun City communities." },
  { name: "Sun City West", slug: "sun-city-west", description: "Professional parking management for Sun City West properties." },
  { name: "Sun Lakes", slug: "sun-lakes", description: "Trusted towing and parking enforcement in Sun Lakes." },
  { name: "Surprise", slug: "surprise", description: "Fast-response towing and parking enforcement services in Surprise." },
  { name: "Tolleson", slug: "tolleson", description: "Professional private property towing services in Tolleson." },
  { name: "Waddell", slug: "waddell", description: "Reliable towing and parking enforcement for Waddell properties." },
  { name: "Youngtown", slug: "youngtown", description: "Local towing and enforcement services in Youngtown." },
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
