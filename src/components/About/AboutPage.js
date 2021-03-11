import React from 'react'
import { Pane } from 'evergreen-ui'
import AboutMe from './AboutMe'
import CreateCoder from './CreatorCoder'
import RandomFacts from './RandomFacts'
import Skills from './Skills'


const AboutPage = () => {
	return (
		<Pane>
			<AboutMe/>
			<CreateCoder/>
			<RandomFacts/>
			<Skills/>
		</Pane>
	)
}

export default AboutPage
