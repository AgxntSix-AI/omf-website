import { createFileRoute, Link, notFound } from "@tanstack/react-router"
import {
  ArrowLeft,
  Building2,
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
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magic-ui/blur-fade"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"

export const Route = createFileRoute("/products/partners/$slug")({
  component: PartnerDetailPage,
})

interface Partner {
  name: string
  slug: string
  category: "life" | "health" | "wealth" | "group" | "specialty"
  tier: "premier" | "major" | "partner"
  description?: string
  longDescription?: string
  products?: string[]
  website?: string
}

// Helper function to create slug from name
function createSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")
}

// Extended partner data with slugs and additional info
const partners: Partner[] = [
  // Premier Partners
  {
    name: "Manulife",
    slug: createSlug("Manulife"),
    category: "life",
    tier: "premier",
    description: "Comprehensive life and living benefits solutions",
    longDescription:
      "Manulife is one of Canada's largest and most trusted insurance companies, offering a comprehensive suite of life insurance, living benefits, and wealth management solutions. As a premier partner, OM Financial advisors have access to Manulife's full product portfolio and dedicated support team.",
    products: [
      "Term Life Insurance",
      "Whole Life Insurance",
      "Universal Life Insurance",
      "Critical Illness Insurance",
      "Disability Insurance",
      "Segregated Funds",
      "Group Benefits",
    ],
    website: "https://www.manulife.ca",
  },
  {
    name: "Sun Life",
    slug: createSlug("Sun Life"),
    category: "life",
    tier: "premier",
    description: "Insurance, investments, and group benefits",
    longDescription:
      "Sun Life Financial is a leading international financial services organization providing insurance, wealth, and asset management solutions. Their commitment to helping Canadians achieve lifetime financial security makes them an ideal partner for OM Financial advisors.",
    products: [
      "Term Life Insurance",
      "Permanent Life Insurance",
      "Critical Illness Insurance",
      "Health Insurance",
      "Dental Insurance",
      "Investment Solutions",
      "Group Retirement",
    ],
    website: "https://www.sunlife.ca",
  },
  {
    name: "Canada Life",
    slug: createSlug("Canada Life"),
    category: "life",
    tier: "premier",
    description: "Individual and group insurance products",
    longDescription:
      "Canada Life is one of Canada's leading insurers, providing life, health, and wealth solutions to individuals and groups. With a history spanning over 175 years, they offer stability and expertise that advisors can rely on.",
    products: [
      "Life Insurance",
      "Living Benefits",
      "Health & Dental",
      "Travel Insurance",
      "Wealth Solutions",
      "Group Benefits",
      "Pension Plans",
    ],
    website: "https://www.canadalife.com",
  },
  {
    name: "Desjardins Insurance",
    slug: createSlug("Desjardins Insurance"),
    category: "life",
    tier: "premier",
    description: "Full suite of insurance and wealth solutions",
    longDescription:
      "Desjardins Insurance offers a comprehensive range of insurance products backed by the financial strength of the Desjardins Group. Their innovative products and competitive pricing make them a valued partner.",
    products: [
      "Term Life Insurance",
      "Whole Life Insurance",
      "Critical Illness",
      "Disability Insurance",
      "Segregated Funds",
      "Group Insurance",
    ],
    website: "https://www.desjardinslifeinsurance.com",
  },
  {
    name: "iA Financial Group",
    slug: createSlug("iA Financial Group"),
    category: "life",
    tier: "premier",
    description: "Insurance, savings, and retirement solutions",
    longDescription:
      "iA Financial Group is a leading Canadian insurance and wealth management company with over 125 years of experience. They offer innovative products and excellent advisor support.",
    products: [
      "Term Insurance",
      "Permanent Insurance",
      "Living Benefits",
      "Savings Products",
      "Retirement Solutions",
      "Group Benefits",
    ],
    website: "https://ia.ca",
  },
  {
    name: "RBC Insurance",
    slug: createSlug("RBC Insurance"),
    category: "life",
    tier: "premier",
    description: "Life, health, and travel insurance",
    longDescription:
      "RBC Insurance, backed by one of Canada's largest banks, offers a range of insurance solutions with competitive pricing and strong financial backing.",
    products: [
      "Term Life Insurance",
      "Critical Illness",
      "Disability Insurance",
      "Health Insurance",
      "Travel Insurance",
    ],
    website: "https://www.rbcinsurance.com",
  },

  // Major Partners
  {
    name: "BMO Insurance",
    slug: createSlug("BMO Insurance"),
    category: "life",
    tier: "major",
    description: "Life insurance and living benefits",
    longDescription:
      "BMO Insurance provides straightforward insurance solutions backed by the strength and stability of BMO Financial Group.",
    products: [
      "Term Life Insurance",
      "Critical Illness Insurance",
      "Disability Insurance",
      "Travel Insurance",
    ],
    website: "https://www.bmoinsurance.com",
  },
  {
    name: "Empire Life",
    slug: createSlug("Empire Life"),
    category: "life",
    tier: "major",
    description: "Life insurance and wealth management",
    longDescription:
      "Empire Life is a proud Canadian company offering innovative insurance and wealth management solutions with a focus on advisor partnership.",
    products: [
      "Term Life Insurance",
      "Whole Life",
      "Universal Life",
      "Critical Illness",
      "Disability",
      "Segregated Funds",
    ],
    website: "https://www.empire.ca",
  },
  {
    name: "Equitable Life",
    slug: createSlug("Equitable Life"),
    category: "life",
    tier: "major",
    description: "Individual and group solutions",
    longDescription:
      "Equitable Life of Canada is a mutual company focused on providing competitive insurance and savings products while maintaining financial strength.",
    products: [
      "Term Insurance",
      "Permanent Insurance",
      "Critical Illness",
      "Disability",
      "Savings Plans",
    ],
    website: "https://www.equitable.ca",
  },
  {
    name: "Foresters Financial",
    slug: createSlug("Foresters Financial"),
    category: "life",
    tier: "major",
    description: "Life insurance with member benefits",
    longDescription:
      "Foresters Financial is a fraternal benefit society offering life insurance products along with unique member benefits including scholarships and community grants.",
    products: [
      "Term Life Insurance",
      "Whole Life Insurance",
      "Critical Illness",
      "Member Benefits",
    ],
    website: "https://www.foresters.com",
  },
  {
    name: "Beneva",
    slug: createSlug("Beneva"),
    category: "life",
    tier: "major",
    description: "Insurance and financial services",
    longDescription:
      "Beneva is Quebec's largest mutual insurer, formed from the merger of SSQ and La Capitale, offering comprehensive insurance and financial services.",
    products: [
      "Life Insurance",
      "Critical Illness",
      "Disability",
      "Group Benefits",
      "Savings",
    ],
    website: "https://www.beneva.ca",
  },
  {
    name: "Humania Assurance",
    slug: createSlug("Humania Assurance"),
    category: "life",
    tier: "major",
    description: "Simplified issue life insurance",
    longDescription:
      "Humania Assurance specializes in simplified issue and guaranteed issue life insurance products, making coverage accessible to more Canadians.",
    products: [
      "Simplified Issue Life",
      "Guaranteed Issue Life",
      "Final Expense Insurance",
    ],
    website: "https://www.humania.ca",
  },

  // Health & Benefits Partners
  {
    name: "Green Shield Canada",
    slug: createSlug("Green Shield Canada"),
    category: "health",
    tier: "major",
    description: "Health and dental benefits",
    longDescription:
      "Green Shield Canada is a leading health and dental benefits provider, offering innovative solutions for individuals and groups.",
    products: [
      "Health Benefits",
      "Dental Benefits",
      "Drug Coverage",
      "Mental Health",
      "Digital Health",
    ],
    website: "https://www.greenshield.ca",
  },
  {
    name: "Blue Cross",
    slug: createSlug("Blue Cross"),
    category: "health",
    tier: "major",
    description: "Health, dental, and travel coverage",
    longDescription:
      "Blue Cross is one of Canada's most recognized health benefits brands, offering comprehensive health, dental, and travel insurance solutions.",
    products: [
      "Health Insurance",
      "Dental Insurance",
      "Travel Insurance",
      "Vision Care",
      "Group Benefits",
    ],
    website: "https://www.bluecross.ca",
  },
  {
    name: "Medavie Blue Cross",
    slug: createSlug("Medavie Blue Cross"),
    category: "health",
    tier: "partner",
    description: "Health and travel insurance",
    longDescription:
      "Medavie Blue Cross provides health, dental, travel, life, and disability benefits to individuals and groups across Atlantic Canada and beyond.",
    products: [
      "Health Benefits",
      "Dental Coverage",
      "Travel Insurance",
      "Life Insurance",
      "Disability",
    ],
    website: "https://www.medaviebc.ca",
  },
  {
    name: "ClaimSecure",
    slug: createSlug("ClaimSecure"),
    category: "health",
    tier: "partner",
    description: "Health spending accounts",
    longDescription:
      "ClaimSecure specializes in Health Spending Accounts (HSAs) and flexible benefit solutions for businesses of all sizes.",
    products: [
      "Health Spending Accounts",
      "Flexible Benefits",
      "Administrative Services",
    ],
    website: "https://www.claimsecure.com",
  },

  // Wealth Partners
  {
    name: "CI Investments",
    slug: createSlug("CI Investments"),
    category: "wealth",
    tier: "major",
    description: "Segregated funds and investments",
    longDescription:
      "CI Investments is one of Canada's largest investment fund companies, offering a wide range of segregated funds and investment solutions.",
    products: ["Segregated Funds", "Mutual Funds", "ETFs", "Portfolio Solutions"],
    website: "https://www.ci.com",
  },
  {
    name: "Fidelity Investments",
    slug: createSlug("Fidelity Investments"),
    category: "wealth",
    tier: "major",
    description: "Investment solutions",
    longDescription:
      "Fidelity Investments Canada offers a broad range of investment products and services, backed by global investment expertise.",
    products: [
      "Mutual Funds",
      "ETFs",
      "Managed Portfolios",
      "Retirement Solutions",
    ],
    website: "https://www.fidelity.ca",
  },
  {
    name: "AGF",
    slug: createSlug("AGF"),
    category: "wealth",
    tier: "partner",
    description: "Investment management",
    longDescription:
      "AGF Management Limited is an independent investment management firm with diverse investment solutions.",
    products: ["Mutual Funds", "ETFs", "Segregated Funds", "Private Client"],
    website: "https://www.agf.com",
  },
  {
    name: "Dynamic Funds",
    slug: createSlug("Dynamic Funds"),
    category: "wealth",
    tier: "partner",
    description: "Actively managed investments",
    longDescription:
      "Dynamic Funds offers actively managed investment solutions designed to deliver competitive risk-adjusted returns.",
    products: ["Mutual Funds", "ETFs", "Private Pools", "Strategic Portfolios"],
    website: "https://www.dynamic.ca",
  },
  {
    name: "Mackenzie Investments",
    slug: createSlug("Mackenzie Investments"),
    category: "wealth",
    tier: "partner",
    description: "Mutual funds and ETFs",
    longDescription:
      "Mackenzie Investments is one of Canada's largest investment management companies, offering a diverse range of mutual funds and ETFs.",
    products: ["Mutual Funds", "ETFs", "Segregated Funds", "Portfolio Solutions"],
    website: "https://www.mackenzieinvestments.com",
  },

  // Specialty Partners
  {
    name: "Specialty Life",
    slug: createSlug("Specialty Life"),
    category: "specialty",
    tier: "partner",
    description: "Impaired risk specialists",
    longDescription:
      "Specialty Life focuses on providing insurance solutions for clients with health conditions or other risk factors that make standard coverage difficult to obtain.",
    products: ["Impaired Risk Life Insurance", "Substandard Risk Coverage"],
  },
  {
    name: "Assumption Life",
    slug: createSlug("Assumption Life"),
    category: "specialty",
    tier: "partner",
    description: "Simplified and guaranteed issue",
    longDescription:
      "Assumption Life specializes in simplified issue and guaranteed issue life insurance, making coverage accessible without medical exams.",
    products: [
      "Simplified Issue Life",
      "Guaranteed Issue Life",
      "Final Expense",
    ],
    website: "https://www.assumption.ca",
  },
  {
    name: "Edge Benefits",
    slug: createSlug("Edge Benefits"),
    category: "specialty",
    tier: "partner",
    description: "Group benefits for small business",
    longDescription:
      "Edge Benefits provides flexible group benefit solutions designed specifically for small businesses and professional associations.",
    products: [
      "Small Group Benefits",
      "Association Benefits",
      "Flexible Plans",
    ],
    website: "https://www.edgebenefits.com",
  },
  {
    name: "GroupHEALTH",
    slug: createSlug("GroupHEALTH"),
    category: "specialty",
    tier: "partner",
    description: "Innovative group solutions",
    longDescription:
      "GroupHEALTH offers innovative group benefit solutions with a focus on cost management and employee wellness.",
    products: ["Group Health", "Drug Programs", "Wellness Solutions"],
    website: "https://www.grouphealth.ca",
  },
  {
    name: "Manulife Vitality",
    slug: createSlug("Manulife Vitality"),
    category: "specialty",
    tier: "partner",
    description: "Wellness-based insurance",
    longDescription:
      "Manulife Vitality rewards healthy behaviors with discounts and rewards, encouraging clients to live healthier lives.",
    products: [
      "Vitality Life Insurance",
      "Wellness Rewards",
      "Health Tracking",
    ],
    website: "https://www.manulife.ca/vitality",
  },
  {
    name: "Tugo",
    slug: createSlug("Tugo"),
    category: "specialty",
    tier: "major",
    description: "Travel insurance solutions",
    longDescription:
      "Tugo is Canada's leading travel insurance provider, offering comprehensive coverage for Canadians travelling abroad.",
    products: [
      "Single Trip Travel",
      "Multi-Trip Annual",
      "Super Visa Insurance",
      "Visitors Insurance",
    ],
    website: "https://www.tugo.com",
  },
  {
    name: "Allianz",
    slug: createSlug("Allianz"),
    category: "specialty",
    tier: "partner",
    description: "Travel and specialty insurance",
    longDescription:
      "Allianz Global Assistance provides travel insurance and assistance services with global reach and 24/7 support.",
    products: [
      "Travel Medical Insurance",
      "Trip Cancellation",
      "Emergency Assistance",
    ],
    website: "https://www.allianz.ca",
  },
  {
    name: "GMS",
    slug: createSlug("GMS"),
    category: "specialty",
    tier: "partner",
    description: "Travel and health insurance",
    longDescription:
      "GMS (Group Medical Services) provides travel and health insurance solutions with a focus on customer service.",
    products: [
      "Travel Insurance",
      "Health Insurance",
      "Student Plans",
      "Visitor Plans",
    ],
    website: "https://www.gms.ca",
  },
  {
    name: "21st Century",
    slug: createSlug("21st Century"),
    category: "specialty",
    tier: "partner",
    description: "Super visa and travel insurance",
    longDescription:
      "21st Century specializes in travel insurance products including super visa insurance for visitors to Canada.",
    products: [
      "Super Visa Insurance",
      "Visitors Insurance",
      "Travel Medical",
      "Trip Cancellation",
    ],
    website: "https://www.21stcentury.ca",
  },
  {
    name: "Destination Travel",
    slug: createSlug("Destination Travel"),
    category: "specialty",
    tier: "partner",
    description: "Travel insurance specialists",
    longDescription:
      "Destination Travel Group offers a range of travel insurance products for Canadians travelling domestically and internationally.",
    products: [
      "Travel Medical",
      "Trip Cancellation",
      "Flight Delay",
      "Baggage Protection",
    ],
    website: "https://www.destinationtravel.ca",
  },
]

const categoryInfo = {
  life: {
    label: "Life Insurance",
    icon: Shield,
    color: "bg-blue-500/10 text-blue-600",
  },
  health: {
    label: "Health & Benefits",
    icon: Heart,
    color: "bg-red-500/10 text-red-600",
  },
  wealth: {
    label: "Wealth Management",
    icon: TrendingUp,
    color: "bg-green-500/10 text-green-600",
  },
  group: {
    label: "Group Benefits",
    icon: Building2,
    color: "bg-purple-500/10 text-purple-600",
  },
  specialty: {
    label: "Specialty Products",
    icon: Briefcase,
    color: "bg-orange-500/10 text-orange-600",
  },
}

const tierInfo = {
  premier: { label: "Premier Partner", color: "bg-primary text-primary-foreground" },
  major: { label: "Major Partner", color: "bg-accent text-accent-foreground" },
  partner: { label: "Partner", color: "bg-muted text-muted-foreground" },
}

function PartnerDetailPage() {
  const { slug } = Route.useParams()

  // Find the partner by slug
  const partner = partners.find((p) => p.slug === slug)

  // If partner not found, throw 404
  if (!partner) {
    throw notFound()
  }

  const CategoryIcon = categoryInfo[partner.category].icon

  // Get other partners in same category
  const relatedPartners = partners
    .filter((p) => p.category === partner.category && p.slug !== partner.slug)
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
                {/* Partner Logo Placeholder */}
                <div className="h-24 w-24 md:h-32 md:w-32 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border shrink-0">
                  <Building2 className="h-12 w-12 md:h-16 md:w-16 text-primary/40" />
                </div>

                <div className="flex-1">
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge className={tierInfo[partner.tier].color}>
                      {partner.tier === "premier" && (
                        <Award className="h-3 w-3 mr-1" />
                      )}
                      {tierInfo[partner.tier].label}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={categoryInfo[partner.category].color}
                    >
                      <CategoryIcon className="h-3 w-3 mr-1" />
                      {categoryInfo[partner.category].label}
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
                  Other {categoryInfo[partner.category].label} Partners
                </h2>
                <p className="text-muted-foreground">
                  Explore more partners in the same category
                </p>
              </div>
            </BlurFade>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {relatedPartners.map((related, index) => (
                <BlurFade key={related.slug} delay={0.2 + index * 0.05} inView>
                  <Link
                    to="/products/partners/$slug"
                    params={{ slug: related.slug }}
                  >
                    <Card className="h-full hover:shadow-lg hover:border-primary/20 transition-all group cursor-pointer">
                      <CardContent className="pt-6">
                        <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border mb-4">
                          <Building2 className="h-6 w-6 text-primary/40" />
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
