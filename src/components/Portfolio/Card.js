import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Icon } from '@blueprintjs/core'
import PropTypes from 'prop-types'
import { Typography } from '../primitives'
import { /*ThemeProvider,*/ CardContext } from '../../Layout'

const CardContainer = styled.div`
  display:flex;
  flex-direction: column;
	padding: 0.8rem;
	transition: opacity, 0.2s;
	opacity: ${props => props.opac};
	a {
		text-decoration: none;
	}

`
const Item = styled.div`
	background-color: #fafafa;
	height: 14.3rem;
	width: 18.5rem;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ;
	@media (max-width: 992px) { 
		height: 12rem;
		width: 15rem;
 	}
	img {
		margin: 0.5rem;
		width:17.5rem;
		@media (max-width: 992px) { 
			width:14rem;
 		}
	}
	:hover{
		cursor: pointer;
	}
`

const Row = styled.div`
	display:flex;
	justify-content: center;
`
const CardText =  styled.div`
	display:flex;
	flex-direction: column;
	margin-left: 1rem;
`

const SubText = styled(Typography)`
  font-size: 17px;
	color:#000;
	@media (max-width: 992px) { 
			font-size:15.5px;
 	}
`
const Description = styled(Typography)`
  font-size: 14px;
  color:#000;
	margin-top: 0.1rem;
	text-decoration: none;
	@media (max-width: 992px) { 
			font-size:13px;
 	}
`
const Chevy = styled.div`
	margin: auto;
	transition: opacity, margin-right;
	transition-timing-function: ease-out;
	transition-duration: .4s;
	opacity: ${props => props.opac};
	margin-right: ${props => props.marginR};
`

const Pane2 = styled.div`
	transition: all .2s ease-in-out; 
	:hover{
		transform: scale(1.03); 
	}

`

const Card = (props) => {
	const { project, index, length } = props
	const { name, category, image, link } = project

	// const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const [activeCard, setActiveCard] = useContext(CardContext.Context)
	const [counter, setCounter] = useState(Math.round(length))
	const [opac, setOpac] = useState('0')
	const [marginR, setMarginR] = useState('0.5rem')
	// const [theme] = themeCtx

	const activate = activeCard === index || activeCard === null
	const chevronAnim = activate && activeCard !== null 

	useEffect(() => {
		const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
		return () => clearInterval(timer)
	}, [counter])

	useEffect(() => {
		if(chevronAnim){
			setMarginR('1.5rem') 
			setOpac('1')
		} else {	
			setMarginR('0.5rem') 
			setOpac('0')
		}
	}, [chevronAnim]) 

	// #C5CAD0
	return (
		<CardContainer opac={activate ? '1.0' : '1'} onMouseEnter={() => counter == 0 && setActiveCard(index)} onMouseLeave={() => setActiveCard(null)}>
			{/* <Link href={link}> */}
			<a href={link} target="_blank" rel="noreferrer">
				<Pane2 hoverElevation={2}>
					<Item>
						<Row>
							<img src={require(`../../assets/img/portfolio/${image}.png`)}/>
						</Row>
						<Row>
							<CardText>
								<SubText weight="light">{name}</SubText>
								<Description weight="thin">{category}</Description>
							</CardText>
							<Chevy marginR={marginR} opac={opac}>
								<Icon icon='chevron-right' color={'#C5CAD0'} iconSize={30}/>
							</Chevy>
						</Row>
					</Item>
				</Pane2>
			</a>
			{/* </Link> */}
		</CardContainer> 
	)
}

Card.propTypes = {
	project: PropTypes.object,
	index: PropTypes.any,
	length: PropTypes.number
}

export default Card