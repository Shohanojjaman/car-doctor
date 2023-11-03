/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '0',
      },
    },
    extend: {
      colors: {
        theme: '#FF3811',
        heading: '#151515',
        'small-heading': '#444444',
        body: '#737373',
        'light-bg': '#F3F3F3',
      },
    },
  },
  plugins: [require('daisyui')],
};
