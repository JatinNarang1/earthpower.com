'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { PRODUCTS, VOLTAGE_GROUPS } from '@/data/products'
import ProductCard from './ProductCard'
import { Arrow, SectionHead } from './ui'

type Sort = 'v' | 'e' | 'm'

const ROWS: [string, (p: (typeof PRODUCTS)[number]) => React.ReactNode][] = [
  ['Nominal voltage', (p) => p.voltage],
  ['Nominal capacity', (p) => p.capacity],
  ['Nominal energy', (p) => p.energy],
  ['Cell configuration', (p) => p.cfg],
  ['BMS', (p) => p.bms],
  ['Specified voltage range', (p) => p.range],
  ['Peak charging current', (p) => `${p.chg} A`],
  ['Peak discharging current', (p) => `${p.dis} A`],
  ['Parallel communication', (p) => (p.parallel ? `Up to ${p.parallel} batteries` : 'Not specified')],
  ['Parallel balancing current', (p) => (p.balancing ? `${p.balancing} A` : 'Not specified')],
  ['Operating temperature', () => '−20 °C to 60 °C'],
  ['Product weight', (p) => p.weight],
  ['Dimensions (L × W × H)', (p) => p.dimensions],
  ['Warranty', () => '5 years'],
  [
    'Datasheet',
    (p) => (
      <a className="link" href={p.datasheet} download={p.datasheetName}>PDF</a>
    ),
  ],
]

export default function ProductsBrowser() {
  const [group, setGroup] = useState('All')
  const [q, setQ] = useState('')
  const [sort, setSort] = useState<Sort>('v')

  const list = useMemo(() => {
    let L = PRODUCTS.filter(
      (p) => (group === 'All' || p.group === group) && p.id.toLowerCase().includes(q.trim().toLowerCase()),
    )
    if (sort === 'e') L = [...L].sort((a, b) => parseFloat(b.kwh) - parseFloat(a.kwh))
    if (sort === 'm') L = [...L].sort((a, b) => a.id.localeCompare(b.id))
    return L
  }, [group, q, sort])

  return (
    <section className="sec paper" style={{ paddingTop: 'clamp(48px,6vw,80px)' }}>
      <div className="wrap">
        <div className="faqbar">
          <div className="filters" role="group" aria-label="Filter by nominal voltage">
            {['All', ...VOLTAGE_GROUPS].map((g) => (
              <button
                key={g}
                type="button"
                aria-pressed={group === g}
                aria-selected={group === g}
                onClick={() => setGroup(g)}
              >
                {g === 'All' ? 'All models' : g}
                <small>{g === 'All' ? PRODUCTS.length : PRODUCTS.filter((p) => p.group === g).length}</small>
              </button>
            ))}
          </div>
          <div className="tools">
            <div className="search">
              <label className="sr" htmlFor="psearch">Search by model number</label>
              <input id="psearch" type="search" placeholder="Search model number" autoComplete="off" value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
            <label className="sr" htmlFor="psort">Sort products</label>
            <select id="psort" value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
              <option value="v">Sort: voltage</option>
              <option value="e">Sort: energy (high–low)</option>
              <option value="m">Sort: model number</option>
            </select>
          </div>
        </div>
        <p className="mono" style={{ color: 'var(--mut)', marginBottom: 22 }} aria-live="polite">
          Showing {list.length} of {PRODUCTS.length} models
        </p>

        <div className="pgrid">
          {list.map((p, i) => (
            <ProductCard key={p.id} p={p} priority={i < 4} />
          ))}
        </div>
        {list.length === 0 && <p className="empty">No models match your search.</p>}

        <div className="custom-band">
          <div>
            <h3>Need a different configuration?</h3>
            <p>Custom Battery Solutions — tailored to your needs. Tell us your voltage, capacity and application.</p>
          </div>
          <Link className="btn btn-dark" href="/contact?topic=custom">Discuss a custom solution <Arrow /></Link>
        </div>

        <div className="matrix-wrap" id="compare">
          <SectionHead
            eyebrow="Technical specifications"
            title="Compare all models"
            lead="Every value is taken from the model's datasheet. Select a model number for its full page."
          />
          <div className="mx">
            <table style={{ minWidth: 1180 }}>
              <thead>
                <tr>
                  <th scope="col">Specification</th>
                  {PRODUCTS.map((p) => (
                    <th scope="col" key={p.id}>
                      <Link href={`/products/${p.id}`}>{p.id}</Link>
                      <small>{p.voltage} · {p.capacity}</small>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map(([k, f]) => (
                  <tr key={k}>
                    <th scope="row">{k}</th>
                    {PRODUCTS.map((p) => {
                      const v = f(p)
                      return <td key={p.id} className={v === 'Not specified' ? 'na' : undefined}>{v}</td>
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
