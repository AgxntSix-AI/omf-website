/**
 * Site Header - PLACEHOLDER
 *
 * This component is a placeholder awaiting user-provided Navbar design.
 * DO NOT create a production version until user provides the component.
 */

import { Link } from '@tanstack/react-router'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-[#183472]">OM Financial</span>
        </Link>

        {/* Placeholder Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
            About Us
          </Link>
          <Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">
            Products
          </Link>
          <Link to="/advisor-portal" className="text-muted-foreground hover:text-foreground transition-colors">
            Advisor Portal
          </Link>
          <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button - Placeholder */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          aria-label="Open menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Placeholder Notice (remove in production) */}
      <div className="bg-amber-50 border-b border-amber-200 py-1 px-4 text-center text-xs text-amber-800">
        [PLACEHOLDER: Navbar - awaiting user component]
      </div>
    </header>
  )
}
