/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        'terminal-dark': '#0a0a0f',
        'terminal-purple': '#8b5cf6',
        'terminal-cyan': '#06b6d4',
      },
      spacing: {
        'retro': '0.125rem',
      },

    },
  },
  plugins: [],
} 