/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "custom-1": "0 4px 4px rgba(0, 0, 0, 0.75)", // 더 진한 그림자
        "custom-2": "0 8px 8px rgba(0, 0, 0, 0.5)", // 더 진한 그림자
      },
    },
  },
  plugins: [],
};
