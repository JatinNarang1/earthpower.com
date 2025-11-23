'use client'

import Link from 'next/link'
import { Battery, Menu, X, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled
                    ? 'bg-earth-charcoal-900/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
                    : 'bg-transparent py-6'
                }`}
        >
            <nav className="container-custom">
                <div className="flex items-center justify-between">
                    {/* Logo Area */}
                    <Link href="/" className="flex items-center space-x-3 group relative z-50">
                        <div className="relative">
                            <div className="absolute inset-0 bg-earth-neon-green blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                            <Battery className="relative w-8 h-8 text-earth-neon-green transform group-hover:scale-110 group-hover:rotate-90 transition-all duration-500 ease-out" />
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight group-hover:tracking-normal transition-all duration-500">
                            EARTH<span className="text-earth-neon-green">POWER</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {[
                            { name: 'Home', href: '/' },
                            { name: 'Products', href: '/products' },
                            { name: 'Technology', href: '/technology' },
                            { name: 'About', href: '/about' },
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative px-5 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group overflow-hidden rounded-full"
                            >
                                <span className="relative z-10">{item.name}</span>
                                {/* Magnetic Hover Effect Background */}
                                <span className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
                                {/* Bottom Glow Line */}
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-earth-neon-green group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300 opacity-0 group-hover:opacity-100 blur-[1px]" />
                            </Link>
                        ))}

                        <Link
                            href="/contact"
                            className="ml-6 relative group px-7 py-2.5 overflow-hidden rounded-full bg-earth-green-500 text-white font-bold text-sm shadow-lg shadow-earth-green-500/20 hover:shadow-earth-neon-green/40 transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            <span className="relative z-10 flex items-center">
                                Get Started
                                <ChevronRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                            </span>
                            {/* Shine Effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors relative z-50"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <AnimatePresence mode="wait">
                            {isMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="w-6 h-6" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="w-6 h-6" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="md:hidden overflow-hidden bg-earth-charcoal-900/95 backdrop-blur-xl border-t border-white/10 mt-4 rounded-2xl shadow-2xl"
                        >
                            <div className="p-4 space-y-2">
                                {[
                                    { name: 'Home', href: '/' },
                                    { name: 'Products', href: '/products' },
                                    { name: 'Technology', href: '/technology' },
                                    { name: 'About', href: '/about' },
                                    { name: 'Contact', href: '/contact' },
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Link
                                            href={item.href}
                                            className="flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all group"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <span className="font-medium">{item.name}</span>
                                            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-earth-neon-green" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    )
}
