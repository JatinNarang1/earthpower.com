'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'

interface DealerPreviewItem {
  id: string
  title: string
  subtitle: string
  badge: string
  description: string
  points: string[]
}

const PREVIEWS: DealerPreviewItem[] = [
  {
    id: 'login',
    title: 'Secure Dealer Login',
    subtitle: 'Authentication & Credential Protection',
    badge: 'Security · Coming Soon',
    description: 'Role-based dealer authentication using verified credentials. Mandatory password change on first login to ensure maximum partner store account security.',
    points: ['Issued partner credentials', 'Mandatory initial password update', 'Encrypted session tokens'],
  },
  {
    id: 'quick-reg',
    title: 'Quick Battery Registration',
    subtitle: 'Barcode & BMS QR Code Association',
    badge: 'Scanning · Coming Soon',
    description: 'High-speed camera scanner to read battery serial barcodes and BMS QR labels, automatically associating Bluetooth MAC addresses and identifying battery models.',
    points: ['Barcode & QR camera scan', 'BMS MAC address link', 'Model auto-detection & manual fallback'],
  },
  {
    id: 'customer-reg',
    title: 'Customer Registration',
    subtitle: 'Point-of-Sale Warranty Activation',
    badge: 'Warranty · Coming Soon',
    description: 'Capture end-user details at handover: customer name, mobile phone number, installation address, and date of sale attached directly to the battery warranty record.',
    points: ['Customer name & mobile capture', 'Installation address record', 'Digital date of sale certificate'],
  },
  {
    id: 'offline-mode',
    title: 'Offline Registration & Sync',
    subtitle: 'Zero-Coverage Field Synchronization',
    badge: 'Offline · Coming Soon',
    description: 'Complete registrations in remote basements or rural locations with zero cell reception. Registrations are saved securely and auto-sync when network returns.',
    points: ['Encrypted local storage', 'Zero-reception offline operation', 'Automatic background cloud sync'],
  },
  {
    id: 'my-registrations',
    title: 'My Registrations & Search',
    subtitle: 'Complete Battery Record Directory',
    badge: 'Directory · Coming Soon',
    description: 'Searchable database of all batteries registered by your store. Filter by serial number, customer name, mobile number, or battery model with instant lookup.',
    points: ['Multi-parameter search & filters', 'Full registration detail views', 'Correction window management'],
  },
  {
    id: 'shipments',
    title: 'Shipment Management',
    subtitle: 'Consignment Tracking & Verification',
    badge: 'Logistics · Coming Soon',
    description: 'View incoming battery consignments from EarthPower factories, verify models, quantities, and serials, confirm receipt, and report damaged or missing items.',
    points: ['Incoming consignment tracking', 'Serial count & model inspection', 'Damaged or missing stock reports'],
  },
]

export function DealerScreenshotGallery() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (!trackRef.current) return
    const offset = direction === 'left' ? -300 : 300
    trackRef.current.scrollBy({ left: offset, behavior: 'smooth' })
  }

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (activeIdx === null) return
      if (e.key === 'Escape') {
        e.preventDefault()
        setActiveIdx(null)
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        setActiveIdx((prev) => (prev === null ? null : (prev + 1) % PREVIEWS.length))
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        setActiveIdx((prev) => (prev === null ? null : (prev - 1 + PREVIEWS.length) % PREVIEWS.length))
      }
    },
    [activeIdx],
  )

  useEffect(() => {
    if (activeIdx !== null) {
      const origBody = document.body.style.overflow
      const origHtml = document.documentElement.style.overflow
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)

      return () => {
        document.body.style.overflow = origBody
        document.documentElement.style.overflow = origHtml
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [activeIdx, handleKeyDown])

  return (
    <div className="ps-gallery-section" id="dealer-screenshots">
      <div className="ps-gallery-head">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
            <h2>App Preview &amp; Interface Layout</h2>
            <span className="ps-coming-soon-badge">
              <span className="ps-pulse-dot" />
              Coming Soon
            </span>
          </div>
          <p className="ps-gallery-subtitle">Click any screen preview to view full-resolution display</p>
        </div>

        <div className="ps-gallery-nav" aria-label="Gallery carousel controls">
          <button
            type="button"
            className="ps-nav-btn"
            onClick={() => scroll('left')}
            aria-label="Scroll previews left"
            title="Scroll left"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" style={{ flexShrink: 0 }}>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            className="ps-nav-btn"
            onClick={() => scroll('right')}
            aria-label="Scroll previews right"
            title="Scroll right"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" style={{ flexShrink: 0 }}>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="ps-gallery-track" ref={trackRef} tabIndex={0} role="region" aria-label="Dealer App interface preview gallery">
        {PREVIEWS.map((item, idx) => (
          <article
            key={item.id}
            className="ps-screen-card"
            onClick={() => setActiveIdx(idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setActiveIdx(idx)
              }
            }}
            aria-label={`Open preview: ${item.title}`}
          >
            <div className="ps-screen-frame dealer-screen-placeholder-frame">
              {/* Neutral Branded Phone Screen Mockup */}
              <div className="dealer-phone-card-preview">
                <div className="dealer-card-top-notch" />
                <div className="dealer-card-brand-row">
                  <Image src="/brand/earthpower-logo.png" alt="EarthPower" width={80} height={20} style={{ height: '14px', width: 'auto' }} />
                  <span className="dealer-card-status-chip">COMING SOON</span>
                </div>

                <div className="dealer-card-center-icon">
                  <div className="dealer-center-icon-circle">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                  </div>
                </div>

                <div className="dealer-card-text-block">
                  <span className="dealer-card-module-tag">MODULE {idx + 1}</span>
                  <h3 className="dealer-card-title">{item.title}</h3>
                  <p className="dealer-card-sub">{item.subtitle}</p>
                </div>

                <div className="dealer-card-points-list">
                  {item.points.slice(0, 2).map((pt, pIdx) => (
                    <div key={pIdx} className="dealer-card-pt">
                      <span>•</span> {pt}
                    </div>
                  ))}
                </div>
              </div>

              <div className="ps-screen-expand" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="22" height="22" style={{ flexShrink: 0 }}>
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
                <span>Click to view</span>
              </div>
            </div>

            <p className="ps-screen-caption">{item.title} · {item.subtitle}</p>
          </article>
        ))}
      </div>

      {/* Lightbox Modal (rendered via React Portal to document.body) */}
      {mounted && activeIdx !== null && createPortal(
        <div
          className="ps-lightbox-backdrop"
          onClick={() => setActiveIdx(null)}
          role="dialog"
          aria-modal="true"
          aria-label={PREVIEWS[activeIdx].title}
        >
          <button
            type="button"
            className="lightbox-close-btn"
            onClick={(e) => {
              e.stopPropagation()
              setActiveIdx(null)
            }}
            aria-label="Close preview"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <button
            type="button"
            className="lightbox-nav-btn prev"
            onClick={(e) => {
              e.stopPropagation()
              setActiveIdx((prev) => (prev === null ? null : (prev - 1 + PREVIEWS.length) % PREVIEWS.length))
            }}
            aria-label="Previous preview"
          >
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            className="lightbox-nav-btn next"
            onClick={(e) => {
              e.stopPropagation()
              setActiveIdx((prev) => (prev === null ? null : (prev + 1) % PREVIEWS.length))
            }}
            aria-label="Next preview"
          >
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div
            className="ps-lightbox-content"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: 500, width: '92%' }}
          >
            <div className="dealer-lightbox-card">
              <div className="dealer-lightbox-header">
                <span className="dealer-card-status-chip">COMING SOON · PREVIEW</span>
                <span style={{ fontSize: '0.8rem', color: '#5f6368', fontFamily: 'var(--f-m)' }}>
                  Screen {activeIdx + 1} of {PREVIEWS.length}
                </span>
              </div>

              <h2 className="dealer-lightbox-title">{PREVIEWS[activeIdx].title}</h2>
              <p className="dealer-lightbox-subtitle">{PREVIEWS[activeIdx].subtitle}</p>
              <p className="dealer-lightbox-desc">{PREVIEWS[activeIdx].description}</p>

              <div className="dealer-lightbox-points">
                <h4>Key Capabilities:</h4>
                <ul>
                  {PREVIEWS[activeIdx].points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
              </div>

              <div className="dealer-lightbox-footer">
                <span className="dealer-status-pill">Official release planned with dealer network rollout</span>
              </div>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </div>
  )
}
