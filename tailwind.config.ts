import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {        
        foreground: "var(--foreground)",
        'primary': '#C5B258',
        'secondary': '#292940',
        'background': '#f1f4f9',
      },
      fontFamily:{
        poppins: "Poppins, sans-serif",     
        asap: "Asap, sans-serif",
      },
    },
  },
  plugins: [],
} satisfies Config;
