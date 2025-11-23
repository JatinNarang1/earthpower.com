'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, Home, RefreshCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-earth-charcoal-900 to-earth-green-900">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 bg-red-500/20 rounded-full animate-pulse" />
          <AlertTriangle className="absolute inset-4 text-red-500" />
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-4">Oops! Something Went Wrong</h1>
        <p className="text-gray-300 mb-8">
          We encountered an unexpected error. Don't worry, our team has been notified.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-earth-green-500 text-white font-semibold rounded-full hover:bg-earth-green-600 transition-colors flex items-center justify-center"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </button>
          
          <Link
            href="/"
            className="px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-earth-green-600 transition-colors flex items-center justify-center"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
