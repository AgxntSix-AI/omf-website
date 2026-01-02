import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface ImageWithFallbackProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  fallbackSrc?: string
  alt: string
  aspectRatio?: "square" | "video" | "portrait" | "auto"
  lazy?: boolean
}

/**
 * ImageWithFallback component - Image with lazy loading and error fallback
 *
 * Features:
 * - Lazy loading with Intersection Observer
 * - Fallback placeholder on error
 * - Aspect ratio preservation
 * - Smooth fade-in on load
 *
 * Usage:
 * ```tsx
 * <ImageWithFallback
 *   src="/images/team/john.jpg"
 *   alt="John Smith"
 *   aspectRatio="square"
 *   className="rounded-lg"
 * />
 * ```
 */
export function ImageWithFallback({
  src,
  fallbackSrc,
  alt,
  aspectRatio = "auto",
  lazy = true,
  className,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState<string | null>(lazy ? null : src)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Lazy loading with Intersection Observer
  useEffect(() => {
    if (!lazy) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImgSrc(src)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: "50px",
        threshold: 0.1,
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [src, lazy])

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setHasError(true)
    setIsLoading(false)
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc)
      setHasError(false)
      setIsLoading(true)
    }
  }

  const aspectRatioClass = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    auto: "",
  }[aspectRatio]

  // Fallback placeholder
  const Placeholder = () => (
    <div
      className={cn(
        "flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10",
        aspectRatioClass,
        className
      )}
    >
      <div className="text-center p-4">
        <div className="text-muted-foreground text-sm">{alt}</div>
      </div>
    </div>
  )

  if (hasError && !fallbackSrc) {
    return <Placeholder />
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", aspectRatioClass)}
    >
      {/* Loading skeleton */}
      {isLoading && (
        <div
          className={cn(
            "absolute inset-0 bg-muted animate-pulse",
            aspectRatioClass
          )}
        />
      )}

      {/* Actual image */}
      {imgSrc && (
        <img
          ref={imgRef}
          src={imgSrc}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            "transition-opacity duration-300",
            isLoading ? "opacity-0" : "opacity-100",
            aspectRatio !== "auto" && "object-cover w-full h-full",
            className
          )}
          {...props}
        />
      )}
    </div>
  )
}

export default ImageWithFallback
