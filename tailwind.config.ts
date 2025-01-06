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
        secondary: "#f5741c",
        darkBg: "#131424",
        terciaro:'rgb(194,4,28)',
      },
      backgroundImage:{
        "gradient-cover":"linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
      },
      textShadow: {  
        xl: '3px 3px 3px rgba(255, 0, 0, 0.7)', // personaliza el valor según lo que necesites  
        terciaro: '2px 2px 0 rgba(75, 85, 99, 1)', // otro ejemplo para el color terciario  
      },  

    },
  },
  plugins: [  
    require('tailwindcss-textshadow'),
  ],
} satisfies Config;
