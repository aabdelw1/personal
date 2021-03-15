import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Avatar, Pane, Link} from 'evergreen-ui'
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

const Card = (props) => {
	const { method } = props
	const { platform, color, text, link } = method

	return (
		<CardContainer>
			<Link href={link}>
				<Pane display="flex" flexDirection="row">
					<Pane display="flex" marginY="0.5rem">
						<Avatar src={require(`../../assets/img/contact/${platform}.png`)} name={platform} size={50} marginRight={'1rem'}/>
						<Pane marginY="auto">
							<Pane>
								<Description color={color}>{text}</Description>
							</Pane>
						</Pane>
					</Pane>
				</Pane>
			</Link>
		</CardContainer>
	)
}
Card.propTypes = {
	method: PropTypes.object
}

export default Card
