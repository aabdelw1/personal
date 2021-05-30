import React, { useContext } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { toaster, Heading, Pane, Text } from 'evergreen-ui'
import { Typography } from '../../components/primitives'
import { ThemeProvider, CardContext } from '../../Layout'
import Card from '../Portfolio/Card'


const Container = styled.div`
  max-height: 30rem;
  height:30rem;
	box-shadow: 0 2px 3px #dddddd;
  background-color: #fafafa;
  border-top: 2px solid #dddddd;
	@media (max-width: 992px) { 
		max-height: unset;
		height:unset;
		padding:3rem;
 	}
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
    
  }
`

const Column = styled.div`
  width:100%;
	/* @media (max-width: 992px) { 
			width:unset;
  	} */
  :first-of-type{
    border-bottom:1px solid #dddddd;
		margin-left:3rem;
  }
  :nth-of-type(2){
    display:flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom:-0.5rem;
    /* width: 50rem; */
		@media (max-width: 850px) { 
			width:80rem;
			font-size: 13px;
			text-align: center;
  	} 
	}
  :last-of-type{
    border-bottom:1px solid #dddddd;
		margin-right:3rem;
  }
`


const LatestWork = () => {
	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const [activeCard, setActiveCard] = useContext(CardContext.Context)
	const isTablet = useMediaQuery({ maxWidth: 992 })

	const [theme] = themeCtx

	const cardInfo = [
		{
			name: 'Kalman Filter',
			category: 'AI for Robotics',
			image: 'rocket',
			link: 'https://github.com/aabdelw1/asteroids'
		},{
			name: 'Ingies Animal Shelter',
			category: 'Full Stack Web App',
			image: 'dog',
			link: 'https://github.com/aabdelw1/Animal-Shelter-Dashboard'
		},{
			name: 'DSA Key Recovery',
			category: 'Applied Cryptography',
			image: 'lock',
			link: 'https://github.com/aabdelw1/dsa-key-recovery'
		}
	]


	return (
		<Container>
			<MiddleConsole weight="normal">
				<Column/>
				<Column>SOME OF MY LATEST WORK</Column>
				<Column/>
			</MiddleConsole>
			<MiddleConsole  onMouseLeave={() => setActiveCard(null)}>
				<Pane marginTop="2rem" display="flex" flexWrap="wrap" justifyContent="center">
					{
						cardInfo.map((project, i) => {
					 return(	<Card project={project} index={i} key={i} length={(cardInfo.length + 0.5) * 0.25}/>)
						})
					}
				</Pane>
			</MiddleConsole>
		</Container> 
	)
}

export default LatestWork