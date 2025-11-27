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
        clay: '#C97D60',
        terracotta: '#B85C38',
        charcoal: '#2C2C2C',
        'charcoal-light': '#3A3A3A',
        'deep-green': '#1B5E20',
        gold: '#D4AF37',
        straw: '#E8D5B7',
        beige: '#F5E6D3',
        'flame-red': '#FF4500',
        'flame-orange': '#FF6B35',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
export default config

