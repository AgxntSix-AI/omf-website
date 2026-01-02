import { describe, it, expect } from "vitest"
import {
  mainNavigation,
  footerNavigation,
  type NavItem,
} from "@/config/navigation"

describe("Navigation Config - Main Navigation", () => {
  it("should have Home as the first item", () => {
    expect(mainNavigation[0].title).toBe("Home")
    expect(mainNavigation[0].href).toBe("/")
  })

  it("should have Contact as the last item", () => {
    const lastItem = mainNavigation[mainNavigation.length - 1]
    expect(lastItem.title).toBe("Contact")
    expect(lastItem.href).toBe("/contact")
  })

  it("should have all required top-level navigation items", () => {
    const titles = mainNavigation.map((item) => item.title)

    expect(titles).toContain("Home")
    expect(titles).toContain("About")
    expect(titles).toContain("Products")
    expect(titles).toContain("Acquisitions")
    expect(titles).toContain("Seminars")
    expect(titles).toContain("Advisor Benefits")
    expect(titles).toContain("Advisor Portal")
    expect(titles).toContain("Contact")
  })

  it("should have valid hrefs starting with /", () => {
    const checkHrefs = (items: NavItem[]) => {
      items.forEach((item) => {
        if (!item.external) {
          expect(item.href).toMatch(/^\//)
        }
        if (item.children) {
          checkHrefs(item.children)
        }
      })
    }

    checkHrefs(mainNavigation)
  })

  it("should mark external links correctly", () => {
    const findExternalLinks = (items: NavItem[]): NavItem[] => {
      const external: NavItem[] = []
      items.forEach((item) => {
        if (item.external) {
          external.push(item)
        }
        if (item.children) {
          external.push(...findExternalLinks(item.children))
        }
      })
      return external
    }

    const externalLinks = findExternalLinks(mainNavigation)
    expect(externalLinks.length).toBeGreaterThan(0)

    externalLinks.forEach((link) => {
      expect(link.href).toMatch(/^https?:\/\//)
    })
  })
})

describe("Navigation Config - About Dropdown", () => {
  const aboutNav = mainNavigation.find((item) => item.title === "About")

  it("should have children", () => {
    expect(aboutNav?.children).toBeDefined()
    expect(aboutNav?.children?.length).toBeGreaterThan(0)
  })

  it("should include all About section pages", () => {
    const titles = aboutNav?.children?.map((item) => item.title) || []

    expect(titles).toContain("Vision & Mission")
    expect(titles).toContain("Leadership")
    expect(titles).toContain("History & Strategy")
    expect(titles).toContain("Executive Team")
    expect(titles).toContain("News")
    expect(titles).toContain("Gallery")
    expect(titles).toContain("Disclaimer")
  })

  it("should have descriptions for all children", () => {
    aboutNav?.children?.forEach((child) => {
      expect(child.description).toBeDefined()
      expect(child.description?.length).toBeGreaterThan(0)
    })
  })
})

describe("Navigation Config - Advisor Portal Dropdown", () => {
  const portalNav = mainNavigation.find(
    (item) => item.title === "Advisor Portal"
  )

  it("should have children", () => {
    expect(portalNav?.children).toBeDefined()
    expect(portalNav?.children?.length).toBeGreaterThan(0)
  })

  it("should include Virtgate as external link", () => {
    const virtgate = portalNav?.children?.find(
      (item) => item.title === "Virtgate"
    )

    expect(virtgate).toBeDefined()
    expect(virtgate?.external).toBe(true)
    expect(virtgate?.href).toContain("virtgate")
  })

  it("should include all portal sections", () => {
    const titles = portalNav?.children?.map((item) => item.title) || []

    expect(titles).toContain("Event Calendar")
    expect(titles).toContain("Training Library")
    expect(titles).toContain("Blogs")
    expect(titles).toContain("Toolbox")
    expect(titles).toContain("Compliance")
    expect(titles).toContain("OM University")
    expect(titles).toContain("Calculators")
    expect(titles).toContain("Incentives & Contests")
  })
})

describe("Navigation Config - Footer Navigation", () => {
  it("should have company section", () => {
    expect(footerNavigation.company).toBeDefined()
    expect(footerNavigation.company.length).toBeGreaterThan(0)
  })

  it("should have services section", () => {
    expect(footerNavigation.services).toBeDefined()
    expect(footerNavigation.services.length).toBeGreaterThan(0)
  })

  it("should have advisors section", () => {
    expect(footerNavigation.advisors).toBeDefined()
    expect(footerNavigation.advisors.length).toBeGreaterThan(0)
  })

  it("should have legal section", () => {
    expect(footerNavigation.legal).toBeDefined()
    expect(footerNavigation.legal.length).toBeGreaterThan(0)
  })

  it("should include Disclaimer in legal section", () => {
    const legalTitles = footerNavigation.legal.map((item) => item.title)
    expect(legalTitles).toContain("Disclaimer")
  })

  it("should include Privacy Policy in legal section", () => {
    const legalTitles = footerNavigation.legal.map((item) => item.title)
    expect(legalTitles).toContain("Privacy Policy")
  })

  it("should mark Virtgate as external in advisors section", () => {
    const virtgate = footerNavigation.advisors.find(
      (item) => item.title === "Virtgate"
    )
    expect(virtgate?.external).toBe(true)
  })
})

describe("Navigation Config - NavItem Interface", () => {
  it("should have required title property", () => {
    mainNavigation.forEach((item) => {
      expect(typeof item.title).toBe("string")
      expect(item.title.length).toBeGreaterThan(0)
    })
  })

  it("should have required href property", () => {
    mainNavigation.forEach((item) => {
      expect(typeof item.href).toBe("string")
      expect(item.href.length).toBeGreaterThan(0)
    })
  })

  it("should have optional description as string or undefined", () => {
    mainNavigation.forEach((item) => {
      if (item.description !== undefined) {
        expect(typeof item.description).toBe("string")
      }
    })
  })

  it("should have optional external as boolean or undefined", () => {
    const checkExternal = (items: NavItem[]) => {
      items.forEach((item) => {
        if (item.external !== undefined) {
          expect(typeof item.external).toBe("boolean")
        }
        if (item.children) {
          checkExternal(item.children)
        }
      })
    }

    checkExternal(mainNavigation)
  })

  it("should have optional children as array or undefined", () => {
    mainNavigation.forEach((item) => {
      if (item.children !== undefined) {
        expect(Array.isArray(item.children)).toBe(true)
      }
    })
  })
})

describe("Navigation Config - Route Paths", () => {
  it("should have consistent path patterns for About section", () => {
    const aboutNav = mainNavigation.find((item) => item.title === "About")
    aboutNav?.children?.forEach((child) => {
      if (!child.external) {
        expect(child.href).toMatch(/^\/about\//)
      }
    })
  })

  it("should have consistent path patterns for Advisor Portal section", () => {
    const portalNav = mainNavigation.find(
      (item) => item.title === "Advisor Portal"
    )
    portalNav?.children?.forEach((child) => {
      if (!child.external) {
        expect(child.href).toMatch(/^\/advisor-portal\//)
      }
    })
  })

  it("should have consistent path patterns for Products section", () => {
    const productsNav = mainNavigation.find((item) => item.title === "Products")
    productsNav?.children?.forEach((child) => {
      if (!child.external) {
        expect(child.href).toMatch(/^\/products\//)
      }
    })
  })

  it("should not have trailing slashes", () => {
    const checkTrailingSlash = (items: NavItem[]) => {
      items.forEach((item) => {
        if (!item.external && item.href !== "/") {
          expect(item.href).not.toMatch(/\/$/)
        }
        if (item.children) {
          checkTrailingSlash(item.children)
        }
      })
    }

    checkTrailingSlash(mainNavigation)
  })
})
