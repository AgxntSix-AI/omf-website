import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/products/partners")({
  component: PartnersPage,
})

function PartnersPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Our Partners</h1>
      <p className="text-muted-foreground">Partners page coming soon.</p>
    </div>
  )
}
