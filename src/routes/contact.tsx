import { createFileRoute } from "@tanstack/react-router"
import { MessageSquare } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { BlurFade } from "@/components/magic-ui/blur-fade"

export const Route = createFileRoute("/contact")({
  component: ContactPage,
})

function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-muted">
      <div className="container py-20 lg:py-28">
        <div className="max-w-2xl mx-auto">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-8">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <MessageSquare className="h-8 w-8" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground">
                Send us a message and we'll get back to you as soon as possible.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <Card className="shadow-lg">
              <CardContent className="py-12">
                {/* GHL Widget Placeholder */}
                <div className="bg-muted/50 rounded-lg border-2 border-dashed border-muted-foreground/20 p-12 text-center min-h-[400px] flex flex-col items-center justify-center">
                  <MessageSquare className="h-16 w-16 text-muted-foreground/30 mb-6" />
                  <h2 className="text-xl font-semibold text-foreground mb-2">
                    GoHighLevel Chat Widget
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    The contact form widget will be embedded here.
                  </p>
                  <code className="text-xs bg-muted px-3 py-1 rounded text-muted-foreground">
                    Widget ID: [GHL_WIDGET_ID]
                  </code>
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </div>
    </div>
  )
}
