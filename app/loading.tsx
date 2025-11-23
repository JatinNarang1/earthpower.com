import { Zap } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-earth-charcoal-900 to-earth-green-900">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 bg-earth-green-500 rounded-full animate-ping opacity-30" />
          <div className="absolute inset-0 bg-earth-green-500 rounded-full animate-pulse" />
          <Zap className="absolute inset-4 text-white animate-pulse" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Powering Up...</h2>
        <p className="text-gray-300">Loading Earth Power</p>
      </div>
    </div>
  )
}
