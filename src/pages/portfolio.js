import React from 'react'
import { Layout } from '../Layout'
import Portfolio from '../components/Portfolio/Portfolio'

const PortfolioPage = () => {
	return (
		<Layout
			title="Portfolio"
			content={<Portfolio/>}
		/>
	)
}

export default PortfolioPage
