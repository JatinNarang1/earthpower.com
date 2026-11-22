import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import './corporate.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ClientProviders from '@/components/ClientProviders'
import StructuredData from '@/components/ep/StructuredData'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap', weight: ['400', '500'] })

export const metadata: Metadata = {
  title: {
    default: 'Earth Power — LiFePO4 Battery Solutions',
    template: '%s — Earth Power',
  },
  description:
    'Earth Power — LiFePO4 batteries from 12.8 V to 480 V: energy storage, two-wheeler, high-voltage and rack systems with Bluetooth BMS and downloadable datasheets. Narela, New Delhi.',
  keywords: 'LFP battery, lithium iron phosphate, LiFePO4, energy storage battery India, inverter battery, Earth Power',
  authors: [{ name: 'Earth Power' }],
  applicationName: 'Earth Power Battery',
  alternates: { canonical: './' },
  openGraph: {
    title: 'Earth Power — LiFePO4 Battery Solutions',
    description: 'LiFePO4 batteries with Bluetooth BMS for energy storage, two-wheelers, high-voltage and rack systems.',
    url: 'https://www.earthpowerbattery.com',
    siteName: 'Earth Power Battery',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/icons/og-image.png', width: 1200, height: 630, alt: 'Earth Power logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Earth Power — LiFePO4 Battery Solutions',
    description: 'LiFePO4 batteries with Bluetooth BMS for energy storage, two-wheelers, high-voltage and rack systems.',
    images: ['/icons/og-image.png'],
  },
  metadataBase: new URL('https://www.earthpowerbattery.com'),
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icons/icon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icons/icon-96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B1F14',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${mono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <StructuredData />
        <ClientProviders>
          <Header />
          <main id="main" tabIndex={-1} className="relative flex-1">
            {children}
          </main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  )
}
