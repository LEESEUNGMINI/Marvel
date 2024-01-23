/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scared: {
          "0%, 100%": { fransform: "scale(1)" },
          "50%": { transform: "scale(1.04)" },
        },
      },
      animation: {
        scared: "scared 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
