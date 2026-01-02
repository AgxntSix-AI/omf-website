import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/about/")({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-muted-foreground">About page coming soon.</p>
    </div>
  )
}
