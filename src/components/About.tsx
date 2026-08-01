import { BRAND } from "@/lib/brand";

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="mb-3 inline-block text-sm font-semibold tracking-widest text-forest-700 uppercase">
            About Us
          </span>
          <h2 className="font-serif text-3xl font-semibold text-forest-900 sm:text-4xl">
            Local Roots.
            <br />
            Lasting Results.
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-muted">
            {BRAND.name} is proudly based in{" "}
            <strong className="font-semibold text-forest-800">
              {BRAND.location}
            </strong>
            . We’re a local team focused on one thing: keeping your property
            looking its best, visit after visit.
          </p>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
            No gimmicks. No overpromising. Just consistent, thorough
            landscaping care — lawns mowed, beds maintained, edges crisp, and
            clean-up done right. Whether you choose twice a month or every 10
            days, you get reliable service from neighbors who care.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {[
              `Based in Cliffwood, serving surrounding areas`,
              "Complete property care, not just mowing",
              "Fixed schedules you can count on",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-[0.95rem] font-medium text-charcoal"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-forest-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div
            className="aspect-4/5 max-h-[420px] w-full rounded-2xl bg-cover bg-center shadow-xl lg:max-h-none"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80)",
            }}
            role="img"
            aria-label="Professionally landscaped residential property"
          />
          <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-xl border border-white/80 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={BRAND.logoMarkPath}
              alt=""
              className="h-11 w-11 object-contain"
              width={44}
              height={44}
              aria-hidden="true"
            />
            <span>
              <strong className="block text-[0.95rem] text-forest-900">
                {BRAND.locationShort}
              </strong>
              <small className="text-sm text-muted">Proudly local</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
