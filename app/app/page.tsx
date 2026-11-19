import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, Reveal, SectionHead } from '@/components/ep/ui'
import { APP_LINKS, SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'EarthPower App',
  description: 'Download the Earth Power customer app and dealer app. Live Bluetooth battery monitoring, safety alarms and warranty tracking.',
}

const Dl = () => (
  <svg className="dl" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12M7 11l5 5 5-5M4 21h16" /></svg>
)

function Download({ href, label, note }: { href: string; label: string; note: string }) {
  const live = !!href
  return (
    <div className="dlbox">
      <a
        className="btn btn-dark"
        href={live ? href : undefined}
        aria-disabled={!live}
        target={live ? '_blank' : undefined}
        rel={live ? 'noopener noreferrer' : undefined}
      >
        <Dl />
        {label}
      </a>
      <p>
        {live ? note : (
          <>
            Store link coming soon. Need access now? Email <a className="link" style={{ display: 'inline' }} href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </>
        )}
      </p>
    </div>
  )
}

export default function AppPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'EarthPower App' }]}
        title={<>The EarthPower <em>app</em></>}
        lead="The Earth Power Battery mobile application (iOS & Android) interfaces via Bluetooth Low Energy with the on-board BMS of your Earth Power LFP battery for live telemetry and safety monitoring."
      />

      <section className="sec">
        <div className="wrap">
          <div className="apps2">
            <Reveal as="article">
              <div className="tagl">For battery owners</div>
              <h2>Customer App</h2>
              <p>Pairs with your battery over Bluetooth for live telemetry, safety monitoring and warranty tracking.</p>
              <h3>Features</h3>
              <ul className="chk" style={{ marginTop: 0 }}>
                {[
                  'Live dashboards: battery voltage, current, state of charge, individual cell voltages and temperature',
                  'Charge levels, estimated range and cell health metrics',
                  'Safety alarms and preventative diagnostics: high temperature, deep discharge, cell imbalance',
                  'Warranty tracking and service records',
                  'Over-The-Air (OTA) BMS firmware updates',
                  'Optional QR / barcode scan for rapid pairing and warranty registration',
                ].map((f) => <li key={f} style={{ color: 'var(--tx-2)' }}>{f}</li>)}
              </ul>
              <Download href={APP_LINKS.customer} label="Download Customer App" note="Opens the official store listing for the Earth Power customer app." />
            </Reveal>
            <Reveal as="article" delay={100}>
              <div className="tagl">For Earth Power dealers</div>
              <h2>Dealer App</h2>
              <p>A separate application for Earth Power dealers, with its own download.</p>
              <h3>About</h3>
              <ul className="note-list">
                <li>Built for Earth Power&apos;s dealer network, separate from the customer app.</li>
                <li>Dealers registering a customer&apos;s battery can also use the <Link className="link" href="/warranty#register">warranty registration form</Link>.</li>
                <li>For dealer onboarding and feature details, contact the Earth Power team.</li>
              </ul>
              <Download href={APP_LINKS.dealer} label="Download Dealer App" note="Opens the official store listing for the Earth Power dealer app." />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="sec paper">
        <div className="wrap">
          <SectionHead eyebrow="Permissions" title={<>What the app <span className="hl">asks for</span></>} lead="From the App Privacy Policy. Earth Power Battery does not sell personal data or battery telemetry to third parties." />
          <div className="perm4">
            {[
              ['Bluetooth & Nearby', 'Required to scan, securely pair with and stream telemetry from your Earth Power Battery BMS.'],
              ['Location (Android BLE only)', 'Android classifies BLE scanning under location. Earth Power Battery does NOT track, log, or sell your GPS location or journey routes.'],
              ['Camera (optional)', 'Only when you scan the QR code / barcode on the pack for pairing, warranty registration or service photos.'],
              ['Push notifications', 'Critical safety alarms — cell over-temperature, deep discharge, BMS protection trips — and service updates.'],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 70}><h3>{t}</h3><p>{d}</p></Reveal>
            ))}
          </div>
          <p style={{ marginTop: 30 }}><Link className="btn btn-dark" href="/privacy-app">Read the App Privacy Policy</Link></p>
        </div>
      </section>
    </>
  )
}
