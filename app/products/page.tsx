'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Battery, Zap, Shield, Clock, TrendingUp,
  Download, ArrowRight, CheckCircle, Info,
  Cpu, Gauge, Thermometer, Package
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import FloatingIcons3D from '@/components/FloatingIcons3D'
import ParticlesBackground from '@/components/ParticlesBackground'

// Product data structure for scalability
interface Product {
  id: string
  name: string
  model: string
  category: string
  voltage: string
  capacity: string
  chemistry: string
  applications: string[]
  features: string[]
  specifications: {
    [key: string]: string
  }
  isAvailable: boolean
  isNew?: boolean
  datasheet?: string
}

const products: Product[] = [
  {
    id: 'ev-wheeler-105ah',
    name: 'EV Wheeler Battery',
    model: '51.2V 105Ah',
    category: 'Electric Mobility',
    voltage: '51.2V',
    capacity: '105Ah',
    chemistry: 'Lithium Iron Phosphate (LFP)',
    applications: ['E-Rickshaw', 'E-Cart', 'EV Wheeler'],
    features: [
      'Plug-and-play installation',
      'Modular architecture',
      'Advanced BMS protection',
      'Remote monitoring support',
      'Fast charge compatible',
      'Stable output across discharge'
    ],
    specifications: {
      'Nominal Voltage': '51.2V',
      'Nominal Capacity': '105Ah',
      'Energy': '5.376 kWh',
      'Chemistry': 'LiFePO4',
      'Cycle Life': '4000+ cycles',
      'Charging Time': '4-5 hours',
      'Operating Temp': '-20°C to 60°C',
      'Warranty': '3 years'
    },
    isAvailable: true,
    isNew: true
  },
  {
    id: 'inverter-battery-12v',
    name: 'Inverter Battery',
    model: '12.8V 105Ah',
    category: 'Energy Storage',
    voltage: '12.8V',
    capacity: '105Ah',
    chemistry: 'Lithium Iron Phosphate (LFP)',
    applications: ['Home Backup', 'Solar Storage', 'Inverter Systems'],
    features: [
      'Compatible with lead acid invertors',
      'Drop-in replacement for lead acid batteries',
      'Advanced BMS protection',
      'Maintenance-free operation',
      'Lightweight design',
      'Long cycle life'
    ],
    specifications: {
      'Nominal Voltage': '12.8V',
      'Nominal Capacity': '105Ah',
      'Energy': '1.344 kWh',
      'Chemistry': 'LiFePO4',
      'Compatibility': 'Lead Acid Invertors',
      'Operating Temp': '-20°C to 60°C',
      'Warranty': '5 years'
    },
    isAvailable: true,
    isNew: true
  },
  {
    id: 'inverter-battery-25v',
    name: 'Inverter Battery',
    model: '25.6V 105Ah',
    category: 'Energy Storage',
    voltage: '25.6V',
    capacity: '105Ah',
    chemistry: 'Lithium Iron Phosphate (LFP)',
    applications: ['Home Backup', 'Solar Storage', 'Inverter Systems'],
    features: [
      'Compatible with lead acid invertors',
      'Drop-in replacement for lead acid batteries',
      'Advanced BMS protection',
      'Maintenance-free operation',
      'Lightweight design',
      'Long cycle life'
    ],
    specifications: {
      'Nominal Voltage': '25.6V',
      'Nominal Capacity': '105Ah',
      'Energy': '2.688 kWh',
      'Chemistry': 'LiFePO4',
      'Compatibility': 'Lead Acid Invertors',
      'Operating Temp': '-20°C to 60°C',
      'Warranty': '5 years'
    },
    isAvailable: true,
    isNew: true
  },
  {
    id: 'inverter-battery-48v',
    name: 'Inverter Battery',
    model: '48.0V 105Ah',
    category: 'Energy Storage',
    voltage: '48.0V',
    capacity: '105Ah',
    chemistry: 'Lithium Iron Phosphate (LFP)',
    applications: ['Home Backup', 'Solar Storage', 'Inverter Systems'],
    features: [
      'Compatible with lead acid invertors',
      'Drop-in replacement for lead acid batteries',
      'Advanced BMS protection',
      'Maintenance-free operation',
      'Lightweight design',
      'Long cycle life'
    ],
    specifications: {
      'Nominal Voltage': '48.0V',
      'Nominal Capacity': '105Ah',
      'Energy': '5.04 kWh',
      'Chemistry': 'LiFePO4',
      'Compatibility': 'Lead Acid Invertors',
      'Operating Temp': '-20°C to 60°C',
      'Warranty': '5 years'
    },
    isAvailable: true,
    isNew: true
  },
  // Placeholder products for future expansion
  {
    id: 'energy-storage-10kwh',
    name: 'Home Energy Storage',
    model: '10kWh ESS',
    category: 'Energy Storage',
    voltage: '48V',
    capacity: '200Ah',
    chemistry: 'LFP',
    applications: ['Home Backup', 'Solar Storage', 'Off-Grid Systems'],
    features: [],
    specifications: {},
    isAvailable: false
  },
  {
    id: 'commercial-battery-20kwh',
    name: 'Commercial Battery Pack',
    model: '20kWh Industrial',
    category: 'Commercial',
    voltage: '384V',
    capacity: '52Ah',
    chemistry: 'LFP',
    applications: ['Industrial Backup', 'Data Centers', 'Telecom'],
    features: [],
    specifications: {},
    isAvailable: false
  },
  {
    id: 'custom-solution',
    name: 'Custom Battery Solutions',
    model: 'Tailored to Your Needs',
    category: 'Custom',
    voltage: 'Variable',
    capacity: 'Variable',
    chemistry: 'LFP',
    applications: ['Special Applications', 'OEM Solutions', 'Custom Projects'],
    features: [],
    specifications: {},
    isAvailable: false
  }
]

const categories = ['All', 'Electric Mobility', 'Energy Storage', 'Commercial', 'Custom']

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [productsRef, productsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory)

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
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Battery className="w-8 h-8 text-earth-neon-green" />
              <span className="text-earth-neon-green font-semibold uppercase tracking-wider">
                Product Catalogue
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-6">
              Power <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced LFP battery technology designed for performance, safety, and longevity.
              Find the perfect power solution for your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category
                  ? 'bg-earth-green-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-earth-green-50 hover:text-earth-green-600'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            ref={productsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={productsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={productsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 ${!product.isAvailable ? 'opacity-75' : ''
                  }`}
              >
                {/* New Badge */}
                {product.isNew && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-earth-neon-green text-earth-charcoal-900 text-xs font-bold rounded-full">
                      NEW
                    </span>
                  </div>
                )}

                {/* Product Image/Icon Area */}
                <div className="h-48 bg-gradient-to-br from-earth-green-500 to-earth-green-600 flex items-center justify-center relative overflow-hidden">
                  <Battery className="w-24 h-24 text-white/20 absolute" />
                  <div className="relative z-10 text-center text-white">
                    <Zap className="w-16 h-16 mx-auto mb-2" />
                    <p className="font-bold text-lg">{product.model}</p>
                  </div>
                  {!product.isAvailable && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">Coming Soon</span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.category}</p>

                  {product.isAvailable ? (
                    <>
                      {/* Key Specs */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <Gauge className="w-4 h-4 text-earth-green-500" />
                          <span className="text-sm text-gray-600">{product.voltage}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Package className="w-4 h-4 text-earth-green-500" />
                          <span className="text-sm text-gray-600">{product.capacity}</span>
                        </div>
                      </div>

                      {/* Applications */}
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-gray-500 mb-2">APPLICATIONS</p>
                        <div className="flex flex-wrap gap-2">
                          {product.applications.slice(0, 3).map((app, i) => (
                            <span key={i} className="text-xs px-2 py-1 bg-earth-green-50 text-earth-green-700 rounded">
                              {app}
                            </span>
                          ))}
                          {product.applications.length > 3 && (
                            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                              +{product.applications.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-3">
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="flex-1 px-4 py-2 bg-earth-green-500 text-white font-semibold rounded-lg hover:bg-earth-green-600 transition-colors flex items-center justify-center"
                        >
                          <Info className="w-4 h-4 mr-2" />
                          View Details
                        </button>
                        {product.datasheet && (
                          <button className="p-2 border border-earth-green-500 text-earth-green-500 rounded-lg hover:bg-earth-green-50 transition-colors">
                            <Download className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-gray-500 mb-4">Product details coming soon</p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center text-earth-green-500 font-semibold hover:text-earth-green-600"
                      >
                        Get Notified
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && selectedProduct.isAvailable && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-lg font-bold mb-3 text-earth-green-500">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-earth-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-3 text-earth-green-500">Applications</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.applications.map((app, i) => (
                        <span key={i} className="px-3 py-1 bg-earth-green-50 text-earth-green-700 rounded-full text-sm">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <h3 className="text-lg font-bold mb-3 text-earth-green-500">Technical Specifications</h3>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <dl className="space-y-3">
                      {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <dt className="text-gray-600">{key}:</dt>
                          <dd className="font-semibold text-gray-800">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="flex-1 px-6 py-3 bg-earth-green-500 text-white font-semibold rounded-lg hover:bg-earth-green-600 transition-colors text-center"
                >
                  Request Quote
                </Link>
                {selectedProduct.datasheet && (
                  <button className="px-6 py-3 border border-earth-green-500 text-earth-green-500 font-semibold rounded-lg hover:bg-earth-green-50 transition-colors flex items-center justify-center">
                    <Download className="w-5 h-5 mr-2" />
                    Download Datasheet
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Why Our <span className="gradient-text">Products Excel</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Cpu className="w-10 h-10 text-earth-green-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Smart BMS</h3>
              <p className="text-gray-600 text-sm">Advanced battery management system for optimal performance and safety</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Shield className="w-10 h-10 text-earth-green-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Long Warranty</h3>
              <p className="text-gray-600 text-sm">Up to 5-year warranty coverage for peace of mind</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Thermometer className="w-10 h-10 text-earth-green-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Wide Temp Range</h3>
              <p className="text-gray-600 text-sm">Reliable operation from -20°C to 60°C</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <TrendingUp className="w-10 h-10 text-earth-green-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Long Cycle Life</h3>
              <p className="text-gray-600 text-sm">Thousands of cycles with minimal capacity loss</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
