'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Zap, Thermometer, Leaf, TrendingUp, Clock } from 'lucide-react'
import { Canvas } from '@react-three/fiber'
import { useState, useEffect } from 'react'
import FloatingIcons3D from './FloatingIcons3D'

const advantages = [
  {
    icon: Shield,
    title: 'Superior Safety',
    description: 'No risk of thermal runaway, explosion, or fire hazards with our advanced LFP chemistry.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Zap,
    title: '3X Longer Life',
    description: '5000+ charge cycles compared to 500-1000 for lead-acid. Built to last over a decade.',
    color: 'text-earth-green-500',
    bgColor: 'bg-earth-green-500/10',
  },
  {
    icon: Thermometer,
    title: 'Temperature Resilient',
    description: 'Engineered to perform excellently in extreme Indian weather conditions, from -20°C to 60°C.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Non-toxic, recyclable, and sustainable energy solution. Zero heavy metals or rare earth elements.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
  },
  {
    icon: TrendingUp,
    title: 'Cost Effective',
    description: 'Lower total cost of ownership over battery lifetime despite higher initial investment.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Clock,
    title: 'Fast Charging',
    description: 'Charges 3-5 times faster than traditional batteries. Get back to full power in just 2 hours.',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
  },
]

export default function WhyLFP() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* 3D Background Layer - Desktop Only */}
      {!isMobile && (
        <div className="absolute inset-0 z-0 opacity-[0.18] pointer-events-none">
          <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <FloatingIcons3D />
          </Canvas>
        </div>
      )}

      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-earth-green-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-earth-green-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gray-900">
            Why Choose <span className="text-earth-green-500">LFP Technology?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Lithium Iron Phosphate (LFP) batteries represent the future of energy storage -
            safer, longer-lasting, and more sustainable than traditional solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-premium group backdrop-blur-sm bg-white/90 hover:bg-white transition-all duration-500 hover:shadow-[0_20px_50px_-12px_rgba(74,222,128,0.25)] border border-gray-100 hover:border-earth-green-500/30"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-earth-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className={`relative z-10 inline-flex p-4 rounded-2xl ${item.bgColor} mb-6 group-hover:scale-110 transition-transform duration-500 ease-out shadow-sm`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <h3 className="relative z-10 text-2xl font-bold mb-4 text-gray-900 group-hover:text-earth-green-900 transition-colors">{item.title}</h3>
              <p className="relative z-10 text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 bg-white"
        >
          <div className="bg-earth-green-500 hover:bg-earth-green-600 transition-colors duration-500 p-10 relative overflow-hidden">
            {/* Header Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

            <h3 className="relative z-10 text-3xl font-bold text-center tracking-tight text-white">
              LFP vs Lead-Acid Comparison
            </h3>
            <p className="relative z-10 text-center text-white mt-2 font-semibold uppercase tracking-wider text-sm">
              The Clear Winner
            </p>
          </div>

          <div className="p-8 md:p-12 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-100">
                    <th className="text-left py-5 px-6 font-bold text-gray-400 uppercase tracking-wider text-xs">Feature</th>
                    <th className="text-center py-5 px-6 font-bold text-earth-green-500 text-xl">LFP Battery</th>
                    <th className="text-center py-5 px-6 font-bold text-gray-400 text-xl">Lead-Acid</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {[
                    { feature: 'Life Cycles', lfp: '5000+', lead: '500-1000' },
                    { feature: 'Weight', lfp: '60% Lighter', lead: 'Heavy' },
                    { feature: 'Maintenance', lfp: 'Zero Maintenance', lead: 'Regular Checkups' },
                    { feature: 'Charging Time', lfp: '2-3 Hours', lead: '8-10 Hours' },
                    { feature: 'Eco-Friendly', lfp: 'Yes (Non-Toxic)', lead: 'No (Toxic Lead)' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-50 hover:bg-earth-green-50/30 transition-colors group">
                      <td className="py-6 px-6 font-semibold text-gray-800">{row.feature}</td>
                      <td className="text-center py-6 px-6">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-earth-green-100 text-earth-green-500 font-bold shadow-sm group-hover:scale-105 transition-transform duration-300 border border-earth-green-200">
                          {row.lfp}
                        </span>
                      </td>
                      <td className="text-center py-6 px-6 text-gray-400 font-medium">{row.lead}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
