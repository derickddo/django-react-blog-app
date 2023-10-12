/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    "scrollContainer": {
      "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth ",
      "snap": "snap-x"
    }
  },
  
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin'),
],
}

