import React from 'react'

import Home from '../components/Home/HomePage'
import { Layout } from '../Layout'

const IndexPage = () => (
	<Layout
		title="Home"
		content={<Home/>}
	/>
)

export default IndexPage
