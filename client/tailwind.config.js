/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      
      'xsm': '450px',
      // => @media (min-width: 640px) { ... }

      'sm': '450px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {

      backgroundImage: {
        'img': "url('https://www.cgc.ac.in/course/all-courses/images/CGC-image.webp')",
      },
    },
  },
  plugins: [],
}