import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import JsonLd from "@/components/JsonLd";
import { SERVICES, getServiceBySlug } from "@/lib/services-data";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { BRAND } from "@/lib/brand";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle.replace(" | JLuca Landscaping", "").replace(" | JLuca", ""),
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <PageShell
      crumbs={[
        { label: "Services", href: "/services" },
        { label: service.shortTitle },
      ]}
    >
      <JsonLd
        data={[
          serviceSchema(service),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.shortTitle, path: `/services/${service.slug}` },
          ]),
        ]}
      />
      <article className="mx-auto w-full max-w-3xl px-5 py-16">
        <h1 className="font-serif text-4xl font-semibold text-forest-900">
          {service.h1}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{service.intro}</p>

        <ul className="mt-8 flex flex-col gap-3">
          {service.bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-3 text-[0.95rem] text-charcoal"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-forest-600" />
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-10 space-y-5 text-[1.05rem] leading-relaxed text-muted">
          {service.body.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-forest-100 bg-forest-50 p-6">
          <h2 className="font-serif text-xl font-semibold text-forest-900">
            Get landscaping in Cliffwood, NJ
          </h2>
          <p className="mt-2 text-muted">
            Ask about Standard Care ($75/mo) or Premium Care ($100/mo). Serving{" "}
            {BRAND.areaServedLabel}.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="rounded-full bg-forest-700 px-6 py-3 text-sm font-semibold text-white hover:bg-forest-600"
            >
              Request a quote
            </Link>
            <a
              href={`tel:${BRAND.phoneTel}`}
              className="rounded-full border border-forest-200 bg-white px-6 py-3 text-sm font-semibold text-forest-900 hover:border-forest-400"
            >
              Call {BRAND.phoneDisplay}
            </a>
          </div>
        </div>

        <p className="mt-10 text-sm text-muted">
          Related:{" "}
          <Link href="/service-areas" className="text-forest-700 hover:underline">
            Service areas
          </Link>
          {" · "}
          <Link href="/faq" className="text-forest-700 hover:underline">
            FAQ
          </Link>
          {" · "}
          <Link href="/services" className="text-forest-700 hover:underline">
            All services
          </Link>
        </p>
      </article>
    </PageShell>
  );
}
