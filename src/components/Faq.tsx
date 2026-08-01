import { FAQS } from "@/lib/faq-data";

export default function Faq({
  title = "Frequently Asked Questions",
  limit,
}: {
  title?: string;
  limit?: number;
}) {
  const items = limit ? FAQS.slice(0, limit) : FAQS;

  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto w-full max-w-3xl px-5">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-sm font-semibold tracking-widest text-forest-700 uppercase">
            FAQ
          </span>
          <h2 className="font-serif text-3xl font-semibold text-forest-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-muted">
            Straight answers about landscaping and lawn care in Cliffwood, NJ.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-forest-100 bg-forest-50/50 px-5 py-4 open:bg-white open:shadow-md"
            >
              <summary className="cursor-pointer list-none font-semibold text-forest-900 marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.question}
                  <span
                    className="mt-0.5 shrink-0 text-forest-600 transition group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
