'use client'

import Link from 'next/link'
import { Fragment, useMemo, useState, useEffect, useRef } from 'react'
import { CATEGORIES, PRODUCTS, type Category } from '@/data/products'
import ProductCard from './ProductCard'
import Pagination from './Pagination'
import { Arrow, SectionHead } from './ui'

type Sort = 'v' | 'e' | 'm'

const PAGE_SIZE = 6

type P = (typeof PRODUCTS)[number]
type Cell = React.ReactNode | undefined
const spec = (p: P, ...keys: string[]): string | undefined => {
  for (const k of keys) {
    const v = p.specs.find(([sk]) => sk === k)?.[1]
    if (v) return v
  }
  return undefined
}
const isBess = (p: P) => p.category === 'bess'
const CAT_LABEL: Record<string, string> = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.label]))

/** Comparison rows. A row returns undefined where a model has no such figure (shown as "—"). */
const ROWS: { group?: string; label: string; get: (p: P) => Cell }[] = [
  { group: 'All models', label: 'Category', get: (p) => CAT_LABEL[p.category] },
  { label: 'Nominal voltage', get: (p) => (isBess(p) ? spec(p, 'Rated DC voltage', 'Rated voltage') : p.voltage) },
  { label: 'Nominal energy', get: (p) => p.energy },
  { label: 'Cell configuration', get: (p) => (isBess(p) ? spec(p, 'Battery configuration', 'Configuration') : p.cfg) },
  { label: 'Operating temperature', get: (p) => (isBess(p) ? spec(p, 'Operating temperature', 'Ambient temperature') : spec(p, 'Operating temperature', 'Operating / storage temperature')) },
  { label: 'Product weight', get: (p) => spec(p, 'Weight', 'Product weight') },
  { label: 'Dimensions', get: (p) => spec(p, 'Dimensions (L × W × H)', 'Dimensions (W × D × H)') },
  { group: 'Batteries', label: 'Nominal capacity', get: (p) => (isBess(p) ? undefined : p.capacity) },
  { label: 'BMS', get: (p) => (isBess(p) ? undefined : p.bms) },
  { label: 'Specified voltage range', get: (p) => (isBess(p) ? undefined : p.range) },
  { label: 'Charge current (peak / max. continuous)', get: (p) => (isBess(p) ? undefined : `${p.chg} A`) },
  { label: 'Discharge current (peak / max. continuous)', get: (p) => (isBess(p) ? undefined : `${p.dis} A`) },
  { label: 'Peak discharge (duration)', get: (p) => (isBess(p) ? undefined : p.peak) },
  { label: 'Parallel communication', get: (p) => (p.parallel ? `Up to ${p.parallel} batteries` : undefined) },
  { label: 'Parallel balancing current', get: (p) => (p.balancing ? `${p.balancing} A` : undefined) },
  { group: 'BESS systems', label: 'Rated power', get: (p) => (isBess(p) ? spec(p, 'Rated power', 'Rated AC power') : undefined) },
  { label: 'Battery cell', get: (p) => (isBess(p) ? spec(p, 'Cell') : undefined) },
  { label: 'AC voltage / output', get: (p) => (isBess(p) ? spec(p, 'Rated AC voltage', 'AC output') : undefined) },
  { label: 'Thermal management', get: (p) => (isBess(p) ? spec(p, 'Thermal management', 'Cooling · fire protection') : undefined) },
  { label: 'Fire protection', get: (p) => (isBess(p) ? spec(p, 'Fire protection') : undefined) },
  { label: 'Protection · corrosion', get: (p) => (isBess(p) ? spec(p, 'Protection · corrosion', 'Protection') : undefined) },
  { label: 'Efficiency', get: (p) => (isBess(p) ? spec(p, 'AC–AC round-trip efficiency', 'DC round-trip efficiency') : undefined) },
  {
    group: 'Documents',
    label: 'Datasheet / catalogue',
    get: (p) => (
      <a className="link" href={p.datasheet} download={p.datasheetName}>{isBess(p) ? 'Catalogue PDF' : 'PDF'}</a>
    ),
  },
]

/** Rows with a value for one model, with group headings, for the stacked (mobile/tablet) comparison. */
function cardRows(p: P, visible: { row: (typeof ROWS)[number]; group?: string }[]) {
  const out: { group?: string; label: string; value: React.ReactNode }[] = []
  let current: string | undefined
  let shown: string | undefined
  visible.forEach(({ row, group }) => {
    if (group) current = group
    const v = row.get(p)
    if (v === undefined) return
    out.push({ group: current !== shown ? current : undefined, label: row.label, value: v })
    shown = current
  })
  return out
}

export default function ProductsBrowser() {
  const [group, setGroup] = useState<'All' | Category>('All')
  const [q, setQ] = useState('')
  const [sort, setSort] = useState<Sort>('v')
  const [page, setPage] = useState(1)
  const [cmp, setCmp] = useState<'All' | Category>('All')
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

  // Comparison table always covers every model, independent of the card filters above.
  const tableList = useMemo(() => (cmp === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.category === cmp)), [cmp])
  // Only rows that apply to the selected models; group headings follow the first visible row of each group.
  const visibleRows = useMemo(() => {
    let current: string | undefined
    let shown: string | undefined
    const out: { row: (typeof ROWS)[number]; group?: string }[] = []
    ROWS.forEach((row) => {
      if (row.group) current = row.group
      if (!tableList.some((p) => row.get(p) !== undefined)) return
      out.push({ row, group: current !== shown ? current : undefined })
      shown = current
    })
    return out
  }, [tableList])
  const catBands = CATEGORIES.map((c) => ({ ...c, count: tableList.filter((p) => p.category === c.id).length })).filter((c) => c.count > 0)

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
            title="Compare models"
            lead="Choose a category to compare its models side by side, or view all models. Every value is taken from the model's datasheet or the BESS catalogue. Select a model number for its full page. A dash (—) means the figure does not apply to that model or is not stated in its datasheet."
          />

          <div className="filters cmp-filters" role="group" aria-label="Choose models to compare">
            {[{ id: 'All' as const, label: 'All models' }, ...CATEGORIES].map((c) => (
              <button
                key={c.id}
                type="button"
                aria-pressed={cmp === c.id}
                aria-selected={cmp === c.id}
                onClick={() => setCmp(c.id)}
              >
                {c.label}
                <small>{c.id === 'All' ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === c.id).length}</small>
              </button>
            ))}
          </div>

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
                  <tr className="mx-bands">
                    <th scope="col" rowSpan={2} className="spec-sticky-col">Specification</th>
                    {catBands.map((c) => (
                      <th scope="colgroup" colSpan={c.count} key={c.id} className="mx-band">
                        <span>{c.label}</span>
                      </th>
                    ))}
                  </tr>
                  <tr className="mx-models">
                    {tableList.map((p) => (
                      <th scope="col" key={p.id}>
                        <Link href={`/products/${p.id}`}>{p.id}</Link>
                        <small><span>{p.voltage}</span> · <span>{p.category === 'bess' ? p.energy : p.capacity}</span></small>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {visibleRows.map(({ row, group }, i) => (
                    <Fragment key={row.label}>
                      {group && (
                        <tr className="mx-group">
                          <th scope="rowgroup" colSpan={tableList.length + 1}><span>{group}</span></th>
                        </tr>
                      )}
                      <tr className={i % 2 ? 'alt' : undefined}>
                        <th scope="row" className="spec-sticky-col">{row.label}</th>
                        {tableList.map((p) => {
                          const v = row.get(p)
                          return <td key={p.id} className={v === undefined ? 'na' : undefined}>{v === undefined ? '—' : v}</td>
                        })}
                      </tr>
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tablet / mobile: the same comparison as stacked cards — no horizontal scrolling */}
          <div className="cmp-cards" key={cmp}>
            {tableList.map((p) => (
              <details className="cmp-card" key={p.id} open={tableList.length <= 6}>
                <summary>
                  <span className="cmp-card-id">
                    <b>{p.id}</b>
                    <small>{p.voltage} · {p.category === 'bess' ? p.energy : p.capacity}</small>
                  </span>
                  <span className="cmp-card-chev" aria-hidden="true" />
                </summary>
                <dl>
                  {cardRows(p, visibleRows).map((r) => (
                    <Fragment key={r.label}>
                      {r.group && <div className="cmp-card-group">{r.group}</div>}
                      <div className="cmp-card-row"><dt>{r.label}</dt><dd>{r.value}</dd></div>
                    </Fragment>
                  ))}
                </dl>
                <Link className="btn btn-dark btn-sm" href={`/products/${p.id}`}>View {p.id} <Arrow /></Link>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

