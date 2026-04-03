/**
 * City SEO Data — Structured data for all 8 service cities
 * Used by the programmatic SEO engine to generate 48 unique city x service pages.
 * Each city entry provides the local context needed to produce 40%+ unique content per page.
 */

export interface CitySEOData {
  name: string;
  slug: string;
  population: string;
  populationNum: number;
  neighborhoods: string[];
  zipCodes: string[];
  nearestYard: string;
  nearestYardAddress: string;
  driveTime: string;
  responseTime: string;
  hoaCount: string;
  apartmentCount: string;
  commercialPropertyCount: string;
  landmarks: string[];
  localRegulations: string;
  majorEmployers: string[];
  propertyManagementCompanies: string[];
  competitorTowingCompanies: string[];
  notableApartmentComplexes: string[];
  notableHOAs: string[];
  notableCommercialProperties: string[];
  seasonalFactors: string;
  uniqueCharacteristics: string[];
  drivingDirections: string;
  mapEmbedDescription: string;
}

export const CITY_SEO_DATA: Record<string, CitySEOData> = {
  phoenix: {
    name: "Phoenix",
    slug: "phoenix",
    population: "1.6 million",
    populationNum: 1608139,
    neighborhoods: [
      "Ahwatukee", "Arcadia", "Desert Ridge", "Downtown Phoenix", "North Phoenix",
      "Laveen", "Maryvale", "South Mountain", "Encanto", "Camelback East",
      "Deer Valley", "Paradise Valley Village", "Midtown", "South Phoenix"
    ],
    zipCodes: [
      "85001", "85003", "85004", "85006", "85007", "85008", "85009", "85012",
      "85013", "85014", "85015", "85016", "85017", "85018", "85019", "85020",
      "85021", "85022", "85023", "85024", "85028", "85029", "85031", "85032",
      "85033", "85034", "85035", "85040", "85041", "85042", "85043", "85044",
      "85045", "85048", "85050", "85051", "85053", "85054"
    ],
    nearestYard: "Phoenix",
    nearestYardAddress: "320 E. Pioneer St., Phoenix, AZ 85040",
    driveTime: "10-25 minutes depending on location within the city",
    responseTime: "Under 30 minutes",
    hoaCount: "3,500+",
    apartmentCount: "5,000+",
    commercialPropertyCount: "15,000+",
    landmarks: [
      "Phoenix Sky Harbor International Airport", "Footprint Center", "Chase Field",
      "Desert Ridge Marketplace", "Biltmore Fashion Park", "Arizona State Capitol",
      "Camelback Mountain", "South Mountain Park", "Phoenix Convention Center"
    ],
    localRegulations: "Phoenix City Code Chapter 36 governs parking enforcement on private property. All signage must comply with ARS 9-499.05, which requires signs to be at least 18x24 inches, posted at every entrance, and include the towing company name, phone number, and impound lot address. Phoenix also requires property owners to maintain a written authorization on file with the towing company.",
    majorEmployers: ["Banner Health", "Fry's Food Stores", "Wells Fargo", "American Express", "Honeywell", "Republic Services"],
    propertyManagementCompanies: ["Greystar", "Mark-Taylor Residential", "Avenue5 Residential", "HSL Properties"],
    competitorTowingCompanies: ["Camelback Towing", "AZ Towing & Recovery", "Southwest Towing", "Discount Towing"],
    notableApartmentComplexes: ["Camden North End", "The Roosevelt", "Broadstone Roosevelt Row", "Optima Sonoran Village", "Tapestry on Central"],
    notableHOAs: ["Ahwatukee Foothills Village", "Desert Ridge HOA", "Encanto Palmcroft Historic District", "North Phoenix HOA Alliance"],
    notableCommercialProperties: ["Desert Ridge Marketplace", "Biltmore Fashion Park", "Metrocenter", "Paradise Valley Mall", "Christown Spectrum Mall"],
    seasonalFactors: "Phoenix sees a 20% population increase during winter snowbird season (October-April), dramatically increasing parking demand at apartments, HOAs, and commercial properties. Summer extreme heat (115°F+) makes abandoned vehicles a fire and safety hazard.",
    uniqueCharacteristics: [
      "Fifth-largest city in the US with the largest geographic footprint",
      "Fastest-growing large city in America for the past decade",
      "250,000+ apartment units across the metro area",
      "One of the highest rates of HOA communities per capita in the nation",
      "Extreme summer heat makes abandoned vehicles a significant fire risk"
    ],
    drivingDirections: "From downtown Phoenix, head south on Central Avenue to Pioneer Street — our Phoenix yard at 320 E. Pioneer St. is just 10 minutes from the city center. From North Phoenix or Desert Ridge, take I-17 south to I-10 east, exit at 24th Street, and head south to Pioneer Street (approximately 25 minutes).",
    mapEmbedDescription: "Search Google Maps for '320 E Pioneer St, Phoenix, AZ 85040' to find our Phoenix impound yard. We are located just south of the I-10 and I-17 interchange, providing fast access to all areas of Phoenix."
  },

  scottsdale: {
    name: "Scottsdale",
    slug: "scottsdale",
    population: "242,000",
    populationNum: 241361,
    neighborhoods: [
      "Old Town Scottsdale", "North Scottsdale", "McCormick Ranch", "Gainey Ranch",
      "DC Ranch", "Grayhawk", "Kierland", "Pinnacle Peak", "Troon",
      "South Scottsdale"
    ],
    zipCodes: [
      "85250", "85251", "85252", "85253", "85254", "85255", "85256",
      "85257", "85258", "85259", "85260", "85261", "85262", "85266", "85267"
    ],
    nearestYard: "Phoenix",
    nearestYardAddress: "320 E. Pioneer St., Phoenix, AZ 85040",
    driveTime: "20-35 minutes depending on location within the city",
    responseTime: "Under 25 minutes",
    hoaCount: "800+",
    apartmentCount: "1,200+",
    commercialPropertyCount: "4,500+",
    landmarks: [
      "Scottsdale Fashion Square", "TPC Scottsdale", "Scottsdale Waterfront",
      "Kierland Commons", "Scottsdale Quarter", "Scottsdale Stadium",
      "McDowell Sonoran Preserve", "Pinnacle Peak", "Taliesin West"
    ],
    localRegulations: "Scottsdale enforces its own parking ordinance (Scottsdale Revised Code Chapter 36-72) in addition to ARS requirements. Property owners must provide 24-hour notice before towing from guest parking areas in residential communities. HOA-initiated tows require board-approved written authorization and must comply with both CC&R language and state statute.",
    majorEmployers: ["GoDaddy", "Vanguard", "Scottsdale Healthcare", "JDA Software", "Axon (Taser)", "General Dynamics"],
    propertyManagementCompanies: ["CCMC (CC&R Management)", "Brown Community Management", "Trestle Management Group", "FirstService Residential"],
    competitorTowingCompanies: ["Scottsdale Towing", "Paradise Valley Towing", "Desert Dogs Towing"],
    notableApartmentComplexes: ["Optima Kierland", "Mark-Taylor Scottsdale Waterfront", "Cavasson", "The Palmeraie", "San Artes"],
    notableHOAs: ["DC Ranch Association", "Grayhawk Community Association", "Gainey Ranch Community Association", "McCormick Ranch HOA", "Troon Village HOA"],
    notableCommercialProperties: ["Scottsdale Fashion Square", "Kierland Commons", "Scottsdale Quarter", "Scottsdale Promenade", "Market Street at DC Ranch"],
    seasonalFactors: "Scottsdale is a premier winter tourism destination. The WM Phoenix Open (TPC Scottsdale) in February, Scottsdale Arabian Horse Show in February, and spring training baseball season draw massive visitor crowds. Old Town Scottsdale's nightlife creates year-round weekend parking demand.",
    uniqueCharacteristics: [
      "Home to some of Arizona's most exclusive luxury communities ($1M+ median home values in North Scottsdale)",
      "Old Town Scottsdale has the highest density of restaurants and bars per capita in Arizona",
      "Over 800 HOA communities with strict CC&R enforcement standards",
      "Major tourism destination with 9+ million visitors annually",
      "Scottsdale Fashion Square is the largest mall in the Southwest"
    ],
    drivingDirections: "From Old Town Scottsdale, take Scottsdale Road south to McDowell, then west to the I-10, south to 24th Street, and south to Pioneer Street — approximately 25 minutes. From North Scottsdale, take the 101 south to the I-10 east, exit at 24th Street, and head south to our Phoenix yard (approximately 35 minutes).",
    mapEmbedDescription: "Search Google Maps for '320 E Pioneer St, Phoenix, AZ 85040' to get driving directions from Scottsdale. Our closest yard is in Phoenix, centrally located to serve all of Scottsdale with fast response times."
  },

  mesa: {
    name: "Mesa",
    slug: "mesa",
    population: "540,000",
    populationNum: 542397,
    neighborhoods: [
      "East Mesa", "West Mesa", "Superstition Springs", "Red Mountain",
      "Dobson Ranch", "Las Sendas", "Downtown Mesa", "Mesa Riverview",
      "Alta Mesa", "Leisure World"
    ],
    zipCodes: [
      "85201", "85202", "85203", "85204", "85205", "85206", "85207",
      "85208", "85209", "85210", "85211", "85212", "85213", "85215",
      "85216"
    ],
    nearestYard: "Apache Junction",
    nearestYardAddress: "1151 W. Apache Trail, Apache Junction, AZ 85120",
    driveTime: "15-30 minutes depending on location within the city",
    responseTime: "Under 30 minutes",
    hoaCount: "1,200+",
    apartmentCount: "2,800+",
    commercialPropertyCount: "6,000+",
    landmarks: [
      "Superstition Springs Center", "Mesa Riverview", "Banner Desert Medical Center",
      "Mesa Arts Center", "Sloan Park (Cubs spring training)", "Hohokam Stadium",
      "Arizona Museum of Natural History", "Salt River Fields at Talking Stick"
    ],
    localRegulations: "Mesa City Code Title 8 Chapter 5 addresses towing from private property. Mesa requires that tow-away signage be posted for a minimum of 24 hours before any vehicle can be towed from a newly signed property. All signs must include the towing company name, phone number, and impound yard address as required by ARS 9-499.05.",
    majorEmployers: ["Banner Health", "Boeing", "MD Helicopters", "Mesa Public Schools", "AT&T", "Dine Brands (Applebee's/IHOP)"],
    propertyManagementCompanies: ["Brown Community Management", "Associa Arizona", "City Property Management", "Planned Development Services"],
    competitorTowingCompanies: ["Mesa Towing", "East Valley Towing", "Quick Tow AZ", "Apache Towing"],
    notableApartmentComplexes: ["The Mark at Mesa Gateway", "Solstice at Mesa Gateway", "The Falls at Mesa Point", "Dobson Ranch Apartments", "Las Sendas Luxury Apartments"],
    notableHOAs: ["Las Sendas HOA", "Dobson Ranch Community Association", "Red Mountain Ranch HOA", "Superstition Springs HOA", "Alta Mesa HOA"],
    notableCommercialProperties: ["Superstition Springs Center", "Mesa Riverview", "Dana Park Village Square", "Fiesta District", "Mesa Gateway Airport Area"],
    seasonalFactors: "Mesa is a major spring training destination for the Chicago Cubs (Sloan Park) and Oakland Athletics (Hohokam Stadium), causing parking demand surges from February through March. The winter snowbird population adds 50,000+ seasonal residents to the East Valley.",
    uniqueCharacteristics: [
      "Third-largest city in Arizona and larger than many US state capitals",
      "One of the fastest-growing cities in the Phoenix metro area with 3,000+ new residential units annually",
      "Major spring training destination with two MLB stadiums",
      "Mesa Gateway Airport is driving massive commercial and residential development in East Mesa",
      "Home to the Arizona Museum of Natural History and Mesa Arts Center cultural corridor"
    ],
    drivingDirections: "From Downtown Mesa, take US-60 east to Apache Junction — our Apache Junction yard at 1151 W. Apache Trail is approximately 20 minutes east. Alternatively, from West Mesa, take the I-10 to the Phoenix yard at 320 E. Pioneer St. (approximately 20 minutes). We dispatch from whichever yard is closest to your property.",
    mapEmbedDescription: "Search Google Maps for '1151 W Apache Trail, Apache Junction, AZ 85120' for directions from Mesa to our nearest impound yard. East Mesa properties are closest to our Apache Junction location."
  },

  tempe: {
    name: "Tempe",
    slug: "tempe",
    population: "180,000",
    populationNum: 184118,
    neighborhoods: [
      "Downtown Tempe", "Mill Avenue District", "Tempe Town Lake",
      "South Tempe", "North Tempe", "Alameda", "University Heights",
      "Optimist Park", "Holdeman", "Broadmor", "Papago Park"
    ],
    zipCodes: [
      "85281", "85282", "85283", "85284", "85285", "85287"
    ],
    nearestYard: "Phoenix",
    nearestYardAddress: "320 E. Pioneer St., Phoenix, AZ 85040",
    driveTime: "10-20 minutes depending on location within the city",
    responseTime: "Under 25 minutes",
    hoaCount: "400+",
    apartmentCount: "1,500+",
    commercialPropertyCount: "3,000+",
    landmarks: [
      "Arizona State University", "Sun Devil Stadium", "Tempe Town Lake",
      "Mill Avenue District", "Desert Financial Arena", "Gammage Auditorium",
      "Tempe Marketplace", "IKEA Tempe", "Arizona Mills"
    ],
    localRegulations: "Tempe City Code Chapter 27 regulates parking enforcement on private property. Tempe has specific provisions for enforcement near ASU campus — properties within the university overlay district must follow additional notification requirements for student housing. The city requires 24-hour signage posting before enforcement can begin on newly contracted properties.",
    majorEmployers: ["Arizona State University", "Insight Enterprises", "State Farm Insurance", "Carvana", "Edward Jones", "Shutterfly"],
    propertyManagementCompanies: ["Greystar", "Asset Living", "Landmark Properties", "American Campus Communities"],
    competitorTowingCompanies: ["Tempe Towing", "University Towing", "Valley Auto Towing", "AAA Towing & Transport"],
    notableApartmentComplexes: ["922 Place", "The District at Tempe", "Rise on Apache", "Union Tempe", "Vela on Farmer"],
    notableHOAs: ["Optimist Park HOA", "South Tempe Homeowners Coalition", "Broadmor Estates HOA", "Papago Park Village HOA"],
    notableCommercialProperties: ["Tempe Marketplace", "Arizona Mills", "IKEA Tempe", "Rio Salado Business District", "Hayden Ferry Lakeside"],
    seasonalFactors: "ASU's academic calendar drives distinct seasonal cycles: August-September move-in weekends create short-term parking chaos, football Saturdays (September-November) bring 50,000+ fans to Sun Devil Stadium, and semester breaks in December and May reduce parking demand. Spring breakers in March can also cause overflow.",
    uniqueCharacteristics: [
      "Home to Arizona State University — the largest public university in the US (74,000+ students on the Tempe campus)",
      "Mill Avenue is the most vibrant nightlife and dining corridor in the East Valley",
      "Tempe Town Lake draws 2+ million visitors annually for events like Ironman Arizona and the Tempe Festival of the Arts",
      "Highest rental density in the Phoenix metro area — over 45,000 rental units for 180,000 residents",
      "Compact geography means shorter response times compared to sprawling suburbs"
    ],
    drivingDirections: "From the ASU campus area, take University Drive west to I-10 south, exit at 24th Street, and head south to Pioneer Street — our Phoenix yard is just 15 minutes away. From South Tempe, take I-10 west to 24th Street south (approximately 10 minutes).",
    mapEmbedDescription: "Search Google Maps for '320 E Pioneer St, Phoenix, AZ 85040' for directions from Tempe. Our Phoenix yard is conveniently located just south of the I-10, providing rapid response to all Tempe neighborhoods."
  },

  chandler: {
    name: "Chandler",
    slug: "chandler",
    population: "280,000",
    populationNum: 281751,
    neighborhoods: [
      "Downtown Chandler", "Ocotillo", "Sun Groves", "Price Corridor",
      "Chandler Heights", "Andersen Springs", "Cooper Commons", "Lagos Vistoso",
      "Fulton Ranch", "Carino Estates", "Circle G at Riggs Homestead"
    ],
    zipCodes: [
      "85224", "85225", "85226", "85246", "85248", "85249", "85286"
    ],
    nearestYard: "Phoenix",
    nearestYardAddress: "320 E. Pioneer St., Phoenix, AZ 85040",
    driveTime: "20-30 minutes depending on location within the city",
    responseTime: "Under 30 minutes",
    hoaCount: "900+",
    apartmentCount: "1,800+",
    commercialPropertyCount: "5,000+",
    landmarks: [
      "Chandler Fashion Center", "Intel Ocotillo Campus", "Chandler City Hall",
      "Tumbleweed Recreation Center", "Rawhide Western Town",
      "Loop 202 Santan Freeway", "Downtown Chandler", "Chandler Regional Medical Center"
    ],
    localRegulations: "Chandler City Code Chapter 47 addresses parking on private property. Chandler requires tow-away signage to comply with ARS 9-499.05 and additionally mandates that signs be illuminated or reflective for nighttime visibility. Property owners in Chandler must maintain a current towing authorization agreement on file, renewed annually.",
    majorEmployers: ["Intel Corporation", "PayPal", "Microchip Technology", "Wells Fargo", "Infusionsoft (Keap)", "Northrop Grumman"],
    propertyManagementCompanies: ["CCMC", "Trestle Management", "Associated Asset Management", "Brown Community Management"],
    competitorTowingCompanies: ["Chandler Towing", "South Valley Towing", "A1 Towing & Recovery"],
    notableApartmentComplexes: ["Chandler Crossing", "San Hacienda", "Broadstone Ocotillo", "Lotus Chandler", "The Edge at Grayhawk"],
    notableHOAs: ["Ocotillo Community Association", "Sun Groves HOA", "Cooper Commons HOA", "Fulton Ranch HOA", "Circle G Homeowners Association"],
    notableCommercialProperties: ["Chandler Fashion Center", "Chandler Pavilions", "Price Corridor Office Parks", "Chandler Viridian", "Intel Ocotillo Campus parking"],
    seasonalFactors: "Chandler's tech corridor (Intel, PayPal, Microchip) creates consistent year-round parking demand at office parks and nearby apartments. Holiday shopping at Chandler Fashion Center intensifies parking pressure November through January. Spring training at nearby facilities adds overflow to adjacent properties.",
    uniqueCharacteristics: [
      "Major tech hub home to Intel's largest US manufacturing campus and PayPal's global operations center",
      "Price Corridor is one of Arizona's densest employment centers with 60,000+ workers",
      "Chandler Fashion Center is the second-largest mall in the Phoenix metro area",
      "Named one of the best places to live in Arizona for families multiple years running",
      "Ocotillo is among the most sought-after master-planned communities in the Valley with median home values exceeding $600,000"
    ],
    drivingDirections: "From Downtown Chandler, take Arizona Avenue north to I-10 west, exit at 24th Street, and head south to Pioneer Street — approximately 20 minutes to our Phoenix yard. From south Chandler (Chandler Heights area), take the 202 to I-10 west (approximately 25-30 minutes).",
    mapEmbedDescription: "Search Google Maps for '320 E Pioneer St, Phoenix, AZ 85040' for directions from Chandler. Our Phoenix yard provides coverage across all of Chandler with sub-30-minute response times."
  },

  gilbert: {
    name: "Gilbert",
    slug: "gilbert",
    population: "270,000",
    populationNum: 272033,
    neighborhoods: [
      "Heritage District", "Seville", "Power Ranch", "Agritopia",
      "Val Vista Lakes", "San Tan", "Lyons Gate", "Spectrum",
      "Morrison Ranch", "Greenfield Lakes", "Lindsay Ranch", "Gilbert South"
    ],
    zipCodes: [
      "85233", "85234", "85295", "85296", "85297", "85298", "85299"
    ],
    nearestYard: "Apache Junction",
    nearestYardAddress: "1151 W. Apache Trail, Apache Junction, AZ 85120",
    driveTime: "20-35 minutes depending on location within the city",
    responseTime: "Under 30 minutes",
    hoaCount: "1,100+",
    apartmentCount: "1,400+",
    commercialPropertyCount: "3,500+",
    landmarks: [
      "SanTan Village", "Heritage District", "Riparian Preserve at Water Ranch",
      "Gilbert Regional Park", "Cosmo Dog Park", "Gilbert Town Square",
      "Higley Center for the Performing Arts", "Discovery Park"
    ],
    localRegulations: "Gilbert Town Code Title 7 Chapter 2 addresses towing on private property. Gilbert requires that property owners provide written authorization to a towing company before any enforcement can occur. All signage must conform to ARS 9-499.05 and Gilbert additionally requires that HOA-initiated towing programs be approved by a board vote documented in meeting minutes.",
    majorEmployers: ["Banner Health", "Deloitte", "GoDaddy (satellite)", "Gilbert Public Schools", "Dignity Health"],
    propertyManagementCompanies: ["CCMC", "Associated Asset Management", "Brown Community Management", "City Property Management"],
    competitorTowingCompanies: ["Gilbert Towing", "East Valley Recovery", "Sun Towing"],
    notableApartmentComplexes: ["Aventura at Gilbert", "Soleil at Gilbert", "The Baldwin at St. Rose", "Morrison Ranch Apartments"],
    notableHOAs: ["Power Ranch Community Association", "Seville HOA", "Val Vista Lakes HOA", "Agritopia HOA", "Morrison Ranch Community Association"],
    notableCommercialProperties: ["SanTan Village", "Gilbert Gateway Towne Center", "San Tan Marketplace", "Heritage District shops", "Greenfield Village"],
    seasonalFactors: "Gilbert's population growth drives year-round demand for parking enforcement at new developments. The Heritage District hosts seasonal events (farmers markets, holiday events) that increase parking pressure on surrounding properties. Spring brings increased commercial activity along the Loop 202 corridor.",
    uniqueCharacteristics: [
      "Consistently ranked as one of the safest cities in the United States",
      "Transformed from a small farming community to one of Arizona's largest cities in just 20 years",
      "Over 1,100 HOA communities — one of the highest ratios per capita in the Valley",
      "Agritopia and Power Ranch are nationally recognized master-planned communities",
      "Heritage District offers a vibrant downtown with craft breweries, restaurants, and boutiques"
    ],
    drivingDirections: "From the Heritage District in Gilbert, take Gilbert Road south to the 202, then east to US-60 and east to Apache Junction — our Apache Junction yard at 1151 W. Apache Trail is approximately 25 minutes. Alternatively, head north on Gilbert Road to the 202 west to I-10, south to 24th Street for our Phoenix yard (approximately 30 minutes).",
    mapEmbedDescription: "Search Google Maps for '1151 W Apache Trail, Apache Junction, AZ 85120' for directions from Gilbert. Our Apache Junction yard serves the East Valley, while our Phoenix yard at 320 E Pioneer St provides backup coverage."
  },

  glendale: {
    name: "Glendale",
    slug: "glendale",
    population: "250,000",
    populationNum: 252381,
    neighborhoods: [
      "Westgate Entertainment District", "Arrowhead Ranch", "Thunderbird",
      "Historic Downtown Glendale", "Bellair", "Sahuaro Ranch", "Glen Lakes",
      "Manistee Ranch", "Sunrise", "Cactus", "North Glendale"
    ],
    zipCodes: [
      "85301", "85302", "85303", "85304", "85305", "85306",
      "85307", "85308", "85310", "85311", "85312", "85318"
    ],
    nearestYard: "Phoenix",
    nearestYardAddress: "320 E. Pioneer St., Phoenix, AZ 85040",
    driveTime: "25-40 minutes depending on location within the city",
    responseTime: "Under 30 minutes",
    hoaCount: "700+",
    apartmentCount: "1,600+",
    commercialPropertyCount: "3,800+",
    landmarks: [
      "State Farm Stadium", "Desert Diamond Arena", "Westgate Entertainment District",
      "Tanger Outlets", "Arrowhead Towne Center", "Historic Downtown Glendale",
      "Glendale Civic Center", "Sahuaro Ranch Park"
    ],
    localRegulations: "Glendale City Code Chapter 20 addresses parking enforcement. Glendale has special event-day provisions that allow expedited towing within a 1-mile radius of State Farm Stadium and Desert Diamond Arena during scheduled events. Standard private property towing must comply with ARS 9-499.05 signage requirements. Glendale additionally requires towing companies to carry a city-issued business license.",
    majorEmployers: ["Luke Air Force Base", "Midwestern University", "Banner Health", "Arrowhead Hospital", "Honeywell (nearby)"],
    propertyManagementCompanies: ["Associa Arizona", "CCMC", "FirstService Residential", "Planned Development Services"],
    competitorTowingCompanies: ["Glendale Towing", "West Valley Towing", "A-1 Auto Recovery"],
    notableApartmentComplexes: ["The Reserve at Arrowhead", "Glendale Lofts", "San Marcos Apartments", "Arrowhead Summit"],
    notableHOAs: ["Arrowhead Ranch HOA", "Thunderbird Paseo HOA", "Bellair HOA", "Glen Lakes HOA", "North Glendale Homeowners Association"],
    notableCommercialProperties: ["Westgate Entertainment District", "Arrowhead Towne Center", "Tanger Outlets", "Park West shopping center", "Bell Road commercial corridor"],
    seasonalFactors: "NFL football season (September-January) brings 63,000+ fans to State Farm Stadium for every home game, creating massive parking overflow onto private properties within a mile of the stadium. Concerts and events at Desert Diamond Arena create similar demand year-round. Spring training at Camelback Ranch (nearby) adds February-March pressure.",
    uniqueCharacteristics: [
      "Home to State Farm Stadium (NFL Cardinals) and Desert Diamond Arena — the Valley's sports capital",
      "Westgate Entertainment District draws millions of visitors annually for dining, events, and shopping",
      "Historic Downtown Glendale is known as Arizona's Antique Capital",
      "Luke Air Force Base is a major economic driver with 7,000+ military and civilian personnel",
      "Event-night parking enforcement is uniquely critical for properties near the stadiums"
    ],
    drivingDirections: "From the Westgate area, take the 101 south to I-10 east, continue to 24th Street, then south to Pioneer Street — approximately 30 minutes to our Phoenix yard. From Arrowhead Ranch, take the 101 south or Bell Road east to I-17 south to I-10 east (approximately 35 minutes).",
    mapEmbedDescription: "Search Google Maps for '320 E Pioneer St, Phoenix, AZ 85040' for directions from Glendale. Our Phoenix yard provides full coverage across Glendale with strategic dispatching for event nights."
  },

  "apache-junction": {
    name: "Apache Junction",
    slug: "apache-junction",
    population: "42,000",
    populationNum: 42571,
    neighborhoods: [
      "Apache Trail Corridor", "Superstition Mountain Area", "Ironwood Drive",
      "Lost Dutchman Heights", "Meridian Drive", "Old West Apache Junction",
      "Goldfield", "Peralta Trail Area", "Mammoth Mine Road", "Mountain View"
    ],
    zipCodes: [
      "85117", "85118", "85119", "85120", "85178"
    ],
    nearestYard: "Apache Junction (Home Base)",
    nearestYardAddress: "1151 W. Apache Trail, Apache Junction, AZ 85120",
    driveTime: "5-15 minutes — this is our home base",
    responseTime: "Under 15 minutes",
    hoaCount: "150+",
    apartmentCount: "300+",
    commercialPropertyCount: "800+",
    landmarks: [
      "Lost Dutchman State Park", "Superstition Mountains", "Goldfield Ghost Town",
      "Apache Trail (Historic Route)", "Superstition Mountain Museum",
      "Tortilla Flat", "Canyon Lake", "Silly Mountain"
    ],
    localRegulations: "Apache Junction follows Pinal County regulations for parking enforcement on private property, as the city sits partially in Pinal County. Standard ARS 9-499.05 signage requirements apply. Apache Junction's smaller-city governance means faster permit processing for new towing signage installations.",
    majorEmployers: ["Apache Junction Unified School District", "Banner Goldfield Medical Center", "Fry's Food Stores", "City of Apache Junction"],
    propertyManagementCompanies: ["Superstition Springs Property Management", "East Valley Management Group"],
    competitorTowingCompanies: ["Apache Towing & Recovery", "East Valley Towing", "Gold Canyon Towing"],
    notableApartmentComplexes: ["Apache Trail Apartments", "Superstition Vista Apartments", "Mountain View Senior Living"],
    notableHOAs: ["Superstition Foothills HOA", "Lost Dutchman Heights HOA", "Mountain View HOA"],
    notableCommercialProperties: ["Apache Junction Shopping Plaza", "Superstition Springs Business Park", "Apache Trail commercial corridor"],
    seasonalFactors: "Apache Junction sees a massive 35% population increase during winter snowbird season (October-April), with 15,000+ seasonal residents in RV parks and mobile home communities. The Lost Dutchman Days celebration in February and spring wildflower season bring heavy tourist traffic to the Apache Trail corridor.",
    uniqueCharacteristics: [
      "Axle Towing's primary impound yard is headquartered right here at 1151 W. Apache Trail",
      "Fastest response times in our entire service area — under 15 minutes",
      "Gateway to the Superstition Mountains and the legendary Lost Dutchman's Gold Mine",
      "Population swells by 35% each winter with snowbird residents in RV parks and mobile home communities",
      "Small-town character with a loyal local business community"
    ],
    drivingDirections: "Our impound yard is located directly on Apache Trail (US-88) at 1151 W. Apache Trail, Apache Junction, AZ 85120. From anywhere in Apache Junction, you can reach our yard in under 15 minutes. We are just east of the intersection of Apache Trail and Ironwood Drive.",
    mapEmbedDescription: "Search Google Maps for '1151 W Apache Trail, Apache Junction, AZ 85120' — this is our home base. We are located on the main commercial corridor of Apache Junction, providing the fastest response times in our entire service area."
  }
};

/**
 * Service-specific data for generating unique content per service type
 */
export interface ServiceSEOData {
  title: string;
  slug: string;
  targetAudience: string;
  primaryBenefit: string;
  arizonaStatute: string;
  avgSearchVolume: number;
  keywordDifficulty: number;
}

export const SERVICE_SEO_DATA: Record<string, ServiceSEOData> = {
  "private-property-impounds": {
    title: "Private Property Impounds",
    slug: "private-property-impounds",
    targetAudience: "property owners and managers",
    primaryBenefit: "Remove unauthorized vehicles at zero cost",
    arizonaStatute: "ARS 28-874 and ARS 9-499.05",
    avgSearchVolume: 320,
    keywordDifficulty: 22,
  },
  "parking-enforcement": {
    title: "Parking Enforcement",
    slug: "parking-enforcement",
    targetAudience: "parking facility operators and commercial property owners",
    primaryBenefit: "Professional patrol and permit enforcement",
    arizonaStatute: "ARS 9-499.05",
    avgSearchVolume: 480,
    keywordDifficulty: 28,
  },
  "hoa-towing": {
    title: "HOA Towing",
    slug: "hoa-towing",
    targetAudience: "HOA board members and property management companies",
    primaryBenefit: "Custom towing programs for homeowner associations",
    arizonaStatute: "ARS 9-499.05 and ARS 33-1803",
    avgSearchVolume: 260,
    keywordDifficulty: 18,
  },
  "apartment-towing": {
    title: "Apartment Towing",
    slug: "apartment-towing",
    targetAudience: "apartment property managers and management companies",
    primaryBenefit: "Keep apartment parking organized for residents",
    arizonaStatute: "ARS 9-499.05",
    avgSearchVolume: 390,
    keywordDifficulty: 24,
  },
  "commercial-property-towing": {
    title: "Commercial Property Towing",
    slug: "commercial-property-towing",
    targetAudience: "commercial property owners and retail center managers",
    primaryBenefit: "Protect commercial parking for customers and employees",
    arizonaStatute: "ARS 9-499.05 and ARS 28-874",
    avgSearchVolume: 210,
    keywordDifficulty: 20,
  },
  "vehicle-relocations": {
    title: "Vehicle Relocations",
    slug: "vehicle-relocations",
    targetAudience: "property managers planning maintenance projects",
    primaryBenefit: "Move vehicles for asphalt repairs and construction",
    arizonaStatute: "ARS 9-499.05",
    avgSearchVolume: 170,
    keywordDifficulty: 15,
  },
};

/** Get all city slugs */
export function getAllCitySlugs(): string[] {
  return Object.keys(CITY_SEO_DATA);
}

/** Get all service slugs */
export function getAllServiceSlugs(): string[] {
  return Object.keys(SERVICE_SEO_DATA);
}

/** Get the total number of city x service combinations */
export function getTotalCombinations(): number {
  return getAllCitySlugs().length * getAllServiceSlugs().length;
}
