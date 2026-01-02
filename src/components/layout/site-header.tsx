import { useState } from "react"
import { Link } from "@tanstack/react-router"
import { Menu, ChevronDown, ExternalLink, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { mainNavigation, type NavItem } from "@/config/navigation"
import { siteConfig } from "@/config/site"

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar with contact info */}
      <div className="hidden md:block bg-primary text-primary-foreground">
        <div className="container flex h-8 items-center justify-end gap-6 text-xs">
          <a
            href={`tel:${siteConfig.contact.phone.toronto}`}
            className="flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <Phone className="h-3 w-3" />
            Toronto: {siteConfig.contact.phone.toronto.replace("+1-", "")}
          </a>
          <a
            href={`tel:${siteConfig.contact.phone.mississauga}`}
            className="flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <Phone className="h-3 w-3" />
            Mississauga: {siteConfig.contact.phone.mississauga.replace("+1-", "")}
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/omf-logo.svg"
            alt="OM Financial"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {mainNavigation.map((item) => (
              <NavMenuItem key={item.href} item={item} />
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="outline" size="sm">
            <a
              href={siteConfig.externalLinks.virtgate}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5"
            >
              Virtgate
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
          <Button asChild size="sm">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-80 p-0">
            <SheetHeader className="p-4 border-b">
              <SheetTitle className="flex items-center gap-2">
                <img src="/omf-logo.svg" alt="OM Financial" className="h-8" />
              </SheetTitle>
            </SheetHeader>
            <ScrollArea className="h-[calc(100vh-5rem)]">
              <div className="p-4 space-y-4">
                {/* Mobile contact info */}
                <div className="space-y-2 pb-4 border-b">
                  <a
                    href={`tel:${siteConfig.contact.phone.toronto}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Phone className="h-4 w-4" />
                    Toronto: {siteConfig.contact.phone.toronto.replace("+1-", "")}
                  </a>
                  <a
                    href={`tel:${siteConfig.contact.phone.mississauga}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Phone className="h-4 w-4" />
                    Mississauga: {siteConfig.contact.phone.mississauga.replace("+1-", "")}
                  </a>
                </div>

                {/* Mobile navigation */}
                <nav className="space-y-1">
                  {mainNavigation.map((item) => (
                    <MobileNavItem
                      key={item.href}
                      item={item}
                      onNavigate={() => setMobileOpen(false)}
                    />
                  ))}
                </nav>

                {/* Mobile CTAs */}
                <div className="pt-4 border-t space-y-2">
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href={siteConfig.externalLinks.virtgate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Virtgate Portal
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild className="w-full">
                    <Link to="/contact" onClick={() => setMobileOpen(false)}>
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function NavMenuItem({ item }: { item: NavItem }) {
  if (item.children && item.children.length > 0) {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger className="bg-transparent">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            {item.children.map((child) => (
              <li key={child.href}>
                {child.external ? (
                  <NavigationMenuLink asChild>
                    <a
                      href={child.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none flex items-center gap-1">
                        {child.title}
                        <ExternalLink className="h-3 w-3" />
                      </div>
                      {child.description && (
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {child.description}
                        </p>
                      )}
                    </a>
                  </NavigationMenuLink>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      to={child.href}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        {child.title}
                      </div>
                      {child.description && (
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {child.description}
                        </p>
                      )}
                    </Link>
                  </NavigationMenuLink>
                )}
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    )
  }

  return (
    <NavigationMenuItem>
      <Link to={item.href}>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {item.title}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}

function MobileNavItem({
  item,
  onNavigate,
}: {
  item: NavItem
  onNavigate: () => void
}) {
  const [expanded, setExpanded] = useState(false)

  if (item.children && item.children.length > 0) {
    return (
      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex w-full items-center justify-between py-2 text-sm font-medium hover:text-primary transition-colors"
        >
          {item.title}
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform",
              expanded && "rotate-180"
            )}
          />
        </button>
        {expanded && (
          <div className="ml-4 space-y-1 border-l pl-4">
            {item.children.map((child) => (
              <div key={child.href}>
                {child.external ? (
                  <a
                    href={child.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {child.title}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <Link
                    to={child.href}
                    onClick={onNavigate}
                    className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {child.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <Link
      to={item.href}
      onClick={onNavigate}
      className="block py-2 text-sm font-medium hover:text-primary transition-colors"
    >
      {item.title}
    </Link>
  )
}
