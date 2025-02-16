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
        monochrome: "#27272A",
        monochrome2: "#46464a",
        // background: "var(--background)",
        // foreground: "var(--foreground)",
      },
      container: {
        center: true,
        padding: "36px",
      },
    },
  },
  plugins: [],
} satisfies Config;
