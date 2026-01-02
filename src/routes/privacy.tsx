import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
})

function PrivacyPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-muted-foreground">Privacy policy coming soon.</p>
    </div>
  )
}
