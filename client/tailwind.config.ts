import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: "#222222",
        "red-primary": "#D6001C",
        "red-secondary": "#C32929"
      },
      backgroundColor: {
        "primary": "#FAF9F8",
        secondary: "#EEEEEE",
        slide: "#F5E6E0"
      }
    },
  },
  plugins: [],
}
export default config
