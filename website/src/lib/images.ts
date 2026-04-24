export const IMAGES = {
  hero: {
    truck: "/images/optimized/axle-towing-hero-tow-truck-phoenix-az.webp",
    parkingLot: "/images/optimized/axle-towing-hero-parking-lot-phoenix-az.webp",
  },
  services: {
    privateImpound: "/images/service-private-impound.jpg",
    parkingEnforcement: "/images/service-parking-enforcement.jpg",
    vehicleRelocation: "/images/service-vehicle-relocation.jpg",
    hoaTowing: "/images/service-hoa-towing.jpg",
    apartmentTowing: "/images/service-apartment-towing.jpg",
    commercialTowing: "/images/service-commercial-towing.jpg",
  },
  about: {
    team: "/images/optimized/axle-towing-about-team-phoenix-az.webp",
    office: "/images/about-office.jpg",
  },
  contact: {
    phoenix: "/images/optimized/axle-towing-contact-phoenix-arizona.webp",
  },
  blog: {
    fireLane: "/images/optimized/axle-towing-blog-fire-lane-enforcement-phoenix-az.webp",
    parkingSign: "/images/optimized/axle-towing-blog-parking-sign-compliance-phoenix-az.webp",
    towTruckNight: "/images/blog-tow-truck-night.jpg",
  },
  testimonial: {
    background: "/images/testimonial-bg.jpg",
  },
  arizona: {
    hoaEntrance: "/images/arizona-hoa-entrance.jpg",
    apartmentParking: "/images/arizona-apartment-parking.jpg",
    fireLane: "/images/arizona-fire-lane.jpg",
    commercialParking: "/images/arizona-commercial-parking.jpg",
    skylinePanoramic: "/images/optimized/axle-towing-arizona-skyline-panoramic-phoenix-az.webp",
    towOperator: "/images/arizona-tow-operator.jpg",
    mesaResidential: "/images/arizona-mesa-residential.jpg",
    impoundLot: "/images/arizona-impound-lot.jpg",
  },
} as const;

export type ImageKey = keyof typeof IMAGES;
