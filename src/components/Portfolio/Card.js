import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, ChevronRightIcon } from 'evergreen-ui'
import PropTypes from 'prop-types'
import { Pane } from 'evergreen-ui'
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


	return (
		<CardContainer opac={activate ? '1.0' : '1'} onMouseEnter={() => counter == 0 && setActiveCard(index)} onMouseLeave={() => setActiveCard(null)}>
			<Link href={link}>
				<Pane hoverElevation={2}>
					<Item>
						<Pane display="flex" justifyContent="center">
							<img src={require(`../../assets/img/portfolio/${image}.png`)}/>
						</Pane>
						<Pane display="flex" justifyContent="space-between">
							<Pane marginLeft={'1rem'}  display="flex" flexDirection="column">
								<SubText weight="light">{name}</SubText>
								<Description weight="thin">{category}</Description>
							</Pane>
							<Chevy marginR={marginR} opac={opac}>
								<ChevronRightIcon color="disabled" size={30}/> 
							</Chevy>
						</Pane>
					</Item>
				</Pane>
			</Link>
		</CardContainer> 
	)
}

Card.propTypes = {
	project: PropTypes.object,
	index: PropTypes.any,
	length: PropTypes.number
}

export default Card