/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#001427',
        secondary: '#bf0603',
        para: "#474448",
        background: "#ebebd3"
      
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          
        }
      }
    },
  },
  plugins: [],
}

