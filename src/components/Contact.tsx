"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("sending");
    // Demo handler — wire to Formspree, Resend, or your API when ready
    setTimeout(() => {
      form.reset();
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 5000);
    }, 600);
  };

  return (
    <section id="contact" className="bg-forest-50 py-24 pb-28">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="overflow-hidden rounded-[20px] bg-white shadow-xl">
          <div className="grid lg:grid-cols-[1fr_1.15fr]">
            {/* Info panel */}
            <div className="flex flex-col bg-linear-to-br from-forest-900 to-forest-800 px-8 py-10 text-white sm:px-10">
              <span className="mb-3 text-sm font-semibold tracking-widest text-forest-500 uppercase">
                Get in Touch
              </span>
              <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
                Let’s Care for Your Property
              </h2>
              <p className="mt-4 mb-10 leading-relaxed text-white/80">
                Tell us about your yard. We’ll follow up promptly with next
                steps and availability.
              </p>

              <ul className="mt-auto flex flex-col gap-6">
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-white/10 text-forest-500">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <strong className="mb-0.5 block text-xs font-semibold tracking-wider text-white/60 uppercase">
                      Location
                    </strong>
                    <span>Cliffwood, New Jersey</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-white/10 text-forest-500">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </span>
                  <div>
                    <strong className="mb-0.5 block text-xs font-semibold tracking-wider text-white/60 uppercase">
                      Phone
                    </strong>
                    <a
                      href="tel:+17325550100"
                      className="transition hover:text-forest-100 hover:underline"
                    >
                      (732) 555-0100
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-white/10 text-forest-500">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <path d="M22 6l-10 7L2 6" />
                    </svg>
                  </span>
                  <div>
                    <strong className="mb-0.5 block text-xs font-semibold tracking-wider text-white/60 uppercase">
                      Email
                    </strong>
                    <a
                      href="mailto:hello@johnjohnslandscaping.com"
                      className="transition hover:text-forest-100 hover:underline"
                    >
                      hello@johnjohnslandscaping.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Form */}
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-4 px-6 py-10 sm:px-10"
              noValidate
            >
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-forest-900"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="rounded-[10px] border-[1.5px] border-gray-200 bg-off-white px-4 py-3 outline-none transition focus:border-forest-600 focus:bg-white focus:ring-4 focus:ring-forest-600/15"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold text-forest-900"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="(732) 555-0100"
                    className="rounded-[10px] border-[1.5px] border-gray-200 bg-off-white px-4 py-3 outline-none transition focus:border-forest-600 focus:bg-white focus:ring-4 focus:ring-forest-600/15"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-forest-900"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@email.com"
                    className="rounded-[10px] border-[1.5px] border-gray-200 bg-off-white px-4 py-3 outline-none transition focus:border-forest-600 focus:bg-white focus:ring-4 focus:ring-forest-600/15"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="plan"
                  className="text-sm font-semibold text-forest-900"
                >
                  Plan Interest
                </label>
                <select
                  id="plan"
                  name="plan"
                  required
                  defaultValue=""
                  className="cursor-pointer appearance-none rounded-[10px] border-[1.5px] border-gray-200 bg-off-white bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 fill=%27%2314532d%27 viewBox=%270 0 16 16%27%3E%3Cpath d=%27M4.5 6l3.5 3.5L11.5 6%27/%3E%3C/svg%3E')] bg-size-[16px] bg-position-[right_1rem_center] bg-no-repeat px-4 py-3 pr-10 outline-none transition focus:border-forest-600 focus:bg-white focus:ring-4 focus:ring-forest-600/15"
                >
                  <option value="" disabled>
                    Select a package
                  </option>
                  <option value="Standard Care">
                    Standard Care — $150/mo
                  </option>
                  <option value="Premium Care">Premium Care — $185/mo</option>
                  <option value="Not sure yet">
                    Not sure yet — help me decide
                  </option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-forest-900"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your property, size, or any special needs..."
                  className="min-h-[110px] resize-y rounded-[10px] border-[1.5px] border-gray-200 bg-off-white px-4 py-3 outline-none transition focus:border-forest-600 focus:bg-white focus:ring-4 focus:ring-forest-600/15"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-1 w-full rounded-full bg-forest-700 py-3.5 text-base font-semibold text-white shadow-lg shadow-forest-700/30 transition hover:-translate-y-0.5 hover:bg-forest-600 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>

              {status === "sent" && (
                <p className="rounded-[10px] border border-forest-100 bg-forest-50 px-3 py-3 text-center font-semibold text-forest-700">
                  Thank you! We’ll be in touch shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
