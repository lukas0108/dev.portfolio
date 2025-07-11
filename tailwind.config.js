/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: 'oklch(44.03% 0.1603 303.37)',
          secondary: 'oklch(44.03% 0.1603 18.69)',
          background: 'oklch(20% 0 0)',
          text: 'oklch(87.17% 0.0093 258.34)', 
          muted: 'oklch(43.24% 0.074 303.37)',
          rebecca: 'oklch(44.03% 0.1603 303.37)'
        },
      },
    },
    plugins: [],
  }