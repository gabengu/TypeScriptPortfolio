/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    fontFamily: {
        sans :['IBM Plex Mono','monospace'],
        serif :['IBM Plex Sans', 'monospace']
    }
  },
  plugins: [],
}
