export interface NeighborhoodData {
  name: string;
  slug: string;
  city: string;
  citySlug: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  propertyHighlights: string[];
  nearbyLandmarks: string[];
  zipCodes: string[];
}

export const NEIGHBORHOODS: Record<string, NeighborhoodData> = {
  "downtown-phoenix": {
    name: "Downtown Phoenix",
    slug: "downtown-phoenix",
    city: "Phoenix",
    citySlug: "phoenix",
    metaTitle:
      "Towing Services in Downtown Phoenix, AZ — Free Private Property Towing",
    metaDescription:
      "Axle Towing provides free private property towing and parking enforcement in Downtown Phoenix. Serving apartments, condos, and commercial properties near Roosevelt Row and the Arts District. Call 480-288-5526.",
    intro: [
      "Downtown Phoenix is the urban core of Arizona's capital, home to a dense mix of high-rise condominiums, apartment complexes, office towers, and entertainment venues. With rapid growth from projects like the Roosevelt Row Arts District and the ongoing expansion of the downtown business corridor, parking enforcement has become a critical need for property owners and managers throughout the area.",
      "Axle Towing & Impound provides comprehensive private property towing and parking enforcement services across Downtown Phoenix at absolutely no cost to property owners. Whether you manage a luxury condo building on Central Avenue or an apartment complex near the convention center, our team responds quickly to unauthorized parking situations around the clock.",
      "The high foot traffic from events at Footprint Center, Chase Field, and the Phoenix Convention Center creates constant parking pressure on nearby private properties. Our patrol schedules are designed to match event calendars, ensuring your lots stay clear during peak demand periods.",
    ],
    propertyHighlights: [
      "High-Rise Condominiums",
      "Urban Apartment Complexes",
      "Office Towers",
      "Retail & Restaurant Properties",
      "Parking Garages",
      "Mixed-Use Developments",
    ],
    nearbyLandmarks: [
      "Footprint Center",
      "Chase Field",
      "Phoenix Convention Center",
      "Roosevelt Row Arts District",
      "Arizona Science Center",
      "Heritage Square",
    ],
    zipCodes: ["85003", "85004"],
  },
  ahwatukee: {
    name: "Ahwatukee",
    slug: "ahwatukee",
    city: "Phoenix",
    citySlug: "phoenix",
    metaTitle:
      "Towing Services in Ahwatukee, AZ — Free Private Property Towing",
    metaDescription:
      "Axle Towing provides free private property towing and parking enforcement in Ahwatukee. Serving HOAs, apartment communities, and retail centers. Call 480-288-5526.",
    intro: [
      "Ahwatukee Foothills, often called the 'world's largest cul-de-sac,' is a master-planned suburban community nestled between South Mountain and the I-10 freeway in southeast Phoenix. With its extensive network of HOA-governed neighborhoods, apartment communities, and retail centers along Chandler Boulevard and Ray Road, parking enforcement is an ongoing priority for property managers throughout the area.",
      "Axle Towing & Impound serves the entire Ahwatukee community with free private property towing and parking enforcement. From the gated communities near South Mountain Park to the busy shopping centers along 48th Street, we help property owners maintain orderly parking and protect their investments.",
      "The community's family-friendly character means residents expect well-maintained, safe parking areas. Our enforcement programs are tailored to the unique needs of Ahwatukee's suburban landscape, including visitor parking management for HOAs and overnight enforcement for apartment communities.",
    ],
    propertyHighlights: [
      "HOA Communities",
      "Gated Neighborhoods",
      "Apartment Complexes",
      "Retail & Shopping Centers",
      "Medical Offices",
      "Religious Facilities",
    ],
    nearbyLandmarks: [
      "South Mountain Park",
      "Ahwatukee Country Club",
      "Foothills Community Park",
      "Desert Foothills YMCA",
      "Chandler Boulevard Corridor",
      "Pecos Park",
    ],
    zipCodes: ["85044", "85048"],
  },
  "north-phoenix": {
    name: "North Phoenix",
    slug: "north-phoenix",
    city: "Phoenix",
    citySlug: "phoenix",
    metaTitle:
      "Towing Services in North Phoenix, AZ — Free Private Property Towing",
    metaDescription:
      "Axle Towing provides free private property towing and parking enforcement in North Phoenix. Serving communities near Deer Valley, Norterra, and the I-17 corridor. Call 480-288-5526.",
    intro: [
      "North Phoenix encompasses a vast and rapidly growing stretch of the city from the Deer Valley area to Norterra and beyond, characterized by newer master-planned communities, large apartment complexes, and thriving commercial corridors along the I-17 and Loop 101 freeways. The area's explosive growth has brought thousands of new residential units and commercial developments, creating significant demand for professional parking enforcement.",
      "Axle Towing & Impound provides free private property towing throughout North Phoenix, from the established neighborhoods near Metrocenter to the newer developments around Happy Valley Road and Jomax. Our team understands the suburban layout and the challenges of managing parking for large-scale apartment communities and HOAs in this rapidly expanding area.",
      "With major retail and employment centers like Deer Valley Towne Center and the Norterra shopping district attracting heavy traffic, adjacent private properties frequently deal with overflow parking from visitors and shoppers. Our patrol and enforcement services ensure your lots remain reserved for authorized users.",
    ],
    propertyHighlights: [
      "Master-Planned Communities",
      "Large Apartment Complexes",
      "Retail Power Centers",
      "Office & Business Parks",
      "HOA Neighborhoods",
      "Medical Campuses",
    ],
    nearbyLandmarks: [
      "Deer Valley Towne Center",
      "Norterra",
      "Ben Avery Shooting Facility",
      "Reach 11 Sports Complex",
      "Musical Instrument Museum",
      "Lake Pleasant (nearby)",
    ],
    zipCodes: ["85024", "85027", "85028"],
  },
  "desert-ridge": {
    name: "Desert Ridge",
    slug: "desert-ridge",
    city: "Phoenix",
    citySlug: "phoenix",
    metaTitle:
      "Towing Services in Desert Ridge, AZ — Free Private Property Towing",
    metaDescription:
      "Axle Towing provides free private property towing and parking enforcement in Desert Ridge. Serving the Desert Ridge Marketplace area, HOAs, and apartment communities. Call 480-288-5526.",
    intro: [
      "Desert Ridge is one of North Phoenix's premier master-planned communities, anchored by the Desert Ridge Marketplace — one of the largest open-air shopping destinations in the Southwest. The area blends upscale residential neighborhoods with high-end retail, dining, and entertainment, creating a dynamic environment where parking management is essential for property owners.",
      "Axle Towing & Impound provides free private property towing and parking enforcement services throughout the Desert Ridge community. From the luxury residences along Tatum Boulevard to the commercial properties near the JW Marriott Desert Ridge Resort, we help property owners protect their parking assets at no cost.",
      "The popularity of Desert Ridge Marketplace and the resort properties in the area generates heavy visitor traffic year-round. Our enforcement teams work closely with property managers to establish effective patrol schedules that address peak parking demand without disrupting the community's welcoming atmosphere.",
    ],
    propertyHighlights: [
      "Luxury HOA Communities",
      "Upscale Apartment Complexes",
      "Retail & Dining Centers",
      "Resort & Hospitality Properties",
      "Office Complexes",
      "Mixed-Use Developments",
    ],
    nearbyLandmarks: [
      "Desert Ridge Marketplace",
      "JW Marriott Desert Ridge Resort",
      "Wildfire Golf Club",
      "Cashman Park",
      "High Street",
      "Reach 11 Sports Complex",
    ],
    zipCodes: ["85050", "85054"],
  },
  arcadia: {
    name: "Arcadia",
    slug: "arcadia",
    city: "Phoenix",
    citySlug: "phoenix",
    metaTitle:
      "Towing Services in Arcadia, Phoenix, AZ — Free Private Property Towing",
    metaDescription:
      "Axle Towing provides free private property towing and parking enforcement in the Arcadia neighborhood of Phoenix. Serving properties near Camelback Mountain and the Arcadia corridor. Call 480-288-5526.",
    intro: [
      "The Arcadia neighborhood is one of Phoenix's most desirable residential areas, stretching along the corridor between Camelback Mountain and the Arizona Country Club. Known for its tree-lined streets, citrus groves, and a mix of mid-century charm and modern luxury renovations, Arcadia has seen a significant influx of new boutique apartment developments and upscale commercial projects in recent years.",
      "Axle Towing & Impound provides free private property towing and parking enforcement throughout the Arcadia district. The neighborhood's popularity with young professionals and families means apartment complexes and condominiums along Camelback Road, Indian School Road, and 44th Street frequently need professional parking management to handle resident and visitor overflow.",
      "The vibrant restaurant and retail scene along the Arcadia corridor — especially near the Arcadia Flats and Town & Country shopping areas — creates parking spillover onto adjacent private properties. Our patrol services ensure your property stays protected while maintaining the neighborhood's welcoming character.",
    ],
    propertyHighlights: [
      "Boutique Apartment Complexes",
      "Luxury Condominiums",
      "Upscale Retail Properties",
      "Restaurant Row Properties",
      "Small HOA Communities",
      "Medical & Professional Offices",
    ],
    nearbyLandmarks: [
      "Camelback Mountain",
      "Arcadia Flats",
      "Town & Country Shopping Center",
      "Arizona Country Club",
      "Scottsdale Fashion Square (nearby)",
      "Indian School Road Corridor",
    ],
    zipCodes: ["85008", "85018"],
  },
  "old-town-scottsdale": {
    name: "Old Town Scottsdale",
    slug: "old-town-scottsdale",
    city: "Scottsdale",
    citySlug: "scottsdale",
    metaTitle:
      "Towing Services in Old Town Scottsdale, AZ — Free Private Property Towing",
    metaDescription:
      "Axle Towing provides free private property towing and parking enforcement in Old Town Scottsdale. Serving entertainment venues, galleries, restaurants, and condos. Call 480-288-5526.",
    intro: [
      "Old Town Scottsdale is the vibrant cultural and entertainment hub of one of Arizona's most iconic cities. With world-class art galleries, upscale dining, a thriving nightlife scene, and luxury condominium developments, parking is at a constant premium — making professional enforcement essential for private property owners throughout the district.",
      "Axle Towing & Impound provides free private property towing and parking enforcement across Old Town Scottsdale. Whether you operate a restaurant with a shared lot, manage a condo complex near the Scottsdale Waterfront, or own a gallery on Marshall Way, we protect your parking from unauthorized use around the clock.",
      "Weekend nights and special events like the Scottsdale ArtWalk, First Friday, and golf tournaments at nearby TPC Scottsdale create intense parking demand that spills over onto private properties. Our enforcement programs are specifically calibrated for Old Town's unique rhythm, with enhanced patrols during peak hours and event weekends.",
    ],
    propertyHighlights: [
      "Luxury Condominiums",
      "Restaurant & Bar Properties",
      "Art Gallery Complexes",
      "Boutique Retail Centers",
      "Mixed-Use Developments",
      "Parking Garages",
    ],
    nearbyLandmarks: [
      "Scottsdale Waterfront",
      "Scottsdale Fashion Square",
      "Scottsdale Civic Center",
      "Marshall Way Arts District",
      "Scottsdale Stadium",
      "Canal Convergence",
    ],
    zipCodes: ["85251", "85252"],
  },
  "north-scottsdale": {
    name: "North Scottsdale",
    slug: "north-scottsdale",
    city: "Scottsdale",
    citySlug: "scottsdale",
    metaTitle:
      "Towing Services in North Scottsdale, AZ — Free Private Property Towing",
    metaDescription:
      "Axle Towing provides free private property towing and parking enforcement in North Scottsdale. Serving luxury communities, resorts, and commercial properties. Call 480-288-5526.",
    intro: [
      "North Scottsdale is synonymous with luxury desert living, featuring some of the most prestigious residential communities, world-class resorts, and high-end commercial developments in the Valley. From the gated estates near Pinnacle Peak to the golf course communities along Scottsdale Road, property owners in North Scottsdale demand the highest level of professional service — including parking enforcement.",
      "Axle Towing & Impound provides free private property towing and parking enforcement throughout North Scottsdale. Our team understands the expectations of luxury property management and delivers discreet, professional enforcement that protects your property without compromising its upscale atmosphere.",
      "The area's world-renowned resorts, championship golf courses, and destination dining attract visitors from around the globe, creating parking challenges for adjacent private properties. Our customized patrol programs ensure unauthorized vehicles are removed quickly and professionally.",
    ],
    propertyHighlights: [
      "Luxury Gated Communities",
      "Golf Course HOAs",
      "Resort & Hospitality Properties",
      "Upscale Retail Plazas",
      "Class A Office Complexes",
      "Medical Campuses",
    ],
    nearbyLandmarks: [
      "TPC Scottsdale",
      "Pinnacle Peak",
      "Kierland Commons",
      "Scottsdale Quarter",
      "Grayhawk Golf Club",
      "McDowell Sonoran Preserve",
    ],
    zipCodes: ["85255", "85262"],
  },
  "dc-ranch": {
    name: "DC Ranch",
    slug: "dc-ranch",
    city: "Scottsdale",
    citySlug: "scottsdale",
    metaTitle:
      "Towing Services in DC Ranch, Scottsdale, AZ — Free Private Property Towing",
    metaDescription:
      "Axle Towing provides free private property towing and parking enforcement in DC Ranch, Scottsdale. Serving luxury HOA communities and the Market Street area. Call 480-288-5526.",
    intro: [
      "DC Ranch is one of Scottsdale's most prestigious master-planned communities, spanning over 4,600 acres at the base of the McDowell Sonoran Preserve. With meticulously maintained streetscapes, resort-style amenities, and the popular Market Street at DC Ranch retail and dining destination, parking enforcement plays an important role in maintaining the community's high standards.",
      "Axle Towing & Impound provides free private property towing and parking enforcement services within the DC Ranch community and surrounding areas. We work closely with HOA management teams and commercial property managers at Market Street to ensure parking areas remain well-organized and reserved for authorized users.",
      "The community's popularity for events, dining, and retail at Market Street brings regular visitor traffic that can impact neighboring residential parking. Our enforcement programs are designed to be unobtrusive yet effective, preserving DC Ranch's refined character while protecting property owners' interests.",
    ],
    propertyHighlights: [
      "Master-Planned HOA Communities",
      "Luxury Custom Home Estates",
      "Market Street Retail Properties",
      "Community Center & Amenity Areas",
      "Townhome Complexes",
      "Professional Office Suites",
    ],
    nearbyLandmarks: [
      "Market Street at DC Ranch",
      "DC Ranch Community Council",
      "McDowell Sonoran Preserve",
      "Silverleaf Club",
      "Thompson Peak Parkway",
      "Windgate Pass",
    ],
    zipCodes: ["85255"],
  },
  "superstition-springs": {
    name: "Superstition Springs",
    slug: "superstition-springs",
    city: "Mesa",
    citySlug: "mesa",
    metaTitle:
      "Towing Services in Superstition Springs, Mesa, AZ — Free Private Property Towing",
    metaDescription:
      "Axle Towing provides free private property towing and parking enforcement in Superstition Springs, Mesa. Serving apartments, retail centers, and HOA communities. Call 480-288-5526.",
    intro: [
      "Superstition Springs is one of Mesa's most established and popular neighborhoods, anchored by the Superstition Springs Center mall and surrounded by a diverse mix of apartment communities, single-family HOAs, and commercial developments. The area's convenient location near the US-60 Superstition Freeway makes it a hub for both residential and commercial activity, creating ongoing demand for professional parking enforcement.",
      "Axle Towing & Impound provides free private property towing and parking enforcement throughout the Superstition Springs area. From large apartment complexes along Power Road and Southern Avenue to the retail properties surrounding the mall, we help property owners keep their parking lots clear of unauthorized vehicles at no cost.",
      "The proximity of Superstition Springs Center and the Mesa Riverview shopping area generates significant traffic that often impacts nearby residential and commercial parking. Our patrol schedules align with peak shopping hours and seasonal demand to ensure maximum protection for your property.",
    ],
    propertyHighlights: [
      "Large Apartment Communities",
      "Retail & Shopping Centers",
      "Single-Family HOAs",
      "Medical & Dental Offices",
      "Restaurant Properties",
      "Light Industrial Complexes",
    ],
    nearbyLandmarks: [
      "Superstition Springs Center",
      "Mesa Riverview",
      "Gene Autry Park",
      "Superstition Springs Golf Club",
      "Banner Desert Medical Center",
      "US-60 Superstition Freeway",
    ],
    zipCodes: ["85206", "85209"],
  },
  "red-mountain": {
    name: "Red Mountain",
    slug: "red-mountain",
    city: "Mesa",
    citySlug: "mesa",
    metaTitle:
      "Towing Services in Red Mountain, Mesa, AZ — Free Private Property Towing",
    metaDescription:
      "Axle Towing provides free private property towing and parking enforcement in Red Mountain, Mesa. Serving communities near Red Mountain Park and the 202 corridor. Call 480-288-5526.",
    intro: [
      "The Red Mountain area of northeast Mesa is a thriving suburban community known for its excellent schools, family-friendly neighborhoods, and proximity to outdoor recreation at Red Mountain Park and the Usery Mountain Regional Park. The area has experienced significant residential and commercial growth along the Loop 202 Red Mountain Freeway corridor, bringing new apartment communities and retail centers that need professional parking enforcement.",
      "Axle Towing & Impound provides free private property towing and parking enforcement throughout the Red Mountain area. Whether you manage an apartment community near Recker Road, an HOA neighborhood near Red Mountain Ranch, or a commercial property along McKellips Road, our team delivers reliable, professional service at zero cost to you.",
      "Red Mountain's growing population and new development activity mean parking demands are constantly evolving. Our team stays ahead of these changes, working with property managers to adapt enforcement programs as communities grow and new businesses open in the area.",
    ],
    propertyHighlights: [
      "Suburban Apartment Complexes",
      "HOA Communities",
      "Retail Strip Centers",
      "Office & Professional Parks",
      "Religious & Community Facilities",
      "Schools & Educational Properties",
    ],
    nearbyLandmarks: [
      "Red Mountain Park",
      "Usery Mountain Regional Park",
      "Red Mountain Ranch Country Club",
      "Mesa Arts Center (nearby)",
      "Loop 202 Red Mountain Freeway",
      "Salt River Fields (nearby)",
    ],
    zipCodes: ["85207", "85215"],
  },
  "asu-area": {
    name: "ASU Area",
    slug: "asu-area",
    city: "Tempe",
    citySlug: "tempe",
    metaTitle:
      "Towing Services near ASU in Tempe, AZ — Free Private Property Towing",
    metaDescription:
      "Axle Towing provides free private property towing and parking enforcement near Arizona State University in Tempe. Serving student housing, apartments, and commercial properties. Call 480-288-5526.",
    intro: [
      "The area surrounding Arizona State University is one of the most densely developed and parking-challenged neighborhoods in the entire Phoenix metro area. With over 70,000 students and thousands of faculty and staff, the streets and private properties near ASU's Tempe campus face constant parking pressure from students, visitors, and event-goers. Unauthorized parking on private property is one of the top complaints from property owners in this area.",
      "Axle Towing & Impound provides free private property towing and parking enforcement throughout the ASU area. We serve dozens of apartment complexes, student housing developments, retail centers, and commercial properties near Mill Avenue, University Drive, Apache Boulevard, and Rural Road. Our enforcement programs are specifically designed for the high-turnover, student-heavy environment that defines this neighborhood.",
      "Game days at Sun Devil Stadium, concerts at Desert Financial Arena, and campus events create surges in parking demand that overwhelm nearby private lots. Our event-aware patrol schedules ensure your property is protected during these peak periods without the need for you to coordinate anything.",
    ],
    propertyHighlights: [
      "Student Housing Complexes",
      "Off-Campus Apartments",
      "Retail & Restaurant Properties",
      "Office Buildings",
      "Mixed-Use Developments",
      "Parking Structures",
    ],
    nearbyLandmarks: [
      "Arizona State University",
      "Sun Devil Stadium",
      "Mill Avenue District",
      "Tempe Town Lake",
      "Desert Financial Arena",
      "Gammage Auditorium",
    ],
    zipCodes: ["85281", "85282"],
  },
  "south-tempe": {
    name: "South Tempe",
    slug: "south-tempe",
    city: "Tempe",
    citySlug: "tempe",
    metaTitle:
      "Towing Services in South Tempe, AZ — Free Private Property Towing",
    metaDescription:
      "Axle Towing provides free private property towing and parking enforcement in South Tempe. Serving established neighborhoods, apartments, and commercial areas. Call 480-288-5526.",
    intro: [
      "South Tempe is a well-established residential area known for its mature neighborhoods, top-rated schools in the Kyrene School District, and convenient access to the I-10 and Loop 101 freeways. The area features a mix of single-family HOA communities, apartment complexes, and neighborhood retail centers that benefit from professional parking enforcement services.",
      "Axle Towing & Impound provides free private property towing and parking enforcement throughout South Tempe. From the apartment communities along Baseline Road and Guadalupe Road to the HOA neighborhoods near Kiwanis Park, we deliver reliable enforcement that keeps your parking areas organized and compliant.",
      "South Tempe's established character and proximity to both Chandler and Phoenix means steady traffic through its commercial corridors. Property owners rely on our consistent patrol presence to deter unauthorized parking and maintain the orderly appearance that defines this desirable community.",
    ],
    propertyHighlights: [
      "Established Apartment Complexes",
      "HOA Communities",
      "Neighborhood Retail Centers",
      "Professional Office Parks",
      "Medical & Dental Offices",
      "Religious & Community Facilities",
    ],
    nearbyLandmarks: [
      "Kiwanis Park",
      "Kyrene de los Lagos Elementary",
      "IKEA Tempe",
      "Arizona Mills (nearby)",
      "Guadalupe Road Corridor",
      "Loop 101 & I-10 Interchange",
    ],
    zipCodes: ["85283", "85284"],
  },
  ocotillo: {
    name: "Ocotillo",
    slug: "ocotillo",
    city: "Chandler",
    citySlug: "chandler",
    metaTitle:
      "Towing Services in Ocotillo, Chandler, AZ — Free Private Property Towing",
    metaDescription:
      "Axle Towing provides free private property towing and parking enforcement in Ocotillo, Chandler. Serving lakeside communities, HOAs, and retail properties. Call 480-288-5526.",
    intro: [
      "Ocotillo is one of Chandler's most desirable neighborhoods, centered around the picturesque Ocotillo Lakes and featuring a collection of upscale master-planned communities, modern apartment developments, and the popular Ocotillo Village retail center. The area's lake-side setting and high-end amenities attract residents who expect meticulously maintained properties, including well-managed parking areas.",
      "Axle Towing & Impound provides free private property towing and parking enforcement throughout the Ocotillo area. We serve the lakefront HOA communities, apartment complexes along Alma School Road and Chandler Heights Road, and the commercial properties in the Ocotillo Village and surrounding retail centers.",
      "The area's popularity for dining, shopping, and waterfront recreation brings visitor traffic that can impact private property parking. Our enforcement programs maintain the premium atmosphere that Ocotillo residents and business owners expect, with professional service that reflects the community's high standards.",
    ],
    propertyHighlights: [
      "Lakefront HOA Communities",
      "Upscale Apartment Complexes",
      "Retail & Dining Centers",
      "Professional Office Suites",
      "Townhome Communities",
      "Medical Facilities",
    ],
    nearbyLandmarks: [
      "Ocotillo Lakes",
      "Ocotillo Village",
      "Ocotillo Golf Resort",
      "Chandler Fashion Center (nearby)",
      "Tumbleweed Recreation Center",
      "Loop 202 Santan Freeway",
    ],
    zipCodes: ["85248", "85249"],
  },
  "san-tan-village": {
    name: "San Tan Village",
    slug: "san-tan-village",
    city: "Gilbert",
    citySlug: "gilbert",
    metaTitle:
      "Towing Services in San Tan Village, Gilbert, AZ — Free Private Property Towing",
    metaDescription:
      "Axle Towing provides free private property towing and parking enforcement in San Tan Village, Gilbert. Serving the mall area, apartments, and growing residential communities. Call 480-288-5526.",
    intro: [
      "The San Tan Village area of southeast Gilbert is one of the fastest-growing neighborhoods in the Phoenix metro area, anchored by the SanTan Village outdoor shopping center and surrounded by thousands of new homes, apartment communities, and commercial developments. The area's rapid expansion along the Loop 202 Santan Freeway corridor has created significant demand for professional parking enforcement as new properties come online.",
      "Axle Towing & Impound provides free private property towing and parking enforcement throughout the San Tan Village area. From the large apartment communities near Williams Field Road to the HOA neighborhoods along Higley Road and the retail properties surrounding the mall, we help property owners manage their parking effectively at zero cost.",
      "SanTan Village's status as a regional shopping destination means significant daily traffic and parking demand that spills over onto adjacent private properties. Our enforcement teams are familiar with the area's traffic patterns and adjust patrol schedules to provide maximum protection during peak hours and holiday shopping seasons.",
    ],
    propertyHighlights: [
      "New-Build Apartment Communities",
      "Master-Planned HOA Neighborhoods",
      "Retail & Shopping Centers",
      "Restaurant & Entertainment Properties",
      "Office & Business Parks",
      "Medical Campuses",
    ],
    nearbyLandmarks: [
      "SanTan Village",
      "San Tan Mountain Regional Park",
      "Riparian Preserve at Water Ranch",
      "Gilbert Regional Park",
      "Loop 202 Santan Freeway",
      "Williams Field Road Corridor",
    ],
    zipCodes: ["85295", "85296", "85297"],
  },
  westgate: {
    name: "Westgate",
    slug: "westgate",
    city: "Glendale",
    citySlug: "glendale",
    metaTitle:
      "Towing Services in Westgate, Glendale, AZ — Free Private Property Towing",
    metaDescription:
      "Axle Towing provides free private property towing and parking enforcement in the Westgate Entertainment District, Glendale. Serving properties near State Farm Stadium and Desert Diamond Arena. Call 480-288-5526.",
    intro: [
      "The Westgate Entertainment District is Glendale's premier destination for sports, dining, shopping, and nightlife, located adjacent to State Farm Stadium (home of the Arizona Cardinals) and Desert Diamond Arena (home of concerts and major events). The area's event-driven economy creates massive parking demand fluctuations that make professional enforcement essential for every private property owner in the district.",
      "Axle Towing & Impound provides free private property towing and parking enforcement throughout the Westgate area. Whether you manage an apartment community near the Loop 101, a restaurant in the entertainment district, or a retail property along Bethany Home Road, our team protects your parking from unauthorized use — especially during major events when demand peaks.",
      "NFL game days, concerts, and special events at Westgate bring tens of thousands of visitors seeking free parking, and private properties near the stadiums are prime targets for event-goers looking to avoid paid lots. Our event-day enforcement patrols ensure your property is protected during these high-demand periods.",
    ],
    propertyHighlights: [
      "Entertainment District Properties",
      "Apartment Complexes",
      "Restaurant & Bar Properties",
      "Retail Shopping Centers",
      "Hotel & Hospitality Properties",
      "Office & Commercial Buildings",
    ],
    nearbyLandmarks: [
      "State Farm Stadium",
      "Desert Diamond Arena",
      "Westgate Entertainment District",
      "Tanger Outlets Westgate",
      "Cabela's",
      "Loop 101 & Bethany Home Road",
    ],
    zipCodes: ["85305", "85301"],
  },
};

/** Get all neighborhoods for a given city slug */
export function getNeighborhoodsByCity(
  citySlug: string
): NeighborhoodData[] {
  return Object.values(NEIGHBORHOODS).filter((n) => n.citySlug === citySlug);
}

/** Get all unique city slugs that have neighborhoods */
export function getCitySlugsWithNeighborhoods(): string[] {
  const slugs = new Set(
    Object.values(NEIGHBORHOODS).map((n) => n.citySlug)
  );
  return Array.from(slugs);
}
