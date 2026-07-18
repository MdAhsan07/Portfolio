/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#04070D',
        navy: {
          DEFAULT: '#0A1128',
          light: '#101B3D',
          lighter: '#162452',
        },
        accent: {
          blue: '#3B6EFF',
          cyan: '#22D3EE',
          violet: '#7C6BFF',
        },
        ink: {
          primary: '#E9EDF7',
          muted: '#8B93AC',
          faint: '#5A6280',
        },
        glass: 'rgba(255,255,255,0.06)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59,110,255,0.25), transparent)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(59,110,255,0.25)',
        'glow-cyan': '0 0 40px rgba(34,211,238,0.2)',
        card: '0 8px 30px rgba(0,0,0,0.4)',
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        gradient: 'gradient 8s ease infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
