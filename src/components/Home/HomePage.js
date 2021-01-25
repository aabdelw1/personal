import React, { useContext } from 'react'
import styled from 'styled-components'
import { toaster, Heading, Pane, Text, HomeIcon } from 'evergreen-ui'
import { Typography } from '../../components/primitives'
import { ThemeProvider } from '../../Layout'
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
