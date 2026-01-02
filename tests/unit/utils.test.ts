import { describe, it, expect } from "vitest"
import { cn } from "@/lib/utils"

describe("cn utility function", () => {
  it("should merge class names", () => {
    const result = cn("foo", "bar")
    expect(result).toBe("foo bar")
  })

  it("should handle conditional classes", () => {
    const result = cn("base", true && "included", false && "excluded")
    expect(result).toBe("base included")
  })

  it("should handle undefined and null values", () => {
    const result = cn("base", undefined, null, "end")
    expect(result).toBe("base end")
  })

  it("should merge Tailwind classes correctly", () => {
    // Later class should override earlier conflicting class
    const result = cn("px-2 py-1", "px-4")
    expect(result).toBe("py-1 px-4")
  })

  it("should handle arrays of classes", () => {
    const result = cn(["foo", "bar"], "baz")
    expect(result).toBe("foo bar baz")
  })

  it("should handle object syntax", () => {
    const result = cn({
      base: true,
      active: true,
      disabled: false,
    })
    expect(result).toBe("base active")
  })

  it("should handle empty inputs", () => {
    const result = cn()
    expect(result).toBe("")
  })

  it("should merge responsive Tailwind classes", () => {
    const result = cn("text-sm md:text-base", "text-lg")
    expect(result).toBe("md:text-base text-lg")
  })

  it("should merge hover/focus states correctly", () => {
    const result = cn("hover:bg-blue-500", "hover:bg-red-500")
    expect(result).toBe("hover:bg-red-500")
  })

  it("should preserve non-conflicting classes", () => {
    const result = cn("bg-white text-black", "p-4 m-2")
    expect(result).toBe("bg-white text-black p-4 m-2")
  })
})
