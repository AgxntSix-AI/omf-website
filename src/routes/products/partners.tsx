import { createFileRoute, Link } from "@tanstack/react-router"
import {
  ArrowLeft,
  ArrowRight,
  Shield,
  Heart,
  Briefcase,
  TrendingUp,
  Users,
  Globe,
  Award,
  CheckCircle2,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magic-ui/blur-fade"
import { Marquee } from "@/components/magic-ui/marquee"
import {
  partners,
  premierPartners,
  majorPartners,
  regularPartners,
  getLogoPath,
  type Partner,
} from "@/config/partners"

export const Route = createFileRoute("/products/partners")({
  component: PartnersPage,
})

const categories = [
  {
    icon: Shield,
    title: "Life Insurance",
    description: "Term, whole life, universal life, and living benefits from Canada's top carriers.",
    count: partners.filter((p) => p.category === "life").length,
  },
  {
    icon: Heart,
    title: "Health & Dental",
    description: "Individual and group health, dental, and extended healthcare coverage.",
    count: partners.filter((p) => p.category === "health").length,
  },
  {
    icon: TrendingUp,
    title: "Wealth Management",
    description: "Segregated funds, RRSPs, TFSAs, RESPs, and investment solutions.",
    count: partners.filter((p) => p.category === "wealth").length,
  },
  {
    icon: Briefcase,
    title: "Specialty Products",
    description: "Travel insurance, super visa, impaired risk, and niche solutions.",
    count: partners.filter((p) => p.category === "specialty").length,
  },
]

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <Link to="/products/partners/$slug" params={{ slug: partner.id }}>
      <Card className="h-full hover:shadow-lg transition-all hover:border-primary/30 group cursor-pointer">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-4">
            {/* Partner Logo */}
            <div className="h-16 w-24 rounded-lg bg-muted/30 flex items-center justify-center shrink-0 p-2 group-hover:bg-muted/50 transition-colors">
              <img
                src={getLogoPath(partner.logo)}
                alt={partner.name}
                className="max-h-12 max-w-full object-contain"
                loading="lazy"
              />
            </div>
            <div>
              <CardTitle className="text-base group-hover:text-primary transition-colors">
                {partner.name}
              </CardTitle>
              <p className="text-xs text-muted-foreground capitalize">
                {partner.category.replace("_", " ")}
              </p>
            </div>
          </div>
        </CardHeader>
        {partner.description && (
          <CardContent className="pt-0">
            <p className="text-sm text-muted-foreground">{partner.description}</p>
          </CardContent>
        )}
      </Card>
    </Link>
  )
}

function SmallPartnerCard({ partner }: { partner: Partner }) {
  return (
    <Link to="/products/partners/$slug" params={{ slug: partner.id }}>
      <Card className="hover:shadow-md transition-all hover:border-primary/20 group cursor-pointer">
        <CardContent className="py-4">
          <div className="flex items-center gap-3">
            {/* Partner Logo */}
            <div className="h-14 w-20 rounded-lg bg-muted/30 flex items-center justify-center shrink-0 p-2 group-hover:bg-muted/50 transition-colors">
              <img
                src={getLogoPath(partner.logo)}
                alt={partner.name}
                className="max-h-10 max-w-full object-contain"
                loading="lazy"
              />
            </div>
            <div>
              <p className="font-medium text-sm group-hover:text-primary transition-colors">
                {partner.name}
              </p>
              <p className="text-xs text-muted-foreground capitalize">{partner.category}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

function PartnersPage() {
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
                OUR NETWORK
              </p>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Insurance & Investment Partners
              </h1>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We've partnered with {partners.length}+ of Canada's most trusted insurance and investment
                companies to bring you the best products and solutions for your clients.
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted/30 border-y">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">{partners.length}+</div>
                <div className="text-sm text-muted-foreground">Insurance Partners</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Products Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">6</div>
                <div className="text-sm text-muted-foreground">Provinces Served</div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Globe className="h-7 w-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Product Categories
              </h2>
              <p className="text-muted-foreground">
                Access comprehensive solutions across all major insurance and investment categories.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <BlurFade key={category.title} delay={0.2 + index * 0.05} inView>
                <Card className="h-full text-center hover:shadow-lg transition-shadow hover:border-primary/30">
                  <CardHeader>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mx-auto mb-3">
                      <category.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <CardDescription className="text-2xl font-bold text-primary">
                      {category.count} Partners
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Marquee with Logos */}
      <section className="py-12 bg-muted/30 border-y overflow-hidden">
        <div className="container mb-8">
          <BlurFade delay={0.1} inView>
            <h2 className="text-xl font-semibold text-center text-foreground">
              Trusted by Canada's Leading Insurance Companies
            </h2>
          </BlurFade>
        </div>
        <Marquee pauseOnHover className="[--duration:40s] [--gap:1.5rem]">
          {partners.slice(0, 20).map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center h-16 w-36 px-4 bg-card/50 hover:bg-card rounded-lg border border-border/30 hover:border-primary/30 hover:shadow-md transition-all"
            >
              <img
                src={getLogoPath(partner.logo)}
                alt={partner.name}
                className="max-h-12 max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </Marquee>
      </section>

      {/* Premier Partners */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="flex items-center gap-3 mb-8">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Premier Partners</h2>
                <p className="text-sm text-muted-foreground">
                  Our strategic partnerships with Canada's largest insurers
                </p>
              </div>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {premierPartners.map((partner, index) => (
              <BlurFade key={partner.id} delay={0.2 + index * 0.05} inView>
                <PartnerCard partner={partner} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Major Partners */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="flex items-center gap-3 mb-8">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20 text-accent-foreground">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Major Partners</h2>
                <p className="text-sm text-muted-foreground">
                  Established relationships with leading carriers
                </p>
              </div>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {majorPartners.map((partner, index) => (
              <BlurFade key={partner.id} delay={0.2 + index * 0.05} inView>
                <PartnerCard partner={partner} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* All Other Partners */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="flex items-center gap-3 mb-8">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                <Briefcase className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Additional Partners</h2>
                <p className="text-sm text-muted-foreground">
                  Specialized carriers for niche products and solutions
                </p>
              </div>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {regularPartners.map((partner, index) => (
              <BlurFade key={partner.id} delay={0.2 + index * 0.03} inView>
                <SmallPartnerCard partner={partner} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Our Network */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Benefits of Our Partner Network
              </h2>
              <p className="text-muted-foreground">
                Our extensive partner relationships translate into better outcomes for advisors and
                clients.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <BlurFade delay={0.2} inView>
              <div className="text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Competitive Rates</h3>
                <p className="text-sm text-muted-foreground">
                  Volume-based pricing and preferred underwriting from top carriers.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.25} inView>
              <div className="text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <Shield className="h-7 w-7" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Product Selection</h3>
                <p className="text-sm text-muted-foreground">
                  Access to the widest range of products to meet any client need.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <div className="text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <TrendingUp className="h-7 w-7" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Expert Support</h3>
                <p className="text-sm text-muted-foreground">
                  Dedicated wholesaler relationships and advanced case support.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <BlurFade delay={0.1} inView>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Access Our Partner Network?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Join OM Financial and gain access to {partners.length}+ insurance carriers and
              investment partners to serve your clients better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <Link to="/contact">
                  Become an Advisor
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/products/find-advisor">Find an Advisor</Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
