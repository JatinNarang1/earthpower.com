'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import type { Product } from '@/data/products'

export const Arrow = ({ size = 16, className = '' }: { size?: number; className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={`ico-arrow ${className}`.trim()}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const DownloadIcon = ({ size = 16, className = '' }: { size?: number; className?: string }) => (
  <svg
    className={`dl ${className}`.trim()}
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <path d="M12 3v12M7 11l5 5 5-5M4 21h16" />
  </svg>
)

/** Scroll-triggered reveal. Content is visible without JS and with reduced motion. */
export function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'article' | 'section' | 'li'
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [armed, setArmed] = useState(false)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setShown(true)
      return
    }
    setArmed(true)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true)
            io.disconnect()
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const Comp = Tag as any
  return (
    <Comp
      ref={ref}
      className={`${armed ? 'rv' : ''} ${shown ? 'in' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Comp>
  )
}

export function PageHero({
  crumbs,
  title,
  lead,
  children,
}: {
  crumbs: { label: string; href?: string }[]
  title: React.ReactNode
  lead?: string
  children?: React.ReactNode
}) {
  return (
    <section className="ph-hero dark">
      <div className="wrap">
        <div className="crumb">
          <Link href="/">Home</Link>
          {crumbs.map((c, i) => (
            <span key={i}>
              {' / '}
              {c.href ? <Link href={c.href}>{c.label}</Link> : <b>{c.label}</b>}
            </span>
          ))}
        </div>
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
    </section>
  )
}

export function SectionHead({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string
  title: React.ReactNode
  lead?: string
}) {
  return (
    <div className="head">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
      </div>
      {lead && <p className="lead">{lead}</p>}
    </div>
  )
}

export function DatasheetButton({ p, cls = 'btn-outline btn-sm' }: { p: Product; cls?: string }) {
  return (
    <a className={`btn ${cls}`} href={p.datasheet} download={p.datasheetName} data-ds={p.id}>
      <DownloadIcon />
      Download Datasheet (PDF)
    </a>
  )
}

/** Renders text containing [label](/path) links. */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g)
  return (
    <>
      {parts.map((s, i) => {
        const m = s.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (!m) return <span key={i}>{s}</span>
        return (
          <Link key={i} href={m[2]}>
            {m[1]}
          </Link>
        )
      })}
    </>
  )
}
