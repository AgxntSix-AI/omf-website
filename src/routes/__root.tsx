import { createRootRoute, Outlet, ScrollRestoration } from '@tanstack/react-router'
import { Suspense, lazy } from 'react'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { NotFound } from '@/components/shared/not-found'
import { ErrorFallback } from '@/components/shared/error-boundary'

// Lazy load TanStack Router Devtools in development only
const TanStackRouterDevtools = import.meta.env.PROD
  ? () => null
  : lazy(() =>
      import('@tanstack/react-router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools,
      }))
    )

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
  errorComponent: ErrorFallback,
})

function RootLayout() {
  return (
    <>
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      <div className="relative flex min-h-svh flex-col">
        <SiteHeader />

        <main id="main-content" className="flex-1">
          <Outlet />
        </main>

        <SiteFooter />
      </div>

      <ScrollRestoration />

      <Suspense fallback={null}>
        <TanStackRouterDevtools position="bottom-right" />
      </Suspense>
    </>
  )
}
