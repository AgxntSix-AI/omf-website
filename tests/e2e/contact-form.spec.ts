import { test, expect } from "@playwright/test"

/**
 * T004: Contact Form E2E Tests
 * Tests for GHL widget placeholder and contact page functionality
 */

test.describe("Contact Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact")
  })

  test("should display contact page title", async ({ page }) => {
    await expect(page.locator("h1")).toContainText(/contact/i)
  })

  test("should display GHL widget placeholder", async ({ page }) => {
    // Look for the GHL widget placeholder section
    const widgetSection = page.locator('text=/chat|widget|contact form/i')
    await expect(widgetSection.first()).toBeVisible()
  })

  test("should display Toronto office information", async ({ page }) => {
    // Check for Toronto office
    await expect(
      page.locator('text=/Toronto|Thornhill|7191 Yonge/i').first()
    ).toBeVisible()

    // Check for phone number
    await expect(page.locator('text=/416.*491.*7727/').first()).toBeVisible()
  })

  test("should display Mississauga office information", async ({ page }) => {
    // Check for Mississauga office
    await expect(
      page.locator('text=/Mississauga|218 Export/i').first()
    ).toBeVisible()

    // Check for phone number
    await expect(page.locator('text=/905.*612.*0800/').first()).toBeVisible()
  })

  test("should have clickable phone links", async ({ page }) => {
    const phoneLinks = page.locator('a[href^="tel:"]')
    const count = await phoneLinks.count()

    expect(count).toBeGreaterThan(0)

    // Verify href format
    const href = await phoneLinks.first().getAttribute("href")
    expect(href).toMatch(/^tel:\+?[\d-]+/)
  })

  test("should have clickable email links", async ({ page }) => {
    const emailLinks = page.locator('a[href^="mailto:"]')
    const count = await emailLinks.count()

    expect(count).toBeGreaterThan(0)

    // Verify href format
    const href = await emailLinks.first().getAttribute("href")
    expect(href).toMatch(/^mailto:.+@.+/)
  })
})

test.describe("Contact CTA Buttons", () => {
  test("should have contact button on homepage", async ({ page }) => {
    await page.goto("/")

    // Look for contact CTA
    const contactLink = page.locator('a[href="/contact"]').first()
    await expect(contactLink).toBeVisible()
  })

  test("should navigate to contact page from CTA", async ({ page }) => {
    await page.goto("/")

    // Click on a contact link (could be in header or CTA section)
    await page.click('a[href="/contact"]')
    await expect(page).toHaveURL("/contact")
  })
})

test.describe("Contact Information Accuracy", () => {
  test("should display correct Toronto address", async ({ page }) => {
    await page.goto("/contact")

    // Verify exact address components
    await expect(
      page.locator('text=/7191 Yonge.*Street/i').first()
    ).toBeVisible()
    await expect(page.locator('text=/Suite.*711/i').first()).toBeVisible()
    await expect(page.locator('text=/L3T.*0C4/i').first()).toBeVisible()
  })

  test("should display correct Mississauga address", async ({ page }) => {
    await page.goto("/contact")

    // Verify exact address components
    await expect(
      page.locator('text=/218 Export.*Boulevard/i').first()
    ).toBeVisible()
    await expect(page.locator('text=/Suite.*610/i').first()).toBeVisible()
    await expect(page.locator('text=/L5S.*0A7/i').first()).toBeVisible()
  })
})

test.describe("Social Links on Contact Page", () => {
  test("should display social media links", async ({ page }) => {
    await page.goto("/contact")

    // Check for social links in footer or contact page
    const socialLinks = page.locator(
      'a[href*="facebook.com"], a[href*="linkedin.com"], a[href*="instagram.com"]'
    )

    // At least one social link should be visible
    expect(await socialLinks.count()).toBeGreaterThan(0)
  })

  test("social links should open in new tab", async ({ page }) => {
    await page.goto("/contact")

    const socialLinks = page.locator(
      'a[href*="facebook.com"], a[href*="linkedin.com"]'
    )
    const count = await socialLinks.count()

    for (let i = 0; i < count; i++) {
      const link = socialLinks.nth(i)
      await expect(link).toHaveAttribute("target", "_blank")
    }
  })
})

test.describe("Contact Page Accessibility", () => {
  test("office cards should have proper headings", async ({ page }) => {
    await page.goto("/contact")

    // Look for heading structure
    const headings = page.locator("h2, h3")
    const count = await headings.count()

    expect(count).toBeGreaterThan(0)
  })

  test("links should be distinguishable", async ({ page }) => {
    await page.goto("/contact")

    const links = page.locator("main a")
    const count = await links.count()

    for (let i = 0; i < Math.min(count, 5); i++) {
      const link = links.nth(i)
      // Links should have visible text or aria-label
      const text = await link.textContent()
      const ariaLabel = await link.getAttribute("aria-label")

      expect(text || ariaLabel).toBeTruthy()
    }
  })
})
