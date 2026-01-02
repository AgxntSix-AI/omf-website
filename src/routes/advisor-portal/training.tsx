import { createFileRoute, Link } from "@tanstack/react-router"
import {
  ArrowLeft,
  GraduationCap,
  Video,
  FileText,
  Play,
  Download,
  Clock,
  Search,
  Building2,
  TrendingUp,
  Shield,
  Laptop,
  BookOpen,
  ExternalLink,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magic-ui/blur-fade"

export const Route = createFileRoute("/advisor-portal/training")({
  component: TrainingPage,
})

// Training resource interface
interface TrainingResource {
  id: string
  title: string
  description: string
  type: "video" | "document" | "webinar" | "course"
  category: "product" | "sales" | "compliance" | "technology"
  duration?: string
  provider: string
  dateAdded: string
}

// Sample training resources
const trainingResources: TrainingResource[] = [
  {
    id: "1",
    title: "Life Insurance Fundamentals",
    description: "Comprehensive overview of life insurance products, including term, whole life, and universal life options.",
    type: "video",
    category: "product",
    duration: "45 min",
    provider: "Sun Life",
    dateAdded: "2025-12-15",
  },
  {
    id: "2",
    title: "Critical Illness Sales Strategies",
    description: "Learn effective techniques for presenting critical illness insurance to clients and overcoming common objections.",
    type: "webinar",
    category: "sales",
    duration: "60 min",
    provider: "OM Financial",
    dateAdded: "2025-12-10",
  },
  {
    id: "3",
    title: "KYC Compliance Guide",
    description: "Essential documentation requirements and best practices for Know Your Client compliance.",
    type: "document",
    category: "compliance",
    provider: "OM Financial Compliance",
    dateAdded: "2025-12-05",
  },
  {
    id: "4",
    title: "Segregated Funds Masterclass",
    description: "Deep dive into segregated fund products, guarantees, estate planning benefits, and suitability analysis.",
    type: "course",
    category: "product",
    duration: "3 hours",
    provider: "Canada Life",
    dateAdded: "2025-11-28",
  },
  {
    id: "5",
    title: "Digital Marketing for Advisors",
    description: "Build your online presence with social media strategies, email marketing, and website optimization tips.",
    type: "video",
    category: "technology",
    duration: "35 min",
    provider: "OM Financial",
    dateAdded: "2025-11-20",
  },
  {
    id: "6",
    title: "RESP Planning Guide",
    description: "Complete guide to Registered Education Savings Plans, government grants, and investment options.",
    type: "document",
    category: "product",
    provider: "iA Financial",
    dateAdded: "2025-11-15",
  },
  {
    id: "7",
    title: "Needs-Based Selling Workshop",
    description: "Interactive workshop on conducting effective needs analysis and creating client-focused proposals.",
    type: "webinar",
    category: "sales",
    duration: "90 min",
    provider: "OM Financial Training",
    dateAdded: "2025-11-10",
  },
  {
    id: "8",
    title: "Illustration Software Tutorial",
    description: "Step-by-step guide to using carrier illustration software for accurate quotes and proposals.",
    type: "video",
    category: "technology",
    duration: "25 min",
    provider: "Manulife",
    dateAdded: "2025-11-05",
  },
  {
    id: "9",
    title: "AML Requirements Update",
    description: "Latest anti-money laundering regulations and reporting requirements for insurance advisors.",
    type: "document",
    category: "compliance",
    provider: "OM Financial Compliance",
    dateAdded: "2025-10-28",
  },
  {
    id: "10",
    title: "Disability Insurance Fundamentals",
    description: "Understanding disability insurance products, definitions of disability, and policy features.",
    type: "course",
    category: "product",
    duration: "2 hours",
    provider: "Empire Life",
    dateAdded: "2025-10-20",
  },
]

const categoryInfo = {
  product: { label: "Product Knowledge", icon: BookOpen, color: "bg-blue-500/10 text-blue-600" },
  sales: { label: "Sales Training", icon: TrendingUp, color: "bg-green-500/10 text-green-600" },
  compliance: { label: "Compliance", icon: Shield, color: "bg-red-500/10 text-red-600" },
  technology: { label: "Technology", icon: Laptop, color: "bg-purple-500/10 text-purple-600" },
}

const typeInfo = {
  video: { label: "Video", icon: Video, color: "bg-primary/10 text-primary" },
  document: { label: "Document", icon: FileText, color: "bg-accent/20 text-accent-foreground" },
  webinar: { label: "Webinar", icon: Play, color: "bg-green-500/10 text-green-600" },
  course: { label: "Course", icon: GraduationCap, color: "bg-purple-500/10 text-purple-600" },
}

function TrainingPage() {
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
                <GraduationCap className="h-7 w-7" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Training Library
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Access videos, documents, webinars, and courses to expand your product knowledge and sharpen your sales skills.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b">
        <div className="container">
          <BlurFade delay={0.2} inView>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-muted-foreground mr-4">
                <Search className="h-4 w-4" />
                <span className="text-sm font-medium">Categories:</span>
              </div>
              <Button variant="default" size="sm">
                All Resources
              </Button>
              {(Object.keys(categoryInfo) as Array<keyof typeof categoryInfo>).map((key) => {
                const cat = categoryInfo[key]
                return (
                  <Button key={key} variant="outline" size="sm" className="gap-2">
                    <cat.icon className="h-4 w-4" />
                    {cat.label}
                  </Button>
                )
              })}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Available Resources
              </h2>
              <p className="text-muted-foreground">
                {trainingResources.length} training resources available. Click on any resource to access.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {trainingResources.map((resource, index) => {
              const catInfo = categoryInfo[resource.category]
              const typeI = typeInfo[resource.type]

              return (
                <BlurFade key={resource.id} delay={0.15 + index * 0.05} inView>
                  <Card className="h-full flex flex-col hover:shadow-lg hover:border-primary/20 transition-all group cursor-pointer">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${typeI.color}`}>
                          <span className="flex items-center gap-1">
                            <typeI.icon className="h-3 w-3" />
                            {typeI.label}
                          </span>
                        </span>
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${catInfo.color}`}>
                          {catInfo.label}
                        </span>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {resource.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {resource.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-end">
                      <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t">
                        <span className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          {resource.provider}
                        </span>
                        {resource.duration && (
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {resource.duration}
                          </span>
                        )}
                      </div>
                      <Button variant="outline" size="sm" className="mt-4 gap-2 w-full">
                        {resource.type === "document" ? (
                          <>
                            <Download className="h-4 w-4" />
                            Download
                          </>
                        ) : (
                          <>
                            <Play className="h-4 w-4" />
                            Watch Now
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                </BlurFade>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Video, label: "Training Videos", value: "50+" },
              { icon: FileText, label: "Documents & Guides", value: "30+" },
              { icon: Play, label: "Recorded Webinars", value: "25+" },
              { icon: GraduationCap, label: "Full Courses", value: "15" },
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
              <GraduationCap className="h-7 w-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Suggest a Topic
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Have a training topic you'd like to see covered? Let us know and we'll work to add it to our library.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 gap-2"
              >
                <Link to="/advisor-portal/university">
                  Explore OM University
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
