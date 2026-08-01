import Link from "next/link";
import { SERVICES } from "@/lib/services-data";

const highlights = [
  {
    title: "Full Property Landscaping",
    description:
      "Lawn care, bed maintenance, edging, and clean-up — your entire property in Cliffwood, NJ, cared for as a whole.",
    href: "/services/lawn-maintenance-cliffwood-nj",
  },
  {
    title: "Bi-Weekly & Every 10 Days",
    description:
      "Twice monthly or every 10 days. You always know when we’ll be there — and we always show up.",
    href: "/services/bi-weekly-lawn-care-nj",
  },
  {
    title: "Reliable & Local",
    description:
      "Based in Cliffwood, NJ. We’re your neighbors — committed to Monmouth County yards and streets we share.",
    href: "/service-areas",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-forest-50 py-24">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold tracking-widest text-forest-700 uppercase">
            What We Offer
          </span>
          <h2 className="font-serif text-3xl font-semibold text-forest-900 sm:text-4xl">
            Lawn Care &amp; Landscaping Services
          </h2>
          <p className="mt-4 text-muted">
            Professional landscaping in Cliffwood and surrounding areas—mowing,
            maintenance, mulching, and clean-up on a schedule you can count on.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((service) => (
            <article
              key={service.title}
              className="flex flex-col rounded-2xl border border-forest-900/5 bg-white p-8 shadow-[0_4px_20px_rgba(5,46,22,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <h3 className="font-serif text-xl font-semibold text-forest-900">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="mt-5 text-sm font-semibold text-forest-700 underline-offset-4 hover:underline"
              >
                Learn more →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-forest-100 bg-white p-6 sm:p-8">
          <h3 className="font-serif text-lg font-semibold text-forest-900">
            Explore all services
          </h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-sm font-medium text-forest-800 underline-offset-2 hover:text-forest-600 hover:underline"
                >
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/services"
            className="mt-5 inline-block text-sm font-semibold text-forest-700 hover:underline"
          >
            View services overview →
          </Link>
        </div>
      </div>
    </section>
  );
}
