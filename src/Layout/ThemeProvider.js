import React, { createContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

const ThemedStyles = {
	dark: {
		name: 'dark',
		//System Colors
		blue: 'rgb(10,32,255)',
		green: 'rgb(48,209,88)',
		indigo: 'rgb(94,92,230)',
		orange: 'rgb(255,159,10)',
		pink: 'rgb(255,55,95)',
		purple: 'rgb(191,90,242)',
		red: 'rgb(255,69,58)',
		teal: 'rgb(100,210,255)',
		yellow: 'rgb(255,214,10)',
		white: 'rgb(242,242,247)',
		black: 'rgb(28,28,30)',
		trueWhite: 'rgb(255,255,255)',
		trueBlack: 'rgb(0,0,0)',
		//System Grays
		grey: 'rgb(142,142,147)',
		grey2: 'rgb(99,99,102)',
		grey_3: 'rgb(72,72,74)',
		grey_4: 'rgb(58,58,60)',
		grey_5: 'rgb(44,44,46)',
		grey_6: 'rgb(28,28,30)',
		//Dynamic Colors - Your color pallette goes here
		
	},
	light: {
		name: 'light',
		//System Colors
		blue: 'rgb(0,122,255)',
		green: 'rgb(52,199,89)',
		indigo: 'rgb(88,86,214)',
		orange: 'rgb(255,149,0)',
		pink: 'rgb(255,45,85)',
		purple: 'rgb(175,82,222)',
		red: 'rgb(255,59,48)',
		teal: 'rgb(90,200,250)',
		yellow: 'rgb(255,204,0)',
		white: 'rgb(242,242,247)',
		black: 'rgb(28,28,30)',
		trueWhite: 'rgb(255,255,255)',
		trueBlack: 'rgb(0,0,0)',
		//System Grays
		grey: 'rgb(142,142,147)',
		grey_2: 'rgb(174,174,178)',
		grey_3: 'rgb(199,199,204)',
		grey_4: 'rgb(209,209,214)',
		grey_5: 'rgb(229,229,234)',
		grey_6: 'rgb(242,242,247)',
		//Dynamic Colors - Your color pallette goes here

	},
}


const Context = createContext({})

const Provider = ({ children }) => {
	const [theme, setTheme] = useState('dark')

	return (
		<Context.Provider value={{theme: [theme, setTheme]}}>
			<ThemeProvider theme={ThemedStyles[theme]}>
				{children}
			</ThemeProvider>
		</Context.Provider>
	)
}
Provider.propTypes = {
	children: PropTypes.any
}

export default { Context, Provider}
