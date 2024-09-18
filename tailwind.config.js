/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': { 'min': '0px', 'max': '768px' }, 
        'tablet': { 'min': '768px', 'max': '992px' }, 
        'laptop': { 'min': '1024px'}

      },
    },
  },
  plugins: [],
}
