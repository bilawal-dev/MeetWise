import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Explicitly import only the renamed colors to avoid deprecated warnings
        sky: colors.sky,
        stone: colors.stone,
        neutral: colors.neutral,
        gray: colors.gray,
        slate: colors.slate,
        // Add other custom colors or overrides here if needed
        // primary: "#1A202C",
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};

export default config;