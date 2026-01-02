import { cn } from "@/lib/utils"

interface SkeletonProps {
  className?: string
}

/**
 * Base Skeleton component with pulse animation
 */
export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      aria-hidden="true"
    />
  )
}

interface TextSkeletonProps {
  lines?: number
  className?: string
}

/**
 * Text skeleton for paragraphs or text blocks
 */
export function TextSkeleton({ lines = 3, className }: TextSkeletonProps) {
  return (
    <div className={cn("space-y-2", className)} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            "h-4",
            // Last line is shorter for natural text appearance
            i === lines - 1 ? "w-3/4" : "w-full"
          )}
        />
      ))}
    </div>
  )
}

interface ImageSkeletonProps {
  aspectRatio?: "square" | "video" | "portrait" | "wide"
  className?: string
}

/**
 * Image skeleton with aspect ratio options
 */
export function ImageSkeleton({
  aspectRatio = "video",
  className,
}: ImageSkeletonProps) {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    wide: "aspect-[21/9]",
  }

  return (
    <Skeleton
      className={cn(
        "w-full bg-gradient-to-br from-muted to-muted/50",
        aspectClasses[aspectRatio],
        className
      )}
    />
  )
}

interface AvatarSkeletonProps {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

/**
 * Circular avatar skeleton
 */
export function AvatarSkeleton({ size = "md", className }: AvatarSkeletonProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  }

  return (
    <Skeleton className={cn("rounded-full", sizeClasses[size], className)} />
  )
}

interface CardSkeletonProps {
  showImage?: boolean
  showAvatar?: boolean
  lines?: number
  className?: string
}

/**
 * Full card skeleton with optional image, avatar, and text
 */
export function CardSkeleton({
  showImage = true,
  showAvatar = false,
  lines = 2,
  className,
}: CardSkeletonProps) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-card p-4 shadow-sm space-y-4",
        className
      )}
      aria-hidden="true"
    >
      {showImage && <ImageSkeleton aspectRatio="video" className="rounded-lg" />}

      <div className="space-y-3">
        {showAvatar && (
          <div className="flex items-center gap-3">
            <AvatarSkeleton size="sm" />
            <div className="space-y-1.5 flex-1">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-2.5 w-16" />
            </div>
          </div>
        )}

        {/* Title */}
        <Skeleton className="h-5 w-3/4" />

        {/* Description lines */}
        <TextSkeleton lines={lines} />

        {/* Badge/metadata row */}
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-20 rounded-full" />
        </div>
      </div>
    </div>
  )
}

interface ArticleSkeletonProps {
  className?: string
}

/**
 * Full article page skeleton for news/blog detail pages
 */
export function ArticleSkeleton({ className }: ArticleSkeletonProps) {
  return (
    <div className={cn("space-y-8", className)} aria-hidden="true">
      {/* Header */}
      <div className="space-y-4">
        <Skeleton className="h-6 w-24 rounded-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-3/4" />
        <div className="flex items-center gap-4 pt-2">
          <AvatarSkeleton size="md" />
          <div className="space-y-1.5">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>
      </div>

      {/* Featured image */}
      <ImageSkeleton aspectRatio="video" className="rounded-xl" />

      {/* Content paragraphs */}
      <div className="space-y-6">
        <TextSkeleton lines={4} />
        <TextSkeleton lines={5} />
        <TextSkeleton lines={3} />
      </div>
    </div>
  )
}

interface GridSkeletonProps {
  count?: number
  columns?: 2 | 3 | 4
  showImage?: boolean
  className?: string
}

/**
 * Grid of card skeletons
 */
export function GridSkeleton({
  count = 6,
  columns = 3,
  showImage = true,
  className,
}: GridSkeletonProps) {
  const columnClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <div className={cn("grid gap-6", columnClasses[columns], className)}>
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} showImage={showImage} />
      ))}
    </div>
  )
}
