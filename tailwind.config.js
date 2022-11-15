/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        txtDark: "#434343",
        txtPurple: "#A02279",
        footerbg: "#1D1D1E;",
        modalbg: "rgba(0, 0, 0, 0.2)",
      },
      backgroundImage: {
        mainPurple: "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)",
        plCardBg: "linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)",
      },
      keyframes: {
        scale: {
          "0%": { transform: "scale(1.02)", opacity: ".2" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        scale: "scale 0.5s ease-in-out ",
      },
      // fontFamily: {
      //   sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
      // },
    },
  },
  plugins: [],
};
