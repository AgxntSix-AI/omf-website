import { Link } from "@tanstack/react-router"
import { ArrowRight, Users, Shield, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/hero/pattern.svg')] opacity-5" />

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Shield className="h-4 w-4" />
              50+ Years of Combined Experience
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Your Partner in{" "}
              <span className="text-primary">Financial Success</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              OM Financial is a leading, national, Canadian-owned Managing
              General Agency (MGA) providing comprehensive insurance and wealth
              management solutions for advisors and their clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/advisor-benefits">Join Our Team</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div>
                <p className="text-3xl font-bold text-primary">30+</p>
                <p className="text-sm text-muted-foreground">Insurance Partners</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">2</p>
                <p className="text-sm text-muted-foreground">Office Locations</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Visual - Feature Cards */}
          <div className="relative lg:pl-8">
            <div className="grid gap-4">
              <FeatureCard
                icon={Shield}
                title="Life & Health Insurance"
                description="Comprehensive protection for individuals and families with top-tier carriers."
              />
              <FeatureCard
                icon={TrendingUp}
                title="Wealth Management"
                description="RRSP, TFSA, Segregated Funds, and retirement planning solutions."
              />
              <FeatureCard
                icon={Users}
                title="Advisor Support"
                description="Full back-office support, training, and competitive compensation."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Shield
  title: string
  description: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/20">
      <div className="flex gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}
