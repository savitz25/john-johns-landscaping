import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import JsonLd from "@/components/JsonLd";
import { BRAND } from "@/lib/brand";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Lawn Care Cliffwood NJ | Local & Reliable",
  description:
    "Trusted lawn care in Cliffwood, NJ. Bi-weekly mowing, edging, beds & clean-up from $75/mo. Local crew. Call (732) 597-6659 today.",
  path: "/lawn-care-cliffwood-nj",
  keywords: [
    "lawn care Cliffwood",
    "lawn care Cliffwood NJ",
    "lawn maintenance Cliffwood NJ",
  ],
});

export default function LawnCareCliffwoodPage() {
  return (
    <PageShell crumbs={[{ label: "Lawn Care Cliffwood NJ" }]}>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Lawn Care Cliffwood NJ", path: "/lawn-care-cliffwood-nj" },
        ])}
      />
      <article className="mx-auto w-full max-w-3xl px-5 py-16">
        <h1 className="font-serif text-4xl font-semibold text-forest-900">
          Lawn Care in Cliffwood, NJ
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          {BRAND.name} provides dependable lawn care for Cliffwood homeowners who
          want a neat yard without managing the schedule themselves. We mow,
          edge, maintain beds, and clean up—every visit.
        </p>

        <h2 className="mt-10 font-serif text-2xl font-semibold text-forest-900">
          Why local Cliffwood lawn care matters
        </h2>
        <p className="mt-3 leading-relaxed text-muted">
          New Jersey growing seasons move fast. A local team that runs fixed
          routes in Cliffwood and Aberdeen keeps your lawn consistent, not
          forgotten between random one-off cuts. That’s the difference between
          “landscaping near me” that ghosts you and a neighbor who shows up.
        </p>

        <h2 className="mt-10 font-serif text-2xl font-semibold text-forest-900">
          Plans built for Cliffwood properties
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
          <li>
            <strong className="text-forest-900">Standard Care — $75/mo:</strong>{" "}
            twice monthly full property landscaping
          </li>
          <li>
            <strong className="text-forest-900">Premium Care — $100/mo:</strong>{" "}
            every 10 days for high-growth or high-visibility yards
          </li>
        </ul>

        <h2 className="mt-10 font-serif text-2xl font-semibold text-forest-900">
          What’s included
        </h2>
        <p className="mt-3 leading-relaxed text-muted">
          Lawn mowing, bed touch-ups, crisp edges, and property clean-up. See
          our{" "}
          <Link
            href="/services/lawn-maintenance-cliffwood-nj"
            className="font-semibold text-forest-700 hover:underline"
          >
            lawn maintenance
          </Link>{" "}
          and{" "}
          <Link
            href="/services/bi-weekly-lawn-care-nj"
            className="font-semibold text-forest-700 hover:underline"
          >
            bi-weekly lawn care
          </Link>{" "}
          pages for more detail.
        </p>

        <div className="mt-12 rounded-2xl border border-forest-100 bg-forest-50 p-6">
          <h2 className="font-serif text-xl font-semibold text-forest-900">
            Book lawn care in Cliffwood
          </h2>
          <p className="mt-2 text-muted">
            Call{" "}
            <a
              href={`tel:${BRAND.phoneTel}`}
              className="font-semibold text-forest-700"
            >
              {BRAND.phoneDisplay}
            </a>{" "}
            or{" "}
            <Link href="/#contact" className="font-semibold text-forest-700 hover:underline">
              request a quote online
            </Link>
            .
          </p>
        </div>
      </article>
    </PageShell>
  );
}
