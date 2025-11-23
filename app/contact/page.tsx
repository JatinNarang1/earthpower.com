'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Phone, Mail, MapPin, Clock, MessageSquare,
  Send, Building, User, Briefcase, CheckCircle, ArrowRight
} from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Canvas } from '@react-three/fiber'
import FloatingIcons3D from '@/components/FloatingIcons3D'
import ParticlesBackground from '@/components/ParticlesBackground'

interface FormData {
  name: string
  phone: string
  email: string
  businessType: string
  message: string
}

const businessTypes = [
  'E-Rickshaw Operator',
  'EV Dealer',
  'Fleet Owner',
  'OEM Manufacturer',
  'Distributor',
  'End User',
  'Other'
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [infoRef, infoInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success('Thank you for your inquiry! We\'ll contact you within 24 hours.')
        reset()
      } else {
        toast.error(result.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Smooth Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#051a0d] via-[#0a2615] via-[#0d2818] to-[#051a0d]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(13,40,24,0.8)_0%,rgba(5,26,13,1)_100%)]" />
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
              <MessageSquare className="w-8 h-8 text-earth-neon-green" />
              <span className="text-earth-neon-green font-semibold uppercase tracking-wider">
                Get In Touch
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-6">
              Contact <span className="gradient-text">Earth Power</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to power your journey with advanced LFP battery solutions?
              Our experts are here to help you find the perfect energy solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 -mt-20 relative z-20">
        <div className="container-custom">
          <motion.div
            ref={infoRef}
            initial={{ opacity: 0, y: 30 }}
            animate={infoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {/* Phone Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow">
              <div className="w-12 h-12 bg-earth-green-100 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-earth-green-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">Call Us</h3>
              <a href="tel:+01141435047" className="text-earth-green-500 font-semibold hover:text-earth-green-600">
                +011 41435047
              </a>
              <p className="text-gray-600 text-sm mt-1">Mon-Sat: 9:00 AM - 6:00 PM</p>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow">
              <div className="w-12 h-12 bg-earth-green-100 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-earth-green-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">Email Us</h3>
              <a href="mailto:earthpowerjourney@gmail.com" className="text-earth-green-500 font-semibold hover:text-earth-green-600 break-all">
                earthpowerjourney@gmail.com
              </a>
              <p className="text-gray-600 text-sm mt-1">24/7 Support Available</p>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow">
              <div className="w-12 h-12 bg-earth-green-100 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-earth-green-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm">
                G.F. 960, Block G, DSIDC Industrial Area Narela, New Delhi – 110040
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
                <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...register('name', { required: 'Name is required' })}
                        type="text"
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-earth-green-500 focus:border-transparent transition-all ${errors.name ? 'border-red-500' : 'border-gray-300'
                          }`}
                        placeholder="Jatin"
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...register('phone', {
                          required: 'Phone number is required',
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: 'Please enter a valid 10-digit phone number'
                          }
                        })}
                        type="tel"
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-earth-green-500 focus:border-transparent transition-all ${errors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                        placeholder="9876543210"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Please enter a valid email address'
                          }
                        })}
                        type="email"
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-earth-green-500 focus:border-transparent transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                        placeholder="EarthPower@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Business Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Business Type *
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        {...register('businessType', { required: 'Please select a business type' })}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-earth-green-500 focus:border-transparent transition-all appearance-none ${errors.businessType ? 'border-red-500' : 'border-gray-300'
                          }`}
                      >
                        <option value="">Select Business Type</option>
                        {businessTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    {errors.businessType && (
                      <p className="mt-1 text-sm text-red-500">{errors.businessType.message}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      rows={4}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-earth-green-500 focus:border-transparent transition-all ${errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                      placeholder="Tell us about your requirements..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center ${isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-earth-green-500 hover:bg-earth-green-600 hover:shadow-lg'
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Right Side - Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Why Choose Us */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Why Contact Earth Power?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-earth-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Expert Consultation</h4>
                      <p className="text-gray-600">Get personalized battery solutions from our technical experts</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-earth-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Quick Response</h4>
                      <p className="text-gray-600">We respond to all inquiries within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-earth-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Competitive Pricing</h4>
                      <p className="text-gray-600">Best value for premium LFP battery technology</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-earth-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">After-Sales Support</h4>
                      <p className="text-gray-600">Comprehensive warranty and technical support</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visit Our Facility - Premium Card */}
              <div className="relative group">
                {/* Glowing Background Effect */}
                <div className="absolute inset-0 bg-earth-green-500/40 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />

                {/* Main Card */}
                <div className="relative bg-earth-green-500 hover:bg-earth-green-600 rounded-3xl p-10 text-white shadow-2xl overflow-hidden border border-earth-neon-green/20 transition-all duration-500">
                  {/* Animated Background Orbs */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl transition-transform duration-1000 group-hover:scale-125" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-earth-neon-green/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl transition-transform duration-1000 group-hover:scale-125" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Title with Shimmer Effect */}
                    <div className="mb-3 relative">
                      <h3 className="text-3xl font-bold text-white">
                        Visit Our Facility
                      </h3>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <p className="mb-8 text-white/95 text-lg font-medium">
                      Experience our products firsthand and meet our team
                    </p>

                    {/* Info Cards */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start space-x-4 bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/25 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-[1.02] transform shadow-lg hover:shadow-xl">
                        <div className="p-3 bg-white/25 rounded-xl backdrop-blur-md shadow-lg ring-1 ring-white/30">
                          <MapPin className="w-6 h-6 text-white drop-shadow-lg" />
                        </div>
                        <div className="flex-1 mt-1">
                          <p className="font-semibold text-white text-lg leading-snug">DSIDC Industrial Area, Narela, Delhi</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/25 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-[1.02] transform shadow-lg hover:shadow-xl">
                        <div className="p-3 bg-white/25 rounded-xl backdrop-blur-md shadow-lg ring-1 ring-white/30">
                          <Clock className="w-6 h-6 text-white drop-shadow-lg" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-white text-lg">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                        </div>
                      </div>
                    </div>

                    {/* Premium CTA Button */}
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=G.F.%20960%2C%20Block%20G%2C%20DSIDC%20Industrial%20Area%20Narela%2C%20New%20Delhi%20%E2%80%93%20110040"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-full inline-flex items-center justify-center px-8 py-5 bg-white text-green-600 font-bold text-lg rounded-2xl shadow-2xl transition-all duration-500 group/btn"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />

                      <span className="relative flex items-center gap-3">
                        <span className="font-extrabold">Get Directions</span>
                        <ArrowRight className="w-6 h-6" />
                      </span>
                    </a>


                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
