const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'custom-primary': '#944301',
        'custom-secondary': '#dfb168',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #8e1f03, #954a00)',
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
