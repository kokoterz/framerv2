import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Switzer"', "system-ui", "sans-serif"],
        sans: ['"Inter"', '"Switzer"', "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          DEFAULT: "#0a0a0a",
          soft: "#161616",
          card: "#0c0c0d",
        },
        muted: {
          DEFAULT: "#565656",
          light: "#7a7a7a",
          faint: "#9a9a9a",
        },
        surface: {
          DEFAULT: "#f4f4f5",
          alt: "#efeff0",
        },
        sky: {
          deep: "#0c3666",
          dark: "#114a8e",
          DEFAULT: "#1f86d8",
          bright: "#36a6f0",
          light: "#7cc4f4",
        },
        gold: "#f5c518",
        grass: "#22a559",
      },
      maxWidth: {
        container: "1200px",
        wide: "1280px",
      },
      borderRadius: {
        "4xl": "28px",
        "5xl": "36px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.04)",
        "card-lg": "0 2px 4px rgba(0,0,0,0.05), 0 18px 50px rgba(0,0,0,0.08)",
        glass: "inset 0 1px 0 rgba(255,255,255,0.5), 0 10px 40px rgba(8,40,80,0.18)",
        btn: "0 1px 2px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.12)",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter2: "-0.03em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        marquee: "marquee var(--marquee-duration,60s) linear infinite",
        "marquee-reverse": "marquee-reverse var(--marquee-duration,60s) linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
