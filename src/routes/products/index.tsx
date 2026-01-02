import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/products/")({
  component: ProductsPage,
})

function ProductsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Products & Partners</h1>
      <p className="text-muted-foreground">Products page coming soon.</p>
    </div>
  )
}
