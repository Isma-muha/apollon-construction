/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF7F2',
          2: '#F2EDE4',
          3: '#E8E0D4',
        },
        green: {
          DEFAULT: '#1B6B30',
          mid: '#2A8A42',
          light: '#3DAB57',
        },
        clay: '#C4623A',
        ink: {
          DEFAULT: '#1C1A14',
          2: '#3A3630',
        },
        muted: '#7A7060',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
