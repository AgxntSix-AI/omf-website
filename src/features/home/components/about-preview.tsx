import { Link } from "@tanstack/react-router"
import { ArrowRight, Award, Users, Building } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutPreview() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[80px]" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 overflow-hidden border-2 border-primary/20 shadow-2xl">
              {/* Enhanced placeholder with pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:20px_20px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/60 to-accent/40 flex items-center justify-center shadow-lg">
                    <Building className="h-12 w-12 text-white" />
                  </div>
                  <p className="text-lg font-semibold text-foreground/60">
                    Team Excellence
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-card to-muted/50 rounded-2xl border-2 border-accent/30 shadow-2xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent/30 to-accent/10 text-accent shadow-inner">
                  <Award className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-3xl font-black bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">50+</p>
                  <p className="text-sm font-medium text-foreground/70">
                    Years of Combined Experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <p className="inline-block text-sm font-semibold text-primary px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">ABOUT US</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              A Message from Our President
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Welcome to OM Financial Inc., a leading, national, Canadian-owned
                and operated Managing General Agency (MGA). With over 50 years of
                combined experience in the insurance and financial services
                industry, we understand what it takes to build a successful
                practice.
              </p>
              <p>
                Our mission is simple: to provide advisors with the tools,
                training, and support they need to serve their clients
                effectively while building sustainable businesses.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 text-primary shadow-sm">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Advisor-Focused</p>
                  <p className="text-sm text-muted-foreground">
                    Your success is our priority
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/30 to-accent/10 text-accent shadow-sm">
                  <Building className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Canadian-Owned</p>
                  <p className="text-sm text-muted-foreground">
                    National presence, local support
                  </p>
                </div>
              </div>
            </div>

            <Button asChild className="gap-2">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
