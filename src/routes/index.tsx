import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="container py-12">
      {/* Hero Section Placeholder */}
      <section className="text-center py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#183472] text-balance mb-6">
          Welcome to OM Financial
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          A leading, national, Canadian-owned and operated Managing General Agency with 50 years of combined experience in life insurance and wealth management.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#183472] rounded-md hover:bg-[#183472]/90 transition-colors"
          >
            Get Started
          </a>
          <a
            href="/advisor-benefits"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-[#183472] bg-white border-2 border-[#183472] rounded-md hover:bg-[#183472]/5 transition-colors"
          >
            Join Our Team
          </a>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#183472] mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            'Life & Health Insurance',
            'Group Benefits',
            'Investments (RRSP, TFSA)',
            'Business Insurance',
          ].map((service) => (
            <div
              key={service}
              className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm"
            >
              <h3 className="font-semibold text-lg mb-2">{service}</h3>
              <p className="text-sm text-muted-foreground">
                Professional services for advisors and clients across Canada.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 md:py-16 px-6 md:px-12 rounded-lg bg-[#183472] text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Partner with OM Financial?
        </h2>
        <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
          Join our network of successful advisors and access world-class products and support.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-[#183472] bg-white rounded-md hover:bg-white/90 transition-colors"
        >
          Contact Us Today
        </a>
      </section>
    </div>
  )
}
