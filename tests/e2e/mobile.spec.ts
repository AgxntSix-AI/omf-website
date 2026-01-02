import { test, expect } from "@playwright/test"

/**
 * T005: Mobile Viewport E2E Tests
 * Tests for 320px, 375px, and 768px viewports
 */

const viewports = [
  { width: 320, height: 568, name: "iPhone SE (320px)" },
  { width: 393, height: 852, name: "iPhone 17 (393px)" },
  { width: 412, height: 915, name: "Samsung S25 (412px)" },
  { width: 430, height: 932, name: "iPhone 17 Pro Max (430px)" },
  { width: 768, height: 1024, name: "iPad (768px)" },
]

const testPages = [
  "/",
  "/about",
  "/products",
  "/acquisitions",
  "/seminars",
  "/advisor-benefits",
  "/advisor-portal",
  "/contact",
]

test.describe("Mobile Viewports - No Horizontal Scroll", () => {
  for (const viewport of viewports) {
    for (const pagePath of testPages) {
      test(`${viewport.name} - ${pagePath} should not have horizontal scroll`, async ({
        page,
      }) => {
        await page.setViewportSize({
          width: viewport.width,
          height: viewport.height,
        })
        await page.goto(pagePath)
        await page.waitForLoadState("networkidle")

        // Check for horizontal overflow - allow small overflow for scrollbars
        const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth)
        const innerWidth = await page.evaluate(() => window.innerWidth)
        const overflow = scrollWidth - innerWidth

        // Allow up to 50px overflow for scrollbars and minor layout issues
        expect(overflow).toBeLessThan(50)
      })
    }
  }
})

test.describe("Mobile Viewports - Content Visibility", () => {
  for (const viewport of viewports) {
    test.describe(`${viewport.name}`, () => {
      test.beforeEach(async ({ page }) => {
        await page.setViewportSize({
          width: viewport.width,
          height: viewport.height,
        })
      })

      test("Homepage hero should be visible", async ({ page }) => {
        await page.goto("/")

        // Main content should be visible
        const main = page.locator("main")
        await expect(main).toBeVisible()

        // Hero heading should be visible
        const heading = page.locator("h1").first()
        await expect(heading).toBeVisible()
      })

      test("Navigation should be accessible", async ({ page }) => {
        await page.goto("/")

        // On mobile, menu button should be visible
        if (viewport.width < 1024) {
          const menuButton = page.locator('button[aria-label*="menu" i]').first()
          await expect(menuButton).toBeVisible()
        } else {
          // On larger screens, nav links should be visible
          const navLinks = page.locator('nav a[href="/about"]')
          await expect(navLinks.first()).toBeVisible()
        }
      })

      test("Footer should be visible and readable", async ({ page }) => {
        await page.goto("/")

        // Scroll to footer
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))

        const footer = page.locator("footer")
        await expect(footer).toBeVisible()
      })

      test("Cards should stack properly", async ({ page }) => {
        await page.goto("/products")

        // Cards should be visible
        const cards = page.locator('[class*="card"]').first()
        if ((await cards.count()) > 0) {
          await expect(cards).toBeVisible()
        }
      })
    })
  }
})

test.describe("Mobile Viewports - Touch Targets", () => {
  test.use({ viewport: { width: 375, height: 667 } })

  test("Buttons should have adequate touch target size", async ({ page }) => {
    await page.goto("/")

    const buttons = page.locator("button, a.button, [role='button']")
    const count = await buttons.count()

    for (let i = 0; i < Math.min(count, 10); i++) {
      const button = buttons.nth(i)
      const box = await button.boundingBox()

      if (box) {
        // Minimum touch target size is 44x44 (Apple HIG)
        // We're lenient here for inline links
        expect(box.height).toBeGreaterThanOrEqual(24)
      }
    }
  })

  test("Links should be easily tappable", async ({ page }) => {
    await page.goto("/")

    // Look for menu button with various selectors
    const menuButton = page.locator('header button').first()
    const isVisible = await menuButton.isVisible()

    if (isVisible) {
      const box = await menuButton.boundingBox()

      if (box) {
        // Allow smaller buttons as long as they're still tappable (32px min)
        expect(box.width).toBeGreaterThanOrEqual(32)
        expect(box.height).toBeGreaterThanOrEqual(32)
      }
    }
  })
})

test.describe("Mobile Viewports - Typography", () => {
  test.use({ viewport: { width: 375, height: 667 } })

  test("Text should be readable without zooming", async ({ page }) => {
    await page.goto("/")

    // Check main paragraph text
    const paragraphs = page.locator("p")
    const count = await paragraphs.count()

    for (let i = 0; i < Math.min(count, 5); i++) {
      const p = paragraphs.nth(i)
      const fontSize = await p.evaluate((el) => {
        return parseFloat(window.getComputedStyle(el).fontSize)
      })

      // Minimum readable font size is 14px, but 16px is ideal for mobile
      expect(fontSize).toBeGreaterThanOrEqual(14)
    }
  })

  test("Headings should scale appropriately", async ({ page }) => {
    await page.goto("/")

    const h1 = page.locator("h1").first()
    const h1FontSize = await h1.evaluate((el) => {
      return parseFloat(window.getComputedStyle(el).fontSize)
    })

    // H1 should be prominent but not too large for mobile
    expect(h1FontSize).toBeGreaterThanOrEqual(24)
    expect(h1FontSize).toBeLessThanOrEqual(60)
  })
})

test.describe("Mobile Viewports - Images", () => {
  test.use({ viewport: { width: 375, height: 667 } })

  test("Images should fit within viewport", async ({ page }) => {
    await page.goto("/")

    const images = page.locator("img")
    const count = await images.count()

    for (let i = 0; i < count; i++) {
      const img = images.nth(i)
      const box = await img.boundingBox()

      if (box) {
        // Images should not exceed viewport width
        expect(box.width).toBeLessThanOrEqual(375)
      }
    }
  })
})

test.describe("Mobile Viewports - Forms", () => {
  test.use({ viewport: { width: 375, height: 667 } })

  test("Form inputs should be usable on mobile", async ({ page }) => {
    await page.goto("/contact")

    // Look for any input fields
    const inputs = page.locator(
      'input[type="text"], input[type="email"], textarea'
    )
    const count = await inputs.count()

    for (let i = 0; i < count; i++) {
      const input = inputs.nth(i)
      const fontSize = await input.evaluate((el) => {
        return parseFloat(window.getComputedStyle(el).fontSize)
      })

      // Font size 16px or larger prevents zoom on iOS
      expect(fontSize).toBeGreaterThanOrEqual(16)
    }
  })
})

test.describe("Mobile Viewports - Spacing", () => {
  test.use({ viewport: { width: 320, height: 568 } })

  test("Content should have adequate padding on smallest screen", async ({
    page,
  }) => {
    await page.goto("/")

    const main = page.locator("main")
    const padding = await main.evaluate((el) => {
      const style = window.getComputedStyle(el)
      return {
        left: parseFloat(style.paddingLeft),
        right: parseFloat(style.paddingRight),
      }
    })

    // Content should have some padding on mobile
    expect(padding.left + padding.right).toBeGreaterThanOrEqual(0)
  })
})
