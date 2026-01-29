import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#f5741c",
          600: "#d66318",
        },
        secondary: {
          500: "#131424",
          900: "#09070f",
        },
        terciaro: "rgb(194,4,28)",
        darkBg: "#131424",
      },
      backgroundImage: {
        "gradient-cover": "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
      textShadow: {
        xl: '3px 3px 3px rgba(194, 4, 28, 0.7)',
        terciaro: '2px 2px 0 rgba(75, 85, 99, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
