'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { CATEGORIES, type Category } from '@/data/products'

const CAT_MAP = new Map(CATEGORIES.map((c) => [c.id, c.label]))

function resolveBackTarget(
  productCategory: Category,
  rawCat: string | null,
  fromParam: string | null,
  qParam: string | null,
  sortParam: string | null,
) {
  const qs = new URLSearchParams()
  let label = CAT_MAP.get(productCategory) ?? 'Products'

  if (fromParam === 'all') {
    label = 'All models'
  } else if (rawCat && CAT_MAP.has(rawCat as Category)) {
    qs.set('category', rawCat)
    label = CAT_MAP.get(rawCat as Category)!
  } else {
    qs.set('category', productCategory)
  }

  if (qParam) qs.set('q', qParam)
  if (sortParam && sortParam !== 'v') qs.set('sort', sortParam)

  const query = qs.toString()
  return {
    href: query ? `/products?${query}` : '/products',
    label,
  }
}

export function ProductBackButton({ productCategory }: { productCategory: Category }) {
  const params = useSearchParams()
  const { href, label } = resolveBackTarget(
    productCategory,
    params.get('category'),
    params.get('from'),
    params.get('q'),
    params.get('sort'),
  )

  return (
    <div className="pd-back">
      <Link href={href} className="btn btn-outline btn-sm">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ flexShrink: 0 }}>
          <path d="M19 12H5M11 6l-6 6 6 6" />
        </svg>
        Back to {label}
      </Link>
    </div>
  )
}

export function ProductBottomBackLink({ productCategory }: { productCategory: Category }) {
  const params = useSearchParams()
  const { href, label } = resolveBackTarget(
    productCategory,
    params.get('category'),
    params.get('from'),
    params.get('q'),
    params.get('sort'),
  )

  return (
    <Link href={href}>
      Back to category<b>{label}</b>
    </Link>
  )
}
