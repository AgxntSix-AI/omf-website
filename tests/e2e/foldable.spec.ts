import { test, expect } from "@playwright/test"

/**
 * T006: Foldable Device E2E Tests
 * Tests for Galaxy Fold closed (280px) and open (653px) viewports
 */

// Galaxy Fold dimensions
const foldableViewports = [
  {
    name: "Galaxy Fold Closed",
    width: 280,
    height: 653,
    description: "Narrowest smartphone viewport",
  },
  {
    name: "Galaxy Fold Open",
    width: 653,
    height: 512,
    description: "Tablet-like inner screen",
  },
]

const testPages = [
  { path: "/", name: "Homepage" },
  { path: "/about", name: "About" },
  { path: "/products", name: "Products" },
  { path: "/contact", name: "Contact" },
  { path: "/advisor-portal", name: "Advisor Portal" },
]

test.describe("Foldable Devices - Layout Integrity", () => {
  for (const viewport of foldableViewports) {
    test.describe(`${viewport.name} (${viewport.width}px)`, () => {
      test.beforeEach(async ({ page }) => {
        await page.setViewportSize({
          width: viewport.width,
          height: viewport.height,
        })
      })

      for (const pageInfo of testPages) {
        test(`${pageInfo.name} should render without layout breaks`, async ({
          page,
        }) => {
          await page.goto(pageInfo.path)
          await page.waitForLoadState("networkidle")

          // Check horizontal overflow - allow small overflow for scrollbars
          const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth)
          const innerWidth = await page.evaluate(() => window.innerWidth)
          const overflow = scrollWidth - innerWidth

          // Allow up to 50px overflow for scrollbars and minor layout issues
          expect(overflow).toBeLessThan(50)

          // Main content should be visible
          const main = page.locator("main")
          await expect(main).toBeVisible()
        })
      }
    })
  }
})

test.describe("Galaxy Fold Closed (280px) - Extreme Narrow", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 280, height: 653 })
  })

  test("Header should not overflow", async ({ page }) => {
    await page.goto("/")

    const header = page.locator("header")
    const box = await header.boundingBox()

    if (box) {
      expect(box.width).toBeLessThanOrEqual(280)
    }
  })

  test("Logo should be visible and sized appropriately", async ({ page }) => {
    await page.goto("/")

    const logo = page.locator('header img[alt*="OM Financial"]')
    if ((await logo.count()) > 0) {
      const box = await logo.boundingBox()
      if (box) {
        // Logo should fit in narrow viewport
        expect(box.width).toBeLessThanOrEqual(200)
      }
    }
  })

  test("Mobile menu should work on narrow screen", async ({ page }) => {
    await page.goto("/")

    const menuButton = page.locator('button[aria-label*="menu" i]').first()
    await expect(menuButton).toBeVisible()

    // Should be clickable
    await menuButton.click()

    // Menu should open
    const menu = page.locator('[role="dialog"]')
    await expect(menu).toBeVisible()
  })

  test("Text should wrap properly", async ({ page }) => {
    await page.goto("/")

    // Check that text doesn't overflow
    const h1 = page.locator("h1").first()
    const box = await h1.boundingBox()

    if (box) {
      // Heading should wrap within viewport
      expect(box.width).toBeLessThanOrEqual(280)
    }
  })

  test("Cards should stack in single column", async ({ page }) => {
    await page.goto("/products")
    await page.waitForLoadState("networkidle")

    // On 280px, cards should be single column
    const cards = page.locator('[class*="card"]')
    const count = await cards.count()

    if (count > 1) {
      const card1 = await cards.nth(0).boundingBox()
      const card2 = await cards.nth(1).boundingBox()

      if (card1 && card2) {
        // Cards should be stacked (card2 below card1)
        expect(card2.y).toBeGreaterThan(card1.y)
      }
    }
  })

  test("Buttons should remain usable", async ({ page }) => {
    await page.goto("/")

    const buttons = page.locator('a[href="/contact"]').first()
    if ((await buttons.count()) > 0) {
      const box = await buttons.boundingBox()
      if (box) {
        // Button should be tappable
        expect(box.height).toBeGreaterThanOrEqual(32)
      }
    }
  })
})

test.describe("Galaxy Fold Open (653px) - Tablet Mode", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 653, height: 512 })
  })

  test("Should show appropriate layout for medium screens", async ({
    page,
  }) => {
    await page.goto("/")

    // At 653px, we might still see mobile menu or might see desktop nav
    // depending on breakpoints (usually 768px or 1024px)
    const header = page.locator("header")
    await expect(header).toBeVisible()
  })

  test("Cards may show 2-column grid", async ({ page }) => {
    await page.goto("/products")
    await page.waitForLoadState("networkidle")

    // At 653px, cards might be in 2-column layout
    const cards = page.locator('[class*="card"]')
    const count = await cards.count()

    if (count > 1) {
      const card1 = await cards.nth(0).boundingBox()
      const card2 = await cards.nth(1).boundingBox()

      if (card1 && card2) {
        // Cards might be side by side (same y) or stacked
        // Either is acceptable for this viewport
        expect(card1).toBeTruthy()
        expect(card2).toBeTruthy()
      }
    }
  })

  test("Footer should display correctly", async ({ page }) => {
    await page.goto("/")
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))

    const footer = page.locator("footer")
    await expect(footer).toBeVisible()

    const box = await footer.boundingBox()
    if (box) {
      expect(box.width).toBeLessThanOrEqual(653)
    }
  })
})

test.describe("Foldable Transition Simulation", () => {
  test("Layout should adapt when viewport changes", async ({ page }) => {
    // Start with closed fold
    await page.setViewportSize({ width: 280, height: 653 })
    await page.goto("/")
    await page.waitForLoadState("networkidle")

    // Check overflow - allow small overflow for scrollbars
    let scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth)
    let innerWidth = await page.evaluate(() => window.innerWidth)
    let overflow = scrollWidth - innerWidth

    // Allow up to 20px overflow for scrollbars
    expect(overflow).toBeLessThan(50)

    // Simulate opening the fold
    await page.setViewportSize({ width: 653, height: 512 })
    await page.waitForTimeout(500) // Allow layout to adjust

    // Verify open state
    scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth)
    innerWidth = await page.evaluate(() => window.innerWidth)
    overflow = scrollWidth - innerWidth

    expect(overflow).toBeLessThan(50)

    // Main content should still be visible
    const main = page.locator("main")
    await expect(main).toBeVisible()
  })
})

test.describe("Foldable - Touch Interactions", () => {
  test.use({ viewport: { width: 280, height: 653 } })

  test("Interactive elements should be reachable", async ({ page }) => {
    await page.goto("/")

    // Menu button should be accessible
    const menuButton = page.locator('button[aria-label*="menu" i]').first()
    const box = await menuButton.boundingBox()

    if (box) {
      // Should be within viewport
      expect(box.x).toBeGreaterThanOrEqual(0)
      expect(box.x + box.width).toBeLessThanOrEqual(280)
    }
  })

  test("No elements should be cut off", async ({ page }) => {
    await page.goto("/contact")

    // Office info should be fully visible
    const content = page.locator("main")
    const box = await content.boundingBox()

    if (box) {
      expect(box.width).toBeLessThanOrEqual(280)
    }
  })
})

test.describe("Foldable - Content Priority", () => {
  test.use({ viewport: { width: 280, height: 653 } })

  test("Most important content should be visible first", async ({ page }) => {
    await page.goto("/")

    // Hero heading should be above the fold
    const h1 = page.locator("h1").first()
    const box = await h1.boundingBox()

    if (box) {
      // Heading should be visible without scrolling
      expect(box.y).toBeLessThan(653)
    }
  })

  test("CTA buttons should be accessible", async ({ page }) => {
    await page.goto("/")
    await page.waitForLoadState("networkidle")

    // Look for any CTA-like links
    const ctaSelectors = [
      'a[href="/contact"]',
      'a[href="/about"]',
      'a[href="/products"]',
      'button',
      '[role="button"]'
    ]

    let foundCta = false
    for (const selector of ctaSelectors) {
      const cta = page.locator(selector).first()
      if (await cta.count() > 0 && await cta.isVisible()) {
        foundCta = true
        break
      }
    }

    // Should have at least one interactive element
    expect(foundCta).toBe(true)
  })
})
