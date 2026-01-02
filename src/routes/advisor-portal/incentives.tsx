import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/advisor-portal/incentives")({
  component: IncentivesPage,
})

function IncentivesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Incentives & Contests</h1>
      <p className="text-muted-foreground">Incentives page coming soon.</p>
    </div>
  )
}
