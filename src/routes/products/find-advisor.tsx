import { createFileRoute, Link } from "@tanstack/react-router"
import {
  ArrowRight,
  ArrowLeft,
  Search,
  Phone,
  Mail,
  MapPin,
  User,
  MessageSquare,
  CheckCircle2,
  Shield,
  Heart,
  Briefcase,
  Building2,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magic-ui/blur-fade"

export const Route = createFileRoute("/products/find-advisor")({
  component: FindAdvisorPage,
})

const benefits = [
  {
    icon: User,
    title: "Personalized Service",
    description: "Get matched with an advisor who understands your unique needs and goals.",
  },
  {
    icon: Shield,
    title: "Licensed Professionals",
    description: "All our advisors are fully licensed and regulated in their respective provinces.",
  },
  {
    icon: Heart,
    title: "Client-First Approach",
    description: "Our advisors prioritize your best interests with needs-based recommendations.",
  },
  {
    icon: Briefcase,
    title: "Comprehensive Solutions",
    description: "Access to 30+ insurance carriers and a full range of investment products.",
  },
]

const productTypes = [
  "Life Insurance",
  "Critical Illness",
  "Disability Insurance",
  "Health & Dental",
  "RRSPs & TFSAs",
  "RESPs",
  "Segregated Funds",
  "Annuities",
  "Group Benefits",
  "Business Insurance",
  "Travel Insurance",
  "Super Visa Insurance",
]

function FindAdvisorPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b">
        <div className="container py-4">
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <Link to="/products">
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-muted py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <BlurFade delay={0.1} inView>
              <p className="text-sm font-medium text-primary mb-4 tracking-wide">
                CONNECT WITH AN EXPERT
              </p>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Find an Insurance & Investment Advisor
              </h1>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Looking for personalized financial advice? Let us connect you with a
                licensed advisor who can help you navigate your insurance and investment
                options.
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Request Form Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form Card */}
            <BlurFade delay={0.1} inView>
              <Card className="h-fit">
                <CardHeader>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
                    <Search className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">Request an Advisor</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll match you with an advisor who can
                    help with your specific needs.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* GHL Form Placeholder */}
                  <div className="bg-muted/50 rounded-lg p-8 border-2 border-dashed border-muted-foreground/20 text-center">
                    <MessageSquare className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground mb-4">
                      Contact form will be integrated here
                    </p>
                    <p className="text-xs text-muted-foreground">
                      GoHighLevel widget placeholder
                    </p>
                  </div>

                  {/* Alternative Contact */}
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-4">
                      Prefer to speak directly? Contact us:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Button asChild variant="outline" className="gap-2">
                        <a href="tel:4164917727">
                          <Phone className="h-4 w-4" />
                          (416) 491-7727
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="gap-2">
                        <a href="mailto:info@omfinancial.com">
                          <Mail className="h-4 w-4" />
                          Email Us
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>

            {/* Info Side */}
            <div className="space-y-8">
              <BlurFade delay={0.2} inView>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    How It Works
                  </h2>
                  <ol className="space-y-4">
                    <li className="flex gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Submit Your Request</p>
                        <p className="text-sm text-muted-foreground">
                          Tell us about your insurance or investment needs.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">
                        2
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Get Matched</p>
                        <p className="text-sm text-muted-foreground">
                          We'll connect you with a licensed advisor in your area.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">
                        3
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Free Consultation</p>
                        <p className="text-sm text-muted-foreground">
                          Receive personalized advice with no obligation.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </BlurFade>

              <BlurFade delay={0.3} inView>
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <CardContent className="py-6">
                    <h3 className="font-semibold text-foreground mb-3">
                      Products We Can Help With
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {productTypes.map((product) => (
                        <span
                          key={product}
                          className="text-xs bg-background border rounded-full px-3 py-1 text-muted-foreground"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Why Work With Our Advisors?
              </h2>
              <p className="text-muted-foreground">
                Our network of experienced advisors is committed to helping you make
                informed financial decisions.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <BlurFade key={benefit.title} delay={0.2 + index * 0.05} inView>
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mx-auto mb-3">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <MapPin className="h-7 w-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Visit Our Offices
              </h2>
              <p className="text-muted-foreground">
                Prefer to meet in person? Visit one of our office locations.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <BlurFade delay={0.2} inView>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    Toronto (Head Office)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      7191 Yonge Street Suite 711
                      <br />
                      Thornhill, ON L3T 0C4
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a
                      href="tel:4164917727"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      (416) 491-7727
                    </a>
                  </div>
                  <Button asChild className="w-full gap-2 mt-2">
                    <a
                      href="https://maps.google.com/?q=7191+Yonge+Street+Suite+711+Thornhill+ON"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    Mississauga Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      218 Export Boulevard Suite 610
                      <br />
                      Mississauga, ON L5S 0A7
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a
                      href="tel:9056120800"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      (905) 612-0800
                    </a>
                  </div>
                  <Button asChild className="w-full gap-2 mt-2">
                    <a
                      href="https://maps.google.com/?q=218+Export+Boulevard+Suite+610+Mississauga+ON"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-muted/30 border-y">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">No Obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Licensed Advisors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">50+ Years Experience</span>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <BlurFade delay={0.1} inView>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Take the first step toward securing your financial future. Connect with
              an advisor today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <a href="tel:4164917727">
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/products">Browse Products</Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
