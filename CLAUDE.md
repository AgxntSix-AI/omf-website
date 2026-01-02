# CLAUDE.md - OM Financial Website

## Long-Running Project Protocol

This is a multi-session project following [Anthropic's agent harness pattern](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents).

### Session Startup (DO FIRST - EVERY SESSION)

```bash
pwd                                    # 1. Verify in omf-website/
cat claude-progress.txt                # 2. Read what was done + what's next
git log --oneline -10                  # 3. See recent commits
cat docs/features.json | grep -A2 '"status": "pending"' | head -20  # 4. Next pending features
```

### Session Workflow

1. Read `claude-progress.txt` -> find "Next Up" section
2. Check `docs/features.json` -> find next pending feature
3. Work on ONE feature at a time
4. Test the feature (dev server + Playwright)
5. Update feature status in JSON: `"status": "pass"`
6. Update `claude-progress.txt` with what was done
7. Commit + push to main

### Session End (DO BEFORE ENDING)

1. Update `docs/features.json`:
   - Set completed feature to `"status": "pass"`
   - NEVER remove or edit feature descriptions
2. Update `claude-progress.txt`:
   - Move completed items to "Completed" section
   - Update "Next Feature" to next pending ID
3. Commit all changes
4. **PUSH TO MAIN** - never leave unpushed commits

---

## Project Overview

**Client:** OM Financial Inc. (Canadian MGA - Managing General Agency)
**Purpose:** Corporate website rebuild with modern stack
**Repo:** https://github.com/AgxntSix-AI/omf-website
**Deployment:** Vercel

### Tech Stack

- Runtime: Bun v1.2+
- Framework: React 19 + Vite 6
- Router: TanStack Router (file-based routing)
- Styling: Tailwind CSS v4 + shadcn/ui + Magic UI
- Language: TypeScript (strict)
- Testing: Vitest + Playwright

### Component Libraries

- **shadcn/ui** - Base UI components (button, card, dialog, form, etc.)
- **Magic UI** - Premium animated components for hero sections, carousels, etc.
  - Install components: `bunx --bun @magicuidesign/cli@latest add <component>`
  - Available via MCP server in Claude

### Color Palette (from Canva Logo)

```css
/* Primary Brand Colors */
--primary: #7a3a40;       /* Lotus Burgundy - Primary */
--accent: #b8944d;        /* Laser Gold - Accent */

/* Backgrounds (warm off-white palette) */
--background: #fdfcfb;    /* Warm off-white */
--card: #faf9f7;          /* Slightly warmer for cards */
--muted: #f5f3f0;         /* Muted backgrounds */

/* Dark mode uses deep burgundy/charcoal tones */
```

**Note:** Original Canva colors were Lotus #7b3e43, Laser #cda96a - refined for better contrast and premium feel. Bitter gray (#7b7c7a) NOT used per client preference.

---

## Critical Constraints

### WAIT FOR USER COMPONENTS

These components will be provided by the user - DO NOT create production versions:
- `site-header.tsx` (Navbar) - PLACEHOLDER ONLY
- `site-footer.tsx` (Footer) - PLACEHOLDER ONLY
- Card components - PLACEHOLDER ONLY

Use placeholder components that can be swapped:

```tsx
// Placeholder pattern
export function SiteHeader() {
  return (
    <header className="h-16 border-b flex items-center px-4">
      <span className="text-muted-foreground">
        [PLACEHOLDER: Navbar - awaiting user component]
      </span>
    </header>
  )
}
```

### Asset Placeholders

Create placeholder directories and use fallback images:
- `/public/images/logos/` - use text fallback
- `/public/images/team/` - use avatar placeholder
- `/public/images/gallery/` - use skeleton cards
- `/public/images/partners/` - use partner name text

### Mobile-First Design

- Design for Safari iOS 2026 first
- Support foldable phones (Galaxy Fold: 280-653px width)
- Use `min-h-svh` not `min-h-screen`
- Prevent zoom on input focus (16px min font)

---

## Commands

```bash
# Development
bun run dev              # Start Vite dev server (port 5173)

# Build
bun run build            # TypeScript check + Vite build
bun run preview          # Preview production build

# Testing
bun run test             # Vitest unit tests
bun run test:e2e         # Playwright E2E tests

# Quality
bun run lint             # ESLint
bun run format           # Prettier
bun run type-check       # TypeScript only

# Utilities
bun run generate:sitemap # Generate sitemap.xml
```

---

## Website Structure

### Main Navigation

1. **About Us**
   - Vision & Mission
   - Leadership
   - History & Strategy
   - Executive Team
   - News
   - Event Gallery
   - Disclaimer

2. **Products & Partners**
   - Find an Advisor
   - Insurance Partners (30+)

3. **Acquisitions & Succession Planning** (single page)

4. **Seminars** (single page, Strapi-ready)

5. **Advisor Portal**
   - Virtgate (external link)
   - Event Calendar
   - Training Library
   - Blogs (Strapi-ready)
   - Toolbox
   - Forum
   - Compliance
   - OM Financial University
   - Calculators (external links)
   - Incentives & Contests

6. **Advisor Benefits** (single page)

7. **Contact Us**
   - Contact form (GHL chatbot primary)
   - Office locations (Toronto, Mississauga)
   - Staff directory
   - Social links

---

## SEO Sub-Agents

### AEO (Answer Engine Optimization)
- `public/llms.txt` manifest for AI crawlers
- Semantic HTML (article, section, aside)
- FAQ schema on relevant pages
- Entity-driven content (Organization, LocalBusiness)

### GEO (Local SEO)
- LocalBusiness schema for Toronto + Mississauga
- GeoCoordinates embedded
- OpeningHoursSpecification
- Google Business Profile compatibility

### SEO (Technical)
- `public/robots.txt` with AI bot rules
- Auto-generated sitemap.xml
- Core Web Vitals targets: LCP <2.5s, INP <200ms, CLS <0.1
- Image optimization with WebP/AVIF
- Lazy loading with Intersection Observer

---

## Office Locations

### Toronto (Head Office)
- Address: 7191 Yonge Street Suite 711, Thornhill, ON L3T 0C4
- Phone: (416) 491-7727
- Fax: 416-491-7102
- Coords: 43.8101, -79.4163

### Mississauga
- Address: 218 Export Boulevard Suite 610, Mississauga ON L5S 0A7
- Phone: (905) 612-0800
- Fax: 905-612-0801
- Coords: 43.6859, -79.6137

---

## Social Links

- Facebook: https://facebook.com/omfinancialinc
- LinkedIn: https://linkedin.com/company/om-financial
- Instagram: https://instagram.com/omfinancialinc
- Twitter/X: https://twitter.com/OmFinancial_Inc
- YouTube: https://youtube.com/channel/UCWWcSS6aA2ysdN35sdMKoag

---

## Testing Requirements

Every page must have:
1. Meta tags test (title, description, OG)
2. Structured data validation
3. Mobile viewport test (320px, 375px, 768px)
4. Accessibility audit (axe-core)
5. Performance budget (< 200KB initial JS)

---

## Feature Tracking

See `docs/features.json` for complete feature list.

Features are organized by category:
- `F0XX` - Foundation (setup, config)
- `F1XX` - Layout components
- `F2XX` - Homepage
- `F3XX` - About section
- `F4XX` - Products & Partners
- `F5XX` - Acquisitions
- `F6XX` - Seminars
- `F7XX` - Advisor Portal
- `F8XX` - Advisor Benefits
- `F9XX` - Contact
- `SXXX` - SEO/AEO/GEO
- `TXXX` - Testing
