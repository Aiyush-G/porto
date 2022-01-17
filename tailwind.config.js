// tailwind.config.js
const withAnimations = require('animated-tailwindcss');

module.exports  = withAnimations({
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	mode: 'jit',
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
})




// animations - https://ikcb.github.io/animated-tailwindcss/
