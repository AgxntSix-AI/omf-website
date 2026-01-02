import { MapPin, Navigation, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface OfficeMapProps {
  name: string
  address: string
  city: string
  province: string
  postalCode: string
  coordinates: {
    lat: number
    lng: number
  }
  className?: string
}

/**
 * Office Map Component
 * Displays a static map placeholder with office location and directions link
 */
export function OfficeMap({
  name,
  address,
  city,
  province,
  postalCode,
  coordinates,
  className,
}: OfficeMapProps) {
  // Google Maps directions URL
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`

  // Full address for display
  const fullAddress = `${address}, ${city}, ${province} ${postalCode}`

  return (
    <Card className={className}>
      <CardContent className="p-0 overflow-hidden">
        {/* Map Placeholder */}
        <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/5 to-accent/5">
          {/* Grid pattern overlay for map feel */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(to right, var(--primary) 1px, transparent 1px),
                linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Center pin */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Pin shadow */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-black/10 rounded-full blur-sm" />
              {/* Pin */}
              <div className="relative bg-primary rounded-full p-3 shadow-lg">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              {/* Pin point */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-primary" />
            </div>
          </div>

          {/* Coordinates badge */}
          <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-muted-foreground">
            {coordinates.lat.toFixed(4)}, {coordinates.lng.toFixed(4)}
          </div>
        </div>

        {/* Office Info */}
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-foreground mb-1">{name}</h3>
            <p className="text-sm text-muted-foreground">{fullAddress}</p>
          </div>

          {/* Get Directions Button */}
          <Button asChild variant="outline" className="w-full gap-2">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation className="h-4 w-4" />
              Get Directions
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
