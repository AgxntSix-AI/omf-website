import { createFileRoute, Link } from "@tanstack/react-router"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Building2,
  ExternalLink,
  ArrowRight
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magic-ui/blur-fade"
import { siteConfig } from "@/config/site"

export const Route = createFileRoute("/contact")({
  component: ContactPage,
})

const offices = [
  {
    name: "Toronto (Head Office)",
    address: "7191 Yonge Street, Suite 711",
    city: "Thornhill, ON L3T 0C4",
    phone: "(416) 491-7727",
    fax: "(416) 491-7102",
    email: "info@omfinancial.com",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.6947!2d-79.4163!3d43.8101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQ4JzM2LjQiTiA3OcKwMjQnNTguNyJX!5e0!3m2!1sen!2sca!4v1234567890",
    coords: { lat: 43.8101, lng: -79.4163 },
  },
  {
    name: "Mississauga",
    address: "218 Export Boulevard, Suite 610",
    city: "Mississauga, ON L5S 0A7",
    phone: "(905) 612-0800",
    fax: "(905) 612-0801",
    email: "receptionwest@omfinancial.com",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.9!2d-79.6137!3d43.6859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQxJzA5LjIiTiA3OcKwMzYnNDkuMyJX!5e0!3m2!1sen!2sca!4v1234567890",
    coords: { lat: 43.6859, lng: -79.6137 },
  },
]

const socialLinks = [
  { name: "Facebook", url: siteConfig.social.facebook },
  { name: "LinkedIn", url: siteConfig.social.linkedin },
  { name: "Instagram", url: siteConfig.social.instagram },
  { name: "YouTube", url: siteConfig.social.youtube },
]

function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-muted py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <BlurFade delay={0.1} inView>
              <p className="text-sm font-medium text-primary mb-4 tracking-wide">GET IN TOUCH</p>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Contact Us
              </h1>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have questions? We're here to help. Reach out to our team or visit one
                of our offices in the Greater Toronto Area.
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-12 bg-background border-b">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="text-center hover:shadow-lg hover:border-primary/20 transition-all">
                <CardContent className="pt-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                  <p className="text-sm text-muted-foreground mb-3">Mon-Fri, 9am-5pm EST</p>
                  <a href="tel:4164917727" className="text-primary font-medium hover:underline">
                    (416) 491-7727
                  </a>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg hover:border-primary/20 transition-all">
                <CardContent className="pt-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                  <p className="text-sm text-muted-foreground mb-3">We respond within 24 hours</p>
                  <a href="mailto:info@omfinancial.com" className="text-primary font-medium hover:underline">
                    info@omfinancial.com
                  </a>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg hover:border-primary/20 transition-all">
                <CardContent className="pt-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Live Chat</h3>
                  <p className="text-sm text-muted-foreground mb-3">Chat with our team</p>
                  <Button variant="outline" size="sm">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* GHL Widget Placeholder */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <BlurFade delay={0.1} inView>
              <div className="text-center mb-8">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <MessageSquare className="h-7 w-7" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <Card>
                <CardContent className="py-12">
                  {/* GHL Widget Placeholder */}
                  <div className="bg-muted/50 rounded-lg border-2 border-dashed border-muted-foreground/20 p-8 text-center">
                    <MessageSquare className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">
                      Contact Form Widget
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      GoHighLevel chatbot widget will be embedded here.
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Widget ID: [GHL_WIDGET_ID]
                    </p>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Building2 className="h-7 w-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Our Offices
              </h2>
              <p className="text-muted-foreground">
                Visit us at one of our two convenient locations in the Greater Toronto Area.
              </p>
            </div>
          </BlurFade>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {offices.map((office, index) => (
              <BlurFade key={office.name} delay={0.2 + index * 0.1} inView>
                <Card className="h-full overflow-hidden">
                  {/* Map Placeholder */}
                  <div className="aspect-video bg-muted relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-primary/50 mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Map Loading...</p>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${office.coords.lat},${office.coords.lng}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary hover:underline inline-flex items-center gap-1 mt-2"
                        >
                          Open in Google Maps
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{office.name}</CardTitle>
                    <CardDescription>
                      {office.address}<br />
                      {office.city}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="h-4 w-4 text-primary shrink-0" />
                      <a href={`tel:${office.phone.replace(/[^0-9]/g, '')}`} className="text-foreground hover:text-primary">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">Fax: {office.fax}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="h-4 w-4 text-primary shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-foreground hover:text-primary">
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Clock className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">Mon-Fri: 9:00 AM - 5:00 PM</span>
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Directory Link */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Looking for a Specific Team Member?
              </h3>
              <p className="text-muted-foreground mb-6">
                View our complete staff directory with direct contact information.
              </p>
              <Button asChild className="gap-2">
                <Link to="/about/executive-team">
                  View Team Directory
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Connect With Us
              </h2>
              <p className="text-muted-foreground mb-8">
                Follow us on social media for updates, news, and industry insights.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    asChild
                    variant="outline"
                    className="gap-2"
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      {social.name}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <BlurFade delay={0.1} inView>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Join Our Network?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Discover the benefits of partnering with one of Canada's leading MGAs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/advisor-benefits">Advisor Benefits</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/products-partners">Our Partners</Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
