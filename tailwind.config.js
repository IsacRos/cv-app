/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{gjs,gts,hbs,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#292929',
        secondary: '#3B2F22',
        tertiary: '#F2E6B6',
        neutral: '#8F9E8B',
        accent: '#5B7876',
      },
      fontFamily: {
        sans: ['Roboto', 'sans'],
        mono: ['Fira code', 'monospace'],
        serif: ['Merryweather', 'serif'],
      },
    },
  },
  plugins: [],
};
