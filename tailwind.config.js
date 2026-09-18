/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ritora: {
          // Primary: Dark Teal / Green
          teal: {
            DEFAULT: "#0C3332",
            dark: "#082221",
            deep: "#061A19",
            card: "#0F3E3D",
            light: "#154F4E",
            surface: "#114442",
            border: "rgba(217, 186, 106, 0.2)",
          },
          // Accent: Gold
          gold: {
            DEFAULT: "#D9BA6A",
            light: "#E5CE8F",
            dark: "#B89645",
            subtle: "rgba(217, 186, 106, 0.12)",
          },
          sand: "#F5F1E9",
          cream: "#FAF8F5",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(217, 186, 106, 0.35)',
        'luxury': '0 20px 40px -15px rgba(6, 26, 25, 0.7)',
      },
    },
  },
  plugins: [],
}
