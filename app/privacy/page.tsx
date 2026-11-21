import type { Metadata } from 'next'
import PolicyDoc from '@/components/ep/PolicyDoc'
import { PRIVACY_POLICY } from '@/data/policies'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How EarthPower collects, uses, stores and protects information across its website, mobile application, battery monitoring platform and customer support.',
}

export default function PrivacyPage() {
  return (
    <PolicyDoc
      crumb="Privacy Policy"
      title={<>Privacy <em>Policy</em></>}
      subtitle="EarthPower Battery Platform"
      intro="How we collect, use, store and protect your information when you use the EarthPower website, mobile application, battery monitoring platform and customer support."
      sections={PRIVACY_POLICY}
      other={{ href: '/privacy-app', label: 'Read the App Privacy Policy →' }}
    />
  )
}
