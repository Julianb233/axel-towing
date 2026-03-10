export interface ServicePageData {
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubtext: string;
  introTitle: string;
  introText: string[];
  features: { title: string; desc: string; icon: string }[];
  howItWorks: { step: number; title: string; desc: string }[];
  benefits: { title: string; desc: string; align: "left" | "right" }[];
  faqs: { q: string; a: string }[];
  relatedServices: { title: string; slug: string; desc: string }[];
  targetAudience: string;
}

export const SERVICE_PAGES: Record<string, ServicePageData> = {
  "private-property-impounds": {
    title: "Private Property Impounds",
    slug: "private-property-impounds",
    metaTitle: "Private Property Impound Services — Phoenix, AZ",
    metaDescription:
      "Free private property impound services for apartment complexes, HOAs, and commercial properties in Phoenix. Axle Towing removes unauthorized vehicles at no cost to property owners.",
    heroHeadline: "Private Property Impound Services",
    heroSubtext:
      "Remove unauthorized vehicles from your property quickly and legally — at absolutely no cost to you. Fully compliant with Arizona statutes 28-874 and 9-499.05.",
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
  },

  "parking-enforcement": {
    title: "Parking Enforcement",
    slug: "parking-enforcement",
    metaTitle: "Parking Enforcement Services — Phoenix, AZ",
    metaDescription:
      "Professional parking enforcement for private lots, parking garages, and commercial properties in Phoenix. Patrol services, permit systems, and sticker enforcement at no cost.",
    heroHeadline: "Parking Enforcement Services",
    heroSubtext:
      "Professional patrol and enforcement for parking garages, private lots, and commercial properties — keeping your spaces available for authorized users.",
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
  },

  "vehicle-relocations": {
    title: "Vehicle Relocations",
    slug: "vehicle-relocations",
    metaTitle: "Vehicle Relocation Services — Phoenix, AZ",
    metaDescription:
      "Professional vehicle relocation for asphalt repairs, property maintenance, and construction projects in Phoenix. Move 10 vehicles in 2 hours for $1,000. No impound needed.",
    heroHeadline: "Vehicle Relocation Services",
    heroSubtext:
      "Professional vehicle moves for asphalt repairs, property maintenance, and construction projects — fast turnaround, no impound needed.",
    introTitle: "Move Vehicles Quickly for Property Maintenance",
    introText: [
      "Property maintenance projects like asphalt resurfacing, seal coating, line striping, and construction require vehicles to be temporarily relocated. Axle Towing provides professional vehicle relocation services that keep your projects on schedule and on budget.",
      "Unlike impound services, vehicle relocations simply move cars to another area on your property or a designated holding zone. No one gets towed to an impound lot — vehicles are just repositioned so work can proceed.",
      "Our quick-turnaround pricing makes it easy: we can relocate 10 vehicles in approximately 2 hours for around $1,000. That is a fraction of the cost of project delays caused by vehicles blocking work areas.",
    ],
    features: [
      { title: "Asphalt & Seal Coat Projects", desc: "We clear parking sections for asphalt resurfacing, seal coating, and line striping — moving vehicles phase by phase as contractors work.", icon: "road" },
      { title: "Construction Support", desc: "Clear staging areas, loading zones, and work zones for construction crews. We coordinate with your general contractor for seamless operations.", icon: "construction" },
      { title: "Quick Turnaround", desc: "10 vehicles relocated in approximately 2 hours for around $1,000 — far cheaper than project delays or rescheduling contractors.", icon: "speed" },
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
      { title: "Cost-Effective Solution", desc: "At approximately $1,000 for 10 vehicles in 2 hours, our relocation service costs a fraction of what you would spend on project delays, rescheduled contractors, or extended crew time.", align: "left" },
    ],
    faqs: [
      { q: "How much does vehicle relocation cost?", a: "Our quick-turnaround pricing is approximately $1,000 for 10 vehicles relocated within 2 hours. Exact pricing depends on the number of vehicles and complexity of the project." },
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
  },

  "hoa-towing": {
    title: "HOA Towing",
    slug: "hoa-towing",
    metaTitle: "HOA Towing Services — Phoenix, AZ",
    metaDescription:
      "Free towing programs for HOA communities in Phoenix. Board member education, sign posting, patrol services, and CC&R enforcement — at no cost to the HOA.",
    heroHeadline: "HOA Towing Services",
    heroSubtext:
      "Customized parking enforcement and towing programs designed specifically for homeowner associations and property management companies.",
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
  },

  "apartment-towing": {
    title: "Apartment Towing",
    slug: "apartment-towing",
    metaTitle: "Apartment Towing Services — Phoenix, AZ",
    metaDescription:
      "Professional towing and parking enforcement for apartment complexes in Phoenix. Assigned space enforcement, visitor management, and property manager portal access — all free.",
    heroHeadline: "Apartment Towing Services",
    heroSubtext:
      "Keep your apartment community's parking organized, safe, and available for your residents — with full portal access for property managers.",
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
  },

  "commercial-property-towing": {
    title: "Commercial Property Towing",
    slug: "commercial-property-towing",
    metaTitle: "Commercial Property Towing Services — Phoenix, AZ",
    metaDescription:
      "Protect your commercial property parking from unauthorized vehicles. Professional enforcement for retail centers, office parks, and strip malls in Phoenix — free for property owners.",
    heroHeadline: "Commercial Property Towing",
    heroSubtext:
      "Protect your commercial property's parking and maintain a professional image — ensuring spaces are available for your customers and employees.",
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
  },
};
