import React from 'react'
import PropTypes from 'prop-types'
import ThemeProvider from './ThemeProvider'
import CardContext from './CardContext'

const ThemeController = ({ children }) => (
	<ThemeProvider.Provider>
		<CardContext.Provider>
			{children}
		</CardContext.Provider>
	</ThemeProvider.Provider>
)

ThemeController.propTypes = {
	children: PropTypes.node.isRequired,
}

export default ThemeController
