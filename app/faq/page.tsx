import type { Metadata } from 'next'
import FaqList from '@/components/ep/FaqList'
import { PageHero } from '@/components/ep/ui'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Earth Power LiFePO4 batteries, datasheets, the EarthPower app and warranty.',
}

export default function FaqPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'FAQ' }]}
        title={<>Frequently asked <em>questions</em></>}
        lead="Answers drawn from Earth Power's model datasheets and published website content."
      />
      <section className="sec paper" style={{ paddingTop: 'clamp(48px,6vw,80px)' }}>
        <FaqList />
      </section>
    </>
  )
}
