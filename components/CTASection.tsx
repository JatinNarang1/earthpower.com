'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
    return (
        <section className="relative py-20 bg-gradient-to-r from-earth-green-900 to-earth-charcoal-900">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Power Your Future?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Get in touch with us to learn more about our LiFePO4 battery solutions.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 bg-earth-neon-green text-earth-charcoal-900 font-semibold rounded-full hover:bg-white transition-all duration-300"
                    >
                        Contact Us
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
