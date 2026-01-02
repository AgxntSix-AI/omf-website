/**
 * SEO configuration - default meta tags and structured data
 */
import { siteConfig } from "./site"

export const defaultMeta = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "MGA Canada",
    "Managing General Agency",
    "life insurance Canada",
    "health insurance",
    "disability insurance",
    "critical illness insurance",
    "group insurance",
    "RRSP",
    "TFSA",
    "segregated funds",
    "wealth management",
    "financial advisor",
    "insurance broker",
    "Toronto insurance",
    "Mississauga insurance",
    "Canadian insurance",
    "OM Financial",
  ],
  authors: [{ name: "OM Financial Inc." }],
  creator: "OM Financial Inc.",
  publisher: "OM Financial Inc.",
  robots: "index, follow",
  canonical: siteConfig.url,
}

export const openGraphDefaults = {
  type: "website",
  locale: "en_CA",
  siteName: siteConfig.name,
  title: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  images: [
    {
      url: `${siteConfig.url}${siteConfig.ogImage}`,
      width: 1200,
      height: 630,
      alt: siteConfig.name,
    },
  ],
}

export const twitterDefaults = {
  card: "summary_large_image",
  title: siteConfig.name,
  description: siteConfig.description,
  images: [`${siteConfig.url}${siteConfig.ogImage}`],
  creator: "@OmFinancial_Inc",
}

/**
 * Generate page-specific meta tags
 */
export function generatePageMeta(options: {
  title?: string
  description?: string
  path?: string
  image?: string
}) {
  const title = options.title
    ? `${options.title} | ${siteConfig.name}`
    : defaultMeta.title
  const description = options.description || defaultMeta.description
  const url = options.path ? `${siteConfig.url}${options.path}` : siteConfig.url
  const image = options.image
    ? `${siteConfig.url}${options.image}`
    : `${siteConfig.url}${siteConfig.ogImage}`

  return {
    title,
    description,
    canonical: url,
    openGraph: {
      ...openGraphDefaults,
      title,
      description,
      url,
      images: [{ ...openGraphDefaults.images[0], url: image }],
    },
    twitter: {
      ...twitterDefaults,
      title,
      description,
      images: [image],
    },
  }
}
