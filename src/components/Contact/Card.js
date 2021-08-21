import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Typography } from '../primitives'

const CardContainer = styled.div`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
  background-color: transparent;
  border-radius: 0.8rem;
	transition: opacity 0.2s;
	a {
		text-decoration: none;
	}
	:hover{
		cursor: pointer;
		opacity: 0.6;
	}
`
const Description = styled(Typography)`
  font-size: 18px;
  line-height:30px;
  color:${props => props.color};
`
const Pane = styled.div`
	display: flex;
	margin: 0.5rem 0 0.5rem;
`

const Avatar = styled.div`
	img {
		vertical-align: middle;
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
	margin-right:1rem;
`

const Card = (props) => {
	const { method } = props
	const { platform, color, text, link } = method

	return (
		<CardContainer>
			<a href={link}>
				<Pane>
					<Avatar>	
						<img src={require(`../../assets/img/contact/${platform}.png`)} name={platform} marginRight={'1rem'}/>
					</Avatar>
					<div style={{'margin': 'auto 0'}}>
						<Description color={color}>{text}</Description>
					</div>
				</Pane>
			</a>
		</CardContainer>
	)
}
Card.propTypes = {
	method: PropTypes.object
}

export default Card
