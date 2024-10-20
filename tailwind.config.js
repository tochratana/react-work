/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // Add Flowbite content path here
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite, // Add Flowbite as a plugin
  ],
};
