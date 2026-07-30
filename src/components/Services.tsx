const services = [
  {
    title: "Full Property Landscaping",
    description:
      "Lawn care, bed maintenance, edging, and clean-up — your entire property, cared for as a whole.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        aria-hidden="true"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
  },
  {
    title: "Consistent Schedule",
    description:
      "Twice monthly or every 10 days. You always know when we’ll be there — and we always show up.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    title: "Reliable & Local",
    description:
      "Based in Cliffwood, NJ. We’re your neighbors — committed to the yards and streets we share.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        aria-hidden="true"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-forest-50 py-24">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="mx-auto mb-14 max-w-lg text-center">
          <span className="mb-3 inline-block text-sm font-semibold tracking-widest text-forest-700 uppercase">
            What We Offer
          </span>
          <h2 className="font-serif text-3xl font-semibold text-forest-900 sm:text-4xl">
            Care That Shows
          </h2>
          <p className="mt-4 text-muted">
            Everything your property needs, handled with consistency and pride.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-forest-900/5 bg-white p-8 shadow-[0_4px_20px_rgba(5,46,22,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-forest-50 to-forest-100 text-forest-700">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-forest-900">
                {service.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
