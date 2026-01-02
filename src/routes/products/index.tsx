import { createFileRoute, Link } from "@tanstack/react-router"
import {
  Shield,
  Heart,
  Briefcase,
  GraduationCap,
  Plane,
  Building2,
  PiggyBank,
  Users,
  FileText,
  ArrowRight,
  Search,
  Handshake
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magic-ui/blur-fade"
import { Marquee } from "@/components/magic-ui/marquee"

export const Route = createFileRoute("/products/")({
  component: ProductsPage,
})

const productCategories = [
  {
    icon: Shield,
    title: "Individual Protection",
    description: "Life, disability, health, critical illness, and long-term care insurance.",
    products: ["Term Life", "Whole Life", "Disability", "Critical Illness", "Long-Term Care"],
  },
  {
    icon: Users,
    title: "Group Benefits",
    description: "Comprehensive benefit and retirement arrangements for businesses.",
    products: ["Group Health", "Group Life", "Dental Plans", "Retirement Plans"],
  },
  {
    icon: PiggyBank,
    title: "Registered Accounts",
    description: "Tax-advantaged savings vehicles for every stage of life.",
    products: ["RRSPs", "RRIFs", "LIFs", "TFSAs"],
  },
  {
    icon: Building2,
    title: "Investment Products",
    description: "Segregated funds and annuities for wealth accumulation.",
    products: ["Segregated Funds", "Annuities", "GICs"],
  },
  {
    icon: GraduationCap,
    title: "Education Savings",
    description: "Registered Education Savings Plans for your children's future.",
    products: ["Individual RESPs", "Family RESPs", "Group RESPs"],
  },
  {
    icon: Briefcase,
    title: "Business Insurance",
    description: "Business, key person, and group insurance solutions.",
    products: ["Key Person", "Buy-Sell", "Group Plans", "Commercial"],
  },
  {
    icon: FileText,
    title: "Estate Planning",
    description: "Wills, estate plans, and buy-sell agreements.",
    products: ["Estate Planning", "Succession", "Buy-Sell Agreements"],
  },
  {
    icon: Plane,
    title: "Travel & Immigration",
    description: "Super Visa, visitor, travel insurance, and new-to-Canada coverage.",
    products: ["Super Visa", "Visitor Insurance", "Travel Medical", "New Immigrants"],
  },
]

const partners = [
  { name: "Sun Life", tier: "premier" },
  { name: "Canada Life", tier: "premier" },
  { name: "Manulife", tier: "premier" },
  { name: "RBC Insurance", tier: "premier" },
  { name: "iA Financial", tier: "major" },
  { name: "Empire Life", tier: "major" },
  { name: "Foresters", tier: "major" },
  { name: "Ivari", tier: "major" },
  { name: "Assumption Life", tier: "partner" },
  { name: "Co-operators", tier: "partner" },
  { name: "CUMIS", tier: "partner" },
  { name: "B2B Insurance", tier: "partner" },
  { name: "GMS", tier: "partner" },
  { name: "BMO Insurance", tier: "partner" },
  { name: "UV Insurance", tier: "partner" },
  { name: "My Dignity", tier: "partner" },
]

const premierPartners = partners.filter(p => p.tier === "premier")
const majorPartners = partners.filter(p => p.tier === "major")
const otherPartners = partners.filter(p => p.tier === "partner")

function PartnerCard({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center h-20 px-8 bg-card border rounded-lg mx-2">
      <span className="font-semibold text-foreground whitespace-nowrap">{name}</span>
    </div>
  )
}

function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-muted py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <BlurFade delay={0.1} inView>
              <p className="text-sm font-medium text-primary mb-4 tracking-wide">OUR OFFERINGS</p>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Products & Partners
              </h1>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Access a comprehensive suite of insurance and investment products from
                Canada's leading carriers, supported by world-class service.
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-background border-b">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">30+</div>
                <div className="text-sm text-muted-foreground">Insurance Carriers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">8</div>
                <div className="text-sm text-muted-foreground">Product Categories</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">6</div>
                <div className="text-sm text-muted-foreground">Provinces Served</div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Heart className="h-7 w-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Product Categories
              </h2>
              <p className="text-muted-foreground">
                Comprehensive coverage for every stage of life and every business need.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {productCategories.map((category, index) => (
              <BlurFade key={category.title} delay={0.2 + index * 0.05} inView>
                <Card className="h-full hover:shadow-lg hover:border-primary/20 transition-all">
                  <CardHeader className="pb-3">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
                      <category.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      {category.products.map((product) => (
                        <span
                          key={product}
                          className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Find an Advisor CTA */}
      <section className="py-12 bg-background border-b">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="py-8">
                <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                    <Search className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Need Help Choosing the Right Product?
                    </h3>
                    <p className="text-muted-foreground">
                      Connect with a licensed advisor who can assess your needs and recommend
                      the best solutions for you and your family.
                    </p>
                  </div>
                  <Button asChild size="lg" className="gap-2 shrink-0">
                    <Link to="/products/find-advisor">
                      Find an Advisor
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </section>

      {/* Insurance Partners */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Handshake className="h-7 w-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Our Insurance Partners
              </h2>
              <p className="text-muted-foreground">
                We partner with Canada's most trusted insurance carriers to bring you
                competitive products and exceptional service.
              </p>
            </div>
          </BlurFade>

          {/* Premier Partners */}
          <BlurFade delay={0.2} inView>
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-foreground text-center mb-6">
                Premier Partners
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {premierPartners.map((partner) => (
                  <Card key={partner.name} className="hover:shadow-md transition-shadow">
                    <CardContent className="py-6 text-center">
                      <span className="font-semibold text-foreground">{partner.name}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </BlurFade>

          {/* Major Partners */}
          <BlurFade delay={0.3} inView>
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-foreground text-center mb-6">
                Major Partners
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {majorPartners.map((partner) => (
                  <Card key={partner.name} className="hover:shadow-md transition-shadow">
                    <CardContent className="py-6 text-center">
                      <span className="font-medium text-foreground">{partner.name}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </BlurFade>

          {/* Partner Marquee */}
          <BlurFade delay={0.4} inView>
            <div className="relative max-w-5xl mx-auto">
              <h3 className="text-lg font-semibold text-foreground text-center mb-6">
                All Partners
              </h3>
              <Marquee pauseOnHover className="[--duration:40s]">
                {partners.map((partner) => (
                  <PartnerCard key={partner.name} name={partner.name} />
                ))}
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:40s] mt-4">
                {[...partners].reverse().map((partner) => (
                  <PartnerCard key={partner.name} name={partner.name} />
                ))}
              </Marquee>
            </div>
          </BlurFade>

          <BlurFade delay={0.5} inView>
            <div className="text-center mt-8">
              <Button asChild variant="outline" className="gap-2">
                <Link to="/products/partners">
                  View All Partners
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
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
              Whether you're looking for personal coverage or business solutions,
              our team is here to help you find the right fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <Link to="/products/find-advisor">
                  Find an Advisor
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
