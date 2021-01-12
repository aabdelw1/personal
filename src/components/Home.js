import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'evergreen-ui'
import { Typography } from '../components/primitives'
import { ThemeProvider } from '../Layout'
import GatsbyIcon from '../assets/img/svgs/gatsby.svg'
import GraphQLIcon from '../assets/img/svgs/graphql.svg'
import ApolloIcon from '../assets/img/svgs/apollo.svg'
import ApolloLightIcon from '../assets/img/svgs/apollo-light.svg'

const HomePageWrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	margin: 0 10%;
`
const StarterDescription = styled(Typography)`
	display:block !important;
	font-size:3rem !important;
	line-height: inherit !important;
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
		text-decoration: none;
	}
`
const Plus = styled(Typography)`
	&::after {
		content: '+';
		font-size: 16px;
		margin: 0 10px;
	}
`

export const Home = () => {
	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const [theme] = themeCtx

	return (
		<HomePageWrapper>
			<StarterDescription weight="light">
					An opinionated <p>gatsby starter</p> with <p>apollo graphql</p> integration. Happy coding! 
				<div>
					<Author>created by <Link href="https://topedaramola.com">toped</Link></Author>
				</div>
			</StarterDescription>
			<Icons>
				<GatsbyIcon height={36} />
				<Plus />
				<GraphQLIcon height={36} />
				<Plus />
				{theme === 'light' ? <ApolloIcon height={36} /> : <ApolloLightIcon height={36}/>}
			</Icons>
		</HomePageWrapper>
	)
}

export default Home
