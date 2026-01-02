import { createFileRoute, Link } from "@tanstack/react-router"
import {
  AlertTriangle,
  Shield,
  Scale,
  FileText,
  ArrowLeft
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magic-ui/blur-fade"

export const Route = createFileRoute("/about/disclaimer")({
  component: DisclaimerPage,
})

function DisclaimerPage() {
  return (
    <div className="min-h-screen">
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

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-muted py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <BlurFade delay={0.1} inView>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <FileText className="h-7 w-7" />
              </div>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Disclaimer
              </h1>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Important legal information regarding the use of this website and
                the services provided by OM Financial Inc.
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* General Disclaimer */}
            <BlurFade delay={0.1} inView>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                    General Disclaimer
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-muted-foreground space-y-4">
                  <p>
                    The information provided on this website is for general informational purposes
                    only and should not be construed as professional financial, legal, or tax advice.
                    OM Financial Inc. is a Managing General Agency (MGA) that distributes insurance
                    and investment products through licensed advisors.
                  </p>
                  <p>
                    While we strive to keep the information on this website accurate and up-to-date,
                    we make no representations or warranties of any kind, express or implied, about
                    the completeness, accuracy, reliability, suitability, or availability of the
                    information, products, services, or related graphics contained on the website.
                  </p>
                  <p>
                    Any reliance you place on such information is strictly at your own risk. In no
                    event will OM Financial Inc. be liable for any loss or damage including without
                    limitation, indirect or consequential loss or damage, arising from the use of
                    this website.
                  </p>
                </CardContent>
              </Card>
            </BlurFade>

            {/* Financial Products Disclaimer */}
            <BlurFade delay={0.2} inView>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Financial Products & Services
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-muted-foreground space-y-4">
                  <p>
                    Insurance and investment products are offered through licensed insurance advisors
                    who are contracted with OM Financial Inc. The availability of products and
                    services may vary by province and are subject to the terms and conditions of
                    the issuing insurance companies.
                  </p>
                  <p>
                    <strong className="text-foreground">Investment products</strong> such as segregated
                    funds, mutual funds, and other securities carry inherent risks, including the
                    potential loss of principal. Past performance is not indicative of future results.
                    Please read the fund facts or prospectus before investing.
                  </p>
                  <p>
                    <strong className="text-foreground">Insurance products</strong> are underwritten
                    by their respective insurance companies. Coverage, premiums, and benefits are
                    subject to the terms of the insurance contract and the underwriting approval
                    of the insurance carrier.
                  </p>
                  <p>
                    All product recommendations should be discussed with a licensed advisor who can
                    assess your individual needs, financial situation, and risk tolerance.
                  </p>
                </CardContent>
              </Card>
            </BlurFade>

            {/* Regulatory Compliance */}
            <BlurFade delay={0.3} inView>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="h-5 w-5 text-primary" />
                    Regulatory Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-muted-foreground space-y-4">
                  <p>
                    OM Financial Inc. operates in accordance with the regulations set forth by
                    provincial insurance regulatory bodies across Canada. Our advisors are licensed
                    in their respective provinces and are required to maintain their licensing
                    requirements through continuing education.
                  </p>
                  <p>
                    We are committed to maintaining the highest standards of professional conduct
                    and compliance with all applicable laws and regulations governing the insurance
                    and financial services industry in Canada.
                  </p>
                </CardContent>
              </Card>
            </BlurFade>

            {/* Website Use */}
            <BlurFade delay={0.4} inView>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Website Terms of Use
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-muted-foreground space-y-4">
                  <p>
                    By accessing and using this website, you accept and agree to be bound by these
                    terms and conditions. If you do not agree to these terms, please do not use
                    this website.
                  </p>
                  <p>
                    <strong className="text-foreground">Intellectual Property:</strong> All content
                    on this website, including text, graphics, logos, and images, is the property
                    of OM Financial Inc. and is protected by Canadian and international copyright
                    laws.
                  </p>
                  <p>
                    <strong className="text-foreground">External Links:</strong> This website may
                    contain links to external websites. OM Financial Inc. is not responsible for
                    the content, privacy policies, or practices of any third-party websites.
                  </p>
                  <p>
                    <strong className="text-foreground">Privacy:</strong> Your use of this website
                    is also governed by our Privacy Policy. We are committed to protecting your
                    personal information in accordance with applicable privacy legislation.
                  </p>
                </CardContent>
              </Card>
            </BlurFade>

            {/* Contact for Questions */}
            <BlurFade delay={0.5} inView>
              <Card className="bg-muted/50">
                <CardContent className="py-6">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Questions About This Disclaimer?
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      If you have any questions regarding this disclaimer or require further
                      clarification, please contact our compliance department.
                    </p>
                    <Button asChild>
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>

            {/* Last Updated */}
            <BlurFade delay={0.6} inView>
              <p className="text-sm text-muted-foreground text-center">
                Last updated: January 2026
              </p>
            </BlurFade>
          </div>
        </div>
      </section>
    </div>
  )
}
