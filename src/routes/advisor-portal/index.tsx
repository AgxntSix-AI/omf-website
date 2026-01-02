import { createFileRoute, Link } from "@tanstack/react-router"
import {
  ExternalLink,
  Calendar,
  GraduationCap,
  FileText,
  Wrench,
  MessageSquare,
  Shield,
  BookOpen,
  Calculator,
  Trophy,
  LayoutDashboard,
  ArrowRight,
  Phone,
  Mail,
  Building2,
  Users,
  Clock,
  CheckCircle2,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magic-ui/blur-fade"

export const Route = createFileRoute("/advisor-portal/")({
  component: AdvisorPortalPage,
})

// Portal sections configuration
const portalSections = [
  {
    title: "Event Calendar",
    description: "Upcoming webinars, training sessions, and company events",
    href: "/advisor-portal/calendar",
    icon: Calendar,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Training Library",
    description: "Product training videos, guides, and educational resources",
    href: "/advisor-portal/training",
    icon: GraduationCap,
    color: "bg-green-500/10 text-green-600",
  },
  {
    title: "Industry Blogs",
    description: "Latest industry insights and advisor tips",
    href: "/advisor-portal/blogs",
    icon: FileText,
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "Toolbox",
    description: "Sales tools, marketing materials, and illustration software",
    href: "/advisor-portal/toolbox",
    icon: Wrench,
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    title: "Community Forum",
    description: "Connect with fellow advisors and share best practices",
    href: "/advisor-portal/forum",
    icon: MessageSquare,
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    title: "Compliance",
    description: "Regulatory updates, KYC resources, and compliance guidelines",
    href: "/advisor-portal/compliance",
    icon: Shield,
    color: "bg-red-500/10 text-red-600",
  },
  {
    title: "OM University",
    description: "Professional development courses and certifications",
    href: "/advisor-portal/university",
    icon: BookOpen,
    color: "bg-indigo-500/10 text-indigo-600",
  },
  {
    title: "Calculators",
    description: "Financial planning and insurance calculators",
    href: "/advisor-portal/calculators",
    icon: Calculator,
    color: "bg-teal-500/10 text-teal-600",
  },
  {
    title: "Incentives & Contests",
    description: "Current promotions, contests, and recognition programs",
    href: "/advisor-portal/incentives",
    icon: Trophy,
    color: "bg-amber-500/10 text-amber-600",
  },
]

const stats = [
  { value: "1,500+", label: "Active Advisors", icon: Users },
  { value: "30+", label: "Partner Carriers", icon: Building2 },
  { value: "50+", label: "Years Experience", icon: Clock },
  { value: "24/7", label: "Portal Access", icon: CheckCircle2 },
]

function AdvisorPortalPage() {
  return (
    <div className="min-h-svh">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-muted py-20 lg:py-28">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="max-w-3xl">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <LayoutDashboard className="h-7 w-7" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Advisor Portal
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mb-8">
                Welcome to your central hub for resources, training, tools, and support. Access everything you need to grow your business and serve your clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="gap-2">
                  <a href="https://mgacanada.virtgate.ca/" target="_blank" rel="noopener noreferrer">
                    Access Virtgate
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">
                    Contact Support
                  </Link>
                </Button>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Virtgate Quick Access */}
      <section className="py-12 bg-background border-b">
        <div className="container">
          <BlurFade delay={0.2} inView>
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground shrink-0">
                      <ExternalLink className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-foreground mb-1">
                        Virtgate Advisor Portal
                      </h2>
                      <p className="text-muted-foreground">
                        Submit new business, check case status, access compensation statements, and manage your client portfolio.
                      </p>
                    </div>
                  </div>
                  <Button asChild size="lg" className="gap-2 shrink-0">
                    <a href="https://mgacanada.virtgate.ca/" target="_blank" rel="noopener noreferrer">
                      Launch Virtgate
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </section>

      {/* Portal Sections Grid */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Explore Resources
              </h2>
              <p className="text-muted-foreground">
                Access training, tools, compliance resources, and more to support your success.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {portalSections.map((section, index) => (
              <BlurFade key={section.title} delay={0.15 + index * 0.05} inView>
                <Link to={section.href}>
                  <Card className="h-full group hover:shadow-lg hover:border-primary/20 transition-all cursor-pointer">
                    <CardHeader>
                      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${section.color} mb-4 group-hover:scale-110 transition-transform`}>
                        <section.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        {section.title}
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </CardTitle>
                      <CardDescription>
                        {section.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                The OM Financial Network
              </h2>
              <p className="text-muted-foreground">
                Join a growing community of successful advisors across Canada.
              </p>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <BlurFade key={stat.label} delay={0.2 + index * 0.05} inView>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <p className="text-3xl font-bold text-foreground mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Phone className="h-7 w-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Need Help?
              </h2>
              <p className="text-muted-foreground">
                Our support team is here to assist you with any questions or technical issues.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <BlurFade delay={0.2} inView>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <CardTitle>Toronto Head Office</CardTitle>
                  <CardDescription>
                    7191 Yonge Street, Suite 711<br />
                    Thornhill, ON L3T 0C4
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a href="tel:4164917727" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="h-4 w-4" />
                    (416) 491-7727
                  </a>
                  <a href="mailto:info@omfinancial.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" />
                    info@omfinancial.com
                  </a>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade delay={0.25} inView>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <CardTitle>Mississauga Office</CardTitle>
                  <CardDescription>
                    218 Export Boulevard, Suite 610<br />
                    Mississauga, ON L5S 0A7
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a href="tel:9056120800" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="h-4 w-4" />
                    (905) 612-0800
                  </a>
                  <a href="mailto:info@omfinancial.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" />
                    info@omfinancial.com
                  </a>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <BlurFade delay={0.1} inView>
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground mb-6">
              <ExternalLink className="h-7 w-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Access Virtgate to submit new business, check case status, and manage your client portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <a href="https://mgacanada.virtgate.ca/" target="_blank" rel="noopener noreferrer">
                  Launch Virtgate
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/advisor-benefits">
                  View Advisor Benefits
                </Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
