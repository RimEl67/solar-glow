import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0B1E3F',
        'primary-blue': '#1A3A52',
        'primary-gold': '#FFB84D',
        'accent-gold': '#FFB84D',
        'accent-gold-light': '#FFC966',
        'accent-green': '#2D9B6D',
        'neutral-light': '#F8F9FA',
        'neutral-gray': '#E8E9EB',
        'neutral-gray-dark': '#4A5568',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
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

