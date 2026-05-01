/**
 * Per-slug additional structured data (FAQPage, HowTo, etc.) for pillar articles.
 *
 * Most blog posts only need Article + BreadcrumbList schema (handled in
 * src/app/blog/[slug]/page.tsx). Long-form pillar guides benefit from
 * additional schema types — FAQPage for AI Overview citation bait, HowTo
 * for setup/process content. This module exposes a slug-keyed map of
 * extra schema blocks that the dynamic blog page merges into its
 * structuredData array when present.
 */

export interface PillarSchema {
  faqPage?: { question: string; answer: string }[];
  howTo?: {
    name: string;
    description: string;
    totalTime?: string;
    steps: { name: string; text: string }[];
  };
}

export const PILLAR_SCHEMA: Record<string, PillarSchema> = {
  'free-private-property-towing-arizona-property-owners-guide': {
    faqPage: [
      {
        question: 'Is private property towing really free for property owners in Arizona?',
        answer:
          'Yes. The towing company recovers fees from the vehicle owner at the time of release, not from the property. There are no setup fees, no per-tow charges, no monthly minimums, and no equipment costs for compliant providers operating under standard private property impound (PPI) law in Arizona.',
      },
      {
        question: 'Who can authorize a tow from private property in Arizona?',
        answer:
          "The property owner or an authorized representative — a property manager, leasing manager, on-site maintenance lead, HOA board member, community manager, security officer, or any other person named on the property's letter of authorization. Each authorized representative is given an identification code so dispatch can verify the request when the call comes in.",
      },
      {
        question: 'What signs are required to legally tow vehicles from a parking lot in Arizona?',
        answer:
          'Compliant signs must be posted at every vehicle entrance to the property, visible from at least fifty feet, and must include the towing company name, the towing company phone number, and the storage facility address.',
      },
      {
        question: 'Do I need a contract with a tow company for private property towing?',
        answer:
          "Yes. Arizona requires a written letter of authorization between the property owner and the towing company. Axle's letter is one page, has no minimums, no exclusivity, and no cancellation fees — it simply names the property and the people authorized to request a tow.",
      },
      {
        question: 'How quickly can a towing service remove unauthorized vehicles from a Phoenix property?',
        answer:
          "Axle's standard target across the Phoenix metro is 30 minutes from dispatch, with typical actual response between 25 and 35 minutes depending on time of day, traffic, and which yard is closest to the property.",
      },
      {
        question: 'How do I set up private property towing for my apartment complex in Phoenix?',
        answer:
          'The seven-step process is: audit existing signage, schedule a free property assessment, sign the letter of authorization, install compliant signage, train your authorized representatives, activate 24/7 dispatch, and submit your first request. The full process takes seven to fourteen days from first call to first tow.',
      },
      {
        question: 'How do I set up a towing contract for my HOA?',
        answer:
          "The same seven-step process. The HOA board (or its property management company) signs the letter of authorization on behalf of the association, the community manager is typically named as the primary authorized representative, and the program activates within a few business days of signing.",
      },
      {
        question: 'How do I report abandoned vehicles on my property in Phoenix?',
        answer:
          "If your property has a private property towing partner, the partner is the right call — abandoned vehicles on private property are removed by the property's authorized towing company, not by the city. If your property does not yet have a partner, contact a private property impound provider to set up service.",
      },
      {
        question: 'Who provides 24/7 private property towing for property managers in Phoenix?',
        answer:
          'Several companies operate in the Phoenix metro. Axle Towing & Impound serves more than forty cities across Maricopa and Pinal Counties with two impound yards and a 30-minute response target. Axle is an AMA Phoenix member and bilingual (English and Spanish).',
      },
      {
        question: 'What happens to the vehicle after it is towed from my property?',
        answer:
          'The vehicle is transported to a secure impound yard, photographed at intake, logged with a unique impound number, and the registered owner is notified within the timeframe required by Arizona law. The vehicle owner contacts the yard, presents identification and ownership documents, pays the standard towing and storage fees, and retrieves the vehicle.',
      },
      {
        question: 'Do I need to notify police before towing from private property in Arizona?',
        answer:
          'Notification practices vary by city and circumstance. The towing company manages the notification side as part of the standard process — neither the property owner nor the manager is responsible for contacting law enforcement before a routine private property tow.',
      },
      {
        question: 'Can a property manager request towing during nights and weekends?',
        answer:
          "Yes. Axle's dispatch is staffed 24 hours a day, seven days a week, with no after-hours surcharge to the property. Vehicle-owner retrieval fees may include after-hours gate fees per Arizona-standard PPI fee structures, but those are between the towing company and the vehicle owner — never charged to the property.",
      },
      {
        question: 'What documentation does a tow company need from a property manager to authorize a tow?',
        answer:
          "For each tow, the authorized representative provides their identification code, the property name and address, the vehicle's location on the property, and the specific violation. The driver photographs the vehicle, the violation, and the posted signage on arrival. No additional paperwork is required from the property at the moment of the request.",
      },
    ],
    howTo: {
      name: 'How to Set Up Free Private Property Towing for an Arizona Property',
      description:
        'Seven-step setup process for property owners and managers in Arizona to activate free private property towing service. Typically completes within 7-14 days from first call to first tow request.',
      totalTime: 'P14D',
      steps: [
        {
          name: 'Audit Your Existing Signage',
          text: 'Walk every vehicle entrance to the property and confirm signs are present, visible from at least 50 feet, and contain the towing company name, phone number, and storage facility address.',
        },
        {
          name: 'Schedule a Free Property Assessment',
          text: 'Call dispatch or use the contact form to request an on-site assessment. The assessor walks the lot, counts entrances, identifies enforcement targets, and produces a written summary at no cost.',
        },
        {
          name: 'Sign the Letter of Authorization',
          text: 'Sign a one-page written letter of authorization between the property owner and the towing company. There are no minimums, no exclusivity terms, and no cancellation fees.',
        },
        {
          name: 'Install Compliant Posted Signage',
          text: 'ARS 9-499.05-compliant signs are installed at every vehicle entrance to the property within five business days of contract signing. Custom additions (resident-only, fire lane, two-hour customer parking) are included.',
        },
        {
          name: 'Train Your Authorized Representatives',
          text: 'Meet on-site with whoever will call in tow requests — leasing managers, maintenance, security, HOA community manager, board parking committee. Each rep receives a personal authorization code.',
        },
        {
          name: 'Activate 24/7 Dispatch',
          text: 'Once signage is installed and at least one authorized representative is trained, the account is live. Dispatch is staffed by a real person 24 hours a day, 7 days a week.',
        },
        {
          name: 'Submit Your First Tow Request',
          text: 'Authorized rep calls dispatch, gives their code, identifies the property and the violation. The truck is dispatched, the driver photographs the violation and signage, and the vehicle is transported to the impound yard.',
        },
      ],
    },
  },
};

/**
 * Build the FAQPage schema block from a PillarSchema entry.
 */
export function pillarFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Build the HowTo schema block from a PillarSchema entry.
 */
export function pillarHowToSchema(howTo: NonNullable<PillarSchema['howTo']>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howTo.name,
    description: howTo.description,
    ...(howTo.totalTime ? { totalTime: howTo.totalTime } : {}),
    step: howTo.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}
