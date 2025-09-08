import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary : "#F0118B",
				primary_white: '#ffffff',
				primary_gray: '#333333',
				primary_red: '#e12728',
				red_white: '#e6e6e64d',
				stroke: '#E2E8F0',
				boxdark: '#24303F',
				strokeinput: '#BBBBBB',
				'boxdark-2': '#1A222C',
				strokedark: '#3f3f46',
				success: '#219653',
				danger: '#D34053',
				warning: '#FFA70B',
				form: '#fffbfb',
			},
			fontFamily: {
				abeezee: [
					'var(--font_ABeeZee)'
				],
				poppins: [
					'var(--font_Poppins)'
				],
				playfair: [
					'var(--font-playfair)'
				],
				engula: [
					'var(--font-engula)'
				],
				instrument: [
					'var(--font-instrument)'
				]
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
