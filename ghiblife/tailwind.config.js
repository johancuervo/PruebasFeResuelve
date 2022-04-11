module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(auto-fit, minmax(300px, 1fr))",

        // Complex site-specific column configuration
        footer: "300px minmax(900px, 1fr) 100px",
      },

      maxHeight: {
        "60vh": "60vh",
      },

      gap: {
        11: "0 16px",
      },

      animation: {
        wiggle: "wiggle 500ms",
      },
      keyframes: {
        wiggle: {
          from: { transform: "scale(0)" },
          to: { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
