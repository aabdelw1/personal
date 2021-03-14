import React, { useContext, useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { toaster, Heading, Pane, Text } from 'evergreen-ui'
import { Typography } from '../primitives'
import { ThemeProvider } from '../../Layout'
import AmmarAbout from '../../assets/img/ammar_about.png'
import Card from './Card'


const methods = ['facebook', 'instagram', 'cssbattles', 'linkedin']

const Container = styled.div`
  max-height: 38rem;
  height:38rem;
	box-shadow: 0 1px 6px #dddddd;
`

const MiddleConsole = styled.div`
  margin-left: auto;
  margin-right: auto;
  width:65rem;
	max-width: 80rem;
	display:flex;
	justify-content:center;
	height:100%;
`

const Column = styled.div`
  display:flex;
	align-items: center;

  :first-of-type {
    width: 38%;
  }
  :last-of-type {
    width: 62%;
		justify-content: center;
  }
`

const AboutBlock = styled(Typography)`
  display:block !important;
  font-size: 70px !important;
  color: ${({theme}) => theme.grey_6};;
  color: #000000;
`
const SubText = styled(Typography)`
  font-size: 24px;
  margin: 20px 0 29px;
`

const ContactMe = () => {
	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const [aboutPos, setAboutPos] = useState('30rem')
	const [picturePos, setPicturePos] = useState('4rem')
	const [opac, setOpac] = useState('0')
	const [theme] = themeCtx


	const methods = [
		{
			platform: 'facebook',
			color: '#325291',
			text: 'Like me on Facebook',
			link: 'https://www.facebook.com/ammar.s.nasr'
		},
		{
			platform: 'instagram',
			color: '#C33F95',
			text: 'Follow me on Instagram',
			link: 'https://www.instagram.com/_ammarian/'
		},
		{
			platform: 'cssbattles',
			color: '#F35552',
			// color: '#D95988'
			text: 'Friend me on CSSbattles',
			link: 'https://cssbattle.dev/player/ammar'
		},
		{
			platform: 'linkedinO',
			color: '#2F75AF',
			text: 'Connect on LinkedIn',
			link: 'https://www.linkedin.com/in/ammar-abdelwahed-b7148998/'

		}
	]



	useEffect(() => {
		if(true){
			setPicturePos('0rem') 
			setAboutPos('0rem')
			setOpac('1')
		}
	}, [])

  
	return (
		<Container>
			<MiddleConsole>
				<Column>
					<Pane display="flex" flexDirection="column">
						<AboutBlock weight="bold">Contact me</AboutBlock>
						<SubText>Let&#39;s talk about things</SubText>
						{
							methods.map((method, index) => {
								return (<Card index={index} key={index} method={method}></Card>)
							})
						}
					</Pane>
				</Column>
				<Column>
					Cool Graphic Coming Soon
				</Column>
			</MiddleConsole>
		</Container>
	)
}

export default ContactMe