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
        'custom-primary': '#36220E',
        'custom-secondary': '#140B06',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
