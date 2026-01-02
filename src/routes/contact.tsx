import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/contact")({
  component: ContactPage,
})

function ContactPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-muted-foreground">Contact page coming soon.</p>
    </div>
  )
}
