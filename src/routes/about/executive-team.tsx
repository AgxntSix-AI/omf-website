import { createFileRoute, Link } from "@tanstack/react-router"
import {
  Users,
  Mail,
  Phone,
  Building2,
  ArrowLeft,
  ArrowRight
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { BlurFade } from "@/components/magic-ui/blur-fade"

export const Route = createFileRoute("/about/executive-team")({
  component: ExecutiveTeamPage,
})

const executives = [
  {
    name: "Rahul Bhardwaj",
    title: "President & CEO",
    initials: "RB",
    email: "president@mgacanada.com",
    phone: "(416) 491-7727 ext. 223",
    cell: "416-816-3856",
  },
  {
    name: "Vikram Sundaram",
    title: "Senior Vice President",
    initials: "VS",
    email: "svp@mgacanada.com",
    phone: "(905) 612-0800 ext. 107",
    cell: "416-278-0680",
  },
  {
    name: "Divya Sharma",
    title: "Executive Vice President",
    initials: "DS",
    email: "evp@mgacanada.com",
    phone: "(905) 612-0800 ext. 101",
    cell: "(905) 512-9823",
  },
]

const torontoTeam = [
  {
    name: "Eleanor Martin",
    title: "Chief Brokerage Relationship Manager",
    initials: "EM",
    email: "marketing@mgacanada.com",
    phone: "(416) 491-7727 ext. 254",
  },
  {
    name: "Niranjanadevi Sivapatham",
    title: "Chief Agency Product Specialist",
    initials: "NS",
    email: "agentservices@mgacanada.com",
    phone: "(416) 491-7727 ext. 233",
  },
  {
    name: "Roshana Perera",
    title: "Advanced New Business Manager",
    initials: "RP",
    email: "newbusiness@mgacanada.com",
    phone: "(416) 491-7727 ext. 225",
  },
  {
    name: "Anahit Khachatryan",
    title: "Chief Compensation Officer",
    initials: "AK",
    email: "compensation1@mgacanada.com",
    phone: "(416) 491-7727 ext. 257",
  },
]

const mississaugaTeam = [
  {
    name: "Gaurav Prasher",
    title: "Chief Contracting & Compliance Officer",
    initials: "GP",
    email: "mgacompliance@mgacanada.com",
    phone: "(905) 612-0800 ext. 103",
  },
  {
    name: "Ramesh Sehgal",
    title: "Business Development Manager",
    initials: "RS",
    email: "rvplife@mgacanada.com",
    phone: "(905) 612-0800 ext. 104",
  },
  {
    name: "Shruti Gulati",
    title: "Lead Relationship Specialist",
    initials: "SG",
    email: "receptionwest@omfinancial.com",
    phone: "(905) 612-0800 ext. 101",
  },
  {
    name: "Aruna Satyam",
    title: "First Impressions Officer",
    initials: "AS",
    email: "receptionwest@omfinancial.com",
    phone: "(905) 612-0800 ext. 101",
  },
]

function ExecutiveTeamPage() {
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
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-muted py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <BlurFade delay={0.1} inView>
              <p className="text-sm font-medium text-primary mb-4 tracking-wide">OUR PEOPLE</p>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Executive Team
              </h1>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Meet the dedicated professionals who lead OM Financial with expertise,
                integrity, and a passion for advisor success.
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Users className="h-7 w-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Executive Leadership
              </h2>
              <p className="text-muted-foreground">
                The visionary leaders guiding OM Financial's strategic direction and growth.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {executives.map((exec, index) => (
              <BlurFade key={exec.name} delay={0.2 + index * 0.1} inView>
                <Card className="h-full text-center hover:shadow-lg hover:border-primary/20 transition-all">
                  <CardHeader className="pb-4">
                    <Avatar className="h-24 w-24 mx-auto mb-4 border-4 border-primary/10">
                      <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">
                        {exec.initials}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl">{exec.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {exec.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Mail className="h-4 w-4 shrink-0" />
                      <a href={`mailto:${exec.email}`} className="hover:text-primary transition-colors">
                        {exec.email}
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4 shrink-0" />
                      <span>{exec.phone}</span>
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Toronto Team */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="flex items-center gap-3 mb-8 max-w-5xl mx-auto">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">Toronto Office</h2>
                <p className="text-sm text-muted-foreground">7191 Yonge Street, Suite 711, Thornhill</p>
              </div>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {torontoTeam.map((member, index) => (
              <BlurFade key={member.name} delay={0.2 + index * 0.1} inView>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <Avatar className="h-16 w-16 mb-3">
                      <AvatarFallback className="text-lg font-bold bg-accent/20 text-accent-foreground">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-base">{member.name}</CardTitle>
                    <CardDescription className="text-xs leading-tight">
                      {member.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail className="h-3 w-3 shrink-0" />
                      <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors truncate">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-3 w-3 shrink-0" />
                      <span>{member.phone}</span>
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Mississauga Team */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="flex items-center gap-3 mb-8 max-w-5xl mx-auto">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">Mississauga Office</h2>
                <p className="text-sm text-muted-foreground">218 Export Boulevard, Suite 610, Mississauga</p>
              </div>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {mississaugaTeam.map((member, index) => (
              <BlurFade key={member.name} delay={0.2 + index * 0.1} inView>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <Avatar className="h-16 w-16 mb-3">
                      <AvatarFallback className="text-lg font-bold bg-accent/20 text-accent-foreground">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-base">{member.name}</CardTitle>
                    <CardDescription className="text-xs leading-tight">
                      {member.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail className="h-3 w-3 shrink-0" />
                      <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors truncate">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-3 w-3 shrink-0" />
                      <span>{member.phone}</span>
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
              Ready to Connect?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Our team is here to support your success. Reach out to learn more about
              joining the OM Financial family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/advisor-benefits">Advisor Benefits</Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
