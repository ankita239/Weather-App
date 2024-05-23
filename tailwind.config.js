/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        wix : ['"Wix Madefor Display"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

