/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Purdue core
        'purdue-gold': '#CFB991',
        'purdue-black': '#000000',
        'aged-gold': '#8E6F3E',
        'rush-gold': '#DAAA00',

        // Dark theme surfaces
        'space-black': '#0A0A0F',
        'panel': '#12121A',
        'card': '#1A1A25',
        'card-hover': '#22222F',

        // Text
        'warm-white': '#E8E4DD',
        'muted': '#9A9690',

        // Accents
        'gold': '#CFB991',
        'gold-bright': '#E5D5AA',
        'gold-dim': '#8A7A55',
        'cyan': '#00D4FF',
        'cyan-dim': '#0098B8',
      },
      fontFamily: {
        display: ['"Inter"', 'system-ui', 'sans-serif'],
        body: ['"Source Serif 4"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #CFB991, #00D4FF)',
        'gold-subtle': 'linear-gradient(135deg, #CFB991, #E5D5AA)',
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(207, 185, 145, 0.15)',
        'gold-glow-lg': '0 0 40px rgba(207, 185, 145, 0.2)',
        'cyan-glow': '0 0 20px rgba(0, 212, 255, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
