import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primaryBlack": "#1A1C22",
        "secondaryBlack": "#1F2127",
        "borderGray": "#FEF4F4",
        "gradientGray": "#373A43",
        "RedOne": "#BC0E19",
        "RedTwo": "#DB202C",
        "formsPurple": "#C8CFEC",
      },
    },
  },
  plugins: [],
};
export default config;
