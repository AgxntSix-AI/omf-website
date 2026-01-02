import { createFileRoute, Link } from "@tanstack/react-router"
import {
  ArrowLeft,
  Calendar,
  CalendarDays,
  Clock,
  MapPin,
  Video,
  Users,
  ExternalLink,
  Building2,
  GraduationCap,
  Briefcase,
  Shield,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magic-ui/blur-fade"

export const Route = createFileRoute("/advisor-portal/calendar")({
  component: CalendarPage,
})

// Strapi-ready interface
interface CalendarEvent {
  id: string
  title: string
  description: string
  date: string
  startTime: string
  endTime: string
  type: "webinar" | "in-person" | "hybrid"
  location: string
  host: string
  category: "training" | "carrier" | "compliance" | "networking"
  registrationUrl?: string
}

// Sample events (will be replaced by Strapi data)
const upcomingEvents: CalendarEvent[] = [
  {
    id: "1",
    title: "Sun Life Product Update Webinar",
    description: "Learn about the latest updates to Sun Life's insurance and investment products, including new features and pricing changes.",
    date: "2026-01-15",
    startTime: "10:00 AM",
    endTime: "11:30 AM",
    type: "webinar",
    location: "Online",
    host: "Sun Life",
    category: "carrier",
  },
  {
    id: "2",
    title: "Compliance Workshop: KYC Best Practices",
    description: "Interactive workshop covering Know Your Client requirements, documentation standards, and common compliance pitfalls to avoid.",
    date: "2026-01-18",
    startTime: "2:00 PM",
    endTime: "4:00 PM",
    type: "in-person",
    location: "Toronto Office",
    host: "OM Financial Compliance Team",
    category: "compliance",
  },
  {
    id: "3",
    title: "Manulife New Business Training",
    description: "Comprehensive training on Manulife's new business submission process, underwriting guidelines, and illustration software updates.",
    date: "2026-01-22",
    startTime: "9:00 AM",
    endTime: "12:00 PM",
    type: "webinar",
    location: "Online",
    host: "Manulife",
    category: "training",
  },
  {
    id: "4",
    title: "Advisor Networking Lunch",
    description: "Join fellow advisors for lunch and networking. Share best practices, discuss industry trends, and build valuable connections.",
    date: "2026-01-25",
    startTime: "12:00 PM",
    endTime: "2:00 PM",
    type: "in-person",
    location: "Mississauga Office",
    host: "OM Financial",
    category: "networking",
  },
  {
    id: "5",
    title: "Canada Life Seg Funds Overview",
    description: "Deep dive into Canada Life's segregated fund offerings, including investment options, guarantees, and estate planning benefits.",
    date: "2026-01-29",
    startTime: "1:00 PM",
    endTime: "3:00 PM",
    type: "hybrid",
    location: "Toronto Office / Online",
    host: "Canada Life",
    category: "carrier",
  },
  {
    id: "6",
    title: "Critical Illness Sales Strategies",
    description: "Learn proven strategies for presenting critical illness insurance to clients, including needs analysis and objection handling.",
    date: "2026-02-05",
    startTime: "10:00 AM",
    endTime: "11:30 AM",
    type: "webinar",
    location: "Online",
    host: "OM Financial Training Team",
    category: "training",
  },
  {
    id: "7",
    title: "iA Financial Product Launch",
    description: "Be the first to learn about iA Financial's new product offerings and how to position them with your clients.",
    date: "2026-02-12",
    startTime: "2:00 PM",
    endTime: "3:30 PM",
    type: "webinar",
    location: "Online",
    host: "iA Financial",
    category: "carrier",
  },
  {
    id: "8",
    title: "Annual Advisor Conference 2026",
    description: "Our biggest event of the year! Three days of training, networking, and celebration with keynote speakers and product showcases.",
    date: "2026-03-15",
    startTime: "9:00 AM",
    endTime: "5:00 PM",
    type: "in-person",
    location: "Toronto Convention Centre",
    host: "OM Financial",
    category: "networking",
  },
]

const categoryInfo = {
  training: { label: "Training", icon: GraduationCap, color: "bg-green-500/10 text-green-600" },
  carrier: { label: "Carrier Event", icon: Briefcase, color: "bg-blue-500/10 text-blue-600" },
  compliance: { label: "Compliance", icon: Shield, color: "bg-red-500/10 text-red-600" },
  networking: { label: "Networking", icon: Users, color: "bg-purple-500/10 text-purple-600" },
}

const typeInfo = {
  webinar: { label: "Webinar", icon: Video },
  "in-person": { label: "In-Person", icon: Building2 },
  hybrid: { label: "Hybrid", icon: Users },
}

function formatShortDate(dateString: string): { month: string; day: string } {
  const date = new Date(dateString)
  return {
    month: date.toLocaleDateString("en-CA", { month: "short" }).toUpperCase(),
    day: date.getDate().toString(),
  }
}

function CalendarPage() {
  return (
    <div className="min-h-svh">
      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b">
        <div className="container py-4">
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <Link to="/advisor-portal">
              <ArrowLeft className="h-4 w-4" />
              Back to Advisor Portal
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-muted py-20 lg:py-28">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="max-w-3xl">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <CalendarDays className="h-7 w-7" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Event Calendar
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Stay up-to-date with upcoming webinars, training sessions, carrier events, and networking opportunities.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Category Legend */}
      <section className="py-8 bg-background border-b">
        <div className="container">
          <BlurFade delay={0.2} inView>
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">Event Types:</span>
              {(Object.keys(categoryInfo) as Array<keyof typeof categoryInfo>).map((key) => {
                const cat = categoryInfo[key]
                return (
                  <div key={key} className="flex items-center gap-2">
                    <div className={`inline-flex h-6 w-6 items-center justify-center rounded ${cat.color}`}>
                      <cat.icon className="h-3 w-3" />
                    </div>
                    <span className="text-sm">{cat.label}</span>
                  </div>
                )
              })}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Upcoming Events
              </h2>
              <p className="text-muted-foreground">
                {upcomingEvents.length} events scheduled. Click on an event to register or learn more.
              </p>
            </div>
          </BlurFade>

          <div className="space-y-4 max-w-4xl mx-auto">
            {upcomingEvents.map((event, index) => {
              const dateInfo = formatShortDate(event.date)
              const catInfo = categoryInfo[event.category]
              const typeI = typeInfo[event.type]

              return (
                <BlurFade key={event.id} delay={0.15 + index * 0.05} inView>
                  <Card className="hover:shadow-lg hover:border-primary/20 transition-all group cursor-pointer">
                    <CardContent className="p-0">
                      <div className="flex flex-col sm:flex-row">
                        {/* Date Badge */}
                        <div className="sm:w-24 p-4 bg-primary/5 flex sm:flex-col items-center justify-center text-center shrink-0 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none">
                          <span className="text-sm font-semibold text-primary">{dateInfo.month}</span>
                          <span className="text-3xl font-bold text-foreground ml-2 sm:ml-0">{dateInfo.day}</span>
                        </div>

                        {/* Event Details */}
                        <div className="flex-1 p-4 sm:p-6">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className={`px-2 py-0.5 rounded text-xs font-medium ${catInfo.color}`}>
                              {catInfo.label}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-muted-foreground">
                              <typeI.icon className="h-3 w-3" />
                              {typeI.label}
                            </span>
                          </div>

                          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {event.title}
                          </h3>

                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                            {event.description}
                          </p>

                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {event.startTime} - {event.endTime}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {event.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {event.host}
                            </span>
                          </div>
                        </div>

                        {/* Register Button */}
                        <div className="p-4 sm:p-6 flex items-center shrink-0">
                          <Button variant="outline" size="sm" className="gap-2">
                            Register
                            <ExternalLink className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </BlurFade>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Calendar, label: "Events This Month", value: "12" },
              { icon: Video, label: "Webinars", value: "8" },
              { icon: Building2, label: "In-Person Events", value: "4" },
              { icon: GraduationCap, label: "Training Sessions", value: "15" },
            ].map((stat, index) => (
              <BlurFade key={stat.label} delay={0.2 + index * 0.05} inView>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <p className="text-3xl font-bold text-foreground mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <BlurFade delay={0.1} inView>
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground mb-6">
              <Calendar className="h-7 w-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Host an Event
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Have an idea for a training session or event? We'd love to hear from you. Contact us to discuss hosting opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/advisor-portal">
                  Back to Portal
                </Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
