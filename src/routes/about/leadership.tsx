import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/about/leadership")({
  component: LeadershipPage,
})

function LeadershipPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Leadership</h1>
      <p className="text-muted-foreground">Leadership page coming soon.</p>
    </div>
  )
}
