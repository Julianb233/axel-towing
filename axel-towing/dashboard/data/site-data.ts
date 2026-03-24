export const currentStats = {
  organicKeywords: 37,
  monthlyTraffic: 529,
  authorityScore: 17,
  totalPages: 163,
  blogArticles: 62,
  locationPages: 38,
  servicePages: 7,
  utilityPages: 15,
  pageSpeed: 97,
  seoScore: 100,
  backlinks: 164,
  referringDomains: 102,
  trafficValue: 698,
};

export const goals = {
  month6: {
    keywords: 200,
    traffic: 3000,
    authority: 30,
  },
  month12: {
    keywords: 500,
    traffic: 10000,
    authority: 40,
  },
};

export const pageSpeedComparison = {
  old: {
    performance: 84,
    accessibility: 86,
    bestPractices: 100,
    seo: 85,
  },
  new: {
    performance: 97,
    accessibility: 91,
    bestPractices: 100,
    seo: 100,
  },
};

export const blogCategories = [
  { category: "Arizona Towing Laws & Regulations", count: 11 },
  { category: "HOA Parking & Towing", count: 10 },
  { category: "Tenant/Vehicle Owner Rights", count: 8 },
  { category: "Property Manager Guides", count: 8 },
  { category: "Specialty Property Types", count: 7 },
  { category: "Fire Lane & Safety", count: 5 },
  { category: "Other Topics", count: 13 },
];

export const locationCities = [
  "Phoenix", "Scottsdale", "Mesa", "Glendale", "Gilbert", "Chandler", "Tempe", "Apache Junction",
];

export const locationNeighborhoods = [
  "Ahwatukee", "Arcadia", "Desert Ridge", "Downtown Phoenix", "North Phoenix",
  "DC Ranch", "North Scottsdale", "Old Town Scottsdale", "Red Mountain",
  "Superstition Springs", "Ocotillo", "San Tan Village", "Westgate", "ASU Area",
  "South Tempe", "Maryvale", "Laveen", "Paradise Valley", "Camelback East",
  "Deer Valley", "Gold Canyon", "Queen Creek", "San Tan Valley",
  "East Mesa", "Dobson Ranch", "Arrowhead Ranch", "Peoria",
];

export const servicePages = [
  "Private Property Impounds",
  "Parking Enforcement",
  "HOA Towing",
  "Apartment Towing",
  "Commercial Property Towing",
  "Vehicle Relocations",
  "Emergency Towing",
];

export const deliverables = [
  { item: "Web pages built and deployed", count: 163, icon: "globe" },
  { item: "SEO blog articles published", count: 62, icon: "document" },
  { item: "Location pages covering Phoenix metro", count: 38, icon: "map" },
  { item: "Service pages with schema markup", count: 7, icon: "cog" },
  { item: "Strategy documents created", count: 12, icon: "clipboard" },
  { item: "Competitor analyses completed", count: 5, icon: "chart" },
  { item: "CRM nurture campaigns designed", count: 4, icon: "mail" },
  { item: "Communication workflows built", count: 9, icon: "chat" },
  { item: "Partner referral segments identified", count: 5, icon: "users" },
  { item: "Hero background video added", count: 1, icon: "video" },
  { item: "Spanish language pages", count: 5, icon: "globe" },
];

export const actionItems: Array<{
  id: number;
  title: string;
  priority: "urgent" | "high" | "medium" | "low";
  status: "pending" | "in-progress" | "complete";
  description: string;
  instructions: string;
}> = [
  {
    id: 1,
    title: "Point axletowing.com DNS to Railway",
    priority: "urgent" as const,
    status: "pending" as const,
    description: "This is the single most important action item. Until DNS is pointed to Railway, the 120 pages we built cannot be indexed by Google. Every day of delay is lost ranking opportunity.",
    instructions: "Step 1: Log into your domain registrar (GoDaddy, Namecheap, or wherever you bought axletowing.com). Step 2: Navigate to DNS settings (usually under 'Domain Management' or 'DNS Zone'). Step 3: Find the existing A record for '@' or 'axletowing.com'. Step 4: Add a CNAME record pointing to the Railway-provided domain (shown in Railway dashboard under Settings > Domains). Step 5: If there's a CNAME record for 'www', point it to the same Railway domain. Step 6: Save changes. DNS can take up to 48 hours to propagate, but usually works within 1-2 hours. If you're unsure which registrar you used, check your email for domain purchase receipts or call us at 480-288-5526 and we'll walk you through it screen-by-screen.",
  },
  {
    id: 2,
    title: "Share Google Search Console access",
    priority: "high" as const,
    status: "pending" as const,
    description: "We need GSC access to submit your sitemap, monitor indexing of all 120 pages, and track keyword rankings directly from Google.",
    instructions: "Step 1: Open your browser and go to search.google.com/search-console. Step 2: Log in with the Google account that owns axletowing.com (likely axletowing@gmail.com). Step 3: If axletowing.com isn't listed, click 'Add property' and enter axletowing.com. Step 4: Once on your property, click the gear icon (Settings) in the left sidebar. Step 5: Click 'Users and permissions'. Step 6: Click 'Add user'. Step 7: Enter julian@aiacrobatics.com. Step 8: Set permission level to 'Full' (this lets us submit sitemaps and view all data). Step 9: Click 'Add'. You'll see a confirmation that the user was added. That's it -- we'll handle everything from there.",
  },
  {
    id: 3,
    title: "Share Google Analytics access",
    priority: "high" as const,
    status: "pending" as const,
    description: "GA4 access lets us track website visitors, lead form submissions, phone call clicks, and measure ROI of our SEO work.",
    instructions: "Step 1: Go to analytics.google.com and sign in with the Google account that has GA4 access. Step 2: In the bottom-left corner, click the gear icon labeled 'Admin'. Step 3: In the Account column (left side), click 'Account Access Management'. Step 4: Click the blue '+' button in the top-right, then 'Add users'. Step 5: Enter julian@aiacrobatics.com. Step 6: Check the 'Editor' role (this lets us view data and configure tracking). Step 7: Check 'Notify new users by email' so we get confirmation. Step 8: Click 'Add'. If you don't see a GA4 property for axletowing.com, you may need to create one first -- just let us know and we'll set it up together.",
  },
  {
    id: 4,
    title: "Provide TowBook API credentials",
    priority: "medium" as const,
    status: "pending" as const,
    description: "TowBook API access allows us to build the vehicle lookup integration on the new site, letting customers check their vehicle status online instead of calling.",
    instructions: "Step 1: Log into your TowBook account at app.towbook.com. Step 2: Go to Settings (gear icon, usually top-right). Step 3: Look for 'API Access' or 'Integrations' in the settings menu. Step 4: If you see an option to generate an API key, click it and copy the key. Step 5: If there's no API option visible, contact TowBook support: call (918) 615-0505 or email support@towbook.com. Step 6: Tell them: 'I need API access credentials so my web developer can build a vehicle lookup tool on our website.' Step 7: They'll provide an API key, API secret, and endpoint URL. Step 8: Forward all of that info to julian@aiacrobatics.com. We'll use this to build a vehicle lookup page where customers can check their tow status online instead of calling.",
  },
  {
    id: 5,
    title: "Confirm full city/service area list",
    priority: "medium" as const,
    status: "pending" as const,
    description: "We've built 35 location pages covering the Phoenix metro area. We need to confirm these are all the cities you actively serve so we don't miss any markets.",
    instructions: "We've built location pages for these cities: Phoenix, Scottsdale, Mesa, Glendale, Gilbert, Chandler, Tempe, and Apache Junction -- plus 27 neighborhoods including Ahwatukee, Arcadia, Desert Ridge, Downtown Phoenix, DC Ranch, and more. Step 1: Look at the full list on the 'Deliverables' page of this portal. Step 2: Think about which cities and neighborhoods you actively service or want to service. Step 3: Let us know if any are missing -- for example, do you serve Peoria, Surprise, Avondale, Goodyear, Buckeye, or Fountain Hills? Step 4: Also let us know if any listed cities should be removed (places you don't actually service). Step 5: Reply via text, email, or just tell us on our next call. We can build a new location page in about 2 hours once confirmed.",
  },
  {
    id: 6,
    title: "Share Google Business Profile access",
    priority: "high" as const,
    status: "pending" as const,
    description: "GBP optimization is critical for local SEO. We need to update your listing, add service categories, post weekly updates, and optimize for Map Pack rankings.",
    instructions: "Step 1: Go to business.google.com and sign in with the Google account that manages your listing (likely axletowing@gmail.com). Step 2: Click on your business name 'Axle Towing & Impound' to open the profile dashboard. Step 3: In the left sidebar, scroll down and click 'People and access' (or 'Users' in older versions). Step 4: Click 'Add' (the blue plus button). Step 5: Enter julian@aiacrobatics.com. Step 6: Set the role to 'Manager' (this lets us post updates, respond to reviews, and optimize your listing, but you remain the Owner). Step 7: Click 'Invite'. We'll accept the invite and start optimizing your profile immediately -- adding service categories, posting weekly updates, uploading photos, and seeding Q&A to boost your Map Pack ranking.",
  },
  {
    id: 7,
    title: "Provide photo/video assets",
    priority: "low" as const,
    status: "pending" as const,
    description: "Professional photos of your trucks, team, and yards make the website more authentic and trustworthy. Stock photos are a trust-killer for local service businesses.",
    instructions: "What we need: photos and videos of your trucks (flatbeds, wreckers, any specialty equipment), your team in uniform or at work, your yard/impound lot facility, trucks in action (loading vehicles, at job sites), and any behind-the-scenes shots. How to send: Option A: Take photos/videos on your phone and text them to Julian at (619) 509-0699. Option B: Email them to julian@aiacrobatics.com (for large files, use Google Drive or Dropbox and share the link). Option C: If you have a Google Photos album, share it with julian@aiacrobatics.com. Tips: Natural lighting works best. Landscape (horizontal) orientation is preferred for website hero images. Show your branding (Axle logo on trucks, uniforms). Action shots are better than staged -- a truck mid-load is more compelling than a truck parked. Even phone quality is fine; we'll optimize for web.",
  },
  {
    id: 8,
    title: "Review email templates for nurture sequences",
    priority: "low" as const,
    status: "pending" as const,
    description: "We've designed 4 automated email campaigns (new lead nurture, re-engagement, post-onboarding, referral partner). We need your approval on the messaging before activating.",
    instructions: "Step 1: Go to the 'GHL Approvals' page in this portal (click it in the left sidebar). Step 2: You'll see all 40+ email and SMS templates organized by workflow category: New Lead Nurture, Re-Engagement, Post-Onboarding, AI Receptionist, and more. Step 3: Click on any row to expand and read the FULL email body or SMS text. Step 4: For each message, click 'Approve' if it looks good, or click 'Request Changes' and type what you'd like different. Step 5: Once all messages are approved, we'll build them into GoHighLevel with professional email formatting, automated triggers, and proper scheduling. Nothing gets sent until you've approved it here.",
  },
];

export const suggestions = [
  { id: 1, title: "Point axletowing.com DNS to Railway", description: "CRITICAL -- This unlocks all SEO value. Until DNS is migrated, none of the 120 pages we built can be indexed by Google. Every day of delay is a lost ranking opportunity.", priority: "critical" as const },
  { id: 2, title: "Build tow cost calculator", description: "Competitor Freeway Towing drives 1,300 visits/month from their towing estimate calculator. An interactive tool would capture high-intent traffic and earn backlinks.", priority: "high" as const },
  { id: 3, title: "Target 'towing chandler az'", description: "480 searches/month with very low competition. We have a Chandler location page ready -- once indexed, this is a quick win for page 1 ranking.", priority: "high" as const },
  { id: 4, title: "Optimize homepage for 'phoenix towing'", description: "Currently at position 23 with 720 monthly searches. With targeted content optimization and backlink building, this can reach page 1 within 60 days.", priority: "high" as const },
  { id: 5, title: "Create TowBook vehicle lookup integration", description: "Let customers check their vehicle status online instead of calling. Reduces call volume and improves customer experience. Also creates a unique page that earns backlinks.", priority: "medium" as const },
  { id: 6, title: "Set up Google Business Profile optimization", description: "GBP drives the Map Pack (the 3-pack of local results). Weekly posts, photo uploads, Q&A seeding, and review generation can dramatically increase local visibility.", priority: "high" as const },
  { id: 7, title: "Launch HOA board member outreach campaign", description: "HOA board members rotate annually -- new boards mean new decisions about towing providers. A targeted outreach campaign during election season can capture these accounts.", priority: "medium" as const },
];
