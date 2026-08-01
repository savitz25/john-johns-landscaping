import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { SERVICES } from "@/lib/services-data";
import { buildMetadata } from "@/lib/seo";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = buildMetadata({
  title: "Landscaping Services Cliffwood NJ",
  description:
    "Explore JLuca Landscaping services: lawn mowing, maintenance, mulching, clean-up & bi-weekly care in Cliffwood and Monmouth County, NJ.",
  path: "/services",
  keywords: ["landscaping services Cliffwood", "lawn care services NJ"],
});

export default function ServicesIndexPage() {
  return (
    <PageShell crumbs={[{ label: "Services" }]}>
      <div className="mx-auto w-full max-w-6xl px-5 py-16">
        <h1 className="font-serif text-4xl font-semibold text-forest-900">
          Landscaping Services in Cliffwood, NJ
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          From routine lawn mowing to full property maintenance, {BRAND.name}{" "}
          delivers consistent landscaping for homes in Cliffwood and nearby
          Monmouth County towns.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SERVICES.map((s) => (
            <article
              key={s.slug}
              className="rounded-2xl border border-forest-100 bg-white p-7 shadow-sm transition hover:shadow-md"
            >
              <h2 className="font-serif text-xl font-semibold text-forest-900">
                <Link
                  href={`/services/${s.slug}`}
                  className="hover:text-forest-700"
                >
                  {s.title}
                </Link>
              </h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                {s.intro}
              </p>
              <Link
                href={`/services/${s.slug}`}
                className="mt-4 inline-block text-sm font-semibold text-forest-700 hover:underline"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-12 text-muted">
          Ready for a quote?{" "}
          <Link
            href="/#contact"
            className="font-semibold text-forest-700 hover:underline"
          >
            Contact us
          </Link>{" "}
          or call{" "}
          <a
            href={`tel:${BRAND.phoneTel}`}
            className="font-semibold text-forest-700 hover:underline"
          >
            {BRAND.phoneDisplay}
          </a>
          .
        </p>
      </div>
    </PageShell>
  );
}
