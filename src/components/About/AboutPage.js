import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Pane } from 'evergreen-ui'
import AboutMe from './AboutMe'
import CreateCoder from './CreatorCoder'
import RandomFacts from './RandomFacts'
import Skills from './Skills'


const AboutPage = () => {
	const isMobile = useMediaQuery({ maxWidth: 992 })
	return (
		<Pane>
			<AboutMe/>
			<CreateCoder/>
			<RandomFacts/>
			{ !isMobile && <Skills/> }
		</Pane>
	)
}

export default AboutPage
