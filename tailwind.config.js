/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '760px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      spacing: {
        '608px': '38rem',
        '800px': '50rem'
      },
      fontSize: {

      },
      colors: {
        'darkerBlue': '#1B1641',
        'darkBlue': '#3C249C',
        'customPurple': '#832AD0',
        'lightGreen': '#47FFBF',
        'tosca': '#35DECE',
        'teal': '#2D9ABB'
      },
    },
  },
  plugins: [],
}
