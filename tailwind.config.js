/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html,css}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addVariant, e }) {
      addVariant('cluster-hover', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.cluster:hover .${e(`cluster-hover${separator}${className}`)}`;
        });
      });

      addVariant('group-hover', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.group:hover .${e(`group-hover${separator}${className}`)}`;
        });
      });
    },
  ],
}
