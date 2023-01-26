import React from 'react'
import styled from 'styled-components'
import HomeText from './HomeText'
import Graphic from './Graphic'
import LatestWork from './LatestWork'

const Container = styled.div`
	position: relative;
`
const Box = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`
const Overlay = styled.div`
	  z-index: 9;
`

const AboutPage = () => {
	return (
		<>
			<div>
				<Container>
					<Box><Graphic/></Box>
					<Overlay><HomeText/></Overlay>
				</Container>
				<LatestWork/>
			</div>
		</>
	)
}

export default AboutPage
