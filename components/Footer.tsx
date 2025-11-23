import Link from 'next/link'
import { Battery, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-earth-charcoal-900 text-white border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-earth-green-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container-custom py-16 relative z-10">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2 group cursor-default">
                            <Battery className="w-8 h-8 text-earth-neon-green group-hover:rotate-90 transition-transform duration-500" />
                            <span className="text-2xl font-bold tracking-tight group-hover:tracking-wide transition-all duration-500">
                                EARTH<span className="text-earth-neon-green">POWER</span>
                            </span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Pioneering sustainable energy storage with advanced LiFePO4 technology.
                            Engineered for performance, safety, and the future.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-earth-green-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(74,222,128,0.4)] group"
                                >
                                    <Icon className="w-5 h-5 group-hover:animate-pulse" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-white/90">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'Products', href: '/products' },
                                { name: 'Technology', href: '/technology' },
                                { name: 'About Us', href: '/about' },
                                { name: 'Contact', href: '/contact' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="group flex items-center text-gray-400 hover:text-earth-neon-green transition-all duration-300 hover:translate-x-2"
                                    >
                                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-earth-green-500" />
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-white/90">Contact Us</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start space-x-4 group cursor-default hover:translate-x-1 transition-transform duration-300">
                                <div className="p-2 rounded-full bg-white/5 group-hover:bg-earth-green-500/20 transition-colors duration-300">
                                    <MapPin className="w-5 h-5 text-earth-neon-green" />
                                </div>
                                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                                    G.F. 960, Block G,<br />
                                    DSIDC Industrial Area Narela,<br />
                                    New Delhi – 110040
                                </span>
                            </li>
                            <li className="flex items-center space-x-4 group cursor-default hover:translate-x-1 transition-transform duration-300">
                                <div className="p-2 rounded-full bg-white/5 group-hover:bg-earth-green-500/20 transition-colors duration-300">
                                    <Phone className="w-5 h-5 text-earth-neon-green" />
                                </div>
                                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">+011 41435047</span>
                            </li>
                            <li className="flex items-center space-x-4 group cursor-default hover:translate-x-1 transition-transform duration-300">
                                <div className="p-2 rounded-full bg-white/5 group-hover:bg-earth-green-500/20 transition-colors duration-300">
                                    <Mail className="w-5 h-5 text-earth-neon-green" />
                                </div>
                                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">earthpowerjourney@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-white/90">Stay Updated</h3>
                        <p className="text-gray-400 mb-6">
                            Subscribe to our newsletter for the latest updates on battery technology.
                        </p>
                        <form className="space-y-4">
                            <div className="relative group">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-earth-neon-green focus:bg-white/10 focus:ring-1 focus:ring-earth-neon-green/50 transition-all duration-300 placeholder:text-gray-600"
                                />
                                <div className="absolute inset-0 rounded-lg bg-earth-neon-green/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 -z-10" />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-earth-green-500 text-white font-bold py-3 rounded-lg hover:bg-earth-neon-green hover:text-earth-charcoal-900 transition-all duration-300 shadow-lg hover:shadow-earth-green-500/40 transform hover:-translate-y-1 active:scale-95"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Earth Power. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors hover:underline decoration-earth-neon-green underline-offset-4">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors hover:underline decoration-earth-neon-green underline-offset-4">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
