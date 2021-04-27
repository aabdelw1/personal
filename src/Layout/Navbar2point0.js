import React, { useContext }from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Text, Avatar, Tooltip, Pane, Heading } from 'evergreen-ui'
import { ThemeToggle, Typography } from '../components/primitives'
import { ThemeProvider } from '../Layout'

const Container = styled.div`
	&& {
		/* mpadding:14rem; */
		box-shadow: ${({ boxshadow }) => boxshadow};
		background: ${({theme}) => theme.grey_6};
	}
`

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 .5rem rgba(35, 67, 97, 0.5);
  padding: 0.4rem 0;
`

const StyledUl = styled.ul`
  display: flex;
  margin-right: 1rem;
`

const StyledLi = styled.li`
  display: flex;
  margin: auto 2.5rem;
  margin-left: 0;
  a {
    text-decoration: none;
  }
  :nth-child(1) {
    margin-left: 0;
    margin-right: 0.75rem;
  }
`

const ThemedLink = styled(Link)`
  && {
    * {
      color: ${ ({theme}) => theme.grey_6 };
    }
  }
`

const Logo = styled.div`
  border-radius: .75rem;
  height: 3rem;
  width: 3rem;
  background-color: #f1f1f1;
  border: 3px dashed rgba(35, 67, 97, 0.5);
`

const NavbarLinks = [
	{ name: 'Gatsby', link: '/' , defualt: true},
	{ name: 'Home', link: '/home' },
	{ name: 'About', link: '/ammar' },
	{ name: 'Portfolio', link: '/portfolio'},
	{ name: 'Contact', link: '/contact'}
]

const _ = (
	{page, fixed, ...props}
) => {

	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const setTheme = themeCtx[1]

	return (
		<Container {...props}>
			<StyledNav>
				<StyledUl>
					<StyledLi>
						<Pane marginY="auto" marginLeft="4rem">
							<Typography>Insert Ammar Icon</Typography>
							{/* <img height="30" src="/static/att-globe.svg" /> */}
						</Pane>
					</StyledLi>
					{
						NavbarLinks.map((r, index) => {
							console.log(r.defualt)
							return (
								<StyledLi key={index}>
									<ThemedLink to={r.link}>
										<Pane marginY="auto" cursor="pointer" color="whte">
												<Heading>{r.name}</Heading>
											{/* { r.default ? 
												<Heading size={600} color={page === r.name ? '#234361' : 'rgba(35, 67, 97, 0.65)' }>{r.name}</Heading> : 
												<Heading color={ page === r.name ? '#234361' : 'rgba(35, 67, 97, 0.65)' } size={500}></Heading> 
											} */}
										</Pane>
									</ThemedLink>
								</StyledLi>
							)
						})
					}
				</StyledUl>
				<ThemeToggle className="ml-4" onChange={() => setTheme(lastThemeType => (
					lastThemeType === 'light' ? 'dark' : 'light'
				))} />
			</StyledNav>
		</Container>)
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
