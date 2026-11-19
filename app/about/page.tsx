import type { Metadata } from 'next'
import { PageHero, Reveal, SectionHead } from '@/components/ep/ui'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Earth Power company profile, mission, vision, core values and quality testing. Narela, New Delhi.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'About Us' }]}
        title={<>Engineered for India, <em>built for the future</em></>}
        lead="Pioneering India's transition to sustainable electric mobility through advanced LFP battery technology and unwavering commitment to excellence."
      />

      <section className="sec">
        <div className="wrap">
          <div className="intro">
            <div>
              <div className="eyebrow">Company profile</div>
              <h2>Who we <span className="hl">are</span></h2>
            </div>
            <Reveal className="body">
              <p className="big">Earth Power is building the foundation for India&apos;s sustainable transportation and energy-storage future, one cell at a time.</p>
              <p>Earth Power emerged from a vision to revolutionize India&apos;s energy storage landscape. We recognized the critical need for safer, more efficient battery solutions that could withstand our unique environmental challenges while powering the electric mobility revolution.</p>
              <p>Today, we&apos;re not just manufacturing batteries – we&apos;re building the foundation for India&apos;s sustainable transportation future, one cell at a time.</p>
            </Reveal>
          </div>
          <Reveal className="dl2" >
            <div><small>Company</small><b>{SITE.legalName}</b></div>
            <div><small>Registered address</small><b>{SITE.address}</b></div>
            <div><small>Email</small><b><a href={`mailto:${SITE.email}`}>{SITE.email}</a></b></div>
            <div><small>Phone</small><b><a href={SITE.phoneHref}>{SITE.phone}</a></b></div>
            <div><small>Business hours</small><b>Sunday – Friday · 9:00 AM – 6:00 PM</b></div>
            <div><small>Website</small><b>earthpowerbattery.com</b></div>
          </Reveal>
        </div>
      </section>

      <section className="sec dark" id="mission">
        <div className="wrap">
          <div className="head"><div><div className="eyebrow">Mission &amp; Vision</div><h2>What We <span className="hl">Stand For</span></h2></div></div>
          <div className="mv">
            <div><small className="mono">Our Mission</small><p>To revolutionize India&apos;s energy storage landscape with cutting-edge LFP battery solutions that empower sustainable electric mobility, making it accessible, safe, and economically viable for every Indian.</p></div>
            <div><small className="mono">Our Vision</small><p>To become India&apos;s most trusted name in advanced battery technology, leading the charge towards a carbon-neutral future through relentless innovation, superior quality, and unwavering commitment to sustainability.</p></div>
          </div>
          <div className="pp">
            <div><h3>Our Purpose</h3><p>Earth Power exists to accelerate India&apos;s transition to clean energy. We believe that sustainable transportation shouldn&apos;t be a luxury but a standard, accessible to every Indian. Our LFP batteries are designed to make electric mobility safer, more reliable, and economically viable for all.</p></div>
            <div><h3>Our Promise</h3><p>Every Earth Power battery carries our promise of uncompromised quality, safety, and performance. We stand behind our products with comprehensive warranties, 24/7 support, and a commitment to continuous innovation that keeps you ahead of the curve.</p></div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="head"><div><div className="eyebrow">Core values</div><h2>How we <span className="hl">work</span></h2></div></div>
          <div className="vals">
            {[
              ['Safety First', 'Safety Without Compromise', 'Every battery undergoes rigorous testing to ensure absolute safety'],
              ['Sustainability', 'Sustainability at Core', 'Committed to eco-friendly solutions for a greener tomorrow'],
              ['Innovation', 'Innovation in Every Cell', 'Continuous R&D to deliver cutting-edge battery technology'],
              ['Customer Focus', 'Customer Success First', 'Your success drives our innovation and service excellence'],
            ].map(([t, s, d], i) => (
              <Reveal key={t} delay={i * 70}>
                <small>{String(i + 1).padStart(2, '0')} / VALUE</small>
                <h3>{t}</h3><em>{s}</em><p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec paper" id="quality">
        <div className="wrap">
          <SectionHead eyebrow="Quality testing" title={<>Reliability and safety, <span className="hl">by design</span></>} lead="Every Earth Power battery undergoes rigorous testing to ensure absolute safety. The points below are limited to what Earth Power's own documents state." />
          <div className="q3">
            <Reveal><small>01</small><h3>Rigorous testing</h3><p>“Every battery undergoes rigorous testing to ensure absolute safety” — Earth Power&apos;s published commitment under Safety First.</p></Reveal>
            <Reveal delay={80}><small>02</small><h3>Protected by a smart BMS</h3><p>Every model includes a Bluetooth-enabled BMS (JK BMS with active balancer, or JBD BMS) that reports overvoltage, undervoltage, overcurrent, short-circuit and high-temperature protection trips.</p></Reveal>
            <Reveal delay={160}><small>03</small><h3>Defined operating limits</h3><p>Each datasheet specifies a voltage range, peak charge and discharge current, and an operating temperature of −20 °C to 60 °C, to be checked before installation.</p></Reveal>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="Capabilities" title={<>Engineering &amp; <span className="hl">support</span></>} lead="Experience the advantages of advanced LFP technology combined with our commitment to excellence and customer success." />
          <div className="why3">
            <Reveal><small>01</small><h3>Eight LiFePO4 models</h3><ul><li>12.8 V, 25.6 V, 51.2 V and 96 V</li><li>1.280 kWh to 16.076 kWh</li><li>Datasheet for every model</li><li>Five-year warranty</li></ul></Reveal>
            <Reveal delay={80}><small>02</small><h3>Battery intelligence</h3><ul><li>Bluetooth BMS on every model</li><li>Active balancing (JK BMS models)</li><li>Parallel communication up to 15 batteries (EP-series)</li><li>EarthPower customer &amp; dealer apps</li></ul></Reveal>
            <Reveal delay={160}><small>03</small><h3>Support</h3><ul><li>Expert consultation</li><li>Response to enquiries within 24 hours</li><li>24/7 email support available</li><li>Facility visits at Narela, Sun–Fri 9:00 AM – 6:00 PM</li></ul></Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
