/**
 * Shared types for Axle Towing prospecting scripts
 */

export interface HOAProspect {
  name: string;
  type: 'management_company' | 'hoa_community';
  managementCompany: string | null;
  contactEmail: string | null;
  contactPhone: string | null;
  address: string | null;
  city: string | null;
  state: string;
  website: string | null;
  numberOfUnits: number | null;
  source: string;
  scrapedAt: string;
}

export interface PropertyManagerProspect {
  companyName: string;
  contactPerson: string | null;
  email: string | null;
  phone: string | null;
  address: string | null;
  city: string | null;
  state: string;
  website: string | null;
  numberOfProperties: number | null;
  areasServed: string[];
  source: string;
  scrapedAt: string;
}

export interface LocksmithProspect {
  businessName: string;
  phone: string | null;
  address: string | null;
  city: string | null;
  state: string;
  website: string | null;
  googleRating: number | null;
  reviewCount: number | null;
  source: string;
  scrapedAt: string;
}

export interface MechanicProspect {
  businessName: string;
  phone: string | null;
  address: string | null;
  city: string | null;
  state: string;
  website: string | null;
  googleRating: number | null;
  reviewCount: number | null;
  specialties: string[];
  source: string;
  scrapedAt: string;
}

export interface EnrichedProspect {
  original: Record<string, unknown>;
  enrichment: {
    estimatedRevenue: string | null;
    employeeCount: number | null;
    yearsInBusiness: number | null;
    bbbRating: string | null;
  };
  score: number;
  scoreBreakdown: {
    sizeScore: number;
    proximityScore: number;
    partnerPotentialScore: number;
    reputationScore: number;
  };
}

export interface ProspectFile<T> {
  metadata: {
    generated: string;
    source: string;
    region: string;
    purpose: string;
    totalResults: number;
  };
  prospects: T[];
}
