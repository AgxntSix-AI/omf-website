import { createFileRoute, Link, notFound } from "@tanstack/react-router"
import {
  ArrowLeft,
  Shield,
  Heart,
  Briefcase,
  TrendingUp,
  Award,
  CheckCircle2,
  Globe,
  Phone,
  Mail,
  ExternalLink,
  Building2,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magic-ui/blur-fade"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import {
  partners,
  getPartnerById,
  getLogoPath,
  categoryInfo as configCategoryInfo,
  tierInfo as configTierInfo,
  type Partner,
} from "@/config/partners"

export const Route = createFileRoute("/products/partners/$slug")({
  component: PartnerDetailPage,
})

const categoryIcons = {
  life: Shield,
  health: Heart,
  wealth: TrendingUp,
  specialty: Briefcase,
}

const categoryColors = {
  life: "bg-blue-500/10 text-blue-600",
  health: "bg-red-500/10 text-red-600",
  wealth: "bg-green-500/10 text-green-600",
  specialty: "bg-orange-500/10 text-orange-600",
}

const tierColors = {
  premier: "bg-primary text-primary-foreground",
  major: "bg-accent text-accent-foreground",
  partner: "bg-muted text-muted-foreground",
}

function PartnerDetailPage() {
  const { slug } = Route.useParams()

  // Find the partner by ID (slug)
  const partner = getPartnerById(slug)

  // If partner not found, throw 404
  if (!partner) {
    throw notFound()
  }

  const CategoryIcon = categoryIcons[partner.category]

  // Get other partners in same category
  const relatedPartners = partners
    .filter((p) => p.category === partner.category && p.id !== partner.id)
    .slice(0, 4)

  return (
    <div className="min-h-svh">
      {/* Breadcrumbs */}
      <div className="bg-muted/30 border-b">
        <div className="container py-4">
          <Breadcrumbs
            items={[
              { label: "Products", href: "/products" },
              { label: "Partners", href: "/products/partners" },
              { label: partner.name },
            ]}
          />
        </div>
      </div>

      {/* Partner Header */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-muted py-12 lg:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <BlurFade delay={0.1} inView>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Partner Logo */}
                <div className="h-28 w-36 md:h-36 md:w-48 rounded-2xl bg-muted/30 flex items-center justify-center shrink-0 p-4">
                  <img
                    src={getLogoPath(partner.logo)}
                    alt={partner.name}
                    className="max-h-20 md:max-h-24 max-w-full object-contain"
                  />
                </div>

                <div className="flex-1">
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge className={tierColors[partner.tier]}>
                      {partner.tier === "premier" && (
                        <Award className="h-3 w-3 mr-1" />
                      )}
                      {configTierInfo[partner.tier].label}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={categoryColors[partner.category]}
                    >
                      <CategoryIcon className="h-3 w-3 mr-1" />
                      {configCategoryInfo[partner.category].label}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-green-500/10 text-green-600"
                    >
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Available through OM Financial
                    </Badge>
                  </div>

                  {/* Name & Description */}
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    {partner.name}
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    {partner.description}
                  </p>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Partner Details */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_300px] gap-12">
              {/* Main Content */}
              <div>
                <BlurFade delay={0.2} inView>
                  {/* About */}
                  <div className="mb-10">
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      About {partner.name}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {partner.longDescription || partner.description}
                    </p>
                  </div>

                  {/* Products Offered */}
                  {partner.products && partner.products.length > 0 && (
                    <div className="mb-10">
                      <h2 className="text-xl font-bold text-foreground mb-4">
                        Products Available
                      </h2>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {partner.products.map((product) => (
                          <div
                            key={product}
                            className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                          >
                            <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                            <span className="text-sm text-foreground">
                              {product}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Why Partner with OM Financial */}
                  <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                    <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Why Access {partner.name} Through OM Financial?
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span>Competitive compensation and bonuses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span>Dedicated wholesaler support and training</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span>Advanced case and underwriting assistance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span>Back-office support for applications and commissions</span>
                      </li>
                    </ul>
                  </div>
                </BlurFade>
              </div>

              {/* Sidebar */}
              <div>
                <BlurFade delay={0.3} inView>
                  <Card className="sticky top-24">
                    <CardHeader>
                      <CardTitle className="text-base">
                        Partner Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Contact OM Financial */}
                      <div>
                        <p className="text-sm font-medium text-foreground mb-2">
                          Access This Partner
                        </p>
                        <p className="text-xs text-muted-foreground mb-3">
                          Contact OM Financial to learn more about selling{" "}
                          {partner.name} products.
                        </p>
                        <div className="space-y-2">
                          <a
                            href="tel:+14164917727"
                            className="flex items-center gap-2 text-sm text-primary hover:underline"
                          >
                            <Phone className="h-4 w-4" />
                            (416) 491-7727
                          </a>
                          <a
                            href="mailto:info@omfinancial.com"
                            className="flex items-center gap-2 text-sm text-primary hover:underline"
                          >
                            <Mail className="h-4 w-4" />
                            info@omfinancial.com
                          </a>
                        </div>
                      </div>

                      {/* Partner Website */}
                      {partner.website && (
                        <div className="pt-4 border-t">
                          <p className="text-sm font-medium text-foreground mb-2">
                            Partner Website
                          </p>
                          <a
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-primary hover:underline"
                          >
                            <Globe className="h-4 w-4" />
                            Visit {partner.name}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      )}

                      {/* CTA */}
                      <div className="pt-4 border-t">
                        <Button asChild className="w-full">
                          <Link to="/contact">Become an Advisor</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </BlurFade>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Partners */}
      {relatedPartners.length > 0 && (
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container">
            <BlurFade delay={0.1} inView>
              <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Other {configCategoryInfo[partner.category].label} Partners
                </h2>
                <p className="text-muted-foreground">
                  Explore more partners in the same category
                </p>
              </div>
            </BlurFade>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {relatedPartners.map((related, index) => (
                <BlurFade key={related.id} delay={0.2 + index * 0.05} inView>
                  <Link
                    to="/products/partners/$slug"
                    params={{ slug: related.id }}
                  >
                    <Card className="h-full hover:shadow-lg hover:border-primary/20 transition-all group cursor-pointer">
                      <CardContent className="pt-6">
                        <div className="h-16 w-24 rounded-lg bg-muted/30 flex items-center justify-center mb-4 p-2 group-hover:bg-muted/50 transition-colors">
                          <img
                            src={getLogoPath(related.logo)}
                            alt={related.name}
                            className="max-h-12 max-w-full object-contain"
                            loading="lazy"
                          />
                        </div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                          {related.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {related.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Partners CTA */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container text-center">
          <BlurFade delay={0.1} inView>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link to="/products/partners">
                <ArrowLeft className="h-4 w-4" />
                Back to All Partners
              </Link>
            </Button>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
