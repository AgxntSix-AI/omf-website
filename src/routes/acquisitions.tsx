import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/acquisitions")({
  component: AcquisitionsPage,
})

function AcquisitionsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Acquisitions</h1>
      <p className="text-muted-foreground">Acquisitions page coming soon.</p>
    </div>
  )
}
