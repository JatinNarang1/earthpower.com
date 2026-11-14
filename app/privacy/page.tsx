import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Shield,
  Lock,
  Eye,
  Smartphone,
  Bluetooth,
  MapPin,
  Mail,
  FileText,
  CheckCircle,
  Trash2,
  Bell,
  Database,
  AlertTriangle,
  ExternalLink,
  ChevronRight,
  Info,
  Calendar,
  Phone,
  Server,
  UserCheck,
  Building,
  Layers,
  Sparkles,
  Apple
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'App Privacy Policy | Earth Power Battery (iOS & Android)',
  description:
    'Official Privacy Policy for Earth Power Battery mobile application on Apple App Store (iOS) and Google Play Store (Android), and website services. Clear, transparent data safety and deletion practices.',
  keywords:
    'Earth Power Battery privacy policy, iOS privacy policy, Google play privacy policy, battery telemetry data safety, Earth Power Battery app privacy, App Store Guideline 5.1.1',
  openGraph: {
    title: 'App Privacy Policy - Earth Power Battery',
    description:
      'Clear & transparent privacy practices for Earth Power Battery across Apple App Store (iOS), Google Play Store (Android), and web platforms.',
    url: 'https://earthpowerbattery.com/privacy',
  },
}

export default function PrivacyPolicyPage() {
  const lastUpdated = 'November 14, 2026'
  const effectiveDate = 'November 14, 2026'

  return (
    <div className="bg-earth-charcoal-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/10 bg-gradient-to-b from-earth-charcoal-800/80 via-earth-charcoal-900 to-earth-charcoal-900">
        {/* Glow decoration */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-earth-green-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-10 w-72 h-72 bg-earth-neon-green/5 rounded-full blur-[90px] pointer-events-none" />

        <div className="container-custom relative z-10 text-center">
          {/* Top category pill */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-earth-neon-green animate-pulse" />
            <span>Mobile App Legal · Clear &amp; Transparent</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-white mb-6 tracking-tight">
            App Privacy <span className="gradient-text">Policy</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Welcome to <strong className="text-white">Earth Power Battery</strong>. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our official mobile application (&ldquo;<strong className="text-white">Earth Power Battery</strong>&rdquo;) on <strong className="text-white">iOS (Apple App Store)</strong>, <strong className="text-white">Android (Google Play Store)</strong>, and our web services.
          </p>

          {/* Compliance & Meta Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-gray-300 mb-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-earth-green-500/10 border border-earth-green-500/30 text-earth-neon-green">
              <Shield className="w-4 h-4 text-earth-neon-green" />
              <span>Apple App Store &amp; Google Play Store Compliant</span>
            </div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
              <Calendar className="w-4 h-4 text-earth-neon-green" />
              <span>Last Updated: <strong className="text-white ml-1">{lastUpdated}</strong></span>
            </div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
              <Smartphone className="w-4 h-4 text-earth-neon-green" />
              <span>App: <strong className="text-white ml-1">Earth Power Battery</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview Badges */}
      <section className="py-12 bg-white/[0.02] border-b border-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-earth-green-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-earth-green-500/10 flex items-center justify-center text-earth-neon-green mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white mb-2">No Sale of Personal Data</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                We never monetize, rent, or sell your personal details or battery telemetry to third parties or advertising brokers.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-earth-green-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-earth-green-500/10 flex items-center justify-center text-earth-neon-green mb-4">
                <Bluetooth className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white mb-2">Secure Bluetooth Telemetry</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Bluetooth permissions on iOS &amp; Android are strictly used to pair with your Earth Power Battery BMS for live status monitoring.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-earth-green-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-earth-green-500/10 flex items-center justify-center text-earth-neon-green mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white mb-2">Zero Cross-App Tracking</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                No tracking across third-party websites or apps. We respect Apple&apos;s App Tracking Transparency and Google Play Data Safety standards.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-earth-green-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-earth-green-500/10 flex items-center justify-center text-earth-neon-green mb-4">
                <Trash2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white mb-2">Instant Account Deletion</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Full user autonomy. Request account and personal data deletion anytime in-app or via our direct support email with a 30-day purge timeframe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Quick Links Sidebar */}
            <aside className="lg:col-span-4 order-2 lg:order-1">
              <div className="sticky top-28 p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                <h4 className="text-base font-bold text-white uppercase tracking-wider mb-4 pb-3 border-b border-white/10 flex items-center">
                  <FileText className="w-4 h-4 text-earth-neon-green mr-2" />
                  Table of Contents
                </h4>
                <nav className="space-y-2 text-sm">
                  {[
                    { id: 'collection', label: '01. Information We Collect' },
                    { id: 'usage', label: '02. Use of Your Information' },
                    { id: 'disclosure', label: '03. Disclosure of Your Information' },
                    { id: 'security', label: '04. Security of Your Information' },
                    { id: 'retention-deletion', label: '05. Data Retention & Deletion Practices' },
                    { id: 'permissions', label: '06. Mobile App Permissions (iOS & Android)' },
                    { id: 'apple-privacy', label: '07. Apple & Google Store Disclosures' },
                    { id: 'rights', label: '08. Your Data Rights' },
                    { id: 'children', label: '09. Children’s Privacy' },
                    { id: 'changes', label: '10. Changes to This Privacy Policy' },
                    { id: 'contact', label: '11. Contact Us' },
                  ].map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block py-1.5 px-3 rounded-lg text-gray-400 hover:text-earth-neon-green hover:bg-white/5 transition-all duration-200"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <div className="mt-8 pt-6 border-t border-white/10 text-xs text-gray-400 space-y-2">
                  <p className="flex items-center text-gray-300">
                    <Info className="w-4 h-4 text-earth-neon-green mr-2 flex-shrink-0" />
                    Need help or want to request account deletion?
                  </p>
                  <a
                    href="mailto:earthpowerjourney@gmail.com?subject=Account%20and%20Data%20Deletion%20Request"
                    className="inline-flex items-center text-earth-neon-green hover:underline font-medium"
                  >
                    <span>earthpowerjourney@gmail.com</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            </aside>

            {/* In-depth Policy Clauses */}
            <article className="lg:col-span-8 order-1 lg:order-2 space-y-12">
              {/* Introduction & Developer Box */}
              <div className="p-6 rounded-2xl bg-earth-green-500/10 border border-earth-green-500/20 text-gray-200">
                <p className="font-semibold text-earth-neon-green mb-1 flex items-center text-base">
                  <Building className="w-5 h-5 mr-2" /> Application Developer &amp; Data Controller:
                </p>
                <p className="text-sm leading-relaxed mt-2 text-gray-300">
                  <strong className="text-white">Entity:</strong> Earth Power Battery<br />
                  <strong className="text-white">Application Name:</strong> Earth Power Battery (iOS &amp; Android)<br />
                  <strong className="text-white">Registered Address:</strong> G.F. 960, Block G, DSIDC Industrial Area Narela, New Delhi – 110040, India<br />
                  <strong className="text-white">Official Contact Email:</strong> earthpowerjourney@gmail.com<br />
                  <strong className="text-white">Helpline Phone:</strong> +011 41435047<br />
                  <strong className="text-white">Official Website:</strong>{' '}
                  <Link href="https://earthpowerbattery.com" className="text-earth-neon-green hover:underline">
                    https://earthpowerbattery.com
                  </Link>
                </p>
              </div>

              {/* 01. Information We Collect */}
              <section id="collection" className="scroll-mt-28 p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-earth-green-500/20 text-earth-neon-green font-bold text-sm">
                    01
                  </span>
                  <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
                </div>

                <div className="space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base">
                  <p>
                    We collect information about you in a variety of ways to provide our battery monitoring and energy storage services. The information we may collect via the <strong className="text-white">Earth Power Battery</strong> mobile application and website includes:
                  </p>

                  {/* Personal Data */}
                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 space-y-3">
                    <h3 className="text-lg font-semibold text-white flex items-center">
                      <UserCheck className="w-5 h-5 text-earth-neon-green mr-2" />
                      Personal Data
                    </h3>
                    <p className="text-sm text-gray-400">
                      Personally identifiable information that you voluntarily provide to us when you register an account, activate product warranties, or request customer support, including:
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-300 ml-2">
                      <li><strong className="text-white">Contact Information:</strong> Name, Email Address, and Phone/WhatsApp Number.</li>
                      <li><strong className="text-white">Location/Address:</strong> City, State, and Postal Code (for dispatch, dealer assignment, or warranty service dispatch).</li>
                      <li><strong className="text-white">Account Identifiers:</strong> Unique user ID, registered battery serial numbers, and purchase invoice details.</li>
                      <li><strong className="text-white">Profile Role:</strong> Vehicle Operator, Fleet Manager, EV Dealer, or Service Technician.</li>
                    </ul>
                  </div>

                  {/* Hardware & Telemetry */}
                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 space-y-3">
                    <h3 className="text-lg font-semibold text-white flex items-center">
                      <Database className="w-5 h-5 text-earth-neon-green mr-2" />
                      Battery Telemetry &amp; BMS Diagnostics Data
                    </h3>
                    <p className="text-sm text-gray-400">
                      To provide live telemetry instrumentation and safety monitoring, the App communicates with the on-board Battery Management System (BMS) of your Earth Power Battery LFP battery pack:
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-300 ml-2">
                      <li>Total battery pack voltage (V), individual cell voltages, and cell balance metrics.</li>
                      <li>Real-time current (Amperes) during charging and discharging cycles.</li>
                      <li>State of Charge percentage (SoC %) and State of Health (SoH %).</li>
                      <li>Internal temperature sensor readings (ambient cell temperature, power MOSFET temp).</li>
                      <li>Cumulative charge/discharge cycle count and operational capacity.</li>
                      <li>BMS fault alarms (overvoltage, undervoltage, overcurrent, short-circuit, and high-temperature protection trips).</li>
                    </ul>
                  </div>

                  {/* Derivative Data */}
                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 space-y-3">
                    <h3 className="text-lg font-semibold text-white flex items-center">
                      <Smartphone className="w-5 h-5 text-earth-neon-green mr-2" />
                      Derivative &amp; Technical Device Data
                    </h3>
                    <p className="text-sm text-gray-400">
                      Information our servers and diagnostic tools automatically collect when you access the App:
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-300 ml-2">
                      <li>Mobile device manufacturer, hardware model, and Operating System version (iOS / Android).</li>
                      <li>App version, build number, and language preferences.</li>
                      <li>Diagnostic logs, connection logs, and crash traces to optimize Bluetooth performance.</li>
                      <li>IP address and approximate network connection type.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 02. Use of Your Information */}
              <section id="usage" className="scroll-mt-28 p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-earth-green-500/20 text-earth-neon-green font-bold text-sm">
                    02
                  </span>
                  <h2 className="text-2xl font-bold text-white">Use of Your Information</h2>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                  <p>
                    Having accurate information about your battery and account permits us to provide you with a smooth, efficient, and safe experience. Specifically, we may use information collected via the App to:
                  </p>
                  <ul className="space-y-3">
                    {[
                      {
                        title: 'Real-Time Telemetry & Monitoring',
                        desc: 'Deliver live battery dashboards, charge levels, estimated range, and cell health metrics to vehicle owners and fleet managers.',
                      },
                      {
                        title: 'Safety Alarms & Preventative Diagnostics',
                        desc: 'Detect high temperatures, deep discharge, or cell imbalances to send urgent notifications before cell degradation or safety risks occur.',
                      },
                      {
                        title: 'Account & Warranty Management',
                        desc: 'Authenticate genuine Earth Power Battery hardware, track warranty coverage, process claims, and maintain service records.',
                      },
                      {
                        title: 'Technical Support & Troubleshooting',
                        desc: 'Assist technicians and end-users in debugging connection issues, BMS fault codes, and charging queries.',
                      },
                      {
                        title: 'App Optimization & Firmware Improvements',
                        desc: 'Analyze usage trends to improve App responsiveness, Bluetooth connection reliability, and Over-The-Air (OTA) BMS firmware updates.',
                      },
                      {
                        title: 'Regulatory & Safety Compliance',
                        desc: 'Fulfill statutory consumer protection, tax, and industrial energy storage safety standards.',
                      },
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-earth-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white">{item.title}:</strong>{' '}
                          <span className="text-gray-400">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* 03. Disclosure of Your Information */}
              <section id="disclosure" className="scroll-mt-28 p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-earth-green-500/20 text-earth-neon-green font-bold text-sm">
                    03
                  </span>
                  <h2 className="text-2xl font-bold text-white">Disclosure of Your Information</h2>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                  <div className="p-4 rounded-xl bg-earth-green-500/10 border border-earth-green-500/30 text-white font-medium">
                    🛡️ <strong className="text-earth-neon-green">Strict Zero-Sale Guarantee:</strong> Earth Power Battery does not sell, rent, monetize, or trade your personal information or battery telemetry with third parties or data brokers.
                  </div>

                  <p>
                    We may share information we have collected about you in certain limited situations:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-400 ml-2">
                    <li>
                      <strong className="text-gray-200">Third-Party Service Providers:</strong> We may share your information with trusted infrastructure providers that perform services on our behalf, including cloud database hosting, server infrastructure, data analysis, email/SMS delivery, and customer service. All providers are bound by strict confidentiality obligations.
                    </li>
                    <li>
                      <strong className="text-gray-200">Authorized Dealers &amp; Service Centers:</strong> If you request on-site battery maintenance, inspection, or warranty replacement, your contact information and battery serial details may be shared with your local authorized Earth Power Battery technician.
                    </li>
                    <li>
                      <strong className="text-gray-200">Legal Requirements &amp; Safety:</strong> If required by law, subpoena, court order, or to prevent fraudulent activity or imminent bodily harm, we may disclose your information to lawful authorities.
                    </li>
                  </ul>
                </div>
              </section>

              {/* 04. Security of Your Information */}
              <section id="security" className="scroll-mt-28 p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-earth-green-500/20 text-earth-neon-green font-bold text-sm">
                    04
                  </span>
                  <h2 className="text-2xl font-bold text-white">Security of Your Information</h2>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                  <p>
                    We use administrative, technical, and physical security measures to help protect your personal information and battery telemetry:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="flex items-center space-x-2 text-earth-neon-green font-semibold mb-1">
                        <Lock className="w-4 h-4" />
                        <span>Encryption in Transit</span>
                      </div>
                      <p className="text-xs text-gray-400">
                        All data moving between the mobile application, web services, and cloud servers is secured using modern TLS 1.3 / HTTPS encryption.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="flex items-center space-x-2 text-earth-neon-green font-semibold mb-1">
                        <Server className="w-4 h-4" />
                        <span>Encryption at Rest</span>
                      </div>
                      <p className="text-xs text-gray-400">
                        User account databases and warranty registrations are encrypted using industry-standard AES-256 protocols.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="flex items-center space-x-2 text-earth-neon-green font-semibold mb-1">
                        <Bluetooth className="w-4 h-4" />
                        <span>Protected BLE Handshakes</span>
                      </div>
                      <p className="text-xs text-gray-400">
                        Bluetooth communication with the Earth Power Battery BMS uses authenticated device handshakes to prevent unauthorized tampering.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="flex items-center space-x-2 text-earth-neon-green font-semibold mb-1">
                        <Shield className="w-4 h-4" />
                        <span>Role-Based Access Control</span>
                      </div>
                      <p className="text-xs text-gray-400">
                        Access to customer information is strictly restricted to authorized engineering and customer support teams on a need-to-know basis.
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 italic">
                    While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our best efforts, no electronic transmission or cloud storage system is 100% impenetrable.
                  </p>
                </div>
              </section>

              {/* 05. Data Retention & Deletion Practices */}
              <section id="retention-deletion" className="scroll-mt-28 p-8 rounded-2xl bg-gradient-to-br from-white/[0.04] to-earth-green-500/10 border-2 border-earth-green-500/40 shadow-glow-sm">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-earth-green-500 text-earth-charcoal-900 font-bold text-sm">
                    05
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Data Retention and Deletion Practices</h2>
                    <span className="text-xs text-earth-neon-green font-semibold uppercase tracking-wider">
                      Apple App Store Guideline 5.1.1(v) &amp; Google Play Data Safety Mandate
                    </span>
                  </div>
                </div>

                <div className="space-y-5 text-gray-300 leading-relaxed text-sm sm:text-base">
                  <p>
                    We retain and manage your personal data in strict compliance with Apple and Google app distribution guidelines:
                  </p>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                    <h3 className="font-semibold text-white">Data Retention Period &amp; Criteria</h3>
                    <p className="text-sm text-gray-400">
                      We retain your Personal Data, Account Identifiers, and Battery Telemetry only for as long as your account remains active and for the necessary duration required to provide monitoring services, fulfill active product warranties, and maintain required safety logs.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                    <h3 className="font-semibold text-white">Post-Termination &amp; Anonymization</h3>
                    <p className="text-sm text-gray-400">
                      When you cease using the App or when your warranty concludes, we retain your profile data for up to 90 days to accommodate potential account reactivation. Following this period, or immediately upon a verified account deletion request, your personal identifiers are permanently erased or anonymized so that remaining historical telemetry cannot be linked back to you.
                    </p>
                  </div>

                  {/* Deletion Instructions */}
                  <div className="p-5 rounded-xl bg-earth-charcoal-900/90 border border-earth-green-500/30 space-y-3">
                    <h3 className="font-bold text-white text-base flex items-center">
                      <Trash2 className="w-5 h-5 text-earth-neon-green mr-2" />
                      How to Request Account &amp; Data Deletion:
                    </h3>
                    
                    <p className="text-sm text-gray-300">
                      You have the absolute right to request the complete deletion of your account and all associated personal and telemetry data at any time. You can initiate a deletion request by:
                    </p>

                    <div className="space-y-3 text-sm text-gray-300 pl-2">
                      <div>
                        <strong className="text-white block mb-0.5">Method 1: In-App Account Deletion (Apple &amp; Android)</strong>
                        <p className="text-gray-400">
                          Within the Earth Power Battery mobile app, go to <code className="px-2 py-0.5 rounded bg-white/10 text-earth-neon-green text-xs">Settings &gt; Profile &gt; Delete Account &amp; Erase Data</code>. Confirm the prompt to initiate the immediate purge of your account.
                        </p>
                      </div>

                      <div className="pt-2 border-t border-white/10">
                        <strong className="text-white block mb-0.5">Method 2: Direct Email Request (Fast-Track)</strong>
                        <p className="text-gray-400 mb-2">
                          Email our privacy and support team directly at:
                        </p>
                        <a
                          href="mailto:earthpowerjourney@gmail.com?subject=Account%20and%20Data%20Deletion%20Request"
                          className="inline-flex items-center px-4 py-2 rounded-lg bg-earth-green-500 text-earth-charcoal-900 font-bold hover:bg-earth-neon-green transition-colors text-sm"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          earthpowerjourney@gmail.com
                        </a>
                        <p className="text-xs text-gray-400 mt-2">
                          Subject Line: <code className="text-earth-neon-green">&quot;Account &amp; Data Deletion Request&quot;</code> along with your registered phone number, email, or battery serial number.
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/10 text-xs text-gray-300">
                      <strong className="text-white">Deletion Timeline:</strong> Upon verification of your request, your active account data will be permanently erased from our primary databases within <strong className="text-white">30 business days</strong>, except where retention is strictly mandated by statutory tax, accounting, or recall regulations.
                    </div>
                  </div>
                </div>
              </section>

              {/* 06. Mobile App Permissions */}
              <section id="permissions" className="scroll-mt-28 p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-earth-green-500/20 text-earth-neon-green font-bold text-sm">
                    06
                  </span>
                  <h2 className="text-2xl font-bold text-white">Mobile App Permissions (iOS &amp; Android)</h2>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                  <p>
                    To enable smart telemetry, hardware pairing, and safety alerts, the Earth Power Battery app requests the following system permissions across platforms:
                  </p>

                  <div className="space-y-4">
                    {/* Bluetooth */}
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 rounded-lg bg-earth-green-500/10 text-earth-neon-green flex-shrink-0 mt-1">
                          <Bluetooth className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">
                            Bluetooth &amp; Nearby Accessories (iOS &amp; Android)
                          </h4>
                          <p className="text-xs text-earth-neon-green/90 mt-0.5">
                            iOS: <code>NSBluetoothAlwaysUsageDescription</code> / Android: <code>BLUETOOTH_SCAN, BLUETOOTH_CONNECT</code>
                          </p>
                          <p className="text-sm text-gray-400 mt-1">
                            <strong>Why we need it:</strong> Required to scan for, discover, securely pair with, and stream real-time operational telemetry from your Earth Power Battery BMS.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 rounded-lg bg-earth-green-500/10 text-earth-neon-green flex-shrink-0 mt-1">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">
                            Location Permissions (Android BLE Discovery)
                          </h4>
                          <p className="text-xs text-earth-neon-green/90 mt-0.5">
                            Android: <code>ACCESS_FINE_LOCATION / ACCESS_COARSE_LOCATION</code>
                          </p>
                          <p className="text-sm text-gray-400 mt-1">
                            <strong>Operating System Context:</strong> On Android operating systems, Bluetooth Low Energy (BLE) scanning APIs are categorized under location permissions by the OS.
                          </p>
                          <p className="text-sm text-earth-neon-green/90 mt-1.5 font-medium">
                            <strong>Our Commitment:</strong> Earth Power Battery does NOT track, log, or sell your physical GPS location or journey routes. Location access is strictly used to trigger Android BLE hardware scanning.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Camera */}
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 rounded-lg bg-earth-green-500/10 text-earth-neon-green flex-shrink-0 mt-1">
                          <Eye className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">
                            Camera Access (Optional)
                          </h4>
                          <p className="text-xs text-earth-neon-green/90 mt-0.5">
                            iOS: <code>NSCameraUsageDescription</code> / Android: <code>CAMERA</code>
                          </p>
                          <p className="text-sm text-gray-400 mt-1">
                            <strong>Why we need it:</strong> Only requested when you choose to scan the QR code / barcode printed on the battery pack casing for rapid pairing, warranty registration, or attaching photos to service requests.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Notifications */}
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 rounded-lg bg-earth-green-500/10 text-earth-neon-green flex-shrink-0 mt-1">
                          <Bell className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">
                            Push Notifications
                          </h4>
                          <p className="text-xs text-earth-neon-green/90 mt-0.5">
                            iOS: Apple Push Notification service (APNs) / Android: <code>POST_NOTIFICATIONS</code>
                          </p>
                          <p className="text-sm text-gray-400 mt-1">
                            <strong>Why we need it:</strong> Used to alert you to critical safety alarms (e.g., cell over-temperature warning, deep discharge alert, BMS protection trip, or service updates).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 mt-3">
                    You can grant or revoke any of these permissions at any time via your device system settings:
                    <br />
                    • <strong className="text-gray-300">iOS:</strong> Settings &gt; Earth Power Battery
                    <br />
                    • <strong className="text-gray-300">Android:</strong> Settings &gt; Apps &gt; Earth Power Battery &gt; Permissions
                  </p>
                </div>
              </section>

              {/* 07. Apple & Google App Store Disclosures */}
              <section id="apple-privacy" className="scroll-mt-28 p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-earth-green-500/20 text-earth-neon-green font-bold text-sm">
                    07
                  </span>
                  <h2 className="text-2xl font-bold text-white">Apple &amp; Google Store Privacy Disclosures</h2>
                </div>

                <div className="space-y-5 text-gray-300 leading-relaxed text-sm sm:text-base">
                  <p>
                    For complete transparency as required by the <strong className="text-white">Apple App Store Privacy Details (Nutrition Labels)</strong> and the <strong className="text-white">Google Play Data Safety Section</strong>:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                      <h4 className="font-semibold text-white text-sm flex items-center">
                        <CheckCircle className="w-4 h-4 text-earth-neon-green mr-1.5" />
                        Data Used to Track You
                      </h4>
                      <p className="text-xs text-gray-400">
                        <strong className="text-earth-neon-green">None.</strong> Earth Power Battery does NOT track users across apps and websites owned by other companies for advertising purposes.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                      <h4 className="font-semibold text-white text-sm flex items-center">
                        <UserCheck className="w-4 h-4 text-earth-neon-green mr-1.5" />
                        Data Linked to You
                      </h4>
                      <p className="text-xs text-gray-400">
                        Contact Info (Name, Email, Phone) and User Identifiers (when you register an account or battery warranty).
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                      <h4 className="font-semibold text-white text-sm flex items-center">
                        <Database className="w-4 h-4 text-earth-neon-green mr-1.5" />
                        Data Not Linked to You
                      </h4>
                      <p className="text-xs text-gray-400">
                        Anonymous diagnostics, crash logs, and aggregated battery performance metrics used strictly for app stability.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 08. Your Data Rights */}
              <section id="rights" className="scroll-mt-28 p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-earth-green-500/20 text-earth-neon-green font-bold text-sm">
                    08
                  </span>
                  <h2 className="text-2xl font-bold text-white">Your Data Rights</h2>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                  <p>
                    Depending on your location and applicable data protection regulations (such as the Digital Personal Data Protection Act, 2023 - DPDP Act, and international standards), you have specific rights regarding your personal data:
                  </p>
                  <ul className="space-y-2.5 text-sm text-gray-300">
                    <li className="flex items-start space-x-2">
                      <ChevronRight className="w-4 h-4 text-earth-neon-green flex-shrink-0 mt-1" />
                      <span><strong className="text-white">Access and Portability:</strong> You can request a copy of the personal information we hold about you.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ChevronRight className="w-4 h-4 text-earth-neon-green flex-shrink-0 mt-1" />
                      <span><strong className="text-white">Correction:</strong> You can request that we rectify any inaccurate, incomplete, or outdated data.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ChevronRight className="w-4 h-4 text-earth-neon-green flex-shrink-0 mt-1" />
                      <span><strong className="text-white">Deletion (&ldquo;Right to be Forgotten&rdquo;):</strong> You can request that we delete your personal data, subject to Section 05.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ChevronRight className="w-4 h-4 text-earth-neon-green flex-shrink-0 mt-1" />
                      <span><strong className="text-white">Revoke Permissions:</strong> You can disable Bluetooth, Camera, or Notification access anytime in device settings.</span>
                    </li>
                  </ul>
                  <p className="text-xs text-gray-400">
                    To exercise any of these rights, please email us directly at <a href="mailto:earthpowerjourney@gmail.com" className="text-earth-neon-green hover:underline">earthpowerjourney@gmail.com</a>.
                  </p>
                </div>
              </section>

              {/* 09. Children's Privacy */}
              <section id="children" className="scroll-mt-28 p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-earth-green-500/20 text-earth-neon-green font-bold text-sm">
                    09
                  </span>
                  <h2 className="text-2xl font-bold text-white">Children’s Privacy</h2>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                  <p>
                    The Earth Power Battery mobile app and battery systems are engineered for commercial, industrial, and adult consumer electric mobility applications (vehicle owners, fleet operators, dealers, and technicians).
                  </p>
                  <p>
                    Our services are not intended for use by children under the age of 13 (or under 16 where applicable). We do not knowingly solicit or collect personal identifiable information from children. If we discover that a child under 13 has provided personal data to us, we take immediate steps to permanently delete such information. If you believe your child has submitted data to us, please notify us immediately at <a href="mailto:earthpowerjourney@gmail.com" className="text-earth-neon-green hover:underline">earthpowerjourney@gmail.com</a>.
                  </p>
                </div>
              </section>

              {/* 10. Changes to This Privacy Policy */}
              <section id="changes" className="scroll-mt-28 p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-earth-green-500/20 text-earth-neon-green font-bold text-sm">
                    10
                  </span>
                  <h2 className="text-2xl font-bold text-white">Changes to This Privacy Policy</h2>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                  <p>
                    We reserve the right to make changes to this Privacy Policy at any time and for any reason to reflect updates in our mobile applications, hardware technology, or applicable store policies.
                  </p>
                  <p>
                    We will alert you about any changes by updating the &ldquo;Last Updated&rdquo; date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates. Continued use of the App or website after the date of an updated policy constitutes acceptance of the changes.
                  </p>
                </div>
              </section>

              {/* 11. Contact Us */}
              <section id="contact" className="scroll-mt-28 p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-earth-green-500/20 text-earth-neon-green font-bold text-sm">
                    11
                  </span>
                  <h2 className="text-2xl font-bold text-white">Contact Us</h2>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                  <p>
                    If you have questions, comments, or data deletion requests regarding this Privacy Policy, please contact our support team at:
                  </p>

                  <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 space-y-4">
                    <div className="flex items-start space-x-3">
                      <Building className="w-5 h-5 text-earth-neon-green flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-white text-base">Earth Power Battery Support</h4>
                        <p className="text-sm text-gray-400">Attn: Privacy &amp; Data Protection Team</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-earth-neon-green flex-shrink-0 mt-1" />
                      <p className="text-sm text-gray-300">
                        G.F. 960, Block G, DSIDC Industrial Area Narela,<br />
                        New Delhi – 110040, India
                      </p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-earth-neon-green flex-shrink-0" />
                      <a href="tel:+01141435047" className="text-sm text-gray-300 hover:text-earth-neon-green transition-colors">
                        +011 41435047
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-earth-neon-green flex-shrink-0" />
                      <a href="mailto:earthpowerjourney@gmail.com" className="text-sm text-earth-neon-green hover:underline">
                        earthpowerjourney@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}
