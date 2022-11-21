/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--text-color)",
          indicator: "var(--fill-color-indicator)",
          requestInfo: "var(--fill-request-info-nav)",
        },
      },

      minHeight: {
        "1/2": "50%",
      },

      backgroundColor: {
        skin: {
          fill: "var(--fill-color)",
          indicator: "var(--fill-color-indicator)",
          popup: "var(--var-glass-indicator)",
          headerColor: "var(--fill-color-header)",
          rightSideColor: "var(--fill-right-side-color)",
          theadColor: "var(--fill-thead-color)",
          tbodyColor: "var(--fill-tbody-color)",
          adaptivePlaceholder: "var(--fill-adaptive-placeholder)",
        },
      },

      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
      },
      fontWeight: {
        12: "12px",
      },
    },
  },
  plugins: [],
};

// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {

//       colors: {
//         "dark-purple": "#081A51",
//         "light-white": "rgba(255,255,255,0.17)",
//       },
//     },
//   },
//   plugins: [],
// };
