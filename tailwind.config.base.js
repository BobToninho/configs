const defaultTheme = require('tailwindcss/defaultTheme')

// v 1.9.6
module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true
	},
	theme: {
		typography: theme => ({
			default: {
				css: {
					color: theme('colors.foreground')
				}
			}
		}),
		container: {
			center: true
		},
		extend: {
			colors: {
				grayscale: {
					100: 'hsl(0, 0%, 10%)',
					200: 'hsl(0, 0%, 20%)',
					300: 'hsl(0, 0%, 30%)',
					400: 'hsl(0, 0%, 40%)',
					500: 'hsl(0, 0%, 50%)',
					600: 'hsl(0, 0%, 60%)',
					700: 'hsl(0, 0%, 70%)',
					800: 'hsl(0, 0%, 80%)',
					900: 'hsl(0, 0%, 90%)'
				}
			},
			fontFamily: {
				sans: ['Heebo', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	variants: {
		textColor: ({ after }) => after(['group-hover'])
	},
	corePlugins: {
		// preflight: false
	},
	plugins: [outlinesPlugin(), require('@tailwindcss/typography')]
}

function outlinesPlugin() {
	return ({ addUtilities, theme }) => {
		// https://github.com/tailwindlabs/discuss/issues/196
		let newUtilities = {}
		const boxShadowPrefix = '0 0 0 3px'
		const colors = theme('colors')

		Object.keys(colors).forEach(color => {
			const colorData = colors[color]

			if (typeof colorData === 'string') {
				newUtilities[`.outline-${color}`] = {
					boxShadow: `${boxShadowPrefix} ${colorData}`
				}
			} else {
				Object.keys(colorData).forEach(colorVariation => {
					newUtilities[`.outline-${color}-${colorVariation}`] = {
						boxShadow: `${boxShadowPrefix} ${colorData[colorVariation]}`
					}
				})
			}
		})

		addUtilities(newUtilities, {
			variants: ['focus']
		})
	}
}
