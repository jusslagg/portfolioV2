/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          50: "#f2e7ff",
          100: "#d8bffd",
          200: "#bf98fb",
          300: "#a471f9",
          400: "#8b4cf7",
          500: "#732be4",
          600: "#5a1ab5",
          700: "#421186",
          800: "#2a0a57",
          900: "#140329",
        },
        nebula: "#141226",
        starlight: "#8dfcff",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        display: ["var(--font-orbitron)", "Space Grotesk"],
      },
      backgroundImage: {
        "cosmic-radial":
          "radial-gradient(circle at 20% 20%, rgba(186,108,255,0.55), transparent 45%), radial-gradient(circle at 80% 0%, rgba(101,182,255,0.35), transparent 40%), radial-gradient(circle at 50% 80%, rgba(255,64,144,0.25), transparent 50%)",
        "hero-gradient":
          "linear-gradient(145deg, rgba(15, 8, 31, 0.95) 0%, rgba(27, 11, 50, 0.9) 40%, rgba(42, 12, 58, 0.85) 100%)",
      },
      boxShadow: {
        glow: "0 0 25px rgba(173, 121, 255, 0.45)",
        innerGlow: "inset 0 0 45px rgba(102, 76, 255, 0.35)",
      },
      blur: {
        30: "30px",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        orbit: "orbit 18s linear infinite",
        gradient: "gradientShift 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.5 },
          "50%": { opacity: 1 },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};
