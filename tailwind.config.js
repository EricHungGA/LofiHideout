/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      height: {
        '100': '28rem',
        '128': '30rem',
      },
      animation: {
        text: "text 5s ease infinite",
      },
    },
  },
  plugins: [],
}