export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  excerpt: string;
  keywords: string[];
  content: string[];
};

/** Seed posts — structure ready for more content over time */
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "lawn-care-tips-cliffwood-nj",
    title: "Lawn Care Tips for Cliffwood, NJ Homeowners",
    metaTitle: "Lawn Care Tips Cliffwood NJ | JLuca Blog",
    metaDescription:
      "Practical lawn care tips for Cliffwood and Monmouth County yards: mowing height, schedule, edges, and when to book bi-weekly service.",
    date: "2026-08-01",
    excerpt:
      "Simple, local advice to keep your Cliffwood lawn healthy through New Jersey’s growing season.",
    keywords: ["lawn care Cliffwood", "lawn tips NJ", "bi-weekly lawn care"],
    content: [
      "Cliffwood lawns face humid summers, spring growth spurts, and busy fall clean-up seasons. A consistent schedule is the difference between a yard that always looks intentional and one that races ahead of you.",
      "Mow at a steady height—avoid scalping. During peak growth, bi-weekly lawn care (or every 10 days) keeps grass even without stressing the roots. Edge walkways and beds so the whole property looks finished.",
      "Don’t forget beds and debris. Curb appeal is more than grass color; clean edges and a blown-off driveway make your home look professionally maintained.",
      "If you’d rather not manage the calendar, JLuca Landscaping offers fixed monthly plans for landscaping in Cliffwood, NJ and nearby towns. Call (732) 597-6659 to get started.",
    ],
  },
  {
    slug: "why-bi-weekly-landscaping-works",
    title: "Why Bi-Weekly Landscaping Works for Most NJ Homes",
    metaTitle: "Bi-Weekly Landscaping NJ | Why It Works",
    metaDescription:
      "Why bi-weekly landscaping is enough for many Monmouth County homes—and when every-10-day service is worth it.",
    date: "2026-08-01",
    excerpt:
      "Twice a month is the sweet spot for many yards—here’s when to stick with it or upgrade.",
    keywords: [
      "bi-weekly lawn care NJ",
      "landscaping Monmouth County",
      "lawn schedule",
    ],
    content: [
      "Weekly service isn’t always necessary. For many residential properties in Cliffwood and Monmouth County, bi-weekly landscaping keeps growth under control while staying budget-friendly.",
      "Choose every-10-day care if your lawn grows aggressively, you host often, or the property is highly visible from the street. Premium frequency reduces the “just before visit” shaggy look.",
      "The real key is consistency: same crew standards, same clean-up, same expectations. That’s what JLuca Landscaping builds into Standard ($75) and Premium ($100) monthly plans.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
