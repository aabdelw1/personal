import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import  Link from 'gatsby-link'
import { Navbar, Alignment } from '@blueprintjs/core'
import { Pane } from 'evergreen-ui'
import { ThemeToggle, Typography } from '../components/primitives'
import { ThemeProvider } from '../Layout'

const Container = styled(Navbar)`
	&& {
		box-shadow: ${({ boxshadow }) => boxshadow};
		background: ${({theme}) => theme.grey_6};
	}
`

const NavLinks = styled.div`
	display: flex;
`

const ThemedLink = styled(Link)`
	&& {
		* {
			color: ${({theme}) => theme.grey};
		}
	}
`

const NavbarLinks = [
	{ name: 'Home', link: '/' },
	{ name: 'Example API', link: '/examples' }
]

const _ = ({
	page, fixed, ...props
}) => {

	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const setTheme = themeCtx[1]
	
	return (
		<Container {...props} fixedToTop={fixed}>
			<Navbar.Group align={Alignment.LEFT} className="pl-10">
				<Pane paddingX=".5rem">
					<Typography>GatsbyJS Template</Typography>
				</Pane>
			</Navbar.Group>
			<Navbar.Group align={Alignment.RIGHT} className="pl-4">
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
				<ThemeToggle className="ml-4" onChange={() => setTheme(lastThemeType => (
					lastThemeType === 'light' ? 'dark' : 'light'
				))} />
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
