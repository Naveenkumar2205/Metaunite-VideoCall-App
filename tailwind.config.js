/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gainsboro: {
          "100": "#dedede",
          "200": "#ddd",
          "300": "#dcdcdc",
        },
        darkslategray: "#364754",
        dimgray: "#616161",
        gray: {
          "100": "#fcfcfd",
          "200": "#1e1e1e",
          "300": "#131313",
        },
        whitesmoke: "#e9e9e9",
        lightgray: "#cbd5e1",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        poppins: "Poppins",
      },
      borderRadius: {
        "11xl": "30px",
        "15xl": "34px",
        "base-7": "16.7px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      lg: "18px",
      "lg-7": "18.7px",
      "31xl-2": "50.2px",
      "56xl-3": "75.3px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
