/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "emanuel": "rgb(234 88 12 / var(--tw-text-opacity))",
      },
    },
    themes: ["dark"],
  },
  plugins: [require("daisyui")],
}