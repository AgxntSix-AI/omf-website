import { useState } from "react"
import { createFileRoute, Link } from "@tanstack/react-router"
import {
  ArrowLeft,
  Camera,
  ChevronLeft,
  ChevronRight,
  X,
  Calendar,
  Filter,
  Image,
  Users,
  GraduationCap,
  PartyPopper,
  Award,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { BlurFade } from "@/components/magic-ui/blur-fade"

export const Route = createFileRoute("/about/gallery")({
  component: GalleryPage,
})

// Gallery image interface
interface GalleryImage {
  id: string
  title: string
  event: string
  category: "conference" | "training" | "social" | "awards"
  date: string
  color: string // gradient color for placeholder
}

// Sample gallery images (placeholder data)
const galleryImages: GalleryImage[] = [
  {
    id: "1",
    title: "Keynote Speaker Address",
    event: "Annual Advisor Conference 2025",
    category: "conference",
    date: "2025-11-15",
    color: "from-primary/30 to-accent/30",
  },
  {
    id: "2",
    title: "Networking Session",
    event: "Annual Advisor Conference 2025",
    category: "conference",
    date: "2025-11-15",
    color: "from-blue-500/30 to-primary/30",
  },
  {
    id: "3",
    title: "Awards Ceremony",
    event: "Annual Advisor Conference 2025",
    category: "conference",
    date: "2025-11-15",
    color: "from-accent/30 to-amber-500/30",
  },
  {
    id: "4",
    title: "Product Training Session",
    event: "Annual Advisor Conference 2025",
    category: "conference",
    date: "2025-11-14",
    color: "from-green-500/30 to-primary/30",
  },
  {
    id: "5",
    title: "Sun Life Workshop",
    event: "Toronto Training Day",
    category: "training",
    date: "2025-10-20",
    color: "from-purple-500/30 to-primary/30",
  },
  {
    id: "6",
    title: "Group Discussion",
    event: "Toronto Training Day",
    category: "training",
    date: "2025-10-20",
    color: "from-primary/30 to-blue-500/30",
  },
  {
    id: "7",
    title: "Compliance Seminar",
    event: "Toronto Training Day",
    category: "training",
    date: "2025-10-20",
    color: "from-teal-500/30 to-primary/30",
  },
  {
    id: "8",
    title: "Team Celebration",
    event: "Holiday Party 2025",
    category: "social",
    date: "2025-12-18",
    color: "from-red-500/30 to-accent/30",
  },
  {
    id: "9",
    title: "Office Festivities",
    event: "Holiday Party 2025",
    category: "social",
    date: "2025-12-18",
    color: "from-green-500/30 to-red-500/30",
  },
  {
    id: "10",
    title: "Gift Exchange",
    event: "Holiday Party 2025",
    category: "social",
    date: "2025-12-18",
    color: "from-amber-500/30 to-primary/30",
  },
  {
    id: "11",
    title: "Top Producer Award",
    event: "Awards Ceremony 2025",
    category: "awards",
    date: "2025-09-25",
    color: "from-accent/40 to-primary/30",
  },
  {
    id: "12",
    title: "Rising Star Recognition",
    event: "Awards Ceremony 2025",
    category: "awards",
    date: "2025-09-25",
    color: "from-primary/30 to-accent/40",
  },
]

const categoryInfo = {
  conference: { label: "Conferences", icon: Users, color: "bg-primary/10 text-primary" },
  training: { label: "Training", icon: GraduationCap, color: "bg-blue-500/10 text-blue-600" },
  social: { label: "Social Events", icon: PartyPopper, color: "bg-green-500/10 text-green-600" },
  awards: { label: "Awards", icon: Award, color: "bg-accent/20 text-accent-foreground" },
}

type CategoryFilter = "all" | "conference" | "training" | "social" | "awards"

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [filter, setFilter] = useState<CategoryFilter>("all")

  const filteredImages = filter === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === filter)

  const currentIndex = selectedImage
    ? filteredImages.findIndex(img => img.id === selectedImage.id)
    : -1

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1])
    }
  }

  const goToNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1])
    }
  }

  return (
    <div className="min-h-svh">
      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b">
        <div className="container py-4">
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <Link to="/about">
              <ArrowLeft className="h-4 w-4" />
              Back to About
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-muted py-20 lg:py-28">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="max-w-3xl">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <Camera className="h-7 w-7" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Event Gallery
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Explore photos from our conferences, training sessions, and company events. See the OM Financial community in action.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b">
        <div className="container">
          <BlurFade delay={0.2} inView>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-muted-foreground mr-4">
                <Filter className="h-4 w-4" />
                <span className="text-sm font-medium">Filter:</span>
              </div>
              <Button
                variant={filter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("all")}
              >
                All Photos
              </Button>
              {(Object.keys(categoryInfo) as Array<keyof typeof categoryInfo>).map((key) => {
                const cat = categoryInfo[key]
                return (
                  <Button
                    key={key}
                    variant={filter === key ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter(key)}
                    className="gap-2"
                  >
                    <cat.icon className="h-4 w-4" />
                    {cat.label}
                  </Button>
                )
              })}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                {filter === "all" ? "All Photos" : categoryInfo[filter].label}
              </h2>
              <p className="text-muted-foreground">
                {filteredImages.length} photo{filteredImages.length !== 1 ? "s" : ""} • Click to view full size
              </p>
            </div>
          </BlurFade>

          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {filteredImages.map((image, index) => (
                <BlurFade key={image.id} delay={0.1 + index * 0.03} inView>
                  <Card
                    className="overflow-hidden cursor-pointer group hover:shadow-lg transition-all"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className={`aspect-[4/3] bg-gradient-to-br ${image.color} flex items-center justify-center relative`}>
                      <Image className="h-8 w-8 text-foreground/20" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <Camera className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    <CardContent className="p-3">
                      <p className="font-medium text-sm text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                        {image.title}
                      </p>
                      <p className="text-xs text-muted-foreground line-clamp-1">
                        {image.event}
                      </p>
                    </CardContent>
                  </Card>
                </BlurFade>
              ))}
            </div>
          ) : (
            <Card className="max-w-md mx-auto">
              <CardContent className="py-12 text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
                  <Image className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No Photos Found</h3>
                <p className="text-muted-foreground mb-6">
                  No photos match the selected filter.
                </p>
                <Button variant="outline" onClick={() => setFilter("all")}>
                  View All Photos
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Event Stats */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Calendar className="h-7 w-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Our Events
              </h2>
              <p className="text-muted-foreground">
                Building community through memorable experiences.
              </p>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Users, label: "Annual Conferences", value: "50+" },
              { icon: GraduationCap, label: "Training Sessions", value: "200+" },
              { icon: PartyPopper, label: "Social Events", value: "25+" },
              { icon: Award, label: "Awards Given", value: "500+" },
            ].map((stat, index) => (
              <BlurFade key={stat.label} delay={0.2 + index * 0.05} inView>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <p className="text-3xl font-bold text-foreground mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <BlurFade delay={0.1} inView>
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground mb-6">
              <Calendar className="h-7 w-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Join Our Next Event
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Don't miss out on upcoming conferences, training sessions, and networking opportunities with the OM Financial community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/seminars">
                  View Upcoming Events
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-background/95 backdrop-blur-sm border-0">
          {selectedImage && (
            <div className="relative">
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-5 w-5" />
              </Button>

              {/* Image display */}
              <div className={`aspect-[16/10] bg-gradient-to-br ${selectedImage.color} flex items-center justify-center rounded-t-lg`}>
                <div className="text-center">
                  <Image className="h-20 w-20 text-foreground/20 mx-auto mb-4" />
                  <p className="text-muted-foreground">Photo placeholder</p>
                </div>
              </div>

              {/* Image info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${categoryInfo[selectedImage.category].color}`}>
                    {categoryInfo[selectedImage.category].label}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {formatDate(selectedImage.date)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {selectedImage.title}
                </h3>
                <p className="text-muted-foreground">
                  {selectedImage.event}
                </p>
              </div>

              {/* Navigation arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                <Button
                  variant="secondary"
                  size="icon"
                  className="pointer-events-auto shadow-lg disabled:opacity-30"
                  onClick={goToPrevious}
                  disabled={currentIndex <= 0}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="pointer-events-auto shadow-lg disabled:opacity-30"
                  onClick={goToNext}
                  disabled={currentIndex >= filteredImages.length - 1}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>

              {/* Image counter */}
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-background/80 px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {filteredImages.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
