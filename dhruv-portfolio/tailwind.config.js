/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      colors: {
        // 🎨 Custom brand palette for a polished, modern look
        brand: {
          DEFAULT: '#38BDF8', // light sky blue (main accent)
          dark: '#0EA5E9',    // hover / active state
          light: '#BAE6FD',   // subtle backgrounds or borders
        },
        darkBg: '#0f172a',   // Deep navy background for dark mode
        lightBg: '#f8fafc',  // Clean white-gray background
      },
      boxShadow: {
        smooth: '0 4px 20px rgba(0, 0, 0, 0.08)', // 💎 soft shadow for cards
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)', // consistent transitions
      },
    },
  },
  plugins: [
    // 🌟 Optional: add nice scrollbars and typography support
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
