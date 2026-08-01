export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  bullets: string[];
  body: string[];
  keywords: string[];
};

export const SERVICES: ServicePage[] = [
  {
    slug: "lawn-mowing-cliffwood-nj",
    title: "Lawn Mowing in Cliffwood, NJ",
    shortTitle: "Lawn Mowing",
    metaTitle: "Lawn Mowing Cliffwood NJ | JLuca Landscaping",
    metaDescription:
      "Professional lawn mowing in Cliffwood, NJ. Bi-weekly or every 10 days. Neat edges, clean finish. Call (732) 597-6659.",
    h1: "Lawn Mowing Services in Cliffwood, NJ",
    intro:
      "Keep your Cliffwood lawn neat and healthy with scheduled mowing from a local crew that shows up on time—every time.",
    bullets: [
      "Consistent cut height for a healthier lawn",
      "Clean edges along walkways and beds",
      "Clippings managed for a polished finish",
      "Bi-weekly or every-10-day schedules",
    ],
    body: [
      "Looking for reliable lawn mowing in Cliffwood, NJ? JLuca Landscaping provides residential lawn care built around fixed routes in Cliffwood, Aberdeen, Matawan, and nearby Monmouth County towns.",
      "We don’t just “show up when we can.” You choose Standard Care (twice monthly) or Premium Care (every 10 days), so your lawn stays even between visits—especially during peak growing season in New Jersey.",
      "Every visit includes a thorough mow, attention to edges, and a clean property walkthrough so your home looks cared for from the curb.",
    ],
    keywords: [
      "lawn mowing Cliffwood NJ",
      "lawn care Cliffwood",
      "mowing near me",
    ],
  },
  {
    slug: "lawn-maintenance-cliffwood-nj",
    title: "Lawn Maintenance in Cliffwood, NJ",
    shortTitle: "Lawn Maintenance",
    metaTitle: "Lawn Maintenance Cliffwood NJ | JLuca",
    metaDescription:
      "Complete lawn maintenance in Cliffwood, NJ—mowing, edging, beds & clean-up. Fixed monthly plans from $75. Local & reliable.",
    h1: "Lawn Maintenance for Cliffwood Homes",
    intro:
      "Full lawn maintenance that goes beyond mowing—beds, edges, and clean-up included so your whole property looks sharp.",
    bullets: [
      "Mowing + edging + bed touch-ups",
      "Debris and clippings cleaned up",
      "Transparent monthly pricing",
      "Local Cliffwood-based crew",
    ],
    body: [
      "Lawn maintenance in Cliffwood, NJ should be simple: pick a plan, know the schedule, and enjoy a yard that always looks ready for guests.",
      "Our Standard Care ($75/mo) and Premium Care ($100/mo) packages cover complete property landscaping—not just a quick pass with a mower. That means beds stay tidy, edges stay crisp, and the property is left clean after every visit.",
      "We serve Cliffwood and surrounding Monmouth County communities with the same standard of care we give our own neighborhood.",
    ],
    keywords: [
      "lawn maintenance Cliffwood NJ",
      "landscaping Cliffwood NJ",
      "bi-weekly lawn care NJ",
    ],
  },
  {
    slug: "mulching-bed-care",
    title: "Mulching & Bed Care",
    shortTitle: "Mulching & Beds",
    metaTitle: "Mulching & Bed Care Cliffwood NJ | JLuca",
    metaDescription:
      "Bed maintenance and mulching as part of full property landscaping in Cliffwood and Monmouth County. Keep curb appeal sharp.",
    h1: "Mulching & Landscape Bed Care",
    intro:
      "Clean beds and fresh definition make your whole property look finished. We maintain beds as part of ongoing landscaping care.",
    bullets: [
      "Bed weeding and edging",
      "Tidy plant beds each visit",
      "Seasonal mulch add-ons available",
      "Pairs with mowing for full curb appeal",
    ],
    body: [
      "Great landscaping is more than grass. In Cliffwood and nearby towns, we keep planting beds looking intentional—clean edges, less weed pressure, and a polished finish that matches your mowed lawn.",
      "Ask about seasonal mulching when you book Standard or Premium Care so your beds stay fresh through the growing season.",
    ],
    keywords: [
      "mulching Cliffwood NJ",
      "landscape bed maintenance NJ",
      "curb appeal landscaping",
    ],
  },
  {
    slug: "property-cleanup",
    title: "Property Clean-Up",
    shortTitle: "Property Clean-Up",
    metaTitle: "Property Clean-Up Cliffwood NJ | JLuca",
    metaDescription:
      "Property clean-up and debris removal with landscaping visits in Cliffwood, NJ. Leave your yard neat after every service.",
    h1: "Property Clean-Up in Cliffwood & Nearby Towns",
    intro:
      "A clean property finishes the job. We leave clippings, leaves, and debris handled so your yard looks ready—not half done.",
    bullets: [
      "Blow-off of hard surfaces",
      "Debris removed from service areas",
      "Included with full property care plans",
      "Ideal after busy seasons",
    ],
    body: [
      "Whether it’s regular visit clean-up or a reset after a messy stretch of weather, JLuca Landscaping includes thorough clean-up with our landscaping packages in Cliffwood and Monmouth County.",
      "Homeowners searching for landscaping near me want a finished look—not grass on the driveway. That’s the standard we hold every visit.",
    ],
    keywords: [
      "property cleanup Cliffwood NJ",
      "yard cleanup Monmouth County",
      "landscaping clean up NJ",
    ],
  },
  {
    slug: "bi-weekly-lawn-care-nj",
    title: "Bi-Weekly Lawn Care NJ",
    shortTitle: "Bi-Weekly Care",
    metaTitle: "Bi-Weekly Lawn Care NJ | Cliffwood | JLuca",
    metaDescription:
      "Bi-weekly lawn care in Cliffwood, NJ from $75/mo. Fixed schedules, full property landscaping. Call (732) 597-6659.",
    h1: "Bi-Weekly Lawn Care in New Jersey",
    intro:
      "Twice-monthly visits that keep most residential lawns in Cliffwood looking consistently good without overpaying for weekly service.",
    bullets: [
      "Standard Care: $75 per month",
      "Twice monthly full-property visits",
      "Upgrade to every 10 days if needed",
      "Serving Cliffwood & Monmouth County",
    ],
    body: [
      "Bi-weekly lawn care is the sweet spot for many New Jersey homes—frequent enough to stay neat, affordable enough to stay on autopilot.",
      "Our Standard Care plan is built for Cliffwood and surrounding towns: two visits a month covering mowing, beds, edges, and clean-up. Prefer tighter turnaround? Premium Care every 10 days is available for $100/mo.",
    ],
    keywords: [
      "bi-weekly lawn care NJ",
      "twice monthly lawn service",
      "lawn care Cliffwood",
    ],
  },
];

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
