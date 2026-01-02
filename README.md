# OM Financial Website

Corporate website for OM Financial Inc. - A leading Canadian Managing General Agency (MGA) for insurance and investments.

## Tech Stack

- **Runtime:** Bun v1.2+
- **Framework:** React 19 + Vite 6
- **Router:** TanStack Router (file-based)
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Language:** TypeScript (strict mode)
- **Testing:** Vitest + Playwright
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Run tests
bun run test
bun run test:e2e
```

## Project Structure

```
src/
├── components/      # Reusable UI components
│   ├── ui/          # shadcn/ui components
│   ├── layout/      # Header, Footer, Navigation
│   ├── cards/       # Card components
│   └── forms/       # Form components
├── features/        # Feature-based modules
│   ├── home/        # Homepage
│   ├── about/       # About section
│   ├── products/    # Products & Partners
│   ├── advisor-portal/  # Advisor Portal
│   └── contact/     # Contact page
├── routes/          # TanStack Router pages
├── config/          # Site configuration
├── data/            # Static data files
├── lib/             # Utilities & helpers
└── styles/          # Global styles
```

## SEO Features

- **AEO (Answer Engine Optimization):** llms.txt for AI crawlers
- **GEO (Local SEO):** LocalBusiness schema for Toronto & Mississauga
- **Technical SEO:** robots.txt, sitemap.xml, structured data

## Links

- **Production:** https://omfinancial.com
- **Staging:** https://omf-website.vercel.app

## License

Copyright 2026 OM Financial Inc. All rights reserved.
