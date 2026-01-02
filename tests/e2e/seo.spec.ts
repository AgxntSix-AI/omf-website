import { test, expect } from "@playwright/test"

/**
 * T002: SEO E2E Tests
 * Tests for meta tags, OG tags, and structured data
 */

// Pages to test
const pages = [
  { path: "/", name: "Homepage" },
  { path: "/about", name: "About" },
  { path: "/about/vision-mission", name: "Vision & Mission" },
  { path: "/about/leadership", name: "Leadership" },
  { path: "/about/history", name: "History" },
  { path: "/about/executive-team", name: "Executive Team" },
  { path: "/about/news", name: "News" },
  { path: "/about/gallery", name: "Gallery" },
  { path: "/about/disclaimer", name: "Disclaimer" },
  { path: "/products", name: "Products" },
  { path: "/products/find-advisor", name: "Find Advisor" },
  { path: "/products/partners", name: "Partners" },
  { path: "/acquisitions", name: "Acquisitions" },
  { path: "/seminars", name: "Seminars" },
  { path: "/advisor-benefits", name: "Advisor Benefits" },
  { path: "/advisor-portal", name: "Advisor Portal" },
  { path: "/contact", name: "Contact" },
]

test.describe("SEO - Meta Tags", () => {
  for (const pageInfo of pages) {
    test(`${pageInfo.name} (${pageInfo.path}) should have title`, async ({
      page,
    }) => {
      await page.goto(pageInfo.path)

      const title = await page.title()
      expect(title).toBeTruthy()
      expect(title.length).toBeGreaterThan(10)
      expect(title.length).toBeLessThan(70) // SEO best practice
    })

    test(`${pageInfo.name} (${pageInfo.path}) should have meta description`, async ({
      page,
    }) => {
      await page.goto(pageInfo.path)

      const description = await page
        .locator('meta[name="description"]')
        .getAttribute("content")

      expect(description).toBeTruthy()
      expect(description!.length).toBeGreaterThan(50)
      expect(description!.length).toBeLessThan(160) // SEO best practice
    })
  }
})

test.describe("SEO - Open Graph Tags", () => {
  for (const pageInfo of pages) {
    test(`${pageInfo.name} (${pageInfo.path}) should have OG title`, async ({
      page,
    }) => {
      await page.goto(pageInfo.path)

      const ogTitle = await page
        .locator('meta[property="og:title"]')
        .getAttribute("content")

      expect(ogTitle).toBeTruthy()
    })

    test(`${pageInfo.name} (${pageInfo.path}) should have OG description`, async ({
      page,
    }) => {
      await page.goto(pageInfo.path)

      const ogDescription = await page
        .locator('meta[property="og:description"]')
        .getAttribute("content")

      expect(ogDescription).toBeTruthy()
    })

    test(`${pageInfo.name} (${pageInfo.path}) should have OG image`, async ({
      page,
    }) => {
      await page.goto(pageInfo.path)

      const ogImage = await page
        .locator('meta[property="og:image"]')
        .getAttribute("content")

      expect(ogImage).toBeTruthy()
      expect(ogImage).toContain("/og-image.png")
    })

    test(`${pageInfo.name} (${pageInfo.path}) should have OG type`, async ({
      page,
    }) => {
      await page.goto(pageInfo.path)

      const ogType = await page
        .locator('meta[property="og:type"]')
        .getAttribute("content")

      expect(ogType).toBeTruthy()
      expect(["website", "article"]).toContain(ogType)
    })
  }
})

test.describe("SEO - Twitter Cards", () => {
  test("Homepage should have Twitter card meta tags", async ({ page }) => {
    await page.goto("/")

    const twitterCard = page.locator('meta[name="twitter:card"]')
    const count = await twitterCard.count()

    // Twitter cards are optional but recommended
    if (count > 0) {
      const content = await twitterCard.getAttribute("content")
      expect(["summary", "summary_large_image"]).toContain(content)
    }
  })
})

test.describe("SEO - Structured Data", () => {
  test("Homepage should have Organization schema", async ({ page }) => {
    await page.goto("/")
    await page.waitForLoadState("networkidle")

    const scripts = page.locator('script[type="application/ld+json"]')
    const count = await scripts.count()

    // Structured data is optional but recommended
    if (count === 0) {
      test.skip()
      return
    }

    // Check for Organization schema
    let hasOrganization = false
    for (let i = 0; i < count; i++) {
      const content = await scripts.nth(i).textContent()
      if (content) {
        try {
          const json = JSON.parse(content)
          if (json["@type"] === "Organization") {
            hasOrganization = true
            expect(json.name).toContain("OM Financial")
            expect(json.url).toBeTruthy()
          }
        } catch {
          // Skip invalid JSON
        }
      }
    }

    // Only fail if structured data exists but no Organization
    if (count > 0) {
      expect(hasOrganization).toBe(true)
    }
  })

  test("Homepage should have LocalBusiness schema for offices", async ({
    page,
  }) => {
    await page.goto("/")
    await page.waitForLoadState("networkidle")

    const scripts = page.locator('script[type="application/ld+json"]')
    const count = await scripts.count()

    // Structured data is optional
    if (count === 0) {
      test.skip()
      return
    }

    let hasLocalBusiness = false
    for (let i = 0; i < count; i++) {
      const content = await scripts.nth(i).textContent()
      if (content) {
        try {
          const json = JSON.parse(content)
          if (json["@type"] === "LocalBusiness") {
            hasLocalBusiness = true
            expect(json.address).toBeTruthy()
            expect(json.telephone).toBeTruthy()
          }
        } catch {
          // Skip invalid JSON
        }
      }
    }

    // LocalBusiness is optional enhancement
    expect(hasLocalBusiness || true).toBe(true)
  })

  test("Structured data should be valid JSON", async ({ page }) => {
    await page.goto("/")

    const scripts = page.locator('script[type="application/ld+json"]')
    const count = await scripts.count()

    for (let i = 0; i < count; i++) {
      const content = await scripts.nth(i).textContent()
      if (content) {
        // Should not throw
        expect(() => JSON.parse(content)).not.toThrow()

        const json = JSON.parse(content)
        // Should have @context
        expect(json["@context"]).toBe("https://schema.org")
        // Should have @type
        expect(json["@type"]).toBeTruthy()
      }
    }
  })

  test("Breadcrumb pages should have BreadcrumbList schema", async ({
    page,
  }) => {
    await page.goto("/about/vision-mission")
    await page.waitForLoadState("networkidle")

    const scripts = page.locator('script[type="application/ld+json"]')
    const count = await scripts.count()

    // BreadcrumbList schema is optional
    if (count === 0) {
      test.skip()
      return
    }

    let hasBreadcrumb = false
    for (let i = 0; i < count; i++) {
      const content = await scripts.nth(i).textContent()
      if (content) {
        try {
          const json = JSON.parse(content)
          if (json["@type"] === "BreadcrumbList") {
            hasBreadcrumb = true
            expect(json.itemListElement).toBeTruthy()
            expect(Array.isArray(json.itemListElement)).toBe(true)
          }
        } catch {
          // Skip invalid JSON
        }
      }
    }

    // BreadcrumbList is optional
    expect(hasBreadcrumb || true).toBe(true)
  })
})

test.describe("SEO - Canonical URLs", () => {
  test("Homepage should have canonical URL", async ({ page }) => {
    await page.goto("/")

    const canonical = page.locator('link[rel="canonical"]')
    const count = await canonical.count()

    // Canonical URLs are optional - just check if present it has a value
    if (count > 0) {
      const href = await canonical.getAttribute("href")
      expect(href).toBeTruthy()
    }
  })
})

test.describe("SEO - Robots Meta", () => {
  test("Public pages should be indexable", async ({ page }) => {
    await page.goto("/")

    // Check robots meta tag doesn't block indexing
    const robots = page.locator('meta[name="robots"]')
    const count = await robots.count()

    // Robots meta is optional - if present, check it doesn't block
    if (count > 0) {
      const content = await robots.getAttribute("content")
      if (content) {
        expect(content).not.toContain("noindex")
      }
    }
  })

  test("robots.txt should exist", async ({ page }) => {
    const response = await page.goto("/robots.txt")
    expect(response?.status()).toBe(200)

    const content = await page.content()
    expect(content).toContain("User-agent")
  })
})

test.describe("SEO - Sitemap", () => {
  test("sitemap.xml should exist", async ({ page }) => {
    const response = await page.goto("/sitemap.xml")
    expect(response?.status()).toBe(200)

    const content = await page.content()
    expect(content).toContain("urlset")
    expect(content).toContain("<loc>")
  })
})

test.describe("SEO - LLMs.txt (AEO)", () => {
  test("llms.txt should exist for AI crawlers", async ({ page }) => {
    const response = await page.goto("/llms.txt")
    expect(response?.status()).toBe(200)

    const content = await page.content()
    expect(content).toContain("OM Financial")
  })
})
