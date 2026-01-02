import { createFileRoute, Link } from "@tanstack/react-router"
import {
  ArrowLeft,
  MessageSquare,
  Users,
  Bell,
  Mail,
  Phone,
  Building2,
  Clock,
  Sparkles,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magic-ui/blur-fade"

export const Route = createFileRoute("/advisor-portal/forum")({
  component: ForumPage,
})

function ForumPage() {
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
                <MessageSquare className="h-7 w-7" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Advisor Community Forum
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Connect with fellow advisors, share best practices, and learn from each other's experiences.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <BlurFade delay={0.2} inView>
            <Card className="max-w-2xl mx-auto border-2 border-dashed border-primary/30">
              <CardContent className="py-16 text-center">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                  <Sparkles className="h-10 w-10" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Coming Soon
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto mb-8">
                  We're building a dedicated community forum where you can connect with fellow advisors, ask questions, share insights, and grow together.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
                  <Clock className="h-4 w-4" />
                  <span>Expected launch: Q2 2026</span>
                </div>
                <Button size="lg" className="gap-2">
                  <Bell className="h-4 w-4" />
                  Notify Me When Available
                </Button>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                What to Expect
              </h2>
              <p className="text-muted-foreground">
                Here's what we're planning for the OM Financial Advisor Community Forum.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: MessageSquare,
                title: "Discussion Forums",
                description: "Topic-based discussions on products, sales strategies, compliance, and more.",
              },
              {
                icon: Users,
                title: "Peer Networking",
                description: "Connect with advisors in your region or specialty for mentorship and collaboration.",
              },
              {
                icon: Sparkles,
                title: "Expert Q&A",
                description: "Get answers from OM Financial staff, carrier representatives, and industry experts.",
              },
            ].map((feature, index) => (
              <BlurFade key={feature.title} delay={0.15 + index * 0.05} inView>
                <Card className="h-full">
                  <CardHeader>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Phone className="h-7 w-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Need Help Now?
              </h2>
              <p className="text-muted-foreground">
                While we build the community forum, here are ways to get support and connect with our team.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <BlurFade delay={0.2} inView>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <CardTitle>Toronto Office</CardTitle>
                  <CardDescription>
                    7191 Yonge Street, Suite 711<br />
                    Thornhill, ON L3T 0C4
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a href="tel:4164917727" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="h-4 w-4" />
                    (416) 491-7727
                  </a>
                  <a href="mailto:info@omfinancial.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" />
                    info@omfinancial.com
                  </a>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade delay={0.25} inView>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <CardTitle>Mississauga Office</CardTitle>
                  <CardDescription>
                    218 Export Boulevard, Suite 610<br />
                    Mississauga, ON L5S 0A7
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a href="tel:9056120800" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="h-4 w-4" />
                    (905) 612-0800
                  </a>
                  <a href="mailto:info@omfinancial.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" />
                    info@omfinancial.com
                  </a>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <BlurFade delay={0.1} inView>
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground mb-6">
              <Users className="h-7 w-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Join Our Network
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Interested in joining OM Financial? Connect with us to learn about the benefits of being part of our advisor network.
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
                <Link to="/advisor-benefits">
                  View Benefits
                </Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
