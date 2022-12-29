/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        darkColor: '#333',
        darkGreen: '#023020',
        greyGreen: '#5F8575',
        lightGreyGreen: '#68917f',
        forestGreen: '#228B22',
        mossGreen: '#8A9A5B',
        lightGreen: '#2e9c2e',
        lightBlue: '#0476d0',
        lightPurple: '#6500b0',
        lightOrange: '#ffbf00',
        lightGrey: '#eeeeee',
        medGrey: '#e7e5e5'
      },
    },
  },
  plugins: [],
}
