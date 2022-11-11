/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--text-color)",
          indicator: "var(--fill-color-indicator)",
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
