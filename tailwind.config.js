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
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
}
