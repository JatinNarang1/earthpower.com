import type { Metadata } from 'next'
import ProductsBrowser from '@/components/ep/ProductsBrowser'
import { PageHero } from '@/components/ep/ui'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'All eight Earth Power LiFePO4 models — 12.8 V to 96 V — with real photographs, model numbers, specifications and downloadable PDF datasheets.',
}

export default function ProductsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Products' }]}
        title={<>Power <em>Solutions</em></>}
        lead="Advanced LFP battery technology designed for performance, safety, and longevity. All eight models, each with its real datasheet, specifications and five-year warranty."
      />
      <ProductsBrowser />
    </>
  )
}
