import React, { useContext } from 'react'
import styled from 'styled-components'
import { toaster, Heading, Pane, Text } from 'evergreen-ui'
import { Typography } from '../../components/primitives'
import { ThemeProvider } from '../../Layout'
import AboutMe from './AboutMe'


const Container = styled(Typography)`
  background-color: background: ${({theme}) => theme.grey_6};;
`


const AboutPage = () => {
  const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const [theme] = themeCtx

	return (
    <Container>
      <Pane background="#D2EEF3" height="45rem"><AboutMe/></Pane>
      <Pane background="#EAE7F8" height="35rem"></Pane>
      <Pane background="#FAE2E2" height="35rem"></Pane>
      <Pane background="#E4E7EB" height="35rem"></Pane>
    </Container>

	)
}

export default AboutPage
