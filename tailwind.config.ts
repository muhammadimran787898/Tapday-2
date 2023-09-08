/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
    // './src/components/**/*.{js,ts,jsx,tsx}'
    // './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      width: {
        68: '17rem',
        76: '19rem'
      },
      animation: {
        marquee: 'marquee 25s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      colors: {
        primary: '#0088f5',
        'primary-light': '#e5f3fe',
        secondary: '#aeaeb2',
        yellow: '#ffb901',
        'widget-border': 'rgb(150 150 150 / 0.2)',
        'widget-border-2': 'rgb(150 150 150 / 0.5)',
        orange: '#f13800',
        drakred: '#FF0000',
        'green-col': '#138736',
        dark: '#767676',
        grey: '#848484',
        'secondary-dark': '#aeaeb280',
        'secondary-light': '#fcfcfc',
        'secondary-black': 'rgba(0, 0, 0, 0.30)',
        main: '#26292D',
        inner: '#282B2F',
        setting: '#469E9B',
        borderColor: 'rgba(255, 255, 255, 0.08)',
        transparentBg: 'rgba(255, 255, 255, 0.03)',
        // 'light-black': '#1a1a1a',
        'light-black': '#969696',
        skeletonClr: '#a2a2a259',
        innerBg: '#cce7fd',
        engage: '#4E28CD'
      },
      fontFamily: {
        medium: 'sofia-medium',
        sofiaSemi: 'sofia-semi',
        regular: 'sofia-regular',
        sofiaBold: 'sofia-bold',
        sofiaLight: 'sofia-light',
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Menlo', 'monospace'],
        sofiapro: ['Sofia Pro']
      },
      container: {
        center: true,
        padding: '1rem'
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        dxl: '1300px',
        '8xl': '1440px',

        xxl: '2000px'
      },
      maxWidth: {
        xxl: '2000px'
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        base: '4px',
        main: '0.7rem',
        md: '3px',
        lg: '0.5rem',
        full: '9999px'
      },
      boxShadow: {
        main: '0px 0px 73px 27px #9d949490',
        secondary: '2px 2px 20px 0px #a2a2a2',
        menuItem: 'inset 0 0 0 1px #0088F5',
        'setting-gray': '0px 1px 6px #d0d0d0',
        product: '0 2px 2px rgba(147,158,171,.3)',
        'product-hover': '0 4px 8px rgba(147,158,171,.5)'
      },
      scale: {
        10: '0.1',
        20: '0.2',
        35: '0.35',
        40: '0.4'
      }
    }
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  corePlugins: {
    transition: true,
    transform: true
  },
  plugins: []
}
