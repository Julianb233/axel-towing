import { COMPANY } from "./constants";

export interface JobPosition {
  slug: string;
  title: string;
  type: "Full-time" | "Part-time" | "Contract";
  department: string;
  location: string;
  payRange: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  preQualQuestions: PreQualQuestion[];
}

export interface PreQualQuestion {
  id: string;
  question: string;
  type: "select" | "radio" | "text";
  options?: { label: string; value: string; qualified: boolean }[];
  required: boolean;
}

export const JOB_POSITIONS: JobPosition[] = [
  {
    slug: "tow-truck-driver",
    title: "Tow Truck Driver / Operator",
    type: "Full-time",
    department: "Operations",
    location: "Phoenix Metro Area, AZ",
    payRange: "Competitive pay + overtime",
    description:
      `Join ${COMPANY.name} as a Tow Truck Driver and become the backbone of our operation. You will operate flatbed and wheel-lift tow trucks for private property impounds and vehicle relocations across the Phoenix metro area. Every call is an opportunity to represent our company with professionalism and care.`,
    responsibilities: [
      "Safely operate flatbed and wheel-lift tow trucks for private property impounds",
      "Respond promptly to dispatch calls and follow optimized routing",
      "Perform thorough vehicle condition documentation with photos before and after towing",
      "Communicate professionally with property managers, vehicle owners, and law enforcement",
      "Conduct daily pre-trip and post-trip vehicle inspections",
      "Maintain accurate trip logs and paperwork for each impound",
      "Follow all Arizona towing laws and company safety protocols",
      "Assist with impound lot organization and vehicle inventory",
    ],
    requirements: [
      "Valid Arizona driver's license with clean driving record",
      "Minimum 21 years of age",
      "Ability to pass a background check and drug screening",
      "Ability to lift 50+ lbs and work outdoors in Arizona heat",
      "Professional demeanor and strong communication skills",
      "Reliable transportation to and from work",
      "Flexible availability including nights, weekends, and holidays",
    ],
    niceToHave: [
      "CDL Class B or higher",
      "Prior towing or roadside assistance experience",
      "Knowledge of Phoenix metro area streets and neighborhoods",
      "Bilingual (English/Spanish)",
      "WRECKMASTER or equivalent towing certification",
    ],
    preQualQuestions: [
      {
        id: "age",
        question: "Are you at least 21 years old?",
        type: "radio",
        options: [
          { label: "Yes", value: "yes", qualified: true },
          { label: "No", value: "no", qualified: false },
        ],
        required: true,
      },
      {
        id: "license",
        question: "Do you have a valid Arizona driver's license?",
        type: "radio",
        options: [
          { label: "Yes", value: "yes", qualified: true },
          { label: "No, but I can obtain one", value: "can-obtain", qualified: true },
          { label: "No", value: "no", qualified: false },
        ],
        required: true,
      },
      {
        id: "driving-record",
        question: "How would you describe your driving record over the last 3 years?",
        type: "select",
        options: [
          { label: "Clean -- no violations or accidents", value: "clean", qualified: true },
          { label: "Minor violations only (1-2 tickets)", value: "minor", qualified: true },
          { label: "Major violations (DUI, reckless driving, etc.)", value: "major", qualified: false },
          { label: "Suspended or revoked license", value: "suspended", qualified: false },
        ],
        required: true,
      },
      {
        id: "physical",
        question: "Can you lift 50+ lbs and work outdoors in extreme heat?",
        type: "radio",
        options: [
          { label: "Yes", value: "yes", qualified: true },
          { label: "No", value: "no", qualified: false },
        ],
        required: true,
      },
      {
        id: "background",
        question: "Are you willing to undergo a background check and drug screening?",
        type: "radio",
        options: [
          { label: "Yes", value: "yes", qualified: true },
          { label: "No", value: "no", qualified: false },
        ],
        required: true,
      },
      {
        id: "experience",
        question: "Do you have any towing or commercial driving experience?",
        type: "select",
        options: [
          { label: "Yes, 2+ years towing experience", value: "experienced", qualified: true },
          { label: "Yes, some commercial driving experience", value: "some", qualified: true },
          { label: "No experience, but eager to learn", value: "none", qualified: true },
        ],
        required: true,
      },
      {
        id: "availability",
        question: "What is your availability?",
        type: "select",
        options: [
          { label: "Flexible -- nights, weekends, and holidays OK", value: "flexible", qualified: true },
          { label: "Weekdays only", value: "weekdays", qualified: true },
          { label: "Weekends only", value: "weekends", qualified: true },
          { label: "Very limited availability", value: "limited", qualified: false },
        ],
        required: true,
      },
      {
        id: "preferred-shift",
        question: "What shift do you prefer?",
        type: "radio",
        options: [
          { label: "Days", value: "days", qualified: true },
          { label: "Nights", value: "nights", qualified: true },
          { label: "Either", value: "either", qualified: true },
        ],
        required: true,
      },
      {
        id: "referral-source",
        question: "How did you hear about this position?",
        type: "select",
        options: [
          { label: "Axle Towing Website", value: "website", qualified: true },
          { label: "Indeed", value: "indeed", qualified: true },
          { label: "Employee Referral", value: "referral", qualified: true },
          { label: "Social Media", value: "social-media", qualified: true },
          { label: "Google Search", value: "google", qualified: true },
          { label: "Drive-by / Saw Our Trucks", value: "drive-by", qualified: true },
          { label: "Other", value: "other", qualified: true },
        ],
        required: true,
      },
    ],
  },
  {
    slug: "sales-representative",
    title: "Sales Representative -- Property Partnerships",
    type: "Full-time",
    department: "Business Development",
    location: "Phoenix Metro Area, AZ",
    payRange: "Base + uncapped commission",
    description:
      `Drive growth for ${COMPANY.name} by building relationships with property managers, HOAs, apartment complexes, and commercial property owners across the Phoenix metro area. You will be the first point of contact for new business, presenting our zero-cost towing and parking enforcement solutions to decision-makers. This is a hunter role with uncapped commission potential.`,
    responsibilities: [
      "Prospect and develop new business relationships with property managers and owners",
      "Conduct property assessments and present customized parking enforcement proposals",
      "Negotiate and close towing and parking management contracts",
      "Maintain a pipeline of qualified leads using CRM tools",
      "Attend property management association meetings and networking events",
      "Coordinate with operations team for seamless onboarding of new properties",
      "Meet or exceed monthly and quarterly sales targets",
      "Provide ongoing relationship management for key accounts",
    ],
    requirements: [
      "2+ years of B2B sales experience (property management, real estate, or services preferred)",
      "Valid Arizona driver's license and reliable vehicle",
      "Strong presentation and negotiation skills",
      "Self-motivated with ability to work independently",
      "Proficiency with CRM software and Google Workspace",
      "Professional appearance and business acumen",
      "Ability to pass a background check",
    ],
    niceToHave: [
      "Existing relationships with Phoenix-area property managers or HOAs",
      "Experience in towing, parking, or property services industry",
      "Bilingual (English/Spanish)",
      "Knowledge of Arizona towing regulations and property management",
      "Experience with GoHighLevel, HubSpot, or Salesforce CRM",
    ],
    preQualQuestions: [
      {
        id: "sales-experience",
        question: "How many years of B2B sales experience do you have?",
        type: "select",
        options: [
          { label: "5+ years", value: "5plus", qualified: true },
          { label: "2-4 years", value: "2to4", qualified: true },
          { label: "Less than 2 years", value: "under2", qualified: true },
          { label: "No B2B sales experience", value: "none", qualified: false },
        ],
        required: true,
      },
      {
        id: "industry",
        question: "Do you have experience in property management, real estate, or related services?",
        type: "radio",
        options: [
          { label: "Yes, directly in property management", value: "direct", qualified: true },
          { label: "Yes, in a related field", value: "related", qualified: true },
          { label: "No, but I have transferable B2B skills", value: "transferable", qualified: true },
        ],
        required: true,
      },
      {
        id: "license-sales",
        question: "Do you have a valid driver's license and reliable vehicle?",
        type: "radio",
        options: [
          { label: "Yes, both", value: "yes", qualified: true },
          { label: "License only, no vehicle", value: "license-only", qualified: false },
          { label: "No", value: "no", qualified: false },
        ],
        required: true,
      },
      {
        id: "location",
        question: "Are you located in or willing to relocate to the Phoenix metro area?",
        type: "radio",
        options: [
          { label: "Yes, I'm already in Phoenix", value: "local", qualified: true },
          { label: "Yes, willing to relocate", value: "relocate", qualified: true },
          { label: "No", value: "no", qualified: false },
        ],
        required: true,
      },
      {
        id: "compensation",
        question: "Are you comfortable with a base salary + commission compensation structure?",
        type: "radio",
        options: [
          { label: "Yes, I thrive on commission-based pay", value: "yes", qualified: true },
          { label: "I prefer it but want a strong base", value: "prefer-base", qualified: true },
          { label: "No, I need salary only", value: "no", qualified: false },
        ],
        required: true,
      },
      {
        id: "crm",
        question: "What CRM tools have you used?",
        type: "text",
        required: false,
      },
      {
        id: "start-date",
        question: "How soon can you start?",
        type: "select",
        options: [
          { label: "Immediately", value: "immediately", qualified: true },
          { label: "Within 2 weeks", value: "2weeks", qualified: true },
          { label: "Within 1 month", value: "1month", qualified: true },
          { label: "More than 1 month", value: "later", qualified: true },
        ],
        required: true,
      },
      {
        id: "work-arrangement",
        question: "What is your preferred work arrangement?",
        type: "radio",
        options: [
          { label: "Full-time", value: "full-time", qualified: true },
          { label: "Part-time", value: "part-time", qualified: true },
          { label: "Contract", value: "contract", qualified: true },
        ],
        required: true,
      },
      {
        id: "referral-source",
        question: "How did you hear about this position?",
        type: "select",
        options: [
          { label: "Axle Towing Website", value: "website", qualified: true },
          { label: "Indeed", value: "indeed", qualified: true },
          { label: "Employee Referral", value: "referral", qualified: true },
          { label: "Social Media", value: "social-media", qualified: true },
          { label: "Google Search", value: "google", qualified: true },
          { label: "Drive-by / Saw Our Trucks", value: "drive-by", qualified: true },
          { label: "Other", value: "other", qualified: true },
        ],
        required: true,
      },
    ],
  },
];

export function getJobBySlug(slug: string): JobPosition | undefined {
  return JOB_POSITIONS.find((j) => j.slug === slug);
}

export function jobPostingSchema(job: JobPosition) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: "2026-03-17",
    validThrough: "2026-06-17",
    employmentType: job.type === "Full-time" ? "FULL_TIME" : "PART_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: COMPANY.name,
      sameAs: `https://${COMPANY.domain}`,
      logo: COMPANY.logo,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Phoenix",
        addressRegion: "AZ",
        addressCountry: "US",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: {
        "@type": "QuantitativeValue",
        value: "Competitive",
        unitText: job.type === "Full-time" ? "YEAR" : "HOUR",
      },
    },
  };
}
