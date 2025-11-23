import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ClientProviders from '@/components/ClientProviders'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Earth Power - Powering Electric Mobility | LFP Battery Solutions',
  description: 'Earth Power is India\'s emerging leader in LFP battery technology. Safe, efficient, and long-lasting power solutions for electric mobility and sustainable energy.',
  keywords: 'LFP battery, lithium iron phosphate, electric vehicle battery, EV battery India, sustainable energy, Earth Power',
  authors: [{ name: 'Earth Power' }],
  openGraph: {
    title: 'Earth Power - Powering Electric Mobility',
    description: 'India\'s emerging leader in LFP battery technology. Safe, efficient, and long-lasting power solutions.',
    url: 'https://earthpowerbattery.com',
    siteName: 'Earth Power',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Earth Power - Powering Electric Mobility',
    description: 'India\'s emerging leader in LFP battery technology',
    images: ['/og-image.png'],
  },
  metadataBase: new URL('https://earthpowerbattery.com'),
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#35bd38',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-earth-charcoal-900 font-sans antialiased flex flex-col">
        <ClientProviders>
          <Header />
          <main className="relative flex-1">
            {children}
          </main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  )
}
