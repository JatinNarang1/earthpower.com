'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, PlayCircle } from 'lucide-react'
import Scene3D from './Scene3D'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-earth-charcoal-900">
      {/* 3D Scene Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>

      {/* Subtle Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-earth-charcoal-900 via-earth-charcoal-900/60 to-transparent z-10 pointer-events-none" />

      <div className="relative z-20 container-custom pt-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6"
            >
              <div className="relative inline-flex overflow-hidden px-4 py-2 rounded-full bg-earth-green-500/10 border border-earth-green-500/20 text-earth-neon-green font-bold text-sm tracking-wide uppercase animate-pulse-glow">
                <span className="relative z-10">Next-Generation Energy Storage</span>
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold font-display mb-8 leading-tight"
            >
              Powering The
              <br />
              <span className="bg-gradient-to-r from-earth-neon-green via-earth-green-500 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(74,222,128,0.3)]">
                Electric Future
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl font-light"
            >
              Experience the pinnacle of energy storage technology.
              <strong className="text-white font-semibold"> Safe, efficient, and sustainable</strong> solutions engineered for tomorrow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <Link
                href="/products"
                className="relative group inline-flex items-center px-8 py-4 bg-earth-green-500 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_40px_rgba(74,222,128,0.4)]"
              >
                <span className="relative z-10 flex items-center">
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Liquid Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
              </Link>

              <button className="group inline-flex items-center px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold text-lg rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95 hover:border-earth-neon-green/50">
                <PlayCircle className="mr-2 w-5 h-5 text-earth-neon-green group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Spacer for 3D Battery */}
          <div className="lg:col-span-5 h-full min-h-[600px] pointer-events-none relative z-10">
            {/* The 3D battery is positioned here via the Scene3D component */}
          </div>
        </div>
      </div>
    </section>
  )
}
