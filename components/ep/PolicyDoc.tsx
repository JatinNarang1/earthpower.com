import Link from 'next/link'
import { PageHero } from './ui'
import { POLICY_DATES, type PolicySection } from '@/data/policies'
import { SITE } from '@/lib/site'

const fill = (s: string) =>
  s.replace('{{EMAIL}}', SITE.email).replace('{{URL}}', SITE.url).replace('{{ADDRESS}}', SITE.address)

type Block = { t: 'p' | 'h'; s: string } | { t: 'ul'; items: string[] }

function toBlocks(lines: string[]): Block[] {
  const out: Block[] = []
  for (const raw of lines) {
    const l = fill(raw)
    if (l.startsWith('## ')) out.push({ t: 'h', s: l.slice(3) })
    else if (l.startsWith('- ')) {
      const last = out[out.length - 1]
      if (last && last.t === 'ul') last.items.push(l.slice(2))
      else out.push({ t: 'ul', items: [l.slice(2)] })
    } else out.push({ t: 'p', s: l })
  }
  return out
}

function ContactBlock() {
  return (
    <dl className="pol-contact">
      <div><dt>Company</dt><dd>EarthPower</dd></div>
      <div><dt>Email</dt><dd><a href={`mailto:${SITE.email}`}>{SITE.email}</a></dd></div>
      <div><dt>Website</dt><dd><a href={SITE.url}>{SITE.url.replace('https://', '')}</a></dd></div>
      <div><dt>Address</dt><dd>{SITE.address}</dd></div>
      <div><dt>Phone</dt><dd><a href={SITE.phoneHref}>{SITE.phone}</a></dd></div>
    </dl>
  )
}

export default function PolicyDoc({
  crumb,
  title,
  subtitle,
  intro,
  sections,
  other,
}: {
  crumb: string
  title: React.ReactNode
  subtitle: string
  intro: string
  sections: PolicySection[]
  other: { href: string; label: string }
}) {
  return (
    <>
      <PageHero crumbs={[{ label: crumb }]} title={title} lead={intro}>
        <p className="mono" style={{ marginTop: 22, color: 'var(--d-mut)' }}>
          {subtitle} · Effective {POLICY_DATES.effective} · Last updated {POLICY_DATES.updated}
        </p>
      </PageHero>

      <section className="sec paper" style={{ paddingTop: 'clamp(40px,5vw,72px)' }}>
        <div className="wrap">
          <div className="pol">
            <aside className="pol-toc" aria-label="On this page">
              <h2>On this page</h2>
              <ol>
                {sections.map((s) => (
                  <li key={s.n}><a href={`#s${s.n}`}><span>{s.n}</span>{s.h}</a></li>
                ))}
              </ol>
              <p><Link className="link" href={other.href}>{other.label}</Link></p>
            </aside>

            <article className="pol-body">
              {sections.map((s) => {
                const isContact = /^contact/i.test(s.h)
                return (
                  <section key={s.n} id={`s${s.n}`} className="pol-sec">
                    <h2><span>{s.n}</span>{s.h}</h2>
                    {toBlocks(s.body).map((b, i) => {
                      if (b.t === 'h') return <h3 key={i}>{b.s}</h3>
                      if (b.t === 'ul') return <ul key={i}>{b.items.map((x) => <li key={x}>{x}</li>)}</ul>
                      if (isContact && /^(Email|Website|Address):/.test(b.s)) return null
                      if (isContact && b.s === 'EarthPower') return <ContactBlock key={i} />
                      return <p key={i}>{b.s}</p>
                    })}
                  </section>
                )
              })}
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
