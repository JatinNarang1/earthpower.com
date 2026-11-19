import type { Metadata } from 'next'
import Link from 'next/link'
import {
  FileText,
  Shield,
  CheckCircle,
  AlertTriangle,
  Building,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Scale
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service | Earth Power Battery',
  description:
    'Terms of Service and legal agreement governing the use of Earth Power Battery website, mobile applications, and LFP battery products.',
  openGraph: {
    title: 'Terms of Service - Earth Power Battery',
    description:
      'Terms of Service governing the use of Earth Power Battery website and Earth Power Battery mobile applications.',
    url: 'https://earthpowerbattery.com/terms',
  },
}

export default function TermsOfServicePage() {
  const lastUpdated = 'November 14, 2026'

  return (
    <div className="bg-earth-charcoal-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/10 bg-gradient-to-b from-earth-charcoal-800/80 via-earth-charcoal-900 to-earth-charcoal-900">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-earth-green-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-earth-green-500/10 border border-earth-green-500/30 text-earth-neon-green text-sm font-medium mb-6 backdrop-blur-sm">
            <Scale className="w-4 h-4 text-earth-neon-green" />
            <span>Legal Agreement &amp; Terms of Use</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-white mb-6 tracking-tight">
            Terms of <span className="gradient-text">Service</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Please read these Terms of Service carefully before using the <strong className="text-white">Earth Power Battery</strong> website, mobile applications, and battery management services.
          </p>

          <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
            <Calendar className="w-4 h-4 text-earth-neon-green" />
            <span>Last Updated: <strong className="text-gray-200">{lastUpdated}</strong></span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <div className="space-y-10 text-gray-300 leading-relaxed text-sm sm:text-base">
            <section className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <span className="w-8 h-8 rounded-lg bg-earth-green-500/20 text-earth-neon-green flex items-center justify-center text-sm mr-3">1</span>
                Agreement to Terms
              </h2>
              <p>
                By accessing or using the website at{' '}
                <Link href="/" className="text-earth-neon-green hover:underline">
                  https://earthpowerbattery.com
                </Link>{' '}
                and the Earth Power Battery mobile applications (collectively referred to as the &ldquo;Services&rdquo;), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the Services.
              </p>
            </section>

            <section className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <span className="w-8 h-8 rounded-lg bg-earth-green-500/20 text-earth-neon-green flex items-center justify-center text-sm mr-3">2</span>
                Use of Mobile Application &amp; Telemetry
              </h2>
              <p>
                The Earth Power Battery mobile application is designed to interface via Bluetooth Low Energy (BLE) with compatible Earth Power Battery Lithium Iron Phosphate (LiFePO4) battery packs and Battery Management Systems (BMS).
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-400 ml-2">
                <li>You agree to use the application solely for monitoring and diagnostics of your authorized Earth Power Battery hardware.</li>
                <li>You agree not to reverse-engineer, decompile, modify, or tamper with the application, firmware, or hardware communication protocols.</li>
                <li>Operating parameters and readings provided by the app are for informational monitoring; always adhere to safety guidelines outlined in the product manual.</li>
              </ul>
            </section>

            <section className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <span className="w-8 h-8 rounded-lg bg-earth-green-500/20 text-earth-neon-green flex items-center justify-center text-sm mr-3">3</span>
                Product Warranty &amp; Safety
              </h2>
              <p>
                Earth Power Battery LFP batteries are engineered with advanced safety features and smart BMS protections. Warranty terms are subject to the specific documentation provided with your purchase. Any tampering, unapproved cell modification, exposure to unauthorized charging parameters, or physical damage voids the manufacturer&apos;s warranty.
              </p>
            </section>

            <section className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <span className="w-8 h-8 rounded-lg bg-earth-green-500/20 text-earth-neon-green flex items-center justify-center text-sm mr-3">4</span>
                Intellectual Property
              </h2>
              <p>
                The Services and their original content, features, trademarks, logo, design, and functionality are and will remain the exclusive property of Earth Power Battery. Our trademarks and brand elements may not be used in connection with any product or service without prior written consent.
              </p>
            </section>

            <section className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <span className="w-8 h-8 rounded-lg bg-earth-green-500/20 text-earth-neon-green flex items-center justify-center text-sm mr-3">5</span>
                Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable Indian law, Earth Power Battery shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Services, or from improper battery handling or storage.
              </p>
            </section>

            <section className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <span className="w-8 h-8 rounded-lg bg-earth-green-500/20 text-earth-neon-green flex items-center justify-center text-sm mr-3">6</span>
                Governing Law &amp; Dispute Resolution
              </h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of India. Any disputes arising in connection with these Terms or the Services shall be subject to the exclusive jurisdiction of the competent courts in New Delhi, India.
              </p>
            </section>

            <section className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <span className="w-8 h-8 rounded-lg bg-earth-green-500/20 text-earth-neon-green flex items-center justify-center text-sm mr-3">7</span>
                Contact Information
              </h2>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2 text-sm text-gray-300">
                <p><strong>Earth Power Battery</strong></p>
                <p>G-960, DSIIDC Industrial Area Narela, New Delhi – 110040, India</p>
                <p>Phone: +011 41435047</p>
                <p>Email: <a href="mailto:contact@earthpowerbattery.com" className="text-earth-neon-green hover:underline">contact@earthpowerbattery.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
