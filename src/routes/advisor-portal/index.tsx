import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/advisor-portal/")({
  component: AdvisorPortalPage,
})

function AdvisorPortalPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Advisor Portal</h1>
      <p className="text-muted-foreground">Advisor Portal page coming soon.</p>
    </div>
  )
}
