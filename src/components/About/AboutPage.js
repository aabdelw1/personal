import React, { useContext } from 'react'
import styled from 'styled-components'
import { toaster, Heading, Pane, Text } from 'evergreen-ui'
import { Typography } from '../../components/primitives'
import { ThemeProvider } from '../../Layout'
import AboutMe from './AboutMe'


const AboutPage = () => {
	return (
    <Pane>
      <Pane height="45rem"><AboutMe/></Pane>
      <Pane background="#EAE7F8" height="35rem"></Pane>
      <Pane background="#FAE2E2" height="35rem"></Pane>
      <Pane background="#E4E7EB" height="35rem"></Pane>
    </Pane>

	)
}

export default AboutPage
