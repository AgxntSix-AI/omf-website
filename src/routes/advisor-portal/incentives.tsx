import { createFileRoute, Link } from "@tanstack/react-router"
import {
  ArrowLeft,
  Trophy,
  Star,
  Gift,
  Target,
  Calendar,
  Users,
  Award,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  Crown,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magic-ui/blur-fade"

export const Route = createFileRoute("/advisor-portal/incentives")({
  component: IncentivesPage,
})

// Strapi-ready interface
interface Incentive {
  id: string
  title: string
  description: string
  type: "contest" | "promotion" | "recognition"
  startDate: string
  endDate: string
  prize: string
  status: "active" | "upcoming" | "ended"
  qualifications: string[]
}

// Sample incentive programs
const incentives: Incentive[] = [
  {
    id: "1",
    title: "Q1 2026 Production Challenge",
    description: "Achieve production targets and qualify for exclusive rewards and recognition.",
    type: "contest",
    startDate: "2026-01-01",
    endDate: "2026-03-31",
    prize: "Trip to Cancun + $5,000 Bonus",
    status: "active",
    qualifications: [
      "$500K+ in new business premium",
      "Minimum 20 new policies",
      "90% persistency rate",
    ],
  },
  {
    id: "2",
    title: "New Advisor Launch Bonus",
    description: "Special bonuses for newly contracted advisors hitting early milestones.",
    type: "promotion",
    startDate: "2026-01-01",
    endDate: "2026-12-31",
    prize: "$2,500 Bonus",
    status: "active",
    qualifications: [
      "First 6 months with OM Financial",
      "$100K in new business premium",
      "Complete onboarding training",
    ],
  },
  {
    id: "3",
    title: "Carrier Partner Promotion - Manulife",
    description: "Exclusive Manulife promotion with enhanced commission rates and bonuses.",
    type: "promotion",
    startDate: "2026-01-15",
    endDate: "2026-04-15",
    prize: "15% Commission Boost",
    status: "active",
    qualifications: [
      "Minimum 5 Manulife policies",
      "Universal Life or Wealth products",
      "Registered with Manulife",
    ],
  },
  {
    id: "4",
    title: "Spring Sales Sprint",
    description: "Compete with fellow advisors for top rankings and prizes.",
    type: "contest",
    startDate: "2026-04-01",
    endDate: "2026-05-31",
    prize: "$3,000 Cash Prize",
    status: "upcoming",
    qualifications: [
      "Top 10 producers by volume",
      "Minimum 10 new policies",
      "All product lines eligible",
    ],
  },
]

// Recognition programs
const recognitionPrograms = [
  {
    title: "President's Club",
    description: "Elite recognition for top-performing advisors achieving exceptional annual production.",
    icon: Crown,
    color: "bg-amber-500/10 text-amber-600",
    benefits: ["Annual retreat invitation", "Premium bonus tier", "Exclusive networking"],
  },
  {
    title: "Rising Star Program",
    description: "Recognition for new advisors showing exceptional growth in their first 3 years.",
    icon: Sparkles,
    color: "bg-purple-500/10 text-purple-600",
    benefits: ["Mentorship pairing", "Enhanced training", "Growth bonuses"],
  },
  {
    title: "Consistency Award",
    description: "Quarterly recognition for advisors maintaining strong persistency and client retention.",
    icon: Target,
    color: "bg-green-500/10 text-green-600",
    benefits: ["Retention bonuses", "Public recognition", "Priority support"],
  },
  {
    title: "Team Builder Award",
    description: "Recognition for advisors who excel at recruiting and developing new team members.",
    icon: Users,
    color: "bg-blue-500/10 text-blue-600",
    benefits: ["Override bonuses", "Leadership training", "Team growth rewards"],
  },
]

const statusInfo = {
  active: { label: "Active", color: "bg-green-500/10 text-green-600" },
  upcoming: { label: "Coming Soon", color: "bg-blue-500/10 text-blue-600" },
  ended: { label: "Ended", color: "bg-muted text-muted-foreground" },
}

const typeInfo = {
  contest: { label: "Contest", icon: Trophy },
  promotion: { label: "Promotion", icon: Gift },
  recognition: { label: "Recognition", icon: Award },
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

function IncentivesPage() {
  const activeIncentives = incentives.filter(i => i.status === "active")
  const upcomingIncentives = incentives.filter(i => i.status === "upcoming")

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
                <Trophy className="h-7 w-7" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Incentives & Contests
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Earn rewards, recognition, and bonuses through our incentive programs designed to celebrate your success.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Active Incentives */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10 text-green-600 mb-4">
                <Star className="h-7 w-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Active Programs
              </h2>
              <p className="text-muted-foreground">
                Current incentives and promotions you can participate in today.
              </p>
            </div>
          </BlurFade>

          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {activeIncentives.map((incentive, index) => {
              const TypeIcon = typeInfo[incentive.type].icon
              return (
                <BlurFade key={incentive.id} delay={0.15 + index * 0.05} inView>
                  <Card className="h-full hover:shadow-lg hover:border-primary/20 transition-all">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <TypeIcon className="h-5 w-5 text-primary" />
                          <span className="text-sm text-muted-foreground">
                            {typeInfo[incentive.type].label}
                          </span>
                        </div>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusInfo[incentive.status].color}`}>
                          {statusInfo[incentive.status].label}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{incentive.title}</CardTitle>
                      <CardDescription>{incentive.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Prize */}
                        <div className="bg-accent/20 rounded-lg p-4 text-center">
                          <p className="text-sm text-muted-foreground mb-1">Prize</p>
                          <p className="text-lg font-bold text-accent-foreground">
                            {incentive.prize}
                          </p>
                        </div>

                        {/* Dates */}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {formatDate(incentive.startDate)} - {formatDate(incentive.endDate)}
                          </span>
                        </div>

                        {/* Qualifications */}
                        <div>
                          <p className="text-sm font-medium text-foreground mb-2">
                            How to Qualify:
                          </p>
                          <ul className="space-y-1">
                            {incentive.qualifications.map((qual, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                {qual}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button className="w-full gap-2">
                          <Target className="h-4 w-4" />
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </BlurFade>
              )
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Incentives */}
      {upcomingIncentives.length > 0 && (
        <section className="py-16 lg:py-20 bg-background">
          <div className="container">
            <BlurFade delay={0.1} inView>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Coming Soon
                </h2>
                <p className="text-muted-foreground">
                  Upcoming programs to look forward to.
                </p>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {upcomingIncentives.map((incentive, index) => {
                const TypeIcon = typeInfo[incentive.type].icon
                return (
                  <BlurFade key={incentive.id} delay={0.15 + index * 0.05} inView>
                    <Card className="h-full border-dashed">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <TypeIcon className="h-5 w-5 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {typeInfo[incentive.type].label}
                            </span>
                          </div>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusInfo[incentive.status].color}`}>
                            {statusInfo[incentive.status].label}
                          </span>
                        </div>
                        <CardTitle>{incentive.title}</CardTitle>
                        <CardDescription>{incentive.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>Starts {formatDate(incentive.startDate)}</span>
                          </div>
                          <p className="font-semibold text-accent-foreground">
                            {incentive.prize}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </BlurFade>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Recognition Programs */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Award className="h-7 w-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Recognition Programs
              </h2>
              <p className="text-muted-foreground">
                Ongoing programs that celebrate excellence and reward consistent performance.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {recognitionPrograms.map((program, index) => (
              <BlurFade key={program.title} delay={0.15 + index * 0.05} inView>
                <Card className="h-full hover:shadow-lg hover:border-primary/20 transition-all">
                  <CardHeader>
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${program.color} mb-4`}>
                      <program.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{program.title}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Benefits:</p>
                      <ul className="space-y-1">
                        {program.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Star className="h-3 w-3 text-accent" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Trophy, label: "Active Programs", value: `${activeIncentives.length}` },
              { icon: Gift, label: "Total Rewards", value: "$50K+" },
              { icon: Users, label: "Participants", value: "200+" },
              { icon: TrendingUp, label: "Success Rate", value: "85%" },
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
              <Trophy className="h-7 w-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Earn Rewards?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Contact your manager or the OM Financial team to learn more about qualifying for our incentive programs.
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
