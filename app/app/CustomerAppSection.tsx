import Link from 'next/link'
import Image from 'next/image'
import { APP_LINKS, SITE } from '@/lib/site'
import { ScreenshotGallery } from './ScreenshotGallery'
import { FaqAccordion } from './FaqAccordion'

// Download APK Icon
const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true" style={{ flexShrink: 0 }}>
    <path d="M12 3v12M7 11l5 5 5-5M4 21h16" />
  </svg>
)

// Checkmark Icon
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true" style={{ flexShrink: 0 }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

// QR Icon
const QrIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ flexShrink: 0 }}>
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
)

// Shield Icon
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ flexShrink: 0 }}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

export function CustomerAppSection({ hidden, style }: { hidden?: boolean; style?: React.CSSProperties } = {}) {
  return (
    <div id="panel-customer" role="tabpanel" aria-labelledby="tab-customer" hidden={hidden} style={style}>
      {/* 2. Play Store App Header Section */}
      <section className="ps-header-section">
        <div className="wrap">
          <div className="ps-header-grid">
            {/* App Icon (Play Store Squircle) */}
            <div className="ps-app-icon">
              <Image
                src="/app/app-icon.png"
                alt="EarthPower Battery App Icon"
                width={160}
                height={160}
                priority
              />
            </div>

            {/* App Identity Details */}
            <div className="ps-app-details">
              <div className="ps-title-row">
                <h1 className="ps-app-title">EarthPower Battery</h1>
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 6 }}>
                  <span className="ps-dev-link">
                    EarthPower
                  </span>
                  <span className="ps-dev-badge">
                    <CheckIcon /> Official BMS Client
                  </span>
                </div>
              </div>

              <div className="ps-tags-line">
                <span>Free</span>
                <span>Contains no ads</span>
                <span>In-app diagnostics</span>
                <span>Tools &amp; Utilities</span>
              </div>

              {/* Play Store 4-Column Stat Summary Bar */}
              <div className="ps-stats-strip">
                <div className="ps-stat-col">
                  <div className="ps-stat-val">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true" style={{ flexShrink: 0 }}>
                      <path d="M12 3v12M7 11l5 5 5-5M4 21h16" />
                    </svg>
                    v1.0.4
                  </div>
                  <span className="ps-stat-sub">Direct APK</span>
                </div>

                <div className="ps-stat-col">
                  <div className="ps-stat-val">18 MB</div>
                  <span className="ps-stat-sub">Download size</span>
                </div>

                <div className="ps-stat-col">
                  <div className="ps-stat-val">
                    <span className="ps-age-box">3+</span>
                  </div>
                  <span className="ps-stat-sub">Rated for 3+</span>
                </div>

                <div className="ps-stat-col">
                  <div className="ps-stat-val">BLE 4.2+</div>
                  <span className="ps-stat-sub">Bluetooth LE</span>
                </div>
              </div>

              {/* Action Buttons: Install APK & Scan QR */}
              <div className="ps-actions-row">
                <a
                  className="btn-ps-install"
                  href={APP_LINKS.directApk}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="earthpower-customer.apk"
                >
                  <DownloadIcon />
                  Install APK (18 MB)
                </a>

                <a className="btn-ps-outline" href="#download-qr">
                  <QrIcon />
                  Scan QR Code
                </a>
              </div>

              {/* Security Reassurance */}
              <div className="ps-safety-tagline">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
                <span>Verified Safe · Signed by EarthPower · Zero Malware · 100% Ad-Free</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Play Store Screenshots Strip */}
      <section className="wrap">
        <ScreenshotGallery />
      </section>

      {/* 4. Play Store "About this app" Section */}
      <section className="ps-about-section">
        <div className="wrap">
          <div className="ps-section-header">
            <h2 className="ps-section-title">
              About this app
              <span className="ps-arrow-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </h2>
          </div>

          <p className="ps-about-lead">
            Smart Bluetooth monitoring, live telemetry &amp; protection for EarthPower LiFePO4 batteries.
          </p>

          <div className="ps-about-body">
            <p>
              The <strong>EarthPower Battery</strong> mobile application pairs directly over <strong>Bluetooth Low Energy (BLE 4.2+)</strong> with the on-board Battery Management System inside your EarthPower LiFePO4 battery pack. It provides real-time telemetry, individual cell diagnostics, safety alarms, and customer support access.
            </p>
            <p>
              Whether tracking a 48V home inverter battery, managing an electric vehicle pack, or monitoring a solar energy storage rack, EarthPower Battery delivers precision visibility over your pack&apos;s health and operating parameters.
            </p>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#202124', marginTop: 12, marginBottom: 4 }}>
              Key Application Features
            </h3>
            <ul style={{ paddingLeft: 22, display: 'grid', gap: 8, margin: 0 }}>
              <li>
                <strong>Live Battery Dashboard:</strong> State of Charge (SOC %) circular dial, instantaneous kW power output/input, pack bus voltage (53.0V), charge/discharge current (11.3A), and internal temperature (31°C).
              </li>
              <li>
                <strong>Dynamic Backup Estimator:</strong> Real-time projection of remaining backup runtime based on active load calculations.
              </li>
              <li>
                <strong>Cell Series Diagnostics:</strong> Millivolt-grade tracking of individual cells in series, with minimum, maximum, and delta balance health indicators.
              </li>
              <li>
                <strong>Safety &amp; Protection Status:</strong> Live monitoring of Charge and Discharge MOSFET gates, high-temperature cutoff alerts, and deep-discharge protection barriers.
              </li>
              <li>
                <strong>Help Centre &amp; Customer Support:</strong> Built-in support chat, complaint registration with attached battery telemetry records, and appointment scheduling.
              </li>
              <li>
                <strong>Customizable Profiles &amp; Themes:</strong> Tailored profiles for Home Inverter, EV, and Solar ESS modes with Dark and Light appearance themes.
              </li>
            </ul>
          </div>

          {/* Play Store Topic Pills */}
          <div className="ps-topic-pills">
            <span className="ps-topic-pill">#Battery Management</span>
            <span className="ps-topic-pill">#LiFePO4 BMS</span>
            <span className="ps-topic-pill">#Bluetooth Telemetry</span>
            <span className="ps-topic-pill">#JK BMS</span>
            <span className="ps-topic-pill">#JBD BMS</span>
            <span className="ps-topic-pill">#Energy Storage</span>
            <span className="ps-topic-pill">#Solar Inverter</span>
            <span className="ps-topic-pill">#Tools &amp; Diagnostics</span>
          </div>

          {/* Play Store Metadata Strip */}
          <div className="ps-meta-strip">
            <div className="ps-meta-item">
              <span className="ps-meta-label">Updated on</span>
              <span className="ps-meta-val">Nov 20, 2026</span>
            </div>
            <div className="ps-meta-item">
              <span className="ps-meta-label">Requires Android</span>
              <span className="ps-meta-val">8.0 and up</span>
            </div>
            <div className="ps-meta-item">
              <span className="ps-meta-label">Distribution</span>
              <span className="ps-meta-val">Direct APK &amp; QR Code</span>
            </div>
            <div className="ps-meta-item">
              <span className="ps-meta-label">Offered by</span>
              <span className="ps-meta-val">EarthPower Battery</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Play Store "Data safety" Section */}
      <section className="ps-safety-section">
        <div className="wrap">
          <div className="ps-section-header">
            <h2 className="ps-section-title">
              Data safety
              <span className="ps-arrow-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </h2>
          </div>

          <div className="ps-safety-card">
            <p className="ps-safety-card-intro">
              Safety starts with understanding how developers collect and share your data. Data privacy and security practices may vary based on your use, region, and age. The developer provided this information and may update it over time.
            </p>

            <div className="ps-safety-grid">
              <div className="ps-safety-item">
                <div className="ps-safety-icon">
                  <ShieldIcon />
                </div>
                <div>
                  <div className="ps-safety-item-title">No data shared with third parties</div>
                  <p className="ps-safety-item-desc">
                    The developer states this app doesn&apos;t share user data with other companies or organizations.
                  </p>
                </div>
              </div>

              <div className="ps-safety-item">
                <div className="ps-safety-icon">
                  <ShieldIcon />
                </div>
                <div>
                  <div className="ps-safety-item-title">No personal data or location collected</div>
                  <p className="ps-safety-item-desc">
                    The app streams battery telemetry locally over Bluetooth. It does not track, store, or log GPS coordinates or personal identities.
                  </p>
                </div>
              </div>

              <div className="ps-safety-item">
                <div className="ps-safety-icon">
                  <ShieldIcon />
                </div>
                <div>
                  <div className="ps-safety-item-title">Data is encrypted in transit</div>
                  <p className="ps-safety-item-desc">
                    Your local Bluetooth Low Energy communications are transmitted with encrypted hardware framing.
                  </p>
                </div>
              </div>
            </div>

            <div className="ps-safety-link-row">
              <Link className="ps-safety-link" href="/privacy-app">
                See details in App Privacy Policy
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Direct APK Download & Official QR Code Card */}
      <section className="wrap" id="download-qr">
        <div className="ps-download-card">
          <div className="ps-download-info">
            <h2>Download EarthPower Battery</h2>
            <p>
              Install the official Android application package directly on your smartphone or tablet. The package is cryptographically signed by EarthPower and verified for all Android 8.0+ devices.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
              <a
                className="btn-ps-install"
                href={APP_LINKS.directApk}
                target="_blank"
                rel="noopener noreferrer"
                download="earthpower-customer.apk"
              >
                <DownloadIcon />
                Download APK (v1.0.4)
              </a>
              <span style={{ fontSize: '0.84rem', color: '#5f6368', fontFamily: 'var(--f-m)' }}>
                SHA-Verified · ~18 MB
              </span>
            </div>
          </div>

          {/* Official QR Code Container */}
          <div className="ps-qr-box">
            <div className="ps-qr-image">
              <Image
                src="/app/qr-code.png"
                alt="Official EarthPower Battery APK Download QR Code"
                width={180}
                height={180}
                priority
              />
            </div>
            <h3>Scan to download the app</h3>
            <p>
              Point your phone camera to download the APK directly to your device.
            </p>
            <a
              href={APP_LINKS.directApk}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.82rem', color: '#01875f', fontWeight: 600, textDecoration: 'underline' }}
            >
              Direct APK Link Pre-Encoded
            </a>
          </div>
        </div>
      </section>

      {/* 7. 4-Step Sideload Installation Guide */}
      <section className="ps-install-section">
        <div className="wrap">
          <div className="ps-section-header">
            <h2 className="ps-section-title">How to install the APK</h2>
          </div>

          <div className="ps-steps-grid">
            <div className="ps-step-card">
              <div className="ps-step-num">1</div>
              <h3>Download APK</h3>
              <p>
                Tap the &quot;Download APK&quot; button above or scan the QR code to save <code>earthpower-customer.apk</code>.
              </p>
            </div>

            <div className="ps-step-card">
              <div className="ps-step-num">2</div>
              <h3>Allow Installation</h3>
              <p>
                If Android prompts &quot;For your security, your phone is not allowed to install unknown apps&quot;, tap <strong>Settings</strong> and enable <strong>Allow from this source</strong>.
              </p>
            </div>

            <div className="ps-step-card">
              <div className="ps-step-num">3</div>
              <h3>Install Package</h3>
              <p>
                Tap the downloaded file in your notification drawer or Downloads folder, then select <strong>Install</strong> and <strong>Open</strong>.
              </p>
            </div>

            <div className="ps-step-card">
              <div className="ps-step-num">4</div>
              <h3>Pair Your Battery</h3>
              <p>
                Turn on Bluetooth on your phone, bring it near your EarthPower battery pack, and tap your battery to begin live monitoring.
              </p>
            </div>
          </div>

          {/* Sideload Security Notice */}
          <div className="ps-notice-box">
            <svg className="ps-notice-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true" style={{ flexShrink: 0 }}>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <div>
              <h4>Why does Android display &quot;File might be harmful&quot;?</h4>
              <p>
                Android shows this standard security alert for any application package downloaded through a web browser instead of an app store. The EarthPower Battery APK is 100% genuine, signed by EarthPower, virus-free, and contains zero adware or telemetry tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Play Store App Support */}
      <section className="ps-support-section">
        <div className="wrap">
          <div className="ps-section-header">
            <h2 className="ps-section-title">App support</h2>
          </div>

          <div className="ps-support-grid">
            <div className="ps-support-card">
              <span className="ps-support-card-label">Website</span>
              <span className="ps-support-card-val">
                <a href={SITE.url} target="_blank" rel="noopener noreferrer">
                  {SITE.url.replace('https://', '')}
                </a>
              </span>
            </div>

            <div className="ps-support-card">
              <span className="ps-support-card-label">Support Email</span>
              <span className="ps-support-card-val">
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </span>
            </div>

            <div className="ps-support-card">
              <span className="ps-support-card-label">Factory Hotline</span>
              <span className="ps-support-card-val">
                <a href={SITE.phoneHref}>{SITE.phone}</a>
              </span>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div style={{ marginTop: 36 }}>
            <h3 style={{ fontFamily: 'var(--f-d)', fontSize: '1.25rem', fontWeight: 700, color: '#202124', marginBottom: 16 }}>
              Frequently asked questions
            </h3>
            <FaqAccordion />
          </div>
        </div>
      </section>
    </div>
  )
}
