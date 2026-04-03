export const IMAGES = {
  hero: {
    truck: "/images/hero-tow-truck.jpg",
    parkingLot: "/images/hero-parking-lot.jpg",
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
    team: "/images/about-team.jpg",
    office: "/images/about-office.jpg",
  },
  contact: {
    phoenix: "/images/contact-phoenix.jpg",
  },
  blog: {
    fireLane: "/images/blog-fire-lane.jpg",
    parkingSign: "/images/blog-parking-sign.jpg",
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
    skylinePanoramic: "/images/arizona-skyline-panoramic.jpg",
    towOperator: "/images/arizona-tow-operator.jpg",
    mesaResidential: "/images/arizona-mesa-residential.jpg",
    impoundLot: "/images/arizona-impound-lot.jpg",
  },
} as const;

export type ImageKey = keyof typeof IMAGES;
