'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

/** Home-page phone mockup: click (or press Enter) to view the screenshot enlarged. */
export default function AppPhone({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    const prev = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.documentElement.style.overflow = prev
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        className="app-showcase-phone app-phone-btn"
        onClick={() => setOpen(true)}
        aria-label="View the EarthPower app screenshot enlarged"
      >
        <div className="app-showcase-notch" />
        <Image src={src} alt={alt} width={360} height={780} quality={90} priority draggable={false} style={{ pointerEvents: 'none', userSelect: 'none' }} />
        <span className="app-phone-hint">Click to enlarge</span>
      </button>

      {mounted && open && createPortal(
        <div
          className="app-zoom"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged app screenshot"
          onClick={() => setOpen(false)}
        >
          <button type="button" className="app-zoom-close" aria-label="Close" onClick={() => setOpen(false)}>×</button>
          <Image src={src} alt={alt} width={540} height={1170} quality={95} loading="eager" onClick={(e) => e.stopPropagation()} />
        </div>,
        document.body
      )}
    </>
  )
}
