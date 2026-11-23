'use client'

import Link from 'next/link'
import { useState, useMemo } from 'react'
import type { Product } from '@/data/products'
import { Fill } from './Bars'
import Pagination from './Pagination'

interface BmsPanelProps {
  products: Product[]
}

export function TechnologyBmsPanel({ products }: BmsPanelProps) {
  const PAGE_SIZE = 7
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(products.length / PAGE_SIZE)

  const pagedProducts = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE
    return products.slice(start, start + PAGE_SIZE)
  }, [products, page])

  return (
    <div className="panel" id="bms-panel">
      <div className="panel-h mono">
        <span>BMS by model</span>
        <b>Page {page} of {totalPages}</b>
      </div>
      <ul className="tele">
        {pagedProducts.map((p, i) => {
          const globalIdx = (page - 1) * PAGE_SIZE + i + 1
          return (
            <li key={p.id}>
              <small>{String(globalIdx).padStart(2, '0')}</small>
              <span>
                <Link href={`/products/${p.id}`} style={{ fontWeight: 600 }}>
                  {p.id}
                </Link>{' '}
                ·{' '}
                {p.category === 'rack'
                  ? 'ANT BMS + passive balancer'
                  : p.category === 'twowheeler'
                    ? 'Smart BMS + active balancer'
                    : p.jk
                      ? 'JK BMS + active balancer'
                      : 'JBD BMS'}
                {p.parallel ? ` · parallel ×${p.parallel}` : ''}
              </span>
              <i />
            </li>
          )
        })}
      </ul>
      <div style={{ padding: '0 16px' }}>
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          totalItems={products.length}
          pageSize={PAGE_SIZE}
          onPageChange={setPage}
          itemLabel="models"
        />
      </div>
    </div>
  )
}

interface EnergyChartProps {
  products: Product[]
}

export function TechnologyEnergyChart({ products }: EnergyChartProps) {
  const PAGE_SIZE = 7
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(products.length / PAGE_SIZE)

  const pagedProducts = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE
    return products.slice(start, start + PAGE_SIZE)
  }, [products, page])

  return (
    <div className="chart" style={{ maxWidth: 'none' }} id="chart-top">
      {pagedProducts.map((p) => (
        <div className="bar m" key={p.id}>
          <span>{p.id}</span>
          <div className="t">
            <Fill w={Number(((parseFloat(p.kwh) / 48) * 100).toFixed(1))} />
          </div>
          <b>{p.kwh}</b>
        </div>
      ))}
      <div className="axis m">
        <span>0</span>
        <span>24</span>
        <span>48 kWh</span>
      </div>
      <div style={{ marginTop: 12 }}>
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          totalItems={products.length}
          pageSize={PAGE_SIZE}
          onPageChange={setPage}
          itemLabel="models"
          scrollTargetId="chart-top"
        />
      </div>
    </div>
  )
}
