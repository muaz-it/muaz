import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { Effects } from '@/components/Effects'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { JsonLd } from '@/components/JsonLd'
import { graph, organizationSchema } from '@/lib/schema'
import { SITE } from '@/lib/site'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], display: 'swap', weight: ['600', '700', '800'], variable: '--font-jakarta' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} | ${SITE.tagline}`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    siteName: SITE.name,
    images: [{ url: '/images/hero.webp', width: 1600, height: 1067, alt: `${SITE.name}: IT en online marketing` }],
  },
  twitter: { card: 'summary_large_image' },
  formatDetection: { telephone: true, email: true, address: false },
}

export const viewport: Viewport = { themeColor: '#060a1a', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${inter.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <head>
        {/* Zet .js vóór de eerste paint, zodat scroll-animaties alleen verbergen als JS draait. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a href="#inhoud" className="sr-only z-[60] rounded-xl bg-white px-4 py-3 font-bold text-night-950 focus:not-sr-only focus:fixed focus:top-4 focus:left-4">
          Direct naar de inhoud
        </a>
        <JsonLd data={graph(organizationSchema())} />
        <Header />
        <main id="inhoud" className="flex-1">{children}</main>
        <Footer />
        <Effects />
      </body>
    </html>
  )
}
