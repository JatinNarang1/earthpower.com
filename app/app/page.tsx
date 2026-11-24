import type { Metadata } from 'next'
import { AppView } from './AppView'
import './app.css'

export const metadata: Metadata = {
  title: 'EarthPower Mobile Applications — Customer & Dealer App | Official Portal',
  description:
    'Explore EarthPower mobile applications: download the Customer App for live Bluetooth BMS monitoring or preview upcoming features of the EarthPower Dealer App for authorized partners.',
  openGraph: {
    title: 'EarthPower Mobile Applications — Customer & Dealer App',
    description:
      'Smart Bluetooth monitoring, live telemetry & protection for EarthPower LiFePO4 batteries. Download the Customer App or preview the upcoming Dealer App.',
    images: ['/app/brand-lockup.png'],
  },
}

export default function AppPage() {
  return <AppView />
}
