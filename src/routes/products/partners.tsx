import { createFileRoute, Link } from "@tanstack/react-router"
import {
  ArrowLeft,
  ArrowRight,
  Building2,
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

export const Route = createFileRoute("/products/partners")({
  component: PartnersPage,
})

interface Partner {
  name: string
  category: "life" | "health" | "wealth" | "group" | "specialty"
  tier: "premier" | "major" | "partner"
  description?: string
}

// Helper function to create slug from name
function createSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")
}

const partners: Partner[] = [
  // Premier Partners
  { name: "Manulife", category: "life", tier: "premier", description: "Comprehensive life and living benefits solutions" },
  { name: "Sun Life", category: "life", tier: "premier", description: "Insurance, investments, and group benefits" },
  { name: "Canada Life", category: "life", tier: "premier", description: "Individual and group insurance products" },
  { name: "Desjardins Insurance", category: "life", tier: "premier", description: "Full suite of insurance and wealth solutions" },
  { name: "iA Financial Group", category: "life", tier: "premier", description: "Insurance, savings, and retirement solutions" },
  { name: "RBC Insurance", category: "life", tier: "premier", description: "Life, health, and travel insurance" },

  // Major Partners
  { name: "BMO Insurance", category: "life", tier: "major", description: "Life insurance and living benefits" },
  { name: "Empire Life", category: "life", tier: "major", description: "Life insurance and wealth management" },
  { name: "Equitable Life", category: "life", tier: "major", description: "Individual and group solutions" },
  { name: "Foresters Financial", category: "life", tier: "major", description: "Life insurance with member benefits" },
  { name: "Beneva", category: "life", tier: "major", description: "Insurance and financial services" },
  { name: "Humania Assurance", category: "life", tier: "major", description: "Simplified issue life insurance" },

  // Health & Benefits Partners
  { name: "Green Shield Canada", category: "health", tier: "major", description: "Health and dental benefits" },
  { name: "Blue Cross", category: "health", tier: "major", description: "Health, dental, and travel coverage" },
  { name: "Medavie Blue Cross", category: "health", tier: "partner", description: "Health and travel insurance" },
  { name: "ClaimSecure", category: "health", tier: "partner", description: "Health spending accounts" },

  // Wealth Partners
  { name: "CI Investments", category: "wealth", tier: "major", description: "Segregated funds and investments" },
  { name: "Fidelity Investments", category: "wealth", tier: "major", description: "Investment solutions" },
  { name: "AGF", category: "wealth", tier: "partner", description: "Investment management" },
  { name: "Dynamic Funds", category: "wealth", tier: "partner", description: "Actively managed investments" },
  { name: "Mackenzie Investments", category: "wealth", tier: "partner", description: "Mutual funds and ETFs" },

  // Specialty Partners
  { name: "Specialty Life", category: "specialty", tier: "partner", description: "Impaired risk specialists" },
  { name: "Assumption Life", category: "specialty", tier: "partner", description: "Simplified and guaranteed issue" },
  { name: "Edge Benefits", category: "specialty", tier: "partner", description: "Group benefits for small business" },
  { name: "GroupHEALTH", category: "specialty", tier: "partner", description: "Innovative group solutions" },
  { name: "Manulife Vitality", category: "specialty", tier: "partner", description: "Wellness-based insurance" },
  { name: "Tugo", category: "specialty", tier: "major", description: "Travel insurance solutions" },
  { name: "Allianz", category: "specialty", tier: "partner", description: "Travel and specialty insurance" },
  { name: "GMS", category: "specialty", tier: "partner", description: "Travel and health insurance" },
  { name: "21st Century", category: "specialty", tier: "partner", description: "Super visa and travel insurance" },
  { name: "Destination Travel", category: "specialty", tier: "partner", description: "Travel insurance specialists" },
]

const categories = [
  {
    icon: Shield,
    title: "Life Insurance",
    description: "Term, whole life, universal life, and living benefits from Canada's top carriers.",
    count: partners.filter(p => p.category === "life").length,
  },
  {
    icon: Heart,
    title: "Health & Dental",
    description: "Individual and group health, dental, and extended healthcare coverage.",
    count: partners.filter(p => p.category === "health").length,
  },
  {
    icon: TrendingUp,
    title: "Wealth Management",
    description: "Segregated funds, RRSPs, TFSAs, RESPs, and investment solutions.",
    count: partners.filter(p => p.category === "wealth").length,
  },
  {
    icon: Briefcase,
    title: "Specialty Products",
    description: "Travel insurance, super visa, impaired risk, and niche solutions.",
    count: partners.filter(p => p.category === "specialty").length,
  },
]

const premierPartners = partners.filter(p => p.tier === "premier")
const majorPartners = partners.filter(p => p.tier === "major")
const regularPartners = partners.filter(p => p.tier === "partner")

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <Link to="/products/partners/$slug" params={{ slug: createSlug(partner.name) }}>
      <Card className="h-full hover:shadow-lg transition-all hover:border-primary/30 group cursor-pointer">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-base group-hover:text-primary transition-colors">{partner.name}</CardTitle>
              <p className="text-xs text-muted-foreground capitalize">{partner.category.replace("_", " ")}</p>
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
                We've partnered with 30+ of Canada's most trusted insurance and investment
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
                <div className="text-4xl font-bold text-primary mb-2">30+</div>
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

      {/* Partner Marquee */}
      <section className="py-12 bg-muted/30 border-y overflow-hidden">
        <div className="container mb-8">
          <BlurFade delay={0.1} inView>
            <h2 className="text-xl font-semibold text-center text-foreground">
              Trusted by Canada's Leading Insurance Companies
            </h2>
          </BlurFade>
        </div>
        <Marquee pauseOnHover className="[--duration:40s]">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="mx-4 flex items-center justify-center h-16 px-6 bg-background rounded-lg border hover:border-primary/30 transition-colors"
            >
              <span className="font-medium text-foreground whitespace-nowrap">{partner.name}</span>
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
                <p className="text-sm text-muted-foreground">Our strategic partnerships with Canada's largest insurers</p>
              </div>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {premierPartners.map((partner, index) => (
              <BlurFade key={partner.name} delay={0.2 + index * 0.05} inView>
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
                <p className="text-sm text-muted-foreground">Established relationships with leading carriers</p>
              </div>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {majorPartners.map((partner, index) => (
              <BlurFade key={partner.name} delay={0.2 + index * 0.05} inView>
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
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Additional Partners</h2>
                <p className="text-sm text-muted-foreground">Specialized carriers for niche products and solutions</p>
              </div>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {regularPartners.map((partner, index) => (
              <BlurFade key={partner.name} delay={0.2 + index * 0.03} inView>
                <Link to="/products/partners/$slug" params={{ slug: createSlug(partner.name) }}>
                  <Card className="hover:shadow-md transition-all hover:border-primary/20 group cursor-pointer">
                    <CardContent className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                          <Building2 className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-medium text-sm group-hover:text-primary transition-colors">{partner.name}</p>
                          <p className="text-xs text-muted-foreground capitalize">{partner.category}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
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
                Our extensive partner relationships translate into better outcomes for advisors and clients.
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
              Join OM Financial and gain access to 30+ insurance carriers and investment
              partners to serve your clients better.
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
