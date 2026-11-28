import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/data/products'
import { Arrow, DatasheetButton } from './ui'

export default function ProductCard({
  p,
  priority = false,
  contextQuery = '',
}: {
  p: Product
  priority?: boolean
  contextQuery?: string
}) {
  const href = `/products/${p.id}${contextQuery}`
  return (
    <article className="pcard" data-id={p.id}>
      <Link className="ph" href={href} aria-label={`${p.id} details`}>
        <span className="vtag">{p.voltage}</span>
        <Image
          src={p.image}
          alt={`Earth Power ${p.id} LiFePO4 battery`}
          width={600}
          height={600}
          sizes="(max-width: 640px) 100vw, (max-width: 1180px) 50vw, 25vw"
          priority={priority}
          style={{ objectFit: 'contain' }}
        />
      </Link>
      <div className="pb">
        <div className="mod">
          <Link href={href}>{p.id}</Link>
        </div>
        <p className="nm">{p.name}</p>
        <div className="sp3">
          {p.headline.slice(0, 3).map(([k, v]) => (
            <div key={k}><small>{k}</small><b>{v}</b></div>
          ))}
        </div>
        <div className="chips">
          {p.chips.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
        <div className="acts">
          <Link className="btn btn-dark btn-sm" href={href}>
            View details <Arrow />
          </Link>
          <DatasheetButton p={p} />
        </div>
      </div>
    </article>
  )
}
