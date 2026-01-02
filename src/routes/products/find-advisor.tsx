import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/products/find-advisor")({
  component: FindAdvisorPage,
})

function FindAdvisorPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Find an Advisor</h1>
      <p className="text-muted-foreground">Find an advisor page coming soon.</p>
    </div>
  )
}
