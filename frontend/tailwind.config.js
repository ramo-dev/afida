import {  addDynamicIconSelectors } from "@iconify/tailwind"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        Success: 'rgba(34, 220, 142, 1)',
        Warning: 'rgba(220, 156, 34, 1)',
        Error: 'rgba(220, 34, 34, 1)',
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
};
