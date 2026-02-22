import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#090b12',
        foreground: '#f4f6ff',
        muted: '#9ca3bd',
        card: '#11152a',
        border: '#232944',
        accent: {
          DEFAULT: '#6d6bff',
          soft: '#4f46e5',
          glow: '#a7a4ff',
        },
        success: '#34d399',
        warning: '#fbbf24',
      },
      boxShadow: {
        soft: '0 10px 40px rgba(75, 90, 255, 0.18)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at top, rgba(109,107,255,0.35), transparent 60%), radial-gradient(circle at 85% 20%, rgba(79,70,229,0.2), transparent 40%)',
      },
    },
  },
  plugins: [],
};

export default config;
