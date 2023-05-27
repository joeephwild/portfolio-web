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
      backgroundImage: (theme) => ({
        "header-img": "url('/blob.svg')",
      }),
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      colors: {
        bodygreen: "#D5FF40",
        black: "#131618",
        tertiary: "#151030",
      },
      fontFamily: {
        "Nunito-Black": ["Nunito-Black"],
        "Panchang-Extrabold": ["Panchang-Extrabold"],
      },
    },
  },
  plugins: [],
};
