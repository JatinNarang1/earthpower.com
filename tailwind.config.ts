import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'earth-charcoal': {
                    900: '#0a0f0d',
                    800: '#1a1f1d',
                },
                'earth-green': {
                    900: '#0d2818',
                    500: '#35bd38',
                },
                'earth-neon-green': '#4ade80',
            },
            fontFamily: {
                display: ['Montserrat', 'sans-serif'],
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
export default config
