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
  Building
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Earth Power Mobile App & Web',
  description:
    'Comprehensive Privacy Policy for Earth Power website and Google Play mobile application. Fully compliant with Google Play Developer Policy, user data safety, and data deletion requirements.',
  keywords:
    'Earth Power privacy policy, Google play privacy policy, battery telemetry data safety, Earth Power app privacy',
  openGraph: {
    title: 'Privacy Policy - Earth Power',
    description:
      'Understand how Earth Power collects, protects, and manages user information and battery telemetry across our mobile app and website.',
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
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-earth-green-500/10 border border-earth-green-500/30 text-earth-neon-green text-sm font-medium mb-6 backdrop-blur-sm">
            <Shield className="w-4 h-4 text-earth-neon-green" />
            <span>Google Play Developer Policy & Data Safety Compliant</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-white mb-6 tracking-tight">
            Privacy <span className="gradient-text">Policy</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            At <strong className="text-white">Earth Power</strong>, we are committed to safeguarding your privacy and ensuring transparency in how our mobile application and web services handle your personal and device information.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-earth-neon-green" />
              <span>Last Updated: <strong className="text-gray-200">{lastUpdated}</strong></span>
            </div>
            <div className="hidden sm:block text-gray-600">•</div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-earth-green-500" />
              <span>Effective Date: <strong className="text-gray-200">{effectiveDate}</strong></span>
            </div>
            <div className="hidden sm:block text-gray-600">•</div>
            <div className="flex items-center space-x-2">
              <Smartphone className="w-4 h-4 text-earth-neon-green" />
              <span>App: <strong className="text-gray-200">Earth Power Companion App (Android)</strong></span>
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
              <h3 className="font-bold text-white mb-2">Local Bluetooth Telemetry</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Bluetooth & Location permissions are strictly used to pair with your Earth Power Battery BMS for real-time monitoring.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-earth-green-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-earth-green-500/10 flex items-center justify-center text-earth-neon-green mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white mb-2">Encrypted Data In Transit</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                All cloud communications utilize industry-standard TLS 1.3 encryption, ensuring strict data security and protection.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-earth-green-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-earth-green-500/10 flex items-center justify-center text-earth-neon-green mb-4">
                <Trash2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white mb-2">Instant Data Deletion</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                You have full control. Request account and personal data deletion anytime in-app or via our direct support email.
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
                    { id: 'introduction', label: '1. Introduction & Developer Identity' },
                    { id: 'data-collected', label: '2. Information We Collect' },
                    { id: 'permissions', label: '3. Mobile App Permissions (Android)' },
                    { id: 'how-we-use', label: '4. How We Use Your Information' },
                    { id: 'sharing', label: '5. Third-Party Sharing & Transfers' },
                    { id: 'security', label: '6. Data Security Practices' },
                    { id: 'retention', label: '7. Data Retention Policy' },
                    { id: 'deletion', label: '8. Account & Data Deletion (Play Store)' },
                    { id: 'children', label: '9. Children’s Privacy' },
                    { id: 'user-rights', label: '10. Your Rights & Choices' },
                    { id: 'contact', label: '11. Grievance Officer & Contact' },
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
                    href="mailto:earthpowerjourney@gmail.com?subject=Data%20Deletion%20Request"
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
              {/* 1. Introduction */}
              <section id="introduction" className="scroll-mt-28 p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-earth-green-500/20 text-earth-neon-green font-bold text-sm">
                    1
                  </span>
                  <h2 className="text-2xl font-bold text-white">Introduction & Developer Identity</h2>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                  <p>
                    This Privacy Policy governs the manner in which <strong className="text-white">Earth Power</strong> (hereinafter referred to as &ldquo;Earth Power&rdquo;, &ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, processes, maintains, stores, and discloses information collected from users (each, a &ldquo;User&rdquo;) of our official mobile application (&ldquo;<strong className="text-white">Earth Power</strong>&rdquo; available on the Google Play Store) and our website located at{' '}
                    <Link href="https://earthpowerbattery.com" className="text-earth-neon-green hover:underline">
                      https://earthpowerbattery.com
                    </Link>.
                  </p>
                  <p>
                    Earth Power is India&apos;s emerging manufacturer of advanced Lithium Iron Phosphate (LiFePO4 / LFP) battery packs, engineered for electric mobility (E-Rickshaws, EV 2-wheelers, 3-wheelers) and industrial energy storage systems.
                  </p>
                  <div className="p-4 rounded-xl bg-earth-green-500/10 border border-earth-green-500/20 text-gray-200">
                    <p className="font-semibold text-earth-neon-green mb-1 flex items-center">
                      <Building className="w-4 h-4 mr-2" /> Official Developer Entity:
                    </p>
                    <p className="text-sm">
                      <strong>Organization:</strong> Earth Power<br />
                      <strong>Operational Address:</strong> G.F. 960, Block G, DSIDC Industrial Area Narela, New Delhi – 110040, India<br />
                      <strong>Official Email:</strong> earthpowerjourney@gmail.com<br />
                      <strong>Customer Helpline:</strong> +011 41435047
                    </p>
                  </div>
                  <p>
                    By downloading, installing, accessing, or using our mobile application or website, you consent to the data collection and practices described in this Privacy Policy. If you do not agree with this policy, please do not use our services.
                  </p>
                </div>
              </section>

              {/* 2. Information We Collect */}
              <section id="data-collected" className="scroll-mt-28 p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-earth-green-500/20 text-earth-neon-green font-bold text-sm">
                    2
                  </span>
                  <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
                </div>
                <div className="space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base">
                  <p>
                    We collect only the minimum data required to facilitate real-time battery status monitoring, ensure customer safety, validate warranties, and optimize product performance:
                  </p>

                  {/* Subsection A */}
                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 space-y-3">
                    <h3 className="text-lg font-semibold text-white flex items-center">
                      <UserCheck className="w-5 h-5 text-earth-neon-green mr-2" />
                      A. Personal Information (Provided Voluntarily)
                    </h3>
                    <p className="text-sm text-gray-400">
                      When you submit a contact inquiry, request a dealer partnership, register your battery warranty, or create an in-app user profile, we may collect:
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-300 ml-2">
                      <li>Full Name and Business / Fleet Name</li>
                      <li>Contact Phone Number and WhatsApp Number</li>
                      <li>Email Address</li>
                      <li>City, State, and Postal Code (for dispatch or warranty service dispatch)</li>
                      <li>Battery Serial Number and Date of Purchase</li>
                    </ul>
                  </div>

                  {/* Subsection B */}
                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 space-y-3">
                    <h3 className="text-lg font-semibold text-white flex items-center">
                      <Database className="w-5 h-5 text-earth-neon-green mr-2" />
                      B. Battery Telemetry & BMS Diagnostics Data
                    </h3>
                    <p className="text-sm text-gray-400">
                      When your mobile device connects to an Earth Power Smart Battery via Bluetooth Low Energy (BLE), the app reads telemetry parameters directly from the on-board Battery Management System (BMS):
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-300 ml-2">
                      <li>Total Pack Voltage (V), Individual Cell Voltages, and Cell Balance Status</li>
                      <li>Real-time Current (Amperes) during Charge and Discharge</li>
                      <li>State of Charge percentage (SoC %) and State of Health (SoH %)</li>
                      <li>Internal Temperature Sensors (MOSFET, Cell ambient temp)</li>
                      <li>Total Cumulative Charge/Discharge Cycles</li>
                      <li>BMS Fault Status codes (Overvoltage, Undervoltage, Overcurrent, Short-circuit protection events)</li>
                    </ul>
                    <p className="text-xs text-gray-400 italic">
                      *Note: BMS telemetry is processed locally on your device for live instrumentation display. Aggregated diagnostics are synced to our secure cloud only for warranty validation and safety alerts.
                    </p>
                  </div>

                  {/* Subsection C */}
                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 space-y-3">
                    <h3 className="text-lg font-semibold text-white flex items-center">
                      <Smartphone className="w-5 h-5 text-earth-neon-green mr-2" />
                      C. Device & Technical Information
                    </h3>
                    <p className="text-sm text-gray-400">
                      To ensure app compatibility, prevent crashes, and deliver stable Bluetooth connectivity, we automatically collect basic technical logs:
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-300 ml-2">
                      <li>Device Model, Manufacturer, and Hardware specifications</li>
                      <li>Android Operating System version</li>
                      <li>App Version and Build Number</li>
                      <li>Crash reports and anonymous performance metrics</li>
                      <li>IP address and approximate network connection type (Wi-Fi/Cellular)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 3. Android Permissions */}
              <section id="permissions" className="scroll-mt-28 p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-earth-green-500/20 text-earth-neon-green font-bold text-sm">
                    3
                  </span>
                  <h2 className="text-2xl font-bold text-white">Mobile App Permissions (Android & Google Play)</h2>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                  <p>
                    In accordance with Google Play Developer Policies, we provide complete, transparent disclosures regarding why the Earth Power Android application requests specific system permissions:
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
                            Bluetooth & Nearby Devices (<code className="text-xs text-earth-neon-green">BLUETOOTH_SCAN, BLUETOOTH_CONNECT</code>)
                          </h4>
                          <p className="text-sm text-gray-400 mt-1">
                            <strong>Purpose:</strong> Required to scan for, discover, establish a secure wireless connection with, and receive real-time telemetry from the smart BMS integrated into your Earth Power LFP Battery.
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
                            Location Permission (<code className="text-xs text-earth-neon-green">ACCESS_FINE_LOCATION / ACCESS_COARSE_LOCATION</code>)
                          </h4>
                          <p className="text-sm text-gray-400 mt-1">
                            <strong>Android OS Requirement:</strong> On Android devices (Android 6.0 through 11, and BLE scanning APIs), the Android OS technically groups Bluetooth Low Energy (BLE) peripheral scanning under Location permissions.
                          </p>
                          <p className="text-sm text-earth-neon-green/90 mt-2 font-medium">
                            <strong>Policy Commitment:</strong> Earth Power does NOT monitor, record, store, or sell your physical geographic coordinates or track your real-time travel movements. Location permission is utilized solely to facilitate the discovery of nearby BLE battery hardware.
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
                            Camera Access (<code className="text-xs text-earth-neon-green">CAMERA</code>) - Optional
                          </h4>
                          <p className="text-sm text-gray-400 mt-1">
                            <strong>Purpose:</strong> Only requested when you choose to scan the QR code printed on your Earth Power battery casing for fast Bluetooth pairing, instant warranty verification, or when uploading a picture of an installation during support ticket creation.
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
                            Push Notifications (<code className="text-xs text-earth-neon-green">POST_NOTIFICATIONS</code>)
                          </h4>
                          <p className="text-sm text-gray-400 mt-1">
                            <strong>Purpose:</strong> Used to alert vehicle operators and fleet owners to critical safety events (e.g., low state of charge warning, high battery temperature alert, cell protection trip, or warranty status updates).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    You can grant or revoke these permissions at any time through your Android device settings (<span className="text-gray-300">Settings &gt; Apps &gt; Earth Power &gt; Permissions</span>).
                  </p>
                </div>
              </section>

              {/* 4. How We Use */}
              <section id="how-we-use" className="scroll-mt-28 p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-earth-green-500/20 text-earth-neon-green font-bold text-sm">
                    4
                  </span>
                  <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                  <p>
                    Earth Power uses the data collected strictly for legitimate business, operational, and safety purposes, including:
                  </p>
                  <ul className="space-y-3">
                    {[
                      {
                        title: 'Telemetry Visualization & Instrumentation',
                        desc: 'Displaying real-time battery voltage, current, cell balance, and remaining capacity to drivers and fleet managers.',
                      },
                      {
                        title: 'Proactive Safety Alarms & Battery Health',
                        desc: 'Detecting hazardous operating conditions (such as extreme heat, overcharging, or deep discharge) to protect operators and prolong battery lifespan.',
                      },
                      {
                        title: 'Warranty Authentication & Customer Support',
                        desc: 'Verifying genuine Earth Power products, tracking warranty periods, processing claims, and addressing inquiries submitted via phone or email.',
                      },
                      {
                        title: 'App Stability & Troubleshooting',
                        desc: 'Diagnosing technical bugs, optimizing Bluetooth connectivity across diverse Android hardware, and preventing unauthorized app tampering.',
                      },
                      {
                        title: 'Legal Compliance',
                        desc: 'Fulfilling tax, consumer protection, and industrial safety compliance obligations under applicable law.',
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

              {/* 5. Sharing */}
              <section id="sharing" className="scroll-mt-28 p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-earth-green-500/20 text-earth-neon-green font-bold text-sm">
                    5
                  </span>
                  <h2 className="text-2xl font-bold text-white">Third-Party Sharing & Transfers</h2>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                  <div className="p-4 rounded-xl bg-earth-green-500/10 border border-earth-green-500/30 text-white font-medium">
                    🛡️ <strong className="text-earth-neon-green">Strict Zero-Sale Guarantee:</strong> Earth Power does not sell, trade, license, or rent Users&apos; personal identification information or vehicle telemetry to any third parties for advertising or commercial marketing.
                  </div>
                  <p>
                    We may disclose information to third parties only under the following limited and controlled conditions:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-400 ml-2">
                    <li>
                      <strong className="text-gray-200">Authorized Infrastructure Providers:</strong> Trusted third-party cloud hosting and database services that assist us in operating our services, subject to strict confidentiality and data protection agreements.
                    </li>
                    <li>
                      <strong className="text-gray-200">Transactional Communications:</strong> Email and SMS delivery gateways (such as transactional mail servers) strictly for delivering one-time passwords, warranty confirmations, or safety alerts.
                    </li>
                    <li>
                      <strong className="text-gray-200">Legal Obligations:</strong> When mandated by applicable statutory law, judicial order, government subpoena, or to protect the safety, rights, or property of Earth Power, our users, or the general public.
                    </li>
                  </ul>
                </div>
              </section>

              {/* 6. Security */}
              <section id="security" className="scroll-mt-28 p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-earth-green-500/20 text-earth-neon-green font-bold text-sm">
                    6
                  </span>
                  <h2 className="text-2xl font-bold text-white">Data Security Practices</h2>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                  <p>
                    We adopt industry-standard data collection, storage, and processing practices and technical security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal data:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="flex items-center space-x-2 text-earth-neon-green font-semibold mb-1">
                        <Lock className="w-4 h-4" />
                        <span>Encryption in Transit</span>
                      </div>
                      <p className="text-xs text-gray-400">
                        All data transmitted between the Earth Power mobile app, web portal, and backend servers is encrypted using modern TLS 1.3 / HTTPS protocols.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="flex items-center space-x-2 text-earth-neon-green font-semibold mb-1">
                        <Server className="w-4 h-4" />
                        <span>Encryption at Rest</span>
                      </div>
                      <p className="text-xs text-gray-400">
                        Sensitive user records and warranty registration databases are encrypted using AES-256 standard encryption on secure servers.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="flex items-center space-x-2 text-earth-neon-green font-semibold mb-1">
                        <Shield className="w-4 h-4" />
                        <span>Role-Based Access</span>
                      </div>
                      <p className="text-xs text-gray-400">
                        Access to customer data is strictly restricted to verified technical support and quality personnel on a need-to-know basis.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="flex items-center space-x-2 text-earth-neon-green font-semibold mb-1">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Security Auditing</span>
                      </div>
                      <p className="text-xs text-gray-400">
                        We regularly review and audit our software components and API endpoints against vulnerabilities to prevent unauthorized intrusion.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 7. Retention */}
              <section id="retention" className="scroll-mt-28 p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-earth-green-500/20 text-earth-neon-green font-bold text-sm">
                    7
                  </span>
                  <h2 className="text-2xl font-bold text-white">Data Retention Policy</h2>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                  <p>
                    We retain personal data only for as long as necessary to fulfill the purposes for which it was collected:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-400 ml-2">
                    <li>
                      <strong className="text-gray-200">Account & Profile Information:</strong> Retained for the duration of your active account or while your battery warranty remains in effect.
                    </li>
                    <li>
                      <strong className="text-gray-200">Battery Diagnostics & Telemetry Logs:</strong> Retained for an operational period of up to 12 months for warranty validation, research, and product enhancement, after which it is anonymized or purged.
                    </li>
                    <li>
                      <strong className="text-gray-200">Legal & Tax Records:</strong> Certain transaction receipts and warranty claim documentation may be retained for statutory periods as required under Indian commercial law.
                    </li>
                  </ul>
                </div>
              </section>

              {/* 8. Deletion Mandate */}
              <section id="deletion" className="scroll-mt-28 p-8 rounded-2xl bg-gradient-to-br from-white/[0.04] to-earth-green-500/10 border-2 border-earth-green-500/40 shadow-glow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-earth-green-500 text-earth-charcoal-900 font-bold text-sm">
                    8
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Account & Data Deletion Policy</h2>
                    <span className="text-xs text-earth-neon-green font-semibold uppercase tracking-wider">
                      Google Play Store Data Safety Requirement
                    </span>
                  </div>
                </div>

                <div className="space-y-4 text-gray-200 leading-relaxed text-sm sm:text-base">
                  <p>
                    In full adherence with <strong className="text-white">Google Play Developer Policies regarding User Data and Account Deletion</strong>, Earth Power empowers all users with the straightforward right to permanently delete their account and all associated personal data at any time.
                  </p>

                  <div className="p-5 rounded-xl bg-earth-charcoal-900/80 border border-white/10 space-y-3">
                    <h3 className="font-bold text-white text-base flex items-center">
                      <Trash2 className="w-5 h-5 text-earth-neon-green mr-2" />
                      How to Request Account & Data Deletion:
                    </h3>
                    
                    <div className="space-y-3 text-sm text-gray-300">
                      <div>
                        <strong className="text-white block mb-1">Option 1: In-App Deletion</strong>
                        <p className="text-gray-400">
                          Within the Earth Power mobile app, navigate to <code className="px-2 py-0.5 rounded bg-white/10 text-earth-neon-green">Settings &gt; Profile &gt; Delete Account &amp; Erase Data</code>. Confirm the prompt to initiate the immediate purge of your credentials and profile.
                        </p>
                      </div>

                      <div className="pt-2 border-t border-white/10">
                        <strong className="text-white block mb-1">Option 2: Direct Email Request (Fast-Track)</strong>
                        <p className="text-gray-400 mb-2">
                          You can submit a data deletion request by sending an email from your registered email address to:
                        </p>
                        <a
                          href="mailto:earthpowerjourney@gmail.com?subject=Account%20and%20Data%20Deletion%20Request"
                          className="inline-flex items-center px-4 py-2 rounded-lg bg-earth-green-500 text-earth-charcoal-900 font-bold hover:bg-earth-neon-green transition-colors text-sm"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          earthpowerjourney@gmail.com
                        </a>
                        <p className="text-xs text-gray-400 mt-2">
                          Please include the subject line: <code className="text-earth-neon-green">&quot;Account and Data Deletion Request&quot;</code> along with your registered phone number or battery serial number.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-gray-300">
                    <p>
                      <strong className="text-white">Timeline for Processing:</strong> Upon receiving your request, our administrative team will confirm receipt within 48 hours, and permanently purge your account records, user profile, and personal identifying data from all production databases within <strong className="text-white">30 business days</strong>.
                    </p>
                    <p className="text-xs text-gray-400">
                      *Note: Data required for unresolved legal claims, tax invoices, or active statutory warranty obligations may be retained in an encrypted, non-active state solely for the statutory duration required by law.
                    </p>
                  </div>
                </div>
              </section>

              {/* 9. Children */}
              <section id="children" className="scroll-mt-28 p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-earth-green-500/20 text-earth-neon-green font-bold text-sm">
                    9
                  </span>
                  <h2 className="text-2xl font-bold text-white">Children’s Privacy</h2>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                  <p>
                    Earth Power&apos;s mobile app and products are industrial, commercial, and adult consumer energy storage systems designed for vehicle owners, fleet operators, dealers, and technicians.
                  </p>
                  <p>
                    Our services are not intended for use by children under the age of 13 (or under 16 in certain international jurisdictions). We do not knowingly solicit or collect personal identifiable information from children. If we discover that a child under 13 has provided personal data to us, we will take immediate steps to delete such information from our records. If you are a parent or guardian and believe your child has submitted data to us, please notify us immediately at <a href="mailto:earthpowerjourney@gmail.com" className="text-earth-neon-green hover:underline">earthpowerjourney@gmail.com</a>.
                  </p>
                </div>
              </section>

              {/* 10. User Rights */}
              <section id="user-rights" className="scroll-mt-28 p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-earth-green-500/20 text-earth-neon-green font-bold text-sm">
                    10
                  </span>
                  <h2 className="text-2xl font-bold text-white">Your Rights & Choices</h2>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                  <p>
                    Under applicable data protection laws (including the Digital Personal Data Protection Act, 2023 - DPDP Act, and international data protection standards), you have specific rights regarding your personal information:
                  </p>
                  <ul className="space-y-2.5 text-sm text-gray-300">
                    <li className="flex items-start space-x-2">
                      <ChevronRight className="w-4 h-4 text-earth-neon-green flex-shrink-0 mt-1" />
                      <span><strong className="text-white">Right of Access:</strong> Request a copy of the personal information we hold about you.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ChevronRight className="w-4 h-4 text-earth-neon-green flex-shrink-0 mt-1" />
                      <span><strong className="text-white">Right to Rectification:</strong> Request correction of inaccurate, incomplete, or outdated data.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ChevronRight className="w-4 h-4 text-earth-neon-green flex-shrink-0 mt-1" />
                      <span><strong className="text-white">Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Request full deletion of your personal records in accordance with Section 8.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ChevronRight className="w-4 h-4 text-earth-neon-green flex-shrink-0 mt-1" />
                      <span><strong className="text-white">Right to Revoke Permissions:</strong> Revoke Bluetooth, Location, Camera, or Notification permissions at any time through your mobile device system settings.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ChevronRight className="w-4 h-4 text-earth-neon-green flex-shrink-0 mt-1" />
                      <span><strong className="text-white">Right to Grievance Redressal:</strong> Raise concerns or complaints regarding your privacy directly to our Grievance Officer.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* 11. Contact & Grievance Officer */}
              <section id="contact" className="scroll-mt-28 p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-earth-green-500/20 text-earth-neon-green font-bold text-sm">
                    11
                  </span>
                  <h2 className="text-2xl font-bold text-white">Grievance Officer & Contact Information</h2>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                  <p>
                    If you have questions, feedback, inquiries regarding this Privacy Policy, or wish to exercise any of your data rights, please contact our dedicated Privacy &amp; Grievance Redressal Officer:
                  </p>

                  <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 space-y-4">
                    <div className="flex items-start space-x-3">
                      <Building className="w-5 h-5 text-earth-neon-green flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-white">Earth Power</h4>
                        <p className="text-sm text-gray-400">Attn: Privacy &amp; Data Protection Officer</p>
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

                  <p className="text-xs text-gray-400">
                    We will review and respond to all verified privacy-related inquiries within 72 hours of receipt.
                  </p>
                </div>
              </section>

              {/* Updates to Policy */}
              <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 text-xs text-gray-400 leading-relaxed">
                <p>
                  <strong>Changes to this Privacy Policy:</strong> Earth Power reserves the right to update this Privacy Policy from time to time to reflect modifications in our software, changes in legal statutes, or updates to Google Play Developer Policies. When updated, we will revise the &ldquo;Last Updated&rdquo; date at the top of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are protecting the personal information we collect.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}
