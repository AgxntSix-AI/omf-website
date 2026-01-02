/**
 * Routes Configuration
 * Central place to define all routes and their metadata
 * Use this to generate route stubs and sitemap
 */

export interface RouteConfig {
  path: string
  title: string
  description: string
  status: "done" | "stub" | "pending"
}

export const routes: RouteConfig[] = [
  // Main pages
  { path: "/", title: "Home", description: "Homepage", status: "done" },
  { path: "/contact", title: "Contact Us", description: "Contact page with form and office info", status: "stub" },
  { path: "/advisor-benefits", title: "Advisor Benefits", description: "E&O insurance and advisor perks", status: "stub" },
  { path: "/acquisitions", title: "Acquisitions", description: "Succession planning services", status: "stub" },
  { path: "/seminars", title: "Seminars", description: "Educational events and workshops", status: "stub" },

  // About section
  { path: "/about", title: "About Us", description: "About OM Financial", status: "stub" },
  { path: "/about/vision-mission", title: "Vision & Mission", description: "Our guiding principles", status: "stub" },
  { path: "/about/leadership", title: "Leadership", description: "Meet our executive team", status: "stub" },
  { path: "/about/history", title: "History & Strategy", description: "Our journey", status: "stub" },
  { path: "/about/executive-team", title: "Executive Team", description: "Leadership profiles", status: "stub" },
  { path: "/about/news", title: "News", description: "Latest updates", status: "stub" },
  { path: "/about/gallery", title: "Gallery", description: "Event photos", status: "stub" },
  { path: "/about/disclaimer", title: "Disclaimer", description: "Legal information", status: "stub" },

  // Products section
  { path: "/products", title: "Products", description: "Our products and services", status: "stub" },
  { path: "/products/find-advisor", title: "Find an Advisor", description: "Connect with a licensed advisor", status: "stub" },
  { path: "/products/partners", title: "Our Partners", description: "Insurance carriers we represent", status: "stub" },

  // Advisor Portal section
  { path: "/advisor-portal", title: "Advisor Portal", description: "Resources for advisors", status: "stub" },
  { path: "/advisor-portal/calendar", title: "Event Calendar", description: "Upcoming events", status: "stub" },
  { path: "/advisor-portal/training", title: "Training Library", description: "Educational resources", status: "stub" },
  { path: "/advisor-portal/blogs", title: "Blogs", description: "Industry insights", status: "stub" },
  { path: "/advisor-portal/toolbox", title: "Toolbox", description: "Sales tools", status: "stub" },
  { path: "/advisor-portal/forum", title: "Forum", description: "Advisor community", status: "stub" },
  { path: "/advisor-portal/compliance", title: "Compliance", description: "Regulatory info", status: "stub" },
  { path: "/advisor-portal/university", title: "OM University", description: "Professional development", status: "stub" },
  { path: "/advisor-portal/calculators", title: "Calculators", description: "Financial planning tools", status: "stub" },
  { path: "/advisor-portal/incentives", title: "Incentives & Contests", description: "Rewards", status: "stub" },

  // Legal pages
  { path: "/privacy", title: "Privacy Policy", description: "Privacy policy", status: "stub" },
  { path: "/terms", title: "Terms of Service", description: "Terms of service", status: "stub" },
]

export const pendingRoutes = routes.filter(r => r.status === "pending")
export const stubRoutes = routes.filter(r => r.status === "stub")
export const doneRoutes = routes.filter(r => r.status === "done")
