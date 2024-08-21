import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        greenD: {
          100: "#CAFCD9",
          200: "#96FABE",
          300: "#60F0A8",
          400: "#38E19E",
          500: "#00CE90",
          600: "#1A9850",
          700: "#009484",
          800: "#007776",
          900: "#005962",
        },
        darkD: {
          100: "#F3F3F3",
          200: "#E8E8E8",
          300: "#BBB",
          400: "#777",
          500: "#1D1D1D",
          600: "#181515",
          700: "#140E0F",
          800: "#10090B",
          900: "#0D0508",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      mixBlendMode: {
        difference: "difference",
        screen: "screen",
        multiply: "multiply",
        overlay: "overlay",
        // Agrega más blend modes si es necesario
      },
    },
  },
  plugins: [
    require("tailwindcss-filters"),
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".mix-blend-difference": {
          mixBlendMode: "difference",
        },
        ".mix-blend-screen": {
          mixBlendMode: "screen",
        },
        ".mix-blend-multiply": {
          mixBlendMode: "multiply",
        },
        ".mix-blend-overlay": {
          mixBlendMode: "overlay",
        },
        // Añadir más clases utilitarias para otros blend modes si es necesario
      });
    },
  ],
};

export default config;
