'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'

// Start fetching the 3D chunk the moment this module is evaluated (before hydration finishes),
// and share the same promise with next/dynamic so it is never downloaded twice.
const loadScene = () => import('./HeroScene')
if (typeof window !== 'undefined') void loadScene()
const HeroScene = dynamic(loadScene, { ssr: false })

function hasWebGL(): boolean {
  try {
    const c = document.createElement('canvas')
    return !!(c.getContext('webgl2') || c.getContext('webgl'))
  } catch {
    return false
  }
}

export default function Hero3D() {
  const box = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [ready, setReady] = useState(false)
  const [visible, setVisible] = useState(true)
  const [mobile, setMobile] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setEnabled(hasWebGL())
    const mq = window.matchMedia('(max-width: 960px)')
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => {
      setMobile(mq.matches)
      setReduced(rm.matches)
    }
    sync()
    mq.addEventListener('change', sync)
    rm.addEventListener('change', sync)
    return () => {
      mq.removeEventListener('change', sync)
      rm.removeEventListener('change', sync)
    }
  }, [])

  useEffect(() => {
    const el = box.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const onReady = useCallback(() => setReady(true), [])
  const onLost = useCallback(() => setEnabled(false), [])

  return (
    <div className="hero3d" ref={box} role="img" aria-label="Earth Power EP51105ESS LiFePO4 energy storage battery, 51.2 V, 100 Ah, 5.120 kWh">
      <div className="h3-glow" aria-hidden="true" />
      {!ready && enabled && <div className="h3-loader" aria-hidden="true" />}
      {enabled && (
        <div className={`h3-canvas${ready ? ' on' : ''}`}>
          <HeroScene active={visible} mobile={mobile} reduced={reduced} onReady={onReady} onLost={onLost} />
        </div>
      )}
      <div className="h3-cap">
        <div>
          <b>EP51105ESS</b>
          <span>LiFePO4 · 51.2 V · 100 Ah · 5.120 kWh</span>
        </div>
        <Link href="/products/EP51105ESS" className="link">
          View model
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ flexShrink: 0 }}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </Link>
      </div>
    </div>
  )
}
