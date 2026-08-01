/** Central brand + local SEO constants for JLuca Landscaping */
export const BRAND = {
  name: "JLuca Landscaping",
  shortName: "JLuca",
  legalName: "JLuca Landscaping",
  tagline: "Your Property. Our Pride.",
  description:
    "Local landscaping and lawn care in Cliffwood, NJ and surrounding Monmouth County. Bi-weekly and every-10-day property maintenance.",
  // NAP — keep consistent everywhere (GBP should match)
  location: "Cliffwood, New Jersey",
  locationShort: "Cliffwood, NJ",
  addressLocality: "Cliffwood",
  addressRegion: "NJ",
  addressCountry: "US",
  postalCode: "07721",
  // Service area business — street optional; locality required for schema
  streetAddress: "Cliffwood, NJ",
  phone: "732-597-6659",
  phoneDisplay: "(732) 597-6659",
  phoneTel: "+17325976659",
  email: "hello@jlucalandscaping.com",
  siteUrl: "https://jlucalandscaping.com",
  // Cliffwood / Aberdeen area approx.
  geo: {
    latitude: 40.4343,
    longitude: -74.2351,
  },
  priceRange: "$$",
  areaServedLabel: "Cliffwood, Aberdeen, Matawan, Keyport, Hazlet & Monmouth County, NJ",
  logoPath: "/logo.png?v=4",
  logoNavPath: "/logo-nav.png?v=4",
  logoEmailPath: "/logo-email.png",
  logoMarkPath: "/logo-mark.png?v=4",
  ogImagePath: "/logo.png?v=4",
} as const;

export const PRIMARY_KEYWORDS = [
  "landscaping Cliffwood NJ",
  "lawn care Cliffwood",
  "lawn maintenance Cliffwood NJ",
  "landscaping Monmouth County",
  "bi-weekly lawn care NJ",
  "landscaping near me",
] as const;
