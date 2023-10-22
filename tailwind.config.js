/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
"./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', ],
     
        backgroundImage: {
          'pack-train': "url('src/assets/header.jpg')",
        
     
    },
    extend: {},
    screens: {
      'sm': '640px',
      'md': "768px",
      'lg': '1024px',
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',

    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
}
