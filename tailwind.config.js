/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      maxWidth: {
        container: "1440px",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lg1: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        roboto: "Roboto",
        poppins: "Poppins",
      },
      colors: {
        amazon_blue: "#121921",
        amazon_light: "#232f3e",
        amazon_yellow: "#febd69",
        amazon_yellow_hover: "#f3a847",
        amazon_light: "#ccc",
        quantity_box: "#f0f2f2",
        footerBottom: "#131a22",
      },
      boxShadow: {
        testShadow: "0 0 32px 1px rgba(199,199,199,1)",
        amazonInput: "0 0 2px 2px rgba(228 121 17 / 50%)",
        amazonInputFocus: "0 0 2px 2px rgba(228 121 17)",
        amazonInputError: "0 0 2px 2px rgba(255 0 0 75%)",
      },
    },
  },
  plugins: [],
};
