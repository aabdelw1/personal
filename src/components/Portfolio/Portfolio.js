import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { /*ThemeProvider,*/ CardContext } from '../../Layout'
import Card from './Card'
import { useInView } from 'react-intersection-observer'
import AmmarMinimal from '../../assets/img/ammar-minimal.png'

const Container = styled.div`
  display: flex;
  margin-top: 3rem;
`
const MiddleConsole = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 62rem;
  max-width: 62rem;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  /* margin-bottom: 1rem; */
  @media (max-width: 992px) {
    justify-content: center;
  }
`

const CardAnim = styled.div`
  opacity: ${props => props.opac};
  transition: margin-top, opacity;
  transition-duration: 0.2s;
  transition-delay: ${props => props.time};
  transition-timing-function: ease-in;
`

const UnderContruction = styled.div`
  margin: auto;
  padding: 10px;
  display: flex;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  :first-of-type {
    img {
      height: 10rem;
      @media (max-width: 992px) {
        height: unset;
        width: 15rem;
      }
    }
  }
  :last-of-type {
    width: 15rem;
    justify-content: center;
  }
`

const Heading = styled.div`
  font-size: 25px;
  margin-bottom: 0.5rem;
  font-weight: 500;
`

const BodyText = styled.div`
  font-size: 19px;
  font-weight: 300;
`

const Portfolio = () => {
	// const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const [, setActiveCard] = useContext(CardContext.Context)
	const [opac, setOpac] = useState('0')
	const [ref, inView] = useInView()

	useEffect(() => {
		if (inView) {
			setOpac('1')
		}
	}, [inView])

	const cardInfo = [
		{
			name: 'This Website',
			category: 'Frontend Web app',
			image: 'ammar',
			link: 'https://github.com/aabdelw1/personal'
		},
		{
			name: 'Kalman Filter',
			category: 'AI for Robotics',
			image: 'rocket',
			link: 'https://github.com/aabdelw1/asteroids'
		},
		{
			name: 'Ingies Animal Shelter',
			category: 'Full Stack Web App',
			image: 'dog',
			link: 'https://github.com/aabdelw1/Animal-Shelter-Dashboard'
		},
		{
			name: 'Indicator Evaluation',
			category: 'Machine Learning',
			image: 'stocks',
			link: ''
		},
		{
			name: 'Solid Fee Calculator',
			category: 'Frontend Web app',
			image: 'items',
			link: 'https://github.com/aabdelw1/solid-fee-calculator'
		},
		{
			name: 'Delta Debug',
			category: 'Software Analysis',
			image: 'delta',
			link: ''
		},
		{
			name: 'Marta Simulator',
			category: 'Java Program',
			image: 'bus',
			link: 'https://github.com/aabdelw1/MartaSimulation'
		},
		{
			name: 'DSA Key Recovery',
			category: 'Applied Cryptography',
			image: 'lock',
			link: 'https://github.com/aabdelw1/dsa-key-recovery'
		},
		{
			name: 'Length Extenstion Attack',
			category: 'Applied Cryptography',
			image: 'hash',
			link: 'https://github.com/aabdelw1/length-extension-attack'
		}
	]

	return (
		<Container ref={ref}>
			{/* <MiddleConsole onMouseLeave={() => setActiveCard(null)}>
				{
					cardInfo.map((project, i) => {
						const time = ((i + 0.5) * 0.25).toString() + 's'
						return <CardAnim key={i} time={time} opac={opac}><Card project={project} index={i} length={(cardInfo.length + 0.5) * 0.25}/></CardAnim>
					})
				}
			</MiddleConsole> */}

			<UnderContruction>
				<Row>
					<img src={AmmarMinimal} />
				</Row>
				<Row>
					<Heading>Oh hello there!</Heading>
					<BodyText>
            This page is currently going through a phase. Come back soon!
					</BodyText>
				</Row>
			</UnderContruction>
		</Container>
	)
}

export default Portfolio
