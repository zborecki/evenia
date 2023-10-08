/* eslint-disable max-lines */

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
        },
        '.evenia-empty': {
          minHeight: 'calc(100vh - 99px - 102px)'
        },
        '.evenia-form': {
          background: theme('backgroundColor.indigo.dark'),
          borderRadius: theme('borderRadius.3xl'),
          padding: theme('padding.12')
        }
      });
    })
  ],
  theme: {
    extend: {
      borderRadius: {
        '3xl': '20px',
        card: '14px',
        full: '100px'
      },
      colors: {
        error: {
          main: '#FF4D2D' // critical
        },
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
          lighter: '#3C3860',
          main: '#241E4D' // footer
        },
        primary: {
          light: '#02A6FF',
          main: '#624CF5'
        },
        secondary: {
          dark: '#FD6053',
          main: '#FA776C'
        },
        success: {
          main: '#15BF59' // dark lemon lime
        }
      },
      dropShadow: {
        dropdown: '0px 2px 15px rgba(0, 0, 0, 0.15)'
      },
      fontSize: {
        'button-md': ['18px', {
          fontWeight: 600,
          letterSpacing: '0.36px',
          lineHeight: 'normal'
        }],
        'event-details-paragraph': ['20px', {
          fontWeight: 400,
          letterSpacing: '0.4px',
          lineHeight: 'normal'
        }],
        'event-overview-title': ['48px', {
          fontWeight: 700,
          lineHeight: 'normal'
        }],
        'display-md': ['52px', {
          fontWeight: 700,
          lineHeight: '64px'
        }],
        'display-sm': ['44px', {
          fontWeight: 700,
          lineHeight: '52px'
        }],
        'heading-md': ['28px', {
          fontWeight: 500,
          lineHeight: '36px'
        }],
        'heading-xsm': ['20px', {
          fontWeight: 500,
          lineHeight: '28px'
        }],
        'hero-title': ['72px', {
          fontWeight: 700,
          lineHeight: 'normal'
        }],
        'label-lg': ['18px', {
          fontWeight: 500,
          lineHeight: '24px'
        }],
        'label-md': ['16px', {
          fontWeight: 500,
          lineHeight: '20px'
        }],
        'label-xsm': ['12px', {
          fontWeight: 500,
          lineHeight: '16px'
        }],
        'paragraph-lg': ['18px', {
          fontWeight: 400,
          lineHeight: '28px'
        }],
        'paragraph-sm': ['14px', {
          fontWeight: 400,
          lineHeight: '20px'
        }],
        'paragraph-xl': ['20px', {
          fontWeight: 400,
          letterSpacing: '0.4px',
          lineHeight: 'normal'
        }],
        'stage-title': ['24px', {
          fontWeight: 600,
          letterSpacing: '0.48px',
          lineHeight: '36px'
        }],
        tab: ['20px', {
          fontWeight: 400,
          letterSpacing: '0.4px',
          lineHeight: 'normal'
        }]
      },
      screens: {
        sm: { max: '576px' },
        md: { max: '768px' },
        lg: { max: '992px' },
        xl: { max: '1200px' },
        xxl: { max: '1400px' }
      }
    }
  }
};
