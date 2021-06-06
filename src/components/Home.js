import React, { useContext } from 'react'
import styled from 'styled-components'
import  Link from 'gatsby-link'
import { Typography } from '../components/primitives'
import { ThemeProvider } from '../Layout'
import GatsbyIcon from '../assets/img/svgs/gatsby.svg'
import GraphQLIcon from '../assets/img/svgs/graphql.svg'
import ApolloIcon from '../assets/img/svgs/apollo.svg'
import ApolloLightIcon from '../assets/img/svgs/apollo-light.svg'

const HomePageWrapper = styled.div`
	height: 100%;
	display: flex;
	margin: 0 10%;
`

const MiddleConsole = styled.div`
  margin-left: auto;
  margin-right: auto;
  width:67rem;
	display:flex;
	justify-content: center;
	align-items: flex-start; 
	flex-direction: column;
	height:100%;
		@media (max-width: 992px) { 
			width:unset;
			max-width: unset;
] 	}

`
const StarterDescription = styled(Typography)`
	display:block !important;
	font-size:3rem;
	/* line-height: inherit !important; */
	width:100% !important;

	/* Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) { 
		width:50% !important;
 	}

	p:first-of-type {
		display: inline;
		color: rgba(109, 79, 152, .7) !important;
		font-weight: bold;
	}

	p:nth-of-type(2) {
		display: inline;
		color: rgba(239, 53, 171, .7) !important;
		font-weight: bold;
	}
`
const Icons = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin: 10px 0;
`
const Author = styled(Typography)`
	font-size: 24px;
	margin: 25px 0;

	a {
		font-size: 24px !important;
		color: inherit !important;
		/* text-decoration: none; */
	}
`
const Plus = styled(Typography)`
	&::after {
		content: '+';
		font-size: 16px;
		margin: 0 10px;
	}
`

const ThemedLink = styled(Link)`
	display:block !important;
	font-size:3rem;
	font-weight: 300;
	line-height: inherit !important;
	width:100% !important;
	color: #7599E3;
	font-weight: bold;
`

export const Home = () => {
	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const [theme] = themeCtx

	return (
		<HomePageWrapper>
			<MiddleConsole>
				<StarterDescription weight="light">
					An opinionated <p>gatsby starter</p> with <p>apollo graphql</p> integration. <ThemedLink to='/home'>Lets Go!! </ThemedLink>
					<div>
						<Author>created by Ammar</Author>
					</div>
				</StarterDescription>
				<Icons>
					<GatsbyIcon height={36} />
					<Plus />
					<GraphQLIcon height={36} />
					<Plus />
					{theme === 'dark' ? <ApolloIcon height={36} /> : <ApolloLightIcon height={36}/>}
				</Icons>
			</MiddleConsole>
		</HomePageWrapper>
	)
}

export default Home
