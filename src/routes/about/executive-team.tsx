import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/about/executive-team")({
  component: ExecutiveTeamPage,
})

function ExecutiveTeamPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Executive Team</h1>
      <p className="text-muted-foreground">Executive team page coming soon.</p>
    </div>
  )
}
