import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
// import { Pane } from 'evergreen-ui'
import { Typography } from '../../components/primitives'
import { ThemeProvider, CardContext } from '../../Layout'
import { useInView } from 'react-intersection-observer'
import Card from '../Portfolio/Card'


const Container = styled.div`
  max-height: 30rem;
	box-shadow: 0 2px 3px #dddddd;
  background-color: #fafafa;
  border-top: 2px solid #dddddd;
	@media (max-width: 992px) { 
		max-height: unset;
		height:unset;
		padding:3rem;
 	}
`

const AnimationBox = styled.div`
	margin-top: ${props => props.pos};
	opacity: ${props => props.opac};
	transition: margin-top, opacity;
	transition-duration: 0.6s;
	transition-delay: ${props => props.mobile};
`
const MiddleConsole = styled(Typography)`
  margin-left: auto;
  margin-right: auto;
  width:65rem;
	max-width: 80rem;
	display:flex;
	justify-content:center;
	height:100%;
	@media (max-width: 992px) { 
			width:unset;
			max-width: unset;
 	}
  :first-of-type {
		@media (max-width: 992px) { 
			margin-top:-2rem;
 	}
    height: 4rem;
  }
  :last-of-type {
    height: 82%;
    justify-content: center;
		margin-bottom: 3rem;
  }
`

const Column = styled.div`
  width:100%;
  :first-of-type{
    border-bottom:1px solid #dddddd;
  }
  :nth-of-type(2){
		
    display:flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom:-0.5rem;
		@media (max-width: 850px) { 
			width:80rem;
			font-size: 13px;
			text-align: center;
			margin-left:1rem;
			margin-right:1rem;
  	} 
	}
  :last-of-type{
    border-bottom:1px solid #dddddd;
  }
`

const Pane = styled.div`
	margin-top:2rem; 
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
`


const LatestWork = () => {
	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const [activeCard, setActiveCard] = useContext(CardContext.Context)
	const [containerOffset, setContainerOffset] = useState('10rem')
	const [opac, setOpac] = useState('0')
	const isMobile = useMediaQuery({ maxWidth: 992 })
	const [ref, inView] = useInView()

	const [theme] = themeCtx

	const cardInfo = [
		{
			name: 'Marta Simulator',
			category: 'Java Program',
			image: 'bus',
			link: 'https://github.com/aabdelw1/MartaSimulation'
		},{
			name: 'Ingies Animal Shelter',
			category: 'Full Stack Web App',
			image: 'dog',
			link: 'https://github.com/aabdelw1/Animal-Shelter-Dashboard'
		},{
			name: 'Length Extenstion Attack',
			category: 'Applied Cryptography',
			image: 'hash',
			link: 'https://github.com/aabdelw1/length-extension-attack'
		}
	]

	useEffect(() => {
		if(inView){
			setContainerOffset('0rem') 
			setOpac('1')
		}
	}, [inView])
  


	return (
		<Container>
			<AnimationBox ref={ref} pos={containerOffset} opac={opac} mobile={isMobile ? '0.3s' : '1s'}>
				<MiddleConsole weight="normal">
					<Column/> 
					<Column>SOME OF MY LATEST WORK</Column>
					<Column/>
				</MiddleConsole>
				<MiddleConsole  onMouseLeave={() => setActiveCard(null)}>
					<Pane>
						{
							cardInfo.map((project, i) => {
								return(	<Card project={project} index={i} key={i} length={(cardInfo.length + 0.5) * 0.25}/>)
							})
						}
					</Pane>
				</MiddleConsole>
			</AnimationBox>
		</Container> 
	)
}

export default LatestWork