/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        '.evenia-container': {
          boxSizing: 'content-box',
          margin: '0 auto',
          maxWidth: '1280px',
          paddingLeft: theme('padding.4'),
          paddingRight: theme('padding.4')
        }
      });
    })
  ],
  theme: {
    extend: {
      borderRadius: {
        full: '100px'
      },
      colors: {
        gray: {
          0: '#FFFFFF', // white
          10: '#F6F6F6', // white gray
          50: '#F6F6F6', // disabled
          60: '#AAAAAA', // light grey
          100: '#757575', // grey
          110: '#545454', // subdue
          900: '#000000' // black
        },
        indigo: {
          dark: '#161239', // header
          darker: '#000C29', // background
          light: '#292451', // card
          main: '#241E4D' // footer
        },
        primary: {
          main: '#624CF5'
        },
        secondary: {
          main: '#FA776C'
        }
      },
      fontSize: {
        'label-xsm': ['12px', {
          fontWeight: 500,
          lineHeight: '16px'
        }]
      }
    }
  }
};
