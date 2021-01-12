import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Pane, Spinner } from 'evergreen-ui'
import { Typography } from '../components/primitives'
import SEO from '../components/seo'
import Navbar from './Navbar'
import Footer from './Footer'
import { LoadingMessages } from '../../utils/models'

const Container = styled.div`
	background: ${({theme}) => theme.grey_6};
`

const Hero = styled.div`
  min-height: 20vh;
  align-content: center;
`

const ThemedSpinner = styled(Spinner)`
	&& {
		svg > circle {
			stroke: ${({theme}) => theme.white};
		}
	}
`

const _ = (props) => {
	const {
		navbar, footer, isLoading, loadingMessage, hero, breadcrumbs, content, title, error
	} = props
	return (
		<Container>
			<SEO title={title} />
			<div className="flex flex-col w-full h-screen content-between">
				{
					navbar
				}
				{ (hero && !error)
          && 
					<Hero className="grid grid-cols-1">{ hero }</Hero>
				}
				{
					(breadcrumbs && !error) && <>{ breadcrumbs }</>
				}
				<div className={`flex flex-grow isLoading ${isLoading ? 'items-center justify-center' : ''}`}>
					{
						(isLoading && !error)
							&& <Pane display="flex" flexDirection="column" alignItems="center">
								<ThemedSpinner/>
								<Pane marginY="1rem">
									<Typography variant="body">
										{
											loadingMessage
                    || LoadingMessages[Math.floor(Math.random() * LoadingMessages.length)]
										}
									</Typography>
								</Pane>
							</Pane>
					}
					{
						(content && !isLoading && !error)
						&& <div className="flex grid grid-cols-1 w-full">
							{
								content
							}
						</div>
					}
					{ error
						&& 
						<Pane display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%">
							<Typography variant="h1" weight="black" className="m-0">{error.networkError.statusCode}</Typography>
							<Typography variant="h3">{error.name}</Typography>
							<Typography variant="body" className="p-5 text-center">
								Uh-oh, something just isn&apos;t right... 🤔</Typography>
						</Pane>
					}
				</div>
				{
					footer
				}
			</div>
		</Container>
	)
}

_.propTypes = {
	/** Optional custom navbar */
	navbar: PropTypes.object,
	/** Optional custom footer */
	footer: PropTypes.object,
	hero: PropTypes.object,
	content: PropTypes.node,
	title: PropTypes.string,
	/** Breadcrumbs to be displayed */
	breadcrumbs: PropTypes.object,
	/** Indicates whether the layout is loading */
	isLoading: PropTypes.bool,
	/** Message to display while loading.
   * If one is not provided, a random message will be generated */
	loadingMessage: PropTypes.string,
	error: PropTypes.object
}
_.defaultProps = {
	navbar: <Navbar/>,
	footer: <Footer/>,
	content: <div/>,
	isLoading: false
}

export default _
