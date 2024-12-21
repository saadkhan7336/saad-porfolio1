/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif','DM Sans'], // Custom default font
        poppins: ['Poppins', 'sans-serif'], // Additional font
        mulish: ['Mulish', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
      animation: {
        'rotate-once': 'rotate360 1s ease-in-out',
      },
      keyframes: {
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}