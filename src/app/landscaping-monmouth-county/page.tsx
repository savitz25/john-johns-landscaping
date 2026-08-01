import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import JsonLd from "@/components/JsonLd";
import { BRAND } from "@/lib/brand";
import { SERVICE_AREAS } from "@/lib/areas";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Landscaping Monmouth County NJ | JLuca",
  description:
    "Landscaping in Monmouth County, NJ from a Cliffwood-based crew. Lawn care, bi-weekly plans, clean-up. Serving Matawan, Hazlet, Keyport & more.",
  path: "/landscaping-monmouth-county",
  keywords: [
    "landscaping Monmouth County",
    "lawn care Monmouth County NJ",
    "landscaping near me",
  ],
});

export default function MonmouthCountyPage() {
  return (
    <PageShell crumbs={[{ label: "Landscaping Monmouth County" }]}>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          {
            name: "Landscaping Monmouth County",
            path: "/landscaping-monmouth-county",
          },
        ])}
      />
      <article className="mx-auto w-full max-w-3xl px-5 py-16">
        <h1 className="font-serif text-4xl font-semibold text-forest-900">
          Landscaping in Monmouth County, NJ
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          From our base in Cliffwood, {BRAND.name} delivers landscaping and lawn
          care across Monmouth County—with the same reliable schedules and full
          property standards on every stop.
        </p>

        <h2 className="mt-10 font-serif text-2xl font-semibold text-forest-900">
          Towns we serve in Monmouth County
        </h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {SERVICE_AREAS.map((a) => (
            <li key={a.name} className="text-muted">
              <Link
                href="/service-areas"
                className="font-medium text-forest-800 hover:text-forest-600 hover:underline"
              >
                {a.name}, {a.state}
              </Link>
            </li>
          ))}
        </ul>

        <h2 className="mt-10 font-serif text-2xl font-semibold text-forest-900">
          What “landscaping near me” should feel like
        </h2>
        <p className="mt-3 leading-relaxed text-muted">
          You deserve a crew that treats your yard like a long-term route—not a
          one-time gig. Our bi-weekly and every-10-day plans keep Monmouth
          County properties looking sharp with mowing, beds, edges, and
          clean-up included.
        </p>

        <p className="mt-6 leading-relaxed text-muted">
          Learn more about{" "}
          <Link
            href="/lawn-care-cliffwood-nj"
            className="font-semibold text-forest-700 hover:underline"
          >
            lawn care in Cliffwood
          </Link>{" "}
          or browse{" "}
          <Link
            href="/services"
            className="font-semibold text-forest-700 hover:underline"
          >
            all services
          </Link>
          .
        </p>

        <div className="mt-12 rounded-2xl bg-forest-900 px-6 py-8 text-white">
          <h2 className="font-serif text-xl font-semibold">
            Request Monmouth County landscaping
          </h2>
          <p className="mt-2 text-white/75">
            Call{" "}
            <a href={`tel:${BRAND.phoneTel}`} className="font-semibold text-forest-300">
              {BRAND.phoneDisplay}
            </a>{" "}
            or{" "}
            <Link href="/#contact" className="font-semibold text-forest-300 hover:underline">
              contact us online
            </Link>
            .
          </p>
        </div>
      </article>
    </PageShell>
  );
}
