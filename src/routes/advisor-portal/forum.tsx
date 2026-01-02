import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/advisor-portal/forum")({
  component: ForumPage,
})

function ForumPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Forum</h1>
      <p className="text-muted-foreground">Forum page coming soon.</p>
    </div>
  )
}
