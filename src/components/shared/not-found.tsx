import { Link } from "@tanstack/react-router"
import { Home, Phone, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magic-ui/blur-fade"

/**
 * NotFound component - Custom 404 page
 * Used as the notFoundComponent in TanStack Router
 */
export function NotFound() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <BlurFade delay={0.1}>
          <div className="mb-8">
            <span className="text-8xl md:text-9xl font-bold text-primary/20">
              404
            </span>
          </div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Page Not Found
          </h1>
        </BlurFade>

        <BlurFade delay={0.3}>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It may have
            been moved, deleted, or the URL might be incorrect.
          </p>
        </BlurFade>

        <BlurFade delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                <Phone className="mr-2 h-4 w-4" />
                Contact Us
              </Link>
            </Button>
          </div>
        </BlurFade>

        <BlurFade delay={0.5}>
          <div className="mt-12 pt-8 border-t">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <Link
                to="/about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/products"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Products
              </Link>
              <Link
                to="/advisor-benefits"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Advisor Benefits
              </Link>
              <Link
                to="/acquisitions"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Acquisitions
              </Link>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.6}>
          <div className="mt-8">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go back to previous page
            </button>
          </div>
        </BlurFade>
      </div>
    </div>
  )
}

export default NotFound
