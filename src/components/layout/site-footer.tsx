/**
 * Site Footer - PLACEHOLDER
 *
 * This component is a placeholder awaiting user-provided Footer design.
 * DO NOT create a production version until user provides the component.
 */

import { Link } from '@tanstack/react-router'

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-[#183472] text-white">
      {/* Placeholder Notice (remove in production) */}
      <div className="bg-amber-50 border-b border-amber-200 py-1 px-4 text-center text-xs text-amber-800">
        [PLACEHOLDER: Footer - awaiting user component]
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">OM Financial Inc.</h3>
            <p className="text-white/80 mb-4">
              A leading, national, Canadian-owned and operated Managing General Agency.
            </p>
            {/* Social Links Placeholder */}
            <div className="flex gap-4">
              {['Facebook', 'LinkedIn', 'Instagram', 'Twitter', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social}
                >
                  <span className="text-xs">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/products" className="hover:text-white">Products</Link></li>
              <li><Link to="/advisor-portal" className="hover:text-white">Advisor Portal</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-white/80 text-sm">
              <p>
                <strong>Toronto:</strong><br />
                (416) 491-7727
              </p>
              <p>
                <strong>Mississauga:</strong><br />
                (905) 612-0800
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/60">
          <p>&copy; {currentYear} OM Financial Inc. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link to="/about/disclaimer" className="hover:text-white">Disclaimer</Link>
            <span>|</span>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
