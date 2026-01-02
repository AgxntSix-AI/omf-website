import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/about/gallery")({
  component: GalleryPage,
})

function GalleryPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <p className="text-muted-foreground">Gallery page coming soon.</p>
    </div>
  )
}
