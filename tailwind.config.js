/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      },
      colors: {
        accent: {
          400: "#ffa31a",
          500: "#ff9000",
          600: "#e68200",
        },
        primary: {
          DEFAULT: "#000000",
          dark: "#1a1a1a",
        }
      },
      boxShadow: {
        'glow': '0 0 15px rgba(255, 147, 0, 0.2)',
      }
    },
  },
  plugins: [],
}
