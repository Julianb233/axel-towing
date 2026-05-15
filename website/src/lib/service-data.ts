export interface ServiceTestimonial {
  quote: string;
  name: string;
  role: string;
  company?: string;
}

export interface ServicePageData {
  title: string;
  slug: string;
  /**
   * URL category — defaults to "services". Set to "audiences" for
   * /audiences/<slug> pages so breadcrumbs and JSON-LD use the right path.
   */
  category?: { slug: "services" | "audiences"; label: string };
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubtext: string;
  heroImage?: string;
  introTitle: string;
  introText: string[];
  features: { title: string; desc: string; icon: string }[];
  howItWorks: { step: number; title: string; desc: string }[];
  benefits: { title: string; desc: string; align: "left" | "right" }[];
  faqs: { q: string; a: string }[];
  relatedServices: { title: string; slug: string; desc: string; category?: "services" | "audiences" | "resources" }[];
  targetAudience: string;
  testimonials?: ServiceTestimonial[];
  propertyTypes?: string[];
}

/** Property types served — appears on all service pages for long-tail SEO */
export const PROPERTY_TYPES = [
  "Apartment Complexes",
  "Condominium Communities",
  "HOA Communities",
  "Gated Communities",
  "Townhome Developments",
  "Student Housing",
  "Senior Living Facilities",
  "Retail Shopping Centers",
  "Strip Malls",
  "Office Parks",
  "Medical Facilities",
  "Hotels & Resorts",
  "Restaurants & Bars",
  "Grocery Store Lots",
  "Industrial Parks",
  "Warehouse Facilities",
  "Church & Religious Facilities",
  "Event Venues",
  "Self-Storage Facilities",
  "Mobile Home Parks",
];

/** Phoenix metro neighborhoods for local SEO */
export const PHOENIX_NEIGHBORHOODS = [
  "Downtown Phoenix", "Arcadia", "Biltmore", "Camelback East", "Central City",
  "Desert Ridge", "Ahwatukee", "Laveen", "South Mountain", "Maryvale",
  "North Phoenix", "Paradise Valley Village", "Deer Valley", "Estrella",
  "Encanto", "Sunnyslope", "North Scottsdale", "Old Town Scottsdale",
  "South Scottsdale", "Downtown Mesa", "East Mesa", "Red Mountain",
  "Gilbert Town Center", "San Tan Valley", "Downtown Chandler", "Ocotillo",
  "Downtown Tempe", "ASU Area", "South Tempe", "West Glendale",
  "Downtown Glendale", "Arrowhead Ranch", "Gold Canyon", "Superstition Springs",
];

export const SERVICE_PAGES: Record<string, ServicePageData> = {
  "private-property-impounds": {
    title: "Private Property Impounds",
    slug: "private-property-impounds",
    metaTitle: "Private Property Impound Services — Phoenix, AZ",
    metaDescription:
      "Free private property impound services for apartment complexes, HOAs, and commercial properties in Phoenix. Axle Towing removes unauthorized vehicles at no cost to property owners.",
    heroHeadline: "Cost-Free Private Property Impounds in Phoenix",
    heroSubtext:
      "Remove unauthorized vehicles from your property quickly and legally — at absolutely no cost to you. Fully compliant with Arizona statutes 28-874 and 9-499.05.",
    heroImage: "/images/service-private-impound.jpg",
    introTitle: "Protect Your Property from Unauthorized Parking",
    introText: [
      "Unauthorized parking is more than an inconvenience — it creates liability issues, frustrates tenants and residents, and can block fire lanes and emergency access. Axle Towing provides comprehensive private property impound services that solve these problems permanently.",
      "Our service is completely free for property owners and managers. We install ARS-compliant signage, patrol your property on a schedule you choose, and remove unauthorized vehicles quickly and professionally. All costs are recovered through legally mandated impound fees — never from property owners.",
      "From abandoned vehicles to handicap violations, fire zone enforcement to permit violations, we handle it all. Our process is simple: sign posting, patrol, violation identification, impound, secure storage, and title processing or vehicle sale — all managed by our team.",
    ],
    features: [
      { title: "Zero Cost to You", desc: "All signage installation, patrol, and towing services are 100% free for property owners. We recover costs through legally mandated impound fees.", icon: "dollar" },
      { title: "ARS Compliant", desc: "Full compliance with Arizona Revised Statutes 28-874 and 9-499.05, including proper signage dimensions, placement, and documentation.", icon: "shield" },
      { title: "24/7 Dispatch", desc: "Our dispatch center operates around the clock, ensuring unauthorized vehicles are removed whenever they appear — nights, weekends, and holidays.", icon: "clock" },
      { title: "Abandoned Vehicle Removal", desc: "We identify and process abandoned vehicles following Arizona's abandoned vehicle statutes, clearing them from your property legally.", icon: "car" },
    ],
    howItWorks: [
      { step: 1, title: "Sign Posting", desc: "We install ARS-compliant signage at all entry points and throughout your property at no cost." },
      { step: 2, title: "Patrol & Monitor", desc: "Our trained patrol teams monitor your property on a schedule tailored to your needs." },
      { step: 3, title: "Violation Identified", desc: "When a violation is found — handicap zone, fire lane, expired permit — we document it with photos and GPS." },
      { step: 4, title: "Vehicle Impounded", desc: "The violating vehicle is professionally towed to our secure, monitored impound facility." },
      { step: 5, title: "Storage & Processing", desc: "Vehicles are stored securely while owners are notified. Unclaimed vehicles proceed to title processing or sale per ARS." },
    ],
    benefits: [
      { title: "Eliminate Liability Risk", desc: "Vehicles blocking fire lanes and handicap zones create serious legal liability. Our enforcement removes this risk, protecting you from lawsuits and code violations.", align: "left" },
      { title: "Happy Tenants & Residents", desc: "When parking is properly managed, your tenants and residents can always find a spot. This reduces complaints, improves retention, and increases property value.", align: "right" },
      { title: "Full Legal Protection", desc: "Every tow is documented with timestamped photos, GPS coordinates, and a detailed report. Our process follows Arizona statutes to the letter, protecting you legally.", align: "left" },
    ],
    faqs: [
      { q: "How much does private property impound service cost?", a: "Nothing. Our services are completely free for property owners and managers. Costs are recovered through legally mandated impound fees charged to vehicle owners." },
      { q: "What signage is required under Arizona law?", a: "Arizona statutes 28-874 and 9-499.05 require specific signage with minimum dimensions, placement requirements, and required language. We handle all signage installation at no cost and ensure full compliance." },
      { q: "How quickly can you remove a vehicle?", a: "Our average response time is 30 minutes or less. For properties with patrol agreements, we proactively identify and remove unauthorized vehicles before you even need to call." },
      { q: "What happens to abandoned vehicles?", a: "We follow Arizona's abandoned vehicle statutes. Vehicles are impounded, owners are notified via certified mail, and if unclaimed after the statutory period, they proceed to title processing or public auction." },
      { q: "What documentation do you provide?", a: "Every tow includes timestamped photos, GPS coordinates, and a detailed report accessible through our property manager portal. This protects you in case of any disputes." },
    ],
    relatedServices: [
      { title: "Parking Enforcement", slug: "parking-enforcement", desc: "Professional patrol and enforcement for parking garages and private lots." },
      { title: "Apartment Towing", slug: "apartment-towing", desc: "Specialized towing programs for apartment complexes and multi-family properties." },
      { title: "HOA Towing", slug: "hoa-towing", desc: "Customized towing programs designed for homeowner associations." },
    ],
    targetAudience: "property owners and managers",
    testimonials: [
      { quote: "Axle Towing cleared 14 unauthorized vehicles from our lot in the first month alone. Our residents finally have their assigned spaces back.", name: "Maria R.", role: "Property Manager", company: "Sunridge Apartments" },
      { quote: "The documentation they provide is incredible — timestamped photos, GPS coordinates, everything. We have never had a single dispute hold up.", name: "James T.", role: "Community Director", company: "Desert Palms HOA" },
    ],
  },

  "parking-enforcement": {
    title: "Parking Enforcement",
    slug: "parking-enforcement",
    metaTitle: "Parking Enforcement Services — Phoenix, AZ",
    metaDescription:
      "Professional parking enforcement for private lots, parking garages, and commercial properties in Phoenix. Patrol services, permit systems, and sticker enforcement at no cost.",
    heroHeadline: "Professional Parking Enforcement in Phoenix",
    heroSubtext:
      "Professional patrol and enforcement for parking garages, private lots, and commercial properties — keeping your spaces available for authorized users.",
    heroImage: "/images/service-parking-enforcement.jpg",
    introTitle: "Keep Your Parking Areas Organized and Compliant",
    introText: [
      "Uncontrolled parking can cost your business revenue, frustrate customers, and create safety hazards. Axle Towing provides professional parking enforcement services that keep your lots organized and your spaces available for authorized users.",
      "Our enforcement programs cover parking garages, private lots, sticker permit systems, hang tag permits, and regular patrol services. Whether you need time-limited enforcement, permit verification, or full-time patrol, we design a program that fits.",
      "The result? Reduced complaints from tenants and customers, organized parking that reflects your property's professionalism, and expert enforcement handled entirely by our team — at no cost to you.",
    ],
    features: [
      { title: "Parking Garage Enforcement", desc: "Specialized patrol for multi-level garages including reserved spaces, visitor areas, and monthly permit holders.", icon: "garage" },
      { title: "Sticker Permit Systems", desc: "We design, distribute, and enforce sticker-based parking permits — identifying unauthorized vehicles at a glance.", icon: "sticker" },
      { title: "Hang Tag Permits", desc: "Transferable hang tag permits for visitor management and flexible parking programs with easy verification.", icon: "tag" },
      { title: "Regular Patrol Services", desc: "Scheduled patrol routes customized to your peak violation times, with documented reports after each sweep.", icon: "patrol" },
    ],
    howItWorks: [
      { step: 1, title: "Property Assessment", desc: "We survey your property, identify problem areas, and understand your specific parking challenges." },
      { step: 2, title: "Custom Program Design", desc: "We design a permit system, patrol schedule, and enforcement plan tailored to your property." },
      { step: 3, title: "Signage & Setup", desc: "ARS-compliant signage is installed and permit systems are distributed — all at no cost." },
      { step: 4, title: "Active Enforcement", desc: "Our patrol teams monitor your property, verify permits, and document violations professionally." },
      { step: 5, title: "Ongoing Reporting", desc: "Access real-time patrol reports, violation data, and enforcement analytics through our portal." },
    ],
    benefits: [
      { title: "Reduced Complaints", desc: "Professional enforcement means your tenants and customers always find available parking. Complaint calls about parking violations drop dramatically within the first month.", align: "left" },
      { title: "Organized, Professional Image", desc: "A well-managed parking lot reflects your property's professionalism. Visitors and customers notice when parking is orderly and well-signed.", align: "right" },
      { title: "Expert Enforcement", desc: "Our trained patrol officers handle confrontations, documentation, and legal compliance — so your staff never has to deal with angry drivers or towing disputes.", align: "left" },
    ],
    faqs: [
      { q: "Can you enforce time-limited parking?", a: "Yes. We use digital tracking and physical monitoring to enforce time limits in your parking areas, ensuring turnover for customer-facing businesses." },
      { q: "Do you offer warning tickets before towing?", a: "Yes. We can implement a warning-first program where violators receive a warning notice before towing on subsequent violations. This reduces complaints while maintaining enforcement." },
      { q: "How do sticker permit systems work?", a: "We provide custom stickers that residents or tenants affix to their vehicles. During patrol, our officers verify sticker presence and validity. Vehicles without valid stickers are flagged for warning or towing." },
      { q: "What about hang tag permits for visitors?", a: "Hang tags are transferable permits that can be placed on a visitor's dashboard or mirror. Property managers distribute them to residents for guest use, and we verify them during patrol." },
      { q: "What areas do you patrol?", a: "We serve parking garages, retail lots, office parks, medical facilities, and any private parking area across the entire Phoenix metro area." },
    ],
    relatedServices: [
      { title: "Private Property Impounds", slug: "private-property-impounds", desc: "Full impound services for unauthorized vehicles on your property." },
      { title: "Commercial Property Towing", slug: "commercial-property-towing", desc: "Parking enforcement tailored for retail centers and office parks." },
      { title: "Apartment Towing", slug: "apartment-towing", desc: "Enforcement programs designed for apartment communities." },
    ],
    targetAudience: "parking facility operators and commercial property owners",
    testimonials: [
      { quote: "Our parking garage used to be chaos. Within two weeks of Axle starting patrol, complaints dropped 80%. The permit system just works.", name: "David K.", role: "Facilities Manager", company: "Camelback Tower" },
      { quote: "I love the warning-first approach — our tenants appreciate it, and the ones who ignore warnings know the consequences.", name: "Sarah M.", role: "Retail Center Manager", company: "Desert Ridge Shops" },
    ],
  },

  "vehicle-relocations": {
    title: "Vehicle Relocations",
    slug: "vehicle-relocations",
    metaTitle: "Vehicle Relocation Services — Phoenix, AZ",
    metaDescription:
      "Professional vehicle relocation for asphalt repairs, property maintenance, and construction projects in Phoenix. Fast turnaround, no impound needed. Call for a custom quote.",
    heroHeadline: "Vehicle Relocation Services in Phoenix",
    heroSubtext:
      "Professional vehicle moves for asphalt repairs, property maintenance, and construction projects. Fast turnaround, no impound needed. Call for a custom quote tailored to your project.",
    heroImage: "/images/service-vehicle-relocation.jpg",
    introTitle: "Move Vehicles Quickly for Property Maintenance",
    introText: [
      "Property maintenance projects like asphalt resurfacing, seal coating, line striping, and construction require vehicles to be temporarily relocated. Axle Towing provides professional vehicle relocation services that keep your projects on schedule and on budget.",
      "Unlike our free enforcement services, vehicle relocations are a paid service charged to property owners. This covers the specialized crew, equipment, and coordination required to move multiple vehicles quickly and safely. No one gets towed to an impound lot — vehicles are just repositioned so work can proceed.",
      "Our crews are built for quick turnaround — we can typically relocate around 10 vehicles in about 2 hours. Pricing is custom based on the scope of your project and is a fraction of the cost of project delays caused by vehicles blocking work areas.",
    ],
    features: [
      { title: "Asphalt & Seal Coat Projects", desc: "We clear parking sections for asphalt resurfacing, seal coating, and line striping — moving vehicles phase by phase as contractors work.", icon: "road" },
      { title: "Construction Support", desc: "Clear staging areas, loading zones, and work zones for construction crews. We coordinate with your general contractor for seamless operations.", icon: "construction" },
      { title: "Custom Project Quotes", desc: "Clear, custom pricing based on the number of vehicles and scope of the project — always cheaper than delays or rescheduling contractors.", icon: "speed" },
      { title: "No Impound Required", desc: "Vehicles are moved on-site to available parking areas or temporary holding zones. No one's car goes to an impound lot.", icon: "move" },
    ],
    howItWorks: [
      { step: 1, title: "Schedule the Project", desc: "Contact us with your project timeline, number of vehicles, and the areas that need to be cleared." },
      { step: 2, title: "Resident Notification", desc: "We help you create and distribute advance notices to residents and tenants about the upcoming relocation." },
      { step: 3, title: "Day-Of Relocation", desc: "Our crew arrives on schedule and professionally relocates all remaining vehicles to designated areas." },
      { step: 4, title: "Work Proceeds", desc: "Your contractors have clear, unobstructed access to complete their work on time." },
    ],
    benefits: [
      { title: "Stay on Schedule", desc: "Construction and maintenance projects run on tight timelines. Our relocation service ensures vehicles are out of the way when contractors arrive, preventing costly delays and rescheduling fees.", align: "left" },
      { title: "Resident-Friendly Approach", desc: "We are not impounding anyone's vehicle — just temporarily moving it. This approach keeps residents happy while ensuring maintenance work gets done on time.", align: "right" },
      { title: "Cost-Effective Solution", desc: "Our relocation service costs a fraction of what you would spend on project delays, rescheduled contractors, or extended crew time. Contact us for a quote tailored to your project.", align: "left" },
    ],
    faqs: [
      { q: "How much does vehicle relocation cost?", a: "Pricing is custom for each project, based on the number of vehicles, timeline, and complexity. Call us for a quick, no-obligation quote." },
      { q: "Do vehicles go to an impound lot?", a: "No. Vehicle relocations move cars to another area on your property or a nearby designated zone. No one's vehicle is impounded." },
      { q: "How much advance notice do residents need?", a: "We recommend 48-72 hours of advance notice. We can help you create and distribute door hangers, windshield notices, and posted announcements." },
      { q: "What if a vehicle is locked or in park?", a: "Our drivers use wheel-lift and flatbed equipment to safely move vehicles regardless of their state. All vehicles are handled carefully and fully insured during the relocation." },
      { q: "Can you coordinate with our contractors?", a: "Absolutely. We work directly with your paving company, seal coat crew, or general contractor to time relocations around their work schedule." },
    ],
    relatedServices: [
      { title: "Private Property Impounds", slug: "private-property-impounds", desc: "For vehicles that need to be removed from your property entirely." },
      { title: "Apartment Towing", slug: "apartment-towing", desc: "Ongoing parking enforcement for apartment communities." },
      { title: "Commercial Property Towing", slug: "commercial-property-towing", desc: "Enforcement solutions for commercial and retail properties." },
    ],
    targetAudience: "property managers planning maintenance projects",
    testimonials: [
      { quote: "We needed 40 cars moved for a repaving project. Axle had all of them relocated in under 3 hours — our contractor started on time for once.", name: "Robert P.", role: "Maintenance Director", company: "Arcadia Property Group" },
      { quote: "The advance notice system they helped us set up meant only 5 vehicles needed to be moved on the day. Residents appreciated the communication.", name: "Linda W.", role: "Property Manager", company: "Mesa Verde Apartments" },
    ],
  },

  "hoa-towing": {
    title: "HOA Towing",
    slug: "hoa-towing",
    metaTitle: "HOA Towing Services — Phoenix, AZ",
    metaDescription:
      "Free towing programs for HOA communities in Phoenix. Board member education, sign posting, patrol services, and CC&R enforcement — at no cost to the HOA.",
    heroHeadline: "Cost-Free HOA Towing Services in Phoenix",
    heroSubtext:
      "Customized parking enforcement and towing programs designed specifically for homeowner associations and property management companies across the Phoenix metro.",
    heroImage: "/images/arizona-hoa-entrance.jpg",
    introTitle: "Parking Enforcement Built for HOA Communities",
    introText: [
      "HOA board members know that parking violations are one of the most common — and most contentious — issues in community management. Unauthorized vehicles in guest spots, RVs on streets, and CC&R violations create frustration for homeowners and headaches for boards.",
      "Here is the opportunity most property managers miss: HOA boards turn over annually. New board members need education on parking enforcement options, creating a fresh opportunity to establish or improve your community's towing program every single year.",
      "Axle Towing works with both HOA boards and property management companies to design custom towing programs that enforce your community's parking rules fairly and consistently. Our programs are completely free for the HOA — we handle sign posting, patrol services, enforcement, and detailed reporting at no cost.",
    ],
    features: [
      { title: "Board Member Education", desc: "We present to your HOA board annually, educating new members on parking enforcement options, Arizona law, and how our zero-cost program works.", icon: "education" },
      { title: "Annual Board Turnover = Opportunity", desc: "New board members each year mean new opportunities to establish or expand enforcement. We stay engaged through every transition.", icon: "refresh" },
      { title: "Zero Cost to the HOA", desc: "All signage, patrol, and towing services are completely free for the homeowner association. Costs are recovered through impound fees.", icon: "dollar" },
      { title: "Patrol Services", desc: "Regular patrol of community streets, guest parking, and common areas to identify and address violations proactively.", icon: "patrol" },
    ],
    howItWorks: [
      { step: 1, title: "Board Presentation", desc: "We present our zero-cost program to the HOA board, explain Arizona towing law, and answer all questions." },
      { step: 2, title: "CC&R Review", desc: "We review your community's CC&Rs and parking rules to design an enforcement program that aligns perfectly." },
      { step: 3, title: "Sign Posting", desc: "ARS-compliant signage is installed at community entry points, guest parking areas, and common zones — all free." },
      { step: 4, title: "Patrol & Enforcement", desc: "Regular patrol of the community with warnings first, then towing for repeat or serious violations." },
      { step: 5, title: "Monthly Reporting", desc: "Detailed monthly reports for board meetings showing enforcement activity, trends, and recommendations." },
    ],
    benefits: [
      { title: "Designed for Property Managers", desc: "We work directly with property management companies to streamline enforcement across their entire HOA portfolio. One point of contact, one consistent program, multiple communities.", align: "left" },
      { title: "Board-Approved Process", desc: "Every aspect of our program is reviewed and approved by the HOA board before implementation. We provide templates, presentations, and documentation to make board approval seamless.", align: "right" },
      { title: "Reduced Homeowner Complaints", desc: "Our warning-first approach and clear communication reduce complaints dramatically. When homeowners understand the rules and see consistent enforcement, disputes drop off.", align: "left" },
    ],
    faqs: [
      { q: "Does this cost the HOA anything?", a: "No. Our towing programs are completely free for the HOA. All costs are recovered through legally mandated impound fees charged to vehicle owners who violate parking rules." },
      { q: "How do you handle annual board turnover?", a: "We proactively schedule presentations with new board members each year to re-educate them on the program, answer questions, and discuss any changes they want to make." },
      { q: "Do you work with property management companies?", a: "Yes. We work with many property management companies across the Phoenix metro, managing towing programs for multiple HOA communities under a single relationship." },
      { q: "Can you manage RV and trailer parking?", a: "Yes. We enforce rules regarding RV storage, trailer parking, and oversized vehicles based on your CC&Rs and board-approved policies." },
      { q: "What about guest parking abuse?", a: "We implement guest parking systems including temporary permits, designated areas, and time limits to prevent abuse while still welcoming legitimate guests." },
    ],
    relatedServices: [
      { title: "Apartment Towing", slug: "apartment-towing", desc: "Enforcement programs for apartment and multi-family communities." },
      { title: "Private Property Impounds", slug: "private-property-impounds", desc: "Full impound services for unauthorized vehicles." },
      { title: "Parking Enforcement", slug: "parking-enforcement", desc: "Professional patrol and permit enforcement services." },
    ],
    targetAudience: "HOA board members and property management companies",
    testimonials: [
      { quote: "Axle presents to our board every year when new members join. They make it so easy — signage, rules, everything is handled. Zero cost to the HOA.", name: "Patricia G.", role: "Board President", company: "Saguaro Hills HOA" },
      { quote: "We manage 12 HOA communities and Axle handles towing for all of them. One point of contact, consistent service across the board.", name: "Michael B.", role: "Regional Manager", company: "Southwest Property Management" },
    ],
  },

  "apartment-towing": {
    title: "Apartment Towing",
    slug: "apartment-towing",
    metaTitle: "Apartment Towing Services — Phoenix, AZ",
    metaDescription:
      "Professional towing and parking enforcement for apartment complexes in Phoenix. Assigned space enforcement, visitor management, and property manager portal access — all free.",
    heroHeadline: "Apartment Towing Services in Phoenix",
    heroSubtext:
      "Keep your apartment community's parking organized, safe, and available for your residents — with full portal access for property managers.",
    heroImage: "/images/arizona-apartment-parking.jpg",
    introTitle: "Parking Solutions for Apartment Communities",
    introText: [
      "Apartment communities face unique parking challenges: unauthorized vehicles taking assigned spaces, abandoned cars collecting dust, visitors overstaying their welcome, and fire lane violations creating liability. These issues directly impact resident satisfaction and retention.",
      "Axle Towing provides comprehensive parking enforcement programs designed specifically for apartment complexes. We work with property managers and management companies to create effective, resident-friendly enforcement that keeps parking organized and residents happy.",
      "Our apartment towing programs include assigned space enforcement, visitor parking management, abandoned vehicle removal, and full property manager portal access — all completely free for property owners and management companies.",
    ],
    features: [
      { title: "Assigned Space Enforcement", desc: "We verify permits, decals, and assigned spaces to ensure residents can always park in their designated spots. No more stolen spaces.", icon: "parking" },
      { title: "Visitor Parking Management", desc: "Guest parking systems with temporary permits, time limits, and designated visitor areas prevent abuse while welcoming legitimate guests.", icon: "visitor" },
      { title: "Abandoned Vehicle Removal", desc: "We identify and remove abandoned vehicles following Arizona's abandoned vehicle procedures, clearing your lot of eyesores and safety hazards.", icon: "car" },
      { title: "Property Manager Portal", desc: "Full online portal access to request tows, view reports, track enforcement activity, and manage your parking program in real time.", icon: "portal" },
    ],
    howItWorks: [
      { step: 1, title: "Property Assessment", desc: "We survey your apartment complex, map parking areas, and identify problem zones." },
      { step: 2, title: "Program Design", desc: "Custom enforcement plan including permit systems, patrol schedules, and violation procedures." },
      { step: 3, title: "Signage Installation", desc: "ARS-compliant signage installed at all entry points, assigned areas, and visitor zones — free of charge." },
      { step: 4, title: "Portal Setup", desc: "Your property management team gets full portal access to request tows and view reports." },
      { step: 5, title: "Ongoing Enforcement", desc: "Regular patrol, violation documentation, and professional towing — with monthly reports for your records." },
    ],
    benefits: [
      { title: "Increase Resident Satisfaction", desc: "When residents know their assigned space will always be available, satisfaction scores go up and lease renewals increase. Parking is consistently one of the top factors in apartment satisfaction surveys.", align: "left" },
      { title: "Reduce Management Headaches", desc: "Our portal lets property managers request tows, track enforcement, and pull reports without making phone calls or filling out paperwork. Enforcement becomes effortless.", align: "right" },
      { title: "Eliminate Abandoned Vehicles", desc: "Abandoned vehicles are more than eyesores — they attract vandalism, reduce available parking, and create code compliance issues. We handle removal from identification through legal disposition.", align: "left" },
    ],
    faqs: [
      { q: "Will this cost the apartment complex anything?", a: "No. Our services are completely free for property owners and management companies. All costs are covered by legally mandated impound fees charged to vehicle owners." },
      { q: "How do residents request a tow?", a: "Residents can call our 24/7 dispatch line. Property managers can also request tows through our online portal or by phone at any time." },
      { q: "What about vehicles without a parking permit?", a: "Depending on your property's rules, we can issue warnings, apply boot notices, or tow vehicles without valid permits. The approach is customized to your preferences." },
      { q: "How does the property manager portal work?", a: "Our web-based portal gives you 24/7 access to request tows, view all enforcement activity on your property, pull reports, and manage your parking rules — all from your computer or phone." },
      { q: "How quickly can you set up service?", a: "Most apartment properties can be fully set up within 5-7 business days, including signage installation, permit distribution, and portal access." },
    ],
    relatedServices: [
      { title: "Private Property Impounds", slug: "private-property-impounds", desc: "Full impound services for persistent unauthorized parking." },
      { title: "Vehicle Relocations", slug: "vehicle-relocations", desc: "Temporary vehicle moves for maintenance and construction projects." },
      { title: "Parking Enforcement", slug: "parking-enforcement", desc: "Patrol and permit enforcement for any private parking area." },
    ],
    targetAudience: "apartment property managers and management companies",
    testimonials: [
      { quote: "Resident parking complaints were our #1 issue. Since Axle started enforcement, complaints dropped to almost zero and lease renewals are up 15%.", name: "Karen S.", role: "Property Manager", company: "Tempe Gateway Apartments" },
      { quote: "The online portal is a game-changer. I can request a tow, check reports, and see enforcement activity all from my phone.", name: "Anthony D.", role: "Assistant Manager", company: "Chandler Crossing" },
    ],
  },

  "commercial-property-towing": {
    title: "Commercial Property Towing",
    slug: "commercial-property-towing",
    metaTitle: "Commercial Property Towing Services — Phoenix, AZ",
    metaDescription:
      "Protect your commercial property parking from unauthorized vehicles. Professional enforcement for retail centers, office parks, and strip malls in Phoenix — free for property owners.",
    heroHeadline: "Commercial Property Towing in Phoenix",
    heroSubtext:
      "Protect your commercial property's parking and maintain a professional image — ensuring spaces are available for your customers and employees.",
    heroImage: "/images/arizona-commercial-parking.jpg",
    introTitle: "Parking Enforcement for Commercial Properties",
    introText: [
      "When unauthorized vehicles take up your commercial property's parking spaces, it directly impacts your tenants' businesses. Lost parking means lost customers, lost revenue, and frustrated tenants who may not renew their leases.",
      "Axle Towing provides professional parking enforcement for commercial buildings, retail centers, office parks, and strip malls. We keep your spaces available for the people who matter most — your tenants and their customers.",
      "Our commercial enforcement programs protect your property's professional image, reduce liability from fire lane and ADA violations, and ensure customer-facing parking is always available. And it is completely free for property owners.",
    ],
    features: [
      { title: "Retail Center Enforcement", desc: "Keep customer parking available at strip malls and retail centers. We target chronic violators while ensuring legitimate shoppers are never inconvenienced.", icon: "store" },
      { title: "Office Park Management", desc: "Designated employee and visitor parking with permit verification, time limits for visitor spaces, and after-hours enforcement.", icon: "office" },
      { title: "Professional Image", desc: "Well-managed parking reflects your property's quality. Clean signage, orderly lots, and professional enforcement create a positive first impression.", icon: "star" },
      { title: "Liability Protection", desc: "Fire lane, ADA, and loading zone enforcement protects you from code violations, lawsuits, and fines. We ensure full compliance at all times.", icon: "shield" },
    ],
    howItWorks: [
      { step: 1, title: "Property Survey", desc: "We assess your commercial property, identify parking challenges, and understand your tenants' needs." },
      { step: 2, title: "Tenant Coordination", desc: "We meet with tenants to understand parking patterns, employee needs, and customer expectations." },
      { step: 3, title: "Enforcement Plan", desc: "A customized plan covering signage, time limits, permit systems, and patrol schedules — approved by you." },
      { step: 4, title: "Implementation", desc: "Signage installed, permits distributed, and patrol begins — all at no cost to you." },
      { step: 5, title: "Ongoing Management", desc: "Regular patrol, monthly reporting, and quarterly reviews to adjust the program as your property evolves." },
    ],
    benefits: [
      { title: "Protect Tenant Revenue", desc: "Available parking directly impacts foot traffic and revenue for your retail and restaurant tenants. Professional enforcement ensures customer spaces are always open, keeping your tenants profitable and lease renewals strong.", align: "left" },
      { title: "Maintain Professional Standards", desc: "Your commercial property's parking lot is often the first thing visitors see. Orderly, well-signed parking with professional enforcement signals quality and builds confidence in your property.", align: "right" },
      { title: "Reduce Legal Liability", desc: "Vehicles blocking fire lanes, ADA spaces, and loading zones create significant legal exposure. Our enforcement ensures compliance with all federal, state, and local regulations, protecting you from fines and lawsuits.", align: "left" },
    ],
    faqs: [
      { q: "Will aggressive towing scare away customers?", a: "No. Our customer-first approach uses clear signage, reasonable time limits, and warning programs to ensure legitimate customers are never inconvenienced. We target chronic violators and unauthorized overnight parkers, not shoppers." },
      { q: "Can you handle multi-tenant properties?", a: "Yes. We coordinate with all tenants to create a unified parking policy that works for everyone, including designated employee areas and shared customer parking." },
      { q: "What about employee parking?", a: "We implement designated employee parking areas and permit systems to keep customer-facing spaces available, increasing foot traffic for your tenants." },
      { q: "Do you enforce handicap parking?", a: "Yes. ADA-designated spaces are enforced in compliance with state and federal regulations. This protects you from significant ADA violation fines." },
      { q: "How do you handle after-hours parking?", a: "We prevent unauthorized overnight parking, vehicle storage, and lot use outside business hours. This reduces dumping, vandalism, and liability during off-hours." },
    ],
    relatedServices: [
      { title: "Parking Enforcement", slug: "parking-enforcement", desc: "Comprehensive patrol and permit enforcement programs." },
      { title: "Private Property Impounds", slug: "private-property-impounds", desc: "Full impound services for unauthorized vehicles." },
      { title: "Vehicle Relocations", slug: "vehicle-relocations", desc: "Temporary vehicle moves for property maintenance." },
    ],
    targetAudience: "commercial property owners and retail center managers",
    testimonials: [
      { quote: "We lost an estimated $30K per month in foot traffic from non-customer parking. Axle's enforcement solved it completely — our tenants are thrilled.", name: "Steven L.", role: "Shopping Center Owner", company: "Baseline Marketplace" },
      { quote: "Professional, discreet, and effective. Their team handles everything so my property staff never has to deal with confrontations.", name: "Rachel N.", role: "Office Park Director", company: "Scottsdale Business Center" },
    ],
  },

  "abandoned-vehicle-removal": {
    title: "Abandoned Vehicle Removal",
    slug: "abandoned-vehicle-removal",
    metaTitle: "Abandoned Vehicle Removal — Phoenix, AZ | Property Managers",
    metaDescription:
      "Free abandoned vehicle removal for Phoenix property managers, HOAs, and commercial owners. ARS-compliant 72-hour process, certified mail notice, title processing and auction handled end-to-end.",
    heroHeadline: "Abandoned Vehicle Removal in Phoenix",
    heroSubtext:
      "Get long-sitting, unregistered, and abandoned vehicles legally removed from your property — fully compliant with Arizona's abandoned vehicle statutes, at no cost to property owners.",
    heroImage: "/images/service-private-impound.jpg",
    introTitle: "Phoenix's Property-Manager-Focused Abandoned Vehicle Service",
    introText: [
      "Abandoned vehicles are more than an eyesore — they reduce available parking, attract vandalism, leak fluids into your lot, and signal neglect to prospective residents or tenants. For HOAs and apartment communities, a single abandoned car sitting for weeks can trigger code complaints, board frustration, and lower satisfaction scores.",
      "Axle Towing handles the entire abandoned vehicle process under Arizona's 72-hour rule and abandoned vehicle statutes: identification, documentation, posting, certified-mail notice through ADOT, secure tow, secure storage, and title processing or public auction when unclaimed. Property owners pay nothing — the process is funded by statutory impound fees and auction proceeds.",
      "We are exclusively focused on property managers, HOAs, and commercial owners across the Phoenix metro. Every removal includes time-stamped photos, GPS coordinates, and the documentation your insurer or legal team will want if the prior owner ever surfaces. You sign one authorization once; we handle the rest.",
    ],
    features: [
      { title: "ARS-Compliant 72-Hour Process", desc: "We follow Arizona's abandoned vehicle statutes including the 72-hour observation window, ADOT-coordinated notice, and statutory waiting periods before disposition.", icon: "shield" },
      { title: "Certified Mail to Last Known Owner", desc: "We pull title records, send certified notice to the last registered owner and lienholder, and document non-response per Arizona law before disposition.", icon: "mail" },
      { title: "Title Processing & Auction", desc: "When vehicles remain unclaimed past the statutory window we handle title clearance and public auction — clearing your lot permanently, not just temporarily.", icon: "dollar" },
      { title: "Zero Cost to Property Owners", desc: "All costs — observation, posting, notice, tow, storage, title processing — are recovered through impound fees and auction proceeds. Property owners never pay.", icon: "dollar" },
    ],
    howItWorks: [
      { step: 1, title: "Property-Manager Identification", desc: "You flag a candidate vehicle through the portal, by phone, or our patrol team identifies it during a routine sweep." },
      { step: 2, title: "Documentation & 72-Hour Observation", desc: "We photograph the vehicle from 4 angles, capture GPS, log condition markers (flat tires, dust, expired tags) and begin the statutory observation window." },
      { step: 3, title: "Posting & Certified Notice", desc: "A statutory notice is posted on the vehicle and certified mail goes to the last registered owner and lienholder via ADOT records." },
      { step: 4, title: "Secure Tow & Storage", desc: "When the observation window closes without contact, we tow the vehicle to our secure impound and continue notice procedures." },
      { step: 5, title: "Title Clearance or Auction", desc: "Vehicles unclaimed past the statutory waiting period proceed to title transfer or public auction per ARS — fully closing the file." },
    ],
    benefits: [
      { title: "Stop Abandoned Cars from Aging In Place", desc: "Without a documented process, abandoned vehicles often sit for months. Our ARS-compliant pipeline starts the clock the same day you flag the car, so it's gone in the shortest legal window — not lingering on your property indefinitely.", align: "left" },
      { title: "Audit-Trail Documentation Your Insurer Will Approve", desc: "Every step — photos, GPS, posting, certified mail receipts, auction records — is captured and available on demand. If a prior owner ever resurfaces, you have a defensible legal record. Most carriers and HOA boards explicitly require this.", align: "right" },
      { title: "Free Up Parking, Reduce Code Complaints", desc: "Abandoned vehicles take up real spaces that residents or tenants are paying for. Removing them improves parking availability, reduces resident complaints, and protects you from municipal code violations tied to derelict-vehicle ordinances.", align: "left" },
    ],
    faqs: [
      { q: "How long until an abandoned vehicle can legally be towed in Arizona?", a: "Arizona uses a 72-hour observation window for vehicles on private property combined with statutory notice requirements via ADOT. After the observation period and proper posting, the vehicle can be lawfully removed. Total time from first sighting to tow is typically 4-7 days when notice is required." },
      { q: "Do I need to file anything with the city or ADOT?", a: "We handle the ADOT abandoned vehicle paperwork, certified mail notices to the registered owner and lienholder, and any required city filings on your behalf. You authorize the process once; we handle the rest." },
      { q: "What if the vehicle has expired tags but is still being driven occasionally?", a: "Expired tags alone don't make a vehicle abandoned. Abandonment requires observable signs of non-use (dust, flat tires, no movement, debris underneath) over the observation period. If a vehicle is being moved or used, it's a parking permit / permit-violation issue handled under our other services instead." },
      { q: "Does removal cost the property anything?", a: "No. All costs are recovered through impound fees and, where applicable, auction proceeds under the statutory framework. Property owners and HOAs pay nothing." },
      { q: "What about vehicles with liens, salvage titles, or out-of-state plates?", a: "We've handled all three. ADOT records reveal lienholders, and we send required notice to them in addition to the registered owner. Out-of-state plates are run through interstate vehicle databases. Salvage and rebuilt titles follow specialized auction procedures." },
      { q: "Can we just have you remove a vehicle the same day it's reported?", a: "Not for true abandonment cases — Arizona's observation and notice requirements protect both vehicle owners and property managers from wrongful-tow liability. For vehicles that are clearly violating posted parking rules (no permit, blocking fire lane, etc.) we can act much faster under our private property impound service." },
    ],
    relatedServices: [
      { title: "Private Property Impounds", slug: "private-property-impounds", desc: "Fast removal for posted parking violations (different from abandonment)." },
      { title: "HOA Towing", slug: "hoa-towing", desc: "Ongoing parking enforcement for HOA communities." },
      { title: "Property Manager Towing Hub", slug: "property-manager-towing-hub", desc: "Pillar resource hub with the full set of guides.", category: "resources" },
    ],
    targetAudience: "property managers, HOAs, and commercial owners",
    testimonials: [
      { quote: "We had two abandoned cars sitting for over a month and our board was getting heat. Axle started the legal clock the same day I called and the lot was clear within a week. The paperwork trail is incredible.", name: "Lori H.", role: "Community Manager", company: "Mesa Greens HOA" },
      { quote: "We get an abandoned vehicle every 2-3 weeks across our portfolio. Knowing the process is handled — and we have the documentation — has saved my team hours and the legal anxiety.", name: "Marcus B.", role: "Regional Property Manager", company: "Sonoran Property Group" },
    ],
  },

  "hoa-audience": {
    title: "Towing for HOA Boards & Community Managers",
    slug: "hoa",
    category: { slug: "audiences", label: "Audiences" },
    metaTitle: "HOA Towing Company Phoenix — Board-Approved Programs | Axle Towing",
    metaDescription:
      "Free, board-approved towing programs for Phoenix HOA communities. Annual board presentations, ARS-compliant signage, CC&R-aligned enforcement, monthly reporting. Built for HOA boards and community managers.",
    heroHeadline: "Towing & Parking Enforcement for HOA Boards",
    heroSubtext:
      "Board-approved, ARS-compliant enforcement that aligns with your CC&Rs — at zero cost to the HOA. We present to your board every year and handle every detail so volunteers don't have to.",
    heroImage: "/images/arizona-hoa-entrance.jpg",
    introTitle: "Built for the People Who Sit on the Board",
    introText: [
      "HOA boards are made up of homeowners who volunteer their time. Parking enforcement is consistently one of the most contentious topics on the agenda — RVs in the street, guests overstaying, fire-lane violations, vehicles that have not moved in months. Without a clear program, every incident becomes a board debate.",
      "We've worked with dozens of HOA boards across the Phoenix metro and we know the lifecycle: annual elections, new members who need to be educated, CC&R language that has not been updated in 15 years, and a property management company that needs a single point of contact. Our HOA program is designed around that lifecycle.",
      "This page is the audience-specific landing for HOA boards and community managers. If you serve a homeowner association in Phoenix, Scottsdale, Mesa, Chandler, Gilbert, Tempe, Glendale, or anywhere across the metro, this is the right place to start.",
    ],
    features: [
      { title: "Annual Board Presentations", desc: "When new board members come on each year, we present the program from scratch — Arizona law, your CC&Rs, the zero-cost model, and the monthly reporting your board needs.", icon: "education" },
      { title: "CC&R-Aligned Enforcement", desc: "We review your community's CC&Rs and parking rules and design enforcement that matches what your community actually voted on — no gaps, no overreach.", icon: "shield" },
      { title: "Monthly Reports for Board Meetings", desc: "Every month we deliver a written report covering enforcement activity, trends, problem areas, and recommendations — ready to drop into your board packet.", icon: "patrol" },
      { title: "One Point of Contact for Management Co.", desc: "If you're a property management company managing multiple HOAs, you get one account manager covering every community in your portfolio with consistent reporting.", icon: "portal" },
    ],
    howItWorks: [
      { step: 1, title: "Board Discovery Call", desc: "A 30-minute call with the board or community manager to understand the community, current pain points, and CC&R language." },
      { step: 2, title: "Board Presentation", desc: "We present the proposed program at a board meeting, answer questions, and address resident concerns before anything is decided." },
      { step: 3, title: "CC&R + Signage Alignment", desc: "Our team aligns the enforcement plan with your CC&Rs and installs ARS-compliant signage at all entry points, guest parking, and common areas — at no cost." },
      { step: 4, title: "Warning-First Rollout", desc: "We start with a warning-first phase so residents understand the new program before any tows happen. Communication templates included." },
      { step: 5, title: "Ongoing Enforcement & Reporting", desc: "Patrols run on the schedule the board approved, with monthly written reports and an annual board check-in." },
    ],
    benefits: [
      { title: "Take Parking off the Board Agenda", desc: "When your enforcement program runs predictably and is documented monthly, parking stops being a recurring debate. Board members get to focus on landscaping, reserves, and amenities — not arguing about whose guest stayed too long.", align: "left" },
      { title: "Protect the Community from Liability", desc: "Fire-lane violations, ADA spaces, and CC&R-prohibited storage all create real legal exposure. A documented, ARS-compliant enforcement program with a clear paper trail is the single best way to protect both the HOA board and the management company from a wrongful-tow or negligence claim.", align: "right" },
      { title: "Annual Continuity Through Board Turnover", desc: "When new board members come on, we re-present the program, answer their questions, and re-establish the relationship. That continuity is hard to maintain when enforcement is run ad-hoc through whoever happens to be on the board this year.", align: "left" },
    ],
    faqs: [
      { q: "Does this cost the HOA anything?", a: "No. Our program is completely free for the HOA. Sign installation, patrol, towing, and reporting are all funded through statutory impound fees charged to vehicle owners who violate the posted rules." },
      { q: "What if the board wants to approve every tow individually?", a: "We support that. Many HOAs prefer a model where our patrol identifies and documents violations and the board (or community manager) authorizes the tow. Others prefer fully delegated enforcement under the policies the board approved up front." },
      { q: "How do you handle pushback from residents?", a: "Our warning-first phase gives residents notice and time to adjust. Signage is ARS-compliant so the legal basis is clear. When residents call the board, the board can point at the documented program, the photos, and the monthly report rather than personally defending each decision." },
      { q: "What about RVs and trailer storage?", a: "RV, trailer, boat, and oversized-vehicle rules are highly community-specific. We codify your CC&R language into a clear enforcement matrix and execute against it consistently — including grace periods if your CC&Rs allow them." },
      { q: "Can you work with our existing property management company?", a: "Yes. We work directly with property management companies including all reporting, billing-of-record routing, and portal access. Your community manager becomes the single point of contact instead of the board." },
      { q: "What happens at the annual board transition?", a: "We proactively request a slot at the first board meeting of the new term to re-introduce the program, walk through prior year activity, and answer any questions the new members have. The program doesn't restart from zero every year." },
    ],
    relatedServices: [
      { title: "HOA Towing Service", slug: "hoa-towing", desc: "The HOA-specific service page with the operational details." },
      { title: "Private Property Impounds", slug: "private-property-impounds", desc: "The underlying impound service that powers HOA enforcement." },
      { title: "Property Manager Towing Hub", slug: "property-manager-towing-hub", desc: "All HOA and property manager resources in one place.", category: "resources" },
    ],
    targetAudience: "HOA board members and community managers",
    testimonials: [
      { quote: "We have new board members every January. Axle re-presents the program every year so the new folks don't have to figure it out from scratch. That's the part nobody else does.", name: "Diane K.", role: "Board President", company: "Saguaro Hills HOA" },
      { quote: "Our community manager said pick anyone we wanted. We picked Axle because the monthly report shows up before the board meeting every single month without us asking.", name: "Andrew M.", role: "Board Treasurer", company: "Sonoran Ridge HOA" },
    ],
  },

  "apartment-complexes": {
    title: "Towing for Apartment Complexes",
    slug: "apartment-complexes",
    category: { slug: "audiences", label: "Audiences" },
    metaTitle: "Apartment Towing Phoenix — Property Manager Programs | Axle Towing",
    metaDescription:
      "Apartment towing programs in Phoenix built around assigned spaces, visitor management, and resident satisfaction. Property manager portal, ARS-compliant signage, abandoned vehicle removal — at no cost to the complex.",
    heroHeadline: "Towing & Enforcement for Apartment Property Managers",
    heroSubtext:
      "Keep assigned spaces available, prevent visitor parking abuse, clear abandoned vehicles, and lift resident satisfaction scores — with a property-manager portal that turns enforcement into a 60-second task.",
    heroImage: "/images/arizona-apartment-parking.jpg",
    introTitle: "Parking is a Top-3 Resident Satisfaction Driver",
    introText: [
      "On almost every resident satisfaction survey, parking ranks in the top three. When residents can't find their assigned spot or their guest can't park because someone left a junker in the lot for three months, it shows up as lower satisfaction, lower lease renewal, and more move-out reviews about parking.",
      "Apartment communities have a specific parking enforcement pattern: assigned spaces, visitor permit systems, occasional abandoned vehicles, and chronic problem cars whose owners do not live in the community. The on-site team does not have the time or the legal protection to run enforcement themselves.",
      "Our apartment programs handle every piece — assigned-space verification, visitor permit issuance and time limits, abandoned vehicle removal under Arizona statute, and full property manager portal access for requesting tows and viewing reports — at zero cost to the property.",
    ],
    features: [
      { title: "Assigned Space Verification", desc: "Patrol verifies decals, permits, or unit-association against the master roster you provide — and updates as turnover happens.", icon: "parking" },
      { title: "Visitor Parking with Time Limits", desc: "Temporary permits, hang tags, or QR-based visitor systems with time limits prevent ongoing abuse while welcoming legitimate guests.", icon: "visitor" },
      { title: "Abandoned Vehicle Pipeline", desc: "Long-sitting unregistered vehicles get processed under Arizona's 72-hour rule with full ARS-compliant documentation.", icon: "car" },
      { title: "Property Manager Portal", desc: "Request tows, view every patrol report, see photo evidence, and manage your community's rules from one logged-in dashboard.", icon: "portal" },
    ],
    howItWorks: [
      { step: 1, title: "On-Site Walk & Master Roster", desc: "We walk the property with the on-site manager to understand parking layout, problem areas, and current assignment of spaces to residents." },
      { step: 2, title: "Program Design & Permit System", desc: "We design the right permit / decal / hang tag system for your community, plus the visitor parking model and the enforcement schedule." },
      { step: 3, title: "Signage & Resident Communication", desc: "ARS-compliant signage goes up at entry points and all problem zones. We provide templated resident notifications for the rollout." },
      { step: 4, title: "Portal Onboarding", desc: "Your manager and assistant managers get portal logins, training, and a 24/7 hotline number to use if the portal isn't convenient." },
      { step: 5, title: "Ongoing Enforcement & Monthly Reports", desc: "Patrol runs on the schedule we agreed, every tow is documented, and a monthly summary lands in your inbox." },
    ],
    benefits: [
      { title: "Higher Resident Renewal Rates", desc: "When residents trust that their assigned spot will be there at 11pm after a 12-hour shift, satisfaction goes up. Communities consistently report lease renewal lifts of 5-15% after a parking program is professionally managed.", align: "left" },
      { title: "Free Up the On-Site Team", desc: "Your leasing agents and assistant manager should be leasing units and handling resident relations — not arguing with someone whose car got towed. The portal lets the property manager request a tow in under a minute and never engage with the vehicle owner directly.", align: "right" },
      { title: "Eliminate the Abandoned Vehicle Problem", desc: "Apartment communities are a magnet for abandoned vehicles. A documented, statutorily-compliant pipeline means cars actually leave instead of aging in place — and your lot doesn't degrade into a junkyard appearance.", align: "left" },
    ],
    faqs: [
      { q: "How quickly can we get a new property set up?", a: "Most apartment complexes are fully set up within 5-7 business days, including the walk-through, signage installation, permit distribution, portal logins, and initial resident communications." },
      { q: "What is the lift on the on-site team?", a: "After initial setup, the typical apartment manager spends under 5 minutes per week on parking enforcement — usually one or two portal tow requests, occasionally checking the monthly report." },
      { q: "Do residents get warnings or are they towed immediately?", a: "Warning-first is the default. Residents get a clearly-marked notice on the windshield with a deadline. Repeat offenders, blocked fire lanes, and unauthorized vehicles from outside the community can be towed without warning per the posted rules." },
      { q: "How do you handle short-term guests and overnight visitors?", a: "We use either a property-manager-issued guest permit, a hang tag system, or a QR-based visitor registration depending on what works for your community. Time limits and permit caps prevent abuse." },
      { q: "What about vehicles owned by residents but parked in someone else's assigned spot?", a: "We document the violation and notify the property manager via the portal. Most communities prefer the management team handle resident-on-resident parking conflicts directly with us as the towing backstop if it persists." },
      { q: "Will this cost the apartment complex anything?", a: "No. The program is completely free for property owners and management companies. All costs are recovered through statutory impound fees charged to vehicle owners." },
    ],
    relatedServices: [
      { title: "Apartment Towing Service", slug: "apartment-towing", desc: "The operational service page with the apartment-specific details." },
      { title: "Abandoned Vehicle Removal", slug: "abandoned-vehicle-removal", desc: "The ARS-compliant pipeline for long-sitting vehicles." },
      { title: "Property Manager Towing Hub", slug: "property-manager-towing-hub", desc: "Every property-manager guide and template in one place.", category: "resources" },
    ],
    targetAudience: "apartment property managers and management companies",
    testimonials: [
      { quote: "Resident parking was our top recurring complaint. Three months after we onboarded with Axle, parking dropped completely off the satisfaction survey's top-issue list. The on-site team barely spends any time on it now.", name: "Karen S.", role: "Property Manager", company: "Tempe Gateway Apartments" },
      { quote: "I manage 9 apartment communities across the East Valley. Having one portal, one phone number, and one monthly report per community is a massive workflow simplification for my regional team.", name: "David O.", role: "Regional Manager", company: "Pinnacle Property Group" },
    ],
  },

  "commercial-property-managers": {
    title: "Towing for Commercial Property Managers",
    slug: "commercial-property-managers",
    category: { slug: "audiences", label: "Audiences" },
    metaTitle: "Commercial Property Towing Phoenix — Retail, Office, Industrial | Axle Towing",
    metaDescription:
      "Commercial property towing in Phoenix for retail centers, office parks, strip malls, medical, and industrial. Tenant-friendly enforcement, fire lane / ADA compliance, multi-tenant coordination — at zero cost to property owners.",
    heroHeadline: "Commercial Property Towing & Parking Enforcement",
    heroSubtext:
      "Tenant-friendly, customer-friendly enforcement for retail centers, office parks, strip malls, medical facilities, and industrial sites — designed to protect tenant revenue and your property's professional image.",
    heroImage: "/images/arizona-commercial-parking.jpg",
    introTitle: "Built Around What Commercial Property Owners Actually Need",
    introText: [
      "Commercial properties have a different parking problem than apartments or HOAs. Your customers need to find a spot quickly. Your tenants need their employees to park somewhere that does not consume customer-facing inventory. Fire lanes, ADA spaces, and loading zones have real legal exposure if they go unenforced. And the absolute last thing you want is a customer of a tenant getting towed — that's a phone call you don't want to take.",
      "Axle's commercial program is designed around these constraints. Customer-facing parking is enforced with reasonable time limits and a warning-first approach. Employee parking is delegated to the back-of-lot zones with permit systems. Fire lanes, ADA, and loading zones are non-negotiables enforced 24/7 to protect you from code violations.",
      "We work with retail centers, strip malls, office parks, medical facilities, industrial sites, churches, and event venues across the Phoenix metro. The program is free for property owners — all costs are recovered through statutory impound fees on the people actually violating the rules.",
    ],
    features: [
      { title: "Tenant + Customer Coordination", desc: "Before enforcement starts, we coordinate with every tenant to understand employee parking patterns, customer expectations, and shift schedules.", icon: "store" },
      { title: "Fire Lane / ADA / Loading Zone Enforcement", desc: "Strict, 24/7 enforcement of legally-protected zones to eliminate ADA fine exposure and fire-code violation risk.", icon: "shield" },
      { title: "Employee Permit Systems", desc: "Designated employee parking with sticker, hang-tag, or QR permit systems keep customer-facing spaces open during business hours.", icon: "sticker" },
      { title: "After-Hours & Storage Prevention", desc: "Overnight enforcement prevents lot-as-storage abuse, dumping, and vandalism that drag down property values.", icon: "patrol" },
    ],
    howItWorks: [
      { step: 1, title: "Property + Tenant Discovery", desc: "We meet with the property owner and key tenants to understand parking patterns, customer flow, and the property's specific liability exposures." },
      { step: 2, title: "Multi-Tenant Plan + Sign-Off", desc: "We draft the enforcement plan including employee parking zones, customer time limits, and fire-lane policy, then get sign-off from the owner and primary tenants." },
      { step: 3, title: "Signage, Permits, Communication", desc: "ARS-compliant signage installed at the property, employee permits distributed to tenants, customer-friendly notices posted to set expectations." },
      { step: 4, title: "Tiered Enforcement Rollout", desc: "Warning-first phase for customer-zone violations. Strict enforcement from day one on fire lanes, ADA, and loading zones." },
      { step: 5, title: "Ongoing Monitoring + Quarterly Reviews", desc: "Patrol on the schedule we agreed, monthly reports, and a quarterly review of what's working and what should adjust." },
    ],
    benefits: [
      { title: "Protect Tenant Revenue + Lease Renewals", desc: "If customers can't find parking, they leave. If they leave, your retail tenant's revenue drops, and at lease renewal time you hear about it. Professional enforcement keeps customer-facing parking available and your tenants profitable.", align: "left" },
      { title: "Zero ADA / Fire-Code Exposure", desc: "ADA violations carry federal penalties. Fire lane violations carry municipal fines and serious life-safety risk. Documented, consistent 24/7 enforcement of these zones is the single most effective insurance policy against a costly violation.", align: "right" },
      { title: "Professional Property Image", desc: "Well-managed parking, clean signage, and orderly lots reflect the quality of your property. Prospective tenants notice. Customers of existing tenants notice. The maintenance team notices because nobody is leaving junk cars overnight.", align: "left" },
    ],
    faqs: [
      { q: "We're worried about scaring away customers — is enforcement compatible with retail traffic?", a: "Yes — and this is the most common owner concern. We use a customer-first model: clear signage about time limits, warning notices before tows in customer zones, and strict enforcement only on chronic violators, employees taking customer spots, and protected zones (fire / ADA / loading). Legitimate customers are never inconvenienced." },
      { q: "How does this work across multiple tenants with different needs?", a: "We coordinate with each tenant individually, codify the parking plan in writing, and get sign-off. Each tenant ends up with a defined employee parking zone and a shared understanding of customer-facing rules. Multi-tenant properties are our most common engagement." },
      { q: "What about chronic violators — same vehicle parking after-hours every night?", a: "Documented chronic violations move from warning to tow quickly. With photo + GPS documentation across multiple nights, the legal basis for tow without further warning is rock-solid under Arizona law." },
      { q: "Can we have you handle just fire lane and ADA enforcement?", a: "Yes. Some commercial owners want full enforcement; others want fire/ADA-only with everything else handled informally. We support both models and any combination in between." },
      { q: "How do you handle after-hours overnight parking and vehicle storage on the property?", a: "After-hours patrol prevents your lot from becoming free overnight storage. This is especially important for retail and medical properties that close at night. We also flag dumping and vandalism risk during these patrols." },
      { q: "Will this cost the property anything?", a: "No. Our program is free for commercial property owners. All costs are recovered through statutory impound fees charged to vehicle owners." },
    ],
    relatedServices: [
      { title: "Commercial Property Towing Service", slug: "commercial-property-towing", desc: "The operational service page with the commercial details." },
      { title: "Parking Enforcement", slug: "parking-enforcement", desc: "The patrol + permit system behind the commercial program." },
      { title: "Property Manager Towing Hub", slug: "property-manager-towing-hub", desc: "Every commercial property manager resource in one place.", category: "resources" },
    ],
    targetAudience: "commercial property owners, retail center managers, and office park directors",
    testimonials: [
      { quote: "We were losing real revenue from customers leaving without parking. The customer-first approach Axle laid out kept legitimate shoppers happy while solving the employee-overspill problem. Tenants noticed.", name: "Steven L.", role: "Shopping Center Owner", company: "Baseline Marketplace" },
      { quote: "Fire lane enforcement was our liability blind spot. Documented patrol with photos and timestamps is exactly what our insurance carrier wanted to see. Premium discussions changed.", name: "Rachel N.", role: "Office Park Director", company: "Scottsdale Business Center" },
    ],
  },
};
