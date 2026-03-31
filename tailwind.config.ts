import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sg-orange': '#d95015',
        'sg-green-dark': '#0d410e',
        'sg-cream': '#fdf5dd',
        'sg-blue-light': '#0db0e5',
        'sg-green-bright': '#8cc311',
        'sg-navy': '#022b63',
        // Preserve legacy names for backward compatibility initially, mapping to new colors
        'primary-dark': '#022b63', // sg-navy
        'primary-blue': '#0db0e5', // sg-blue-light
        'primary-gold': '#d95015', // sg-orange
        'accent-gold': '#d95015', // sg-orange
        'accent-gold-light': '#fdf5dd', // sg-cream
        'accent-green': '#8cc311', // sg-green-bright
        'neutral-light': '#F8F9FA',
        'neutral-gray': '#E8E9EB',
        'neutral-gray-dark': '#4A5568',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Alexandria', 'Inter', 'sans-serif'],
      },
      spacing: {
        hero: '100vh',
        section: '6rem',
      },
      borderRadius: {
        DEFAULT: '12px',
        lg: '24px',
      },
      boxShadow: {
        elevated: '0 10px 40px rgba(0, 0, 0, 0.1)',
        'elevated-lg': '0 20px 60px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255, 184, 77, 0.7)' },
          '50%': { boxShadow: '0 0 0 10px rgba(255, 184, 77, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config

