/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: [
          'var(--font-barlow-semicondensed)',
          'Barlow Semi Condensed',
          'Barlow',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        primary: '#FFC700',
        secondary: '#1F2023',
      },  
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [],
}; 