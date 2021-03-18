import React, { useContext } from 'react'
import useMouse from '@react-hook/mouse-position'
import styled from 'styled-components'
import { ThemeProvider, CardContext } from '../../Layout'
import Card from './Card'

const Container = styled.div`
  display: flex;
  margin-top:3rem;
`
const MiddleConsole = styled.div`
  margin-left: auto;
  margin-right: auto;
  width:62rem;
	max-width: 62rem;
	display:flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
`

const Portfolio = () => {
	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const [, setActiveCard] = useContext(CardContext.Context)

	const cardInfo = [
		{
			name: 'Astroids',
			category: 'AI for Robotics',
			image: 'rocket',
			link: 'https://github.com/aabdelw1/asteroids'
		},{
			name: 'Ingies Animal Shelter',
			category: 'Full Stack Web App',
			image: 'dog',
			link: ''
			
		},{
			name: 'Indicator Evaluation',
			category: 'Machine Learning',
			image: 'stocks',
			link: ''
		},{
			name: 'Solid Fee Calculator',
			category: 'Frontend Web app',
			image: 'items',
			link: 'https://github.com/aabdelw1/solid-fee-calculator'
		},{
			name: 'Delta Debug',
			category: 'Software Analysis',
			image: 'delta',
			link: ''
		},{
			name: 'Marta Simulator',
			category: 'Java Program',
			image: 'bus',
			link: 'https://github.com/aabdelw1/MartaSimulation'
		}
	]

	return (
		<Container>
			<MiddleConsole onMouseLeave={() => setActiveCard(null)}>
				{
					cardInfo.map((project, i) => {
						return <Card project={project} index={i} key={i}/>
					})
				}
			</MiddleConsole>
		</Container>
	)
}

export default Portfolio