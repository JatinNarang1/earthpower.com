'use client'

import { useState } from 'react'

interface FaqItem {
  q: string
  a: string
}

const DEALER_FAQS: FaqItem[] = [
  {
    q: 'When will the EarthPower Dealer App be officially available for download?',
    a: 'The EarthPower Dealer App is currently in active engineering and internal certification. Official signed APK packages and enterprise MDM enrollment will be released directly to authorized network partners upon deployment.',
  },
  {
    q: 'Who is eligible to access and use the EarthPower Dealer App?',
    a: 'Access is strictly restricted to verified EarthPower franchise dealers, authorized battery retail store managers, and certified regional field installation technicians across India.',
  },
  {
    q: 'How does the offline battery registration feature work in remote locations?',
    a: 'When technicians work in basements, rural sites, or areas without active mobile connectivity, customer registrations are stored securely on the local device. The application automatically synchronizes all pending registrations once an internet connection is re-established.',
  },
  {
    q: 'How do I scan and link the BMS MAC address to the battery pack?',
    a: 'The built-in camera scanner reads the battery serial barcode/QR code on the case, followed by the BMS QR label. The app automatically associates the Bluetooth MAC address with the serial record and identifies the model configuration.',
  },
  {
    q: 'Can I correct customer or battery registration details after submission?',
    a: 'Yes, eligible customer registrations can be corrected within the defined post-sale correction window directly in the app under the "My Registrations" view without administrative delay.',
  },
  {
    q: 'How do I confirm battery shipments and report transit damages?',
    a: 'Under the Shipment Management module, dealers can inspect incoming factory battery consignments, verify received models and serial numbers, confirm stock receipt, and report any missing or transit-damaged items with photo documentation.',
  },
]

export function DealerFaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  return (
    <div className="faq-list" role="region" aria-label="Dealer App Frequently Asked Questions">
      {DEALER_FAQS.map((item, idx) => {
        const isOpen = openIdx === idx
        return (
          <div key={idx} className={`faq-row ${isOpen ? 'open' : ''}`}>
            <button
              type="button"
              className="faq-trigger"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              aria-controls={`dealer-faq-ans-${idx}`}
              id={`dealer-faq-btn-${idx}`}
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
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
            <div
              id={`dealer-faq-ans-${idx}`}
              className={`faq-answer-collapse ${isOpen ? 'expanded' : ''}`}
              role="region"
              aria-labelledby={`dealer-faq-btn-${idx}`}
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
