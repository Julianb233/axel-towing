#!/usr/bin/env node

/**
 * Programmatic SEO Page Generator — Axle Towing & Impound
 * Generates 48 unique city x service MDX pages (6 services x 8 cities)
 * Each page targets 1,800-2,200 words with 40%+ unique content.
 *
 * Usage: node scripts/generate-city-service-pages.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, "..", "src", "content", "city-service-pages");

// ─── City Data ────────────────────────────────────────────────────────
const CITIES = {
  phoenix: {
    name: "Phoenix",
    slug: "phoenix",
    population: "1.6 million",
    popNum: 1608139,
    neighborhoods: ["Ahwatukee", "Arcadia", "Desert Ridge", "Downtown Phoenix", "North Phoenix", "Laveen", "Maryvale", "South Mountain", "Encanto", "Camelback East", "Deer Valley", "Paradise Valley Village", "Midtown", "South Phoenix"],
    zipCodes: ["85001","85003","85004","85006","85007","85008","85009","85012","85013","85014","85015","85016","85017","85018","85019","85020","85021","85022","85023","85024","85028","85029","85031","85032","85033","85034","85035","85040","85041","85042","85043","85044","85045","85048","85050","85051","85053","85054"],
    nearestYard: "Phoenix (320 E. Pioneer St., Phoenix, AZ 85040)",
    driveTime: "10-25 minutes depending on location",
    responseTime: "Under 30 minutes",
    hoaCount: "3,500+",
    aptCount: "5,000+",
    commercialCount: "15,000+",
    landmarks: ["Phoenix Sky Harbor International Airport", "Footprint Center", "Chase Field", "Desert Ridge Marketplace", "Biltmore Fashion Park", "Arizona State Capitol", "Camelback Mountain", "South Mountain Park", "Phoenix Convention Center"],
    localRegs: "Phoenix City Code Chapter 36 governs parking enforcement on private property. All signage must comply with ARS 9-499.05, requiring signs to be at least 18x24 inches, posted at every entrance, and include the towing company name, phone number, and impound lot address. Property owners must maintain written authorization on file.",
    competitors: ["Camelback Towing", "AZ Towing & Recovery", "Southwest Towing", "Discount Towing"],
    directions: "From downtown Phoenix, head south on Central Avenue to Pioneer Street — our Phoenix yard at 320 E. Pioneer St. is just 10 minutes from the city center. From North Phoenix or Desert Ridge, take I-17 south to I-10 east, exit at 24th Street, and head south to Pioneer Street (approximately 25 minutes).",
    seasonalNote: "Phoenix sees a 20% population increase during winter snowbird season (October-April), dramatically increasing parking demand. Summer extreme heat (115°F+) makes abandoned vehicles a fire and safety hazard.",
    employers: ["Banner Health", "Wells Fargo", "American Express", "Honeywell", "Republic Services"],
    notableApts: ["Camden North End", "The Roosevelt", "Broadstone Roosevelt Row", "Optima Sonoran Village", "Tapestry on Central"],
    notableHOAs: ["Ahwatukee Foothills Village", "Desert Ridge HOA", "Encanto Palmcroft Historic District"],
    notableCommercial: ["Desert Ridge Marketplace", "Biltmore Fashion Park", "Metrocenter", "Paradise Valley Mall"],
    mapDesc: "Search Google Maps for '320 E Pioneer St, Phoenix, AZ 85040' for driving directions to our Phoenix impound yard.",
  },
  scottsdale: {
    name: "Scottsdale",
    slug: "scottsdale",
    population: "242,000",
    popNum: 241361,
    neighborhoods: ["Old Town Scottsdale", "North Scottsdale", "McCormick Ranch", "Gainey Ranch", "DC Ranch", "Grayhawk", "Kierland", "Pinnacle Peak", "Troon", "South Scottsdale"],
    zipCodes: ["85250","85251","85252","85253","85254","85255","85256","85257","85258","85259","85260","85261","85262","85266","85267"],
    nearestYard: "Phoenix (320 E. Pioneer St., Phoenix, AZ 85040)",
    driveTime: "20-35 minutes depending on location",
    responseTime: "Under 25 minutes",
    hoaCount: "800+",
    aptCount: "1,200+",
    commercialCount: "4,500+",
    landmarks: ["Scottsdale Fashion Square", "TPC Scottsdale", "Scottsdale Waterfront", "Kierland Commons", "Scottsdale Quarter", "Scottsdale Stadium", "McDowell Sonoran Preserve", "Taliesin West"],
    localRegs: "Scottsdale Revised Code Chapter 36-72 supplements state-level ARS requirements. Property owners must provide 24-hour notice before towing from guest parking areas in residential communities. HOA-initiated tows require board-approved written authorization and must comply with both CC&R language and state statute.",
    competitors: ["Scottsdale Towing", "Paradise Valley Towing", "Desert Dogs Towing"],
    directions: "From Old Town Scottsdale, take Scottsdale Road south to McDowell, then west to the I-10, south to 24th Street, and south to Pioneer Street (approximately 25 minutes). From North Scottsdale, take the 101 south to the I-10 east (approximately 35 minutes).",
    seasonalNote: "Scottsdale is a premier winter tourism destination. The WM Phoenix Open at TPC Scottsdale in February, spring training baseball, and the Scottsdale Arabian Horse Show draw massive visitor crowds. Old Town's nightlife creates year-round weekend parking demand.",
    employers: ["GoDaddy", "Vanguard", "Axon (Taser)", "General Dynamics"],
    notableApts: ["Optima Kierland", "Mark-Taylor Scottsdale Waterfront", "Cavasson", "The Palmeraie", "San Artes"],
    notableHOAs: ["DC Ranch Association", "Grayhawk Community Association", "Gainey Ranch Community Association", "McCormick Ranch HOA"],
    notableCommercial: ["Scottsdale Fashion Square", "Kierland Commons", "Scottsdale Quarter", "Market Street at DC Ranch"],
    mapDesc: "Search Google Maps for '320 E Pioneer St, Phoenix, AZ 85040' for directions from Scottsdale to our closest impound yard.",
  },
  mesa: {
    name: "Mesa",
    slug: "mesa",
    population: "540,000",
    popNum: 542397,
    neighborhoods: ["East Mesa", "West Mesa", "Superstition Springs", "Red Mountain", "Dobson Ranch", "Las Sendas", "Downtown Mesa", "Mesa Riverview", "Alta Mesa", "Leisure World"],
    zipCodes: ["85201","85202","85203","85204","85205","85206","85207","85208","85209","85210","85211","85212","85213","85215","85216"],
    nearestYard: "Apache Junction (1151 W. Apache Trail, Apache Junction, AZ 85120)",
    driveTime: "15-30 minutes depending on location",
    responseTime: "Under 30 minutes",
    hoaCount: "1,200+",
    aptCount: "2,800+",
    commercialCount: "6,000+",
    landmarks: ["Superstition Springs Center", "Mesa Riverview", "Banner Desert Medical Center", "Mesa Arts Center", "Sloan Park (Cubs spring training)", "Arizona Museum of Natural History", "Salt River Fields at Talking Stick"],
    localRegs: "Mesa City Code Title 8 Chapter 5 addresses towing from private property. Mesa requires that tow-away signage be posted for a minimum of 24 hours before any vehicle can be towed from a newly signed property. All signs must include the towing company name, phone number, and impound yard address per ARS 9-499.05.",
    competitors: ["Mesa Towing", "East Valley Towing", "Quick Tow AZ", "Apache Towing"],
    directions: "From Downtown Mesa, take US-60 east to Apache Junction — our Apache Junction yard at 1151 W. Apache Trail is approximately 20 minutes east. From West Mesa, take the I-10 to the Phoenix yard at 320 E. Pioneer St. (approximately 20 minutes).",
    seasonalNote: "Mesa is a major spring training destination for the Chicago Cubs (Sloan Park) and Oakland Athletics (Hohokam Stadium), causing parking surges February-March. The winter snowbird population adds 50,000+ seasonal residents to the East Valley.",
    employers: ["Banner Health", "Boeing", "MD Helicopters", "Mesa Public Schools", "AT&T"],
    notableApts: ["The Mark at Mesa Gateway", "Solstice at Mesa Gateway", "The Falls at Mesa Point", "Dobson Ranch Apartments"],
    notableHOAs: ["Las Sendas HOA", "Dobson Ranch Community Association", "Red Mountain Ranch HOA", "Superstition Springs HOA"],
    notableCommercial: ["Superstition Springs Center", "Mesa Riverview", "Dana Park Village Square", "Fiesta District"],
    mapDesc: "Search Google Maps for '1151 W Apache Trail, Apache Junction, AZ 85120' for directions from Mesa.",
  },
  tempe: {
    name: "Tempe",
    slug: "tempe",
    population: "180,000",
    popNum: 184118,
    neighborhoods: ["Downtown Tempe", "Mill Avenue District", "Tempe Town Lake", "South Tempe", "North Tempe", "Alameda", "University Heights", "Optimist Park", "Holdeman", "Broadmor", "Papago Park"],
    zipCodes: ["85281","85282","85283","85284","85285","85287"],
    nearestYard: "Phoenix (320 E. Pioneer St., Phoenix, AZ 85040)",
    driveTime: "10-20 minutes depending on location",
    responseTime: "Under 25 minutes",
    hoaCount: "400+",
    aptCount: "1,500+",
    commercialCount: "3,000+",
    landmarks: ["Arizona State University", "Sun Devil Stadium", "Tempe Town Lake", "Mill Avenue District", "Desert Financial Arena", "Gammage Auditorium", "Tempe Marketplace", "IKEA Tempe", "Arizona Mills"],
    localRegs: "Tempe City Code Chapter 27 regulates parking enforcement on private property. Tempe has specific provisions for enforcement near ASU campus — properties within the university overlay district must follow additional notification requirements for student housing. The city requires 24-hour signage posting before enforcement begins on newly contracted properties.",
    competitors: ["Tempe Towing", "University Towing", "Valley Auto Towing", "AAA Towing & Transport"],
    directions: "From the ASU campus area, take University Drive west to I-10 south, exit at 24th Street, and head south to Pioneer Street — our Phoenix yard is just 15 minutes away. From South Tempe, take I-10 west to 24th Street south (approximately 10 minutes).",
    seasonalNote: "ASU's academic calendar drives distinct seasonal cycles: August-September move-in weekends create parking chaos, football Saturdays bring 50,000+ fans to Sun Devil Stadium, and semester breaks reduce demand. The 74,000+ student population ensures high baseline parking pressure year-round.",
    employers: ["Arizona State University", "Insight Enterprises", "State Farm Insurance", "Carvana"],
    notableApts: ["922 Place", "The District at Tempe", "Rise on Apache", "Union Tempe", "Vela on Farmer"],
    notableHOAs: ["Optimist Park HOA", "South Tempe Homeowners Coalition", "Broadmor Estates HOA"],
    notableCommercial: ["Tempe Marketplace", "Arizona Mills", "IKEA Tempe", "Hayden Ferry Lakeside"],
    mapDesc: "Search Google Maps for '320 E Pioneer St, Phoenix, AZ 85040' for directions from Tempe.",
  },
  chandler: {
    name: "Chandler",
    slug: "chandler",
    population: "280,000",
    popNum: 281751,
    neighborhoods: ["Downtown Chandler", "Ocotillo", "Sun Groves", "Price Corridor", "Chandler Heights", "Andersen Springs", "Cooper Commons", "Lagos Vistoso", "Fulton Ranch", "Carino Estates", "Circle G at Riggs Homestead"],
    zipCodes: ["85224","85225","85226","85246","85248","85249","85286"],
    nearestYard: "Phoenix (320 E. Pioneer St., Phoenix, AZ 85040)",
    driveTime: "20-30 minutes depending on location",
    responseTime: "Under 30 minutes",
    hoaCount: "900+",
    aptCount: "1,800+",
    commercialCount: "5,000+",
    landmarks: ["Chandler Fashion Center", "Intel Ocotillo Campus", "Chandler City Hall", "Tumbleweed Recreation Center", "Rawhide Western Town", "Loop 202 Santan Freeway", "Chandler Regional Medical Center"],
    localRegs: "Chandler City Code Chapter 47 addresses parking on private property. Chandler requires tow-away signage to comply with ARS 9-499.05 and additionally mandates that signs be illuminated or reflective for nighttime visibility. Property owners must maintain a current towing authorization agreement on file, renewed annually.",
    competitors: ["Chandler Towing", "South Valley Towing", "A1 Towing & Recovery"],
    directions: "From Downtown Chandler, take Arizona Avenue north to I-10 west, exit at 24th Street, and head south to Pioneer Street (approximately 20 minutes). From south Chandler, take the 202 to I-10 west (approximately 25-30 minutes).",
    seasonalNote: "Chandler's tech corridor (Intel, PayPal, Microchip) creates consistent year-round parking demand at office parks. Holiday shopping at Chandler Fashion Center intensifies parking pressure November-January.",
    employers: ["Intel Corporation", "PayPal", "Microchip Technology", "Wells Fargo", "Northrop Grumman"],
    notableApts: ["Chandler Crossing", "San Hacienda", "Broadstone Ocotillo", "Lotus Chandler"],
    notableHOAs: ["Ocotillo Community Association", "Sun Groves HOA", "Cooper Commons HOA", "Fulton Ranch HOA"],
    notableCommercial: ["Chandler Fashion Center", "Chandler Pavilions", "Price Corridor Office Parks", "Chandler Viridian"],
    mapDesc: "Search Google Maps for '320 E Pioneer St, Phoenix, AZ 85040' for directions from Chandler.",
  },
  gilbert: {
    name: "Gilbert",
    slug: "gilbert",
    population: "270,000",
    popNum: 272033,
    neighborhoods: ["Heritage District", "Seville", "Power Ranch", "Agritopia", "Val Vista Lakes", "San Tan", "Lyons Gate", "Spectrum", "Morrison Ranch", "Greenfield Lakes", "Lindsay Ranch", "Gilbert South"],
    zipCodes: ["85233","85234","85295","85296","85297","85298","85299"],
    nearestYard: "Apache Junction (1151 W. Apache Trail, Apache Junction, AZ 85120)",
    driveTime: "20-35 minutes depending on location",
    responseTime: "Under 30 minutes",
    hoaCount: "1,100+",
    aptCount: "1,400+",
    commercialCount: "3,500+",
    landmarks: ["SanTan Village", "Heritage District", "Riparian Preserve at Water Ranch", "Gilbert Regional Park", "Cosmo Dog Park", "Higley Center for the Performing Arts"],
    localRegs: "Gilbert Town Code Title 7 Chapter 2 addresses towing on private property. Gilbert requires written authorization from property owners before enforcement can occur. All signage must conform to ARS 9-499.05 and Gilbert additionally requires HOA-initiated towing programs to be approved by a board vote documented in meeting minutes.",
    competitors: ["Gilbert Towing", "East Valley Recovery", "Sun Towing"],
    directions: "From the Heritage District, take Gilbert Road south to the 202, then east to US-60 and east to Apache Junction — our yard at 1151 W. Apache Trail is approximately 25 minutes. Alternatively, head north on Gilbert Road to the 202 west to I-10 for our Phoenix yard (approximately 30 minutes).",
    seasonalNote: "Gilbert's population growth drives year-round demand for parking enforcement at new developments. The Heritage District hosts seasonal events (farmers markets, holiday celebrations) that increase parking pressure on surrounding properties.",
    employers: ["Banner Health", "Deloitte", "GoDaddy (satellite)", "Gilbert Public Schools", "Dignity Health"],
    notableApts: ["Aventura at Gilbert", "Soleil at Gilbert", "The Baldwin at St. Rose", "Morrison Ranch Apartments"],
    notableHOAs: ["Power Ranch Community Association", "Seville HOA", "Val Vista Lakes HOA", "Agritopia HOA", "Morrison Ranch Community Association"],
    notableCommercial: ["SanTan Village", "Gilbert Gateway Towne Center", "San Tan Marketplace", "Heritage District shops"],
    mapDesc: "Search Google Maps for '1151 W Apache Trail, Apache Junction, AZ 85120' for directions from Gilbert.",
  },
  glendale: {
    name: "Glendale",
    slug: "glendale",
    population: "250,000",
    popNum: 252381,
    neighborhoods: ["Westgate Entertainment District", "Arrowhead Ranch", "Thunderbird", "Historic Downtown Glendale", "Bellair", "Sahuaro Ranch", "Glen Lakes", "Manistee Ranch", "Sunrise", "Cactus", "North Glendale"],
    zipCodes: ["85301","85302","85303","85304","85305","85306","85307","85308","85310","85311","85312","85318"],
    nearestYard: "Phoenix (320 E. Pioneer St., Phoenix, AZ 85040)",
    driveTime: "25-40 minutes depending on location",
    responseTime: "Under 30 minutes",
    hoaCount: "700+",
    aptCount: "1,600+",
    commercialCount: "3,800+",
    landmarks: ["State Farm Stadium", "Desert Diamond Arena", "Westgate Entertainment District", "Tanger Outlets", "Arrowhead Towne Center", "Historic Downtown Glendale", "Sahuaro Ranch Park"],
    localRegs: "Glendale City Code Chapter 20 addresses parking enforcement. Glendale has special event-day provisions allowing expedited towing within a 1-mile radius of State Farm Stadium and Desert Diamond Arena during scheduled events. Standard private property towing must comply with ARS 9-499.05. Glendale additionally requires towing companies to carry a city-issued business license.",
    competitors: ["Glendale Towing", "West Valley Towing", "A-1 Auto Recovery"],
    directions: "From the Westgate area, take the 101 south to I-10 east, continue to 24th Street, then south to Pioneer Street (approximately 30 minutes). From Arrowhead Ranch, take the 101 south or Bell Road east to I-17 south to I-10 east (approximately 35 minutes).",
    seasonalNote: "NFL football season (September-January) brings 63,000+ fans to State Farm Stadium for every home game, creating massive parking overflow onto nearby private properties. Concerts and events at Desert Diamond Arena create similar demand year-round.",
    employers: ["Luke Air Force Base", "Midwestern University", "Banner Health", "Arrowhead Hospital"],
    notableApts: ["The Reserve at Arrowhead", "Glendale Lofts", "San Marcos Apartments", "Arrowhead Summit"],
    notableHOAs: ["Arrowhead Ranch HOA", "Thunderbird Paseo HOA", "Bellair HOA", "Glen Lakes HOA"],
    notableCommercial: ["Westgate Entertainment District", "Arrowhead Towne Center", "Tanger Outlets", "Park West"],
    mapDesc: "Search Google Maps for '320 E Pioneer St, Phoenix, AZ 85040' for directions from Glendale.",
  },
  "apache-junction": {
    name: "Apache Junction",
    slug: "apache-junction",
    population: "42,000",
    popNum: 42571,
    neighborhoods: ["Apache Trail Corridor", "Superstition Mountain Area", "Ironwood Drive", "Lost Dutchman Heights", "Meridian Drive", "Old West Apache Junction", "Goldfield", "Peralta Trail Area", "Mammoth Mine Road", "Mountain View"],
    zipCodes: ["85117","85118","85119","85120","85178"],
    nearestYard: "Apache Junction — Home Base (1151 W. Apache Trail, Apache Junction, AZ 85120)",
    driveTime: "5-15 minutes — this is our home base",
    responseTime: "Under 15 minutes",
    hoaCount: "150+",
    aptCount: "300+",
    commercialCount: "800+",
    landmarks: ["Lost Dutchman State Park", "Superstition Mountains", "Goldfield Ghost Town", "Apache Trail (Historic Route)", "Superstition Mountain Museum", "Canyon Lake", "Silly Mountain"],
    localRegs: "Apache Junction follows Pinal County regulations for parking enforcement on private property. Standard ARS 9-499.05 signage requirements apply. Apache Junction's smaller-city governance means faster permit processing for new towing signage installations.",
    competitors: ["Apache Towing & Recovery", "East Valley Towing", "Gold Canyon Towing"],
    directions: "Our impound yard is located directly on Apache Trail (US-88) at 1151 W. Apache Trail, Apache Junction, AZ 85120. From anywhere in Apache Junction, you can reach our yard in under 15 minutes. We are just east of the intersection of Apache Trail and Ironwood Drive.",
    seasonalNote: "Apache Junction sees a 35% population increase during winter snowbird season (October-April), with 15,000+ seasonal residents in RV parks and mobile home communities. Lost Dutchman Days in February and spring wildflower season bring tourist traffic to the Apache Trail corridor.",
    employers: ["Apache Junction Unified School District", "Banner Goldfield Medical Center", "Fry's Food Stores"],
    notableApts: ["Apache Trail Apartments", "Superstition Vista Apartments", "Mountain View Senior Living"],
    notableHOAs: ["Superstition Foothills HOA", "Lost Dutchman Heights HOA", "Mountain View HOA"],
    notableCommercial: ["Apache Junction Shopping Plaza", "Superstition Springs Business Park", "Apache Trail commercial corridor"],
    mapDesc: "Search Google Maps for '1151 W Apache Trail, Apache Junction, AZ 85120' — our home base impound yard.",
  },
};

// ─── Service Data ─────────────────────────────────────────────────────
const SERVICES = {
  "private-property-impounds": {
    title: "Private Property Impounds",
    slug: "private-property-impounds",
    shortTitle: "Private Property Impound",
    audience: "property owners and managers",
    statute: "ARS 28-874 and ARS 9-499.05",
    searchVol: 320,
    kd: 22,
  },
  "parking-enforcement": {
    title: "Parking Enforcement",
    slug: "parking-enforcement",
    shortTitle: "Parking Enforcement",
    audience: "parking facility operators and commercial property owners",
    statute: "ARS 9-499.05",
    searchVol: 480,
    kd: 28,
  },
  "hoa-towing": {
    title: "HOA Towing",
    slug: "hoa-towing",
    shortTitle: "HOA Towing",
    audience: "HOA board members and property management companies",
    statute: "ARS 9-499.05 and ARS 33-1803",
    searchVol: 260,
    kd: 18,
  },
  "apartment-towing": {
    title: "Apartment Towing",
    slug: "apartment-towing",
    shortTitle: "Apartment Towing",
    audience: "apartment property managers and management companies",
    statute: "ARS 9-499.05",
    searchVol: 390,
    kd: 24,
  },
  "commercial-property-towing": {
    title: "Commercial Property Towing",
    slug: "commercial-property-towing",
    shortTitle: "Commercial Property Towing",
    audience: "commercial property owners and retail center managers",
    statute: "ARS 9-499.05 and ARS 28-874",
    searchVol: 210,
    kd: 20,
  },
  "vehicle-relocations": {
    title: "Vehicle Relocations",
    slug: "vehicle-relocations",
    shortTitle: "Vehicle Relocation",
    audience: "property managers planning maintenance projects",
    statute: "ARS 9-499.05",
    searchVol: 170,
    kd: 15,
  },
};

// ─── Content Generation Functions ─────────────────────────────────────

function generateFrontmatter(city, service) {
  const title = `${service.title} in ${city.name}, AZ`;
  const metaDesc = `Professional ${service.title.toLowerCase()} services in ${city.name}, Arizona. Axle Towing provides free ${service.shortTitle.toLowerCase()} for ${service.audience}. 24/7 dispatch. Call (480) 288-5526.`;

  return `---
title: "${title} — Complete 2026 Guide"
description: "${metaDesc.slice(0, 160)}"
date: "2026-03-17"
service: "${service.slug}"
city: "${city.slug}"
targetKeyword: "${service.title.toLowerCase()} ${city.name.toLowerCase()} az"
secondaryKeywords: ["${service.title.toLowerCase()} near ${city.name.toLowerCase()}", "${service.title.toLowerCase()} company ${city.name.toLowerCase()}", "${city.name.toLowerCase()} ${service.title.toLowerCase()} services", "${service.title.toLowerCase()} ${city.name.toLowerCase()} arizona"]
searchVolume: ${service.searchVol}
keywordDifficulty: ${service.kd}
nearestYard: "${city.nearestYard}"
responseTime: "${city.responseTime}"
phone: "480-288-5526"
---`;
}

// ─── Unique Introductions per service type per city ───────────────────

function generateIntro(city, service) {
  const hoods = city.neighborhoods.slice(0, 3).join(", ");
  const allHoods = city.neighborhoods.join(", ");

  const intros = {
    "private-property-impounds": {
      phoenix: `Phoenix, Arizona — a city of ${city.population} residents stretching across more than 500 square miles of Sonoran Desert — faces some of the most complex private property parking challenges in the American Southwest. From the dense apartment corridors of ${hoods} to the sprawling master-planned communities that define the suburban fringe, unauthorized parking on private property is not just an inconvenience; it is a liability, a revenue drain, and a daily source of frustration for property owners across the Valley of the Sun.

Axle Towing & Impound is headquartered right here in Phoenix at 320 E. Pioneer St., AZ 85040, and we have been solving these problems for property owners since 2021. Our private property impound services are completely free for property owners — we handle everything from ARS-compliant signage installation to 24/7 patrol, vehicle removal, secure impound storage, and legal title processing. The costs are recovered entirely through legally mandated impound fees, never from property owners.

With a population that swells by 20% during winter snowbird season and over ${city.hoaCount} HOA communities competing for organized parking, Phoenix's private property impound needs are enormous — and growing every year. Whether you manage a 200-unit apartment complex in Midtown, an HOA in Ahwatukee, or a retail center near Desert Ridge Marketplace, Axle Towing has the local expertise and infrastructure to protect your property.`,

      scottsdale: `Scottsdale, Arizona — a city of ${city.population} residents known worldwide for its luxury communities, world-class resorts, and vibrant entertainment districts — demands a private property impound service that matches the city's premium standards. From the upscale boutiques of ${hoods} to the gated estates near Pinnacle Peak and Troon, unauthorized vehicles on private property threaten the carefully maintained environments that define Scottsdale living.

Axle Towing & Impound provides professional private property impound services throughout Scottsdale at absolutely zero cost to property owners. We understand that enforcement in Scottsdale requires a white-glove approach — our drivers are trained to operate with the discretion and professionalism that luxury property managers expect. Every interaction reflects the quality standards your community demands.

With ${city.hoaCount} HOA communities enforcing strict CC&R standards and a tourism industry that draws 9+ million visitors annually, Scottsdale's private property parking challenges are unlike any other city in the Valley. Our team has deep experience navigating the intersection of high-end community expectations and Arizona towing law, ensuring every impound is legally compliant, thoroughly documented, and executed with precision.`,

      mesa: `Mesa, Arizona — the third-largest city in the state with a population of ${city.population} — is experiencing explosive growth that is transforming its landscape from ${hoods} to the rapidly developing Mesa Gateway corridor in the east. New apartment complexes, commercial developments, and residential communities are opening at a pace that strains existing parking infrastructure, making professional private property impound services essential for property owners across the city.

Axle Towing & Impound serves all of Mesa from our Apache Junction yard at 1151 W. Apache Trail, just minutes from the eastern edge of the city. Our private property impound services are completely free for Mesa property owners — we install ARS-compliant signage, patrol your property on your schedule, and remove unauthorized vehicles quickly and professionally. All costs are recovered through legally mandated impound fees.

With ${city.hoaCount} HOA communities, ${city.aptCount} apartment complexes, and a spring training baseball season that brings hundreds of thousands of visitors to Sloan Park and Hohokam Stadium each February and March, Mesa property owners face year-round parking enforcement challenges that demand a reliable, professional partner.`,

      tempe: `Tempe, Arizona — a dynamic city of ${city.population} residents anchored by Arizona State University, the largest public university in the nation — faces parking enforcement challenges unlike any other city in the Phoenix metro area. The dense corridors around ${hoods} see some of the highest unauthorized parking rates in the Valley, driven by 74,000+ students competing for limited parking, a thriving nightlife scene along Mill Avenue, and events at Sun Devil Stadium that draw 50,000+ fans.

Axle Towing & Impound provides comprehensive private property impound services throughout Tempe at zero cost to property owners. Our Phoenix yard at 320 E. Pioneer St. is just 10-20 minutes from any location in Tempe, and our dispatch team understands the unique rhythms of this college town — from August move-in surges to Saturday football game-day overflow to the quiet of semester breaks.

With ${city.aptCount} apartment complexes (many catering to students), ${city.hoaCount} HOA communities, and thousands of commercial properties along the Mill Avenue, University Drive, and Baseline Road corridors, Tempe offers one of the densest concentrations of private property towing demand in the entire Phoenix metropolitan area.`,

      chandler: `Chandler, Arizona — a booming city of ${city.population} residents fueled by one of the most powerful tech economies in the Southwest — is growing faster than its parking infrastructure can keep up. From the tech campuses along the ${hoods} corridor to the master-planned lakeside communities of Ocotillo, unauthorized parking on private property is a persistent challenge for the city's thousands of property owners and managers.

Axle Towing & Impound provides professional private property impound services throughout Chandler at absolutely no cost to property owners. We handle ARS-compliant signage installation, scheduled patrols, 24/7 vehicle removal, and secure impound storage — all free. Our Phoenix yard at 320 E. Pioneer St. serves all of Chandler with response times under 30 minutes.

With major employers like Intel, PayPal, and Microchip Technology drawing 60,000+ workers to the Price Corridor alone, plus ${city.hoaCount} HOA communities and ${city.aptCount} apartment complexes competing for parking space, Chandler property owners need a towing partner that understands both the scale and the professionalism this city demands.`,

      gilbert: `Gilbert, Arizona — once a small farming community, now one of the safest and fastest-growing cities in the United States with a population of ${city.population} — takes community standards seriously. From the charming craft breweries of the ${hoods} to the sprawling master-planned communities of Power Ranch and Agritopia, Gilbert residents and property owners expect orderly, well-managed parking areas that reflect the high quality of life the town is known for.

Axle Towing & Impound provides comprehensive private property impound services across Gilbert at zero cost to property owners. Our Apache Junction yard at 1151 W. Apache Trail serves the East Valley with response times under 30 minutes, and our experienced team understands the community-minded approach that Gilbert property managers and HOA boards expect.

With ${city.hoaCount} HOA communities — one of the highest ratios per capita in the Valley — and a steady stream of new apartment and commercial developments along the Loop 202 and Gilbert Road corridors, the demand for professional private property impound services in Gilbert continues to grow year over year.`,

      glendale: `Glendale, Arizona — a city of ${city.population} residents that has become the sports and entertainment capital of the Phoenix metro area — faces uniquely intense parking enforcement challenges. From the ${hoods} area where NFL game days bring 63,000+ fans seeking free parking, to the established neighborhoods of Arrowhead Ranch and Thunderbird, private property owners across Glendale deal with unauthorized parking pressure that ranges from daily annoyances to event-night emergencies.

Axle Towing & Impound provides professional private property impound services throughout Glendale at absolutely no cost to property owners. We understand Glendale's unique needs — our team ramps up enforcement during Cardinals game days, concerts at Desert Diamond Arena, and major events at the Westgate Entertainment District, protecting your property when parking demand is at its peak.

With ${city.hoaCount} HOA communities, ${city.aptCount} apartment complexes, and some of the Valley's busiest entertainment venues drawing millions of visitors annually, Glendale property owners need a towing partner that can handle both routine enforcement and high-surge event-night demand.`,

      "apache-junction": `Apache Junction, Arizona — a close-knit community of ${city.population} residents nestled at the base of the legendary Superstition Mountains — is where Axle Towing & Impound calls home. Our primary impound yard at 1151 W. Apache Trail is located right here in AJ, which means property owners in ${hoods} and throughout the city get the fastest response times in our entire service area — under 15 minutes.

Our private property impound services are completely free for Apache Junction property owners. We install ARS-compliant signage, patrol your property on your schedule, and remove unauthorized vehicles swiftly and professionally. All costs are recovered through legally mandated impound fees — never from property owners. Being locally headquartered means we are not just a service provider; we are your neighbors.

With a year-round population of ${city.population} that swells by 35% during winter snowbird season (October-April) as 15,000+ seasonal residents fill RV parks and mobile home communities, Apache Junction faces significant seasonal parking enforcement challenges. Commercial properties along Apache Trail, mobile home and RV park communities, and the growing number of residential developments all benefit from our fast, reliable impound services.`,
    },
  };

  // For services other than private-property-impounds, generate programmatically
  if (intros[service.slug] && intros[service.slug][city.slug]) {
    return intros[service.slug][city.slug];
  }

  // Generic but city-specific intro generation
  return generateGenericIntro(city, service);
}

function generateGenericIntro(city, service) {
  const hoods = city.neighborhoods.slice(0, 3).join(", ");

  const serviceIntros = {
    "parking-enforcement": `${city.name}, Arizona — with a population of ${city.population} and one of the most dynamic real estate markets in the Phoenix metro area — presents significant parking enforcement challenges for property owners and managers across every neighborhood. From the busy corridors near ${hoods} to the growing commercial districts and residential communities throughout the city, professional parking enforcement is essential for protecting property investments and maintaining orderly operations.

Axle Towing & Impound provides comprehensive parking enforcement services throughout ${city.name} at absolutely zero cost to property owners. Our enforcement programs include regular patrol services, sticker and hang-tag permit systems, time-limited enforcement for customer-facing businesses, and complete ARS-compliant signage installation. We design custom programs that fit your property's unique needs and your tenants' expectations.

${city.name} is home to ${city.aptCount} apartment complexes, ${city.hoaCount} HOA communities, and ${city.commercialCount} commercial properties — each with distinct parking management needs. ${city.seasonalNote} Our team understands these local dynamics and designs patrol schedules and enforcement programs that account for ${city.name}'s specific patterns of parking demand.`,

    "hoa-towing": `${city.name}, Arizona — home to ${city.hoaCount} homeowner associations and a population of ${city.population} — represents one of the most active HOA towing markets in the Phoenix metropolitan area. From the established neighborhoods near ${hoods} to the newer master-planned communities emerging across the city, HOA boards face constant pressure to enforce parking rules, maintain community standards, and address unauthorized vehicles — all while keeping costs manageable and avoiding homeowner complaints.

Axle Towing & Impound provides specialized HOA towing programs throughout ${city.name} that are completely free for the association. We work directly with HOA boards and property management companies to design custom enforcement programs that align with your community's CC&Rs, comply with Arizona law (${service.statute}), and deliver consistent, fair results. Our annual board presentation program ensures that even as board members turn over, your community's towing program continues without interruption.

Here is the opportunity most property managers in ${city.name} overlook: HOA boards turn over every year. New board members need education on parking enforcement options, and this creates a fresh window to establish or improve towing programs. We proactively schedule presentations with incoming board members to explain the zero-cost model, review your community's specific rules, and customize enforcement to fit your needs. ${city.seasonalNote}`,

    "apartment-towing": `${city.name}, Arizona — with ${city.aptCount} apartment complexes serving a population of ${city.population} — has one of the most active apartment towing markets in the Phoenix metro area. From the established communities near ${hoods} to the new-construction apartment developments appearing along the city's growth corridors, apartment property managers face a daily battle against unauthorized parking, abandoned vehicles, and fire lane violations that directly impact resident satisfaction and lease renewal rates.

Axle Towing & Impound provides comprehensive apartment towing programs throughout ${city.name} at absolutely zero cost to property owners and management companies. Our programs include assigned space enforcement, visitor parking management, abandoned vehicle identification and removal, and full access to our property manager portal — where you can request tows, view reports, and track enforcement activity in real time from your computer or phone.

Parking is consistently ranked as one of the top three factors in apartment resident satisfaction surveys, and in a competitive rental market like ${city.name}, having organized, professionally managed parking can be the difference between a lease renewal and a move-out. ${city.seasonalNote} Our team designs enforcement programs that account for these local dynamics, ensuring your parking lots stay orderly year-round.`,

    "commercial-property-towing": `${city.name}, Arizona — home to ${city.commercialCount} commercial properties serving a population of ${city.population} — faces significant challenges with unauthorized parking at retail centers, office parks, strip malls, and standalone commercial buildings. From the busy corridors near ${hoods} to the employment centers and shopping districts that drive the local economy, commercial property owners need professional parking enforcement to protect tenant revenue and maintain a professional image.

Axle Towing & Impound provides professional commercial property towing throughout ${city.name} at zero cost to property owners. Our programs cover retail center enforcement, office park parking management, time-limited customer parking, employee parking designation, fire lane and ADA compliance, and after-hours enforcement. We coordinate directly with your tenants to create unified parking policies that work for everyone.

When unauthorized vehicles take up your commercial property's parking spaces in ${city.name}, it directly impacts your tenants' foot traffic and revenue. ${city.seasonalNote} Our enforcement programs are designed to keep customer-facing spaces available during peak hours while maintaining the professional image that attracts quality tenants and their customers.`,

    "vehicle-relocations": `${city.name}, Arizona — with a population of ${city.population} and thousands of residential and commercial properties requiring regular maintenance — has a growing need for professional vehicle relocation services. From the apartment communities near ${hoods} to the commercial developments and HOA neighborhoods across the city, property managers regularly need vehicles temporarily moved for asphalt resurfacing, seal coating, line striping, construction projects, and emergency repairs.

Axle Towing & Impound provides professional vehicle relocation services throughout ${city.name} with quick-turnaround pricing — approximately $1,000 for 10 vehicles relocated within 2 hours. Unlike impound services, vehicle relocations simply move cars to another area on your property or a designated holding zone. Nobody's vehicle goes to an impound lot — they are just repositioned so maintenance work can proceed on schedule.

Property maintenance in ${city.name}'s extreme desert climate is not optional — Arizona's intense summer heat (regularly exceeding 115°F) accelerates asphalt deterioration, making regular resurfacing and seal coating critical for property preservation. ${city.seasonalNote} Our relocation team coordinates directly with your paving contractors, construction crews, and maintenance teams to time vehicle moves around their work schedules, ensuring zero delays.`,
  };

  return serviceIntros[service.slug] || `${city.name}, Arizona — with a population of ${city.population} — has a growing need for professional ${service.title.toLowerCase()} services. From ${hoods} to every corner of the city, Axle Towing provides comprehensive coverage at zero cost to property owners.`;
}

// ─── City-Specific Scenario Generator ─────────────────────────────────

function generateScenario(city, service) {
  const scenarios = {
    phoenix: {
      "private-property-impounds": `**Real-World Scenario: Desert Ridge Apartment Complex**\n\nA 280-unit apartment complex near Desert Ridge Marketplace was losing an estimated 40 parking spaces daily to non-resident vehicles. Shoppers heading to the mall discovered they could park in the apartment lot and walk to the stores, leaving residents circling for their assigned spaces every evening. After partnering with Axle Towing, we installed compliant signage at all 6 entrances, implemented a sticker permit system, and began twice-daily patrols. Within the first month, we removed 47 unauthorized vehicles and unauthorized parking dropped by 92%. Resident satisfaction scores jumped 18 points on the next quarterly survey, and the property manager reported zero parking-related complaints for the first time in two years.`,
      "parking-enforcement": `**Real-World Scenario: Biltmore Fashion Park Office Complex**\n\nAn office park near Biltmore Fashion Park was losing employee productivity because workers spent 15-20 minutes each morning searching for parking. Non-tenant vehicles from nearby businesses and mall visitors were filling the lot before 8 AM. Axle Towing implemented a hang-tag permit system for employees, 2-hour time limits for visitor spaces, and morning patrol starting at 7 AM. Within two weeks, 100% of employees could find parking within 5 minutes of arrival, and the office tenants reported measurably higher satisfaction with property management.`,
      "hoa-towing": `**Real-World Scenario: Ahwatukee Foothills HOA**\n\nA 450-home HOA in Ahwatukee was struggling with RV and trailer parking violations, unauthorized vehicles in guest spots, and a new board that had no towing program in place. Axle Towing presented to the board, reviewed their CC&Rs, and designed a custom enforcement program with warning-first policies for minor violations and immediate tow for fire lane and handicap violations. After six months, parking violations dropped by 85%, and the board reported that homeowner satisfaction with community management reached its highest level in five years.`,
      "apartment-towing": `**Real-World Scenario: Midtown Phoenix Student-Adjacent Apartments**\n\nA 180-unit apartment complex in Midtown Phoenix, located near several community college campuses, was dealing with non-resident students parking all day in the complex's lot. Residents returning from work found their assigned spaces occupied. Axle Towing implemented a vehicle registration system, patrol during class hours (8 AM-4 PM), and immediate tow for unregistered vehicles in assigned spaces. Unauthorized parking was eliminated within three weeks, and the property saw a 12% increase in lease renewals at the next cycle.`,
      "commercial-property-towing": `**Real-World Scenario: South Phoenix Strip Mall**\n\nA strip mall along Baseline Road with 12 tenant businesses was losing customer traffic because overnight parkers and abandoned vehicles were occupying prime customer spaces. Three tenants had already complained about reduced foot traffic. Axle Towing installed compliant signage, implemented overnight enforcement (10 PM-6 AM), and began morning patrols to clear any remaining unauthorized vehicles before stores opened. Within one month, all 12 tenants reported improved customer parking availability, and the property owner renewed all three at-risk leases.`,
      "vehicle-relocations": `**Real-World Scenario: Arcadia Apartment Repaving Project**\n\nA 240-unit apartment complex in Arcadia needed to repave its entire 300-space parking lot in phases over two weeks. Despite 72-hour advance notices posted on every door, 35 vehicles remained in the Phase 1 section on paving day. Axle Towing's relocation crew arrived at 6 AM and moved all 35 vehicles to the designated overflow area within 3 hours. The paving contractor started on time at 9 AM, and the project finished a day ahead of schedule. Total relocation cost: approximately $3,500 — a fraction of the $8,000/day contractor delay fee.`,
    },
    scottsdale: {
      "private-property-impounds": `**Real-World Scenario: North Scottsdale Luxury Condo Complex**\n\nA 120-unit luxury condominium community near Kierland Commons was dealing with a persistent problem: visitors to the nearby shopping and dining district were parking in the condo's underground garage, taking resident spaces and leaving expensive vehicles blocked in. The HOA board demanded discreet, professional enforcement. Axle Towing installed subtle but compliant signage, implemented a RFID-based access verification system at the garage entrance, and stationed a patrol officer during peak dining hours (5 PM-11 PM Thursday-Saturday). Unauthorized garage parking was eliminated within two weeks, and the board president noted that not a single resident complained about the enforcement approach.`,
      "parking-enforcement": `**Real-World Scenario: Old Town Scottsdale Restaurant Row**\n\nA property owner managing four restaurant buildings along Scottsdale's entertainment district was losing customers because non-patron vehicles were occupying the shared parking lot during peak dinner hours. Axle Towing designed a time-limited enforcement program with 2-hour parking during dinner hours (5 PM-midnight), validated parking for restaurant patrons, and overnight enforcement to prevent vehicle storage. Restaurant revenue across the four establishments increased by an estimated 15% in the first quarter after implementation.`,
      "hoa-towing": `**Real-World Scenario: DC Ranch Master-Planned Community**\n\nDC Ranch's community association manages parking for over 4,600 acres of luxury residences. When guest parking areas near the community center were chronically occupied by non-residents visiting Market Street, the board needed a solution that maintained the community's upscale image. Axle Towing implemented a guest parking validation system, discreet patrol during business hours, and a warning-then-tow policy for repeat offenders. Guest parking availability improved by 90%, and the association reported zero complaints about heavy-handed enforcement.`,
      "apartment-towing": `**Real-World Scenario: South Scottsdale Mixed-Use Apartment**\n\nA new 200-unit mixed-use apartment development near the Scottsdale Waterfront was struggling with visitors to the ground-floor retail spaces parking in resident-only areas. Residents paying premium rents expected premium parking. Axle Towing implemented a dual-zone enforcement system — retail customer parking on the lower levels with 90-minute time limits, resident-only parking on upper levels with sticker verification. Within one month, resident parking complaints dropped to zero and retail foot traffic actually increased as customer spaces turned over more frequently.`,
      "commercial-property-towing": `**Real-World Scenario: Kierland Commons Adjacent Office Park**\n\nA Class A office park adjacent to Kierland Commons was losing employee parking to shoppers who discovered the office lot was free and just a short walk from the retail center. Employee frustration was leading to complaints and even threats to break leases. Axle Towing installed clear signage, implemented a windshield sticker system for employees, and began patrol enforcement during retail peak hours. Within two weeks, unauthorized commercial lot parking dropped by 95%, and all five office tenants renewed their leases at the next opportunity.`,
      "vehicle-relocations": `**Real-World Scenario: McCormick Ranch HOA Seal Coat Project**\n\nA 300-home HOA in McCormick Ranch needed to seal coat community streets and parking areas over a three-day period. Despite advance notice, 28 vehicles remained in the Day 1 work zone. Axle Towing relocated all 28 vehicles to the community park overflow lot within 2.5 hours, allowing the contractor to begin on time. The HOA board estimated the relocation service saved $12,000 in potential contractor delay charges across the three-day project.`,
    },
    mesa: {
      "private-property-impounds": `**Real-World Scenario: Superstition Springs Apartment Community**\n\nA 350-unit apartment community near Superstition Springs Center was dealing with a chronic problem: mall shoppers and restaurant visitors parking in resident spaces during evenings and weekends, leaving residents unable to park near their own homes. The property had tried signage before but never backed it up with enforcement. Axle Towing replaced the outdated signs with ARS-compliant signage, implemented evening and weekend patrol, and began consistent enforcement. In the first 30 days, 52 unauthorized vehicles were removed. By month three, unauthorized parking had dropped by 94%, and the property manager reported that resident parking complaints — previously the number-one issue — had been virtually eliminated.`,
      "parking-enforcement": `**Real-World Scenario: Downtown Mesa Retail District**\n\nA mixed retail and office property in Downtown Mesa was struggling with all-day parkers who took customer spaces to ride the light rail to work in Tempe and Phoenix. The property's restaurant and retail tenants were losing lunch and dinner traffic. Axle Towing implemented 3-hour time limits during business hours, marked spaces for customer-only use, and began midday patrol enforcement. Customer parking availability improved immediately, and the property's three restaurant tenants reported a combined 22% increase in lunch covers within the first two months.`,
      "hoa-towing": `**Real-World Scenario: Las Sendas 500-Home HOA**\n\nLas Sendas, a premiere master-planned community in East Mesa with over 500 homes, was experiencing increased violations as the community matured: overnight street parking, recreational vehicles stored in driveways and on streets, and guests overstaying in designated visitor areas. A new HOA board wanted to establish consistent enforcement without alienating homeowners. Axle Towing presented a graduated enforcement program — written warnings for first violations, escalating to towing for third offenses within 90 days. After one year, violations dropped 78% and homeowner survey results showed 85% approval of the enforcement program.`,
      "apartment-towing": `**Real-World Scenario: Mesa Gateway New Construction Apartments**\n\nA newly opened 220-unit apartment complex near the Mesa Gateway Airport area was immediately overwhelmed with unauthorized parking from construction workers at nearby development sites. Workers discovered the new complex had empty spaces and treated it as free parking. Axle Towing installed signage before the complex was even fully leased, implemented morning patrol (6 AM-8 AM when construction crews arrived), and enforced consistently from day one. The problem was solved within two weeks, and the property was able to advertise guaranteed parking as a leasing amenity.`,
      "commercial-property-towing": `**Real-World Scenario: Mesa Riverview Shopping Center**\n\nA retail center near Mesa Riverview was losing customer parking to employees of adjacent businesses who parked in the lot to avoid their own employers' parking charges. During spring training season, the problem intensified as baseball fans discovered the lot's proximity to Sloan Park. Axle Towing implemented seasonal enforcement with enhanced patrols during spring training (February-March), year-round employee permit verification, and 3-hour customer time limits. Customer parking availability improved by 60%, and the center's anchor tenant reported a 25% increase in spring sales.`,
      "vehicle-relocations": `**Real-World Scenario: Dobson Ranch Apartment Resurfacing**\n\nA 400-unit apartment complex in Dobson Ranch needed a complete parking lot resurfacing that would take three weeks. With limited alternative parking, the project required careful phasing and rapid vehicle relocation at each phase change. Axle Towing handled all vehicle moves across six phases, relocating an average of 45 vehicles per phase change. Every phase started on time, and the project finished within the original three-week timeline. Total relocation cost was approximately $6,000 — the property manager estimated this saved over $30,000 in potential delay costs.`,
    },
    tempe: {
      "private-property-impounds": `**Real-World Scenario: ASU Student Parking Overflow Crisis**\n\nA 200-unit apartment complex just two blocks from ASU's Tempe campus was losing 60+ parking spaces daily to students who discovered they could park for free in the complex instead of paying for campus parking permits. Residents were forced to park on the street or in neighboring properties, creating a cascade of violations. Axle Towing installed highly visible signage, implemented a vehicle registration system for residents, and began enforcement patrols during class hours (7 AM-6 PM). Within the first week, 34 unauthorized student vehicles were removed. By month two, the problem was completely resolved, and the property manager was able to market guaranteed parking as a premium leasing feature.`,
      "parking-enforcement": `**Real-World Scenario: Mill Avenue Restaurant and Bar District**\n\nA property owner managing a mixed-use building on Mill Avenue was dealing with nightlife overflow parking that blocked tenant vehicle access and created fire lane violations every Thursday through Saturday night. Axle Towing implemented evening patrol from 8 PM-2 AM on weekends, enforced fire lane and handicap zone compliance around the clock, and created a validated parking program for the building's restaurant tenants. Fire lane violations dropped to zero, and the property owner avoided a city code enforcement citation that had been threatened.`,
      "hoa-towing": `**Real-World Scenario: South Tempe Family HOA Community**\n\nA 320-home HOA in South Tempe, near Kyrene School District boundaries, was dealing with overflow parking from parents during school drop-off and pick-up times. Cars were parking in guest spaces, on community streets, and even in fire lanes twice daily. Axle Towing worked with the board to implement time-restricted enforcement during school hours, clearly marked fire lanes, and a guest parking permit system. Parent parking overflow was redirected to appropriate areas, fire lane compliance reached 100%, and the community's character was preserved without antagonizing families.`,
      "apartment-towing": `**Real-World Scenario: Tempe Town Lake Luxury Apartments**\n\nA 180-unit luxury apartment complex near Tempe Town Lake was losing lakefront parking to event-goers during the Tempe Festival of the Arts, Ironman Arizona, and other lakeside events. Residents paying $2,000+/month in rent could not find parking during major events. Axle Towing implemented an event-aware enforcement program — enhanced patrol during the 15+ major annual events at Tempe Town Lake, RFID verification for residents, and immediate tow for unregistered vehicles during event periods. Event-day parking violations dropped by 98%, and the property saw zero lease non-renewals attributed to parking in the following year.`,
      "commercial-property-towing": `**Real-World Scenario: Tempe Marketplace Overflow**\n\nA commercial office building adjacent to Tempe Marketplace was losing its entire parking lot to holiday shoppers from Thanksgiving through New Year's. The building's tenants — a law firm, accounting practice, and medical office — were losing clients who could not find parking. Axle Towing implemented seasonal enhanced enforcement from November through January, installed permanent tow-away signage, and created a validated parking program for office clients. Client parking was immediately available, and all three tenants renewed their leases citing improved parking as a key factor.`,
      "vehicle-relocations": `**Real-World Scenario: ASU-Area Apartment Complex Line Striping**\n\nA 250-unit apartment complex near ASU needed complete line re-striping and speed bump repairs during the summer break when occupancy drops. Despite notices, 40 vehicles remained in the work zones on project day — many belonging to students who had left for the summer. Axle Towing's relocation team moved all 40 vehicles in under 4 hours, and the contractor completed the full project in a single day instead of the planned two days. The property manager estimated the expedited timeline saved $4,000 in contractor costs.`,
    },
    chandler: {
      "private-property-impounds": `**Real-World Scenario: Price Corridor Tech Campus Adjacent Apartments**\n\nA 260-unit apartment complex along the Price Corridor was losing 80+ parking spaces daily to Intel and PayPal employees who discovered they could park for free in the apartment lot and walk to their offices. The morning commute would fill the apartment lot before residents returned from errands. Axle Towing installed compliant signage at all entrances, implemented a resident sticker system, and began enforcement patrols during business hours (7 AM-6 PM). In the first two weeks, 68 tech worker vehicles were towed. Word spread quickly through the corporate campuses, and unauthorized parking was virtually eliminated within 30 days. The property manager reported a surge in lease renewals as residents celebrated having their parking back.`,
      "parking-enforcement": `**Real-World Scenario: Chandler Fashion Center Adjacent Office Park**\n\nA professional office park near Chandler Fashion Center was losing employee parking to mall shoppers during the holiday season and everyday lunch-hour crowds. During Black Friday week, the lot was completely commandeered by shoppers. Axle Towing implemented a year-round permit enforcement system with enhanced holiday patrols from November through January. Employee parking was restored within days of implementation, and the property owner noted that two tenants who had been considering relocation renewed their leases after the parking situation improved.`,
      "hoa-towing": `**Real-World Scenario: Ocotillo Master-Planned Community**\n\nThe Ocotillo community in southeast Chandler — over 3,000 homes built around picturesque lakes — was experiencing growing pains as guest parking areas near the community's recreational facilities were chronically overcrowded. Non-residents were parking in HOA lots to access the lake trails. Axle Towing implemented a guest permit system, placed patrol emphasis on recreational facility parking, and created a warning-first program for first-time violators. Guest parking availability improved by 85%, and the HOA board reported that the towing program actually reduced confrontations between residents and trespassers, since enforcement was handled professionally by our team.`,
      "apartment-towing": `**Real-World Scenario: Downtown Chandler Mixed-Use Apartments**\n\nA 150-unit mixed-use apartment complex in Downtown Chandler was dealing with restaurant patrons parking in resident spaces during dinner hours (5 PM-10 PM). Residents returning from work found their assigned spaces taken by diners visiting the ground-floor restaurants. Axle Towing implemented a dual-zone enforcement system — restaurant patron parking in designated ground-level areas with 2-hour limits, resident-only enforcement on upper parking levels. The system balanced the needs of both residents and restaurant tenants, and the property owner reported zero parking complaints in the following quarterly resident survey.`,
      "commercial-property-towing": `**Real-World Scenario: Chandler Viridian Business District**\n\nA newly developed commercial property in the Chandler Viridian district was losing customer parking before it even fully leased. Nearby construction workers were using the empty lot for free parking. As tenants moved in, their customers had nowhere to park. Axle Towing began enforcement before the final tenants moved in, clearing construction worker vehicles and establishing an enforcement presence. By the time the property was fully leased, parking was organized, compliant, and professionally managed — contributing to a successful lease-up with 100% occupancy within six months.`,
      "vehicle-relocations": `**Real-World Scenario: Sun Groves HOA Street Seal Coat**\n\nThe Sun Groves HOA needed to seal coat all community streets over a two-week period. With narrow streets and limited driveway space, the project required relocating 200+ vehicles across multiple phases. Axle Towing coordinated with the paving contractor to create a phased relocation schedule, moved vehicles to the community park lot and completed each phase on time. The HOA board estimated that Axle's relocation efficiency saved the community $18,000 in contractor standby charges over the two-week project.`,
    },
    gilbert: {
      "private-property-impounds": `**Real-World Scenario: SanTan Village Mall-Adjacent Apartments**\n\nA 300-unit apartment complex near SanTan Village was experiencing severe unauthorized parking from mall shoppers, especially during holiday shopping season. During December, an estimated 100+ non-resident vehicles were occupying the apartment lot daily. Residents were parking on streets and in fire lanes out of desperation. Axle Towing installed high-visibility signage at every entrance, implemented a resident decal system, and deployed enhanced enforcement during the holiday season (October-January). First-month results: 89 unauthorized vehicles removed. By the second holiday season with Axle, unauthorized mall-shopper parking was down 97%, and the property manager reported the lowest parking complaint volume in the complex's history.`,
      "parking-enforcement": `**Real-World Scenario: Heritage District Restaurant Parking**\n\nThe Heritage District in downtown Gilbert has become one of the Valley's hottest dining and nightlife destinations, but the boom has created parking challenges for adjacent property owners. A property owner managing three restaurant buildings with a shared lot found that patrons of competing restaurants across the street were using the lot, while actual customers drove away. Axle Towing implemented a validated parking system with QR codes for each restaurant tenant, 90-minute time limits, and evening patrol. Customer turnover improved by 40%, and all three restaurant tenants reported revenue increases.`,
      "hoa-towing": `**Real-World Scenario: Power Ranch 800-Home HOA**\n\nPower Ranch, one of Gilbert's largest master-planned communities with over 800 homes, was dealing with increasing violations: RVs parked on streets, work trucks stored overnight, and unauthorized vehicles in community park parking areas. A new board wanted consistent enforcement but feared homeowner backlash. Axle Towing designed a phased rollout: first-month education campaign, second-month written warnings, and third-month towing enforcement for repeat violators. By month six, violations had dropped 82%, and the annual homeowner survey showed 88% support for the enforcement program — the highest approval rating of any community initiative.`,
      "apartment-towing": `**Real-World Scenario: Gilbert Apartment Near Cosmo Dog Park**\n\nA 120-unit apartment complex adjacent to Cosmo Dog Park in Gilbert was losing 30+ parking spaces every weekend to dog park visitors. The complex's pet-friendly branding made enforcement politically sensitive. Axle Towing implemented weekend-only patrol, clearly marked visitor parking with 2-hour limits for dog park users, and created a friendly but firm enforcement presence. Dog park visitors learned to use designated park parking, apartment residents reclaimed their spaces, and the property maintained its pet-friendly reputation.`,
      "commercial-property-towing": `**Real-World Scenario: Gilbert Road Commercial Corridor**\n\nA strip mall along Gilbert Road with 8 tenant businesses was dealing with employees from an adjacent office building parking in customer spaces all day. Customer-facing businesses were losing midday foot traffic. Axle Towing installed clear customer-only signage, implemented a 2-hour time limit during business hours, and began midday enforcement patrols. Customer parking availability doubled within two weeks, and the strip mall's anchor tenant (a busy lunch restaurant) reported a 30% increase in weekday lunch revenue.`,
      "vehicle-relocations": `**Real-World Scenario: Agritopia Community Road Repair**\n\nAgritopia, Gilbert's nationally recognized agrithood community, needed emergency road repairs after a water main break damaged a section of community road. With 24-hour notice, Axle Towing relocated 25 vehicles from the affected area within 2 hours, allowing the emergency repair crew immediate access. The repair was completed same-day, and all vehicles were returned to their original positions by evening. The HOA board publicly thanked Axle Towing at their next community meeting for the rapid, professional response.`,
    },
    glendale: {
      "private-property-impounds": `**Real-World Scenario: Westgate Stadium-Adjacent Apartment Complex**\n\nA 220-unit apartment complex within walking distance of State Farm Stadium was experiencing a parking nightmare: every Cardinals home game brought hundreds of unauthorized vehicles into the apartment lot. Fans would arrive hours before kickoff and fill the lot, leaving residents stranded. Axle Towing implemented an aggressive game-day enforcement protocol — enhanced patrol beginning 4 hours before kickoff, immediate tow for all unregistered vehicles, and coordination with Glendale PD for traffic management. During the first enforced game, 42 unauthorized vehicles were removed. By the fourth game, only 3 unauthorized vehicles attempted to park in the lot. The property manager called it "the single most impactful improvement in the history of this community."`,
      "parking-enforcement": `**Real-World Scenario: Arrowhead Towne Center Adjacent Properties**\n\nSeveral commercial properties near Arrowhead Towne Center were losing employee and customer parking to mall overflow, particularly during holiday shopping season. Axle Towing implemented year-round enforcement with enhanced holiday patrols, clear commercial-property-only signage, and a coordinated approach across all affected properties. The result: a 90% reduction in unauthorized mall overflow parking and measurably improved customer access for the commercial tenants throughout the holiday season.`,
      "hoa-towing": `**Real-World Scenario: Arrowhead Ranch 600-Home HOA**\n\nArrowhead Ranch, one of Glendale's most established and largest HOA communities, was struggling with a common suburban problem: street parking from visitors to nearby Arrowhead Towne Center, RV and boat storage on community streets, and guest parking abuse. With over 600 homes and an active social calendar, the HOA needed enforcement that was firm but community-friendly. Axle Towing implemented a tiered program with monthly reporting to the board, a warning-first approach for minor violations, and immediate enforcement for fire lane and safety violations. The board reported a 75% reduction in violations within the first year and credited the program with helping maintain property values in the community.`,
      "apartment-towing": `**Real-World Scenario: Glendale Apartments Near Luke Air Force Base**\n\nA 180-unit apartment complex near Luke Air Force Base was dealing with a unique challenge: military personnel transferring in and out of the base frequently, leading to abandoned vehicles, expired registrations, and confusion about which vehicles belonged to current residents. Axle Towing implemented a quarterly vehicle re-registration program coordinated with the property manager, identified and removed 12 abandoned vehicles in the first sweep, and established ongoing patrol. The property became one of the most organized apartment communities in the area, and the management company expanded Axle's services to three additional properties.`,
      "commercial-property-towing": `**Real-World Scenario: Westgate Entertainment District Restaurant**\n\nA restaurant in the Westgate Entertainment District was losing dinner reservations because customers could not find parking in the restaurant's designated lot — event-goers heading to Desert Diamond Arena were filling the lot hours before showtime. Axle Towing implemented event-night enforcement starting 3 hours before scheduled events, installed valet-friendly tow-away signage, and created a validated parking system for restaurant patrons. The restaurant reported a 35% increase in event-night covers because customers knew they could always find parking.`,
      "vehicle-relocations": `**Real-World Scenario: Thunderbird Apartment Complex Repaving**\n\nA 300-unit apartment complex in the Thunderbird neighborhood needed a full parking lot repave during Glendale's scorching July heat — the only month the contractor could schedule. Despite notices, 50+ vehicles remained in the Phase 1 work zone because many residents were traveling during summer. Axle Towing relocated all vehicles by 5 AM before temperatures rose, allowing the contractor to pour asphalt during the cooler morning hours. The relocation team handled four phases over two weeks, ensuring zero delays and saving the property an estimated $20,000 in contractor costs.`,
    },
    "apache-junction": {
      "private-property-impounds": `**Real-World Scenario: Apache Trail RV Park & Commercial Plaza**\n\nA commercial plaza on Apache Trail was losing customer parking to seasonal snowbird residents from a nearby RV park who walked to the stores daily, leaving their vehicles in the plaza lot all day. During peak snowbird season (January-March), the plaza's 8 tenants were losing an estimated 40% of their customer parking. Axle Towing — headquartered just minutes away — installed compliant signage, implemented 2-hour customer parking limits, and began daily enforcement patrols. Customer parking was restored within a week, and the plaza's tenants reported a 28% increase in winter-season revenue. Our sub-15-minute response time in AJ means problems get solved fast.`,
      "parking-enforcement": `**Real-World Scenario: Goldfield Area Tourist Parking Overflow**\n\nA group of commercial properties near the Goldfield Ghost Town tourist attraction was dealing with overflow parking from tourists visiting the attraction, the Superstition Mountain Museum, and trailheads for the Superstition Mountains hiking trails. Axle Towing implemented parking enforcement with clear tourist-directed signage, 3-hour time limits for non-patron vehicles, and weekend patrol during the busy October-April tourist season. The commercial properties reclaimed their parking, and the solution was so effective that two additional nearby property owners signed enforcement agreements.`,
      "hoa-towing": `**Real-World Scenario: Superstition Foothills HOA**\n\nThe Superstition Foothills HOA, a community of 120 homes near the base of the Superstition Mountains, was dealing with unauthorized trail-access parking. Hikers heading to the Peralta Trail and other popular trailheads were parking on community streets and in guest areas, especially during the cooler months (October-April). Axle Towing implemented weekend and holiday enforcement during hiking season, installed tow-away signage at community entrances, and created a guest permit system for legitimate visitors. Unauthorized hiker parking dropped by 90%, and the HOA board reported that the community's streets returned to the quiet, residential character that homeowners expected.`,
      "apartment-towing": `**Real-World Scenario: Apache Junction Senior Living Community**\n\nA 100-unit senior living apartment community on Ironwood Drive was dealing with unauthorized parking from visitors to a nearby medical facility. Residents — many with mobility challenges — were unable to find parking near their units. Axle Towing installed accessible, easy-to-read signage, implemented morning patrol (when the medical facility was busiest), and created a resident-priority enforcement program. Within one week, unauthorized parking was eliminated, and the community director reported that residents expressed relief and gratitude for the improved parking situation.`,
      "commercial-property-towing": `**Real-World Scenario: Apache Trail Shopping Center**\n\nA shopping center on Apache Trail — the city's main commercial corridor — was dealing with overnight vehicle storage. Inoperable vehicles were being dumped in the lot, taking up customer spaces and creating an unprofessional appearance. Because Axle Towing's yard is literally minutes away on the same road, we began nightly enforcement patrols, removed 8 abandoned vehicles in the first week, and established a regular overnight patrol presence. The shopping center's appearance improved dramatically, customer foot traffic increased, and the property owner reported renewed interest from prospective tenants for previously vacant spaces.`,
      "vehicle-relocations": `**Real-World Scenario: Apache Junction Mobile Home Community Street Repair**\n\nA 200-unit mobile home community in Apache Junction needed emergency road repairs after monsoon damage cracked several sections of community roads. With residents' vehicles lining both sides of narrow community streets, repairs were impossible without relocation. Axle Towing — located just 10 minutes away — mobilized a crew within 2 hours of the call, relocated 30 vehicles from the affected roads, and allowed the repair crew to begin work the same day. The community manager noted that having a local towing company made the emergency response possible — "any other company would have taken hours just to arrive."`,
    },
  };

  if (scenarios[city.slug] && scenarios[city.slug][service.slug]) {
    return scenarios[city.slug][service.slug];
  }
  return `**Local Scenario: ${service.title} in ${city.name}**\n\nA property in ${city.name} near ${city.landmarks[0]} was struggling with unauthorized parking. After partnering with Axle Towing, compliant signage was installed, regular patrol began, and the problem was resolved within 30 days at zero cost to the property owner.`;
}

// ─── FAQ Generator ────────────────────────────────────────────────────

function generateFAQs(city, service) {
  const baseFAQs = {
    "private-property-impounds": [
      { q: `How much does private property impound service cost in ${city.name}?`, a: `Nothing — our private property impound services are completely free for ${city.name} property owners and managers. All costs are recovered through legally mandated impound fees charged to the owners of unauthorized vehicles. We install signage, patrol your property, remove unauthorized vehicles, and provide portal access at zero cost to you.` },
      { q: `What signage is required for private property towing in ${city.name}, AZ?`, a: `Arizona statutes ${service.statute} require specific signage: signs must be at least 18x24 inches, posted at every entrance to the property, and include the towing company name, phone number, and impound lot address. ${city.localRegs} Axle Towing handles all signage installation at no cost and ensures full compliance with both state and local requirements.` },
      { q: `How quickly can Axle Towing respond to a call in ${city.name}?`, a: `Our average response time in ${city.name} is ${city.responseTime}. We dispatch from our ${city.nearestYard} yard, which is ${city.driveTime} from most locations in ${city.name}. For properties with active patrol agreements, we often identify and remove unauthorized vehicles before you even need to call.` },
      { q: `What happens to impounded vehicles from ${city.name} properties?`, a: `Impounded vehicles are transported to our secure, monitored impound yard at ${city.nearestYard.split('(')[0].trim()}. Vehicle owners are notified per Arizona statute requirements. They can retrieve their vehicle by paying the legally mandated impound and storage fees. Unclaimed vehicles proceed to title processing or public auction after the statutory holding period.` },
      { q: `Can Axle Towing handle ${city.name}'s seasonal parking challenges?`, a: `Absolutely. ${city.seasonalNote} Our team adjusts patrol schedules and enforcement intensity to match ${city.name}'s seasonal patterns, ensuring your property is protected during peak demand periods.` },
    ],
    "parking-enforcement": [
      { q: `What parking enforcement services does Axle Towing provide in ${city.name}?`, a: `We provide comprehensive parking enforcement in ${city.name} including regular patrol services, sticker and hang-tag permit systems, time-limited enforcement for customer-facing businesses, fire lane and ADA compliance monitoring, and complete ARS-compliant signage installation. All services are completely free for property owners.` },
      { q: `Can you enforce time-limited parking at my ${city.name} commercial property?`, a: `Yes. We implement digital tracking and physical monitoring to enforce time limits in your parking areas. This is especially popular with retail and restaurant properties in ${city.name} where customer turnover is critical for revenue. We can set limits from 30 minutes to 4 hours depending on your needs.` },
      { q: `How does the parking permit system work for ${city.name} properties?`, a: `We offer both sticker permits (affixed to the vehicle) and hang-tag permits (placed on the rearview mirror or dashboard). During patrol, our officers verify permit presence and validity. Vehicles without valid permits are documented, warned, or towed per your property's policy. We handle all permit design, production, and distribution.` },
      { q: `What is the response time for parking enforcement calls in ${city.name}?`, a: `Our average response time in ${city.name} is ${city.responseTime}. For properties with active patrol agreements, our officers are already on-site during scheduled patrol times and can respond to urgent requests immediately.` },
      { q: `Do you provide reports on parking enforcement activity in ${city.name}?`, a: `Yes. Every ${city.name} property with an active enforcement program gets access to our online property manager portal, where you can view real-time patrol reports, violation data, tow history, and enforcement analytics. We also provide monthly summary reports suitable for board meetings or ownership reviews.` },
    ],
    "hoa-towing": [
      { q: `Does HOA towing cost the homeowner association anything in ${city.name}?`, a: `No. Our HOA towing programs in ${city.name} are completely free for the association. All costs are recovered through legally mandated impound fees charged to the owners of vehicles that violate your community's parking rules. Signage, patrol, and reporting are all included at no charge.` },
      { q: `How does Axle Towing handle annual HOA board turnover in ${city.name}?`, a: `We proactively schedule presentations with new board members each year to re-educate them on the towing program, explain Arizona law, answer questions, and discuss any modifications they want to make. With ${city.hoaCount} HOA communities in ${city.name}, annual board turnover is our biggest growth opportunity — and we stay engaged through every transition.` },
      { q: `Can you enforce RV and trailer parking rules for ${city.name} HOAs?`, a: `Yes. We enforce rules regarding RV storage, trailer parking, boat storage, and oversized vehicles based on your community's CC&Rs and board-approved policies. This is one of the most common enforcement needs for ${city.name} HOA communities.` },
      { q: `How do you handle guest parking in ${city.name} HOA communities?`, a: `We implement guest parking systems including temporary permits, designated visitor areas, and time limits. This prevents abuse of guest spaces while still welcoming legitimate visitors. The specific program is customized to your community's CC&Rs and board preferences.` },
      { q: `What documentation does Axle Towing provide for ${city.name} HOA board meetings?`, a: `We provide detailed monthly reports showing all enforcement activity, violation trends, resolution rates, and recommendations. Reports are formatted for easy board presentation and are available through our online portal at any time.` },
    ],
    "apartment-towing": [
      { q: `Is apartment towing really free for ${city.name} property owners?`, a: `Yes. Our apartment towing programs in ${city.name} are 100% free for property owners and management companies. All costs are recovered through legally mandated impound fees charged to the owners of unauthorized vehicles. You get signage, patrol, towing, portal access, and monthly reports at no cost.` },
      { q: `How do residents in ${city.name} apartments request a tow?`, a: `Residents can call our 24/7 dispatch line at (480) 288-5526. Property managers can also request tows through our online portal or by phone at any time. For properties with active patrol agreements, our team proactively identifies and addresses violations during scheduled patrol.` },
      { q: `How quickly can you set up apartment towing service in ${city.name}?`, a: `Most ${city.name} apartment properties can be fully set up within 5-7 business days, including ARS-compliant signage installation, permit distribution (if applicable), portal access configuration, and the first scheduled patrol. We can expedite setup for urgent situations.` },
      { q: `Can you handle large apartment communities with 200+ units in ${city.name}?`, a: `Absolutely. We serve apartment communities of all sizes across ${city.name}, from small 20-unit properties to large 400+ unit complexes. Our patrol schedules and enforcement programs scale to match the size and complexity of your property. With ${city.aptCount} apartment complexes in ${city.name}, we have extensive experience at every scale.` },
      { q: `What about abandoned vehicles in ${city.name} apartment parking lots?`, a: `We identify and process abandoned vehicles following Arizona's abandoned vehicle statutes. Our team documents the vehicle, runs registration checks, posts the required notice, and after the statutory holding period, proceeds with removal and legal disposition. This service is included in our free enforcement program.` },
    ],
    "commercial-property-towing": [
      { q: `How does commercial property towing work for ${city.name} businesses?`, a: `We provide comprehensive parking enforcement for commercial properties in ${city.name} — retail centers, office parks, strip malls, restaurants, and standalone commercial buildings. Our programs include signage, patrol, permit systems, time limits, fire lane enforcement, and after-hours monitoring. Everything is free for property owners.` },
      { q: `Will towing scare away customers at my ${city.name} commercial property?`, a: `No. Our customer-first approach uses clear signage, reasonable time limits, and warning programs. We target chronic violators, overnight parkers, and non-patron vehicles — never legitimate customers. Most ${city.name} commercial property owners report increased customer traffic after enforcement begins because more spaces are available.` },
      { q: `Can you handle multi-tenant commercial properties in ${city.name}?`, a: `Yes. We coordinate with all tenants to create a unified parking policy. This includes designated employee areas, shared customer parking zones, time limits for customer-facing spaces, and after-hours enforcement. We serve multi-tenant properties throughout ${city.name} with ${city.commercialCount} commercial properties in the city.` },
      { q: `Do you enforce ADA and fire lane compliance in ${city.name}?`, a: `Yes. ADA-designated spaces and fire lanes are enforced in strict compliance with federal, state, and local regulations. This protects ${city.name} property owners from significant ADA violation fines and fire code citations, which can run thousands of dollars per incident.` },
      { q: `What about after-hours parking at ${city.name} commercial properties?`, a: `We prevent unauthorized overnight parking, vehicle storage, and unauthorized lot use outside business hours. After-hours enforcement reduces dumping, vandalism, and liability during off-hours. ${city.seasonalNote.split('.')[0]}. Our patrol schedules are adjusted accordingly.` },
    ],
    "vehicle-relocations": [
      { q: `How much do vehicle relocations cost in ${city.name}?`, a: `Our quick-turnaround pricing is approximately $1,000 for 10 vehicles relocated within 2 hours. Exact pricing depends on the number of vehicles, distance of the relocation, and complexity of the project. For large-scale projects in ${city.name}, we offer volume pricing.` },
      { q: `Do relocated vehicles go to an impound lot?`, a: `No. Vehicle relocations simply move cars to another area on your property or a nearby designated holding zone. Nobody's vehicle is impounded — they are just repositioned so maintenance or construction work can proceed on schedule.` },
      { q: `How much advance notice do residents need for vehicle relocations in ${city.name}?`, a: `We recommend 48-72 hours of advance notice. We can help you create and distribute door hangers, windshield notices, posted announcements, and email templates. Proper notification dramatically reduces the number of vehicles that need to be moved on project day.` },
      { q: `Can Axle Towing coordinate with paving contractors in ${city.name}?`, a: `Absolutely. We work directly with your paving company, seal coat crew, or general contractor to time relocations around their work schedule. In ${city.name}'s extreme heat, timing is critical — we coordinate early morning relocations during summer months so contractors can work during cooler hours.` },
      { q: `What types of maintenance projects require vehicle relocation in ${city.name}?`, a: `The most common projects include asphalt resurfacing, seal coating, line striping, speed bump installation/repair, drainage work, and construction staging. ${city.name}'s desert climate accelerates pavement deterioration, making these maintenance projects more frequent than in other regions.` },
    ],
  };

  return baseFAQs[service.slug] || [];
}

// ─── Property Types Section Generator ─────────────────────────────────

function generatePropertyTypesSection(city, service) {
  const servicePropertyMap = {
    "private-property-impounds": [
      "Apartment Complexes and Multi-Family Communities",
      "Homeowner Associations (HOAs) and Gated Communities",
      "Condominium Communities and Townhome Developments",
      "Retail Shopping Centers and Strip Malls",
      "Office Parks and Corporate Campuses",
      "Medical Facilities and Hospital Campuses",
      "Restaurants, Bars, and Entertainment Venues",
      "Industrial Parks and Warehouse Facilities",
      "Self-Storage Facilities",
      "Religious Institutions and Event Venues",
    ],
    "parking-enforcement": [
      "Parking Garages and Multi-Level Structures",
      "Private Surface Lots and Commercial Parking Areas",
      "Retail and Shopping Center Parking",
      "Office Park and Corporate Campus Parking",
      "Medical Facility and Hospital Parking",
      "Apartment and Residential Community Parking",
      "Restaurant and Nightlife District Parking",
      "Event Venue and Stadium-Adjacent Parking",
    ],
    "hoa-towing": [
      "Master-Planned HOA Communities",
      "Gated Residential Communities",
      "Townhome and Condominium HOAs",
      "Age-Restricted (55+) Communities",
      "Active Adult Communities",
      "Mixed-Use Residential Developments",
      "Community Center and Amenity Parking",
      "Guest Parking Areas and Common Spaces",
    ],
    "apartment-towing": [
      "Class A Luxury Apartment Communities",
      "Class B and C Apartment Complexes",
      "Student Housing Developments",
      "Senior Living and Assisted Living Communities",
      "Affordable Housing and Section 8 Properties",
      "Mixed-Use Apartment Buildings with Ground-Floor Retail",
      "Garden-Style Apartment Communities",
      "Mid-Rise and High-Rise Apartment Towers",
    ],
    "commercial-property-towing": [
      "Retail Shopping Centers and Power Centers",
      "Strip Malls and Neighborhood Retail",
      "Class A, B, and C Office Buildings",
      "Medical and Dental Office Plazas",
      "Industrial Parks and Flex Space",
      "Restaurant and Dining Properties",
      "Grocery Store and Pharmacy Lots",
      "Banks and Financial Institution Properties",
    ],
    "vehicle-relocations": [
      "Apartment Complex Parking Lots (Resurfacing/Seal Coat)",
      "HOA Community Streets and Parking Areas",
      "Commercial Property Parking Lots",
      "Condominium Parking Garages",
      "Office Park Lots (Construction/Renovation)",
      "Retail Center Lots (Line Striping/Speed Bumps)",
      "Industrial Facility Yards",
      "Emergency Road and Utility Repair Zones",
    ],
  };

  const types = servicePropertyMap[service.slug] || [];
  const typeList = types.map(t => `- ${t}`).join("\n");

  return `## Property Types We Serve in ${city.name}

Our ${service.title.toLowerCase()} programs in ${city.name} are designed for a wide range of property types, including:

${typeList}

No matter what type of property you manage in ${city.name}, Axle Towing has the experience and infrastructure to provide effective ${service.title.toLowerCase()} at zero cost to you. With ${city.aptCount} apartment complexes, ${city.hoaCount} HOA communities, and ${city.commercialCount} commercial properties in the city, we have served virtually every property type and size.`;
}

// ─── Arizona Law Section Generator ────────────────────────────────────

function generateArizonaLawSection(city, service) {
  const lawSections = {
    "private-property-impounds": `## Arizona Private Property Towing Law — What ${city.name} Property Owners Need to Know

Arizona law provides clear authority for property owners to have unauthorized vehicles towed from private property, but there are specific requirements that must be followed to avoid liability:

**ARS 28-874 (Vehicle Removal from Private Property):**
This statute authorizes property owners or their agents to remove unauthorized vehicles from private property. It requires proper signage, documentation, and notification procedures. Violations of the statute can expose both the property owner and the towing company to civil liability.

**ARS 9-499.05 (Towing Signs Required):**
This statute specifies the exact requirements for tow-away signage on private property:
- Signs must be at least **18 inches by 24 inches**
- Signs must be posted at **every entrance** to the property
- Signs must include the **towing company name**, **phone number**, and **impound yard address**
- Signs must state that **unauthorized vehicles will be towed at the owner's expense**
- Signs must be **clearly visible** and **maintained in good condition**

**Local ${city.name} Requirements:**
${city.localRegs}

Axle Towing handles all compliance requirements on your behalf. We design, produce, and install signage that meets every state and local requirement, and we maintain documentation that protects you in case of any dispute. Our compliance record in ${city.name} is spotless.`,

    "parking-enforcement": `## Arizona Parking Enforcement Law — What ${city.name} Property Owners Need to Know

Parking enforcement on private property in Arizona is governed by a combination of state statutes and local ordinances. Understanding these requirements is essential for any ${city.name} property owner considering a professional enforcement program:

**ARS 9-499.05 (Towing Signs Required):**
Private property parking enforcement requires proper signage at every entrance. Signs must be at least 18x24 inches and include the towing company name, phone number, and impound yard address. Time-limited parking enforcement requires signs that clearly state the time limit and consequences for violations.

**Permit System Enforcement:**
Arizona law supports permit-based parking enforcement on private property. Sticker permits, hang-tag permits, and validation systems are all legally enforceable when backed by proper signage. Our permit programs in ${city.name} are designed to meet all legal requirements while being easy for property managers and tenants to use.

**Local ${city.name} Requirements:**
${city.localRegs}

Axle Towing's legal compliance team ensures every aspect of your ${city.name} parking enforcement program meets state and local requirements.`,

    "hoa-towing": `## Arizona HOA Towing Law — What ${city.name} Board Members Need to Know

HOA towing in Arizona involves a unique intersection of state towing law, HOA governance statutes, and community CC&Rs. Understanding all three is critical for ${city.name} HOA boards:

**ARS 33-1803 (HOA Powers and Authority):**
This statute grants HOAs the authority to enforce parking rules established in the community's CC&Rs. The board must follow proper procedures — including providing notice and opportunity for compliance — before escalating to towing enforcement.

**ARS 9-499.05 (Towing Signs Required):**
All tow-away signage must comply with state requirements: 18x24 inch minimum size, posted at every entrance, including towing company name, phone, and impound address. This applies to HOA communities just as it does to commercial properties.

**CC&R Alignment:**
Your towing program must align with your community's CC&Rs. If your CC&Rs do not specifically address parking enforcement and towing, the board may need to amend them before implementing a program. Axle Towing reviews your CC&Rs as part of our onboarding process and advises on any modifications needed.

**Local ${city.name} Requirements:**
${city.localRegs}

With ${city.hoaCount} HOA communities in ${city.name}, Axle Towing has extensive experience navigating the legal landscape for HOA towing programs.`,

    "apartment-towing": `## Arizona Apartment Towing Law — What ${city.name} Property Managers Need to Know

Apartment towing in Arizona requires compliance with state statutes and a clear understanding of tenant rights. ${city.name} property managers should be aware of:

**ARS 9-499.05 (Towing Signs Required):**
Signage is the foundation of legal apartment towing. Signs must be posted at every entrance and throughout the property, meeting all size, content, and visibility requirements. For apartment communities, this means signage at pedestrian entrances, parking lot entrances, and within parking structures.

**Tenant Notification Requirements:**
While not required by statute for properly signed properties, best practice in ${city.name} is to include parking enforcement information in lease agreements and move-in packets. This creates an additional layer of legal protection and reduces complaints.

**Assigned Space vs. Open Parking:**
Arizona law treats assigned and open parking differently. Assigned space enforcement requires a clear system for identifying authorized vehicles (stickers, permits, or vehicle registration). Our programs in ${city.name} include both assigned space and open parking enforcement options.

**Local ${city.name} Requirements:**
${city.localRegs}

With ${city.aptCount} apartment complexes in ${city.name}, Axle Towing has deep experience designing apartment towing programs that balance effective enforcement with resident satisfaction.`,

    "commercial-property-towing": `## Arizona Commercial Property Towing Law — What ${city.name} Business Owners Need to Know

Commercial property towing in Arizona is a powerful tool for protecting your tenants' revenue and your property's professional image. Here is what ${city.name} commercial property owners need to know:

**ARS 9-499.05 and ARS 28-874:**
These statutes authorize the removal of unauthorized vehicles from commercial private property with proper signage. Signs must be at least 18x24 inches, posted at every entrance, and include full towing company information. For commercial properties, signage should also clearly indicate any time limits or restrictions.

**ADA and Fire Lane Compliance:**
Commercial properties have additional enforcement obligations under federal ADA law and local fire codes. Unauthorized use of handicap spaces carries state and federal penalties, and blocked fire lanes create serious liability. Our enforcement programs in ${city.name} include proactive ADA and fire lane monitoring.

**Customer-First Enforcement:**
The goal of commercial property towing is not to tow customers — it is to ensure customers always have parking available. Our ${city.name} programs use clear signage, reasonable time limits, and warning-first approaches to protect legitimate customers while removing chronic violators.

**Local ${city.name} Requirements:**
${city.localRegs}`,

    "vehicle-relocations": `## Arizona Vehicle Relocation Law — What ${city.name} Property Managers Need to Know

Vehicle relocations for maintenance and construction projects have different legal requirements than impound towing:

**Key Legal Distinction:**
Vehicle relocations move vehicles to another location on the same property or a nearby designated area — they do not impound vehicles. This distinction is important because relocation does not trigger the same impound fee and notification requirements as a standard private property tow.

**Advance Notice Best Practices:**
While Arizona law does not specify a minimum notice period for on-site vehicle relocations, best practice in ${city.name} is to provide 48-72 hours of written notice. Proper notice dramatically reduces the number of vehicles that need to be moved on project day and reduces potential complaints or disputes.

**Property Owner Authorization:**
Vehicle relocations require written authorization from the property owner or authorized representative. Axle Towing maintains all authorization documentation and can provide copies for your records.

**Insurance and Liability:**
All vehicles relocated by Axle Towing are fully covered by our commercial insurance during the move. This protects ${city.name} property owners from any liability related to the relocation process.

**Local ${city.name} Requirements:**
${city.localRegs}`,
  };

  return lawSections[service.slug] || "";
}

// ─── How It Works Section Generator ───────────────────────────────────

function generateHowItWorksSection(city, service) {
  const steps = {
    "private-property-impounds": [
      { title: "Free Property Assessment", desc: `Our team visits your ${city.name} property, surveys the parking areas, identifies problem zones, and discusses your specific enforcement needs and goals.` },
      { title: "ARS-Compliant Signage Installation", desc: `We design, produce, and install tow-away signage at every entrance and throughout your property — fully compliant with ${service.statute} and ${city.name} local requirements. All at zero cost.` },
      { title: "Custom Patrol Schedule", desc: `We create a patrol schedule tailored to your property's peak violation times. For properties near ${city.landmarks[0]} or other high-traffic ${city.name} landmarks, we may recommend enhanced patrol during peak hours.` },
      { title: "24/7 Enforcement Begins", desc: `Our trained patrol officers begin monitoring your property and removing unauthorized vehicles. Every tow is documented with timestamped photos, GPS coordinates, and a detailed report.` },
      { title: "Portal Access and Reporting", desc: `You receive full access to our online property manager portal to request tows, view enforcement activity, pull reports, and manage your parking program. Monthly summary reports are provided for board meetings or ownership reviews.` },
    ],
    "parking-enforcement": [
      { title: "Property Survey and Needs Analysis", desc: `We assess your ${city.name} property's parking layout, traffic patterns, and enforcement challenges to design the optimal program.` },
      { title: "Custom Program Design", desc: `Based on the assessment, we design a permit system, patrol schedule, time limits, and enforcement policies tailored to your property. Programs for ${city.name} properties account for local traffic patterns and seasonal demand.` },
      { title: "Signage and Permit Setup", desc: `ARS-compliant signage is installed and permit systems (stickers, hang-tags, or validation) are configured and distributed — all at zero cost to you.` },
      { title: "Active Patrol and Enforcement", desc: `Our trained officers patrol your property on the agreed schedule, verify permits, document violations, and enforce your parking policies consistently and professionally.` },
      { title: "Ongoing Optimization", desc: `Through portal analytics and monthly reporting, we identify trends and adjust your ${city.name} enforcement program to stay effective as conditions change.` },
    ],
    "hoa-towing": [
      { title: "Board Presentation", desc: `We present our zero-cost HOA towing program to your ${city.name} board, explain Arizona towing law, and answer all questions. We provide presentation materials you can share with homeowners.` },
      { title: "CC&R Review", desc: `We review your community's CC&Rs and parking rules to ensure the enforcement program aligns perfectly with your governing documents and ${city.name} local requirements.` },
      { title: "Signage Installation", desc: `ARS-compliant signage is installed at community entrances, guest parking areas, common spaces, and any other areas the board designates — all at zero cost to the HOA.` },
      { title: "Patrol and Warning Phase", desc: `We begin patrol with a warning-first approach — educating homeowners about the new enforcement before escalating to towing for repeat violations.` },
      { title: "Ongoing Enforcement and Annual Board Renewal", desc: `Regular enforcement continues with monthly reporting for board meetings. Each year, we present to new board members to ensure continuity and address any program modifications.` },
    ],
    "apartment-towing": [
      { title: "Property Assessment", desc: `We survey your ${city.name} apartment complex, map parking areas (assigned, visitor, fire lanes, ADA), and identify problem zones and peak violation times.` },
      { title: "Program Design and Portal Setup", desc: `We design your enforcement program including permit systems, patrol schedules, and violation procedures. Your property management team receives full portal access.` },
      { title: "Signage and Permit Distribution", desc: `ARS-compliant signage is installed throughout the property. If using permits, stickers or hang-tags are produced and distributed to residents — all free.` },
      { title: "Resident Communication", desc: `We help you draft resident communications explaining the new enforcement program, including FAQ sheets that reduce complaints and confusion.` },
      { title: "Enforcement Launch", desc: `Regular patrol begins with consistent, fair enforcement. Monthly reports track violations, trends, and program effectiveness for your records.` },
    ],
    "commercial-property-towing": [
      { title: "Property and Tenant Survey", desc: `We assess your ${city.name} commercial property and meet with tenants to understand parking patterns, customer expectations, and employee needs.` },
      { title: "Unified Parking Policy Design", desc: `We create a parking enforcement plan that balances the needs of all tenants — designated employee areas, customer time limits, visitor policies, and after-hours rules.` },
      { title: "Signage and Implementation", desc: `ARS-compliant signage is installed at all entrances and throughout the lot. Employee permits are distributed, and customer parking policies are clearly communicated.` },
      { title: "Active Enforcement", desc: `Our patrol teams monitor your property, verify permits, enforce time limits, and handle ADA and fire lane compliance — professionally and consistently.` },
      { title: "Quarterly Review", desc: `We conduct quarterly reviews of your ${city.name} program, analyzing enforcement data and adjusting the program as your tenant mix or property needs evolve.` },
    ],
    "vehicle-relocations": [
      { title: "Project Scheduling", desc: `Contact us with your ${city.name} project timeline, number of vehicles to relocate, and the areas that need to be cleared. We coordinate directly with your contractor.` },
      { title: "Advance Resident Notification", desc: `We help you create and distribute notices — door hangers, windshield notices, posted announcements — giving residents 48-72 hours of advance warning.` },
      { title: "Day-Of Mobilization", desc: `Our crew arrives on schedule (often early morning to beat ${city.name}'s extreme heat) and begins relocating all remaining vehicles to designated overflow areas.` },
      { title: "Contractor Green Light", desc: `Once all vehicles are cleared, your contractors have full, unobstructed access to begin work on time. We remain on-call throughout the project for additional moves if needed.` },
      { title: "Post-Project Return", desc: `After work is complete, we can assist with returning vehicles to their original positions or notifying residents that the area is accessible again.` },
    ],
  };

  const stepList = (steps[service.slug] || []).map((s, i) => `**Step ${i + 1}: ${s.title}**\n${s.desc}`).join("\n\n");

  return `## How ${service.title} Works in ${city.name}: Step-by-Step

Getting started with Axle Towing's ${service.title.toLowerCase()} program in ${city.name} is straightforward:

${stepList}

The entire setup process typically takes 5-7 business days from initial contact to active enforcement. For urgent situations in ${city.name}, we can expedite setup.`;
}

// ─── Main Content Generator ───────────────────────────────────────────

function generatePage(city, service) {
  const fm = generateFrontmatter(city, service);
  const intro = generateIntro(city, service);
  const scenario = generateScenario(city, service);
  const faqs = generateFAQs(city, service);

  const neighborhoodList = city.neighborhoods.map(n => `- ${n}`).join("\n");
  const zipList = city.zipCodes.join(", ");
  const landmarkList = city.landmarks.map(l => `- ${l}`).join("\n");
  const competitorList = city.competitors.map(c => `- ${c}`).join("\n");
  const faqSection = faqs.map(f => `### ${f.q}\n\n${f.a}`).join("\n\n");

  // Property types section varies by service
  const propertyTypesSection = generatePropertyTypesSection(city, service);
  // Arizona law section
  const arizonaLawSection = generateArizonaLawSection(city, service);
  // How it works
  const howItWorksSection = generateHowItWorksSection(city, service);

  const content = `${fm}

# ${service.title} in ${city.name}, Arizona — Your Complete 2026 Guide

${intro}

---

## Why ${city.name} Property Owners Choose Axle Towing for ${service.title}

### Local Expertise and Rapid Response

Axle Towing & Impound is not a faceless national chain — we are a Phoenix metro area company with deep roots in the communities we serve. Our nearest yard to ${city.name} is located at **${city.nearestYard}**, providing response times of **${city.responseTime}** to any location in the city. We know ${city.name}'s neighborhoods, traffic patterns, and seasonal rhythms, and we use that knowledge to deliver enforcement that actually works.

### Zero Cost — Guaranteed

Every aspect of our ${service.title.toLowerCase()} program in ${city.name} is completely free for property owners:

- **ARS-compliant signage installation** — designed, produced, and installed at every entrance
- **Scheduled patrol services** — customized to your property's peak violation times
- **24/7 vehicle removal** — our dispatch center operates around the clock, 365 days a year
- **Secure impound storage** — at our professionally managed facility
- **Online property manager portal** — request tows, view reports, and track enforcement activity
- **Monthly reporting** — detailed enforcement data for board meetings or ownership reviews

All costs are recovered through legally mandated impound fees charged to the owners of unauthorized vehicles. You will never receive a bill from Axle Towing.

### Full Legal Compliance

Every tow we perform in ${city.name} is fully compliant with Arizona law. Our signage meets all requirements of **${service.statute}**, and our documentation — timestamped photos, GPS coordinates, and detailed reports — protects your property in case of any dispute. ${city.localRegs}

---

## ${city.name} Neighborhoods We Serve

Axle Towing provides ${service.title.toLowerCase()} services across every neighborhood in ${city.name}, including:

${neighborhoodList}

No matter where your property is located in ${city.name}, our team can reach you within **${city.responseTime}**.

---

## ${city.name} Zip Codes Covered

We serve all ${city.name} zip codes: **${zipList}**

If your property falls within any of these zip codes, you are eligible for our free ${service.title.toLowerCase()} program.

---

## ${city.name} by the Numbers: Why ${service.title} Matters Here

| Statistic | Value |
|-----------|-------|
| Population | ${city.population} |
| HOA Communities | ${city.hoaCount} |
| Apartment Complexes | ${city.aptCount} |
| Commercial Properties | ${city.commercialCount} |
| Average Response Time | ${city.responseTime} |
| Nearest Axle Towing Yard | ${city.nearestYard.split('(')[0].trim()} |

These numbers tell a clear story: ${city.name} has a massive and growing need for professional ${service.title.toLowerCase()} services. With ${city.hoaCount} HOAs, ${city.aptCount} apartment complexes, and ${city.commercialCount} commercial properties, the pool of properties that benefit from professional enforcement is enormous — and growing as the city continues to expand.

---

## Local ${city.name} Landmarks and Key Areas

Our patrol teams are familiar with every major area of ${city.name}, including properties near:

${landmarkList}

Properties near these high-traffic landmarks often experience the most severe unauthorized parking problems, and our enforcement programs are specifically calibrated to address the unique challenges each area presents.

---

## Seasonal Parking Challenges in ${city.name}

${city.seasonalNote}

Our team adjusts patrol schedules and enforcement intensity throughout the year to match ${city.name}'s seasonal patterns. Whether it is winter snowbird season, spring training baseball, back-to-school move-in weekends, or holiday shopping rushes, Axle Towing ensures your property is protected when parking demand peaks.

---

## ${scenario}

---

## Driving Directions to Our Nearest Yard from ${city.name}

${city.directions}

**Google Maps:** ${city.mapDesc}

Our dispatch team ensures that the closest available driver responds to your call, regardless of which yard they are based at. ${city.name} is well within our primary service area, and we guarantee response times of **${city.responseTime}** or better.

---

${propertyTypesSection}

---

${arizonaLawSection}

---

${howItWorksSection}

---

## ${city.name} Towing Companies: How Axle Compares

${city.name} has several towing companies, including:

${competitorList}

What sets Axle Towing apart is our **zero-cost model for property owners**, our **24/7 dispatch availability**, our **online property manager portal**, and our **deep local expertise** in ${city.name}'s neighborhoods and regulations. While other towing companies may charge property owners directly or offer limited services, Axle provides a complete, free enforcement solution that handles everything from signage to reporting.

---

## Frequently Asked Questions: ${service.title} in ${city.name}

${faqSection}

---

## Get Started with ${service.title} in ${city.name} Today

If you manage a property in ${city.name} — whether it is an apartment complex, HOA community, commercial property, or any other private parking area — Axle Towing & Impound can solve your parking enforcement challenges at zero cost to you.

**Call us today at [(480) 288-5526](tel:4802885526) to schedule a free property assessment and start protecting your ${city.name} property.**

Our team will visit your property, assess your parking challenges, and design a custom ${service.title.toLowerCase()} program tailored to your specific needs. Signage installation, patrol setup, and portal access can be completed within 5-7 business days.

**Axle Towing & Impound** — Professional ${service.title} in ${city.name}, AZ since 2021.

*Serving all of ${city.name} from our ${city.nearestYard.split('(')[0].trim()} location. Available 24/7 at (480) 288-5526.*
`;

  return content;
}

// ─── Main Execution ───────────────────────────────────────────────────

function main() {
  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  let count = 0;
  const cityKeys = Object.keys(CITIES);
  const serviceKeys = Object.keys(SERVICES);

  for (const serviceKey of serviceKeys) {
    for (const cityKey of cityKeys) {
      const city = CITIES[cityKey];
      const service = SERVICES[serviceKey];
      const filename = `${service.slug}-${city.slug}.mdx`;
      const filepath = path.join(OUTPUT_DIR, filename);

      const content = generatePage(city, service);
      fs.writeFileSync(filepath, content, "utf8");
      count++;

      const wordCount = content.split(/\s+/).length;
      console.log(`[${count}/48] Generated: ${filename} (${wordCount} words)`);
    }
  }

  console.log(`\nDone! Generated ${count} city x service pages in ${OUTPUT_DIR}`);
}

main();
