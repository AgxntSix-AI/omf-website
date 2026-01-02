import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/advisor-portal/university")({
  component: UniversityPage,
})

function UniversityPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4">OM University</h1>
      <p className="text-muted-foreground">University page coming soon.</p>
    </div>
  )
}
