export interface ServicePageData {
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubtext: string;
  introTitle: string;
  introText: string[];
  features: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  targetAudience: string;
}

export const SERVICE_PAGES: Record<string, ServicePageData> = {
  "private-property-impounds": {
    title: "Private Property Impounds",
    slug: "private-property-impounds",
    metaTitle: "Private Property Impound Services — Phoenix, AZ",
    metaDescription:
      "Free private property impound services for apartment complexes, HOAs, and commercial properties in Phoenix. Axel Towing removes unauthorized vehicles at no cost to property owners.",
    heroHeadline: "Private Property Impound Services",
    heroSubtext:
      "Remove unauthorized vehicles from your property quickly and legally — at absolutely no cost to you.",
    introTitle: "Protect Your Property from Unauthorized Parking",
    introText: [
      "Unauthorized parking is more than an inconvenience — it creates liability issues, frustrates tenants and residents, and can block fire lanes and emergency access. Axel Towing provides comprehensive private property impound services that solve these problems permanently.",
      "Our service is completely free for property owners and managers. We install ARS-compliant signage, patrol your property on a schedule you choose, and remove unauthorized vehicles quickly and professionally. All costs are recovered through legally mandated impound fees — never from property owners.",
      "We handle everything from initial setup to ongoing enforcement, so you can focus on managing your property instead of dealing with parking violations.",
    ],
    features: [
      { title: "Zero Cost to You", desc: "All signage installation, patrol, and towing services are 100% free for property owners." },
      { title: "ARS Compliant", desc: "Full compliance with Arizona Revised Statutes for private property towing, including proper signage dimensions, placement, and documentation." },
      { title: "24/7 Dispatch", desc: "Our dispatch center operates around the clock, ensuring unauthorized vehicles are removed whenever they appear." },
      { title: "Fast Response", desc: "Average response time of 30 minutes or less across the Phoenix metro area." },
      { title: "Property Manager Portal", desc: "Track every tow, view reports, and manage your account through our online portal." },
      { title: "Professional Drivers", desc: "All drivers are trained, insured, and courteous — they represent your property professionally." },
    ],
    faqs: [
      { q: "How much does private property impound service cost?", a: "Nothing. Our services are completely free for property owners and managers. Costs are recovered through legally mandated impound fees charged to vehicle owners." },
      { q: "What signage is required?", a: "Arizona law requires specific signage with minimum dimensions, placement requirements, and required language. We handle all signage installation at no cost and ensure full compliance with ARS 28-3511." },
      { q: "How quickly can you remove a vehicle?", a: "Our average response time is 30 minutes or less. For properties with patrol agreements, we proactively identify and remove unauthorized vehicles." },
      { q: "What documentation do you provide?", a: "Every tow includes timestamped photos, GPS coordinates, and a detailed report accessible through our property manager portal." },
    ],
    targetAudience: "property owners and managers",
  },

  "parking-enforcement": {
    title: "Parking Enforcement",
    slug: "parking-enforcement",
    metaTitle: "Parking Enforcement Services — Phoenix, AZ",
    metaDescription:
      "Professional parking enforcement for private lots, parking garages, and commercial properties in Phoenix. Axel Towing provides patrol and enforcement at no cost to property owners.",
    heroHeadline: "Parking Enforcement Services",
    heroSubtext:
      "Professional patrol and enforcement for parking garages, private lots, and commercial properties.",
    introTitle: "Keep Your Parking Areas Organized and Compliant",
    introText: [
      "Uncontrolled parking can cost your business revenue, frustrate customers, and create safety hazards. Axel Towing provides professional parking enforcement services that keep your lots organized and your spaces available for authorized users.",
      "Our enforcement programs are customized to your property's unique needs. Whether you need regular patrols, time-limited parking enforcement, or permit-based systems, we have the expertise and technology to implement an effective solution.",
      "Best of all, our parking enforcement services are completely free for property owners. We handle signage, patrol, and towing at no cost to you.",
    ],
    features: [
      { title: "Customized Patrol Schedules", desc: "We design patrol routes and schedules based on your property's peak violation times." },
      { title: "Digital Documentation", desc: "Every patrol and violation is documented with photos, timestamps, and GPS data." },
      { title: "Warning Programs", desc: "Option to implement warning-first programs before towing, if preferred." },
      { title: "Permit Verification", desc: "We can verify parking permits, decals, and license plates to distinguish authorized from unauthorized vehicles." },
      { title: "Real-Time Reporting", desc: "Access patrol reports and violation data through our property manager portal." },
      { title: "Visible Deterrent", desc: "Regular patrols and professional signage serve as a powerful deterrent against unauthorized parking." },
    ],
    faqs: [
      { q: "Can you enforce time-limited parking?", a: "Yes. We use tire chalking and digital tracking to enforce time limits in your parking areas, ensuring turnover for customer-facing businesses." },
      { q: "Do you offer warning tickets before towing?", a: "Yes. We can implement a warning-first program where violators receive a warning notice before towing on subsequent violations." },
      { q: "How do you distinguish authorized vehicles?", a: "We work with you to create a system — permits, decals, license plate databases, or designated areas — to clearly identify authorized parkers." },
      { q: "What areas do you patrol?", a: "We serve parking garages, retail lots, office parks, medical facilities, and any private parking area across the Phoenix metro." },
    ],
    targetAudience: "parking facility operators and commercial property owners",
  },

  "vehicle-relocations": {
    title: "Vehicle Relocations",
    slug: "vehicle-relocations",
    metaTitle: "Vehicle Relocation Services — Phoenix, AZ",
    metaDescription:
      "Professional vehicle relocation services for asphalt repairs, property maintenance, and construction projects in Phoenix. Fast, careful, and fully insured.",
    heroHeadline: "Vehicle Relocation Services",
    heroSubtext:
      "Professional vehicle moves for asphalt repairs, property maintenance, construction, and special events.",
    introTitle: "Move Vehicles Safely for Property Maintenance",
    introText: [
      "Property maintenance projects like asphalt resurfacing, painting, landscaping, and construction often require vehicles to be temporarily relocated. Axel Towing provides professional vehicle relocation services that keep your projects on schedule.",
      "Our drivers are trained to carefully move vehicles short distances within your property or to designated holding areas. Every relocation is documented with before-and-after photos and precise location tracking.",
      "We coordinate with property managers to provide advance notice to residents and handle any vehicles that remain after the notification period.",
    ],
    features: [
      { title: "Project Coordination", desc: "We work with your contractors and maintenance teams to plan relocations around project schedules." },
      { title: "Advance Notification", desc: "We help create and distribute notices to residents and tenants before scheduled relocations." },
      { title: "Careful Handling", desc: "Our drivers use flatbed trucks and wheel-lift systems to safely move vehicles without damage." },
      { title: "Full Documentation", desc: "Before-and-after photos of every vehicle, plus GPS tracking of all movements." },
      { title: "Insurance Coverage", desc: "Fully insured for any vehicle in our care during the relocation process." },
      { title: "Flexible Scheduling", desc: "Available 24/7, including early morning and overnight relocations to minimize disruption." },
    ],
    faqs: [
      { q: "When do you typically perform relocations?", a: "We can perform relocations at any time, but most are scheduled for early morning (before 7 AM) to minimize disruption to residents and tenants." },
      { q: "How do you handle vehicles that weren't moved after notice?", a: "We relocate them to a designated area on the property. If no space is available, they may be towed to our secure facility." },
      { q: "Are vehicles insured during relocation?", a: "Yes. Every vehicle is fully covered by our insurance policy from pickup to placement." },
      { q: "How much notice should I give residents?", a: "We recommend at least 48-72 hours of advance notice. We can help you create and distribute notification materials." },
    ],
    targetAudience: "property managers planning maintenance projects",
  },

  "hoa-towing": {
    title: "HOA Towing",
    slug: "hoa-towing",
    metaTitle: "HOA Towing Services — Phoenix, AZ",
    metaDescription:
      "Customized towing programs for HOA communities in Phoenix. Enforce CC&Rs, remove unauthorized vehicles, and keep common areas clear — at no cost to the HOA.",
    heroHeadline: "HOA Towing Services",
    heroSubtext:
      "Customized parking enforcement and towing programs designed specifically for homeowner associations.",
    introTitle: "Parking Enforcement Solutions for HOA Communities",
    introText: [
      "HOA board members know that parking violations are one of the most common — and most contentious — issues in community management. Unauthorized vehicles in guest spots, RVs parked on streets, and CC&R violations create frustration for homeowners and headaches for boards.",
      "Axel Towing works with HOA boards and management companies to design custom towing programs that enforce your community's parking rules fairly and consistently. Our approach emphasizes communication, compliance, and professionalism.",
      "Our HOA towing programs are completely free for the association. We install compliant signage, handle enforcement, and provide detailed reporting — all at no cost to the HOA or its members.",
    ],
    features: [
      { title: "CC&R Compliant", desc: "We design enforcement programs that align with your community's CC&Rs and parking rules." },
      { title: "Board-Approved Procedures", desc: "Every aspect of our program is reviewed and approved by the HOA board before implementation." },
      { title: "Guest Parking Management", desc: "Systems to manage guest parking, including temporary permits and designated areas." },
      { title: "Community Communication", desc: "We help create newsletters, notices, and signage to communicate parking rules to residents." },
      { title: "Monthly Reports", desc: "Detailed monthly reports for board meetings, including violation trends and enforcement activity." },
      { title: "Escalation Process", desc: "Warning-first approach with clear escalation steps before towing, reducing complaints." },
    ],
    faqs: [
      { q: "How does HOA towing work with CC&Rs?", a: "We review your CC&Rs and design an enforcement program that aligns with your community's specific rules. All procedures are approved by the board before implementation." },
      { q: "Do you tow residents or only visitors?", a: "That depends on your CC&Rs and board policy. We can enforce rules for both residents and visitors based on your community's guidelines." },
      { q: "How do you handle complaints from homeowners?", a: "Our warning-first approach and clear communication process significantly reduces complaints. When issues arise, we work with the board and management company to resolve them professionally." },
      { q: "Can you manage RV and trailer parking?", a: "Yes. We enforce rules regarding RV storage, trailer parking, and oversized vehicles based on your CC&Rs." },
    ],
    targetAudience: "HOA board members and community managers",
  },

  "apartment-towing": {
    title: "Apartment Towing",
    slug: "apartment-towing",
    metaTitle: "Apartment Towing Services — Phoenix, AZ",
    metaDescription:
      "Professional towing and parking enforcement for apartment complexes in Phoenix. Keep assigned parking clear and residents happy — at no cost to property owners.",
    heroHeadline: "Apartment Towing Services",
    heroSubtext:
      "Keep your apartment community's parking organized, safe, and available for your residents.",
    introTitle: "Parking Solutions for Apartment Communities",
    introText: [
      "Apartment communities face unique parking challenges: unauthorized vehicles taking assigned spaces, abandoned cars, visitors overstaying, and fire lane violations. These issues impact resident satisfaction and can create serious liability risks.",
      "Axel Towing provides comprehensive parking enforcement programs designed specifically for apartment complexes. We work with property managers and management companies to create effective, resident-friendly enforcement that keeps parking organized.",
      "Our apartment towing programs are completely free for property owners and management companies. We install signage, patrol regularly, and remove unauthorized vehicles at no cost to you.",
    ],
    features: [
      { title: "Assigned Space Enforcement", desc: "We verify permits, decals, and assigned spaces to ensure residents can always park in their designated spots." },
      { title: "Tow-Away Zone Coverage", desc: "Fire lanes, handicap zones, and no-parking areas are enforced 24/7 for safety compliance." },
      { title: "Abandoned Vehicle Removal", desc: "We identify and remove abandoned vehicles following Arizona's abandoned vehicle procedures." },
      { title: "Resident Communication", desc: "Welcome packets, parking guides, and clear signage help residents understand the rules." },
      { title: "On-Call Service", desc: "Residents and managers can request tows via phone or our online portal at any time." },
      { title: "Move-In/Move-Out Support", desc: "Reserved loading zones and coordination during move-in and move-out periods." },
    ],
    faqs: [
      { q: "Will this cost the apartment complex anything?", a: "No. Our services are completely free for property owners and management companies. All costs are covered by legally mandated impound fees." },
      { q: "How do residents request a tow?", a: "Residents can call our 24/7 dispatch line or submit a request through the property manager portal. The property manager can also authorize tows directly." },
      { q: "What about vehicles without a parking permit?", a: "Depending on your property's rules, we can issue warnings, apply boot notices, or tow vehicles without valid permits." },
      { q: "How quickly can you set up service?", a: "Most apartment properties can be fully set up within 5-7 business days, including signage installation and system configuration." },
    ],
    targetAudience: "apartment property managers and management companies",
  },

  "commercial-property-towing": {
    title: "Commercial Property Towing",
    slug: "commercial-property-towing",
    metaTitle: "Commercial Property Towing Services — Phoenix, AZ",
    metaDescription:
      "Protect your commercial property parking from unauthorized vehicles. Axel Towing provides professional enforcement for retail centers, offices, and medical facilities in Phoenix.",
    heroHeadline: "Commercial Property Towing",
    heroSubtext:
      "Protect your commercial property's parking and ensure spaces are available for your customers and employees.",
    introTitle: "Parking Enforcement for Commercial Properties",
    introText: [
      "When unauthorized vehicles take up your commercial property's parking spaces, it directly impacts your tenants' businesses and their customers' experience. Lost parking means lost revenue.",
      "Axel Towing provides professional parking enforcement for retail centers, office parks, medical facilities, restaurants, and any commercial property with parking challenges. We keep your spaces available for the people who matter most — your tenants and their customers.",
      "Our commercial enforcement programs are fully customizable and completely free for property owners. We work with you to design a program that fits your property's unique needs.",
    ],
    features: [
      { title: "Customer-First Approach", desc: "We design enforcement to protect customer parking without creating a hostile environment." },
      { title: "After-Hours Enforcement", desc: "Prevent overnight parking, dumping, and unauthorized use of your lot outside business hours." },
      { title: "Multi-Tenant Coordination", desc: "We work with all tenants in your property to understand parking needs and create fair policies." },
      { title: "Liability Protection", desc: "Remove vehicles from fire lanes, ADA zones, and loading areas to keep your property compliant." },
      { title: "Event Support", desc: "Additional patrol and enforcement during special events, seasonal rushes, or construction." },
      { title: "Detailed Reporting", desc: "Monthly reports showing enforcement activity, violation trends, and recommendations." },
    ],
    faqs: [
      { q: "Will aggressive towing scare away customers?", a: "No. Our customer-first approach uses clear signage, reasonable time limits, and warning programs to ensure legitimate customers are never inconvenienced. We target chronic violators, not customers." },
      { q: "Can you handle multi-tenant properties?", a: "Yes. We coordinate with all tenants to create a unified parking policy that works for everyone." },
      { q: "What about employee parking?", a: "We can implement designated employee parking areas and permit systems to keep customer-facing spaces available." },
      { q: "Do you enforce handicap parking?", a: "Yes. ADA-designated spaces are enforced in compliance with state and federal regulations." },
    ],
    targetAudience: "commercial property owners and retail center managers",
  },
};
