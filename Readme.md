# Abu Sufian Rubel Portfolio

A premium, production-ready portfolio website for **Abu Sufian Rubel**, a Senior Software Engineer & Laravel Developer.

Built with modern web technologies including Next.js 15, TypeScript, Tailwind CSS, Framer Motion, React Hook Form, Zod, and Resend.

---

## Tech Stack

* Next.js 15
* TypeScript
* App Router
* Tailwind CSS
* ESLint
* Prettier
* Framer Motion
* Lucide React
* React Hook Form
* Zod
* Resend
* Vercel

---

## Features

* Modern one-page portfolio design
* Fully responsive layout
* Dark / Light theme support
* Smooth animations with Framer Motion
* Contact form with validation
* Email delivery via Resend
* SEO optimized
* Open Graph & Twitter metadata
* Sitemap & Robots configuration
* Reusable component architecture
* Production-ready deployment setup

---

## Getting Started

### Clone the repository

```bash
git clone <repository-url>
cd profile
```

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env.local` file:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=example@gmail.com
CONTACT_FROM_EMAIL=Portfolio <onboarding@resend.dev>
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Start development server

```bash
npm run dev
```

Visit:

```text
http://localhost:3000
```

---

## Available Scripts

### Development

```bash
npm run dev
```

### Type Check

```bash
npm run type-check
```

### Lint

```bash
npm run lint
```

### Format Check

```bash
npm run format:check
```

### Build

```bash
npm run build
```

### Production Start

```bash
npm run start
```

---

## Production Checklist

Before deployment, verify:

```bash
npm run type-check
npm run lint
npm run build
```

### Environment Variables

Configure the following variables in your hosting provider:

```env
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
NEXT_PUBLIC_SITE_URL=
```

### Security Notes

* Never expose `RESEND_API_KEY` in client-side code.
* Contact form runs entirely on the server.
* Honeypot protection enabled.
* Basic rate limiting included.
* Form validation powered by Zod.

---

## Project Structure

```text
src/
├── app/
│   ├── api/contact
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   └── opengraph-image.tsx
│
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
│
├── config/
│   └── site.ts
│
├── data/
│   └── portfolio.ts
│
├── hooks/
│
├── lib/
│
└── public/
    └── Abu-Sufian-Rubel-Resume.pdf
```

---

## Customization

### Resume

Update the resume file:

```text
public/Abu-Sufian-Rubel-Resume.pdf
```

Or modify:

```ts
// src/config/site.ts
export const RESUME_URL = "/Abu-Sufian-Rubel-Resume.pdf";
```

### Portfolio Content

Edit:

```text
src/data/portfolio.ts
```

### Site Configuration

Edit:

```text
src/config/site.ts
```

---

## Deployment

### Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add environment variables.
4. Deploy.

For custom domains, update:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Then redeploy the application.

---

## SEO

Includes:

* Metadata API
* Open Graph
* Twitter Cards
* Sitemap
* Robots.txt
* Canonical URLs

---

## License

This project is intended for personal portfolio use.

© Abu Sufian Rubel. All rights reserved.