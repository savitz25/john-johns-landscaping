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
  /** Canonical public site (custom domain) */
  siteUrl: "https://jlucalandscaping.com",
  /**
   * Transparent stacked logo (mark + wordmark, tight lockup).
   * logo-nav is a crisp 2x asset sized for the header.
   * Query string busts CDN/browser cache after logo swaps.
   */
  logoPath: "/logo.png?v=4",
  logoNavPath: "/logo-nav.png?v=4",
  logoEmailPath: "/logo-email.png",
  logoMarkPath: "/logo-mark.png?v=4",
} as const;
