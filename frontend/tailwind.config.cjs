/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        keyframes: {
            'fadeIn': {
                '0%': {opacity: 0},
                '100%': {opacity: 1}
            },
            'fadeOut': {
                '0%': {opacity: 1},
                '100%': {opacity: 0}
            },
            'fade':{
                '0%,100%': {opacity: 0},
                '50%': {opacity: 1},
            }
        },
        animation: {
            'fadeIn': 'fadeIn 2s linear',
            'fadeOut': 'fadeOut 2s linear',
            'fade': 'fade 2s linear'
        }
    },
  },
  plugins: [],
}
