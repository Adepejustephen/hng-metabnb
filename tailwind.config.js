/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        txtDark: "#434343",
        txtPurple: "#A02279",
        footerbg: "#1D1D1E;",
      },
      backgroundImage: {
        mainPurple: "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)",
      },
      // fontFamily: {
      //   sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
      // },
    },
  },
  plugins: [],
};
