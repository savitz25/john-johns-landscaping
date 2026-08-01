function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className="mt-0.5 shrink-0 text-forest-600"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

const plans = [
  {
    name: "Standard Care",
    price: 75,
    featured: true,
    features: [
      "Twice monthly visits",
      "Complete property landscaping",
      "Lawn, beds, edges & clean-up",
      "Reliable, thorough service",
    ],
  },
  {
    name: "Premium Care",
    price: 100,
    featured: false,
    features: [
      "Service every 10 days",
      "Everything in Standard",
      "More frequent visits",
      "Ideal for high-visibility properties",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-linear-to-b from-forest-950 via-forest-900 to-forest-950 py-24"
    >
      <div
        className="pointer-events-none absolute -top-[40%] -right-[20%] h-[80%] w-[60%] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.12)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5">
        <div className="mx-auto mb-14 max-w-lg text-center">
          <span className="mb-3 inline-block text-sm font-semibold tracking-widest text-forest-500 uppercase">
            Simple Pricing
          </span>
          <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-white/75">
            Transparent monthly rates. No surprises — just great-looking
            property care.
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl gap-7 md:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-[20px] p-8 shadow-2xl transition duration-300 hover:-translate-y-2 ${
                plan.featured
                  ? "order-first border-2 border-forest-500 bg-linear-to-b from-white to-forest-50 md:order-0 md:scale-[1.03]"
                  : "border-2 border-transparent bg-white"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-forest-600 to-forest-700 px-4 py-1 text-xs font-bold tracking-wide text-white uppercase shadow-lg shadow-forest-600/40">
                  Most Popular
                </span>
              )}
              <h3 className="mt-1 font-serif text-2xl font-semibold text-forest-900">
                {plan.name}
              </h3>
              <div className="mt-3 mb-6 flex items-baseline gap-1 border-b border-forest-100 pb-6">
                <span className="font-serif text-5xl font-bold tracking-tight text-forest-800">
                  ${plan.price}
                </span>
                <span className="font-medium text-muted">/ month</span>
              </div>
              <ul className="mb-8 flex flex-1 flex-col gap-3.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-[0.95rem] text-charcoal"
                  >
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block w-full rounded-full py-3.5 text-center text-sm font-semibold transition hover:-translate-y-0.5 ${
                  plan.featured
                    ? "bg-forest-700 text-white shadow-lg shadow-forest-700/30 hover:bg-forest-600"
                    : "border-2 border-forest-100 text-forest-900 hover:border-forest-700 hover:bg-forest-50"
                }`}
              >
                Get Started
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
