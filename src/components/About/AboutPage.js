import React, { useContext } from 'react'
import styled from 'styled-components'
import { toaster, Heading, Pane, Text } from 'evergreen-ui'
import { Typography } from '../../components/primitives'
import { ThemeProvider } from '../../Layout'
import AboutMe2 from './AboutMe2'
import CreateCoder from './CreatorCoder'
import RandomFacts from './RandomFacts'


const AboutPage = () => {
	return (
		<Pane>
			<AboutMe2/>
			<CreateCoder/>
			<RandomFacts/>
		</Pane>
	)
}

export default AboutPage
