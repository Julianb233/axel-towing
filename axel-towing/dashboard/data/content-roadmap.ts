export type ContentStatus = "published" | "planned" | "writing" | "ranking";

export interface ContentItem {
  id: number;
  title: string;
  targetKeyword: string;
  estimatedVolume: string;
  difficulty: string;
  status: ContentStatus;
  priority: number;
  type: string;
}

export const contentRoadmap: ContentItem[] = [
  { id: 1, title: "Private Property Towing in Phoenix: Free Enforcement for Property Owners", targetKeyword: "private property towing phoenix", estimatedVolume: "150-250", difficulty: "Low", status: "planned", priority: 1, type: "Pillar page update" },
  { id: 2, title: "Best Private Property Towing Companies in Phoenix (2026 Comparison)", targetKeyword: "private property towing companies phoenix", estimatedVolume: "100-200", difficulty: "Low", status: "planned", priority: 1, type: "Comparison" },
  { id: 3, title: "HOA Towing in Scottsdale: Complete Guide for Board Members", targetKeyword: "hoa towing scottsdale", estimatedVolume: "30-60", difficulty: "Very Low", status: "planned", priority: 1, type: "City x Service" },
  { id: 4, title: "Apartment Towing Services in Tempe: ASU Area Specialists", targetKeyword: "apartment towing tempe", estimatedVolume: "20-40", difficulty: "Very Low", status: "planned", priority: 1, type: "City x Service" },
  { id: 5, title: "Parking Enforcement in Gilbert, AZ: HOA & Commercial Solutions", targetKeyword: "parking enforcement gilbert az", estimatedVolume: "15-30", difficulty: "Very Low", status: "planned", priority: 1, type: "City x Service" },
  { id: 6, title: "How Much Does It Cost to Get Your Car Out of Impound in Phoenix? (2026)", targetKeyword: "impound fees phoenix", estimatedVolume: "200-400", difficulty: "Low", status: "planned", priority: 2, type: "Cost guide" },
  { id: 7, title: "Arizona Private Property Towing Laws: Complete 2026 Guide", targetKeyword: "arizona private property towing laws", estimatedVolume: "50+", difficulty: "KD 10", status: "planned", priority: 2, type: "Legal pillar update" },
  { id: 8, title: "Car Towed in Phoenix? Here's Exactly What to Do (Step-by-Step)", targetKeyword: "car towed phoenix what to do", estimatedVolume: "100-200", difficulty: "Low", status: "planned", priority: 2, type: "Recovery guide" },
  { id: 9, title: "Car Towed in Scottsdale? Your Rights and How to Get It Back", targetKeyword: "car towed scottsdale", estimatedVolume: "50-100", difficulty: "Very Low", status: "planned", priority: 2, type: "City recovery" },
  { id: 10, title: "Car Towed Near ASU Tempe? Student Guide to Getting Your Vehicle Back", targetKeyword: "car towed asu tempe", estimatedVolume: "50-100", difficulty: "Very Low", status: "planned", priority: 2, type: "Student guide" },
  { id: 11, title: "Arizona Towing Cost Guide: What Every Driver Should Know (2026)", targetKeyword: "towing cost arizona", estimatedVolume: "100-300", difficulty: "Low", status: "planned", priority: 2, type: "Cost guide" },
  { id: 12, title: "Arizona HB 2269: New Towing Signage Requirements Property Owners Must Know", targetKeyword: "arizona towing signage law hb 2269", estimatedVolume: "50-100", difficulty: "Very Low", status: "planned", priority: 2, type: "Legal update" },
  { id: 13, title: "Is Private Property Towing Free for Property Owners? How the No-Cost Model Works", targetKeyword: "private property towing free", estimatedVolume: "50-100", difficulty: "Very Low", status: "planned", priority: 3, type: "FAQ/educational" },
  { id: 14, title: "How to Set Up a Parking Enforcement Program in 7 Days", targetKeyword: "how to set up parking enforcement", estimatedVolume: "30-60", difficulty: "Very Low", status: "planned", priority: 3, type: "Setup guide" },
  { id: 15, title: "Towing Contract Checklist: 15 Questions to Ask Before Signing", targetKeyword: "towing contract questions", estimatedVolume: "20-40", difficulty: "Very Low", status: "planned", priority: 3, type: "Checklist" },
  { id: 16, title: "Why Your Apartment Complex is Losing Money Without Parking Enforcement", targetKeyword: "apartment parking enforcement ROI", estimatedVolume: "10-20", difficulty: "Very Low", status: "planned", priority: 3, type: "Business case" },
  { id: 17, title: "Commercial Property Parking: How to Stop Revenue Loss from Unauthorized Vehicles", targetKeyword: "commercial parking enforcement", estimatedVolume: "20-40", difficulty: "Very Low", status: "planned", priority: 3, type: "Business case" },
  { id: 18, title: "Private Property Towing in Scottsdale, AZ", targetKeyword: "private property towing scottsdale", estimatedVolume: "30-60", difficulty: "Very Low", status: "planned", priority: 4, type: "City x Service" },
  { id: 19, title: "HOA Towing in Chandler, AZ", targetKeyword: "hoa towing chandler az", estimatedVolume: "20-40", difficulty: "Very Low", status: "planned", priority: 4, type: "City x Service" },
  { id: 20, title: "Apartment Towing in Mesa, AZ", targetKeyword: "apartment towing mesa az", estimatedVolume: "15-30", difficulty: "Very Low", status: "planned", priority: 4, type: "City x Service" },
  { id: 21, title: "Parking Enforcement in Glendale, AZ", targetKeyword: "parking enforcement glendale az", estimatedVolume: "15-30", difficulty: "Very Low", status: "planned", priority: 4, type: "City x Service" },
  { id: 22, title: "Private Property Towing in Apache Junction, AZ", targetKeyword: "towing apache junction", estimatedVolume: "15-30", difficulty: "Very Low", status: "planned", priority: 4, type: "City x Service" },
  { id: 23, title: "Commercial Property Towing in Phoenix, AZ", targetKeyword: "commercial property towing phoenix", estimatedVolume: "20-40", difficulty: "Very Low", status: "planned", priority: 4, type: "City x Service" },
  { id: 24, title: "The Complete Map of Phoenix Impound Lots & Tow Yards (2026)", targetKeyword: "phoenix impound lots map", estimatedVolume: "100-200", difficulty: "Low", status: "planned", priority: 5, type: "Resource/tool" },
  { id: 25, title: "Arizona Towing Statistics: How Many Cars Get Towed in Phoenix Each Year?", targetKeyword: "arizona towing statistics", estimatedVolume: "30-50", difficulty: "Very Low", status: "planned", priority: 5, type: "Data/research" },
  { id: 26, title: "Predatory Towing in Phoenix: How to Spot It and What the Law Says", targetKeyword: "predatory towing phoenix", estimatedVolume: "20-40", difficulty: "Very Low", status: "planned", priority: 5, type: "Consumer protection" },
  { id: 27, title: "Phoenix's 10 Most-Towed Apartment Complexes (And Why)", targetKeyword: "most towed apartments phoenix", estimatedVolume: "20-40", difficulty: "Very Low", status: "planned", priority: 5, type: "Viral/local interest" },
  { id: 28, title: "Free Arizona Parking Enforcement Sign Templates (Compliant with ARS 9-499.05)", targetKeyword: "arizona parking sign template free", estimatedVolume: "30-60", difficulty: "Very Low", status: "planned", priority: 5, type: "Lead magnet" },
  { id: 29, title: "Move-In Season 2026: Parking Enforcement Guide for Arizona Apartment Managers", targetKeyword: "apartment move in parking enforcement", estimatedVolume: "Seasonal", difficulty: "Very Low", status: "planned", priority: 6, type: "Seasonal" },
  { id: 30, title: "Arizona HOA Law Changes 2026: What Board Members Need to Know About Parking", targetKeyword: "arizona hoa law changes 2026", estimatedVolume: "Seasonal", difficulty: "Very Low", status: "planned", priority: 6, type: "News/legal" },
];

export const contentGaps = [
  { gap: "Private Property Towing Cost/Pricing Content", description: "Property managers and vehicle owners searching for cost information. No PPI company has a cost guide.", estimatedVolume: "200-500/month" },
  { gap: "Arizona HB 2269 / Updated Signage Law Content", description: "Property managers checking compliance with new Arizona signage requirements. No competitor covers it.", estimatedVolume: "100-200/month" },
  { gap: "\"My Car Got Towed\" Recovery Guides by City", description: "High-volume, emotionally-charged searches. Each city guide captures local \"near me\" intent.", estimatedVolume: "500-1,000/month" },
  { gap: "Competitor Comparison Pages", description: "Property managers evaluating towing companies. Captures bottom-of-funnel decision searches.", estimatedVolume: "100-300/month" },
  { gap: "\"Near Me\" Optimized Landing Pages", description: "\"Towing service near me\" has 27,100 monthly volume; \"impound lot near me\" has 8,100.", estimatedVolume: "1,000-3,000/month" },
  { gap: "Seasonal / Event Content", description: "Time-sensitive parking and towing issues. Shows site freshness signals to Google.", estimatedVolume: "200-500/month" },
  { gap: "City x Service Landing Pages (Programmatic SEO)", description: "48 landing pages targeting unique long-tail keywords. Zero competitors have these.", estimatedVolume: "500-1,500/month" },
  { gap: "Towing Calculator / Interactive Tool Content", description: "Freeway Towing's calculator ranks for 'towing estimate calculator' (1,300/mo). Tools earn backlinks.", estimatedVolume: "300-800/month" },
];
