import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/about/news")({
  component: NewsPage,
})

function NewsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4">News</h1>
      <p className="text-muted-foreground">News page coming soon.</p>
    </div>
  )
}
