import type { Metadata } from 'next'
import Link from 'next/link'
import { Arrow, Reveal, SectionHead } from '@/components/ep/ui'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Warranty',
  description: 'Earth Power battery warranty coverage, conditions, and claim support information.',
}

export default function WarrantyPage() {
  return (
    <>
      <section className="ph-hero dark">
        <div className="wrap">
          <div className="crumb"><Link href="/">Home</Link> / <b>Warranty</b></div>
          <div className="eyebrow" style={{ color: 'var(--signal)' }}>Warranty</div>
          <h1>Manufacturer <em>Warranty</em></h1>
          <p className="lead">Earth Power batteries are backed by a manufacturer warranty governed by the applicable written warranty document. Review our coverage terms and conditions below.</p>
          <div className="cta-row">
            <Link href="/contact" className="btn btn-primary">Contact support <Arrow /></Link>
            <Link href="/products" className="btn btn-outline">Product datasheets</Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="Warranty terms" title={<>What our documents <span className="hl">state</span></>} lead="These terms are quoted from Earth Power's published datasheets and Terms of Service. For the complete written warranty document, contact Earth Power." />
          <div className="wcols">
            <Reveal>
              <h3>Coverage</h3>
              <ul className="note-list">
                <li><b>Warranty coverage</b> is provided by Earth Power for its battery models.</li>
                <li>“The warranty is governed by the applicable written warranty document” (every datasheet).</li>
                <li>“Warranty terms are subject to the specific documentation provided with your purchase” (Terms of Service).</li>
                <li>Earth Power stands behind its products with comprehensive warranties and 24/7 support.</li>
              </ul>
              <p className="src mono">Sources: model datasheets · Terms of Service</p>
            </Reveal>
            <Reveal delay={90}>
              <h3>Important conditions</h3>
              <ul className="note-list">
                <li>Any tampering, unapproved cell modification, exposure to unauthorized charging parameters, or physical damage voids the manufacturer&apos;s warranty.</li>
                <li>Installation, commissioning and maintenance should be carried out by suitably qualified personnel in line with the approved product manual.</li>
                <li>Use a charging system configured for the approved LiFePO₄ battery voltage and manufacturer-approved charging limits.</li>
                <li>Do not use a battery that is visibly damaged, unusually hot, swollen, leaking or giving abnormal indications.</li>
              </ul>
              <p className="src mono">Sources: Terms of Service · model datasheets (safety &amp; handling)</p>
            </Reveal>
          </div>
          <Reveal className="gap">
            <h4>Claims &amp; further detail</h4>
            <ul className="note-list">
              <li>For the full written warranty document, the claim procedure and proof-of-purchase requirements, please contact Earth Power directly.</li>
            </ul>
            <p style={{ marginTop: 12, fontSize: '.9rem', color: 'var(--tx-2)' }}>
              <a className="link" href={`mailto:${SITE.email}`}>{SITE.email}</a> · <a className="link" href={SITE.phoneHref}>{SITE.phone}</a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
