import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/about/history")({
  component: HistoryPage,
})

function HistoryPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4">History & Strategy</h1>
      <p className="text-muted-foreground">History page coming soon.</p>
    </div>
  )
}
