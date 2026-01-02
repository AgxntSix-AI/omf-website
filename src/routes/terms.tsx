import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/terms")({
  component: TermsPage,
})

function TermsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="text-muted-foreground">Terms of service coming soon.</p>
    </div>
  )
}
