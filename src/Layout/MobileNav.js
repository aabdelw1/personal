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
	transition: top .3s 0s ease-out;
	display: flex;
	list-style: none;
	background-color: ${({theme}) => theme.grey_6};
	width: 100%;
	flex-direction: column;
	position: absolute;
	margin-left:-2rem;
	margin-right:-4rem;
	top: ${props => props.pos};
	/* right: 0; */
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

	const [isOpen, setOpen] = useState(false)
	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const setTheme = themeCtx[1]
	
	return (
		<Container {...props} fixedToTop={fixed}>
			<Navbar.Group align={Alignment.LEFT} className="pl-10">
				<Pane paddingX=".5rem" marginLeft='-3rem'>
					<ThemedName to='/home'>
						<Typography>Ammar Abdelwahed</Typography>
					</ThemedName>
				</Pane>
			</Navbar.Group>
			<Navbar.Group align={Alignment.RIGHT} className="pl-4">
				<MenuIcon color={isOpen ? '#878787': 'white'} size={30} onClick={() => setOpen(!isOpen)}/>
			</Navbar.Group>
			{ 
				<NavLinks pos={isOpen ? '80px' : '-300px'}>
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
