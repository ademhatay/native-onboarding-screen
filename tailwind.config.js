/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: '#F0CF69',
				secondary: '#B7ABFD',
				lightRed: '#EFB491',
				lightBlue: "#95B6FF"
			},
		},
	},
	plugins: [],
}
