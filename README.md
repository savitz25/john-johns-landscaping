# John Johns Landscaping

Polished production single-page website for **John Johns Landscaping** (Cliffwood, NJ).

Built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Features

- Fixed navigation with glass effect on scroll + mobile menu
- Full-viewport hero with landscaping photography
- Services, dual pricing cards ($150 / $185), about, and contact form
- Forest green design system, Playfair Display + Inter
- Fully responsive, accessible labels, SEO metadata
- Client-side form validation (ready to wire to a form API)

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

## Contact placeholders

Update before launch in `src/components/Contact.tsx`:

- Phone: `(732) 555-0100`
- Email: `hello@johnjohnslandscaping.com`

## License

Private project for John Johns Landscaping.
