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
    "Axle Towing & Impound provides professional private property impound and parking enforcement services across the Phoenix metro area at no cost to property owners.",
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
  { name: "Peoria", slug: "peoria", description: "Professional parking enforcement and towing for Peoria properties." },
  { name: "Surprise", slug: "surprise", description: "Fast-response private property towing services in Surprise." },
  { name: "Avondale", slug: "avondale", description: "Dependable towing and parking enforcement for Avondale properties." },
  { name: "Goodyear", slug: "goodyear", description: "Professional private property towing services across Goodyear." },
  { name: "Buckeye", slug: "buckeye", description: "Reliable towing and parking enforcement for Buckeye's growing communities." },
  { name: "Fountain Hills", slug: "fountain-hills", description: "Premium parking enforcement and towing in Fountain Hills." },
  { name: "Queen Creek", slug: "queen-creek", description: "Professional towing services for Queen Creek's master-planned communities." },
  { name: "Paradise Valley", slug: "paradise-valley", description: "Discreet, premium towing services for Paradise Valley's luxury properties." },
  { name: "Cave Creek", slug: "cave-creek", description: "Reliable private property towing and enforcement in Cave Creek." },
  { name: "Litchfield Park", slug: "litchfield-park", description: "Professional parking enforcement for Litchfield Park communities." },
  { name: "Tolleson", slug: "tolleson", description: "Dependable towing and impound services in Tolleson." },
  { name: "El Mirage", slug: "el-mirage", description: "Fast-response towing and parking enforcement in El Mirage." },
  { name: "Sun City", slug: "sun-city", description: "Specialized parking enforcement for Sun City's retirement communities." },
  { name: "Maricopa", slug: "maricopa", description: "Professional towing services for Maricopa's expanding residential areas." },
];

/** Free services — no cost to property owners */
export const SERVICES = [
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

/** Paid services — charged to property owners */
export const PAID_SERVICES = [
  {
    title: "Vehicle Relocations",
    slug: "vehicle-relocations",
    shortDesc: "Professional vehicle moves for asphalt repairs, property maintenance, and construction projects.",
    icon: "truck",
    pricing: "Starting at ~$100/vehicle",
  },
];

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
