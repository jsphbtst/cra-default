import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from 'themes'

const Header = styled.h1`
	color: ${props => props.theme.fontColor};
`

// note: padding should also be standardized in themes
const Button = styled.button`
	border-style: solid;
	background-color: ${props => props.theme.backgroundColor};
	border-color: ${props => props.theme.palette.primary.main};
	border-radius: 5px;
	color: ${props => props.theme.palette.primary.main};
	padding: 10px;

	:hover {
		cursor: pointer;
	}

	:focus {
		outline: none;
	}
`

const defaultTheme: string = 'light'
const App = () => {
	const [theme, setTheme] = useState<string>(defaultTheme)

	const themeToggler = (): void => {
		theme === 'light' ? setTheme('dark') : setTheme('light')
	}

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyles />
			<div className='App'>
				<Header>Hello world</Header>
				<Button onClick={themeToggler}>Theme Toggle</Button>
			</div>
		</ThemeProvider>
	)
}

export default App
