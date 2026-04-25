/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo:  ['Cairo', 'sans-serif'],
        tajawal:['Tajawal', 'sans-serif'],
      },
      colors: {
        teal: {
          dark:   '#1a3545',
          mid:    '#2d5d6e',
          light:  '#3d7a8a',
          bright: '#2ab8c8',
        },
        ink: '#0e1e28',
      },
      animation: {
        'spin-slow':   'spin 8s linear infinite',
        'grid-drift':  'gridDrift 20s linear infinite',
        'pulse-dot':   'pulseDot 2s infinite',
        'float-orb':   'floatOrb 6s ease-in-out infinite',
        'wa-ping':     'waPing 2s ease-in-out infinite',
        'fade-slide':  'fadeSlide .8s ease both',
      },
      keyframes: {
        gridDrift:  { to: { transform: 'translateY(60px)' } },
        pulseDot:   { '0%,100%': { opacity: 1, transform: 'scale(1)' }, '50%': { opacity: .5, transform: 'scale(1.5)' } },
        floatOrb:   { '0%,100%': { transform: 'translateY(0) scale(1)' }, '50%': { transform: 'translateY(-30px) scale(1.05)' } },
        waPing:     { '0%,100%': { boxShadow: '0 0 0 0 rgba(255,255,255,.4)' }, '50%': { boxShadow: '0 0 0 8px rgba(255,255,255,0)' } },
        fadeSlide:  { from: { opacity: 0, transform: 'translateY(-20px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
