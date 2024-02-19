const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  variants: {
    fill: ["hover", "focus"],
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [
    // ...
    require("flowbite/plugin"),
  ],
});
