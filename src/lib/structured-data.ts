/**
 * Structured Data Library - Schema.org JSON-LD generators
 * For SEO and Answer Engine Optimization (AEO)
 */
import { siteConfig } from "@/config/site"

/**
 * Organization Schema - Main company information
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: "OM Financial",
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logos/om-financial-logo.png`,
    description: siteConfig.description,
    foundingDate: "1970",
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone.toronto,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.offices.toronto.address,
      addressLocality: siteConfig.offices.toronto.city,
      addressRegion: siteConfig.offices.toronto.province,
      postalCode: siteConfig.offices.toronto.postalCode,
      addressCountry: siteConfig.offices.toronto.country,
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.linkedin,
      siteConfig.social.instagram,
      siteConfig.social.twitter,
      siteConfig.social.youtube,
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phone.toronto,
        contactType: "customer service",
        areaServed: "CA",
        availableLanguage: ["English"],
      },
    ],
  }
}

/**
 * LocalBusiness Schema - Toronto Office
 */
export function generateTorontoOfficeSchema() {
  const office = siteConfig.offices.toronto
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": `${siteConfig.url}/#toronto-office`,
    name: `${siteConfig.name} - Toronto`,
    image: `${siteConfig.url}/images/offices/toronto-office.jpg`,
    url: siteConfig.url,
    telephone: office.phone,
    faxNumber: office.fax,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: office.address,
      addressLocality: office.city,
      addressRegion: office.province,
      postalCode: office.postalCode,
      addressCountry: office.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: office.coordinates.lat,
      longitude: office.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: office.coordinates.lat,
        longitude: office.coordinates.lng,
      },
      geoRadius: "100000",
    },
    parentOrganization: {
      "@id": `${siteConfig.url}/#organization`,
    },
  }
}

/**
 * LocalBusiness Schema - Mississauga Office
 */
export function generateMississaugaOfficeSchema() {
  const office = siteConfig.offices.mississauga
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": `${siteConfig.url}/#mississauga-office`,
    name: `${siteConfig.name} - Mississauga`,
    image: `${siteConfig.url}/images/offices/mississauga-office.jpg`,
    url: siteConfig.url,
    telephone: office.phone,
    faxNumber: office.fax,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: office.address,
      addressLocality: office.city,
      addressRegion: office.province,
      postalCode: office.postalCode,
      addressCountry: office.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: office.coordinates.lat,
      longitude: office.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: office.coordinates.lat,
        longitude: office.coordinates.lng,
      },
      geoRadius: "100000",
    },
    parentOrganization: {
      "@id": `${siteConfig.url}/#organization`,
    },
  }
}

/**
 * BreadcrumbList Schema Generator
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; href: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  }
}

/**
 * WebPage Schema Generator
 */
export function generateWebPageSchema(options: {
  title: string
  description: string
  path: string
  datePublished?: string
  dateModified?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}${options.path}`,
    url: `${siteConfig.url}${options.path}`,
    name: options.title,
    description: options.description,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#organization`,
    },
    datePublished: options.datePublished,
    dateModified: options.dateModified || options.datePublished,
    inLanguage: "en-CA",
  }
}

/**
 * FAQPage Schema Generator
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

/**
 * Article Schema Generator (for blog posts)
 */
export function generateArticleSchema(options: {
  title: string
  description: string
  path: string
  image?: string
  datePublished: string
  dateModified?: string
  author?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: options.title,
    description: options.description,
    image: options.image
      ? `${siteConfig.url}${options.image}`
      : `${siteConfig.url}${siteConfig.ogImage}`,
    url: `${siteConfig.url}${options.path}`,
    datePublished: options.datePublished,
    dateModified: options.dateModified || options.datePublished,
    author: {
      "@type": "Organization",
      name: options.author || siteConfig.name,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${options.path}`,
    },
  }
}

/**
 * Service Schema Generator
 */
export function generateServiceSchema(options: {
  name: string
  description: string
  path: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: options.name,
    description: options.description,
    url: `${siteConfig.url}${options.path}`,
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Canada",
    },
  }
}

/**
 * Person Schema Generator (for team members)
 */
export function generatePersonSchema(options: {
  name: string
  jobTitle: string
  email?: string
  telephone?: string
  image?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: options.name,
    jobTitle: options.jobTitle,
    email: options.email,
    telephone: options.telephone,
    image: options.image,
    worksFor: {
      "@id": `${siteConfig.url}/#organization`,
    },
  }
}

/**
 * Website Schema
 */
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-CA",
  }
}

/**
 * Combine multiple schemas into a single graph
 */
export function combineSchemas(
  ...schemas: Array<Record<string, unknown>>
): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": schemas.map((schema) => {
      // Remove @context from individual schemas when combining
      const { "@context": _, ...rest } = schema
      return rest
    }),
  })
}
