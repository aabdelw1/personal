import React from 'react'

import Home from '../components/Home'
import { Layout } from '../Layout'

const IndexPage = () => (
	<Layout
		title="Home"
		content={<Home/>}
	/>
)

export default IndexPage
