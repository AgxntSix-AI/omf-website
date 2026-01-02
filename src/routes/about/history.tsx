import { createFileRoute, Link } from "@tanstack/react-router"
import {
  Calendar,
  TrendingUp,
  MapPin,
  Users,
  Building2,
  Target,
  Award,
  ArrowLeft,
  ArrowRight,
  CheckCircle2
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magic-ui/blur-fade"

export const Route = createFileRoute("/about/history")({
  component: HistoryPage,
})

const milestones = [
  {
    era: "Foundation",
    title: "Building the Foundation",
    description:
      "OM Financial was established with a clear mission: to serve Insurance & Investments Advisors with respect, honesty, and integrity. From the beginning, we positioned ourselves as a company with a heart.",
    icon: Building2,
  },
  {
    era: "Growth",
    title: "Expanding Our Reach",
    description:
      "We grew to become a leading National Managing General Agency, extending our services across multiple Canadian provinces including British Columbia, Alberta, Manitoba, Saskatchewan, Ontario, and New Brunswick.",
    icon: MapPin,
  },
  {
    era: "Excellence",
    title: "Achieving Excellence",
    description:
      "With over 50 years of combined experience in the financial services sector, we've built a team of skilled professionals and established strong partnerships with major insurance carriers across Canada.",
    icon: Award,
  },
  {
    era: "Today",
    title: "Leading the Industry",
    description:
      "Today, OM Financial operates from two strategic locations in the Greater Toronto Area, serving thousands of advisors with comprehensive support, training, and industry-leading resources.",
    icon: TrendingUp,
  },
]

const strategicPillars = [
  {
    title: "Advisor-Centric Approach",
    description:
      "Every decision we make puts our advisors' success at the center. We provide the tools, training, and support needed to thrive.",
  },
  {
    title: "Technology & Innovation",
    description:
      "Leveraging e-commerce and modern technology to deliver tailored product offerings and exceptional customer service.",
  },
  {
    title: "Education & Development",
    description:
      "Weekly training sessions, OM Financial University, and comprehensive resources to help advisors grow their expertise.",
  },
  {
    title: "Ethical Operations",
    description:
      "Operating with integrity and transparency, maintaining the trust of our advisors, partners, and the families we serve.",
  },
]

const provinces = [
  "British Columbia",
  "Alberta",
  "Saskatchewan",
  "Manitoba",
  "Ontario",
  "New Brunswick",
]

function HistoryPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b">
        <div className="container py-4">
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <Link to="/about">
              <ArrowLeft className="h-4 w-4" />
              Back to About
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-muted py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <BlurFade delay={0.1} inView>
              <p className="text-sm font-medium text-primary mb-4 tracking-wide">OUR JOURNEY</p>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                History & Strategy
              </h1>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A legacy of trust, growth, and unwavering commitment to our advisors and the
                Canadian families they serve.
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background border-b">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Years Combined Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">6</div>
                <div className="text-sm text-muted-foreground">Provinces Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">30+</div>
                <div className="text-sm text-muted-foreground">Insurance Partners</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">2</div>
                <div className="text-sm text-muted-foreground">Office Locations</div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Calendar className="h-7 w-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-muted-foreground">
                From humble beginnings to becoming a national leader in insurance distribution.
              </p>
            </div>
          </BlurFade>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <BlurFade key={milestone.era} delay={0.2 + index * 0.1} inView>
                  <Card className="overflow-hidden">
                    <div className="grid md:grid-cols-4 gap-0">
                      <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 flex flex-col items-center justify-center text-center">
                        <milestone.icon className="h-10 w-10 text-primary mb-3" />
                        <span className="text-sm font-medium text-primary uppercase tracking-wide">
                          {milestone.era}
                        </span>
                      </div>
                      <div className="md:col-span-3 p-6">
                        <h3 className="text-xl font-bold text-foreground mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </Card>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Reach */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <BlurFade delay={0.1} inView>
              <div>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <MapPin className="h-7 w-7" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  National Presence
                </h2>
                <p className="text-muted-foreground mb-6">
                  OM Financial serves advisors and their clients across Canada, with a strong
                  presence in key provinces from coast to coast.
                </p>
                <p className="text-muted-foreground">
                  Our strategic locations in Thornhill and Mississauga allow us to effectively
                  serve advisors throughout the country with local support and national reach.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Provinces We Serve
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {provinces.map((province) => (
                      <div key={province} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-foreground">{province}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Target className="h-7 w-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Our Strategic Pillars
              </h2>
              <p className="text-muted-foreground">
                The foundation of our continued growth and success in serving Canadian advisors.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {strategicPillars.map((pillar, index) => (
              <BlurFade key={pillar.title} delay={0.2 + index * 0.1} inView>
                <Card className="h-full hover:shadow-lg hover:border-primary/20 transition-all">
                  <CardHeader>
                    <CardTitle className="text-lg">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{pillar.description}</p>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <BlurFade delay={0.1} inView>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Be Part of Our Story
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Join a growing network of successful advisors and help write the next chapter
              of OM Financial's journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <Link to="/advisor-benefits">
                  Become an Advisor
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/about/executive-team">Meet the Team</Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
