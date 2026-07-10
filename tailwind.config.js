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
        sans: ['Caveat', 'cursive'],
        urdu: ['"Noto Nastaliq Urdu"', 'serif'],
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
  ],
};
