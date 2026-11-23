'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'

interface ScreenshotItem {
  id: string
  src: string
  title: string
  description: string
  caption: string
  badge: string
}

const SCREENSHOTS: ScreenshotItem[] = [
  {
    id: 'home-dark',
    src: '/app/screenshot-home-dark.jpg',
    title: 'Live Battery Telemetry (Dark Theme)',
    description: 'Real-time telemetry showing 78% State of Charge, 0.6 kW active load, 53.0V bus voltage, 11.3A current, 31°C internal temperature, 212 lifetime cycles, and cell series min/max/delta balance.',
    caption: '78% SOC · 0.6 kW Load · 53.0V · 11.3A · 31°C · Cell Series Diagnostics',
    badge: 'Dashboard · Dark Mode',
  },
  {
    id: 'home-light',
    src: '/app/screenshot-home-light.jpg',
    title: 'Live Dashboard & Backup Hours (Light Theme)',
    description: 'Clean daylight monitoring showing projected backup duration ("About 7 h at current load"), active charge/discharge MOSFET toggles, and live BLE data stream.',
    caption: 'Dynamic backup hours calculation & dual MOSFET state indicators',
    badge: 'Dashboard · Light Mode',
  },
  {
    id: 'help-centre',
    src: '/app/screenshot-help.jpg',
    title: 'Help Centre & Technical Support',
    description: 'Direct access to live Support Chat, one-tap complaint filing with attached battery telemetry, ticket resolution records, and engineer appointment booking.',
    caption: 'Support Chat · Raise Complaint · Ticket History · Appointments',
    badge: 'Support & Service',
  },
  {
    id: 'faqs',
    src: '/app/screenshot-faq.jpg',
    title: 'Knowledge Base & BMS Diagnostics FAQs',
    description: 'In-app technical guides for charging & discharging thresholds, state of charge (SOC) dynamics, cell balancing voltages, and JK / JBD BMS operational parameters.',
    caption: 'Technical reference for charging, cell voltages & BMS types',
    badge: 'Knowledge Base',
  },
  {
    id: 'settings',
    src: '/app/screenshot-settings.jpg',
    title: 'Application Profiles & Theme Settings',
    description: 'Dedicated battery operation profiles: Home Inverter (monitor home backup), Electric Vehicle (track EV battery), or Solar / Energy Storage (manage solar yields), with Light/Dark theme customization.',
    caption: 'Profiles for Home Inverter, EV & Solar ESS · Dark/Light UI theme',
    badge: 'Settings & Profiles',
  },
]

export function ScreenshotGallery() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState<number | null>(null)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

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
        setActiveIdx((prev) => (prev === null ? null : (prev + 1) % SCREENSHOTS.length))
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        setActiveIdx((prev) => (prev === null ? null : (prev - 1 + SCREENSHOTS.length) % SCREENSHOTS.length))
      }
    },
    [activeIdx],
  )

  // Prevent background scrolling on both body and html while lightbox is open
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

  // Mobile touch swipe gestures inside lightbox
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchEndX.current = null
  }
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }
  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return
    const delta = touchStartX.current - touchEndX.current
    if (Math.abs(delta) > 40) {
      if (delta > 0) {
        // Swiped left -> next
        setActiveIdx((prev) => (prev === null ? null : (prev + 1) % SCREENSHOTS.length))
      } else {
        // Swiped right -> prev
        setActiveIdx((prev) => (prev === null ? null : (prev - 1 + SCREENSHOTS.length) % SCREENSHOTS.length))
      }
    }
    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <div className="ps-gallery-section" id="screenshots">
      <div className="ps-gallery-head">
        <div>
          <h2>Phone Screenshots</h2>
          <p className="ps-gallery-subtitle">Click any screenshot to view full-resolution display</p>
        </div>
        <div className="ps-gallery-nav" aria-label="Gallery carousel controls">
          <button
            type="button"
            className="ps-nav-btn"
            onClick={() => scroll('left')}
            aria-label="Scroll screenshots left"
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
            aria-label="Scroll screenshots right"
            title="Scroll right"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" style={{ flexShrink: 0 }}>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="ps-gallery-track" ref={trackRef} tabIndex={0} role="region" aria-label="App screenshot gallery">
        {SCREENSHOTS.map((item, idx) => (
          <article key={item.id} className="ps-screen-card">
            <button
              type="button"
              className="ps-screen-btn"
              onClick={() => setActiveIdx(idx)}
              aria-label={`Open full-size view: ${item.title}`}
            >
              <div className="ps-screen-frame">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={360}
                  height={780}
                  quality={88}
                  sizes="(max-width: 768px) 200px, 240px"
                />
                <div className="ps-screen-expand" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="22" height="22" style={{ flexShrink: 0 }}>
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                  <span>Click to expand</span>
                </div>
              </div>
            </button>
            <div
              className="ps-screen-caption"
              onClick={() => setActiveIdx(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setActiveIdx(idx)
                }
              }}
              aria-label={`Open preview for ${item.title}`}
            >
              <strong>{item.title}</strong>
              <p>{item.caption}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeIdx !== null && (
        <div
          className="lightbox-backdrop"
          onClick={() => setActiveIdx(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged screenshot preview"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close button: Fixed top-right, always visible */}
          <button
            type="button"
            className="lightbox-close-btn"
            onClick={(e) => {
              e.stopPropagation()
              setActiveIdx(null)
            }}
            aria-label="Close enlarged preview (Press Escape)"
            title="Close (Esc)"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" style={{ flexShrink: 0 }}>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Previous navigation button */}
          <button
            type="button"
            className="lightbox-nav-btn lightbox-prev-btn"
            onClick={(e) => {
              e.stopPropagation()
              setActiveIdx((prev) => (prev === null ? null : (prev - 1 + SCREENSHOTS.length) % SCREENSHOTS.length))
            }}
            aria-label="Previous screenshot (Left arrow)"
            title="Previous (Left arrow)"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" style={{ flexShrink: 0 }}>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Dialog Container */}
          <div
            className="lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-img-frame">
              <Image
                src={SCREENSHOTS[activeIdx].src}
                alt={SCREENSHOTS[activeIdx].title}
                width={450}
                height={975}
                quality={92}
                priority
                className="lightbox-image"
              />
            </div>

            <div className="lightbox-meta">
              <div className="lightbox-badge-row">
                <span className="lightbox-counter">
                  {activeIdx + 1} of {SCREENSHOTS.length}
                </span>
                <span className="lightbox-badge">{SCREENSHOTS[activeIdx].badge}</span>
              </div>
              <h3 className="lightbox-title">{SCREENSHOTS[activeIdx].title}</h3>
              <p className="lightbox-desc">{SCREENSHOTS[activeIdx].description}</p>
            </div>
          </div>

          {/* Next navigation button */}
          <button
            type="button"
            className="lightbox-nav-btn lightbox-next-btn"
            onClick={(e) => {
              e.stopPropagation()
              setActiveIdx((prev) => (prev === null ? null : (prev + 1) % SCREENSHOTS.length))
            }}
            aria-label="Next screenshot (Right arrow)"
            title="Next (Right arrow)"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" style={{ flexShrink: 0 }}>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
