import { createFileRoute, Link } from "@tanstack/react-router"
import {
  ArrowLeft,
  Shield,
  UserCheck,
  Lock,
  Award,
  Scale,
  AlertTriangle,
  FileCheck,
  Download,
  ExternalLink,
  Phone,
  Mail,
  ShieldAlert,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magic-ui/blur-fade"

export const Route = createFileRoute("/advisor-portal/compliance")({
  component: CompliancePage,
})

// Compliance categories
const complianceCategories = [
  {
    title: "Know Your Client (KYC)",
    description: "Client identification, suitability assessment, and documentation requirements.",
    icon: UserCheck,
    color: "bg-blue-500/10 text-blue-600",
    resources: 12,
  },
  {
    title: "Anti-Money Laundering",
    description: "AML policies, suspicious transaction reporting, and record-keeping obligations.",
    icon: ShieldAlert,
    color: "bg-red-500/10 text-red-600",
    resources: 8,
  },
  {
    title: "Privacy & Data Protection",
    description: "PIPEDA compliance, consent requirements, and data handling best practices.",
    icon: Lock,
    color: "bg-purple-500/10 text-purple-600",
    resources: 10,
  },
  {
    title: "Licensing Requirements",
    description: "Provincial licensing info, CE credits, and license renewal procedures.",
    icon: Award,
    color: "bg-green-500/10 text-green-600",
    resources: 6,
  },
  {
    title: "E&O Insurance",
    description: "Errors & Omissions coverage requirements and claims procedures.",
    icon: Shield,
    color: "bg-primary/10 text-primary",
    resources: 5,
  },
  {
    title: "Industry Regulations",
    description: "FSRA updates, regulatory changes, and industry compliance standards.",
    icon: Scale,
    color: "bg-orange-500/10 text-orange-600",
    resources: 15,
  },
]

// Sample compliance alerts
const complianceAlerts = [
  {
    id: "1",
    title: "FSRA E&O Insurance Reminder",
    description: "Ensure your E&O insurance is up to date. Renewal deadline approaching for many advisors.",
    date: "2025-12-20",
    priority: "high",
  },
  {
    id: "2",
    title: "Updated KYC Documentation Requirements",
    description: "New documentation standards for client identity verification effective January 2026.",
    date: "2025-12-15",
    priority: "medium",
  },
  {
    id: "3",
    title: "CE Credit Submission Deadline",
    description: "Q4 continuing education credits must be submitted by December 31, 2025.",
    date: "2025-12-10",
    priority: "high",
  },
]

// Compliance resources
const complianceResources = [
  { name: "KYC Documentation Checklist", type: "PDF", size: "245 KB" },
  { name: "AML Policy Guide 2026", type: "PDF", size: "1.2 MB" },
  { name: "Privacy Consent Templates", type: "DOCX", size: "85 KB" },
  { name: "E&O Insurance FAQ", type: "PDF", size: "320 KB" },
  { name: "CE Credit Tracking Sheet", type: "XLSX", size: "45 KB" },
  { name: "FSRA Compliance Handbook", type: "PDF", size: "2.1 MB" },
]

function CompliancePage() {
  return (
    <div className="min-h-svh">
      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b">
        <div className="container py-4">
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <Link to="/advisor-portal">
              <ArrowLeft className="h-4 w-4" />
              Back to Advisor Portal
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-muted py-20 lg:py-28">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="max-w-3xl">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <Shield className="h-7 w-7" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Compliance Resources
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Stay compliant with regulatory requirements, access essential documentation, and keep up-to-date with industry standards.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Important Alerts */}
      <section className="py-8 bg-amber-50 dark:bg-amber-950/20 border-b border-amber-200 dark:border-amber-900/50">
        <div className="container">
          <BlurFade delay={0.2} inView>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/20 text-amber-600 shrink-0">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-semibold text-foreground mb-2">Important Updates</h2>
                <div className="space-y-2">
                  {complianceAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-start gap-2">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                        alert.priority === "high"
                          ? "bg-red-500/10 text-red-600"
                          : "bg-amber-500/10 text-amber-600"
                      }`}>
                        {alert.priority === "high" ? "Urgent" : "Notice"}
                      </span>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">{alert.title}</span> - {alert.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Compliance Categories */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Compliance Areas
              </h2>
              <p className="text-muted-foreground">
                Browse resources organized by compliance category to find what you need.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {complianceCategories.map((category, index) => (
              <BlurFade key={category.title} delay={0.15 + index * 0.05} inView>
                <Card className="h-full hover:shadow-lg hover:border-primary/20 transition-all group cursor-pointer">
                  <CardHeader>
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {category.resources} resources
                      </span>
                      <Button variant="outline" size="sm" className="gap-2">
                        View
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Downloads */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <FileCheck className="h-7 w-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Quick Downloads
              </h2>
              <p className="text-muted-foreground">
                Access frequently used compliance documents and templates.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {complianceResources.map((resource, index) => (
              <BlurFade key={resource.name} delay={0.15 + index * 0.03} inView>
                <Card className="hover:shadow-lg hover:border-primary/20 transition-all">
                  <CardContent className="pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                          <FileCheck className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium text-foreground text-sm truncate">
                            {resource.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {resource.type} • {resource.size}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="shrink-0">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Compliance Team */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <Card className="max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4 mx-auto">
                  <Shield className="h-7 w-7" />
                </div>
                <CardTitle className="text-xl">Contact Compliance Team</CardTitle>
                <CardDescription>
                  Have questions about compliance requirements or need guidance? Our compliance team is here to help.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center gap-6">
                  <a href="tel:4164917727" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="h-4 w-4" />
                    (416) 491-7727
                  </a>
                  <a href="mailto:compliance@omfinancial.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" />
                    compliance@omfinancial.com
                  </a>
                </div>
                <div className="text-center">
                  <Button asChild>
                    <Link to="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <BlurFade delay={0.1} inView>
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground mb-6">
              <Award className="h-7 w-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Stay Compliant
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Regular compliance training helps protect you and your clients. Check out our training resources to stay current.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/advisor-portal/training">
                  View Training
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/advisor-portal">
                  Back to Portal
                </Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
