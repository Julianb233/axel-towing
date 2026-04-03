/**
 * Company knowledge base for the property manager chatbot.
 * Trained on meeting notes and company info from March 2026.
 */

export const COMPANY_KNOWLEDGE = {
  name: "Axle Towing & Impound",
  phone: "480-288-5526",
  email: "info@axletowing.com",
  dispatchAvailability: "24/7/365",
  officeHours: "Mon-Fri 9am-5pm",
  locations: [
    { name: "Apache Junction", address: "1151 W. Apache Trail, Apache Junction, AZ 85120" },
    { name: "Phoenix", address: "320 E. Pioneer St., Phoenix, AZ 85040" },
  ],
  serviceAreas: [
    "Phoenix", "Scottsdale", "Mesa", "Glendale", "Gilbert",
    "Chandler", "Tempe", "Apache Junction", "Peoria", "Surprise",
    "Avondale", "Goodyear", "Buckeye", "Queen Creek", "Maricopa",
    "San Tan Valley", "Fountain Hills", "Paradise Valley",
    "Cave Creek", "Sun City", "Sun City West", "Tolleson",
    "El Mirage", "Litchfield Park", "Laveen", "Anthem",
  ],
  services: {
    towRequest: {
      name: "Tow Request",
      description: "Remove unauthorized vehicles from your property at zero cost to you.",
      responseTime: "Standard: 2 hours during business hours. Urgent: same-day priority.",
      requirements: [
        "Property must have proper signage posted per A.R.S. 9-499.05",
        "Vehicle must be in violation of posted parking rules",
        "Written authorization from property owner/manager required",
      ],
      process: [
        "Property manager submits request with vehicle details",
        "Dispatch confirms request and assigns driver",
        "Driver arrives, photographs vehicle and violation",
        "Vehicle is towed to Axle Towing impound lot",
        "Owner notification per Arizona statute requirements",
      ],
    },
    stickering: {
      name: "Parking Stickering",
      description: "Mark vehicles with warning notices before enforcement action.",
      responseTime: "Typically completed within 24 hours of request.",
      requirements: [
        "Property must have posted parking rules and signage",
        "Stickering is a warning step before towing",
        "Helps document violation history for legal compliance",
      ],
      process: [
        "Property manager identifies vehicles to sticker",
        "Axle crew arrives and applies warning stickers",
        "Photo documentation of each stickered vehicle",
        "If vehicle remains after warning period, tow can proceed",
      ],
    },
    patrolRequest: {
      name: "Parking Lot Patrol",
      description: "Scheduled patrol of your property to identify and enforce parking violations.",
      responseTime: "Patrols scheduled based on property agreement.",
      requirements: [
        "Active towing agreement with Axle Towing",
        "Proper signage posted on property",
      ],
      process: [
        "Patrol schedule established per agreement",
        "Crew patrols property and identifies violations",
        "Violations documented with photos",
        "Tows executed per property rules and Arizona law",
      ],
    },
    reportRequest: {
      name: "Monthly Report",
      description: "Request a detailed enforcement report for your property.",
      includes: [
        "Total tows and stickering actions",
        "Violation types and frequency",
        "Photo documentation records",
        "Compliance status",
      ],
    },
  },
  faq: [
    {
      q: "Is there a cost to property owners for towing?",
      a: "No. Private property impounds are at zero cost to you. The tow fees are recovered from the vehicle owner upon release.",
    },
    {
      q: "What signage do I need?",
      a: "Arizona law (A.R.S. 9-499.05) requires specific signage posted at each entrance to the property. Axle Towing can advise on proper signage requirements.",
    },
    {
      q: "How quickly can you respond to a tow request?",
      a: "Standard requests are processed within 2 hours during business hours. Urgent requests (fire lane, blocking access) are prioritized for immediate response. Call dispatch directly at 480-288-5526 for emergencies.",
    },
    {
      q: "What information do you need for a tow request?",
      a: "We need: your name and contact info, property name and address, vehicle description (make, model, color), license plate if visible, location on property, and the specific violation.",
    },
    {
      q: "Can I track the status of my request?",
      a: "Yes. Partners with TowBook access can track every tow from request to completion with live status updates.",
    },
    {
      q: "What areas do you serve?",
      a: "We serve the entire Phoenix metro area including Phoenix, Scottsdale, Mesa, Tempe, Chandler, Gilbert, Glendale, Peoria, Surprise, and 20+ additional cities.",
    },
  ],
};

/** Request types the chatbot can handle */
export type RequestType = "tow-request" | "stickering" | "patrol-request" | "report" | "question";

/** Structured data collected by the chatbot */
export interface ChatbotRequest {
  type: RequestType;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  propertyName: string;
  propertyAddress: string;
  urgent: boolean;
  // Tow-specific
  vehicleDescription?: string;
  licensePlate?: string;
  locationOnProperty?: string;
  violation?: string;
  // Stickering-specific
  numberOfVehicles?: number;
  stickeringNotes?: string;
  // Patrol-specific
  patrolSchedule?: string;
  patrolNotes?: string;
  // General
  additionalNotes?: string;
}

/** Chat message types */
export interface ChatMessage {
  id: string;
  role: "assistant" | "user";
  content: string;
  timestamp: number;
  options?: ChatOption[];
}

export interface ChatOption {
  label: string;
  value: string;
}

/** Conversation steps for each flow */
export type ConversationStep =
  | "welcome"
  | "select-type"
  | "collect-name"
  | "collect-phone"
  | "collect-email"
  | "collect-property-name"
  | "collect-property-address"
  | "collect-vehicle-description"
  | "collect-license-plate"
  | "collect-location-on-property"
  | "collect-violation"
  | "collect-urgent"
  | "collect-stickering-count"
  | "collect-stickering-notes"
  | "collect-patrol-schedule"
  | "collect-patrol-notes"
  | "collect-additional-notes"
  | "confirm"
  | "submitted"
  | "faq";
