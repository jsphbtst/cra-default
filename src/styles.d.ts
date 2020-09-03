import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		palette: {
			primary: {
				main: string
				light: string
				dark: string
				contrastText: string
			}
			secondary: {
				main: string
				light: string
				dark: string
				contrastText: string
			}
		}
		backgroundColor: string
		fontColor: string
	}
}
