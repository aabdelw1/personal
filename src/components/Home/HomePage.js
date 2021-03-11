import React from 'react'
import { Pane } from 'evergreen-ui'
import Home from './Home'
import LatestWork from './LatestWork'



const AboutPage = () => {
	return (
		<Pane>
			<Home/>
			<LatestWork/>
		</Pane>
	)
}

export default AboutPage
