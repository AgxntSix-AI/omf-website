import { createFileRoute } from "@tanstack/react-router"
import {
  Hero,
  ServicesGrid,
  PartnersMarquee,
  AboutPreview,
  CTASection,
} from "@/features/home"

export const Route = createFileRoute("/")({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <Hero />
      <PartnersMarquee />
      <ServicesGrid />
      <AboutPreview />
      <CTASection />
    </>
  )
}
