import { Marquee } from "@/components/magic-ui/marquee"
import { cn } from "@/lib/utils"
import { partners, getLogoPath, type Partner } from "@/config/partners"

// Featured partners for homepage display (premier + major tier)
const featuredPartners = partners
  .filter((p) => p.tier === "premier" || p.tier === "major")
  .slice(0, 16)

// Split partners into two rows for visual variety
const firstRow = featuredPartners.slice(0, Math.ceil(featuredPartners.length / 2))
const secondRow = featuredPartners.slice(Math.ceil(featuredPartners.length / 2))

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div
      className={cn(
        "group relative flex h-20 w-40 sm:h-24 sm:w-48 shrink-0 items-center justify-center rounded-xl px-4 py-3",
        "bg-card/50 hover:bg-card",
        "border border-border/30 hover:border-primary/30",
        "transition-all duration-300",
        "hover:shadow-lg hover:scale-105"
      )}
    >
      {/* Partner logo */}
      <img
        src={getLogoPath(partner.logo)}
        alt={partner.name}
        className="max-h-14 sm:max-h-16 max-w-full object-contain transition-transform group-hover:scale-110"
        loading="lazy"
      />
    </div>
  )
}

export function PartnersMarquee() {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-muted/30 via-background to-muted/30">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
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
          And {partners.length - featuredPartners.length}+ more insurance carriers across Canada
        </p>
      </div>
    </section>
  )
}
