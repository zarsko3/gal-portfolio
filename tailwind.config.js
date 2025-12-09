export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        screens: {
          'laptop': '1024px',      // 1024px+ (covers 1024-1280px range)
          'laptop-lg': '1280px',   // 1280px+ (covers 1280-1440px range)
        },
      },
    },
    plugins: [],
  }