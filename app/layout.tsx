import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import './corporate.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ClientProviders from '@/components/ClientProviders'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap', weight: ['400', '500'] })

export const metadata: Metadata = {
  title: {
    default: 'Earth Power — LiFePO4 Battery Solutions',
    template: '%s — Earth Power',
  },
  description:
    'Earth Power — LiFePO4 energy storage batteries from 12.8 V to 96 V with Bluetooth BMS, datasheets and a 5-year warranty. Narela, New Delhi.',
  keywords: 'LFP battery, lithium iron phosphate, LiFePO4, energy storage battery India, inverter battery, Earth Power',
  authors: [{ name: 'Earth Power' }],
  openGraph: {
    title: 'Earth Power — LiFePO4 Battery Solutions',
    description: 'LiFePO4 energy storage batteries with Bluetooth BMS and a 5-year warranty.',
    url: 'https://earthpowerbattery.com',
    siteName: 'Earth Power',
    locale: 'en_IN',
    type: 'website',
  },
  metadataBase: new URL('https://earthpowerbattery.com'),
  icons: {
    icon: '/brand/earthpower-mark.png',
    shortcut: '/brand/earthpower-mark.png',
    apple: '/brand/earthpower-mark.png',
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
