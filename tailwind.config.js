/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
          "header-img": "url('/blob.svg')",
      }),
      colors: {
        "bodygreen": "#D5FF40",
        "black": "#131618"
      },
      fontFamily: {
        "Nunito-Black": ["Nunito-Black"],
      }
    },
  },
  plugins: [],
}