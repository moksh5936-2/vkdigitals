export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FDFBF7",
        slate: {
          400: "#A19BBF",
          500: "#77719E",
          800: "#2E2A66",
          900: "#1E1B4B",
          950: "#0B081A",
        },
        brand: {
          purple: "#7C3AED",
          indigo: "#4F46E5",
          violet: "#6D28D9",
          green: "#10B981",
          dark: "#1E1B4B",
          gray: "#F8FAFC",
          cream: "#FDFBF7",
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      boxShadow: {
        'neon-purple': '0 0 25px -4px rgba(124, 58, 237, 0.4), 0 0 15px -2px rgba(124, 58, 237, 0.3)',
        'neon-green': '0 0 25px -4px rgba(16, 185, 129, 0.4), 0 0 15px -2px rgba(16, 185, 129, 0.3)',
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
} satisfies import('tailwindcss').Config;
