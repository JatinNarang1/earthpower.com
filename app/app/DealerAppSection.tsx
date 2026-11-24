import Link from 'next/link'
import Image from 'next/image'
import { SITE } from '@/lib/site'
import { DealerScreenshotGallery } from './DealerScreenshotGallery'
import { DealerFaqAccordion } from './DealerFaqAccordion'

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

// Shield Icon
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ flexShrink: 0 }}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

// Lock Icon
const LockIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true" style={{ flexShrink: 0 }}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

export function DealerAppSection({ hidden, style }: { hidden?: boolean; style?: React.CSSProperties } = {}) {
  return (
    <div id="panel-dealer" role="tabpanel" aria-labelledby="tab-dealer" hidden={hidden} style={style}>
      {/* 2. Play Store App Header Section (Dealer Mirror) */}
      <section className="ps-header-section">
        <div className="wrap">
          <div className="ps-header-grid">
            {/* App Icon (Play Store Squircle with Dealer Tag) */}
            <div className="ps-app-icon ps-dealer-icon">
              <div className="ps-dealer-icon-wrapper">
                <Image
                  src="/app/app-icon.png"
                  alt="EarthPower Dealer App Icon"
                  width={160}
                  height={160}
                  priority
                />
                <span className="ps-dealer-tag">DEALER</span>
              </div>
            </div>

            {/* App Identity Details */}
            <div className="ps-app-details">
              <div className="ps-title-row">
                <h1 className="ps-app-title">EarthPower Dealer App</h1>
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 6 }}>
                  <span className="ps-dev-link">
                    EarthPower
                  </span>
                  <span className="ps-dev-badge" style={{ background: 'rgba(1, 135, 95, 0.12)', color: '#01875f' }}>
                    <CheckIcon /> Authorized Partner Portal
                  </span>
                  <span className="ps-coming-soon-badge">
                    <span className="ps-pulse-dot" />
                    Coming Soon
                  </span>
                </div>
              </div>

              <div className="ps-tags-line">
                <span>Enterprise Suite</span>
                <span>Dealer Credentials Required</span>
                <span>Offline Sync</span>
                <span>B2B Logistics</span>
              </div>

              {/* Play Store 4-Column Stat Summary Bar */}
              <div className="ps-stats-strip">
                <div className="ps-stat-col">
                  <div className="ps-stat-val">
                    <span className="ps-status-pill">Coming Soon</span>
                  </div>
                  <span className="ps-stat-sub">Release Status</span>
                </div>

                <div className="ps-stat-col">
                  <div className="ps-stat-val">Dealers &amp; Techs</div>
                  <span className="ps-stat-sub">Target Users</span>
                </div>

                <div className="ps-stat-col">
                  <div className="ps-stat-val">
                    <span className="ps-age-box">B2B</span>
                  </div>
                  <span className="ps-stat-sub">Access Tier</span>
                </div>

                <div className="ps-stat-col">
                  <div className="ps-stat-val">~35 MB</div>
                  <span className="ps-stat-sub">Target Size</span>
                </div>
              </div>

              {/* Action Buttons: Coming Soon State */}
              <div className="ps-actions-row">
                <button
                  type="button"
                  className="btn-ps-install btn-ps-disabled"
                  disabled
                  aria-disabled="true"
                  title="Official APK will be released upon dealer portal deployment"
                  style={{ background: '#f1f3f4', color: '#70757a', cursor: 'not-allowed', boxShadow: 'none' }}
                >
                  <LockIcon />
                  Release Coming Soon
                </button>
              </div>

              {/* Security Reassurance */}
              <div className="ps-safety-tagline">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
                <span>Verified Enterprise Software · Cryptographically Signed · Dedicated Partner Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Play Store Screenshots Strip (Dealer Preview Mirror) */}
      <section className="wrap">
        <DealerScreenshotGallery />
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
            A unified mobile platform engineered specifically for authorized EarthPower dealers, retail store managers, and certified field technicians across India.
          </p>

          <div className="ps-about-body">
            <p>
              The <strong>EarthPower Dealer App</strong> transforms battery warranty onboarding, customer registrations, and stock consignment management into a streamlined, paperless mobile workflow. Designed to operate both online and in zero-reception offline environments, it gives authorized partners direct integration with EarthPower manufacturing and warranty operations.
            </p>
            <p>
              From scanning incoming factory shipments to instantly registering retail customer batteries at the point of sale, the app ensures every EarthPower pack is accurately recorded, tracked, and protected.
            </p>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#202124', marginTop: 12, marginBottom: 4 }}>
              Key Application Features
            </h3>
            <ul style={{ paddingLeft: 22, display: 'grid', gap: 8, margin: 0 }}>
              <li>
                <strong>1. Secure Dealer Login:</strong> Role-based dealer authentication using verified credentials with mandatory password change on first login.
              </li>
              <li>
                <strong>2. Quick Battery Registration:</strong> Scan battery serial barcode/QR and BMS QR code to associate its MAC address, with automatic model identification and manual fallback.
              </li>
              <li>
                <strong>3. Customer Registration:</strong> Capture customer name, mobile number, installation address, and date of sale attached directly to the battery record.
              </li>
              <li>
                <strong>4. Offline Registration:</strong> Save customer and battery registrations securely when internet connectivity is unavailable, with automatic background sync upon reconnecting.
              </li>
              <li>
                <strong>5. My Registrations:</strong> View registered batteries. Search and filter records by serial number, customer name, mobile number, or battery model.
              </li>
              <li>
                <strong>6. Registration Corrections:</strong> Allow eligible registration details to be corrected within the defined post-sale correction window without administrative delay.
              </li>
              <li>
                <strong>7. Shipment Management:</strong> View incoming battery shipments, inspect models, quantities, and serials, confirm receipt, and report missing or damaged stock.
              </li>
              <li>
                <strong>8. Notifications:</strong> Real-time operational alerts for incoming battery shipments, warranty approvals, dealer policy updates, and manufacturer technical bulletins.
              </li>
            </ul>
          </div>

          {/* Play Store Topic Pills */}
          <div className="ps-topic-pills">
            <span className="ps-topic-pill">#Dealer Portal</span>
            <span className="ps-topic-pill">#Battery Registration</span>
            <span className="ps-topic-pill">#BMS MAC Pairing</span>
            <span className="ps-topic-pill">#Offline Sync</span>
            <span className="ps-topic-pill">#Shipment Tracking</span>
            <span className="ps-topic-pill">#Warranty Management</span>
            <span className="ps-topic-pill">#Coming Soon</span>
          </div>

          {/* Play Store Metadata Strip */}
          <div className="ps-meta-strip">
            <div className="ps-meta-item">
              <span className="ps-meta-label">Status</span>
              <span className="ps-meta-val" style={{ color: '#01875f', fontWeight: 600 }}>Coming Soon (In Development)</span>
            </div>
            <div className="ps-meta-item">
              <span className="ps-meta-label">Requires Android</span>
              <span className="ps-meta-val">8.0 and up</span>
            </div>
            <div className="ps-meta-item">
              <span className="ps-meta-label">Distribution</span>
              <span className="ps-meta-val">Direct Signed APK &amp; MDM</span>
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
              Safety starts with understanding how developers collect and share your data. Data privacy and security practices for enterprise partner applications.
            </p>

            <div className="ps-safety-grid">
              <div className="ps-safety-item">
                <div className="ps-safety-icon">
                  <ShieldIcon />
                </div>
                <div>
                  <div className="ps-safety-item-title">Authorized partner authentication only</div>
                  <p className="ps-safety-item-desc">
                    Access is restricted strictly to verified franchise dealers and technicians using encrypted credentials.
                  </p>
                </div>
              </div>

              <div className="ps-safety-item">
                <div className="ps-safety-icon">
                  <ShieldIcon />
                </div>
                <div>
                  <div className="ps-safety-item-title">Encrypted offline storage</div>
                  <p className="ps-safety-item-desc">
                    Pending registrations stored locally on mobile devices are protected with device-level encryption.
                  </p>
                </div>
              </div>

              <div className="ps-safety-item">
                <div className="ps-safety-icon">
                  <ShieldIcon />
                </div>
                <div>
                  <div className="ps-safety-item-title">Direct factory synchronization</div>
                  <p className="ps-safety-item-desc">
                    Registrations and shipment confirmations synchronize directly with EarthPower secure servers over TLS.
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

      {/* 6. Direct APK Download & Official QR Code Card (Coming Soon State) */}
      <section className="wrap" id="dealer-download-qr">
        <div className="ps-download-card">
          <div className="ps-download-info">
            <h2>Download EarthPower Dealer App</h2>
            <p>
              The official signed Dealer APK is currently in final testing. Once released, authorized partners will be able to download the package directly or enroll via enterprise MDM.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
              <button
                type="button"
                className="btn-ps-install"
                disabled
                style={{ background: '#f1f3f4', color: '#70757a', cursor: 'not-allowed', boxShadow: 'none' }}
              >
                <DownloadIcon />
                Download Available Upon Release
              </button>
              <span style={{ fontSize: '0.84rem', color: '#01875f', fontFamily: 'var(--f-m)', fontWeight: 600 }}>
                Coming Soon · Target Size ~35 MB
              </span>
            </div>
          </div>

          {/* Official QR Code Container (Coming Soon Placeholder) */}
          <div className="ps-qr-box">
            <div className="ps-qr-image dealer-qr-placeholder-frame">
              <div className="dealer-qr-placeholder-inner">
                <div className="dealer-qr-icon-circle">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                </div>
                <span className="dealer-qr-coming-soon-tag">COMING SOON</span>
              </div>
            </div>
            <h3>Scan to download the app</h3>
            <p>
              The download QR code will be activated upon general dealer rollout across India.
            </p>
          </div>
        </div>
      </section>

      {/* 7. 4-Step Sideload Installation Guide (Dealer Mirror) */}
      <section className="ps-install-section">
        <div className="wrap">
          <div className="ps-section-header">
            <h2 className="ps-section-title">How to install &amp; onboard on Android</h2>
          </div>

          <div className="ps-steps-grid">
            <div className="ps-step-card">
              <div className="ps-step-num">1</div>
              <h3>Account Provisioning</h3>
              <p>
                Receive your official dealer ID, retail credentials, and account activation instructions from EarthPower.
              </p>
            </div>

            <div className="ps-step-card">
              <div className="ps-step-num">2</div>
              <h3>Download Package</h3>
              <p>
                Download the official signed Dealer APK once released, or enroll through enterprise partner MDM.
              </p>
            </div>

            <div className="ps-step-card">
              <div className="ps-step-num">3</div>
              <h3>Mandatory First Login</h3>
              <p>
                Sign in with issued credentials and perform the mandatory initial password change for store security.
              </p>
            </div>

            <div className="ps-step-card">
              <div className="ps-step-num">4</div>
              <h3>Begin Onboarding</h3>
              <p>
                Scan battery barcodes and BMS QR labels to instantly register customer warranties and confirm consignments.
              </p>
            </div>
          </div>

          {/* Enterprise Package Notice */}
          <div className="ps-notice-box">
            <svg className="ps-notice-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true" style={{ flexShrink: 0 }}>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <div>
              <h4>Official Enterprise Package Notice</h4>
              <p>
                The EarthPower Dealer App package is cryptographically signed by EarthPower Energy Systems and distributed exclusively to verified franchise partners, retail store managers, and certified technicians.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Play Store App Support */}
      <section className="ps-support-section">
        <div className="wrap">
          <div className="ps-section-header">
            <h2 className="ps-section-title">App support &amp; commercial desk</h2>
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
              <span className="ps-support-card-label">Dealer Inquiries</span>
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
            <DealerFaqAccordion />
          </div>
        </div>
      </section>
    </div>
  )
}
