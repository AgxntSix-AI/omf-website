import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/seminars")({
  component: SeminarsPage,
})

function SeminarsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Seminars</h1>
      <p className="text-muted-foreground">Seminars page coming soon.</p>
    </div>
  )
}
