import { createFileRoute, Link, notFound } from "@tanstack/react-router"
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Clock,
  User,
  Share2,
  Link2,
  Twitter,
  Linkedin,
  Facebook,
  Check,
  List,
  TrendingUp,
  Lightbulb,
  Shield,
  Laptop,
} from "lucide-react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magic-ui/blur-fade"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { StructuredData } from "@/components/seo/structured-data"
import { generateArticleSchema } from "@/lib/structured-data"
import { siteConfig } from "@/config/site"

export const Route = createFileRoute("/advisor-portal/blogs/$slug")({
  component: BlogDetailPage,
})

// Strapi-ready interface
interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: {
    name: string
    role: string
    bio: string
  }
  category: "industry" | "sales-tips" | "product" | "compliance" | "technology"
  publishedAt: string
  readTime: number
  featured?: boolean
  tableOfContents?: { id: string; title: string }[]
}

// Sample blog posts with full content (will be replaced by Strapi data)
const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "grow-client-base-2026",
    title: "5 Proven Strategies to Grow Your Client Base in 2026",
    excerpt:
      "Discover actionable tactics that successful advisors are using to attract and retain more clients in today's competitive market.",
    content: `
      <p>Growing your client base is essential for long-term success as an insurance advisor. In 2026, the landscape is more competitive than ever, but there are proven strategies that can help you stand out and attract quality clients.</p>

      <h2 id="leverage-digital-marketing">1. Leverage Digital Marketing</h2>
      <p>Your online presence is often the first impression potential clients have of you. A professional website, active social media profiles, and valuable content can establish you as a trusted expert in your field.</p>
      <p>Consider creating educational content that addresses common questions and concerns. Blog posts, videos, and infographics can demonstrate your expertise while providing value to potential clients.</p>

      <h2 id="referral-programs">2. Implement Referral Programs</h2>
      <p>Happy clients are your best source of new business. Create a structured referral program that rewards clients for recommending your services. Make it easy for them to refer friends and family by providing clear instructions and professional materials.</p>
      <p>Personal thank-you notes and small gifts can go a long way in encouraging referrals. Remember, the key is to deliver exceptional service that clients naturally want to share.</p>

      <h2 id="networking-events">3. Attend Networking Events</h2>
      <p>Face-to-face interactions remain powerful in building trust and relationships. Join local business groups, attend industry conferences, and participate in community events. Each connection is a potential client or referral source.</p>
      <p>Focus on building genuine relationships rather than immediately pitching your services. People prefer to work with advisors they know and trust.</p>

      <h2 id="specialization">4. Develop a Specialization</h2>
      <p>Becoming known as an expert in a specific area can help you attract clients who need that expertise. Whether it's business insurance, estate planning, or serving a particular industry, specialization can differentiate you from generalist competitors.</p>
      <p>Your specialization should align with your interests and the needs of your target market. Continuously develop your knowledge in this area through courses, certifications, and practical experience.</p>

      <h2 id="follow-up-consistently">5. Follow Up Consistently</h2>
      <p>Many advisors lose potential clients simply by failing to follow up. Implement a systematic follow-up process for every lead and maintain regular contact with existing clients. Use a CRM system to track interactions and schedule reminders.</p>
      <p>Regular check-ins, even when clients don't have immediate needs, keep you top of mind. When they do need insurance solutions, they'll think of you first.</p>

      <h2>Conclusion</h2>
      <p>Growing your client base requires consistent effort across multiple channels. By implementing these strategies and tracking your results, you can build a sustainable pipeline of quality clients who value your expertise.</p>
    `,
    author: {
      name: "Sarah Thompson",
      role: "Sales Coach",
      bio: "Sarah Thompson is a certified sales coach with over 15 years of experience helping insurance advisors grow their practices. She has trained over 500 advisors across Canada.",
    },
    category: "sales-tips",
    publishedAt: "2025-12-20",
    readTime: 8,
    featured: true,
    tableOfContents: [
      { id: "leverage-digital-marketing", title: "Leverage Digital Marketing" },
      { id: "referral-programs", title: "Implement Referral Programs" },
      { id: "networking-events", title: "Attend Networking Events" },
      { id: "specialization", title: "Develop a Specialization" },
      { id: "follow-up-consistently", title: "Follow Up Consistently" },
    ],
  },
  {
    id: "2",
    slug: "insurance-regulations-2026",
    title: "Understanding the New Insurance Regulations for 2026",
    excerpt:
      "A comprehensive breakdown of regulatory changes affecting insurance advisors and how to stay compliant.",
    content: `
      <p>The insurance regulatory landscape continues to evolve, and 2026 brings several important changes that advisors need to understand and prepare for. This guide covers the key updates and provides practical advice for maintaining compliance.</p>

      <h2 id="disclosure-requirements">Enhanced Disclosure Requirements</h2>
      <p>Regulators are placing increased emphasis on transparency and disclosure. Advisors must provide more detailed information about commissions, fees, and potential conflicts of interest. These changes aim to strengthen client trust and industry integrity.</p>
      <p>Ensure your disclosure documents are updated to meet the new requirements. Consider having your compliance team or legal counsel review your materials.</p>

      <h2 id="digital-compliance">Digital Compliance Standards</h2>
      <p>With the growth of digital interactions, regulators have introduced new standards for online communications, electronic signatures, and digital record-keeping. Understanding these requirements is essential for advisors who use technology in their practice.</p>
      <p>Key areas include: secure communication channels, proper consent procedures for electronic documents, and data retention policies.</p>

      <h2 id="ce-updates">Continuing Education Updates</h2>
      <p>Several provinces have updated their continuing education requirements. These changes may include new mandatory topics, adjusted credit requirements, or modified reporting procedures. Check with your provincial regulator for specific details.</p>
      <p>OM Financial University offers courses that meet the updated requirements. Plan your CE activities early to avoid last-minute pressure.</p>

      <h2 id="aml-kyc">AML and KYC Enhancements</h2>
      <p>Anti-money laundering and know-your-client procedures are receiving increased attention. Advisors should review their client onboarding processes and ensure they meet current standards for identity verification and risk assessment.</p>
      <p>Document your procedures thoroughly and train staff on proper compliance protocols.</p>

      <h2>Staying Compliant</h2>
      <p>Compliance is an ongoing responsibility. Stay informed about regulatory changes through industry publications, regulator communications, and professional associations. When in doubt, consult with your compliance team or legal advisors.</p>
    `,
    author: {
      name: "Michael Chen",
      role: "Compliance Director",
      bio: "Michael Chen leads compliance initiatives at OM Financial with 20 years of regulatory experience. He specializes in helping advisors navigate complex compliance requirements.",
    },
    category: "compliance",
    publishedAt: "2025-12-15",
    readTime: 10,
    tableOfContents: [
      { id: "disclosure-requirements", title: "Enhanced Disclosure Requirements" },
      { id: "digital-compliance", title: "Digital Compliance Standards" },
      { id: "ce-updates", title: "Continuing Education Updates" },
      { id: "aml-kyc", title: "AML and KYC Enhancements" },
    ],
  },
  {
    id: "3",
    slug: "tech-tools-every-advisor-needs",
    title: "Tech Tools Every Modern Advisor Needs",
    excerpt:
      "From CRM systems to digital marketing platforms, explore the essential technology that can streamline your practice.",
    content: `
      <p>Technology has transformed how insurance advisors work. The right tools can save time, improve client relationships, and help you grow your practice more efficiently. Here are the essential tech tools every modern advisor should consider.</p>

      <h2 id="crm-systems">CRM Systems</h2>
      <p>A Customer Relationship Management system is the foundation of a well-organized practice. It helps you track client interactions, manage follow-ups, and maintain detailed records. Popular options include Salesforce, HubSpot, and industry-specific solutions.</p>
      <p>Choose a CRM that integrates with your other tools and offers mobile access for managing client relationships on the go.</p>

      <h2 id="digital-tools">Digital Communication Tools</h2>
      <p>Video conferencing, secure messaging, and digital scheduling have become essential for client communication. Platforms like Zoom, Microsoft Teams, and Calendly can streamline client interactions and save travel time.</p>
      <p>Ensure your communication tools meet regulatory requirements for security and record-keeping.</p>

      <h2 id="marketing-automation">Marketing Automation</h2>
      <p>Email marketing platforms and social media management tools can help you stay connected with clients and prospects. Automated email campaigns, birthday greetings, and policy renewal reminders keep you top of mind without constant manual effort.</p>

      <h2 id="analytics">Analytics and Reporting</h2>
      <p>Understanding your business performance requires good data. Use analytics tools to track lead sources, conversion rates, and client retention. This information helps you make better decisions about where to invest your time and resources.</p>

      <h2>Getting Started</h2>
      <p>You don't need to adopt all these tools at once. Start with a solid CRM, then gradually add other technologies as your practice grows. Focus on tools that solve specific pain points in your current workflow.</p>
    `,
    author: {
      name: "Alex Rivera",
      role: "Technology Specialist",
      bio: "Alex Rivera helps insurance advisors leverage technology to improve their practices. With a background in both insurance and IT, they bridge the gap between technology and practical application.",
    },
    category: "technology",
    publishedAt: "2025-12-10",
    readTime: 6,
    tableOfContents: [
      { id: "crm-systems", title: "CRM Systems" },
      { id: "digital-tools", title: "Digital Communication Tools" },
      { id: "marketing-automation", title: "Marketing Automation" },
      { id: "analytics", title: "Analytics and Reporting" },
    ],
  },
  {
    id: "4",
    slug: "critical-illness-market-trends",
    title: "Critical Illness Insurance: Market Trends and Opportunities",
    excerpt:
      "Analyzing the growing demand for critical illness coverage and how advisors can capitalize on this trend.",
    content: `
      <p>Critical illness insurance has seen significant growth in recent years, driven by increased health awareness and the desire for financial protection. Understanding market trends can help advisors position themselves to meet this growing demand.</p>

      <h2 id="market-growth">Market Growth Drivers</h2>
      <p>Several factors are driving demand for critical illness coverage: an aging population, advances in medical treatment that improve survival rates, and greater awareness of the financial impact of serious illness. These trends create opportunities for advisors who understand the product.</p>

      <h2 id="product-evolution">Product Evolution</h2>
      <p>Carriers have responded to market demand with innovative product features. Return-of-premium options, enhanced coverage for specific conditions, and hybrid products combining CI with life insurance have expanded the market appeal.</p>
      <p>Stay current on product updates from your carrier partners to offer clients the most suitable options.</p>

      <h2 id="client-conversations">Client Conversations</h2>
      <p>Many Canadians are underinsured for critical illness. Effective conversations focus on the financial impact of illness, not just medical costs but lost income, modified living expenses, and the desire to focus on recovery rather than financial stress.</p>
      <p>Use real-world scenarios and statistics to help clients understand their potential exposure.</p>

      <h2>Opportunity Ahead</h2>
      <p>The critical illness market offers significant opportunity for advisors who develop expertise in this area. Continuing education, product knowledge, and effective client communication are keys to success.</p>
    `,
    author: {
      name: "Jennifer Park",
      role: "Product Specialist",
      bio: "Jennifer Park is a product specialist focusing on living benefits and health insurance products. She helps advisors understand and position these products effectively.",
    },
    category: "product",
    publishedAt: "2025-12-05",
    readTime: 7,
    tableOfContents: [
      { id: "market-growth", title: "Market Growth Drivers" },
      { id: "product-evolution", title: "Product Evolution" },
      { id: "client-conversations", title: "Client Conversations" },
    ],
  },
  {
    id: "5",
    slug: "building-client-trust",
    title: "Building Trust: The Foundation of Long-Term Client Relationships",
    excerpt:
      "Learn how to establish and maintain trust with clients through transparency, communication, and consistent service.",
    content: `
      <p>Trust is the foundation of every successful advisor-client relationship. In an industry where clients share sensitive financial information and rely on your expertise for important decisions, building and maintaining trust is essential.</p>

      <h2 id="transparency">Transparency and Honesty</h2>
      <p>Be upfront about commissions, fees, and potential conflicts of interest. Clients appreciate honesty, even when the information isn't what they hoped to hear. Clear communication about how you're compensated builds trust rather than undermining it.</p>

      <h2 id="communication">Consistent Communication</h2>
      <p>Regular touchpoints keep clients informed and demonstrate your ongoing commitment to their financial well-being. Don't only reach out when policies renew or when there's something to sell. Provide value through educational content and genuine check-ins.</p>

      <h2 id="competence">Demonstrate Competence</h2>
      <p>Clients trust advisors who clearly know their stuff. Stay current with industry knowledge, obtain relevant certifications, and be prepared to answer questions thoroughly. When you don't know something, admit it and commit to finding the answer.</p>

      <h2>Long-Term Perspective</h2>
      <p>Building trust is a long-term investment that pays dividends through client retention, referrals, and professional satisfaction. Focus on doing the right thing for each client, and trust will follow.</p>
    `,
    author: {
      name: "Sarah Thompson",
      role: "Sales Coach",
      bio: "Sarah Thompson is a certified sales coach with over 15 years of experience helping insurance advisors grow their practices. She has trained over 500 advisors across Canada.",
    },
    category: "sales-tips",
    publishedAt: "2025-11-28",
    readTime: 5,
    tableOfContents: [
      { id: "transparency", title: "Transparency and Honesty" },
      { id: "communication", title: "Consistent Communication" },
      { id: "competence", title: "Demonstrate Competence" },
    ],
  },
  {
    id: "6",
    slug: "canadian-insurance-industry-outlook",
    title: "Canadian Insurance Industry Outlook: What to Expect",
    excerpt:
      "Industry experts share their predictions for the insurance sector, including emerging trends and challenges ahead.",
    content: `
      <p>The Canadian insurance industry is entering a period of significant change and opportunity. Understanding the key trends and challenges can help advisors position themselves for success in the evolving landscape.</p>

      <h2 id="digital-transformation">Digital Transformation</h2>
      <p>Insurers continue to invest in digital capabilities, from online applications to AI-powered underwriting. Advisors who embrace technology while maintaining personal relationships will thrive. Digital tools enhance rather than replace the value of human advice.</p>

      <h2 id="changing-demographics">Changing Demographics</h2>
      <p>Canada's aging population creates both challenges and opportunities. Retirement planning, estate planning, and long-term care coverage become increasingly important. Meanwhile, younger generations have different expectations for how they interact with financial services providers.</p>

      <h2 id="regulatory-evolution">Regulatory Evolution</h2>
      <p>Expect continued focus on consumer protection, transparency, and professional standards. Advisors who view compliance as an opportunity to demonstrate professionalism, rather than a burden, will differentiate themselves positively.</p>

      <h2 id="product-innovation">Product Innovation</h2>
      <p>Carriers are developing products that address emerging needs: gig economy coverage, cyber insurance for small businesses, and flexible protection options. Understanding new products helps advisors meet evolving client needs.</p>

      <h2>Looking Ahead</h2>
      <p>The fundamentals of good advice—understanding client needs, providing appropriate solutions, and maintaining relationships—remain essential. Industry changes create opportunities for advisors who adapt while staying true to these principles.</p>
    `,
    author: {
      name: "David Wilson",
      role: "Industry Analyst",
      bio: "David Wilson is a veteran industry analyst with 25 years covering the Canadian insurance sector. He provides strategic insights for advisors and carriers alike.",
    },
    category: "industry",
    publishedAt: "2025-11-20",
    readTime: 12,
    tableOfContents: [
      { id: "digital-transformation", title: "Digital Transformation" },
      { id: "changing-demographics", title: "Changing Demographics" },
      { id: "regulatory-evolution", title: "Regulatory Evolution" },
      { id: "product-innovation", title: "Product Innovation" },
    ],
  },
]

const categoryInfo = {
  industry: {
    label: "Industry News",
    icon: TrendingUp,
    color: "bg-blue-500/10 text-blue-600",
  },
  "sales-tips": {
    label: "Sales Tips",
    icon: Lightbulb,
    color: "bg-green-500/10 text-green-600",
  },
  product: {
    label: "Product Insights",
    icon: BookOpen,
    color: "bg-purple-500/10 text-purple-600",
  },
  compliance: {
    label: "Compliance",
    icon: Shield,
    color: "bg-red-500/10 text-red-600",
  },
  technology: {
    label: "Technology",
    icon: Laptop,
    color: "bg-orange-500/10 text-orange-600",
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

function BlogDetailPage() {
  const { slug } = Route.useParams()
  const [copied, setCopied] = useState(false)

  // Find the blog post by slug
  const post = blogPosts.find((p) => p.slug === slug)

  // If post not found, throw 404
  if (!post) {
    throw notFound()
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  // If no related in same category, get any other posts
  const displayRelated =
    relatedPosts.length > 0
      ? relatedPosts
      : blogPosts.filter((p) => p.id !== post.id).slice(0, 3)

  const postUrl = `${siteConfig.url}/advisor-portal/blogs/${post.slug}`

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(postUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      console.error("Failed to copy link")
    }
  }

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(postUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`,
  }

  const CategoryIcon = categoryInfo[post.category].icon

  // Generate Article structured data
  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    path: `/advisor-portal/blogs/${post.slug}`,
    datePublished: post.publishedAt,
    author: post.author.name,
  })

  return (
    <div className="min-h-svh">
      <StructuredData schema={articleSchema} />

      {/* Breadcrumbs */}
      <div className="bg-muted/30 border-b">
        <div className="container py-4">
          <Breadcrumbs
            items={[
              { label: "Advisor Portal", href: "/advisor-portal" },
              { label: "Blogs", href: "/advisor-portal/blogs" },
              { label: post.title },
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
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${categoryInfo[post.category].color}`}
                >
                  <CategoryIcon className="h-3.5 w-3.5" />
                  {categoryInfo[post.category].label}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                {post.title}
              </h1>

              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.publishedAt)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime} min read
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 p-4 rounded-lg bg-card border">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {post.author.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {post.author.role}
                  </p>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Article Content with Table of Contents */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_280px] gap-12">
              {/* Main Content */}
              <div>
                <BlurFade delay={0.2} inView>
                  {/* Featured Image Placeholder */}
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 mb-10 flex items-center justify-center">
                    <div className="text-center">
                      <CategoryIcon className="h-16 w-16 text-primary/40 mx-auto mb-4" />
                      <p className="text-sm text-muted-foreground">
                        Featured Image
                      </p>
                    </div>
                  </div>

                  {/* Article Body */}
                  <div
                    className="prose prose-lg max-w-none
                      prose-headings:text-foreground prose-headings:font-bold prose-headings:scroll-mt-24
                      prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4
                      prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
                      prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                      prose-ul:text-muted-foreground prose-ul:my-4
                      prose-li:my-1
                      prose-strong:text-foreground"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />

                  {/* Author Bio */}
                  <div className="mt-12 p-6 rounded-xl bg-muted/50 border">
                    <div className="flex items-start gap-4">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <User className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground mb-1">
                          About {post.author.name}
                        </p>
                        <p className="text-sm text-muted-foreground mb-2">
                          {post.author.role}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {post.author.bio}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Share Section */}
                  <div className="mt-8 pt-8 border-t">
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

              {/* Sidebar - Table of Contents */}
              {post.tableOfContents && post.tableOfContents.length > 0 && (
                <div className="hidden lg:block">
                  <BlurFade delay={0.3} inView>
                    <div className="sticky top-24">
                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-sm font-semibold flex items-center gap-2">
                            <List className="h-4 w-4" />
                            Table of Contents
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <nav className="space-y-2">
                            {post.tableOfContents.map((item, index) => (
                              <a
                                key={item.id}
                                href={`#${item.id}`}
                                className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                              >
                                {index + 1}. {item.title}
                              </a>
                            ))}
                          </nav>
                        </CardContent>
                      </Card>
                    </div>
                  </BlurFade>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {displayRelated.length > 0 && (
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container">
            <BlurFade delay={0.1} inView>
              <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Related Articles
                </h2>
                <p className="text-muted-foreground">
                  Continue reading more insights for advisors
                </p>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {displayRelated.map((related, index) => {
                const RelatedIcon = categoryInfo[related.category].icon
                return (
                  <BlurFade key={related.id} delay={0.2 + index * 0.05} inView>
                    <Link
                      to="/advisor-portal/blogs/$slug"
                      params={{ slug: related.slug }}
                    >
                      <Card className="h-full hover:shadow-lg hover:border-primary/20 transition-all group cursor-pointer">
                        {/* Image Placeholder */}
                        <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-t-lg flex items-center justify-center">
                          <RelatedIcon className="h-8 w-8 text-primary/30" />
                        </div>
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
                              <User className="h-3 w-3" />
                              {related.author.name}
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
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blogs CTA */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container text-center">
          <BlurFade delay={0.1} inView>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link to="/advisor-portal/blogs">
                <ArrowLeft className="h-4 w-4" />
                Back to All Articles
              </Link>
            </Button>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
