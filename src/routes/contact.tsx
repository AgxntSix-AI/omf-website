import { createFileRoute } from "@tanstack/react-router"
import { useEffect } from "react"
import { MessageSquare, MapPin, Phone, Mail, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { BlurFade } from "@/components/magic-ui/blur-fade"
import { OfficeMap } from "@/components/shared/office-map"
import { siteConfig } from "@/config/site"

export const Route = createFileRoute("/contact")({
  component: ContactPage,
})

const GHL_WIDGET_ID = "69575279b1df790eb46e7681"

function ContactPage() {
  // Load GHL chat widget
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://widgets.leadconnectorhq.com/loader.js"
    script.setAttribute(
      "data-resources-url",
      "https://widgets.leadconnectorhq.com/chat-widget/loader.js"
    )
    script.setAttribute("data-widget-id", GHL_WIDGET_ID)
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup on unmount
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-muted">
      <div className="container py-20 lg:py-28">
        <div className="max-w-4xl mx-auto">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-12">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <MessageSquare className="h-8 w-8" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We'd love to hear from you. Use our chat widget or reach out
                directly to one of our offices.
              </p>
            </div>
          </BlurFade>

          {/* Office Cards */}
          <BlurFade delay={0.2} inView>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Toronto Office */}
              <Card className="shadow-lg">
                <CardContent className="py-8">
                  <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Toronto (Head Office)
                  </h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 mt-1 shrink-0" />
                      <span>
                        7191 Yonge Street, Suite 711
                        <br />
                        Thornhill, ON L3T 0C4
                      </span>
                    </p>
                    <p className="flex items-center gap-3">
                      <Phone className="h-4 w-4 shrink-0" />
                      <a
                        href="tel:+14164917727"
                        className="hover:text-primary transition-colors"
                      >
                        (416) 491-7727
                      </a>
                    </p>
                    <p className="flex items-center gap-3">
                      <Mail className="h-4 w-4 shrink-0" />
                      <a
                        href="mailto:info@omfinancial.com"
                        className="hover:text-primary transition-colors"
                      >
                        info@omfinancial.com
                      </a>
                    </p>
                    <p className="flex items-center gap-3">
                      <Clock className="h-4 w-4 shrink-0" />
                      <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Mississauga Office */}
              <Card className="shadow-lg">
                <CardContent className="py-8">
                  <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Mississauga Office
                  </h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 mt-1 shrink-0" />
                      <span>
                        218 Export Boulevard, Suite 610
                        <br />
                        Mississauga, ON L5S 0A7
                      </span>
                    </p>
                    <p className="flex items-center gap-3">
                      <Phone className="h-4 w-4 shrink-0" />
                      <a
                        href="tel:+19056120800"
                        className="hover:text-primary transition-colors"
                      >
                        (905) 612-0800
                      </a>
                    </p>
                    <p className="flex items-center gap-3">
                      <Mail className="h-4 w-4 shrink-0" />
                      <a
                        href="mailto:info@omfinancial.com"
                        className="hover:text-primary transition-colors"
                      >
                        info@omfinancial.com
                      </a>
                    </p>
                    <p className="flex items-center gap-3">
                      <Clock className="h-4 w-4 shrink-0" />
                      <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </BlurFade>

          {/* Office Maps */}
          <BlurFade delay={0.25} inView>
            <div className="mb-12">
              <h2 className="text-xl font-bold text-foreground text-center mb-6">
                Find Our Offices
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <OfficeMap
                  name={siteConfig.offices.toronto.name}
                  address={siteConfig.offices.toronto.address}
                  city={siteConfig.offices.toronto.city}
                  province={siteConfig.offices.toronto.province}
                  postalCode={siteConfig.offices.toronto.postalCode}
                  coordinates={siteConfig.offices.toronto.coordinates}
                />
                <OfficeMap
                  name={siteConfig.offices.mississauga.name}
                  address={siteConfig.offices.mississauga.address}
                  city={siteConfig.offices.mississauga.city}
                  province={siteConfig.offices.mississauga.province}
                  postalCode={siteConfig.offices.mississauga.postalCode}
                  coordinates={siteConfig.offices.mississauga.coordinates}
                />
              </div>
            </div>
          </BlurFade>

          {/* Chat Widget Info */}
          <BlurFade delay={0.3} inView>
            <Card className="shadow-lg bg-primary/5 border-primary/20">
              <CardContent className="py-8 text-center">
                <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-xl font-bold text-foreground mb-2">
                  Chat With Us
                </h2>
                <p className="text-muted-foreground mb-4">
                  Click the chat bubble in the bottom right corner to start a
                  conversation with our team.
                </p>
                <p className="text-sm text-muted-foreground">
                  We typically respond within a few hours during business hours.
                </p>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </div>
    </div>
  )
}
