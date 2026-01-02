import { Link } from "@tanstack/react-router"
import { ArrowRight, Users, Shield, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magic-ui/blur-fade"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-primary/5">
      {/* Background Pattern - Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Gradient Orbs - More visible */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute top-40 right-0 w-80 h-80 bg-accent/25 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-primary/15 rounded-full blur-[60px]" />

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container relative py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <BlurFade delay={0.1} inView>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Shield className="h-4 w-4" />
                50+ Years of Combined Experience
              </div>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Your Partner in{" "}
                <span className="text-primary">Financial Success</span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <p className="text-lg text-muted-foreground max-w-xl">
                OM Financial is a leading, national, Canadian-owned Managing
                General Agency (MGA) providing comprehensive insurance and wealth
                management solutions for advisors and their clients.
              </p>
            </BlurFade>

            <BlurFade delay={0.4} inView>
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
            </BlurFade>

            {/* Stats */}
            <BlurFade delay={0.5} inView>
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="relative p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                  <p className="text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">30+</p>
                  <p className="text-sm font-medium text-foreground/70">Insurance Partners</p>
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-accent/60" />
                </div>
                <div className="relative p-4 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                  <p className="text-4xl font-black bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">2</p>
                  <p className="text-sm font-medium text-foreground/70">Office Locations</p>
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary/60" />
                </div>
                <div className="relative p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20">
                  <p className="text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">50+</p>
                  <p className="text-sm font-medium text-foreground/70">Years Experience</p>
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-accent/60" />
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Visual - Feature Cards */}
          <div className="relative lg:pl-8">
            <div className="grid gap-4">
              <BlurFade delay={0.3} inView>
                <FeatureCard
                  icon={Shield}
                  title="Life & Health Insurance"
                  description="Comprehensive protection for individuals and families with top-tier carriers."
                />
              </BlurFade>
              <BlurFade delay={0.4} inView>
                <FeatureCard
                  icon={TrendingUp}
                  title="Wealth Management"
                  description="RRSP, TFSA, Segregated Funds, and retirement planning solutions."
                />
              </BlurFade>
              <BlurFade delay={0.5} inView>
                <FeatureCard
                  icon={Users}
                  title="Advisor Support"
                  description="Full back-office support, training, and competitive compensation."
                />
              </BlurFade>
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
    <div className="group relative overflow-hidden rounded-2xl border-2 border-border/50 bg-gradient-to-br from-card via-card to-muted/30 p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-primary/40 hover:scale-[1.02]">
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-t-2xl" />

      <div className="flex gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary group-hover:from-primary group-hover:to-primary group-hover:text-primary-foreground transition-all duration-300 shadow-inner">
          <Icon className="h-7 w-7" />
        </div>
        <div>
          <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Subtle hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300" />
    </div>
  )
}
