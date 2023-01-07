module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/line-clamp")],
  theme: {
    extend: {
      boxShadow: {
        "2x": "0px 5px 6px rgba(15, 15, 15, 0.35), 0px 24px 80px rgba(37, 37, 37, 0.7)",
      },
      lineHeight: {
        120: "120%",
        130: "130%",
        140: "140%",
      },
      colors: {
        white: {
          DEFAULT: "#FFFFFF",
        },
        green: {
          DEFAULT: "#00A795",
          100: "#049282",
        },
        gray: {
          DEFAULT: "#E0E0E099",
          100: "#E0E0E0",
          200: "#A5A5A6",
          300: "#FFFFFF80",
          400: "#979798",
          500: "#FFFFFF4D",
          600: "#FFFFFF33",
        },
        "vacancy-card-background": "#2B2B2E",
        "vacancy-btn": "rgba(255, 255, 255, 0.2)",
        "vacancy-btn-text-color": "rgba(255, 255, 255, 0.6)",
        "vacancy-card-divider": "rgba(255, 255, 255, 0.1)",
        "vacancy-card-icon-bg": "rgba(255, 255, 255, 0.14)",
        "vacancy-card-icon-text": "#A5A5A6",
        "vacancy-card-footer-bg": "#252527",
        "vacancy-card-footer-bg-active": "#00A795",
        "vacancy-card-footer-border": "#37373A",
        "vacancy-card-footer-border-active": "rgba(255, 255, 255, 0.4)",
        "blog-card-background": "#2B2B2E",
      },
      borderRadius: {
        6: "6px",
        8: "8px",
        12: "12px",
        24: "24px",
      },
      screens: {
        xss: "100px",
        xs: "375px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1536px",
      },
      gridTemplateColumns: {
        portfolio: "repeat(auto-fit,minmax(250px,1fr))",
      },
      fontFamily: {
        // sofia: ["Sofia Pro", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
};
