'use client'

import Link from 'next/link'
import { useMemo, useState, useEffect, useRef } from 'react'
import { CATEGORIES, PRODUCTS, type Category } from '@/data/products'
import ProductCard from './ProductCard'
import Pagination from './Pagination'
import { Arrow, SectionHead } from './ui'

type Sort = 'v' | 'e' | 'm'

const PAGE_SIZE = 6

const ROWS: [string, (p: (typeof PRODUCTS)[number]) => React.ReactNode][] = [
  ['Nominal voltage', (p) => p.voltage],
  ['Nominal capacity', (p) => p.capacity],
  ['Nominal energy', (p) => p.energy],
  ['Cell configuration', (p) => p.cfg],
  ['BMS', (p) => p.bms],
  ['Specified voltage range', (p) => p.range],
  ['Charge current (peak / max. continuous)', (p) => `${p.chg} A`],
  ['Discharge current (peak / max. continuous)', (p) => `${p.dis} A`],
  ['Peak discharge (duration)', (p) => (p.peak ? p.peak : 'Not specified')],
  ['Parallel communication', (p) => (p.parallel ? `Up to ${p.parallel} batteries` : 'Not specified')],
  ['Parallel balancing current', (p) => (p.balancing ? `${p.balancing} A` : 'Not specified')],
  ['Operating temperature', () => '−20 °C to 60 °C'],
  ['Product weight', (p) => p.weight ?? 'Not specified'],
  ['Dimensions (L × W × H)', (p) => p.dimensions ?? 'Not specified'],
  [
    'Datasheet',
    (p) => (
      <a className="link" href={p.datasheet} download={p.datasheetName}>PDF</a>
    ),
  ],
]

export default function ProductsBrowser() {
  const [group, setGroup] = useState<'All' | Category>('All')
  const [q, setQ] = useState('')
  const [sort, setSort] = useState<Sort>('v')
  const [page, setPage] = useState(1)
  const tableRef = useRef<HTMLDivElement>(null)

  const list = useMemo(() => {
    let L = PRODUCTS.filter(
      (p) => (group === 'All' || p.category === group) && p.id.toLowerCase().includes(q.trim().toLowerCase()),
    )
    if (sort === 'e') L = [...L].sort((a, b) => parseFloat(b.kwh) - parseFloat(a.kwh))
    if (sort === 'm') L = [...L].sort((a, b) => a.id.localeCompare(b.id))
    return L
  }, [group, q, sort])

  // Reset page whenever filter, search or sorting changes
  useEffect(() => {
    setPage(1)
  }, [group, q, sort])

  const totalPages = Math.ceil(list.length / PAGE_SIZE)

  // Comparison table: BESS systems have their own spec rows, so they are compared among themselves.
  const bessOnly = list.length > 0 && list.every((p) => p.category === 'bess')
  const tableList = bessOnly ? list : list.filter((p) => p.category !== 'bess')
  const bessRows: [string, (p: (typeof PRODUCTS)[number]) => React.ReactNode][] = useMemo(() => {
    const keys: string[] = []
    list.forEach((p) => p.specs.forEach(([k]) => !keys.includes(k) && keys.push(k)))
    return [
      ...keys.map((k): [string, (p: (typeof PRODUCTS)[number]) => React.ReactNode] => [
        k,
        (p) => p.specs.find(([sk]) => sk === k)?.[1] ?? 'Not specified',
      ]),
      ['Catalogue', (p) => <a className="link" href={p.datasheet} download={p.datasheetName}>PDF</a>],
    ]
  }, [list])
  const rows = bessOnly ? bessRows : ROWS

  const paginatedList = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE
    return list.slice(start, start + PAGE_SIZE)
  }, [list, page])

  const scrollTable = (dir: 'left' | 'right') => {
    if (!tableRef.current) return
    const offset = dir === 'left' ? -280 : 280
    tableRef.current.scrollBy({ left: offset, behavior: 'smooth' })
  }

  return (
    <section className="sec paper" style={{ paddingTop: 'clamp(48px,6vw,80px)' }}>
      <div className="wrap">
        <div className="faqbar" id="products-top">
          <div className="filters" role="group" aria-label="Filter by nominal voltage">
            {[{ id: 'All' as const, label: 'All models' }, ...CATEGORIES].map((c) => (
              <button
                key={c.id}
                type="button"
                aria-pressed={group === c.id}
                aria-selected={group === c.id}
                onClick={() => setGroup(c.id)}
              >
                {c.label}
                <small>{c.id === 'All' ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === c.id).length}</small>
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
              <option value="v">Sort: catalogue order</option>
              <option value="e">Sort: energy (high–low)</option>
              <option value="m">Sort: model number</option>
            </select>
          </div>
        </div>

        <p className="mono" style={{ color: 'var(--mut)', marginBottom: 22 }} aria-live="polite">
          Showing {list.length === 0 ? 0 : `${(page - 1) * PAGE_SIZE + 1}–${Math.min(page * PAGE_SIZE, list.length)}`} of {list.length} matching models ({PRODUCTS.length} total)
        </p>

        <div className="pgrid" id="products-grid">
          {paginatedList.map((p, i) => (
            <ProductCard key={p.id} p={p} priority={page === 1 && i < 3} />
          ))}
        </div>
        {list.length === 0 && <p className="empty">No models match your search.</p>}

        {/* Pagination component */}
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          totalItems={list.length}
          pageSize={PAGE_SIZE}
          onPageChange={setPage}
          itemLabel="models"
          scrollTargetId="products-top"
        />

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
            lead="Every value is taken from the model's datasheet; values a datasheet does not state are marked “Not specified”. Select a model number for its full page. BESS systems are compared under the BESS filter."
          />

          <div className="mx-card">
            <div className="mx-scroll-bar">
              <span className="mx-scroll-hint">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <span>Scroll horizontally to compare all <strong>{tableList.length}</strong> models</span>
              </span>
              <div className="mx-scroll-actions" aria-label="Table navigation controls">
                <button
                  type="button"
                  className="mx-scroll-btn"
                  onClick={() => scrollTable('left')}
                  aria-label="Scroll comparison table left"
                  title="Scroll left"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" style={{ flexShrink: 0 }}>
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="mx-scroll-btn"
                  onClick={() => scrollTable('right')}
                  aria-label="Scroll comparison table right"
                  title="Scroll right"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" style={{ flexShrink: 0 }}>
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>

            <div
              className="mx"
              ref={tableRef}
              tabIndex={0}
              role="region"
              aria-label="Product technical specifications comparison table"
            >
              <table className="spec-table">
                <thead>
                  <tr>
                    <th scope="col" className="spec-sticky-col">Specification</th>
                    {tableList.map((p) => (
                      <th scope="col" key={p.id}>
                        <Link href={`/products/${p.id}`}>{p.id}</Link>
                        <small>{p.category === 'bess' ? `${p.energy} · ${p.headline[3][1]}` : `${p.voltage} · ${p.capacity}`}</small>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map(([k, f]) => (
                    <tr key={k}>
                      <th scope="row" className="spec-sticky-col">{k}</th>
                      {tableList.map((p) => {
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
      </div>
    </section>
  )
}

