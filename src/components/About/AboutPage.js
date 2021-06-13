import React from 'react'
import { useMediaQuery } from 'react-responsive'
import AboutMe from './AboutMe'
import CreateCoder from './CreatorCoder'
import RandomFacts from './RandomFacts'
import Skills from './Skills'


const AboutPage = () => {
	const isMobile = useMediaQuery({ maxWidth: 992 })
	return (
		<div>
			<AboutMe/>
			<CreateCoder/>
			<RandomFacts/>
			{ !isMobile && <Skills/> }
		</div>
	)
}

export default AboutPage
