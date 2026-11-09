/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#23558a',
        'brand-dark': '#193d65',
        'focus-ring': '#c27520',
      },
    },
  },
  // El sitio ya define su base tipográfica y los estilos de los elementos HTML.
  corePlugins: { preflight: false },
  plugins: [],
};
