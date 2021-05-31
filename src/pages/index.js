import React from 'react'

import HomePage from '../components/Home/HomePage'
import { Layout } from '../Layout'

const IndexPage = () => (
	<Layout
		title="Home"
		content={<HomePage/>}
	/>
)

export default IndexPage
