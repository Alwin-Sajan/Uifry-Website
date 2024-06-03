/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'clash-bold': ['ClashDisplayBold', 'sans-serif'],
        'clash-extralight': ['ClashDisplayExtralight', 'sans-serif'],
        'clash-light': ['ClashDisplayLight', 'sans-serif'],
        'clash-medium': ['ClashDisplayMedium', 'sans-serif'],
        'clash-regular': ['ClashDisplayRegular', 'sans-serif'],
        'clash-semibold': ['ClashDisplaySemibold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
