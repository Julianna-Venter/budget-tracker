/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "light-green": "#baccc6",
        "med-green": "#5c8d7b",
        "dark-green": "#465f57",
        "accent-orange": "#e35933",
        "grey-accent": "#151515",
        "grey-background": "#0d0c0d",
        "grey-text-light": "#696b69",
        "grey-text": "#3d3e3e",
        "emergency-red": "#c72d16",
        "med-blue": "#163b55",
        "grey-blue": "#1d363c",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
