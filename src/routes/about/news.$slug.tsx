import { createFileRoute, Link, notFound } from "@tanstack/react-router"
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Share2,
  Link2,
  Twitter,
  Linkedin,
  Facebook,
  Check,
} from "lucide-react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magic-ui/blur-fade"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { StructuredData } from "@/components/seo/structured-data"
import { generateArticleSchema } from "@/lib/structured-data"
import { siteConfig } from "@/config/site"

export const Route = createFileRoute("/about/news/$slug")({
  component: NewsDetailPage,
})

// Strapi-ready interface
interface NewsArticle {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: "announcement" | "industry" | "event" | "company"
  author: string
  publishedAt: string
  readTime: number
  featured?: boolean
}

// Sample news articles with full content (will be replaced by Strapi data)
const newsArticles: NewsArticle[] = [
  {
    id: "1",
    slug: "om-financial-expands-to-new-brunswick",
    title: "OM Financial Expands Operations to New Brunswick",
    excerpt:
      "We are excited to announce our expansion into the Maritime provinces, bringing our comprehensive insurance solutions to advisors in New Brunswick.",
    content: `
      <p>OM Financial Inc. is thrilled to announce a significant milestone in our national growth strategy: the expansion of our operations into New Brunswick. This marks an exciting new chapter in our 50+ year history of supporting independent insurance advisors across Canada.</p>

      <h2>Why New Brunswick?</h2>
      <p>The Maritime provinces represent a dynamic and underserved market for independent insurance advisors. With a growing population seeking comprehensive financial protection, we see tremendous opportunity to support local advisors in delivering exceptional service to their clients.</p>

      <p>Our expansion brings:</p>
      <ul>
        <li>Access to 30+ carrier partners</li>
        <li>Full back-office support and training</li>
        <li>Competitive compensation structures</li>
        <li>Local relationship management</li>
      </ul>

      <h2>What This Means for Advisors</h2>
      <p>Independent advisors in New Brunswick will now have access to the same comprehensive support system that has made OM Financial a trusted partner for over 1,500 advisors nationwide. From life insurance to wealth management products, our advisors will be equipped to meet the diverse needs of their clients.</p>

      <h2>Looking Ahead</h2>
      <p>This expansion is part of our broader strategy to strengthen our national presence while maintaining the personalized service that defines OM Financial. We remain committed to empowering advisors with the tools, training, and support they need to succeed.</p>

      <p>For advisors interested in learning more about partnering with OM Financial in New Brunswick, please contact our advisor recruitment team.</p>
    `,
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
    excerpt:
      "As we enter 2026, the Canadian insurance landscape continues to evolve. From digital transformation to changing consumer expectations, here are the key trends.",
    content: `
      <p>The Canadian insurance industry is entering 2026 with significant momentum. After years of adaptation and innovation, the sector is poised for continued transformation. Here's what advisors should watch for in the coming year.</p>

      <h2>Digital Transformation Accelerates</h2>
      <p>The push toward digital solutions shows no signs of slowing. Insurers are investing heavily in streamlined application processes, instant underwriting for straightforward cases, and improved client portals. Advisors who embrace these tools will find themselves better positioned to serve modern consumers.</p>

      <h2>ESG Integration Grows</h2>
      <p>Environmental, Social, and Governance (ESG) considerations are becoming increasingly important to both insurers and clients. Expect to see more ESG-focused investment options within insurance products and greater transparency in carrier sustainability practices.</p>

      <h2>Health and Wellness Benefits Expand</h2>
      <p>Living benefits and wellness programs continue to grow in popularity. Carriers are expanding their offerings to include mental health support, digital health tools, and preventive care incentives. These additions make policies more attractive to health-conscious consumers.</p>

      <h2>Regulatory Changes on the Horizon</h2>
      <p>Provincial regulators continue to update requirements for continuing education and disclosure. Advisors should stay informed about changes in their provinces and ensure compliance with all new requirements.</p>

      <h2>What Advisors Should Do</h2>
      <ul>
        <li>Invest in digital literacy and embrace new tools</li>
        <li>Stay current with ESG developments and client preferences</li>
        <li>Understand the expanding wellness benefits landscape</li>
        <li>Maintain compliance with evolving regulatory requirements</li>
      </ul>

      <p>The advisors who thrive in 2026 will be those who combine the timeless value of personal relationships with modern tools and knowledge.</p>
    `,
    category: "industry",
    author: "Industry Research Team",
    publishedAt: "2025-12-10",
    readTime: 6,
  },
  {
    id: "3",
    slug: "annual-advisor-conference-recap",
    title: "Annual Advisor Conference 2025: A Resounding Success",
    excerpt:
      "Over 500 advisors gathered in Toronto for our largest annual conference yet. The event featured keynote speakers, product training sessions, and valuable networking.",
    content: `
      <p>The OM Financial Annual Advisor Conference 2025 has concluded, and what an incredible event it was! Over 500 advisors from across Canada gathered in Toronto for three days of learning, networking, and celebration.</p>

      <h2>Conference Highlights</h2>
      <p>This year's conference featured an impressive lineup of speakers and sessions designed to help advisors grow their practices and better serve their clients.</p>

      <h3>Keynote Presentations</h3>
      <p>Our opening keynote focused on the future of financial advice in an AI-driven world. Industry experts shared insights on how technology can enhance—rather than replace—the advisor-client relationship.</p>

      <h3>Carrier Training Sessions</h3>
      <p>Representatives from our top carrier partners delivered in-depth training on new products and underwriting updates. Advisors gained valuable knowledge to bring back to their practices.</p>

      <h3>Networking Opportunities</h3>
      <p>From the welcome reception to the awards gala, advisors had numerous opportunities to connect with peers, share best practices, and build lasting relationships.</p>

      <h2>Award Winners</h2>
      <p>Congratulations to all our award recipients! Special recognition goes to our President's Club qualifiers and Rising Star award winners who demonstrated exceptional dedication to their clients and careers.</p>

      <h2>Looking Forward</h2>
      <p>Planning for the 2026 conference is already underway. We look forward to welcoming even more advisors to next year's event. Stay tuned for announcements about the date, location, and speaker lineup.</p>

      <p>Thank you to everyone who attended and made this year's conference our best yet!</p>
    `,
    category: "event",
    author: "Events Team",
    publishedAt: "2025-11-28",
    readTime: 5,
  },
  {
    id: "4",
    slug: "new-partnership-empire-life",
    title: "OM Financial Announces Partnership with Empire Life",
    excerpt:
      "We are pleased to welcome Empire Life to our growing roster of carrier partners. This partnership expands our product offerings for advisors.",
    content: `
      <p>OM Financial Inc. is pleased to announce a new partnership with Empire Life, one of Canada's leading insurance carriers. This partnership further strengthens our commitment to providing advisors with access to best-in-class insurance solutions.</p>

      <h2>About Empire Life</h2>
      <p>Empire Life is a proud Canadian company with over 100 years of history. Known for their innovative products and advisor-focused approach, Empire Life brings significant value to our carrier portfolio.</p>

      <h2>Products Now Available</h2>
      <p>Through this partnership, OM Financial advisors will have access to Empire Life's comprehensive product suite, including:</p>
      <ul>
        <li>Term and permanent life insurance</li>
        <li>Critical illness coverage</li>
        <li>Disability insurance</li>
        <li>Wealth accumulation products</li>
      </ul>

      <h2>Training and Support</h2>
      <p>Empire Life will be conducting training sessions for OM Financial advisors in the coming weeks. These sessions will cover product features, underwriting guidelines, and competitive positioning.</p>

      <h2>What This Means for Advisors</h2>
      <p>Adding Empire Life to our carrier lineup gives advisors even more options to meet their clients' diverse needs. With competitive products and excellent underwriting, Empire Life is a valuable addition to our portfolio.</p>

      <p>Contact your Regional Vice President for more information about selling Empire Life products.</p>
    `,
    category: "company",
    author: "Partnership Development",
    publishedAt: "2025-11-15",
    readTime: 3,
  },
  {
    id: "5",
    slug: "ce-credit-requirements-update",
    title: "CE Credit Requirements: What Advisors Need to Know for 2026",
    excerpt:
      "Provincial regulators have announced updates to continuing education requirements. Here's a comprehensive guide to staying compliant.",
    content: `
      <p>Continuing education requirements are evolving across Canadian provinces. As we approach 2026, it's important for advisors to understand the current landscape and ensure they remain compliant with all regulatory requirements.</p>

      <h2>Provincial Requirements Overview</h2>
      <p>Each province maintains its own CE requirements for insurance advisors. While the specifics vary, most provinces require between 15-30 CE credits per licensing cycle, with specific requirements for ethics credits.</p>

      <h2>Recent Changes</h2>
      <p>Several provinces have updated their requirements for 2026:</p>
      <ul>
        <li><strong>Ontario:</strong> Increased focus on anti-money laundering training</li>
        <li><strong>Alberta:</strong> New requirements for digital literacy credits</li>
        <li><strong>British Columbia:</strong> Enhanced ethics requirements</li>
      </ul>

      <h2>How OM Financial Can Help</h2>
      <p>OM Financial University offers a comprehensive library of CE-accredited courses to help advisors meet their requirements. Our courses cover:</p>
      <ul>
        <li>Product knowledge and updates</li>
        <li>Ethics and professional conduct</li>
        <li>Compliance and regulatory updates</li>
        <li>Sales and practice management</li>
      </ul>

      <h2>Tracking Your Credits</h2>
      <p>We recommend maintaining detailed records of all CE activities. Keep certificates of completion and track your credits by province if you hold multiple licenses.</p>

      <h2>Upcoming Deadlines</h2>
      <p>Check with your provincial regulator for specific renewal dates. Many licenses renew on the anniversary of your original licensing date, while others follow a calendar-year cycle.</p>

      <p>For questions about CE requirements, contact our compliance team.</p>
    `,
    category: "industry",
    author: "Compliance Team",
    publishedAt: "2025-11-01",
    readTime: 7,
  },
]

const categoryInfo = {
  announcement: {
    label: "Announcement",
    color: "bg-primary/10 text-primary",
  },
  industry: { label: "Industry News", color: "bg-blue-500/10 text-blue-600" },
  event: { label: "Event", color: "bg-green-500/10 text-green-600" },
  company: {
    label: "Company News",
    color: "bg-accent/20 text-accent-foreground",
  },
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function NewsDetailPage() {
  const { slug } = Route.useParams()
  const [copied, setCopied] = useState(false)

  // Find the article by slug
  const article = newsArticles.find((a) => a.slug === slug)

  // If article not found, throw 404
  if (!article) {
    throw notFound()
  }

  // Get related articles (same category, excluding current)
  const relatedArticles = newsArticles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3)

  // If no related in same category, get any other articles
  const displayRelated =
    relatedArticles.length > 0
      ? relatedArticles
      : newsArticles.filter((a) => a.id !== article.id).slice(0, 3)

  const articleUrl = `${siteConfig.url}/about/news/${article.slug}`

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      console.error("Failed to copy link")
    }
  }

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(articleUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`,
  }

  // Generate Article structured data
  const articleSchema = generateArticleSchema({
    title: article.title,
    description: article.excerpt,
    path: `/about/news/${article.slug}`,
    datePublished: article.publishedAt,
    author: article.author,
  })

  return (
    <div className="min-h-svh">
      <StructuredData schema={articleSchema} />

      {/* Breadcrumbs */}
      <div className="bg-muted/30 border-b">
        <div className="container py-4">
          <Breadcrumbs
            items={[
              { label: "About", href: "/about" },
              { label: "News", href: "/about/news" },
              { label: article.title },
            ]}
          />
        </div>
      </div>

      {/* Article Header */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-muted py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <BlurFade delay={0.1} inView>
              {/* Category Badge */}
              <div className="mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${categoryInfo[article.category].color}`}
                >
                  {categoryInfo[article.category].label}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                {article.title}
              </h1>

              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {article.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {formatDate(article.publishedAt)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {article.readTime} min read
                </span>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <BlurFade delay={0.2} inView>
              {/* Featured Image Placeholder */}
              <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 mb-10 flex items-center justify-center">
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {article.title.charAt(0)}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Featured Image
                  </p>
                </div>
              </div>

              {/* Article Body */}
              <div
                className="prose prose-lg max-w-none
                  prose-headings:text-foreground prose-headings:font-bold
                  prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4
                  prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                  prose-ul:text-muted-foreground prose-ul:my-4
                  prose-li:my-1
                  prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Share2 className="h-4 w-4" />
                    <span className="text-sm font-medium">
                      Share this article
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopyLink}
                      className="gap-2"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <Link2 className="h-4 w-4" />
                      )}
                      {copied ? "Copied!" : "Copy Link"}
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href={shareLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Share on Twitter"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href={shareLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Share on LinkedIn"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href={shareLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Share on Facebook"
                      >
                        <Facebook className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {displayRelated.length > 0 && (
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container">
            <BlurFade delay={0.1} inView>
              <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Related Articles
                </h2>
                <p className="text-muted-foreground">
                  Continue reading more news and updates
                </p>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {displayRelated.map((related, index) => (
                <BlurFade key={related.id} delay={0.2 + index * 0.05} inView>
                  <Link to="/about/news/$slug" params={{ slug: related.slug }}>
                    <Card className="h-full hover:shadow-lg hover:border-primary/20 transition-all group cursor-pointer">
                      {/* Image Placeholder */}
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-t-lg" />
                      <CardHeader className="pb-2">
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-medium w-fit ${categoryInfo[related.category].color}`}
                        >
                          {categoryInfo[related.category].label}
                        </span>
                        <CardTitle className="text-base line-clamp-2 group-hover:text-primary transition-colors">
                          {related.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {formatDate(related.publishedAt)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {related.readTime} min
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to News CTA */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container text-center">
          <BlurFade delay={0.1} inView>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link to="/about/news">
                <ArrowLeft className="h-4 w-4" />
                Back to All News
              </Link>
            </Button>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
