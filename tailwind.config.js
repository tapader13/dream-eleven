/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#131313',
      },
      backgroundImage: {
        'hero-background': "url('/bg-shadow.png')",
      },
    },
  },
  plugins: [],
};
