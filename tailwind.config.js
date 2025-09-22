/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#ab0bf5", // tu color personalizado
        darkBg: "#131424",
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) 0%, rgba(122, 54, 189, 0.5) 50%, rgba(74, 47, 189, 0.5) 100%)",
      },
    },
    
  },
  plugins: [],
};