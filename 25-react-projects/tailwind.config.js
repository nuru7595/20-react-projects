/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '12px'
      },
      center: true
    },
    extend: {
      fontFamily: {
        Nunito: ['Nunito', 'serif']
      }
    },
  },
  plugins: [],
}