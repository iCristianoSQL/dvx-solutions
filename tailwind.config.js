module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      colors: {
        'nav-color': '#1E2235',
        'default-color': '#515050',
        'span-color': '#ABADC6',
        'border-color': '#BBBBBB',
      }
    },
  },
  plugins: [],
}