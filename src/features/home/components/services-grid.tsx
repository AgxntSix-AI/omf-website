import { Link } from "@tanstack/react-router"
import {
  Heart,
  Shield,
  Users,
  Wallet,
  Building2,
  LineChart,
  Umbrella,
  Briefcase,
  ArrowRight,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magic-ui/blur-fade"

const services = [
  {
    icon: Heart,
    title: "Life Insurance",
    description:
      "Term, Whole Life, Universal Life, and other protection solutions for your clients.",
    href: "/products",
  },
  {
    icon: Shield,
    title: "Disability Insurance",
    description:
      "Income protection plans to safeguard against illness or injury.",
    href: "/products",
  },
  {
    icon: Umbrella,
    title: "Health & CI Insurance",
    description:
      "Critical illness, extended health, and dental coverage options.",
    href: "/products",
  },
  {
    icon: Users,
    title: "Group Plans",
    description:
      "Employee benefits and group insurance solutions for businesses.",
    href: "/products",
  },
  {
    icon: Wallet,
    title: "RRSP & TFSA",
    description:
      "Registered retirement and tax-free savings account solutions.",
    href: "/products",
  },
  {
    icon: LineChart,
    title: "Segregated Funds",
    description:
      "Investment funds with insurance benefits and guarantees.",
    href: "/products",
  },
  {
    icon: Building2,
    title: "Business Insurance",
    description:
      "Key person, buy-sell agreements, and corporate planning.",
    href: "/products",
  },
  {
    icon: Briefcase,
    title: "Estate Planning",
    description:
      "Wealth transfer and estate preservation strategies.",
    href: "/products",
  },
]

export function ServicesGrid() {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-background via-muted/40 to-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />

      <div className="container relative">
        {/* Section Header */}
        <BlurFade delay={0.1} inView>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="inline-block text-sm font-semibold text-primary mb-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">OUR SERVICES</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              We offer a full range of insurance and investment products through
              our extensive network of top-tier Canadian carriers.
            </p>
          </div>
        </BlurFade>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <BlurFade key={service.title} delay={0.1 + index * 0.05} inView>
              <Card className="group h-full border-2 border-border/50 bg-gradient-to-br from-card to-muted/20 hover:shadow-xl transition-all duration-300 hover:border-primary/30 hover:scale-[1.02] overflow-hidden">
                {/* Top gradient accent */}
                <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />
                <CardHeader className="pb-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary mb-4 group-hover:from-primary group-hover:to-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>

        {/* CTA */}
        <BlurFade delay={0.6} inView>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link to="/products">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
