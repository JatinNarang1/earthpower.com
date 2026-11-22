import type { Metadata } from 'next'
import ProductsBrowser from '@/components/ep/ProductsBrowser'
import { PageHero } from '@/components/ep/ui'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'The full Earth Power LiFePO4 range — energy storage, two-wheeler, high-voltage and rack systems from 12.8 V to 480 V — with model numbers, specifications and downloadable PDF datasheets.',
}

export default function ProductsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Products' }]}
        title={<>Power <em>Solutions</em></>}
        lead="Advanced LFP battery technology designed for performance, safety, and longevity. Every model comes with its real photograph, datasheet and specifications."
      />
      <ProductsBrowser />
    </>
  )
}
