/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'doraemon-blue': '#0093DD',
        'doraemon-light-blue': '#E6F3FF',
        'doraemon-yellow': '#FFD700',
        'doraemon-red': '#FF6B6B',
        'unicorn-pink': '#FFB6E1',
        'dolphin-teal': '#40E0D0',
        'balloon-pink': '#FFE5E5',
        'balloon-blue': '#E5F5FF',
        'balloon-yellow': '#FFF5E5',
        'balloon-green': '#E5FFE5',
      },
      fontFamily: {
        'heading': ['Fredoka One', 'cursive'],
        'body': ['Poppins', 'sans-serif'],
        'comic': ['Comic Neue', 'cursive'],
      },
      borderRadius: {
        'cartoon': '20px',
      },
      spacing: {
        'section': '80px',
      },
    },
  },
  plugins: [],
}
