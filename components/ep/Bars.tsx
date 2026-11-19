'use client'

import { useEffect, useRef, useState } from 'react'

/** Bar track whose fill animates from 0 when scrolled into view (instant with reduced motion). */
export function Fill({ w, cls = '', style }: { w: number; cls?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLElement>(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setOn(true)
      return
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setOn(true)
        io.disconnect()
      }
    })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <i
      ref={ref as React.RefObject<HTMLElement>}
      className={cls}
      style={{ width: `${w}%`, transform: on ? 'scaleX(1)' : 'scaleX(0)', transition: 'transform 1.1s cubic-bezier(.2,.7,.2,1)', ...style }}
    />
  )
}
