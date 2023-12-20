/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
  "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        'Poppins':['Poppins','sans-serif'],
        'Roboto':['Roboto','sans-serif']
      }
      ,lineClamp:{
        10:'10',
        12:'12',
        14:'14',
        16:'16',
        18:'18',
        20:'20',
        22:'22',
      },
      keyframes: {
        DownToUp: {
          '0%': { transform: 'translateY(47%)', 
                  opacity: 0},
          '100%': { transform: 'translateY(0%)',
                    opacity: 1},
        },
        popOutArow:{
          '0%': {opacity: 0},
          '100%': {opacity: 1},
        },
        LeftToRight: {
          '0%': { transform: 'translateX(-47%)', 
                  opacity: 0},
          '100%': { transform: 'translateX(0%)',
                    opacity: 1},
        },
        RightToLeft: {
          '0%': { transform: 'translateX(0%)', 
                  opacity: 1},
          '100%': { transform: 'translateX(-47%)',
                    opacity: 0},},
        DownToUpSimple: {
          '0%': { transform: 'translateY(47%)',},
          '100%': { transform: 'translateY(0%)'},
        },
      },
      animation: {
        DownToUp: 'DownToUp 0.4s ease-in-out forwards',
        popOutArow: 'popOutArow 0.3s ease-in-out forwards',
        LeftToRight: 'LeftToRight 0.3s ease-in-out forwards',
        RightToLeft: 'RightToLeft 0.3s ease-in-out forwards',
        DownToUpSimple:'DownToUpSimple 0.5s ease-in-out forwards'

      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp'),],
});

