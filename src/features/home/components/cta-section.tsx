import { Link } from "@tanstack/react-router"
import { ArrowRight, Phone, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* For Clients */}
          <div className="text-center lg:text-left space-y-6 lg:border-r lg:border-primary-foreground/20 lg:pr-12">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary-foreground/10">
              <Phone className="h-7 w-7" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">
              Looking for Financial Advice?
            </h3>
            <p className="text-primary-foreground/80">
              Connect with one of our licensed advisors to discuss your
              insurance and investment needs. We'll help you find the right
              solutions for your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/products/find-advisor">Find an Advisor</Link>
              </Button>
            </div>
          </div>

          {/* For Advisors */}
          <div className="text-center lg:text-left space-y-6 lg:pl-12">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-accent/20">
              <Users className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">
              Ready to Grow Your Practice?
            </h3>
            <p className="text-primary-foreground/80">
              Join our network of successful advisors. Get access to top
              carriers, competitive compensation, and full back-office support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link to="/advisor-benefits">
                  Advisor Benefits
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a
                  href={siteConfig.externalLinks.virtgate}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Access Virtgate
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
