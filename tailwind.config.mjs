/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        display: ['"Barlow Condensed"', '"Franklin Gothic Medium"', 'sans-serif'],
        body: ['"Source Serif 4"', 'Georgia', 'serif'],
        mono: ['"Barlow Condensed"', '"Franklin Gothic Medium"', 'sans-serif'],
        sans: ['"Barlow"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {},
      boxShadow: {},
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
