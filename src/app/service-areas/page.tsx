import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import JsonLd from "@/components/JsonLd";
import { SERVICE_AREAS } from "@/lib/areas";
import { BRAND } from "@/lib/brand";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Service Areas | Cliffwood & Monmouth County",
  description:
    "JLuca Landscaping serves Cliffwood, Aberdeen, Matawan, Keyport, Hazlet, Holmdel & more in Monmouth County, NJ. Local lawn care you can trust.",
  path: "/service-areas",
  keywords: [
    "landscaping near me",
    "lawn care Monmouth County",
    "Cliffwood landscaping service area",
  ],
});

export default function ServiceAreasPage() {
  return (
    <PageShell crumbs={[{ label: "Service Areas" }]}>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
        ])}
      />
      <div className="mx-auto w-full max-w-6xl px-5 py-16">
        <h1 className="font-serif text-4xl font-semibold text-forest-900">
          Landscaping Service Areas Near Cliffwood, NJ
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          {BRAND.name} is based in {BRAND.location} and provides lawn care and
          full property landscaping across nearby Monmouth County communities.
          If you searched for landscaping near me, we may already serve your
          neighborhood.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_AREAS.map((area) => (
            <article
              key={area.name}
              className="rounded-2xl border border-forest-100 bg-white p-6 shadow-sm"
            >
              <h2 className="font-serif text-xl font-semibold text-forest-900">
                {area.name}, {area.state}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {area.blurb}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-forest-900 px-6 py-8 text-white sm:px-10">
          <h2 className="font-serif text-2xl font-semibold">
            Not sure if we cover your street?
          </h2>
          <p className="mt-2 text-white/75">
            Call{" "}
            <a
              href={`tel:${BRAND.phoneTel}`}
              className="font-semibold text-forest-300 hover:text-white"
            >
              {BRAND.phoneDisplay}
            </a>{" "}
            or{" "}
            <Link href="/#contact" className="font-semibold text-forest-300 hover:text-white">
              send a message
            </Link>
            . We’ll confirm availability for your address.
          </p>
          <p className="mt-4 text-sm text-white/50">
            NAP: {BRAND.name} · {BRAND.location} · {BRAND.phoneDisplay} ·{" "}
            {BRAND.email}
          </p>
        </div>
      </div>
    </PageShell>
  );
}
