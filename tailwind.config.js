/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
      screens: {
        1280: '1100px',
      },
    },
    extend: {
      screens: {
        '2xl': '1440px',
      },
      colors: {
        textGray: '#707070',
        brown1: '#907A7B',
        brown2: '#C0A4A5',
        brown3: '#F5F0E7',
        black_4: 'rgba(0,0,0,0.4)',
      },
      spacing: {
        7.5: '30px',
        15: '60px',
        26: '104px',
        30: '120px',
        45: '180px',
        66: '264px',
        90: '360px',
        135: '540px',
        160: '640px',
      },
      fontSize: {
        7: '28px',
      },
      boxShadow: {
        main: '0 3px 6px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}
