import React, { useState } from 'react'
import styled from 'styled-components'
import { Avatar, Heading, Text, Pane, Position, Tooltip } from 'evergreen-ui'
import { Typography } from '../primitives'



const CardContainer = styled.div`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
  /* margin: 1rem 1rem; */
  background-color: transparent;
  border-radius: 0.8rem;
`
const Description = styled(Typography)`
  font-size: 18px;
  line-height:30px;
  color:#000;
`

const Card = (props) => {
	const { method } = props
	const { platform, color, text } = method

	return (
		<CardContainer>
			<Pane  display="flex" flexDirection="row" justifyContent="space-between" background="white">
				<Pane display="flex" flexDirection="row" marginY="0.5rem" >
					<Avatar src={require(`../../assets/img/contact/${platform}.png`)} name={platform} size={50} marginRight={'1rem'}/>
					<Pane marginY="auto">
						<Pane>
							<Description>{text}</Description>
						</Pane>
						{/* <Pane><Text size={300} marginLeft=".5rem">{text}</Text></Pane> */}
					</Pane>
				</Pane>
       
			</Pane>
		</CardContainer>
	)
}


export default Card
