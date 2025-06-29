/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#fdf2f2',
          100: '#fce7e7',
          500: '#800020',
          600: '#700018',
          700: '#600014',
          800: '#500010',
          900: '#40000c',
        },
        gold: {
          50: '#fefaf5',
          100: '#fef5e7',
          500: '#CD7F32',
          600: '#b8722c',
          700: '#a36527',
          800: '#8e5821',
          900: '#794b1c',
        },
        charcoal: {
          50: '#f8f9fa',
          100: '#e9ecef',
          500: '#36454F',
          600: '#2e3a44',
          700: '#262f39',
          800: '#1e252e',
          900: '#161a23',
        },
        ivory: {
          50: '#FFFFF0',
          100: '#fffffb',
          200: '#fffff6',
          300: '#fffff1',
          400: '#ffffec',
          500: '#FFFFF0',
        },
        emerald: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#50C878',
          600: '#48b36a',
          700: '#409e5c',
          800: '#38894e',
          900: '#307440',
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSubtle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
};