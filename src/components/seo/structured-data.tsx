import { useEffect, useId } from "react"

interface StructuredDataProps {
  /**
   * JSON-LD schema object or array of objects
   * Will be stringified and injected as a script tag
   */
  schema: Record<string, unknown> | Record<string, unknown>[]
}

/**
 * StructuredData component - Injects JSON-LD structured data into the page
 *
 * Usage:
 * ```tsx
 * import { generateOrganizationSchema } from "@/lib/structured-data"
 *
 * <StructuredData schema={generateOrganizationSchema()} />
 * ```
 *
 * For multiple schemas:
 * ```tsx
 * import { combineSchemas, generateOrganizationSchema, generateWebsiteSchema } from "@/lib/structured-data"
 *
 * <StructuredData
 *   schema={JSON.parse(combineSchemas(
 *     generateOrganizationSchema(),
 *     generateWebsiteSchema()
 *   ))}
 * />
 * ```
 */
export function StructuredData({ schema }: StructuredDataProps) {
  const id = useId()
  const scriptId = `structured-data-${id.replace(/:/g, "")}`

  useEffect(() => {
    // Remove existing script if present
    const existing = document.getElementById(scriptId)
    if (existing) {
      existing.remove()
    }

    // Create and inject new script
    const script = document.createElement("script")
    script.id = scriptId
    script.type = "application/ld+json"
    script.textContent = JSON.stringify(schema, null, 0)
    document.head.appendChild(script)

    // Cleanup on unmount
    return () => {
      const scriptElement = document.getElementById(scriptId)
      if (scriptElement) {
        scriptElement.remove()
      }
    }
  }, [schema, scriptId])

  return null
}

/**
 * Pre-composed structured data for common page types
 */

export { StructuredData as default }
