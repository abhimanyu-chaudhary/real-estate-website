/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Adding the Nunito Sans font to Tailwind's font family list
        'nunito-sans': ['"Nunito Sans"', 'sans-serif'],
      },
      fontWeight: {
        // Extend the available font weights if needed
        200: '200',
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
        900: '900',
      },
      boxShadow: {
        'custom-shadow': '0px 0px 9px 1px rgba(0, 0, 0, 0.75)',
        'custom-shadow-1': '25.71px 46.27px 61.7px rgba(157, 149, 140, 0.2)',  // First shadow
        'custom-shadow-2': '15.42px 15.42px 25.71px rgba(154, 151, 142, 0.15)' // Second shadow
      }
    }
  },
  plugins: [],
}