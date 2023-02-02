/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      container: {
        // padding: {
        //   DEFAULT: '1rem',
        //   sm: '2rem',
        //   lg: '4rem',
        //   xl: '5rem',
        //   '2xl': '6rem'
        // }
      },
      screens: {
        xs: '375px',
        // => @media (min-width: 375px) { ... }
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px'
        // => @media (min-width: 1536) { ... }
      },
      inset: {
        15: '60px'
      },
      width: {
        13: '52px',
        15: '60px',
        17: '68px',
        26: '104px',
        35: '140px',
        75: '300px',
        100: '400px'
      },
      height: {
        13: '52px',
        15: '60px',
        17: '68px',
        21.5: '86px',
        22: '88px',
        26: '104px',
        30: '120px',
        34: '136px',
        42: '168px',
        75: '300px',
        92: '368px',
        100: '400px'
      },
      padding: {
        13: '52px',
        15: '60px',
        17: '68px',
        19: '76px',
        25: '100px',
        27: '108px',
        27.5: '110px',
        40: '160px'
      },
      margin: {
        13: '52px',
        15: '60px',
        17: '68px',
        22: '88px',
        27: '108px',
        30: '120px',
        46: '192px',
        50: '200px',
        100: '400px'
      },
      fontSize: {
        '7.5xl': '28px'
      }
    }
  },
  plugins: []
}
