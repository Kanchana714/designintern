/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#aaa', // <-- this would override the default dark gray!
        },
      },
    },
  },
  plugins: [],
}

