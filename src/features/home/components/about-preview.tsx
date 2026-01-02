import { Link } from "@tanstack/react-router"
import { ArrowRight, Award, Users, Building } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutPreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 overflow-hidden">
              {/* Placeholder for team image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <Building className="h-16 w-16 text-primary/40 mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Team photo placeholder
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl border shadow-lg p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">50+</p>
                  <p className="text-sm text-muted-foreground">
                    Years of Combined Experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <p className="text-sm font-medium text-primary">ABOUT US</p>
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
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Advisor-Focused</p>
                  <p className="text-sm text-muted-foreground">
                    Your success is our priority
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Building className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Canadian-Owned</p>
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
