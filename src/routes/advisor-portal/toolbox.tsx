import { createFileRoute, Link } from "@tanstack/react-router"
import {
  ArrowLeft,
  Wrench,
  FileText,
  Presentation,
  ClipboardList,
  Mail,
  Share2,
  Download,
  ExternalLink,
  Megaphone,
  Calculator,
  FileSpreadsheet,
  Building2,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magic-ui/blur-fade"

export const Route = createFileRoute("/advisor-portal/toolbox")({
  component: ToolboxPage,
})

// Tool categories
const toolCategories = [
  {
    title: "Marketing Materials",
    description: "Brochures, flyers, and promotional content for client outreach",
    icon: Megaphone,
    count: 25,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Sales Presentations",
    description: "Professional slide decks and presentation templates",
    icon: Presentation,
    count: 15,
    color: "bg-green-500/10 text-green-600",
  },
  {
    title: "Client Forms",
    description: "Application forms, disclosure documents, and consent forms",
    icon: ClipboardList,
    count: 30,
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "Proposal Templates",
    description: "Customizable proposal and quote templates",
    icon: FileSpreadsheet,
    count: 12,
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    title: "Email Templates",
    description: "Professional email templates for client communication",
    icon: Mail,
    count: 20,
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    title: "Social Media Assets",
    description: "Graphics and content for social media marketing",
    icon: Share2,
    count: 18,
    color: "bg-teal-500/10 text-teal-600",
  },
]

// Illustration software from advisor-portal.json
const illustrationSoftware = [
  { name: "Manulife Financial", version: "15.13.4", notes: "Log into Repsource to download" },
  { name: "iA Financial Group", version: "8.1.2", url: "https://iaa.secureweb.inalco.com/portal/ind/server.pt/community/ind_-_comunity/330" },
  { name: "BMO Insurance", version: "33.0", url: "http://advisorsupport.bmoinsurance.com/wave/ewavedownload.html" },
  { name: "Foresters Financial", version: "2.0.166", url: "https://sky.foresters.com/skyinstall/skyinstallation.exe" },
  { name: "Equitable Life", version: "2017-1", url: "http://www.equitable.ca/webupdates/esi/esi.exe" },
  { name: "UV Insurance", version: "2.3.1", url: "https://uvinsurance.ca/" },
  { name: "La Capitale", version: "8.3.0", url: "http://www.lacapitale.com/en/brokers" },
  { name: "Humania Assurance", version: "2016.2", url: "https://www.humania.ca/en-CA/doc/download-our-new-software" },
]

// Rates & Quotes tools
const ratesTools = [
  { name: "WINQUOTE", description: "Life insurance quotes", url: "https://www.winquote.net/quote_life_ca.html" },
  { name: "GIC Rates (1-6 Years)", description: "Long-term GIC rates", url: "https://www.cannex.com/public/term04e.html" },
  { name: "GIC Rates (30-270 Days)", description: "Short-term GIC rates", url: "https://www.cannex.com/public/term03e.html" },
]

function ToolboxPage() {
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
                <Wrench className="h-7 w-7" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Advisor Toolbox
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Access marketing materials, sales tools, illustration software, and resources to streamline your practice and serve clients better.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Tool Categories Grid */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Resource Categories
              </h2>
              <p className="text-muted-foreground">
                Browse our collection of sales and marketing tools organized by category.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {toolCategories.map((category, index) => (
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
                        {category.count} resources
                      </span>
                      <Button variant="outline" size="sm" className="gap-2">
                        Browse
                        <FileText className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Illustration Software */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Calculator className="h-7 w-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Illustration Software
              </h2>
              <p className="text-muted-foreground">
                Download and access carrier illustration software for accurate quotes and proposals.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {illustrationSoftware.map((software, index) => (
              <BlurFade key={software.name} delay={0.15 + index * 0.03} inView>
                <Card className="h-full hover:shadow-lg hover:border-primary/20 transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                        <Building2 className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground text-sm mb-1 truncate">
                          {software.name}
                        </h3>
                        {software.version && (
                          <p className="text-xs text-muted-foreground mb-2">
                            Version {software.version}
                          </p>
                        )}
                        {software.url ? (
                          <Button asChild variant="outline" size="sm" className="gap-1 h-7 text-xs w-full">
                            <a href={software.url} target="_blank" rel="noopener noreferrer">
                              <Download className="h-3 w-3" />
                              Download
                            </a>
                          </Button>
                        ) : (
                          <p className="text-xs text-muted-foreground italic">
                            {software.notes}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Rates & Quotes */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Rates & Quotes
              </h2>
              <p className="text-muted-foreground">
                Quick access to rate comparison tools and quote generators.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {ratesTools.map((tool, index) => (
              <BlurFade key={tool.name} delay={0.2 + index * 0.05} inView>
                <Card className="h-full hover:shadow-lg hover:border-primary/20 transition-all group">
                  <CardHeader>
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" size="sm" className="gap-2 w-full">
                      <a href={tool.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Open Tool
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: FileText, label: "Total Resources", value: "120+" },
              { icon: Megaphone, label: "Marketing Tools", value: "45" },
              { icon: Calculator, label: "Illustration Tools", value: "15" },
              { icon: Download, label: "Monthly Downloads", value: "500+" },
            ].map((stat, index) => (
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

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <BlurFade delay={0.1} inView>
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground mb-6">
              <Wrench className="h-7 w-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Request a Tool
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Need a specific tool or resource? Let us know and we'll work to add it to the toolbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">
                  Submit Request
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
