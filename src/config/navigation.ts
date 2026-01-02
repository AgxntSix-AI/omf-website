/**
 * Navigation configuration - menu structure for the site
 */

export interface NavItem {
  title: string
  href: string
  description?: string
  external?: boolean
  children?: NavItem[]
}

export const mainNavigation: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
    children: [
      {
        title: "Vision & Mission",
        href: "/about/vision-mission",
        description: "Our guiding principles and goals",
      },
      {
        title: "Leadership",
        href: "/about/leadership",
        description: "Meet our executive team",
      },
      {
        title: "History & Strategy",
        href: "/about/history",
        description: "Our journey and future direction",
      },
      {
        title: "Executive Team",
        href: "/about/executive-team",
        description: "Our leadership profiles",
      },
      {
        title: "News",
        href: "/about/news",
        description: "Latest updates and announcements",
      },
      {
        title: "Gallery",
        href: "/about/gallery",
        description: "Photos from our events",
      },
      {
        title: "Disclaimer",
        href: "/about/disclaimer",
        description: "Legal information",
      },
    ],
  },
  {
    title: "Products",
    href: "/products",
    children: [
      {
        title: "Find an Advisor",
        href: "/products/find-advisor",
        description: "Connect with a licensed advisor",
      },
      {
        title: "Our Partners",
        href: "/products/partners",
        description: "Insurance carriers we represent",
      },
    ],
  },
  {
    title: "Acquisitions",
    href: "/acquisitions",
    description: "Succession planning services",
  },
  {
    title: "Seminars",
    href: "/seminars",
    description: "Educational events and workshops",
  },
  {
    title: "Advisor Benefits",
    href: "/advisor-benefits",
    description: "E&O insurance and advisor perks",
  },
  {
    title: "Advisor Portal",
    href: "/advisor-portal",
    children: [
      {
        title: "Virtgate",
        href: "https://virtgate.com",
        description: "Access the Virtgate portal",
        external: true,
      },
      {
        title: "Event Calendar",
        href: "/advisor-portal/calendar",
        description: "Upcoming events and webinars",
      },
      {
        title: "Training Library",
        href: "/advisor-portal/training",
        description: "Educational resources",
      },
      {
        title: "Blogs",
        href: "/advisor-portal/blogs",
        description: "Industry insights and articles",
      },
      {
        title: "Toolbox",
        href: "/advisor-portal/toolbox",
        description: "Sales tools and resources",
      },
      {
        title: "Forum",
        href: "/advisor-portal/forum",
        description: "Advisor community",
      },
      {
        title: "Compliance",
        href: "/advisor-portal/compliance",
        description: "Regulatory information",
      },
      {
        title: "OM University",
        href: "/advisor-portal/university",
        description: "Professional development",
      },
      {
        title: "Calculators",
        href: "/advisor-portal/calculators",
        description: "Financial planning tools",
      },
      {
        title: "Incentives & Contests",
        href: "/advisor-portal/incentives",
        description: "Rewards and promotions",
      },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Get in touch with us",
  },
]

export const footerNavigation = {
  company: [
    { title: "About Us", href: "/about" },
    { title: "Leadership", href: "/about/leadership" },
    { title: "News", href: "/about/news" },
    { title: "Contact", href: "/contact" },
  ],
  services: [
    { title: "Products", href: "/products" },
    { title: "Find an Advisor", href: "/products/find-advisor" },
    { title: "Our Partners", href: "/products/partners" },
    { title: "Acquisitions", href: "/acquisitions" },
  ],
  advisors: [
    { title: "Advisor Portal", href: "/advisor-portal" },
    { title: "Virtgate", href: "https://virtgate.com", external: true },
    { title: "Training", href: "/advisor-portal/training" },
    { title: "Advisor Benefits", href: "/advisor-benefits" },
  ],
  legal: [
    { title: "Disclaimer", href: "/about/disclaimer" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
  ],
}
