import Link from 'next/link'
import Image from 'next/image'
import Hero3D from '@/components/ep/Hero3D'
import { Arrow, Reveal, SectionHead } from '@/components/ep/ui'
import { PRODUCTS } from '@/data/products'
import { ADV, APP_FEATURES, WHY3 } from '@/data/content'

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero dark" id="top">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="tag mono"><i />Next-Generation Energy Storage</div>
              <h1 className="display">
                <span className="ln"><span>Powering The</span></span>
                <span className="ln"><span><em>Electric Future</em></span></span>
              </h1>
              <p className="lead">
                Experience the pinnacle of energy storage technology. <strong>Safe, efficient, and sustainable</strong> solutions engineered for tomorrow.
              </p>
              <div className="cta-row">
                <Link href="/products" className="btn btn-primary">Explore Products <Arrow /></Link>
                <Link href="/warranty" className="btn btn-outline">5-Year Warranty</Link>
              </div>
            </div>
            <Hero3D />
          </div>
          <div className="kpis">
            <div><b>8 models</b><span>12.8 V to 96 V</span></div>
            <div><b>1.280–16.076 kWh</b><span>Nominal energy range</span></div>
            <div><b>5-year</b><span>Warranty on every model</span></div>
            <div><b>−20 to 60 °C</b><span>Operating temperature</span></div>
            <div><b>Bluetooth BMS</b><span>Live monitoring in the app</span></div>
          </div>
        </div>
      </section>

      {/* ============ COMPANY ============ */}
      <section className="sec" id="company">
        <div className="wrap">
          <div className="intro">
            <div>
              <div className="eyebrow">About Earth Power</div>
              <h2>Engineered for India, <span className="hl">Built for the Future</span></h2>
            </div>
            <Reveal className="body">
              <p className="big">Pioneering India&apos;s transition to sustainable electric mobility through advanced LFP battery technology and unwavering commitment to excellence.</p>
              <p>Earth Power emerged from a vision to revolutionize India&apos;s energy storage landscape. We recognized the critical need for safer, more efficient battery solutions that could withstand our unique environmental challenges.</p>
              <p style={{ marginTop: 22 }}><Link className="link" href="/about">Company profile <Arrow /></Link></p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ PRODUCT RANGE ============ */}
      <section className="sec paper" id="range">
        <div className="wrap">
          <SectionHead
            eyebrow="Product range"
            title={<>Eight models. <span className="hl">One platform.</span></>}
            lead="From 12.8 V inverter batteries to a 96 V high-voltage pack and a 16.076 kWh energy-storage battery. Every model ships with a datasheet and a five-year warranty."
          />
          <Reveal className="tiles">
            {PRODUCTS.map((p) => (
              <Link key={p.id} className="tile" href={`/products/${p.id}`}>
                <Image src={p.image} alt={`Earth Power ${p.id} LiFePO4 battery`} width={500} height={500} sizes="(max-width: 1180px) 50vw, 25vw" loading="lazy" />
                <div>
                  <b>{p.id}</b>
                  <span>{p.voltage} · {p.capacity} · {p.energy}</span>
                </div>
              </Link>
            ))}
          </Reveal>
          <p style={{ marginTop: 30 }}><Link className="btn btn-dark" href="/products">View full catalogue <Arrow /></Link></p>
        </div>
      </section>

      {/* ============ LFP ============ */}
      <section className="sec" id="tech-home">
        <div className="wrap">
          <SectionHead
            eyebrow="Battery technology"
            title={<>Why Choose <span className="hl">LFP Technology?</span></>}
            lead="Lithium Iron Phosphate (LFP) batteries represent the future of energy storage - safer, longer-lasting, and more sustainable than traditional solutions."
          />
          <div className="adv">
            {ADV.map((a, i) => (
              <Reveal key={a.t} delay={(i % 3) * 80}>
                <svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d={a.i} /></svg>
                <h3>{a.t}</h3>
                <p>{a.d}</p>
              </Reveal>
            ))}
          </div>
          <p style={{ marginTop: 34 }}><Link className="link" href="/technology">Technology in detail <Arrow /></Link></p>
        </div>
      </section>

      {/* ============ APP SECTION ============ */}
      <section className="sec dark" id="app-home">
        <div className="wrap">
          <div className="appgrid">
            <div>
              <div className="eyebrow">EarthPower Mobile App</div>
              <h2 style={{ marginBottom: 22 }}>
                Monitor every battery, <span className="hl">over Bluetooth.</span>
              </h2>
              <p className="lead">
                Each EarthPower LiFePO4 battery includes a Bluetooth-enabled BMS that pairs with the EarthPower Battery mobile app for live telemetry of voltage, current, state of charge, individual cell voltages, and thermal safety alarms.
              </p>
              <ul className="chk">
                {APP_FEATURES.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="cta-row" style={{ marginTop: 32 }}>
                <a
                  href="https://pub-cc0109618c354dc782a659bd3b0589bb.r2.dev/earthpower-customer.apk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  download="earthpower-customer.apk"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                    <path d="M12 3v12M7 11l5 5 5-5M4 21h16" />
                  </svg>
                  Download APK (v1.0.4)
                </a>
                <Link href="/app" className="btn btn-outline dark">
                  Explore App Listing <Arrow />
                </Link>
              </div>
            </div>

            <Reveal className="app-showcase-wrap">
              <div className="app-showcase-glow" />
              <div className="app-float-badge top-left">
                <span className="app-float-pulse" />
                <span><b>78% SOC</b> · 0.6 kW Discharging</span>
              </div>
              <div className="app-showcase-phone">
                <div className="app-showcase-notch" />
                <Image
                  src="/app/screenshot-home-dark.jpg"
                  alt="EarthPower Battery App Live Telemetry Dashboard"
                  width={360}
                  height={780}
                  quality={90}
                  priority
                />
              </div>
              <div className="app-float-badge bottom-right">
                <span className="mono" style={{ color: 'var(--signal)', fontSize: '0.74rem' }}>BLE 4.2+</span>
                <span><b>16 Cells</b> · 30mV Delta</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ WHY ============ */}
      <section className="sec paper" id="why">
        <div className="wrap">
          <SectionHead
            eyebrow="Why Earth Power"
            title={<>Why Choose <span className="hl">Earth Power?</span></>}
            lead="Experience the advantages of advanced LFP technology combined with our commitment to excellence and customer success."
          />
          <div className="why3">
            {WHY3.map((w, i) => (
              <Reveal key={w.t} delay={i * 90}>
                <small>{String(i + 1).padStart(2, '0')}</small>
                <h3>{w.t}</h3>
                <ul>{w.l.map((x) => <li key={x}>{x}</li>)}</ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
