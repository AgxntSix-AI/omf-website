import { createFileRoute, Link } from "@tanstack/react-router"
import {
  ArrowRight,
  Building2,
  Users,
  Award,
  HeartHandshake,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  Target,
  TrendingUp,
  Shield,
  CheckCircle2,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magic-ui/blur-fade"

export const Route = createFileRoute("/acquisitions")({
  component: AcquisitionsPage,
})

const valueProps = [
  {
    icon: Award,
    title: "50+ Years Experience",
    description:
      "Over 50 years of combined experience in the financial services industry, guiding successful transitions.",
  },
  {
    icon: HeartHandshake,
    title: "Integrity & Respect",
    description:
      "We treat our advisors with respect, honesty, and integrity throughout the entire transition process.",
  },
  {
    icon: Shield,
    title: "Premium Solutions",
    description:
      "Access to the best services in the financial sector because our advisors deserve only the best.",
  },
]

const successionOptions = [
  {
    icon: Users,
    title: "Family Transfer",
    description:
      "Pass your business to a family member with structured training and mentorship support.",
  },
  {
    icon: Briefcase,
    title: "Employee Succession",
    description:
      "Transition ownership to a trusted employee with our proven succession framework.",
  },
  {
    icon: TrendingUp,
    title: "Third-Party Sale",
    description:
      "We acquire books of business at fair market value with seamless client transitions.",
  },
]

const contacts = [
  {
    name: "Rahul Bhardwaj",
    title: "President & CEO",
    office: "Toronto Office",
    phone: "416-816-3856",
    email: "president@omfinancial.com",
    address: "7191 Yonge Street Suite 711, Thornhill, ON L3T 0C4",
    mainPhone: "(416) 491-7727 ext: 223",
  },
  {
    name: "Vikram Sundaram",
    title: "Senior Vice President",
    office: "Mississauga Office",
    phone: "416-278-0680",
    email: "info@omfinancial.com",
    address: "218 Export Boulevard Suite 610, Mississauga ON L5S 0A7",
    mainPhone: "(905) 612-0800 ext: 107",
  },
]

function AcquisitionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-muted py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <BlurFade delay={0.1} inView>
              <p className="text-sm font-medium text-primary mb-4 tracking-wide">
                BUSINESS TRANSITIONS
              </p>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Acquisitions & Succession Planning
              </h1>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As one of Canada's leading Managing General Agencies, we help advisors
                with a complete range of insurance and investment brokerage acquisitions
                and succession planning.
              </p>
            </BlurFade>
            <BlurFade delay={0.4} inView>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="tel:4164917727">Call Us Today</a>
                </Button>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Target className="h-7 w-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Why Choose OM Financial?
              </h2>
              <p className="text-muted-foreground">
                Let us help you secure the future of your business through the right
                strategies and plans.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {valueProps.map((prop, index) => (
              <BlurFade key={prop.title} delay={0.2 + index * 0.1} inView>
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
                      <prop.icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl">{prop.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{prop.description}</p>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Two Audiences */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* AGAs/MGAs */}
            <BlurFade delay={0.1} inView>
              <Card className="h-full bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardHeader>
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                    <Building2 className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl">For AGAs & MGAs</CardTitle>
                  <CardDescription className="text-base">
                    Looking to sell your books of business or plan succession?
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    If you are an AGA or MGA interested in selling books of business or
                    succession planning for your business, we are interested in acquiring
                    your books of business or undertaking succession planning for your
                    business across Canada.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Fair market value acquisitions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Seamless client transitions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Flexible deal structures</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full gap-2 mt-4">
                    <Link to="/contact">
                      Discuss Your Options
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </BlurFade>

            {/* Independent Advisors */}
            <BlurFade delay={0.2} inView>
              <Card className="h-full bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                <CardHeader>
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white mb-4">
                    <Users className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl">For Independent Advisors</CardTitle>
                  <CardDescription className="text-base">
                    Planning your retirement and client succession?
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    If you are an independent advisor looking to retire, we have a
                    succession plan that pairs you with a junior advisor who will look
                    after your clients and your books professionally.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">Mentorship transition program</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">Client continuity assured</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">Retire with peace of mind</span>
                    </li>
                  </ul>
                  <Button asChild variant="outline" className="w-full gap-2 mt-4 border-accent text-accent hover:bg-accent hover:text-white">
                    <Link to="/contact">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Succession Options */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Succession Planning Options
              </h2>
              <p className="text-muted-foreground">
                We offer three proven approaches to succession planning, tailored to
                your unique situation and goals.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {successionOptions.map((option, index) => (
              <BlurFade key={option.title} delay={0.2 + index * 0.1} inView>
                <Card className="h-full hover:shadow-lg hover:border-primary/20 transition-all">
                  <CardHeader>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
                      <option.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{option.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Phone className="h-7 w-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Ready to Discuss Your Options?
              </h2>
              <p className="text-muted-foreground">
                Contact our leadership team directly to explore how we can help with
                your acquisition or succession planning needs.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {contacts.map((contact, index) => (
              <BlurFade key={contact.name} delay={0.2 + index * 0.1} inView>
                <Card className="h-full">
                  <CardHeader>
                    <p className="text-sm font-medium text-primary">{contact.office}</p>
                    <CardTitle className="text-xl">{contact.name}</CardTitle>
                    <CardDescription>{contact.title}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <a
                        href={`tel:${contact.phone.replace(/-/g, "")}`}
                        className="hover:text-primary transition-colors"
                      >
                        {contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a
                        href={`mailto:${contact.email}`}
                        className="hover:text-primary transition-colors"
                      >
                        {contact.email}
                      </a>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>{contact.address}</span>
                    </div>
                    <div className="pt-2">
                      <p className="text-xs text-muted-foreground">
                        Office: {contact.mainPhone}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <BlurFade delay={0.1} inView>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Secure the Future of Your Business
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Whether you're looking to sell, retire, or plan for the future, we have
              the experience and resources to help you make a smooth transition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <Link to="/contact">
                  Contact Us Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/about">Learn About OM Financial</Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
