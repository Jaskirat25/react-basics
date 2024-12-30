/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,jsx}', // Includes files in the `components` folder and subfolders
    './src/**/*.{js,jsx}', // Includes all JavaScript and JSX files in the `src` folder and subfolders
    './src/*.css',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

