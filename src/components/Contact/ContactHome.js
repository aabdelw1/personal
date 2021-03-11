import React, { useContext, useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { toaster, Heading, Pane, Text } from 'evergreen-ui'
import { Typography } from '../primitives'
import { ThemeProvider } from '../../Layout'
import AmmarAbout from '../../assets/img/ammar_about.png'
import useOnScreen from '../primitives/UseOnScreen'
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
	transition: margin-left, opacity;
	transition-duration: 0.6s;
	transition-delay: 0.5s;
	transition-timing-function: ease-out; 
  :first-of-type {
		margin-left: ${props => props.pos};
		opacity: ${props => props.opac};
    width: 38%;
    align-items: center;
    /* justify-content: flex-end; */
  }
  :last-of-type {

		margin-left: ${props => props.pos};
    width: 62%;
		align-items: center;
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

const ContactHome = () => {
	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const [aboutPos, setAboutPos] = useState('30rem')
	const [picturePos, setPicturePos] = useState('4rem')
	const [opac, setOpac] = useState('0')
	const [theme] = themeCtx
	const ref = useRef()
	const isVisible = useOnScreen(ref)

	const methods = [
		{
			platform: 'facebook',
			color: 'orange',
			text: 'Like me on Facebook'
		},
		{
			platform: 'instagram',
			color: 'orange',
			text: 'Follow me on Instagram'
		},
		{
			platform: 'cssbattles',
			color: 'orange',
			text: 'Friend me on CSSbattles'
		},
		{
			platform: 'linkedinO',
			color: 'orange',
			text: 'Connect on LinkedIn'

		}
	]



	useEffect(() => {
		if(isVisible){
			setPicturePos('0rem') 
			setAboutPos('0rem')
			setOpac('1')
		}
	}, [isVisible])

  
	return (
		<Container ref={ref}>
			<MiddleConsole>
				<Column>
					<Pane display="flex" flexDirection="column">
						<AboutBlock weight="bold">contact me</AboutBlock>
						<SubText>Let&#39;s talk about things</SubText>
						{
							methods.map((method, index) => {
								return (<Card index={index} method={method}></Card>)
							})
						}

						{/* <Description weight="thin">I take pride in finding the best intuitive designs and making it better. When I&quot;m not coding, graming, or swearing at my computer, you&apos;ll find me cooking, yoga-ing, or shopping at Costco.</Description> */}
					</Pane>
				</Column>
				<Column>
				</Column>
			</MiddleConsole>

  
		</Container>
	)
}

export default ContactHome