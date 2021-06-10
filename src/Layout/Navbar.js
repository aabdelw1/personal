import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import  Link from 'gatsby-link'
import { Navbar, Alignment } from '@blueprintjs/core'
import { Pane } from 'evergreen-ui'
import { ThemeToggle, Typography } from '../components/primitives'
import { ThemeProvider } from '../Layout'
import { useMediaQuery } from 'react-responsive'


const Container = styled(Navbar)`
	&& {
		/* mpadding:14rem; */
		box-shadow: ${({ boxshadow }) => boxshadow};
		/* background: ${({theme}) => theme.grey_6}; */
		background:black;
		padding: 1.2rem 2rem 4rem ;		
		/* padding: 3rem; */
	}
`
const MiddleConsole = styled.div`
	margin-left: auto;
	margin-right: auto;
	width:70rem;
	display:flex;
	justify-content: space-between;
	display:flex;
	/* background-color: orange; */
	@media (max-width: 1140px) { 
			width:unset;
 		}
`

const NavLinks = styled.div`
	display: flex;
	/* margin-bottom: auto; */
	a{
		text-decoration: none;
	}
`

const ThemedLink = styled(Link)`
	transition: opacity 0.1s;
	&& {
		* {
			/* color: ${({theme}) => theme.grey}; */
		color: white;
		font-size: 18px;
		margin-left:1rem;
		}
	} 
	:hover{
		opacity: 0.5;
	}
`
const ThemedName = styled(Link)`
	transition: opacity 0.1s;
	:hover{
		opacity: 0.5;
	}
`



const NavbarLinks = [
	{ name: 'Home', link: '/' },
	{ name: 'About', link: '/about' },
	{ name: 'Portfolio', link: '/portfolio'},
	{ name: 'Resume', link: 'https://read.cv/aabdelw1'},
	{ name: 'Contact', link: '/contact'}
]

const _ = ({
	page, fixed, ...props
}) => {

	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	// const setTheme = themeCtx[1]
	const isTablet = useMediaQuery({ maxWidth: 992 })
	console.log(page)
	return (
		<Container {...props} fixedToTop={fixed}>
			<MiddleConsole>
				<Navbar.Group align={Alignment.LEFT} >
					<Pane marginLeft="2rem">
						<ThemedName to='/home'>
							<Typography>Ammar Abdelwahed</Typography>
						</ThemedName>
					</Pane>
				</Navbar.Group>
				<Navbar.Group align={Alignment.RIGHT} className="pl-4">
					<Pane paddingX="1rem" marginRight={isTablet ? '0rem' : '2rem'}>
						<NavLinks>
							{
								NavbarLinks.map(({ name, link }, i) => (
									<ThemedLink key={i} to={link}>
										<Typography className="px-2" weight={page === name ? 'bold' : 'normal'}>
											{ name }
										</Typography>
									</ThemedLink>
								))
							}
						</NavLinks>
					</Pane>
					{/* <ThemeToggle className="ml-4" onChange={() => setTheme(lastThemeType => (
					lastThemeType === 'light' ? 'dark' : 'light'
				))} /> */}
				</Navbar.Group>
			</MiddleConsole>
		</Container>
	)
}
_.propTypes = {
	page: PropTypes.string,
	/** Specifies whether positioning should be fixed or relative */
	fixed: PropTypes.bool,
	background: PropTypes.string,
	boxshadow: PropTypes.string
}
_.defaultProps = {
	background: '#FFF',
	boxshadow: '0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.1);'
}

export default _
