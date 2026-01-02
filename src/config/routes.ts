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
  { path: "/contact", title: "Contact Us", description: "Contact page with form and office info", status: "done" },
  { path: "/advisor-benefits", title: "Advisor Benefits", description: "E&O insurance and advisor perks", status: "done" },
  { path: "/acquisitions", title: "Acquisitions", description: "Succession planning services", status: "done" },
  { path: "/seminars", title: "Seminars", description: "Educational events and workshops", status: "done" },

  // About section
  { path: "/about", title: "About Us", description: "About OM Financial", status: "done" },
  { path: "/about/vision-mission", title: "Vision & Mission", description: "Our guiding principles", status: "done" },
  { path: "/about/leadership", title: "Leadership", description: "Meet our executive team", status: "done" },
  { path: "/about/history", title: "History & Strategy", description: "Our journey", status: "done" },
  { path: "/about/executive-team", title: "Executive Team", description: "Leadership profiles", status: "done" },
  { path: "/about/news", title: "News", description: "Latest updates", status: "done" },
  { path: "/about/gallery", title: "Gallery", description: "Event photos", status: "done" },
  { path: "/about/disclaimer", title: "Disclaimer", description: "Legal information", status: "done" },

  // Products section
  { path: "/products", title: "Products", description: "Our products and services", status: "done" },
  { path: "/products/find-advisor", title: "Find an Advisor", description: "Connect with a licensed advisor", status: "done" },
  { path: "/products/partners", title: "Our Partners", description: "Insurance carriers we represent", status: "done" },

  // Advisor Portal section (not indexed - protected content)
  { path: "/advisor-portal", title: "Advisor Portal", description: "Resources for advisors", status: "done" },
  { path: "/advisor-portal/calendar", title: "Event Calendar", description: "Upcoming events", status: "done" },
  { path: "/advisor-portal/training", title: "Training Library", description: "Educational resources", status: "done" },
  { path: "/advisor-portal/blogs", title: "Blogs", description: "Industry insights", status: "done" },
  { path: "/advisor-portal/toolbox", title: "Toolbox", description: "Sales tools", status: "done" },
  { path: "/advisor-portal/forum", title: "Forum", description: "Advisor community", status: "done" },
  { path: "/advisor-portal/compliance", title: "Compliance", description: "Regulatory info", status: "done" },
  { path: "/advisor-portal/university", title: "OM University", description: "Professional development", status: "done" },
  { path: "/advisor-portal/calculators", title: "Calculators", description: "Financial planning tools", status: "done" },
  { path: "/advisor-portal/incentives", title: "Incentives & Contests", description: "Rewards", status: "done" },

  // Legal pages (pending)
  { path: "/privacy", title: "Privacy Policy", description: "Privacy policy", status: "pending" },
  { path: "/terms", title: "Terms of Service", description: "Terms of service", status: "pending" },
]

export const pendingRoutes = routes.filter(r => r.status === "pending")
export const stubRoutes = routes.filter(r => r.status === "stub")
export const doneRoutes = routes.filter(r => r.status === "done")
