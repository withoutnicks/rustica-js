/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rus-bg': '#16161a',
        'rus-secondary': '#242629',
        'rus-btn-primary': '#7f5af0',
        'rus-bg-card': '#242629',
        'rus-primary': '#eaddcf',
        'rus-card-p': '#94a1b2'
      },
    },
  },
  plugins: [],
}

