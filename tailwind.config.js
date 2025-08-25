/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        md: "768px",
        lg: "1280px",
      },
      container: {
        center: true,
        padding: {
          xs: "15px",
          md: "30px",
          lg: "30px",
        },
      },
      colors: {
        violet: "#5f29b7",
        "violet-hover": "#8441f1",
      },
      fontFamily: {
        nekst: ["Nekst", "sans-serif"],
        "nekst-light": ["Nekst-Light", "sans-serif"],
        "nekst-regular": ["Nekst-Regular", "sans-serif"],
        "nekst-medium": ["Nekst-Medium", "sans-serif"],
        "nekst-semibold": ["Nekst-SemiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
