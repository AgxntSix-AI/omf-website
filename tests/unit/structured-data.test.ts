import { describe, it, expect } from "vitest"
import {
  generateOrganizationSchema,
  generateTorontoOfficeSchema,
  generateMississaugaOfficeSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
  generateFAQSchema,
  generateArticleSchema,
  generateServiceSchema,
  generatePersonSchema,
  generateWebsiteSchema,
  combineSchemas,
} from "@/lib/structured-data"

describe("Structured Data - Organization Schema", () => {
  it("should generate valid Organization schema", () => {
    const schema = generateOrganizationSchema()

    expect(schema["@context"]).toBe("https://schema.org")
    expect(schema["@type"]).toBe("Organization")
    expect(schema.name).toBe("OM Financial Inc.")
    expect(schema.url).toBeDefined()
    expect(schema.logo).toBeDefined()
    expect(schema.email).toBeDefined()
    expect(schema.telephone).toBeDefined()
  })

  it("should include social media links", () => {
    const schema = generateOrganizationSchema()

    expect(schema.sameAs).toBeInstanceOf(Array)
    expect(schema.sameAs.length).toBeGreaterThan(0)
  })

  it("should include contact point", () => {
    const schema = generateOrganizationSchema()

    expect(schema.contactPoint).toBeInstanceOf(Array)
    expect(schema.contactPoint[0]["@type"]).toBe("ContactPoint")
    expect(schema.contactPoint[0].contactType).toBe("customer service")
  })

  it("should include address", () => {
    const schema = generateOrganizationSchema()

    expect(schema.address["@type"]).toBe("PostalAddress")
    expect(schema.address.addressCountry).toBe("Canada")
  })
})

describe("Structured Data - LocalBusiness Schemas", () => {
  it("should generate valid Toronto office schema", () => {
    const schema = generateTorontoOfficeSchema()

    expect(schema["@context"]).toBe("https://schema.org")
    expect(schema["@type"]).toBe("FinancialService")
    expect(schema.name).toContain("Toronto")
    expect(schema.telephone).toBeDefined()
    expect(schema.geo).toBeDefined()
    expect(schema.geo["@type"]).toBe("GeoCoordinates")
  })

  it("should generate valid Mississauga office schema", () => {
    const schema = generateMississaugaOfficeSchema()

    expect(schema["@context"]).toBe("https://schema.org")
    expect(schema["@type"]).toBe("FinancialService")
    expect(schema.name).toContain("Mississauga")
    expect(schema.telephone).toBeDefined()
    expect(schema.geo).toBeDefined()
  })

  it("should include opening hours", () => {
    const torontoSchema = generateTorontoOfficeSchema()
    const mississaugaSchema = generateMississaugaOfficeSchema()

    expect(torontoSchema.openingHoursSpecification).toBeInstanceOf(Array)
    expect(mississaugaSchema.openingHoursSpecification).toBeInstanceOf(Array)
  })

  it("should include parent organization reference", () => {
    const schema = generateTorontoOfficeSchema()

    expect(schema.parentOrganization).toBeDefined()
    expect(schema.parentOrganization["@id"]).toContain("#organization")
  })
})

describe("Structured Data - Breadcrumb Schema", () => {
  it("should generate valid BreadcrumbList schema", () => {
    const items = [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
    ]
    const schema = generateBreadcrumbSchema(items)

    expect(schema["@context"]).toBe("https://schema.org")
    expect(schema["@type"]).toBe("BreadcrumbList")
    expect(schema.itemListElement).toBeInstanceOf(Array)
  })

  it("should have correct position numbers", () => {
    const items = [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Team", href: "/about/team" },
    ]
    const schema = generateBreadcrumbSchema(items)

    expect(schema.itemListElement[0].position).toBe(1)
    expect(schema.itemListElement[1].position).toBe(2)
    expect(schema.itemListElement[2].position).toBe(3)
  })

  it("should include full URLs", () => {
    const items = [{ name: "About", href: "/about" }]
    const schema = generateBreadcrumbSchema(items)

    expect(schema.itemListElement[0].item).toContain("https://")
    expect(schema.itemListElement[0].item).toContain("/about")
  })
})

describe("Structured Data - WebPage Schema", () => {
  it("should generate valid WebPage schema", () => {
    const schema = generateWebPageSchema({
      title: "Test Page",
      description: "Test description",
      path: "/test",
    })

    expect(schema["@context"]).toBe("https://schema.org")
    expect(schema["@type"]).toBe("WebPage")
    expect(schema.name).toBe("Test Page")
    expect(schema.description).toBe("Test description")
  })

  it("should include dates when provided", () => {
    const schema = generateWebPageSchema({
      title: "Test",
      description: "Test",
      path: "/test",
      datePublished: "2024-01-01",
      dateModified: "2024-01-15",
    })

    expect(schema.datePublished).toBe("2024-01-01")
    expect(schema.dateModified).toBe("2024-01-15")
  })

  it("should use datePublished as dateModified fallback", () => {
    const schema = generateWebPageSchema({
      title: "Test",
      description: "Test",
      path: "/test",
      datePublished: "2024-01-01",
    })

    expect(schema.dateModified).toBe("2024-01-01")
  })
})

describe("Structured Data - FAQ Schema", () => {
  it("should generate valid FAQPage schema", () => {
    const faqs = [
      { question: "What is OM Financial?", answer: "A Canadian MGA." },
      { question: "Where are you located?", answer: "Toronto and Mississauga." },
    ]
    const schema = generateFAQSchema(faqs)

    expect(schema["@context"]).toBe("https://schema.org")
    expect(schema["@type"]).toBe("FAQPage")
    expect(schema.mainEntity).toBeInstanceOf(Array)
    expect(schema.mainEntity.length).toBe(2)
  })

  it("should format questions correctly", () => {
    const faqs = [{ question: "Test question?", answer: "Test answer." }]
    const schema = generateFAQSchema(faqs)

    expect(schema.mainEntity[0]["@type"]).toBe("Question")
    expect(schema.mainEntity[0].name).toBe("Test question?")
    expect(schema.mainEntity[0].acceptedAnswer["@type"]).toBe("Answer")
    expect(schema.mainEntity[0].acceptedAnswer.text).toBe("Test answer.")
  })
})

describe("Structured Data - Article Schema", () => {
  it("should generate valid Article schema", () => {
    const schema = generateArticleSchema({
      title: "Test Article",
      description: "Test description",
      path: "/blog/test",
      datePublished: "2024-01-01",
    })

    expect(schema["@context"]).toBe("https://schema.org")
    expect(schema["@type"]).toBe("Article")
    expect(schema.headline).toBe("Test Article")
  })

  it("should include author and publisher", () => {
    const schema = generateArticleSchema({
      title: "Test",
      description: "Test",
      path: "/blog/test",
      datePublished: "2024-01-01",
      author: "John Doe",
    })

    expect(schema.author["@type"]).toBe("Organization")
    expect(schema.publisher["@id"]).toContain("#organization")
  })
})

describe("Structured Data - Service Schema", () => {
  it("should generate valid Service schema", () => {
    const schema = generateServiceSchema({
      name: "Life Insurance",
      description: "Comprehensive life insurance solutions",
      path: "/products/life-insurance",
    })

    expect(schema["@context"]).toBe("https://schema.org")
    expect(schema["@type"]).toBe("Service")
    expect(schema.name).toBe("Life Insurance")
    expect(schema.areaServed["@type"]).toBe("Country")
    expect(schema.areaServed.name).toBe("Canada")
  })
})

describe("Structured Data - Person Schema", () => {
  it("should generate valid Person schema", () => {
    const schema = generatePersonSchema({
      name: "John Doe",
      jobTitle: "CEO",
      email: "john@example.com",
    })

    expect(schema["@context"]).toBe("https://schema.org")
    expect(schema["@type"]).toBe("Person")
    expect(schema.name).toBe("John Doe")
    expect(schema.jobTitle).toBe("CEO")
    expect(schema.worksFor["@id"]).toContain("#organization")
  })
})

describe("Structured Data - Website Schema", () => {
  it("should generate valid WebSite schema", () => {
    const schema = generateWebsiteSchema()

    expect(schema["@context"]).toBe("https://schema.org")
    expect(schema["@type"]).toBe("WebSite")
    expect(schema.url).toBeDefined()
    expect(schema.name).toBe("OM Financial Inc.")
    expect(schema.inLanguage).toBe("en-CA")
  })
})

describe("Structured Data - Combine Schemas", () => {
  it("should combine multiple schemas into @graph", () => {
    const org = generateOrganizationSchema()
    const website = generateWebsiteSchema()
    const combined = combineSchemas(org, website)
    const parsed = JSON.parse(combined)

    expect(parsed["@context"]).toBe("https://schema.org")
    expect(parsed["@graph"]).toBeInstanceOf(Array)
    expect(parsed["@graph"].length).toBe(2)
  })

  it("should remove individual @context from combined schemas", () => {
    const org = generateOrganizationSchema()
    const website = generateWebsiteSchema()
    const combined = combineSchemas(org, website)
    const parsed = JSON.parse(combined)

    // Individual schemas in @graph should not have @context
    parsed["@graph"].forEach((schema: Record<string, unknown>) => {
      expect(schema["@context"]).toBeUndefined()
    })
  })

  it("should return valid JSON string", () => {
    const org = generateOrganizationSchema()
    const combined = combineSchemas(org)

    expect(() => JSON.parse(combined)).not.toThrow()
  })
})
