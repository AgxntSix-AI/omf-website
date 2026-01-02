import { createFileRoute, Link } from "@tanstack/react-router"
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  User,
  Tag,
  TrendingUp,
  Lightbulb,
  Shield,
  Laptop,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magic-ui/blur-fade"

export const Route = createFileRoute("/advisor-portal/blogs")({
  component: BlogsPage,
})

// Strapi-ready interface
interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  author: {
    name: string
    role: string
  }
  category: "industry" | "sales-tips" | "product" | "compliance" | "technology"
  publishedAt: string
  readTime: number
  featured?: boolean
}

// Sample blog posts
const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "grow-client-base-2026",
    title: "5 Proven Strategies to Grow Your Client Base in 2026",
    excerpt: "Discover actionable tactics that successful advisors are using to attract and retain more clients in today's competitive market.",
    author: { name: "Sarah Thompson", role: "Sales Coach" },
    category: "sales-tips",
    publishedAt: "2025-12-20",
    readTime: 8,
    featured: true,
  },
  {
    id: "2",
    slug: "insurance-regulations-2026",
    title: "Understanding the New Insurance Regulations for 2026",
    excerpt: "A comprehensive breakdown of regulatory changes affecting insurance advisors and how to stay compliant.",
    author: { name: "Michael Chen", role: "Compliance Director" },
    category: "compliance",
    publishedAt: "2025-12-15",
    readTime: 10,
  },
  {
    id: "3",
    slug: "tech-tools-every-advisor-needs",
    title: "Tech Tools Every Modern Advisor Needs",
    excerpt: "From CRM systems to digital marketing platforms, explore the essential technology that can streamline your practice.",
    author: { name: "Alex Rivera", role: "Technology Specialist" },
    category: "technology",
    publishedAt: "2025-12-10",
    readTime: 6,
  },
  {
    id: "4",
    slug: "critical-illness-market-trends",
    title: "Critical Illness Insurance: Market Trends and Opportunities",
    excerpt: "Analyzing the growing demand for critical illness coverage and how advisors can capitalize on this trend.",
    author: { name: "Jennifer Park", role: "Product Specialist" },
    category: "product",
    publishedAt: "2025-12-05",
    readTime: 7,
  },
  {
    id: "5",
    slug: "building-client-trust",
    title: "Building Trust: The Foundation of Long-Term Client Relationships",
    excerpt: "Learn how to establish and maintain trust with clients through transparency, communication, and consistent service.",
    author: { name: "Sarah Thompson", role: "Sales Coach" },
    category: "sales-tips",
    publishedAt: "2025-11-28",
    readTime: 5,
  },
  {
    id: "6",
    slug: "canadian-insurance-industry-outlook",
    title: "Canadian Insurance Industry Outlook: What to Expect",
    excerpt: "Industry experts share their predictions for the insurance sector, including emerging trends and challenges ahead.",
    author: { name: "David Wilson", role: "Industry Analyst" },
    category: "industry",
    publishedAt: "2025-11-20",
    readTime: 12,
  },
]

const categoryInfo = {
  industry: { label: "Industry News", icon: TrendingUp, color: "bg-blue-500/10 text-blue-600" },
  "sales-tips": { label: "Sales Tips", icon: Lightbulb, color: "bg-green-500/10 text-green-600" },
  product: { label: "Product Insights", icon: BookOpen, color: "bg-purple-500/10 text-purple-600" },
  compliance: { label: "Compliance", icon: Shield, color: "bg-red-500/10 text-red-600" },
  technology: { label: "Technology", icon: Laptop, color: "bg-orange-500/10 text-orange-600" },
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function BlogsPage() {
  const featuredPost = blogPosts.find(p => p.featured)
  const regularPosts = blogPosts.filter(p => !p.featured)

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
                <BookOpen className="h-7 w-7" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Industry Insights
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Stay informed with the latest industry news, sales strategies, product insights, and expert advice to grow your practice.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 lg:py-20 bg-background">
          <div className="container">
            <BlurFade delay={0.2} inView>
              <Card className="overflow-hidden hover:shadow-lg transition-all">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Placeholder */}
                  <div className="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <BookOpen className="h-16 w-16 text-primary/40 mx-auto mb-4" />
                      <p className="text-muted-foreground">Featured Article</p>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryInfo[featuredPost.category].color}`}>
                        {categoryInfo[featuredPost.category].label}
                      </span>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(featuredPost.publishedAt)}
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {featuredPost.author.name}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {featuredPost.readTime} min read
                        </span>
                      </div>
                      <Button variant="outline" size="sm" className="gap-2">
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </BlurFade>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Recent Posts
              </h2>
              <p className="text-muted-foreground">
                Browse our latest articles and insights for insurance advisors.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {regularPosts.map((post, index) => {
              const catInfo = categoryInfo[post.category]

              return (
                <BlurFade key={post.id} delay={0.15 + index * 0.05} inView>
                  <Card className="h-full flex flex-col hover:shadow-lg hover:border-primary/20 transition-all group cursor-pointer">
                    {/* Image Placeholder */}
                    <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center rounded-t-lg">
                      <catInfo.icon className="h-8 w-8 text-primary/30" />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${catInfo.color}`}>
                          {catInfo.label}
                        </span>
                      </div>
                      <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <CardDescription className="line-clamp-3 flex-1 mb-4">
                        {post.excerpt}
                      </CardDescription>
                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {post.author.name}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime} min
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </BlurFade>
              )
            })}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Tag className="h-7 w-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Browse by Category
              </h2>
              <p className="text-muted-foreground">
                Find articles that match your interests.
              </p>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {(Object.keys(categoryInfo) as Array<keyof typeof categoryInfo>).map((key, index) => {
              const cat = categoryInfo[key]
              return (
                <BlurFade key={key} delay={0.2 + index * 0.05} inView>
                  <Card className="hover:shadow-lg hover:border-primary/20 transition-all cursor-pointer group">
                    <CardContent className="pt-6 text-center">
                      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${cat.color} mb-3 group-hover:scale-110 transition-transform`}>
                        <cat.icon className="h-6 w-6" />
                      </div>
                      <p className="font-medium text-sm text-foreground">
                        {cat.label}
                      </p>
                    </CardContent>
                  </Card>
                </BlurFade>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <BlurFade delay={0.1} inView>
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground mb-6">
              <BookOpen className="h-7 w-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Contribute an Article
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Have expertise to share? We're always looking for knowledgeable advisors to contribute guest articles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">
                  Get in Touch
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
