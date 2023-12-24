import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#6941C6',
        secondary: '#4E5D78',
        dark: '#404040',
        error: '#FDA29B',
        light: '#B0B7C3',
        link: '#377DFF',
        soft: '#F4EBFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        '3xl':
          '0px 0px 0px 4px #FEE4E2, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      },
    },
  },
  plugins: [],
} satisfies Config;
