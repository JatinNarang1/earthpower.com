import type { Metadata } from 'next'
import PolicyDoc from '@/components/ep/PolicyDoc'
import { APP_PRIVACY_POLICY } from '@/data/policies'

export const metadata: Metadata = {
  title: 'App Privacy Policy',
  description:
    'How the EarthPower Battery mobile app collects, uses, processes, stores and protects information, including Bluetooth, location, notification and camera permissions.',
}

export default function AppPrivacyPage() {
  return (
    <PolicyDoc
      crumb="App Privacy Policy"
      title={<>App Privacy <em>Policy</em></>}
      subtitle="EarthPower Battery Application"
      intro="How the EarthPower Battery mobile app collects, uses, processes, stores and protects information, and the permissions it may request."
      sections={APP_PRIVACY_POLICY}
      other={{ href: '/privacy', label: '← Read the website Privacy Policy' }}
    />
  )
}
