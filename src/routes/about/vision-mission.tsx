import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/about/vision-mission")({
  component: VisionMissionPage,
})

function VisionMissionPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Vision & Mission</h1>
      <p className="text-muted-foreground">Vision & Mission page coming soon.</p>
    </div>
  )
}
