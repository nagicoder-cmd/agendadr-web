/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#03BB85',
          hover: '#02a676',
          light: '#4CE5B5',
          'light-hover': '#80e3c7',
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#03BB85',
          600: '#02a676',
          700: '#028a62',
          800: '#026e4e',
          900: '#01523b',
        },
        logo: {
          blue: '#2196F3',
          'blue-light': '#5AC0F9',
        },
        success: { DEFAULT: '#16a34a', light: '#4ade80' },
        warning: { DEFAULT: '#d97706', light: '#fbbf24' },
        danger: { DEFAULT: '#dc2626', light: '#f87171' },
      },
      fontFamily: {
        display: ['Cal Sans', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.08)',
        float: '0 8px 32px rgba(0,0,0,0.12)',
      },
      borderRadius: {
        card: '12px',
        btn: '8px',
      },
    },
  },
  plugins: [],
};
