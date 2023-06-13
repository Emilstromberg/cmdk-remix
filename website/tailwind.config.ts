import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme.js'

export default {
	// mode: 'jit',
	content: ['./app/**/*.{ts,tsx,jsx,js}'],
	darkMode: 'class', // class, 'media' or boolean
	enabled: true,
	important: true,
	theme: {
		screens: {
			xs: '400px',
			sm: '600px',
			md: '850px',
			lg: '1100px',
			xl: '1400px',
			'2xl': '1800px',
			'3xl': '2400px',

			twoCols: '1200px',
			threeCols: '1800px',

			fullInputWidth: '1250px',
		},
		extend: {
			// that is animation class
			animation: {
				'fade-pos': 'fadePos .9s ease-in-out',
				'fade-neg': 'fadeNeg .9s ease-in-out',
				'dark-fade-same': 'dark-fadeSame .9s ease-in-out',
				'light-fade-same': 'light-fadeSame .9s ease-in-out',
				wiggle: 'wiggle 600ms ease-out',
			},
			// that is actual animation
			keyframes: util => ({
				fadePos: {
					'0%': { backgroundColor: util.theme('colors.success.hover') },
					'100%': { backgroundColor: util.theme('colors.transparent') },
				},
				fadeNeg: {
					'0%': { backgroundColor: util.theme('colors.error.bc') },
					'100%': { backgroundColor: util.theme('colors.transparent') },
				},
				'dark-fadeSame': {
					'0%': { backgroundColor: util.theme('colors.black-bc.4') },
					'100%': { backgroundColor: util.theme('colors.transparent') },
				},
				'light-fadeSame': {
					'0%': { backgroundColor: util.theme('colors.light-bc.4') },
					'100%': { backgroundColor: util.theme('colors.transparent') },
				},
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				},
			}),
			fontFamily: {
				sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				'black-bc': {
					1: '#000000', // Main Background
					2: '#0D0D0D', // Alternative Background
					3: '#272626', // Highligthed Background
					4: '#343232', // Active (button) Background
					5: '#3B3B3B', //
				},
				'black-c': {
					1: '#CCCCCC', // Main Text
					2: '#D8D4D4', // Secondary Text
				},
				'light-bc': {
					1: '#FFFFFF', // Main Background
					2: '#EDEDED', // Alternative Background
					3: '#d7d7d7',
					// 3: '#EBEBEB', // Highligthed Background // Previously used.
					4: '#B8B8B8', // Active (button) Background
				},
				'light-c': {
					1: '#333333', // Main Text
					2: '#2E2E2E', // Secondary Text
				},
				info: {
					bc: '#3ABFF8',
					hover: '#2C9AC9',
					c: '#002B3D',
				},
				success: {
					bc: '#36D399',
					hover: '#2bc48c',
					c: '#003320',
				},
				warning: {
					bc: '#FBBD23',
					hover: '#CA981A',
					c: '#382800',
				},
				error: {
					bc: '#F87272',
					hover: '#CC5656',
					c: '#470000',
				},
				gray: {
					900: '#202225',
					800: '#2f3136',
					700: '#36393f',
					600: '#4f545c',
					500: '#6B7280',
					450: '#c3c4c5',
					400: '#d4d7dc',
					300: '#e3e5e8',
					200: '#ebedef',
					100: '#f2f3f5',
				},
				'gray-dark-contrast': '#676d77',
				'gray-light-contrast': '#C4C7CD',
				green: {
					900: '#14532D',
					800: '#166534',
					700: '#15803D',
					600: '#16A34A',
					500: '#22C55E',
					400: '#4ADE80',
					300: '#86EFAC',
					200: '#BBF7D0',
					100: '#DCFCE7',
				},
			},
			minHeight: util => ({
				...util.theme('spacing'),
			}),
			spacing: {
				'1/8': '12.5%',
				'3/8': '37.5%',
				'5/8': '62.5%',
				'7/8': '87.5%',

				'1/10': '10%',

				'1/11': '9.0909%',
				'1/15': '6.6667%',

				'7/10': '70%',
				'9/10': '90%',

				'1/20': '5%',
				'19/20': '95%',
			},
			gridTemplateColumns: {
				16: 'repeat(16, minmax(0, 1fr))',
				20: 'repeat(20, minmax(0, 1fr))',
				24: 'repeat(24, minmax(0, 1fr))',
			},
			boxShadow: {
				'inner-xl': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
				'list-start': 'inset 10px 0 8px -8px rgb(0 0 0 / 8%)',
				'list-end': 'inset -10px 0 8px -8px rgb(0 0 0 / 8%)',
				'list-start-dark': 'inset 10px 0 8px -8px rgb(255 255 255 / 8%)',
				'list-end-dark': 'inset -10px 0 8px -8px rgb(255 255 255 / 8%)',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('tailwind-scrollbar'),
		require('tailwind-scrollbar-hide'),
	],
	variants: {
		scrollbar: ['dark'],
	},
} satisfies Config
