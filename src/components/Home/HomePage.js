import React from 'react'
import { Pane } from 'evergreen-ui'
import Home from './Home'
import Graphic from './Graphic'
import LatestWork from './LatestWork'



const AboutPage = () => {
	return (
		<Pane>
			<Graphic/>
			<LatestWork/>
		</Pane>
	)
}

export default AboutPage
