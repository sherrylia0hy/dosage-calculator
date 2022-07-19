/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    './src/components/DrugButton.js',
    './src/components/DrugButtons.js',
    './src/components/InputForm.js',
    './src/components/OutputCard.js',
    './src/components/OutputCards.js',
//Add the paths to all of your template files in your tailwind.config.js file.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
