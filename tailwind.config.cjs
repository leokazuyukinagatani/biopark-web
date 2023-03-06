/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      fontFamily: {
        roboto: 'Roboto, sans-serif',
        poppins: 'Poppins, sans-serif',
        dmsans: 'DM Sans, sans-serif',
      },
      colors: {
        light: {
          100: 'hsla(0,0%,100%,1)',
          200: 'hsla(39,100%,97%,1)',
          300: 'hsla(240,9%,89%,1)',
          400: 'hsla(240,7%,78%,1)',
          500: 'hsla(240,6%,51%,1)',
          600: 'hsla(204,2%,47%,1)',
          700: 'hsla(201,10%,34%,1)',
        },
        dark: {
          100: 'hsla(192, 100%, 1%, 1)',
          200: 'hsla(198, 100%, 2%, 1)',
          300: 'hsla(210, 100%, 1%, 1)',
          400: 'hsla(199, 100%, 3%, 1)',
          500: 'hsla(198, 100%, 4%, 1)',
          600: 'hsla(200, 100%, 5%, 1)',
          700: 'hsla(199, 100%, 5%, 1)',
          800: 'hsla(201, 35%, 8%, 1)',
          900: 'hsla(200, 48%, 10%, 1)',
          1000: 'hsla(201, 22%, 13%, 1)',
        },
        gradientdark: {
          100: 'hsla(200, 100%, 3%, 0.27)',
          200: 'hsla(200, 100%, 3%, 1)',
          
        },
        gradientgreen: {
          100: 'hsla(198, 61%, 9%, 1)',
          200: 'hsla(200, 100%, 5%, 1)',
        },
        tomato: {
          100: 'hsla(353, 95%, 24%, 1)',
          200: 'hsla(354, 100%, 29%, 1)',
          300: 'hsla(355, 67%, 40%, 1)',
          400: 'hsla(355, 38%, 49%, 1)',
        },
        carrot: {
          100: 'hsla(32, 96%, 64%, 1)',
        },
        mint: {
          100: 'hsla(147, 96%, 42%, 1)',
        },
        cake: {
          100: 'hsla(195, 91%, 25%, 1)',
        },
      },
    },
  },
 
  plugins: [],
}
