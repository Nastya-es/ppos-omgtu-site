import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ppos: {
          blue: "#3a95ff",    // Голубой
          birch: "#5fefb4",   // Берёзовый
          violet: "#bc76ff",  // Фиолетовый
          dark: "#1A1A1A",    // Текст
          light: "#F5F7FA",   // Фон
        },
      },
      fontFamily: {
        sans: ['"Zona Pro"', 'Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;