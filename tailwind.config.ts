import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
        '24': 'repeat(24, minmax(0, 1fr))',
        '30': 'repeat(30, minmax(0, 1fr))',
        'auto-fit': 'repeat(auto-fit, minmax(100px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(150px, 1fr))',
        'asymmetrical': '200px 1fr 2fr',
        'sidebar-main': '300px 1fr',
      },
      gridTemplateRows: {
        'layout': 'auto 1fr auto',
        'header-main-footer': '100px 1fr 50px',
      },
    },
  },
  plugins: [],
};

export default config;
