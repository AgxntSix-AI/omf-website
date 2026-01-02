interface Partner {
  id: string
  name: string
}

// Partner data - logos should be placed in public/images/logos/partners/
const partners: Partner[] = [
  { id: "sun-life", name: "Sun Life" },
  { id: "manulife", name: "Manulife" },
  { id: "canada-life", name: "Canada Life" },
  { id: "desjardins", name: "Desjardins" },
  { id: "industrial-alliance", name: "Industrial Alliance" },
  { id: "equitable-life", name: "Equitable Life" },
  { id: "empire-life", name: "Empire Life" },
  { id: "ivari", name: "Ivari" },
  { id: "foresters", name: "Foresters" },
  { id: "rbc-insurance", name: "RBC Insurance" },
  { id: "bmo-insurance", name: "BMO Insurance" },
  { id: "beneva", name: "Beneva" },
  { id: "wawanesa", name: "Wawanesa" },
  { id: "assumption-life", name: "Assumption Life" },
  { id: "humania", name: "Humania" },
]

export function PartnersMarquee() {
  return (
    <section className="py-16 lg:py-20 border-y bg-background">
      <div className="container mb-8">
        <div className="text-center">
          <p className="text-sm font-medium text-primary mb-2">OUR PARTNERS</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Trusted by Leading Carriers
          </h2>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Marquee Track */}
        <div className="flex animate-marquee">
          <MarqueeRow partners={partners} />
          <MarqueeRow partners={partners} aria-hidden />
        </div>
      </div>

      <div className="container mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          And 15+ more insurance carriers across Canada
        </p>
      </div>
    </section>
  )
}

function MarqueeRow({
  partners,
  ...props
}: {
  partners: Partner[]
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="flex shrink-0 gap-8 px-4" {...props}>
      {partners.map((partner) => (
        <div
          key={partner.id}
          className="flex h-20 w-40 shrink-0 items-center justify-center rounded-lg border bg-card px-6 py-4 shadow-sm"
        >
          {/* Placeholder - replace with actual logo images */}
          <span className="text-sm font-medium text-muted-foreground text-center">
            {partner.name}
          </span>
        </div>
      ))}
    </div>
  )
}
