/** Official company details (Website Changes.pdf, items 1 & 2). Single source of truth. */
export const SITE = {
  name: 'Earth Power',
  legalName: 'Earth Power Battery',
  email: 'contact@earthpowerbattery.com',
  phone: '+011 41435047',
  phoneHref: 'tel:+01141435047',
  address: 'G-960, DSIIDC Industrial Area Narela, New Delhi – 110040',
  addressShort: 'Narela, New Delhi',
  hours: 'Sun–Fri · 9:00 AM – 6:00 PM',
  url: 'https://earthpowerbattery.com',
} as const

export const MAP_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('G-960, DSIIDC Industrial Area Narela, New Delhi – 110040')

/**
 * App download links.
 */
export const APP_LINKS = {
  customer: 'https://pub-cc0109618c354dc782a659bd3b0589bb.r2.dev/earthpower-customer.apk',
  dealer: '',
  directApk: 'https://pub-cc0109618c354dc782a659bd3b0589bb.r2.dev/earthpower-customer.apk',
  packageId: 'com.earthpowerbattery.customer_app',
} as const

export const NAV = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Technology', href: '/technology' },
  { name: 'About Us', href: '/about' },
  { name: 'App', href: '/app' },
  { name: 'Warranty', href: '/warranty' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
] as const
