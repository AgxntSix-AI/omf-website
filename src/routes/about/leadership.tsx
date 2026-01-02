import { createFileRoute, Link } from "@tanstack/react-router"
import {
  User,
  Award,
  Quote,
  ArrowLeft,
  ArrowRight,
  Mail,
  Phone,
  Building2
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { BlurFade } from "@/components/magic-ui/blur-fade"

export const Route = createFileRoute("/about/leadership")({
  component: LeadershipPage,
})

function LeadershipPage() {
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
              <p className="text-sm font-medium text-primary mb-4 tracking-wide">OUR TEAM</p>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Leadership
              </h1>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Meet the experienced professionals guiding OM Financial's vision
                and commitment to excellence.
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Leader Profile */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <BlurFade delay={0.1} inView>
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Photo/Avatar Section */}
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 flex items-center justify-center">
                    <Avatar className="h-40 w-40 border-4 border-background shadow-lg">
                      <AvatarFallback className="text-4xl font-bold bg-primary text-primary-foreground">
                        RB
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Content Section */}
                  <div className="md:col-span-2 p-8">
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-foreground mb-1">
                        Rahul Bhardwaj
                      </h2>
                      <p className="text-primary font-medium">Chief Leader</p>
                    </div>

                    <p className="text-muted-foreground mb-6">
                      An experienced, innovative, creative and knowledgeable leader who
                      brings vision and expertise to OM Financial. With a deep commitment
                      to ethical practices, Rahul leads the organization with integrity
                      and passion.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-foreground">
                        <Quote className="h-5 w-5 text-primary shrink-0" />
                        <span className="font-medium italic">"Ethics Before Profits"</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground">
                        <Award className="h-5 w-5 text-primary shrink-0" />
                        <span className="font-medium italic">"Never Give Up"</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Our Leadership Team
              </h2>
              <p className="text-muted-foreground">
                The OM Financial leadership team consists of some of the finest and
                skilled wealth management professionals in the industry.
              </p>
            </div>
          </BlurFade>

          <div className="max-w-4xl mx-auto">
            <BlurFade delay={0.2} inView>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Team Excellence
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Our team is collectively responsible for building long-lasting customer
                    relationships and the company's impressive track record of success.
                  </p>
                  <p className="text-muted-foreground">
                    They set up strong and realistic strategies for advisors, operating
                    ethically and independently while diligently monitoring financial
                    objectives to ensure sustainable growth.
                  </p>
                  <div className="pt-4">
                    <Button asChild className="gap-2">
                      <Link to="/about/executive-team">
                        Meet the Executive Team
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">
              Get in Touch
            </h2>
          </BlurFade>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <BlurFade delay={0.2} inView>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <CardTitle>Toronto (Head Office)</CardTitle>
                  <CardDescription>
                    7191 Yonge Street Suite #711<br />
                    Thornhill, ON L3T 0C4
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>(416) 491-7727</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>Fax: (416) 491-7102</span>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <CardTitle>Mississauga</CardTitle>
                  <CardDescription>
                    218 Export Boulevard, Suite 610<br />
                    Mississauga, ON L5S 0A7
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>(905) 612-0800</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>Fax: (905) 612-0801</span>
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
              Ready to Work with Our Team?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Join the OM Financial family and benefit from experienced leadership
              and comprehensive support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/advisor-benefits">Advisor Benefits</Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
