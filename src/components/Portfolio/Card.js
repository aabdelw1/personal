import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'evergreen-ui'
// import Link from 'next/link'

import { toaster, Heading, Pane, Text, ProjectsIcon } from 'evergreen-ui'
import { Typography } from '../primitives'
import { ThemeProvider } from '../../Layout'

const CardContainer = styled.div`
  display:flex;
  flex-direction: column;
	padding: 0.8rem;
	a {
		text-decoration: none;

	}

`
const Item = styled.div`
	background-color: #fafafa;
	height: 14.3rem;
	width: 18.5rem;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ;

	img {
		margin: 0.5rem;
		width:17.5rem;
	}
	:hover{
		cursor: pointer;
	}
`

const SubText = styled(Typography)`
  font-size: 17px;
	color:#000;



`

const Description = styled(Typography)`
  font-size: 14px;
  color:#000;
	margin-top: 0.1rem;
	text-decoration: none;

`

const Card = (props) => {
	const { project, index } = props
	const { name, category, image, link } = project

	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const [theme] = themeCtx

	const toogleRouter = () => {

	}
	console.log(link)


	return (
		<CardContainer onClick={toogleRouter()}>
			<Link href={link}>
				<Pane hoverElevation={2}>
					<Item>
						<Pane display="flex" justifyContent="center">
							<img src={require(`../../assets/img/portfolio/${image}.png`)}/>
			  		</Pane>
						<Pane marginLeft={'1rem'}  display="flex" flexDirection="column">
							<SubText weight="light">{name}</SubText>
							<Description weight="thin">	{category}</Description>
						</Pane>
					</Item>
				</Pane>
			</Link>
		</CardContainer> 
	)
}

export default Card