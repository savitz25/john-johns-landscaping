# JLuca Landscaping

Polished production single-page website for **JLuca Landscaping** (Cliffwood, NJ).

Built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Brand

| | |
| --- | --- |
| **Company** | JLuca Landscaping |
| **Phone** | (732) 597-6659 |
| **Email** | hello@jlucalandscaping.com |
| **Location** | Cliffwood, NJ |
| **Logo** | `public/logo.png` + `public/logo-email.png` (transparent, design only) |

Brand constants live in `src/lib/brand.ts`.

## Features

- Fixed navigation with glass effect on scroll + mobile menu
- Full-viewport hero with landscaping photography
- Services, dual pricing cards ($75 / $100), about, and contact form
- Forest green design system, Playfair Display + Inter
- Fully responsive, accessible labels, SEO metadata
- Contact form via Resend: branded customer confirmation + lead email to owner

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Development server       |
| `npm run build` | Production build         |
| `npm run start` | Serve production build   |
| `npm run lint`  | ESLint                   |

## Deploy

Deploy easily on [Vercel](https://vercel.com) or any Node host:

```bash
npm run build
npm start
```

## Contact form & email (Resend)

Form submissions hit `POST /api/contact`, which:

1. **Forwards the lead** to `EMAIL_FORWARD_TO` (default `savitz25@gmail.com`) with reply-to set to the customer
2. **Sends a branded confirmation** to the customer (JLuca logo, plan summary, thank-you)

### Vercel environment variables

| Variable | Example | Notes |
| --- | --- | --- |
| `RESEND_API_KEY` | `re_…` | From [Resend API Keys](https://resend.com/api-keys) |
| `EMAIL_FROM` | `JLuca Landscaping <hello@jlucalandscaping.com>` | Verify **jlucalandscaping.com** in Resend |
| `EMAIL_FORWARD_TO` | `savitz25@gmail.com` | Owner inbox for new leads |
| `SITE_URL` | `https://john-johns-landscaping.vercel.app` | Logo + links in emails |

> **Resend note:** With `onboarding@resend.dev` you can only send *to* the Resend account email. Verify `jlucalandscaping.com` and set `EMAIL_FROM` to `hello@jlucalandscaping.com` for production.

### Local testing

```bash
cp .env.example .env.local
# fill in RESEND_API_KEY
npm run dev
```

## License

Private project for JLuca Landscaping.
