import { createFileRoute, Link } from "@tanstack/react-router"
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Newspaper,
  Tag,
  User,
  Bell,
  Building2,
  TrendingUp,
  Users,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magic-ui/blur-fade"

export const Route = createFileRoute("/about/news")({
  component: NewsPage,
})

// Strapi-ready interface
interface NewsArticle {
  id: string
  slug: string
  title: string
  excerpt: string
  category: "announcement" | "industry" | "event" | "company"
  author: string
  publishedAt: string
  readTime: number
  featured?: boolean
}

// Sample news articles (will be replaced by Strapi data)
const newsArticles: NewsArticle[] = [
  {
    id: "1",
    slug: "om-financial-expands-to-new-brunswick",
    title: "OM Financial Expands Operations to New Brunswick",
    excerpt: "We are excited to announce our expansion into the Maritime provinces, bringing our comprehensive insurance solutions to advisors in New Brunswick. This marks another milestone in our national growth strategy.",
    category: "announcement",
    author: "OM Financial Communications",
    publishedAt: "2025-12-15",
    readTime: 4,
    featured: true,
  },
  {
    id: "2",
    slug: "2026-insurance-industry-outlook",
    title: "2026 Insurance Industry Outlook: Trends to Watch",
    excerpt: "As we enter 2026, the Canadian insurance landscape continues to evolve. From digital transformation to changing consumer expectations, here are the key trends that will shape our industry.",
    category: "industry",
    author: "Industry Research Team",
    publishedAt: "2025-12-10",
    readTime: 6,
  },
  {
    id: "3",
    slug: "annual-advisor-conference-recap",
    title: "Annual Advisor Conference 2025: A Resounding Success",
    excerpt: "Over 500 advisors gathered in Toronto for our largest annual conference yet. The event featured keynote speakers, product training sessions, and valuable networking opportunities.",
    category: "event",
    author: "Events Team",
    publishedAt: "2025-11-28",
    readTime: 5,
  },
  {
    id: "4",
    slug: "new-partnership-empire-life",
    title: "OM Financial Announces Partnership with Empire Life",
    excerpt: "We are pleased to welcome Empire Life to our growing roster of carrier partners. This partnership expands our product offerings and provides advisors with more solutions for their clients.",
    category: "company",
    author: "Partnership Development",
    publishedAt: "2025-11-15",
    readTime: 3,
  },
  {
    id: "5",
    slug: "ce-credit-requirements-update",
    title: "CE Credit Requirements: What Advisors Need to Know for 2026",
    excerpt: "Provincial regulators have announced updates to continuing education requirements. Here's a comprehensive guide to staying compliant and maximizing your professional development.",
    category: "industry",
    author: "Compliance Team",
    publishedAt: "2025-11-01",
    readTime: 7,
  },
]

const categoryInfo = {
  announcement: { label: "Announcement", color: "bg-primary/10 text-primary" },
  industry: { label: "Industry News", color: "bg-blue-500/10 text-blue-600" },
  event: { label: "Event", color: "bg-green-500/10 text-green-600" },
  company: { label: "Company News", color: "bg-accent/20 text-accent-foreground" },
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function NewsPage() {
  const featuredArticle = newsArticles.find(a => a.featured)
  const regularArticles = newsArticles.filter(a => !a.featured)

  return (
    <div className="min-h-svh">
      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b">
        <div className="container py-4">
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <Link to="/about">
              <ArrowLeft className="h-4 w-4" />
              Back to About
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
                <Newspaper className="h-7 w-7" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Company News & Updates
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Stay informed with the latest announcements, industry insights, and company updates from OM Financial.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-16 lg:py-20 bg-background">
          <div className="container">
            <BlurFade delay={0.2} inView>
              <Card className="overflow-hidden hover:shadow-lg transition-all">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Placeholder */}
                  <div className="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Newspaper className="h-16 w-16 text-primary/40 mx-auto mb-4" />
                      <p className="text-muted-foreground">Featured Article</p>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryInfo[featuredArticle.category].color}`}>
                        {categoryInfo[featuredArticle.category].label}
                      </span>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(featuredArticle.publishedAt)}
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {featuredArticle.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {featuredArticle.readTime} min read
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

      {/* News Grid */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Latest Articles
              </h2>
              <p className="text-muted-foreground">
                Browse our recent news and updates to stay informed about OM Financial and the insurance industry.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {regularArticles.map((article, index) => (
              <BlurFade key={article.id} delay={0.2 + index * 0.05} inView>
                <Card className="h-full flex flex-col hover:shadow-lg hover:border-primary/20 transition-all group cursor-pointer">
                  {/* Image Placeholder */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center rounded-t-lg">
                    <Tag className="h-8 w-8 text-primary/30" />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${categoryInfo[article.category].color}`}>
                        {categoryInfo[article.category].label}
                      </span>
                    </div>
                    <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <CardDescription className="line-clamp-3 flex-1 mb-4">
                      {article.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(article.publishedAt)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime} min
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* News Categories */}
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
                Find the news that matters most to you.
              </p>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { key: "announcement", icon: Bell, count: 12 },
              { key: "industry", icon: TrendingUp, count: 28 },
              { key: "event", icon: Users, count: 15 },
              { key: "company", icon: Building2, count: 20 },
            ].map((cat, index) => (
              <BlurFade key={cat.key} delay={0.2 + index * 0.05} inView>
                <Card className="h-full hover:shadow-lg hover:border-primary/20 transition-all cursor-pointer group">
                  <CardContent className="pt-6 text-center">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <cat.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {categoryInfo[cat.key as keyof typeof categoryInfo].label}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cat.count} articles
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
              <Bell className="h-7 w-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Never miss an important announcement. Contact us to subscribe to our newsletter for the latest news and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">
                  Subscribe to Updates
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/about">
                  Learn About Us
                </Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
