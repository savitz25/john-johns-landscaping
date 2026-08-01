# John Johns Landscaping

Polished production single-page website for **John Johns Landscaping** (Cliffwood, NJ).

Built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Features

- Fixed navigation with glass effect on scroll + mobile menu
- Full-viewport hero with landscaping photography
- Services, dual pricing cards ($150 / $185), about, and contact form
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

For static hosting, you can also export if you add `output: 'export'` to `next.config.ts`.

## Contact form & email (Resend)

Form submissions hit `POST /api/contact`, which:

1. **Forwards the lead** to `EMAIL_FORWARD_TO` (default `savitz25@gmail.com`) with reply-to set to the customer
2. **Sends a branded confirmation** to the customer (logo, plan summary, thank-you)

### Vercel environment variables

Set these in the Vercel project (**Settings → Environment Variables**):

| Variable | Example | Notes |
| --- | --- | --- |
| `RESEND_API_KEY` | `re_…` | From [Resend API Keys](https://resend.com/api-keys) |
| `EMAIL_FROM` | `John Johns Landscaping <onboarding@resend.dev>` | Use a **verified domain** sender in production |
| `EMAIL_FORWARD_TO` | `savitz25@gmail.com` | Owner inbox for new leads |
| `SITE_URL` | `https://john-johns-landscaping.vercel.app` | Logo + links in emails |

> **Resend note:** With `onboarding@resend.dev` you can only send *to* the Resend account email. To confirm arbitrary customers and deliver to Gmail, verify a domain in Resend and set `EMAIL_FROM` to an address on that domain.

### Local testing

```bash
cp .env.example .env.local
# fill in RESEND_API_KEY
npm run dev
```

## Contact placeholders

Update before launch in `src/components/Contact.tsx`:

- Phone: `(732) 555-0100`
- Email: `hello@johnjohnslandscaping.com`

## License

Private project for John Johns Landscaping.

