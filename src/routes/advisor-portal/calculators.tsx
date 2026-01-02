import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/advisor-portal/calculators")({
  component: CalculatorsPage,
})

function CalculatorsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Calculators</h1>
      <p className="text-muted-foreground">Calculators page coming soon.</p>
    </div>
  )
}
