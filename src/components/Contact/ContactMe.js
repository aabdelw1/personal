import React, { useContext, useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import { Typography } from '../primitives'
import { ThemeProvider } from '../../Layout'
import Card from './Card'
import { useInView } from 'react-intersection-observer'
import AmmarCoder  from '../../assets/img/home/creator_ammar3.png'

const Container = styled.div`
  max-height: 38rem;
  height: 38rem;
  box-shadow: 0 1px 6px #dddddd;
`

const MiddleConsole = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 65rem;
  max-width: 80rem;
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 0 2rem;
  @media (max-width: 992px) {
    width: unset;
    max-width: unset;
    flex-direction: column;
    align-items: center;
  }
`

const Column = styled.div`
  transition: margin-left, opacity, left;
  transition-duration: 0.7s;
  transition-delay: 0s;
  transition-timing-function: ease-out;
  display: flex;

  :first-of-type {
		align-items: center;

    width: 38%;
    margin-left: ${(props) => props.pos};
    opacity: ${(props) => props.opac};
  }
  :last-of-type {
    width: 62%;
		display:flex;
		align-items: flex-end;
    img {
      opacity: ${(props) => props.opac};
      left: ${(props) => props.pos};
      margin-left: ${(props) => props.pos};

      @media (max-width: 992px) {
        width: unset;
        margin-left: unset;
        align-items: unset;
      }
    }
  }
`

const AboutBlock = styled(Typography)`
  display: block !important;
  font-size: 70px !important;
  color: ${({ theme }) => theme.grey_6};
  color: #000000;
`
const SubText = styled(Typography)`
  font-size: 24px;
  margin: 20px 0 29px;
`

const Pane = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.flex};
`

const ContactMe = () => {
	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const [aboutPos, setAboutPos] = useState('30rem')
	const [picturePos, setPicturePos] = useState('4rem')
	const [opac, setOpac] = useState('0')
	const [ref, inView] = useInView()
	const isMobile = useMediaQuery({ maxWidth: 992 })
	const [theme] = themeCtx

	const methods = [
		{
			platform: 'github',
			color: '#132535',
			text: 'Check out my Github',
			link: 'https://github.com/aabdelw1',
		},
		{
			platform: 'instagram',
			color: '#C33F95',
			text: 'Follow me on Instagram',
			link: 'https://www.instagram.com/_ammarian/',
		},
		{
			platform: 'cssbattles',
			color: '#F35552',
			text: 'Friend me on CSSbattles',
			link: 'https://cssbattle.dev/player/ammar',
		},
		{
			platform: 'linkedinO',
			color: '#2F75AF',
			text: 'Connect on LinkedIn',
			link: 'https://www.linkedin.com/in/ammar-abdelwahed-b7148998/',
		},
	]

	useEffect(() => {
		if (inView) {
			setPicturePos('0rem')
			setAboutPos('0rem')
			setOpac('1')
		}
	}, [inView])

	return (
		<Container ref={ref}>
			<MiddleConsole>
				<Column pos={'-' + aboutPos} opac={opac}>
					<Pane flex={isMobile ? 'center' : 'flex-start'}>
						<AboutBlock weight="bold">Contact me</AboutBlock>
						<SubText>Let&#39;s talk about things</SubText>
						{methods.map((method, index) => {
							return <Card index={index} key={index} method={method}></Card>
						})}
					</Pane>
				</Column>
				{!isMobile && (
					<Column pos={aboutPos} opac={opac}>
						<img src={AmmarCoder} />
					</Column>
				)}
			</MiddleConsole>
		</Container>
	)
}

export default ContactMe
