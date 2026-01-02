import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/advisor-portal/compliance")({
  component: CompliancePage,
})

function CompliancePage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Compliance</h1>
      <p className="text-muted-foreground">Compliance page coming soon.</p>
    </div>
  )
}
