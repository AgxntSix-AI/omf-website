import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/advisor-portal/training")({
  component: TrainingPage,
})

function TrainingPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Training Library</h1>
      <p className="text-muted-foreground">Training page coming soon.</p>
    </div>
  )
}
