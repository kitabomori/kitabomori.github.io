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
        sans: ['Literata', 'serif'],
        urdu: ['"Noto Nastaliq Urdu"', 'serif'],
        // Display face for titles/headings only (English pages) — a
        // heavier, more editorial serif than the body copy, so titles
        // read as a masthead rather than just bold body text. Body
        // copy and Urdu are untouched.
        display: ['Fraunces', 'Literata', 'serif'],
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
  ],
};
