/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f4',
          100: '#f9ede3',
          200: '#f3dac6',
          300: '#e8bf9e',
          400: '#d99d6f',
          500: '#B8703E',
          600: '#A5632E',
          700: '#8a5127',
          800: '#724324',
          900: '#5e3820',
        },
        accent: {
          yellow: '#FFC107',
          orange: '#B8703E',
          brown: '#A5632E',
        },
        background: {
          light: '#F5F1ED',
          cream: '#E8E4DD',
        },
        text: {
          dark: '#2D2D2D',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        'container': '1200px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(184, 112, 62, 0.08)',
        'card': '0 2px 12px rgba(184, 112, 62, 0.06)',
      }
    },
  },
  plugins: [],
}
