import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cyanGlass: 'rgba(0, 255, 255, 0.08)',
      },
      boxShadow: {
        glow: '0 0 80px rgba(34, 211, 238, 0.25)',
      },
      backdropBlur: {
        xl: '24px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', filter: 'blur(60px)' },
          '50%': { opacity: '0.85', filter: 'blur(90px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
