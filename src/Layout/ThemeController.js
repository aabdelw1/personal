import React from 'react'
import PropTypes from 'prop-types'
import ThemeProvider from './ThemeProvider'

const ThemeController = ({ children }) => (
	<ThemeProvider.Provider>
		{children}
	</ThemeProvider.Provider>
)

ThemeController.propTypes = {
	children: PropTypes.node.isRequired,
}

export default ThemeController
