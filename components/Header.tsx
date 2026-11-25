'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { NAV, SITE } from '@/lib/site'

const isActive = (path: string, href: string) =>
  href === '/' ? path === '/' : path === href || path.startsWith(href + '/')

export default function Header() {
  const pathname = usePathname() || '/'
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mnavTop, setMnavTop] = useState(72)
  const hdrRef = useRef<HTMLElement>(null)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const syncTop = () => {
      if (hdrRef.current) {
        setMnavTop(Math.max(0, Math.round(hdrRef.current.getBoundingClientRect().bottom)))
      }
    }
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      syncTop()
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', syncTop, { passive: true })
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', syncTop)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  useEffect(() => {
    if (open && hdrRef.current) {
      setMnavTop(Math.max(0, Math.round(hdrRef.current.getBoundingClientRect().bottom)))
    }
    document.documentElement.style.overflow = open ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>

      {/* Contact strip — requirement 11: contact details visible at the very top */}
      <div className="util dark" role="complementary" aria-label="Company contact details">
        <div className="wrap">
          <div className="l">
            <a href={`mailto:${SITE.email}`}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" style={{ flexShrink: 0 }}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
              {SITE.email}
            </a>
            <a href={SITE.phoneHref}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" style={{ flexShrink: 0 }}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" /></svg>
              {SITE.phone}
            </a>
            <span>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" style={{ flexShrink: 0 }}><path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
              <span className="addr-full">{SITE.address}</span>
              <span className="addr-short">{SITE.addressShort}</span>
            </span>
          </div>
          <div className="r"><span>{SITE.hours}</span></div>
        </div>
      </div>

      <header id="hdr" ref={hdrRef} className={scrolled ? 'sh' : ''}>
        <div className="wrap nav">
          <Link href="/" className="logo" aria-label="Earth Power — home">
            <Image src="/brand/earthpower-logo.png" alt="Earth Power" width={117} height={46} priority style={{ height: 46, width: 'auto' }} />
          </Link>
          <nav className="menu" aria-label="Primary">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} aria-current={isActive(pathname, n.href) ? 'page' : undefined}>
                {n.name}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className="btn btn-dark btn-sm">Request a quote</Link>
          <button
            className="burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mnav"
            onClick={() => setOpen((o) => !o)}
          >
            <i />
          </button>
        </div>
      </header>

      <nav
        className={`mnav${open ? ' on' : ''}`}
        id="mnav"
        aria-label="Mobile"
        aria-hidden={!open}
        style={{ top: `${mnavTop}px` }}
      >
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} aria-current={isActive(pathname, n.href) ? 'page' : undefined} tabIndex={open ? 0 : -1}>
            {n.name} <span>→</span>
          </Link>
        ))}
        <Link href="/contact" className="btn btn-primary" tabIndex={open ? 0 : -1}>Request a quote</Link>
      </nav>
    </>
  )
}
