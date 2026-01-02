import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/about/disclaimer")({
  component: DisclaimerPage,
})

function DisclaimerPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Disclaimer</h1>
      <p className="text-muted-foreground">Disclaimer page coming soon.</p>
    </div>
  )
}
