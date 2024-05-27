/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {},
      colors: {
        text: "var(--text-color)",
        text2: "var(--text-color2)",
        background: "var(--background-color)",
        accent: "var(--accent-color)",
        secondary: "var(--secondary-color)",
        highlight: "var(--highlight-color)",
        border: "var(--border-style)",
        shadow: "var(--shadow-color)",
      },
    },
  },
  plugins: [],
};
