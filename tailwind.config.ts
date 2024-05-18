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
        'navbg1': "url('/navbg1.jpg')",
        'navbg2': "url('/navbg2.jpg')",
        'navbg3': "url('/navbg3.jpg')",
        'navbg4': "url('/navbg4.jpg')",
        'navbg5': "url('/navbg5.jpg')",
        'navbg6': "url('/navbg6.jpg')",
        'navbg7': "url('/navbg7.jpg')",
        'navbg8': "url('/navbg8.jpg')",
        'navbg9': "url('/navbg9.jpg')",
      }
    },
  },
  plugins: [],
};
export default config;
