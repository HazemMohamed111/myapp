/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/hazem1/navigation.js",
    "./src/hazem1/body.js",
    "./src/hazem1/cards.js",
    "./src/hazem1/services.js",
    "./src/hazem1/portfolio.js",
    "./src/hazem1/about.js",
    "./src/hazem1/contact.js",
  ],
  theme: {
    extend: {
      colors: {
        'primary-1': '#F4CE14',
        'primary-2': '#495E57',
        'Highlight-1': '#EDEFEE',
        'Highlight-2': '#333333',
        "Secondary-1": '#EE9972',
      },
    },
    fontFamily: {
      'main': ['Markazi Text'],
      'second': ['Karla'],
    }
  },
  plugins: [
  ],
}