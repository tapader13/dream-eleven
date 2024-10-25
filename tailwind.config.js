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
        'inp-background':
          'linear-gradient(to right top, #fff5da, #e9c77e, #f5b375, #ffa47d, #ff8b85, #f374a1, #cc6cc2)',
      },
      boxShadow: {
        'custom-shadow': 'inset 4px 4px 20px 20px rgba(19, 19, 19, 0.3)',
      },
    },
  },
  plugins: [],
};
