module.exports = {
  content: ["./src/**/*.svelte", "./public/**/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          950: "#090d17",
        },
        brand: {
          s4tk: {
            light: "#06bb8e",
            dark: "#70cfb6",
          },
          discord: "#747DF8",
          kofi: "#fbab18",
          patreon: "#ff434d",
          twitter: "#1da1f2",
        },
        accent: {
          primary: {
            light: "#4338ca",
            dark: "#6366f1",
          },
          secondary: {
            light: "#0093f4",
            dark: "#49c6e6",
          },
        },
      },
    },
  },
  plugins: [],
};
