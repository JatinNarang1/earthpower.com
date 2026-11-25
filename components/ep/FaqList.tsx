'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { FAQ } from '@/data/faq'
import { Arrow, RichText } from './ui'
import { SITE } from '@/lib/site'

const CATS = ['All', ...Array.from(new Set(FAQ.map((f) => f.cat)))]
const plain = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')

export default function FaqList() {
  const [cat, setCat] = useState('All')
  const [q, setQ] = useState('')
  const [open, setOpen] = useState<number | null>(null)

  const items = useMemo(() => {
    const n = q.trim().toLowerCase()
    return FAQ.map((f, i) => ({ ...f, i })).filter(
      (f) => (cat === 'All' || f.cat === cat) && (!n || `${f.q} ${plain(f.a)}`.toLowerCase().includes(n)),
    )
  }, [cat, q])

  return (
    <div className="wrap" style={{ maxWidth: 960 }}>
      <div className="faqbar">
        <div className="filters" role="group" aria-label="FAQ topics">
          {CATS.map((c) => (
            <button key={c} type="button" aria-pressed={cat === c} aria-selected={cat === c} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <div className="tools">
          <div className="search">
            <label className="sr" htmlFor="fsearch">Search questions</label>
            <input id="fsearch" type="search" placeholder="Search questions" autoComplete="off" value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
        </div>
      </div>

      <div>
        {items.map((f) => {
          const isOpen = open === f.i
          return (
            <div key={f.i} className={`faq-item${isOpen ? ' open' : ''}`}>
              <button className="faq-q" aria-expanded={isOpen} aria-controls={`fa${f.i}`} id={`fq${f.i}`} onClick={() => setOpen(isOpen ? null : f.i)}>
                <div><small>{f.cat}</small><h3>{f.q}</h3></div>
                <span className="pm" aria-hidden="true" />
              </button>
              <div className="faq-a" id={`fa${f.i}`} role="region" aria-labelledby={`fq${f.i}`}>
                <div><p><RichText text={f.a} /></p></div>
              </div>
            </div>
          )
        })}
      </div>
      {items.length === 0 && (
        <p className="empty">No questions match. Try another word, or <Link className="link" href="/contact">contact us</Link>.</p>
      )}

      <div className="custom-band">
        <div>
          <h3>Still have a question?</h3>
          <p>Email {SITE.email} or call {SITE.phone} ({SITE.hours.replace(' · ', ', ')}).</p>
        </div>
        <Link className="btn btn-dark" href="/contact">Contact us <Arrow /></Link>
      </div>
    </div>
  )
}
