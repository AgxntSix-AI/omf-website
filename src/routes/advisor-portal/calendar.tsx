import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/advisor-portal/calendar")({
  component: CalendarPage,
})

function CalendarPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Event Calendar</h1>
      <p className="text-muted-foreground">Calendar page coming soon.</p>
    </div>
  )
}
