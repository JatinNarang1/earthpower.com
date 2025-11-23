'use client'

import Link from 'next/link'
import { Battery, Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-earth-charcoal-900 via-earth-green-900 to-earth-charcoal-900">
      <div className="text-center max-w-lg mx-auto px-4">
        <div className="relative mb-8">
          <div className="text-9xl font-bold text-white/10">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Battery className="w-24 h-24 text-earth-neon-green animate-pulse" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-gray-300 mb-8 text-lg">
          Looks like this page is out of charge. Let's get you back on track.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-earth-green-500 text-white font-semibold rounded-full hover:bg-earth-green-600 transition-colors flex items-center justify-center group"
          >
            <Home className="w-5 h-5 mr-2" />
            Go to Homepage
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-earth-green-600 transition-colors flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-gray-400 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/products" className="text-earth-neon-green hover:text-white transition-colors">
              Products
            </Link>
            <span className="text-gray-500">•</span>
            <Link href="/about" className="text-earth-neon-green hover:text-white transition-colors">
              About Us
            </Link>
            <span className="text-gray-500">•</span>
            <Link href="/contact" className="text-earth-neon-green hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
