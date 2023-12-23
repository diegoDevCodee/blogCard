/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellowTail: "hsl(47, 88%, 63%)",
        whiteTail: "hsl(0, 0%, 100%)",
        greyTail: "hsl(0, 0%, 50%)",
        blackTail: "hsl(0, 0%, 7%)",
      },
    },
  },
  plugins: [],
};
