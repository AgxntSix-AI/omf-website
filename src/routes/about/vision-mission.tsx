import { createFileRoute, Link } from "@tanstack/react-router"
import {
  Target,
  Rocket,
  GraduationCap,
  Laptop,
  Users,
  Heart,
  ArrowLeft,
  CheckCircle2
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magic-ui/blur-fade"

export const Route = createFileRoute("/about/vision-mission")({
  component: VisionMissionPage,
})

const missionPillars = [
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Educating about the economy, individual and collective responsibility, particularly with our advisors, our providers and our employees.",
  },
  {
    icon: Laptop,
    title: "Technology",
    description:
      "Leveraging e-commerce to provide tailored product offerings and proficient customer service.",
  },
  {
    icon: Users,
    title: "Talent",
    description:
      "Recruiting aspiring talented individuals who share our passion for financial empowerment and our goal to bring change in the lives of Canadians.",
  },
]

const coreValues = [
  "Active participation in community development",
  "Sustainable prosperity for all stakeholders",
  "Advisors' interests at the center of operations",
  "Discipline and passion to maintain trust",
  "Ethical and independent operations",
  "Strong and realistic strategies for success",
]

function VisionMissionPage() {
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
              <p className="text-sm font-medium text-primary mb-4 tracking-wide">OUR PURPOSE</p>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Vision & Mission
              </h1>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Guiding principles that drive our commitment to advisors and Canadian families.
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <BlurFade delay={0.1} inView>
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
                    <Target className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <blockquote className="text-xl sm:text-2xl text-foreground font-medium leading-relaxed">
                    "OM Financial Inc. is a leading national MGA. Our goal is to be the most
                    trusted and valued customer-driven MGA in the country."
                  </blockquote>
                  <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
                    We aspire to become Canada's premier network of Insurance & Investments
                    Advisors offering competent, affordable, and measurable results while
                    promoting financial literacy among Canadian families.
                  </p>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Rocket className="h-7 w-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground">
                We commit to contributing to economic and social well-being through
                three key approaches.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {missionPillars.map((pillar, index) => (
              <BlurFade key={pillar.title} delay={0.2 + index * 0.1} inView>
                <Card className="h-full text-center hover:shadow-lg hover:border-primary/20 transition-all">
                  <CardHeader>
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
                      <pillar.icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl">{pillar.title}</CardTitle>
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

      {/* Core Values Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <BlurFade delay={0.1} inView>
              <div>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <Heart className="h-7 w-7" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Our Core Values
                </h2>
                <p className="text-muted-foreground mb-6">
                  OM Financial emphasizes active participation in community development
                  and sustainable prosperity, with the interests of Insurance & Investments
                  Advisors at the center of operations.
                </p>
                <p className="text-foreground font-medium italic">
                  "Discipline and passion to maintain the trust of advisors and providers."
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {coreValues.map((value, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground">{value}</span>
                      </li>
                    ))}
                  </ul>
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
              Share Our Vision?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Join a team that values ethics, education, and empowerment.
              Discover what it means to be part of OM Financial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <Link to="/advisor-benefits">
                  Become an Advisor
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/about/leadership">Meet Our Leadership</Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
