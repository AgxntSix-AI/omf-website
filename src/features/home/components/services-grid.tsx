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
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <BlurFade delay={0.1} inView>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-medium text-primary mb-2">OUR SERVICES</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-muted-foreground">
              We offer a full range of insurance and investment products through
              our extensive network of top-tier Canadian carriers.
            </p>
          </div>
        </BlurFade>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <BlurFade key={service.title} delay={0.1 + index * 0.05} inView>
              <Card className="group h-full hover:shadow-lg transition-all hover:border-primary/20">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
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
