/** @type {import('tailwindcss').Config} */

const baseFontSize = 10;

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      primary: "Karla",
      secondary: "Bebas Neue",
    },
    extend: {
      colors: {
        primary: "#0F2786",
        secondary: "#F75252",
        "secondary-hover": "#D44646",
        tetriary: "#3820C9",
        "tetriary-hover": "#3940C9",
        grey: {
          200: "#E7E7E7",
          400: "#A6AFD2",
        },
      },
      spacing: () => ({
        ...Array.from({ length: 96 }, (_, index) => index * 0.5)
          .filter((i) => i)
          .reduce(
            (acc, i) => ({ ...acc, [i]: `${i / (baseFontSize / 4)}rem` }),
            {}
          ),
      }),
      fontSize: {
        xs: [
          `${(16 * 0.75) / baseFontSize}rem` /* 12px */,
          {
            lineHeight: `${(16 * 1) / baseFontSize}rem` /* 16px */,
          },
        ],
        sm: [
          `${(16 * 0.875) / baseFontSize}rem` /* 14px */,
          {
            lineHeight: `${(16 * 1.25) / baseFontSize}rem` /* 20px */,
          },
        ],
        base: [
          `${(16 * 1) / baseFontSize}rem` /* 16px */,
          {
            lineHeight: `${(16 * 1.5) / baseFontSize}rem` /* 24px */,
          },
        ],
        lg: [
          `${(16 * 1.125) / baseFontSize}rem` /* 18px */,
          {
            lineHeight: `${(16 * 1.75) / baseFontSize}rem` /* 28px */,
          },
        ],
        xl: [
          `${(16 * 1.25) / baseFontSize}rem` /* 20px */,
          {
            lineHeight: `${(16 * 1.75) / baseFontSize}rem` /* 28px */,
          },
        ],
        "2xl": [
          `${(16 * 1.5) / baseFontSize}rem` /* 24px */,
          {
            ineHeight: `${(16 * 2) / baseFontSize}rem` /* 32px */,
          },
        ],
        "3xl": [
          `${(16 * 1.875) / baseFontSize}rem` /* 30px */,
          {
            lineHeight: `${(16 * 2.25) / baseFontSize}rem` /* 36px */,
          },
        ],
        "4xl": [
          `${(16 * 2.5) / baseFontSize}rem` /* 36px */,
          {
            lineHeight: `${(16 * 2.75) / baseFontSize}rem` /* 40px */,
          },
        ],
        "5xl": [
          `${(16 * 3) / baseFontSize}rem` /* 48px */,
          {
            lineHeight: (16 * 1) / baseFontSize,
          },
        ],
        "6xl": [
          `${(16 * 3.75) / baseFontSize}rem` /* 60px */,
          {
            lineHeight: (16 * 1) / baseFontSize,
          },
        ],
        "7xl": [
          `${(16 * 4.5) / baseFontSize}rem` /* 72px */,
          {
            lineHeight: (16 * 1) / baseFontSize,
          },
        ],
        "8xl": [
          `${(16 * 6) / baseFontSize}rem` /* 96px */,
          {
            lineHeight: (16 * 1) / baseFontSize,
          },
        ],
        "9xl": [
          `${(16 * 8) / baseFontSize}rem` /* 128px */,
          {
            lineHeight: (16 * 1) / baseFontSize,
          },
        ],
      },
    },
  },
  plugins: [],
};
