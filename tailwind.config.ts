export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          DEFAULT: "#EDE9FE",
          input: "#F5F3FF",
        },
        mint: "#DCFCE7",
        peach: {
          cream: "#FFF8F0",
        },
        ink: {
          dark: "#1A0F2E",
        },
        forest: {
          green: "#064E3B",
        },
        purple: {
          DEFAULT: "#7C3AED",
          dark: "#2E1065",
          light: "#A78BFA",
        },
        green: {
          DEFAULT: "#A3E635",
          light: "#D9F99D",
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies import('tailwindcss').Config;

