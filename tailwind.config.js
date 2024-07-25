module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  darkMode: false, // or 'media' or 'className'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Sofia Sans"', "sans-serif"],
      },
      opacity: {
        10: "0.1",
        30: "0.3",
        // Add more opacity levels as needed
      },
      backgroundOpacity: {
        10: "0.1",
        20: "0.2",
        95: "0.95",
      },

      colors: {
        "white-opacity-10": "rgba(255, 255, 255, 0.1)",
        "black-opacity-10": "rgba(0, 0, 0, 0.1)",
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        yellow: "#fcd34d",
        "warm-white": "#EEE5D0",
        "dark-purple": "#9578FF",
        tahiti: {
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
        yellow_2: {
          300: "#fcd34d",
        },
        gray: {
          100: "#FBFBFB",
          200: "#f4f4f6",
          300: "#b8bcbf",
          400: "#999999",
          500: "#7F7F7F",
          600: "#666666",
          700: "#4C4C4C",
          800: "#333333",
          900: "#191919",
        },
        gradiesnts: {
          100: "linear-gradient( 90deg, #571f98 0%, #542374 100% )",
          200: "linear-gradient( 180deg, #b691ff 0%, #a532ea 100% )",
          300: "linear-gradient( 90deg, rgba(26, 109, 255, 1) 0%, rgba(200, 34, 255, 1) 100% )",
          400: "linear-gradient(180deg,rgb(78,35,199)_0%,rgba(255,255,255,0)_100%)",
        },
      },

      backgroundImage: {
        my_bg_image: "url(../public/Assets/Background/bg_all.webp)",
        sec_1: "url(../public/Assets/Background/bg_1.webp)",
        sec_2: "url(../public/Assets/Background/bg_2.webp)",
        sec_3: "url(../public/Assets/Background/bg_3.webp)",
        bg_all_sec: "url(../public/Assets/Background/bg_all.webp)",
        sec_1_coin: "url(../public/Assets/Background/coin_sec_1.png)",
        sec_3_coin: "url(../public/Assets/Background/coin_sec_3.png)",
        sec_3_coin_v2: "url(../public/Assets/Background/coin_sec_3v3.png)",

        //Hero
        hero_user: "url(../public/Assets/Hero/Hero-user.svg)",
        hero_lang: "url(../public/Assets/Hero/Hero-lang.svg)",
        hero_awards: "url(../public/Assets/Hero/Hero-awards.svg)",
        hero_years: "url(../public/Assets/Hero/Hero-year.svg)",

        //Step frame
        step_1: "url(../public/Assets/Step/step-1.svg)",
        step_2: "url(../public/Assets/Step/step-2.svg)",
        step_3: "url(../public/Assets/Step/step-3.svg)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
