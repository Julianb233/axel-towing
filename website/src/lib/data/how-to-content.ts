/**
 * HowTo structured data for instructional content.
 * Used by howToSchema() in schema.ts for rich results.
 */

export const HOW_TO_SETUP_TOWING = {
  name: "How to Set Up Private Property Towing for Your Property",
  description:
    "Step-by-step guide for property owners and managers in Arizona to establish a free private property towing and parking enforcement program with Axle Towing & Impound.",
  totalTime: "PT48H", // ~48 hours from first contact to active enforcement
  steps: [
    {
      name: "Request a free property assessment",
      text: "Contact Axle Towing & Impound at 480-288-5526 or submit a request through our website. We will schedule a free on-site assessment of your property to evaluate parking needs and signage requirements.",
      url: "https://axletowing.com/contact",
    },
    {
      name: "Review and sign the towing authorization agreement",
      text: "After the assessment, we provide a towing authorization agreement that complies with Arizona Revised Statutes (ARS 28-1104). This agreement authorizes Axle Towing to enforce parking rules on your property at no cost to you.",
    },
    {
      name: "Install compliant signage",
      text: "Axle Towing installs all required towing authorization signage at no cost. Signs meet ARS requirements including company name, phone number, and impound lot address, posted at all vehicle entrances to the property.",
    },
    {
      name: "Begin enforcement and monitoring",
      text: "Once signage is installed, our team begins regular patrols and responds to towing requests 24/7/365. Property owners and managers can call our dispatch line any time an unauthorized vehicle needs to be removed.",
    },
    {
      name: "Access your online management portal",
      text: "Track all towing activity, view reports, and manage your property account through our online portal. We also provide a dedicated account manager for ongoing support.",
      url: "https://axletowing.com/portal",
    },
  ],
};

export const HOW_TO_RETRIEVE_VEHICLE = {
  name: "How to Retrieve Your Towed Vehicle from Axle Towing & Impound",
  description:
    "Instructions for vehicle owners to locate and retrieve a vehicle that has been towed and impounded by Axle Towing & Impound in Phoenix or Apache Junction, Arizona.",
  totalTime: "PT1H", // ~1 hour once at impound yard
  steps: [
    {
      name: "Locate your vehicle",
      text: "Visit axletowing.com/locate-vehicle or call 480-288-5526 to confirm which impound yard your vehicle is at. We have yards in Phoenix (320 E. Pioneer St.) and Apache Junction (1151 W. Apache Trail).",
      url: "https://axletowing.com/locate-vehicle",
    },
    {
      name: "Gather required documents",
      text: "Bring a valid government-issued photo ID, current vehicle registration or title in your name, and payment method (cash, debit, or credit card) for the applicable towing and storage fees.",
    },
    {
      name: "Visit during office hours",
      text: "Vehicle retrieval is available Monday through Friday, 9:00 AM to 5:00 PM, and Saturday by appointment. Arrive during these hours to process your release.",
    },
    {
      name: "Pay fees and complete paperwork",
      text: "At the impound yard, present your documents, pay the applicable towing and daily storage fees, and sign the vehicle release form. An attendant will walk you to your vehicle.",
    },
    {
      name: "Inspect and drive away",
      text: "Before leaving, inspect your vehicle for any pre-existing damage noted on the tow report. Once satisfied, you are free to drive your vehicle off the lot.",
    },
  ],
};

export const HOW_TO_HOA_ENFORCEMENT = {
  name: "How to Start an HOA Parking Enforcement Program",
  description:
    "A guide for HOA board members in Arizona to establish a professional parking enforcement and towing program that protects community parking while staying legally compliant.",
  totalTime: "PT72H",
  steps: [
    {
      name: "Review your HOA CC&Rs and parking rules",
      text: "Confirm that your HOA governing documents (CC&Rs) include parking rules and grant the board authority to enforce them. Consult with your HOA attorney if the rules need updating.",
    },
    {
      name: "Notify residents of the new enforcement program",
      text: "Send written notice to all homeowners at least 30 days before enforcement begins. Include details about parking rules, towing authorization, and how residents can contact the towing company with questions.",
    },
    {
      name: "Partner with a licensed towing company",
      text: "Contact Axle Towing & Impound for a free HOA property assessment. We specialize in HOA parking enforcement and provide all signage, patrols, and towing at zero cost to your community.",
      url: "https://axletowing.com/services/hoa-towing",
    },
    {
      name: "Install towing authorization signage",
      text: "Axle Towing installs ARS-compliant signage at all vehicle entry points to the community. Proper signage is legally required before any vehicles can be towed from private property in Arizona.",
    },
    {
      name: "Activate patrols and resident reporting",
      text: "Set up a patrol schedule and give residents a direct line to report violations. Axle Towing responds within 30 minutes to towing requests across the Phoenix metro area.",
    },
  ],
};
