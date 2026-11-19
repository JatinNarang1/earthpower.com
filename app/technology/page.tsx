import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, Reveal, SectionHead } from '@/components/ep/ui'
import { Fill } from '@/components/ep/Bars'
import { ADV } from '@/data/content'
import { PRODUCTS, SAFETY } from '@/data/products'

export const metadata: Metadata = {
  title: 'Technology',
  description: 'LiFePO4 technology, Bluetooth BMS and installation guidance behind every Earth Power battery.',
}

const SYSTEM: [string, string][] = [
  ['Inverter compatibility', "Confirm the inverter's battery voltage window, charging settings, maximum charge/discharge current and supported battery communication protocol."],
  ['Charging source', 'Use a charging system configured for the approved LiFePO₄ battery voltage and manufacturer-approved charging limits.'],
  ['Parallel expansion', 'EP25105ESS, EP51105ESS and EP51314ESS specify communication support for up to 15 batteries. Confirm approved wiring, communication connections, configuration and inverter compatibility before connecting multiple units.'],
  ['Specifications', 'Check specifications and operating limits against the latest approved product documentation before purchase, installation or commissioning.'],
]

const byEnergy = [...PRODUCTS].sort((a, b) => parseFloat(a.kwh) - parseFloat(b.kwh))

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Technology' }]}
        title={<>LiFePO4 technology, <em>engineered for safety</em></>}
        lead="Lithium Iron Phosphate cells, a Bluetooth-enabled BMS and clear installation guidance. This is what sits behind every Earth Power model."
      />

      <section className="sec" id="lfp">
        <div className="wrap">
          <SectionHead eyebrow="LiFePO4 advantages" title={<>Why Choose <span className="hl">LFP Technology?</span></>} lead="Engineered to perform excellently in extreme Indian weather conditions, with a lower total cost of ownership over the battery lifetime." />
          <div className="adv">
            {ADV.map((a, i) => (
              <Reveal key={a.t} delay={(i % 3) * 80}>
                <svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d={a.i} /></svg>
                <h3>{a.t}</h3>
                <p>{a.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec paper" id="performance">
        <div className="wrap">
          <SectionHead eyebrow="Performance comparison" title={<>LFP vs Lead-Acid: <span className="hl">The Clear Winner</span></>} lead="General LFP figures as published on the Earth Power website. Individual datasheets do not list cycle life or charging time, so confirm model-specific values with Earth Power." />
          <div className="cmp">
            <table className="tbl" aria-label="LFP versus lead-acid">
              <thead><tr><th scope="col">Feature</th><th scope="col">LFP Battery</th><th scope="col">Lead-Acid</th></tr></thead>
              <tbody>
                <tr><td>Life Cycles</td><td className="w">5000+</td><td className="x">500-1000</td></tr>
                <tr><td>Weight</td><td className="w">60% Lighter</td><td className="x">Heavy</td></tr>
                <tr><td>Maintenance</td><td className="w">Zero Maintenance</td><td className="x">Regular Checkups</td></tr>
                <tr><td>Charging Time</td><td className="w">2-3 Hours</td><td className="x">8-10 Hours</td></tr>
                <tr><td>Eco-Friendly</td><td className="w">Yes (Non-Toxic)</td><td className="x">No (Toxic Lead)</td></tr>
              </tbody>
            </table>
            <div>
              <div className="chart">
                <h3>Life cycles</h3><p>Higher is better</p>
                <div className="bar"><span>LFP</span><div className="t"><Fill w={100} /></div><b>5000+</b></div>
                <div className="bar"><span>Lead-acid</span><div className="t"><Fill w={10} cls="solid2" /><Fill w={20} cls="rng" style={{ left: 0 }} /></div><b>500–1000</b></div>
                <div className="axis"><span>0</span><span>2,500</span><span>5,000</span></div>
              </div>
              <div className="chart">
                <h3>Charging time (hours)</h3><p>Lower is better</p>
                <div className="bar"><span>LFP</span><div className="t"><Fill w={20} /><Fill w={30} cls="rng" style={{ left: 0, opacity: 0.5 }} /></div><b>2–3 h</b></div>
                <div className="bar"><span>Lead-acid</span><div className="t"><Fill w={80} cls="solid2" /><Fill w={100} cls="rng" style={{ left: 0 }} /></div><b>8–10 h</b></div>
                <div className="axis"><span>0</span><span>5</span><span>10</span></div>
                <div className="legend"><span><i />Lower bound</span><span><i className="r" />Published range</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec dark" id="bms">
        <div className="wrap">
          <div className="bms">
            <div>
              <div className="eyebrow">Battery management &amp; safety</div>
              <h2 style={{ marginBottom: 22 }}>A Bluetooth BMS in <span className="hl">every model.</span></h2>
              <p className="lead">Seven models use a JK BMS with a built-in active balancer; the EPL121058H uses a JBD BMS. All connect via Bluetooth to the EarthPower app for live monitoring of voltage, current, state of charge, cell voltages and temperature.</p>
              <ul className="chk">
                <li>Active balancing keeps cells matched (JK BMS models)</li>
                <li>Parallel communication for up to 15 batteries on EP25105ESS, EP51105ESS and EP51314ESS</li>
                <li>BMS fault alarms: overvoltage, undervoltage, overcurrent, short-circuit and high-temperature protection trips</li>
                <li>Over-The-Air (OTA) BMS firmware updates through the app</li>
              </ul>
            </div>
            <div className="panel">
              <div className="panel-h mono"><span>BMS by model</span><b>Datasheet</b></div>
              <ul className="tele">
                {PRODUCTS.map((p, i) => (
                  <li key={p.id}>
                    <small>{String(i + 1).padStart(2, '0')}</small>
                    <span><Link href={`/products/${p.id}`} style={{ fontWeight: 600 }}>{p.id}</Link> · {p.jk ? 'JK BMS + active balancer' : 'JBD BMS'}{p.parallel ? ` · parallel ×${p.parallel}` : ''}</span>
                    <i />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="lineup">
        <div className="wrap">
          <SectionHead eyebrow="Lineup at a glance" title={<>Nominal energy <span className="hl">by model</span></>} lead="Nominal energy (kWh) from each datasheet. Energy equals nominal voltage × nominal capacity." />
          <div className="chart" style={{ maxWidth: 'none' }}>
            {byEnergy.map((p) => (
              <div className="bar m" key={p.id}>
                <span>{p.id}</span>
                <div className="t"><Fill w={Number(((parseFloat(p.kwh) / 16.076) * 100).toFixed(1))} /></div>
                <b>{p.kwh}</b>
              </div>
            ))}
            <div className="axis m"><span>0</span><span>8</span><span>16 kWh</span></div>
          </div>
        </div>
      </section>

      <section className="sec paper" id="safety">
        <div className="wrap">
          <SectionHead eyebrow="Safety, handling & installation" title={<>Install it <span className="hl">correctly.</span></>} lead="Guidance published in every Earth Power datasheet. Always follow the approved product manual and local requirements." />
          <div className="why3" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))' }}>
            <Reveal><h3>Handling &amp; installation</h3><ul>{SAFETY.map((s) => <li key={s}>{s}</li>)}</ul></Reveal>
            <Reveal><h3>System integration</h3><ul>{SYSTEM.map(([k, v]) => <li key={k}><b style={{ color: 'var(--tx)' }}>{k}:</b> {v}</li>)}</ul></Reveal>
          </div>
          <div className="hv" style={{ marginTop: 24 }}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l10 18H2z" /><path d="M12 10v5M12 18h.01" /></svg>
            <div>
              <h3>High-voltage DC · EPL961050S (96 V)</h3>
              <p>This battery operates at up to 106.5 V DC. Use insulated tools and suitable protective equipment, and isolate the battery before working on terminals or wiring. Use only with inverters, UPS or charge controllers rated for the 90.0 – 106.5 V window.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
