/** Central brand constants for JLuca Landscaping */
export const BRAND = {
  name: "JLuca Landscaping",
  shortName: "JLuca",
  tagline: "Your Property. Our Pride.",
  location: "Cliffwood, New Jersey",
  locationShort: "Cliffwood, NJ",
  phone: "732-597-6659",
  phoneDisplay: "(732) 597-6659",
  phoneTel: "+17325976659",
  email: "hello@jlucalandscaping.com",
  siteUrl: "https://john-johns-landscaping.vercel.app",
  /**
   * Transparent logo assets (no white circle / fill).
   * Query string busts CDN/browser cache after logo swaps.
   */
  logoPath: "/logo.png?v=3",
  logoEmailPath: "/logo-email.png?v=3",
  logoMarkPath: "/logo-mark.png?v=3",
} as const;
