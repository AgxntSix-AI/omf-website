import { Link } from "@tanstack/react-router"
import {
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/config/site"
import { footerNavigation } from "@/config/navigation"

const socialIcons = {
  facebook: Facebook,
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/omf-logo.svg"
                alt="OM Financial"
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              {siteConfig.description}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {Object.entries(siteConfig.social).map(([key, url]) => {
                const Icon = socialIcons[key as keyof typeof socialIcons]
                if (!Icon) return null
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label={key}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerNavigation.services.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Advisors Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">For Advisors</h4>
            <ul className="space-y-3">
              {footerNavigation.advisors.map((item) => (
                <li key={item.href}>
                  {"external" in item && item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {item.title}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Office Locations */}
        <Separator className="my-8 bg-primary-foreground/10" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Toronto Office */}
          <div className="flex gap-3">
            <MapPin className="h-5 w-5 shrink-0 text-accent" />
            <div className="text-sm">
              <p className="font-semibold mb-1">Toronto (Head Office)</p>
              <p className="text-primary-foreground/80">
                {siteConfig.offices.toronto.address}
                <br />
                {siteConfig.offices.toronto.city},{" "}
                {siteConfig.offices.toronto.province}{" "}
                {siteConfig.offices.toronto.postalCode}
              </p>
            </div>
          </div>

          {/* Mississauga Office */}
          <div className="flex gap-3">
            <MapPin className="h-5 w-5 shrink-0 text-accent" />
            <div className="text-sm">
              <p className="font-semibold mb-1">Mississauga</p>
              <p className="text-primary-foreground/80">
                {siteConfig.offices.mississauga.address}
                <br />
                {siteConfig.offices.mississauga.city},{" "}
                {siteConfig.offices.mississauga.province}{" "}
                {siteConfig.offices.mississauga.postalCode}
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex gap-3">
              <Phone className="h-5 w-5 shrink-0 text-accent" />
              <div className="text-sm">
                <a
                  href={`tel:${siteConfig.contact.phone.toronto}`}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Toronto: {siteConfig.contact.phone.toronto.replace("+1-", "")}
                </a>
                <br />
                <a
                  href={`tel:${siteConfig.contact.phone.mississauga}`}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Mississauga:{" "}
                  {siteConfig.contact.phone.mississauga.replace("+1-", "")}
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <Mail className="h-5 w-5 shrink-0 text-accent" />
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 bg-primary-foreground/5">
        <div className="container py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-primary-foreground/60">
              &copy; {siteConfig.copyright.year} {siteConfig.copyright.holder}.
              All rights reserved.
            </p>
            <nav className="flex flex-wrap gap-4 text-sm">
              {footerNavigation.legal.map((item, index) => (
                <span key={item.href} className="flex items-center gap-4">
                  <Link
                    to={item.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {item.title}
                  </Link>
                  {index < footerNavigation.legal.length - 1 && (
                    <span className="text-primary-foreground/30">|</span>
                  )}
                </span>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
