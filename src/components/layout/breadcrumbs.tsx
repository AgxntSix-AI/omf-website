import { Link } from "@tanstack/react-router"
import { ChevronRight, Home } from "lucide-react"
import { StructuredData } from "@/components/seo/structured-data"
import { generateBreadcrumbSchema } from "@/lib/structured-data"

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

/**
 * Breadcrumbs component with visual navigation and JSON-LD schema
 *
 * Usage:
 * ```tsx
 * <Breadcrumbs
 *   items={[
 *     { name: "About", href: "/about" },
 *     { name: "Leadership", href: "/about/leadership" }
 *   ]}
 * />
 * ```
 */
export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  // Add home as the first item
  const allItems = [{ name: "Home", href: "/" }, ...items]

  // Generate schema for SEO
  const schema = generateBreadcrumbSchema(allItems)

  return (
    <>
      <StructuredData schema={schema} />
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center text-sm text-muted-foreground ${className}`}
      >
        <ol className="flex items-center gap-1.5 flex-wrap">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1
            const isHome = index === 0

            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {index > 0 && (
                  <ChevronRight
                    className="h-4 w-4 flex-shrink-0 text-muted-foreground/50"
                    aria-hidden="true"
                  />
                )}
                {isLast ? (
                  <span
                    className="font-medium text-foreground"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className="hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    {isHome && <Home className="h-4 w-4" aria-hidden="true" />}
                    <span className={isHome ? "sr-only sm:not-sr-only" : ""}>
                      {item.name}
                    </span>
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}

export default Breadcrumbs
