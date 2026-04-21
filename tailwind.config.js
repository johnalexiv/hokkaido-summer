/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bone: 'var(--bone)',
        paper: 'var(--paper)',
        stone: 'var(--stone)',
        ash: 'var(--ash)',
        ink: 'var(--ink)',
        smoke: 'var(--smoke)',
        indigo: 'var(--indigo)',
        moss: 'var(--moss)',
        ember: 'var(--ember)'
      },
      fontFamily: {
        display: ['"Shippori Mincho B1"', 'serif'],
        sans: ['Figtree', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'xs':   ['0.8125rem', { lineHeight: '1.5' }],
        'sm':   ['0.9375rem', { lineHeight: '1.55' }],
        'base': ['1rem',       { lineHeight: '1.6' }],
        'lg':   ['1.125rem',   { lineHeight: '1.55' }],
        'xl':   ['1.375rem',   { lineHeight: '1.4' }],
        '2xl':  ['1.75rem',    { lineHeight: '1.25' }],
        '3xl':  ['2.25rem',    { lineHeight: '1.15' }],
        'hero': ['clamp(2.5rem, 7vw, 5rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }]
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem'
      }
    }
  },
  plugins: []
}
