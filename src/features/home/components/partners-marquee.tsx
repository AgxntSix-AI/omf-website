import { Marquee } from "@/components/magic-ui/marquee"
import { cn } from "@/lib/utils"

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

// Split partners into two rows for visual variety
const firstRow = partners.slice(0, Math.ceil(partners.length / 2))
const secondRow = partners.slice(Math.ceil(partners.length / 2))

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div
      className={cn(
        "flex h-16 w-36 shrink-0 items-center justify-center rounded-lg border bg-card px-4 py-3",
        "shadow-sm transition-all duration-200",
        "hover:shadow-md hover:border-primary/20"
      )}
    >
      {/* Placeholder - replace with actual logo images */}
      <span className="text-sm font-medium text-muted-foreground text-center leading-tight">
        {partner.name}
      </span>
    </div>
  )
}

export function PartnersMarquee() {
  return (
    <section className="py-16 lg:py-20 border-y bg-background overflow-hidden">
      <div className="container mb-8">
        <div className="text-center">
          <p className="text-sm font-medium text-primary mb-2 tracking-wide">
            OUR PARTNERS
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Trusted by Leading Carriers
          </h2>
        </div>
      </div>

      {/* Magic UI Marquee - First Row */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <Marquee pauseOnHover className="[--duration:35s] [--gap:1.5rem]">
          {firstRow.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </Marquee>
      </div>

      {/* Magic UI Marquee - Second Row (reversed) */}
      <div className="relative mt-4">
        {/* Gradient Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <Marquee reverse pauseOnHover className="[--duration:35s] [--gap:1.5rem]">
          {secondRow.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </Marquee>
      </div>

      <div className="container mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          And 15+ more insurance carriers across Canada
        </p>
      </div>
    </section>
  )
}
