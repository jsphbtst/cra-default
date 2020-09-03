import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
	palette: {
		primary: {
			main: '#ff781f',
			light: '#ffa951',
			dark: '#c54800',
			contrastText: '#f9f9f9' // white
		},
		secondary: {
			main: '#488ab5',
			light: '#7cbae7',
			dark: '#005d85',
			contrastText: '#f9f9f9'
		}
	},
	backgroundColor: '#f9f9f9',
	fontColor: '#282828'
}

export const darkTheme = {
	palette: {
		primary: {
			main: '#ff781f',
			light: '#ffa951',
			dark: '#c54800',
			contrastText: '#f9f9f9'
		},
		secondary: {
			main: '#488ab5',
			light: '#7cbae7',
			dark: '#005d85',
			contrastText: '#f9f9f9'
		}
	},
	backgroundColor: '#282828', // black
	fontColor: '#f9f9f9'
}

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;	
	}

	body {
		background-color: ${props => props.theme.backgroundColor};
	}

	input, button, submit { 
		border: none;
	}
`
