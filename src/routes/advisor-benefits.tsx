import { createFileRoute, Link } from "@tanstack/react-router"
import {
  ArrowRight,
  Shield,
  Award,
  GraduationCap,
  Briefcase,
  TrendingUp,
  Users,
  FileText,
  CheckCircle2,
  Download,
  Phone,
  Mail,
  Building2,
  Handshake,
  BadgePercent,
  HeartHandshake,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magic-ui/blur-fade"

export const Route = createFileRoute("/advisor-benefits")({
  component: AdvisorBenefitsPage,
})

const benefits = [
  {
    icon: Shield,
    title: "E&O Insurance",
    description:
      "Comprehensive Errors & Omissions coverage at competitive group rates to protect your practice.",
    highlight: true,
  },
  {
    icon: BadgePercent,
    title: "Competitive Compensation",
    description:
      "Industry-leading commission structures and bonus programs to maximize your earnings.",
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    description:
      "Access to seminars, webinars, and continuing education programs from top carriers.",
  },
  {
    icon: Briefcase,
    title: "Business Support",
    description:
      "Marketing materials, sales tools, and administrative support to grow your practice.",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description:
      "Career advancement paths, leadership roles, and succession planning support.",
  },
  {
    icon: Users,
    title: "Community & Networking",
    description:
      "Join a community of professionals with regular events and networking opportunities.",
  },
]

const eoFeatures = [
  "Comprehensive coverage for financial advisors",
  "Competitive group rates through industry partnerships",
  "Protection against claims of negligence or errors",
  "Coverage for defense costs and settlements",
  "Easy enrollment and claims process",
  "Annual policy reviews and updates",
]

const supportServices = [
  {
    icon: FileText,
    title: "Compliance Support",
    description: "Stay compliant with regulatory requirements with our dedicated compliance team.",
  },
  {
    icon: Handshake,
    title: "Back Office Services",
    description: "Administrative support for licensing, contracting, and policy processing.",
  },
  {
    icon: Award,
    title: "Recognition Programs",
    description: "Annual awards, incentive trips, and recognition for top performers.",
  },
  {
    icon: HeartHandshake,
    title: "Client Retention Tools",
    description: "CRM tools and client management resources to build lasting relationships.",
  },
]

function AdvisorBenefitsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-muted py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <BlurFade delay={0.1} inView>
              <p className="text-sm font-medium text-primary mb-4 tracking-wide">
                JOIN OUR TEAM
              </p>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Advisor Benefits
              </h1>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At OM Financial, we invest in our advisors' success. Discover the
                comprehensive benefits and support services that help you build a
                thriving practice.
              </p>
            </BlurFade>
            <BlurFade delay={0.4} inView>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/contact">
                    Become an Advisor
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2">
                  <a href="#eo-insurance">
                    Learn About E&O
                    <Shield className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Award className="h-7 w-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Why Join OM Financial?
              </h2>
              <p className="text-muted-foreground">
                We provide comprehensive support to help you succeed and grow your
                financial advisory practice.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <BlurFade key={benefit.title} delay={0.2 + index * 0.05} inView>
                <Card
                  className={`h-full hover:shadow-lg transition-all ${
                    benefit.highlight
                      ? "bg-gradient-to-br from-primary/5 to-primary/10 border-primary/30"
                      : "hover:border-primary/20"
                  }`}
                >
                  <CardHeader>
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-lg mb-3 ${
                        benefit.highlight
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
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

      {/* E&O Insurance Section */}
      <section id="eo-insurance" className="py-16 lg:py-20 bg-background scroll-mt-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <BlurFade delay={0.1} inView>
              <div>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <Shield className="h-7 w-7" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Errors & Omissions Insurance
                </h2>
                <p className="text-muted-foreground mb-6">
                  Protect your practice with comprehensive E&O coverage. We offer
                  competitive group rates through our industry partnerships, ensuring
                  you have the protection you need at an affordable price.
                </p>
                <ul className="space-y-3 mb-8">
                  {eoFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="gap-2">
                    <Link to="/contact">
                      Get a Quote
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download Program Details
                  </Button>
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">Know Your Risk</CardTitle>
                  <CardDescription>
                    Understanding E&O coverage is essential for every financial advisor
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    E&O insurance protects you against claims arising from errors,
                    omissions, or negligence in your professional services. Without
                    adequate coverage, a single claim could put your business and
                    personal assets at risk.
                  </p>
                  <div className="bg-background rounded-lg p-4 border">
                    <p className="text-sm font-medium text-foreground mb-2">
                      Common claims include:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Unsuitable product recommendations</li>
                      <li>• Failure to disclose material information</li>
                      <li>• Administrative errors in applications</li>
                      <li>• Misrepresentation of policy terms</li>
                    </ul>
                  </div>
                  <Button asChild className="w-full gap-2">
                    <a href="mailto:info@omfinancial.com">
                      Contact for E&O Information
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Support Services
              </h2>
              <p className="text-muted-foreground">
                Focus on what you do best while we handle the rest. Our comprehensive
                support services help you run an efficient practice.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {supportServices.map((service, index) => (
              <BlurFade key={service.title} delay={0.2 + index * 0.05} inView>
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mx-auto mb-3">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">30+</div>
                <div className="text-sm text-muted-foreground">Insurance Partners</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Training Sessions/Year</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">6</div>
                <div className="text-sm text-muted-foreground">Provinces Served</div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <BlurFade delay={0.1} inView>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    Toronto Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    7191 Yonge Street Suite 711
                    <br />
                    Thornhill, ON L3T 0C4
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a href="tel:4164917727" className="hover:text-primary transition-colors">
                      (416) 491-7727
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a
                      href="mailto:info@omfinancial.com"
                      className="hover:text-primary transition-colors"
                    >
                      info@omfinancial.com
                    </a>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    Mississauga Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    218 Export Boulevard Suite 610
                    <br />
                    Mississauga, ON L5S 0A7
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a href="tel:9056120800" className="hover:text-primary transition-colors">
                      (905) 612-0800
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a
                      href="mailto:info@omfinancial.com"
                      className="hover:text-primary transition-colors"
                    >
                      info@omfinancial.com
                    </a>
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
              Ready to Join Our Team?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Take the next step in your career. Join OM Financial and access the
              tools, training, and support you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <Link to="/contact">
                  Contact Us Today
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/seminars">View Training Programs</Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
