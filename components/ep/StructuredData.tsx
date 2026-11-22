import { SITE } from '@/lib/site'

/** Organization / LocalBusiness / WebSite structured data (site-wide, from lib/site.ts). */
export default function StructuredData() {
  const logo = `${SITE.url}/icons/logo-512.png`
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'LocalBusiness'],
        '@id': `${SITE.url}/#organization`,
        name: 'Earth Power Battery',
        alternateName: ['EarthPower', 'Earth Power'],
        url: SITE.url,
        logo: { '@type': 'ImageObject', url: logo, width: 512, height: 512 },
        image: [logo, `${SITE.url}/icons/og-image.png`],
        description:
          'LiFePO4 batteries from 12.8 V to 480 V — energy storage, two-wheeler, high-voltage and rack systems with Bluetooth BMS.',
        email: SITE.email,
        telephone: '+911141435047',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'G-960, DSIIDC Industrial Area Narela',
          addressLocality: 'New Delhi',
          postalCode: '110040',
          addressCountry: 'IN',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '10:00',
            closes: '17:00',
          },
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            email: SITE.email,
            telephone: '+911141435047',
            areaServed: 'IN',
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE.url}/#website`,
        url: SITE.url,
        name: 'Earth Power Battery',
        publisher: { '@id': `${SITE.url}/#organization` },
      },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
