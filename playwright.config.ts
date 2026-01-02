import { defineConfig, devices } from "@playwright/test"

/**
 * Playwright E2E Test Configuration
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["html", { open: "never" }], ["list"]],

  use: {
    baseURL: "http://localhost:5173",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
    // Mobile viewports
    {
      name: "mobile-chrome",
      use: { ...devices["Pixel 7"] },
    },
    {
      name: "mobile-safari",
      use: { ...devices["iPhone 15 Pro"] },
    },
    {
      name: "samsung-s25",
      use: {
        viewport: { width: 412, height: 915 },
        userAgent:
          "Mozilla/5.0 (Linux; Android 15; SM-S936B) AppleWebKit/537.36",
        isMobile: true,
        hasTouch: true,
      },
    },
    // Foldable devices
    {
      name: "galaxy-fold-closed",
      use: {
        viewport: { width: 280, height: 653 },
        userAgent:
          "Mozilla/5.0 (Linux; Android 12; SM-F926B) AppleWebKit/537.36",
      },
    },
    {
      name: "galaxy-fold-open",
      use: {
        viewport: { width: 653, height: 512 },
        userAgent:
          "Mozilla/5.0 (Linux; Android 12; SM-F926B) AppleWebKit/537.36",
      },
    },
  ],

  webServer: {
    command: "bun run dev",
    url: "http://localhost:5173",
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
})
