/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./**/*.vue", "./**/*.nvue"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
