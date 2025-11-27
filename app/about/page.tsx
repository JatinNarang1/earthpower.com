'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Target, Eye, Heart, Shield, Users, Award,
  TrendingUp, Leaf, Battery, CheckCircle,
  ArrowRight, Sparkles, Zap, Globe
} from 'lucide-react'
import Link from 'next/link'
import { Canvas } from '@react-three/fiber'
import FloatingIcons3D from '@/components/FloatingIcons3D'
import ParticlesBackground from '@/components/ParticlesBackground'

const timeline = [
  { year: '2021', event: 'Earth Power founded with vision for clean energy' },
  { year: '2022', event: 'R&D center established for LFP technology' },
  { year: '2022', event: 'First production facility operational' },
  { year: '2024', event: 'Launched EV Wheeler battery series' },
  { year: '2025', event: 'Expanding across India with dealer network' },
]

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Every battery undergoes rigorous testing to ensure absolute safety'
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Committed to eco-friendly solutions for a greener tomorrow'
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'Continuous R&D to deliver cutting-edge battery technology'
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Your success drives our innovation and service excellence'
  },
]

const advantages = [
  {
    category: 'Performance Advantages',
    items: [
      '3-5 times longer cycle life than lead-acid',
      'Consistent power output throughout discharge',
      'Fast charging capability (2-3 hours)',
      'Higher energy density and efficiency',
      'Superior performance in extreme temperatures'
    ]
  },
  {
    category: 'Safety Advantages',
    items: [
      'No thermal runaway risk',
      'Non-toxic and environmentally friendly',
      'No explosion or fire hazards',
      'Built-in Battery Management System',
      'Stable chemistry even when damaged'
    ]
  },
  {
    category: 'Economic Advantages',
    items: [
      'Lower total cost of ownership',
      'Zero maintenance required',
      'Reduced replacement frequency',
      'Lower electricity consumption',
      'Higher resale value'
    ]
  }
]

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [advantagesRef, advantagesInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-earth-charcoal-900 via-earth-green-900 to-earth-charcoal-900 overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0 opacity-[0.18]">
          <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <FloatingIcons3D />
            <ParticlesBackground />
          </Canvas>
        </div>

        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(53,189,56,0.05)_0px,rgba(53,189,56,0.05)_1px,transparent_1px,transparent_30px)] opacity-30 z-[1]" />

        <div className="container-custom relative z-10 pt-20 text-center">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-6">
              About <span className="gradient-text">Earth Power</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering India's transition to sustainable electric mobility through
              advanced LFP battery technology and unwavering commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Stand For Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            ref={storyRef}
            initial={{ opacity: 0, y: 30 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                What We <span className="gradient-text">Stand For</span>
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-earth-green-50 to-white p-8 rounded-2xl border border-earth-green-100">
                  <Globe className="w-12 h-12 text-earth-green-500 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Our Purpose</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Earth Power exists to accelerate India's transition to clean energy.
                    We believe that sustainable transportation shouldn't be a luxury but a
                    standard, accessible to every Indian. Our LFP batteries are designed to
                    make electric mobility safer, more reliable, and economically viable for all.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-earth-green-50 to-white p-8 rounded-2xl border border-earth-green-100">
                  <Zap className="w-12 h-12 text-earth-green-500 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every Earth Power battery carries our promise of uncompromised quality,
                    safety, and performance. We stand behind our products with comprehensive
                    warranties, 24/7 support, and a commitment to continuous innovation that
                    keeps you ahead of the curve.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            ref={missionRef}
            initial={{ opacity: 0, y: 30 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                Mission, Vision & <span className="gradient-text">Values</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Mission */}
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-earth-green-500 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-earth-charcoal-800">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To revolutionize India's energy storage landscape with cutting-edge LFP battery
                  solutions that empower sustainable electric mobility, making it accessible, safe,
                  and economically viable for every Indian.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-earth-green-500 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-earth-charcoal-800">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become India's most trusted name in advanced battery technology, leading the
                  charge towards a carbon-neutral future through relentless innovation, superior
                  quality, and unwavering commitment to sustainability.
                </p>
              </div>

              {/* Values Preview */}
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-earth-green-500 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-earth-charcoal-800">Our Values</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-earth-green-500" />
                    <span className="text-gray-600">Safety Without Compromise</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-earth-green-500" />
                    <span className="text-gray-600">Innovation in Every Cell</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-earth-green-500" />
                    <span className="text-gray-600">Sustainability at Core</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-earth-green-500" />
                    <span className="text-gray-600">Customer Success First</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Detailed Values */}
            <motion.div
              ref={valuesRef}
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-6 hover:bg-earth-green-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <value.icon className="w-10 h-10 text-earth-green-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-bold mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Brand Story Timeline */}
      <section className="section-padding bg-earth-charcoal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
            <ambientLight intensity={0.5} />
            <ParticlesBackground />
          </Canvas>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            ref={timelineRef}
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                Our <span className="gradient-text">Journey</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From a vision to revolutionize energy storage to becoming India's emerging
                leader in LFP battery technology.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-earth-green-500/30" />

              {/* Timeline Items */}
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="glass-card p-6 hover:bg-white/15 transition-colors">
                      <div className="text-earth-neon-green font-bold text-2xl mb-2">{item.year}</div>
                      <p className="text-gray-300">{item.event}</p>
                    </div>
                  </div>
                  {/* Center Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-earth-green-500 rounded-full border-4 border-earth-charcoal-900 z-10" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Earth Power Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            ref={advantagesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={advantagesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                Why Choose <span className="gradient-text">Earth Power?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the advantages of advanced LFP technology combined with our
                commitment to excellence and customer success.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {advantages.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={advantagesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-earth-green-300 transition-colors"
                >
                  <Battery className="w-10 h-10 text-earth-green-500 mb-4" />
                  <h3 className="text-2xl font-bold mb-6 text-earth-charcoal-800">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-earth-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <Link
                href="/products"
                className="inline-flex items-center px-8 py-4 bg-earth-green-500 text-white font-semibold rounded-full hover:bg-earth-green-600 transition-colors group"
              >
                Explore Our Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
