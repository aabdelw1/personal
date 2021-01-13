import React, { useContext } from 'react'
import styled from 'styled-components'
import { toaster, Heading, Pane, Text } from 'evergreen-ui'
import { Typography } from '../../components/primitives'

const EditorContainer = styled.div`
  display: flex;
  flex: 1;
`

const PageWrapper = styled.div`
  /* height: 100%; */
	display: flex;
	/* flex-direction: column; */
	justify-content: center;
	align-items: center;
	/* margin: 0 10% */
`

const AboutBlock = styled(Typography)`
  display:block !important;
  font-size: 4rem !important;
  margin-top: 3rem;
  /* font-weight: bold; */
  color: #000000;

  /* background-color: #D9822B; */

  /* Medium devices (tablets, 768px and up) */
	/* @media (min-width: 768px) { 
		width:50% !important;
 	} */

  p:first-of-type {
    display: inline;
    font-size: 1rem !important;
  }

`
const SubText = styled(Typography)`
  font-size: 24px;
  margin: 25px 0;
`

const Description = styled(Typography)`
	font-size: 18px;
	/* margin: 25px 0; */
  /* background-color: #FAE3CD; */

/* 
	a {
		font-size: 24px !important;
		color: inherit !important;
		text-decoration: none;
	} */
`

const AboutMe = () => {
  return (
  <Pane background="tint1" height={'45rem'} borderBottom="default" elevation={1} clearfix>
{/*     <Pane display="flex" alignItems="center" justifyContent="center" borderBottom="default"> */}
    <PageWrapper>
      <Pane display="flex" flexDirection="column" marginRight="5rem" width="25rem">
          <AboutBlock weight="normal">about me </AboutBlock>
          <SubText>I'm a software engineer based in cowboy country Dallas, Texas</SubText>
          <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam </Description>
      </Pane>
      <Pane display="flex" alignItems="center" flexDirection="column" background="#234361">Hello</Pane>
{/*     </Pane> */}
    </PageWrapper>
  <Pane display="flex" alignItems="center" justifyContent="center">
  <Pane
    elevation={0}
    float="left"
    backgroundColor="white"
    width={200}
    height={120}
    margin={24}
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
  >
    <Text>Elevation 0</Text>
    <Text size={300}>Flat Panes</Text>
  </Pane>
  <Pane
    elevation={1}
    float="left"
    width={200}
    height={120}
    margin={24}
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
  >
    <Text>Elevation 1</Text>
    <Text size={300}>Floating Panes</Text>
  </Pane>
  <Pane
    elevation={2}
    float="left"
    width={200}
    height={120}
    margin={24}
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
  >
    <Text>Elevation 2</Text>
    <Text size={300}>Popovers and Dropdowns</Text>
  </Pane>
  <Pane
    elevation={3}
    float="left"
    width={200}
    height={120}
    margin={24}
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
  >
    <Text>Elevation 3</Text>
    <Text size={300}>Toasts</Text>
  </Pane>
  <Pane
    elevation={4}
    float="left"
    width={200}
    height={120}
    margin={24}
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
  >
    <Text>Elevation 4</Text>
    <Text size={300}>Dialog</Text>
  </Pane>
  </Pane>
</Pane> 
  )
}

export default AboutMe