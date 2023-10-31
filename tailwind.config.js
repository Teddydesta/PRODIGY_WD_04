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
    extend: {
      'sm': '480px',
      'md': '480px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    
    screens: {
     
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
}
