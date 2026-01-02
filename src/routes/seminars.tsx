import { createFileRoute, Link } from "@tanstack/react-router"
import {
  ArrowRight,
  Calendar,
  MapPin,
  Video,
  Clock,
  Users,
  GraduationCap,
  Building2,
  Bell,
  CheckCircle2,
  ExternalLink,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magic-ui/blur-fade"

export const Route = createFileRoute("/seminars")({
  component: SeminarsPage,
})

// Seminar types for Strapi-ready structure
interface Seminar {
  id: string
  title: string
  provider: string
  topic: string
  date: string
  time: string
  location: "Toronto" | "Mississauga" | "Online"
  type: "in-person" | "webinar"
  registrationUrl?: string
}

// Sample upcoming seminars (will be replaced by Strapi data)
const upcomingSeminars: Seminar[] = [
  {
    id: "1",
    title: "Life Insurance Fundamentals",
    provider: "Sun Life",
    topic: "Life Insurance",
    date: "2026-01-15",
    time: "10:00 AM - 12:00 PM",
    location: "Online",
    type: "webinar",
  },
  {
    id: "2",
    title: "RESP Investment Strategies",
    provider: "iA Financial",
    topic: "Education Savings",
    date: "2026-01-22",
    time: "2:00 PM - 4:00 PM",
    location: "Toronto",
    type: "in-person",
  },
  {
    id: "3",
    title: "Critical Illness Coverage",
    provider: "Manulife",
    topic: "Health Insurance",
    date: "2026-01-29",
    time: "10:00 AM - 12:00 PM",
    location: "Online",
    type: "webinar",
  },
  {
    id: "4",
    title: "Segregated Funds Overview",
    provider: "Canada Life",
    topic: "Investment Products",
    date: "2026-02-05",
    time: "1:00 PM - 3:00 PM",
    location: "Mississauga",
    type: "in-person",
  },
]

const seminarTopics = [
  {
    icon: GraduationCap,
    title: "Product Training",
    description: "Deep dives into insurance and investment products from our carrier partners.",
  },
  {
    icon: Users,
    title: "Sales Techniques",
    description: "Best practices for client acquisition, retention, and needs-based selling.",
  },
  {
    icon: Building2,
    title: "Compliance & Regulations",
    description: "Stay up-to-date with industry regulations and compliance requirements.",
  },
  {
    icon: Video,
    title: "Webinars",
    description: "Virtual learning sessions you can attend from anywhere in Canada.",
  },
]

const partnerProviders = [
  "Sun Life",
  "Canada Life",
  "Manulife",
  "iA Financial",
  "Empire Life",
  "Foresters",
  "Blue Cross",
  "BMO Insurance",
  "Desjardins",
  "Equitable Life",
  "Ivari",
  "Assumption Life",
]

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-CA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function SeminarCard({ seminar }: { seminar: Seminar }) {
  return (
    <Card className="h-full hover:shadow-lg hover:border-primary/20 transition-all">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 mb-2">
          <span
            className={`text-xs px-2 py-1 rounded-full ${
              seminar.type === "webinar"
                ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
            }`}
          >
            {seminar.type === "webinar" ? "Webinar" : "In-Person"}
          </span>
          <span className="text-xs text-muted-foreground">{seminar.provider}</span>
        </div>
        <CardTitle className="text-lg">{seminar.title}</CardTitle>
        <CardDescription>{seminar.topic}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{formatDate(seminar.date)}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{seminar.time}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {seminar.location === "Online" ? (
            <Video className="h-4 w-4" />
          ) : (
            <MapPin className="h-4 w-4" />
          )}
          <span>{seminar.location}</span>
        </div>
        <Button asChild className="w-full mt-4 gap-2">
          <Link to="/contact">
            Register Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

function SeminarsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-muted py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <BlurFade delay={0.1} inView>
              <p className="text-sm font-medium text-primary mb-4 tracking-wide">
                PROFESSIONAL DEVELOPMENT
              </p>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Seminars & Webinars
              </h1>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Enhance your knowledge and skills with our comprehensive training programs.
                Join live sessions or attend webinars from anywhere in Canada.
              </p>
            </BlurFade>
            <BlurFade delay={0.4} inView>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <a href="#upcoming">
                    View Upcoming Sessions
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2">
                  <Link to="/advisor-portal/calendar">
                    Event Calendar
                    <Calendar className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Seminar Topics */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <GraduationCap className="h-7 w-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                What You'll Learn
              </h2>
              <p className="text-muted-foreground">
                Our seminars cover a wide range of topics designed to help you succeed
                as a financial advisor.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {seminarTopics.map((topic, index) => (
              <BlurFade key={topic.title} delay={0.2 + index * 0.05} inView>
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mx-auto mb-3">
                      <topic.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{topic.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{topic.description}</p>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Seminars */}
      <section id="upcoming" className="py-16 lg:py-20 bg-background scroll-mt-20">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Calendar className="h-7 w-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Upcoming Sessions
              </h2>
              <p className="text-muted-foreground">
                Register for our upcoming seminars and webinars. Sessions are available
                both in-person at our offices and online.
              </p>
            </div>
          </BlurFade>

          {upcomingSeminars.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {upcomingSeminars.map((seminar, index) => (
                <BlurFade key={seminar.id} delay={0.2 + index * 0.05} inView>
                  <SeminarCard seminar={seminar} />
                </BlurFade>
              ))}
            </div>
          ) : (
            <BlurFade delay={0.2} inView>
              <Card className="max-w-2xl mx-auto">
                <CardContent className="py-12 text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
                    <Calendar className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No Upcoming Sessions</h3>
                  <p className="text-muted-foreground mb-6">
                    Check back soon for new seminar dates or subscribe to our newsletter
                    for updates.
                  </p>
                  <Button asChild className="gap-2">
                    <Link to="/contact">
                      Get Notified
                      <Bell className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </BlurFade>
          )}

          <BlurFade delay={0.4} inView>
            <div className="text-center mt-8">
              <Button asChild variant="outline" className="gap-2">
                <Link to="/advisor-portal/calendar">
                  View Full Calendar
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Partner Providers */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Training Partners
              </h2>
              <p className="text-muted-foreground">
                Learn directly from Canada's leading insurance carriers and financial
                institutions.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {partnerProviders.map((provider) => (
                <span
                  key={provider}
                  className="bg-background border rounded-full px-4 py-2 text-sm font-medium text-foreground"
                >
                  {provider}
                </span>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <MapPin className="h-7 w-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                In-Person Locations
              </h2>
              <p className="text-muted-foreground">
                Join us at one of our office locations for hands-on learning and networking.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <BlurFade delay={0.2} inView>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    Toronto Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>7191 Yonge Street Suite 711</p>
                  <p>Thornhill, ON L3T 0C4</p>
                  <p className="pt-2">
                    <span className="font-medium text-foreground">Phone:</span> (416) 491-7727
                  </p>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    Mississauga Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>218 Export Boulevard Suite 610</p>
                  <p>Mississauga, ON L5S 0A7</p>
                  <p className="pt-2">
                    <span className="font-medium text-foreground">Phone:</span> (905) 612-0800
                  </p>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <BlurFade delay={0.1} inView>
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="py-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        Why Attend Our Seminars?
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">CE credits for qualifying sessions</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">Learn from industry experts</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">Network with fellow advisors</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">Stay current on industry trends</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">Free for OM Financial advisors</span>
                        </li>
                      </ul>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="inline-flex flex-col items-center md:items-end">
                        <div className="text-5xl font-bold text-primary mb-2">100+</div>
                        <p className="text-muted-foreground">Sessions per year</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <BlurFade delay={0.1} inView>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Expand Your Knowledge?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Join our community of advisors committed to continuous learning and
              professional development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <Link to="/contact">
                  Register for Seminars
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/advisor-benefits">Advisor Benefits</Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
