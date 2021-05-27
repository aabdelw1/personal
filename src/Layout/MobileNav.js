import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import  Link from 'gatsby-link'
import { Navbar, Alignment, Menu } from '@blueprintjs/core'
import { Pane, MenuIcon } from 'evergreen-ui'
import { ThemeToggle, Typography } from '../components/primitives'
import { ThemeProvider } from '../Layout'
import { MenuToggle } from './MenuToggle'

const Container = styled(Navbar)`
	&& {
		/* mpadding:14rem; */
		box-shadow: ${({ boxshadow }) => boxshadow};
		/* background: ${({theme}) => theme.grey_6}; */
		background: black;
		padding: 1.2rem 2rem 4rem ;		
		/* padding: 3rem; */

	}
`

const NavLinks = styled.ul`
	margin: 0;
	display: flex;
	/* height: 100%; */
	list-style: none;
	background-color: ${({theme}) => theme.grey_6};
	width: 100%;
	align-items:center;
	flex-direction: column;
	position: fixed;
	top: 80px;
	right: 0;
	a{
		text-decoration: none;
	}
`
const LinkRow = styled.li`
	padding:1rem;
	border-bottom: 0.1px solid #878787;
	width:100%;
	display:flex;
	align-items:center;
	justify-content:center;
`

const ThemedLink = styled(Link)`
	transition: opacity 0.1s;
	&& {
		* {
			/* color: ${({theme}) => theme.grey}; */
		color: #FEFEFE;
		font-size: 20px;
		margin-left:1rem;
		}
	} 
	:hover{
		opacity: 0.5;
	}
`


const NavbarLinks = [
	{ name: 'Gatsby', link: '/' },
	{ name: 'Home', link: '/home' },
	{ name: 'About', link: '/ammar' },
	{ name: 'Portfolio', link: '/portfolio'},
	{ name: 'Contact', link: '/contact'}
]

const _ = ({
	page, fixed, ...props
}) => {

	const [isOpen, setOpen] = useState(false)

	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const setTheme = themeCtx[1]
	
	return (
		<Container {...props} fixedToTop={fixed}>
			<Navbar.Group align={Alignment.LEFT} className="pl-10">
				<Pane paddingX=".5rem">
					<Typography >Ammar Abdelwahed</Typography>
				</Pane>
			</Navbar.Group>
			<Navbar.Group align={Alignment.RIGHT} className="pl-4">
				{/* <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)}/> */}
				<MenuIcon color={isOpen ? '#878787': 'white'} size={30} onClick={() => setOpen(!isOpen)}/>
				{ isOpen && 
					<NavLinks>
						{
							NavbarLinks.map(({ name, link }, i) => (
								<LinkRow key={i}>
									<ThemedLink to={link}>
										<Typography className="px-2" weight={page === name ? 'bold' : 'normal'}>
											{ name }
										</Typography>
									</ThemedLink>
								</LinkRow>
							))
						}
					</NavLinks>
				}
				{/* <ThemeToggle className="ml-4" onChange={() => setTheme(lastThemeType => (
					lastThemeType === 'light' ? 'dark' : 'light'
				))} /> */}
			</Navbar.Group>
			
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
