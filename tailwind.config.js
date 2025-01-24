/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff6b00',  // Laranja vibrante
          50: '#fff3e0',
          100: '#ffe0b2',
          500: '#ff6b00',
          900: '#e65100',
        },
        secondary: {
          DEFAULT: '#1e40af',  // Azul profundo
          50: '#f0f5ff',
          100: '#dbeafe',
          500: '#1e40af',
          900: '#1e3a8a',
        },
        accent: '#3b82f6', // Azul claro personalizado
        'accent-hover': '#2563eb', // Azul mais escuro para hover
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
};
