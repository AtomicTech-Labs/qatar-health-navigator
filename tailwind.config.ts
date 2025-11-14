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
        // Primary Colors
        'cream-white': '#FAF9F4',
        'lake-blue': '#4F8FA6',
        'deep-forest': '#2F4A39',
        
        // Secondary Colors
        'soft-sand': '#E7E0D1',
        'natural-wood': '#B89163',
        'plant-green': '#5F9462',
        'mountain-mist': '#88B7CB',
        
        // System Colors
        'care-red': '#B84A4A',
        'warm-amber': '#D7A44A',
        'clinical-green': '#4C7E5D',
      },
      backdropBlur: {
        'glass': '18px',
        'glass-dark': '22px',
      },
      fontSize: {
        'heading-1': ['28px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'heading-2': ['22px', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        'heading-3': ['18px', { lineHeight: '1.4' }],
        'body': ['16px', { lineHeight: '1.6' }],
        'small': ['14px', { lineHeight: '1.5' }],
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
export default config;
