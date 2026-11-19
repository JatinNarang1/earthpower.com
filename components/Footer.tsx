import Link from 'next/link'
import Image from 'next/image'
import { NAV, SITE } from '@/lib/site'

export default function Footer() {
  return (
    <>
      <section className="ctab">
        <div className="wrap">
          <div>
            <h2>Ready to Power Your Future?</h2>
            <p>Get in touch with us to learn more about our LiFePO4 battery solutions.</p>
          </div>
          <Link href="/contact" className="btn btn-dark">
            Contact Us
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="fgrid">
            <div>
              <Link href="/" className="flogo" aria-label="Earth Power home">
                <Image src="/brand/earthpower-logo.png" alt="Earth Power" width={105} height={42} style={{ height: 42, width: 'auto' }} />
              </Link>
              <p style={{ maxWidth: '34ch' }}>
                Pioneering sustainable energy storage with advanced LiFePO4 technology. Engineered for performance, safety, and the future.
              </p>
            </div>
            <div>
              <h4>Explore</h4>
              <ul>
                {NAV.map((n) => (
                  <li key={n.href}><Link href={n.href}>{n.name}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Contact Us</h4>
              <ul>
                <li>{SITE.address}</li>
                <li><a href={SITE.phoneHref}>{SITE.phone}</a></li>
                <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
                <li>{SITE.hours}</li>
              </ul>
            </div>
            <div>
              <h4>Resources</h4>
              <ul>
                <li><Link href="/products">Product datasheets</Link></li>
                <li><Link href="/warranty#register">Register your warranty</Link></li>
                <li><Link href="/app">Customer &amp; dealer apps</Link></li>
                <li><Link href="/faq">Frequently asked questions</Link></li>
              </ul>
            </div>
          </div>
          <div className="fbot">
            <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
            <div>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/privacy-app">App Privacy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
