import { createFileRoute, Link } from "@tanstack/react-router"
import {
  Award,
  Building2,
  Users,
  BookOpen,
  MapPin,
  ArrowRight,
  Heart,
  Shield,
  Target,
  Lightbulb
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magic-ui/blur-fade"

export const Route = createFileRoute("/about/")({
  component: AboutPage,
})

const aboutLinks = [
  {
    title: "Vision & Mission",
    description: "Our goals and commitment to advisors and Canadians",
    href: "/about/vision-mission",
    icon: Target,
  },
  {
    title: "Leadership",
    description: "Meet our experienced leadership team",
    href: "/about/leadership",
    icon: Users,
  },
  {
    title: "History & Strategy",
    description: "Our journey and strategic direction",
    href: "/about/history",
    icon: BookOpen,
  },
  {
    title: "Executive Team",
    description: "The professionals driving our success",
    href: "/about/executive-team",
    icon: Award,
  },
]

const values = [
  {
    icon: Heart,
    title: "A Company with a Heart",
    description: "We treat our advisors with respect, honesty, and integrity in everything we do.",
  },
  {
    icon: Shield,
    title: "Ethics Before Profits",
    description: "Our commitment to ethical practices guides every decision we make.",
  },
  {
    icon: Lightbulb,
    title: "50+ Years Experience",
    description: "Combined expertise serving clients across multiple Canadian provinces.",
  },
]

function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-muted py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <BlurFade delay={0.1} inView>
              <p className="text-sm font-medium text-primary mb-4 tracking-wide">ABOUT US</p>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Who We Are
              </h1>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <p className="text-lg text-muted-foreground leading-relaxed">
                OM Financial Inc., a Company with a Heart, is a leading National Managing
                General Agency where we treat our Insurance & Investments Advisors with
                respect, honesty, and integrity.
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">
              Our Core Values
            </h2>
          </BlurFade>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <BlurFade key={value.title} delay={0.2 + index * 0.1} inView>
                <div className="text-center">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <BlurFade delay={0.1} inView>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                  Building Long-Lasting Relationships
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Our organization brings together professionals with over 50 years of
                    combined experience serving clients across British Columbia, Alberta,
                    Manitoba, Saskatchewan, Ontario, and New Brunswick.
                  </p>
                  <p>
                    OM Financial provides weekly training and professional development
                    programs for advisors. We maintain comprehensive back-office support
                    for contracting, new business processing, policy issuance, and
                    customer service.
                  </p>
                  <p>
                    Our team is collectively responsible for building long-lasting customer
                    relationships. We set up strong and realistic strategies for advisors,
                    operating ethically and independently while monitoring financial objectives.
                  </p>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center p-6">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <p className="text-sm text-muted-foreground">Years Combined Experience</p>
                </Card>
                <Card className="text-center p-6">
                  <div className="text-4xl font-bold text-primary mb-2">30+</div>
                  <p className="text-sm text-muted-foreground">Insurance Partners</p>
                </Card>
                <Card className="text-center p-6">
                  <div className="text-4xl font-bold text-primary mb-2">6</div>
                  <p className="text-sm text-muted-foreground">Provinces Served</p>
                </Card>
                <Card className="text-center p-6">
                  <div className="text-4xl font-bold text-primary mb-2">2</div>
                  <p className="text-sm text-muted-foreground">Office Locations</p>
                </Card>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-4">
              Learn More About Us
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Explore our vision, meet our leadership team, and discover our history.
            </p>
          </BlurFade>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutLinks.map((link, index) => (
              <BlurFade key={link.title} delay={0.2 + index * 0.1} inView>
                <Link to={link.href}>
                  <Card className="h-full group hover:shadow-lg hover:border-primary/20 transition-all cursor-pointer">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <link.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        {link.title}
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{link.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
              Our Offices
            </h2>
          </BlurFade>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <BlurFade delay={0.2} inView>
              <div className="bg-primary-foreground/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/20">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Toronto (Head Office)</h3>
                    <p className="text-primary-foreground/80 mb-2">
                      7191 Yonge Street Suite #711<br />
                      Thornhill, ON L3T 0C4
                    </p>
                    <p className="text-primary-foreground/80">
                      Tel: (416) 491-7727<br />
                      Fax: (416) 491-7102
                    </p>
                  </div>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <div className="bg-primary-foreground/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/20">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Mississauga</h3>
                    <p className="text-primary-foreground/80 mb-2">
                      218 Export Boulevard, Suite 610<br />
                      Mississauga, ON L5S 0A7
                    </p>
                    <p className="text-primary-foreground/80">
                      Tel: (905) 612-0800<br />
                      Fax: (905) 612-0801
                    </p>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container text-center">
          <BlurFade delay={0.1} inView>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ready to Join Our Team?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Discover the benefits of partnering with OM Financial and take your
              practice to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/advisor-benefits">
                  View Advisor Benefits
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
