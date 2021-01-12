import React from 'react'
import PropTypes from 'prop-types'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './client'
import ThemeController from '../Layout/ThemeController'

export const wrapRootElement = ({ element }) => (
	<ApolloProvider client={client}>
		<ThemeController>
			{element}
		</ThemeController>
	</ApolloProvider>
)

wrapRootElement.propTypes = {
	element: PropTypes.any
}