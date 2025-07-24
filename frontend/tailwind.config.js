import scrollbarHide from 'tailwind-scrollbar-hide';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',  //Background
        offwhite: '#F1ECE8',    //Secondary background
        darkblue: '#1A2634',    //Third background
        maroon: '#4D0000',      //Dark red
        cream: '#FFE6CC',       //Text
        rust: '#991B1B',        //Hover and accents
      }
    }
  },
  plugins: [scrollbarHide],
}