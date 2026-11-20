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
    description: 'Real-time telemetry showing 78% State of Charge, 0.6 kW active load, 53.0V bus voltage, 11.3A current, 31°C internal temperature, 212 lifetime cycles, and 16-cell series min/max/delta balance.',
    caption: '78% SOC · 0.6 kW Load · 53.0V · 11.3A · 31°C · 16 Cells (30mV Delta)',
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

  const scroll = (direction: 'left' | 'right') => {
    if (!trackRef.current) return
    const offset = direction === 'left' ? -280 : 280
    trackRef.current.scrollBy({ left: offset, behavior: 'smooth' })
  }

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (activeIdx === null) return
      if (e.key === 'Escape') {
        setActiveIdx(null)
      } else if (e.key === 'ArrowRight') {
        setActiveIdx((prev) => (prev === null ? null : (prev + 1) % SCREENSHOTS.length))
      } else if (e.key === 'ArrowLeft') {
        setActiveIdx((prev) => (prev === null ? null : (prev - 1 + SCREENSHOTS.length) % SCREENSHOTS.length))
      }
    },
    [activeIdx],
  )

  useEffect(() => {
    if (activeIdx !== null) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeIdx, handleKeyDown])

  return (
    <div className="ps-gallery-section">
      <div className="ps-gallery-head">
        <h2>Phone Screenshots</h2>
        <div className="ps-gallery-nav">
          <button
            type="button"
            className="ps-nav-btn"
            onClick={() => scroll('left')}
            aria-label="Scroll screenshots left"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0 }}>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            className="ps-nav-btn"
            onClick={() => scroll('right')}
            aria-label="Scroll screenshots right"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0 }}>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="ps-gallery-track" ref={trackRef}>
        {SCREENSHOTS.map((item, idx) => (
          <article key={item.id} className="ps-screen-card">
            <div
              className="ps-screen-frame"
              onClick={() => setActiveIdx(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setActiveIdx(idx)
                }
              }}
              aria-label={`View enlarged ${item.title}`}
            >
              <Image
                src={item.src}
                alt={item.title}
                width={360}
                height={780}
                quality={88}
                sizes="(max-width: 768px) 200px, 240px"
              />
              <div className="ps-screen-expand">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
                <span>Click to Expand</span>
              </div>
            </div>
            <div className="ps-screen-caption">
              <strong>{item.title}</strong>
              <p>{item.caption}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeIdx !== null && (
        <div
          className="lightbox-modal"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveIdx(null)
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged screenshot preview"
        >
          <div className="lightbox-content">
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setActiveIdx(null)}
              aria-label="Close enlarged preview"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <button
              type="button"
              className="lightbox-arrow prev"
              onClick={() => setActiveIdx((prev) => (prev === null ? null : (prev - 1 + SCREENSHOTS.length) % SCREENSHOTS.length))}
              aria-label="Previous screenshot"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="24" height="24">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="lightbox-img-wrapper">
              <Image
                src={SCREENSHOTS[activeIdx].src}
                alt={SCREENSHOTS[activeIdx].title}
                width={540}
                height={1170}
                quality={95}
                priority
                style={{ objectFit: 'contain' }}
              />
            </div>

            <button
              type="button"
              className="lightbox-arrow next"
              onClick={() => setActiveIdx((prev) => (prev === null ? null : (prev + 1) % SCREENSHOTS.length))}
              aria-label="Next screenshot"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="24" height="24">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <div className="lightbox-info">
              <span style={{ color: '#81c995', fontSize: '0.82rem', fontWeight: 600 }}>
                {activeIdx + 1} of {SCREENSHOTS.length} · {SCREENSHOTS[activeIdx].badge}
              </span>
              <h3>{SCREENSHOTS[activeIdx].title}</h3>
              <p style={{ maxWidth: 640 }}>{SCREENSHOTS[activeIdx].description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
