import plugin from 'tailwind-scrollbar'

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  plugins: [plugin()],
}