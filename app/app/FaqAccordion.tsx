'use client'

import { useState } from 'react'

interface FaqItem {
  q: string
  a: string
}

const FAQS: FaqItem[] = [
  {
    q: 'How does the EarthPower Battery app connect to my battery pack?',
    a: 'The app pairs directly over Bluetooth Low Energy (BLE 4.2+) with the on-board Battery Management System (BMS) integrated inside your EarthPower LiFePO4 battery pack.',
  },
  {
    q: 'Which BMS architectures and protocols are supported?',
    a: 'EarthPower Battery natively supports both JK BMS and JBD BMS Bluetooth architectures, as well as EarthPower proprietary BMS controllers. The application auto-detects the hardware upon Bluetooth handshake and configures parameter decoding automatically.',
  },
  {
    q: 'Why does Android request Location permission during setup?',
    a: 'Under standard Android OS security specifications (Android 6.0 through Android 11), scanning for nearby Bluetooth Low Energy devices requires the ACCESS_FINE_LOCATION or ACCESS_COARSE_LOCATION permission. On Android 12+, Android uses the newer BLUETOOTH_SCAN permission. EarthPower Battery strictly does NOT record, track, or share your GPS coordinates.',
  },
  {
    q: 'What should I do if the app does not discover my battery during pairing?',
    a: 'First, ensure your phone has Bluetooth turned on and location services enabled (required on Android for BLE beacon discovery). Ensure your phone is within 5 to 10 meters of the battery and that no other phone is currently actively connected to the battery\'s BMS channel. If the problem persists, reboot your phone\'s Bluetooth toggle or contact our support team.',
  },
]

export function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  return (
    <div className="faq-list" role="region" aria-label="Frequently Asked Questions">
      {FAQS.map((item, idx) => {
        const isOpen = openIdx === idx
        return (
          <div key={idx} className={`faq-row ${isOpen ? 'open' : ''}`}>
            <button
              type="button"
              className="faq-trigger"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              aria-controls={`faq-ans-${idx}`}
              id={`faq-btn-${idx}`}
            >
              <span className="faq-question-text">{item.q}</span>
              <span className="faq-icon-wrapper" aria-hidden="true">
                <svg
                  className="faq-chevron"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
            <div
              id={`faq-ans-${idx}`}
              role="region"
              aria-labelledby={`faq-btn-${idx}`}
              className={`faq-answer-collapse ${isOpen ? 'expanded' : ''}`}
            >
              <div className="faq-answer-inner">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
