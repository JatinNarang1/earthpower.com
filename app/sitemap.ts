import type { MetadataRoute } from 'next'
import { PRODUCTS } from '@/data/products'
import { SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const pages = ['', '/products', '/technology', '/about', '/warranty', '/app', '/faq', '/contact', '/privacy', '/privacy-app', '/terms']
  return [
    ...pages.map((p) => ({
      url: `${SITE.url}${p}`,
      lastModified: now,
      changeFrequency: (p === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
      priority: p === '' ? 1 : p === '/products' ? 0.9 : 0.7,
    })),
    ...PRODUCTS.map((pr) => ({
      url: `${SITE.url}/products/${pr.id}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
