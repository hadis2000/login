/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        btn: {
          from: { transform: "scale(1)" },
          to: { transform: "scale(0.9)" },
        },
        background: {
          "0%": {
            transform: "rotate(-45deg) translateX(-15rem) translateY(-29rem)",
          },
          "50%": {
            transform: "rotate(0deg) translateX(0rem) translateY(0rem)",
          },
          "100%": {
            transform: "rotate(45deg) translateX(15rem) translateY(-29rem)",
          },
        },
        translateItem: {
          "0%": {
            transform: "translateX(250px)", // از سمت چپ 200px بیرون شروع می‌شود
          },
          "100%": {
            transform: "translateX(0px)", // به موقعیت اصلی خود باز می‌گردد
          },
        },
      },
      animation: {
        btn: "btn 0.1s ease-in-out ",
        background: "background 2s ease forwards",
        translateItem: "translateItem 2s ease forwards",
      },
    },
  },
  plugins: [],
};
