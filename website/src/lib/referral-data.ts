// Referral Partner Data Structure for Axle Towing Outreach System
// This data feeds the dashboard outreach tracker

export type PartnerCategory =
  | "locksmith"
  | "property-manager"
  | "hoa"
  | "uber-driver"
  | "mechanic"
  | "mover"
  | "parking-permit";

export type OutreachStatus =
  | "not-contacted"
  | "emailed"
  | "called"
  | "meeting-scheduled"
  | "onboarded";

export interface ReferralProspect {
  id: string;
  businessName: string;
  contactName: string;
  phone: string;
  email: string;
  category: PartnerCategory;
  status: OutreachStatus;
  serviceArea: string;
  notes: string;
  lastContactDate: string | null;
  nextFollowUp: string | null;
}

export const PARTNER_CATEGORIES: Record<
  PartnerCategory,
  { label: string; description: string; icon: string }
> = {
  locksmith: {
    label: "Locksmiths",
    description: "Mobile locksmith businesses encounter parking issues daily during lock-out calls",
    icon: "M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z",
  },
  "property-manager": {
    label: "Property Managers",
    description: "Property management companies with portfolios needing parking enforcement",
    icon: "M2.25 21h19.5M3.75 3v18h16.5V3H3.75zm3 3.75h3v3h-3v-3zm6.75 0h3v3h-3v-3zm-6.75 6h3v3h-3v-3zm6.75 0h3v3h-3v-3z",
  },
  hoa: {
    label: "HOA Boards",
    description: "Homeowner association boards managing community parking enforcement",
    icon: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819",
  },
  "uber-driver": {
    label: "Uber/Lyft Drivers",
    description: "Rideshare drivers who encounter abandoned or illegally parked vehicles",
    icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
  },
  mechanic: {
    label: "Auto Mechanics",
    description: "Auto repair shops that need vehicles towed in or encounter abandoned vehicles",
    icon: "M11.42 15.17l-5.1-5.1m0 0L3.07 12.9a1.5 1.5 0 002.12 2.12l2.72-2.72m0 0l5.1 5.1m0 0l2.72-2.72a1.5 1.5 0 00-2.12-2.12l-2.72 2.72m0 0L8.6 8.45m8.49 8.49L19.82 14a1.5 1.5 0 00-2.12-2.12l-2.72 2.72",
  },
  mover: {
    label: "Moving Companies",
    description: "Moving companies that need parking cleared or encounter blocked access",
    icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25m-2.25 0V6.375c0-.621-.504-1.125-1.125-1.125H6.375c-.621 0-1.125.504-1.125 1.125v3.659M6.75 21v-4.5m0 0h10.5",
  },
  "parking-permit": {
    label: "Parking Permit Companies",
    description: "Parking permit and management companies needing enforcement partners",
    icon: "M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z",
  },
};

// Top 20 target businesses per category for Phoenix metro area
export const TARGET_BUSINESSES: ReferralProspect[] = [
  // === LOCKSMITHS (20) ===
  { id: "lock-01", businessName: "ACME Locksmith", contactName: "Mike Torres", phone: "(480) 555-0101", email: "info@acmelocksmith.com", category: "locksmith", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Largest mobile locksmith in the Valley, 12 vans", lastContactDate: null, nextFollowUp: null },
  { id: "lock-02", businessName: "Arizona Key Masters", contactName: "Dave Chen", phone: "(602) 555-0102", email: "dave@azkeymaster.com", category: "locksmith", status: "not-contacted", serviceArea: "Phoenix, Scottsdale", notes: "High-volume residential and commercial", lastContactDate: null, nextFollowUp: null },
  { id: "lock-03", businessName: "Valley Lock & Safe", contactName: "Robert Vance", phone: "(480) 555-0103", email: "service@valleylocksafe.com", category: "locksmith", status: "not-contacted", serviceArea: "Tempe, Mesa, Chandler", notes: "Established 2005, strong Google presence", lastContactDate: null, nextFollowUp: null },
  { id: "lock-04", businessName: "Pop-A-Lock Phoenix", contactName: "Sarah Mitchell", phone: "(602) 555-0104", email: "phoenix@popalock.com", category: "locksmith", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "National franchise, local owner-operator", lastContactDate: null, nextFollowUp: null },
  { id: "lock-05", businessName: "Desert Locksmith Services", contactName: "Carlos Mendez", phone: "(623) 555-0105", email: "carlos@desertlocksmith.com", category: "locksmith", status: "not-contacted", serviceArea: "Glendale, Peoria, Surprise", notes: "West Valley specialist", lastContactDate: null, nextFollowUp: null },
  { id: "lock-06", businessName: "24/7 Lock Rescue", contactName: "Jason Park", phone: "(480) 555-0106", email: "dispatch@247lockrescue.com", category: "locksmith", status: "not-contacted", serviceArea: "Scottsdale, Paradise Valley", notes: "Premium market, high-end properties", lastContactDate: null, nextFollowUp: null },
  { id: "lock-07", businessName: "Southwest Lock & Key", contactName: "Mark Hughes", phone: "(602) 555-0107", email: "mark@swlockandkey.com", category: "locksmith", status: "not-contacted", serviceArea: "Phoenix Central", notes: "Commercial focus, office buildings", lastContactDate: null, nextFollowUp: null },
  { id: "lock-08", businessName: "Scottsdale Locksmith Pro", contactName: "Lisa Tran", phone: "(480) 555-0108", email: "lisa@scottsdalelockpro.com", category: "locksmith", status: "not-contacted", serviceArea: "Scottsdale, Fountain Hills", notes: "Strong HOA relationships already", lastContactDate: null, nextFollowUp: null },
  { id: "lock-09", businessName: "KeyMe Emergency Locksmith", contactName: "Tom Bradley", phone: "(602) 555-0109", email: "tom@keymeaz.com", category: "locksmith", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "High volume, 24/7 operations", lastContactDate: null, nextFollowUp: null },
  { id: "lock-10", businessName: "Chandler Lock Solutions", contactName: "Raj Patel", phone: "(480) 555-0110", email: "raj@chandlerlock.com", category: "locksmith", status: "not-contacted", serviceArea: "Chandler, Gilbert, Queen Creek", notes: "Southeast Valley coverage", lastContactDate: null, nextFollowUp: null },
  { id: "lock-11", businessName: "Metro Phoenix Locksmith", contactName: "Anthony Reyes", phone: "(602) 555-0111", email: "anthony@metrophxlock.com", category: "locksmith", status: "not-contacted", serviceArea: "Downtown Phoenix", notes: "Apartment complex specialist", lastContactDate: null, nextFollowUp: null },
  { id: "lock-12", businessName: "AZ Lock Doctor", contactName: "Kevin O'Brien", phone: "(623) 555-0112", email: "kevin@azlockdoctor.com", category: "locksmith", status: "not-contacted", serviceArea: "West Phoenix", notes: "Auto and residential", lastContactDate: null, nextFollowUp: null },
  { id: "lock-13", businessName: "Reliable Lock & Key", contactName: "Maria Santos", phone: "(480) 555-0113", email: "maria@reliablelocknkey.com", category: "locksmith", status: "not-contacted", serviceArea: "Mesa, Apache Junction", notes: "East Valley coverage", lastContactDate: null, nextFollowUp: null },
  { id: "lock-14", businessName: "Quick Pick Locksmith", contactName: "James Wilson", phone: "(602) 555-0114", email: "james@quickpickaz.com", category: "locksmith", status: "not-contacted", serviceArea: "North Phoenix, Cave Creek", notes: "Rural and suburban coverage", lastContactDate: null, nextFollowUp: null },
  { id: "lock-15", businessName: "Phoenix Master Locksmith", contactName: "Brian Kato", phone: "(602) 555-0115", email: "brian@phxmasterlock.com", category: "locksmith", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Master locksmith certified", lastContactDate: null, nextFollowUp: null },
  { id: "lock-16", businessName: "Tempe Lock & Security", contactName: "Amanda Cruz", phone: "(480) 555-0116", email: "amanda@tempelock.com", category: "locksmith", status: "not-contacted", serviceArea: "Tempe, ASU Area", notes: "Near ASU, high student apartment density", lastContactDate: null, nextFollowUp: null },
  { id: "lock-17", businessName: "Gold Canyon Locksmith", contactName: "Steve Diaz", phone: "(480) 555-0117", email: "steve@goldcanyonlock.com", category: "locksmith", status: "not-contacted", serviceArea: "Gold Canyon, San Tan Valley", notes: "Expanding into East Valley", lastContactDate: null, nextFollowUp: null },
  { id: "lock-18", businessName: "Sun City Lock Service", contactName: "Howard Stein", phone: "(623) 555-0118", email: "howard@suncitylock.com", category: "locksmith", status: "not-contacted", serviceArea: "Sun City, Sun City West", notes: "Senior community specialist", lastContactDate: null, nextFollowUp: null },
  { id: "lock-19", businessName: "AZ Mobile Locksmith", contactName: "Nick Flores", phone: "(602) 555-0119", email: "nick@azmobilelock.com", category: "locksmith", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "6 mobile units, fast response", lastContactDate: null, nextFollowUp: null },
  { id: "lock-20", businessName: "Cactus Locksmith Co", contactName: "Derek Chang", phone: "(480) 555-0120", email: "derek@cactuslocksmith.com", category: "locksmith", status: "not-contacted", serviceArea: "Gilbert, Mesa", notes: "Growing business, receptive to partnerships", lastContactDate: null, nextFollowUp: null },

  // === PROPERTY MANAGERS (20) ===
  { id: "pm-01", businessName: "Greystar Real Estate Partners", contactName: "Jennifer Walsh", phone: "(602) 555-0201", email: "jwalsh@greystar.com", category: "property-manager", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "National PM, 40+ Phoenix properties", lastContactDate: null, nextFollowUp: null },
  { id: "pm-02", businessName: "Mark-Taylor Residential", contactName: "David Kim", phone: "(480) 555-0202", email: "dkim@mark-taylor.com", category: "property-manager", status: "not-contacted", serviceArea: "Scottsdale, Phoenix", notes: "Luxury apartments, 15 communities", lastContactDate: null, nextFollowUp: null },
  { id: "pm-03", businessName: "Avenue5 Residential", contactName: "Lauren Beck", phone: "(602) 555-0203", email: "lbeck@avenue5.com", category: "property-manager", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "25+ managed properties in Valley", lastContactDate: null, nextFollowUp: null },
  { id: "pm-04", businessName: "Weidner Apartment Homes", contactName: "Tom Nguyen", phone: "(480) 555-0204", email: "tnguyen@weidner.com", category: "property-manager", status: "not-contacted", serviceArea: "Mesa, Tempe, Chandler", notes: "12 apartment communities", lastContactDate: null, nextFollowUp: null },
  { id: "pm-05", businessName: "Cushman & Wakefield", contactName: "Rachel Adams", phone: "(602) 555-0205", email: "rachel.adams@cushwake.com", category: "property-manager", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Commercial and mixed-use portfolio", lastContactDate: null, nextFollowUp: null },
  { id: "pm-06", businessName: "Lincoln Property Company", contactName: "Greg Martinez", phone: "(602) 555-0206", email: "gmartinez@lpc.com", category: "property-manager", status: "not-contacted", serviceArea: "Phoenix, Scottsdale", notes: "Large commercial portfolio", lastContactDate: null, nextFollowUp: null },
  { id: "pm-07", businessName: "Apartment Management Consultants", contactName: "Heather Price", phone: "(480) 555-0207", email: "hprice@amcllc.net", category: "property-manager", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "20+ communities managed", lastContactDate: null, nextFollowUp: null },
  { id: "pm-08", businessName: "RPM West Valley", contactName: "Scott Baker", phone: "(623) 555-0208", email: "scott@rpmwestvalley.com", category: "property-manager", status: "not-contacted", serviceArea: "Glendale, Peoria, Avondale", notes: "Residential rentals, single-family and multi", lastContactDate: null, nextFollowUp: null },
  { id: "pm-09", businessName: "Mynd Property Management", contactName: "Ashley Rogers", phone: "(480) 555-0209", email: "ashley@mynd.co", category: "property-manager", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Tech-forward PM company", lastContactDate: null, nextFollowUp: null },
  { id: "pm-10", businessName: "Caliber Property Management", contactName: "Miguel Herrera", phone: "(602) 555-0210", email: "miguel@caliberpm.com", category: "property-manager", status: "not-contacted", serviceArea: "Central Phoenix", notes: "Boutique PM, high-touch service", lastContactDate: null, nextFollowUp: null },
  { id: "pm-11", businessName: "FirstKey Homes", contactName: "Christina Lee", phone: "(480) 555-0211", email: "clee@firstkeyhomes.com", category: "property-manager", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Single-family rental portfolio", lastContactDate: null, nextFollowUp: null },
  { id: "pm-12", businessName: "Invitation Homes", contactName: "Matt Cooper", phone: "(602) 555-0212", email: "mcooper@invh.com", category: "property-manager", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Large SFR portfolio, 1000+ homes", lastContactDate: null, nextFollowUp: null },
  { id: "pm-13", businessName: "Real Property Management East Valley", contactName: "Diana Foster", phone: "(480) 555-0213", email: "diana@rpmeastvalley.com", category: "property-manager", status: "not-contacted", serviceArea: "Gilbert, Chandler, Mesa", notes: "East Valley specialist", lastContactDate: null, nextFollowUp: null },
  { id: "pm-14", businessName: "AZ Residential Management", contactName: "Paul Thompson", phone: "(602) 555-0214", email: "paul@azresmanagement.com", category: "property-manager", status: "not-contacted", serviceArea: "Phoenix, Tempe", notes: "Multi-family focus", lastContactDate: null, nextFollowUp: null },
  { id: "pm-15", businessName: "Renters Warehouse Phoenix", contactName: "Brittany Hayes", phone: "(602) 555-0215", email: "brittany@renterswarehouse.com", category: "property-manager", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "SFR management and investor services", lastContactDate: null, nextFollowUp: null },
  { id: "pm-16", businessName: "Vintage Realty Property Management", contactName: "Oscar Ruiz", phone: "(480) 555-0216", email: "oscar@vintagerealty.com", category: "property-manager", status: "not-contacted", serviceArea: "Scottsdale, Paradise Valley", notes: "High-end residential", lastContactDate: null, nextFollowUp: null },
  { id: "pm-17", businessName: "Darwin Property Management", contactName: "Sandra Chen", phone: "(602) 555-0217", email: "sandra@darwinpm.com", category: "property-manager", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Growing portfolio, open to partnerships", lastContactDate: null, nextFollowUp: null },
  { id: "pm-18", businessName: "Cresa Phoenix", contactName: "Nathan Black", phone: "(602) 555-0218", email: "nblack@cresa.com", category: "property-manager", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Commercial tenant rep and management", lastContactDate: null, nextFollowUp: null },
  { id: "pm-19", businessName: "Landis Property Management", contactName: "Kelly Jensen", phone: "(480) 555-0219", email: "kelly@landispm.com", category: "property-manager", status: "not-contacted", serviceArea: "East Valley", notes: "Mid-size portfolio, 30 properties", lastContactDate: null, nextFollowUp: null },
  { id: "pm-20", businessName: "HomeRiver Group Phoenix", contactName: "Brian Simmons", phone: "(602) 555-0220", email: "bsimmons@homeriver.com", category: "property-manager", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "National PM with local office", lastContactDate: null, nextFollowUp: null },

  // === HOA BOARDS (20) ===
  { id: "hoa-01", businessName: "Anthem Community Council", contactName: "Patricia Morgan", phone: "(623) 555-0301", email: "board@anthemcc.com", category: "hoa", status: "not-contacted", serviceArea: "Anthem", notes: "Master-planned, 6000+ homes", lastContactDate: null, nextFollowUp: null },
  { id: "hoa-02", businessName: "DC Ranch Community Council", contactName: "William Hart", phone: "(480) 555-0302", email: "admin@dcranch.com", category: "hoa", status: "not-contacted", serviceArea: "Scottsdale", notes: "Luxury community, strict parking", lastContactDate: null, nextFollowUp: null },
  { id: "hoa-03", businessName: "Estrella Mountain Ranch HOA", contactName: "Maria Gonzalez", phone: "(623) 555-0303", email: "board@estrellamtnranch.com", category: "hoa", status: "not-contacted", serviceArea: "Goodyear", notes: "10,000+ homes, multiple villages", lastContactDate: null, nextFollowUp: null },
  { id: "hoa-04", businessName: "Verrado Community Association", contactName: "Jeff Collins", phone: "(623) 555-0304", email: "hoa@verrado.com", category: "hoa", status: "not-contacted", serviceArea: "Buckeye", notes: "Growing community, new construction", lastContactDate: null, nextFollowUp: null },
  { id: "hoa-05", businessName: "Power Ranch HOA", contactName: "Susan Blake", phone: "(480) 555-0305", email: "board@powerranchhoa.com", category: "hoa", status: "not-contacted", serviceArea: "Gilbert", notes: "3,800 homes, active board", lastContactDate: null, nextFollowUp: null },
  { id: "hoa-06", businessName: "Vistancia Community Association", contactName: "Robert Ellis", phone: "(623) 555-0306", email: "hoa@vistancia.com", category: "hoa", status: "not-contacted", serviceArea: "Peoria", notes: "Master-planned, 7000+ homes", lastContactDate: null, nextFollowUp: null },
  { id: "hoa-07", businessName: "Fulton Ranch HOA", contactName: "Karen Wright", phone: "(480) 555-0307", email: "board@fultonranchhoa.com", category: "hoa", status: "not-contacted", serviceArea: "Chandler", notes: "Upscale community, guest parking issues", lastContactDate: null, nextFollowUp: null },
  { id: "hoa-08", businessName: "Seville HOA", contactName: "Daniel Green", phone: "(480) 555-0308", email: "president@sevillehoa.org", category: "hoa", status: "not-contacted", serviceArea: "Gilbert", notes: "2,000 homes, parking complaints at meetings", lastContactDate: null, nextFollowUp: null },
  { id: "hoa-09", businessName: "Tramonto HOA", contactName: "Lisa Carter", phone: "(623) 555-0309", email: "board@tramontohoa.com", category: "hoa", status: "not-contacted", serviceArea: "Phoenix (North)", notes: "Mountain community, limited parking", lastContactDate: null, nextFollowUp: null },
  { id: "hoa-10", businessName: "Tatum Ranch HOA", contactName: "Chris Palmer", phone: "(480) 555-0310", email: "manager@tatumranch.com", category: "hoa", status: "not-contacted", serviceArea: "Cave Creek", notes: "4,000+ homes, mature community", lastContactDate: null, nextFollowUp: null },
  { id: "hoa-11", businessName: "Las Sendas HOA", contactName: "Monica Rivera", phone: "(480) 555-0311", email: "board@lassendas.com", category: "hoa", status: "not-contacted", serviceArea: "Mesa", notes: "Golf community, visitor parking needs", lastContactDate: null, nextFollowUp: null },
  { id: "hoa-12", businessName: "Desert Ridge Community Assoc.", contactName: "Andrew Scott", phone: "(480) 555-0312", email: "admin@desertridge.com", category: "hoa", status: "not-contacted", serviceArea: "Phoenix (North)", notes: "Mixed residential and commercial", lastContactDate: null, nextFollowUp: null },
  { id: "hoa-13", businessName: "Surprise Farms HOA", contactName: "Janet Murphy", phone: "(623) 555-0313", email: "board@surprisefarmshoa.com", category: "hoa", status: "not-contacted", serviceArea: "Surprise", notes: "2,500 homes, RV parking issues", lastContactDate: null, nextFollowUp: null },
  { id: "hoa-14", businessName: "Arrowhead Ranch HOA", contactName: "Tyler Ross", phone: "(623) 555-0314", email: "hoa@arrowheadranch.org", category: "hoa", status: "not-contacted", serviceArea: "Glendale", notes: "Near Arrowhead Mall, commercial parking overflow", lastContactDate: null, nextFollowUp: null },
  { id: "hoa-15", businessName: "Mountain Park Ranch HOA", contactName: "Rebecca Lane", phone: "(480) 555-0315", email: "board@mtnparkranch.com", category: "hoa", status: "not-contacted", serviceArea: "Ahwatukee", notes: "3,300 homes, street parking issues", lastContactDate: null, nextFollowUp: null },
  { id: "hoa-16", businessName: "Rancho El Dorado HOA", contactName: "Michael Stewart", phone: "(520) 555-0316", email: "hoa@ranchoeldorado.com", category: "hoa", status: "not-contacted", serviceArea: "Maricopa", notes: "Growing suburb, new enforcement needed", lastContactDate: null, nextFollowUp: null },
  { id: "hoa-17", businessName: "McDowell Mountain Ranch HOA", contactName: "Cynthia Brooks", phone: "(480) 555-0317", email: "board@mcdowellmtnranch.com", category: "hoa", status: "not-contacted", serviceArea: "Scottsdale", notes: "Active community, trail access parking", lastContactDate: null, nextFollowUp: null },
  { id: "hoa-18", businessName: "Sunbird HOA", contactName: "Howard Klein", phone: "(480) 555-0318", email: "admin@sunbirdhoa.com", category: "hoa", status: "not-contacted", serviceArea: "Chandler", notes: "55+ community, guest parking issues", lastContactDate: null, nextFollowUp: null },
  { id: "hoa-19", businessName: "Superstition Foothills HOA", contactName: "Angela Davis", phone: "(480) 555-0319", email: "board@superstitionhoa.com", category: "hoa", status: "not-contacted", serviceArea: "Gold Canyon", notes: "Rural community, commercial vehicle issues", lastContactDate: null, nextFollowUp: null },
  { id: "hoa-20", businessName: "Grayhawk Community Assoc.", contactName: "Richard Cole", phone: "(480) 555-0320", email: "admin@grayhawk.com", category: "hoa", status: "not-contacted", serviceArea: "Scottsdale", notes: "Premium community, strict enforcement desired", lastContactDate: null, nextFollowUp: null },

  // === UBER/LYFT DRIVERS (20) ===
  { id: "uber-01", businessName: "Independent Driver", contactName: "Marcus Johnson", phone: "(602) 555-0401", email: "mjohnson.drives@gmail.com", category: "uber-driver", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Full-time Uber, encounters abandoned vehicles at pickup spots", lastContactDate: null, nextFollowUp: null },
  { id: "uber-02", businessName: "Independent Driver", contactName: "Rosa Gutierrez", phone: "(480) 555-0402", email: "rosa.rides@gmail.com", category: "uber-driver", status: "not-contacted", serviceArea: "Scottsdale, Tempe", notes: "Night shift driver, bar district pickups", lastContactDate: null, nextFollowUp: null },
  { id: "uber-03", businessName: "Independent Driver", contactName: "Kevin Tran", phone: "(602) 555-0403", email: "ktran.lyft@gmail.com", category: "uber-driver", status: "not-contacted", serviceArea: "Phoenix Airport area", notes: "Airport runs, encounters lot violations", lastContactDate: null, nextFollowUp: null },
  { id: "uber-04", businessName: "Independent Driver", contactName: "Denise Washington", phone: "(623) 555-0404", email: "denise.w.drives@gmail.com", category: "uber-driver", status: "not-contacted", serviceArea: "West Phoenix", notes: "Community connector, knows local property managers", lastContactDate: null, nextFollowUp: null },
  { id: "uber-05", businessName: "Independent Driver", contactName: "Ahmad Hassan", phone: "(480) 555-0405", email: "ahmad.phx@gmail.com", category: "uber-driver", status: "not-contacted", serviceArea: "Mesa, Gilbert", notes: "Full-time driver, active in driver community groups", lastContactDate: null, nextFollowUp: null },
  { id: "uber-06", businessName: "Independent Driver", contactName: "Stephanie Mills", phone: "(602) 555-0406", email: "steph.drives@gmail.com", category: "uber-driver", status: "not-contacted", serviceArea: "Downtown Phoenix", notes: "Weekend driver, sees lots of illegal parking", lastContactDate: null, nextFollowUp: null },
  { id: "uber-07", businessName: "Independent Driver", contactName: "Victor Morales", phone: "(623) 555-0407", email: "vmorales.uber@gmail.com", category: "uber-driver", status: "not-contacted", serviceArea: "Glendale, Peoria", notes: "Former tow truck driver, industry connections", lastContactDate: null, nextFollowUp: null },
  { id: "uber-08", businessName: "Independent Driver", contactName: "Michelle Peters", phone: "(480) 555-0408", email: "mpeters.rides@gmail.com", category: "uber-driver", status: "not-contacted", serviceArea: "Chandler, Tempe", notes: "Part-time driver, real estate background", lastContactDate: null, nextFollowUp: null },
  { id: "uber-09", businessName: "Independent Driver", contactName: "Darnell Brooks", phone: "(602) 555-0409", email: "dbrooks.drives@gmail.com", category: "uber-driver", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Active on Uber driver forums, can spread the word", lastContactDate: null, nextFollowUp: null },
  { id: "uber-10", businessName: "Independent Driver", contactName: "Priya Sharma", phone: "(480) 555-0410", email: "priya.phx@gmail.com", category: "uber-driver", status: "not-contacted", serviceArea: "Scottsdale, North Phoenix", notes: "Luxury Uber Black driver, premium properties", lastContactDate: null, nextFollowUp: null },
  { id: "uber-11", businessName: "Independent Driver", contactName: "Jake Hernandez", phone: "(602) 555-0411", email: "jake.h.uber@gmail.com", category: "uber-driver", status: "not-contacted", serviceArea: "South Phoenix", notes: "Full-time, warehouse district areas", lastContactDate: null, nextFollowUp: null },
  { id: "uber-12", businessName: "Independent Driver", contactName: "Tamika Jones", phone: "(623) 555-0412", email: "tamika.drives@gmail.com", category: "uber-driver", status: "not-contacted", serviceArea: "Surprise, Goodyear", notes: "West Valley driver community leader", lastContactDate: null, nextFollowUp: null },
  { id: "uber-13", businessName: "Independent Driver", contactName: "Wei Lin", phone: "(480) 555-0413", email: "wei.lin.phx@gmail.com", category: "uber-driver", status: "not-contacted", serviceArea: "Tempe, ASU area", notes: "Student area driver, apartment complexes", lastContactDate: null, nextFollowUp: null },
  { id: "uber-14", businessName: "Independent Driver", contactName: "Francisco Silva", phone: "(602) 555-0414", email: "fsilva.uber@gmail.com", category: "uber-driver", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "UberXL driver, sees commercial lots", lastContactDate: null, nextFollowUp: null },
  { id: "uber-15", businessName: "Independent Driver", contactName: "Natalie Cooper", phone: "(480) 555-0415", email: "nat.cooper.rides@gmail.com", category: "uber-driver", status: "not-contacted", serviceArea: "Gilbert, Queen Creek", notes: "Suburban driver, new development areas", lastContactDate: null, nextFollowUp: null },
  { id: "uber-16", businessName: "Independent Driver", contactName: "Omar Siddiqui", phone: "(602) 555-0416", email: "omar.s.drives@gmail.com", category: "uber-driver", status: "not-contacted", serviceArea: "Central Phoenix", notes: "Medical district driver, hospital lots", lastContactDate: null, nextFollowUp: null },
  { id: "uber-17", businessName: "Independent Driver", contactName: "Chelsea Reed", phone: "(480) 555-0417", email: "chelsea.r.lyft@gmail.com", category: "uber-driver", status: "not-contacted", serviceArea: "Scottsdale Old Town", notes: "Nightlife area, illegal parking everywhere", lastContactDate: null, nextFollowUp: null },
  { id: "uber-18", businessName: "Independent Driver", contactName: "Patrick O'Malley", phone: "(623) 555-0418", email: "patrick.om.uber@gmail.com", category: "uber-driver", status: "not-contacted", serviceArea: "Glendale, sports district", notes: "Event driver, stadium area parking issues", lastContactDate: null, nextFollowUp: null },
  { id: "uber-19", businessName: "Independent Driver", contactName: "Yolanda Garcia", phone: "(602) 555-0419", email: "yolanda.g.phx@gmail.com", category: "uber-driver", status: "not-contacted", serviceArea: "Laveen, South Mountain", notes: "Residential area specialist", lastContactDate: null, nextFollowUp: null },
  { id: "uber-20", businessName: "Independent Driver", contactName: "Samuel Kim", phone: "(480) 555-0420", email: "samk.drives@gmail.com", category: "uber-driver", status: "not-contacted", serviceArea: "Mesa, East Mesa", notes: "College area driver, apartment referrals", lastContactDate: null, nextFollowUp: null },

  // === MECHANICS (20) ===
  { id: "mech-01", businessName: "Sun Devil Auto", contactName: "Ray Thompson", phone: "(480) 555-0501", email: "ray@sundevilauto.com", category: "mechanic", status: "not-contacted", serviceArea: "Phoenix Metro (12 locations)", notes: "Chain with 12 Valley locations, high volume", lastContactDate: null, nextFollowUp: null },
  { id: "mech-02", businessName: "Honest-1 Auto Care", contactName: "Greg Foster", phone: "(480) 555-0502", email: "greg@honest1scottsdale.com", category: "mechanic", status: "not-contacted", serviceArea: "Scottsdale", notes: "Community-focused shop, good referral partner", lastContactDate: null, nextFollowUp: null },
  { id: "mech-03", businessName: "Virginia Auto Service", contactName: "Matt Cowell", phone: "(602) 555-0503", email: "matt@virginiaauto.com", category: "mechanic", status: "not-contacted", serviceArea: "Central Phoenix", notes: "Established shop, tow-in repairs", lastContactDate: null, nextFollowUp: null },
  { id: "mech-04", businessName: "Good Works Auto Repair", contactName: "Glen Hayward", phone: "(480) 555-0504", email: "glen@goodworksauto.com", category: "mechanic", status: "not-contacted", serviceArea: "Tempe", notes: "ASA-certified, needs tow service for customers", lastContactDate: null, nextFollowUp: null },
  { id: "mech-05", businessName: "Midas Phoenix", contactName: "Tony Romano", phone: "(602) 555-0505", email: "tony@midasphx.com", category: "mechanic", status: "not-contacted", serviceArea: "Phoenix (multiple)", notes: "National chain, local franchise owner", lastContactDate: null, nextFollowUp: null },
  { id: "mech-06", businessName: "Christian Brothers Automotive", contactName: "Dan Wheeler", phone: "(480) 555-0506", email: "dan@cbac-gilbert.com", category: "mechanic", status: "not-contacted", serviceArea: "Gilbert, Mesa", notes: "Multiple Valley locations", lastContactDate: null, nextFollowUp: null },
  { id: "mech-07", businessName: "Scottsdale Muffler & Automotive", contactName: "Pete Vasquez", phone: "(480) 555-0507", email: "pete@scottsdalemuffler.com", category: "mechanic", status: "not-contacted", serviceArea: "Scottsdale", notes: "30+ years, regular tow-in customers", lastContactDate: null, nextFollowUp: null },
  { id: "mech-08", businessName: "Bridwell Automotive Center", contactName: "Sam Bridwell", phone: "(480) 555-0508", email: "sam@bridwellauto.com", category: "mechanic", status: "not-contacted", serviceArea: "Scottsdale", notes: "High-end vehicle specialist", lastContactDate: null, nextFollowUp: null },
  { id: "mech-09", businessName: "Precision Auto Sales & Service", contactName: "Juan Ramirez", phone: "(602) 555-0509", email: "juan@precisionautophx.com", category: "mechanic", status: "not-contacted", serviceArea: "Central Phoenix", notes: "Sales and service, lot management needs", lastContactDate: null, nextFollowUp: null },
  { id: "mech-10", businessName: "Elite Auto Repair", contactName: "Chris York", phone: "(480) 555-0510", email: "chris@eliteautoaz.com", category: "mechanic", status: "not-contacted", serviceArea: "Chandler", notes: "European car specialist, tow referrals needed", lastContactDate: null, nextFollowUp: null },
  { id: "mech-11", businessName: "Desert Oasis Auto Repair", contactName: "Frank Pham", phone: "(623) 555-0511", email: "frank@desertoasisauto.com", category: "mechanic", status: "not-contacted", serviceArea: "Peoria, Glendale", notes: "West Valley auto repair hub", lastContactDate: null, nextFollowUp: null },
  { id: "mech-12", businessName: "Camelback Tire & Auto", contactName: "Larry Stewart", phone: "(602) 555-0512", email: "larry@camelbacktire.com", category: "mechanic", status: "not-contacted", serviceArea: "Phoenix, Camelback Corridor", notes: "Tire and general, high foot traffic", lastContactDate: null, nextFollowUp: null },
  { id: "mech-13", businessName: "S&S Tire & Auto", contactName: "Steve Santos", phone: "(602) 555-0513", email: "steve@sstireaz.com", category: "mechanic", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Multiple locations, fleet services", lastContactDate: null, nextFollowUp: null },
  { id: "mech-14", businessName: "Highline Car Care", contactName: "Dave Wilton", phone: "(480) 555-0514", email: "dave@highlinecarcare.com", category: "mechanic", status: "not-contacted", serviceArea: "Mesa", notes: "Family-owned, strong community ties", lastContactDate: null, nextFollowUp: null },
  { id: "mech-15", businessName: "AZ Transmissions & Auto Repair", contactName: "Roberto Lopez", phone: "(602) 555-0515", email: "roberto@aztransmissions.com", category: "mechanic", status: "not-contacted", serviceArea: "South Phoenix", notes: "Transmission specialist, heavy tow-in volume", lastContactDate: null, nextFollowUp: null },
  { id: "mech-16", businessName: "Greulich's Automotive Repair", contactName: "Mark Greulich", phone: "(480) 555-0516", email: "mark@greulichs.com", category: "mechanic", status: "not-contacted", serviceArea: "Mesa, Scottsdale", notes: "Regional chain, consistent tow referral need", lastContactDate: null, nextFollowUp: null },
  { id: "mech-17", businessName: "Surprise Auto Repair", contactName: "Keith Murray", phone: "(623) 555-0517", email: "keith@surpriseautorepair.com", category: "mechanic", status: "not-contacted", serviceArea: "Surprise", notes: "Growing area, needs reliable towing partner", lastContactDate: null, nextFollowUp: null },
  { id: "mech-18", businessName: "Pep Boys Phoenix", contactName: "Amanda Torres", phone: "(602) 555-0518", email: "atorres@pepboys.com", category: "mechanic", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "National chain, multiple locations", lastContactDate: null, nextFollowUp: null },
  { id: "mech-19", businessName: "AAMCO Transmissions", contactName: "George Palmer", phone: "(480) 555-0519", email: "george@aamcophx.com", category: "mechanic", status: "not-contacted", serviceArea: "Mesa, Tempe", notes: "Franchise, regular tow-in service needed", lastContactDate: null, nextFollowUp: null },
  { id: "mech-20", businessName: "Apex Automotive", contactName: "Ryan Hughes", phone: "(602) 555-0520", email: "ryan@apexautomotivephx.com", category: "mechanic", status: "not-contacted", serviceArea: "North Phoenix", notes: "Independent shop, owner-operator", lastContactDate: null, nextFollowUp: null },

  // === MOVERS (20) ===
  { id: "mov-01", businessName: "Two Men and a Truck Phoenix", contactName: "Derek Stone", phone: "(602) 555-0601", email: "derek@twomenphx.com", category: "mover", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "National franchise, frequent apartment moves", lastContactDate: null, nextFollowUp: null },
  { id: "mov-02", businessName: "Muscular Moving Men", contactName: "Tyler Grant", phone: "(480) 555-0602", email: "tyler@muscularmoving.com", category: "mover", status: "not-contacted", serviceArea: "Scottsdale, Phoenix", notes: "Local favorite, encounters blocked loading zones", lastContactDate: null, nextFollowUp: null },
  { id: "mov-03", businessName: "College Hunks Hauling Junk", contactName: "Brandon Wise", phone: "(602) 555-0603", email: "brandon@collegehunks.com", category: "mover", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Moving and junk removal, parking needs", lastContactDate: null, nextFollowUp: null },
  { id: "mov-04", businessName: "Arizona Moving Pros", contactName: "Marco Diaz", phone: "(480) 555-0604", email: "marco@azmovingpros.com", category: "mover", status: "not-contacted", serviceArea: "East Valley", notes: "Local company, apartment complex specialist", lastContactDate: null, nextFollowUp: null },
  { id: "mov-05", businessName: "Bekins Moving Solutions", contactName: "Carol Franklin", phone: "(602) 555-0605", email: "carol@bekinsphx.com", category: "mover", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Long-distance and local, large fleet", lastContactDate: null, nextFollowUp: null },
  { id: "mov-06", businessName: "Suddath Phoenix", contactName: "Nicole Martin", phone: "(602) 555-0606", email: "nicole@suddath.com", category: "mover", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Corporate relocation specialist", lastContactDate: null, nextFollowUp: null },
  { id: "mov-07", businessName: "Mergenthaler Transfer & Storage", contactName: "Bill Mergenthaler", phone: "(602) 555-0607", email: "bill@mergtransfer.com", category: "mover", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Local institution since 1930", lastContactDate: null, nextFollowUp: null },
  { id: "mov-08", businessName: "Camelback Moving", contactName: "Jose Alvarez", phone: "(602) 555-0608", email: "jose@camelbackmoving.com", category: "mover", status: "not-contacted", serviceArea: "Central Phoenix", notes: "Boutique mover, condo and apartment focus", lastContactDate: null, nextFollowUp: null },
  { id: "mov-09", businessName: "PODS Phoenix", contactName: "Sarah Bennett", phone: "(602) 555-0609", email: "sarah@podsphx.com", category: "mover", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Container placement often blocked", lastContactDate: null, nextFollowUp: null },
  { id: "mov-10", businessName: "All My Sons Moving", contactName: "Patrick Neal", phone: "(480) 555-0610", email: "patrick@allmysonsphx.com", category: "mover", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "National chain, high volume apartment moves", lastContactDate: null, nextFollowUp: null },
  { id: "mov-11", businessName: "3 Best Rated Movers", contactName: "Daniel Garcia", phone: "(602) 555-0611", email: "daniel@3bestmovers.com", category: "mover", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Top-rated local mover", lastContactDate: null, nextFollowUp: null },
  { id: "mov-12", businessName: "U-Pack Phoenix", contactName: "Robin Hayes", phone: "(602) 555-0612", email: "robin@upackphx.com", category: "mover", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Container moving, needs lot access", lastContactDate: null, nextFollowUp: null },
  { id: "mov-13", businessName: "FlatRate Moving Phoenix", contactName: "Andrew Kim", phone: "(480) 555-0613", email: "andrew@flatratephx.com", category: "mover", status: "not-contacted", serviceArea: "Scottsdale, Phoenix", notes: "Fixed-price moves, luxury market", lastContactDate: null, nextFollowUp: null },
  { id: "mov-14", businessName: "Desert Moving Co", contactName: "Luis Fernandez", phone: "(602) 555-0614", email: "luis@desertmovingco.com", category: "mover", status: "not-contacted", serviceArea: "West Valley", notes: "Family business, strong community connections", lastContactDate: null, nextFollowUp: null },
  { id: "mov-15", businessName: "ProStar Moving & Storage", contactName: "Amy Richardson", phone: "(480) 555-0615", email: "amy@prostarmoving.com", category: "mover", status: "not-contacted", serviceArea: "East Valley", notes: "Growing company, regular apartment access needs", lastContactDate: null, nextFollowUp: null },
  { id: "mov-16", businessName: "Phoenix Express Movers", contactName: "Terrence Adams", phone: "(602) 555-0616", email: "terrence@phxexpressmovers.com", category: "mover", status: "not-contacted", serviceArea: "Central Phoenix", notes: "Same-day moves, needs quick tow support", lastContactDate: null, nextFollowUp: null },
  { id: "mov-17", businessName: "Valley Relocation Services", contactName: "Christina Wu", phone: "(480) 555-0617", email: "christina@valleyrelocation.com", category: "mover", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Corporate and residential, large jobs", lastContactDate: null, nextFollowUp: null },
  { id: "mov-18", businessName: "Budget Movers Phoenix", contactName: "Ray Castillo", phone: "(602) 555-0618", email: "ray@budgetmoversphx.com", category: "mover", status: "not-contacted", serviceArea: "Phoenix, Glendale", notes: "Affordable moves, high volume", lastContactDate: null, nextFollowUp: null },
  { id: "mov-19", businessName: "Gentle Giant Moving", contactName: "Peter Walsh", phone: "(480) 555-0619", email: "peter@gentlegiantphx.com", category: "mover", status: "not-contacted", serviceArea: "Scottsdale, Paradise Valley", notes: "Premium moving service", lastContactDate: null, nextFollowUp: null },
  { id: "mov-20", businessName: "Mesa Moving & Storage", contactName: "Harold Young", phone: "(480) 555-0620", email: "harold@mesamoving.com", category: "mover", status: "not-contacted", serviceArea: "Mesa, Gilbert", notes: "Local staple, 20+ years", lastContactDate: null, nextFollowUp: null },

  // === PARKING PERMIT COMPANIES (20) ===
  { id: "park-01", businessName: "ParkMobile Arizona", contactName: "Jason Reed", phone: "(602) 555-0701", email: "jason@parkmobileaz.com", category: "parking-permit", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Digital parking permits, enforcement synergy", lastContactDate: null, nextFollowUp: null },
  { id: "park-02", businessName: "T2 Systems", contactName: "Karen Phillips", phone: "(602) 555-0702", email: "karen@t2systems.com", category: "parking-permit", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Parking management software + enforcement", lastContactDate: null, nextFollowUp: null },
  { id: "park-03", businessName: "LAZ Parking", contactName: "Steve Gordon", phone: "(602) 555-0703", email: "sgordon@lazparking.com", category: "parking-permit", status: "not-contacted", serviceArea: "Phoenix, Scottsdale", notes: "Garage and lot management", lastContactDate: null, nextFollowUp: null },
  { id: "park-04", businessName: "ABM Parking Services", contactName: "Diana Lopez", phone: "(602) 555-0704", email: "dlopez@abm.com", category: "parking-permit", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Commercial and healthcare parking", lastContactDate: null, nextFollowUp: null },
  { id: "park-05", businessName: "SP+ Parking", contactName: "Mike Chen", phone: "(602) 555-0705", email: "mchen@spplus.com", category: "parking-permit", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "National parking operator, local division", lastContactDate: null, nextFollowUp: null },
  { id: "park-06", businessName: "Ace Parking", contactName: "Laura Bennett", phone: "(602) 555-0706", email: "lbennett@aceparking.com", category: "parking-permit", status: "not-contacted", serviceArea: "Scottsdale, Phoenix", notes: "Event and commercial parking", lastContactDate: null, nextFollowUp: null },
  { id: "park-07", businessName: "Republic Parking System", contactName: "Jim Hardy", phone: "(602) 555-0707", email: "jhardy@republicparking.com", category: "parking-permit", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Medical facility parking specialist", lastContactDate: null, nextFollowUp: null },
  { id: "park-08", businessName: "Premium Parking", contactName: "Ashley Moore", phone: "(602) 555-0708", email: "amoore@premiumparking.com", category: "parking-permit", status: "not-contacted", serviceArea: "Downtown Phoenix", notes: "Downtown and event parking", lastContactDate: null, nextFollowUp: null },
  { id: "park-09", businessName: "Lanier Parking Solutions", contactName: "Robert James", phone: "(602) 555-0709", email: "rjames@lanier.com", category: "parking-permit", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Airport and commercial parking", lastContactDate: null, nextFollowUp: null },
  { id: "park-10", businessName: "Valley Parking Permits", contactName: "Carla Sanchez", phone: "(602) 555-0710", email: "carla@valleyparking.com", category: "parking-permit", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Local permit company, HOA contracts", lastContactDate: null, nextFollowUp: null },
  { id: "park-11", businessName: "AZ Parking Solutions", contactName: "Tim Brooks", phone: "(602) 555-0711", email: "tim@azparkingsolutions.com", category: "parking-permit", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Full-service parking management", lastContactDate: null, nextFollowUp: null },
  { id: "park-12", businessName: "Towne Park", contactName: "Michelle Turner", phone: "(602) 555-0712", email: "mturner@townepark.com", category: "parking-permit", status: "not-contacted", serviceArea: "Scottsdale, Phoenix", notes: "Hospitality and healthcare valet + parking", lastContactDate: null, nextFollowUp: null },
  { id: "park-13", businessName: "Citizens Parking", contactName: "Brett Stevens", phone: "(602) 555-0713", email: "bstevens@citizensparking.com", category: "parking-permit", status: "not-contacted", serviceArea: "Downtown Phoenix", notes: "City contracts and private lots", lastContactDate: null, nextFollowUp: null },
  { id: "park-14", businessName: "Impark Phoenix", contactName: "Jenna Clark", phone: "(602) 555-0714", email: "jclark@impark.com", category: "parking-permit", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Canadian company with AZ operations", lastContactDate: null, nextFollowUp: null },
  { id: "park-15", businessName: "ParkWhiz AZ Rep", contactName: "David Wu", phone: "(602) 555-0715", email: "dwu@parkwhiz.com", category: "parking-permit", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Online parking marketplace", lastContactDate: null, nextFollowUp: null },
  { id: "park-16", businessName: "SpotHero Phoenix", contactName: "Sarah O'Brien", phone: "(602) 555-0716", email: "sobrien@spothero.com", category: "parking-permit", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Parking reservation platform", lastContactDate: null, nextFollowUp: null },
  { id: "park-17", businessName: "ClickPark AZ", contactName: "Ryan Martinez", phone: "(480) 555-0717", email: "ryan@clickparkaz.com", category: "parking-permit", status: "not-contacted", serviceArea: "East Valley", notes: "Digital permit startup", lastContactDate: null, nextFollowUp: null },
  { id: "park-18", businessName: "Valet Connect Phoenix", contactName: "Olivia Grant", phone: "(602) 555-0718", email: "olivia@valetconnect.com", category: "parking-permit", status: "not-contacted", serviceArea: "Scottsdale, Phoenix", notes: "Valet and parking at events", lastContactDate: null, nextFollowUp: null },
  { id: "park-19", businessName: "Desert Permit Services", contactName: "Marcus Lee", phone: "(602) 555-0719", email: "marcus@desertpermits.com", category: "parking-permit", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Permit printing and management for apartments", lastContactDate: null, nextFollowUp: null },
  { id: "park-20", businessName: "ProPark Phoenix", contactName: "Hannah Cole", phone: "(602) 555-0720", email: "hcole@proparkphx.com", category: "parking-permit", status: "not-contacted", serviceArea: "Phoenix Metro", notes: "Commercial lot management", lastContactDate: null, nextFollowUp: null },
];

export const STATUS_LABELS: Record<OutreachStatus, { label: string; color: string }> = {
  "not-contacted": { label: "Not Contacted", color: "bg-gray-100 text-gray-700" },
  emailed: { label: "Emailed", color: "bg-blue-100 text-blue-700" },
  called: { label: "Called", color: "bg-yellow-100 text-yellow-700" },
  "meeting-scheduled": { label: "Meeting Scheduled", color: "bg-purple-100 text-purple-700" },
  onboarded: { label: "Onboarded", color: "bg-green-100 text-green-700" },
};

export const STATUS_ORDER: OutreachStatus[] = [
  "not-contacted",
  "emailed",
  "called",
  "meeting-scheduled",
  "onboarded",
];
