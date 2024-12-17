import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {},
      colors: {
        codeit_purple: "#6500c3",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
} satisfies Config;
