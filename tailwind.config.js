/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'community-primary-light': 'rgba(255, 247, 223, 1)',
        'community-primary': 'rgba(255, 194, 57, 0.74)',
        'link-color': 'rgba(154, 139, 0, 1)'
      }
    },
  },
  plugins: [],
}

