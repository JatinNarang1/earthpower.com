import type { Metadata } from 'next'
import { Suspense } from 'react'
import ContactForm from '@/components/ep/ContactForm'
import { Arrow, PageHero } from '@/components/ep/ui'
import { MAP_URL, SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact Earth Power — ${SITE.email}, ${SITE.phone}. ${SITE.address}.`,
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Contact' }]}
        title={<>Contact <em>Earth Power</em></>}
        lead="Ready to power your journey with advanced LFP battery solutions? Our experts are here to help you find the perfect energy solution."
      />
      <section className="sec">
        <div className="wrap">
          <div className="contact">
            <div>
              <div className="eyebrow">Get in touch</div>
              <h2 style={{ marginBottom: 6 }}>We respond within <span className="hl">24 hours</span></h2>
              <div className="cinfo">
                <div><small>Email</small><div><a href={`mailto:${SITE.email}`}>{SITE.email}</a><em>24/7 Support Available</em></div></div>
                <div><small>Call</small><div><a href={SITE.phoneHref}>{SITE.phone}</a><em>{SITE.hours}</em></div></div>
                <div>
                  <small>Visit</small>
                  <div>
                    <span style={{ fontWeight: 600, display: 'block' }}>{SITE.address}</span>
                    <a className="link mapl" target="_blank" rel="noopener noreferrer" href={MAP_URL}>Get Directions <Arrow /></a>
                  </div>
                </div>
              </div>
              <div className="whyc">
                <div><h4>Expert Consultation</h4><p>Get personalized battery solutions from our technical experts</p></div>
                <div><h4>Quick Response</h4><p>We respond to all inquiries within 24 hours</p></div>
                <div><h4>Competitive Pricing</h4><p>Best value for premium LFP battery technology</p></div>
                <div><h4>After-Sales Support</h4><p>Comprehensive warranty and technical support</p></div>
              </div>
            </div>
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  )
}
