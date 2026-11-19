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
 * App download links. No store URLs exist in the repository or supplied files, so none are invented.
 * Paste the real Play Store / App Store URLs here and the buttons on /app switch on automatically.
 */
export const APP_LINKS: { customer: string; dealer: string } = {
  customer: '',
  dealer: '',
}

export const NAV = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Technology', href: '/technology' },
  { name: 'About Us', href: '/about' },
  { name: 'Warranty', href: '/warranty' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
] as const
