'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Eye, Heart } from 'lucide-react'

export default function BrandStory() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="section-padding bg-earth-charcoal-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(53,189,56,0.3)_0px,rgba(53,189,56,0.3)_1px,transparent_1px,transparent_20px)]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Engineered for India,
              <span className="block gradient-text">Built for the Future</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Earth Power emerged from a vision to revolutionize India's energy storage landscape.
              We recognized the critical need for safer, more efficient battery solutions that could
              withstand our unique environmental challenges while powering the electric mobility revolution.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Today, we're not just manufacturing batteries – we're building the foundation for
              India's sustainable transportation future, one cell at a time.
            </p>
          </motion.div>

          {/* Right Content - Mission/Vision Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Mission Card */}
            <div className="glass-card p-6 hover:bg-white/15 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-earth-green-500/20 rounded-xl">
                  <Target className="w-6 h-6 text-earth-neon-green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-earth-neon-green">Our Mission</h3>
                  <p className="text-gray-300">
                    To provide cutting-edge LFP battery solutions that empower India's transition
                    to clean energy, making electric mobility accessible, safe, and sustainable for all.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="glass-card p-6 hover:bg-white/15 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-earth-green-500/20 rounded-xl">
                  <Eye className="w-6 h-6 text-earth-neon-green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-earth-neon-green">Our Vision</h3>
                  <p className="text-gray-300">
                    To become India's most trusted name in advanced battery technology, leading the
                    charge towards a carbon-neutral future with innovation and excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Values Card */}
            <div className="glass-card p-6 hover:bg-white/15 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-earth-green-500/20 rounded-xl">
                  <Heart className="w-6 h-6 text-earth-neon-green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-earth-neon-green">Our Values</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-earth-neon-green rounded-full" />
                      <span className="text-gray-300">Innovation in Every Cell</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-earth-neon-green rounded-full" />
                      <span className="text-gray-300">Safety Without Compromise</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-earth-neon-green rounded-full" />
                      <span className="text-gray-300">Sustainability at Core</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-earth-neon-green rounded-full" />
                      <span className="text-gray-300">Customer Success First</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
