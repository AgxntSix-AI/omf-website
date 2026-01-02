import { createFileRoute, Link } from "@tanstack/react-router"
import {
  ArrowLeft,
  Calculator,
  Heart,
  PiggyBank,
  TrendingUp,
  Receipt,
  Home,
  ExternalLink,
  AlertCircle,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magic-ui/blur-fade"

export const Route = createFileRoute("/advisor-portal/calculators")({
  component: CalculatorsPage,
})

// Calculator categories with real data from advisor-portal.json
const calculatorCategories = [
  {
    title: "Financial Needs Analysis",
    description: "Calculate insurance coverage needs and critical illness requirements",
    icon: Heart,
    color: "bg-red-500/10 text-red-600",
    calculators: [
      {
        name: "Critical Illness Calculator",
        provider: "BMO Insurance",
        url: "http://www.bmo.com/tools/insurance/ci/en/",
      },
      {
        name: "Life Insurance Calculator",
        provider: "Manulife",
        url: "http://www.insureright.ca/",
      },
      {
        name: "Life Insurance Needs Estimator",
        provider: "WinQuote",
        url: "http://bulletin.lifeguide.com/gen_calcs/needs_analysis.html",
      },
    ],
  },
  {
    title: "Retirement Planning",
    description: "RRSP, RIF, and retirement savings calculators",
    icon: PiggyBank,
    color: "bg-green-500/10 text-green-600",
    calculators: [
      {
        name: "Registered / Non-Registered Comparison",
        provider: "Mackenzie Investments",
        url: "http://www.mackenziefinancial.com/calc/jsp/RegNonReg/rrsp_vs_non_rrsp.jsp",
      },
      {
        name: "Retirement Savings Calculator",
        provider: "CI Investments",
        url: "http://www.ci.com/web/learningcentre/calculator.jsp?lang=ENG",
      },
      {
        name: "RIF / LIF Illustrator",
        provider: "Mackenzie Investments",
        url: "http://www.mackenziefinancial.com/calc/jsp/RRIF_LIF_LRIF/RLL_Start.jsp",
      },
      {
        name: "RRSP Loan Planner",
        provider: "Mackenzie Investments",
        url: "http://www.mackenziefinancial.com/calc/jsp/RRSPloan/RRSPloan_Start.jsp",
      },
    ],
  },
  {
    title: "Investing & Saving",
    description: "Growth projections, RESP, and investment calculators",
    icon: TrendingUp,
    color: "bg-blue-500/10 text-blue-600",
    calculators: [
      {
        name: "Advantage of Early Investing",
        provider: "Mackenzie Investments",
        url: "http://www.mackenziefinancial.com/calc/jsp/EarlyInvesting/EarlyInvesting1.jsp",
      },
      {
        name: "Growth Calculator",
        provider: "Fidelity Investments",
        url: "http://www.fidelity.ca/cs/Satellite/en/public/education_planning/calculators/growth",
      },
      {
        name: "Investment & Regular Deposit",
        provider: "Mackenzie Investments",
        url: "http://www.mackenziefinancial.com/calc/jsp/InvRegDeposit/InvRegDeposit.jsp",
      },
      {
        name: "RESP Calculator",
        provider: "Mackenzie Investments",
        url: "http://www.mackenziefinancial.com/calc/jsp/RESP/RespStart.jsp",
      },
    ],
  },
  {
    title: "Taxation",
    description: "Income tax, payroll deductions, and benefit calculators",
    icon: Receipt,
    color: "bg-purple-500/10 text-purple-600",
    calculators: [
      {
        name: "Child & Family Benefits Calculator",
        provider: "CRA",
        url: "http://www.cra-arc.gc.ca/bnfts/clcltr/menu-eng.html",
      },
      {
        name: "Income Tax Refund Calculator",
        provider: "TurboTax",
        url: "http://turbotax.intuit.ca/tax-resources/canada-income-tax-calculator.jsp",
      },
      {
        name: "Payroll Deductions Calculator",
        provider: "CRA",
        url: "https://apps.cra-arc.gc.ca/ebci/rhpd/startLanguage.do?lang=English",
      },
      {
        name: "Tax Calculator",
        provider: "Fidelity Investments",
        url: "http://www.fidelity.ca/cs/Satellite/en/public/education_planning/calculators/tax",
      },
    ],
  },
  {
    title: "Mortgage & Lending",
    description: "Mortgage qualification, debt consolidation, and loan calculators",
    icon: Home,
    color: "bg-orange-500/10 text-orange-600",
    calculators: [
      {
        name: "Debt Consolidation Calculator",
        provider: "Mackenzie Investments",
        url: "http://www.mackenziefinancial.com/calc/jsp/DebtConsolidator/DebtConsolidator.jsp",
      },
      {
        name: "Manulife One Calculator",
        provider: "Manulife Bank",
        url: "http://www2.manulifeone.ca/blazeds/onecalc/onecalc.jsp",
      },
      {
        name: "Mortgage Qualifier",
        provider: "Mackenzie Investments",
        url: "http://www.mackenziefinancial.com/calc/jsp/MortgageQualifier/MortgageQualifier.jsp",
      },
    ],
  },
]

function CalculatorsPage() {
  const totalCalculators = calculatorCategories.reduce(
    (sum, cat) => sum + cat.calculators.length,
    0
  )

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
                <Calculator className="h-7 w-7" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Financial Calculators
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Access industry-leading calculators from trusted providers to help your clients plan for their financial future.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Calculator Categories */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Calculator Categories
              </h2>
              <p className="text-muted-foreground">
                {totalCalculators} calculators across {calculatorCategories.length} categories to support your client conversations.
              </p>
            </div>
          </BlurFade>

          <div className="space-y-8 max-w-5xl mx-auto">
            {calculatorCategories.map((category, categoryIndex) => (
              <BlurFade key={category.title} delay={0.15 + categoryIndex * 0.05} inView>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${category.color}`}>
                        <category.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                        <CardDescription>{category.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.calculators.map((calc) => (
                        <Card key={calc.name} className="hover:shadow-md hover:border-primary/20 transition-all">
                          <CardContent className="pt-4">
                            <div className="flex flex-col h-full">
                              <h3 className="font-medium text-foreground text-sm mb-1 line-clamp-2">
                                {calc.name}
                              </h3>
                              <p className="text-xs text-muted-foreground mb-3">
                                {calc.provider}
                              </p>
                              <Button asChild variant="outline" size="sm" className="gap-2 mt-auto">
                                <a href={calc.url} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-3 w-3" />
                                  Open Calculator
                                </a>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-background">
        <div className="container">
          <BlurFade delay={0.2} inView>
            <Card className="max-w-4xl mx-auto border-amber-200 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/20">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/20 text-amber-600 shrink-0">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Important Disclaimer</h3>
                    <p className="text-sm text-muted-foreground">
                      These calculators are provided by third-party companies for educational and illustrative purposes only. Results should not be considered financial advice. Always consult with qualified professionals and refer to carrier-specific documentation for accurate quotes and projections.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Calculator, label: "Total Calculators", value: `${totalCalculators}` },
              { icon: TrendingUp, label: "Categories", value: `${calculatorCategories.length}` },
              { icon: ExternalLink, label: "Provider Partners", value: "10+" },
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
              <Calculator className="h-7 w-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Need a Specific Calculator?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Can't find the calculator you need? Let us know and we'll work to add it to our collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">
                  Request a Calculator
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
