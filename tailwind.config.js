/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Be Vietnam Pro", "system-ui", "sans-serif"],
        serif: ["Gabarito Variable", "ui-serif", "serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#2563eb",
          50: "#eff6ff",
          500: "#2563eb",
          600: "#2563eb",
        },
        neutral: {
          DEFAULT: "#94a3b8",
          50: "#f8fafc",
          500: "#64748b",
          600: "#475569",
        },
        card: "#1c232d",
      },
      animation: {
        "slide-in": "slide-in 600ms ease both",
        "fade-in": "fade-in 400ms ease both",
      },
      keyframes: {
        "slide-in": {
          "10%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          from: {
            opacity: "0",
            transform: "translateY(10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
