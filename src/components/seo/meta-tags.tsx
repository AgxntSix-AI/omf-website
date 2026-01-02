import { useEffect } from "react"
import { generatePageMeta } from "@/config/seo"
import { siteConfig } from "@/config/site"

interface MetaTagsProps {
  title?: string
  description?: string
  path?: string
  image?: string
  type?: "website" | "article"
  noindex?: boolean
}

/**
 * MetaTags component - Updates document head with page-specific meta tags
 *
 * Usage:
 * ```tsx
 * <MetaTags
 *   title="About Us"
 *   description="Learn about OM Financial"
 *   path="/about"
 * />
 * ```
 */
export function MetaTags({
  title,
  description,
  path = "/",
  image,
  type = "website",
  noindex = false,
}: MetaTagsProps) {
  const meta = generatePageMeta({ title, description, path, image })

  useEffect(() => {
    // Update document title
    document.title = meta.title

    // Helper to update or create meta tag
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name"
      let element = document.querySelector(`meta[${attr}="${name}"]`)
      if (!element) {
        element = document.createElement("meta")
        element.setAttribute(attr, name)
        document.head.appendChild(element)
      }
      element.setAttribute("content", content)
    }

    // Primary meta tags
    setMeta("description", meta.description)
    if (noindex) {
      setMeta("robots", "noindex, nofollow")
    } else {
      setMeta("robots", "index, follow")
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.setAttribute("rel", "canonical")
      document.head.appendChild(canonical)
    }
    canonical.setAttribute("href", meta.canonical)

    // Open Graph tags
    setMeta("og:type", type, true)
    setMeta("og:url", meta.openGraph.url, true)
    setMeta("og:title", meta.openGraph.title, true)
    setMeta("og:description", meta.openGraph.description, true)
    setMeta("og:image", meta.openGraph.images[0].url, true)
    setMeta("og:image:width", "1200", true)
    setMeta("og:image:height", "630", true)
    setMeta("og:site_name", siteConfig.name, true)
    setMeta("og:locale", "en_CA", true)

    // Twitter tags
    setMeta("twitter:card", "summary_large_image", true)
    setMeta("twitter:url", meta.twitter.images[0], true)
    setMeta("twitter:title", meta.twitter.title, true)
    setMeta("twitter:description", meta.twitter.description, true)
    setMeta("twitter:image", meta.twitter.images[0], true)
    setMeta("twitter:creator", "@OmFinancial_Inc", true)

    // Cleanup function not needed as meta tags should persist
  }, [meta, type, noindex])

  return null
}

export default MetaTags
