/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    fontFamily: {
      workSans: ['"Work Sans", sans-serif;'],
    },
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      xl: "1.125rem",
      "2xl": "1.25rem",
      "3xl": "1.5rem",
      "4xl": "3rem",
      "5xl": "4rem",
    },
    boxShadow: {
      small: "0px 4px 30px rgba(1, 19, 60, 0.08);",
      base: "0px 6px 30px rgba(7, 36, 95, 0.08)",
      large: "0px 6px 50px 0px rgba(0, 0, 0, 0.06);",
    },

    extend: {
      colors: {
        primary: "#FF5E14",
        title: "#0E121D",
        body: "#4D5765",
      },
    },
  },
  plugins: [],
};
