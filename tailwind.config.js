/** @type {import('tailwindcss').Config} */
module.exports = {
  // Enable class-based dark mode
  darkMode: 'class',

  // Tell Tailwind where to scan for class names (for purging)
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_collections/**/*.md',
    './pages/**/*.md',
    './*.html',
    './*.md',
  ],

  theme: {
    extend: {
      colors: {
        // Brand colours
        brand: {
          teal:  '#009F93',   // primary – headers, nav, links, buttons
          white: '#FFFFFF',   // backgrounds, cards
          green: '#00C851',   // ticker text
        },
      },
      fontFamily: {
        // Only two fonts on the whole site: Literata for every English
        // word, Jameel Noori Nastaliq for every Urdu word. No display
        // face, no fallbacks to other Latin/Nastaliq fonts.
        sans: ['Literata', 'serif'],
        urdu: ['"Jameel Noori Nastaliq"', 'serif'],
        display: ['Literata', 'serif'],
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
  ],
};
