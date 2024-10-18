/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // ? Ejemplo para agregar colores personalizados
      colors: {
        'rojo-claro': '#fca5a5',
      },
      spacing: {
        '42': '250px',
        '100': '540px'
      },
      screens: {
        'tablet': '900px',
        'msm':'431px',
      }
    },
  },
  plugins: [],
}
