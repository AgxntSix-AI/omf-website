/**
 * Sitemap Generator Script
 * Generates sitemap.xml from routes configuration
 * Run: bun run generate:sitemap
 */

import { writeFileSync } from "fs"
import { resolve } from "path"

// Site configuration
const SITE_URL = "https://omfinancial.com"
const OUTPUT_PATH = resolve(import.meta.dirname, "../public/sitemap.xml")

// Route definitions with priorities and change frequencies
interface SitemapRoute {
  path: string
  priority: number
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
}

const routes: SitemapRoute[] = [
  // Main pages - highest priority
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/contact", priority: 0.9, changefreq: "monthly" },
  { path: "/advisor-benefits", priority: 0.8, changefreq: "monthly" },
  { path: "/acquisitions", priority: 0.8, changefreq: "monthly" },
  { path: "/seminars", priority: 0.7, changefreq: "weekly" },

  // About section
  { path: "/about", priority: 0.8, changefreq: "monthly" },
  { path: "/about/vision-mission", priority: 0.7, changefreq: "yearly" },
  { path: "/about/leadership", priority: 0.7, changefreq: "monthly" },
  { path: "/about/history", priority: 0.6, changefreq: "yearly" },
  { path: "/about/executive-team", priority: 0.7, changefreq: "monthly" },
  { path: "/about/news", priority: 0.8, changefreq: "weekly" },
  { path: "/about/gallery", priority: 0.5, changefreq: "monthly" },
  { path: "/about/disclaimer", priority: 0.3, changefreq: "yearly" },

  // Products section
  { path: "/products", priority: 0.9, changefreq: "monthly" },
  { path: "/products/find-advisor", priority: 0.8, changefreq: "monthly" },
  { path: "/products/partners", priority: 0.7, changefreq: "monthly" },

  // Note: /advisor-portal/* pages are excluded (protected content)
  // They are blocked in robots.txt
]

function generateSitemap(): string {
  const today = new Date().toISOString().split("T")[0]

  const urlEntries = routes
    .map(
      (route) => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`
    )
    .join("\n")

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`
}

// Generate and write sitemap
const sitemap = generateSitemap()
writeFileSync(OUTPUT_PATH, sitemap, "utf-8")

console.log(`✓ Sitemap generated: ${OUTPUT_PATH}`)
console.log(`  Routes: ${routes.length}`)
console.log(`  Date: ${new Date().toISOString().split("T")[0]}`)
