import type { Metadata } from 'next'
import Link from 'next/link'
import { Arrow, PageHero, Reveal, SectionHead } from '@/components/ep/ui'
import WarrantyForm from '@/components/ep/WarrantyForm'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Warranty & Registration',
  description: 'Earth Power battery warranty information and online warranty registration.',
}

export default function WarrantyPage() {
  return (
    <>
      <section className="ph-hero dark">
        <div className="wrap">
          <div className="crumb"><Link href="/">Home</Link> / <b>Warranty</b></div>
          <div className="eyebrow" style={{ color: 'var(--signal)' }}>Warranty &amp; registration</div>
          <h1>Warranty <em>&amp; registration</em></h1>
          <p className="lead">Earth Power batteries are backed by a manufacturer warranty. Register your battery below so your purchase details are on record.</p>
          <div className="cta-row">
            <a href="#register" className="btn btn-primary">Register your battery <Arrow /></a>
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

      <section className="sec paper" id="register">
        <div className="wrap">
          <div className="wreg">
            <div>
              <div className="eyebrow">Warranty registration</div>
              <h2 style={{ marginBottom: 20 }}>Register your <span className="hl">battery</span></h2>
              <p className="lead">Keep your purchase on record. Have these details ready:</p>
              <ul className="need">
                <li>Product model <span>Required</span></li>
                <li>Battery serial number <span>Required</span></li>
                <li>Purchase date <span>Required</span></li>
                <li>Dealer name &amp; location <span>Required</span></li>
                <li>Purchase invoice number <span>Optional</span></li>
              </ul>
              <p style={{ marginTop: 22, fontSize: '.9rem', color: 'var(--mut)' }}>The EarthPower app also supports warranty tracking and an optional QR / barcode scan on the battery casing for warranty registration. <Link className="link" href="/app">About the app</Link></p>
            </div>
            <WarrantyForm />
          </div>
        </div>
      </section>
    </>
  )
}
