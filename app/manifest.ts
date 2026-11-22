import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Earth Power Battery',
    short_name: 'Earth Power',
    description: 'Earth Power LiFePO4 batteries — energy storage, two-wheeler, high-voltage and rack systems.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B1F14',
    theme_color: '#0B1F14',
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    ],
  }
}
