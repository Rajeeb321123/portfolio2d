/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      cursor: {
        'pointer': 'url("/pointer.png"), pointer',
      },
      keyframes: {
        wave1: {
          '0%, 100%': { transform: 'translateX(0rem)' },
          '16.67%': { transform: 'translateX(0.4rem)' },
        },
        waveA: {
          '0%, 100%': { transform: 'translateY(0rem)' },
          '16.67%': { transform: 'translateY(-0.4rem)' },
        },
        wave2: {
          '0%, 100%': { transform: 'translateX(0rem)' },
          '33.34%': { transform: 'translateX(0.4rem)' },
        },
        waveB: {
          '0%, 100%': { transform: 'translateY(0rem)' },
          '33.34%': { transform: 'translateY(-0.4rem)' },
        },
        wave3: {
          '0%, 100%': { transform: 'translateX(0rem)' },
          '50.01%': { transform: 'translateX(0.4rem)' },
        },
        waveC: {
          '0%, 100%': { transform: 'translateY(0rem)' },
          '50.01%': { transform: 'translateY(-0.4rem)' },
        },
        wave4: {
          '0%, 100%': { transform: 'translateX(0rem)' },
          '66.68%': { transform: 'translateX(0.4rem)' },
        },
        waveD: {
          '0%, 100%': { transform: 'translateY(0rem)' },
          '66.68%': { transform: 'translateY(-0.4rem)' },
        },
        wave5: {
          '0%': { transform: 'translateX(0rem)' },
          '83.35%': { transform: 'translateX(0.4rem)' },
        },
      },
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
      },
      backgroundImage: {
        explosion: '',
        circles: '',
        circleStar: 'url("/circle-star.svg")',
        site: '',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, 'sans-serif'],
        sora: [`var(--font-sora)`, 'sans-serif'],
        nabla: [`var(--font-nabla)`, 'sans-serif'],
      },
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
