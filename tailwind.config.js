/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#2563EB',
          secondary: '#10B981',
          accent: '#F97316',
        },
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-brand-primary',
    'bg-brand-secondary',
    'bg-brand-accent',
    'text-brand-primary',
    'text-brand-secondary',
    'text-brand-accent',
    'border-brand-primary',
    'border-brand-secondary',
    'border-brand-accent',
    'hover:bg-blue-700',
  ],
};
