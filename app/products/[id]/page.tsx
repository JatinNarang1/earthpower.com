import type { Metadata } from 'next'
import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CATEGORIES, PRODUCTS, SAFETY, TWO_WHEELER_SAFETY, getProduct } from '@/data/products'
import { Arrow, DatasheetButton, PageHero } from '@/components/ep/ui'
import { ProductBackButton, ProductBottomBackLink } from '@/components/ep/ProductBackLink'

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }))
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const p = getProduct(params.id)
  if (!p) return { title: 'Product not found' }
  return {
    title: p.category === 'bess' ? `${p.energy} ${p.name}` : `${p.id} — ${p.voltage} ${p.capacity} ${p.name}`,
    description: p.category === 'bess'
      ? `Earth Power ${p.name} — ${p.energy}, ${p.headline[1][1]}, ${p.voltage}. Liquid-cooled LFP battery energy storage system. Download the BESS catalogue (PDF).`
      : `Earth Power ${p.id}: ${p.voltage}, ${p.capacity}, ${p.energy} LiFePO4 battery with Bluetooth BMS. Download the datasheet (PDF).`,
  }
}

const Warn = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l10 18H2z" /><path d="M12 10v5M12 18h.01" /></svg>
)

export default function ProductPage({ params }: { params: { id: string } }) {
  const p = getProduct(params.id)
  if (!p) notFound()
  const i = PRODUCTS.indexOf(p)
  const prev = PRODUCTS[(i + PRODUCTS.length - 1) % PRODUCTS.length]
  const next = PRODUCTS[(i + 1) % PRODUCTS.length]
  const catLabel = CATEGORIES.find((c) => c.id === p.category)?.label ?? 'Products'

  return (
    <>
      <section className="ph-hero dark" style={{ paddingBottom: 'clamp(36px,4vw,56px)' }}>
        <div className="wrap">
          <div className="crumb" style={{ marginBottom: 0 }}>
            <Link href="/">Home</Link> / <Link href="/products">Products</Link> / <Link href={`/products?category=${p.category}`}>{catLabel}</Link> / <b>{p.id}</b>
          </div>
        </div>
      </section>

      <section className="sec paper" style={{ paddingTop: 'clamp(32px,4.5vw,56px)' }}>
        <div className="wrap">
          <Suspense
            fallback={
              <div className="pd-back">
                <Link href={`/products?category=${p.category}`} className="btn btn-outline btn-sm">
                  ← Back to {catLabel}
                </Link>
              </div>
            }
          >
            <ProductBackButton productCategory={p.category} />
          </Suspense>
          <div className="pd">
            <div className="photo">
              <span className="vtag">{p.voltage}</span>
              <Image src={p.image} alt={p.category === 'bess' ? `Earth Power ${p.energy} ${p.name}` : `Earth Power ${p.id} LiFePO4 battery photograph`} width={900} height={900} priority sizes="(max-width: 960px) 90vw, 45vw" style={{ objectFit: 'contain' }} />
            </div>
            <div>
              <div className="mlab">{p.category === 'bess' ? 'Battery energy storage system' : 'Model number'}</div>
              <h1>{p.category === 'bess' ? `BESS ${p.energy}` : p.id}</h1>
              <p className="sub">{p.category === 'bess' ? `${p.name} · ${p.headline[1][1]}, ${p.voltage}` : `${p.name} · ${p.voltage}, ${p.capacity}, ${p.energy}`}</p>
              <div className="sp4">
                {p.headline.map(([k, v]) => (
                  <div key={k}><small>{p.category === 'bess' ? k : k === 'Voltage' ? 'Nominal voltage' : k === 'Capacity' ? 'Nominal capacity' : k === 'Energy' ? 'Nominal energy' : k}</small><b>{v}</b></div>
                ))}
              </div>
              <div className="acts">
                <DatasheetButton p={p} cls="btn-primary" />
                <Link className="btn btn-dark" href={`/contact?model=${p.id}`}>Request a quote <Arrow /></Link>
              </div>

              <h2>Key features</h2>
              <ul className="ticks2">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>

              <h2>Applications</h2>
              <div className="chips">{p.applications.map((a) => <span key={a}>{a}</span>)}</div>
              <p style={{ fontSize: '.82rem', color: 'var(--mut)', marginTop: -6 }}>
                {p.category === 'storage' && 'Datasheet: compatible inverter and stationary energy-storage applications. Home backup and solar storage per the Earth Power website.'}
                {p.category === 'highvoltage' && 'Datasheet: compatible high-voltage inverter and stationary energy-storage applications.'}
                {p.category === 'rack' && 'Datasheet: compatible high-voltage inverter, commercial and industrial energy-storage applications.'}
                {p.category === 'twowheeler' && 'Datasheet: compatible electric two-wheeler and scooter applications.'}
                {p.category === 'bess' && 'Application areas as listed in the Earth Power BESS catalogue.'}
              </p>

              {p.highVoltage && (
                <div className="hv" style={{ marginTop: 22 }}>
                  <Warn />
                  <div>
                    <h3>High-voltage DC · up to {p.maxVoltage}</h3>
                    <p>Use insulated tools and suitable protective equipment, and isolate the battery before working on terminals or wiring. Use only with inverters or power conversion systems rated for the {p.range} window. Installation by suitably qualified personnel only.</p>
                  </div>
                </div>
              )}

              <h2>Technical specifications</h2>
              <table className="st">
                <tbody>
                  {p.specs.map(([k, v]) => (
                    <tr key={k}><th scope="row">{k}</th><td>{v}</td></tr>
                  ))}
                </tbody>
              </table>

              {p.integration.length > 0 && (
                <>
                  <h2>System integration{p.parallel ? ' & expansion' : ''}</h2>
                  <ul className="note-list">
                    {p.integration.map(([k, v]) => <li key={k}><b>{k}:</b> {v}</li>)}
                  </ul>
                </>
              )}

              {p.category === 'bess' ? (
                <>
                  <h2>Project information</h2>
                  <p style={{ color: 'var(--tx-2)' }}>
                    {p.note}{' '}
                    <Link className="link" href={`/contact?model=${p.id}`}>Discuss this system</Link>
                  </p>
                </>
              ) : (
                <>
                  <h2>Safety, handling &amp; installation</h2>
                  <ul className="note-list">
                    {p.highVoltage && (
                      <li><b>High-voltage DC:</b> this {p.category === 'rack' ? 'battery system' : 'battery'} operates at up to {p.maxVoltage} DC. Use insulated tools and suitable protective equipment, and isolate the battery before working on terminals or wiring.</li>
                    )}
                    {(p.category === 'twowheeler' ? TWO_WHEELER_SAFETY : SAFETY).map((s) => <li key={s}>{s}</li>)}
                  </ul>

                  <h2>Warranty</h2>
                  <p style={{ color: 'var(--tx-2)' }}>
                    Earth Power batteries are covered by a manufacturer warranty governed by the applicable written warranty document.{' '}
                    <Link className="link" href="/warranty">Warranty terms &amp; coverage</Link>
                  </p>

                  <h2>General disclaimer</h2>
                  <p style={{ color: 'var(--mut)', fontSize: '.9rem' }}>
                    Specifications and operating limits must be checked against the latest approved product documentation before purchase, installation or commissioning. System performance depends on installation conditions, inverter configuration, charging source, operating profile and ambient temperature. The warranty is governed by the applicable written warranty document.
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="pnav">
            <Link href={`/products/${prev.id}`}>← Previous model<b>{prev.id}</b></Link>
            <Suspense fallback={<Link href={`/products?category=${p.category}`}>Back to category<b>{catLabel}</b></Link>}>
              <ProductBottomBackLink productCategory={p.category} />
            </Suspense>
            <Link href={`/products/${next.id}`}>Next model →<b>{next.id}</b></Link>
          </div>
        </div>
      </section>
    </>
  )
}
