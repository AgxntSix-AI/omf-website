import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/advisor-portal/blogs")({
  component: BlogsPage,
})

function BlogsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>
      <p className="text-muted-foreground">Blogs page coming soon.</p>
    </div>
  )
}
